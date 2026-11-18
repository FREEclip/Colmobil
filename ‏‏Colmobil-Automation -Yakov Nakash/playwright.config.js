const { defineConfig } = require('@playwright/test');
//add timeout to not fail the test or slow down the test
module.exports = defineConfig({
    testDir: './tests',
    timeout: 30000,

    expect: {
        timeout: 10000
    },

    use: {
        baseURL: 'https://www.saucedemo.com',
        headless: false
    }
});