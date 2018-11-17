const Games = require("../models/Games");
const Streamers = require("../models/Streamers");
const Clips = require("../models/Clips");
const Archives = require("../models/Archives");
const cron = require("node-cron");
const mongoose = require("mongoose");
const config = require("../config/db.js");
const creds = require("../config/auth");
const axios = require("axios");
var startOfDay = require("date-fns/start_of_day");
var subDays = require("date-fns/sub_days");
// Service that retrieves the best clips for inspected streamers every day.

// Database initialization
mongoose
  .connect(
    config.db,
    { useNewUrlParser: true }
  )
  .then(
    () => {
      console.log("User clips service connected to the database");
    },
    err => {
      console.log(
        "User clips service could not connect to the database " + err
      );
    }
  );

// Twitch instance initialization
const instance = axios.create({
  baseURL: "https://api.twitch.tv/helix",
  headers: { "Client-ID": creds.clientId, Authorization: creds.auth }
});

let games = [];
let archives = [];

cron.schedule("00 00 09 * * *", () => {
  Games.find({}).then(results => (games = results));
});

// If the clip is not already stored, add it to the database, otherwise skip it.
cron.schedule("*/5 * * * * *", () => {
  var currentDate = new Date();
  var startOfYesterday = startOfDay(subDays(currentDate, 1));
  var startOfToday = startOfDay(currentDate);
  const game = games.shift();
  if (game) {
    console.log("I am currently inspecting " + game.name);
    instance
      .get(
        `/clips?game_id=${
          game.gameId
        }&started_at=${startOfYesterday.toISOString()}&ended_at=${startOfToday.toISOString()}&first=100`
      )
      .then(function(response) {
        if (response.data.data) {
          const clips = response.data.data;
          addClips(clips);
          updateUsers(clips);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
});

var addClips = function(clips) {
  // Computing the max score for those clips
  const maxViews = Math.max.apply(null, clips.map(e => e.view_count));
  clips.forEach(clip => {
    // Adding the clip if not already existing
    Clips.findOne({ clipId: clip.id }, function(err, existingClip) {
      if (!existingClip) {
        const newClip = new Clips({
          channel: clip.broadcaster_name,
          channelId: clip.broadcaster_id,
          videoId: clip.video_id,
          clipId: clip.id,
          clipURL: clip.url,
          embedClipURL: clip.embed_url,
          gameId: clip.game_id,
          language: clip.language,
          title: clip.title,
          thumbnailURL: clip.thumbnail_url,
          creatorId: clip.creator_id,
          creatorName: clip.creator_name,
          score:
            (clip.view_count * 5) / maxViews < 1
              ? 1
              : (clip.view_count * 5) / maxViews,
          automatic: false,
          viewCount: clip.view_count,
          created_at: clip.created_at
        });
        newClip.save(function(err, results) {
          incrementUserClips(clip.broadcaster_id);
          // Needs to be a flag in the DB
          archives.push(clip.video_id);
        });
      }
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

var updateUsers = function(clips) {
  instance
    .get(
      "/users?" +
        clips
          .map(clip => {
            return "id=" + clip.broadcaster_id + "&";
          })
          .join("")
    )
    .then(function(userResponse) {
      userResponse.data.data.forEach(user => {
        // Updating existing streamers and adding new ones.
        upsertStreamers(user);
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
      broadcasterType: user.broadcaster_type
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

// Every 5 seconds, go into the archives queue and see if we have it already or not.
// cron.schedule("*/10 * * * * *", () => {
//   const archiveId = archives.shift();
//   if (archiveId) {
//     Archives.findOne({ archiveId: archiveId }, function(err, existingArchive) {
//       if (!existingArchive) {
//         instance
//           .get(`https://api.twitch.tv/helix/videos?id=${archiveId}`)
//           .then(function(response) {
//             const archiveResponse = response.data.data[0];
//             const archive = new Archives({
//               archiveId: archiveId,
//               userId: archiveResponse.user_id,
//               userName: archiveResponse.user_name,
//               title: archiveResponse.title,
//               description: archiveResponse.description,
//               createdAt: archiveResponse.created_at,
//               publishedAt: archiveResponse.published_at,
//               url: archiveResponse.url,
//               thumbnailURL: archiveResponse.thumbnail_url,
//               viewCount: archiveResponse.view_count,
//               language: archiveResponse.language,
//               duration: archiveResponse.duration
//             });
//             archive.save(function(err, results) {
//               if (!err) {
//                 console.log("I added a new video to the database " + archiveId);
//               } else {
//                 console.log(err);
//               }
//             });
//           });
//       }
//     });
//   }
// });
