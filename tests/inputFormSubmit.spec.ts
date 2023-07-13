import { test as baseTest } from '@playwright/test';
import { FormSubmit } from '../page/inputFormSubmit';
import { data } from './../fixtures/testDate.json';

type pageData = {
  pageContentData: typeof data;
};

const fixture = baseTest.extend<pageData>({
  pageContentData: [data, { option: true }],
});

const test = fixture;
export default test;

test.describe('Visit Selenium Easy Demo Page', () => {
  test.beforeEach(async ({ page }) => {
    // visit the basic URL for each test
    await page.goto('/');
  });

  test('Complete fields in Contact Us Today! form', async ({
    page,
    pageContentData,
  }) => {
    const form = new FormSubmit(page);
    await page.goto('/input-form-demo.html');
    await form.enterFirstName(pageContentData[0].FIRST_NAME);
    await form.enterLastName(pageContentData[0].LAST_NAME);
    await form.enterEmail(pageContentData[0].EMAIL);
    await form.enterPhone(pageContentData[0].PHONE);
    await form.enterAddress(pageContentData[0].ADDRESS);
    await form.enterCity(pageContentData[0].CITY);
    await form.enterState(pageContentData[0].STATE);
    await form.enterZIP(pageContentData[0].ZIP_CODE);
    await form.enterWebsite(pageContentData[0].WEBSITE);
    await form.selectHosting(pageContentData[0].HOSTING);
    await form.enterProjectDescription(pageContentData[0].PROJECT_DESCRIPTION);
    await form.submitForm();
  });
});
