const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //watchForFileChanges: false, //This is true by default, so if you use false then you will need reload

    // Set default viewport size - without setting cypress uses 1000px x 660px (width x height)
    viewportWidth: 1280,
    viewportHeight: 720,

    // Set the where the server or root folder is
    fileServerFolder: ".",

    // Set a base url to avoid repeating url
    baseUrl: "http://localhost:8080",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
