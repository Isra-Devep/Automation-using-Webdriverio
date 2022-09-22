import * as locators from "../menuPage/menuPage.locators"
import * as commonActions from "utils/browserActions.utils"


export async function checkMerchandiseAvailability(merchandiseName)
{ 

    await (await locators.merchandiseActionButton(merchandiseName)).scrollIntoView()
    let isExisting =await (await locators.merchandiseActionButton(merchandiseName)).isClickable()
    if (await isExisting==false)
    {
        await console.log("item Sold out")
        return await isExisting;
    }
    if(await isExisting==true)
    {   
        console.log(merchandiseName+ " is here")
        return await isExisting;
    }
}
export async function addMerchandiseToCart(merchandiseName,merhcandiseQuntity)
{
    await checkMerchandiseAvailability(merchandiseName);
    await console.log("into the adding funciton")
    for (let i=0;i<merhcandiseQuntity;i++)
    {   
       if (await checkMerchandiseAvailability(merchandiseName)==true)
       {
            await (await locators.merchandiseActionButton(merchandiseName)).click();
            console.log("clicked")
       }
       else
       {
           await console.log("ran out of items. the item was addded "+i+" times before running out")
       }
    }
    let merchandisePrise=(await (await locators.merchandisePrice(merchandiseName)).getText());
    await console.log("the "+ merchandiseName+ " price without dollar is "+merchandisePrise.substring(merchandisePrise.indexOf('$')+1))
    return await merchandisePrise.substring(merchandisePrise.indexOf('$')+1)
}


export async function openCart()
{
    await (await locators.shoppingCartBtn).click();
}