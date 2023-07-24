import * as locators from "./productsPage.locators";
import * as commonActions from "../../utils/browserActions.utils";
import * as assertions from "../../utils/browserAssertions.utils"


export async function checkIfProductPageIsOpen()
{
    await assertions.verifyElementsMatches(locators.pageHeading, "Add a product","heading is "+locators.pageHeading);
}

export async function addNewItem()
{
    await commonActions.click(locators.newProductBtn)
    browser.pause(3000);
}