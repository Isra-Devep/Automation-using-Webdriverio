import * as locators from "./customerSignInPage.locators"
import * as commonActions from "../../utils/browserActions.utils"



export async function customerSignIn(phoneNumber)
{
    await commonActions.sendKeysToElement(locators.getPhoneNumberField,phoneNumber);
    await commonActions.click(locators.getNextbtn);
}

