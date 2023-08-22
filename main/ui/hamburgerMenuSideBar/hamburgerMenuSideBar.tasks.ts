import * as locators from "./hamburgerMenuSideBar.locators";
import * as commonActions from "@wdioUtils/browserActions.utils";
import * as hamburgerMenuSideBarAssertions from "./hamburgerMenuSideBar.assertions";


export async function openProductsPage()
{
    await commonActions.click(locators.getHamburgerMenu);

    await hamburgerMenuSideBarAssertions.confirmProductButtonExists();
    await commonActions.click(locators.getProductBtn);
}

export async function confirmBuyingMode()
{
    await commonActions.click(locators.getHamburgerMenu);
    if ((await $(locators.getSwitchToBuyingBtn)).isExisting())
        {commonActions.click(locators.getSwitchToBuyingBtn)}; 
    browser.pause(3000);
}

export async function OpenPaymentMethodsPage()
{  
    await hamburgerMenuSideBarAssertions.confirmPaymentMethodButtonExist();
    commonActions.click(locators.getPaymentMethodsBtn);
    browser.pause(3500);
}