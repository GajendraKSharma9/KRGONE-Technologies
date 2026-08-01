const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1200, height: 800 });
  
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 2000));
  
  // Set localStorage to fake a completed assessment
  await page.evaluate(() => {
    localStorage.setItem('krgone_scores', JSON.stringify(new Array(21).fill(4)));
    localStorage.setItem('krgone_currentQuestionIdx', '21');
  });
  
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const btn = btns.find(b => b.innerText.includes('START FREE'));
    if (btn) btn.click();
  });
  
  await new Promise(r => setTimeout(r, 4000)); // wait for generation animation
  
  const finalBtns = await page.evaluate(() => Array.from(document.querySelectorAll('button')).map(b => b.innerText));
  console.log('Final Buttons after completion:', finalBtns);
  
  await browser.close();
})();
