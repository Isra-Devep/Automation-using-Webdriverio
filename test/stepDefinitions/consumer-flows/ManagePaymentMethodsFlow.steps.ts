import { Given, Then, When } from "@cucumber/cucumber";
import * as singInPageActions from "wdioUi/staffSignInPage/staffSignInPage.tasks";
import * as hamburgerMenuSideBarTasks from "wdioUi/hamburgerMenuSideBar/hamburgerMenuSideBar.tasks"
import * as paymentMethodsPageActions from "wdioUi/paymentMethodsPage/paymentMethodsPage.actions";
import * as paymentMethodsPageTasks from "wdioUi/paymentMethodsPage/paymentMethodsPage.tasks";
import * as paymentMethodsAssertions from "wdioUi/paymentMethodsPage/paymentMethodsPage.assertions"
import * as browserSetUpActions from "wdioUi/browserSetUp/browserSetUp.actions";



Given ("The user open the via application and signs in",
async()=>{
    await  browserSetUpActions.setUpBrowser("release");
    await singInPageActions.logInToVia("customer");
    });

Then ("The user confirms they are in buying mode or enters the buying mode",
async()=>{
    await hamburgerMenuSideBarTasks.confirmBuyingMode();
});

When ("The user clicks the Payment method button and access the payment methods",
async()=>{
    await hamburgerMenuSideBarTasks.OpenPaymentMethodsPage();
}); 

Then ("The user clicks on the Add credit or debit card option",
async()=>{
    await paymentMethodsPageActions.openFieldForAddingANewCard();
}) 

When ("The user adds info for a new visa card and saves it",
async()=>{
    await paymentMethodsPageTasks.addANewCreditCard("visa");
});

Then ("The user will verify the saved card",
async()=>{
    await paymentMethodsAssertions.verifyCardExistence("visa");
});

When ("The user deletes that card",
async()=>{
    await paymentMethodsPageTasks.deleteASavedCard("visa");
})

Then ("The user will verify the card isn't saved anymore",
async()=>{
    await paymentMethodsAssertions.verifyCardDoesNotExist("visa");
})