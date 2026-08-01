/**
 * Business Engine - Strength Analysis Engine
 * Generates rule-based strength insights for each pillar based on maturity score.
 */

import { PillarId } from '../assessment-engine/types';
import { StrengthInsight, DiagnosticContext } from './interfaces';
import { getPillarQuestionBreakdown } from './rules';

export function getStrengthAnalysisForPillar(
  pillarId: PillarId,
  score: number,
  context?: DiagnosticContext
): StrengthInsight {
  const breakdown = getPillarQuestionBreakdown(pillarId, score, context);
  const highestQ = breakdown.highestQId;
  const hScore = breakdown.highestQScore;
  const bModel = context?.profile?.business?.businessModel || '';
  const industry = context?.profile?.business?.industry || '';

  const modelContext = bModel ? ` in ${bModel}` : '';

  switch (pillarId) {
    case PillarId.LEADERSHIP:
      if (highestQ === 'LDR01' && hScore >= 60) {
        return {
          coreStrength: 'Autonomous Leadership & Operational Independence',
          competitiveAdvantage: `Strong operational delegation${modelContext} allowing business continuity without daily founder presence`,
          existingCapability: 'Empowered team execution and established managerial approval limits',
        };
      }
      if (highestQ === 'LDR02' && hScore >= 60) {
        return {
          coreStrength: 'Structured Goal Alignment & Shared Targets',
          competitiveAdvantage: 'High strategic clarity with team-wide alignment around documented annual objectives',
          existingCapability: 'Shared department KPIs and quarterly target progress tracking',
        };
      }
      if (highestQ === 'LDR03' && hScore >= 60) {
        return {
          coreStrength: 'Disciplined Executive Governance & Review Cadence',
          competitiveAdvantage: 'High decision oversight and institutional accountability across leadership functions',
          existingCapability: 'Structured management meetings with documented review agendas',
        };
      }
      if (score >= 80) {
        return {
          coreStrength: 'Autonomous Leadership & Board Governance',
          competitiveAdvantage: 'Institutional decision-making velocity with low founder dependency',
          existingCapability: 'Structured quarterly OKRs and clear managerial delegation limits',
        };
      } else if (score >= 60) {
        return {
          coreStrength: 'Active Executive Oversight',
          competitiveAdvantage: 'Direct founder engagement with responsive operational direction',
          existingCapability: 'Regular management reviews and informal operational alignment',
        };
      } else {
        return {
          coreStrength: 'Hands-on Founder Commitment',
          competitiveAdvantage: 'Unmatched agility and immediate personal crisis resolution',
          existingCapability: 'Direct personal control over daily operational decisions',
        };
      }

    case PillarId.STRATEGY:
      if (highestQ === 'STR01' && hScore >= 60) {
        return {
          coreStrength: 'Defensible Value Proposition & Brand Positioning',
          competitiveAdvantage: `Clear customer-recognized value differentiation${modelContext} reducing price resistance`,
          existingCapability: 'Articulated unique selling proposition and pricing power',
        };
      }
      if (highestQ === 'STR02' && hScore >= 60) {
        return {
          coreStrength: 'Customer-Centric Feedback & Product Iteration',
          competitiveAdvantage: 'Agile service refinement driven by continuous customer insight loops',
          existingCapability: 'Active feedback collection channels directly shaping product offerings',
        };
      }
      if (highestQ === 'STR03' && hScore >= 60) {
        return {
          coreStrength: 'Documented Multi-Year Growth Expansion Roadmap',
          competitiveAdvantage: 'Forward-looking strategic focus backed by defined expansion steps',
          existingCapability: 'Clear 3-year growth targets for target customer segments',
        };
      }
      if (score >= 80) {
        return {
          coreStrength: 'Defensible Brand Positioning & Pricing Moat',
          competitiveAdvantage: 'Recognized market leader with strong pricing power and customer lock-in',
          existingCapability: 'Validated 3-year growth roadmap and continuous customer feedback loops',
        };
      } else if (score >= 60) {
        return {
          coreStrength: 'Differentiated Service Proposition',
          competitiveAdvantage: 'Solid reputation in core niche with repeat client patronage',
          existingCapability: 'Basic market positioning and customer feedback tracking',
        };
      } else {
        return {
          coreStrength: 'Agile Niche Flexibility',
          competitiveAdvantage: 'Ability to pivot service offerings quickly to meet immediate client demands',
          existingCapability: 'Close direct relationships with primary customer accounts',
        };
      }

    case PillarId.SALES:
      if (highestQ === 'SLS01' && hScore >= 60) {
        return {
          coreStrength: 'Predictable Multi-Channel Inquiry Flow',
          competitiveAdvantage: `Consistent inbound lead generation engine${modelContext} mitigating pipeline dry-spells`,
          existingCapability: 'Multiple active lead channels producing steady customer inquiries',
        };
      }
      if (highestQ === 'SLS02' && hScore >= 60) {
        return {
          coreStrength: 'Standardized CRM Pipeline & Stage Discipline',
          competitiveAdvantage: 'Systematic deal tracking minimizing lead drop-off from inquiry to close',
          existingCapability: 'Mandatory CRM deal tracking and structured follow-up routines',
        };
      }
      if (highestQ === 'SLS03' && hScore >= 60) {
        return {
          coreStrength: 'High Sales Unit Economics & Profitability',
          competitiveAdvantage: 'Strong customer lifetime value comfortably exceeding acquisition cost',
          existingCapability: 'Disciplined pricing controls preventing deal margin erosion',
        };
      }
      if (score >= 80) {
        return {
          coreStrength: 'Predictable Multi-Channel Acquisition Engine',
          competitiveAdvantage: 'Scalable sales pipeline with elite unit economics and high conversion',
          existingCapability: 'Enforced CRM pipeline, automated follow-up sequences, and sales playbooks',
        };
      } else if (score >= 60) {
        return {
          coreStrength: 'Systematic Lead Conversion Tracking',
          competitiveAdvantage: 'Consistent lead generation channels with standardized follow-up SLAs',
          existingCapability: 'Active CRM usage and tracked customer acquisition workflows',
        };
      } else {
        return {
          coreStrength: 'Organic Referral Goodwill',
          competitiveAdvantage: 'High client trust driving organic word-of-mouth recommendations',
          existingCapability: 'Direct founder selling and strong personal deal closing ability',
        };
      }

    case PillarId.OPERATIONS:
      if (highestQ === 'OPS01' && hScore >= 60) {
        return {
          coreStrength: 'Standardized SOP Library & Process Documentation',
          competitiveAdvantage: `Repeatable operational quality${modelContext} independent of individual staff memory`,
          existingCapability: 'Centralized digital SOP playbooks and operational checklists',
        };
      }
      if (highestQ === 'OPS02' && hScore >= 60) {
        return {
          coreStrength: 'Proactive SLA Tracking & Defect Prevention',
          competitiveAdvantage: 'Near-zero execution errors with real-time delivery performance monitoring',
          existingCapability: 'Active delivery tracking with clear quality control checkpoints',
        };
      }
      if (highestQ === 'OPS03' && hScore >= 60) {
        return {
          coreStrength: 'Elastic Capacity & Operational Scalability',
          competitiveAdvantage: 'Ability to absorb 2x-3x demand surges without breaking delivery workflows',
          existingCapability: 'Scalable operational systems handling volume spikes efficiently',
        };
      }
      if (score >= 80) {
        return {
          coreStrength: 'Lean Digital SOP & Capacity Scalability',
          competitiveAdvantage: 'High operational elasticity handling 3x volume spikes with near-zero defects',
          existingCapability: 'Centralized video/digital SOP library and automated SLA monitoring',
        };
      } else if (score >= 60) {
        return {
          coreStrength: 'Standardized Delivery Workflows',
          competitiveAdvantage: 'Consistent service quality with documented operational checklists',
          existingCapability: 'Established quality control checkpoints and order tracking',
        };
      } else {
        return {
          coreStrength: 'Flexible Hands-on Execution',
          competitiveAdvantage: 'High team dedication and willing extra effort to meet delivery deadlines',
          existingCapability: 'Deep tacit process knowledge among key long-term staff',
        };
      }

    case PillarId.FINANCE:
      if (highestQ === 'FIN01' && hScore >= 60) {
        return {
          coreStrength: 'Punctual Monthly P&L & Cash Flow Reporting',
          competitiveAdvantage: `Accurate financial visibility${modelContext} enabling proactive capital management`,
          existingCapability: 'Cloud accounting suite delivering monthly P&L statements within 5 days',
        };
      }
      if (highestQ === 'FIN02' && hScore >= 60) {
        return {
          coreStrength: 'Disciplined AR Collections & Cash Reserves',
          competitiveAdvantage: 'Predictable working capital cycle with low Days Sales Outstanding (DSO)',
          existingCapability: 'Automated payment reminder workflows and strict credit terms',
        };
      }
      if (highestQ === 'FIN03' && hScore >= 60) {
        return {
          coreStrength: 'Unit SKU & Customer Margin Control',
          competitiveAdvantage: 'Granular profitability awareness ensuring every contract yields positive gross margin',
          existingCapability: 'SKU/client margin tracking and value-based pricing enforcement',
        };
      }
      if (score >= 80) {
        return {
          coreStrength: 'Real-time Financial Dashboards & Unit Margin Discipline',
          competitiveAdvantage: 'Strong positive cash flow buffer and optimized working capital cycle',
          existingCapability: 'Fast 5-day month-end closure, 13-week rolling cash forecasts, and SKU margin tracking',
        };
      } else if (score >= 60) {
        return {
          coreStrength: 'Disciplined Accounts Receivable & Monthly Reporting',
          competitiveAdvantage: 'Predictable DSO under 30 days with disciplined credit enforcement',
          existingCapability: 'Cloud accounting usage and regular monthly P&L generation',
        };
      } else {
        return {
          coreStrength: 'Entrepreneurial Cash Consciousness',
          competitiveAdvantage: 'Prudent cost management and low fixed overhead burn',
          existingCapability: 'Direct founder control over all bank payouts and major expenditures',
        };
      }

    case PillarId.HUMAN_RESOURCES:
      if (highestQ === 'HR01' && hScore >= 60) {
        return {
          coreStrength: 'Clear Role Scorecards & KPI Accountability',
          competitiveAdvantage: 'Individual performance tied directly to measurable role goals',
          existingCapability: 'Written job descriptions with 3-5 tracked KPI scorecards per role',
        };
      }
      if (highestQ === 'HR02' && hScore >= 60) {
        return {
          coreStrength: 'Accelerated Onboarding & Training Framework',
          competitiveAdvantage: 'Rapid time-to-productivity for new hires under 30 days',
          existingCapability: 'Structured employee onboarding modules and assigned mentor support',
        };
      }
      if (highestQ === 'HR03' && hScore >= 60) {
        return {
          coreStrength: 'High Team Morale & Key Staff Retention',
          competitiveAdvantage: 'Strong workplace culture minimizing voluntary talent attrition',
          existingCapability: 'Transparent communication culture and high team satisfaction',
        };
      }
      if (score >= 80) {
        return {
          coreStrength: 'High-Accountability Meritocracy & Talent Academy',
          competitiveAdvantage: 'Top-tier employee retention, high eNPS, and fast 21-day onboarding ramp',
          existingCapability: 'Transparent KPI scorecards, clear career pathways, and structured onboarding',
        };
      } else if (score >= 60) {
        return {
          coreStrength: 'Structured Role Descriptions & Performance Feedback',
          competitiveAdvantage: 'Clear individual accountability connected to quarterly goals',
          existingCapability: 'Written job descriptions, KPI scorecards, and basic onboarding guides',
        };
      } else {
        return {
          coreStrength: 'Tight-knit Core Team Loyalty',
          competitiveAdvantage: 'High personal loyalty to founder and flexible cross-functional help',
          existingCapability: 'Direct daily personal communication and accessible leadership',
        };
      }

    case PillarId.TECHNOLOGY:
      if (highestQ === 'TEC01' && hScore >= 60) {
        return {
          coreStrength: 'Connected Software Ecosystem & API Integration',
          competitiveAdvantage: 'Automated data sync between core systems eliminating duplicate data entry',
          existingCapability: 'API/webhook integrations connecting CRM, Billing, and Operations',
        };
      }
      if (highestQ === 'TEC02' && hScore >= 60) {
        return {
          coreStrength: 'High Administrative Workflow Automation Density',
          competitiveAdvantage: 'Substantial time savings from automated customer notifications and billing',
          existingCapability: 'Automated invoice dispatch, payment alerts, and routine status updates',
        };
      }
      if (highestQ === 'TEC03' && hScore >= 60) {
        return {
          coreStrength: 'Secure Cloud Infrastructure & Automated Data Protection',
          competitiveAdvantage: 'High business resilience with enforced 2FA access and daily cloud backups',
          existingCapability: 'Protected cloud environment with role-based access permissions',
        };
      }
      if (score >= 80) {
        return {
          coreStrength: 'Unified Digital Stack & AI Workflow Automation',
          competitiveAdvantage: 'Real-time API integrations eliminating duplicate data entry and manual overhead',
          existingCapability: 'Mandatory 2FA, automated cloud backups, and AI-assisted workflow triage',
        };
      } else if (score >= 60) {
        return {
          coreStrength: 'Connected Cloud Software & Administrative Automation',
          competitiveAdvantage: 'Automated transactional messaging and centralized cloud file repository',
          existingCapability: 'Integrated accounting and CRM tools with basic automated alerts',
        };
      } else {
        return {
          coreStrength: 'Basic Digital Infrastructure Adoption',
          competitiveAdvantage: 'Openness to new digital tools and willingness to modernize processes',
          existingCapability: 'Standard email, messaging, and cloud spreadsheet usage',
        };
      }
  }
}
