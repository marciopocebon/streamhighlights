const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClipsSchema = new Schema({
  channel: {
    type: String,
    required: true
  },
  channelId: {
    type: Number,
    required: true
  },
  videoId: {
    type: Number,
    required: false
  },
  clipId: {
    type: String,
    required: true
  },
  clipURL: {
    type: String,
    required: false
  },
  embedClipURL: {
    type: String,
    required: false
  },
  gameId: {
    type: Number,
    required: false
  },
  language: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  thumbnailURL: {
    type: String,
    required: false
  },
  creatorId: {
    type: Number,
    required: true
  },
  creatorName: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    required: true
  },
  viewCount: {
    type: Number,
    required: true
  },
  automatic: {
    type: Boolean,
    required: true
  },
  archiveRetries: {
    type: Number,
    required: false,
    default: 0
  }
});

const Clips = mongoose.model("clips", ClipsSchema);

module.exports = Clips;
