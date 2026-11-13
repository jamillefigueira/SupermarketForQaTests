
export class CartPage {
  constructor(page) {
    this.page = page;
    this.openCartButton = page.locator("#open-cart-button");
    this.modal = page.locator("#cart-modal");
    this.cartCount = page.locator("#cart-count");
    this.items = page.locator("#cart-items");
    this.total = page.locator("#cart-total");
  }

  async openCart() {
    await this.openCartButton.click();
  }
}
