const clips = require("express").Router();
const Streamers = require("../../models/Streamers");
const Clips = require("../../models/Clips");
const Games = require("../../models/Games");
var dateFiltering = require("../../utils/filtering/dateFiltering");

// GET By Archive Id
clips.get("/archive/:archiveId", function(req, res) {
  var page = req.query.page;
  var archiveId = req.params.archiveId;
  Clips.aggregate([
    {
      $match: {
        videoId: { $eq: parseInt(archiveId) }
      }
    },
    {
      $lookup: {
        from: "games",
        localField: "gameId",
        foreignField: "gameId",
        as: "game"
      }
    },
    { $unwind: "$game" }
  ])
    .sort({ created_at: -1 })
    .skip(page * 8)
    .limit(8)
    .then(clips => {
      return res.json({
        clips
      });
    });
});

// GET By Streamer Id
clips.get("/:streamerId", function(req, res) {
  var page = req.query.page;
  var game = req.query.game;
  var title = req.query.title;
  var automatic = req.query.automatic;
  var streamerId = req.params.streamerId;

  // Time filtering
  var lowerBound = dateFiltering.getLowerBound(req.query.time);
  var upperBound = dateFiltering.getUpperBound(req.query.time);

  console.log(lowerBound)
  console.log(upperBound)
  
  Streamers.findOne({ streamerId: streamerId }).then(streamer => {
    Clips.aggregate([
      {
        $match: {
          channelId: { $eq: parseInt(streamerId) },
          title: { $regex: new RegExp(title ? title : ""), $options: "i" },
          automatic:
            parseInt(automatic) === 1
              ? { $eq: true }
              : parseInt(automatic) === 0
                ? { $eq: false }
                : { $in: [true, false, undefined] },
          created_at: {
            $gte: lowerBound,
            $lte: upperBound
          }
        }
      },
      {
        $lookup: {
          from: "games",
          localField: "gameId",
          foreignField: "gameId",
          as: "game"
        }
      },
      { $unwind: "$game" },
      {
        $match: {
          "game.name": { $regex: new RegExp(game ? game : ""), $options: "i" }
        }
      },
      {
        $lookup: {
          from: "archives",
          localField: "videoId",
          foreignField: "archiveId",
          as: "archive"
        }
      }
    ])
      .sort({ viewCount: -1, created_at: -1 })
      .skip(page * 11)
      .limit(11)
      .then(clips => {
        return res.json({
          streamer,
          clips
        });
      });
  });
});

clips.get("/game/:gameId", function(req, res) {
  var page = req.query.page;
  var streamer = req.query.streamer;
  var title = req.query.title;
  var automatic = req.query.automatic;
  var gameId = req.params.gameId;
  Games.findOne({ gameId: gameId }).then(game => {
    console.log("found " + game);
    Clips.aggregate([
      {
        $match: {
          gameId: { $eq: parseInt(gameId) },
          title: { $regex: new RegExp(title ? title : ""), $options: "i" },
          automatic:
            parseInt(automatic) === 1
              ? { $eq: true }
              : parseInt(automatic) === 0
                ? { $eq: false }
                : { $in: [true, false, undefined] }
        }
      },
      {
        $lookup: {
          from: "streamers",
          localField: "channelId",
          foreignField: "streamerId",
          as: "streamer"
        }
      },
      { $unwind: "$streamer" },
      {
        $match: {
          "streamer.login": {
            $regex: new RegExp(streamer ? streamer : ""),
            $options: "i"
          }
        }
      },
      {
        $lookup: {
          from: "archives",
          localField: "videoId",
          foreignField: "archiveId",
          as: "archive"
        }
      }
    ])
      .sort({ created_at: -1 })
      .skip(page * 11)
      .limit(11)
      .then(clips => {
        return res.json({
          game,
          clips
        });
      });
  });
});

module.exports = clips;
