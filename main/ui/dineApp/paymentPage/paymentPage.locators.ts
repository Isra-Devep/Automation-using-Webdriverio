export const iframeForCreditCard = `[name*="__privateStripeFrame"][title="Secure card payment input frame"]`;
export const phoneNumberField = $(`//input[@class="phoneInput form-control"]`);
export const nameField = $(`#outlined-basic`);
export const cardNumberField = $(
  `//form[@class="ElementsApp is-empty"]//input[@placeholder="Card number"]`
);
export const phoneNumberCheckBox = `//input[@type="checkbox"]`;
export const continueBtn = $(`//button[@test-data="paymentBtn"]`);
export const placeOrderBtn = $(`//button[@test-data="placeOrderBtn"]`);
export const creditCardSelection = $(`//input`);
