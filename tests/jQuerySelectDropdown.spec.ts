import { test } from '@playwright/test';
import { JQuerySelect } from '../page/jQuerySelectDropdown';

test.describe('Visit Selenium Easy Demo Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  test('Single Select Search and Select Country', async ({ page }) => {
    const jq = new JQuerySelect(page);
    const country = 'Japan';
    await page.goto('/jquery-dropdown-search-demo.html');
    await jq.selectCountry(country);
  });
});
