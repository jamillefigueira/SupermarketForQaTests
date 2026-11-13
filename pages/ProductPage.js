
export class ProductPage {
  constructor(page) {
    this.page = page;
    this.modal = page.locator("#product-modal");
    this.title = page.locator("#product-modal-title");
    this.price = page.locator("#product-modal-price");
    this.addToCartButton = page.locator(
      "#add-to-cart-modal-button"
    );
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}
