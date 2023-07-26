import * as assertions from "../../utils/browserAssertions.utils"
import * as locators from "./myStorePage.locators";


export async function confirmUserIsSignedIn()
{
    await assertions.verifyElementIsExisting($(locators.getHamburgerMenu),"Not logged in");
}
