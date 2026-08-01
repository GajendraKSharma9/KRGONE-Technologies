/**
 * Business Engine - AI Narrative Engine Interfaces
 */

import { BusinessProfile } from '../business-profile/interfaces';
import { BusinessIntelligence } from '../business-intelligence';
import { RecommendationEngineResult } from '../recommendation-engine/interfaces';

export interface ExecutiveSummaryNarrative {
  overallHealth: string;
  overallPosition: string;
  overallGrowthPotential: string;
  combinedSummary: string;
}

export interface PillarNarrative {
  pillarName: string;
  currentPosition: string;
  keyStrength: string;
  improvementArea: string;
  businessImpact: string;
  combinedSummary: string;
}

export interface RecommendationNarrative {
  immediateActions: string;
  plan30Days: string;
  plan60Days: string;
  plan90Days: string;
}

export interface OpportunityNarrative {
  revenueOpportunity: string;
  efficiencyOpportunity: string;
  growthOpportunity: string;
}

export interface AINarrativeResult {
  executiveSummary: ExecutiveSummaryNarrative;
  pillarNarratives: Record<string, PillarNarrative>;
  recommendationNarratives: Record<string, RecommendationNarrative>;
  opportunitySummary: OpportunityNarrative;
  closingSummary: string;
}
