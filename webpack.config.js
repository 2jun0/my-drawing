const { resolve } = require('path')

module.exports = {
  entry: {},
  output: {
    filename: 'js/[name].js',
    path: resolve(__dirname, '../dist'),
  },
  module: {
    rules: [],
  },
}
