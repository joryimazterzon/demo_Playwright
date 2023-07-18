import { expect, Locator, Page } from '@playwright/test';

export class JQuerySelect {
  readonly page: Page;
  readonly selectCountryDd: Locator;
  readonly selectCountryTxb: Locator;
  readonly selectCountryItem: Locator;
  readonly selectStateDd: Locator;
  readonly selectedStateChip: Locator;
  readonly selectTerritoryDd: Locator;
  readonly selectTerritoryTxb: Locator;
  readonly selectCategoryDb: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectCountryDd = page.locator(
      '[aria-labelledby="select2-country-container"]'
    );
    this.selectCountryTxb = page.locator('span.select2-search input');
    this.selectCountryItem = page.locator('[id="select2-country-results"] li');
    this.selectStateDd = page.locator('input.select2-search__field');
    this.selectedStateChip = page.locator(
      'span.select2-selection li.select2-selection__choice '
    );
    this.selectTerritoryDd = page.locator('span.select2-selection__rendered');
    this.selectTerritoryTxb = page.locator('input.select2-search__field');
    this.selectCategoryDb = page.locator('select[name="files"]');
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

  /**
   * Select Territories from Dropdown with Disabled Values
   *
   * @argument territory to select
   * @example
   *    JQuerySelect.selectTerritory('Puerto Rico')
   *
   */
  async selectTerritory(territory: string) {
    await this.selectTerritoryDd.last().click();
    await this.selectTerritoryTxb.last().fill(territory);
    await this.page.getByRole('treeitem', { name: territory }).click();
  }

  /**
   * Validate the territory is selected
   *
   * @argument territory to validate
   * @example
   *    JQuerySelect.validateTerritory('Puerto Rico')
   *
   */
  async validateTerritory(territory: string) {
    await expect(this.selectTerritoryDd.last()).toHaveText(territory);
  }

  /**
   * Validate the territory was not selected
   *
   * @argument territory to validate
   * @example
   *    JQuerySelect.validateTerritoryNotSelected('Guam')
   *
   */
  async validateTerritoryNotSelected(territory: string) {
    await this.selectTerritoryDd.last().click();
    await this.selectTerritoryTxb.last().fill(territory);
    await expect(
      this.page.getByRole('treeitem', { name: territory })
    ).toBeDisabled();
  }

  /**
   * Select Category dropdown
   *
   * @argument category to select
   * @example
   *    JQuerySelect.selectCategory('PHP')
   *
   */
  async selectCategory(category: string) {
    await this.selectCategoryDb.selectOption(category);
  }

  /**
   * Validate the category is selected
   *
   * @argument category to validate
   * @example
   *    JQuerySelect.validateCategory('PHP')
   *
   */
  async validateCategory(category: string) {
    await expect(this.selectCategoryDb).toHaveValue(category);
  }
}
