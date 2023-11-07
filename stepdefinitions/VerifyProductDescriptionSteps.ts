import {Given, When, Then} from '@wdio/cucumber-framework';
import { VerifyProductTask } from "../tasks/VerifyProductTask";
import { ProductDescriptionPage } from '../user-interface/ProductDescriptionPage';
import {expect as assert} from 'chai'
import {expect} from 'chai'
import { VerifyProductQuestion } from '../questions/VerifyProductQuestion';

let verifyProductTask = new VerifyProductTask();
let productDescriptionPage = new ProductDescriptionPage();
let verifyProductQuestion = new VerifyProductQuestion();

interface DatatableRow{
    key: string;
    value: string;
}

Given(/^The user enters the product page$/, async () =>{
    await productDescriptionPage.open();
})

When("The user searches for the product: {string}", async (productName) => {
    //await verifyProduct.SearchProduct(productName);
})

When(/^When The user looks for "About this iterm" section$/, async () =>{
    await productDescriptionPage.productDescriptionUL.isDisplayed();
})

Then(/^The user finds the product with desired specifications$/, async (table) => {
    let datatable: DatatableRow[] = table.raw().map((row: string[]) => {
        return { key: row[0], value: row[1] };
    })
    await verifyProductQuestion.checkProductRAMSize(datatable[0].value)
    await verifyProductQuestion.checkProductTag()
    await verifyProductQuestion.checkProductBrand(datatable[1].value)
})

Then("The product description should contain {string} bullets", async (bulletQuantity) => {
    await expect(await verifyProductTask.getBulletsQuantity()).to.have.lengthOf(5);
})