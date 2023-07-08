import { test } from "@playwright/test";
import { FormSubmit } from "../page/inputFormSubmit";

test.describe("Visit Selenium Easy Demo Page", () => {
  test.beforeEach(async ({ page }) => {
    // visit the basic URL for each test
    await page.goto("/");
  });

  test("Complete fields in Contact Us Today! form", async ({ page }) => {
    const form = new FormSubmit(page);
    await page.goto("/input-form-demo.html");
    await form.enterFirstName();
    await form.enterLastName();
    await form.enterEmail();
    await form.enterPhone();
    await form.enterAddress();
    await form.enterCity();
    await form.enterState();
    await form.enterZIP();
    await form.enterWebsite();
    await form.selectHosting();
    await form.enterProjectDescription();
    await form.submitForm();
  });
});
