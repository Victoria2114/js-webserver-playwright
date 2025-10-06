
const { test, expect } = require("@playwright/test");

test("home page loads and increments counter", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#title")).toHaveText("Hello, Victoria!");
  await expect(page.locator("#count")).toHaveText("0");
  await page.click("#btn");
  await expect(page.locator("#count")).toHaveText("1");
});

test("health endpoint returns ok", async ({ request }) => {
  const res = await request.get("/api/health");
  expect(res.ok()).toBeTruthy();
  const json = await res.json();
  expect(json).toEqual({ status: "ok" });
});
