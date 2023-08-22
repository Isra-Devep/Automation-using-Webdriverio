import * as assertions from "@wdioUtils/browserAssertions.utils"
import * as locators from "./storePage.locators";


export async function confirmUserIsSignedIn()
{
    await assertions.verifyElementIsExisting((locators.getHamburgerMenu),"Not logged in");
}
