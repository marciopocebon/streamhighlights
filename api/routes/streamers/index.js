const streamers = require("express").Router();
const Streamers = require("../../models/Streamers");

// Streamers endpoint
streamers.get("/", function(req, res) {
  var page = req.query.page;
  var q = req.query.q;
  Streamers.aggregate([
    {
      $match: {
        displayName: {
          $regex: new RegExp(q ? q.toLowerCase() : ""),
          $options: "i"
        }
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
    .then(streamers => {
      return res.json({
        streamers
      });
    });
});

module.exports = streamers;
