const {chromium} = require('playwright');
const PageActions = require("./PageActions");

class TestScript{
    async run(){
        const browser = await chromium.launch({headless: false});
        const page = await  browser.newPage();
        const pageActions = new PageActions(page);

        await pageActions.goTo('https://example.com');
        await pageActions.click('a');

        await browser.close();
    }
}

module.exports = TestScript;