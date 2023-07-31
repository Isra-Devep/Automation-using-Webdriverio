import { Given, Then, When } from "@cucumber/cucumber";
import credentials from "../../../main/Test-Data/config/signInCredentials.json";
import * as singInPageActions from "../../../main/ui/singInPage/singInPage.tasks";
import * as myStorePageActions from "../../../main/ui/myStorePage/myStorePage.tasks";
import * as myStorePageAssertions from "../../../main/ui/myStorePage/myStorePage.assertions";
import * as productPageActions from "../../../main/ui/productsPage/productsPage.tasks";
import * as productPageAssertions from "../../../main/ui/productsPage/productPage.assertions";
import * as addAProductPageActions from "../../../main/ui/addAProductPage/addAProductPage.tasks";
import * as signInPageAssertions from "../../../main/ui/addAProductPage/addAProductPage.assertions"

Given(
    "User opens the via application and checks he's not signed in",
    async() =>{
        await browser.url(credentials.baseURL);
        await singInPageActions.checkSignInStatus();
    }
);

When ("The user tries to login using the given credentials",
async() =>{
    await singInPageActions.logInToVia(credentials.signInCredential.phoneNumber,credentials.signInCredential.passCode);
});

Then("Verify the user has signed in",
async() =>{
    await myStorePageAssertions.confirmUserIsSignedIn();
});
When("The user opens the Products page from the hamburger menu",
async() =>{
    await myStorePageActions.openProductsPage();
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
    await addAProductPageActions.addProductInfo(credentials.addActiveProduct.Status,credentials.addActiveProduct.Name,credentials.addActiveProduct.Description,credentials.addActiveProduct.Stock,credentials.addActiveProduct.Price,credentials.addActiveProduct.productPhotoPath);
})
Then ("The user will be able to add the product to the catalogue",
async() => {
    await addAProductPageActions.saveProductInfo();
    browser.pause(10000);
})