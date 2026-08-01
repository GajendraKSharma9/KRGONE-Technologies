import re

with open('src/components/DashboardReport.tsx', 'r') as f:
    content = f.read()

# Replace getPillarInsights definition with import
pattern = r'const getPillarInsights = \(pillarTitle: string, score: number\) => \{.*?\};\s*\};'
replacement = "import { DOSSIER_TEMPLATES } from '../utils/dossierTemplates';"

content = re.sub(pattern, replacement, content, flags=re.DOTALL)

# Replace getPillarInsights(pillar, score) with DOSSIER_TEMPLATES(pillar, score)
content = content.replace("getPillarInsights(pillar, score)", "DOSSIER_TEMPLATES(pillar, score)")
content = content.replace("getPillarInsights(pillarTitle, score)", "DOSSIER_TEMPLATES(pillarTitle, score)")

with open('src/components/DashboardReport.tsx', 'w') as f:
    f.write(content)
