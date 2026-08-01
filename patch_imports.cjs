const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

content = content.replace(
  "import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';",
  "import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';"
);

// Disable animation in Radar
content = content.replace(/<Radar name=/g, "<Radar isAnimationActive={false} name=");

fs.writeFileSync('src/components/PrintDossier.tsx', content, 'utf8');
