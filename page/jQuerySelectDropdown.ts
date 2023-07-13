import { expect, Locator, Page } from '@playwright/test';

export class JQuerySelect {
  readonly page: Page;
  readonly selectCountryDd: Locator;
  readonly selectCountryTxb: Locator;
  readonly selectCountryItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectCountryDd = page.locator(
      '[aria-labelledby="select2-country-container"]'
    );
    this.selectCountryTxb = page.locator('span.select2-search input');
    this.selectCountryItem = page.locator('[id="select2-country-results"] li');
  }

  /**
   * Select Country from Single Select Dropdown
   *
   * @argument country to select
   * @example
   *    JQuerySelect.selectCountry('Japan')
   *
   */
  async selectCountry(country: string) {
    await this.selectCountryDd.click();
    await this.selectCountryTxb.fill(country);
    await this.selectCountryItem.first().click();
    await expect(this.selectCountryDd).toHaveText(country);
  }
}
