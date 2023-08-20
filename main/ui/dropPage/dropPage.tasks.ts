import * as locators from "./dropPage.locators";
import * as commonActions from "../../utils/browserActions.utils";


export async function addingAllDropItemsToCart(name,timesPurchased,firstVariance?,secondVariance?) 
{  
    await commonActions.click(locators.getAddItemBtn(name));
    await console.log(name+ " will be added "+timesPurchased+ " many times");
        if (await $(locators.getAddToBagBtn).isExisting())
            {
                await commonActions.click(locators.getVariantSelection(firstVariance));
                await commonActions.click(locators.getVariantSelection(secondVariance));
                for (let i=0;i<(timesPurchased-1);i++)
                {
                    await commonActions.click(locators.getIncreaseQuantityItemDetailPage);
                }
                await commonActions.click(locators.getAddToBagBtn);
            }
        else
        {   
            for (let i=0;i<(timesPurchased-1);i++)
            {
                await commonActions.click(locators.getAddItemBtn(name));
            }
         }
}

