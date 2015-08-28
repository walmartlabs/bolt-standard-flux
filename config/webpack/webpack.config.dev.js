/**
 * Webpack dev configuration
 */
var path = require("path");
var webpack = require("webpack");
var base = require("./webpack.config");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  cache: true,
  context: base.context,
  entry: base.entry,
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "bundle.js",
    publicPath: "http://127.0.0.1:2992/js"
  },
  module: base.module,
  stylus: base.stylus,
  resolve: base.resolve,
  devtool: "eval-source-map",
  plugins: [
    new ExtractTextPlugin("style.css"),
    new webpack.NoErrorsPlugin()
  ]
};
