const archives = require("express").Router();
const Archives = require("../../models/Archives");
const Clips = require("../../models/Clips");

archives.get("/streamer/:streamerId", function(req, res) {
  var page = req.query.page;
  var streamerId = req.params.streamerId;
  Archives.aggregate([
    { $match: { userId: { $eq: parseInt(streamerId) } } },
    {
      $lookup: {
        from: "clips",
        localField: "archiveId",
        foreignField: "videoId",
        as: "clips"
      }
    },
    { $unwind: "$clips" },
    {
      $group: {
        _id: "$_id",
        archiveId: { $first: "$archiveId" },
        userId: { $first: "$userId" },
        userName: { $first: "$userName" },
        title: { $first: "$title" },
        description: { $first: "$description" },
        createdAt: { $first: "$createdAt" },
        publishedAt: { $first: "$publishedAt" },
        url: { $first: "$url" },
        thumbnailURL: { $first: "$thumbnailURL" },
        viewCount: { $first: "$viewCount" },
        language: { $first: "$language" },
        duration: { $first: "$duration" },
        numberOfClips: { $sum: 1 }
      }
    }
  ])
    .sort({ publishedAt: -1 })
    .skip(page * 11)
    .limit(11)
    .then(archives => {
      return res.json({
        archives
      });
    });
});

archives.get("/:archiveId", function(req, res) {
  var page = req.query.page;
  var archiveId = req.params.archiveId;
  Archives.findOne({ archiveId: archiveId }).then(archive => {
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
      .sort({ created_at: 1 })
      .skip(page * 7)
      .limit(7)
      .then(clips => {
        return res.json({
          archives: [{ archive }]
        });
      });
  });
});

module.exports = archives;
