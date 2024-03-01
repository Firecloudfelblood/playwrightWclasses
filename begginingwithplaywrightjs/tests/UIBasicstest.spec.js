const {test} = require('@playwright/test');

test('first test',
    async ({browser}) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://playwright.dev/python");
        console.log(await page.title());
    });

test('second test',
    async ({page}) => {
        await page.goto("https://google.com");

        console.log(await page.title());
    });