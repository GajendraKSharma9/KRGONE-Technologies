/**
 * Business Engine - Business Rule Database Lookup Engine
 * Provides fast, typed query methods for retrieving consulting knowledge base entries.
 */

import { PillarId } from '../assessment-engine/types';
import { KNOWLEDGE_BASE_RULES } from './database';
import { BusinessRuleEntry, ScoreBandKey, AssessmentContext } from './types';

/**
 * Resolves score value (0-100) into standardized score band key
 */
export function getScoreBandKeyFromScore(score: number): ScoreBandKey {
  if (score >= 85) return '85-100';
  if (score >= 70) return '70-84';
  if (score >= 50) return '50-69';
  return '0-49';
}

/**
 * Contextual Rule Modifier (Version 2 Readiness Pipeline)
 * Allows dynamic contextual adjustments without modifying the core 28 database entries.
 * Returns the exact baseRule in Version 1 to guarantee 100% backward compatibility.
 */
function resolveContextualRuleModifiers(
  baseRule: BusinessRuleEntry,
  _context: AssessmentContext
): BusinessRuleEntry {
  // Version 1: Returns base rule unchanged.
  // Version 2 Extension Point:
  // Context-aware logic evaluating questionAnswers, industry, businessNature, profile,
  // revenueRange, employeeRange, or custom rules context can inject dynamic diagnostic overlays here.
  return baseRule;
}

/**
 * Context-aware Master Rule Lookup Engine
 * 
 * @param pillarId Growth Pillar ID (e.g. PillarId.LEADERSHIP)
 * @param scoreOrBand Raw numerical score (0-100) OR ScoreBandKey ('85-100', '70-84', '50-69', '0-49')
 * @param assessmentContext Optional context containing question answers, firmographic profile, industry, etc.
 */
export function getBusinessRule(
  pillarId: PillarId,
  scoreOrBand: number | ScoreBandKey,
  assessmentContext?: AssessmentContext
): BusinessRuleEntry {
  const bandKey: ScoreBandKey = typeof scoreOrBand === 'number'
    ? getScoreBandKeyFromScore(scoreOrBand)
    : scoreOrBand;

  const pillarRules = KNOWLEDGE_BASE_RULES[pillarId];
  let baseRule: BusinessRuleEntry | undefined = pillarRules ? pillarRules[bandKey] : undefined;

  if (!baseRule) {
    baseRule = getFallbackRule(pillarId, bandKey);
  }

  if (assessmentContext) {
    return resolveContextualRuleModifiers(baseRule, assessmentContext);
  }

  return baseRule;
}

/**
 * Retrieves the exact consulting rule for a given Pillar and Score.
 * Legacy / Version 1 wrapper delegating directly to getBusinessRule for 100% backward compatibility.
 */
export function getRuleForPillarAndScore(
  pillarId: PillarId,
  score: number,
  assessmentContext?: AssessmentContext
): BusinessRuleEntry {
  return getBusinessRule(pillarId, score, assessmentContext);
}

/**
 * Provides a structured fallback entry if a pillar or band key is missing
 */
function getFallbackRule(pillarId: PillarId, bandKey: ScoreBandKey): BusinessRuleEntry {
  return {
    id: `${pillarId}_${bandKey}`,
    pillarId,
    pillarName: pillarId,
    scoreBand: bandKey,
    scoreRange: { min: 0, max: 100 },
    maturityBand: 'At Risk' as any,
    recommendationCode: `${pillarId}-REC`,
    coreStrength: 'Basic operational commitment.',
    competitiveAdvantage: 'Adaptability to client needs.',
    typicalBusinessSituation: 'Operational processes require structured standardization.',
    gaps: {
      primaryGap: 'Process standardization and system automation required.',
      secondaryGaps: ['Documentation gaps', 'Workflow bottlenecks'],
      missingSystems: 'Centralized operational management software.',
      weakProcesses: 'Manual task execution and unwritten procedures.',
      organizationalGap: 'Clear role scorecards and manager autonomy needed.',
      severity: 'High',
    },
    risk: {
      riskCategory: 'Operational Bottleneck',
      riskDescription: 'Potential operational friction under volume growth.',
      riskLevel: 'High Risk',
      mitigationStrategy: 'Document core processes and implement weekly review cadence.',
    },
    opportunity: {
      opportunityType: 'Process Improvement Opportunity',
      title: 'Workflow Optimization & Systemization',
      description: 'Streamline departmental processes to improve throughput.',
      potentialImpact: '20% gain in execution velocity.',
    },
    recommendation: {
      code: `${pillarId}-01`,
      strategicRecommendation: 'Conduct formal operational audit and document standard operating playbooks.',
      targetKPI: '100% process documentation compliance.',
      expectedOutcome: 'Improved execution consistency and reduced error rates.',
      actionTimeframeDays: 60,
      urgency: 'Short-Term Action Required (Next 30–60 Days)',
    },
  };
}

/**
 * Retrieves rule by recommendation code (e.g. "LDR-01", "STR-02")
 */
export function getRuleByRecommendationCode(code: string): BusinessRuleEntry | undefined {
  const cleanCode = code.toUpperCase().trim();
  for (const pillarId of Object.keys(KNOWLEDGE_BASE_RULES) as PillarId[]) {
    const pillarSet = KNOWLEDGE_BASE_RULES[pillarId];
    for (const bandKey of Object.keys(pillarSet) as ScoreBandKey[]) {
      const entry = pillarSet[bandKey];
      if (entry.recommendationCode === cleanCode || entry.recommendation.code === cleanCode) {
        return entry;
      }
    }
  }
  return undefined;
}

/**
 * Retrieves all 4 score band rules for a specific pillar
 */
export function getAllRulesForPillar(pillarId: PillarId): BusinessRuleEntry[] {
  const pillarSet = KNOWLEDGE_BASE_RULES[pillarId];
  if (!pillarSet) return [];
  return [pillarSet['85-100'], pillarSet['70-84'], pillarSet['50-69'], pillarSet['0-49']];
}

/**
 * Retrieves the complete knowledge base as a flat list of 28 rule profiles
 */
export function getFlatKnowledgeBase(): BusinessRuleEntry[] {
  const flatList: BusinessRuleEntry[] = [];
  for (const pillarId of Object.keys(KNOWLEDGE_BASE_RULES) as PillarId[]) {
    const pillarSet = KNOWLEDGE_BASE_RULES[pillarId];
    for (const bandKey of Object.keys(pillarSet) as ScoreBandKey[]) {
      flatList.push(pillarSet[bandKey]);
    }
  }
  return flatList;
}

/**
 * Searches the knowledge base by text keyword
 */
export function searchKnowledgeBase(query: string): BusinessRuleEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return getFlatKnowledgeBase();

  return getFlatKnowledgeBase().filter((entry) => {
    return (
      entry.pillarName.toLowerCase().includes(q) ||
      entry.recommendationCode.toLowerCase().includes(q) ||
      entry.coreStrength.toLowerCase().includes(q) ||
      entry.competitiveAdvantage.toLowerCase().includes(q) ||
      entry.typicalBusinessSituation.toLowerCase().includes(q) ||
      entry.gaps.primaryGap.toLowerCase().includes(q) ||
      entry.risk.riskCategory.toLowerCase().includes(q) ||
      entry.opportunity.title.toLowerCase().includes(q) ||
      entry.recommendation.strategicRecommendation.toLowerCase().includes(q)
    );
  });
}
