/**
 * Business Engine - Business Rules & Threshold Definitions
 */

import { MaturityBand, PriorityLevel, PillarId } from './types';

export interface ScoreBandRule {
  maturityBand: MaturityBand;
  minScore: number; // Inclusive
  maxScore: number; // Inclusive
  priorityLevel: PriorityLevel;
  badgeColor: string;
  badgeLabel: string;
  summaryText: string;
}

export const SCORE_BAND_RULES: Record<MaturityBand, ScoreBandRule> = {
  [MaturityBand.AT_RISK]: {
    maturityBand: MaturityBand.AT_RISK,
    minScore: 0,
    maxScore: 49,
    priorityLevel: PriorityLevel.CRITICAL,
    badgeColor: '#EF4444', // Red
    badgeLabel: 'At-Risk (High Vulnerability)',
    summaryText: 'Critical operational friction detected. Urgent deployment of foundational systems and founder decentralization required within 30 days.',
  },
  [MaturityBand.DEVELOPING]: {
    maturityBand: MaturityBand.DEVELOPING,
    minScore: 50,
    maxScore: 69,
    priorityLevel: PriorityLevel.HIGH,
    badgeColor: '#F59E0B', // Amber
    badgeLabel: 'Developing (Bottlenecks Present)',
    summaryText: 'Operational foundation exists but suffers from manual friction and channel dependency. Process standardization recommended in 60 days.',
  },
  [MaturityBand.ESTABLISHED]: {
    maturityBand: MaturityBand.ESTABLISHED,
    minScore: 70,
    maxScore: 84,
    priorityLevel: PriorityLevel.MEDIUM,
    badgeColor: '#3B82F6', // Blue
    badgeLabel: 'Established (Scaling Ready)',
    summaryText: 'Solid operational efficiency and revenue stability. Optimization focus on automated expansion and cross-departmental leverage in 90 days.',
  },
  [MaturityBand.LEADER]: {
    maturityBand: MaturityBand.LEADER,
    minScore: 85,
    maxScore: 100,
    priorityLevel: PriorityLevel.LOW,
    badgeColor: '#10B981', // Green
    badgeLabel: 'Industry Leader (Elite Systems)',
    summaryText: 'Exceptional systemization and autonomous performance. Focus on category dominance, strategic M&A, or new market penetration.',
  },
};

/**
 * Priority Action SLA Window in Days based on Priority Level
 */
export const PRIORITY_SLA_DAYS: Record<PriorityLevel, number> = {
  [PriorityLevel.CRITICAL]: 30,
  [PriorityLevel.HIGH]: 60,
  [PriorityLevel.MEDIUM]: 90,
  [PriorityLevel.LOW]: 180,
};
