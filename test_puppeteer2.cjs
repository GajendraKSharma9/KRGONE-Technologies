const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1200, height: 800 });
  
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  await new Promise(r => setTimeout(r, 2500));
  
  const content = await page.content();
  console.log('HTML SNIPPET:', content.substring(content.indexOf('body'), content.indexOf('body') + 2000));
  
  const diagnostics = await page.evaluate(() => {
    return document.body.innerHTML.substring(0, 500);
  });
  console.log('BODY:', diagnostics);
  
  await browser.close();
})();
