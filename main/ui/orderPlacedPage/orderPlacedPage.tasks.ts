import * as locators from "./orderPlacedPage.locators";


export async function verifyOrderSubmissionDetails()
{
    await (await $(locators.getMyPurchaseBtn)).waitForExist();
    
}