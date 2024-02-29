const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://computer-database.gatling.io/computers',
    failOnStatusCode: false,
    experimentalRunAllSpecs: true,
    experimentalWebKitSupport: true,
    experimentalStudio: true,
    watchForFileChanges: false,
  }
})