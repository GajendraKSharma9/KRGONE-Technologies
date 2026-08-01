import React from 'react';
import { ProcessedDossierData } from './dossierTypes';
import { DossierHeader } from './DossierHeader';
import { DossierFooter } from './DossierFooter';
import { Target, CheckCircle2, AlertTriangle, Layers, TrendingUp, ShieldCheck, Cpu } from 'lucide-react';

export const Page12StrategicRecs: React.FC<{ data: ProcessedDossierData }> = ({ data }) => {
  return (
    <div 
      className="print-page bg-white w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] text-[#0a192f] p-[12mm] flex flex-col justify-between box-border page-break-after:always relative overflow-hidden print:m-0 font-sans select-none"
      style={{ backgroundColor: '#ffffff', width: '210mm', height: '297mm', padding: '12mm' }}
    >
      <DossierHeader
        sectionTitle="Page 12 · Strategic Recommendations Matrix™"
        subtitle="Prioritized High-Yield Directives Across 5 Core Enterprise Categories"
        pageNumber={12}
        icon={<Target className="w-4 h-4" />}
      />

      <div className="flex-1 flex flex-col gap-2.5 my-1 overflow-hidden">
        {/* Category 1: Revenue Growth Recommendations */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-1.5">
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
              <h3 className="text-[8.5pt] font-black uppercase text-[#0a192f]">
                1. Revenue Growth & Sales Effectiveness Directives
              </h3>
            </div>
            <span className="text-[6.5pt] font-extrabold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
              HIGH IMPACT
            </span>
          </div>
          <div className="text-[7.5pt] text-slate-700 space-y-1">
            <p><strong className="text-slate-900">• Friction Point:</strong> Proposal generation is manual and lead follow-up discipline drops after day 3.</p>
            <p><strong className="text-slate-900">• Strategic Intervention:</strong> Deploy a mandatory cloud CRM and standard proposal templates to enforce stage-gated lead follow-ups.</p>
            <p><strong className="text-slate-900">• KRGONE Partner Support:</strong> We configure your CRM stages, build custom proposal templates, and train your sales team.</p>
          </div>
        </div>

        {/* Category 2: Operational Excellence Recommendations */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-1.5">
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-700" />
              <h3 className="text-[8.5pt] font-black uppercase text-[#0a192f]">
                2. Operational Process & SOP Standardization Directives
              </h3>
            </div>
            <span className="text-[6.5pt] font-extrabold text-blue-800 bg-blue-100 px-1.5 py-0.5 rounded">
              CORE SYSTEM
            </span>
          </div>
          <div className="text-[7.5pt] text-slate-700 space-y-1">
            <p><strong className="text-slate-900">• Friction Point:</strong> Daily execution relies on tribal memory, leading to customer delivery delays and rework.</p>
            <p><strong className="text-slate-900">• Strategic Intervention:</strong> Document step-by-step Standard Operating Procedures (SOPs) for the top 5 core delivery workflows.</p>
            <p><strong className="text-slate-900">• KRGONE Partner Support:</strong> Our systems consultants embed directly into your firm to write playbooks and visual SOP guides.</p>
          </div>
        </div>

        {/* Category 3: Financial Controls Recommendations */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-1.5">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              <h3 className="text-[8.5pt] font-black uppercase text-[#0a192f]">
                3. Financial Discipline & Cash Flow Control Directives
              </h3>
            </div>
            <span className="text-[6.5pt] font-extrabold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded">
              CASH PROTECTION
            </span>
          </div>
          <div className="text-[7.5pt] text-slate-700 space-y-1">
            <p><strong className="text-slate-900">• Friction Point:</strong> Accounts receivable collection cycle averages 65+ days, causing working capital strain.</p>
            <p><strong className="text-slate-900">• Strategic Intervention:</strong> Institute a 13-week rolling cash forecast model and automated invoice payment reminders.</p>
            <p><strong className="text-slate-900">• KRGONE Partner Support:</strong> We build your cash flow model and set up automated billing reminder workflows.</p>
          </div>
        </div>

        {/* Category 4: Technology & AI Recommendations */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-1.5">
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-purple-700" />
              <h3 className="text-[8.5pt] font-black uppercase text-[#0a192f]">
                4. Technology Adoption & AI Automation Directives
              </h3>
            </div>
            <span className="text-[6.5pt] font-extrabold text-purple-800 bg-purple-100 px-1.5 py-0.5 rounded">
              PRODUCTIVITY MULTIPLIER
            </span>
          </div>
          <div className="text-[7.5pt] text-slate-700 space-y-1">
            <p><strong className="text-slate-900">• Friction Point:</strong> Staff manually re-keys data across spreadsheets, wasting over 20 hours per week.</p>
            <p><strong className="text-slate-900">• Strategic Intervention:</strong> Integrate cloud software tools with automated Zapier/Make triggers and AI writing tools.</p>
            <p><strong className="text-slate-900">• KRGONE Partner Support:</strong> We configure cloud integrations and deploy custom AI prompt templates.</p>
          </div>
        </div>

        {/* Category 5: Leadership & People Recommendations */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-1.5">
            <div className="flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-[#0a192f]" />
              <h3 className="text-[8.5pt] font-black uppercase text-[#0a192f]">
                5. Leadership Delegation & Governance Directives
              </h3>
            </div>
            <span className="text-[6.5pt] font-extrabold text-slate-800 bg-slate-200 px-1.5 py-0.5 rounded">
              GOVERNANCE
            </span>
          </div>
          <div className="text-[7.5pt] text-slate-700 space-y-1">
            <p><strong className="text-slate-900">• Friction Point:</strong> Founder spend 80% of daily time solving routine operational fires.</p>
            <p><strong className="text-slate-900">• Strategic Intervention:</strong> Establish role scorecards with 3 core KPIs per department head and financial approval thresholds.</p>
            <p><strong className="text-slate-900">• KRGONE Partner Support:</strong> We draft customized role scorecards and facilitate monthly executive strategy syncs.</p>
          </div>
        </div>
      </div>

      <DossierFooter companyName={data.companyName} reportId={data.displayReportId} />
    </div>
  );
};
