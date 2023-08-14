import { Given, Then, When } from "@wdio/cucumber-framework";
import * as browserSetUpActions from "../../../main/ui/browserSetUp/browserSetUp.actions"
import * as singInPageActions from "../../../main/ui/staffSignInPage/staffSignInPage.tasks";




Given ("The user wants to signs in to the application as a customer", 
async() =>{
    await browserSetUpActions.setUpBrowser("release");
    await singInPageActions.logInToVia("customer");
    await browser.pause(5000);
}); 

Given ("The user wants to signs in to the application as a merchant", 
async() =>{
    await browserSetUpActions.setUpBrowser("release");
    await singInPageActions.logInToVia("merchant");
    await browser.pause(5000);
}); 
Given ("The user wants to signs in to the application as a reseller", 
async() =>{
    await browserSetUpActions.setUpBrowser("release");
    await singInPageActions.logInToVia("reseller");
    await browser.pause(5000);
}); 