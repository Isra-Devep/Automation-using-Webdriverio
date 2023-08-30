import { Given, Then, When } from "@cucumber/cucumber";
import * as config from "../../IsraMain/config/homePage.json"
//import * as simpleDemoPageLocators from "../../main/simpleDemoForm/simpleDemoForm.locators"
import * as simpleDemoPageActions from "../../IsraMain/simpleDemoForm/simpleDemoForm.actions"

Given(/^User visit home page of lamdatest$/, async () => {
	await browser.url(config.baseUrl);
});

Then (/^He clicks on the simple Demo form option$/, async () => {
  await simpleDemoPageActions.openSimpleDemoFormPage();
});
