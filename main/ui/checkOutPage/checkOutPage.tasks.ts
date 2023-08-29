import * as locators from "./checkOutPage.locators";
import * as commonActions from "wdioUtils/browserActions.utils";
import * as customerShippingAddressConfig from "wdioTestData/config/customerConfigs/customerShippingAddressDetails.json"
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

export async function addShippingLocation()
{   customerShippingAddressConfig
    let fullName=customerShippingAddressConfig.createAnAddress.fullName,
        phoneNumber=customerShippingAddressConfig.createAnAddress.phoneNumber,
        address=customerShippingAddressConfig.createAnAddress.address,
        aptSuiteUnit=customerShippingAddressConfig.createAnAddress.aptSuitUnit,
        city=customerShippingAddressConfig.createAnAddress.city,
        state=customerShippingAddressConfig.createAnAddress.State,
        zipcode=customerShippingAddressConfig.createAnAddress.zipCode

    await commonActions.click(locators.getAddANewShippingAddress);
    await commonActions.removeFieldData(locators.getFullNameField);
    await commonActions.sendKeysToElement((locators.getFullNameField),fullName);
    await commonActions.removeFieldData(locators.getPhoneNumberField);
    await commonActions.sendKeysToElement((locators.getPhoneNumberField),phoneNumber);
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