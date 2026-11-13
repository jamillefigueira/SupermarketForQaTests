
export class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator("#product-search");
    this.searchButton = page.locator("#search-button");
  }

  async searchProduct(product) {
    await this.searchInput.fill(product);
    await this.searchButton.click();
  }

  productCard(product) {
    return this.page
      .locator(".product-card")
      .filter({ hasText: product });
  }

  async openProductDetails(product) {
    await this.page.getByAltText(product).click();
  }
}
