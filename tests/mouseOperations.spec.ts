// click - click()
// double click 
// right click
// mouse hover
// drag and drop

import {test, expect} from '@playwright/test'

test("double click and right click validation", async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    // dblClick() - It will perform the double click on the matching element
    await page.getByText("Double-Click Me To See Alert").dblclick()

    //right click -  We have to use click() and optional parameter as {button: 'right'}
    await page.getByText("right click me").click({button: 'right'})
    await page.getByText("Delete").last().click()

})


test.only('Mouse over an element', async ({page})=>{
    await page.goto("https://www.spicejet.com/")
    // hover() - Hover over the matching element.
    await page.getByText("Add-ons", {exact: true}).first().hover()
   // await page.waitForTimeout(3000)
    await expect(page.getByTestId("test-id-Visa Services")).toBeVisible()
})

// Playwright handles the Alert or popup by default

// drop down 
// Alert or pop-up handling
// Window handling - 


