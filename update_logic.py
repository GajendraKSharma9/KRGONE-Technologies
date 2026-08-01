import re

with open('src/components/DashboardReport.tsx', 'r') as f:
    content = f.read()

pattern = r'  const getPillarScore = .*?const getScoreStatus = \(score: number\) => \{\s*if \(score >= 80\) return \'Strong\';\s*if \(score >= 60\) return \'Needs Attention\';\s*return \'Critical\';\s*\};'

new_logic = """  const getPillarScore = (index: number) => {
    if (!scores || scores.length === 0) return 0;
    const startIdx = index * 3;
    const answered = scores.slice(startIdx, startIdx + 3).filter(s => typeof s === 'number' && !isNaN(s) && s > 0);
    if (answered.length === 0) return 0;
    const total = answered.reduce((a, b) => a + b, 0);
    return Math.round((total / 15) * 100);
  };

  const getGlobalScore = () => {
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
  };

  const globalScore = getGlobalScore();

  const getScoreColor = (score: number) => {
    if (score >= 70) return '#10B981';
    if (score >= 55) return '#F59E0B';
    return '#991B1B';
  };

  const getScoreStatus = (score: number) => {
    if (score >= 85) return 'Growth Ready';
    if (score >= 70) return 'Growing Business';
    if (score >= 55) return 'Developing Business';
    if (score >= 40) return 'Needs Attention';
    return 'Critical Priority';
  };
  
  const getScoreRating = (score: number) => {
    if (score >= 85) return 'A';
    if (score >= 70) return 'B';
    if (score >= 55) return 'C';
    if (score >= 40) return 'D';
    return 'E';
  };
  
  const getLowestPillar = () => {
    let minScore = 101;
    let lowestPillarName = 'Operations & Process';
    pillars.forEach((p, i) => {
        const s = getPillarScore(i);
        if (s < minScore) {
            minScore = s;
            lowestPillarName = p;
        }
    });
    return lowestPillarName;
  };"""

content = re.sub(pattern, new_logic, content, flags=re.DOTALL)

with open('src/components/DashboardReport.tsx', 'w') as f:
    f.write(content)
print("Updated logic!")
