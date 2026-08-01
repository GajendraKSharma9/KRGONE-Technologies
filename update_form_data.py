import re

with open('src/AssessmentEngine.tsx', 'r') as f:
    content = f.read()

content = content.replace("challenges: [] as string[],\n    challengesOther: '',", "challenges: [] as string[],\n    challengesOther: '',\n    priority: '',\n    opportunity: '',")

with open('src/AssessmentEngine.tsx', 'w') as f:
    f.write(content)

