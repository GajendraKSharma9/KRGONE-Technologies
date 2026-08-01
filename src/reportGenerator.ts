import { BusinessProfile } from './business-engine/business-profile/interfaces';
import { Industry, BusinessCategory, BusinessModel, EmployeeRange, AnnualRevenueRange, PrimaryBusinessGoal, BiggestBusinessChallenge, PreferredLanguage } from './business-engine/business-profile/enums';
import { PillarId } from './business-engine/assessment-engine/types';
import { generateBusinessIntelligence } from './business-engine/business-intelligence';
import { RecommendationEngine } from './business-engine/recommendation-engine';
import { generateNarrative } from './business-engine/ai-narrative';

export function generateUnifiedReport(formData: any, scores: number[]) {
  // Map formData to BusinessProfile
  const profile: BusinessProfile = {
    identifiers: {
      assessmentId: 'ASSESS-' + Math.random().toString(36).substr(2, 9),
      clientId: 'CLIENT-' + Math.random().toString(36).substr(2, 9),
      reportId: 'REP-' + Date.now().toString()
    },
    company: {
      companyName: formData.companyName || 'Unknown Company',
      contactPerson: formData.fullName || 'Unknown Person',
      mobileNumber: formData.mobileNumber || 'Unknown',
      email: formData.email || 'unknown@example.com',
      city: formData.city === 'Other City' || formData.city === 'Other Area' ? (formData.cityOther || formData.city) : (formData.city || 'Unknown City'),
      state: formData.state || 'Unknown State',
      preferredLanguage: PreferredLanguage.ENGLISH
    },
    business: {
      industry: formData.industry as Industry || Industry.OTHERS,
      businessCategory: BusinessCategory.SERVICE_PROVIDER,
      businessModel: formData.customerType === 'B2B' ? BusinessModel.B2B : formData.customerType === 'B2C' ? BusinessModel.B2C : BusinessModel.HYBRID,
      yearEstablished: 2020,
      numberOfEmployees: formData.businessSize as EmployeeRange || EmployeeRange.RANGE_1_10
    },
    size: {
      annualRevenueRange: formData.revenue as AnnualRevenueRange || AnnualRevenueRange.UNDER_50L
    },
    objective: {
      primaryGoal: PrimaryBusinessGoal.SCALE_BUSINESS // Map if needed
    },
    challenge: {
      biggestChallenge: BiggestBusinessChallenge.SCALING // Map if needed
    }
  };

  // Convert scores array to questionAnswers map
  const questionAnswers: Record<string, number> = {};
  scores.forEach((s, idx) => {
    questionAnswers[`Q${idx + 1}`] = s;
  });

  // Calculate pillar scores
  // Assuming 3 questions per pillar, matching PillarId order:
  // LEADERSHIP, STRATEGY, SALES, OPERATIONS, FINANCE, HUMAN_RESOURCES, TECHNOLOGY
  const getPillarScore = (startIdx: number) => {
    const q1 = scores[startIdx] || 0;
    const q2 = scores[startIdx + 1] || 0;
    const q3 = scores[startIdx + 2] || 0;
    // convert 1-5 scale to 20-100 scale if necessary
    const to100 = (val: number) => val <= 5 && val > 0 ? val * 20 : val;
    const score100 = Math.round((to100(q1) + to100(q2) + to100(q3)) / 3);
    return score100;
  };

  const pillarScores = {
    [PillarId.LEADERSHIP]: getPillarScore(0),
    [PillarId.STRATEGY]: getPillarScore(3),
    [PillarId.SALES]: getPillarScore(6),
    [PillarId.OPERATIONS]: getPillarScore(9),
    [PillarId.FINANCE]: getPillarScore(12),
    [PillarId.HUMAN_RESOURCES]: getPillarScore(15),
    [PillarId.TECHNOLOGY]: getPillarScore(18),
  };

  const overallScore = Math.round(Object.values(pillarScores).reduce((a, b) => a + b, 0) / 7);

  // 1. Business Intelligence
  const bi = generateBusinessIntelligence({
    overallScore,
    pillarScores: {
      [PillarId.LEADERSHIP]: { rawScore: pillarScores[PillarId.LEADERSHIP] },
      [PillarId.STRATEGY]: { rawScore: pillarScores[PillarId.STRATEGY] },
      [PillarId.SALES]: { rawScore: pillarScores[PillarId.SALES] },
      [PillarId.OPERATIONS]: { rawScore: pillarScores[PillarId.OPERATIONS] },
      [PillarId.FINANCE]: { rawScore: pillarScores[PillarId.FINANCE] },
      [PillarId.HUMAN_RESOURCES]: { rawScore: pillarScores[PillarId.HUMAN_RESOURCES] },
      [PillarId.TECHNOLOGY]: { rawScore: pillarScores[PillarId.TECHNOLOGY] },
    },
    questionAnswers,
    userAnswers: questionAnswers,
    profile
  }, profile);

  // 2. Recommendations
  const recommendations = RecommendationEngine.generate(bi);

  // 3. Narratives
  const narratives = generateNarrative(profile, bi, recommendations);

  return {
    profile,
    bi,
    recommendations,
    narratives,
    pillarScores,
    overallScore
  };
}
