import { test, expect } from '@playwright/test';
import { RadioButton } from '../page/radioButtonDemo';

test.describe('Visit Selenium Easy Demo Page', () => {
  test.beforeEach(async ({ page }) => {
    // visit the basic URL for each test
    await page.goto('/');
  });

  test('Single Radio Button Demo', async ({ page }) => {
    await page.goto('/basic-radiobutton-demo.html');
    const rb = new RadioButton(page);
    await rb.validateSexRadioButton('Female');
  });
});
