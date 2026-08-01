const fs = require('fs');
const content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

let newContent = content;
const obStart = '  const getOpportunityBadge = ';
const rfStart = '  const renderFooter = ';
const rpStart = '    const renderPillarCard = (pillar: any) => {';

let obIdx = newContent.indexOf(obStart);
if (obIdx !== -1) {
  let obEnd = newContent.indexOf('  }', obIdx);
  newContent = newContent.slice(0, obIdx) + newContent.slice(obEnd + 4);
}

let rfIdx = newContent.indexOf(rfStart);
if (rfIdx !== -1) {
  let rfEnd = newContent.indexOf('  );', rfIdx);
  newContent = newContent.slice(0, rfIdx) + newContent.slice(rfEnd + 5);
}

let rpIdx = newContent.indexOf(rpStart);
if (rpIdx !== -1) {
  let rpEnd = newContent.indexOf('  )};', rpIdx);
  newContent = newContent.slice(0, rpIdx) + newContent.slice(rpEnd + 6);
}

fs.writeFileSync('src/components/PrintDossier.tsx', newContent, 'utf8');
