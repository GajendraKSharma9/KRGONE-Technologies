const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

// Add state
const stateInjection = `  const [diagnostics, setDiagnostics] = React.useState<string[]>([]);\n`;
content = content.replace(/export default function PrintDossier\(\{[^\}]+\}: PrintDossierProps\) \{/, (match) => match + '\n' + stateInjection);

// Update useEffect
const newUseEffect = `
  React.useEffect(() => {
    const runLayoutEngine = () => {
      const pages = document.querySelectorAll('.print-page');
      let allPassed = true;
      let failureLogs: string[] = [];
      
      pages.forEach((page, index) => {
        const pageNum = index + 1;
        let level = 0;
        const maxLevel = 5;
        
        page.classList.remove('auto-fit-1', 'auto-fit-2', 'auto-fit-3', 'auto-fit-4', 'auto-fit-5', 'auto-balance');
        
        // Force a layout recalculation
        void (page as HTMLElement).offsetHeight;
        
        while (page.scrollHeight > page.clientHeight + 2 && level < maxLevel) {
          level++;
          page.classList.add(\`auto-fit-\${level}\`);
          void (page as HTMLElement).offsetHeight; // force layout
        }
        
        if (page.scrollHeight > page.clientHeight + 2) {
           allPassed = false;
           failureLogs.push(\`Page \${pageNum} overflows by \${page.scrollHeight - page.clientHeight}px\`);
        }
        
        // Empty space balancing for flex-1 containers
        if (page.scrollHeight < page.clientHeight * 0.92) {
           page.classList.add('auto-balance');
        }
      });
      
      setDiagnostics(failureLogs);
    };
    
    const timer = setTimeout(runLayoutEngine, 800);
    return () => clearTimeout(timer);
  }, [report, formData, scores, pillarScores]);
`;

content = content.replace(/React\.useEffect\(\(\) => \{\s*const runLayoutEngine = \(\) => \{[\s\S]*?return \(\) => clearTimeout\(timer\);\s*\}, \[report, formData, scores, pillarScores\]\);/g, newUseEffect.trim());

// Add diagnostic overlay
const overlayInjection = `
      {diagnostics.length > 0 && (
        <div className="fixed top-4 right-4 z-50 bg-red-900 text-white p-4 rounded shadow-lg text-sm max-w-sm print:hidden">
          <h3 className="font-bold mb-2">⚠️ PDF Overflow Diagnostics</h3>
          <ul className="list-disc pl-4 space-y-1">
            {diagnostics.map((log, i) => (
              <li key={i}>{log}</li>
            ))}
          </ul>
        </div>
      )}
`;

content = content.replace(/<div id="krg-print-dossier-root"[^>]*>/, (match) => match + '\n' + overlayInjection);

fs.writeFileSync('src/components/PrintDossier.tsx', content, 'utf8');
console.log('Added diagnostics overlay');
