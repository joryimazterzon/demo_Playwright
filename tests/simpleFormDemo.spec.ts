import {test,expect} from "@playwright/test"
import { Form } from "./form-dev-page"

test.describe('Visit Selenium Easy Demo Page',()=>{
    test.beforeEach(async ({page})=> {
        // visit the basic URL for each test
        await page.goto('/')
    })

    test('Validate landing page', async ({page})=>{
        // Assertion using expect API
        await expect(page).toHaveURL('https://demo.seleniumeasy.com/')
    })

    test('Single Input Field', async ({page})=>{
        await page.goto('/basic-first-form-demo.html')
        const form = new Form(page)
        const msg = 'This is a custom message'
        await form.enterMessage(msg)
        await form.displayMessage()
        await form.validateMessage(msg)

    })

    test('Two Input Fields', async ({page})=>{
        await page.goto('/basic-first-form-demo.html')
        const form = new Form(page)

        await form.enterValueA('15')
        await form.enterValueB('85')
        await form.clickGetTotal()
        await form.validateSum('100')

    })

})