var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules_dir = __dirname + '/node_modules';

var min= process.argv.indexOf("--min")===-1?false:true;
if(min){
  plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }))
}

var config = {
    addVendor: function (name, path) {
      this.resolve.alias[name] = path;
    },
    entry: {
      globalMask:path.resolve(__dirname, 'app/globalMask.jsx'),
      compomentMask:path.resolve(__dirname, 'app/compomentMask.jsx')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    resolve: { alias: {} },
    module: {
        loaders: [
          {
            test: /\.js[x]?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
              presets: ['es2015', 'stage-0', 'react'],
            }
          },
          {
            test: /\.css$/,
            exclude: /(node_modules|bower_components)/,
            loader: "style!css"
          },
          { test: /\.(png|jpg|gif)$/,loader: 'url?name=[path][name].[ext]&limit=50000'}, // inline base64 URLs for <=8k images, direct URLs for the rest
          { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=[path][name].[ext]" },
          { test: /\.(woff|woff2)$/, loader:"url?name=[path][name].[ext]&prefix=font/&limit=50000" },
          { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?name=[path][name].[ext]&limit=50000&mimetype=application/octet-stream" },
          { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml" }
        ],
        noParse: [/moment-with-locales/]
    }
};

// config.addVendor('react-loadingmask', __dirname+'/dist/react-loadingmask.js');
module.exports = config;
