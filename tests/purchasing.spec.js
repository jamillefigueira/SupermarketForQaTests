import { test, expect } from "@playwright/test";

test("purchasing flow", async ({ page }) => {
  await page.goto(
    "file:///D:/Jamille/supermarketWebProject/SupermarketForQA/index.html",
  );

  await expect(page).toHaveTitle("Supermarket for QA");

  await page.locator("#product-search").fill("milk");

  await expect(page.locator("#product-search")).toHaveValue("milk");

  await page.locator("#search-button").click();

  await expect(page.getByText("Whole Milk")).toBeVisible();

  await page.getByAltText("Whole Milk").click();

  await expect(page.locator("#product-modal")).toBeVisible();

  await expect(page.locator("#product-modal-title")).toHaveText("Whole Milk");

  await expect(page.locator("#product-modal-description")).toHaveText(
    "Fresh whole milk, perfect for breakfast and everyday use.",
  );

  await expect(page.locator("#product-modal-price")).toHaveText("Price: €1.29");

  await page.locator("#add-to-cart-modal-button").click();

  await expect(page.locator("#cart-count")).toHaveText("1");

  await page.locator("#open-cart-button").click();

  await expect(page.locator("#cart-modal")).toBeVisible();

  await expect(page.locator("#cart-items")).toContainText("Whole Milk");

  await expect(page.locator("#cart-items")).toContainText("€1.29");

  await expect(page.locator("#cart-total")).toHaveText("1.29");
});

//id product-search
//search-button
//add-to-cart-modal-button
//Whole Milk - €1.29 x 1 = €1.29
//cart-total
