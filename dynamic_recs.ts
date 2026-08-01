export const getRecommendations = (goal: string, challenges: string[]) => {
  const ALL_RECOMMENDATIONS = [
    {
      id: 'sops',
      title: 'Develop Core Standard Operating Procedures (SOPs)',
      friction: 'Your business functions rely on tribal employee memory rather than clear documented systems, leading to high processing errors, unpredictable client delivery quality, and extended onboarding timelines for new hires.',
      intervention: 'Document a unified digital blueprint for your absolute highest-leverage processes across sales, operations, and finance. Map out visual step-by-step swimlane diagrams and set explicit processing speed rules for every department.',
      deployment: 'We deploy senior systems consultants directly into your firm to audit your workflows, write your custom operational playbooks, and build an interactive digital wiki database. This secures execution quality and helps insulate your profit margins.',
      triggers: ['Operational Inefficiency & Lack of Systems', 'Improve Operational Efficiency', 'Scale & Expand the Business', 'Business Growth Strategy & Scaling']
    },
    {
      id: 'lead_nurture',
      title: 'Deploy Automated Lead Nurturing Frameworks',
      friction: 'High volumes of potential pipeline revenue are being leaked due to manual follow-up dependencies. Sales teams drop prospects that don\'t convert immediately, ignoring the long-term lifetime value matrix.',
      intervention: 'Architect a multi-channel automated CRM infrastructure that triggers behavior-based follow-up sequences. Establish strict lead scoring protocols to ensure your sales team only spends human capital on high-intent prospects.',
      deployment: 'Our revenue operations architects will completely rebuild your CRM topology, configure the automated workflows, and train your sales team on elite conversion methodologies to instantly recapture lost pipeline capital.',
      triggers: ['Inconsistent Sales & Revenue Growth', 'Increase Revenue & Sales', 'Acquire & Retain More Customers', 'Customer Acquisition & Retention']
    },
    {
      id: 'financial_kpi',
      title: 'Institute Rigid Financial KPI Tracking',
      friction: 'Decisions are being made on gross revenue assumptions rather than net unit profitability. Without granular financial visibility, capital is allocated inefficiently, masking structural cash flow bleed.',
      intervention: 'Deploy real-time financial dashboards focusing on Gross Margin, Customer Acquisition Cost (CAC), and Lifetime Value (LTV). Force a weekly executive review cycle anchored entirely to these hard mathematical truths.',
      deployment: 'We embed fractional CFO capabilities to restructure your chart of accounts, construct live business intelligence (BI) dashboards, and run aggressive monthly financial audits to maximize your capital efficiency.',
      triggers: ['Low Profitability or Cash Flow Issues', 'Improve Profitability & Cash Flow']
    },
    {
      id: 'decentralize',
      title: 'Decentralize Executive Decision Making',
      friction: 'The founder is the ultimate bottleneck for both strategic and routine operational approvals. This centralized command structure suffocates middle-management initiative and caps operational speed.',
      intervention: 'Implement an \'Accountability Chart\' rather than a standard organizational chart. Assign specific, measurable outcomes to department heads and grant them the explicit authority to execute within pre-approved budget parameters.',
      deployment: 'We conduct a comprehensive leadership audit, re-map your organizational responsibilities, and facilitate leadership training to transform your employees from task-takers into autonomous strategic operators.',
      triggers: ['Team Productivity & Leadership Challenges', 'Scale & Expand the Business']
    },
    {
      id: 'talent',
      title: 'Engineer a Scalable Talent Acquisition Machine',
      friction: 'Hiring is reactive and based on immediate desperation rather than strategic forecasting. This leads to poor cultural fits, high turnover rates, and massive unseen costs in constant retraining.',
      intervention: 'Treat recruitment exactly like customer acquisition. Build a continuous inbound talent funnel, standardize interview scorecards to eliminate bias, and create a rigid 30-60-90 day onboarding matrix.',
      deployment: 'Our HR optimization unit will design your employer branding assets, configure automated applicant tracking systems (ATS), and build the complete onboarding curriculum to guarantee immediate new-hire ROI.',
      triggers: ['Team Productivity & Leadership Challenges', 'Scale & Expand the Business', 'Business Growth Strategy & Scaling']
    },
    {
      id: 'tech',
      title: 'Implement Enterprise AI & Automation',
      friction: 'Repetitive administrative tasks consume a disproportionate amount of human capital. Your team is spending hours on manual data entry, reporting, and coordination rather than high-leverage strategic work.',
      intervention: 'Deploy AI-driven automation workflows across your primary operational bottlenecks. Integrate LLM-powered tools for customer support routing, automated data extraction, and predictive inventory/resource management.',
      deployment: 'Our technology implementation unit will map your existing software stack, identify high-friction manual nodes, and build custom API integrations to automate data flow seamlessly across your entire organization.',
      triggers: ['Build a Future-Ready Business (Technology & AI)', 'Improve Operational Efficiency']
    },
    {
      id: 'retention',
      title: 'Architect a Predictive Customer Retention Engine',
      friction: 'Revenue growth is constantly offset by customer churn. The business focuses disproportionately on front-end acquisition while lacking systematic, proactive touchpoints to secure long-term lifetime value.',
      intervention: 'Map the complete post-sale customer journey. Implement automated check-ins, satisfaction scoring (NPS), and predictive churn alerts to trigger human intervention before a client defects.',
      deployment: 'We build a comprehensive customer success playbook tailored to your offerings. Our team will integrate health-scoring metrics into your CRM to ensure your retention strategy is data-driven, rather than reactive.',
      triggers: ['Acquire & Retain More Customers', 'Customer Acquisition & Retention']
    }
  ];

  const scored = ALL_RECOMMENDATIONS.map(rec => {
    let score = 0;
    if (rec.triggers.includes(goal)) score += 2;
    challenges.forEach(ch => {
      if (rec.triggers.includes(ch)) score += 1;
    });
    return { ...rec, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 5);
};
