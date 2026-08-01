/**
 * Business Engine - Business Intelligence Rules
 * Deterministic mapping rules for Health Status and Maturity Band.
 */

import { HealthStatus, QuestionAnswersMap, DiagnosticContext } from './interfaces';
import { MaturityBand, PillarId } from '../assessment-engine/types';

export function getHealthStatus(score: number): HealthStatus {
  if (score >= 90) return 'Industry Leader';
  if (score >= 80) return 'High Performing';
  if (score >= 70) return 'Growth Ready';
  if (score >= 60) return 'Needs Improvement';
  if (score >= 50) return 'Requires Attention';
  return 'Business at Risk';
}

export function getMaturityBandFromScore(score: number): MaturityBand {
  if (score >= 85) return MaturityBand.LEADER;
  if (score >= 70) return MaturityBand.ESTABLISHED;
  if (score >= 50) return MaturityBand.DEVELOPING;
  return MaturityBand.AT_RISK;
}

export const PILLAR_NAMES: Record<PillarId, string> = {
  [PillarId.LEADERSHIP]: 'Leadership & Vision',
  [PillarId.STRATEGY]: 'Sales & Revenue',
  [PillarId.SALES]: 'Marketing & Customer Growth',
  [PillarId.OPERATIONS]: 'Operations & Process',
  [PillarId.FINANCE]: 'Finance & Business Performance',
  [PillarId.HUMAN_RESOURCES]: 'People & Leadership',
  [PillarId.TECHNOLOGY]: 'Technology & Business Innovation',
};

export const PILLAR_QUESTION_IDS: Record<PillarId, [string, string, string]> = {
  [PillarId.LEADERSHIP]: ['LDR01', 'LDR02', 'LDR03'],
  [PillarId.STRATEGY]: ['STR01', 'STR02', 'STR03'],
  [PillarId.SALES]: ['SLS01', 'SLS02', 'SLS03'],
  [PillarId.OPERATIONS]: ['OPS01', 'OPS02', 'OPS03'],
  [PillarId.FINANCE]: ['FIN01', 'FIN02', 'FIN03'],
  [PillarId.HUMAN_RESOURCES]: ['HR01', 'HR02', 'HR03'],
  [PillarId.TECHNOLOGY]: ['TEC01', 'TEC02', 'TEC03'],
};

export const QUESTION_NUMBERS: Record<string, number> = {
  LDR01: 1, LDR02: 2, LDR03: 3,
  STR01: 4, STR02: 5, STR03: 6,
  SLS01: 7, SLS02: 8, SLS03: 9,
  OPS01: 10, OPS02: 11, OPS03: 12,
  FIN01: 13, FIN02: 14, FIN03: 15,
  HR01: 16, HR02: 17, HR03: 18,
  TEC01: 19, TEC02: 20, TEC03: 21,
};

/**
 * Extract normalized question score (20 - 100) from answers map
 */
export function parseSingleQuestionScore(
  questionId: string,
  answersMap?: QuestionAnswersMap,
  fallbackScore: number = 60
): number {
  if (!answersMap) return fallbackScore;

  const qNum = QUESTION_NUMBERS[questionId];
  const keysToTry = [
    questionId,
    `Q${qNum}`,
    `q${qNum}`,
    `${qNum}`,
    `question_${qNum}`,
    questionId.toLowerCase(),
  ];

  for (const key of keysToTry) {
    if (answersMap[key] !== undefined && answersMap[key] !== null) {
      const val = answersMap[key];
      if (typeof val === 'number') {
        if (val >= 1 && val <= 5) return val * 20;
        if (val >= 20 && val <= 100) return val;
      }
      if (typeof val === 'string') {
        const parsed = parseInt(val, 10);
        if (!isNaN(parsed)) {
          if (parsed >= 1 && parsed <= 5) return parsed * 20;
          if (parsed >= 20 && parsed <= 100) return parsed;
        }
        if (val.includes('-O1')) return 20;
        if (val.includes('-O2')) return 40;
        if (val.includes('-O3')) return 60;
        if (val.includes('-O4')) return 80;
        if (val.includes('-O5')) return 100;
      }
    }
  }

  return fallbackScore;
}

export interface PillarQuestionAnalysis {
  q1Id: string;
  q1Score: number;
  q2Id: string;
  q2Score: number;
  q3Id: string;
  q3Score: number;
  highestQId: string;
  highestQScore: number;
  lowestQId: string;
  lowestQScore: number;
  spread: number;
}

export function getPillarQuestionBreakdown(
  pillarId: PillarId,
  pillarScore: number,
  context?: DiagnosticContext
): PillarQuestionAnalysis {
  const [q1Id, q2Id, q3Id] = PILLAR_QUESTION_IDS[pillarId];
  const answersMap = context?.questionAnswers;

  const q1Score = parseSingleQuestionScore(q1Id, answersMap, pillarScore);
  const q2Score = parseSingleQuestionScore(q2Id, answersMap, pillarScore);
  const q3Score = parseSingleQuestionScore(q3Id, answersMap, pillarScore);

  const items = [
    { id: q1Id, score: q1Score },
    { id: q2Id, score: q2Score },
    { id: q3Id, score: q3Score },
  ];

  items.sort((a, b) => b.score - a.score);

  const highest = items[0];
  const lowest = items[2];

  return {
    q1Id,
    q1Score,
    q2Id,
    q2Score,
    q3Id,
    q3Score,
    highestQId: highest.id,
    highestQScore: highest.score,
    lowestQId: lowest.id,
    lowestQScore: lowest.score,
    spread: highest.score - lowest.score,
  };
}
