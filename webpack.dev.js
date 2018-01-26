const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const htmlPath = path.resolve(fs.realpathSync(process.cwd()), 'public/index.html');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    inline: true,
    port: 8080,
    // stats: 'errors-only'
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    compress: true,
    hot: true,
    // historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: htmlPath,
    }),
  ],
  stats: {
    hash: false,
    version: false,
    timings: false,
    assets: false,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: true,
    errorDetails: false,
    warnings: true,
    publicPath: false
  }
};


