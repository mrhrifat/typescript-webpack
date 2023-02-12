const path = require("path");
// const ForkIsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin"); // not recemoneded for all time

module.exports = {
  // Generate source map
  devtool: "source-map",
  // Bundling mode
  mode: "production",
  // Entry files location
  entry: "./src/index.ts",
  // Output bundle location
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  // File resolution
  resolve: {
    extensions: [".ts", ".js"],
  },
  // Loaders
  module: {
    // rules: [{ test: /\.ts?$/, use: "ts-loader", exclude: /node_modules/ }],
    rules: [
      {
        test: /\.ts?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  // Plugins
  // Run TSC in a seperate thread. but not recemoneded for all time
  // plugins: [new ForkIsCheckerWebpackPlugin()],

  // Watch
  watch: true,
};
