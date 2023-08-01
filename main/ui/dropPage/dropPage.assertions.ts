import * as locators from "./dropPage.locators";
import * as assertions from "../../utils/browserAssertions.utils";
let items;

export async function checkIfDropIsOpen()
{
    await assertions.verifyElementIsExisting(locators.getViewCartBtn, "drop is closed");
}
export async function checkIfItemsCanBeBought()
{
    for (const element of await locators.getAddItemsBtn)
        {
            await assertions.verifyElementIsClickable(element,"item cant be bought")
        }
}

export async function checkIfCartIsUpdatedCorrectlyWhenAllItemsAddedOnce()
{   items=0;
    const cartCount = parseInt(await $(locators.getViewCartBtn).getText());
    for (const element of await locators.getAddItemsBtn)
        {
            items=items+1;
            console.log("item variables value is now "+ items)
        }
    await expect(cartCount).toHaveValue(items); //done till here.
}  skt 