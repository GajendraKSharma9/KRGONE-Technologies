/**
 * Business Engine - Business Intelligence Engine (Version 1)
 * Central entry point for deterministic Business Intelligence analysis.
 */

import { PillarId, OverallAssessmentResult } from '../assessment-engine/types';
import { getRecommendationForPillar } from '../assessment-engine/recommendations';
import { BusinessProfile } from '../business-profile/interfaces';
import { getRuleForPillarAndScore, getBusinessRule } from '../rule-database/lookup';
import {
  BusinessIntelligence,
  PillarAnalysis,
  DiagnosticContext,
  QuestionAnswersMap,
} from './interfaces';
import { getHealthStatus, getMaturityBandFromScore, PILLAR_NAMES } from './rules';
import { getStrengthAnalysisForPillar } from './strength';
import { getGapAnalysisForPillar } from './gaps';
import { getRiskAnalysisForPillar } from './risk';
import { getPriorityAnalysisForPillar } from './priority';
import { getOpportunityAnalysisForPillar } from './opportunities';
import { generateExecutiveSummary } from './executiveSummary';

export * from './interfaces';
export * from './rules';
export * from './strength';
export * from './gaps';
export * from './risk';
export * from './priority';
export * from './opportunities';
export * from './executiveSummary';

export function analyzePillarIntelligence(
  pillarId: PillarId,
  score: number,
  overallScore: number,
  context?: DiagnosticContext
): PillarAnalysis {
  const pillarName = PILLAR_NAMES[pillarId] || pillarId;
  const healthStatus = getHealthStatus(score);
  const maturityBand = getMaturityBandFromScore(score);
  const recommendation = getRecommendationForPillar(pillarId, maturityBand);
  const ruleEntry = getBusinessRule(pillarId, score, context);

  return {
    pillarId,
    pillarName,
    score,
    healthStatus,
    strength: getStrengthAnalysisForPillar(pillarId, score, context),
    gap: getGapAnalysisForPillar(pillarId, score, context),
    risk: getRiskAnalysisForPillar(pillarId, score, context),
    priority: getPriorityAnalysisForPillar(pillarId, score, overallScore, context),
    opportunity: getOpportunityAnalysisForPillar(pillarId, score, context),
    recommendationCode: ruleEntry.recommendationCode || recommendation.code,
    ruleEntry,
  };
}

export function generateBusinessIntelligence(
  assessment:
    | OverallAssessmentResult
    | {
        overallScore: number;
        pillarScores: Record<PillarId, { rawScore: number }>;
        questionAnswers?: QuestionAnswersMap;
        userAnswers?: QuestionAnswersMap;
        profile?: BusinessProfile;
      },
  profileArg?: BusinessProfile,
  questionAnswersArg?: QuestionAnswersMap
): BusinessIntelligence {
  const overallScore = assessment.overallScore;
  const overallHealth = getHealthStatus(overallScore);
  const maturityLevel = getMaturityBandFromScore(overallScore);

  const pillarIds: PillarId[] = [
    PillarId.LEADERSHIP,
    PillarId.STRATEGY,
    PillarId.SALES,
    PillarId.OPERATIONS,
    PillarId.FINANCE,
    PillarId.HUMAN_RESOURCES,
    PillarId.TECHNOLOGY,
  ];

  const pillarScoreMap: Record<PillarId, number> = {} as any;
  for (const pId of pillarIds) {
    const pObj = assessment.pillarScores[pId];
    pillarScoreMap[pId] = pObj ? pObj.rawScore : 20;
  }

  const effectiveProfile = profileArg || (assessment as any).profile;
  const effectiveAnswers =
    questionAnswersArg ||
    (assessment as any).questionAnswers ||
    (assessment as any).userAnswers;

  const diagnosticContext: DiagnosticContext = {
    profile: effectiveProfile,
    questionAnswers: effectiveAnswers,
    pillarScores: pillarScoreMap,
    overallScore,
  };

  const pillarAnalysis: PillarAnalysis[] = pillarIds.map((pId) => {
    const score = pillarScoreMap[pId];
    return analyzePillarIntelligence(pId, score, overallScore, diagnosticContext);
  });

  const executiveSummary = generateExecutiveSummary(overallScore, pillarAnalysis);

  return {
    overallHealth,
    maturityLevel,
    overallScore,
    executiveSummary,
    pillarAnalysis,
    generatedAt: new Date().toISOString(),
  };
}
