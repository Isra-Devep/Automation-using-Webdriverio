import * as locators from "./myStorePage.locators";
import * as commonActions from "../../utils/browserActions.utils";
import * as assertions from "../../utils/browserAssertions.utils"


export async function openProductsPage()
{
    await commonActions.click(locators.getHamburgerMenu)
    await assertions.verifyElementIsExisting($(locators.getProductBtn),"Cant find products button");
    await commonActions.click(locators.getProductBtn);
}
