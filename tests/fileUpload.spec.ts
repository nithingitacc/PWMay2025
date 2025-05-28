import {test, expect} from '@playwright/test'
import path from 'path'

test("Single file upload handling", async({page})=>{
    // setInputFiles("file path")
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("#filesToUpload").setInputFiles("TestData/Courses.txt")
    await expect(page.locator("#fileList li")).toContainText("Courses.txt")

})

test("Multiple files upload handling", async({page})=>{
    // setInputFiles("file path")
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    console.log(__dirname);
   // const path1 = __dirname + "../TestData/Courses.txt"
    // C:\Users\prave\OneDrive\Documents\Praveen-PW\PWMay2025\tests\..\TestData\Cypress.txt
    const path1 = path.join(__dirname, "../TestData/Courses.txt")
    const path2 = path.join(__dirname, "../TestData/Cypress.txt")
    console.log(path1);
   // console.log(path2);



    //await page.locator("#filesToUpload").setInputFiles(["TestData/Courses.txt", "TestData/Cypress.txt"])
    await page.locator("#filesToUpload").setInputFiles([path1, path2])

    await expect(page.locator("#fileList li").first()).toContainText("Courses.txt")
    await expect(page.locator("#fileList li").last()).toContainText("Cypress.txt")
})