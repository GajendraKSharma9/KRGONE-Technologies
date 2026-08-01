const fs = require('fs');
const content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');
const replacement = fs.readFileSync('replacement_pillar.txt', 'utf8');

const startTag = 'const renderPillarCard = (pillar: any) => (';
const endTag = '  return (';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex === -1 || endIndex === -1) {
  console.log("Could not find tags", { startIndex, endIndex });
  process.exit(1);
}

const newContent = content.substring(0, startIndex) + replacement + content.substring(endIndex);
fs.writeFileSync('src/components/PrintDossier.tsx', newContent, 'utf8');
