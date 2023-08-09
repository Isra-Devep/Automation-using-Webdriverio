import * as locators from "./dropPage.locators";
import * as commonActions from "../../utils/browserActions.utils";


export async function addingAllDropItemsToCart(timesPurchased) 
{  for (let i=0;i<timesPurchased;i++)
    {
        await commonActions.click(locators.getAddItemsBtn);
    }
}

