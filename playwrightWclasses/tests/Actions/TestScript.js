const PageLocators = require('../Page/PageLocators');
const Driver = require('../FrameworkUtils/Driver')

class TestScript extends Driver{
    async run(){
        let pl = new PageLocators()
        const{browser, pageActions} = await  this.initializeBrowser()

        await pageActions.goTo(pl.getUrl());
        await pageActions.click(pl.getLinkLocator());

        await browser.close();
    }
}

module.exports = TestScript;