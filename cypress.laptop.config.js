const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    viewportWidth: 1366,
    viewportHeight: 768,
    retries: 2,
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      //
    },
  },
});

