var path = require("path");
var plugins = [];

// prettier-ignore
var config = {
  entry: {
    "react-loadingmask": path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "reactLoadingMask",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: {
    "react": "react",
    "react-dom": "react-dom"
  },
  plugins: plugins,
  resolve: { alias: {} },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          cacheDirectory: true,
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  }
};

module.exports = config;
