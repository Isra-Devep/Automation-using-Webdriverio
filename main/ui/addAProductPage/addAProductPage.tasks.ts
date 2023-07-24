import * as locators from "./addAProductPage.locator";
import * as commonActions from "../../utils/browserActions.utils";
import * as assertions from "../../utils/browserAssertions.utils"

export async function checkIfAddAProductPageIsOpen ()
{
    await assertions.verifyElementsMatches(locators.pageHeading, "Add a product","heading is "+locators.pageHeading);
}

export async function addProductInfo (status,name,description,stock,price,photo)
{  
       //set status
    //    await browser.pause(3000);
    //    await commonActions.click(locators.statusPicker);
    //    (await $(locators.statusPicker)).click();

      // await commonActions.click(await locators.setStatus(status));

       //set name
       await commonActions.sendKeysToElement($(locators.productName),name)
       
       //set description
       await commonActions.sendKeysToElement($(locators.productDescription),description)
       
       //set Stock
       await commonActions.sendKeysToElement($(locators.stockInput),stock)
       
       //set Price
       await commonActions.sendKeysToElement($(locators.priceInput),price)

       //set Picture
    //    const remoteFilePath = browser.uploadFile(photo);
    //    (await $(locators.imageUploadBtn)).scrollIntoView();
    //    await $(locators.imageUploadBtn).setValue(await remoteFilePath); 

}
export async function saveinfo ()
{
       await commonActions.click(locators.addBtn)
}