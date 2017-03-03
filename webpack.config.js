var path = require('path');
var webpack = require('webpack');
var node_modules_dir = __dirname + '/node_modules';
var plugins=[];
var config = {
    entry: {
      "bundle":path.resolve(__dirname, 'index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      library: "reactloadingmask",
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: {
      'react': 'react',
      'react-dom': 'react-dom'
    },
    plugins: plugins,
    resolve: { alias: {} },
    module: {
        loaders: [
          {
            test: /\.js[x]?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              compact: false,
              cacheDirectory:true,
              presets: ['latest', 'stage-0', 'react'],
            }
          }
        ]
    }
};


module.exports = config;
