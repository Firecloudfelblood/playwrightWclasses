const {chromium} = require("playwright");
const PageActions = require("../Actions/PageActions");

class Driver{
    async initializeBrowser() {
        const browser = await chromium.launch({headless: false});
        const page = await browser.newPage();
        const pageActions = new PageActions(page);

        return {browser, pageActions};
    }
}

module.exports = Driver;
