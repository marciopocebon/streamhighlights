// This is the boilerplate for the renderer server part of our app.
import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import Routes from "./client/routes";
import proxy from "express-http-proxy";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(
  "/api",
  proxy("http://localhost:3001", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    }
  })
);
app.use(express.static("public"));

app.get("/streamer/:id", (req, res) => {
  renderContent(req, res);
});

app.get("/streamers/page/:id", (req, res) => {
  renderContent(req, res);
});

app.get("/session/:id", (req, res) => {
  renderContent(req, res);
});

app.get("/game/:id", (req, res) => {
  renderContent(req, res);
});

app.get("*", (req, res) => {
  renderContent(req, res);
});

function renderContent(req, res) {
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData
        ? route.loadData(store, { id: req.params.id || null })
        : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
}

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
