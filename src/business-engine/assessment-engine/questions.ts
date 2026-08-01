/**
 * Business Engine - 21 Assessment Questions Database
 * Refined MSME Consulting Architecture (Version 1.1)
 * 3 Questions per Pillar across 7 Pillars
 */

import { Question, PillarId } from './types';

export const ASSESSMENT_QUESTIONS: Question[] = [
  // =========================================================================
  // PILLAR 1: LEADERSHIP & GOVERNANCE (LDR)
  // =========================================================================
  {
    id: 'LDR01',
    pillarId: PillarId.LEADERSHIP,
    questionNumber: 1,
    title: 'Can your business run smoothly for one week without your daily involvement?',
    subtitle: 'Measures business operational independence and founder dependency.',
    weight: 0.45,
    options: [
      {
        id: 'LDR01-O1',
        label: '1 - Very Poor',
        description: 'Business completely stops or loses sales if owner is absent for more than 2 days.',
        score: 20,
      },
      {
        id: 'LDR01-O2',
        label: '2 - Poor',
        description: 'Routine tasks continue, but all key decisions and approvals stall until owner returns.',
        score: 40,
      },
      {
        id: 'LDR01-O3',
        label: '3 - Average',
        description: 'Managers handle daily execution with clear approval limits; owner focuses on key issues.',
        score: 60,
      },
      {
        id: 'LDR01-O4',
        label: '4 - Good',
        description: 'Business operates smoothly for up to 2 weeks with minimal owner check-ins.',
        score: 80,
      },
      {
        id: 'LDR01-O5',
        label: '5 - Excellent',
        description: 'Fully autonomous team runs all operations independently; owner works strictly on strategy.',
        score: 100,
      },
    ],
  },
  {
    id: 'LDR02',
    pillarId: PillarId.LEADERSHIP,
    questionNumber: 2,
    title: 'Does your business have written annual goals and quarterly targets shared with your team?',
    subtitle: 'Evaluates goal clarity and organizational strategic alignment.',
    weight: 0.35,
    options: [
      {
        id: 'LDR02-O1',
        label: '1 - Very Poor',
        description: 'No written goals exist; business operates day-to-day on informal verbal directions.',
        score: 20,
      },
      {
        id: 'LDR02-O2',
        label: '2 - Poor',
        description: 'Annual sales targets exist in owner minds, but are not formally documented or shared.',
        score: 40,
      },
      {
        id: 'LDR02-O3',
        label: '3 - Average',
        description: 'Goals are documented and reviewed quarterly with senior team members.',
        score: 60,
      },
      {
        id: 'LDR02-O4',
        label: '4 - Good',
        description: 'Every department head has clear quarterly targets connected to company goals.',
        score: 80,
      },
      {
        id: 'LDR02-O5',
        label: '5 - Excellent',
        description: 'Company-wide OKRs/KPIs are tracked monthly on live dashboards across all staff.',
        score: 100,
      },
    ],
  },
  {
    id: 'LDR03',
    pillarId: PillarId.LEADERSHIP,
    questionNumber: 3,
    title: 'Do you hold structured monthly or quarterly review meetings with advisors or department heads?',
    subtitle: 'Assesses governance discipline and decision-making oversight.',
    weight: 0.20,
    options: [
      {
        id: 'LDR03-O1',
        label: '1 - Very Poor',
        description: 'No review meetings take place; decisions are made on an ad-hoc emergency basis.',
        score: 20,
      },
      {
        id: 'LDR03-O2',
        label: '2 - Poor',
        description: 'Informal catch-ups happen when problems arise, but without formal agendas or minutes.',
        score: 40,
      },
      {
        id: 'LDR03-O3',
        label: '3 - Average',
        description: 'Regular monthly management meetings track operational progress and key issues.',
        score: 60,
      },
      {
        id: 'LDR03-O4',
        label: '4 - Good',
        description: 'Quarterly board/advisory reviews cover financial compliance, risks, and strategy.',
        score: 80,
      },
      {
        id: 'LDR03-O5',
        label: '5 - Excellent',
        description: 'Formal governance board with independent advisors meets quarterly to audit performance.',
        score: 100,
      },
    ],
  },

  // =========================================================================
  // PILLAR 2: STRATEGY & MARKET POSITIONING (STR)
  // =========================================================================
  {
    id: 'STR01',
    pillarId: PillarId.STRATEGY,
    questionNumber: 4,
    title: 'Can your customers clearly explain why your product or service is better than competitors?',
    subtitle: 'Measures market differentiation and brand positioning power.',
    weight: 0.45,
    options: [
      {
        id: 'STR01-O1',
        label: '1 - Very Poor',
        description: 'Compete purely on lowest price; customers see no difference between you and competitors.',
        score: 20,
      },
      {
        id: 'STR01-O2',
        label: '2 - Poor',
        description: 'Have good service, but struggle to justify higher prices when buyers compare options.',
        score: 40,
      },
      {
        id: 'STR01-O3',
        label: '3 - Average',
        description: 'Clear unique selling proposition recognized in target market with moderate pricing power.',
        score: 60,
      },
      {
        id: 'STR01-O4',
        label: '4 - Good',
        description: 'Recognized market specialist with premium pricing power and strong brand reputation.',
        score: 80,
      },
      {
        id: 'STR01-O5',
        label: '5 - Excellent',
        description: 'Dominant category leader with high switching costs and defensible competitive moat.',
        score: 100,
      },
    ],
  },
  {
    id: 'STR02',
    pillarId: PillarId.STRATEGY,
    questionNumber: 5,
    title: 'Do you regularly gather customer feedback to improve your products and services?',
    subtitle: 'Assesses customer insight loops and product innovation.',
    weight: 0.30,
    options: [
      {
        id: 'STR02-O1',
        label: '1 - Very Poor',
        description: 'No feedback is collected; changes are made only when clients complain or leave.',
        score: 20,
      },
      {
        id: 'STR02-O2',
        label: '2 - Poor',
        description: 'Feedback is heard verbally during client chats, but never recorded or analyzed.',
        score: 40,
      },
      {
        id: 'STR02-O3',
        label: '3 - Average',
        description: 'Conduct periodic customer surveys and use feedback to guide product improvements.',
        score: 60,
      },
      {
        id: 'STR02-O4',
        label: '4 - Good',
        description: 'Systematic NPS tracking and quarterly product reviews directly shape offerings.',
        score: 80,
      },
      {
        id: 'STR02-O5',
        label: '5 - Excellent',
        description: 'Continuous data-driven customer feedback engine drives product roadmap and R&D.',
        score: 100,
      },
    ],
  },
  {
    id: 'STR03',
    pillarId: PillarId.STRATEGY,
    questionNumber: 6,
    title: 'Do you have a clear written growth plan for expanding into new markets or customer segments over the next 3 years?',
    subtitle: 'Evaluates long-term expansion roadmap and growth readiness.',
    weight: 0.25,
    options: [
      {
        id: 'STR03-O1',
        label: '1 - Very Poor',
        description: 'No expansion plan; entirely focused on short-term survival month to month.',
        score: 20,
      },
      {
        id: 'STR03-O2',
        label: '2 - Poor',
        description: 'Revenue targets exist, but lack concrete steps or identified target markets.',
        score: 40,
      },
      {
        id: 'STR03-O3',
        label: '3 - Average',
        description: 'Documented 3-year growth roadmap outlining target segments and resource needs.',
        score: 60,
      },
      {
        id: 'STR03-O4',
        label: '4 - Good',
        description: 'Detailed multi-year expansion plan backed by market research and tested channels.',
        score: 80,
      },
      {
        id: 'STR03-O5',
        label: '5 - Excellent',
        description: 'Validated growth engine with pre-tested market entry strategies and strategic partners.',
        score: 100,
      },
    ],
  },

  // =========================================================================
  // PILLAR 3: SALES & CUSTOMER ACQUISITION (SLS)
  // =========================================================================
  {
    id: 'SLS01',
    pillarId: PillarId.SALES,
    questionNumber: 7,
    title: 'Does your business generate a predictable flow of new customer inquiries every month?',
    subtitle: 'Measures lead generation consistency and pipeline predictability.',
    weight: 0.40,
    options: [
      {
        id: 'SLS01-O1',
        label: '1 - Very Poor',
        description: 'Rely 100% on word-of-mouth or personal referrals; lead flow fluctuates wildly.',
        score: 20,
      },
      {
        id: 'SLS01-O2',
        label: '2 - Poor',
        description: 'One basic lead channel active, but monthly inquiries remain inconsistent.',
        score: 40,
      },
      {
        id: 'SLS01-O3',
        label: '3 - Average',
        description: '2-3 active lead channels generate a steady, predictable stream of weekly qualified leads.',
        score: 60,
      },
      {
        id: 'SLS01-O4',
        label: '4 - Good',
        description: 'Multi-channel lead engine (ads, outbound, referrals) with known customer acquisition cost.',
        score: 80,
      },
      {
        id: 'SLS01-O5',
        label: '5 - Excellent',
        description: 'Fully scalable, automated lead acquisition system producing predictable pipeline growth.',
        score: 100,
      },
    ],
  },
  {
    id: 'SLS02',
    pillarId: PillarId.SALES,
    questionNumber: 8,
    title: 'Do you follow a standardized sales process and CRM/system to track leads from inquiry to conversion?',
    subtitle: 'Assesses sales pipeline discipline and conversion tracking.',
    weight: 0.35,
    options: [
      {
        id: 'SLS02-O1',
        label: '1 - Very Poor',
        description: 'Leads tracked on notebooks or memory; follow-ups are irregular and frequently missed.',
        score: 20,
      },
      {
        id: 'SLS02-O2',
        label: '2 - Poor',
        description: 'Leads kept in spreadsheets or basic CRM, but follow-up steps depend on individual reps.',
        score: 40,
      },
      {
        id: 'SLS02-O3',
        label: '3 - Average',
        description: 'Standardized CRM pipeline where all leads follow mandatory stage follow-up steps.',
        score: 60,
      },
      {
        id: 'SLS02-O4',
        label: '4 - Good',
        description: 'Enforced sales playbook, automated email/WhatsApp reminders, and proposal templates.',
        score: 80,
      },
      {
        id: 'SLS02-O5',
        label: '5 - Excellent',
        description: 'High-converting sales engine with real-time conversion analytics and automated demos.',
        score: 100,
      },
    ],
  },
  {
    id: 'SLS03',
    pillarId: PillarId.SALES,
    questionNumber: 9,
    title: 'Are your sales profitable after accounting for all marketing and sales acquisition costs?',
    subtitle: 'Evaluates unit economics, LTV:CAC ratio, and acquisition margin.',
    weight: 0.25,
    options: [
      {
        id: 'SLS03-O1',
        label: '1 - Very Poor',
        description: 'Customer acquisition cost is unknown; sales discounting erodes profit margins.',
        score: 20,
      },
      {
        id: 'SLS03-O2',
        label: '2 - Poor',
        description: 'High acquisition cost eats into profits; repeat sales or upsells are rare.',
        score: 40,
      },
      {
        id: 'SLS03-O3',
        label: '3 - Average',
        description: 'Healthy sales profitability with customer lifetime value comfortably exceeding acquisition cost.',
        score: 60,
      },
      {
        id: 'SLS03-O4',
        label: '4 - Good',
        description: 'LTV:CAC ratio > 3:1 with payback period under 6 months and active repeat purchases.',
        score: 80,
      },
      {
        id: 'SLS03-O5',
        label: '5 - Excellent',
        description: 'Elite unit economics (LTV:CAC > 5:1) with rapid sales payback and strong expansion revenue.',
        score: 100,
      },
    ],
  },

  // =========================================================================
  // PILLAR 4: OPERATIONS & SOPS (OPS)
  // =========================================================================
  {
    id: 'OPS01',
    pillarId: PillarId.OPERATIONS,
    questionNumber: 10,
    title: 'Are your daily operational processes documented in step-by-step SOPs or checklists for your team?',
    subtitle: 'Measures process documentation and operational standardization.',
    weight: 0.40,
    options: [
      {
        id: 'OPS01-O1',
        label: '1 - Very Poor',
        description: 'Processes exist only in staff heads; training relies on shadowing older employees.',
        score: 20,
      },
      {
        id: 'OPS01-O2',
        label: '2 - Poor',
        description: 'Some processes written in documents, but they are outdated and rarely followed.',
        score: 40,
      },
      {
        id: 'OPS01-O3',
        label: '3 - Average',
        description: 'Central digital SOP library with video tutorials and mandatory team checklists.',
        score: 60,
      },
      {
        id: 'OPS01-O4',
        label: '4 - Good',
        description: 'Regular monthly SOP audits ensure strict quality compliance across all departments.',
        score: 80,
      },
      {
        id: 'OPS01-O5',
        label: '5 - Excellent',
        description: 'Continuous improvement system where team regularly updates SOPs to eliminate waste.',
        score: 100,
      },
    ],
  },
  {
    id: 'OPS02',
    pillarId: PillarId.OPERATIONS,
    questionNumber: 11,
    title: 'Do you track order delivery times and quality issues to prevent customer complaints?',
    subtitle: 'Assesses service delivery quality, SLA compliance, and error tracking.',
    weight: 0.35,
    options: [
      {
        id: 'OPS02-O1',
        label: '1 - Very Poor',
        description: 'Errors identified only when customers complain; frequent delivery delays.',
        score: 20,
      },
      {
        id: 'OPS02-O2',
        label: '2 - Poor',
        description: 'Delivery dates are tracked, but internal workload bottlenecks cause frequent rush jobs.',
        score: 40,
      },
      {
        id: 'OPS02-O3',
        label: '3 - Average',
        description: 'Proactive SLA tracking with clear escalation steps when deadlines or quality are at risk.',
        score: 60,
      },
      {
        id: 'OPS02-O4',
        label: '4 - Good',
        description: 'Near-zero defect rates with automated capacity monitoring and SLA dashboards.',
        score: 80,
      },
      {
        id: 'OPS02-O5',
        label: '5 - Excellent',
        description: 'Lean execution model with predictive bottleneck alerts and 99%+ on-time delivery.',
        score: 100,
      },
    ],
  },
  {
    id: 'OPS03',
    pillarId: PillarId.OPERATIONS,
    questionNumber: 12,
    title: 'Can your operational systems handle 2x to 3x more orders without breaking or doubling your costs?',
    subtitle: 'Evaluates operational elasticity and capacity scalability.',
    weight: 0.25,
    options: [
      {
        id: 'OPS03-O1',
        label: '1 - Very Poor',
        description: 'Tripling order volume would cause immediate operational breakdown and customer churn.',
        score: 20,
      },
      {
        id: 'OPS03-O2',
        label: '2 - Poor',
        description: 'Can scale only by adding equal manual staff, eroding overall profit margins.',
        score: 40,
      },
      {
        id: 'OPS03-O3',
        label: '3 - Average',
        description: 'Systems and tools allow handling 2x volume with minimal extra operational overhead.',
        score: 60,
      },
      {
        id: 'OPS03-O4',
        label: '4 - Good',
        description: 'Automated workflows enable handling 3x growth with under 25% increase in overhead.',
        score: 80,
      },
      {
        id: 'OPS03-O5',
        label: '5 - Excellent',
        description: 'Highly scalable platform infrastructure handling exponential volume seamlessly.',
        score: 100,
      },
    ],
  },

  // =========================================================================
  // PILLAR 5: FINANCE & PROFITABILITY (FIN)
  // =========================================================================
  {
    id: 'FIN01',
    pillarId: PillarId.FINANCE,
    questionNumber: 13,
    title: 'Do you review accurate monthly Profit & Loss (P&L) and Cash Flow statements within 5 days of month-end?',
    subtitle: 'Measures financial reporting speed, accuracy, and P&L visibility.',
    weight: 0.40,
    options: [
      {
        id: 'FIN01-O1',
        label: '1 - Very Poor',
        description: 'Accounting done once a year for tax filing; zero monthly visibility into true profits.',
        score: 20,
      },
      {
        id: 'FIN01-O2',
        label: '2 - Poor',
        description: 'P&L reports delayed by 30+ days; cash forecasting is done roughly on spreadsheets.',
        score: 40,
      },
      {
        id: 'FIN01-O3',
        label: '3 - Average',
        description: 'Accurate P&L and 13-week rolling cash flow forecasts delivered within 5 days of month-end.',
        score: 60,
      },
      {
        id: 'FIN01-O4',
        label: '4 - Good',
        description: 'Real-time accounting dashboard with weekly cash burn tracking and margin analytics.',
        score: 80,
      },
      {
        id: 'FIN01-O5',
        label: '5 - Excellent',
        description: 'Automated daily financial insights, unit-level profitability, and 12-month rolling projections.',
        score: 100,
      },
    ],
  },
  {
    id: 'FIN02',
    pillarId: PillarId.FINANCE,
    questionNumber: 14,
    title: 'Do you collect customer payments on time without facing frequent cash shortages?',
    subtitle: 'Assesses accounts receivable collection, DSO, and working capital health.',
    weight: 0.35,
    options: [
      {
        id: 'FIN02-O1',
        label: '1 - Very Poor',
        description: 'Overdue receivables > 60 days cause frequent cash crunches and delayed vendor payments.',
        score: 20,
      },
      {
        id: 'FIN02-O2',
        label: '2 - Poor',
        description: 'Payment terms often breached without follow-ups; cash flow remains unpredictable.',
        score: 40,
      },
      {
        id: 'FIN02-O3',
        label: '3 - Average',
        description: 'Disciplined AR management with DSO under 30 days and automated payment reminders.',
        score: 60,
      },
      {
        id: 'FIN02-O4',
        label: '4 - Good',
        description: 'Strict credit terms, early payment discounts, and healthy 3-month operating cash reserves.',
        score: 80,
      },
      {
        id: 'FIN02-O5',
        label: '5 - Excellent',
        description: 'Upfront customer advances create negative working capital and strong positive cash buffers.',
        score: 100,
      },
    ],
  },
  {
    id: 'FIN03',
    pillarId: PillarId.FINANCE,
    questionNumber: 15,
    title: 'Do you know the exact profit margin for each product, service, or customer account?',
    subtitle: 'Evaluates cost accounting accuracy and gross margin controls.',
    weight: 0.25,
    options: [
      {
        id: 'FIN03-O1',
        label: '1 - Very Poor',
        description: 'Pricing based on competitor guesswork without knowing true product cost or margin.',
        score: 20,
      },
      {
        id: 'FIN03-O2',
        label: '2 - Poor',
        description: 'Overall company profit is known, but individual product/client margins are not tracked.',
        score: 40,
      },
      {
        id: 'FIN03-O3',
        label: '3 - Average',
        description: 'Gross margin calculated per SKU/client; low-margin contracts are renegotiated.',
        score: 60,
      },
      {
        id: 'FIN03-O4',
        label: '4 - Good',
        description: 'Target gross margins enforced on every quote with regular cost allocation audits.',
        score: 80,
      },
      {
        id: 'FIN03-O5',
        label: '5 - Excellent',
        description: 'Dynamic value-based pricing maximizing margins across every customer segment.',
        score: 100,
      },
    ],
  },

  // =========================================================================
  // PILLAR 6: HUMAN RESOURCES & PEOPLE (HR)
  // =========================================================================
  {
    id: 'HR01',
    pillarId: PillarId.HUMAN_RESOURCES,
    questionNumber: 16,
    title: 'Does every team member have a clear written job description with measurable performance goals?',
    subtitle: 'Measures role clarity, employee accountability, and KPI scorecards.',
    weight: 0.40,
    options: [
      {
        id: 'HR01-O1',
        label: '1 - Very Poor',
        description: 'No written job descriptions; staff perform tasks based on daily verbal orders.',
        score: 20,
      },
      {
        id: 'HR01-O2',
        label: '2 - Poor',
        description: 'Generic job descriptions exist, but performance reviews are subjective and informal.',
        score: 40,
      },
      {
        id: 'HR01-O3',
        label: '3 - Average',
        description: 'Every role has 3-5 measurable KPIs reviewed quarterly with performance feedback.',
        score: 60,
      },
      {
        id: 'HR01-O4',
        label: '4 - Good',
        description: 'Transparent KPI scorecards linked to performance incentives and clear career growth.',
        score: 80,
      },
      {
        id: 'HR01-O5',
        label: '5 - Excellent',
        description: 'High-accountability meritocracy with real-time KPI dashboards and performance rewards.',
        score: 100,
      },
    ],
  },
  {
    id: 'HR02',
    pillarId: PillarId.HUMAN_RESOURCES,
    questionNumber: 17,
    title: 'Do you have a structured training process to get new employees fully productive within 30 days?',
    subtitle: 'Assesses onboarding efficiency, employee ramp-up time, and training systems.',
    weight: 0.35,
    options: [
      {
        id: 'HR02-O1',
        label: '1 - Very Poor',
        description: 'Sink-or-swim onboarding; new hires take months to become productive.',
        score: 20,
      },
      {
        id: 'HR02-O2',
        label: '2 - Poor',
        description: 'Basic paperwork completed, but job training is unstructured and informal.',
        score: 40,
      },
      {
        id: 'HR02-O3',
        label: '3 - Average',
        description: 'Structured 30-day onboarding plan with training modules and assigned mentors.',
        score: 60,
      },
      {
        id: 'HR02-O4',
        label: '4 - Good',
        description: 'Standardized onboarding playbooks cut time-to-productivity to under 21 days.',
        score: 80,
      },
      {
        id: 'HR02-O5',
        label: '5 - Excellent',
        description: 'In-house training academy with clear succession pathways and talent pipelines.',
        score: 100,
      },
    ],
  },
  {
    id: 'HR03',
    pillarId: PillarId.HUMAN_RESOURCES,
    questionNumber: 18,
    title: 'Is team morale high with low voluntary employee turnover?',
    subtitle: 'Evaluates workplace morale, team alignment, and staff retention.',
    weight: 0.25,
    options: [
      {
        id: 'HR03-O1',
        label: '1 - Very Poor',
        description: 'High employee turnover and frequent interpersonal conflict or low morale.',
        score: 20,
      },
      {
        id: 'HR03-O2',
        label: '2 - Poor',
        description: 'Staff do basic work, but lack proactive ownership or enthusiasm.',
        score: 40,
      },
      {
        id: 'HR03-O3',
        label: '3 - Average',
        description: 'Good team spirit, open communication, and key staff retention above industry average.',
        score: 60,
      },
      {
        id: 'HR03-O4',
        label: '4 - Good',
        description: 'High-trust culture with regular team town halls and strong employee satisfaction.',
        score: 80,
      },
      {
        id: 'HR03-O5',
        label: '5 - Excellent',
        description: 'Vibrant ownership culture, top-tier eNPS scores, and near-zero voluntary key talent loss.',
        score: 100,
      },
    ],
  },

  // =========================================================================
  // PILLAR 7: TECHNOLOGY & SYSTEMS (TEC)
  // =========================================================================
  {
    id: 'TEC01',
    pillarId: PillarId.TECHNOLOGY,
    questionNumber: 19,
    title: 'Are your core business software tools (CRM, Billing, Inventory) connected to avoid manual re-typing?',
    subtitle: 'Measures software integration and elimination of duplicate data entry.',
    weight: 0.40,
    options: [
      {
        id: 'TEC01-O1',
        label: '1 - Very Poor',
        description: 'Disconnected software tools requiring manual re-entry of data across spreadsheets.',
        score: 20,
      },
      {
        id: 'TEC01-O2',
        label: '2 - Poor',
        description: 'Use accounting and CRM software, but data sync requires periodic CSV exports.',
        score: 40,
      },
      {
        id: 'TEC01-O3',
        label: '3 - Average',
        description: 'Core tools connected via APIs or automated webhooks (Zapier/Make) for instant data flow.',
        score: 60,
      },
      {
        id: 'TEC01-O4',
        label: '4 - Good',
        description: 'Integrated cloud stack providing single-source-of-truth data across all departments.',
        score: 80,
      },
      {
        id: 'TEC01-O5',
        label: '5 - Excellent',
        description: 'Unified enterprise ecosystem with real-time automated data synchronization.',
        score: 100,
      },
    ],
  },
  {
    id: 'TEC02',
    pillarId: PillarId.TECHNOLOGY,
    questionNumber: 20,
    title: 'Are routine administrative tasks like invoicing, payment reminders, and customer notifications automated?',
    subtitle: 'Assesses workflow automation density and administrative productivity.',
    weight: 0.35,
    options: [
      {
        id: 'TEC02-O1',
        label: '1 - Very Poor',
        description: 'All invoices, payment follow-ups, and notifications typed and sent manually.',
        score: 20,
      },
      {
        id: 'TEC02-O2',
        label: '2 - Poor',
        description: 'Basic email auto-responders used, but operational follow-ups are still manual.',
        score: 40,
      },
      {
        id: 'TEC02-O3',
        label: '3 - Average',
        description: 'Automated invoice dispatch, payment reminders, and order status updates.',
        score: 60,
      },
      {
        id: 'TEC02-O4',
        label: '4 - Good',
        description: '80%+ of routine customer communications and administrative tasks fully automated.',
        score: 80,
      },
      {
        id: 'TEC02-O5',
        label: '5 - Excellent',
        description: 'AI-enhanced automation handling lead triage, reporting, and workflow routing autonomously.',
        score: 100,
      },
    ],
  },
  {
    id: 'TEC03',
    pillarId: PillarId.TECHNOLOGY,
    questionNumber: 21,
    title: 'Is your company data backed up automatically to the cloud with password protection for all employees?',
    subtitle: 'Evaluates cloud data security, access permissions, and disaster readiness.',
    weight: 0.25,
    options: [
      {
        id: 'TEC03-O1',
        label: '1 - Very Poor',
        description: 'Passwords shared insecurely; no automated cloud backups; high risk of data loss.',
        score: 20,
      },
      {
        id: 'TEC03-O2',
        label: '2 - Poor',
        description: 'Basic cloud storage used, but lack strict access permissions or 2FA security.',
        score: 40,
      },
      {
        id: 'TEC03-O3',
        label: '3 - Average',
        description: 'Mandatory 2FA, role-based access permissions, and daily automated cloud backups.',
        score: 60,
      },
      {
        id: 'TEC03-O4',
        label: '4 - Good',
        description: 'Encrypted data storage, formal password policies, and tested disaster recovery plan.',
        score: 80,
      },
      {
        id: 'TEC03-O5',
        label: '5 - Excellent',
        description: 'Enterprise-grade cybersecurity with automated vulnerability scans and SOC2 compliance.',
        score: 100,
      },
    ],
  },
];
