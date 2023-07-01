import { expect, Locator, Page } from '@playwright/test';

export class RadioButton {
  readonly page: Page;
  readonly singleRadioBtn: Locator;
  readonly getCheckValueBtn: Locator;
  readonly singleRadioBtnLb: Locator;
  readonly genderRadioBtn: Locator;
  readonly groupRadioBtn: Locator;
  readonly getValuesBtn: Locator;
  readonly sexAndAgeValuesLb: Locator;

  constructor(page: Page) {
    this.page = page;
    this.singleRadioBtn = page.locator('[name="optradio"]');
    this.getCheckValueBtn = page.locator('[id="buttoncheck"]');
    this.singleRadioBtnLb = page.locator('p.radiobutton');
    this.genderRadioBtn = page.locator('[name="gender"]');
    this.groupRadioBtn = page.locator('[name="ageGroup"]');
    this.getValuesBtn = page.locator('[onclick="getValues();"]');
    this.sexAndAgeValuesLb = page.locator('p.groupradiobutton');
  }

  /**
   * Check single gender radio button
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

  /**
   * Check gender in radio button group
   *
   * @argument sex to select in radio buttons
   * @example
   *    RadioButton.selectGender('Male')
   *
   */
  async selectGender(sex: string) {
    if (sex == 'Male') {
      await this.genderRadioBtn.first().click();
    } else if (sex == 'Female') {
      await this.genderRadioBtn.last().click();
    }
  }

  /**
   * Check age range in radio button group
   *
   * @argument range of age to select the radio button group
   * @example
   *    RadioButton.selectAgeRange('5 to 15')
   *
   */
  async selectAgeRange(range: string) {
    await this.page.getByRole('radio', { name: range }).click();
  }

  /**
   * Validates Sex and Age groups
   *
   * @argument sex to compare
   * @argument range of age to compare
   * @example
   *    RadioButton.validateSexAndAge('Male','5 to 15')
   *
   */
  async validateSexAndAge(sex: string, range: string) {
    let aux = range.replace('to', '-');
    await this.getValuesBtn.click();
    await expect(this.sexAndAgeValuesLb).toHaveText(
      `Sex : ${sex} Age group: ${aux}`
    );
  }
}
