const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

content = content.replace(/className="hidden print:block /g, 'className="block ');
fs.writeFileSync('src/components/PrintDossier.tsx', content, 'utf8');
console.log('Fixed display hidden');
