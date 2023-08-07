export const getAddANewCreditDebitCardBtn="//button[contains(.,'Add credit/debit card')]";
export const getAddCardHolderNameButton='//input[@id="outlined-basic"]';
export const getIFrameForAddingACard=()=>$('//iframe[@title="Secure card payment input frame"]');
    export const getAddCardNumberInputField='//input[@name="cardnumber"]';
    export const getAddCardExpiryInputField='//input[@name="exp-date"]';
    export const getAddCardCVCInputField='//input[@name="cvc"]';
    export const getAddCardZipCodeInputField='//input[@name="postal"]';
export const getAddCardInfoBtn="//button[(text()='Add')]";
export const getConfirmationToRemoveCardBtn="//button[(text()='Confirm')]"

export function checkForCard(cardType,holderName,last4digits)
{  
    return (`//div[contains(.,'${holderName}')]/following-sibling::button[@aria-label='Remove ${cardType} credit card with last 4 digits: ${last4digits}']`);
    
} 


//export const getDeleteDebitCardBtn="//div[contains(.,'hello')]/following-sibling::button[@aria-label="Remove visa credit card with last 4 digits: 4242"]"


