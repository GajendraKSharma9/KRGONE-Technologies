import re

with open('src/components/DashboardReport.tsx', 'r') as f:
    content = f.read()

new_insights = """const getPillarInsights = (pillarTitle: string, score: number) => {
  if (score >= 85) {
    return {
      problemTitle: "THE ENTERPRISE CAPABILITY",
      problem: "Your organization displays exceptional framework maturity in this vertical. Operations run seamlessly, and metrics are insulated against external market shocks.",
      solutionTitle: "THE SCALING VELOCITY SOLUTION",
      solution: "Leverage this internal operational strength to capture greater market share, optimize corporate taxation strategies, and execute aggressive expansion.",
      interventionTitle: "THE KRG ONE SUPPORT HUB",
      intervention: "KRG ONE Deployment: We guide high-performing leadership teams through advanced corporate structuring, equity design, and large-scale growth blueprints to secure enterprise-level dominance."
    };
  } else if (score >= 70) {
    return {
      problemTitle: "THE CORE BOTTLENECK",
      problem: "Inconsistent application of documented processes and moderate reliance on owner intervention for non-standard operations creates an active execution ceiling.",
      solutionTitle: "THE SYSTEMATIC SOLUTION",
      solution: "Formalize mid-level management structures and enforce strict KPI tracking across all departmental workflows to transition from reactive firefighting to formal systems engineering.",
      interventionTitle: "THE KRG ONE SUPPORT HUB",
      intervention: "KRG ONE Deployment: We standardize core processes and implement automated tracking systems to recover lost productivity cycles and optimize profit margins."
    };
  } else {
    return {
      problemTitle: "THE CRITICAL PROBLEM",
      problem: "Severe operational friction due to manual process dependency, resulting in margin leakage and workflow volatility.",
      solutionTitle: "THE SYSTEMATIC SOLUTION",
      solution: "Transition immediately from reactive troubleshooting to structured systems engineering by documenting explicit SOPs.",
      interventionTitle: "THE KRG ONE SUPPORT HUB",
      intervention: "KRG ONE Deployment: Our execution consultants work directly with your team to physically draft your company playbooks, build your digital SOP dashboards, and run management training sprints to insulate your profits."
    };
  }
};"""

pattern = r'const getPillarInsights = \(pillarTitle: string, score: number\) => \{.*?\s+return \{ problem, impact, solution, intervention \};\s*\};'

content = re.sub(pattern, new_insights, content, flags=re.DOTALL)

with open('src/components/DashboardReport.tsx', 'w') as f:
    f.write(content)

