const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    inline: true,
    port: 8086,
    // stats: 'errors-only'
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    compress: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
  ],
  stats: {
    hash: true,
    version: true,
    timings: true,
    assets: true,
    chunks: true,
    modules: true,
    reasons: true,
    children: true,
    source: true,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: true
  }
};


