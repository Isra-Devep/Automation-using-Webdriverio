export async function merchandiseActionButton(merhcnadiseName) {
    return $(`//*[@test-data="merchandise username on menu page- ${merhcnadiseName}"]//div[@class="actionButton"]`);
}
export let shoppingCartBtn = $('//button[@test-data="shoppingCartBtn"]')
export let shoppingCartMerchandiseAmount = $('//button[@test-data="shoppingCartBtn"]//span[@class [contains(.,"MuiBadge-badge")]]')

export async function merchandisePrice(merhcnadiseName) {
    return $(`//*[@test-data="merchandise username on menu page- ${merhcnadiseName}"]//div[@class="price-container"]`);
}
