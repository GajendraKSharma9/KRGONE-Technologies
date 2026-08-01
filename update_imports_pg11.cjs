const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

if (!content.includes('Signal,')) {
  content = content.replace(
    "List } from 'lucide-react';",
    "List, Signal, Gauge, Database, Workflow, Cog, Play } from 'lucide-react';"
  );
  fs.writeFileSync('src/components/PrintDossier.tsx', content, 'utf8');
  console.log('Imports updated');
} else {
  console.log('Imports already updated');
}
