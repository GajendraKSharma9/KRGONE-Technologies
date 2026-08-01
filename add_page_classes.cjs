const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

let pageIndex = 1;
content = content.replace(/className="print-page/g, () => {
  return 'className="print-page page-' + (pageIndex++);
});

fs.writeFileSync('src/components/PrintDossier.tsx', content, 'utf8');
console.log('Added page-X classes');
