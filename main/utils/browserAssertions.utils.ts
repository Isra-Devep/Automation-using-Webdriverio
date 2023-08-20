import assert from "soft-assert";
import assertion from "assert";


export async function hardAssertElementMatchValue (
  element, 
  expectedValue){
    await expect(element).toEqual(expectedValue);
  }

export async function verifyElementIsDisplayed(
  element,
  errorMessage: string,
  isLast?: boolean
) {
  let status = await element.isDisplayed();
  assert.softTrue(status, errorMessage);
  if (isLast) assert.softAssertAll();
}

export function verifyElementIsNotDisplayed(
  status: boolean,
  errorMessage: string,
  isLast?: boolean
) {
  assert.softTrue(!status, errorMessage);
  if (isLast) assert.softAssertAll();
}

export async function verifyElementIsExisting(
  element:string,
  errorMessage?: string,
  isLast?: boolean
) {

  await expect($(element)).toBeExisting();
  if (isLast) assert.softAssertAll();
}

export async function verifyElementIsNotExisting(
  element:string,
  status?: boolean,
  errorMessage?: string,
  isLast?: boolean
) {
  await expect($(element)).not.toBeExisting();
  if (isLast) assert.softAssertAll();
}

export function verifyElementAttributeIsExisting(
  elementHandle,
  errorMessage: string,
  isLast?: boolean
) {
  assert.softTrue(Boolean(elementHandle), errorMessage);
  if (isLast) assert.softAssertAll();
}

export async function verifyElementIsClickable(
  element,
  errorMessage: string,
  isLast?: boolean
) {
  let status = await element.isClickable();
  assert.softTrue(status, errorMessage);
  if (isLast) assert.softAssertAll();
}

export function verifyElementIsNotClickable(
  status: boolean,
  errorMessage: string,
  isLast?: boolean
) {
  assert.softTrue(!status, errorMessage);
  if (isLast) assert.softAssertAll();
}

export function verifyElementsMatches(
  actualValue: string | number | string[] | number[],
  expectedValue: string | number | string[] | number[],
  errorMessage: string,
  isLast?: boolean
) {
  assert.softAssert(actualValue, expectedValue, errorMessage, []);
  if (isLast) assert.softAssertAll();
}

export function verifyElementsNotMatches(
  actualValue: string | number | string[] | number[],
  expectedValue: string | number | string[] | number[]
) {
  assertion.notEqual(actualValue, expectedValue);
}

export async function verifyIfSpecificElementIsPresent(
  // elementsList,: string | number | string[] | number[],
  elementsList,
  expectedValue,
  // expectedValue: string | number,
  errorMessage: string,
  isLast?: boolean
) {
  assert.softContains(elementsList, expectedValue, errorMessage, []);
  if (isLast) assert.softAssertAll();
}

export function verifyTestDataIsNotExisting(testData) {
  assertion.fail(`${testData} not present in the homepage`);
}
