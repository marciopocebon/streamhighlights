const activity = require("express").Router();
const Clips = require("../../models/Clips");

activity.get("/latest", function(req, res) {
  var page = req.query.page;
  Clips.aggregate([
    {
      $sort: { created_at: -1 }
    },
    {
      $lookup: {
        from: "streamers",
        localField: "channelId",
        foreignField: "streamerId",
        as: "channelId"
      }
    },
    {
      $unwind: "$channelId"
    },
    {
      $lookup: {
        from: "games",
        localField: "gameId",
        foreignField: "gameId",
        as: "gameId"
      }
    }
  ])
    .skip(page * 6)
    .limit(6)
    .then(clips => {
      return res.json({
        clips
      });
    });
});

module.exports = activity;
