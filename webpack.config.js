module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader", exclude: /\.test\.tsx|\.test/ },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devtool: "source-map",
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  }
};
