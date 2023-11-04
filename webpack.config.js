const path = require('path');

module.exports = {
  entry: {
    'index': [
      path.resolve(__dirname, 'src/index.js')
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
};