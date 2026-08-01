/**
 * Business Engine - Recommendation Engine Database (28 Rule Codes)
 * Practical, action-oriented MSME consulting action plans.
 * Max 3 bullet points per section across all 28 Recommendation Codes.
 */

import { PillarId, MaturityBand } from '../assessment-engine/types';
import { RecommendationEntry, RecommendationCodeDatabase } from './interfaces';

export const RECOMMENDATION_DATABASE: RecommendationCodeDatabase = {
  // =========================================================================
  // 1. LEADERSHIP & GOVERNANCE (LDR-01 to LDR-04)
  // =========================================================================
  'LDR-01': {
    recommendationCode: 'LDR-01',
    pillarId: PillarId.LEADERSHIP,
    pillarName: 'Leadership & Governance',
    scoreBand: '85-100',
    maturityBand: MaturityBand.LEADER,
    title: 'Executive Advisory Governance & Enterprise Value Scaling',

    immediateActions: [
      'Establish a formal quarterly Advisory Board meeting schedule.',
      'Define non-executive director roles and strategic oversight mandate.',
      'Review executive incentive structures for C-suite alignment.',
    ],
    plan30Days: [
      'Draft formal Board Charter and committee terms of reference.',
      'Audit current delegation limits across all executive direct reports.',
      'Implement formal Long-Term Incentive Plan (LTIP) framework.',
    ],
    plan60Days: [
      'Conduct first structured quarterly Advisory Board review.',
      'Formalize executive succession matrix for critical leadership roles.',
      'Align executive KPIs with enterprise valuation growth milestones.',
    ],
    plan90Days: [
      'Evaluate governance effectiveness and board performance cadence.',
      'Refine strategic M&A and funding readiness benchmarks.',
      'Publish annual leadership alignment and governance report.',
    ],
    kpis: [
      'Executive Delegation Rate (%)',
      'Board Strategic Alignment Score (1-10)',
      'Leadership Succession Coverage Ratio',
    ],
    expectedOutcomes: [
      'Enhanced enterprise valuation multiples.',
      'Zero operational dependency on founder.',
      'Institutional leadership stability and risk resilience.',
    ],
    implementationEffort: 'Medium',
    businessImpact: 'High',
    dependencies: ['LDR-02'],
  },

  'LDR-02': {
    recommendationCode: 'LDR-02',
    pillarId: PillarId.LEADERSHIP,
    pillarName: 'Leadership & Governance',
    scoreBand: '70-84',
    maturityBand: MaturityBand.ESTABLISHED,
    title: 'Departmental Leadership Autonomy & Delegation Protocol',

    immediateActions: [
      'Identify top 3 routine decisions founder currently approves.',
      'Delegate authority matrix for expenses up to $5,000 to line managers.',
      'Schedule bi-weekly leadership alignment reviews.',
    ],
    plan30Days: [
      'Document formal Approval & Financial Authority Matrix (DOA).',
      'Train department heads on autonomous decision frameworks.',
      'Establish department-level monthly goal tracking scorecards.',
    ],
    plan60Days: [
      'Transition daily operational problem-solving to department heads.',
      'Implement monthly one-on-one leadership coaching sessions.',
      'Audit delegation adherence and identify bottlenecks.',
    ],
    plan90Days: [
      'Achieve 80% reduction in founder day-to-day sign-offs.',
      'Review manager performance against departmental scorecards.',
      'Refine annual leadership growth targets.',
    ],
    kpis: [
      'Decision Turnaround Time (Hours)',
      'Founder Operational Hours / Week',
      'Departmental Scorecard Achievement (%)',
    ],
    expectedOutcomes: [
      'Stronger team accountability.',
      'Faster operational decision turnaround.',
      'Increased founder time for strategic business expansion.',
    ],
    implementationEffort: 'Medium',
    businessImpact: 'High',
    dependencies: ['LDR-03'],
  },

  'LDR-03': {
    recommendationCode: 'LDR-03',
    pillarId: PillarId.LEADERSHIP,
    pillarName: 'Leadership & Governance',
    scoreBand: '50-69',
    maturityBand: MaturityBand.DEVELOPING,
    title: 'Founder Bottleneck Reduction & Delegation Framework',

    immediateActions: [
      'List all recurring tasks founder performs weekly.',
      'Appoint 2 key team members as operational leads.',
      'Stop attending routine tactical team execution meetings.',
    ],
    plan30Days: [
      'Create standard operating guidelines for daily task delegation.',
      'Hold weekly management sync meetings with structured agenda.',
      'Define clear job roles and accountability metrics for leads.',
    ],
    plan60Days: [
      'Hand over customer escalation management to department leads.',
      'Train leads on problem-solving before escalating to founder.',
      'Track weekly delegation completion rate.',
    ],
    plan90Days: [
      'Establish quarterly business review cadence with leadership team.',
      'Evaluate manager capability and plug skill gaps.',
      'Achieve founder transition to strategic oversight role.',
    ],
    kpis: [
      'Weekly Delegation Completion Rate (%)',
      'Founder Workweek Hours (Target <45h)',
      'Departmental Issue Resolution Rate (%)',
    ],
    expectedOutcomes: [
      'Reduced founder operational fatigue.',
      'Improved manager ownership and confidence.',
      'Elimination of critical single-point operational dependencies.',
    ],
    implementationEffort: 'Medium',
    businessImpact: 'High',
    dependencies: ['LDR-04'],
  },

  'LDR-04': {
    recommendationCode: 'LDR-04',
    pillarId: PillarId.LEADERSHIP,
    pillarName: 'Leadership & Governance',
    scoreBand: '0-49',
    maturityBand: MaturityBand.AT_RISK,
    title: 'Urgent Leadership Stabilization & Responsibility Transition',

    immediateActions: [
      'Conduct emergency leadership audit to identify critical risks.',
      'Appoint a senior general manager or operations lead immediately.',
      'Institute daily 15-minute operational standup meetings.',
    ],
    plan30Days: [
      'Document core business roles and assign basic responsibilities.',
      'Transfer emergency purchasing and operational decisions to leads.',
      'Establish basic weekly operational reporting dashboard.',
    ],
    plan60Days: [
      'Train secondary supervisors on essential daily processes.',
      'Implement basic performance expectations for all employees.',
      'Reduce founder involvement in routine order processing.',
    ],
    plan90Days: [
      'Stabilize leadership hierarchy with clearly defined managers.',
      'Review team compliance with new delegation structure.',
      'Prepare business for medium-term strategic planning.',
    ],
    kpis: [
      'Daily Standup Attendance Rate (%)',
      'Critical Operational Incident Resolution Time',
      'Basic Task Completion Rate (%)',
    ],
    expectedOutcomes: [
      'Immediate business operational stabilization.',
      'Reduced risk of business shutdown upon founder absence.',
      'Clear baseline hierarchy for team growth.',
    ],
    implementationEffort: 'High',
    businessImpact: 'High',
    dependencies: [],
  },

  // =========================================================================
  // 2. STRATEGY & MARKET POSITIONING (STR-01 to STR-04)
  // =========================================================================
  'STR-01': {
    recommendationCode: 'STR-01',
    pillarId: PillarId.STRATEGY,
    pillarName: 'Strategy & Market Positioning',
    scoreBand: '85-100',
    maturityBand: MaturityBand.LEADER,
    title: 'Market Leadership Defense & Adjacency Expansion',

    immediateActions: [
      'Review competitive threat radar and emerging market entrants.',
      'Identify top 2 adjacent market expansion opportunities.',
      'Audit IP and proprietary brand defensibility assets.',
    ],
    plan30Days: [
      'Formulate strategic market expansion business case.',
      'Conduct customer willingness-to-pay study for premium offerings.',
      'Align product R&D roadmap with market trends.',
    ],
    plan60Days: [
      'Launch pilot in target adjacent market segment.',
      'Establish strategic partnerships or distribution agreements.',
      'Protect core brand differentiators through defensive positioning.',
    ],
    plan90Days: [
      'Review pilot performance and allocate scaling capital.',
      'Optimize pricing power and high-margin product mix.',
      'Finalize 3-year market dominance strategy.',
    ],
    kpis: [
      'Market Share in Core Segment (%)',
      'Adjacent Segment Revenue Growth (%)',
      'Premium Price Realization Index',
    ],
    expectedOutcomes: [
      'Sustained industry market leadership.',
      'Diversified revenue streams in high-margin categories.',
      'Higher barrier to entry against competitors.',
    ],
    implementationEffort: 'High',
    businessImpact: 'High',
    dependencies: ['STR-02'],
  },

  'STR-02': {
    recommendationCode: 'STR-02',
    pillarId: PillarId.STRATEGY,
    pillarName: 'Strategy & Market Positioning',
    scoreBand: '70-84',
    maturityBand: MaturityBand.ESTABLISHED,
    title: 'Value Proposition Differentiation & Premium Positioning',

    immediateActions: [
      'Survey top 20 clients on why they buy from you vs competitors.',
      'Refine Unique Value Proposition (UVP) statement.',
      'Audit sales collateral to eliminate generic messaging.',
    ],
    plan30Days: [
      'Update website and marketing assets with new UVP messaging.',
      'Train sales team on value-based selling pitch.',
      'Conduct competitor positioning gap analysis.',
    ],
    plan60Days: [
      'Test premium price point tier for high-value client segment.',
      'Publish 2 customer case studies proving clear ROI.',
      'Eliminate low-margin, high-effort service offerings.',
    ],
    plan90Days: [
      'Evaluate win rate and average deal size post-repositioning.',
      'Refine core target customer ICP profiles.',
      'Establish quarterly competitive benchmarking cadence.',
    ],
    kpis: [
      'Sales Deal Win Rate (%)',
      'Average Revenue Per Account (ARPA)',
      'Gross Profit Margin Percentage (%)',
    ],
    expectedOutcomes: [
      'Higher profit margins through premium positioning.',
      'Better customer acquisition conversion rates.',
      'Reduced price pressure from low-cost competitors.',
    ],
    implementationEffort: 'Medium',
    businessImpact: 'High',
    dependencies: ['STR-03'],
  },

  'STR-03': {
    recommendationCode: 'STR-03',
    pillarId: PillarId.STRATEGY,
    pillarName: 'Strategy & Market Positioning',
    scoreBand: '50-69',
    maturityBand: MaturityBand.DEVELOPING,
    title: 'Ideal Customer Profile Definition & Commodity Avoidance',

    immediateActions: [
      'Analyze historical client list to identify top 20% most profitable clients.',
      'Define clear Ideal Customer Profile (ICP) criteria.',
      'Stop discounting prices for low-fit prospect inquiries.',
    ],
    plan30Days: [
      'Align marketing outreach exclusively toward defined ICP.',
      'Develop standard value messaging highlighting key problem solved.',
      'Review product portfolio to eliminate unprofitable custom work.',
    ],
    plan60Days: [
      'Train sales team to qualify prospects against ICP criteria.',
      'Launch targeted outreach campaign to ICP prospect list.',
      'Track sales pipeline conversion for ICP vs non-ICP prospects.',
    ],
    plan90Days: [
      'Achieve 70%+ of new closed accounts matching defined ICP.',
      'Review customer acquisition cost efficiency.',
      'Refine annual strategic positioning plan.',
    ],
    kpis: [
      'ICP Lead Ratio (%)',
      'Sales Cycle Length (Days)',
      'Discount Rate Average (%)',
    ],
    expectedOutcomes: [
      'Reduced sales cycle length.',
      'Improved customer satisfaction and lower churn.',
      'Clear differentiation away from commodity price wars.',
    ],
    implementationEffort: 'Low',
    businessImpact: 'High',
    dependencies: ['STR-04'],
  },

  'STR-04': {
    recommendationCode: 'STR-04',
    pillarId: PillarId.STRATEGY,
    pillarName: 'Strategy & Market Positioning',
    scoreBand: '0-49',
    maturityBand: MaturityBand.AT_RISK,
    title: 'Core Business Focus & Strategic Pivot Alignment',

    immediateActions: [
      'Identify single core product/service driving 80% of actual gross revenue.',
      'Pause unproven side projects and unprofitable service lines.',
      'Conduct emergency review of primary revenue drivers.',
    ],
    plan30Days: [
      'Focus 100% of team effort on the core revenue-generating offer.',
      'Draft simple 1-page business focus strategy.',
      'Communicate clear core offering to existing clients and network.',
    ],
    plan60Days: [
      'Improve fulfillment quality and speed for core offering.',
      'Standardize pricing model for core product line.',
      'Gather initial client testimonials for social proof.',
    ],
    plan90Days: [
      'Stabilize revenue around core product focus.',
      'Re-assess market positioning baseline.',
      'Prepare medium-term strategic growth roadmap.',
    ],
    kpis: [
      'Core Product Revenue Share (%)',
      'Gross Profit per Sale',
      'Client Retention / Reorder Rate (%)',
    ],
    expectedOutcomes: [
      'Business survival and core cash flow stabilization.',
      'Operational clarity for management and team.',
      'Elimination of wasted capital on unprofitable activities.',
    ],
    implementationEffort: 'Medium',
    businessImpact: 'High',
    dependencies: [],
  },

  // =========================================================================
  // 3. SALES & CUSTOMER ACQUISITION (SLS-01 to SLS-04)
  // =========================================================================
  'SLS-01': {
    recommendationCode: 'SLS-01',
    pillarId: PillarId.SALES,
    pillarName: 'Sales & Customer Acquisition',
    scoreBand: '85-100',
    maturityBand: MaturityBand.LEADER,
    title: 'Enterprise Sales Engine & Predictable Pipeline Scaling',

    immediateActions: [
      'Audit CRM pipeline conversion velocity across all deal stages.',
      'Review enterprise account expansion and upsell playbooks.',
      'Evaluate sales commission and incentive structure alignment.',
    ],
    plan30Days: [
      'Implement predictive lead scoring model inside CRM.',
      'Develop Account-Based Marketing (ABM) strategy for top 50 targets.',
      'Refine sales manager coaching and pipeline review cadence.',
    ],
    plan60Days: [
      'Launch automated sales intelligence and proposal generation tools.',
      'Expand strategic channel partnerships and reseller networks.',
      'Optimize enterprise sales onboarding time to productivity.',
    ],
    plan90Days: [
      'Achieve predictable quarterly sales forecasting accuracy (>90%).',
      'Review Customer Lifetime Value to CAC ratio trends.',
      'Scale enterprise sales headcount according to capacity metrics.',
    ],
    kpis: [
      'LTV : CAC Ratio (Target >4:1)',
      'Sales Forecast Accuracy (%)',
      'Annual Recurring Revenue (ARR) Expansion Rate',
    ],
    expectedOutcomes: [
      'Highly predictable revenue growth engine.',
      'Maximum sales team productivity and quota attainment.',
      'Lower customer acquisition costs at scale.',
    ],
    implementationEffort: 'High',
    businessImpact: 'High',
    dependencies: ['SLS-02'],
  },

  'SLS-02': {
    recommendationCode: 'SLS-02',
    pillarId: PillarId.SALES,
    pillarName: 'Sales & Customer Acquisition',
    scoreBand: '70-84',
    maturityBand: MaturityBand.ESTABLISHED,
    title: 'CRM Automation & Repeatable Sales Methodology',

    immediateActions: [
      'Audit CRM adoption and ensure 100% deal logging by sales reps.',
      'Standardize 5 core stages of sales pipeline.',
      'Create standard proposal and quotation templates.',
    ],
    plan30Days: [
      'Mandate CRM pipeline updates prior to weekly sales meetings.',
      'Build lead nurture automated email sequence for inactive leads.',
      'Train sales reps on objections handling playbook.',
    ],
    plan60Days: [
      'Track lead follow-up response times and enforce 1-hour SLA.',
      'Implement win/loss review protocol for deals over $10k.',
      'Optimize sales collateral for middle-of-funnel prospects.',
    ],
    plan90Days: [
      'Increase lead-to-opportunity conversion rate by 25%.',
      'Review individual rep quota achievement rates.',
      'Automate post-sale handover to customer fulfillment team.',
    ],
    kpis: [
      'CRM Data Compliance Rate (%)',
      'Lead Response Time (Minutes)',
      'Lead-to-Opportunity Conversion Rate (%)',
    ],
    expectedOutcomes: [
      'Higher lead conversion efficiency.',
      'Reduced deal slippage and lost prospects.',
      'Scalable, rep-independent sales process.',
    ],
    implementationEffort: 'Medium',
    businessImpact: 'High',
    dependencies: ['SLS-03'],
  },

  'SLS-03': {
    recommendationCode: 'SLS-03',
    pillarId: PillarId.SALES,
    pillarName: 'Sales & Customer Acquisition',
    scoreBand: '50-69',
    maturityBand: MaturityBand.DEVELOPING,
    title: 'Structured Sales Funnel & Systematic Lead Generation',

    immediateActions: [
      'Set up basic CRM system (e.g. HubSpot Free or Zoho).',
      'Import all current prospect contacts into a central database.',
      'Establish weekly lead follow-up protocol.',
    ],
    plan30Days: [
      'Map simple 4-step sales process (Lead -> Call -> Proposal -> Close).',
      'Launch 1 reliable outbound lead generation channel.',
      'Set weekly activity targets for lead calls and demos.',
    ],
    plan60Days: [
      'Implement standard follow-up sequence (at least 5 touches).',
      'Review conversion rates at each pipeline stage.',
      'Eliminate manual lead tracking via scattered spreadsheets.',
    ],
    plan90Days: [
      'Achieve steady weekly volume of qualified prospect meetings.',
      'Evaluate lead generation channel ROI.',
      'Refine sales script and product presentation pitch.',
    ],
    kpis: [
      'Weekly Qualified Leads Generated',
      'Follow-Up Attempts Per Lead',
      'Proposal-to-Close Win Rate (%)',
    ],
    expectedOutcomes: [
      'Consistent monthly sales pipeline generation.',
      'End of unpredictable revenue feast-or-famine cycles.',
      'Clear visibility into upcoming sales numbers.',
    ],
    implementationEffort: 'Medium',
    businessImpact: 'High',
    dependencies: ['SLS-04'],
  },

  'SLS-04': {
    recommendationCode: 'SLS-04',
    pillarId: PillarId.SALES,
    pillarName: 'Sales & Customer Acquisition',
    scoreBand: '0-49',
    maturityBand: MaturityBand.AT_RISK,
    title: 'Emergency Sales Lead Generation & Revenue Recovery',

    immediateActions: [
      'Contact top 20 past satisfied clients for immediate repeat business.',
      'Ask every current client for 2 direct peer referrals.',
      'Institute daily outreach targets for founder/sales lead.',
    ],
    plan30Days: [
      'Create basic 1-page sales offer flyer or presentation.',
      'Run direct outreach campaign to past lost leads.',
      'Log all active opportunities in a shared tracking sheet.',
    ],
    plan60Days: [
      'Establish primary lead generation channel (e.g. direct calls/ads).',
      'Ensure every inbound lead is contacted within 2 hours.',
      'Track daily sales calls and meetings booked.',
    ],
    plan90Days: [
      'Stabilize minimum monthly sales target.',
      'Transition from reactive selling to proactive pipeline management.',
      'Set up formal CRM pipeline tracking.',
    ],
    kpis: [
      'Daily Prospecting Calls / Contacts',
      'Client Referral Leads Generated',
      'Monthly Sales Closed ($)',
    ],
    expectedOutcomes: [
      'Immediate cash flow injection from quick wins.',
      'Re-engagement of dormant client database.',
      'Establishing basic proactive sales habit.',
    ],
    implementationEffort: 'Low',
    businessImpact: 'High',
    dependencies: [],
  },

  // =========================================================================
  // 4. OPERATIONS & PROCESS SOPS (OPS-01 to OPS-04)
  // =========================================================================
  'OPS-01': {
    recommendationCode: 'OPS-01',
    pillarId: PillarId.OPERATIONS,
    pillarName: 'Operations & Process SOPs',
    scoreBand: '85-100',
    maturityBand: MaturityBand.LEADER,
    title: 'Lean Process Optimization & Operations Automation',

    immediateActions: [
      'Review core operational value stream map for minor friction.',
      'Audit SOP compliance automation tools and digital checklists.',
      'Identify top operational bottleneck for continuous improvement.',
    ],
    plan30Days: [
      'Implement Kaizen continuous improvement framework.',
      'Integrate real-time operational dashboard across department leads.',
      'Conduct vendor SLA performance audit.',
    ],
    plan60Days: [
      'Automate cross-departmental data handoffs to eliminate delay.',
      'Refine quality assurance ISO standards or equivalent certifications.',
      'Benchmark operational efficiency metrics against global industry peers.',
    ],
    plan90Days: [
      'Achieve 98%+ On-Time In-Full (OTIF) fulfillment rate.',
      'Review operational cost per unit savings.',
      'Publish annual operational excellence playbook.',
    ],
    kpis: [
      'On-Time In-Full Fulfillment Rate (OTIF %)',
      'Operational Error Rate (<0.5%)',
      'Capacity Utilization Rate (%)',
    ],
    expectedOutcomes: [
      'Industry-leading operational margin efficiency.',
      'Seamless multi-location or high-volume scalability.',
      'Highest customer satisfaction and fulfillment reliability.',
    ],
    implementationEffort: 'High',
    businessImpact: 'High',
    dependencies: ['OPS-02'],
  },

  'OPS-02': {
    recommendationCode: 'OPS-02',
    pillarId: PillarId.OPERATIONS,
    pillarName: 'Operations & Process SOPs',
    scoreBand: '70-84',
    maturityBand: MaturityBand.ESTABLISHED,
    title: 'SOP Systematization & Quality Assurance Controls',

    immediateActions: [
      'Identify top 5 recurring operational mistakes or client complaints.',
      'Assign process owners for key operational departments.',
      'Mandate digital checklist usage for daily opening/closing procedures.',
    ],
    plan30Days: [
      'Document SOPs for top 10 core operational tasks.',
      'Conduct staff training on updated SOP procedures.',
      'Establish monthly operational quality audit process.',
    ],
    plan60Days: [
      'Implement inventory tracking and re-order automation.',
      'Track fulfillment turnaround times from order to delivery.',
      'Link SOP compliance to employee performance evaluations.',
    ],
    plan90Days: [
      'Reduce operational rework and quality defects by 50%.',
      'Achieve fully documented SOP library for core business functions.',
      'Review supplier delivery times and cost SLAs.',
    ],
    kpis: [
      'SOP Compliance Audit Score (%)',
      'Order Cycle Time (Hours / Days)',
      'Product / Service Defect Rate (%)',
    ],
    expectedOutcomes: [
      'Consistent product/service quality output.',
      'Reduced waste and operational rework costs.',
      'Faster onboarding of new operational team members.',
    ],
    implementationEffort: 'Medium',
    businessImpact: 'High',
    dependencies: ['OPS-03'],
  },

  'OPS-03': {
    recommendationCode: 'OPS-03',
    pillarId: PillarId.OPERATIONS,
    pillarName: 'Operations & Process SOPs',
    scoreBand: '50-69',
    maturityBand: MaturityBand.DEVELOPING,
    title: 'Core Process Documentation & Bottleneck Elimination',

    immediateActions: [
      'Map end-to-end customer order delivery steps on a whiteboard.',
      'Identify single biggest operational bottleneck causing delay.',
      'Create 1-page checklists for critical daily activities.',
    ],
    plan30Days: [
      'Document step-by-step SOPs for top 5 critical operations.',
      'Train operational staff on standardized checklist execution.',
      'Establish weekly operational error tracking log.',
    ],
    plan60Days: [
      'Eliminate paper-based tracking in favor of digital task software.',
      'Hold weekly operational review meeting to address delays.',
      'Cross-train staff on bottleneck processes.',
    ],
    plan90Days: [
      'Reduce average order processing time by 30%.',
      'Achieve consistent operational delivery without founder oversight.',
      'Review capacity limits for upcoming sales growth.',
    ],
    kpis: [
      'Order Fulfillment Cycle Duration',
      'Weekly Operational Error Incidents',
      'Checklist Adherence Rate (%)',
    ],
    expectedOutcomes: [
      'Elimination of major operational bottlenecks.',
      'Fewer customer fulfillment delays and complaints.',
      'Consistent execution across team members.',
    ],
    implementationEffort: 'Medium',
    businessImpact: 'High',
    dependencies: ['OPS-04'],
  },

  'OPS-04': {
    recommendationCode: 'OPS-04',
    pillarId: PillarId.OPERATIONS,
    pillarName: 'Operations & Process SOPs',
    scoreBand: '0-49',
    maturityBand: MaturityBand.AT_RISK,
    title: 'Emergency Operational Standardization & Error Prevention',

    immediateActions: [
      'Stop ad-hoc execution; list mandatory daily operational steps.',
      'Implement paper or digital checklists for critical customer deliverables.',
      'Assign direct operational supervisor for daily quality check.',
    ],
    plan30Days: [
      'Document basic instructions for primary delivery process.',
      'Hold daily 10-minute morning operational check-in.',
      'Clean up physical and digital inventory / job tracking.',
    ],
    plan60Days: [
      'Train all operational staff on basic standard procedures.',
      'Track customer complaints daily and resolve root causes.',
      'Eliminate reliance on unwritten tribal knowledge.',
    ],
    plan90Days: [
      'Stabilize operational error rates to acceptable baseline.',
      'Establish clean foundation for digital SOP management.',
      'Review operational team capacity and skill alignment.',
    ],
    kpis: [
      'Daily Operational Checklist Completion',
      'Customer Complaint Count / Week',
      'On-Time Delivery Rate (%)',
    ],
    expectedOutcomes: [
      'Immediate reduction in costly operational mistakes.',
      'Improved fulfillment speed and basic order clarity.',
      'Base operational stability to handle new client growth.',
    ],
    implementationEffort: 'Low',
    businessImpact: 'High',
    dependencies: [],
  },

  // =========================================================================
  // 5. FINANCE & PROFITABILITY (FIN-01 to FIN-04)
  // =========================================================================
  'FIN-01': {
    recommendationCode: 'FIN-01',
    pillarId: PillarId.FINANCE,
    pillarName: 'Finance & Profitability',
    scoreBand: '85-100',
    maturityBand: MaturityBand.LEADER,
    title: 'Capital Structure Optimization & Treasury Management',

    immediateActions: [
      'Review monthly CFO management dashboard and financial ratios.',
      'Evaluate return on capital invested (ROIC) across business units.',
      'Audit working capital buffer and surplus cash yield strategy.',
    ],
    plan30Days: [
      'Optimize capital structure (debt vs equity ratio benchmarking).',
      'Implement 12-month rolling financial forecasting model.',
      'Conduct formal tax planning and international transfer pricing review.',
    ],
    plan60Days: [
      'Establish formal M&A valuation model and growth capital reserve.',
      'Review dividend policy vs re-investment allocation.',
      'Automate real-time financial reporting metrics across entities.',
    ],
    plan90Days: [
      'Achieve optimal capital efficiency and maximum ROIC.',
      'Publish quarterly board financial audit statement.',
      'Refine multi-year enterprise financial growth plan.',
    ],
    kpis: [
      'Return on Invested Capital (ROIC %)',
      'Free Cash Flow Yield (%)',
      'Operating Cash Runway (Months >6m)',
    ],
    expectedOutcomes: [
      'Maximized shareholder enterprise return.',
      'Bulletproof balance sheet resilience.',
      'Capital readiness for aggressive strategic expansion.',
    ],
    implementationEffort: 'High',
    businessImpact: 'High',
    dependencies: ['FIN-02'],
  },

  'FIN-02': {
    recommendationCode: 'FIN-02',
    pillarId: PillarId.FINANCE,
    pillarName: 'Finance & Profitability',
    scoreBand: '70-84',
    maturityBand: MaturityBand.ESTABLISHED,
    title: 'Management Accounting & Margin Maximization',

    immediateActions: [
      'Review gross profit margins by product line and customer segment.',
      'Enforce 30-day payment terms with automated invoice reminders.',
      'Institute monthly financial variance analysis against budget.',
    ],
    plan30Days: [
      'Implement monthly departmental budget tracking sheets.',
      'Renegotiate terms with top 5 highest cost suppliers.',
      'Establish 13-week rolling cash flow forecast model.',
    ],
    plan60Days: [
      'Eliminate bottom 10% unprofitable product or service offerings.',
      'Shorten Accounts Receivable Days Outstanding (DSO) by 15 days.',
      'Review price sensitivity to increase gross margin by 3-5%.',
    ],
    plan90Days: [
      'Achieve consistent monthly cash flow forecasting accuracy.',
      'Maintain minimum 3-month operating cash reserve.',
      'Conduct formal quarterly financial review with management team.',
    ],
    kpis: [
      'Days Sales Outstanding (DSO)',
      'Gross Profit Margin (%)',
      'Budget vs Actual Variance (%)',
    ],
    expectedOutcomes: [
      'Stronger operating cash flow predictability.',
      'Expanded net profit margins.',
      'Elimination of cash crunch surprises.',
    ],
    implementationEffort: 'Medium',
    businessImpact: 'High',
    dependencies: ['FIN-03'],
  },

  'FIN-03': {
    recommendationCode: 'FIN-03',
    pillarId: PillarId.FINANCE,
    pillarName: 'Finance & Profitability',
    scoreBand: '50-69',
    maturityBand: MaturityBand.DEVELOPING,
    title: 'Cash Flow Forecasting & Working Capital Control',

    immediateActions: [
      'List all overdue customer accounts and initiate collection calls today.',
      'Stop making business payments without founder approval.',
      'Reconcile bank accounts in accounting software up to date.',
    ],
    plan30Days: [
      'Build basic 13-week cash flow forecasting spreadsheet.',
      'Set strict payment terms (e.g. 50% upfront deposit for orders).',
      'Identify and cancel unnecessary recurring subscriptions and expenses.',
    ],
    plan60Days: [
      'Review weekly cash inflow vs outflow metrics with accountant.',
      'Establish formal credit check policy for new customers.',
      'Separate founder personal expenses 100% from business bank accounts.',
    ],
    plan90Days: [
      'Build 1-month cash buffer in business reserve account.',
      'Achieve 90%+ on-time customer invoice payments.',
      'Establish monthly P&L review routine.',
    ],
    kpis: [
      'Overdue Receivables ($ Amount)',
      'Cash Reserve Runway (Weeks)',
      'Monthly Break-Even Point ($)',
    ],
    expectedOutcomes: [
      'Immediate working capital relief.',
      'Full visibility into cash flow runway.',
      'Disciplined financial cost control habits.',
    ],
    implementationEffort: 'Medium',
    businessImpact: 'High',
    dependencies: ['FIN-04'],
  },

  'FIN-04': {
    recommendationCode: 'FIN-04',
    pillarId: PillarId.FINANCE,
    pillarName: 'Finance & Profitability',
    scoreBand: '0-49',
    maturityBand: MaturityBand.AT_RISK,
    title: 'Emergency Cash Flow Recovery & Financial Control',

    immediateActions: [
      'Calculate exact current cash position and emergency payroll obligations.',
      'Collect immediate cash on top 5 largest overdue invoices.',
      'Freeze all non-essential business expenditure immediately.',
    ],
    plan30Days: [
      'Negotiate extended payment plans with key suppliers/creditors.',
      'Implement mandatory daily cash balance reporting.',
      'Migrate paper records to cloud accounting software (Xero/QuickBooks).',
    ],
    plan60Days: [
      'Cut operating overhead expenses by at least 15-20%.',
      'Require 100% upfront payment or deposit on all new client sales.',
      'Review unit profitability to stop selling at a loss.',
    ],
    plan90Days: [
      'Achieve positive monthly operating cash flow.',
      'Establish baseline 30-day cash reserve.',
      'Set up monthly financial reporting with external advisor.',
    ],
    kpis: [
      'Daily Cash Balance ($)',
      'Total Overdue Debt Ratio (%)',
      'Monthly Burn Rate Reduction ($)',
    ],
    expectedOutcomes: [
      'Prevention of insolvency and cash starvation.',
      'Restoration of core supplier and creditor trust.',
      'Clear baseline financial accounting visibility.',
    ],
    implementationEffort: 'High',
    businessImpact: 'High',
    dependencies: [],
  },

  // =========================================================================
  // 6. HUMAN RESOURCES & PEOPLE (HRM-01 to HRM-04)
  // =========================================================================
  'HRM-01': {
    recommendationCode: 'HRM-01',
    pillarId: PillarId.HUMAN_RESOURCES,
    pillarName: 'Human Resources & People',
    scoreBand: '85-100',
    maturityBand: MaturityBand.LEADER,
    title: 'Executive Leadership Pipeline & Culture Scaling',

    immediateActions: [
      'Review key talent retention risk indicators across critical leaders.',
      'Audit employer brand positioning and talent recruitment pipeline.',
      'Evaluate executive stock option / phantom stock alignment.',
    ],
    plan30Days: [
      'Implement High-Potential (HiPo) leadership development program.',
      'Conduct 360-degree feedback reviews for C-suite and VP leadership.',
      'Refine corporate culture scorecard and values alignment metrics.',
    ],
    plan60Days: [
      'Establish internal leadership academy for emerging managers.',
      'Benchmark executive compensation against top regional industry standards.',
      'Automate HR talent analytics and engagement surveys.',
    ],
    plan90Days: [
      'Achieve 90%+ key leadership talent retention rate.',
      'Review succession readiness for 100% of executive positions.',
      'Publish annual organizational talent & culture report.',
    ],
    kpis: [
      'Key Talent Retention Rate (%)',
      'Employee Net Promoter Score (eNPS)',
      'Leadership Succession Readiness (%)',
    ],
    expectedOutcomes: [
      'Unrivaled talent retention and recruitment magnet.',
      'High-performing autonomous executive team.',
      'Scalable organizational culture aligned with rapid enterprise growth.',
    ],
    implementationEffort: 'High',
    businessImpact: 'High',
    dependencies: ['HRM-02'],
  },

  'HRM-02': {
    recommendationCode: 'HRM-02',
    pillarId: PillarId.HUMAN_RESOURCES,
    pillarName: 'Human Resources & People',
    scoreBand: '70-84',
    maturityBand: MaturityBand.ESTABLISHED,
    title: 'Performance Scorecards & Structured Career Progression',

    immediateActions: [
      'Audit existing job descriptions for clarity of measurable KPIs.',
      'Schedule quarterly performance review cycle for all staff.',
      'Gather employee feedback on training and growth needs.',
    ],
    plan30Days: [
      'Implement Individual KPI Scorecards for every employee.',
      'Standardize 90-day onboarding program for new hires.',
      'Create transparent salary bands and career progression paths.',
    ],
    plan60Days: [
      'Train middle managers on conducting effective 1-on-1 coaching.',
      'Link annual performance evaluations to incentive bonuses.',
      'Track employee turnover metrics by department.',
    ],
    plan90Days: [
      'Achieve 100% scorecard completion across company.',
      'Reduce 90-day new hire failure rate by 50%.',
      'Review organizational chart and address capacity gaps.',
    ],
    kpis: [
      'Individual KPI Achievement Rate (%)',
      '90-Day New Hire Retention Rate (%)',
      'Quarterly Performance Review Completion (%)',
    ],
    expectedOutcomes: [
      'High team clarity on expectations and individual targets.',
      'Increased employee engagement and lower unwanted turnover.',
      'Consistent manager coaching and objective evaluation.',
    ],
    implementationEffort: 'Medium',
    businessImpact: 'High',
    dependencies: ['HRM-03'],
  },

  'HRM-03': {
    recommendationCode: 'HRM-03',
    pillarId: PillarId.HUMAN_RESOURCES,
    pillarName: 'Human Resources & People',
    scoreBand: '50-69',
    maturityBand: MaturityBand.DEVELOPING,
    title: 'Role Clarity & Performance Accountability Framework',

    immediateActions: [
      'Draft clear 1-page job role descriptions for every employee.',
      'Eliminate overlapping responsibilities creating team confusion.',
      'Institute bi-weekly 1-on-1 check-ins between managers and direct reports.',
    ],
    plan30Days: [
      'Define top 3 measurable monthly outputs for every role.',
      'Establish formal employee onboarding checklist.',
      'Address chronic underperformance or non-alignment promptly.',
    ],
    plan60Days: [
      'Standardize recruitment interview process and scoring rubric.',
      'Implement basic skill development training plans.',
      'Track monthly team attendance and punctuality metrics.',
    ],
    plan90Days: [
      'Review team performance against defined job role metrics.',
      'Achieve 100% signed employee role contracts and SOP agreements.',
      'Establish basic incentive bonus scheme for high performers.',
    ],
    kpis: [
      'Role Clarity Index (Team Survey Score)',
      'Monthly Task Completion Rate (%)',
      'Voluntary Employee Turnover Rate (%)',
    ],
    expectedOutcomes: [
      'Elimination of role confusion and responsibility shifting.',
      'Improved team accountability and productivity.',
      'Objective basis for evaluating employee performance.',
    ],
    implementationEffort: 'Medium',
    businessImpact: 'High',
    dependencies: ['HRM-04'],
  },

  'HRM-04': {
    recommendationCode: 'HRM-04',
    pillarId: PillarId.HUMAN_RESOURCES,
    pillarName: 'Human Resources & People',
    scoreBand: '0-49',
    maturityBand: MaturityBand.AT_RISK,
    title: 'HR Compliance & Basic Employment Standardization',

    immediateActions: [
      'Audit HR files to ensure compliant employment contracts for all staff.',
      'Establish clear working hours, attendance policies, and code of conduct.',
      'Address severe toxic behavior or compliance breaches immediately.',
    ],
    plan30Days: [
      'Issue formal employment agreements to all uncontracted team members.',
      'Implement basic payroll time-tracking system.',
      'Document essential company policies in a simple Employee Handbook.',
    ],
    plan60Days: [
      'Train supervisors on basic employment law and workplace safety.',
      'Set clear basic expectations for daily attendance and output.',
      'Establish formal dispute resolution protocol.',
    ],
    plan90Days: [
      'Achieve 100% legal HR contract and statutory compliance.',
      'Stabilize employee attendance and daily operations.',
      'Prepare foundation for performance scorecards.',
    ],
    kpis: [
      'HR Contract Compliance Rate (100% Target)',
      'Unexcused Absenteeism Rate (%)',
      'Workplace Safety / Grievance Incidents',
    ],
    expectedOutcomes: [
      'Protection against legal labor disputes and fines.',
      'Basic workplace order, discipline, and attendance.',
      'Clean baseline HR foundation for team scaling.',
    ],
    implementationEffort: 'Medium',
    businessImpact: 'High',
    dependencies: [],
  },

  // =========================================================================
  // 7. TECHNOLOGY & SYSTEMS (TEC-01 to TEC-04)
  // =========================================================================
  'TEC-01': {
    recommendationCode: 'TEC-01',
    pillarId: PillarId.TECHNOLOGY,
    pillarName: 'Technology & Systems',
    scoreBand: '85-100',
    maturityBand: MaturityBand.LEADER,
    title: 'Enterprise Architecture & Proprietary Tech Moat',

    immediateActions: [
      'Conduct enterprise cybersecurity audit and penetration testing.',
      'Review AI and machine learning integration roadmap across operations.',
      'Audit cloud infrastructure redundancy and disaster recovery failover.',
    ],
    plan30Days: [
      'Implement Zero-Trust cybersecurity policy and multi-factor authentication.',
      'Build custom API integrations between CRM, ERP, and customer portal.',
      'Refine data analytics warehouse for real-time executive dashboarding.',
    ],
    plan60Days: [
      'Deploy proprietary automated AI workflows for client support/analytics.',
      'Achieve SOC2 / ISO 27001 data security compliance benchmarks.',
      'Optimize cloud computing expenditure efficiency.',
    ],
    plan90Days: [
      'Establish proprietary technology stack as enterprise competitive moat.',
      'Review 3-year digital transformation vision.',
      'Publish annual IT security and infrastructure resilience audit.',
    ],
    kpis: [
      'System Uptime SLA (Target >99.9%)',
      'Cybersecurity Zero-Trust Audit Score',
      'Automated Workflow Execution Volume',
    ],
    expectedOutcomes: [
      'Unshakable enterprise technology stack security.',
      'Proprietary technology advantage boosting valuation.',
      'Real-time automated data intelligence across all divisions.',
    ],
    implementationEffort: 'High',
    businessImpact: 'High',
    dependencies: ['TEC-02'],
  },

  'TEC-02': {
    recommendationCode: 'TEC-02',
    pillarId: PillarId.TECHNOLOGY,
    pillarName: 'Technology & Systems',
    scoreBand: '70-84',
    maturityBand: MaturityBand.ESTABLISHED,
    title: 'Cloud ERP System Integration & Data Synchronization',

    immediateActions: [
      'Identify top 3 manual data re-entry points between software systems.',
      'Audit software license usage and eliminate unused SaaS subscriptions.',
      'Enforce mandatory multi-factor authentication (MFA) on core accounts.',
    ],
    plan30Days: [
      'Connect accounting, CRM, and inventory systems via direct API integration.',
      'Migrate remaining local server files to secure cloud storage (Google Workspace/365).',
      'Implement daily automated cloud backup verification.',
    ],
    plan60Days: [
      'Train team on automated software workflow triggers.',
      'Eliminate manual spreadsheet data transfer between departments.',
      'Conduct quarterly software permission and access review.',
    ],
    plan90Days: [
      'Achieve 90%+ automated data synchronization across core tools.',
      'Reduce staff time spent on manual data entry by 70%.',
      'Review tech stack efficiency and ROI.',
    ],
    kpis: [
      'System Data Integration Rate (%)',
      'Manual Data Re-Entry Reduction (%)',
      'Cloud Backup Success Rate (100% Target)',
    ],
    expectedOutcomes: [
      'Elimination of duplicate data entry errors.',
      'Faster operational throughput and reporting speed.',
      'Secure, access-controlled cloud environment.',
    ],
    implementationEffort: 'Medium',
    businessImpact: 'High',
    dependencies: ['TEC-03'],
  },

  'TEC-03': {
    recommendationCode: 'TEC-03',
    pillarId: PillarId.TECHNOLOGY,
    pillarName: 'Technology & Systems',
    scoreBand: '50-69',
    maturityBand: MaturityBand.DEVELOPING,
    title: 'Cloud Migration & Core Tool Standardisation',

    immediateActions: [
      'Audit all software tools currently used across team members.',
      'Eliminate personal free email accounts in favor of corporate domain emails.',
      'Set up centralized cloud file storage (Google Drive / OneDrive).',
    ],
    plan30Days: [
      'Standardize 1 core tool per function (e.g. CRM, Accounting, Storage).',
      'Migrate paper customer records and offline spreadsheets to cloud apps.',
      'Configure automated daily data backups.',
    ],
    plan60Days: [
      'Train staff on standard cloud file organization and naming rules.',
      'Implement basic password management tool (e.g. 1Password/Bitwarden).',
      'Decommission old legacy offline computers storing business data.',
    ],
    plan90Days: [
      'Achieve 100% cloud-based business operation accessibility.',
      'Eliminate data loss risk from hardware crashes.',
      'Review technology adoption across all team members.',
    ],
    kpis: [
      'Cloud Software Adoption Rate (%)',
      'Domain Email Usage Rate (100% Target)',
      'Data Loss / Hardware Crash Incidents',
    ],
    expectedOutcomes: [
      'Secure remote work accessibility.',
      'Elimination of critical data loss risks.',
      'Baseline technology standardization across business.',
    ],
    implementationEffort: 'Medium',
    businessImpact: 'Medium',
    dependencies: ['TEC-04'],
  },

  'TEC-04': {
    recommendationCode: 'TEC-04',
    pillarId: PillarId.TECHNOLOGY,
    pillarName: 'Technology & Systems',
    scoreBand: '0-49',
    maturityBand: MaturityBand.AT_RISK,
    title: 'Urgent Technology Backup & Basic Digitization',

    immediateActions: [
      'Back up all critical business databases and files to external/cloud drive today.',
      'Change master passwords for online bank, email, and admin accounts.',
      'Stop sharing single admin passwords among multiple staff.',
    ],
    plan30Days: [
      'Set up business domain email accounts for key personnel.',
      'Adopt basic cloud accounting software (Xero or QuickBooks).',
      'Establish anti-virus protection on all staff computers.',
    ],
    plan60Days: [
      'Migrate customer contact list from paper/notebooks into basic digital software.',
      'Train team on basic cybersecurity and phishing prevention.',
      'Set up automated cloud backup schedule.',
    ],
    plan90Days: [
      'Eliminate paper-only reliance for core business operations.',
      'Achieve stable, secure basic tech environment.',
      'Plan next stage of cloud software adoption.',
    ],
    kpis: [
      'Automated Data Backup Frequency',
      'Cybersecurity Password Compliance Rate (%)',
      'Paper-to-Digital Process Migration Rate (%)',
    ],
    expectedOutcomes: [
      'Immediate disaster recovery protection.',
      'Prevention of devastating data loss or ransomware events.',
      'Basic digital modernization baseline.',
    ],
    implementationEffort: 'Low',
    businessImpact: 'High',
    dependencies: [],
  },
};

/**
 * Retrieves a recommendation entry by its code, with fallback safety
 */
export function getRecommendationByCode(code: string): RecommendationEntry {
  const entry = RECOMMENDATION_DATABASE[code];
  if (entry) return entry;

  // Fallback entry if code is missing
  return {
    recommendationCode: code,
    pillarId: PillarId.LEADERSHIP,
    pillarName: 'General Leadership',
    scoreBand: '50-69',
    maturityBand: MaturityBand.DEVELOPING,
    title: 'Strategic Action Plan',
    immediateActions: [
      'Review operational bottleneck areas.',
      'Establish weekly team alignment sync.',
      'Set key priority targets.',
    ],
    plan30Days: [
      'Document core standard procedures.',
      'Train team leads on responsibility matrix.',
      'Establish basic performance scorecards.',
    ],
    plan60Days: [
      'Implement digital tracking software.',
      'Audit process compliance and quality.',
      'Address operational gaps.',
    ],
    plan90Days: [
      'Review milestone progress against targets.',
      'Optimize workflow efficiency.',
      'Scale proven practices.',
    ],
    kpis: ['Action Plan Execution Rate (%)', 'Operational Improvement Index'],
    expectedOutcomes: ['Improved operational clarity and performance.'],
    implementationEffort: 'Medium',
    businessImpact: 'Medium',
    dependencies: [],
  };
}
