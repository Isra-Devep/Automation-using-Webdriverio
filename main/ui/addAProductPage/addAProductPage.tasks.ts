import * as locators from "./addAProductPage.locator";
import * as commonActions from "wdioUtils/browserActions.utils";
import productVariables from "@wdioTestData/config/MCconfigs/addAProductConfig.json";
let status,name,description,stock,price,photo;


export async function addProductInfo ()
{      status=productVariables.addActiveProduct.Status;
       name=productVariables.addActiveProduct.Name;
       description=productVariables.addActiveProduct.Description;
       stock= productVariables.addActiveProduct.Stock;
       price= productVariables.addActiveProduct.Price;
       photo= productVariables.addActiveProduct.productPhotoPath;

       //set status
    //    await browser.pause(3000);
    //    await commonActions.click(locators.statusPicker);
    //    (await $(locators.statusPicker)).click();

      // await commonActions.click(await locators.setStatus(status));

       //set name
       await commonActions.sendKeysToElement((locators.getProductName),name)
       
       //set description
       await commonActions.sendKeysToElement((locators.getProductDescription),description)
       
       //set Stock
       await commonActions.sendKeysToElement((locators.getStockInput),stock)
       
       //set Price
       await commonActions.sendKeysToElement((locators.getPriceInput),price)

       //set Picture
    //    const remoteFilePath = browser.uploadFile(photo);
    //    (await $(locators.imageUploadBtn)).scrollIntoView();
    //    await $(locators.imageUploadBtn).setValue(await remoteFilePath); 

}
export async function saveProductInfo ()
{
       await commonActions.click(locators.getAddBtn)
}