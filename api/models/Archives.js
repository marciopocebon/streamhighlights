const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArchivesSchema = new Schema({
  archiveId: {
    type: Number,
    required: true
  },
  userId: {
    type: Number,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    required: true
  },
  publishedAt: {
    type: Date,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  thumbnailURL: {
    type: String,
    required: false
  },
  viewCount: {
    type: Number,
    required: false
  },
  language: {
    type: String,
    required: false
  },
  duration: {
    type: String,
    required: false
  }
});

const Archives = mongoose.model("archives", ArchivesSchema);

module.exports = Archives;
