import { Given, Then, When } from "@cucumber/cucumber";

import * as singInPageActions from "wdioUi/staffSignInPage/staffSignInPage.tasks";
import * as hamburgerMenuSideBarActions from "wdioUi/hamburgerMenuSideBar/hamburgerMenuSideBar.tasks";
import * as hamburgerMenuSideBarAssertions from "wdioUi/hamburgerMenuSideBar/hamburgerMenuSideBar.assertions";
import * as productPageActions from "wdioUi/productsPage/productsPage.tasks";
import * as productPageAssertions from "wdioUi/productsPage/productPage.assertions";
import * as addAProductPageActions from "wdioUi/addAProductPage/addAProductPage.tasks";
import * as signInPageAssertions from "wdioUi/addAProductPage/addAProductPage.assertions"
import * as browserSetUpActions from "wdioUi/browserSetUp/browserSetUp.actions";

Given ("The User opens the via application and signs in",
async()=>{
    await  browserSetUpActions.setUpBrowser("release");
    await singInPageActions.logInToVia("merchant");
    await singInPageActions.checkSignInStatus();
    await hamburgerMenuSideBarAssertions.confirmUserIsSignedIn();
});

When("The user opens the Products page from the hamburger menu",
async() =>{
    await hamburgerMenuSideBarActions.openProductsPage();
});
Then ("The user will be able to access the products page",
async() =>{
    await productPageAssertions.checkIfProductPageIsOpen(); 
})
When ("The user clicks the add new item button",
async() => {
    await productPageActions.addNewProductItem();
})
Then ("The user will be able to see the add product page", 
async() =>{
    await signInPageAssertions.checkIfAddAProductPageIsOpen();
})
When ("The user adds the product info",
async()=> {
    await addAProductPageActions.addProductInfo();
})
Then ("The user will be able to add the product to the catalogue",
async() => {
    await addAProductPageActions.saveProductInfo();
    browser.pause(10000);
})