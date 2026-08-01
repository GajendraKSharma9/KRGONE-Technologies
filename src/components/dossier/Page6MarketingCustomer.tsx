import React from 'react';
import { ProcessedDossierData } from './dossierTypes';
import { DossierHeader } from './DossierHeader';
import { DossierFooter } from './DossierFooter';
import { Megaphone, Users, Target, CheckCircle2, AlertTriangle, Globe, Sparkles, BarChart3 } from 'lucide-react';

export const Page6MarketingCustomer: React.FC<{ data: ProcessedDossierData }> = ({ data }) => {
  const p = data.pillars[2] || { name: 'Marketing & Customer Growth', code: 'P3', score: 62, weight: '15%', status: 'Developing', impact: 'Acquisition Ceiling', color: 'text-amber-600 bg-amber-50 border-amber-200' };

  return (
    <div 
      className="print-page bg-white w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] text-[#0a192f] p-[12mm] flex flex-col justify-between box-border page-break-after:always relative overflow-hidden print:m-0 font-sans select-none"
      style={{ backgroundColor: '#ffffff', width: '210mm', height: '297mm', padding: '12mm' }}
    >
      <DossierHeader
        sectionTitle="Page 6 · Pillar 3: Marketing & Customer Growth"
        subtitle="Brand Positioning, Lead Generation Systems, Digital Reach & Retention"
        pageNumber={6}
        icon={<Megaphone className="w-4 h-4" />}
      />

      <div className="flex-1 flex flex-col gap-3 my-1 overflow-hidden">
        {/* Top Score Banner */}
        <div className="bg-slate-900 text-white p-3 rounded-lg flex items-center justify-between border-l-4 border-[#c29d2f]">
          <div>
            <div className="text-[7pt] text-[#c29d2f] font-mono font-bold uppercase tracking-widest">
              PILLAR 03 EVALUATION
            </div>
            <h2 className="text-xs font-black text-white uppercase tracking-wide">
              Customer Acquisition, Brand Positioning & Digital Reach
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

        {/* Marketing Sub-Dimensions */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2 pb-1 border-b border-slate-200">
            <BarChart3 className="w-3.5 h-3.5 text-[#0a192f]" />
            <h3 className="text-xs font-black uppercase text-[#0a192f] tracking-wider">
              Marketing & Growth Sub-Dimension Breakdown
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[8pt]">
            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Lead Generation Consistency</div>
                <div className="text-[7pt] text-slate-500">Inbound vs outbound balance</div>
              </div>
              <span className="font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">58/100</span>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Digital Marketing & Web Footprint</div>
                <div className="text-[7pt] text-slate-500">SEO, social presence & Google positioning</div>
              </div>
              <span className="font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">60/100</span>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Brand Differentiation & Messaging</div>
                <div className="text-[7pt] text-slate-500">Value proposition clarity vs competitors</div>
              </div>
              <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">68/100</span>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Customer Retention & LTV Strategy</div>
                <div className="text-[7pt] text-slate-500">Upsell, cross-sell & loyalty loops</div>
              </div>
              <span className="font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">62/100</span>
            </div>
          </div>
        </div>

        {/* 2x2 Market Positioning Matrix Visualizer */}
        <div className="bg-slate-900 text-white rounded-lg p-3.5 border-l-4 border-[#c29d2f]">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-black text-white uppercase tracking-wider">
              Competitive Market Positioning Matrix
            </div>
            <span className="text-[7pt] font-mono text-[#c29d2f] font-bold">SECTOR: {data.industry}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[7.5pt] bg-slate-800 p-2.5 rounded border border-slate-700">
            <div className="bg-slate-900 p-2 rounded border border-slate-700">
              <div className="text-[#c29d2f] font-bold uppercase">High Differentiation / Low Reach</div>
              <div className="text-slate-300 mt-1 font-medium">Your Current Position: Excellent product quality, but market awareness is limited to direct referrals.</div>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-[#c29d2f] relative">
              <div className="text-emerald-400 font-bold uppercase">High Differentiation / High Reach</div>
              <div className="text-slate-300 mt-1 font-medium">Target Growth Quadrant: Automated digital acquisition + established industry authority.</div>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-700 opacity-60">
              <div className="text-slate-400 font-bold uppercase">Low Differentiation / Low Reach</div>
              <div className="text-slate-400 mt-1">Commodity Price Trap</div>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-700 opacity-60">
              <div className="text-slate-400 font-bold uppercase">Low Differentiation / High Reach</div>
              <div className="text-slate-400 mt-1">High Cost / Low Margin Player</div>
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
                This observation reflects our analysis of your customer acquisition architecture. Building a predictable inbound digital engine reduces dependence on passive word-of-mouth and secures brand authority in {data.industry}.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 flex flex-col justify-between">
            <div className="text-[6.5pt] font-extrabold text-[#0a192f] uppercase tracking-wider border-b border-slate-200 pb-0.5 mb-1 flex items-center justify-between">
              <span>Business Impact™</span>
              <span className="text-[6pt] font-mono text-slate-400">Pillar 3</span>
            </div>
            <div className="grid grid-cols-2 gap-x-1.5 gap-y-0.5 text-[6.5pt]">
              <div>
                <span className="text-slate-400 font-medium block">Revenue Impact:</span>
                <span className="font-bold text-slate-800">Lead Volume 2X</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Cost Impact:</span>
                <span className="font-bold text-slate-800">Lower CAC</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Risk Level:</span>
                <span className="font-bold text-amber-700">{p.score < 50 ? 'Critical' : 'Moderate'}</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Timeline:</span>
                <span className="font-bold text-[#0a192f]">30–60 Days</span>
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
                Marketing Strengths
              </h3>
            </div>
            <ul className="space-y-1.5 text-[8pt] text-slate-800">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Strong word-of-mouth reputation and client satisfaction rates.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Authentic founder story and deep sector expertise in {data.industry}.</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50/70 border border-red-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2 pb-1 border-b border-red-200">
              <AlertTriangle className="w-3.5 h-3.5 text-red-700" />
              <h3 className="text-xs font-black uppercase text-red-900 tracking-wider">
                Marketing Risks
              </h3>
            </div>
            <ul className="space-y-1.5 text-[8pt] text-slate-800">
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>Heavy reliance on organic word-of-mouth without predictable digital ads.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>Inconsistent content cadence on digital channels and B2B platforms.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Marketing Directives */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2 pb-1 border-b border-slate-200">
            <Target className="w-3.5 h-3.5 text-[#0a192f]" />
            <h3 className="text-xs font-black uppercase text-[#0a192f] tracking-wider">
              Marketing & Customer Acquisition Directives
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[8pt]">
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase">01. Digital Engine</div>
              <div className="font-bold text-slate-900 mt-0.5">Automated Lead Magnet</div>
              <div className="text-[7pt] text-slate-500 mt-0.5">Publish an industry whitepaper/calculator to capture qualified lead contact info.</div>
            </div>
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase">02. Case Study Library</div>
              <div className="font-bold text-slate-900 mt-0.5">Proof Assets</div>
              <div className="text-[7pt] text-slate-500 mt-0.5">Develop 5 structured client success case studies showcasing ROI & metrics.</div>
            </div>
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase">03. Referral Engine</div>
              <div className="font-bold text-slate-900 mt-0.5">Systematized Incentives</div>
              <div className="text-[7pt] text-slate-500 mt-0.5">Formalize a client referral reward program with automated follow-up emails.</div>
            </div>
          </div>
        </div>
      </div>

      <DossierFooter companyName={data.companyName} reportId={data.displayReportId} />
    </div>
  );
};
