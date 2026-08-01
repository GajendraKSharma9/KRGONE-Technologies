/**
 * Business Engine - Opportunity Analysis Engine
 * Identifies high-value growth, cost savings, automation, and process opportunities per pillar.
 */

import { PillarId } from '../assessment-engine/types';
import { OpportunityInsight, DiagnosticContext } from './interfaces';
import { getPillarQuestionBreakdown } from './rules';

export function getOpportunityAnalysisForPillar(
  pillarId: PillarId,
  score: number,
  context?: DiagnosticContext
): OpportunityInsight {
  const breakdown = getPillarQuestionBreakdown(pillarId, score, context);
  const lowestQ = breakdown.lowestQId;
  const lScore = breakdown.lowestQScore;
  const highestQ = breakdown.highestQId;
  const hScore = breakdown.highestQScore;
  const bModel = context?.profile?.business?.businessModel || '';

  switch (pillarId) {
    case PillarId.LEADERSHIP:
      if (lowestQ === 'LDR01' && lScore < 70) {
        return {
          opportunityType: 'Process Improvement Opportunity',
          title: 'Founder Time Reclamation & Delegation Playbook',
          description: 'Introduce managerial approval limits and delegation playbooks to free 15+ hours/week of founder bandwidth.',
          potentialImpact: 'Immediate 40% increase in strategic decision execution velocity.',
        };
      }
      if (score < 60) {
        return {
          opportunityType: 'Process Improvement Opportunity',
          title: 'Founder Time Reclamation & Management Autonomy',
          description: 'Reclaim 20+ hours/week of founder operational capacity by introducing manager approval limits and OKRs.',
          potentialImpact: 'Immediate 40% increase in executive decision execution speed.',
        };
      } else {
        return {
          opportunityType: 'Market Expansion Opportunity',
          title: 'Institutional Advisory & Enterprise Governance Valuation',
          description: 'Leverage external advisory governance to position business for institutional funding or strategic M&A valuation multiples.',
          potentialImpact: '25% - 40% increase in enterprise valuation multiple.',
        };
      }

    case PillarId.STRATEGY:
      if (lowestQ === 'STR01' && lScore < 70) {
        return {
          opportunityType: 'Revenue Opportunity',
          title: 'Differentiated Value Positioning & Price Premium',
          description: 'Package unique service bundles and articulate value moats to eliminate margin-eroding price discounting.',
          potentialImpact: '15% - 25% expansion in Average Contract Value (ACV) and gross margin.',
        };
      }
      if (score < 60) {
        return {
          opportunityType: 'Revenue Opportunity',
          title: 'High-Ticket Niche Re-positioning & Price Premium',
          description: 'Package specialized service bundles and eliminate price discounting through clear value positioning.',
          potentialImpact: '15% - 25% expansion in Average Contract Value (ACV) and gross margin.',
        };
      } else {
        return {
          opportunityType: 'Market Expansion Opportunity',
          title: 'Adjacent Vertical Expansion & Wallet Share Capture',
          description: 'Deploy new cross-sell service lines to existing customer base to maximize lifetime value without extra acquisition cost.',
          potentialImpact: '30% increase in customer lifetime value (LTV).',
        };
      }

    case PillarId.SALES:
      if (lowestQ === 'SLS01' && lScore < 70) {
        return {
          opportunityType: 'Revenue Opportunity',
          title: 'Predictable Multi-Channel Acquisition Engine',
          description: 'Diversify away from referral dependence by launching predictable digital outbound lead channels.',
          potentialImpact: '2x - 3x increase in monthly qualified client inquiries.',
        };
      }
      if (lowestQ === 'SLS02' && lScore < 70) {
        return {
          opportunityType: 'Revenue Opportunity',
          title: 'CRM Pipeline Automation & Deal Velocity',
          description: 'Deploy mandatory CRM deal tracking and automated follow-up sequences to eliminate deal drop-offs.',
          potentialImpact: '30% improvement in deal lead-to-close conversion rates.',
        };
      }
      if (score < 60) {
        return {
          opportunityType: 'Revenue Opportunity',
          title: 'Predictable CRM Lead Engine & Conversion Velocity',
          description: 'Build systematic multi-channel lead acquisition with strict follow-up SLAs to eliminate pipeline deal leakage.',
          potentialImpact: '2x - 3x increase in monthly qualified pipeline inquiries.',
        };
      } else {
        return {
          opportunityType: 'Market Expansion Opportunity',
          title: 'Enterprise ABM & Partner Distribution Ecosystem',
          description: 'Scale account-based marketing for high-value clients and build strategic channel partner co-selling.',
          potentialImpact: '50% revenue growth driven by partner distribution channels.',
        };
      }

    case PillarId.OPERATIONS:
      if (lowestQ === 'OPS01' && lScore < 70) {
        return {
          opportunityType: 'Cost Saving Opportunity',
          title: 'Digital SOP Library & Rework Elimination',
          description: 'Standardize core execution processes into digital playbooks with video walkthroughs to eliminate quality defects.',
          potentialImpact: '50% reduction in delivery execution errors and 3x faster team onboarding.',
        };
      }
      if (score < 60) {
        return {
          opportunityType: 'Cost Saving Opportunity',
          title: 'Digital SOP Library & Rework Elimination',
          description: 'Standardize top 10 core execution processes into digital playbooks with video walkthroughs to eliminate quality defects.',
          potentialImpact: '50% reduction in delivery execution errors and 3x faster team onboarding.',
        };
      } else {
        return {
          opportunityType: 'Automation Opportunity',
          title: 'Predictable Capacity Scaling & Margin Expansion',
          description: 'Automate cross-departmental handoffs to handle 3x order volume without linear headcount growth.',
          potentialImpact: 'Expanding operating profit margins as revenue scales.',
        };
      }

    case PillarId.FINANCE:
      if (lowestQ === 'FIN02' && lScore < 70) {
        return {
          opportunityType: 'Cost Saving Opportunity',
          title: 'Working Capital Recovery & DSO Reduction',
          description: 'Enforce strict credit limits, automated payment reminders, and structured terms to reduce DSO under 30 days.',
          potentialImpact: 'Unlocks 15% - 25% of annual revenue trapped in overdue receivables.',
        };
      }
      if (score < 60) {
        return {
          opportunityType: 'Cost Saving Opportunity',
          title: 'Working Capital Recovery & DSO Reduction',
          description: 'Enforce strict credit limits, automated payment reminders, and structured terms to reduce DSO to under 30 days.',
          potentialImpact: 'Unlocks 15% - 25% of annual revenue trapped in overdue receivables.',
        };
      } else {
        return {
          opportunityType: 'Revenue Opportunity',
          title: 'Unit-Level Margin Maximization & Value Pricing',
          description: 'Identify and renegotiate low-margin customer contracts while optimizing treasury yield on excess cash.',
          potentialImpact: '5% - 8% direct boost in overall company net profit margin.',
        };
      }

    case PillarId.HUMAN_RESOURCES:
      if (lowestQ === 'HR01' && lScore < 70) {
        return {
          opportunityType: 'Process Improvement Opportunity',
          title: 'Role-Based KPI Scorecards & Measurable Goals',
          description: 'Implement written job descriptions and 3-5 measurable KPIs per role to align employee output with business goals.',
          potentialImpact: '25% increase in individual employee productivity and clear accountability.',
        };
      }
      if (score < 60) {
        return {
          opportunityType: 'Process Improvement Opportunity',
          title: 'Role-Based KPI Scorecards & Fast Onboarding',
          description: 'Implement 3-5 measurable KPIs per role and structured 30-day onboarding to accelerate employee productivity.',
          potentialImpact: 'Reduces new hire ramp-up time from 60+ days to < 21 days.',
        };
      } else {
        return {
          opportunityType: 'Process Improvement Opportunity',
          title: 'Employer Brand Magnet & Talent Retention',
          description: 'Build internal Leadership Academy and high-performance incentive structures to attract elite industry talent.',
          potentialImpact: 'Keeps voluntary key-talent attrition under 5% annually.',
        };
      }

    case PillarId.TECHNOLOGY:
      if (lowestQ === 'TEC01' && lScore < 70) {
        return {
          opportunityType: 'Automation Opportunity',
          title: 'Software Integration & Spreadsheet Elimination',
          description: 'Connect CRM, Billing, and Operations software via webhooks/Zapier to eliminate manual duplicate data entry.',
          potentialImpact: 'Saves 10+ hours per week per employee in administrative labor.',
        };
      }
      if (score < 60) {
        return {
          opportunityType: 'Automation Opportunity',
          title: 'Software Integration & Spreadsheet Elimination',
          description: 'Connect CRM, Billing, and Operations software via APIs/Zapier to eliminate manual duplicate data entry.',
          potentialImpact: 'Saves 10+ hours per week per employee in administrative labor.',
        };
      } else {
        return {
          opportunityType: 'Automation Opportunity',
          title: 'AI Copilot Deployment & Autonomous Operations',
          description: 'Deploy AI agents for customer support triage, automated reporting, and predictive operational insights.',
          potentialImpact: '30% boost in team operational productivity with reduced overhead.',
        };
      }
  }
}
