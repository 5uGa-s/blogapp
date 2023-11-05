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
    rules: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'src/js'),
      ],
      loader: "babel-loader",
      options: {
        presets: ["es2015"],
        plugins: [
          ["babel-plugin-root-import", {
            "rootPathSuffix": "src/js"
          }],
          [
            "transform-runtime", {
              "helpers": false,
              "polyfill": false,
              "regenerator": true,
              "moduleName": "babel-runtime"
            }
          ],
          "transform-object-assign",
          "transform-function-bind"
        ]
      }
    }]
  }
};