import * as locators from "./checkOutPage.locators";
import * as commonActions from "../../utils/browserActions.utils";

export async function openDeliveryMethod()
{
    await commonActions.click(locators.getDeliveryBtn)
}

export async function selectPickUpLocation()
{   
    await commonActions.click(locators.getShippingListBtn);
    await commonActions.click(locators.getPickUpListBtn);
    await commonActions.click(locators.deliveryAndPaymentConfirmBtn);
    await browser.pause(5000);
}


export async function selectPaymentMethod()
{
    await commonActions.click(locators.deliveryAndPaymentConfirmBtn)
    await browser.pause(5000);
}