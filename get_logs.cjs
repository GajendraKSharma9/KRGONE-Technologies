const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1200, height: 800 });
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  await new Promise(r => setTimeout(r, 2000));
  
  const diagnostics = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.bg-red-900.text-white li')).map(el => el.innerText).join('\n');
  });
  console.log('OVERFLOW_PAGES:\n', diagnostics);
  
  await browser.close();
})();
