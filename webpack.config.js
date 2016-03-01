var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules_dir = __dirname + '/node_modules';

var min= process.argv.indexOf("--min")===-1?false:true;
var plugins=
[
  new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery', 'root.jQuery': 'jquery' }),
];
if(min){
  plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }))
}

var config = {
    addVendor: function (name, path) {
      this.resolve.alias[name] = path;
    },
    entry: {
      "react-loadingmask":path.resolve(__dirname, 'index.js'),
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
    // devtool: 'eval',
    plugins: plugins,
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


module.exports = config;
