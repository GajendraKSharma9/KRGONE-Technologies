/**
 * Business Engine - Recommendation Engine (Version 1)
 * Rule-based execution layer that converts Business Intelligence into structured, actionable business plans.
 */

import { PillarId, MaturityBand, OverallAssessmentResult } from '../assessment-engine/types';
import { ScoreBandKey } from '../rule-database/types';
import { getScoreBandKeyFromScore } from '../rule-database/lookup';
import { BusinessIntelligence, PillarAnalysis } from '../business-intelligence';
import {
  RecommendationEntry,
  PillarRecommendationResult,
  RecommendationEngineResult,
} from './interfaces';
import { RECOMMENDATION_DATABASE, getRecommendationByCode } from './recommendations';
import { getKPIsForRecommendation } from './kpis';
import { getOutcomesForRecommendation } from './outcomes';

/**
 * Main execution class for the deterministic Recommendation Engine
 */
export class RecommendationEngine {
  /**
   * Generates a complete RecommendationEngineResult from Business Intelligence
   */
  public static generate(bi: BusinessIntelligence): RecommendationEngineResult {
    const overallScore = bi.overallScore;
    const maturityBand = bi.maturityLevel as MaturityBand;

    const pillarRecommendations: Record<PillarId, PillarRecommendationResult> = {} as any;

    // Track lowest scoring pillar for primary focus
    let lowestScore = 101;
    let primaryFocusPillarId: PillarId = PillarId.LEADERSHIP;
    let primaryFocusCode = 'LDR-04';

    // Process all 7 Growth Pillars
    for (const pa of bi.pillarAnalysis) {
      const pId = pa.pillarId;
      const score = pa.score;
      const scoreBand: ScoreBandKey = getScoreBandKeyFromScore(score);

      // Derive code e.g. LDR-01, SLS-03
      const code = pa.recommendationCode || pa.ruleEntry?.recommendationCode || `${pId}-03`;
      const recEntry = getRecommendationByCode(code);

      pillarRecommendations[pId] = {
        pillarId: pId,
        pillarName: pa.pillarName,
        score,
        scoreBand,
        maturityBand: pa.ruleEntry?.maturityBand || maturityBand,
        recommendationCode: code,
        entry: recEntry,
      };

      if (score < lowestScore) {
        lowestScore = score;
        primaryFocusPillarId = pId;
        primaryFocusCode = code;
      }
    }

    // Sort pillars by score ascending (lowest score first) for priority roadmap ordering
    const sortedPillars = [...bi.pillarAnalysis].sort((a, b) => a.score - b.score);

    // Build structured 90-day priority roadmap phases
    const immediatePhases: { pillarId: PillarId; pillarName: string; code: string; actions: string[] }[] = [];
    const day30Phases: { pillarId: PillarId; pillarName: string; code: string; actions: string[] }[] = [];
    const day60Phases: { pillarId: PillarId; pillarName: string; code: string; actions: string[] }[] = [];
    const day90Phases: { pillarId: PillarId; pillarName: string; code: string; actions: string[] }[] = [];

    for (const pa of sortedPillars) {
      const rec = pillarRecommendations[pa.pillarId];
      if (!rec) continue;

      const e = rec.entry;

      if (e.immediateActions && e.immediateActions.length > 0) {
        immediatePhases.push({
          pillarId: pa.pillarId,
          pillarName: pa.pillarName,
          code: e.recommendationCode,
          actions: e.immediateActions.slice(0, 3),
        });
      }

      if (e.plan30Days && e.plan30Days.length > 0) {
        day30Phases.push({
          pillarId: pa.pillarId,
          pillarName: pa.pillarName,
          code: e.recommendationCode,
          actions: e.plan30Days.slice(0, 3),
        });
      }

      if (e.plan60Days && e.plan60Days.length > 0) {
        day60Phases.push({
          pillarId: pa.pillarId,
          pillarName: pa.pillarName,
          code: e.recommendationCode,
          actions: e.plan60Days.slice(0, 3),
        });
      }

      if (e.plan90Days && e.plan90Days.length > 0) {
        day90Phases.push({
          pillarId: pa.pillarId,
          pillarName: pa.pillarName,
          code: e.recommendationCode,
          actions: e.plan90Days.slice(0, 3),
        });
      }
    }

    // Consolidate Priority KPIs (prioritizing lowest scoring pillars)
    const priorityKPIsSet = new Set<string>();
    for (const pa of sortedPillars) {
      const rec = pillarRecommendations[pa.pillarId];
      if (rec) {
        const kpis = getKPIsForRecommendation(rec.entry);
        for (const k of kpis) {
          priorityKPIsSet.add(k);
          if (priorityKPIsSet.size >= 7) break;
        }
      }
      if (priorityKPIsSet.size >= 7) break;
    }

    // Consolidate Expected Business Outcomes
    const outcomesSet = new Set<string>();
    for (const pa of sortedPillars) {
      const rec = pillarRecommendations[pa.pillarId];
      if (rec) {
        const outcomes = getOutcomesForRecommendation(rec.entry);
        for (const o of outcomes) {
          outcomesSet.add(o);
          if (outcomesSet.size >= 6) break;
        }
      }
      if (outcomesSet.size >= 6) break;
    }

    return {
      overallScore,
      maturityBand,
      primaryFocusPillarId,
      primaryFocusCode,
      pillarRecommendations,
      roadmap: {
        immediate: immediatePhases,
        day30: day30Phases,
        day60: day60Phases,
        day90: day90Phases,
      },
      priorityKPIs: Array.from(priorityKPIsSet),
      expectedBusinessOutcomes: Array.from(outcomesSet),
    };
  }

  /**
   * Directly lookup a single recommendation entry by Recommendation Code (e.g., 'LDR-02')
   */
  public static getRecommendationByCode(code: string): RecommendationEntry {
    return getRecommendationByCode(code);
  }
}

/**
 * Functional export alias for generate business recommendations
 */
export function generateRecommendations(bi: BusinessIntelligence): RecommendationEngineResult {
  return RecommendationEngine.generate(bi);
}
