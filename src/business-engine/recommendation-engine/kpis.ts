/**
 * Business Engine - Recommendation Engine KPI Tracking Metrics Utility
 */

import { PillarId } from '../assessment-engine/types';
import { RecommendationEntry } from './interfaces';

/**
 * Standardized KPI metrics repository grouped by Growth Pillar
 */
export const DEFAULT_PILLAR_KPIS: Record<PillarId, string[]> = {
  [PillarId.LEADERSHIP]: [
    'Delegation Rate (%)',
    'Executive Decision Turnaround Time (Hours)',
    'Weekly Leadership Alignment Review Frequency',
  ],
  [PillarId.STRATEGY]: [
    'Unique Value Proposition Win Rate (%)',
    'Strategic Initiative Execution On-Time Rate (%)',
    'Market Share & Segment Revenue Expansion Rate',
  ],
  [PillarId.SALES]: [
    'Monthly Qualified Sales Leads',
    'Sales Pipeline Lead Conversion Rate (%)',
    'Average Sales Cycle Duration & Deal Size',
  ],
  [PillarId.OPERATIONS]: [
    'SOP Process Compliance Rate (%)',
    'Order Delivery & Fulfillment Cycle Time',
    'Customer Quality Complaints & Re-work Rate (%)',
  ],
  [PillarId.FINANCE]: [
    'Gross & Net Profit Margin Percentage (%)',
    'Operating Cash Flow Runway (Months)',
    'Accounts Receivable Outstanding Days (DSO)',
  ],
  [PillarId.HUMAN_RESOURCES]: [
    'Employee Retention & Turnover Rate (%)',
    'Key Position Hiring Cycle Time (Days)',
    'Monthly Team Performance Scorecard Completion (%)',
  ],
  [PillarId.TECHNOLOGY]: [
    'Core System Uptime & Availability (%)',
    'Manual Workaround & Re-entry Reduction Rate (%)',
    'Cybersecurity & Automated Backup Compliance (%)',
  ],
};

/**
 * Extracts normalized top KPIs for a specific recommendation code (max 3 items)
 */
export function getKPIsForRecommendation(entry: RecommendationEntry): string[] {
  if (entry.kpis && entry.kpis.length > 0) {
    return entry.kpis.slice(0, 3);
  }
  return (DEFAULT_PILLAR_KPIS[entry.pillarId] || []).slice(0, 3);
}
