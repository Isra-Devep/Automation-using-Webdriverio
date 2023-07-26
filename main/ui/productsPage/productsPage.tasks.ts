import * as locators from "./productsPage.locators";
import * as commonActions from "../../utils/browserActions.utils";



export async function addNewProductItem()
{
    await commonActions.click(locators.getNewProductBtn)
    browser.pause(3000);
}