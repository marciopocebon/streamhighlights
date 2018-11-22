const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const config = {
  // Tell webpack the root file of our client app
  entry: "./src/client/client.js",
  // Tell webpack where to put the output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  plugins: [new CompressionPlugin({ cache: true })],
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       cache: true,
  //       parallel: true,
  //       test: /\.js$|\.css$|\.html$/,
  //     })
  //   ]
  // }
};

module.exports = merge(baseConfig, config);
