const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1200, height: 800 });
  
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  await new Promise(r => setTimeout(r, 2500));
  
  const diagnostics = await page.evaluate(() => {
    const el = document.querySelector('.bg-red-900.text-white');
    if (!el) {
      const root = document.querySelector('#krg-print-dossier-root');
      if (!root) return 'No PrintDossier root found either.';
      return 'Overlay not found. Root exists. Pages: ' + document.querySelectorAll('.print-page').length;
    }
    return el.innerText;
  });
  console.log('DIAGNOSTICS:\n', diagnostics);
  
  await browser.close();
})();
