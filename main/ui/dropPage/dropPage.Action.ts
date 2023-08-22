import * as locators from "./dropPage.locators";
import * as commonActions from "@wdioUtils/browserActions.utils";
import * as dropPurchasingCredentials from "@wdioTestData/config/customerConfigs/customerDropPurchaseConfig.json";


export async function openCart()
{
    await commonActions.click(locators.getViewCartBtn);
} 
export async function openDrop(type)
{
    if (type=="drop With Items With Variants")
    {
        await browser.url(dropPurchasingCredentials.dropWithItemsWithVariants.url);
    }
    else if (type=="drop With No Variant Items")
    {
        await browser.url(dropPurchasingCredentials.dropWithNoVariantItems.url);  
    }
}

