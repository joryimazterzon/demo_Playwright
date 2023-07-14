import { expect, Locator, Page } from '@playwright/test';

export class JQuerySelect {
  readonly page: Page;
  readonly selectCountryDd: Locator;
  readonly selectCountryTxb: Locator;
  readonly selectCountryItem: Locator;
  readonly selectStateDd: Locator;
  readonly selectStateItem: Locator;
  readonly selectedStateChip: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectCountryDd = page.locator(
      '[aria-labelledby="select2-country-container"]'
    );
    this.selectCountryTxb = page.locator('span.select2-search input');
    this.selectCountryItem = page.locator('[id="select2-country-results"] li');
    this.selectStateDd = page.locator('input.select2-search__field');
    this.selectStateItem = page.locator('li.select2-results__option');
    this.selectedStateChip = page.locator(
      'span.select2-selection li.select2-selection__choice '
    );
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

  /**
   * Select States from Multi Select Dropdown
   *
   * @argument state to select
   * @example
   *    JQuerySelect.selectState('California')
   *
   */
  async selectState(state: string) {
    await this.selectStateDd.click();
    await this.page.getByRole('treeitem', { name: state }).click();
  }

  /**
   * Validate the name of the States from Multi Select Dropdown in order
   *
   * @argument state to validate
   * @example
   *    JQuerySelect.validateState(['California', 'Alaska', 'Colorado'])
   *
   */
  async validateState(state: string[]) {
    let sortedState = state.sort();
    for (let i = 0; i < (await this.selectedStateChip.count()); i++) {
      expect(await this.selectedStateChip.nth(i).textContent()).toContain(
        sortedState[i]
      );
    }
  }
}
