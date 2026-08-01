const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

// Add new lucide icons
content = content.replace(
  "Network } from 'lucide-react';",
  "Network, ThumbsUp, ThumbsDown, Quote, Meh, Frown, MessageSquare, CalendarDays, UserCircle, List } from 'lucide-react';"
);

// Add recharts components
// No need to add PieChart to avoid conflict, we use pure CSS/SVG
// But let's make sure we have everything we need

fs.writeFileSync('src/components/PrintDossier.tsx', content, 'utf8');
console.log('Imports updated');
