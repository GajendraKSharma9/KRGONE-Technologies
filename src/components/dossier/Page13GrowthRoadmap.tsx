import React from 'react';
import { ProcessedDossierData } from './dossierTypes';
import { DossierHeader } from './DossierHeader';
import { DossierFooter } from './DossierFooter';
import { TrendingUp, Compass, Flag, Shield, Award, Rocket, ArrowRight } from 'lucide-react';

export const Page13GrowthRoadmap: React.FC<{ data: ProcessedDossierData }> = ({ data }) => {
  return (
    <div 
      className="print-page bg-white w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] text-[#0a192f] p-[12mm] flex flex-col justify-between box-border page-break-after:always relative overflow-hidden print:m-0 font-sans select-none"
      style={{ backgroundColor: '#ffffff', width: '210mm', height: '297mm', padding: '12mm' }}
    >
      <DossierHeader
        sectionTitle="Page 13 · Multi-Year Growth Roadmap & Expansion Strategy"
        subtitle="3-Year Enterprise Scaling Trajectory, Market Expansion & Competitive Moat Strategy"
        pageNumber={13}
        icon={<TrendingUp className="w-4 h-4" />}
      />

      <div className="flex-1 flex flex-col gap-3 my-1 overflow-hidden">
        {/* Strategic Growth Vision Banner */}
        <div className="bg-slate-900 text-white p-3.5 rounded-lg border-l-4 border-[#c29d2f] shadow-sm flex items-center justify-between">
          <div>
            <div className="text-[7pt] text-[#c29d2f] font-mono font-bold uppercase tracking-widest">
              ENTERPRISE SCALING HORIZON
            </div>
            <h2 className="text-xs font-black text-white uppercase tracking-wide">
              3-Year Strategic Growth Strategy for {data.companyName}
            </h2>
            <p className="text-[7.5pt] text-slate-300 font-medium mt-0.5">
              Sector Alignment: <strong className="text-white">{data.industry}</strong> • Current Revenue Band: <strong className="text-[#c29d2f] font-mono">{data.revenue}</strong>
            </p>
          </div>

          <div className="text-right border-l border-slate-700 pl-4">
            <div className="text-[6.5pt] font-bold text-slate-400 uppercase">TARGET MULTIPLE</div>
            <div className="text-lg font-black text-[#c29d2f] font-mono">2.5X - 3.0X</div>
            <div className="text-[6.5pt] text-slate-300 uppercase font-semibold">3-Year Revenue Target</div>
          </div>
        </div>

        {/* 3-Year Phase Breakdown Cards */}
        <div className="space-y-2.5">
          {/* Year 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-[#0a192f] text-[#c29d2f] font-mono font-black text-xs flex items-center justify-center">Y1</span>
                <div>
                  <h3 className="text-xs font-black uppercase text-[#0a192f]">
                    Year 1: Foundation Building & Operational Systematization
                  </h3>
                  <div className="text-[7pt] text-slate-500 font-medium">Focus: Stabilize core systems, deploy SOPs & automate sales pipeline</div>
                </div>
              </div>
              <span className="text-[7pt] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                STABILIZATION
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[7.5pt]">
              <div className="bg-white p-2 rounded border border-slate-200">
                <div className="font-extrabold text-[#0a192f] uppercase text-[7pt] text-[#c29d2f]">Revenue Expansion</div>
                <div className="font-bold text-slate-900 mt-0.5">Pipeline Systematization</div>
                <div className="text-slate-600 mt-0.5">Deploy CRM; standardize proposal templates and follow-up sales discipline.</div>
              </div>
              <div className="bg-white p-2 rounded border border-slate-200">
                <div className="font-extrabold text-[#0a192f] uppercase text-[7pt] text-[#c29d2f]">Operational Scale</div>
                <div className="font-bold text-slate-900 mt-0.5">SOP Standardization</div>
                <div className="text-slate-600 mt-0.5">Document SOPs for top 5 core tasks; eliminate founder operational bottleneck.</div>
              </div>
              <div className="bg-white p-2 rounded border border-slate-200">
                <div className="font-extrabold text-[#0a192f] uppercase text-[7pt] text-[#c29d2f]">Strategic Innovation</div>
                <div className="font-bold text-slate-900 mt-0.5">Cash Flow Controls</div>
                <div className="text-slate-600 mt-0.5">Implement 13-week rolling cash flow model & tighten accounts receivable collections.</div>
              </div>
            </div>
          </div>

          {/* Year 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-[#0a192f] text-[#c29d2f] font-mono font-black text-xs flex items-center justify-center">Y2</span>
                <div>
                  <h3 className="text-xs font-black uppercase text-[#0a192f]">
                    Year 2: Market Expansion & Customer Acquisition Scaling
                  </h3>
                  <div className="text-[7pt] text-slate-500 font-medium">Focus: Scale acquisition channels, introduce AI tools & expand geographic reach</div>
                </div>
              </div>
              <span className="text-[7pt] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                EXPANSION
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[7.5pt]">
              <div className="bg-white p-2 rounded border border-slate-200">
                <div className="font-extrabold text-[#0a192f] uppercase text-[7pt] text-[#c29d2f]">Revenue Expansion</div>
                <div className="font-bold text-slate-900 mt-0.5">Geographic Reach</div>
                <div className="text-slate-600 mt-0.5">Expand sales footprint into adjacent tier-1 & tier-2 regional markets.</div>
              </div>
              <div className="bg-white p-2 rounded border border-slate-200">
                <div className="font-extrabold text-[#0a192f] uppercase text-[7pt] text-[#c29d2f]">Operational Scale</div>
                <div className="font-bold text-slate-900 mt-0.5">Team Delegation</div>
                <div className="text-slate-600 mt-0.5">Hire dedicated middle managers for sales and operations; institute KPI bonuses.</div>
              </div>
              <div className="bg-white p-2 rounded border border-slate-200">
                <div className="font-extrabold text-[#0a192f] uppercase text-[7pt] text-[#c29d2f]">Strategic Innovation</div>
                <div className="font-bold text-slate-900 mt-0.5">Digital Growth Engine</div>
                <div className="text-slate-600 mt-0.5">Launch paid inbound lead generation campaigns & automated AI sales assistant.</div>
              </div>
            </div>
          </div>

          {/* Year 3 */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-[#0a192f] text-[#c29d2f] font-mono font-black text-xs flex items-center justify-center">Y3</span>
                <div>
                  <h3 className="text-xs font-black uppercase text-[#0a192f]">
                    Year 3: Market Dominance & Institutional Valuation
                  </h3>
                  <div className="text-[7pt] text-slate-500 font-medium">Focus: Maximize EBITDA margins, build defensible moat & explore capital opportunities</div>
                </div>
              </div>
              <span className="text-[7pt] font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                DOMINANCE
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[7.5pt]">
              <div className="bg-white p-2 rounded border border-slate-200">
                <div className="font-extrabold text-[#0a192f] uppercase text-[7pt] text-[#c29d2f]">Revenue Expansion</div>
                <div className="font-bold text-slate-900 mt-0.5">EBITDA Optimization</div>
                <div className="text-slate-600 mt-0.5">Achieve 20%+ net EBITDA margins via automation & economies of scale.</div>
              </div>
              <div className="bg-white p-2 rounded border border-slate-200">
                <div className="font-extrabold text-[#0a192f] uppercase text-[7pt] text-[#c29d2f]">Operational Scale</div>
                <div className="font-bold text-slate-900 mt-0.5">Governance Board</div>
                <div className="text-slate-600 mt-0.5">Transition founder into Chairman role backed by professional C-suite management.</div>
              </div>
              <div className="bg-white p-2 rounded border border-slate-200">
                <div className="font-extrabold text-[#0a192f] uppercase text-[7pt] text-[#c29d2f]">Strategic Innovation</div>
                <div className="font-bold text-slate-900 mt-0.5">Competitive Moat</div>
                <div className="text-slate-600 mt-0.5">Build proprietary software/process IP that competitors cannot replicate easily.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Defensibility Callout Box */}
        <div className="bg-[#0a192f] text-white p-3 rounded-lg border-l-4 border-[#c29d2f] text-[8pt]">
          <div className="font-black text-[#c29d2f] uppercase tracking-wider mb-0.5">
            COMPETITIVE MOAT BUILDING DIRECTIVE
          </div>
          <p className="text-slate-300 leading-relaxed font-normal">
            By executing this 3-year roadmap, <strong className="text-white">{data.companyName}</strong> will decouple enterprise revenue growth from headcount growth. Standardized execution plus automated customer acquisition creates a high-margin business model that commands a premium valuation multiple in the {data.industry} sector.
          </p>
        </div>
      </div>

      <DossierFooter companyName={data.companyName} reportId={data.displayReportId} />
    </div>
  );
};
