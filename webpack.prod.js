/* eslint @typescript-eslint/no-var-requires: "off" */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
})
