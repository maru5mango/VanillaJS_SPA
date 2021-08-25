const HtmlwebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const { resolve } = require("path");

// html-webpack-plugin : output html
// mini-css-extract-plugin: output css
// clean-webpack-plugin: build(dist)
module.exports = {
  context: resolve(__dirname, "./src"),
  entry: {
    router: "./router.js",
    main: "./main.js",
  },
  output: {
    path: resolve(__dirname, "./dist"),
    filename: "[name].js",
    clean: true,
    publicPath: "/static/",
  },
  plugins: [
    new HtmlwebpackPlugin({
      filename: "index.html",
      template: "index.html",
    }),
    new MiniCssExtractPlugin({
      linkType: false,
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"],
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "static", to: "static" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules",
        include: resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
