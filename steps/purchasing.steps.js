import { expect } from "@playwright/test";
import path from "node:path";
import { pathToFileURL } from "node:url";

import { Given, When, Then } from "./fixtures.js";

Given("I am on the supermarket website", async function () {
  const filePath = path.resolve(
    process.cwd(),
    "../SupermarketForQA/index.html",
  );

  await this.page.goto(pathToFileURL(filePath).href);
});

When("I search for {string}", async function (product) {
  this.currentProduct = product;

  await this.searchPage.searchProduct(product);
});

Then(
  "I should see the product {string} with price {string}",
  async function (product, price) {
    const productCard = this.searchPage.productCard(product);

    await expect(productCard).toBeVisible();
    await expect(productCard).toContainText(`Price: €${price}`);
  },
);

When("I open the product details", async function () {
  await this.searchPage.openProductDetails(this.currentProduct);
});

Then("the product name should be {string}", async function (product) {
  await expect(this.productPage.modal).toBeVisible();
  await expect(this.productPage.title).toHaveText(product);
});

Then("the product price should be {string}", async function (price) {
  await expect(this.productPage.price).toHaveText(`Price: €${price}`);
});

When("I add the product to the cart", async function () {
  await this.productPage.addToCart();
});

Then(
  "the cart should contain {string} with price {string}",
  async function (product, price) {
    await expect(this.cartPage.cartCount).toHaveText("1");

    await this.cartPage.openCart();

    await expect(this.cartPage.modal).toBeVisible();
    await expect(this.cartPage.items).toContainText(product);
    await expect(this.cartPage.items).toContainText(`€${price}`);
    await expect(this.cartPage.total).toHaveText(price);
  },
);
