const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const urls = {
  QA: {
    MX: "https://qastaging.siigo.mx",
    CO: "https://qastaging.siigo.com",
  },
  ST: {
    MX: "https://siigonube2.siigo.mx/",
    CO: "https://siigonube2.siigo.com/",
  },
  PRD: {
    MX: "https://siigonube.siigo.mx",
    CO: "https://siigonube.siigo.com",
  },
};

let browser, page;

async function performActionOnElement(selectors, action, ...args) {
  for (const selector of selectors) {
    const element = page.locator(selector);
    if (await element.isVisible()) {
      await element[action](...args);
      return;
    }
  }
  throw new Error(`No valid selector found to perform ${action}.`);
}

module.exports = {
  async initBrowser(headless = false) {
    browser = await chromium.launch({
      headless,
      args: ["--start-maximized"],
    });
    context = await browser.newContext({
      viewport: null,
    });
    page = await context.newPage();
    return page;
  },

  async closeBrowser() {
    if (page) await page.close();
    if (browser) await browser.close();
  },

  async urlDefine(env, country) {
    const url = urls[env]?.[country];
    if (!url) throw new Error(`Invalid environment (${env}) or country (${country})`);
    return url;
  },
};
