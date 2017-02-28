var path = require('path');
var webpack = require('webpack');

var config = {

  context: path.join(__dirname, 'components'),
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './main.js'
  ],
  output: {
    path: path.join(__dirname, 'client'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      },
      {
       test: /\.(jpe?g|png|gif|svg)$/i,
       loaders: [
         'file?hash=sha512&digest=hex&name=[hash].[ext]',
         'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
       ]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ],
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};
module.exports = config;
