import * as locators from "../menuPage/menuPage.locators";
import * as commonActions from "utils/browserActions.utils";

export async function checkMerchandiseAvailability(merchandiseName) {
  const el = await locators.merchandiseActionButton(merchandiseName);
  await el.scrollIntoView();

  let isExisting = await el.isClickable();
  if (!isExisting) {
    console.log("item Sold out");
    return isExisting;
  }

  console.log(merchandiseName + " is here");
  return isExisting;
}

export async function addMerchandiseToCart(
  merchandiseName,
  merhcandiseQuntity
) {
  await checkMerchandiseAvailability(merchandiseName);
  await console.log("into the adding funciton");

  for (let i = 0; i < merhcandiseQuntity; i++) {
    const isAvailable = await checkMerchandiseAvailability(merchandiseName);
    if (isAvailable) {
      const el = await locators.merchandiseActionButton(merchandiseName);
      await el.click();
      console.log("clicked");
    } else {
      console.log(
        `ran out of items. the item was added ${i} times before running out`
      );
    }
  }

  const el = await locators.merchandisePrice(merchandiseName);
  let merchandisePrice = await el.getText();

  console.log(
    "the " +
      merchandiseName +
      " price without dollar is " +
      merchandisePrice.substring(merchandisePrice.indexOf("$") + 1)
  );

  return merchandisePrice.substring(merchandisePrice.indexOf("$") + 1);
}

export async function openCart() {
  const el = await locators.shoppingCartBtn;
  await el.click();
}
