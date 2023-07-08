import { expect, Locator, Page } from "@playwright/test";

export class FormSubmit {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly eMail: Locator;
  readonly phone: Locator;
  readonly address: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly zipCode: Locator;
  readonly webSite: Locator;
  readonly hosting: Locator;
  readonly projectDescription: Locator;
  readonly submit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('[name="first_name"]');
    this.lastName = page.locator('[name="last_name"]');
    this.eMail = page.locator('[name="email"]');
    this.phone = page.locator('[name="phone"]');
    this.address = page.locator('[name="address"]');
    this.city = page.locator('[name="city"]');
    this.state = page.locator('[name="state"]');
    this.zipCode = page.locator('[name="zip"]');
    this.webSite = page.locator('[name="website"]');
    this.hosting = page.locator('[name="hosting"]');
    this.projectDescription = page.locator('[name="comment"]');
    this.submit = page.locator("button.btn-default");
  }

  /**
   * Enter First Name in Contact Us Today! form
   *
   * @example
   *    FormSubmit.enterFirstName()
   */
  async enterFirstName() {
    await this.firstName.fill("a");

    await this.firstName.fill(process.env.FIRST_NAME);
  }

  /**
   * Enter Last Name in Contact Us Today! form
   *
   * @example
   *    FormSubmit.enterLastName()
   */
  async enterLastName() {
    await this.lastName.fill(process.env.LAST_NAME);
  }

  /**
   * Enter Email in Contact Us Today! form
   *
   * @example
   *    FormSubmit.enterEmail()
   */
  async enterEmail() {
    await this.eMail.fill(process.env.EMAIL);
  }

  /**
   * Enter Phone in Contact Us Today! form
   *
   * @example
   *    FormSubmit.enterPhone()
   */
  async enterPhone() {
    await this.phone.fill(process.env.PHONE);
  }

  /**
   * Enter Address in Contact Us Today! form
   *
   * @example
   *    FormSubmit.enterAddress()
   */
  async enterAddress() {
    await this.address.fill(process.env.ADDRESS);
  }

  /**
   * Enter City in Contact Us Today! form
   *
   * @example
   *    FormSubmit.enterCity()
   */
  async enterCity() {
    await this.city.fill(process.env.CITY);
  }

  /**
   * Enter State in Contact Us Today! form
   *
   * @example
   *    FormSubmit.enterState()
   */
  async enterState() {
    await this.state.selectOption(process.env.STATE);
  }

  /**
   * Enter Zip Code in Contact Us Today! form
   *
   * @example
   *    FormSubmit.enterZIP()
   */
  async enterZIP() {
    await this.zipCode.fill(process.env.ZIP_CODE);
  }

  /**
   * Enter Website in Contact Us Today! form
   *
   * @example
   *    FormSubmit.enterWebsite()
   */
  async enterWebsite() {
    await this.webSite.fill(process.env.WEBSITE);
  }

  /**
   * Select Hosting in Contact Us Today! form
   *
   * @example
   *    FormSubmit.selectHosting()
   */
  async selectHosting() {
    if (process.env.HOSTING == "true") {
      await this.hosting.first().click();
    } else {
      await this.hosting.last().click();
    }
  }

  /**
   * Enter Project Description in Contact Us Today! form
   *
   * @example
   *    FormSubmit.enterProjectDescription()
   */
  async enterProjectDescription() {
    await this.projectDescription.fill(process.env.PROJECT_DESCRIPTION);
  }

  /**
   * Submit Contact Us Today! form
   *
   * @example
   *    FormSubmit.submitForm()
   */
  async submitForm() {
    await this.submit.click();
  }
}
