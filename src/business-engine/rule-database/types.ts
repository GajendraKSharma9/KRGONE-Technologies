/**
 * Business Engine - Business Rule Database (Knowledge Base) Types
 */

import { PillarId, MaturityBand } from '../assessment-engine/types';
import { BusinessProfile } from '../business-profile/interfaces';

export type ScoreBandKey = '85-100' | '70-84' | '50-69' | '0-49';

/**
 * Context-aware evaluation payload for rule lookup in Version 1 & Version 2 rule engines.
 * Supports granular question responses, firmographic data, and scoring maps.
 */
export interface AssessmentContext {
  /** Individual diagnostic question response scores or choice IDs (e.g., Q1..Q28) */
  questionAnswers?: Record<string | number, number | string>;
  /** Complete business firmographic profile */
  profile?: BusinessProfile;
  /** Primary industry sector */
  industry?: string;
  /** Nature of business operations (e.g., B2B, B2C, Hybrid) */
  businessNature?: string;
  /** Business revenue model */
  businessModel?: string;
  /** Annual revenue range category */
  revenueRange?: string;
  /** Total employee workforce count bracket */
  employeeRange?: string;
  /** Overall company diagnostic score (0-100) */
  overallScore?: number;
  /** Pillar score mapping for cross-pillar dependency evaluations */
  pillarScores?: Record<PillarId, number>;
  /** Extensible parameters reserved for Version 2 rule engine overrides */
  customRulesContext?: Record<string, any>;
}

export interface ScoreBandRange {
  min: number;
  max: number;
  key: ScoreBandKey;
  label: string;
}

export interface RuleGapsProfile {
  primaryGap: string;
  secondaryGaps: string[];
  missingSystems: string;
  weakProcesses: string;
  organizationalGap: string;
  severity: 'Critical' | 'High' | 'Moderate' | 'Low';
}

export interface RuleRiskProfile {
  riskCategory: string;
  riskDescription: string;
  riskLevel: 'Critical Risk' | 'High Risk' | 'Medium Risk' | 'Low Risk';
  mitigationStrategy: string;
}

export interface RuleOpportunityProfile {
  opportunityType: 'Revenue Opportunity' | 'Cost Saving Opportunity' | 'Process Improvement Opportunity' | 'Market Expansion Opportunity' | 'Automation Opportunity';
  title: string;
  description: string;
  potentialImpact: string;
}

export interface RuleRecommendationProfile {
  code: string; // e.g. "LDR-01", "LDR-02"
  strategicRecommendation: string;
  targetKPI: string;
  expectedOutcome: string;
  actionTimeframeDays: number;
  urgency: string;
}

export interface BusinessRuleEntry {
  id: string; // e.g., "LDR_85-100"
  pillarId: PillarId;
  pillarName: string;
  scoreBand: ScoreBandKey;
  scoreRange: { min: number; max: number };
  maturityBand: MaturityBand;
  recommendationCode: string; // e.g., "LDR-01", "LDR-02"
  
  // Consulting Knowledge Base Content
  coreStrength: string;
  competitiveAdvantage: string;
  typicalBusinessSituation: string;
  
  gaps: RuleGapsProfile;
  risk: RuleRiskProfile;
  opportunity: RuleOpportunityProfile;
  recommendation: RuleRecommendationProfile;
}

export type PillarRuleSet = Record<ScoreBandKey, BusinessRuleEntry>;
export type FullKnowledgeBase = Record<PillarId, PillarRuleSet>;
