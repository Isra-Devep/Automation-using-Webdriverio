import * as locators from "./dropPage.locators";
import * as commonActions from "../../utils/browserActions.utils";



export async function addingAllDropItemsToCart() 
{  
    for (const element of await locators.getAddItemsBtn)
        {
            await element.click();
        }
}

