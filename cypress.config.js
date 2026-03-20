const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "retries": 2,
  allowCypressEnv: false,
  
  e2e: {
    baseUrl: "http://localhost:3000", 
    setupNodeEvents(on, config) {
      
    },
  },
});



