import {test, expect} from '@playwright/test'

test('Shadow dom element handling', async({page})=>{
    await page.goto("https://books-pwakit.appspot.com/explore?q=")
    await page.locator("#input").fill("Testing")
    await page.keyboard.press("Enter")
    const book  = await page.locator(".books li h2.title")
    await book.nth(0).waitFor()
    const bookName: string|null = await book.nth(0).textContent()

    console.log(bookName)
})