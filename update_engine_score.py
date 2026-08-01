import re

with open('src/AssessmentEngine.tsx', 'r') as f:
    content = f.read()

pattern = r'  const getGlobalScore = \(\): number => \{.*?return Math\.round\(\(sum / 84\) \* 100\);\s*\};'

new_logic = """  const getGlobalScore = (): number => {
    if (!scores || scores.length === 0) return 0;
    const weights = [18, 17, 14, 16, 15, 10, 10];
    let totalScore = 0;
    for (let i = 0; i < 7; i++) {
        const startIdx = i * 3;
        const answered = scores.slice(startIdx, startIdx + 3).filter(s => typeof s === 'number' && !isNaN(s) && s > 0);
        if (answered.length === 0) continue;
        const total = answered.reduce((a, b) => a + b, 0);
        totalScore += (total / 15) * weights[i];
    }
    return Math.round(totalScore);
  };"""

content = re.sub(pattern, new_logic, content, flags=re.DOTALL)

with open('src/AssessmentEngine.tsx', 'w') as f:
    f.write(content)
print("Updated AssessmentEngine score!")
