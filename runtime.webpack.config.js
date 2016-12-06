var path = require('path'); // eslint-disable-line no-var
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line no-var

const loaderString = [
  'css?minimize&modules&localIdentName=[hash:base64:4]',
  'postcss-loader?parser=postcss-scss',
  "sass-loader"
].join('!')
module.exports = {
  output: {
    // for babel plugin
    libraryTarget: 'commonjs2',
    // where to place webpack files
    path: path.join(__dirname, './build/'),
    // for url-loader if limit exceeded to set publicPath
    publicPath: '',
  },
  module: {
    loaders: [
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
      }
    ]
  },
  "plugins": [
    new ExtractTextPlugin('style.css')
  ]
};
