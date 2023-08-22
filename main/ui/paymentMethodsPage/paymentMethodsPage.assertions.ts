import * as locators from "./paymentMethodsPage.locators";
import * as customerCreditCardInformation from "@wdioTestData/config/customerConfigs/customerCreditDebitCardInformation.json";
let tempHolderName, tempLast4Digits,holderName,last4digits



export async function cardDataShort(cardType)
{
    if (cardType=='visa')
    { 
        tempHolderName=customerCreditCardInformation.addAVisaCard.cardHolderName;
        tempLast4Digits=customerCreditCardInformation.addAVisaCard.last4Digits;
        return [tempHolderName,tempLast4Digits];
    }

    else if(cardType=='master')
    {
        tempHolderName=customerCreditCardInformation.addAMasterCard.cardHolderName;
        tempLast4Digits=customerCreditCardInformation.addAMasterCard.last4Digits;
        return [tempHolderName,tempLast4Digits];
    }

    else if(cardType=='discover')
    {
        tempHolderName=customerCreditCardInformation.addADiscoverCard.cardHolderName;
        tempLast4Digits=customerCreditCardInformation.addADiscoverCard.last4Digits;
        return [tempHolderName,tempLast4Digits];
    }
    
    else if (cardType=='americanExp')
    {
        tempHolderName=customerCreditCardInformation.addAnAmericanExpressCard.cardHolderName;
        tempLast4Digits=customerCreditCardInformation.addAnAmericanExpressCard.last4Digits;
        return [tempHolderName,tempLast4Digits];
    }
    else 
    return null;
}
    
export async function verifyCardExistence(cardType)
{  [holderName,last4digits]=await cardDataShort(cardType);
    const getDeleteDebitCardBtn= await locators.checkForCard(cardType,holderName,last4digits);
    await expect($(getDeleteDebitCardBtn)).toBeExisting();
}

export async function verifyCardDoesNotExist(cardType)
{   [holderName,last4digits]=await cardDataShort(cardType);
    const getDeleteDebitCardBtn= await locators.checkForCard(cardType,holderName,last4digits);
    await expect($(getDeleteDebitCardBtn)).not.toBeExisting();
}