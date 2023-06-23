import { expect, Locator, Page } from '@playwright/test';

export class Form {
  readonly page: Page;
  readonly inputField: Locator;
  readonly showMessageBtn: Locator;
  readonly message: Locator;
  readonly aTextfield: Locator;
  readonly bTextfield: Locator;
  readonly getTotalBtn: Locator;
  readonly totalLb:Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.inputField = page.locator('[id="user-message"]').first()
    this.showMessageBtn = page.getByRole('button').filter({hasText:'Show Message'})
    this.message = page.getByTitle('text message')
    this.aTextfield = page.getByPlaceholder('Enter value').first()
    this.bTextfield = page.getByPlaceholder('Enter value').last()
    this.getTotalBtn = page.locator('#gettotal button')
    this.totalLb = page.locator('#displayvalue')

  }

  async enterMessage(message:string) {
    await this.inputField.fill(message)
  }

  async displayMessage() {
    await this.showMessageBtn.click()

  }

  async validateMessage(message:string) {
    await expect(this.message).toHaveText(message)

  }

  async enterValueA(value:string){
    await this.aTextfield.fill(value)
  }

  async enterValueB(value:string){
    await this.bTextfield.fill(value)
  }

  async clickGetTotal(){
    await this.getTotalBtn.click()
  }

  async validateSum(result:string){
    await expect(this.totalLb).toHaveText(result)
  }
}