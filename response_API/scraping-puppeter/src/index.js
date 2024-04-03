import puppeteer from "puppeteer";

async function openWebPage() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://developer.chrome.com/");
}

// openWebPage();
