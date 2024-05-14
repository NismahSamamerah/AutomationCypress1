const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    specPattern:"**/*.{feature,cy.js}",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());

      // implement node event listeners here
    },
    baseUrl:"https://magento.softwaretestingboard.com",
    chromeWebSecurity: false,
    // viewportHeight:500,
    // viewportWidth:500
    watchForFileChanges:true,
    trashAssetsBeforeRuns :true,
    screenshotOnRunFailure :true,
    video :true,
    videoCompression :20
  }
});
