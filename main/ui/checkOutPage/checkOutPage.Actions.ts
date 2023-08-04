import * as locators from "./checkOutPage.locators";
import * as commonActions from "../../utils/browserActions.utils";
let extractedValue, concatenatedText, numericalPart; 

export async function extractValue(element)
{   concatenatedText= (await $(element).getText()).split('\n').join(' ')
    numericalPart = concatenatedText.match(/\$\d+\.\d+/);
    extractedValue = parseFloat(numericalPart[0].substring(1));
    return extractedValue
}

export async function openDeliveryMethod()
{
    await commonActions.click(locators.getDeliveryBtn);
    await browser.pause(15000);
    (await $(locators.getDeliveryBtn)).waitForExist();
}

export async function openShippingMethod()
{
    await commonActions.click(locators.getShippingListBtn);
}

export async function confirmShippingAddress()
{
    await commonActions.click(locators.getDeliveryAndPaymentConfirmBtn);
}
export async function openPaymentMethod()
{
    await commonActions.click(locators.getPaymentMethodBtn);
    await browser.pause(3000);
    (await $(locators.getPayPalConfirmationLabel)).waitForExist();
}

export async function submitOrder()
{
    await commonActions.click(locators.getSubmitOrderBtn);
    browser.pause(5000);
}