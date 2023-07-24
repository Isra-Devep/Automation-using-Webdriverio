import * as locators from "../singInPage/signInPage.locators";
import * as commonActions from "../../utils/browserActions.utils";




export async function checkSignInStatus()
{
    let buttonText;
    buttonText = await $(locators.loginBtn).getText();
    if (buttonText == "Login") {
    return true;
    } else {
    console.log("test failed; the button text is " + buttonText);
    return false;
    }
}

export async function logIn(phoneNumber,passCode)
{
   await commonActions.sendKeysToElement(locators.phoneNumberField, phoneNumber);
   await commonActions.sendKeysToElement(locators.passCodeField,passCode);
   await commonActions.click(locators.loginBtn)
}



