export const getViewCartBtn= '//button[contains(text(),"View cart")]';
export const getAddToBagBtn="//button[contains(.,'Add to bag')]";
export const getIncreaseQuantityItemDetailPage='//button[@aria-label="Remove"]/following-sibling::button[@aria-label="Add"]';
export const getPriceOfItemFromItemDrawer='//span[contains(.,"Sale")]/parent::div/parent::div/parent::div/following-sibling::section/child::div/child::span[@test-id]';
export const getPriceOfItemFromDrop='//div[contains(.,"Red")]/parent::div/child::div/child::div/span[@test-id]'

export function getAddItemBtn(name)
{
    return (`//div[@test-id='${name}']//button[@aria-label="Add"]`);
}
export function getVariantSelection(selection)
{
    return (`//span[(text()='${selection}')]/parent::div[@border="circular"]`);
}//I was here 