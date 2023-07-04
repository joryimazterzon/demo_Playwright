import { Locator, Page, expect } from '@playwright/test';

export class Dropdown {
  readonly page: Page;
  readonly dayDropdown: Locator;
  readonly dayLb: Locator;
  readonly countryList: Locator;
  readonly firstSelectedBtn: Locator;
  readonly countryLb: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dayDropdown = page.locator('select[id="select-demo"]');
    this.dayLb = page.locator('p.selected-value');
    this.countryList = page.locator('select[id="multi-select"] option');
    this.firstSelectedBtn = page.locator('button[id="printMe"]');
    this.countryLb = page.locator('p.getall-selected');
  }

  /**
   * Select a day from the dropdown
   *
   * @argument day to select
   * @example
   *    Dropdown.selectDay('Friday')
   *
   */
  async selectDay(day: string) {
    await this.dayDropdown.selectOption(day);
  }

  /**
   * Validate the day selected
   * @argument day to compare
   * @example
   *    Dropdown.validateDay('Friday')
   */
  async validateDay(day: string) {
    await expect(this.dayLb).toContainText(day);
  }

  /**
   * Select a country from the multi dropdown
   *
   * @argument country to select
   * @example
   *    Dropdown.selectCountry('California')
   *
   */
  async selectCountry(country: string) {
    await this.countryList.getByText(country).click();
  }

  /**
   * Validate the country selected
   * @argument country to compare
   * @example
   *    Dropdown.validateCountry('California')
   */
  async validateCountry(country: string) {
    await this.firstSelectedBtn.click();
    await expect(this.countryLb).toContainText(country);
  }
}
