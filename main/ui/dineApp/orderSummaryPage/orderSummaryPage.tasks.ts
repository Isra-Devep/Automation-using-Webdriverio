import * as locators from "../orderSummaryPage/orderSummaryPage.locators";
import * as commonActions from "utils/browserActions.utils";
import * as assertions from "utils/browserAssertions.utils";

export async function billVerficiation(totalBill) {
  await locators.phoneNumberField.waitForExist();
  await browser.keys("\uE00C");

  const totalPrice = await commonActions.getAttribute(
    locators.totalPrice,
    "test-data"
  );
  let actualTotalBillCalculated = Number(totalPrice).toString();
  
  console.log(
    "total Bill is " +
      totalBill +
      "actual total bill is " +
      actualTotalBillCalculated
  );
  
  browser.pause(2000);

  assertions.verifyElementsMatches(
    actualTotalBillCalculated,
    totalBill,
    "bills do not match"
  );
}
