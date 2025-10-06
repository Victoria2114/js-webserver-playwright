
// @ts-check
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "http://localhost:3000",
    headless: true,
  },
  webServer: {
    command: "node server.js",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
module.exports = defineConfig({
  testDir: "./tests",
  use: { baseURL: "http://localhost:3000", headless: true },
  webServer: { command: "node server.js", url: "http://localhost:3000", reuseExistingServer: !process.env.CI, timeout: 30_000 },
  reporter: [["html", { open: "never" }]], // <<— добавь это
});

