import {test, expect} from '@playwright/test'

// Iframe handling algorithm
// Launch the url - page.goto()
// perform some action on the main page  - by using page fixture
// Identify the iframe element - const framePage = page.frameLocator()
// Perform the action on the framepage by using {framePage}  as a variable
// Again perform the action on the main page - you can move back to {page} fixture

test("iframe handling", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page.getByPlaceholder("Hide/Show Example")).toBeVisible()
    await page.locator("#hide-textbox").click()
    await expect(page.getByPlaceholder("Hide/Show Example")).toBeHidden()

    const framePage = page.frameLocator("#courses-iframe")
    await framePage.getByText("All Access plan").first().click()
    await expect(framePage.locator("div.inner-box h1")).toContainText("All Access Subscription")


    await page.locator("#checkBoxOption1").check()
    await expect(page.locator("#checkBoxOption1")).toBeChecked()
})