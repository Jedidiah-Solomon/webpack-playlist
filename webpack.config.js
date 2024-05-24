const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/script-1.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/, //exclude: /index\.js$/   ---this excludes a file index.js for instance
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
