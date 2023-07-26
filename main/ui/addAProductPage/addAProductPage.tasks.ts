import * as locators from "./addAProductPage.locator";
import * as commonActions from "../../utils/browserActions.utils";



export async function addProductInfo (status,name,description,stock,price,photo)
{  
       //set status
    //    await browser.pause(3000);
    //    await commonActions.click(locators.statusPicker);
    //    (await $(locators.statusPicker)).click();

      // await commonActions.click(await locators.setStatus(status));

       //set name
       await commonActions.sendKeysToElement($(locators.getProductName),name)
       
       //set description
       await commonActions.sendKeysToElement($(locators.getProductDescription),description)
       
       //set Stock
       await commonActions.sendKeysToElement($(locators.getStockInput),stock)
       
       //set Price
       await commonActions.sendKeysToElement($(locators.getPriceInput),price)

       //set Picture
    //    const remoteFilePath = browser.uploadFile(photo);
    //    (await $(locators.imageUploadBtn)).scrollIntoView();
    //    await $(locators.imageUploadBtn).setValue(await remoteFilePath); 

}
export async function saveProductInfo ()
{
       await commonActions.click(locators.getAddBtn)
}