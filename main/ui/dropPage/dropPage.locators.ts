export const getViewCartBtn= '//button[contains(text(),"View cart")]';
//export const getAddItemsBtn = ('//button[@aria-label="Add"]');
export const getAddToBagBtn="//button[contains(.,'Add to bag')]";
export const getIncreaseQuantityItemDetailPage='//button[@aria-label="Remove"]/following-sibling::button[@aria-label="Add"]'

export function getAddItemBtn(name)
{
    return (`//div[@test-id='${name}']//button[@aria-label="Add"]`);
}
export function getVariantSelection(selection)
{
    return (`//span[(text()='${selection}')]/parent::div[@border="circular"]`);
}