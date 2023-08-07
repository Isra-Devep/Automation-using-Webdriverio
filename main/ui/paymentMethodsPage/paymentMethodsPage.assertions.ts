import * as locators from "./paymentMethodsPage.locators";
import * as commonAssertions from "../../utils/browserAssertions.utils";


export async function verifyCardExistence(cardType,holderName,last4digits)
{   
    const getDeleteDebitCardBtn= await locators.checkForCard(cardType,holderName,last4digits);
    //await commonAssertions.verifyElementIsExisting($(getDeleteDebitCardBtn), cardType+" with holder name "+holderName+" and last 4 digits "+last4digits+" doesn't exist here");
    await expect($(getDeleteDebitCardBtn)).toBeExisting();
}

export async function verifyCardDoesNotExist(cardType,holderName,last4digits)
{
    const getDeleteDebitCardBtn= await locators.checkForCard(cardType,holderName,last4digits);
    await expect($(getDeleteDebitCardBtn)).not.toBeExisting();
}