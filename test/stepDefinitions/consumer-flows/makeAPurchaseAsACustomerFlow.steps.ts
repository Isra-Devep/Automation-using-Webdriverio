import { Given, Then, When } from "@cucumber/cucumber";
import * as dropPageAssertions from "../../../main/ui/dropPage/dropPage.assertions"; 
import * as dropPageTasks from "../../../main/ui/dropPage/dropPage.tasks"
import * as dropPageActions from "../../../main/ui/dropPage/dropPage.Action";
import * as setUpCredentials from "../../../main/Test-Data/config/MCconfigs/signInCredentials.json";
import * as singInPageActions from "../../../main/ui/staffSignInPage/staffSignInPage.tasks";
import * as dropPurchasingCredentials from "../../../main/Test-Data/config/customerConfigs/customerDropPurchaseConfig.json";
import * as checkOutPageAssertions from "../../../main/ui/checkOutPage/checkOutPage.Assertions";
import * as checkOutPageActions from "../../../main/ui/checkOutPage/checkOutPage.Actions";
import * as checkOutPageTasks from "../../../main/ui/checkOutPage/checkOutPage.tasks";
import * as orderPlacedPageTasks from "../../../main/ui/orderPlacedPage/orderPlacedPage.tasks";



Given ("The user open the via application and opens the drop he wanted to shop at", 
async() =>{
    await browser.url(setUpCredentials.baseURL);
    await singInPageActions.logInToVia(setUpCredentials.signInCredential.phoneNumber,setUpCredentials.signInCredential.passCode);
    await browser.pause(5000);
    await browser.url(dropPurchasingCredentials.dropWithNoVariantItems.url);
}); 

Then ("The user confirms that the drop is open and the order can be placed.",
async() =>{
    await dropPageAssertions.checkIfDropIsOpen();
    //await dropPageAssertions.checkIfItemsCanBeBought();
});

When ("The user adds the items with no variants to the cart and confirms that the cart is updated",
async() =>{
    await dropPageTasks.addingAllDropItemsToCart(dropPurchasingCredentials.dropWithNoVariantItems.instancePurchased);
    await dropPageAssertions.checkIfCartIsUpdatedCorrectlyWhenAllItemsAddedOnce(dropPurchasingCredentials.dropWithNoVariantItems.instancePurchased);
});

Then ("The user clicks on the cart button, verifies total bill without shipping fees",
async() =>{
    await dropPageActions.openCart();
    await browser.pause(15000);
    await checkOutPageAssertions.confirmCartEntryValues();
});

Then ("The user clicks on the delivery method and sees all pickup locations",
async()=>{
    await checkOutPageActions.openDeliveryMethod();
    
});

When ("The user selects a pickup location and clicks confirm", 
async()=>{
    await checkOutPageTasks.selectPickUpLocation();
});

Then ("The bill remains the same no Shipping fee is added",
async()=>{
    await checkOutPageAssertions.confirmCartEntryValues();
});
When ("The user clicks on the How you'll pay button", 
async()=>{
    await checkOutPageActions.openPaymentMethod();
});
Then ("The user can select payment method",
async()=>{
    await checkOutPageTasks.selectPaymentMethod();
});
When ("The user clicks Submit Order button, the order is submitted",
async()=>{
    await checkOutPageActions.submitOrder()
});
Then ("The user can verify that the details of the order submission are correct",
async()=>
{
    await orderPlacedPageTasks.verifyOrderSubmissionDetails(); 
});