/**
 * Business Engine - Executive Summary Generator
 * Synthesizes top strengths, critical gaps, highest risks, priorities, and opportunities into a structured object.
 */

import { ExecutiveSummary, PillarAnalysis, HealthStatus, RiskLevel, IntelligencePriorityLevel, OpportunityType } from './interfaces';
import { getHealthStatus, getMaturityBandFromScore } from './rules';

export function generateExecutiveSummary(
  overallScore: number,
  pillarAnalyses: PillarAnalysis[]
): ExecutiveSummary {
  const overallHealth: HealthStatus = getHealthStatus(overallScore);
  const maturityLevel = getMaturityBandFromScore(overallScore);

  // Sort by score ascending / descending
  const sortedByScoreAsc = [...pillarAnalyses].sort((a, b) => a.score - b.score);
  const sortedByScoreDesc = [...pillarAnalyses].sort((a, b) => b.score - a.score);

  // Highest strength is the pillar with highest score
  const topPillar = sortedByScoreDesc[0];
  const highestStrength = {
    pillarId: topPillar.pillarId,
    pillarName: topPillar.pillarName,
    summary: `${topPillar.strength.coreStrength}: ${topPillar.strength.competitiveAdvantage}`,
    score: topPillar.score,
  };

  // Highest gap is the pillar with lowest score
  const lowestPillar = sortedByScoreAsc[0];
  const highestGap = {
    pillarId: lowestPillar.pillarId,
    pillarName: lowestPillar.pillarName,
    summary: `${lowestPillar.gap.missingSystems}; ${lowestPillar.gap.organizationalGap}`,
    score: lowestPillar.score,
  };

  // Highest risk (prioritize Critical Risk > High Risk > Medium Risk > Low Risk)
  const riskRank: Record<RiskLevel, number> = {
    'Critical Risk': 4,
    'High Risk': 3,
    'Medium Risk': 2,
    'Low Risk': 1,
  };
  const highestRiskPillar = [...pillarAnalyses].sort(
    (a, b) => riskRank[b.risk.riskLevel] - riskRank[a.risk.riskLevel] || a.score - b.score
  )[0];

  const highestRisk = {
    pillarId: highestRiskPillar.pillarId,
    pillarName: highestRiskPillar.pillarName,
    summary: `${highestRiskPillar.risk.riskCategory}: ${highestRiskPillar.risk.riskDescription}`,
    riskLevel: highestRiskPillar.risk.riskLevel,
  };

  // Highest priority (prioritize Critical > High > Medium > Low)
  const priorityRank: Record<IntelligencePriorityLevel, number> = {
    Critical: 4,
    High: 3,
    Medium: 2,
    Low: 1,
  };
  const highestPriorityPillar = [...pillarAnalyses].sort(
    (a, b) => priorityRank[b.priority.priorityLevel] - priorityRank[a.priority.priorityLevel] || a.score - b.score
  )[0];

  const highestPriority = {
    pillarId: highestPriorityPillar.pillarId,
    pillarName: highestPriorityPillar.pillarName,
    summary: `${highestPriorityPillar.priority.priorityLevel} Priority (${highestPriorityPillar.priority.urgency}): ${highestPriorityPillar.priority.rationale}`,
    priorityLevel: highestPriorityPillar.priority.priorityLevel,
  };

  // Highest opportunity
  const highestOpportunityPillar = [...pillarAnalyses].sort(
    (a, b) => (100 - a.score) - (100 - b.score)
  )[0];

  const highestOpportunity = {
    pillarId: highestOpportunityPillar.pillarId,
    pillarName: highestOpportunityPillar.pillarName,
    summary: `${highestOpportunityPillar.opportunity.title}: ${highestOpportunityPillar.opportunity.potentialImpact}`,
    opportunityType: highestOpportunityPillar.opportunity.opportunityType,
  };

  return {
    overallScore,
    overallHealth,
    maturityLevel,
    highestStrength,
    highestGap,
    highestRisk,
    highestPriority,
    highestOpportunity,
  };
}
