export let hamburgerMenu = '//button[@aria-label="open drawer"]';
export let loginBtn = $(`//button[@test-data="loginBtn"]`);
export let discoverBtn = $(`//a[@aria-current="page"]`);

export async function merchantStore(storeName) {
  return $(
    `//div[@test-data="merchant username in merchant-card-${storeName}"]`
  );
}
