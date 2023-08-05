import * as locators from "./paymentMethodsPage.locators"
import * as commonActions from "../../utils/browserActions.utils";




export async function addANewCreditCard(name,cardNumber,exp,CVC,zipCode)
{
    await commonActions.removeFieldData(locators.getAddCardHolderNameButton);
    await browser.switchToFrame($(locators.getIFrameForAddingACard));
        await commonActions.sendKeysToElement(locators.getAddCardHolderNameButton,name);
        await commonActions.sendKeysToElement(locators.getAddCardNumberInputField,cardNumber);
        await commonActions.sendKeysToElement(locators.getAddCardExpiryInputField,exp);
        await commonActions.sendKeysToElement(locators.getAddCardCVCInputField,CVC);
        await commonActions.sendKeysToElement(locators.getAddCardZipCodeInputField,zipCode);
        await browser.switchToParentFrame();
    await commonActions.click(locators.getAddCardInfoBtn);
    await browser.pause(5000);
}