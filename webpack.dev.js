const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dev/'),
    port: 5000,
    publicPath: 'http://localhost:5000/dist',
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      title: 'Development Mode',
      template: path.resolve(__dirname, 'src/_index.html'),
      filename: path.resolve(__dirname, 'dev/index.html')
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
});
