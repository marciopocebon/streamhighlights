const creds = require("../config/auth");
const config = require("../config/db.js");
const axios = require("axios");
const mongoose = require("mongoose");
const Influx = require("influx");
const express = require("express");
const TwitchBot = require("twitch-bot");
const Streamers = require("../models/Streamers");
const cron = require("node-cron");

// Service that connects to live chats and sends data to time series database.
// Runs on port 3002
const PORT = process.env.PORT || 3002;
const app = express();

// Twitch instances initialization
const instance = axios.create({
  baseURL: "https://api.twitch.tv/helix",
  headers: { "Client-ID": creds.clientId, Authorization: creds.auth }
});

// Express server initializing
app.listen(PORT, () => {
  console.log(`AutoClipper Emitter running on port ${PORT}`);
});

// Endpoint to ping with monitoring tools
app.get("/up", function(req, res) {
  res.sendStatus(200);
});

// Database initialization
mongoose
  .connect(
    config.db,
    { useNewUrlParser: true }
  )
  .then(
    () => {
      console.log("Database is connected");
    },
    err => {
      console.log("Can not connect to the database" + err);
    }
  );

// Time Series Database Initialization
const influx = new Influx.InfluxDB({
  host: "localhost",
  database: "twitch"
});

// Bot initialization
const Bot = new TwitchBot({
  username: "chichirac",
  oauth: `oauth:${creds.auth}`
});

let streamsTracked = [];

cron.schedule("0 */40 * * * *", () => {
  console.log("Auto Clipper is restarting");
  restart();
});

var restart = function() {
  disconnect().then(function() {
    connect();
  });
};

// Disconnecting from any actual stream if any
var disconnect = function() {
  return new Promise(function(resolve, reject) {
    streamsTracked.forEach((channel, index) => {
      Bot.part(channel);
      streamsTracked.splice(index, 1);
    });
    return resolve();
  });
};

// Connect to the top 30 streams on Twitch.
var connect = function() {
  instance
    .get("/streams?first=40")
    .then(function(response) {
      instance
        .get(
          "/users?" +
            response.data.data
              .map(stream => {
                return "id=" + stream.user_id + "&";
              })
              .join("")
        )
        .then(function(userResponse) {
          unmonitorCurrentStreamers()
            .then(function(response) {
              userResponse.data.data.forEach(user => {
                // Joining the stream with the bot.
                Bot.join(user.login);
                streamsTracked.push(user.login);
                // Updating existing streamers and adding new ones.
                upsertStreamers(user);
              });
            })
            .catch(function(error) {
              console.log(error);
            });
        });
    })
    .catch(function(error) {
      console.log(error);
    });
};

connect();

// Unmonitor current streamers
var unmonitorCurrentStreamers = function() {
  return new Promise(function(resolve, reject) {
    Streamers.updateMany({ monitored: true }, { monitored: false }, function(
      err,
      numAffected
    ) {
      if (err) {
        return reject("I could not update the monitored streamers");
      }
      return resolve(
        numAffected + " monitored streamers have been unmonitored"
      );
    });
  });
};

// Upserting streamers, updating streamers collection and inserting new ones.
function upsertStreamers(user) {
  Streamers.findOneAndUpdate(
    { streamerId: user.id },
    {
      login: user.login,
      displayName: user.display_name,
      description: user.description,
      profileImageURL: user.profile_image_url,
      broadcasterType: user.broadcaster_type,
      monitored: true
    },
    { upsert: true },
    function(err, doc) {
      if (err) {
        console.log(
          "I could not add this streamer : " +
            user.login +
            " Had this error : " +
            err
        );
      }
    }
  );
}

// Chat bot settings
Bot.on("join", channel => {
  console.log(`Joined channel: ${channel}`);
});

Bot.on("error", err => {
  // This error needs to be logged into a logging system.
  console.log(err);
  // Restarting our services.
  restart();
});

Bot.on("message", chatter => {
  influx.writePoints(
    [
      {
        measurement: "live_messages",
        fields: { entry: 1 },
        tags: {
          channelId: chatter.room_id,
          channel: chatter.channel
        }
      }
    ],
    {
      retentionPolicy: "one_hour"
    }
  );
});
