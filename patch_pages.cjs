const fs = require('fs');
const content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

const startTag = '{/* PAGE 4: SEVEN PILLAR ANALYSIS (1-2) */}';
const endIdx = content.indexOf(startTag);

if (endIdx === -1) {
  console.log("Could not find start tag");
  process.exit(1);
}

const newContent = content.substring(0, endIdx) + '    </div>\n  );\n}\n';
fs.writeFileSync('src/components/PrintDossier.tsx', newContent, 'utf8');
