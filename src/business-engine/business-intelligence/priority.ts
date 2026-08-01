/**
 * Business Engine - Priority Analysis Engine
 * Calculates implementation priority, urgency, rationale, and impact score per pillar.
 */

import { PillarId } from '../assessment-engine/types';
import { IntelligencePriorityLevel, PriorityInsight, DiagnosticContext } from './interfaces';
import { getPillarQuestionBreakdown, PILLAR_NAMES } from './rules';

export function getPriorityAnalysisForPillar(
  pillarId: PillarId,
  score: number,
  overallScore: number,
  context?: DiagnosticContext
): PriorityInsight {
  const breakdown = getPillarQuestionBreakdown(pillarId, score, context);
  const lowestQScore = breakdown.lowestQScore;
  const challenge = (context?.profile?.challenge?.biggestChallenge || (context?.profile as any)?.goalsAndChallenges?.biggestChallenge || '').toLowerCase();
  const goal = (context?.profile?.objective?.primaryGoal || (context?.profile as any)?.goalsAndChallenges?.primaryGoal || '').toLowerCase();

  const isProfileChallenge =
    (pillarId === PillarId.FINANCE && (challenge.includes('cash') || challenge.includes('finance') || challenge.includes('margin'))) ||
    (pillarId === PillarId.SALES && (challenge.includes('sales') || challenge.includes('lead') || challenge.includes('revenue') || challenge.includes('customer'))) ||
    (pillarId === PillarId.OPERATIONS && (challenge.includes('sop') || challenge.includes('delivery') || challenge.includes('operation') || challenge.includes('quality'))) ||
    (pillarId === PillarId.HUMAN_RESOURCES && (challenge.includes('team') || challenge.includes('employee') || challenge.includes('attrition') || challenge.includes('hire'))) ||
    (pillarId === PillarId.LEADERSHIP && (challenge.includes('owner') || challenge.includes('delegat') || challenge.includes('time')));

  const getPriorityLevel = (s: number, ov: number, lowestQ: number): IntelligencePriorityLevel => {
    if (lowestQ <= 20 || s < 50 || (lowestQ <= 40 && isProfileChallenge)) return 'Critical';
    if (s < 65 || s < ov - 10 || lowestQ <= 40) return 'High';
    if (s < 80) return 'Medium';
    return 'Low';
  };

  const priorityLevel = getPriorityLevel(score, overallScore, lowestQScore);
  const pillarName = PILLAR_NAMES[pillarId];

  const challengeNote = isProfileChallenge
    ? ` Directly addresses your stated primary business challenge: "${context?.profile?.challenge?.biggestChallenge || (context?.profile as any)?.goalsAndChallenges?.biggestChallenge}".`
    : '';

  switch (priorityLevel) {
    case 'Critical':
      return {
        priorityLevel,
        urgency: 'Immediate Action Required (Next 1–30 Days)',
        rationale: `Pillar score (${score}/100) with a severe single-question failure point (${lowestQScore}/100) creates a major operational bottleneck choking business growth.${challengeNote}`,
        impactScore: 95,
      };

    case 'High':
      return {
        priorityLevel,
        urgency: 'Short-Term Action Required (Next 30–60 Days)',
        rationale: `Pillar score (${score}/100) is below operational readiness standards, hindering efficiency and revenue scaling.${challengeNote}`,
        impactScore: 80,
      };

    case 'Medium':
      return {
        priorityLevel,
        urgency: 'Medium-Term Action Required (Next 60–90 Days)',
        rationale: `Pillar score (${score}/100) shows baseline functional capability, but system optimization will unlock significant margin expansion.${challengeNote}`,
        impactScore: 65,
      };

    case 'Low':
      return {
        priorityLevel,
        urgency: 'Long-Term Strategic Refinement (Next 90–180 Days)',
        rationale: `Pillar score (${score}/100) represents high operational maturity and competitive strength; focus is on maintaining leadership edge.${challengeNote}`,
        impactScore: 40,
      };
  }
}
