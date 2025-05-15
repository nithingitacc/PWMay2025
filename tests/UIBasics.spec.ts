import {test, expect} from '@playwright/test'

test("UI Basics validation", async function({page}){

    // Enter the text inside textbox
    // Validate if the text value have been entered successfully
    // radio button / checkbox box

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


  
})

async function assertValue(locator, message){
    await expect(locator).toHaveValue(message)
}


    // goto the url
    // fill the username
    // fill the password
    // click on the login button
    // expect that the dashboard is visible