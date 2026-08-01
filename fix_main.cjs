const fs = require('fs');
let content = fs.readFileSync('src/main.tsx', 'utf8');

const backup = content;
fs.writeFileSync('src/main.tsx.backup', backup, 'utf8');

content = `import React from 'react';
import ReactDOM from 'react-dom/client';
import DashboardReport from './components/DashboardReport';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DashboardReport formData={{}} scores={[4,3,2,5,4,3,2]} onResetAssessment={() => {}} />
  </React.StrictMode>,
);
`;

fs.writeFileSync('src/main.tsx', content, 'utf8');
console.log('main.tsx modified to show DashboardReport');
