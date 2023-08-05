import { Given, Then, When } from "@cucumber/cucumber";
import * as setUpCredentials from "../../../main/Test-Data/config/MCconfigs/signInCredentials.json";
import * as singInPageActions from "../../../main/ui/staffSignInPage/staffSignInPage.tasks";
import * as hamburgerMenuSideBarTasks from "../../../main/ui/hamburgerMenuSideBar/hamburgerMenuSideBar.tasks"



Given ("The user open the via application and signs in",
async()=>{
    await browser.url(setUpCredentials.baseURL);
    await singInPageActions.logInToVia(setUpCredentials.signInCredential.phoneNumber,setUpCredentials.signInCredential.passCode);
    await browser.pause(5000);
    });

Then ("The user confirms they are in buying mode or enters the buying mode",
async()=>{
    await hamburgerMenuSideBarTasks.confirmBuyingMode();
});

When ("The user clicks the Payment method button and access the payment methods",
async()=>{
    await hamburgerMenuSideBarTasks.OpenPaymentMethodsPage();
});