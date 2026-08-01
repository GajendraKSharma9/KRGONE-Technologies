/**
 * Business Engine - Recommendation Engine Action Plans Utility
 */

import { RecommendationEntry } from './interfaces';

export interface ActionPlanMilestones {
  immediateActions: string[];
  plan30Days: string[];
  plan60Days: string[];
  plan90Days: string[];
}

/**
 * Extracts and enforces maximum 3 bullet points per milestone phase from a recommendation entry
 */
export function getActionPlanMilestones(entry: RecommendationEntry): ActionPlanMilestones {
  return {
    immediateActions: entry.immediateActions.slice(0, 3),
    plan30Days: entry.plan30Days.slice(0, 3),
    plan60Days: entry.plan60Days.slice(0, 3),
    plan90Days: entry.plan90Days.slice(0, 3),
  };
}

/**
 * Validates that an action plan respects the MSME constraint (<= 3 bullet points per section)
 */
export function validateActionPlanRule(entry: RecommendationEntry): boolean {
  return (
    entry.immediateActions.length <= 3 &&
    entry.plan30Days.length <= 3 &&
    entry.plan60Days.length <= 3 &&
    entry.plan90Days.length <= 3 &&
    entry.kpis.length <= 3 &&
    entry.expectedOutcomes.length <= 3
  );
}
