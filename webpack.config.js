const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: {
    "pixi-learn-2": ["./pixi-learn-2/pixi-learn-2.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/build/",
    filename: "bundle.js"
  },
  plugins: [
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      title: 'pixi',
      filename: 'index.html',
      template: './pixi-learn-1/index.html'
    })
  ],
  devtool: false,
};