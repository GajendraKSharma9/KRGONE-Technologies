/**
 * Business Engine - Recommendation Engine Expected Outcomes Utility
 */

import { RecommendationEntry } from './interfaces';

/**
 * Standard business outcomes across core operational categories
 */
export const CORE_BUSINESS_OUTCOMES = [
  'Revenue Growth & Margin Expansion',
  'Faster Operations & Reduced Fulfillment Bottlenecks',
  'Better Cash Flow Predictability & Working Capital Control',
  'Improved Customer Retention & Lifetime Value',
  'Stronger Team Accountability & Operational Independence',
  'Reduced Founder Dependency & Scalable Management Structure',
];

/**
 * Extracts and formats expected business outcomes for a recommendation entry (max 3 items)
 */
export function getOutcomesForRecommendation(entry: RecommendationEntry): string[] {
  if (entry.expectedOutcomes && entry.expectedOutcomes.length > 0) {
    return entry.expectedOutcomes.slice(0, 3);
  }
  return CORE_BUSINESS_OUTCOMES.slice(0, 3);
}
