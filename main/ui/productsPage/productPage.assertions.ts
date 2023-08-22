import * as locators from "./productsPage.locators";

import * as assertions from "wdioUtils/browserAssertions.utils"


export async function checkIfProductPageIsOpen()
{
    await assertions.verifyElementsMatches(locators.getPageHeading, "Add a product","heading is "+locators.getPageHeading);
}
