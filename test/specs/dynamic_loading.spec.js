import dynamicPage from '../pageobjects/dynamic_loading.page.js';

describe('My Dynamic Page Screenshot', () => {
    it ('Should take a screenshot', async () => {
        await dynamicPage.open();
        await browser.pause(3000);
        await browser.saveScreenshot('./test/images/openScreenshot.png');
        await browser.pause(800);
        await (dynamicPage).startButton.click();
        await expect(dynamicPage.Header4).toBeExisting('Hello World!');
        await browser.saveScreenshot('./test/images/openScreenshot2.png');
        await browser.pause(1500);
    });
});