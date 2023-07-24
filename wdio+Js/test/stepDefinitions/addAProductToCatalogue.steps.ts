import assert from "soft-assert";
import { Given, Then, When } from "@cucumber/cucumber";
import credentials from "../../main/ui/config/signInCredentials.json";
import * as singInPageActions from "../../main/ui/singInPage/singInPage.tasks";
import * as myStorePageActions from "../../main/ui/myStorePage/myStorePage.tasks";
import * as productPageActions from "../../main/ui/productsPage/productsPage.tasks";
import * as addAProductPageActions from "../../main/ui/addAProductPage/addAProductPage.tasks";

Given(
    "User opens the via application and checks he's not signed in",
    async() =>{
        await browser.url(credentials.baseURL);
        await singInPageActions.checkSignInStatus();
    }
);

When ("The user tries to login using the given credentials",
async() =>{
    await singInPageActions.logIn(credentials.signInCredential.phoneNumber,credentials.signInCredential.passCode);
});

Then("Verify the user has signed in",
async() =>{
    await myStorePageActions.confirmSignedIn();
});
When("The user opens the Products page from the hamburger menu",
async() =>{
    await myStorePageActions.openProductsPage();
});
Then ("The user will be able to access the products page",
async() =>{
    await productPageActions.checkIfProductPageIsOpen(); 
})
When ("The user click the add new item button",
async() => {
    await productPageActions.addNewItem();
})
Then ("The user will be able to add the product after adding the product info",
async() => {
    await addAProductPageActions.checkIfAddAProductPageIsOpen();
    await addAProductPageActions.addProductInfo(credentials.addActiveProduct.Status,credentials.addActiveProduct.Name,credentials.addActiveProduct.Description,credentials.addActiveProduct.Stock,credentials.addActiveProduct.Price,credentials.addActiveProduct.productPhotoPath)
    await addAProductPageActions.saveinfo();
    browser.pause(10000);
})