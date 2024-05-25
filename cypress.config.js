const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //watchForFileChanges: false, //This is true by default, so if you use false then you will need reload
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
