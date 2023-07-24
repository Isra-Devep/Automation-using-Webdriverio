// import { syncModeDropdownOption } from "@wdio-ui/s3DataPage/s3DataPage.locators";

let waits = {
    maxTimeout: 120000,
    verySmallWait: 2000,
    smallWait: 10000,
    intermediateWait: 20000,
    mediumWait: 30000,
    longWait: 60000,
  };
  
  let minutes = waits.maxTimeout / 60000;
  let element = "Element";
  
  export async function dropDownSelect(dropdownSelector, optionSelector) {
    let dropDown = await dropdownSelector;
    await dropDown.click();
    let dropDownOption = await optionSelector;
    await dropDownOption.waitForDisplayed();
    await dropDownOption.click();
  }
  
  export async function sendKeysToElement(element, text) {
    await element.click();
    await element.clearValue();
    await element.setValue(text);
  }
  
  export async function click(selector: string, elementName?: string) {
    if (elementName) {
      element = elementName;
    }
    let elementHandle = await $(selector);
    await elementHandle.waitForExist({
      timeoutMsg: `${element} did not exist after ${minutes} minutes`,
    });
    await elementHandle.scrollIntoView();
    await browser.execute((arg) => arg.click(), await elementHandle);
  }
  
  export async function forcedClick(selector: string, elementName?: string) {
    if (elementName) {
      element = elementName;
    }
    let elementHandle = await $(selector);
    await elementHandle.waitForExist({
      timeoutMsg: `${element} did not exist after ${minutes} minutes`,
    });
    await browser.execute((arg) => arg.click(), await elementHandle);
  }
  
  export async function hoverOver(selector: string, elementName?: string) {
    if (elementName) {
      element = elementName;
    }
    let elementHandle = await $(selector);
    await elementHandle.waitForExist({
      timeoutMsg: `${element} did not exist after ${minutes} minutes`,
    });
    await elementHandle.scrollIntoView();
    await elementHandle.waitForDisplayed();
    await elementHandle.moveTo();
  }
  
  export async function getTextArray(selector: string) {
    let elementTextArray = await $$(selector).map((el) => el.getText());
    let textArray = await Promise.all(elementTextArray);
    return textArray;
  }
  
  export async function getTextElement(selector) {
    let elementText = await selector.getText();
    return elementText;
  }
  
  
  export async function getAttributeArray(selector: string, attr: string) {
    let elementAttributeArray = await $$(selector).map((el) =>
      el.getAttribute(attr)
    );
    let attributeArray = await Promise.all(elementAttributeArray);
    return attributeArray;
  }
  
  export async function getAttribute(
    selector: string,
    attr: string,
    elementName?: string
  ) {
    if (elementName) {
      element = elementName;
    }
    let elementHandle = await $(selector);
    await elementHandle.waitForExist({
      timeoutMsg: `${element} did not exist after ${minutes} minutes`,
    });
    await elementHandle.scrollIntoView();
    let elementAttribute = await elementHandle.getAttribute(attr);
    return elementAttribute;
  }
  
  export async function scrollTo(selector: string, elementName?: string) {
    if (elementName) {
      element = elementName;
    }
    let elementHandle = await $(selector);
    await elementHandle.waitForExist({
      timeoutMsg: `${element} did not exist after ${minutes} minutes`,
    });
    await elementHandle.scrollIntoView();
  }
  
  export async function getElementArray(selector: string, elementName?: string) {
    await scrollTo(selector, elementName);
    let getElementArray = await $$(selector);
    let elementArray = await Promise.all(getElementArray);
    return elementArray;
  }