import { Given, Then, When } from "@cucumber/cucumber";
import * as dropPageAssertions from "../../../main/ui/dropPage/dropPage.assertions"; 
import * as dropPageTasks from "../../../main/ui/dropPage/dropPage.tasks"
import * as dropPageActions from "../../../main/ui/dropPage/dropPage.action";
import * as singInPageActions from "../../../main/ui/staffSignInPage/staffSignInPage.tasks";
import * as dropPurchasingCredentials from "../../../main/testData/config/customerConfigs/customerDropPurchaseConfig.json";
import * as checkOutPageAssertions from "../../../main/ui/checkOutPage/checkOutPage.assertions";
import * as checkOutPageActions from "../../../main/ui/checkOutPage/checkOutPage.actions";
import * as checkOutPageTasks from "../../../main/ui/checkOutPage/checkOutPage.tasks";
import * as orderPlacedPageTasks from "../../../main/ui/orderPlacedPage/orderPlacedPage.tasks";
import * as orderPlacedPageAssertions from "../../../main/ui/orderPlacedPage/orderPlacedPage.assertions"
import * as browserSetUpActions from "../../../main/ui/browserSetUp/browserSetUp.actions";



Given ("The user open the via application and opens the drop he wanted to shop at", 
async() =>{
    await  browserSetUpActions.setUpBrowser("release");
    await singInPageActions.logInToVia("customer");
    await dropPageActions.openDrop("drop With Items With Variants")
}); 

Then ("The user confirms that the drop is open and the order can be placed.",
async() =>{
    await dropPageAssertions.checkIfDropIsOpen();
    await dropPageAssertions.checkIfItemsCanBeBought();
});

When ("The user adds the items with no variants to the cart and confirms that the cart is updated",
async() =>{
    await dropPageTasks.addingAllDropItemsToCart(dropPurchasingCredentials.dropWithNoVariantItems.firstItemName,dropPurchasingCredentials.dropWithNoVariantItems.instancePurchasedInPickUpMode);
    await dropPageTasks.addingAllDropItemsToCart(dropPurchasingCredentials.dropWithNoVariantItems.secondItemName,dropPurchasingCredentials.dropWithNoVariantItems.instancePurchasedInPickUpMode);
    await dropPageAssertions.checkIfCartIsUpdatedCorrectlyWhenAllItemsAddedOnce((dropPurchasingCredentials.dropWithNoVariantItems.instancePurchasedInPickUpMode*2));
});

When ("The user adds the items with variants to the cart and confirms that the cart is updated",
async() =>{
    await dropPageTasks.addingAllDropItemsToCart(dropPurchasingCredentials.dropWithItemsWithVariants.firstItemName,dropPurchasingCredentials.dropWithItemsWithVariants.instancePurchasedInPickUpMode,dropPurchasingCredentials.dropWithItemsWithVariants);
    await dropPageTasks.addingAllDropItemsToCart(dropPurchasingCredentials.dropWithItemsWithVariants.secondItemName,dropPurchasingCredentials.dropWithItemsWithVariants.instancePurchasedInPickUpMode,dropPurchasingCredentials.dropWithItemsWithVariants.firstVariable,dropPurchasingCredentials.dropWithItemsWithVariants.secondVariable);
    await dropPageAssertions.checkIfCartIsUpdatedCorrectlyWhenAllItemsAddedOnce(dropPurchasingCredentials.dropWithItemsWithVariants.instancePurchasedInPickUpMode*2);
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

Then ("The user selects the Shipping tab to see all saved addresses",
async()=>{
    await checkOutPageActions.openShippingMethod();
});

Then ("The user adds a new Shipping address",
async()=>{
    await checkOutPageTasks.addShippingLocation()
})

When ("The user selects a pickup location and clicks confirm", 
async()=>{
    await checkOutPageTasks.selectPickUpLocation();
});

When ("The user confirms that shipping address",
async () => {
    await checkOutPageActions.confirmShippingAddress();
})

Then ("The bill remains the same no Shipping fee is added",
async()=>{
    await checkOutPageAssertions.confirmCartEntryValues();
});

Then ("The bill changes and Shipping Fee is added",
async()=>
{   
    await checkOutPageAssertions.confirmCartEntryNewValues();
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

Then ("The user can verify that the details of the order submission are correct for pickup order",
async()=>{
    await orderPlacedPageTasks.verifyOrderSubmissionDetails(); 
    await orderPlacedPageAssertions.confirmCartEntryValuesForPickupOrder();
});

Then ("The user can verify that the details of the order submission are correct for shipping order",
async()=>{
    await orderPlacedPageTasks.verifyOrderSubmissionDetails(); 
    await orderPlacedPageAssertions.confirmCartEntryValuesForShippingOrder();
})