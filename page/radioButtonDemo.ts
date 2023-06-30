import { expect, Locator, Page } from '@playwright/test';

export class RadioButton {
  readonly page: Page;
  readonly singleRadioBtn: Locator;
  readonly getCheckValueBtn: Locator;
  readonly singleRadioBtnLb: Locator;

  constructor(page: Page) {
    this.page = page;
    this.singleRadioBtn = page.locator('[name="optradio"]');
    this.getCheckValueBtn = page.locator('[id="buttoncheck"]');
    this.singleRadioBtnLb = page.locator('p.radiobutton');
  }

  /**
   * Check single radio button
   *
   * @argument sex to select in radio buttons
   * @example
   *    RadioButton.validateSexRadioButton('Female')
   *
   */
  async validateSexRadioButton(sex: string) {
    if (sex == 'Male') {
      await this.singleRadioBtn.first().click();
    } else if (sex == 'Female') {
      await this.singleRadioBtn.last().click();
    }

    await this.getCheckValueBtn.click();
    await expect(this.singleRadioBtnLb).toHaveText(
      `Radio button '${sex}' is checked`
    );
  }
}
