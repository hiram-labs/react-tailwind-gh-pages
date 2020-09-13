const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'docs/'),
    filename: '[name].bundle.js'
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: pkg.name,
      template: path.resolve(__dirname, 'src/_index.html')
    })
  ]
});
