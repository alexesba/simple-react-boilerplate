var path = require("path");
var lodash = require("lodash");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');


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
  "externals": {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  "plugins": [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      title: "Awesome React!!",
      template: "index.ejs"
    }),
    new HtmlWebpackExternalsPlugin([
      { name: "react", var: "React", url: "https://unpkg.com/react@15.4.1/dist/react.js" },
      { name: "react-dom", var: "ReactDOM", url: "https://unpkg.com/react-dom@15.4.1/dist/react-dom.js" }
    ])
  ]
}
