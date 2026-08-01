import re

with open('src/AssessmentEngine.tsx', 'r') as f:
    content = f.read()

# Remove all localStorage setItem and getItem useEffects for krgone
content = re.sub(r'useEffect\(\(\) => \{\s*if \(typeof window !== \'undefined\'\) \{\s*const savedIdx = localStorage\.getItem\(\'krgone_currentQuestionIdx\'\);\s*if \(savedIdx !== null\) \{\s*setCurrentQuestionIdx\(parseInt\(savedIdx, 10\)\);\s*\}\s*\}\s*\}, \[\]\);\s*', '', content)
content = re.sub(r'useEffect\(\(\) => \{\s*localStorage\.setItem\(\'krgone_scores\', JSON\.stringify\(scores\)\);\s*\}, \[scores\]\);\s*', '', content)
content = re.sub(r'useEffect\(\(\) => \{\s*localStorage\.setItem\(\'krgone_currentQuestionIdx\', currentQuestionIdx\.toString\(\)\);\s*\}, \[currentQuestionIdx\]\);\s*', '', content)

with open('src/AssessmentEngine.tsx', 'w') as f:
    f.write(content)
