var path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    App: "./src/js/main.js"
},
  output: {
    path: path.resolve(__dirname,"./tmp/js"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}
