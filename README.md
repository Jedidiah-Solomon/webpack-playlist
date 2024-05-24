# webpack-playlist

This programme actually started from lesson-2 branch

### Commands

1. npm init
2. npm install webpack webpack-cli path --save-dev
3. write the **webpack.config.js** file
4. Babel Loaders transform ECMASCRIPT2015 OR JSX into vanilla js e.g const and let to var since all broswers not few know this.

**How to do this**
-- INSTALL babel-core and babel-loader via npm
--INSTALL any presets to do the transformations e.g to transform ecma2015 code to vanilla, get a preset for ecma2015, for jsx to vanilla get jsx preset too.
--then configure webpack.config.js file to do the transformations with your presets and loaders

`npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env`

5. The module for loaders & presets are objects in an array. Each object reps a loader.
