import React from 'react';
import { ProcessedDossierData } from './dossierTypes';
import { DossierHeader } from './DossierHeader';
import { DossierFooter } from './DossierFooter';
import { Building2, Target, AlertTriangle, Cpu, Users, MapPin, IndianRupee, Layers, ShieldCheck, FileCheck2 } from 'lucide-react';

export const Page1BusinessProfile: React.FC<{ data: ProcessedDossierData }> = ({ data }) => {
  return (
    <div 
      className="print-page bg-white w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] text-[#0a192f] p-[12mm] flex flex-col justify-between box-border page-break-after:always relative overflow-hidden print:m-0 font-sans select-none"
      style={{ backgroundColor: '#ffffff', width: '210mm', height: '297mm', padding: '12mm' }}
    >
      <DossierHeader
        sectionTitle="Page 1 · Business Profile & Assessment Scope"
        subtitle="Company Profile, Key Inputs, Strategic Focus & Diagnostic Scope"
        pageNumber={1}
        icon={<Building2 className="w-4 h-4" />}
      />

      <div className="flex-1 flex flex-col gap-3 my-1 overflow-hidden">
        {/* Section 1: Business Profile Matrix */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2 pb-1 border-b border-slate-200">
            <Building2 className="w-3.5 h-3.5 text-[#0a192f]" />
            <h2 className="text-xs font-black uppercase text-[#0a192f] tracking-wider">
              1. Executive Business Profile & Metadata
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-slate-400 uppercase tracking-wider">Company Name</div>
              <div className="text-xs font-black text-[#0a192f] truncate">{data.companyName}</div>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-slate-400 uppercase tracking-wider">Industry Vertical</div>
              <div className="text-xs font-bold text-slate-800">{data.industry}</div>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-slate-400 uppercase tracking-wider">Geography & Location</div>
              <div className="text-xs font-bold text-slate-800">{data.cityLocation}, {data.stateLocation}</div>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-slate-400 uppercase tracking-wider">Customer Target Model</div>
              <div className="text-xs font-bold text-slate-800">{data.customerType} Enterprise</div>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-slate-400 uppercase tracking-wider">Workforce Size</div>
              <div className="text-xs font-bold text-slate-800">{data.workforceSize}</div>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-slate-400 uppercase tracking-wider">Annual Revenue Range</div>
              <div className="text-xs font-black text-[#c29d2f] font-mono">{data.revenue}</div>
            </div>
          </div>
        </div>

        {/* Section 2: Goals & Challenges Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Active Business Goals */}
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2 pb-1 border-b border-emerald-200">
              <Target className="w-3.5 h-3.5 text-emerald-700" />
              <h2 className="text-xs font-black uppercase text-emerald-900 tracking-wider">
                Strategic Growth Objectives (Goals)
              </h2>
            </div>
            <div className="space-y-1.5">
              {data.userGoals.map((goal, idx) => (
                <div key={idx} className="bg-white p-2 rounded border border-emerald-200/80 flex items-center justify-between text-xs font-bold text-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[7pt] font-black flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <span>{goal}</span>
                  </div>
                  <span className="text-[7pt] font-extrabold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    PRIORITY
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Operational Challenges */}
          <div className="bg-red-50/60 border border-red-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2 pb-1 border-b border-red-200">
              <AlertTriangle className="w-3.5 h-3.5 text-red-700" />
              <h2 className="text-xs font-black uppercase text-red-900 tracking-wider">
                Primary Business Bottlenecks
              </h2>
            </div>
            <div className="space-y-1.5">
              {data.userChallenges.map((challenge, idx) => (
                <div key={idx} className="bg-white p-2 rounded border border-red-200/80 flex items-center justify-between text-xs font-bold text-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-red-100 text-red-800 font-mono text-[7pt] font-black flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <span className="truncate max-w-[190px]">{challenge}</span>
                  </div>
                  <span className="text-[7pt] font-extrabold text-red-700 bg-red-50 px-1.5 py-0.5 rounded border border-red-200">
                    FRICTION
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Diagnostic Scope & AI Business Context */}
        <div className="bg-[#0a192f] text-white rounded-lg p-3.5 border-l-4 border-[#c29d2f] shadow-sm">
          <div className="flex items-center justify-between mb-2 pb-1 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#c29d2f]" />
              <h2 className="text-xs font-black uppercase text-white tracking-wider">
                AI Business Context & Diagnostic Scope
              </h2>
            </div>
            <span className="text-[7pt] font-mono text-[#c29d2f] bg-[#c29d2f]/10 border border-[#c29d2f]/30 px-2 py-0.5 rounded">
              EVALUATION FRAMEWORK V2.0
            </span>
          </div>

          <p className="text-[8.5pt] text-slate-300 leading-relaxed font-normal mb-2">
            This diagnostic audit evaluates <strong className="text-white">{data.companyName}</strong> operating within the <strong className="text-white">{data.industry}</strong> sector. The evaluation applies the <strong className="text-[#c29d2f]">KRGONE 7-Pillar Business Growth Index™</strong> to benchmark your current operational maturity against peer organizations in the <strong className="text-white">{data.revenue}</strong> revenue bracket.
          </p>

          <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-slate-800 text-[8pt]">
            <div className="bg-slate-800/80 p-2 rounded border border-slate-700">
              <div className="text-[7pt] text-[#c29d2f] font-bold uppercase">7 Core Pillars</div>
              <div className="text-slate-200 font-medium mt-0.5">Leadership, Sales, Marketing, Operations, Finance, People, Tech</div>
            </div>
            <div className="bg-slate-800/80 p-2 rounded border border-slate-700">
              <div className="text-[7pt] text-[#c29d2f] font-bold uppercase">Evaluation Engine</div>
              <div className="text-slate-200 font-medium mt-0.5">Quantitative Scorecard + Qualitative Gap Analysis</div>
            </div>
            <div className="bg-slate-800/80 p-2 rounded border border-slate-700">
              <div className="text-[7pt] text-[#c29d2f] font-bold uppercase">Target Output</div>
              <div className="text-slate-200 font-medium mt-0.5">90-Day Execution Sprint & Actionable Strategic Roadmap</div>
            </div>
          </div>
        </div>

        {/* Section 4: Assessment Metadata & Evaluation Integrity */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex items-center justify-between text-xs font-medium text-slate-700">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#0a192f] shrink-0" />
            <div>
              <span className="font-bold text-[#0a192f]">Assessment Verification:</span> Validated against KRGONE SME Benchmark Database 2025.
            </div>
          </div>
          <div className="flex items-center gap-2 text-[8pt] font-mono font-bold text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200">
            <span>SCOPE ID:</span>
            <span className="text-[#0a192f]">{data.displayReportId}</span>
          </div>
        </div>
      </div>

      <DossierFooter companyName={data.companyName} reportId={data.displayReportId} />
    </div>
  );
};
