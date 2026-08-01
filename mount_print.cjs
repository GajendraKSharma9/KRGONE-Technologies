const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const backup = content;
fs.writeFileSync('src/App.tsx.backup', backup, 'utf8');

content = content.replace(/<AssessmentEngine \/>/g, '<DashboardReport formData={{}} scores={[4,3,2,5,4,3,2]} onResetAssessment={() => {}} />');
content = `import DashboardReport from './components/DashboardReport';\n` + content;

fs.writeFileSync('src/App.tsx', content, 'utf8');
console.log('App.tsx modified to show DashboardReport');
