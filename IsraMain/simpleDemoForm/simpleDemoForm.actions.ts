import * as locators from "./simpleDemoForm.locators";
export async function openSimpleDemoFormPage () {
await ( $(locators.simpleDemoOption)).click();    
}