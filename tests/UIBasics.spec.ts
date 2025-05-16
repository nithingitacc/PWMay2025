import {test, expect} from '@playwright/test'

test("UI Basics validation", async function({page}){

    // Enter the text inside textbox
    // Validate if the text value have been entered successfully
    // radio button / checkbox box
    // Validate the radio button and checkbox validation
    // Get the text value from an element

    // goto("url") - This will help us in launching the url on the browser
    await page.goto("https://demoqa.com/automation-practice-form")
    // fill(string) - Set a value to the input field.
    const firstName = page.getByPlaceholder("First Name")
    await firstName.fill("Testing")
    await assertValue(firstName, "Testing")

    await page.getByPlaceholder("Last Name").fill("Playwright")
    await expect(page.getByPlaceholder("Last Name")).toHaveValue("Playwright")

    // pressSequentially(string) - Enter the text value inside the textbox character by character
    await page.getByPlaceholder("name@example.com").pressSequentially("email@example.com")
    await expect(page.getByPlaceholder("name@example.com")).toHaveValue("email@example.com")

    // check() - Will check the radio button or checkbox
    await expect(page.getByRole('radio', {name: 'Female'})).not.toBeChecked()
    await page.getByRole('radio', {name: 'Female'}).click({force: true})
    await expect(page.getByRole('radio', {name: 'Female'})).toBeChecked()

    await page.getByText("Sports", {exact: true}).check()
    await expect(page.getByText("Sports", {exact: true})).toBeChecked()

    // first() - Returns locator to the first matching element
    // last() - Returns locator to the last matching element.
    // nth(index) - Returns locator to the n-th matching element. It's zero based, nth(0) selects the first element.
    await page.locator("input.mr-sm-2").nth(2).clear() // 4 different elements
    await page.locator("input.mr-sm-2").nth(2).fill("locators@playwright.com")
    await expect(page.locator("input.mr-sm-2").nth(2)).toHaveValue("locators@playwright.com")

    // textContent() - Will return us the text value from AN element in the form of string
    // allTextContents() - Will return us the text value from ALL the matching element in the form of Array of string
    const text = await page.locator("h1.text-center").textContent()
    console.log(text);

    const headingText = await page.locator("div.practice-form-wrapper h5").textContent()
    console.log(headingText);

})

async function assertValue(locator, message){
    await expect(locator).toHaveValue(message)
}


    // goto the url
    // fill the username
    // fill the password
    // click on the login button
    // expect that the dashboard is visible