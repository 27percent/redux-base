// 3rd Party Modules
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const fs = require('fs');
const path = require('path');
const htmlPath = path.resolve(fs.realpathSync(process.cwd()), 'public/index.html');

module.exports = {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: htmlPath,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    })
  ]
};
