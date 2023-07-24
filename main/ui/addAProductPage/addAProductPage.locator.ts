export let pageHeading = "//h1";
export let statusPicker="//div[@test-id='product-status']//div[@role='button']";

export async function setStatus(status) {
    return (`//li[@data-value='${status}']`)
}

export let setStatusActive = "//li[@data-value='ACTIVE']";
export let setStatusInActive= "//li[@data-value='INACTIVE']";


export let productName= "//input[@name='name']";
export let productDescription= "//textarea[@name='description']";
export let stockInput = "//div[@test-id='skus.0.remainQuantity']//input";
export let priceInput = "//div[@test-id='skus.0.price']//input";
export let imageUploadBtn="//input[@type='file']";
export let addBtn="//div[@test-id='product-editor-submitter']/button";


