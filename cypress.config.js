const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    TEST_EMAIL: "testuser_1745585169261@example.com",
    TEST_PASSWORD: "Password123",
  },
  e2e: {
    baseUrl: process.env.BASE_URL || "https://magento.softwaretestingboard.com",
    supportFile: "cypress/support/index.js",
    specPattern: "cypress/integration/tests/**/*.spec.js",
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "reports",
    overwrite: false,
    html: true,
    json: true,
  },
});
