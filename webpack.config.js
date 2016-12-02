var path = require("path");
var lodash = require("lodash");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: {
   app: [ "./index.js" ]
  },
  output: {
    path: path.resolve(__dirname + "/build"),
    publicPath: "build/",
    filename: "app.js"
  },
  devServer: {
    inline: true,
    hot: true
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=9999999',
      },

      { test: /\.scss?$/, loaders: [
        "style?sourceMap",
        "css-loader?sourceMap&modules&localIdentName=[path]__[name]__[local]__[hash:base64:5]",
        "postcss-loader?parser=postcss-scss",
        "sass-loader?sourceMap"
      ]
      },
    ]
  }
}
