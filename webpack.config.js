var path = require("path");
var lodash = require("lodash");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: path.join(__dirname, "index.js"),
  output: {
    path: __dirname,
    filename: "app.js"
  },
  devServer: {
    inline: true,
    hot: true,
    bail: true
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: "babel",
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: ['react-hmre', 'react', 'latest', "stage-0"]
        }
      },
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
  },
  "plugins": [
    new HtmlWebpackPlugin({
      title: "Awesome React!!",
      template: "index.ejs",
    })
  ]
}
