const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

if (!content.includes('AlertCircle,')) {
  content = content.replace(
    "Play } from 'lucide-react';",
    "Play, AlertCircle, MinusCircle, Search, Store } from 'lucide-react';"
  );
  fs.writeFileSync('src/components/PrintDossier.tsx', content, 'utf8');
  console.log('Imports updated');
} else {
  console.log('Imports already updated');
}
