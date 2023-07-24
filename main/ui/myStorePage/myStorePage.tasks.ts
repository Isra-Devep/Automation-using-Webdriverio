import * as locators from "./myStorePage.locators";
import * as commonActions from "../../utils/browserActions.utils";
import * as assertions from "../../utils/browserAssertions.utils"

export async function confirmSignedIn()
{
    await assertions.verifyElementIsExisting($(locators.hamburgerMenu),"Not logged in");
}

export async function openProductsPage()
{
    await commonActions.click(locators.hamburgerMenu)
    await assertions.verifyElementIsExisting($(locators.productBtn),"Cant find products button");
    await commonActions.click(locators.productBtn);
}
