const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://goal-dev.mdx.ac.uk/accounts/login/?next=/",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
