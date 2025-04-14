const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          buffer: require.resolve("buffer/"),
          crypto: require.resolve("crypto-browserify"),
          stream: require.resolve("stream-browserify"),
          util: require.resolve("util/"),
          process: require.resolve("process/browser.js"),
          vm: require.resolve("vm-browserify")
        }
      },
      plugins: [
        new webpack.ProvidePlugin({
          process: "process/browser.js",
          Buffer: ["buffer", "Buffer"]
        })
      ]
    }
  }
};
