import { Given, Then, When } from "@cucumber/cucumber";
import credentials from "ui/config/evnCredentials.json"
import * as storePageActions from "ui/dineApp/storePage/storePage.tasks"
import * as basePageActions from "ui/dineApp/basePage/basePage.tasks"
import * as menuPageActions from "@wdio-ui/dineApp/menuPage/menuPage.tasks";
import * as shoppingCartPageActions from "ui/dineApp/shoppingCartPage/shoppingCartPage.tasks"
import * as paymentPageActions from "ui/dineApp/paymentPage/paymentPage.tasks"
import * as orderSummaryPageActions from "ui/dineApp/orderSummaryPage/orderSummaryPage.tasks"
import * as assertions from "utils/browserAssertions.utils"
import assert from 'soft-assert';

let priceOfItem1,priceOfItem2,totalBill
    

Given('first statement',async()=>
{
  browser.url("https://www.google.com")
})






// Given ('User opens the One market application and confirms that he is not signed in', async() =>
// {
//     browser.url(credentials.baseURL)
//     await basePageActions.checkSignInStatus();
   
   
// })
// Then ('User locates the store they wish to purchase from and opens it', async() =>
// {
//   await basePageActions.openStorePage(credentials.Store.StoreName);
//   await storePageActions.openStoreMenu();
// })

// Then ('User confirms that the store is open and order can be placed for pickup', async() =>
// {
//     //skiped for now
//     console.log("I.A open hoga :)")
// })

// Then ('User locates the merchandise they want to purchase and confirms that they are available', async() =>
// {  
//     await menuPageActions.checkMerchandiseAvailability(credentials.Store.firstMerchandise);
// })

// Then ('User adds the items to the cart and confirms that the cart is updated', async() =>
// {
//     await console.log("we're here")
//     priceOfItem1=await menuPageActions.addMerchandiseToCart(credentials.Store.firstMerchandise,credentials.Store.quantityFirstMerchandise)
//     await console.log("price of item 1 from steps is "+ priceOfItem1)
    
// })

// Then ('Cart is updated then the user adds more items to the cart and verifies the cart again', async() =>
// {
//     priceOfItem2=await menuPageActions.addMerchandiseToCart(credentials.Store.secondMerchandise,credentials.Store.quantitySecondMerchandise)
    
// })

// Then ('User clicks on the cart button to, adds a tip, verifies total bill and continues to payment', async() =>
// {
//     await menuPageActions.openCart();
//     browser.pause(3000);
//     totalBill= await shoppingCartPageActions.openOrderSummary(priceOfItem1,credentials.Store.firstMerchandise,credentials.Store.quantityFirstMerchandise,priceOfItem2,credentials.Store.secondMerchandise,credentials.Store.quantitySecondMerchandise)
// })

// Then ('The user clicks on the payment button', async()=>
// { 
//     await shoppingCartPageActions.continueToPayment();
// })

// Then ('the user adds a credit card and clicks confirm payment', async()=>
// {
//   await paymentPageActions.addPaymentInformation();
//   await paymentPageActions.confirmPayment();
// })

// When ('The payment is processed the user confirms the information is correct', async()=>
// {
//     await orderSummaryPageActions.billVerficiation(totalBill)
//     assert.softAssertAll();
// })