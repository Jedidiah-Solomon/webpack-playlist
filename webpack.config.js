const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/script-1.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  modules: [{}, {}, {}],
};
