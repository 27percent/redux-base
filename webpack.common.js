const webpack = require('webpack');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|coverage|dist|target)/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      },
      { test: /\.svg$/, 
        loader: 'url-loader',
        include: [ path.resolve(__dirname, "public/fonts") ],
        options: {
          publicPath: '../',
          fallback: 'file-loader',
          limit: 65000, 
          mimetype: 'image/svg+xml',
          name: './fonts/[name].[ext]'
        }
      },
      { test: /\.woff$/, 
        loader: 'url-loader',
        include: [ path.resolve(__dirname, "public/fonts") ],
        options: {
          publicPath: '../',
          fallback: 'file-loader',
          limit: 65000, 
          mimetype: 'application/font-woff',
          name: './fonts/[name].[ext]'
        }
      },
      { test: /\.woff2$/, 
        loader: 'url-loader',
        include: [ path.resolve(__dirname, "public/fonts") ],
        options: {
          publicPath: '../',
          fallback: 'file-loader',
          limit: 65000, 
          mimetype: 'application/font-woff2',
          name: './fonts/[name].[ext]'
        }
      },
      { test: /\.[ot]tf$/, 
        loader: 'url-loader',
        include: [ path.resolve(__dirname, "public/fonts") ],
        options: {
          publicPath: '../',
          fallback: 'file-loader',
          limit: 65000, 
          mimetype: 'application/octet-stream',
          name: './fonts/[name].[ext]'
        }
      },
      { test: /\.eot$/, 
        loader: 'url-loader',
        include: [ path.resolve(__dirname, "public/fonts") ],
        options: {
          publicPath: '../',
          fallback: 'file-loader',
          limit: 65000, 
          mimetype: 'application/vnd.ms-fontobject',
          name: './fonts/[name].[ext]'
        }
      },
      // {
      //   test: /\.(svg)$/,
      //   use: [
      //     {
      //       loader: 'file-loader'
      //     }
      //   ]
      // },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        include: [ path.resolve(__dirname, "public/images") ],
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: 'file-loader',
              name: 'public/images/[name].[ext]',
              limit: 8192
            }
          }
        ]
      },
      {
        test:/\.(s*)css$/, 
        use: ExtractTextPlugin.extract({ 
          fallback:'style-loader',
          use:['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
        })
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new ManifestPlugin(),
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({filename:'bundle.css'}),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: true,
      cwd: process.cwd()
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(ENV)
      }
    })
  ]
};