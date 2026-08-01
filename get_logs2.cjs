const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1200, height: 800 });
  
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  
  // Wait 3 seconds for React to render and the layout engine to calculate
  await new Promise(r => setTimeout(r, 4000));
  
  const diagnostics = await page.evaluate(() => {
    const list = document.querySelectorAll('.bg-red-900.text-white li');
    if (!list || list.length === 0) return 'NO_OVERFLOW';
    return Array.from(list).map(el => el.innerText).join('\n');
  });
  console.log('OVERFLOW_PAGES:\n', diagnostics);
  
  await browser.close();
})();
