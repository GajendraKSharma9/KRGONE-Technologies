const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

const missingIcons = ['ClipboardList', 'Filter', 'Megaphone', 'Rocket', 'PieChart'];
let newImport = content.match(/import \{([^}]+)\} from 'lucide-react';/)[0];
missingIcons.forEach(icon => {
  if (!newImport.includes(icon)) {
    newImport = newImport.replace('} from', `, ${icon} } from`);
  }
});
content = content.replace(/import \{[^}]+\} from 'lucide-react';/, newImport);

fs.writeFileSync('src/components/PrintDossier.tsx', content, 'utf8');
