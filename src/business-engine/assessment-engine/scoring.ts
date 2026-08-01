/**
 * Business Engine - Scoring Matrix & Health Score Calculations
 */

import {
  PillarId,
  MaturityBand,
  PriorityLevel,
  PillarScore,
  OverallAssessmentResult,
} from './types';
import { PILLARS } from './pillars';
import { ASSESSMENT_QUESTIONS } from './questions';

/**
 * Maps raw score (0-100) to MaturityBand
 */
export function calculateMaturityBand(score: number): MaturityBand {
  if (score >= 85) return MaturityBand.LEADER;
  if (score >= 70) return MaturityBand.ESTABLISHED;
  if (score >= 50) return MaturityBand.DEVELOPING;
  return MaturityBand.AT_RISK;
}

/**
 * Maps raw score (0-100) to PriorityLevel
 */
export function calculatePriorityLevel(score: number): PriorityLevel {
  if (score < 50) return PriorityLevel.CRITICAL;
  if (score < 70) return PriorityLevel.HIGH;
  if (score < 85) return PriorityLevel.MEDIUM;
  return PriorityLevel.LOW;
}

/**
 * Calculates Pillar Scores & Overall Composite Health Score
 * @param userAnswers Map of Question ID -> Option ID (or raw score 25|50|75|100)
 */
export function calculateAssessmentResult(
  userAnswers: Record<string, number | string>
): OverallAssessmentResult {
  const pillarScores: Record<PillarId, PillarScore> = {} as any;

  let totalWeightedScore = 0;
  let criticalGapsCount = 0;

  const pillarIds = Object.values(PillarId);

  pillarIds.forEach((pId) => {
    const pQuestions = ASSESSMENT_QUESTIONS.filter((q) => q.pillarId === pId);
    let pRawScore = 0;

    pQuestions.forEach((q) => {
      const answerVal = userAnswers[q.id];
      let questionScore = 20; // default baseline (Level 1) if unanswered

      if (typeof answerVal === 'number') {
        if (answerVal >= 1 && answerVal <= 5) {
          questionScore = answerVal * 20;
        } else {
          questionScore = answerVal;
        }
      } else if (typeof answerVal === 'string') {
        // Find matching option
        const selectedOpt = q.options.find((o) => o.id === answerVal);
        if (selectedOpt) {
          questionScore = selectedOpt.score;
        }
      }

      pRawScore += questionScore * q.weight;
    });

    const pillarDef = PILLARS[pId];
    const roundedRawScore = Math.round(pRawScore);
    const weightedContribution = roundedRawScore * pillarDef.weight;
    totalWeightedScore += weightedContribution;

    const mBand = calculateMaturityBand(roundedRawScore);
    const pLevel = calculatePriorityLevel(roundedRawScore);

    if (pLevel === PriorityLevel.CRITICAL) {
      criticalGapsCount += 1;
    }

    pillarScores[pId] = {
      pillarId: pId,
      pillarName: pillarDef.name,
      rawScore: roundedRawScore,
      weightedScore: Math.round(weightedContribution * 10) / 10,
      maturityBand: mBand,
      priorityLevel: pLevel,
    };
  });

  const overallScore = Math.min(100, Math.max(0, Math.round(totalWeightedScore)));
  const overallMaturityBand = calculateMaturityBand(overallScore);

  const sortedPillars = Object.values(pillarScores).sort((a, b) => a.rawScore - b.rawScore);
  const lowestPillar = sortedPillars[0];
  const highestPillar = sortedPillars[sortedPillars.length - 1];

  return {
    overallScore,
    maturityBand: overallMaturityBand,
    pillarScores,
    lowestPillar,
    highestPillar,
    criticalGapsCount,
    completedAt: new Date().toISOString(),
  };
}
