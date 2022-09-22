import * as locators from "../orderSummaryPage/orderSummaryPage.locators"
import * as commonActions from "utils/browserActions.utils"
import * as assertions from "utils/browserAssertions.utils"

export async function billVerficiation (totalBill)
{   await locators.phoneNumberField.waitForExist();
    await browser.keys("\uE00C")
    let actualTotlaBillCalculated=Number((await (commonActions.getAttribute(locators.totalPrice,"test-data"))).toString());
    console.log("total Bill is "+ totalBill+ "actual total bill is " + actualTotlaBillCalculated)
    browser.pause(2000);
    assertions.verifyElementsMatches(actualTotlaBillCalculated,totalBill,"bills donot match")
}