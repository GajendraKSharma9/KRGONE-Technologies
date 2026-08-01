import React from 'react';

export interface DossierProps {
  report?: any;
  formData?: any;
  globalScore?: number;
  pillarScores?: number[];
  reportId?: string;
  assessmentDate?: string;
}

export type PrintDossierProps = DossierProps;

export interface ProcessedDossierData {
  companyName: string;
  industry: string;
  stateLocation: string;
  cityLocation: string;
  customerType: string;
  workforceSize: string;
  revenue: string;
  displayDate: string;
  displayReportId: string;
  displayScore: number;
  maturityStage: string;
  maturityClass: string;
  userGoals: string[];
  userChallenges: string[];
  pillars: Array<{
    name: string;
    code: string;
    score: number;
    weight: string;
    status: string;
    impact: string;
    color: string;
  }>;
}

export function processDossierData(props: DossierProps): ProcessedDossierData {
  const { report, formData = {}, globalScore, pillarScores, reportId, assessmentDate } = props;

  const rawCompanyName = report?.profile?.company?.companyName || formData?.companyName || (formData?.fullName ? `${formData.fullName}'S ENTERPRISE` : 'YOUR ENTERPRISE');
  const companyName = rawCompanyName.toUpperCase();
  const industry = report?.profile?.business?.industry || formData?.industry || 'Commercial Vertical';
  const stateLocation = formData?.state || '';
  const rawCity = formData?.city === 'Other City' || formData?.city === 'Other Area'
    ? (formData?.cityOther || formData?.city)
    : (formData?.city || '');
  const cityLocation = rawCity;
  const customerType = formData?.customerType || 'B2B';
  const workforceSize = formData?.businessSize || 'Not Disclosed';
  const revenue = formData?.revenue || 'Confidential';
  
  const todayFormatted = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  const displayDate = assessmentDate || todayFormatted;
  
  const generatedReportId = 'KRG-' + new Date().getFullYear() + '-' + String(Date.now()).slice(-5);
  const displayReportId = reportId || report?.profile?.identifiers?.reportId || generatedReportId;
  const displayScore = globalScore ? Math.round(globalScore) : 72;

  let maturityStage = 'Maturing System';
  let maturityClass = 'Developing Enterprise';
  if (displayScore < 45) {
    maturityStage = 'Emerging & Systemically Vulnerable';
    maturityClass = 'High Operational Bottleneck';
  } else if (displayScore < 65) {
    maturityStage = 'Developing & Transitioning System';
    maturityClass = 'Moderate Scalability Ceiling';
  } else if (displayScore < 80) {
    maturityStage = 'Maturing & Systematized Enterprise';
    maturityClass = 'Moderate Scaling Potential';
  } else {
    maturityStage = 'Elite High-Performance OS™';
    maturityClass = 'Market Leadership Architecture';
  }

  // Goals (Up to 4)
  const userGoals: string[] = Array.isArray(formData?.goals) && formData.goals.length > 0
    ? formData.goals.slice(0, 4)
    : ['Increase Revenue', 'Improve Profitability', 'Expand Market Reach', 'Build Scalable Systems & Processes'];

  const defaultGoals = ['Increase Revenue', 'Improve Profitability', 'Expand Market Reach', 'Build Scalable Systems & Processes'];
  while (userGoals.length < 4) {
    const nextDefault = defaultGoals.find(g => !userGoals.includes(g));
    if (nextDefault) userGoals.push(nextDefault);
    else break;
  }

  // Challenges (Up to 4)
  const userChallenges: string[] = Array.isArray(formData?.challenges) && formData.challenges.length > 0
    ? formData.challenges.slice(0, 4)
    : ['Inconsistent Sales & Lead Generation', 'Lack of Standard Operating Procedures', 'Low Automation & Technology Adoption', 'Weak Financial Planning & Reporting'];

  const defaultChallenges = [
    'Inconsistent Sales & Lead Generation',
    'Lack of Standard Operating Procedures',
    'Low Automation & Technology Adoption',
    'Weak Financial Planning & Reporting'
  ];
  while (userChallenges.length < 4) {
    const nextDefault = defaultChallenges.find(c => !userChallenges.includes(c));
    if (nextDefault) userChallenges.push(nextDefault);
    else break;
  }

  // Default Pillar Scores if missing
  const defaultPillarScores = [68, 64, 62, 58, 60, 65, 55];
  const scores = pillarScores && pillarScores.length >= 7 ? pillarScores : defaultPillarScores;

  const pillarNames = [
    { name: 'Leadership & Vision', code: 'P1', weight: '18%', impact: 'High Strategic Risk' },
    { name: 'Sales & Revenue', code: 'P2', weight: '17%', impact: 'Revenue Leakage' },
    { name: 'Marketing & Customer Growth', code: 'P3', weight: '14%', impact: 'Acquisition Ceiling' },
    { name: 'Operations & Process', code: 'P4', weight: '16%', impact: 'Execution Friction' },
    { name: 'Finance & Business Performance', code: 'P5', weight: '15%', impact: 'Margin Exposure' },
    { name: 'People & Leadership', code: 'P6', weight: '10%', impact: 'Delegation Deficit' },
    { name: 'Technology & Business Innovation', code: 'P7', weight: '10%', impact: 'Automation Gap' }
  ];

  const pillars = pillarNames.map((p, idx) => {
    const s = Math.round(scores[idx] || 60);
    let status = 'Developing';
    let color = 'text-amber-600 bg-amber-50 border-amber-200';
    if (s < 50) {
      status = 'Critical Risk';
      color = 'text-red-600 bg-red-50 border-red-200';
    } else if (s < 70) {
      status = 'Moderate Friction';
      color = 'text-amber-600 bg-amber-50 border-amber-200';
    } else {
      status = 'Strong Efficiency';
      color = 'text-emerald-600 bg-emerald-50 border-emerald-200';
    }
    return {
      name: p.name,
      code: p.code,
      score: s,
      weight: p.weight,
      status,
      impact: p.impact,
      color
    };
  });

  return {
    companyName,
    industry,
    stateLocation,
    cityLocation,
    customerType,
    workforceSize,
    revenue,
    displayDate,
    displayReportId,
    displayScore,
    maturityStage,
    maturityClass,
    userGoals,
    userChallenges,
    pillars
  };
}
