import * as locators from "./dropPage.locators";
import * as assertions from "wdioUtils/browserAssertions.utils";
import * as commonAssertions from "wdioUtils/browserAssertions.utils";
import * as dropPurchasingCredentials from "wdioTestData/config/customerConfigs/customerDropPurchaseConfig.json";



export async function checkIfDropIsOpen()
{
    await assertions.verifyElementIsNotExisting(locators.getEndedStatusBtn);
}
export async function checkIfItemsCanBeBought()
{   let name=dropPurchasingCredentials.dropWithNoVariantItems.firstItemName
    await assertions.verifyElementIsClickable($(locators.getAddItemBtn(name)),"item cant be bought")
}

export async function checkIfCartIsUpdatedCorrectlyWhenAllItemsAddedOnce(timesPurchased)
{   
    const cartCount = parseInt(await $(locators.getViewCartBtn).getText());
    await commonAssertions.hardAssertElementMatchValue(cartCount,timesPurchased)
}  