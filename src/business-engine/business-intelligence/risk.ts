/**
 * Business Engine - Risk Analysis Engine
 * Generates rule-based risk classification and mitigation strategies per pillar.
 */

import { PillarId } from '../assessment-engine/types';
import { RiskInsight, RiskLevel, DiagnosticContext } from './interfaces';
import { getPillarQuestionBreakdown } from './rules';

export function getRiskAnalysisForPillar(
  pillarId: PillarId,
  score: number,
  context?: DiagnosticContext
): RiskInsight {
  const breakdown = getPillarQuestionBreakdown(pillarId, score, context);
  const lowestQ = breakdown.lowestQId;
  const lScore = breakdown.lowestQScore;

  const getRiskLevel = (s: number): RiskLevel => {
    if (s < 50) return 'Critical Risk';
    if (s < 70) return 'High Risk';
    if (s < 85) return 'Medium Risk';
    return 'Low Risk';
  };

  const riskLevel = getRiskLevel(lScore < score ? lScore : score);

  switch (pillarId) {
    case PillarId.LEADERSHIP:
      if (lowestQ === 'LDR01' && lScore < 70) {
        return {
          riskCategory: 'Owner Bottleneck & Operational Paralysis',
          riskDescription: 'Complete business halt and operational delay if founder is unavailable due to total owner dependency.',
          riskLevel,
          mitigationStrategy: 'Immediately delegate functional authority with approval limits and draft emergency playbooks.',
        };
      }
      if (lowestQ === 'LDR02' && lScore < 70) {
        return {
          riskCategory: 'Goal Drift & Team Misalignment',
          riskDescription: 'Departmental friction and wasted payroll effort due to lack of quarterly targets and documented goals.',
          riskLevel,
          mitigationStrategy: 'Deploy quarterly OKRs and establish mandatory monthly executive alignment meetings.',
        };
      }
      if (lowestQ === 'LDR03' && lScore < 70) {
        return {
          riskCategory: 'Governance Deficit & Unvetted Decisions',
          riskDescription: 'Unmonitored risk exposure and strategic mistakes due to lack of structured review cadence.',
          riskLevel,
          mitigationStrategy: 'Form a monthly executive review cadence with written minutes and action item tracking.',
        };
      }
      if (score < 50) {
        return {
          riskCategory: 'Owner Bottleneck & Operational Paralysis',
          riskDescription: 'Complete business halt and customer loss if founder is unavailable due to total owner dependency.',
          riskLevel,
          mitigationStrategy: 'Immediately delegate functional authority with ₹50K approval limits and draft emergency playbooks.',
        };
      } else if (score < 70) {
        return {
          riskCategory: 'Goal Drift & Executive Misalignment',
          riskDescription: 'Departmental friction and wasted capital due to lack of quarterly targets and performance reviews.',
          riskLevel,
          mitigationStrategy: 'Deploy quarterly OKRs and establish mandatory monthly executive alignment meetings.',
        };
      } else if (score < 85) {
        return {
          riskCategory: 'Institutional Governance Deficit',
          riskDescription: 'Risk of unvetted strategic expansion and compliance blind spots without external oversight.',
          riskLevel,
          mitigationStrategy: 'Form a 3-member external advisory board for quarterly risk and compliance audits.',
        };
      } else {
        return {
          riskCategory: 'Executive Succession Vulnerability',
          riskDescription: 'Potential strategic disruption if C-suite leaders depart without trained successors.',
          riskLevel,
          mitigationStrategy: 'Formalize executive succession pathways and long-term retention incentive plans.',
        };
      }

    case PillarId.STRATEGY:
      if (lowestQ === 'STR01' && lScore < 70) {
        return {
          riskCategory: 'Commoditization & Price Erosion',
          riskDescription: 'Erosion of profit margins and client loss to lower-cost competitors due to weak brand positioning moat.',
          riskLevel,
          mitigationStrategy: 'Define specialized niche value proposition and package premium bundled service tiers.',
        };
      }
      if (lowestQ === 'STR02' && lScore < 70) {
        return {
          riskCategory: 'Customer Churn & Unheard Complaints',
          riskDescription: 'Silent client attrition due to missing customer feedback collection and NPS tracking.',
          riskLevel,
          mitigationStrategy: 'Establish automated post-service customer feedback surveys and monthly churn analysis.',
        };
      }
      if (lowestQ === 'STR03' && lScore < 70) {
        return {
          riskCategory: 'Short-Term Horizon & Market Disruption',
          riskDescription: 'Loss of market share to forward-looking competitors due to lack of 3-year growth roadmap.',
          riskLevel,
          mitigationStrategy: 'Formulate a 3-year market expansion plan identifying new client segments.',
        };
      }
      if (score < 50) {
        return {
          riskCategory: 'Commoditization & Price Erosion',
          riskDescription: 'Erosion of profit margins and client loss to lower-cost competitors due to zero market differentiation.',
          riskLevel,
          mitigationStrategy: 'Define specialized niche value proposition and package premium bundled service tiers.',
        };
      } else if (score < 70) {
        return {
          riskCategory: 'Market Misalignment & Ad-Hoc Growth',
          riskDescription: 'Wasted marketing spend and failed product launches due to unvalidated market expansion.',
          riskLevel,
          mitigationStrategy: 'Conduct structured TAM/SAM research and publish a 3-year growth roadmap.',
        };
      } else if (score < 85) {
        return {
          riskCategory: 'Single-Line Product Dependence',
          riskDescription: 'Vulnerability to market demand shifts without adjacent revenue streams.',
          riskLevel,
          mitigationStrategy: 'Launch adjacent cross-sell product line to existing loyal customer base.',
        };
      } else {
        return {
          riskCategory: 'Industry Disruption Disregard',
          riskDescription: 'Risk of agile tech-enabled entrants eroding market share in core verticals.',
          riskLevel,
          mitigationStrategy: 'Invest 10% of profits into R&D and evaluate strategic M&A acquisition targets.',
        };
      }

    case PillarId.SALES:
      if (lowestQ === 'SLS01' && lScore < 70) {
        return {
          riskCategory: 'Revenue Volatility & Lead Dry-Spells',
          riskDescription: 'Unpredictable cash flow crunches caused by total reliance on organic word-of-mouth referrals.',
          riskLevel,
          mitigationStrategy: 'Build predictable outbound digital campaigns and diversify inquiry channels.',
        };
      }
      if (lowestQ === 'SLS02' && lScore < 70) {
        return {
          riskCategory: 'Pipeline Deal Leakage & Lead Decay',
          riskDescription: 'High marketing spend wasted due to unmonitored CRM pipeline deals and irregular follow-ups.',
          riskLevel,
          mitigationStrategy: 'Implement mandatory CRM pipeline tracking with 15-minute response SLAs.',
        };
      }
      if (lowestQ === 'SLS03' && lScore < 70) {
        return {
          riskCategory: 'Margin Erosion via Discounting',
          riskDescription: 'Unprofitable deal closings eroding gross sales profit due to unmonitored rep discounting.',
          riskLevel,
          mitigationStrategy: 'Establish floor pricing controls and enforce maximum rep discount thresholds.',
        };
      }
      if (score < 50) {
        return {
          riskCategory: 'Revenue Volatility & Pipeline Collapse',
          riskDescription: 'Severe cash flow crunches caused by total reliance on unpredictable word-of-mouth referrals.',
          riskLevel,
          mitigationStrategy: 'Build an outbound lead campaign and enforce mandatory CRM deal pipeline tracking.',
        };
      } else if (score < 70) {
        return {
          riskCategory: 'Lead Decay & High Acquisition Cost',
          riskDescription: 'High marketing spend wasted due to slow follow-up SLAs and deal drop-offs in sales pipeline.',
          riskLevel,
          mitigationStrategy: 'Implement mandatory 15-minute lead response SLAs and 5-step automated WhatsApp sequences.',
        };
      } else if (score < 85) {
        return {
          riskCategory: 'Sales Rep Capacity Cap',
          riskDescription: 'Sales team revenue ceiling caused by manual proposal creation and demo overhead.',
          riskLevel,
          mitigationStrategy: 'Deploy sales enablement assets, proposal generators, and account expansion scripts.',
        };
      } else {
        return {
          riskCategory: 'Channel Saturation Stagnation',
          riskDescription: 'Diminishing returns on existing digital advertising acquisition channels.',
          riskLevel,
          mitigationStrategy: 'Expand enterprise Account-Based Marketing (ABM) and partner channel co-selling.',
        };
      }

    case PillarId.OPERATIONS:
      if (lowestQ === 'OPS01' && lScore < 70) {
        return {
          riskCategory: 'Quality Error Surge & Tribal Process Reliance',
          riskDescription: 'Costly rework and client complaints caused by unwritten SOPs stored only in staff memory.',
          riskLevel,
          mitigationStrategy: 'Document top 10 core operational processes into digital SOP playbooks with checklists.',
        };
      }
      if (lowestQ === 'OPS02' && lScore < 70) {
        return {
          riskCategory: 'Delivery SLA Breaches & Customer Churn',
          riskDescription: 'Delivery backlogs and quality failures during volume spikes due to unmonitored SLAs.',
          riskLevel,
          mitigationStrategy: 'Deploy real-time SLA tracking dashboards and quality control checkpoints.',
        };
      }
      if (lowestQ === 'OPS03' && lScore < 70) {
        return {
          riskCategory: 'Operational Capacity Breakdown',
          riskDescription: 'Inability to handle volume surges without linear cost escalation or delivery failure.',
          riskLevel,
          mitigationStrategy: 'Implement capacity forecasting models and modular operational workflows.',
        };
      }
      if (score < 50) {
        return {
          riskCategory: 'Execution Quality Collapse & Defect Surge',
          riskDescription: 'Frequent customer complaints, delivery delays, and costly rework due to unwritten tribal SOPs.',
          riskLevel,
          mitigationStrategy: 'Document top 10 core operational processes into digital SOP playbooks with checklists.',
        };
      } else if (score < 70) {
        return {
          riskCategory: 'Delivery Bottleneck & SLA Breach',
          riskDescription: 'Operational crunches during seasonal volume spikes causing order backlogs and churn.',
          riskLevel,
          mitigationStrategy: 'Deploy centralized SLA tracking dashboards and capacity forecasting models.',
        };
      } else if (score < 85) {
        return {
          riskCategory: 'Linear Margin Compression',
          riskDescription: 'Inability to scale profits because operational costs increase linearly with revenue.',
          riskLevel,
          mitigationStrategy: 'Automate cross-departmental handoffs using custom API integrations and webhooks.',
        };
      } else {
        return {
          riskCategory: 'Diminishing Efficiency Returns',
          riskDescription: 'Inability to lower unit production costs further without systemic AI transformation.',
          riskLevel,
          mitigationStrategy: 'Implement predictive AI supply chain analytics and automated defect detection.',
        };
      }

    case PillarId.FINANCE:
      if (lowestQ === 'FIN01' && lScore < 70) {
        return {
          riskCategory: 'Insolvency & Blind Cash Burn',
          riskDescription: 'Sudden cash crunch and inability to meet payroll due to tax-only annual accounting.',
          riskLevel,
          mitigationStrategy: 'Implement cloud accounting software and generate weekly 13-week rolling cash flow forecasts.',
        };
      }
      if (lowestQ === 'FIN02' && lScore < 70) {
        return {
          riskCategory: 'Working Capital Paralysis (Bad Debt)',
          riskDescription: 'Overdue receivables (>60 days) locking up working capital and forcing expensive borrowing.',
          riskLevel,
          mitigationStrategy: 'Enforce strict payment terms, automated reminders, and credit limits on client accounts.',
        };
      }
      if (lowestQ === 'FIN03' && lScore < 70) {
        return {
          riskCategory: 'Unprofitable Customer Subsidization',
          riskDescription: 'High-margin contracts subsidizing hidden losses in unmonitored low-margin products/clients.',
          riskLevel,
          mitigationStrategy: 'Perform unit SKU/client margin audit to eliminate or renegotiate sub-30% gross margin accounts.',
        };
      }
      if (score < 50) {
        return {
          riskCategory: 'Insolvency & Cash Crunch Exposure',
          riskDescription: 'Inability to pay salaries or vendors due to tax-only accounting and zero rolling cash visibility.',
          riskLevel,
          mitigationStrategy: 'Implement cloud accounting software and generate weekly cash burn and 13-week forecasts.',
        };
      } else if (score < 70) {
        return {
          riskCategory: 'Working Capital Paralysis (Bad Receivables)',
          riskDescription: 'Overdue receivables choking liquidity and forcing expensive short-term debt borrowing.',
          riskLevel,
          mitigationStrategy: 'Enforce strict credit limits, automated payment reminders, and late payment fee terms.',
        };
      } else if (score < 85) {
        return {
          riskCategory: 'Unprofitable Account Subsidization',
          riskDescription: 'High-margin accounts subsidizing hidden losses in low-margin client contracts.',
          riskLevel,
          mitigationStrategy: 'Implement unit-level cost accounting to identify and renegotiate sub-35% margin contracts.',
        };
      } else {
        return {
          riskCategory: 'Capital Allocation Inefficiency',
          riskDescription: 'Sub-optimal return on capital due to uninvested excess cash reserves.',
          riskLevel,
          mitigationStrategy: 'Deploy corporate treasury optimization and tax-efficient M&A reinvestment reserves.',
        };
      }

    case PillarId.HUMAN_RESOURCES:
      if (lowestQ === 'HR01' && lScore < 70) {
        return {
          riskCategory: 'Role Confusion & Low Individual Accountability',
          riskDescription: 'Frustration and employee turnover due to unwritten job descriptions and subjective evaluations.',
          riskLevel,
          mitigationStrategy: 'Draft written Job Descriptions with 3-5 measurable KPI scorecards for every role.',
        };
      }
      if (lowestQ === 'HR02' && lScore < 70) {
        return {
          riskCategory: 'Onboarding Payroll Waste & Slow Ramp-up',
          riskDescription: 'High payroll cost spent during long 60+ day employee ramp-up caused by informal onboarding.',
          riskLevel,
          mitigationStrategy: 'Build standardized 30-60-90 day employee onboarding playbooks.',
        };
      }
      if (lowestQ === 'HR03' && lScore < 70) {
        return {
          riskCategory: 'Key Talent Departure & Morale Attrition',
          riskDescription: 'High voluntary turnover of top performers due to unmonitored team friction and culture issues.',
          riskLevel,
          mitigationStrategy: 'Establish transparent monthly town-halls and stay-interviews for core talent.',
        };
      }
      if (score < 50) {
        return {
          riskCategory: 'Role Ambiguity & Key Talent Attrition',
          riskDescription: 'Staff frustration, low accountability, and key employee departures due to missing job descriptions.',
          riskLevel,
          mitigationStrategy: 'Draft clear Job Descriptions with 3-5 measurable KPIs for every team member.',
        };
      } else if (score < 70) {
        return {
          riskCategory: 'New Hire Ramp-up Waste',
          riskDescription: 'High onboarding payroll costs with slow time-to-value due to informal training.',
          riskLevel,
          mitigationStrategy: 'Build standardized 30-60-90 day employee onboarding playbooks and video modules.',
        };
      } else if (score < 85) {
        return {
          riskCategory: 'Single-Point Talent Depletion',
          riskDescription: 'Severe operational disruption when key individual performers leave without backups.',
          riskLevel,
          mitigationStrategy: 'Design cross-training programs, retention bonuses, and internal succession ladders.',
        };
      } else {
        return {
          riskCategory: 'Cultural Dilution During Expansion',
          riskDescription: 'Loss of core high-performance culture as team expands across remote locations.',
          riskLevel,
          mitigationStrategy: 'Launch internal Leadership Academy and continuous eNPS sentiment tracking.',
        };
      }

    case PillarId.TECHNOLOGY:
      if (lowestQ === 'TEC01' && lScore < 70) {
        return {
          riskCategory: 'Data Silos & Duplicate Data Entry Chaos',
          riskDescription: 'Costly human error and wasted employee hours caused by manual spreadsheet re-entry across tools.',
          riskLevel,
          mitigationStrategy: 'Connect core software tools via webhook API integrations and unified cloud suite.',
        };
      }
      if (lowestQ === 'TEC02' && lScore < 70) {
        return {
          riskCategory: 'Administrative Payroll Drain',
          riskDescription: 'Excessive labor spend wasted on routine manual invoicing, reminders, and updates.',
          riskLevel,
          mitigationStrategy: 'Automate transactional workflows: invoice generation, payment alerts, and notification triggers.',
        };
      }
      if (lowestQ === 'TEC03' && lScore < 70) {
        return {
          riskCategory: 'Catastrophic Data Loss & Security Breach',
          riskDescription: 'Business shutdown risk from ransomware or file deletion due to shared passwords and missing backups.',
          riskLevel,
          mitigationStrategy: 'Enforce mandatory 2FA, role-based access permissions, and daily cloud backups.',
        };
      }
      if (score < 50) {
        return {
          riskCategory: 'Data Loss & Human Error Exposure',
          riskDescription: 'Costly data entry errors and catastrophic IP loss from shared passwords and zero cloud backups.',
          riskLevel,
          mitigationStrategy: 'Migrate to unified cloud suite (Google Workspace/MS365) with mandatory 2FA and daily backups.',
        };
      } else if (score < 70) {
        return {
          riskCategory: 'Administrative Overhead Friction',
          riskDescription: 'Hundreds of wasted staff hours spent on manual invoicing, notifications, and spreadsheet transfers.',
          riskLevel,
          mitigationStrategy: 'Automate transactional workflows: automated invoice dispatch, payment alerts, and lead notifications.',
        };
      } else if (score < 85) {
        return {
          riskCategory: 'Cybersecurity Vulnerability & Data Leak',
          riskDescription: 'Exposure to ransomware or client data leaks due to unmanaged access permissions.',
          riskLevel,
          mitigationStrategy: 'Enforce role-based access security, device encryption, and tested recovery plans.',
        };
      } else {
        return {
          riskCategory: 'Competitive Tech Disadvantage',
          riskDescription: 'Falling behind competitors who leverage autonomous AI agents for operational speed.',
          riskLevel,
          mitigationStrategy: 'Deploy custom AI copilots for customer support triage, reporting, and workflow automation.',
        };
      }
  }
}
