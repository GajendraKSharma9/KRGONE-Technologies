import React from 'react';
import { ProcessedDossierData } from './dossierTypes';
import { DossierHeader } from './DossierHeader';
import { DossierFooter } from './DossierFooter';
import { TrendingUp, DollarSign, BarChart2, CheckCircle2, AlertTriangle, ArrowRight, Target, Sparkles } from 'lucide-react';

export const Page5SalesRevenue: React.FC<{ data: ProcessedDossierData }> = ({ data }) => {
  const p = data.pillars[1] || { name: 'Sales & Revenue', code: 'P2', score: 64, weight: '20%', status: 'Developing', impact: 'Revenue Leakage', color: 'text-amber-600 bg-amber-50 border-amber-200' };

  return (
    <div 
      className="print-page bg-white w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] text-[#0a192f] p-[12mm] flex flex-col justify-between box-border page-break-after:always relative overflow-hidden print:m-0 font-sans select-none"
      style={{ backgroundColor: '#ffffff', width: '210mm', height: '297mm', padding: '12mm' }}
    >
      <DossierHeader
        sectionTitle="Page 5 · Pillar 2: Sales & Revenue Engine"
        subtitle="Sales Conversion Effectiveness, Pipeline Health & Revenue Predictability"
        pageNumber={5}
        icon={<TrendingUp className="w-4 h-4" />}
      />

      <div className="flex-1 flex flex-col gap-3 my-1 overflow-hidden">
        {/* Top Header Score Badge */}
        <div className="bg-slate-900 text-white p-3 rounded-lg flex items-center justify-between border-l-4 border-[#c29d2f]">
          <div>
            <div className="text-[7pt] text-[#c29d2f] font-mono font-bold uppercase tracking-widest">
              PILLAR 02 EVALUATION
            </div>
            <h2 className="text-xs font-black text-white uppercase tracking-wide">
              Sales Effectiveness & Pipeline Health Assessment
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

        {/* Sales Funnel Metrics Matrix */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2 pb-1 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <BarChart2 className="w-3.5 h-3.5 text-[#0a192f]" />
              <h3 className="text-xs font-black uppercase text-[#0a192f] tracking-wider">
                Sales Funnel & Revenue Sub-Dimensions
              </h3>
            </div>
            <span className="text-[7pt] font-mono font-bold text-slate-500">
              REVENUE BAND: {data.revenue}
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2 text-center text-[8pt]">
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[6.5pt] font-bold text-slate-400 uppercase">Pipeline Health</div>
              <div className="text-sm font-black text-[#0a192f] font-mono mt-0.5">62/100</div>
              <div className="text-[6.5pt] font-semibold text-amber-600 mt-0.5">Unpredictable Inflow</div>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[6.5pt] font-bold text-slate-400 uppercase">Lead Conversion Rate</div>
              <div className="text-sm font-black text-[#0a192f] font-mono mt-0.5">58/100</div>
              <div className="text-[6.5pt] font-semibold text-amber-600 mt-0.5">High Drop-off at Quote</div>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[6.5pt] font-bold text-slate-400 uppercase">Sales Cycle Speed</div>
              <div className="text-sm font-black text-[#0a192f] font-mono mt-0.5">66/100</div>
              <div className="text-[6.5pt] font-semibold text-emerald-600 mt-0.5">Moderate Closure Velocity</div>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[6.5pt] font-bold text-slate-400 uppercase">Account Retention</div>
              <div className="text-sm font-black text-[#0a192f] font-mono mt-0.5">70/100</div>
              <div className="text-[6.5pt] font-semibold text-emerald-600 mt-0.5">Solid Repeat Orders</div>
            </div>
          </div>
        </div>

        {/* Sales Pipeline Funnel Visualization Card */}
        <div className="bg-[#0a192f] text-white rounded-lg p-3.5 border-l-4 border-[#c29d2f]">
          <div className="text-xs font-black uppercase text-white tracking-wider mb-2">
            Sales Funnel Conversion Bottleneck Mapping
          </div>

          <div className="space-y-1.5 text-[8pt]">
            <div className="bg-slate-800 p-2 rounded border border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-blue-500/20 text-blue-400 text-[7pt] font-mono font-bold flex items-center justify-center">L1</span>
                <span>Inbound Lead Inflow (Enquiries)</span>
              </div>
              <span className="font-mono text-slate-300 font-bold">100 Leads / Mo</span>
            </div>

            <div className="bg-slate-800 p-2 rounded border border-slate-700 flex items-center justify-between ml-4">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-amber-500/20 text-amber-400 text-[7pt] font-mono font-bold flex items-center justify-center">L2</span>
                <span>Qualified Proposals Sent</span>
              </div>
              <span className="font-mono text-amber-300 font-bold">40 Proposals (40%)</span>
            </div>

            <div className="bg-slate-800 p-2 rounded border border-slate-700 flex items-center justify-between ml-8 border-l-2 border-red-500">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-red-500/20 text-red-400 text-[7pt] font-mono font-bold flex items-center justify-center">L3</span>
                <span>Final Closed Wins (Conversion Bottleneck)</span>
              </div>
              <span className="font-mono text-red-400 font-black">12 Deals (12% Win Rate)</span>
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
                This observation reflects our diagnostic analysis of your sales operating model. Addressing lead drop-offs and standardizing quote discipline will directly recover lost top-line revenue and shorten sales cycles.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 flex flex-col justify-between">
            <div className="text-[6.5pt] font-extrabold text-[#0a192f] uppercase tracking-wider border-b border-slate-200 pb-0.5 mb-1 flex items-center justify-between">
              <span>Business Impact™</span>
              <span className="text-[6pt] font-mono text-slate-400">Pillar 2</span>
            </div>
            <div className="grid grid-cols-2 gap-x-1.5 gap-y-0.5 text-[6.5pt]">
              <div>
                <span className="text-slate-400 font-medium block">Revenue Impact:</span>
                <span className="font-bold text-emerald-700">+25-35% Win Rate</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Cost Impact:</span>
                <span className="font-bold text-slate-800">Leakage Plug</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Risk Level:</span>
                <span className="font-bold text-amber-700">{p.score < 50 ? 'Critical' : 'Moderate'}</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Timeline:</span>
                <span className="font-bold text-[#0a192f]">Immediate · 14 Days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths & Weaknesses Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2 pb-1 border-b border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              <h3 className="text-xs font-black uppercase text-emerald-900 tracking-wider">
                Sales Strengths
              </h3>
            </div>
            <ul className="space-y-1.5 text-[8pt] text-slate-800">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span>High trust with existing key accounts leading to repeat business.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Founder ability to close major deals during high-stakes presentations.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Clear product value proposition resonates with target clients.</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50/70 border border-red-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2 pb-1 border-b border-red-200">
              <AlertTriangle className="w-3.5 h-3.5 text-red-700" />
              <h3 className="text-xs font-black uppercase text-red-900 tracking-wider">
                Sales Vulnerabilities
              </h3>
            </div>
            <ul className="space-y-1.5 text-[8pt] text-slate-800">
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>No CRM adoption: Lead tracking managed on spreadsheets or messaging.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>Lack of dedicated sales scripts and objection handling playbooks.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>Follow-up discipline drops after proposal submission.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sales Recommendations Sprints */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2 pb-1 border-b border-slate-200">
            <Target className="w-3.5 h-3.5 text-[#0a192f]" />
            <h3 className="text-xs font-black uppercase text-[#0a192f] tracking-wider">
              Strategic Sales Execution Directives
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[8pt]">
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase">01. CRM Implementation</div>
              <div className="font-bold text-slate-900 mt-0.5">Mandatory Cloud CRM</div>
              <div className="text-[7pt] text-slate-500 mt-0.5">Deploy a cloud CRM to track every deal stage and eliminate missed follow-ups.</div>
            </div>
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase">02. Standard Pitch Deck</div>
              <div className="font-bold text-slate-900 mt-0.5">Unified Sales Playbook</div>
              <div className="text-[7pt] text-slate-500 mt-0.5">Standardize proposal templates, pricing calculators, and objection battlecards.</div>
            </div>
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase">03. Weekly Pipeline Review</div>
              <div className="font-bold text-slate-900 mt-0.5">Stage-Gated Pipeline</div>
              <div className="text-[7pt] text-slate-500 mt-0.5">Conduct 30-min weekly pipeline reviews focusing on deals stuck in proposal stage over 14 days.</div>
            </div>
          </div>
        </div>
      </div>

      <DossierFooter companyName={data.companyName} reportId={data.displayReportId} />
    </div>
  );
};
