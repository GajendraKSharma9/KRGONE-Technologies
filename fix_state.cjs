const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

if (!content.includes('const [diagnostics, setDiagnostics]')) {
  content = content.replace(/const companyName =/, 'const [diagnostics, setDiagnostics] = React.useState<string[]>([]);\n  const companyName =');
  fs.writeFileSync('src/components/PrintDossier.tsx', content, 'utf8');
  console.log('Fixed state injection');
} else {
  console.log('State already exists');
}
