import React from 'react';
import { ProcessedDossierData } from './dossierTypes';
import { DossierHeader } from './DossierHeader';
import { DossierFooter } from './DossierFooter';
import { DollarSign, PieChart, CheckCircle2, AlertTriangle, Scale, Target, IndianRupee, Sparkles } from 'lucide-react';

export const Page8FinancePerformance: React.FC<{ data: ProcessedDossierData }> = ({ data }) => {
  const p = data.pillars[4] || { name: 'Finance & Business Performance', code: 'P5', score: 60, weight: '15%', status: 'Developing', impact: 'Margin Exposure', color: 'text-amber-600 bg-amber-50 border-amber-200' };

  return (
    <div 
      className="print-page bg-white w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] text-[#0a192f] p-[12mm] flex flex-col justify-between box-border page-break-after:always relative overflow-hidden print:m-0 font-sans select-none"
      style={{ backgroundColor: '#ffffff', width: '210mm', height: '297mm', padding: '12mm' }}
    >
      <DossierHeader
        sectionTitle="Page 8 · Pillar 5: Finance & Business Performance"
        subtitle="Profitability Margins, Cash Flow Management, Financial Discipline & Controls"
        pageNumber={8}
        icon={<IndianRupee className="w-4 h-4" />}
      />

      <div className="flex-1 flex flex-col gap-3 my-1 overflow-hidden">
        {/* Top Score Banner */}
        <div className="bg-slate-900 text-white p-3 rounded-lg flex items-center justify-between border-l-4 border-[#c29d2f]">
          <div>
            <div className="text-[7pt] text-[#c29d2f] font-mono font-bold uppercase tracking-widest">
              PILLAR 05 EVALUATION
            </div>
            <h2 className="text-xs font-black text-white uppercase tracking-wide">
              Financial Health, Profitability & Cash Runway Analysis
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-[6.5pt] text-slate-400 font-bold uppercase">Pillar Score</div>
              <div className="text-xl font-black text-[#c29d2f] font-mono">{p.score}/100</div>
            </div>
            <span className={`text-[7.5pt] font-extrabold px-2.5 py-1 rounded border ${p.color}`}>
              {p.status}
            </span>
          </div>
        </div>

        {/* Financial Sub-Dimensions */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2 pb-1 border-b border-slate-200">
            <PieChart className="w-3.5 h-3.5 text-[#0a192f]" />
            <h3 className="text-xs font-black uppercase text-[#0a192f] tracking-wider">
              Financial Health Sub-Dimension Audit
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[8pt]">
            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Gross & Net Margin Discipline</div>
                <div className="text-[7pt] text-slate-500">Unit economics & price realization</div>
              </div>
              <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">68/100</span>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Working Capital & Collections</div>
                <div className="text-[7pt] text-slate-500">Accounts receivable aging & DSO</div>
              </div>
              <span className="font-mono font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">54/100</span>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Budgeting & Expense Controls</div>
                <div className="text-[7pt] text-slate-500">Variance tracking vs monthly budget</div>
              </div>
              <span className="font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">58/100</span>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Cash Flow Forecasting</div>
                <div className="text-[7pt] text-slate-500">13-Week rolling cash projection</div>
              </div>
              <span className="font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">60/100</span>
            </div>
          </div>
        </div>

        {/* Financial Health & Working Capital Card */}
        <div className="bg-[#0a192f] text-white rounded-lg p-3.5 border-l-4 border-[#c29d2f]">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-black uppercase text-white tracking-wider">
              Working Capital Cycle & Margin Breakdown
            </div>
            <span className="text-[7pt] font-mono text-[#c29d2f] font-bold">REVENUE: {data.revenue}</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[7.5pt]">
            <div className="bg-slate-800 p-2 rounded border border-slate-700">
              <div className="text-slate-400 font-bold uppercase">Estimated Gross Margin</div>
              <div className="text-sm font-black text-emerald-400 font-mono mt-0.5">32% - 38%</div>
              <div className="text-[6.5pt] text-slate-400 mt-0.5">Healthy Product Baseline</div>
            </div>

            <div className="bg-slate-800 p-2 rounded border border-slate-700">
              <div className="text-slate-400 font-bold uppercase">Average Collection DSO</div>
              <div className="text-sm font-black text-amber-400 font-mono mt-0.5">65 Days</div>
              <div className="text-[6.5pt] text-slate-400 mt-0.5">Target: Under 45 Days</div>
            </div>

            <div className="bg-slate-800 p-2 rounded border border-slate-700">
              <div className="text-slate-400 font-bold uppercase">Cash Runway Buffer</div>
              <div className="text-sm font-black text-[#c29d2f] font-mono mt-0.5">2.5 Months</div>
              <div className="text-[6.5pt] text-slate-400 mt-0.5">Recommended: 4-6 Months</div>
            </div>
          </div>
        </div>

        {/* KRGONE Partner Observation & Business Impact Box */}
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 bg-[#0a192f] text-white p-2.5 rounded-lg border-l-4 border-[#c29d2f] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#c29d2f]" />
                <span className="text-[6.5pt] font-extrabold text-[#c29d2f] uppercase tracking-wider">
                  KRGONE Partner Observation™
                </span>
              </div>
              <p className="text-[7.5pt] text-slate-300 font-normal leading-snug">
                This observation reflects our analysis of your financial controls and working capital cycle. Accelerating receivables collection from 65 to under 45 days releases critical working capital to fund expansion without debt.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 flex flex-col justify-between">
            <div className="text-[6.5pt] font-extrabold text-[#0a192f] uppercase tracking-wider border-b border-slate-200 pb-0.5 mb-1 flex items-center justify-between">
              <span>Business Impact™</span>
              <span className="text-[6pt] font-mono text-slate-400">Pillar 5</span>
            </div>
            <div className="grid grid-cols-2 gap-x-1.5 gap-y-0.5 text-[6.5pt]">
              <div>
                <span className="text-slate-400 font-medium block">Revenue Impact:</span>
                <span className="font-bold text-slate-800">Cash Flow Runway</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Cost Impact:</span>
                <span className="font-bold text-emerald-700">DSO -20 Days</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Risk Level:</span>
                <span className="font-bold text-amber-700">{p.score < 50 ? 'Critical' : 'Moderate'}</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Timeline:</span>
                <span className="font-bold text-[#0a192f]">Tier 1 · 30 Days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths & Risks */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2 pb-1 border-b border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              <h3 className="text-xs font-black uppercase text-emerald-900 tracking-wider">
                Financial Strengths
              </h3>
            </div>
            <ul className="space-y-1.5 text-[8pt] text-slate-800">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Positive core operational profitability in {data.revenue} band.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Low bad debt write-off history due to trusted client relationships.</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50/70 border border-red-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2 pb-1 border-b border-red-200">
              <AlertTriangle className="w-3.5 h-3.5 text-red-700" />
              <h3 className="text-xs font-black uppercase text-red-900 tracking-wider">
                Financial Vulnerabilities
              </h3>
            </div>
            <ul className="space-y-1.5 text-[8pt] text-slate-800">
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>High working capital strain caused by extended payment terms.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>Lack of weekly cash flow forecasting model to predict cash crunches.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Financial Action Directives */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2 pb-1 border-b border-slate-200">
            <Target className="w-3.5 h-3.5 text-[#0a192f]" />
            <h3 className="text-xs font-black uppercase text-[#0a192f] tracking-wider">
              Financial Control & Cash Flow Directives
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[8pt]">
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase">01. DSO Reduction</div>
              <div className="font-bold text-slate-900 mt-0.5">Strict Payment Terms</div>
              <div className="text-[7pt] text-slate-500 mt-0.5">Enforce 2% early payment discount & automated email payment reminders.</div>
            </div>
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase">02. 13-Week Cash Model</div>
              <div className="font-bold text-slate-900 mt-0.5">Rolling Forecast</div>
              <div className="text-[7pt] text-slate-500 mt-0.5">Build a weekly cash projection tool tracking inflows vs fixed/variable payables.</div>
            </div>
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase">03. Margin Audit</div>
              <div className="font-bold text-slate-900 mt-0.5">SKU Unit Economics</div>
              <div className="text-[7pt] text-slate-500 mt-0.5">Prune or renegotiate contracts generating below 25% gross margin.</div>
            </div>
          </div>
        </div>
      </div>

      <DossierFooter companyName={data.companyName} reportId={data.displayReportId} />
    </div>
  );
};
