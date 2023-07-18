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

  test('Multi Select - Select Multiple Values', async ({ page }) => {
    const jq = new JQuerySelect(page);
    const USA = ['California', 'Alaska', 'Colorado'];
    await page.goto('/jquery-dropdown-search-demo.html');

    for (const state of USA) {
      await jq.selectState(state);
    }
    await jq.validateState(USA);
  });

  test('Multi Select - Dropdown with Disabled values', async ({ page }) => {
    const jq = new JQuerySelect(page);
    await page.goto('/jquery-dropdown-search-demo.html');
    await jq.selectTerritory('Puerto Rico');
    await jq.validateTerritory('Puerto Rico');
    await jq.validateTerritoryNotSelected('Guam');
  });

  test('Multi Select - Dropdown with Category related options', async ({
    page,
  }) => {
    const jq = new JQuerySelect(page);
    await page.goto('/jquery-dropdown-search-demo.html');

    await jq.selectCategory('PHP');
    // TODO
    await jq.validateCategory('PHP');
    await page.pause();
  });
});
