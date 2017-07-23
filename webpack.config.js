const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: [
          "awesome-typescript-loader",
          "tslint-loader"
        ],
        exclude: /\.test\.tsx|\.test/
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  }
};
