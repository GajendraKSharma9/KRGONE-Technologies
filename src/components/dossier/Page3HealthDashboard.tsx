import React from 'react';
import { ProcessedDossierData } from './dossierTypes';
import { DossierHeader } from './DossierHeader';
import { DossierFooter } from './DossierFooter';
import { BarChart3, Layers, Target, TrendingUp, Compass, Award } from 'lucide-react';

export const Page3HealthDashboard: React.FC<{ data: ProcessedDossierData }> = ({ data }) => {
  return (
    <div 
      className="print-page bg-white w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] text-[#0a192f] p-[12mm] flex flex-col justify-between box-border page-break-after:always relative overflow-hidden print:m-0 font-sans select-none"
      style={{ backgroundColor: '#ffffff', width: '210mm', height: '297mm', padding: '12mm' }}
    >
      <DossierHeader
        sectionTitle="Page 3 · Business Health Dashboard™"
        subtitle="Complete 7-Pillar Scorecard, Benchmark Analysis & Performance Matrix"
        pageNumber={3}
        icon={<BarChart3 className="w-4 h-4" />}
      />

      <div className="flex-1 flex flex-col gap-2 my-0.5 overflow-hidden">
        {/* Top Summary Banner */}
        <div className="bg-slate-900 text-white p-2.5 rounded-lg flex items-center justify-between border-l-4 border-[#c29d2f]">
          <div>
            <div className="text-[6.5pt] text-[#c29d2f] font-mono font-bold uppercase tracking-widest">
              BUSINESS HEALTH INDEX™ OVERVIEW
            </div>
            <div className="text-[7.5pt] font-black text-white uppercase tracking-wide">
              {data.companyName} • 7-Pillar Diagnostic Performance
            </div>
          </div>

          <div className="flex items-center gap-3 text-right">
            <div>
              <div className="text-[6pt] text-slate-400 font-bold uppercase">Overall Index</div>
              <div className="text-base font-black text-[#c29d2f] font-mono">{data.displayScore}/100</div>
            </div>
            <div className="w-[1px] h-5 bg-slate-700" />
            <div>
              <div className="text-[6pt] text-slate-400 font-bold uppercase">Maturity Band</div>
              <div className="text-[7.5pt] font-extrabold text-white">{data.maturityStage}</div>
            </div>
          </div>
        </div>

        {/* 7-Pillar Scorecard Table */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5">
          <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#0a192f]" />
              <h2 className="text-[7.5pt] font-black uppercase text-[#0a192f] tracking-wider">
                3. Complete 7-Pillar Scorecard & Benchmark Matrix
              </h2>
            </div>
            <span className="text-[6.5pt] font-mono text-slate-500 font-bold">
              INDUSTRY BENCHMARK: 75/100
            </span>
          </div>

          <table className="w-full text-left text-[7.5pt] border-collapse">
            <thead>
              <tr className="bg-[#0a192f] text-white text-[6.5pt] font-extrabold uppercase">
                <th className="py-1 px-1.5 rounded-l">Pillar Code & Name</th>
                <th className="py-1 px-1 text-center">Weight</th>
                <th className="py-1 px-1 text-center">Score</th>
                <th className="py-1 px-1 text-center">Benchmark</th>
                <th className="py-1 px-1.5">Performance Bar</th>
                <th className="py-1 px-1.5 text-right rounded-r">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {data.pillars.map((p, idx) => {
                const benchmark = 75;
                return (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-1 px-1.5 font-bold text-slate-900">
                      <span className="font-mono text-[6.5pt] text-[#c29d2f] bg-slate-100 px-1 py-0.5 rounded mr-1 border border-slate-200">
                        {p.code}
                      </span>
                      {p.name}
                    </td>
                    <td className="py-1 px-1 text-center font-mono text-slate-600 font-semibold text-[7pt]">{p.weight}</td>
                    <td className="py-1 px-1 text-center font-mono font-black text-slate-900 text-[7.5pt]">{p.score}</td>
                    <td className="py-1 px-1 text-center font-mono text-slate-500 font-semibold text-[7pt]">{benchmark}</td>
                    <td className="py-1 px-1.5 w-1/3">
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden flex">
                        <div 
                          className={`h-full ${p.score < 50 ? 'bg-red-500' : p.score < 70 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                          style={{ width: `${p.score}%` }}
                        />
                      </div>
                    </td>
                    <td className="py-1 px-1.5 text-right">
                      <span className={`text-[6.5pt] font-extrabold px-1.5 py-0.5 rounded border ${p.color}`}>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pillar Comparison & Performance Quadrant */}
        <div className="grid grid-cols-2 gap-2">
          {/* Highest Performing Pillars */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-lg p-2.5">
            <div className="flex items-center gap-2 mb-1.5 pb-1 border-b border-emerald-200">
              <Award className="w-3 h-3 text-emerald-700" />
              <h3 className="text-[7.5pt] font-black uppercase text-emerald-900 tracking-wider">
                Top Performing Pillars
              </h3>
            </div>
            <div className="space-y-1 text-[7.5pt]">
              {data.pillars
                .slice()
                .sort((a, b) => b.score - a.score)
                .slice(0, 3)
                .map((p, idx) => (
                  <div key={idx} className="bg-white p-1.5 rounded border border-emerald-200/80 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-[7.5pt]">{p.name}</div>
                      <div className="text-[6.5pt] text-slate-500 font-medium">Strong operational baseline</div>
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <div className="text-[7.5pt] font-black font-mono text-emerald-700">{p.score}/100</div>
                      <div className="text-[6pt] font-bold text-emerald-600 uppercase">LEADING</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Critical Upgrade Needed Pillars */}
          <div className="bg-red-50/70 border border-red-200 rounded-lg p-2.5">
            <div className="flex items-center gap-2 mb-1.5 pb-1 border-b border-red-200">
              <Target className="w-3 h-3 text-red-700" />
              <h3 className="text-[7.5pt] font-black uppercase text-red-900 tracking-wider">
                Priority Upgrade Focus Areas
              </h3>
            </div>
            <div className="space-y-1 text-[7.5pt]">
              {data.pillars
                .slice()
                .sort((a, b) => a.score - b.score)
                .slice(0, 3)
                .map((p, idx) => (
                  <div key={idx} className="bg-white p-1.5 rounded border border-red-200/80 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-[7.5pt]">{p.name}</div>
                      <div className="text-[6.5pt] text-slate-500 font-medium">{p.impact}</div>
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <div className="text-[7.5pt] font-black font-mono text-red-700">{p.score}/100</div>
                      <div className="text-[6pt] font-bold text-red-600 uppercase">HIGH GAP</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Top 3 CEO Action Priorities Banner */}
        <div className="bg-slate-900 text-white p-2 rounded-lg border-2 border-[#c29d2f] flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#c29d2f] text-[#0a192f] font-black text-[6.5pt] flex items-center justify-center font-mono shrink-0">
              CEO
            </div>
            <div>
              <div className="text-[6pt] font-extrabold text-[#c29d2f] uppercase tracking-widest">
                TOP 3 CEO ACTION PRIORITIES
              </div>
              <div className="text-[7pt] font-semibold text-slate-200">
                Immediate Strategic Interventions Required
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[7pt]">
            {data.pillars
              .slice()
              .sort((a, b) => a.score - b.score)
              .slice(0, 3)
              .map((p, idx) => (
                <div key={idx} className="flex items-center gap-1 bg-white/10 px-1.5 py-0.5 rounded border border-white/15">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#c29d2f] text-[#0a192f] font-black text-[6pt] flex items-center justify-center shrink-0 font-mono">
                    {idx + 1}
                  </span>
                  <span className="font-bold text-white text-[6.5pt]">{p.name}</span>
                  <span className="font-mono text-[6pt] text-[#c29d2f] font-extrabold">({p.score}/100)</span>
                </div>
              ))}
          </div>
        </div>

        {/* Diagnostic Key Takeaway Box */}
        <div className="bg-slate-900 text-white p-2.5 rounded-lg border-t-2 border-[#c29d2f] text-[7.5pt]">
          <div className="font-black text-[#c29d2f] uppercase tracking-wider mb-0.5 text-[6.5pt]">
            EXECUTIVE DASHBOARD TAKEAWAY
          </div>
          <p className="text-slate-300 leading-snug font-normal">
            Your overall score of <strong className="text-white font-mono">{data.displayScore}/100</strong> places your enterprise in the <strong className="text-white">{data.maturityStage}</strong> phase. To transition to an Elite High-Performance Organization (85+ Score), focus immediate capital and management bandwidth on upgrading your lowest-scoring pillars ({data.pillars.slice().sort((a, b) => a.score - b.score)[0]?.name} & {data.pillars.slice().sort((a, b) => a.score - b.score)[1]?.name}).
          </p>
        </div>
      </div>

      <DossierFooter companyName={data.companyName} reportId={data.displayReportId} />
    </div>
  );
};
