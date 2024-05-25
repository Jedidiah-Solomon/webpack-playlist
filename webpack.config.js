module.exports = {
  //define entry point
  entry: "./src/script-1.js",

  //define output point
  output: {
    path: "dist",
    filename: "bundle.js",
  },

  // This is old method, using loaders in modules. Instead use rules to apply the loaders. Check lesson-2 branch.
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"],
        },
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader",
      },
    ], //loaders
  }, //module
};
