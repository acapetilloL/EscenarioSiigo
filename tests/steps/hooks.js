const { After, Before, setDefaultTimeout } = require("@cucumber/cucumber");
const { initBrowser, closeBrowser } = require("../support/utils");

setDefaultTimeout(60 * 10000);

Before({ tags: "@SetupEnvironments" }, async function () {
  this.page = await initBrowser();
});

After({ tags: "@CloseBrowser" }, async function () {
  await closeBrowser();
});
