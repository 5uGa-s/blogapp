var path = require('path');

module.exports = {
  entry: {
    main: './src/'
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
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};