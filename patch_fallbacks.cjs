const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

content = content.replace(/\|\| 'Not Provided'/g, "|| ''");
content = content.replace(/\|\| 'Technology'/g, "|| ''");
content = content.replace(/\|\| '\$1M - \$5M'/g, "|| ''");
content = content.replace(/\|\| '11-50 employees'/g, "|| ''");
content = content.replace(/\|\| '6 Years'/g, "|| ''");
content = content.replace(/\|\| 'Product \+ Services'/g, "|| ''");
content = content.replace(/\|\| 'B2B Enterprise'/g, "|| ''");

fs.writeFileSync('src/components/PrintDossier.tsx', content, 'utf8');
