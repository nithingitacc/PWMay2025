import {test, expect} from '@playwright/test'

// Click on an element
// dialog event 

test("Alerts handling", async ({page})=>{
    await  page.goto("https://demoqa.com/alerts")
    // on()
    // waitForEvent()

    page.on('dialog', dialog => {
        console.log(dialog.message()) // We are getting the text value from the alerts
        dialog.accept() // accept() will click on OK and dismiss() will click on CANCEL
    })

    await page.locator("#alertButton").click()

})