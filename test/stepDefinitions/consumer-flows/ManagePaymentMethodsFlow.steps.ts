import { Given, Then, When } from "@cucumber/cucumber";
import * as setUpCredentials from "../../../main/Test-Data/config/MCconfigs/signInCredentials.json";
import * as singInPageActions from "../../../main/ui/staffSignInPage/staffSignInPage.tasks";
import * as hamburgerMenuSideBarTasks from "../../../main/ui/hamburgerMenuSideBar/hamburgerMenuSideBar.tasks"
import * as paymentMethodsPageActions from "../../../main/ui/paymentMethodsPage/paymentMethodsPage.actions";
import * as paymentMethodsPageTasks from "../../../main/ui/paymentMethodsPage/paymentMethodsPage.tasks";
import * as paymentMethodsAssertions from "../../../main/ui/paymentMethodsPage/paymentMethodsPage.assertions"
import * as customerCreditCardInformation from "../../../main/Test-Data/config/customerConfigs/customerCreditDebitCardInformation.json"



Given ("The user open the via application and signs in",
async()=>{
    await browser.url(setUpCredentials.baseURL);
    await singInPageActions.logInToVia(setUpCredentials.signInCredential.phoneNumber,setUpCredentials.signInCredential.passCode);
    await browser.pause(5000);
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
    await paymentMethodsPageTasks.addANewCreditCard(
        customerCreditCardInformation.addAVisaCard.cardHolderName,
        customerCreditCardInformation.addAVisaCard.cardNumber,
        customerCreditCardInformation.addAVisaCard.expiry,
        customerCreditCardInformation.addAVisaCard.CVC,
        customerCreditCardInformation.addAVisaCard.zipCode
    );
});

Then ("The user will verify the saved card",
async()=>{
    await paymentMethodsAssertions.verifyCardExistence(
        customerCreditCardInformation.addAVisaCard.cardType,
        customerCreditCardInformation.addAVisaCard.cardHolderName,
        customerCreditCardInformation.addAVisaCard.last4Digits);
});

When ("The user deletes that card",
async()=>{
    await paymentMethodsPageTasks.deleteASavedCard(
        customerCreditCardInformation.addAVisaCard.cardType,
        customerCreditCardInformation.addAVisaCard.cardHolderName,
        customerCreditCardInformation.addAVisaCard.last4Digits);
})

Then ("The user will verify the card isn't saved anymore",
async()=>{
    await paymentMethodsAssertions.verifyCardDoesNotExist(
        customerCreditCardInformation.addAVisaCard.cardType,
        customerCreditCardInformation.addAVisaCard.cardHolderName,
        customerCreditCardInformation.addAVisaCard.last4Digits);
})