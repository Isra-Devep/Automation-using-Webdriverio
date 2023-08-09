import * as locators from "./dropPage.locators";
import * as commonActions from "../../utils/browserActions.utils";


export async function openCart()
{
    await commonActions.click(locators.getViewCartBtn)
} 