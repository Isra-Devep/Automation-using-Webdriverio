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
export const deliveryAndPaymentConfirmBtn="//button[contains(.,'Confirm')]";
export const submitOrderBtn="//button[contains(.,'Submit')]";


export const getFinalSubtotal=("//p[contains(.,'Subtotal')]/parent::div");
export const getFinalTaxes="//p[contains(.,'Taxes')]/parent::div";
export const getFinalTotal="//p[contains(.,'Total')]/parent::div";
export const getFinalShippingFee="//p[contains(.,'Shipping')]/parent::div";