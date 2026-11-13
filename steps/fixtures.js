

import { test as base, createBdd } from "playwright-bdd";

import { SearchPage } from "../pages/SearchPage.js";
import { ProductPage } from "../pages/ProductPage.js";
import { CartPage } from "../pages/CartPage.js";

export const test = base.extend({
  world: async ({ page }, use) => {
    const world = {
      page,
      searchPage: new SearchPage(page),
      productPage: new ProductPage(page),
      cartPage: new CartPage(page),
      currentProduct: null,
    };

    await use(world);
  },
});

export const { Given, When, Then } = createBdd(test, {
  worldFixture: "world",
});
