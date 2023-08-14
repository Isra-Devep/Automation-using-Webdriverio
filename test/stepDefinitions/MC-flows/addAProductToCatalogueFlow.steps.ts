import { Given, Then, When } from "@cucumber/cucumber";

import * as singInPageActions from "../../../main/ui/staffSignInPage/staffSignInPage.tasks";
import * as hamburgerMenuSideBarActions from "../../../main/ui/hamburgerMenuSideBar/hamburgerMenuSideBar.tasks";
import * as hamburgerMenuSideBarAssertions from "../../../main/ui/hamburgerMenuSideBar/hamburgerMenuSideBar.assertions";
import * as productPageActions from "../../../main/ui/productsPage/productsPage.tasks";
import * as productPageAssertions from "../../../main/ui/productsPage/productPage.assertions";
import * as addAProductPageActions from "../../../main/ui/addAProductPage/addAProductPage.tasks";
import * as signInPageAssertions from "../../../main/ui/addAProductPage/addAProductPage.assertions"
import * as browserSetUpActions from "../../../main/ui/browserSetUp/browserSetUp.actions";

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