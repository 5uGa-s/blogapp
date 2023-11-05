var path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'app'),
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  }
};
