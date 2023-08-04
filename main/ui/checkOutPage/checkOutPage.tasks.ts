import * as locators from "./checkOutPage.locators";
import * as commonActions from "../../utils/browserActions.utils";

export async function openDeliveryMethod()
{
    await commonActions.click(locators.getDeliveryBtn);
}

export async function selectPickUpLocation()
{   
    await commonActions.click(locators.getPickUpListBtn);
    await commonActions.click(locators.getDeliveryAndPaymentConfirmBtn);
    await browser.pause(5000);
}

export async function addShippingLocation(fullName,phoneNumber,address,aptSuiteUnit,city,state,zipcode)
{   
    await commonActions.click(locators.getAddANewShippingAddress);
    //await commonActions.sendKeysToElement(locators.getFullNameField,fullName);
    //await commonActions.sendKeysToElement(locators.getPhoneNumberField,phoneNumber);
    await commonActions.sendKeysToElement(locators.getAddressField,address);
    await browser.keys('\uE00C');
    await commonActions.sendKeysToElement(locators.getAptSuiteUnitField,aptSuiteUnit);
    await commonActions.sendKeysToElement(locators.getCityField,city);
    await commonActions.sendKeysToElement(locators.getStateField,state);
    await commonActions.sendKeysToElement(locators.getZipCodeField,zipcode);
    await commonActions.click(locators.getSaveBtn);
} 
export async function selectPaymentMethod()
{
    await commonActions.click(locators.getDeliveryAndPaymentConfirmBtn)
    await browser.pause(5000);
}