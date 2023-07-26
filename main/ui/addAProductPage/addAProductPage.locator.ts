export const getPageHeading = "//h1";
export const getStatusPicker="//div[@test-id='product-status']//div[@role='button']";
export const getSetStatusActive = "//li[@data-value='ACTIVE']";
export const getSetStatusInActive= "//li[@data-value='INACTIVE']";
export const getProductName= "//input[@name='name']";
export const getProductDescription= "//textarea[@name='description']";
export const getStockInput = "//div[@test-id='skus.0.remainQuantity']//input";
export const getPriceInput = "//div[@test-id='skus.0.price']//input";
export const getImageUploadBtn="//input[@type='file']";
export const getAddBtn="//div[@test-id='product-editor-submitter']/button";

export function getSetStatus(status) {
    return (`//li[@data-value='${status}']`)
}
