import { test, expect } from '@playwright/test';
import { RadioButton } from '../page/radioButtonDemo';

test.describe('Visit Selenium Easy Demo Page', () => {
  test.beforeEach(async ({ page }) => {
    // visit the basic URL for each test
    await page.goto('/');
  });

  test('Single Radio Button Demo', async ({ page }) => {
    const rb = new RadioButton(page);
    await page.goto('/basic-radiobutton-demo.html');
    await rb.validateSexRadioButton('Female');
  });

  test('Group Radio Buttons Demo', async ({ page }) => {
    const rb = new RadioButton(page);
    const gender = 'Male';
    const ageRange = '15 to 50';
    await page.goto('/basic-radiobutton-demo.html');
    await rb.selectGender(gender);
    await rb.selectAgeRange(ageRange);
    await rb.validateSexAndAge(gender, ageRange);
  });
});
