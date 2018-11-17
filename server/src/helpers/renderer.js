import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import Routes from "../client/routes";
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
    <html>
        <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css">
          <link rel="stylesheet" href="/assets/style.css">
        </head>
        <body>
            <div id="root">${content}</div>
            <script>window.INITIAL_STATE = ${serialize(
              store.getState()
            )}</script>
            <script src="/bundle.js"></script>
            <script>
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-125805120-2', 'auto');
              ga('send', 'pageview');
            </script>
        </body>
    </html>
  `;
};
