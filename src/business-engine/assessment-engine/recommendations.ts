/**
 * Business Engine - Recommendation Mapping Engine
 * Maps each (Pillar, Maturity Band) pair to actionable recommendations, KPIs, and outcomes.
 */

import { PillarId, MaturityBand, RecommendationMap } from './types';

export const RECOMMENDATION_MAP: Record<string, RecommendationMap> = {
  // =========================================================================
  // LEADERSHIP & GOVERNANCE (LDR)
  // =========================================================================
  [`${PillarId.LEADERSHIP}_${MaturityBand.AT_RISK}`]: {
    code: 'LDR-REC-01',
    pillarId: PillarId.LEADERSHIP,
    maturityBand: MaturityBand.AT_RISK,
    keyStrength: 'Direct founder passion and close executive control over daily execution.',
    criticalGap: 'Severe owner dependency creating an operational bottleneck where all approvals stall.',
    strategicRecommendation: 'Draft functional Delegation Playbooks and grant ₹50K approval limits to department managers.',
    targetKPI: 'Founder operational hours reduced from 60+ hrs/wk to < 20 hrs/wk.',
    expectedOutcome: 'Immediate 40% gain in decision execution speed across middle management.',
    actionTimeframeDays: 30,
  },
  [`${PillarId.LEADERSHIP}_${MaturityBand.DEVELOPING}`]: {
    code: 'LDR-REC-02',
    pillarId: PillarId.LEADERSHIP,
    maturityBand: MaturityBand.DEVELOPING,
    keyStrength: 'Active leadership involvement with informal delegation of routine duties.',
    criticalGap: 'Lack of structured quarterly reviews and objective performance metrics.',
    strategicRecommendation: 'Implement quarterly OKR framework and hold formal monthly leadership cadence meetings.',
    targetKPI: '100% leadership alignment on 3 core quarterly revenue targets.',
    expectedOutcome: 'Clear cross-functional strategic focus and eliminated goal drift.',
    actionTimeframeDays: 60,
  },
  [`${PillarId.LEADERSHIP}_${MaturityBand.ESTABLISHED}`]: {
    code: 'LDR-REC-03',
    pillarId: PillarId.LEADERSHIP,
    maturityBand: MaturityBand.ESTABLISHED,
    keyStrength: 'Autonomous department leaders managing routine operations effectively.',
    criticalGap: 'Lack of external advisory board oversight for institutional risk management.',
    strategicRecommendation: 'Form a 3-member external advisory board with quarterly governance meetings.',
    targetKPI: 'Quarterly board meeting compliance & risk audit execution.',
    expectedOutcome: 'Enhanced enterprise valuation multiple and long-term strategic resilience.',
    actionTimeframeDays: 90,
  },
  [`${PillarId.LEADERSHIP}_${MaturityBand.LEADER}`]: {
    code: 'LDR-REC-04',
    pillarId: PillarId.LEADERSHIP,
    maturityBand: MaturityBand.LEADER,
    keyStrength: 'Self-sustaining leadership board operating with institutional governance standards.',
    criticalGap: 'Maintaining alignment across expanding business units and legacy succession planning.',
    strategicRecommendation: 'Establish formal succession pathways and executive long-term incentive plans (LTIP).',
    targetKPI: '100% succession coverage for C-suite roles.',
    expectedOutcome: 'Permanent enterprise longevity and seamless leadership transitions.',
    actionTimeframeDays: 180,
  },

  // =========================================================================
  // STRATEGY & MARKET POSITIONING (STR)
  // =========================================================================
  [`${PillarId.STRATEGY}_${MaturityBand.AT_RISK}`]: {
    code: 'STR-REC-01',
    pillarId: PillarId.STRATEGY,
    maturityBand: MaturityBand.AT_RISK,
    keyStrength: 'Agile market adaptability and ability to pivot quickly to immediate client needs.',
    criticalGap: 'Commoditized offering competing primarily on price with no clear brand moat.',
    strategicRecommendation: 'Define a high-ticket specialized niche positioning statement and bundle value-added services.',
    targetKPI: '15% increase in average contract value (ACV).',
    expectedOutcome: 'Eliminated price discounting pressure and improved gross margin.',
    actionTimeframeDays: 30,
  },
  [`${PillarId.STRATEGY}_${MaturityBand.DEVELOPING}`]: {
    code: 'STR-REC-02',
    pillarId: PillarId.STRATEGY,
    maturityBand: MaturityBand.DEVELOPING,
    keyStrength: 'Solid service reputation in existing customer base.',
    criticalGap: 'Ad-hoc expansion without a structured 3-year market entry roadmap.',
    strategicRecommendation: 'Conduct formal TAM/SAM market research and publish a 3-year growth strategy blueprint.',
    targetKPI: '2 new high-margin target verticals identified and validated.',
    expectedOutcome: 'Focused marketing spend and faster market share acquisition.',
    actionTimeframeDays: 60,
  },
  [`${PillarId.STRATEGY}_${MaturityBand.ESTABLISHED}`]: {
    code: 'STR-REC-03',
    pillarId: PillarId.STRATEGY,
    maturityBand: MaturityBand.ESTABLISHED,
    keyStrength: 'Recognized market specialist with defensible value proposition.',
    criticalGap: 'Untapped expansion into adjacent product/service verticals.',
    strategicRecommendation: 'Launch adjacent cross-sell product line to existing client ecosystem.',
    targetKPI: '25% share of wallet expansion among top 20% clients.',
    expectedOutcome: 'Higher customer lifetime value without increasing acquisition cost.',
    actionTimeframeDays: 90,
  },
  [`${PillarId.STRATEGY}_${MaturityBand.LEADER}`]: {
    code: 'STR-REC-04',
    pillarId: PillarId.STRATEGY,
    maturityBand: MaturityBand.LEADER,
    keyStrength: 'Dominant market positioning and strong pricing power.',
    criticalGap: 'Risk of disruptive market entrant or technology shift.',
    strategicRecommendation: 'Invest in strategic R&D and evaluate bolt-on acquisition targets for market dominance.',
    targetKPI: '30% revenue contribution from new innovations launched in last 24 months.',
    expectedOutcome: 'Unshakeable category leadership and high competitive moat.',
    actionTimeframeDays: 180,
  },

  // =========================================================================
  // SALES & CUSTOMER ACQUISITION (SLS)
  // =========================================================================
  [`${PillarId.SALES}_${MaturityBand.AT_RISK}`]: {
    code: 'SLS-REC-01',
    pillarId: PillarId.SALES,
    maturityBand: MaturityBand.AT_RISK,
    keyStrength: 'Strong client trust and organic word-of-mouth recommendations.',
    criticalGap: 'Total reliance on informal referrals with zero predictable lead acquisition funnels.',
    strategicRecommendation: 'Build an automated outbound lead campaign and install a standardized CRM pipeline.',
    targetKPI: 'Minimum 20 qualified sales inquiries generated per month.',
    expectedOutcome: 'Predictable monthly pipeline replacing volatile revenue spikes.',
    actionTimeframeDays: 30,
  },
  [`${PillarId.SALES}_${MaturityBand.DEVELOPING}`]: {
    code: 'SLS-REC-02',
    pillarId: PillarId.SALES,
    maturityBand: MaturityBand.DEVELOPING,
    keyStrength: 'Basic CRM tracking and active lead generation activities.',
    criticalGap: 'Inconsistent follow-up cadence leading to pipeline lead decay.',
    strategicRecommendation: 'Implement mandatory CRM follow-up SLAs and automated 5-step email/WhatsApp nurture sequences.',
    targetKPI: 'Lead follow-up speed under 15 minutes; pipeline conversion rate +20%.',
    expectedOutcome: 'Higher lead conversion velocity and reduced lost deal leakage.',
    actionTimeframeDays: 60,
  },
  [`${PillarId.SALES}_${MaturityBand.ESTABLISHED}`]: {
    code: 'SLS-REC-03',
    pillarId: PillarId.SALES,
    maturityBand: MaturityBand.ESTABLISHED,
    keyStrength: 'Predictable multi-channel lead acquisition engine.',
    criticalGap: 'Sub-optimal LTV:CAC ratio due to manual sales rep demo overhead.',
    strategicRecommendation: 'Optimize sales enablement assets, automated proposal generators, and account expansion scripts.',
    targetKPI: 'LTV:CAC ratio > 4:1 with sales cycle shortened by 25%.',
    expectedOutcome: 'Highly profitable sales scaling with shorter payback periods.',
    actionTimeframeDays: 90,
  },
  [`${PillarId.SALES}_${MaturityBand.LEADER}`]: {
    code: 'SLS-REC-04',
    pillarId: PillarId.SALES,
    maturityBand: MaturityBand.LEADER,
    keyStrength: 'Predictable, high-converting sales flywheel with elite unit economics.',
    criticalGap: 'Reaching saturation in core acquisition channels.',
    strategicRecommendation: 'Scale account-based marketing (ABM) for enterprise clients and expand partner distribution channels.',
    targetKPI: '50% revenue growth driven by strategic channel partnerships.',
    expectedOutcome: 'Scalable market expansion with minimal incremental acquisition cost.',
    actionTimeframeDays: 180,
  },

  // =========================================================================
  // OPERATIONS & SOPS (OPS)
  // =========================================================================
  [`${PillarId.OPERATIONS}_${MaturityBand.AT_RISK}`]: {
    code: 'OPS-REC-01',
    pillarId: PillarId.OPERATIONS,
    maturityBand: MaturityBand.AT_RISK,
    keyStrength: 'Flexible hands-on execution and high dedication to fulfilling commitments.',
    criticalGap: 'Tribal knowledge with zero documented SOPs leading to frequent quality errors.',
    strategicRecommendation: 'Document top 10 core operational processes into digital SOP playbooks with video walkthroughs.',
    targetKPI: '100% documentation of core delivery workflows.',
    expectedOutcome: '50% drop in delivery execution errors and faster team onboarding.',
    actionTimeframeDays: 30,
  },
  [`${PillarId.OPERATIONS}_${MaturityBand.DEVELOPING}`]: {
    code: 'OPS-REC-02',
    pillarId: PillarId.OPERATIONS,
    maturityBand: MaturityBand.DEVELOPING,
    keyStrength: 'Basic operational process awareness across main business functions.',
    criticalGap: 'Capacity bottlenecks causing delivery delays during volume spikes.',
    strategicRecommendation: 'Establish a centralized SLA monitoring dashboard and capacity forecasting model.',
    targetKPI: '95%+ on-time delivery SLA compliance.',
    expectedOutcome: 'Eliminated operational bottleneck crunches and improved customer retention.',
    actionTimeframeDays: 60,
  },
  [`${PillarId.OPERATIONS}_${MaturityBand.ESTABLISHED}`]: {
    code: 'OPS-REC-03',
    pillarId: PillarId.OPERATIONS,
    maturityBand: MaturityBand.ESTABLISHED,
    keyStrength: 'Standardized digital SOP library and consistent quality control.',
    criticalGap: 'Linear operational cost scaling where growth requires proportional headcount.',
    strategicRecommendation: 'Automate handoffs between sales, ops, and accounting using custom webhook integrations.',
    targetKPI: '3x volume handling capability with < 30% overhead increase.',
    expectedOutcome: 'Expanding operating profit margins as revenue scales.',
    actionTimeframeDays: 90,
  },
  [`${PillarId.OPERATIONS}_${MaturityBand.LEADER}`]: {
    code: 'OPS-REC-04',
    pillarId: PillarId.OPERATIONS,
    maturityBand: MaturityBand.LEADER,
    keyStrength: 'Lean, highly continuous operational execution engine with low defect rate.',
    criticalGap: 'Incremental efficiency gains diminishing without global optimization.',
    strategicRecommendation: 'Deploy AI-driven predictive supply chain and automated quality inspection frameworks.',
    targetKPI: 'Near-zero defect rate (< 0.1%) across all customer deliverables.',
    expectedOutcome: 'Unbeatable operational efficiency and cost structure supremacy.',
    actionTimeframeDays: 180,
  },

  // =========================================================================
  // FINANCE & PROFITABILITY (FIN)
  // =========================================================================
  [`${PillarId.FINANCE}_${MaturityBand.AT_RISK}`]: {
    code: 'FIN-REC-01',
    pillarId: PillarId.FINANCE,
    maturityBand: MaturityBand.AT_RISK,
    keyStrength: 'Entrepreneurial cash conservation awareness.',
    criticalGap: 'Annual tax-only accounting with zero real-time visibility into monthly P&L or cash flow.',
    strategicRecommendation: 'Implement cloud accounting software and generate monthly P&L and 13-week rolling cash forecasts.',
    targetKPI: 'Monthly financial closure within 5 days of month-end.',
    expectedOutcome: 'Complete cash visibility and prevention of sudden liquidity crunches.',
    actionTimeframeDays: 30,
  },
  [`${PillarId.FINANCE}_${MaturityBand.DEVELOPING}`]: {
    code: 'FIN-REC-02',
    pillarId: PillarId.FINANCE,
    maturityBand: MaturityBand.DEVELOPING,
    keyStrength: 'Regular monthly P&L generation and basic bank reconciliation.',
    criticalGap: 'Delayed Accounts Receivable (AR) collection choking working capital.',
    strategicRecommendation: 'Enforce automated payment reminders, credit limit terms, and late fee clauses.',
    targetKPI: 'Reduce DSO (Days Sales Outstanding) to under 30 days.',
    expectedOutcome: 'Unlocked working capital reserves and smooth vendor payment cycles.',
    actionTimeframeDays: 60,
  },
  [`${PillarId.FINANCE}_${MaturityBand.ESTABLISHED}`]: {
    code: 'FIN-REC-03',
    pillarId: PillarId.FINANCE,
    maturityBand: MaturityBand.ESTABLISHED,
    keyStrength: 'Disciplined financial reporting and healthy working capital cycle.',
    criticalGap: 'Lack of product SKU / client-level gross margin accountability.',
    strategicRecommendation: 'Implement unit-level cost accounting to identify and renegotiate low-margin accounts.',
    targetKPI: 'Minimum 35% gross profit margin across all client accounts.',
    expectedOutcome: '5% - 8% boost in overall net profit margin.',
    actionTimeframeDays: 90,
  },
  [`${PillarId.FINANCE}_${MaturityBand.LEADER}`]: {
    code: 'FIN-REC-04',
    pillarId: PillarId.FINANCE,
    maturityBand: MaturityBand.LEADER,
    keyStrength: 'Real-time financial dashboarding and strong negative working capital cycle.',
    criticalGap: 'Idle cash reserves not yield-optimized for enterprise growth.',
    strategicRecommendation: 'Implement treasury management optimization, tax-efficient capital reinvestment, and M&A reserves.',
    targetKPI: '12%+ return on invested capital (ROIC).',
    expectedOutcome: 'Compounded enterprise wealth and aggressive balance sheet strength.',
    actionTimeframeDays: 180,
  },

  // =========================================================================
  // HUMAN RESOURCES & PEOPLE (HR)
  // =========================================================================
  [`${PillarId.HUMAN_RESOURCES}_${MaturityBand.AT_RISK}`]: {
    code: 'HR-REC-01',
    pillarId: PillarId.HUMAN_RESOURCES,
    maturityBand: MaturityBand.AT_RISK,
    keyStrength: 'Tight-knit team loyalty and direct personal relationships with staff.',
    criticalGap: 'Ambiguous roles with no clear KPIs, leading to reactive task management.',
    strategicRecommendation: 'Draft clear Job Descriptions with 3-5 measurable KPIs for every role in the business.',
    targetKPI: '100% staff signed KPI agreements.',
    expectedOutcome: 'Immediate boost in employee accountability and task execution clarity.',
    actionTimeframeDays: 30,
  },
  [`${PillarId.HUMAN_RESOURCES}_${MaturityBand.DEVELOPING}`]: {
    code: 'HR-REC-02',
    pillarId: PillarId.HUMAN_RESOURCES,
    maturityBand: MaturityBand.DEVELOPING,
    keyStrength: 'Basic KPI scorecards and documented annual reviews.',
    criticalGap: 'High employee ramp-up time due to informal onboarding procedures.',
    strategicRecommendation: 'Build a standardized 30-60-90 day employee onboarding and training playbook.',
    targetKPI: 'New hire ramp-up time reduced to < 21 days.',
    expectedOutcome: 'Faster time-to-value for new hires and reduced turnover frustration.',
    actionTimeframeDays: 60,
  },
  [`${PillarId.HUMAN_RESOURCES}_${MaturityBand.ESTABLISHED}`]: {
    code: 'HR-REC-03',
    pillarId: PillarId.HUMAN_RESOURCES,
    maturityBand: MaturityBand.ESTABLISHED,
    keyStrength: 'Structured performance reviews linked to quarterly incentives.',
    criticalGap: 'Key-person risk where departure of top talent disrupts operations.',
    strategicRecommendation: 'Design talent retention programs, career growth ladders, and succession cross-training.',
    targetKPI: 'Voluntary key-talent attrition < 5% annually.',
    expectedOutcome: 'Insulated operational capability and protected organizational memory.',
    actionTimeframeDays: 90,
  },
  [`${PillarId.HUMAN_RESOURCES}_${MaturityBand.LEADER}`]: {
    code: 'HR-REC-04',
    pillarId: PillarId.HUMAN_RESOURCES,
    maturityBand: MaturityBand.LEADER,
    keyStrength: 'High-performance ownership culture with industry-leading eNPS scores.',
    criticalGap: 'Scaling culture across geographically distributed or remote teams.',
    strategicRecommendation: 'Launch an internal Leadership Academy and employer branding talent attraction funnel.',
    targetKPI: 'eNPS score > 75 with top-tier talent inbound pipeline.',
    expectedOutcome: 'Magnet for elite industry talent driving sustainable competitive advantage.',
    actionTimeframeDays: 180,
  },

  // =========================================================================
  // TECHNOLOGY & SYSTEMS (TEC)
  // =========================================================================
  [`${PillarId.TECHNOLOGY}_${MaturityBand.AT_RISK}`]: {
    code: 'TEC-REC-01',
    pillarId: PillarId.TECHNOLOGY,
    maturityBand: MaturityBand.AT_RISK,
    keyStrength: 'Basic digital familiarity and willingness to use modern tools.',
    criticalGap: 'Disconnected software tools requiring manual duplicate data entry and spreadsheet chaos.',
    strategicRecommendation: 'Migrate to a single cloud suite (Google Workspace/MS365) and set up automated API/Zapier connectors.',
    targetKPI: 'Eliminate 10+ hours/week of manual spreadsheet data entry.',
    expectedOutcome: 'Drastic reduction in data entry errors and reclaimed productive staff time.',
    actionTimeframeDays: 30,
  },
  [`${PillarId.TECHNOLOGY}_${MaturityBand.DEVELOPING}`]: {
    code: 'TEC-REC-02',
    pillarId: PillarId.TECHNOLOGY,
    maturityBand: MaturityBand.DEVELOPING,
    keyStrength: 'Core business software tools deployed across primary departments.',
    criticalGap: 'Routine administrative workflows (invoicing, lead alerts) performed manually.',
    strategicRecommendation: 'Automate transactional workflows: automated invoice dispatch, payment alerts, and lead notifications.',
    targetKPI: '80% of routine client transaction messages automated.',
    expectedOutcome: 'Enhanced client response speed and error-free transaction workflows.',
    actionTimeframeDays: 60,
  },
  [`${PillarId.TECHNOLOGY}_${MaturityBand.ESTABLISHED}`]: {
    code: 'TEC-REC-03',
    pillarId: PillarId.TECHNOLOGY,
    maturityBand: MaturityBand.ESTABLISHED,
    keyStrength: 'Integrated CRM, ERP, and Financial cloud infrastructure.',
    criticalGap: 'Cybersecurity vulnerability and lack of strict role-based access permissions.',
    strategicRecommendation: 'Enforce mandatory 2FA, role-based data access controls, and automated daily offsite cloud backups.',
    targetKPI: '100% 2FA compliance and zero security policy violations.',
    expectedOutcome: 'Total protection of enterprise digital IP and customer data safety.',
    actionTimeframeDays: 90,
  },
  [`${PillarId.TECHNOLOGY}_${MaturityBand.LEADER}`]: {
    code: 'TEC-REC-04',
    pillarId: PillarId.TECHNOLOGY,
    maturityBand: MaturityBand.LEADER,
    keyStrength: 'Unified digital ecosystem with real-time operational synchronization.',
    criticalGap: 'Untapped predictive analytics and AI agent potential.',
    strategicRecommendation: 'Deploy AI Copilots for automated customer triage, predictive inventory management, and executive BI insights.',
    targetKPI: '30% increase in operational productivity via AI agent workflows.',
    expectedOutcome: 'Unmatched technological edge and exponential scalability.',
    actionTimeframeDays: 180,
  },
};

/**
 * Retrieves recommendation details for a given Pillar and Maturity Band
 */
export function getRecommendationForPillar(
  pillarId: PillarId,
  maturityBand: MaturityBand
): RecommendationMap {
  const key = `${pillarId}_${maturityBand}`;
  return (
    RECOMMENDATION_MAP[key] || {
      code: `${pillarId}-REC-GENERIC`,
      pillarId,
      maturityBand,
      keyStrength: 'Functional operational capability in place.',
      criticalGap: 'System optimization opportunities exist.',
      strategicRecommendation: 'Conduct a deep-dive operational audit to streamline workflows.',
      targetKPI: '15% efficiency improvement target.',
      expectedOutcome: 'Improved stability and productivity.',
      actionTimeframeDays: 60,
    }
  );
}
