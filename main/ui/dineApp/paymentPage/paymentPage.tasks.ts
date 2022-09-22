import * as locators from "../paymentPage/paymentPage.locators"
import * as commonActions from "utils/browserActions.utils"
import credentials from "ui/config/evnCredentials.json"
import { convertToObject } from "typescript";

export async function addPaymentInformation()
{   
    await commonActions.sendKeysToElement(locators.phoneNumberField,credentials.paymentMethodInfo.creditCardPhoneNumber);
   


    await commonActions.sendKeysToElement(locators.nameField,credentials.paymentMethodInfo.creditCardName);
    
    await browser.switchToFrame(await $(locators.iframeForCreditCard));
    

    await locators.cardNumberField.setValue(credentials.paymentMethodInfo.creditCardNumber);

    await browser.switchToParentFrame();
    await commonActions.click(locators.phoneNumberCheckBox)
    await (await locators.continueBtn).click();
    browser.pause(2000);
    
}

export async function confirmPayment()
{
    await locators.creditCardSelection.waitForExist();
    console.log("waited")
    await locators.placeOrderBtn.click();
    console.log("payment done")
}