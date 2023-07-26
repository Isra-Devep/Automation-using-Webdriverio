import * as locators from "../singInPage/signInPage.locators";
import * as commonActions from "../../utils/browserActions.utils";




export async function checkSignInStatus()
{
    let buttonText;
    buttonText = await $(locators.getLoginBtn).getText();
    if (buttonText == "Login") {
    return true;
    } else {
    console.log("test failed; the button text is " + buttonText);
    return false;
    }
}

export async function logInToVia(phoneNumber,passCode)
{
   await commonActions.sendKeysToElement(locators.getPhoneNumberField, phoneNumber);
   await commonActions.sendKeysToElement(locators.getPassCodeField,passCode);
   await commonActions.click(locators.getLoginBtn)
}



