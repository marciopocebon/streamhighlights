const creds = require("../config/auth");
const config = require("../config/db.js");
const axios = require("axios");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const Streamers = require("../models/Streamers");
const Archives = require("../models/Archives");
const Games = require("../models/Games");
const Clips = require("../models/Clips");
const cron = require("node-cron");
// Service creating clips directly from live streaming
// Runs on port 3003
// Receiving alerts from stream engine and processing the results.

const PORT = process.env.PORT || 3003;
const app = express();

// Express server initializing
app.listen(PORT, () => {
  console.log(`AutoClipper Receiver running on port ${PORT}`);
});
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use(express.urlencoded());

// Twitch Auth Instance
const instance = axios.create({
  baseURL: "https://api.twitch.tv/helix",
  headers: { "Client-ID": creds.clientId, Authorization: creds.auth }
});

const authInstance = axios.create({
  baseURL: "https://id.twitch.tv/oauth2"
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

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

var refreshToken = function() {
  return new Promise(function(resolve, reject) {
    authInstance
      .post(
        `/token?grant_type=refresh_token&scope=clips:edit&client_secret=${
          creds.clientSecret
        }&client_id=${creds.clientId}&refresh_token=${creds.refreshToken}`
      )
      .then(function(response) {
        console.log("Got a token : " + response.data.access_token);
        resolve(response.data.access_token);
      })
      .catch(function(error) {
        console.log(error);
        reject("Something bad happened " + error);
      });
  });
};

var clientInstance;
var refreshInstance = function() {
  return new Promise(function(resolve, reject) {
    refreshToken()
      .then(function(token) {
        clientInstance = axios.create({
          baseURL: "https://api.twitch.tv/helix",
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log("refresh instance " + token);
        resolve(token);
      })
      .catch(function(err) {
        console.log(err);
        reject();
      });
  });
};

// Defining the refresh token cron
refreshInstance();
cron.schedule("0 0 */2 * * *", () => {
  refreshInstance()
    .then(function(token) {
      console.log("Created new instance : " + token);
    })
    .catch(function(err) {
      console.log("Could not create the new instance");
    });
});

// Alerts received from Kapacitor endpoint
app.post("/alerts", function(req, res) {
  console.log("I received an alert from Kapacitor");
  const body = req.body;
  const tags = body && body.series && body.series[0].tags;
  const score =
    body &&
    body.series &&
    body.series[0].values &&
    body.series[0].values[0][3] / body.series[0].values[0][1];
  saveClip(tags, score)
    .then(function(response) {
      res.send("Saved it");
    })
    .catch(function(err) {
      refreshToken().then(function(token) {
        clientInstance = axios.create({
          baseURL: "https://api.twitch.tv/helix",
          headers: { Authorization: `Bearer ${token}` }
        });

        saveClip(tags)
          .then(function(response) {
            console.log("Clip saved");
          })
          .catch(function(err) {
            console.log("Clip not saved");
          });
      });
    });
});

var saveClip = function(tags, score) {
  return new Promise(function(resolve, reject) {
    clientInstance
      .post(`/clips?broadcaster_id=${tags && tags.channelId}&has_delay=true`)
      .then(function(response) {
        const clipId = response.data.data[0].id;
        const clip = new Clips({
          channel: tags.channel,
          channelId: tags.channelId,
          clipId: clipId,
          score: score,
          created_at: new Date(),
          automatic: true
        });

        sleep(5000).then(function() {
          instance.get(`/clips?id=${clipId}`).then(function(response) {
            console.log(response.data);
            const clipDetails = response.data.data[0];
            clip.clipURL = clipDetails.url;
            clip.embedClipURL = clipDetails.embed_url;
            clip.gameId = clipDetails.game_id;
            clip.language = clipDetails.language;
            clip.title = clipDetails.title;
            clip.creatorId = 0;
            clip.viewCount = clipDetails.view_count;
            clip.creatorName = "autoclip";
            clip.thumbnailURL = clipDetails.thumbnail_url;
            clip.save(function(err, results) {
              upsertGames(clip.gameId);
              incrementUserClips(tags.channelId);
              incrementGamesClips(clip.gameId);
              console.log("A new clip was added to the database");
              resolve("A new clip was added to the database");
            });
          });
        });
      })
      .catch(function(error) {
        console.log("This was the error " + error);
        reject("An error occurred on the server side");
      });
  });
};

// Increment clip count for the streamer on save
function incrementUserClips(userId) {
  Streamers.updateOne(
    { streamerId: userId },
    {
      $inc: { numberOfClips: 1 }
    },
    {
      upsert: true
    },
    function(err, result) {
      if (!err) {
        "I increment the number of clips for " + userId;
      } else {
        console.log(err);
      }
    }
  );
}

// Increment clip count for the game
function incrementGamesClips(gameId) {
  Games.updateOne(
    { gameId: gameId },
    {
      $inc: { numberOfClips: 1 }
    },
    {
      upsert: true
    },
    function(err, result) {
      if (!err) {
        "I increment the number of clips for " + gameId;
      } else {
        console.log(err);
      }
    }
  );
}

function upsertGames(gameId) {
  instance
    .get("/games?id=" + gameId)
    .then(function(response) {
      const gameDetails = response.data.data[0];
      Games.findOneAndUpdate(
        { gameId: gameId },
        {
          name: gameDetails.name,
          boxArtURL: gameDetails.box_art_url
        },
        { upsert: true },
        function(err, doc) {
          if (err) {
            console.log(
              "I could not add this game : " +
                gameDetails.name +
                " Had this error : " +
                err
            );
          }
          console.log(
            "I added a new game to the database : " + gameDetails.name
          );
        }
      );
    })
    .catch(err => console.log("I could not find this game " + gameId));
}

// ******************************************************************
// Service that retrieves the clips and links them to a video archive
// ******************************************************************

// Upserting clips with video ids.

cron.schedule("*/30 * * * * *", () => {
  Clips.count({
    videoId: null,
    automatic: true,
    archiveRetries: { $ne: null, $lt: 5 }
  }).exec(function(err, count) {
    var random = Math.floor(Math.random() * count);
    console.log(count + " clips remaining");
    Clips.findOne({
      videoId: null,
      automatic: true,
      archiveRetries: { $ne: null, $lt: 5 }
    })
      .skip(random)
      .exec(function(err, doc) {
        if (doc) {
          console.log("Inspecting doc " + doc.clipId);
          instance
            .get(`https://api.twitch.tv/helix/clips?id=${doc.clipId}`)
            .then(function(response) {
              if (response.data.data && response.data.data[0]) {
                const videoId = response.data.data[0].video_id;
                // Updating the video id for the given clip
                if (videoId && videoId !== "") {
                  doc.videoId = videoId;
                  // Those conditions need to be removed in the future
                  if (!doc.score) {
                    doc.score = 1;
                  }
                  if (!doc.viewCount) {
                    doc.viewCount = 1;
                  }
                  doc.save(function(err, updatedDoc) {
                    if (err) {
                      console.log(
                        "Could not update the video id for this clip" + err
                      );
                    } else {
                      console.log("video is updated id: " + videoId);
                    }
                  });

                  // Adding the video clip if not available
                  Archives.findOne({ archiveId: videoId }, function(err, doc) {
                    if (err) {
                      console.log(
                        "Error retrieving the given archive " + videoId
                      );
                    }
                    if (!doc) {
                      instance
                        .get(`https://api.twitch.tv/helix/videos?id=${videoId}`)
                        .then(function(response) {
                          const archiveResponse = response.data.data[0];
                          const archive = new Archives({
                            archiveId: videoId,
                            userId: archiveResponse.user_id,
                            userName: archiveResponse.user_name,
                            title: archiveResponse.title,
                            description: archiveResponse.description,
                            createdAt: archiveResponse.created_at,
                            publishedAt: archiveResponse.published_at,
                            url: archiveResponse.url,
                            thumbnailURL: archiveResponse.thumbnail_url,
                            viewCount: archiveResponse.view_count,
                            language: archiveResponse.language,
                            duration: archiveResponse.duration
                          });
                          archive.save(function(err, results) {
                            if (!err) {
                              incrementUserArchives(archiveResponse.user_id);
                              console.log(
                                "I added a new video to the database " + videoId
                              );
                            } else {
                              console.log(err);
                            }
                          });
                        });
                    }
                  });
                } else {
                  console.log("I will increment.");
                  Clips.updateOne(
                    { clipId: doc.clipId },
                    {
                      $inc: { archiveRetries: 1 }
                    },
                    {
                      upsert: true
                    },
                    function(err, result) {
                      if (!err) {
                        "I increment the number of retries for " + doc.clipId;
                      } else {
                        console.log(err);
                      }
                    }
                  );
                }
              } else {
                console.log("no response");
              }
            });
        }
      });
  });
});

// Increment archive count for the streamer on save
function incrementUserArchives(userId) {
  Streamers.updateOne(
    { streamerId: userId },
    {
      $inc: { numberOfArchives: 1 }
    },
    {
      upsert: true
    },
    function(err, result) {
      if (!err) {
        "I increment the number of archives for " + userId;
      } else {
        console.log(err);
      }
    }
  );
}
