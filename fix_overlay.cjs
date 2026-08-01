const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

content = content.replace(/\{diagnostics.length > 0 && \(/, '{true && (');
fs.writeFileSync('src/components/PrintDossier.tsx', content, 'utf8');
console.log('Fixed overlay rendering');
