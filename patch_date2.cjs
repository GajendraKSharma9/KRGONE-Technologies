const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

const dateLogic = `
  const nextReviewDate = report?.createdAt 
    ? new Date(new Date(report.createdAt).setMonth(new Date(report.createdAt).getMonth() + 3)).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }) 
    : '';
`;

content = content.replace(/const businessCategory = formData\?.businessCategory \|\| 'B2B Enterprise';/g, `const businessCategory = formData?.businessCategory || 'B2B Enterprise';\n${dateLogic}`);
content = content.replace(/23 October 2026/g, '{nextReviewDate}');

fs.writeFileSync('src/components/PrintDossier.tsx', content, 'utf8');
