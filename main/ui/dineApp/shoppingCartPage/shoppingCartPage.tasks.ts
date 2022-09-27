import * as locators from "../shoppingCartPage/shoppingCartPage.locators";
import * as commonActions from "utils/browserActions.utils";
import * as assertions from "utils/browserAssertions.utils";
import credentials from "ui/config/evnCredentials.json";

export async function openOrderSummary(
  priceOfItem1,
  firstMerchandise,
  quantityFirstMerchandise,
  priceOfItem2,
  secondMerchandise,
  quantitySecondMerchandise,
) {
  await locators.tipsBtn.click();
  await locators.tipsBtn.setValue(credentials.Store.tipGiven);
  await browser.pause(3000);

  let subTotalCalculated =
    Math.round(
      Number(
        priceOfItem1 * quantityFirstMerchandise +
          priceOfItem2 * quantitySecondMerchandise
      ) * 100
    ) / 100;
  console.log("subtotal calculated is " + subTotalCalculated);
  let actualSubTotalPromise = await locators.subTotal.getText();
  let actualSubTotal =
    Math.round(
      Number(
        actualSubTotalPromise
          .toString()
          .substring(actualSubTotalPromise.indexOf("$") + 1)
      ) * 100
    ) / 100;
  console.log("subtotal actual is " + actualSubTotal);
  await assertions.verifyElementsMatches(
    actualSubTotal,
    subTotalCalculated,
    "subtotals dont match"
  );

  let taxAmountPromise = await locators.taxesField.getText();
  let taxAmount = taxAmountPromise.toString();
  console.log(taxAmount.substring(taxAmount.indexOf("$") + 1));

  let totalbBillCalculated =
    (await Math.round(
      (await (subTotalCalculated +
        credentials.Store.tipGiven +
        Number(taxAmount.substring(taxAmount.indexOf("$") + 1)))) * 100
    )) / 100;
  console.log("total calculated is " + totalbBillCalculated);
  let actualTotalBillPromise = await commonActions.getAttribute(
    locators.totalPrice,
    "test-data"
  );
  let actualTotalBill = await Number(actualTotalBillPromise.toString());
  console.log("total actual is " + Math.round(actualTotalBill * 100) / 100);
  assertions.verifyElementsMatches(
    Math.round(actualTotalBill * 100) / 100,
    Number(totalbBillCalculated),
    "totals dont match"
  );
  return await actualTotalBill;
}

export async function continueToPayment() {
  await commonActions.click(locators.continueToPaymentBtn);
}
