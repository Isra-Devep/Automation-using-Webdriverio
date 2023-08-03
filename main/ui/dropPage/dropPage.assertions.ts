import * as locators from "./dropPage.locators";
import * as assertions from "../../utils/browserAssertions.utils";
import * as commonAssertions from "../../utils/browserAssertions.utils";


export async function checkIfDropIsOpen()
{
    await assertions.verifyElementIsExisting(locators.getViewCartBtn, "drop is closed");
}
export async function checkIfItemsCanBeBought()
{
    for (const element of await locators.getAddItemsBtn)
        {await assertions.verifyElementIsClickable(element,"item cant be bought")}
}

export async function checkIfCartIsUpdatedCorrectlyWhenAllItemsAddedOnce(timesPurchased)
{   
    const cartCount = parseInt(await $(locators.getViewCartBtn).getText());
    await commonAssertions.hardAssertElementMatchValue(cartCount,timesPurchased)
}  