const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://parabank.parasoft.com/parabank/index.htm"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress\\integration\\examples\\*.js",
  },
});
