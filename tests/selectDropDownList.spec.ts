import { Dropdown } from '../page/selectDropDownList';
import { test } from '@playwright/test';

test.describe('Visit Selenium Easy Demo Page', () => {
  test.beforeEach(async ({ page }) => {
    // visit the basic URL for each test
    await page.goto('/');
  });

  test('Select List Demo', async ({ page }) => {
    const dropdown = new Dropdown(page);
    const day = 'Friday';
    await page.goto('/basic-select-dropdown-demo.html');
    await dropdown.selectDay(day);
    await dropdown.validateDay(day);
  });

  test('Multi Select List Demo', async ({ page }) => {
    const dropdown = new Dropdown(page);
    const country = 'Texas';
    await page.goto('/basic-select-dropdown-demo.html');
    await dropdown.selectCountry(country);
    await dropdown.validateCountry(country);
  });
});
