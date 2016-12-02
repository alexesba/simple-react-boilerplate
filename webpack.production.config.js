var path = require("path");
var lodash = require("lodash");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const loaderString = [
  'css?minimize&modules&localIdentName=[hash:base64:4]',
  'postcss-loader?parser=postcss-scss',
  "sass-loader"
].join('!')
module.exports = {
  node: {
    fs: "empty"
  },
  entry: {
    app: [ path.join(__dirname, "/index.js") ]
  },
  output: {
    path: path.resolve(__dirname + "/build"),
    publicPath: "build/",
    filename: "app.js"
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json'],
    modulesDirectories: ['src', 'node_modules'],
    root: [path.join(__dirname, "src")]
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=1000',
      },
      {
        test: /.json$/,
        loader: "json-loader"
      },
      {
        test: /\.scss?$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(loaderString)
      },
    ]
  },
  "plugins": [
    new ExtractTextPlugin('style.css')
  ]
}
