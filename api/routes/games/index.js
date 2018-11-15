const games = require("express").Router();
const Games = require("../../models/Games");

// Games endpoint
games.get("/", function(req, res) {
  var page = req.query.page;
  var q = req.query.q;
  Games.aggregate([
    {
      $match: {
        name: { $regex: new RegExp(q ? q.toLowerCase() : ""), $options: "i" }
      }
    },
    {
      $lookup: {
        from: "clips",
        localField: "gameId",
        foreignField: "gameId",
        as: "clips"
      }
    },
    { $unwind: "$clips" },
    {
      $group: {
        _id: "$_id",
        gameId: { $first: "$gameId" },
        name: { $first: "$name" },
        boxArtURL: { $first: "$boxArtURL" },
        numberOfClips: { $sum: 1 }
      }
    },
    {
      $sort: {
        numberOfClips: -1
      }
    }
  ])
    .skip(page * 24)
    .limit(24)
    .then(games => {
      return res.json({
        games
      });
    });
});

module.exports = games;
