import {test, expect} from '@playwright/test'

test("Window handling", async ({page})=>{
   
    await page.goto("https://demo.automationtesting.in/Windows.html")

   // const page1 =  page.waitForEvent('popup') // 
  //  console.log(page1);

    await page.locator("button.btn-info").first().click()
    const newPage = await page.waitForEvent('popup')

  //  const newPage = await page1
    //    console.log(newPage);



    // Promise has a 3 stages: 1. pending, 2. success or accepted 3. rejected

    await newPage.getByText("Downloads").click()
    await expect(newPage.locator("div.text-white h2")).toContainText("Support the Selenium Project")

    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()


})