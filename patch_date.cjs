const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

const dateLogic = `
  const nextReviewDate = report?.createdAt 
    ? new Date(new Date(report.createdAt).setMonth(new Date(report.createdAt).getMonth() + 3)).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }) 
    : '';
`;

// Insert the logic after "const globalScore = "
content = content.replace(/const globalScore = /g, dateLogic + '\n  const globalScore = ');

// Replace "23 October 2026" with "{nextReviewDate}"
content = content.replace(/23 October 2026/g, '{nextReviewDate}');

fs.writeFileSync('src/components/PrintDossier.tsx', content, 'utf8');
