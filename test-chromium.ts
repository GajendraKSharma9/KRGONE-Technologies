import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

async function test() {
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: true,
  });
  console.log("Browser launched");
  await browser.close();
}
test().catch(console.error);
