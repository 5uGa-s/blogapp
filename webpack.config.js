var path = require('path');

module.exports = {
  entry: {
    main: './src/app/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'app'),
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  }
};