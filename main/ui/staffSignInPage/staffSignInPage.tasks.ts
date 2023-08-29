import * as locators from "./staffSignInPage.locators";
import * as commonActions from "wdioUtils/browserActions.utils";
import * as setUpCredentialsMerchant from "wdioTestData/config/MCconfigs/merchantSignInCredentials.json";
import * as setUpCredentialsCustomer from "wdioTestData/config/customerConfigs/customerSignInCredential.json";
import * as setUpCredentialsReseller from "wdioTestData/config/resellerConfigs/resellerSignInCredentials.json";


export async function checkSignInStatus()
{
    const buttonText = await $(locators.getLoginBtn).getText();
    if (buttonText == "Login") {
    return true;
    } else {
    console.log("test failed; the button text is " + buttonText);
    return false;
    }
}

export async function logInToVia(accountType)
{

    if (accountType=='customer')
    {
        await commonActions.sendKeysToElement(locators.getPhoneNumberField,setUpCredentialsCustomer.signInCredential.phoneNumber);
        await commonActions.sendKeysToElement(locators.getPassCodeField,setUpCredentialsCustomer.signInCredential.passCode);
        await commonActions.click(locators.getLoginBtn)
    }
    else if (accountType=='merchant')
    {
        await commonActions.sendKeysToElement(locators.getPhoneNumberField,setUpCredentialsMerchant.signInCredential.phoneNumber);
        await commonActions.sendKeysToElement(locators.getPassCodeField,setUpCredentialsMerchant.signInCredential.passCode);
        await commonActions.click(locators.getLoginBtn)
    }
    else if (accountType=='reseller')
    {
        await commonActions.sendKeysToElement(locators.getPhoneNumberField,setUpCredentialsReseller.signInCredential.phoneNumber);
        await commonActions.sendKeysToElement(locators.getPassCodeField,setUpCredentialsReseller.signInCredential.passCode);
        await commonActions.click(locators.getLoginBtn)

    }

}
