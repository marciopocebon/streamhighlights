const routes = require("express").Router();
const streamers = require("./streamers");
const activity = require("./activity");
const clips = require("./clips");
const archives = require("./archives");
const games = require("./games");

routes.use("/streamers", streamers);
routes.use("/activity", activity);
routes.use("/clips", clips);
routes.use("/archives", archives);
routes.use("/games", games);

module.exports = routes;
