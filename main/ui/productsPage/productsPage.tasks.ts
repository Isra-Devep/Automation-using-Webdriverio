import * as locators from "./productsPage.locators";
import * as commonActions from "wdioUtils/browserActions.utils";



export async function addNewProductItem()
{
    await commonActions.click(locators.getNewProductBtn)
    browser.pause(3000);
}