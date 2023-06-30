import { test, expect } from '@playwright/test';
import { Checkbox } from '../page/checkboxDemo';

test.describe('Visit Selenium Easy Demo Page', () => {
  test.beforeEach(async ({ page }) => {
    // visit the basic URL for each test
    await page.goto('/');
  });

  test('Single Checkbox Demo', async ({ page }) => {
    await page.goto('/basic-checkbox-demo.html');
    const check = new Checkbox(page);
    const msg = 'Success - Check box is checked';
    await check.validateCheckboxMsg(msg);
    await check.validateDefaulCheckbox();
    await check.validateDisabledCheckbox();
  });
  test('Multiple Checkbox Demo', async ({ page }) => {
    await page.goto('/basic-checkbox-demo.html');
    const multi = new Checkbox(page);
    await multi.validateUncheckCheckbox('Check All');
    await multi.clickCheckAllButton();
    await multi.validateAllCheckboxesChecked('Uncheck All');
    await multi.clickSpecificCheckbox(1, 'Check All');
  });
});
