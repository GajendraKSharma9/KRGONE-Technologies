/**
 * Business Engine - Gap Analysis Engine
 * Evaluates missing systems, weak processes, and organizational gaps per pillar.
 */

import { PillarId } from '../assessment-engine/types';
import { GapInsight, DiagnosticContext } from './interfaces';
import { getPillarQuestionBreakdown } from './rules';

export function getGapAnalysisForPillar(
  pillarId: PillarId,
  score: number,
  context?: DiagnosticContext
): GapInsight {
  const breakdown = getPillarQuestionBreakdown(pillarId, score, context);
  const lowestQ = breakdown.lowestQId;
  const lScore = breakdown.lowestQScore;

  const getSeverity = (s: number): 'Critical' | 'High' | 'Moderate' | 'Low' => {
    if (s < 40) return 'Critical';
    if (s < 60) return 'High';
    if (s < 80) return 'Moderate';
    return 'Low';
  };

  const severity = getSeverity(lScore < score ? lScore : score);

  switch (pillarId) {
    case PillarId.LEADERSHIP:
      if (lowestQ === 'LDR01' && lScore < 70) {
        return {
          missingSystems: 'Absence of written delegation playbooks and manager approval limits',
          weakProcesses: 'Centralized decision bottleneck requiring founder intervention on daily approvals',
          organizationalGap: 'Operational paralysis whenever the business owner is away from daily operations',
          severity,
        };
      }
      if (lowestQ === 'LDR02' && lScore < 70) {
        return {
          missingSystems: 'Lack of documented annual goals and quarterly departmental OKRs',
          weakProcesses: 'Informal goal setting relying on verbal instructions without shared performance targets',
          organizationalGap: 'Team members lack strategic alignment and operate without clear success metrics',
          severity,
        };
      }
      if (lowestQ === 'LDR03' && lScore < 70) {
        return {
          missingSystems: 'Absence of structured monthly management reviews and governance framework',
          weakProcesses: 'Ad-hoc reactive decision making without formal agendas or minutes',
          organizationalGap: 'Lack of executive oversight and risk management discipline',
          severity,
        };
      }
      if (score < 50) {
        return {
          missingSystems: 'Absence of written delegation playbooks and formal approval limits',
          weakProcesses: 'Ad-hoc emergency decision making with no documented annual goals',
          organizationalGap: 'Severe founder bottleneck where all daily approvals stall in owner absence',
          severity: 'Critical',
        };
      } else if (score < 70) {
        return {
          missingSystems: 'Lack of quarterly OKR tracking framework and formal governance cadence',
          weakProcesses: 'Informal goal setting without shared departmental targets or review minutes',
          organizationalGap: 'Middle management lacks formal decision autonomy and structured accountability',
          severity: 'High',
        };
      } else if (score < 85) {
        return {
          missingSystems: 'Absence of external advisory board and institutional risk oversight',
          weakProcesses: 'Inconsistent multi-year strategic reviews and risk audits',
          organizationalGap: 'Key-person dependency at the executive level without clear succession pathways',
          severity: 'Moderate',
        };
      } else {
        return {
          missingSystems: 'Continuous multi-entity governance framework alignment',
          weakProcesses: 'Long-term succession calibration and executive incentive fine-tuning',
          organizationalGap: 'Maintaining alignment across rapidly expanding business units',
          severity: 'Low',
        };
      }

    case PillarId.STRATEGY:
      if (lowestQ === 'STR01' && lScore < 70) {
        return {
          missingSystems: 'Lack of articulated value proposition and competitive positioning framework',
          weakProcesses: 'Competing primarily on low price without clear service differentiation',
          organizationalGap: 'Vulnerability to price-cutting competitors due to weak brand positioning moat',
          severity,
        };
      }
      if (lowestQ === 'STR02' && lScore < 70) {
        return {
          missingSystems: 'Absence of systematic customer feedback collection loops and NPS tracking',
          weakProcesses: 'Unrecorded verbal client feedback failing to inform product/service improvements',
          organizationalGap: 'Product and service development disconnected from evolving customer demands',
          severity,
        };
      }
      if (lowestQ === 'STR03' && lScore < 70) {
        return {
          missingSystems: 'Lack of a documented 3-year growth expansion roadmap',
          weakProcesses: 'Short-term focus restricted to month-to-month survival operations',
          organizationalGap: 'Inability to capture new market segments due to missing long-term strategy',
          severity,
        };
      }
      if (score < 50) {
        return {
          missingSystems: 'No formal positioning framework or structured customer feedback mechanism',
          weakProcesses: 'Competing purely on price with zero differentiation or value bundling',
          organizationalGap: 'Focus restricted to short-term monthly survival without a 3-year vision',
          severity: 'Critical',
        };
      } else if (score < 70) {
        return {
          missingSystems: 'Unstructured customer insight loops and ad-hoc market expansion planning',
          weakProcesses: 'Inconsistent value proposition communication when sales reps handle objections',
          organizationalGap: 'Team lacks clear understanding of core customer target profiles',
          severity: 'High',
        };
      } else if (score < 85) {
        return {
          missingSystems: 'Systematic NPS/CSAT tracking and competitive intelligence reporting',
          weakProcesses: 'Under-leveraged cross-sell product line expansion to existing client base',
          organizationalGap: 'R&D initiatives disconnected from core sales distribution',
          severity: 'Moderate',
        };
      } else {
        return {
          missingSystems: 'Formal M&A radar and disruptive innovation incubation lab',
          weakProcesses: 'Risk of market stagnation without continuous category reinvention',
          organizationalGap: 'Balancing core product optimization with speculative innovation',
          severity: 'Low',
        };
      }

    case PillarId.SALES:
      if (lowestQ === 'SLS01' && lScore < 70) {
        return {
          missingSystems: 'Absence of a predictable multi-channel lead acquisition engine',
          weakProcesses: 'Total reliance on unpredictable organic referrals and word-of-mouth',
          organizationalGap: 'Severe revenue volatility caused by inconsistent monthly inquiry flow',
          severity,
        };
      }
      if (lowestQ === 'SLS02' && lScore < 70) {
        return {
          missingSystems: 'Lack of standardized CRM pipeline and enforced follow-up playbooks',
          weakProcesses: 'Tracking leads on notebooks or spreadsheets with irregular follow-up',
          organizationalGap: 'Deal leakage and inconsistent conversion rates across sales reps',
          severity,
        };
      }
      if (lowestQ === 'SLS03' && lScore < 70) {
        return {
          missingSystems: 'Absence of unit economics costing matrix and LTV:CAC tracking framework',
          weakProcesses: 'Excessive sales discounting eroding gross profit margins',
          organizationalGap: 'High sales transaction volume yielding sub-optimal net profitability',
          severity,
        };
      }
      if (score < 50) {
        return {
          missingSystems: 'Absence of standardized CRM pipeline and automated outbound lead acquisition',
          weakProcesses: 'Irregular lead follow-up on notebooks resulting in severe pipeline deal leakage',
          organizationalGap: 'Total reliance on owner personal network for new customer acquisitions',
          severity: 'Critical',
        };
      } else if (score < 70) {
        return {
          missingSystems: 'Lack of automated lead nurture sequences and enforced sales SLAs',
          weakProcesses: 'Manual quotation preparation causing slow response times and lead decay',
          organizationalGap: 'Inconsistent sales rep conversion rates due to unstandardized pitches',
          severity: 'High',
        };
      } else if (score < 85) {
        return {
          missingSystems: 'Advanced sales enablement platform and automated demo/proposal engines',
          weakProcesses: 'Sub-optimal LTV:CAC ratios due to high manual sales rep involvement',
          organizationalGap: 'Account expansion and upsell scripts not systematically deployed',
          severity: 'Moderate',
        };
      } else {
        return {
          missingSystems: 'Enterprise ABM automation and partner channel distribution portals',
          weakProcesses: 'Core acquisition channel saturation requiring new market entry',
          organizationalGap: 'Scaling enterprise sales talent across international regions',
          severity: 'Low',
        };
      }

    case PillarId.OPERATIONS:
      if (lowestQ === 'OPS01' && lScore < 70) {
        return {
          missingSystems: 'Zero documented SOP playbooks or digital task management checklists',
          weakProcesses: 'Reliance on tribal process knowledge stored only in key staff memory',
          organizationalGap: 'High execution error rates and slow new employee operational ramp-up',
          severity,
        };
      }
      if (lowestQ === 'OPS02' && lScore < 70) {
        return {
          missingSystems: 'Lack of centralized delivery SLA tracking dashboard and quality checkpoints',
          weakProcesses: 'Reactive error detection only after customer complaints occur',
          organizationalGap: 'Frequent delivery delays and rush jobs during peak operational demand',
          severity,
        };
      }
      if (lowestQ === 'OPS03' && lScore < 70) {
        return {
          missingSystems: 'Absence of capacity planning models and scalable workflow infrastructure',
          weakProcesses: 'Linear cost scaling where volume growth requires equal manual headcount',
          organizationalGap: 'Risk of delivery breakdown if customer demand doubles',
          severity,
        };
      }
      if (score < 50) {
        return {
          missingSystems: 'Zero documented SOP playbooks or digital task management checklists',
          weakProcesses: 'Tribal process knowledge causing high error rates and delivery delays',
          organizationalGap: 'Onboarding new operational staff takes months due to lack of training manuals',
          severity: 'Critical',
        };
      } else if (score < 70) {
        return {
          missingSystems: 'Absence of centralized SLA tracking dashboard and capacity planning models',
          weakProcesses: 'Operational bottlenecks cause rush jobs and quality inconsistency during peak demand',
          organizationalGap: 'Lack of dedicated process improvement owners within operational teams',
          severity: 'High',
        };
      } else if (score < 85) {
        return {
          missingSystems: 'Automated cross-departmental API handoffs (Sales -> Ops -> Billing)',
          weakProcesses: 'Linear operational cost scaling where revenue growth requires proportional headcount',
          organizationalGap: 'Siloed communication between sales commitments and operational capacity',
          severity: 'Moderate',
        };
      } else {
        return {
          missingSystems: 'Predictive AI supply chain optimization and real-time IoT defect monitoring',
          weakProcesses: 'Marginal efficiency gains diminishing without global process re-engineering',
          organizationalGap: 'Maintaining lean operational culture during rapid geographic expansion',
          severity: 'Low',
        };
      }

    case PillarId.FINANCE:
      if (lowestQ === 'FIN01' && lScore < 70) {
        return {
          missingSystems: 'Lack of cloud accounting software and 13-week rolling cash flow forecasts',
          weakProcesses: 'Tax-only annual accounting with zero monthly P&L visibility',
          organizationalGap: 'Unseen cash burn and delayed financial decision making',
          severity,
        };
      }
      if (lowestQ === 'FIN02' && lScore < 70) {
        return {
          missingSystems: 'Absence of automated Accounts Receivable reminder systems and credit terms',
          weakProcesses: 'Overdue customer receivables exceeding 60+ days without credit enforcement',
          organizationalGap: 'Severe working capital lock-up choking operational cash flow',
          severity,
        };
      }
      if (lowestQ === 'FIN03' && lScore < 70) {
        return {
          missingSystems: 'Lack of unit-level SKU and customer contract profitability costing matrix',
          weakProcesses: 'Inability to track exact profit margins across individual services or clients',
          organizationalGap: 'Risk of carrying low-margin or loss-making customer accounts unknowingly',
          severity,
        };
      }
      if (score < 50) {
        return {
          missingSystems: 'No cloud accounting software or rolling 13-week cash flow forecasting engine',
          weakProcesses: 'Annual tax-only accounting with zero monthly P&L or cash burn visibility',
          organizationalGap: 'Severe liquidity risk due to overdue receivables and unmonitored vendor payables',
          severity: 'Critical',
        };
      } else if (score < 70) {
        return {
          missingSystems: 'Automated payment reminder engines and structured credit control policies',
          weakProcesses: 'Delayed Accounts Receivable collection exceeding 60+ days choking working capital',
          organizationalGap: 'Lack of clear financial approval authority matrix for departmental spend',
          severity: 'High',
        };
      } else if (score < 85) {
        return {
          missingSystems: 'Unit-level SKU/Client cost accounting and dynamic margin analytics',
          weakProcesses: 'Carrying low-margin contracts or unprofitable client accounts unknowingly',
          organizationalGap: 'Finance team operates reactively as bookkeepers rather than strategic partners',
          severity: 'Moderate',
        };
      } else {
        return {
          missingSystems: 'Automated treasury yield optimization and M&A capital deployment framework',
          weakProcesses: 'Under-utilized cash reserves sitting in low-yield operational accounts',
          organizationalGap: 'Optimizing global tax efficiency across multiple operating entities',
          severity: 'Low',
        };
      }

    case PillarId.HUMAN_RESOURCES:
      if (lowestQ === 'HR01' && lScore < 70) {
        return {
          missingSystems: 'Absence of written job descriptions and 3-5 measurable KPI scorecards per role',
          weakProcesses: 'Daily verbal task assignments and subjective employee evaluations',
          organizationalGap: 'Role ambiguity, employee frustration, and low individual accountability',
          severity,
        };
      }
      if (lowestQ === 'HR02' && lScore < 70) {
        return {
          missingSystems: 'Lack of structured 30-60-90 day employee onboarding playbooks and training modules',
          weakProcesses: 'Informal sink-or-swim employee onboarding process',
          organizationalGap: 'Slow employee ramp-up taking 60+ days to reach baseline operational productivity',
          severity,
        };
      }
      if (lowestQ === 'HR03' && lScore < 70) {
        return {
          missingSystems: 'Lack of transparent communication cadence and employee sentiment tracking',
          weakProcesses: 'Unaddressed workplace friction and unmonitored team morale',
          organizationalGap: 'High voluntary employee turnover and key talent departure risk',
          severity,
        };
      }
      if (score < 50) {
        return {
          missingSystems: 'Absence of written job descriptions and 3-5 measurable KPI scorecards per role',
          weakProcesses: 'Reactive daily task assignments leading to role ambiguity and low productivity',
          organizationalGap: 'High staff turnover and employee frustration due to subjective evaluations',
          severity: 'Critical',
        };
      } else if (score < 70) {
        return {
          missingSystems: 'Lack of structured 30-60-90 day onboarding playbooks and training modules',
          weakProcesses: 'Slow employee ramp-up taking 60+ days to reach baseline operational efficiency',
          organizationalGap: 'Inconsistent manager feedback and performance review execution',
          severity: 'High',
        };
      } else if (score < 85) {
        return {
          missingSystems: 'Formal career progression ladders and key-person succession programs',
          weakProcesses: 'Single-point-of-failure risk where departure of key talent disrupts operations',
          organizationalGap: 'Talent attraction relies on active recruitment rather than inbound employer brand',
          severity: 'Moderate',
        };
      } else {
        return {
          missingSystems: 'Internal Leadership Academy and enterprise eNPS sentiment tracking',
          weakProcesses: 'Scaling company culture across remote or geographically distributed teams',
          organizationalGap: 'Retaining executive talent against aggressive market recruitment offers',
          severity: 'Low',
        };
      }

    case PillarId.TECHNOLOGY:
      if (lowestQ === 'TEC01' && lScore < 70) {
        return {
          missingSystems: 'Lack of API integration webhooks between CRM, Billing, and Operations software',
          weakProcesses: 'Manual re-typing of customer and transaction data across spreadsheets',
          organizationalGap: 'High human error rate and administrative data silos between departments',
          severity,
        };
      }
      if (lowestQ === 'TEC02' && lScore < 70) {
        return {
          missingSystems: 'Absence of workflow automation triggers for invoicing and notifications',
          weakProcesses: 'Manual preparation and dispatch of routine customer communications',
          organizationalGap: 'Hundreds of wasted staff hours on routine administrative tasks',
          severity,
        };
      }
      if (lowestQ === 'TEC03' && lScore < 70) {
        return {
          missingSystems: 'Lack of mandatory 2FA, role-based data access permissions, and cloud backups',
          weakProcesses: 'Shared passwords and unencrypted storage of sensitive business files',
          organizationalGap: 'Catastrophic data loss risk and security vulnerability exposure',
          severity,
        };
      }
      if (score < 50) {
        return {
          missingSystems: 'Disconnected software tools forcing manual re-typing into spreadsheets',
          weakProcesses: 'Manual invoicing, payment follow-ups, and spreadsheet data entry chaos',
          organizationalGap: 'High security risk due to shared passwords and absence of automated cloud backups',
          severity: 'Critical',
        };
      } else if (score < 70) {
        return {
          missingSystems: 'Lack of API integration webhooks between CRM, Billing, and Operations tools',
          weakProcesses: 'Routine customer communications and payment notifications handled manually',
          organizationalGap: 'Inconsistent software adoption across team members due to lack of training',
          severity: 'High',
        };
      } else if (score < 85) {
        return {
          missingSystems: 'Enforced 2FA security protocols, role-based data access, and disaster recovery plans',
          weakProcesses: 'Data isolated in departmental silos requiring periodic manual exports',
          organizationalGap: 'Lack of dedicated internal IT governance and security compliance owner',
          severity: 'Moderate',
        };
      } else {
        return {
          missingSystems: 'Autonomous AI agents and predictive business intelligence copilots',
          weakProcesses: 'Legacy API endpoints requiring periodic refactoring and optimization',
          organizationalGap: 'Keeping technical team aligned with bleeding-edge AI tool developments',
          severity: 'Low',
        };
      }
  }
}
