import { Given, Then, When } from "@cucumber/cucumber";
import * as credentials from "../../../main/Test-Data/config/customerConfigs/customerSignInCredential.json";
import * as dropPageAssertions from "../../../main/ui/dropPage/dropPage.assertions"; 



Given ("The user open the via application and opens the drop he wanted to shop at", 
async() =>{
    await browser.url(credentials.baseURL);
}); 

Then ("The user confirms that the drop is open and the order can be placed.",
async() =>{
    await dropPageAssertions.checkIfDropIsOpen();
    await dropPageAssertions.checkIfItemsCanBeBought();
});

When ("The user adds the items to the cart and confirms that the cart is updated",
async() =>{

});
