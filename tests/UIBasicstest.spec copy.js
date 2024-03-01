const {test} = require('@playwright/test');

test('first test',
    async ({browser}) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://www.wwe.com");
        console.log(await page.title());
    });

test('second test',
    async ({page}) => {
        await page.goto("https://www.udemy.com");

        console.log(await page.title());
    });