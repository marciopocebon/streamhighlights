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
