import * as locators from "./paymentMethodsPage.locators"
import * as commonActions from "wdioUtils/browserActions.utils";
import * as customerCreditCardInformation from "@wdioTestData/config/customerConfigs/customerCreditDebitCardInformation.json";
import * as paymentMethodsPageAssertions from "./paymentMethodsPage.assertions";

let name,cardNumber,exp,CVC,zipCode,tempName,tempCardNumber,tempExp,tempCVC,tempZipCode

 async function cardDataFull(type)
 {
    if (type=='visa')
    { 
        tempName=customerCreditCardInformation.addAVisaCard.cardHolderName;
        tempCardNumber=customerCreditCardInformation.addAVisaCard.cardNumber;
        tempExp=customerCreditCardInformation.addAVisaCard.expiry;
        tempCVC=customerCreditCardInformation.addAVisaCard.CVC;
        tempZipCode=customerCreditCardInformation.addAVisaCard.zipCode;
        return [tempName,tempCardNumber,tempExp,tempCVC,tempZipCode];
    }

    else if(type=='master')
    {
        tempName=customerCreditCardInformation.addAMasterCard.cardHolderName;
        tempCardNumber=customerCreditCardInformation.addAMasterCard.cardNumber;
        tempExp=customerCreditCardInformation.addAMasterCard.expiry;
        tempCVC=customerCreditCardInformation.addAMasterCard.CVC;
        tempZipCode=customerCreditCardInformation.addAMasterCard.zipCode;
        return [tempName,tempCardNumber,tempExp,tempCVC,tempZipCode];
    }

    else if(type=='discover')
    {
        tempName=customerCreditCardInformation.addADiscoverCard.cardHolderName;
        tempCardNumber=customerCreditCardInformation.addADiscoverCard.cardNumber;
        tempExp=customerCreditCardInformation.addADiscoverCard.expiry;
        tempCVC=customerCreditCardInformation.addADiscoverCard.CVC;
        tempZipCode=customerCreditCardInformation.addADiscoverCard.zipCode;
        return [tempName,tempCardNumber,tempExp,tempCVC,tempZipCode];
    }
    
    else if (type=='americanExp')
    {
        tempName=customerCreditCardInformation.addAnAmericanExpressCard.cardHolderName;
        tempCardNumber=customerCreditCardInformation.addAnAmericanExpressCard.cardNumber;
        tempExp=customerCreditCardInformation.addAnAmericanExpressCard.expiry;
        tempCVC=customerCreditCardInformation.addAnAmericanExpressCard.CVC;
        tempZipCode=customerCreditCardInformation.addAnAmericanExpressCard.zipCode;
        return [tempName,tempCardNumber,tempExp,tempCVC,tempZipCode];
    }
 }

 export async function addANewCreditCard(cardType)
{   [name,cardNumber,exp,CVC,zipCode]= await cardDataFull(cardType);
    await commonActions.removeFieldData(locators.getAddCardHolderNameButton);
    await commonActions.sendKeysToElement((locators.getAddCardHolderNameButton),name);
    await browser.pause(5000);


    const iframeElement=await locators.getIFrameForAddingACard();
    await browser.switchToFrame(iframeElement);  
        await commonActions.sendKeysToElement((locators.getAddCardNumberInputField),cardNumber);
        await commonActions.sendKeysToElement((locators.getAddCardExpiryInputField),exp);
        await commonActions.sendKeysToElement((locators.getAddCardCVCInputField),CVC);
        await commonActions.sendKeysToElement((locators.getAddCardZipCodeInputField),zipCode);
        await browser.switchToParentFrame();
    await commonActions.click(locators.getAddCardInfoBtn);
    await browser.pause(5000);
}

export async function deleteASavedCard(cardType)
{   let [cardHolderName,last4Digits]= await paymentMethodsPageAssertions.cardDataShort(cardType);
    const getDeleteDebitCardBtn= await locators.checkForCard(cardType,cardHolderName,last4Digits);
    if ((await $(getDeleteDebitCardBtn)).isExisting())
    {
        await commonActions.click(getDeleteDebitCardBtn);
        await commonActions.click(locators.getConfirmationToRemoveCardBtn);
        browser.pause(4000);
    }

    else{console.log("card never existed brother, couldn't find "+getDeleteDebitCardBtn)}

}