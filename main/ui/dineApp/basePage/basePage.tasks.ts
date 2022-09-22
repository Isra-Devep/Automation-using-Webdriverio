import * as locators from "../basePage/basePage.locators"
import * as commonActions from "utils/browserActions.utils"
var config = require('/Users/emumba/Desktop/automation/wdio.conf.ts').config;



export async function openApplication()
{
    await browser.url(config.b);
}

export async function checkSignInStatus()
{   let buttonText;
    await commonActions.click(locators.hamburgerMenu)
    buttonText= await locators.loginBtn.getText();
    if (buttonText=="Login To Enjoy More!")
    {   
        await browser.keys("\uE00C");
        return true
        
    }
    else 
    {
        console.log("test failed; the button text is "+ buttonText)
        await browser.keys("\uE00C");
        return false
    }
}

export async function openStorePage(storeName)
{
    
    await (await locators.merchantStore(storeName)).click(); 
}



