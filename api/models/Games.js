const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GamesSchema = new Schema(
  {
    gameId: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    boxArtURL: {
      type: String,
      required: false
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

const Games = mongoose.model("games", GamesSchema);

module.exports = Games;
