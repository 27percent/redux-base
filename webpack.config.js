/* this file is not transpiled through babel and some installs of node are v0.x */
/* eslint-disable no-console, no-var, prefer-template */

// 3rd Party Modules
const merge = require('webpack-merge');

// Webpack Config Settings
const common = require('./webpack.common.js');
const development = require('./webpack.dev.js');
const production = require('./webpack.prod.js');

// definitions
const ENV = process.env.NODE_ENV || 'development';
const envConfig = ENV === 'development' ? development : production;

console.log(`\n:: WebPack runs with ENV set as: ${ENV}\n`);
module.exports = merge(common, envConfig);
