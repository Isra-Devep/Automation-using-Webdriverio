import * as assertions from "../../utils/browserAssertions.utils"
import * as locators from "./hamburgerMenuSideBar.locators";


export async function confirmUserIsSignedIn()
{
    await assertions.verifyElementIsExisting($(locators.getHamburgerMenu),"Not logged in");
}
export async function confirmProductButtonExists()
{   
    await assertions.verifyElementIsExisting($(locators.getSwitchToBuyingBtn),"Cant find switch to buying button");
    await assertions.verifyElementIsExisting($(locators.getProductBtn),"Cant find products button");
}
export async function confirmPaymentMethodButtonExist()
{
    await assertions.verifyElementIsExisting($(locators.getSwitchToSellingBtn),"Cant find switch to selling button");
    await assertions.verifyElementAttributeIsExisting($(locators.getPaymentMethodsBtn),"Cant find Payment Method button");
}