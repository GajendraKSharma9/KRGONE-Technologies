const fs = require('fs');

let engine = fs.readFileSync('src/AssessmentEngine.tsx', 'utf8');
let report = fs.readFileSync('src/components/DashboardReport.tsx', 'utf8');

// Remove import DashboardReport
engine = engine.replace(/import DashboardReport.*?\n/, '');

// Remove default export from report
report = report.replace(/export default function DashboardReport/g, 'function DashboardReport');

// Remove React and motion imports from report as they are already in engine
report = report.replace(/import React.*?;\n/g, '');
report = report.replace(/import \{ motion \}.*?;\n/g, '');
// Also remove DOSSIER_TEMPLATES import if it exists, and combine lucide-react imports if necessary
// But simpler: just append DashboardReport code to the end of AssessmentEngine (except imports)

const engineImports = engine.match(/^import .*?;\n/gm).join('');
const reportImports = report.match(/^import .*?;\n/gm) ? report.match(/^import .*?;\n/gm).join('') : '';

const engineBody = engine.replace(/^import .*?;\n/gm, '');
const reportBody = report.replace(/^import .*?;\n/gm, '');

const allImports = engineImports + reportImports;

// We will just let ESBuild/Vite handle duplicate imports if any, or we can clean them up.
fs.writeFileSync('src/AssessmentEngine.tsx', allImports + '\n' + engineBody + '\n' + reportBody);

