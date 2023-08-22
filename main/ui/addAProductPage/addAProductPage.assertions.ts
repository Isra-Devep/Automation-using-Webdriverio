import * as assertions from "@wdioUtils/browserAssertions.utils"
import * as locators from "./addAProductPage.locator";


export async function checkIfAddAProductPageIsOpen ()
{
    await assertions.verifyElementsMatches(locators.getPageHeading, "Add a product","heading is "+locators.getPageHeading);
}