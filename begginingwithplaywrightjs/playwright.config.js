// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,
  expect:{
    timeout:5000
  },

  /* Run tests in files in parallel */
  fullyParallel: true,

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    //properties to be used on the test cases
    browserName: 'chromium',
    headless: false
  }
});

