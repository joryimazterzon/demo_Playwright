import { expect, Locator, Page } from '@playwright/test';

export class Checkbox {
  readonly page: Page;
  readonly singleCheckbox: Locator;
  readonly successMsg: Locator;
  readonly multipleCheckbox: Locator;
  readonly checkButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.singleCheckbox = page.locator('form input');
    this.successMsg = page.locator('[id="txtAge"]');
    this.multipleCheckbox = page.locator('input.cb1-element');
    this.checkButton = page.locator('[id="check1"]');
  }

  /**
   * Validate single checkbox message
   *
   * @argument Message to be compared
   */
  async validateCheckboxMsg(message: string) {
    await this.singleCheckbox.first().click();
    await expect(this.successMsg).toHaveText(message);
  }

  /**
   * Validate default single checkbox is checked
   *
   */
  async validateDefaulCheckbox() {
    await expect(this.singleCheckbox.nth(1)).toBeChecked();
  }

  /**
   * Validate a single checkbox disabled
   *
   */
  async validateDisabledCheckbox() {
    await expect(this.singleCheckbox.last()).toBeDisabled();
  }

  /**
   * Validate the text of Multiple checkbox button when
   * Checkboxes are unchecked
   * @argument Text of the button
   *
   */
  async validateUncheckCheckbox(text: string) {
    for (const item of await this.multipleCheckbox.all())
      await expect(item).not.toBeChecked();
    await expect(this.checkButton).toHaveText(text);
  }

  /**
   * Validate the text of Multiple checkbox button when
   * Checkboxes are unchecked
   * @argument Text of the button
   *
   */
  async validateAllCheckboxesChecked(text: string) {
    for (const item of await this.multipleCheckbox.all())
      await expect(item).toBeChecked();
    await expect(this.checkButton).toHaveText(text);
  }

  /**
   * Click Check All button to check multiple checkboxes
   *
   */
  async clickCheckAllButton() {
    await this.checkButton.click();
  }

  /**
   * Click on one checkbox to update text of Check All button
   * @argument Index of the checkbox to be clicked
   * @argument Text of the button
   *
   */
  async clickSpecificCheckbox(index: number, text: string) {
    await this.multipleCheckbox.nth(index).click();
    await expect(this.checkButton).toHaveText(text);
  }
}
