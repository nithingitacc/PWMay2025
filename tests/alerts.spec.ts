import {test, expect} from '@playwright/test'

// Click on an element
// dialog event 

test("Alerts handling", async ({page})=>{
    await  page.goto("https://demoqa.com/alerts")
    // on()
    // waitForEvent()

    page.on('dialog', async function (dialog) {
        console.log(dialog.message()) // We are getting the text value from the alerts
        dialog.dismiss() // accept() will click on OK and dismiss() will click on CANCEL
    })

    await page.locator("#alertButton").click()

})

test("Confirm Alerts handling", async ({page})=>{
    await  page.goto("https://demoqa.com/alerts")
   
    page.on('dialog', function (dialog) {
        console.log(dialog.message()) 
        dialog.accept("Testing") 
    })
    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toContainText("You selected Ok")
})

test("Prompt Alerts handling", async ({page})=>{
    await  page.goto("https://demoqa.com/alerts")
    const message = "Test"
   
    page.on('dialog', function (dialog) {   
        console.log(dialog.message()) 
        dialog.accept(message) 
    })
    await page.locator("#promtButton").click()
    await expect(page.locator("#promptResult")).toContainText(`You entered ${message}`)
})