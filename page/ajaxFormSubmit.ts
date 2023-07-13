import { expect, Locator, Page } from '@playwright/test';
export class AjaxSubmit {
  readonly page: Page;
  readonly nameTxb: Locator;
  readonly commentTxb: Locator;
  readonly submitBtn: Locator;
  readonly submittedLb: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameTxb = page.locator('input[id="title"]');
    this.commentTxb = page.locator('textarea[id="description"]');
    this.submitBtn = page.locator('input[id="btn-submit"]');
    this.submittedLb = page.locator('div[id="submit-control"]');
  }

  /**
   * Submit a form in Ajax
   *
   * @argument name of the user
   * @argument comment of the book
   *
   * @example
   *    FormSubmit.submitFormAjax('joryi','This is great!')
   */
  async submitFormAjax(name: string, comment: string) {
    await this.nameTxb.fill(name);
    await this.commentTxb.fill(comment);
    const responsePromise = this.page.waitForResponse(
      '**/php/first-form-demo.php'
    );
    await this.submitBtn.click();
    const response = await responsePromise;
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);
    await expect(this.submittedLb).toHaveText('Form submited Successfully!');
  }
}
