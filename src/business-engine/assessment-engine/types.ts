/**
 * Business Engine - Assessment Engine Types & Interfaces
 */

import { Industry } from '../business-profile';

export enum PillarId {
  LEADERSHIP = 'LDR',
  STRATEGY = 'STR',
  SALES = 'SLS',
  OPERATIONS = 'OPS',
  FINANCE = 'FIN',
  HUMAN_RESOURCES = 'HR',
  TECHNOLOGY = 'TEC',
}

export interface PillarDefinition {
  id: PillarId;
  name: string;
  code: string;
  description: string;
  weight: number; // Percentage weight in overall score calculation (sum = 100)
  iconName: string;
}

export interface AnswerOption {
  id: string;
  label: string;
  score: number; // Normalized 0 - 100 score value for this option
  description?: string;
}

export interface Question {
  id: string; // e.g. LDR-Q1
  pillarId: PillarId;
  questionNumber: number; // 1 to 21
  title: string;
  subtitle?: string;
  weight: number; // Weight within the pillar (e.g. 0.33, 0.34, 0.33)
  options: AnswerOption[];
}

export enum MaturityBand {
  AT_RISK = 'At-Risk', // 0 - 49%
  DEVELOPING = 'Developing', // 50 - 69%
  ESTABLISHED = 'Established', // 70 - 84%
  LEADER = 'Industry Leader', // 85 - 100%
}

export enum PriorityLevel {
  CRITICAL = 'Critical',
  HIGH = 'High',
  MEDIUM = 'Medium',
  LOW = 'Low',
}

export interface PillarScore {
  pillarId: PillarId;
  pillarName: string;
  rawScore: number; // 0 - 100
  weightedScore: number; // rawScore * pillarWeight
  maturityBand: MaturityBand;
  priorityLevel: PriorityLevel;
}

export interface OverallAssessmentResult {
  overallScore: number; // 0 - 100
  maturityBand: MaturityBand;
  pillarScores: Record<PillarId, PillarScore>;
  lowestPillar: PillarScore;
  highestPillar: PillarScore;
  criticalGapsCount: number;
  completedAt: string;
}

export interface RecommendationMap {
  code: string; // e.g. LDR-REC-01
  pillarId: PillarId;
  maturityBand: MaturityBand;
  keyStrength: string;
  criticalGap: string;
  strategicRecommendation: string;
  targetKPI: string;
  expectedOutcome: string;
  actionTimeframeDays: number; // e.g. 30, 60, 90 days
}
