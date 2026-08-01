const fs = require('fs');
const puppeteer = require('puppeteer');

const mainPath = 'src/main.tsx';
const originalMain = fs.readFileSync(mainPath, 'utf8');

const testMain = `
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PrintDossier from './components/PrintDossier.tsx';
import './index.css';

const dummyData = {
  companyName: 'Acme Corp',
  industry: 'Technology',
  revenue: '10M-50M',
  challenges: ['Sales Conversion', 'Operational Efficiency']
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <div className="print-dossier-root">
        <PrintDossier 
          formData={dummyData} 
          scores={[4,3,4,5,3,4,4]} 
          globalScore={68} 
          pillarScores={[60, 65, 58, 55, 60, 62, 68]}
        />
      </div>
    </StrictMode>
  );
}
`;

fs.writeFileSync(mainPath, testMain, 'utf8');

(async () => {
  try {
    // Give dev server time to reload
    await new Promise(r => setTimeout(r, 2500));

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 2000, deviceScaleFactor: 2 });

    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 2000));

    const pageResults = await page.evaluate(() => {
      const pageEls = Array.from(document.querySelectorAll('.print-page'));
      return pageEls.map((el, idx) => {
        const pageNum = idx + 1;
        const scrollHeight = el.scrollHeight;
        const clientHeight = el.clientHeight;
        const offsetHeight = el.offsetHeight;
        const rect = el.getBoundingClientRect();
        
        // Exact height check
        const isClipping = scrollHeight > clientHeight + 1.5;
        const overflowPx = isClipping ? Math.round((scrollHeight - clientHeight) * 10) / 10 : 0;

        return {
          page: pageNum,
          scrollHeight,
          clientHeight,
          offsetHeight,
          isClipping,
          overflowPx
        };
      });
    });

    console.log("=== PDF PAGES MEASUREMENT RESULTS ===");
    console.log(JSON.stringify(pageResults, null, 2));

  } catch (err) {
    console.error("Measurement error:", err);
  } finally {
    fs.writeFileSync(mainPath, originalMain, 'utf8');
    console.log("Restored main.tsx");
    process.exit(0);
  }
})();
