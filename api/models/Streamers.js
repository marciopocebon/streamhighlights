const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StreamersSchema = new Schema(
  {
    streamerId: {
      type: Number,
      required: true
    },
    login: {
      type: String,
      required: false
    },
    displayName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    profileImageURL: {
      type: String,
      required: false
    },
    language: {
      type: String,
      required: false
    },
    monitored: {
      type: Boolean,
      required: true,
      default: false
    },
    inspected: {
      type: Boolean,
      required: true
    },
    broadcasterType: {
      type: String,
      required: false,
      default: ""
    },
    numberOfClips: {
      type: Number,
      required: false,
      default: 0
    },
    numberOfArchives: {
      type: Number,
      required: false,
      default: 0
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

const Streamers = mongoose.model("streamers", StreamersSchema);

module.exports = Streamers;
