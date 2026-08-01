/**
 * Business Engine - Business Rule Database (Consulting Knowledge Base)
 * Master structured knowledge base containing consulting rules across all 7 Growth Pillars & 4 Score Bands.
 */

import { PillarId, MaturityBand } from '../assessment-engine/types';
import { BusinessRuleEntry, FullKnowledgeBase } from './types';

export const KNOWLEDGE_BASE_RULES: FullKnowledgeBase = {
  // =========================================================================
  // 1. LEADERSHIP & GOVERNANCE (LDR)
  // =========================================================================
  [PillarId.LEADERSHIP]: {
    '85-100': {
      id: 'LDR_85-100',
      pillarId: PillarId.LEADERSHIP,
      pillarName: 'Leadership & Governance',
      scoreBand: '85-100',
      scoreRange: { min: 85, max: 100 },
      maturityBand: MaturityBand.LEADER,
      recommendationCode: 'LDR-01',

      coreStrength: 'Autonomous Leadership & Institutional Governance Standards',
      competitiveAdvantage: 'High decision-making execution velocity with zero founder operational bottlenecking.',
      typicalBusinessSituation: 'The business operates with a self-sustaining management board, clear delegation limits, and formal advisory oversight. The founder focuses exclusively on strategic vision and enterprise value creation.',

      gaps: {
        primaryGap: 'Maintaining strategic alignment across rapidly expanding business units.',
        secondaryGaps: ['C-suite retention risk', 'Legacy succession planning calibration'],
        missingSystems: 'Multi-entity corporate governance framework alignment.',
        weakProcesses: 'Long-term succession planning calibration and executive incentive fine-tuning.',
        organizationalGap: 'Cross-entity leadership alignment and executive talent retention.',
        severity: 'Low',
      },

      risk: {
        riskCategory: 'Executive Succession Vulnerability',
        riskDescription: 'Potential strategic disruption if C-suite leaders depart without trained internal successors.',
        riskLevel: 'Low Risk',
        mitigationStrategy: 'Formalize executive succession pathways and long-term incentive plans (LTIP).',
      },

      opportunity: {
        opportunityType: 'Market Expansion Opportunity',
        title: 'Institutional Advisory & Enterprise Governance Valuation',
        description: 'Leverage external advisory governance to position the business for institutional funding or strategic M&A valuation multiples.',
        potentialImpact: '25% - 40% increase in enterprise valuation multiple.',
      },

      recommendation: {
        code: 'LDR-01',
        strategicRecommendation: 'Establish formal succession pathways and long-term executive incentive plans (LTIP).',
        targetKPI: '100% succession coverage for key executive roles.',
        expectedOutcome: 'Permanent enterprise longevity and seamless leadership transitions.',
        actionTimeframeDays: 180,
        urgency: 'Long-Term Strategic Refinement (Next 90–180 Days)',
      },
    },

    '70-84': {
      id: 'LDR_70-84',
      pillarId: PillarId.LEADERSHIP,
      pillarName: 'Leadership & Governance',
      scoreBand: '70-84',
      scoreRange: { min: 70, max: 84 },
      maturityBand: MaturityBand.ESTABLISHED,
      recommendationCode: 'LDR-02',

      coreStrength: 'Structured Management Delegation & Active Executive Oversight',
      competitiveAdvantage: 'Empowered department heads executing routine operations with consistent founder direction.',
      typicalBusinessSituation: 'Department managers handle day-to-day decisions, but strategic initiatives still rely heavily on founder validation. Goal alignment is functional but lacks external advisory governance.',

      gaps: {
        primaryGap: 'Absence of external advisory oversight for institutional risk and compliance management.',
        secondaryGaps: ['Quarterly OKRs not fully cascade-aligned', 'Managerial approval boundaries require tightening'],
        missingSystems: 'External advisory board and structured quarterly audit cadence.',
        weakProcesses: 'Inconsistent multi-year strategic reviews and formal board reporting.',
        organizationalGap: 'Middle management decision limits require formalization.',
        severity: 'Moderate',
      },

      risk: {
        riskCategory: 'Institutional Governance Deficit',
        riskDescription: 'Risk of unvetted strategic expansion and compliance blind spots without external board oversight.',
        riskLevel: 'Medium Risk',
        mitigationStrategy: 'Form a 3-member external advisory board for quarterly risk and compliance audits.',
      },

      opportunity: {
        opportunityType: 'Process Improvement Opportunity',
        title: 'Advisory Board Integration & Strategic Guidance',
        description: 'Form a lean 3-member external advisory board to challenge strategic assumptions and unlock enterprise growth.',
        potentialImpact: '20% acceleration in strategic initiative execution rate.',
      },

      recommendation: {
        code: 'LDR-02',
        strategicRecommendation: 'Form a 3-member external advisory board with quarterly governance meeting cadence.',
        targetKPI: 'Quarterly board meeting compliance & strategic risk audit execution.',
        expectedOutcome: 'Enhanced enterprise valuation multiple and long-term strategic resilience.',
        actionTimeframeDays: 90,
        urgency: 'Medium-Term Action Required (Next 60–90 Days)',
      },
    },

    '50-69': {
      id: 'LDR_50-69',
      pillarId: PillarId.LEADERSHIP,
      pillarName: 'Leadership & Governance',
      scoreBand: '50-69',
      scoreRange: { min: 50, max: 69 },
      maturityBand: MaturityBand.DEVELOPING,
      recommendationCode: 'LDR-03',

      coreStrength: 'Active Founder Engagement & Fast Tactical Execution',
      competitiveAdvantage: 'High personal commitment from founder with informal team coordination.',
      typicalBusinessSituation: 'The business relies on informal verbal agreements. The founder is heavily involved in daily decision approvals, resulting in periodic operational delays and team goal ambiguity.',

      gaps: {
        primaryGap: 'Lack of structured quarterly OKRs and formal manager approval limits.',
        secondaryGaps: ['Goal drift across departments', 'Unwritten operational decision rules'],
        missingSystems: 'Quarterly OKR tracking framework and formal governance cadence.',
        weakProcesses: 'Informal goal setting without shared departmental targets or review minutes.',
        organizationalGap: 'Middle management lacks formal decision autonomy and structured accountability.',
        severity: 'High',
      },

      risk: {
        riskCategory: 'Goal Drift & Executive Misalignment',
        riskDescription: 'Departmental friction and wasted capital due to lack of quarterly targets and performance reviews.',
        riskLevel: 'High Risk',
        mitigationStrategy: 'Deploy quarterly OKRs and establish mandatory monthly executive alignment meetings.',
      },

      opportunity: {
        opportunityType: 'Process Improvement Opportunity',
        title: 'Founder Time Reclamation & Management Autonomy',
        description: 'Reclaim 20+ hours/week of founder operational capacity by introducing manager approval limits and OKRs.',
        potentialImpact: 'Immediate 40% increase in executive decision execution speed.',
      },

      recommendation: {
        code: 'LDR-03',
        strategicRecommendation: 'Implement quarterly OKR framework and hold formal monthly leadership cadence meetings.',
        targetKPI: '100% leadership alignment on 3 core quarterly revenue targets.',
        expectedOutcome: 'Clear cross-functional strategic focus and eliminated goal drift.',
        actionTimeframeDays: 60,
        urgency: 'Short-Term Action Required (Next 30–60 Days)',
      },
    },

    '0-49': {
      id: 'LDR_0-49',
      pillarId: PillarId.LEADERSHIP,
      pillarName: 'Leadership & Governance',
      scoreBand: '0-49',
      scoreRange: { min: 0, max: 49 },
      maturityBand: MaturityBand.AT_RISK,
      recommendationCode: 'LDR-04',

      coreStrength: 'Hands-on Entrepreneurial Passion & Agile Owner Crisis Control',
      competitiveAdvantage: 'Unmatched agility and immediate personal owner intervention during operational emergencies.',
      typicalBusinessSituation: 'Total founder dependency where every routine invoice, hiring decision, and client dispute requires direct owner sign-off. Operational momentum grinds to a halt whenever the founder is away.',

      gaps: {
        primaryGap: 'Severe owner bottleneck where all operational approvals stall in owner absence.',
        secondaryGaps: ['Zero delegation frameworks', 'Absence of written authority matrix', 'No documented annual goals'],
        missingSystems: 'Absence of written delegation playbooks and formal approval limits.',
        weakProcesses: 'Ad-hoc emergency decision making with no documented annual goals.',
        organizationalGap: 'Complete founder dependency resulting in team passivity and operational paralysis.',
        severity: 'Critical',
      },

      risk: {
        riskCategory: 'Owner Bottleneck & Operational Paralysis',
        riskDescription: 'Complete business halt and customer loss if founder is unavailable due to total owner dependency.',
        riskLevel: 'Critical Risk',
        mitigationStrategy: 'Immediately delegate functional authority with approval limits and draft emergency playbooks.',
      },

      opportunity: {
        opportunityType: 'Process Improvement Opportunity',
        title: 'Founder Bottleneck Elimination & Delegation Playbook',
        description: 'Draft functional delegation playbooks and grant approval limits to managers to unlock owner capacity.',
        potentialImpact: 'Frees 25+ hours/week of founder capacity for high-margin strategic growth.',
      },

      recommendation: {
        code: 'LDR-04',
        strategicRecommendation: 'Draft functional Delegation Playbooks and grant ₹50K approval limits to department managers.',
        targetKPI: 'Founder operational hours reduced from 60+ hrs/wk to < 20 hrs/wk.',
        expectedOutcome: 'Immediate 40% gain in decision execution speed across middle management.',
        actionTimeframeDays: 30,
        urgency: 'Immediate Action Required (Next 1–30 Days)',
      },
    },
  },

  // =========================================================================
  // 2. STRATEGY & MARKET POSITIONING (STR)
  // =========================================================================
  [PillarId.STRATEGY]: {
    '85-100': {
      id: 'STR_85-100',
      pillarId: PillarId.STRATEGY,
      pillarName: 'Strategy & Market Positioning',
      scoreBand: '85-100',
      scoreRange: { min: 85, max: 100 },
      maturityBand: MaturityBand.LEADER,
      recommendationCode: 'STR-01',

      coreStrength: 'Defensible Brand Positioning & Strong Pricing Moat',
      competitiveAdvantage: 'Recognized industry benchmark with premium pricing power and strong customer lock-in.',
      typicalBusinessSituation: 'The company possesses a highly differentiated value proposition, systematic customer feedback mechanisms, and a validated 3-year strategic growth blueprint.',

      gaps: {
        primaryGap: 'Balancing core product optimization with radical market disruption.',
        secondaryGaps: ['Untapped international/adjacent market segments', 'R&D pipeline optimization'],
        missingSystems: 'Formal M&A radar and disruptive innovation incubation framework.',
        weakProcesses: 'Risk of market stagnation without continuous category reinvention.',
        organizationalGap: 'Balancing core business profitability with exploratory innovation.',
        severity: 'Low',
      },

      risk: {
        riskCategory: 'Industry Disruption Disregard',
        riskDescription: 'Risk of agile tech-enabled entrants eroding market share in core verticals over 24-36 months.',
        riskLevel: 'Low Risk',
        mitigationStrategy: 'Invest 10% of profits into strategic R&D and evaluate bolt-on acquisition targets.',
      },

      opportunity: {
        opportunityType: 'Market Expansion Opportunity',
        title: 'Adjacent Vertical Expansion & Wallet Share Capture',
        description: 'Deploy new cross-sell service lines to existing customer base to maximize lifetime value without extra acquisition cost.',
        potentialImpact: '30% increase in customer lifetime value (LTV).',
      },

      recommendation: {
        code: 'STR-01',
        strategicRecommendation: 'Invest in strategic R&D and evaluate bolt-on acquisition targets for market dominance.',
        targetKPI: '30% revenue contribution from new innovations launched in last 24 months.',
        expectedOutcome: 'Unshakeable category leadership and high competitive moat.',
        actionTimeframeDays: 180,
        urgency: 'Long-Term Strategic Refinement (Next 90–180 Days)',
      },
    },

    '70-84': {
      id: 'STR_70-84',
      pillarId: PillarId.STRATEGY,
      pillarName: 'Strategy & Market Positioning',
      scoreBand: '70-84',
      scoreRange: { min: 70, max: 84 },
      maturityBand: MaturityBand.ESTABLISHED,
      recommendationCode: 'STR-02',

      coreStrength: 'Differentiated Service Proposition & Niche Reputation',
      competitiveAdvantage: 'Solid market reputation in core target audience with strong repeat client patronage.',
      typicalBusinessSituation: 'Clear positioning in the primary target market, but long-term expansion into adjacent markets is handled reactively without a formal roadmap.',

      gaps: {
        primaryGap: 'Systematic cross-sell product expansion to maximize customer lifetime value.',
        secondaryGaps: ['Ad-hoc customer CSAT/NPS measurement', 'Under-leveraged customer feedback loops'],
        missingSystems: 'Systematic NPS/CSAT tracking and competitive intelligence reporting.',
        weakProcesses: 'Under-leveraged cross-sell product line expansion to existing client base.',
        organizationalGap: 'R&D initiatives disconnected from core sales distribution channels.',
        severity: 'Moderate',
      },

      risk: {
        riskCategory: 'Single-Line Product Dependence',
        riskDescription: 'Vulnerability to single-vertical demand shifts without adjacent revenue streams.',
        riskLevel: 'Medium Risk',
        mitigationStrategy: 'Launch adjacent cross-sell product lines to existing loyal customer base.',
      },

      opportunity: {
        opportunityType: 'Market Expansion Opportunity',
        title: 'Adjacent Vertical Expansion & Wallet Share Capture',
        description: 'Deploy new cross-sell service lines to existing customer base to maximize share of wallet.',
        potentialImpact: '25% share of wallet expansion among top 20% clients.',
      },

      recommendation: {
        code: 'STR-02',
        strategicRecommendation: 'Launch adjacent cross-sell product line to existing client ecosystem.',
        targetKPI: '25% share of wallet expansion among top 20% clients.',
        expectedOutcome: 'Higher customer lifetime value without increasing acquisition cost.',
        actionTimeframeDays: 90,
        urgency: 'Medium-Term Action Required (Next 60–90 Days)',
      },
    },

    '50-69': {
      id: 'STR_50-69',
      pillarId: PillarId.STRATEGY,
      pillarName: 'Strategy & Market Positioning',
      scoreBand: '50-69',
      scoreRange: { min: 50, max: 69 },
      maturityBand: MaturityBand.DEVELOPING,
      recommendationCode: 'STR-03',

      coreStrength: 'Agile Market Responsiveness & Direct Client Proximity',
      competitiveAdvantage: 'Ability to adapt service delivery quickly based on direct client feedback.',
      typicalBusinessSituation: 'The business serves diverse client profiles without a razor-sharp Ideal Client Profile (ICP). Sales reps often discount prices to win deals against commoditized competitors.',

      gaps: {
        primaryGap: 'Ad-hoc expansion without a structured 3-year market entry roadmap.',
        secondaryGaps: ['Unclear Ideal Client Profile (ICP)', 'Price discounting during sales conversations'],
        missingSystems: 'Unstructured customer insight loops and ad-hoc market expansion planning.',
        weakProcesses: 'Inconsistent value proposition communication when sales reps handle objections.',
        organizationalGap: 'Team lacks clear understanding of core customer target profiles.',
        severity: 'High',
      },

      risk: {
        riskCategory: 'Market Misalignment & Ad-Hoc Growth',
        riskDescription: 'Wasted marketing spend and failed product launches due to unvalidated market expansion.',
        riskLevel: 'High Risk',
        mitigationStrategy: 'Conduct structured TAM/SAM research and publish a 3-year growth roadmap.',
      },

      opportunity: {
        opportunityType: 'Revenue Opportunity',
        title: 'High-Ticket Niche Re-positioning & Price Premium',
        description: 'Package specialized service bundles and eliminate price discounting through clear value positioning.',
        potentialImpact: '15% - 25% expansion in Average Contract Value (ACV) and gross margin.',
      },

      recommendation: {
        code: 'STR-03',
        strategicRecommendation: 'Conduct formal TAM/SAM market research and publish a 3-year growth strategy blueprint.',
        targetKPI: '2 new high-margin target verticals identified and validated.',
        expectedOutcome: 'Focused marketing spend and faster market share acquisition.',
        actionTimeframeDays: 60,
        urgency: 'Short-Term Action Required (Next 30–60 Days)',
      },
    },

    '0-49': {
      id: 'STR_0-49',
      pillarId: PillarId.STRATEGY,
      pillarName: 'Strategy & Market Positioning',
      scoreBand: '0-49',
      scoreRange: { min: 0, max: 49 },
      maturityBand: MaturityBand.AT_RISK,
      recommendationCode: 'STR-04',

      coreStrength: 'Opportunistic Client Catchment & Immediate Revenue Hustle',
      competitiveAdvantage: 'Willingness to take on any client project to generate immediate operational cash flow.',
      typicalBusinessSituation: 'Commoditized offering competing purely on lowest price. Zero brand moat, constant price discounting, and focus restricted entirely to monthly survival.',

      gaps: {
        primaryGap: 'Commoditized offering competing purely on price with no clear brand moat.',
        secondaryGaps: ['Zero differentiation', 'No customer feedback mechanism', 'Absence of long-term vision'],
        missingSystems: 'No formal positioning framework or structured customer feedback mechanism.',
        weakProcesses: 'Competing purely on price with zero differentiation or value bundling.',
        organizationalGap: 'Focus restricted to short-term monthly survival without a 3-year vision.',
        severity: 'Critical',
      },

      risk: {
        riskCategory: 'Commoditization & Price Erosion',
        riskDescription: 'Erosion of profit margins and client loss to lower-cost competitors due to zero market differentiation.',
        riskLevel: 'Critical Risk',
        mitigationStrategy: 'Define specialized niche value proposition and package premium bundled service tiers.',
      },

      opportunity: {
        opportunityType: 'Revenue Opportunity',
        title: 'Differentiated Value Positioning & Price Premium',
        description: 'Package unique service bundles and articulate value moats to eliminate margin-eroding price discounting.',
        potentialImpact: '15% - 25% expansion in Average Contract Value (ACV) and gross margin.',
      },

      recommendation: {
        code: 'STR-04',
        strategicRecommendation: 'Define a high-ticket specialized niche positioning statement and bundle value-added services.',
        targetKPI: '15% increase in average contract value (ACV).',
        expectedOutcome: 'Eliminated price discounting pressure and improved gross margin.',
        actionTimeframeDays: 30,
        urgency: 'Immediate Action Required (Next 1–30 Days)',
      },
    },
  },

  // =========================================================================
  // 3. SALES & CUSTOMER ACQUISITION (SLS)
  // =========================================================================
  [PillarId.SALES]: {
    '85-100': {
      id: 'SLS_85-100',
      pillarId: PillarId.SALES,
      pillarName: 'Sales & Customer Acquisition',
      scoreBand: '85-100',
      scoreRange: { min: 85, max: 100 },
      maturityBand: MaturityBand.LEADER,
      recommendationCode: 'SLS-01',

      coreStrength: 'Predictable Multi-Channel Engine & Elite Conversion Velocity',
      competitiveAdvantage: 'Automated CRM pipeline, fast SLA response times, and exceptional LTV:CAC ratios.',
      typicalBusinessSituation: 'Diversified lead acquisition channels operating on autopilot with strict CRM conversion tracking, automated follow-ups, and predictable monthly revenue.',

      gaps: {
        primaryGap: 'Reaching saturation in core digital acquisition channels.',
        secondaryGaps: ['Enterprise ABM opportunity untapped', 'Partner channel revenue under-leveraged'],
        missingSystems: 'Enterprise ABM automation and partner channel distribution portals.',
        weakProcesses: 'Core acquisition channel saturation requiring new strategic distribution entry.',
        organizationalGap: 'Scaling enterprise sales talent across expanding geographic regions.',
        severity: 'Low',
      },

      risk: {
        riskCategory: 'Channel Saturation Stagnation',
        riskDescription: 'Diminishing returns on existing digital advertising acquisition channels as ad costs rise.',
        riskLevel: 'Low Risk',
        mitigationStrategy: 'Expand enterprise Account-Based Marketing (ABM) and partner channel co-selling.',
      },

      opportunity: {
        opportunityType: 'Market Expansion Opportunity',
        title: 'Enterprise ABM & Partner Distribution Ecosystem',
        description: 'Scale account-based marketing for high-value clients and build strategic channel partner co-selling.',
        potentialImpact: '50% revenue growth driven by partner distribution channels.',
      },

      recommendation: {
        code: 'SLS-01',
        strategicRecommendation: 'Scale account-based marketing (ABM) for enterprise clients and expand partner distribution channels.',
        targetKPI: '50% revenue growth driven by strategic channel partnerships.',
        expectedOutcome: 'Scalable market expansion with minimal incremental acquisition cost.',
        actionTimeframeDays: 180,
        urgency: 'Long-Term Strategic Refinement (Next 90–180 Days)',
      },
    },

    '70-84': {
      id: 'SLS_70-84',
      pillarId: PillarId.SALES,
      pillarName: 'Sales & Customer Acquisition',
      scoreBand: '70-84',
      scoreRange: { min: 70, max: 84 },
      maturityBand: MaturityBand.ESTABLISHED,
      recommendationCode: 'SLS-02',

      coreStrength: 'Predictable Pipeline & Multi-Channel Lead Generation',
      competitiveAdvantage: 'Systematic lead acquisition with enforced CRM tracking and consistent conversion.',
      typicalBusinessSituation: 'Functional CRM pipeline and active lead generation, but sales reps spend significant time manually writing proposals and delivering live demos.',

      gaps: {
        primaryGap: 'Sub-optimal LTV:CAC ratio due to manual sales rep proposal and demo overhead.',
        secondaryGaps: ['Proposal generation bottlenecks', 'Account expansion scripts not standardized'],
        missingSystems: 'Advanced sales enablement platform and automated proposal engines.',
        weakProcesses: 'Sub-optimal LTV:CAC ratios due to high manual sales rep involvement.',
        organizationalGap: 'Account expansion and upsell scripts not systematically deployed.',
        severity: 'Moderate',
      },

      risk: {
        riskCategory: 'Sales Rep Capacity Cap',
        riskDescription: 'Sales team revenue ceiling caused by manual proposal creation and demo overhead.',
        riskLevel: 'Medium Risk',
        mitigationStrategy: 'Deploy sales enablement assets, proposal generators, and account expansion scripts.',
      },

      opportunity: {
        opportunityType: 'Process Improvement Opportunity',
        title: 'Sales Enablement & Proposal Automation Engine',
        description: 'Deploy automated proposal generators and standardized pitch decks to double sales rep demo capacity.',
        potentialImpact: '25% reduction in sales cycle length.',
      },

      recommendation: {
        code: 'SLS-02',
        strategicRecommendation: 'Optimize sales enablement assets, automated proposal generators, and account expansion scripts.',
        targetKPI: 'LTV:CAC ratio > 4:1 with sales cycle shortened by 25%.',
        expectedOutcome: 'Highly profitable sales scaling with shorter payback periods.',
        actionTimeframeDays: 90,
        urgency: 'Medium-Term Action Required (Next 60–90 Days)',
      },
    },

    '50-69': {
      id: 'SLS_50-69',
      pillarId: PillarId.SALES,
      pillarName: 'Sales & Customer Acquisition',
      scoreBand: '50-69',
      scoreRange: { min: 50, max: 69 },
      maturityBand: MaturityBand.DEVELOPING,
      recommendationCode: 'SLS-03',

      coreStrength: 'Active Lead Generation & Basic CRM Tracking',
      competitiveAdvantage: 'Active customer outreach with basic deal tracking in place.',
      typicalBusinessSituation: 'Leads are generated through basic marketing, but follow-up cadence is inconsistent. Sales deals leak from the pipeline because reps lack automated nurture sequences.',

      gaps: {
        primaryGap: 'Inconsistent follow-up cadence leading to pipeline lead decay.',
        secondaryGaps: ['No strict lead response SLAs', 'Manual lead assignment'],
        missingSystems: 'Lack of automated lead nurture sequences and enforced sales SLAs.',
        weakProcesses: 'Manual quotation preparation causing slow response times and lead decay.',
        organizationalGap: 'Inconsistent sales rep conversion rates due to unstandardized pitches.',
        severity: 'High',
      },

      risk: {
        riskCategory: 'Lead Decay & High Acquisition Cost',
        riskDescription: 'High marketing spend wasted due to slow follow-up SLAs and deal drop-offs in sales pipeline.',
        riskLevel: 'High Risk',
        mitigationStrategy: 'Implement mandatory 15-minute lead response SLAs and automated nurture sequences.',
      },

      opportunity: {
        opportunityType: 'Revenue Opportunity',
        title: 'Predictable CRM Lead Engine & Conversion Velocity',
        description: 'Build systematic multi-channel lead acquisition with strict follow-up SLAs to eliminate pipeline deal leakage.',
        potentialImpact: '2x - 3x increase in monthly qualified pipeline inquiries.',
      },

      recommendation: {
        code: 'SLS-03',
        strategicRecommendation: 'Implement mandatory CRM follow-up SLAs and automated 5-step email/WhatsApp nurture sequences.',
        targetKPI: 'Lead follow-up speed under 15 minutes; pipeline conversion rate +20%.',
        expectedOutcome: 'Higher lead conversion velocity and reduced lost deal leakage.',
        actionTimeframeDays: 60,
        urgency: 'Short-Term Action Required (Next 30–60 Days)',
      },
    },

    '0-49': {
      id: 'SLS_0-49',
      pillarId: PillarId.SALES,
      pillarName: 'Sales & Customer Acquisition',
      scoreBand: '0-49',
      scoreRange: { min: 0, max: 49 },
      maturityBand: MaturityBand.AT_RISK,
      recommendationCode: 'SLS-04',

      coreStrength: 'Organic Word-of-Mouth Goodwill & Founder Selling Ability',
      competitiveAdvantage: 'High client trust driving organic referrals when existing clients recommend the business.',
      typicalBusinessSituation: 'Total reliance on informal referrals with zero outbound marketing or CRM tracking. Inquiries are tracked on physical notebooks or lost in personal email inboxes.',

      gaps: {
        primaryGap: 'Total reliance on informal referrals with zero predictable lead acquisition funnels.',
        secondaryGaps: ['No CRM system', 'Zero outbound pipeline', 'Severe deal drop-offs'],
        missingSystems: 'Absence of standardized CRM pipeline and automated outbound lead acquisition.',
        weakProcesses: 'Irregular lead follow-up on notebooks resulting in severe pipeline deal leakage.',
        organizationalGap: 'Total reliance on owner personal network for new customer acquisitions.',
        severity: 'Critical',
      },

      risk: {
        riskCategory: 'Revenue Volatility & Pipeline Collapse',
        riskDescription: 'Severe cash flow crunches caused by total reliance on unpredictable word-of-mouth referrals.',
        riskLevel: 'Critical Risk',
        mitigationStrategy: 'Build an outbound lead campaign and enforce mandatory CRM deal pipeline tracking.',
      },

      opportunity: {
        opportunityType: 'Revenue Opportunity',
        title: 'Predictable Multi-Channel Acquisition Engine',
        description: 'Diversify away from referral dependence by launching predictable outbound lead channels.',
        potentialImpact: '2x - 3x increase in monthly qualified client inquiries.',
      },

      recommendation: {
        code: 'SLS-04',
        strategicRecommendation: 'Build an automated outbound lead campaign and install a standardized CRM pipeline.',
        targetKPI: 'Minimum 20 qualified sales inquiries generated per month.',
        expectedOutcome: 'Predictable monthly pipeline replacing volatile revenue spikes.',
        actionTimeframeDays: 30,
        urgency: 'Immediate Action Required (Next 1–30 Days)',
      },
    },
  },

  // =========================================================================
  // 4. OPERATIONS & SOPS (OPS)
  // =========================================================================
  [PillarId.OPERATIONS]: {
    '85-100': {
      id: 'OPS_85-100',
      pillarId: PillarId.OPERATIONS,
      pillarName: 'Operations & Process SOPs',
      scoreBand: '85-100',
      scoreRange: { min: 85, max: 100 },
      maturityBand: MaturityBand.LEADER,
      recommendationCode: 'OPS-01',

      coreStrength: 'Lean Digital SOPs & Elastic Capacity Scalability',
      competitiveAdvantage: 'Near-zero defect rates, centralized video SOP libraries, and automated SLA monitoring.',
      typicalBusinessSituation: 'The business handles 3x order volume spikes effortlessly without adding linear headcount, supported by digital playbooks and automated handoffs.',

      gaps: {
        primaryGap: 'Incremental efficiency gains diminishing without global process re-engineering.',
        secondaryGaps: ['Predictive AI maintenance untapped', 'Autonomous supply chain triage missing'],
        missingSystems: 'Predictive AI supply chain optimization and real-time defect monitoring.',
        weakProcesses: 'Marginal efficiency gains diminishing without global process re-engineering.',
        organizationalGap: 'Maintaining lean operational culture during rapid geographic expansion.',
        severity: 'Low',
      },

      risk: {
        riskCategory: 'Diminishing Efficiency Returns',
        riskDescription: 'Inability to lower unit production costs further without systemic AI transformation.',
        riskLevel: 'Low Risk',
        mitigationStrategy: 'Implement predictive AI supply chain analytics and automated defect detection.',
      },

      opportunity: {
        opportunityType: 'Automation Opportunity',
        title: 'Predictable Capacity Scaling & Margin Expansion',
        description: 'Automate cross-departmental handoffs to handle 3x order volume without linear headcount growth.',
        potentialImpact: 'Expanding operating profit margins as revenue scales.',
      },

      recommendation: {
        code: 'OPS-01',
        strategicRecommendation: 'Deploy AI-driven predictive supply chain and automated quality inspection frameworks.',
        targetKPI: 'Near-zero defect rate (< 0.1%) across all customer deliverables.',
        expectedOutcome: 'Unbeatable operational efficiency and cost structure supremacy.',
        actionTimeframeDays: 180,
        urgency: 'Long-Term Strategic Refinement (Next 90–180 Days)',
      },
    },

    '70-84': {
      id: 'OPS_70-84',
      pillarId: PillarId.OPERATIONS,
      pillarName: 'Operations & Process SOPs',
      scoreBand: '70-84',
      scoreRange: { min: 70, max: 84 },
      maturityBand: MaturityBand.ESTABLISHED,
      recommendationCode: 'OPS-02',

      coreStrength: 'Standardized Digital SOP Library & Quality Controls',
      competitiveAdvantage: 'Documented operational workflows delivering consistent service quality.',
      typicalBusinessSituation: 'Core processes are documented in SOP manuals, but cross-departmental handoffs (Sales -> Ops -> Billing) still require manual email communication.',

      gaps: {
        primaryGap: 'Linear operational cost scaling where growth requires proportional headcount.',
        secondaryGaps: ['Manual inter-departmental handoffs', 'Data re-entry between systems'],
        missingSystems: 'Automated cross-departmental API handoffs (Sales -> Ops -> Billing).',
        weakProcesses: 'Linear operational cost scaling where revenue growth requires proportional headcount.',
        organizationalGap: 'Siloed communication between sales commitments and operational capacity.',
        severity: 'Moderate',
      },

      risk: {
        riskCategory: 'Linear Margin Compression',
        riskDescription: 'Inability to scale profits because operational costs increase linearly with revenue.',
        riskLevel: 'Medium Risk',
        mitigationStrategy: 'Automate cross-departmental handoffs using custom API integrations and webhooks.',
      },

      opportunity: {
        opportunityType: 'Automation Opportunity',
        title: 'Cross-Departmental Workflow Automation',
        description: 'Connect sales order closing directly to operational fulfillment and billing via webhooks.',
        potentialImpact: '3x volume handling capability with < 30% overhead increase.',
      },

      recommendation: {
        code: 'OPS-02',
        strategicRecommendation: 'Automate handoffs between sales, ops, and accounting using custom webhook integrations.',
        targetKPI: '3x volume handling capability with < 30% overhead increase.',
        expectedOutcome: 'Expanding operating profit margins as revenue scales.',
        actionTimeframeDays: 90,
        urgency: 'Medium-Term Action Required (Next 60–90 Days)',
      },
    },

    '50-69': {
      id: 'OPS_50-69',
      pillarId: PillarId.OPERATIONS,
      pillarName: 'Operations & Process SOPs',
      scoreBand: '50-69',
      scoreRange: { min: 50, max: 69 },
      maturityBand: MaturityBand.DEVELOPING,
      recommendationCode: 'OPS-03',

      coreStrength: 'Standardized Delivery Checkpoints & Team Commitment',
      competitiveAdvantage: 'Established quality control checkpoints and dedicated delivery team.',
      typicalBusinessSituation: 'Basic operational checklists exist, but capacity bottlenecks occur during volume surges. Service quality fluctuates depending on which employee handles the task.',

      gaps: {
        primaryGap: 'Capacity bottlenecks causing delivery delays during volume spikes.',
        secondaryGaps: ['Unmonitored delivery SLAs', 'Process bottlenecks during peak volume'],
        missingSystems: 'Absence of centralized SLA tracking dashboard and capacity planning models.',
        weakProcesses: 'Operational bottlenecks cause rush jobs and quality inconsistency during peak demand.',
        organizationalGap: 'Lack of dedicated process improvement owners within operational teams.',
        severity: 'High',
      },

      risk: {
        riskCategory: 'Delivery Bottleneck & SLA Breach',
        riskDescription: 'Operational crunches during seasonal volume spikes causing order backlogs and churn.',
        riskLevel: 'High Risk',
        mitigationStrategy: 'Deploy centralized SLA tracking dashboards and capacity forecasting models.',
      },

      opportunity: {
        opportunityType: 'Cost Saving Opportunity',
        title: 'Digital SOP Library & Rework Elimination',
        description: 'Standardize core execution processes into digital playbooks with video walkthroughs to eliminate quality defects.',
        potentialImpact: '50% reduction in delivery execution errors and 3x faster team onboarding.',
      },

      recommendation: {
        code: 'OPS-03',
        strategicRecommendation: 'Establish a centralized SLA monitoring dashboard and capacity forecasting model.',
        targetKPI: '95%+ on-time delivery SLA compliance.',
        expectedOutcome: 'Eliminated operational bottleneck crunches and improved customer retention.',
        actionTimeframeDays: 60,
        urgency: 'Short-Term Action Required (Next 30–60 Days)',
      },
    },

    '0-49': {
      id: 'OPS_0-49',
      pillarId: PillarId.OPERATIONS,
      pillarName: 'Operations & Process SOPs',
      scoreBand: '0-49',
      scoreRange: { min: 0, max: 49 },
      maturityBand: MaturityBand.AT_RISK,
      recommendationCode: 'OPS-04',

      coreStrength: 'Flexible Hands-on Execution & Heroic Employee Effort',
      competitiveAdvantage: 'High employee dedication and willingness to work overtime to meet client delivery deadlines.',
      typicalBusinessSituation: 'Zero documented SOP playbooks. Execution relies entirely on unwritten tribal knowledge. High error rates, frequent rework, and long onboarding times for new hires.',

      gaps: {
        primaryGap: 'Tribal knowledge with zero documented SOPs leading to frequent quality errors.',
        secondaryGaps: ['No documented playbooks', 'High defect rates', 'Slow onboarding'],
        missingSystems: 'Zero documented SOP playbooks or digital task management checklists.',
        weakProcesses: 'Tribal process knowledge causing high error rates and delivery delays.',
        organizationalGap: 'Onboarding new operational staff takes months due to lack of training manuals.',
        severity: 'Critical',
      },

      risk: {
        riskCategory: 'Execution Quality Collapse & Defect Surge',
        riskDescription: 'Frequent customer complaints, delivery delays, and costly rework due to unwritten tribal SOPs.',
        riskLevel: 'Critical Risk',
        mitigationStrategy: 'Document top 10 core operational processes into digital SOP playbooks with checklists.',
      },

      opportunity: {
        opportunityType: 'Cost Saving Opportunity',
        title: 'Digital SOP Library & Rework Elimination',
        description: 'Standardize top 10 core execution processes into digital playbooks with video walkthroughs to eliminate quality defects.',
        potentialImpact: '50% reduction in delivery execution errors and 3x faster team onboarding.',
      },

      recommendation: {
        code: 'OPS-04',
        strategicRecommendation: 'Document top 10 core operational processes into digital SOP playbooks with video walkthroughs.',
        targetKPI: '100% documentation of core delivery workflows.',
        expectedOutcome: '50% drop in delivery execution errors and faster team onboarding.',
        actionTimeframeDays: 30,
        urgency: 'Immediate Action Required (Next 1–30 Days)',
      },
    },
  },

  // =========================================================================
  // 5. FINANCE & PROFITABILITY (FIN)
  // =========================================================================
  [PillarId.FINANCE]: {
    '85-100': {
      id: 'FIN_85-100',
      pillarId: PillarId.FINANCE,
      pillarName: 'Finance & Profitability',
      scoreBand: '85-100',
      scoreRange: { min: 85, max: 100 },
      maturityBand: MaturityBand.LEADER,
      recommendationCode: 'FIN-01',

      coreStrength: 'Real-time Dashboards & Unit-Level Margin Discipline',
      competitiveAdvantage: 'Strong positive cash flow buffer, DSO < 20 days, and real-time SKU margin visibility.',
      typicalBusinessSituation: 'Real-time financial dashboards, 5-day month-end closure, 13-week rolling cash forecasts, and disciplined unit cost accounting driving high profit margins.',

      gaps: {
        primaryGap: 'Idle cash reserves not yield-optimized for enterprise compounding.',
        secondaryGaps: ['M&A capital deployment framework missing', 'Tax optimization across multi-entities'],
        missingSystems: 'Automated treasury yield optimization and M&A capital deployment framework.',
        weakProcesses: 'Under-utilized cash reserves sitting in low-yield operational accounts.',
        organizationalGap: 'Optimizing global tax efficiency across multiple operating entities.',
        severity: 'Low',
      },

      risk: {
        riskCategory: 'Capital Allocation Inefficiency',
        riskDescription: 'Sub-optimal return on capital due to uninvested excess cash reserves sitting idle.',
        riskLevel: 'Low Risk',
        mitigationStrategy: 'Deploy corporate treasury optimization and tax-efficient reinvestment reserves.',
      },

      opportunity: {
        opportunityType: 'Revenue Opportunity',
        title: 'Unit-Level Margin Maximization & Treasury Yield',
        description: 'Optimize treasury yield on excess cash reserves while maintaining strategic M&A war chests.',
        potentialImpact: '12%+ return on invested capital (ROIC).',
      },

      recommendation: {
        code: 'FIN-01',
        strategicRecommendation: 'Implement treasury management optimization, tax-efficient capital reinvestment, and M&A reserves.',
        targetKPI: '12%+ return on invested capital (ROIC).',
        expectedOutcome: 'Compounded enterprise wealth and aggressive balance sheet strength.',
        actionTimeframeDays: 180,
        urgency: 'Long-Term Strategic Refinement (Next 90–180 Days)',
      },
    },

    '70-84': {
      id: 'FIN_70-84',
      pillarId: PillarId.FINANCE,
      pillarName: 'Finance & Profitability',
      scoreBand: '70-84',
      scoreRange: { min: 70, max: 84 },
      maturityBand: MaturityBand.ESTABLISHED,
      recommendationCode: 'FIN-02',

      coreStrength: 'Disciplined Financial Reporting & Working Capital Control',
      competitiveAdvantage: 'Predictable DSO under 30 days and regular monthly P&L generation.',
      typicalBusinessSituation: 'Monthly financial statements are produced reliably on cloud software, but unit-level profit margins per client contract or product SKU are not tracked.',

      gaps: {
        primaryGap: 'Lack of product SKU / client-level gross margin accountability.',
        secondaryGaps: ['Unprofitable contracts subsidizing high-margin accounts', 'No unit-level costing'],
        missingSystems: 'Unit-level SKU/Client cost accounting and dynamic margin analytics.',
        weakProcesses: 'Carrying low-margin contracts or unprofitable client accounts unknowingly.',
        organizationalGap: 'Finance team operates reactively as bookkeepers rather than strategic partners.',
        severity: 'Moderate',
      },

      risk: {
        riskCategory: 'Unprofitable Account Subsidization',
        riskDescription: 'High-margin accounts subsidizing hidden losses in low-margin client contracts.',
        riskLevel: 'Medium Risk',
        mitigationStrategy: 'Implement unit-level cost accounting to identify and renegotiate sub-35% margin contracts.',
      },

      opportunity: {
        opportunityType: 'Revenue Opportunity',
        title: 'Unit-Level Margin Maximization & Contract Audit',
        description: 'Identify and renegotiate low-margin customer contracts to boost overall company profitability.',
        potentialImpact: '5% - 8% direct boost in overall company net profit margin.',
      },

      recommendation: {
        code: 'FIN-02',
        strategicRecommendation: 'Implement unit-level cost accounting to identify and renegotiate low-margin accounts.',
        targetKPI: 'Minimum 35% gross profit margin across all client accounts.',
        expectedOutcome: '5% - 8% boost in overall net profit margin.',
        actionTimeframeDays: 90,
        urgency: 'Medium-Term Action Required (Next 60–90 Days)',
      },
    },

    '50-69': {
      id: 'FIN_50-69',
      pillarId: PillarId.FINANCE,
      pillarName: 'Finance & Profitability',
      scoreBand: '50-69',
      scoreRange: { min: 50, max: 69 },
      maturityBand: MaturityBand.DEVELOPING,
      recommendationCode: 'FIN-03',

      coreStrength: 'Cloud Accounting Usage & Regular Monthly Reconciliations',
      competitiveAdvantage: 'Basic accounting software deployed with regular bank statement reconciliations.',
      typicalBusinessSituation: 'Monthly P&Ls are generated, but Accounts Receivable (AR) collections take 60+ days. Overdue client invoices choke working capital, creating recurring cash crunches.',

      gaps: {
        primaryGap: 'Delayed Accounts Receivable (AR) collection choking working capital.',
        secondaryGaps: ['DSO exceeding 60 days', 'No automated payment reminders', 'Soft credit limits'],
        missingSystems: 'Automated payment reminder engines and structured credit control policies.',
        weakProcesses: 'Delayed Accounts Receivable collection exceeding 60+ days choking working capital.',
        organizationalGap: 'Lack of clear financial approval authority matrix for departmental spend.',
        severity: 'High',
      },

      risk: {
        riskCategory: 'Working Capital Paralysis (Bad Receivables)',
        riskDescription: 'Overdue receivables choking liquidity and forcing expensive short-term debt borrowing.',
        riskLevel: 'High Risk',
        mitigationStrategy: 'Enforce strict credit limits, automated payment reminders, and late payment fee terms.',
      },

      opportunity: {
        opportunityType: 'Cost Saving Opportunity',
        title: 'Working Capital Recovery & DSO Reduction',
        description: 'Enforce strict credit limits, automated payment reminders, and structured terms to reduce DSO under 30 days.',
        potentialImpact: 'Unlocks 15% - 25% of annual revenue trapped in overdue receivables.',
      },

      recommendation: {
        code: 'FIN-03',
        strategicRecommendation: 'Enforce automated payment reminders, credit limit terms, and late fee clauses.',
        targetKPI: 'Reduce DSO (Days Sales Outstanding) to under 30 days.',
        expectedOutcome: 'Unlocked working capital reserves and smooth vendor payment cycles.',
        actionTimeframeDays: 60,
        urgency: 'Short-Term Action Required (Next 30–60 Days)',
      },
    },

    '0-49': {
      id: 'FIN_0-49',
      pillarId: PillarId.FINANCE,
      pillarName: 'Finance & Profitability',
      scoreBand: '0-49',
      scoreRange: { min: 0, max: 49 },
      maturityBand: MaturityBand.AT_RISK,
      recommendationCode: 'FIN-04',

      coreStrength: 'Entrepreneurial Cash Consciousness & Low Fixed Overhead',
      competitiveAdvantage: 'Strict founder monitoring of bank accounts and low fixed overhead expenses.',
      typicalBusinessSituation: 'Annual tax-only compliance accounting. Zero monthly P&L visibility, no 13-week cash flow forecasting, and constant risk of payroll or tax penalty defaults.',

      gaps: {
        primaryGap: 'Annual tax-only accounting with zero real-time visibility into monthly P&L or cash flow.',
        secondaryGaps: ['No cash flow forecasting', 'Manual paper bookkeeping', 'Unmonitored cash burn'],
        missingSystems: 'No cloud accounting software or rolling 13-week cash flow forecasting engine.',
        weakProcesses: 'Annual tax-only accounting with zero monthly P&L or cash burn visibility.',
        organizationalGap: 'Severe liquidity risk due to overdue receivables and unmonitored vendor payables.',
        severity: 'Critical',
      },

      risk: {
        riskCategory: 'Insolvency & Cash Crunch Exposure',
        riskDescription: 'Inability to pay salaries or vendors due to tax-only accounting and zero rolling cash visibility.',
        riskLevel: 'Critical Risk',
        mitigationStrategy: 'Implement cloud accounting software and generate weekly cash burn and 13-week forecasts.',
      },

      opportunity: {
        opportunityType: 'Cost Saving Opportunity',
        title: 'Real-Time Financial Control & Cash Burn Visibility',
        description: 'Deploy cloud accounting software to gain immediate daily cash visibility and rolling cash forecasts.',
        potentialImpact: 'Eliminates unexpected cash shortages and tax penalty defaults.',
      },

      recommendation: {
        code: 'FIN-04',
        strategicRecommendation: 'Implement cloud accounting software and generate monthly P&L and 13-week rolling cash forecasts.',
        targetKPI: 'Monthly financial closure within 5 days of month-end.',
        expectedOutcome: 'Complete cash visibility and prevention of sudden liquidity crunches.',
        actionTimeframeDays: 30,
        urgency: 'Immediate Action Required (Next 1–30 Days)',
      },
    },
  },

  // =========================================================================
  // 6. HUMAN RESOURCES & PEOPLE (HR)
  // =========================================================================
  [PillarId.HUMAN_RESOURCES]: {
    '85-100': {
      id: 'HR_85-100',
      pillarId: PillarId.HUMAN_RESOURCES,
      pillarName: 'Human Resources & People',
      scoreBand: '85-100',
      scoreRange: { min: 85, max: 100 },
      maturityBand: MaturityBand.LEADER,
      recommendationCode: 'HR-01',

      coreStrength: 'High-Accountability Meritocracy & Inbound Talent Magnet',
      competitiveAdvantage: 'Top-tier employee retention, eNPS > 75, and rapid 21-day new hire onboarding ramp.',
      typicalBusinessSituation: 'Transparent KPI scorecards, clear career growth ladders, high employee ownership, and elite industry talent requesting to join the organization.',

      gaps: {
        primaryGap: 'Scaling company culture across geographically distributed or remote teams.',
        secondaryGaps: ['Executive retention against aggressive headhunters', 'Internal leadership academy optimization'],
        missingSystems: 'Internal Leadership Academy and enterprise eNPS sentiment tracking.',
        weakProcesses: 'Scaling company culture across remote or geographically distributed teams.',
        organizationalGap: 'Retaining executive talent against aggressive market recruitment offers.',
        severity: 'Low',
      },

      risk: {
        riskCategory: 'Cultural Dilution During Expansion',
        riskDescription: 'Loss of core high-performance culture as team expands across remote locations.',
        riskLevel: 'Low Risk',
        mitigationStrategy: 'Launch internal Leadership Academy and continuous eNPS sentiment tracking.',
      },

      opportunity: {
        opportunityType: 'Process Improvement Opportunity',
        title: 'Employer Brand Magnet & Talent Retention',
        description: 'Build internal Leadership Academy and high-performance incentive structures to attract elite industry talent.',
        potentialImpact: 'Keeps voluntary key-talent attrition under 5% annually.',
      },

      recommendation: {
        code: 'HR-01',
        strategicRecommendation: 'Launch an internal Leadership Academy and employer branding talent attraction funnel.',
        targetKPI: 'eNPS score > 75 with top-tier talent inbound pipeline.',
        expectedOutcome: 'Magnet for elite industry talent driving sustainable competitive advantage.',
        actionTimeframeDays: 180,
        urgency: 'Long-Term Strategic Refinement (Next 90–180 Days)',
      },
    },

    '70-84': {
      id: 'HR_70-84',
      pillarId: PillarId.HUMAN_RESOURCES,
      pillarName: 'Human Resources & People',
      scoreBand: '70-84',
      scoreRange: { min: 70, max: 84 },
      maturityBand: MaturityBand.ESTABLISHED,
      recommendationCode: 'HR-02',

      coreStrength: 'Structured Role KPI Scorecards & Performance Feedback',
      competitiveAdvantage: 'Clear individual accountability connected directly to quarterly business goals.',
      typicalBusinessSituation: 'Written job descriptions and quarterly reviews exist, but single-point key person dependencies exist where losing a key manager causes operational disruption.',

      gaps: {
        primaryGap: 'Key-person risk where departure of top talent disrupts operations.',
        secondaryGaps: ['Unwritten succession plans', 'Inbound talent pipeline missing'],
        missingSystems: 'Formal career progression ladders and key-person succession programs.',
        weakProcesses: 'Single-point-of-failure risk where departure of key talent disrupts operations.',
        organizationalGap: 'Talent attraction relies on active recruitment rather than inbound employer brand.',
        severity: 'Moderate',
      },

      risk: {
        riskCategory: 'Single-Point Talent Depletion',
        riskDescription: 'Severe operational disruption when key individual performers leave without backups.',
        riskLevel: 'Medium Risk',
        mitigationStrategy: 'Design cross-training programs, retention bonuses, and internal succession ladders.',
      },

      opportunity: {
        opportunityType: 'Process Improvement Opportunity',
        title: 'Key-Talent Retention & Cross-Training Engine',
        description: 'Design career growth ladders and cross-training matrix to eliminate single-person operational dependencies.',
        potentialImpact: 'Voluntary key-talent attrition reduced under 5% annually.',
      },

      recommendation: {
        code: 'HR-02',
        strategicRecommendation: 'Design talent retention programs, career growth ladders, and succession cross-training.',
        targetKPI: 'Voluntary key-talent attrition < 5% annually.',
        expectedOutcome: 'Insulated operational capability and protected organizational memory.',
        actionTimeframeDays: 90,
        urgency: 'Medium-Term Action Required (Next 60–90 Days)',
      },
    },

    '50-69': {
      id: 'HR_50-69',
      pillarId: PillarId.HUMAN_RESOURCES,
      pillarName: 'Human Resources & People',
      scoreBand: '50-69',
      scoreRange: { min: 50, max: 69 },
      maturityBand: MaturityBand.DEVELOPING,
      recommendationCode: 'HR-03',

      coreStrength: 'Documented Job Roles & Basic Performance Reviews',
      competitiveAdvantage: 'Basic written role descriptions and documented annual reviews.',
      typicalBusinessSituation: 'Basic job titles exist, but onboarding is informal. New employees take 60+ days to reach baseline productivity due to lack of training manuals.',

      gaps: {
        primaryGap: 'High employee ramp-up time due to informal onboarding procedures.',
        secondaryGaps: ['Ramp-up time exceeds 60 days', 'Inconsistent 1-on-1 manager feedback'],
        missingSystems: 'Lack of structured 30-60-90 day onboarding playbooks and training modules.',
        weakProcesses: 'Slow employee ramp-up taking 60+ days to reach baseline operational efficiency.',
        organizationalGap: 'Inconsistent manager feedback and performance review execution.',
        severity: 'High',
      },

      risk: {
        riskCategory: 'New Hire Ramp-up Waste',
        riskDescription: 'High onboarding payroll costs with slow time-to-value due to informal training.',
        riskLevel: 'High Risk',
        mitigationStrategy: 'Build standardized 30-60-90 day employee onboarding playbooks and video modules.',
      },

      opportunity: {
        opportunityType: 'Process Improvement Opportunity',
        title: 'Role-Based KPI Scorecards & Fast Onboarding',
        description: 'Implement 3-5 measurable KPIs per role and structured 30-day onboarding to accelerate employee productivity.',
        potentialImpact: 'Reduces new hire ramp-up time from 60+ days to < 21 days.',
      },

      recommendation: {
        code: 'HR-03',
        strategicRecommendation: 'Build a standardized 30-60-90 day employee onboarding and training playbook.',
        targetKPI: 'New hire ramp-up time reduced to < 21 days.',
        expectedOutcome: 'Faster time-to-value for new hires and reduced turnover frustration.',
        actionTimeframeDays: 60,
        urgency: 'Short-Term Action Required (Next 30–60 Days)',
      },
    },

    '0-49': {
      id: 'HR_0-49',
      pillarId: PillarId.HUMAN_RESOURCES,
      pillarName: 'Human Resources & People',
      scoreBand: '0-49',
      scoreRange: { min: 0, max: 49 },
      maturityBand: MaturityBand.AT_RISK,
      recommendationCode: 'HR-04',

      coreStrength: 'Core Team Personal Loyalty & Founder Proximity',
      competitiveAdvantage: 'High personal loyalty to founder and willing cross-functional help during crunches.',
      typicalBusinessSituation: 'Ambiguous roles with no written job descriptions or measurable KPIs. Daily tasks are assigned reactively, leading to high staff frustration and subjective evaluations.',

      gaps: {
        primaryGap: 'Ambiguous roles with no clear KPIs, leading to reactive task management.',
        secondaryGaps: ['No job descriptions', 'High staff turnover', 'Subjective evaluations'],
        missingSystems: 'Absence of written job descriptions and 3-5 measurable KPI scorecards per role.',
        weakProcesses: 'Reactive daily task assignments leading to role ambiguity and low productivity.',
        organizationalGap: 'High staff turnover and employee frustration due to subjective evaluations.',
        severity: 'Critical',
      },

      risk: {
        riskCategory: 'Role Ambiguity & Key Talent Attrition',
        riskDescription: 'Staff frustration, low accountability, and key employee departures due to missing job descriptions.',
        riskLevel: 'Critical Risk',
        mitigationStrategy: 'Draft clear Job Descriptions with 3-5 measurable KPIs for every team member.',
      },

      opportunity: {
        opportunityType: 'Process Improvement Opportunity',
        title: 'Role-Based KPI Scorecards & Measurable Goals',
        description: 'Implement written job descriptions and 3-5 measurable KPIs per role to align employee output with business goals.',
        potentialImpact: '25% increase in individual employee productivity and clear accountability.',
      },

      recommendation: {
        code: 'HR-04',
        strategicRecommendation: 'Draft clear Job Descriptions with 3-5 measurable KPIs for every role in the business.',
        targetKPI: '100% staff signed KPI agreements.',
        expectedOutcome: 'Immediate boost in employee accountability and task execution clarity.',
        actionTimeframeDays: 30,
        urgency: 'Immediate Action Required (Next 1–30 Days)',
      },
    },
  },

  // =========================================================================
  // 7. TECHNOLOGY & SYSTEMS (TEC)
  // =========================================================================
  [PillarId.TECHNOLOGY]: {
    '85-100': {
      id: 'TEC_85-100',
      pillarId: PillarId.TECHNOLOGY,
      pillarName: 'Technology & Systems',
      scoreBand: '85-100',
      scoreRange: { min: 85, max: 100 },
      maturityBand: MaturityBand.LEADER,
      recommendationCode: 'TEC-01',

      coreStrength: 'Unified Digital Stack & AI Workflow Automation',
      competitiveAdvantage: 'Real-time API integrations, mandatory 2FA, daily cloud backups, and AI copilot agents.',
      typicalBusinessSituation: 'All core software tools (CRM, ERP, Billing) talk seamlessly via real-time webhooks. AI agents handle routine support triage, reporting, and predictive analytics.',

      gaps: {
        primaryGap: 'Untapped predictive analytics and autonomous AI agent potential.',
        secondaryGaps: ['Legacy API refactoring', 'Continuous cybersecurity threat hunting'],
        missingSystems: 'Autonomous AI agents and predictive business intelligence copilots.',
        weakProcesses: 'Legacy API endpoints requiring periodic refactoring and performance optimization.',
        organizationalGap: 'Keeping technical team aligned with bleeding-edge AI developments.',
        severity: 'Low',
      },

      risk: {
        riskCategory: 'Competitive Tech Disadvantage',
        riskDescription: 'Falling behind competitors who leverage autonomous AI agents for operational speed.',
        riskLevel: 'Low Risk',
        mitigationStrategy: 'Deploy custom AI copilots for customer support triage, reporting, and workflow automation.',
      },

      opportunity: {
        opportunityType: 'Automation Opportunity',
        title: 'AI Copilot Deployment & Autonomous Operations',
        description: 'Deploy AI agents for customer support triage, automated reporting, and predictive operational insights.',
        potentialImpact: '30% boost in team operational productivity with reduced overhead.',
      },

      recommendation: {
        code: 'TEC-01',
        strategicRecommendation: 'Deploy AI Copilots for automated customer triage, predictive inventory management, and executive BI insights.',
        targetKPI: '30% increase in operational productivity via AI agent workflows.',
        expectedOutcome: 'Unmatched technological edge and exponential scalability.',
        actionTimeframeDays: 180,
        urgency: 'Long-Term Strategic Refinement (Next 90–180 Days)',
      },
    },

    '70-84': {
      id: 'TEC_70-84',
      pillarId: PillarId.TECHNOLOGY,
      pillarName: 'Technology & Systems',
      scoreBand: '70-84',
      scoreRange: { min: 70, max: 84 },
      maturityBand: MaturityBand.ESTABLISHED,
      recommendationCode: 'TEC-02',

      coreStrength: 'Integrated Cloud Software & Administrative Automation',
      competitiveAdvantage: 'Centralized cloud file repository, integrated CRM/billing, and automated transactional messages.',
      typicalBusinessSituation: 'Core cloud software tools are deployed across all departments, but strict 2FA enforcement and role-based data permissions require strengthening.',

      gaps: {
        primaryGap: 'Cybersecurity vulnerability and lack of strict role-based access permissions.',
        secondaryGaps: ['Inconsistent 2FA compliance', 'Disaster recovery plan untested'],
        missingSystems: 'Enforced 2FA security protocols, role-based data access, and disaster recovery plans.',
        weakProcesses: 'Data isolated in departmental silos requiring periodic manual exports.',
        organizationalGap: 'Lack of dedicated internal IT governance and security compliance owner.',
        severity: 'Moderate',
      },

      risk: {
        riskCategory: 'Cybersecurity Vulnerability & Data Leak',
        riskDescription: 'Exposure to ransomware or client data leaks due to unmanaged access permissions.',
        riskLevel: 'Medium Risk',
        mitigationStrategy: 'Enforce role-based access security, device encryption, and tested recovery plans.',
      },

      opportunity: {
        opportunityType: 'Automation Opportunity',
        title: 'Cybersecurity Hardening & Zero-Trust Architecture',
        description: 'Deploy 2FA enforcement, role-based access control, and automated daily offsite backup verification.',
        potentialImpact: '100% protection against ransomware and data leakage.',
      },

      recommendation: {
        code: 'TEC-02',
        strategicRecommendation: 'Enforce mandatory 2FA, role-based data access controls, and automated daily offsite cloud backups.',
        targetKPI: '100% 2FA compliance and zero security policy violations.',
        expectedOutcome: 'Total protection of enterprise digital IP and customer data safety.',
        actionTimeframeDays: 90,
        urgency: 'Medium-Term Action Required (Next 60–90 Days)',
      },
    },

    '50-69': {
      id: 'TEC_50-69',
      pillarId: PillarId.TECHNOLOGY,
      pillarName: 'Technology & Systems',
      scoreBand: '50-69',
      scoreRange: { min: 50, max: 69 },
      maturityBand: MaturityBand.DEVELOPING,
      recommendationCode: 'TEC-03',

      coreStrength: 'Cloud Suite Familiarity & Basic Digital Tools',
      competitiveAdvantage: 'Usage of cloud email, messaging, and basic accounting tools.',
      typicalBusinessSituation: 'Software tools exist in silos. Routine client communications (invoice dispatch, payment reminders) are sent manually, wasting staff hours.',

      gaps: {
        primaryGap: 'Routine administrative workflows (invoicing, lead alerts) performed manually.',
        secondaryGaps: ['Manual invoice dispatches', 'Unlinked software systems', 'Manual data transfers'],
        missingSystems: 'Lack of API integration webhooks between CRM, Billing, and Operations tools.',
        weakProcesses: 'Routine customer communications and payment notifications handled manually.',
        organizationalGap: 'Inconsistent software adoption across team members due to lack of training.',
        severity: 'High',
      },

      risk: {
        riskCategory: 'Administrative Overhead Friction',
        riskDescription: 'Hundreds of wasted staff hours spent on manual invoicing, notifications, and spreadsheet transfers.',
        riskLevel: 'High Risk',
        mitigationStrategy: 'Automate transactional workflows: automated invoice dispatch, payment alerts, and lead notifications.',
      },

      opportunity: {
        opportunityType: 'Automation Opportunity',
        title: 'Software Integration & Spreadsheet Elimination',
        description: 'Connect CRM, Billing, and Operations software via webhooks/Zapier to eliminate manual duplicate data entry.',
        potentialImpact: 'Saves 10+ hours per week per employee in administrative labor.',
      },

      recommendation: {
        code: 'TEC-03',
        strategicRecommendation: 'Automate transactional workflows: automated invoice dispatch, payment alerts, and lead notifications.',
        targetKPI: '80% of routine client transaction messages automated.',
        expectedOutcome: 'Enhanced client response speed and error-free transaction workflows.',
        actionTimeframeDays: 60,
        urgency: 'Short-Term Action Required (Next 30–60 Days)',
      },
    },

    '0-49': {
      id: 'TEC_0-49',
      pillarId: PillarId.TECHNOLOGY,
      pillarName: 'Technology & Systems',
      scoreBand: '0-49',
      scoreRange: { min: 0, max: 49 },
      maturityBand: MaturityBand.AT_RISK,
      recommendationCode: 'TEC-04',

      coreStrength: 'Basic Digital Willingness & Openness to Modernization',
      competitiveAdvantage: 'Openness to adopting new digital tools to modernize business operations.',
      typicalBusinessSituation: 'Disconnected software tools forcing staff to re-type data into spreadsheets manually. Shared passwords on sticky notes, zero 2FA, and no automated offsite cloud backups.',

      gaps: {
        primaryGap: 'Disconnected software tools requiring manual duplicate data entry and spreadsheet chaos.',
        secondaryGaps: ['Shared account passwords', 'No automated cloud backups', 'High human data entry error rate'],
        missingSystems: 'Disconnected software tools forcing manual re-typing into spreadsheets.',
        weakProcesses: 'Manual invoicing, payment follow-ups, and spreadsheet data entry chaos.',
        organizationalGap: 'High security risk due to shared passwords and absence of automated cloud backups.',
        severity: 'Critical',
      },

      risk: {
        riskCategory: 'Data Loss & Human Error Exposure',
        riskDescription: 'Costly data entry errors and catastrophic IP loss from shared passwords and zero cloud backups.',
        riskLevel: 'Critical Risk',
        mitigationStrategy: 'Migrate to unified cloud suite with mandatory 2FA and daily backups.',
      },

      opportunity: {
        opportunityType: 'Automation Opportunity',
        title: 'Software Integration & Spreadsheet Elimination',
        description: 'Connect CRM, Billing, and Operations software via APIs/Zapier to eliminate manual duplicate data entry.',
        potentialImpact: 'Saves 10+ hours per week per employee in administrative labor.',
      },

      recommendation: {
        code: 'TEC-04',
        strategicRecommendation: 'Migrate to a single cloud suite (Google Workspace/MS365) and set up automated API/Zapier connectors.',
        targetKPI: 'Eliminate 10+ hours/week of manual spreadsheet data entry.',
        expectedOutcome: 'Drastic reduction in data entry errors and reclaimed productive staff time.',
        actionTimeframeDays: 30,
        urgency: 'Immediate Action Required (Next 1–30 Days)',
      },
    },
  },
};
