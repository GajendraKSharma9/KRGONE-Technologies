import React from 'react';
import { PrintDossierProps } from './dossier/dossierTypes';
import { processDossierData } from './dossier/dossierTypes';

import { CoverPage } from './dossier/CoverPage';
import { Page1BusinessProfile } from './dossier/Page1BusinessProfile';
import { Page2BusinessDiagnosis } from './dossier/Page2BusinessDiagnosis';
import { Page3HealthDashboard } from './dossier/Page3HealthDashboard';
import { Page4LeadershipVision } from './dossier/Page4LeadershipVision';
import { Page5SalesRevenue } from './dossier/Page5SalesRevenue';
import { Page6MarketingCustomer } from './dossier/Page6MarketingCustomer';
import { Page7OperationsProcess } from './dossier/Page7OperationsProcess';
import { Page8FinancePerformance } from './dossier/Page8FinancePerformance';
import { Page9PeopleLeadership } from './dossier/Page9PeopleLeadership';
import { Page10TechInnovation } from './dossier/Page10TechInnovation';
import { Page11AiAdvisory } from './dossier/Page11AiAdvisory';
import { Page12StrategicRecs } from './dossier/Page12StrategicRecs';
import { Page13GrowthRoadmap } from './dossier/Page13GrowthRoadmap';
import { Page14Sprint90Days } from './dossier/Page14Sprint90Days';
import { Page15Consultation } from './dossier/Page15Consultation';
import { Page16Methodology } from './dossier/Page16Methodology';

export default function PrintDossier(props: PrintDossierProps) {
  const data = processDossierData(props);

  return (
    <div id="krg-print-dossier-root" className="hidden print:block no-screen w-full bg-white text-slate-900 font-sans">
      {/* Cover Page: Executive Business Growth Diagnostic Report */}
      <CoverPage data={data} />

      {/* Page 1: Business Profile & Assessment Scope */}
      <Page1BusinessProfile data={data} />

      {/* Page 2: Business Diagnosis Summary */}
      <Page2BusinessDiagnosis data={data} />

      {/* Page 3: Business Health Dashboard™ */}
      <Page3HealthDashboard data={data} />

      {/* Page 4: Leadership & Vision */}
      <Page4LeadershipVision data={data} />

      {/* Page 5: Sales & Revenue */}
      <Page5SalesRevenue data={data} />

      {/* Page 6: Marketing & Customer Growth */}
      <Page6MarketingCustomer data={data} />

      {/* Page 7: Operations & Process */}
      <Page7OperationsProcess data={data} />

      {/* Page 8: Finance & Business Performance */}
      <Page8FinancePerformance data={data} />

      {/* Page 9: People & Leadership */}
      <Page9PeopleLeadership data={data} />

      {/* Page 10: Technology & Business Innovation */}
      <Page10TechInnovation data={data} />

      {/* Page 11: AI Growth Advisory™ */}
      <Page11AiAdvisory data={data} />

      {/* Page 12: Strategic Recommendations™ */}
      <Page12StrategicRecs data={data} />

      {/* Page 13: Growth Roadmap */}
      <Page13GrowthRoadmap data={data} />

      {/* Page 14: 90-Day Business Growth Sprint™ */}
      <Page14Sprint90Days data={data} />

      {/* Page 15: Business Growth Consultation™ */}
      <Page15Consultation data={data} />

      {/* Page 16: Assessment Methodology & Scoring Framework */}
      <Page16Methodology data={data} />
    </div>
  );
}
