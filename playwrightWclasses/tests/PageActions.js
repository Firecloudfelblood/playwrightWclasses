class PageActions {
    constructor(page) {
        this.page = page;
    }

    async goTo(url) {
        await this.page.goto(url);
    }

    async click(selector) {
        await this.page.click(selector);
    }
}

module.exports = PageActions;
