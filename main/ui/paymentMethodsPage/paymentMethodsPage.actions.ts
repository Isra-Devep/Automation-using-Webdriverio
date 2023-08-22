import * as locators from "./paymentMethodsPage.locators"
import * as commonActions from "wdioUtils/browserActions.utils";


export async function openFieldForAddingANewCard()
{
    commonActions.click(locators.getAddANewCreditDebitCardBtn);
}