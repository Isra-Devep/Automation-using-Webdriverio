export async function merchandiseActionButton(merchandiseName) {
  return $(
    `//*[@test-data="merchandise username on menu page- ${merchandiseName}"]//div[@class="actionButton"]`
  );
}
export let shoppingCartBtn = $('//button[@test-data="shoppingCartBtn"]');
export let shoppingCartMerchandiseAmount = $(
  '//button[@test-data="shoppingCartBtn"]//span[@class [contains(.,"MuiBadge-badge")]]'
);

export async function merchandisePrice(merchandiseName) {
  return $(
    `//*[@test-data="merchandise username on menu page- ${merchandiseName}"]//div[@class="price-container"]`
  );
}
