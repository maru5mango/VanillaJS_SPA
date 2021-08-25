const HtmlwebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { resolve } = require("path");

// html-webpack-plugin : output html
// mini-css-extract-plugin: output css
// clean-webpack-plugin: build(dist)
module.exports = {
  entry: {
    router: "./src/router.js",
    app: "./src/main.js",
  },
  output: {
    path: resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlwebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "app.css" }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
