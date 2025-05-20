// Drop Down
// 2 Types of DD
// 1. static drop down - The value might never get changed 
 // a. Single select DD
 // b. Multi select DD

// 2. dynamic drop down - 
// a. Single select DD
 // b. Multi select DD


// <select> </select>
// non-select - div, li, ul

// 1. DD developed using <select> tag - 
// Step by step
// a. Locate the drop down element
// b. Get the options from the drop down - selectOption(["value", "value1", value2]) // label, index


// 2. DD developed using non-select tag
// Step by step
// a. Locate the drop down element
// b. Click on the drop down
// c. Locate the target element 
// d. Click on the target element

import {test, expect} from '@playwright/test'

test("Drop down developed uisng select tag", async ({page})=>{
    await page.goto("https://practice.expandtesting.com/dropdown")
    // selectOption()
    await page.locator("#country").selectOption("US")
    await page.locator("#country").selectOption({value : 'CA'})
    await page.locator("#country").selectOption({label : 'Finland'})
    await page.locator("#country").selectOption({index : 1})

    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#cars").selectOption(["volvo", "saab", "audi"])
    await page.locator("#cars").selectOption(["volvo", "saab"])
    await page.locator("#cars").selectOption([{label : 'Opel'}, {index: 1}])
    
})

test("Drop down developed using non select tag", async ({page})=>{
   // await 

})
