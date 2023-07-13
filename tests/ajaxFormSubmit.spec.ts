import { test } from '@playwright/test';
import { AjaxSubmit } from '../page/ajaxFormSubmit';

test.describe('Visit Selenium Easy Demo Page', () => {
  test.beforeEach(async ({ page }) => {
    // visit the basic URL for each test
    await page.goto('/');
  });

  test('Ajax Form Submit with Loading icon', async ({ page }) => {
    await page.goto('/ajax-form-submit-demo.html');
    const ajax = new AjaxSubmit(page);
    const name = 'Joryi';
    const comment = 'Playwright is amazing!';
    await ajax.submitFormAjax(name, comment);
  });
});
