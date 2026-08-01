/**
 * Business Engine - Business Intelligence Engine Interfaces
 * Defines deterministic structures for strengths, gaps, risks, priorities, opportunities, and executive summary.
 */

import { PillarId, MaturityBand } from '../assessment-engine/types';
import { BusinessProfile } from '../business-profile/interfaces';
import { BusinessRuleEntry } from '../rule-database/types';

export type QuestionAnswersMap = Record<string, number | string>;

export interface DiagnosticContext {
  profile?: BusinessProfile;
  questionAnswers?: QuestionAnswersMap;
  pillarScores: Record<PillarId, number>;
  overallScore: number;
}

export type HealthStatus =
  | 'Industry Leader'
  | 'High Performing'
  | 'Growth Ready'
  | 'Needs Improvement'
  | 'Requires Attention'
  | 'Business at Risk';

export type RiskLevel = 'Critical Risk' | 'High Risk' | 'Medium Risk' | 'Low Risk';

export type IntelligencePriorityLevel = 'Critical' | 'High' | 'Medium' | 'Low';

export type OpportunityType =
  | 'Revenue Opportunity'
  | 'Cost Saving Opportunity'
  | 'Process Improvement Opportunity'
  | 'Automation Opportunity'
  | 'Market Expansion Opportunity';

export interface StrengthInsight {
  coreStrength: string;
  competitiveAdvantage: string;
  existingCapability: string;
}

export interface GapInsight {
  missingSystems: string;
  weakProcesses: string;
  organizationalGap: string;
  severity: 'Critical' | 'High' | 'Moderate' | 'Low';
}

export interface RiskInsight {
  riskCategory: string;
  riskDescription: string;
  riskLevel: RiskLevel;
  mitigationStrategy: string;
}

export interface PriorityInsight {
  priorityLevel: IntelligencePriorityLevel;
  urgency: string;
  rationale: string;
  impactScore: number; // 1 - 100
}

export interface OpportunityInsight {
  opportunityType: OpportunityType;
  title: string;
  description: string;
  potentialImpact: string;
}

export interface PillarAnalysis {
  pillarId: PillarId;
  pillarName: string;
  score: number;
  healthStatus: HealthStatus;
  strength: StrengthInsight;
  gap: GapInsight;
  risk: RiskInsight;
  priority: PriorityInsight;
  opportunity: OpportunityInsight;
  recommendationCode: string;
  ruleEntry?: BusinessRuleEntry;
}

export interface ExecutiveSummary {
  overallScore: number;
  overallHealth: HealthStatus;
  maturityLevel: MaturityBand;
  highestStrength: {
    pillarId: PillarId;
    pillarName: string;
    summary: string;
    score: number;
  };
  highestGap: {
    pillarId: PillarId;
    pillarName: string;
    summary: string;
    score: number;
  };
  highestRisk: {
    pillarId: PillarId;
    pillarName: string;
    summary: string;
    riskLevel: RiskLevel;
  };
  highestPriority: {
    pillarId: PillarId;
    pillarName: string;
    summary: string;
    priorityLevel: IntelligencePriorityLevel;
  };
  highestOpportunity: {
    pillarId: PillarId;
    pillarName: string;
    summary: string;
    opportunityType: OpportunityType;
  };
}

export interface BusinessIntelligence {
  overallHealth: HealthStatus;
  maturityLevel: MaturityBand;
  overallScore: number;
  executiveSummary: ExecutiveSummary;
  pillarAnalysis: PillarAnalysis[];
  generatedAt: string;
}
