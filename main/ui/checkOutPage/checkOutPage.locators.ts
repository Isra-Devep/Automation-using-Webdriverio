export const getSubtotal=("//span[contains(.,'Subtotal')]/parent::div");
export const getTaxes="//span[contains(.,'Taxes')]/parent::div";
export const getTotal="//span[contains(.,'Total')]/parent::div";
export const getShippingFee="//span[contains(.,'Shipping')]/parent::div";
export const getDeliveryBtn="//div[@role='button']/div[contains(.,'Delivery')]"; 
export const getPaymentMethodBtn="//div[@role='button']/div[contains(.,'How you')]";
export const getDeliveryMethodBtn="//div[@role='tablist']";
export const getShippingListBtn="//div[@role='tablist']/button[contains(.,'Shipping')]";
export const getPickUpListBtn="//div[@role='tablist']/button[contains(.,'Pickup')]";
export const getPayPalConfirmationLabel="//label[contains(.,'PayPal')]";
export const getDeliveryAndPaymentConfirmBtn="//button[contains(.,'Confirm')]";
export const getSubmitOrderBtn="//button[contains(.,'Submit')]";
export const getAddANewShippingAddress="//button[contains(.,'Add a new address')]";

//Delivery Method fields
export const getFullNameField="//input[@name='contact']";
export const getPhoneNumberField="//input[@name='phone']";
export const getAddressField=("//input[@placeholder='e.g. 123 Main St']");
export const getAptSuiteUnitField=("//input[@name='address2']");
export const getCityField=("//input[@name='city']");
export const getStateField=("//input[@name='state']");
export const getZipCodeField=("//input[@name='zipcode']");
export const getSaveBtn="//button[contains(.,'Save')]";