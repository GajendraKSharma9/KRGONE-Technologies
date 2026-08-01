/**
 * Business Engine - AI Narrative Engine
 * Transforms structured data into polished consulting language.
 */

import { BusinessProfile } from '../business-profile/interfaces';
import { BusinessIntelligence } from '../business-intelligence';
import { RecommendationEngineResult } from '../recommendation-engine/interfaces';
import {
  AINarrativeResult,
  ExecutiveSummaryNarrative,
  PillarNarrative,
  RecommendationNarrative,
  OpportunityNarrative,
} from './interfaces';
import { TEMPLATES } from './templates';
import { fillTemplate, formatBulletPoints, cleanForInjection } from './formatter';

export class AINarrativeEngine {
  /**
   * Generates a complete AINarrativeResult using deterministic templates.
   * This ensures high-quality professional tone without relying on external LLM APIs,
   * while remaining 100% faithful to the structured data.
   */
  public static generateNarrative(
    businessProfile: BusinessProfile,
    bi: BusinessIntelligence,
    recommendations: RecommendationEngineResult
  ): AINarrativeResult {
    // Generate Executive Summary
    const execHealth = fillTemplate(TEMPLATES.EXECUTIVE_SUMMARY.HEALTH, {
      score: bi.overallScore,
      maturityBand: bi.maturityLevel,
      healthStatus: cleanForInjection(bi.overallHealth),
    });

    const sortedPillars = [...bi.pillarAnalysis].sort((a, b) => b.score - a.score);
    const topPillars = sortedPillars.slice(0, 2).map((p) => p.pillarName).join(' and ');
    const bottomPillars = sortedPillars.slice(-2).map((p) => p.pillarName).join(' and ');

    const execPosition = fillTemplate(TEMPLATES.EXECUTIVE_SUMMARY.POSITION, {
      maturityBand: bi.maturityLevel,
      industry: businessProfile?.business?.industry || 'commercial',
      strengthsSummary: `core competencies in ${topPillars}`,
    });

    const execPotential = fillTemplate(TEMPLATES.EXECUTIVE_SUMMARY.POTENTIAL, {
      focusAreas: bottomPillars || 'key operational segments',
    });

    const executiveSummary: ExecutiveSummaryNarrative = {
      overallHealth: execHealth,
      overallPosition: execPosition,
      overallGrowthPotential: execPotential,
      combinedSummary: `${execHealth} ${execPosition} ${execPotential}`,
    };

        // Generate Pillar and Recommendation Narratives
    const pillarNarratives: Record<string, PillarNarrative> = {};
    const recommendationNarratives: Record<string, RecommendationNarrative> = {};

    for (const pa of bi.pillarAnalysis) {
      const recResult = recommendations.pillarRecommendations[pa.pillarId];
      if (!recResult) continue;

      const score = pa.score;
      let strengthTemplate = '';
      let improvementTemplate = '';
      
      if (score >= 85) {
        strengthTemplate = "The organization demonstrates strong leadership and robust capabilities. Specifically, the business excels in {{keyStrength}}.";
        improvementTemplate = "To maintain this elite performance, the focus should be on continuous optimization and addressing minor friction points such as {{improvementArea}}.";
      } else if (score >= 70) {
        strengthTemplate = "Current operations highlight a good capability with a reliable baseline for ongoing expansion. Specifically, the business demonstrates {{keyStrength}}.";
        improvementTemplate = "To support sustainable growth, additional structure is recommended. There are clear optimization opportunities, particularly in {{improvementArea}}.";
      } else if (score >= 50) {
        strengthTemplate = "The business exhibits balanced strengths alongside notable improvement areas. A key foundational strength is {{keyStrength}}.";
        improvementTemplate = "However, there are significant areas requiring attention to prevent stagnation. Addressing {{improvementArea}} is critical.";
      } else {
        strengthTemplate = "The assessment indicates minimal foundational strengths, though there is baseline activity in {{keyStrength}}.";
        improvementTemplate = "There are significant operational gaps that require immediate, high-priority interventions. Specifically, you must urgently address {{improvementArea}}.";
      }

      const currentPosition = fillTemplate(TEMPLATES.PILLAR.POSITION, {
        pillarName: pa.pillarName,
        maturityBand: recResult.maturityBand,
        score: pa.score,
      });

      const keyStrength = fillTemplate(strengthTemplate, {
        keyStrength: cleanForInjection(pa.strength?.coreStrength || 'foundational practices'),
      });

      const improvementArea = fillTemplate(improvementTemplate, {
        improvementArea: cleanForInjection(pa.gap?.weakProcesses || pa.gap?.missingSystems || 'identifying and resolving operational bottlenecks'),
      });

      const businessImpact = fillTemplate(TEMPLATES.PILLAR.IMPACT, {
        businessImpact: cleanForInjection(pa.ruleEntry?.recommendation?.strategicRecommendation || 'enhance stability and growth'),
      });

      pillarNarratives[pa.pillarId] = {
        pillarName: pa.pillarName,
        currentPosition,
        keyStrength,
        improvementArea,
        businessImpact,
        combinedSummary: `${currentPosition}\n\n${keyStrength}\n\n${improvementArea}\n\n${businessImpact}`,
      };

      const entry = recResult.entry;
      recommendationNarratives[pa.pillarId] = {
        immediateActions: formatBulletPoints(entry.immediateActions),
        plan30Days: formatBulletPoints(entry.plan30Days),
        plan60Days: formatBulletPoints(entry.plan60Days),
        plan90Days: formatBulletPoints(entry.plan90Days),
      };
    }
    // Generate Opportunity Summary
    const opportunitySummary: OpportunityNarrative = {
      revenueOpportunity: TEMPLATES.OPPORTUNITY.REVENUE,
      efficiencyOpportunity: TEMPLATES.OPPORTUNITY.EFFICIENCY,
      growthOpportunity: TEMPLATES.OPPORTUNITY.GROWTH,
    };

    // Closing Summary
    const closingSummary = TEMPLATES.CLOSING;

    return {
      executiveSummary,
      pillarNarratives,
      recommendationNarratives,
      opportunitySummary,
      closingSummary,
    };
  }
}

/**
 * Functional export alias for generating narratives
 */
export function generateNarrative(
  businessProfile: BusinessProfile,
  bi: BusinessIntelligence,
  recommendations: RecommendationEngineResult
): AINarrativeResult {
  return AINarrativeEngine.generateNarrative(businessProfile, bi, recommendations);
}

