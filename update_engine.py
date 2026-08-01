import re

with open('src/AssessmentEngine.tsx', 'r') as f:
    content = f.read()

# Update "Calculating..." to "--"
content = content.replace("currentQuestionIdx < 21 ? 'Calculating...' : `${getGlobalScore()}%`", "currentQuestionIdx < 21 ? '--' : `${getGlobalScore()}%`")

with open('src/AssessmentEngine.tsx', 'w') as f:
    f.write(content)
