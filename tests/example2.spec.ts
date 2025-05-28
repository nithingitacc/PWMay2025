import {test, expect} from '@playwright/test'

test('has title', async ( {page} ) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.locator("#username").fill("student")
  await page.locator("#password").fill("Password123")
  await page.locator("#submit").click()
  await expect(page.locator("h1.post-title")).toBeVisible()
 

  // await launch the url
  // await Fill the username
  // await Fill the password
  // await Click the login button

});


// browser and page fixture in playwright


test("Login validation using browser fixture", async ({browser})=>{

  // create a browser context 
  // create a new page on the browser context

  const context = await browser.newContext() // Creates a new browser context
  const page = await context.newPage() 
  
  const page1 = await context.newPage()//Creates a new page in the browser context.

  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.locator("#username").fill("student")
  await page.locator("#password").fill("Password123")
  await page.locator("#submit").click()
  await expect(page.locator("h1.post-title")).toBeVisible()

  await page1.goto('https://practicetestautomation.com/practice-test-login/');
  await page1.locator("#username").fill("student")
  await page1.locator("#password").fill("Password123")
  await page1.locator("#submit").click()
  await expect(page1.locator("h1.post-title")).toBeVisible()
})

test("Login validation using page fixture", async ({page})=>{
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.locator("#username").fill("student")
  await page.locator("#password").fill("Password123")
  await page.locator("#submit").click({force: true})
  await expect(page.locator("h1.post-title")).toBeVisible()
})


