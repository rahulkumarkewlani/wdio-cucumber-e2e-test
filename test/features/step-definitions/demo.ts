import {Given,When,Then} from "@cucumber/cucumber";
import chai from "chai"

Given(/^Google page is opened$/, async function (){

    await browser.url("https://google.com")
    await browser.pause(1000)

})
When(/^Search with (.*)$/, async function (searchItem){
    console.log(`>> searchItem : ${searchItem}`);
    let ele= await $(`[name=q]`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")
    await browser.pause(3000)
})
Then(/^Click on first search result$/, async function (){
    let ele= await $(`<h3>`);
    ele.click();
    await browser.pause(3000)
})

Then(/^URL should match (.*)$/, async function (expectedUrl){
    console.log(`>> expectedUrl : ${expectedUrl}`);
    let url= await browser.getUrl()
    chai.expect(url).to.equal(expectedUrl);
})

