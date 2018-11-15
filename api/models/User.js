const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  twitchId: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false
  },
  thumbnailURL: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
