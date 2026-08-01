const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/return \([\s\S]*\);/g, 'return <DashboardReport formData={{}} scores={[4,3,2,5,4,3,2]} onResetAssessment={() => {}} />;');

fs.writeFileSync('src/App.tsx', content, 'utf8');
console.log('App.tsx forced to return DashboardReport');
