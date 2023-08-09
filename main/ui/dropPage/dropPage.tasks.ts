import * as locators from "./dropPage.locators";
import * as commonActions from "../../utils/browserActions.utils";


export async function addingAllDropItemsToCart(name,timesPurchased,firstVariance?,secondVariance?) 
{  
    await commonActions.click(locators.getAddItemBtn(name));
    await console.log("the item will be added to cart this many times = " + timesPurchased);
        if (await $(locators.getAddToBagBtn).isExisting())
            {
                await commonActions.click(locators.getVariantSelection(firstVariance));
                await commonActions.click(locators.getVariantSelection(secondVariance));
                for (let i=0;i<(timesPurchased);i++)
                {
                    await commonActions.click(locators.getIncreaseQuantityItemDetailPage);
                }
            }
        else
        {   
            for (let i=0;i<(timesPurchased-1);i++)
            {
                await commonActions.click(locators.getAddItemBtn(name));
            }
         }
}

