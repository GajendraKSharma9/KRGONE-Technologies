import React from 'react';
import { ProcessedDossierData } from './dossierTypes';
import { DossierHeader } from './DossierHeader';
import { DossierFooter } from './DossierFooter';
import { Settings, Workflow, CheckCircle2, AlertTriangle, Layers, FileCode, Target, ShieldAlert, Sparkles } from 'lucide-react';

export const Page7OperationsProcess: React.FC<{ data: ProcessedDossierData }> = ({ data }) => {
  const p = data.pillars[3] || { name: 'Operations & Process', code: 'P4', score: 58, weight: '15%', status: 'Critical Risk', impact: 'Execution Friction', color: 'text-red-600 bg-red-50 border-red-200' };

  return (
    <div 
      className="print-page bg-white w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] text-[#0a192f] p-[12mm] flex flex-col justify-between box-border page-break-after:always relative overflow-hidden print:m-0 font-sans select-none"
      style={{ backgroundColor: '#ffffff', width: '210mm', height: '297mm', padding: '12mm' }}
    >
      <DossierHeader
        sectionTitle="Page 7 · Pillar 4: Operations & Process Excellence"
        subtitle="SOP Maturity, Workflow Standardization, Delivery Efficiency & Risk Controls"
        pageNumber={7}
        icon={<Settings className="w-4 h-4" />}
      />

      <div className="flex-1 flex flex-col gap-3 my-1 overflow-hidden">
        {/* Top Score Banner */}
        <div className="bg-slate-900 text-white p-3 rounded-lg flex items-center justify-between border-l-4 border-[#c29d2f]">
          <div>
            <div className="text-[7pt] text-[#c29d2f] font-mono font-bold uppercase tracking-widest">
              PILLAR 04 EVALUATION
            </div>
            <h2 className="text-xs font-black text-white uppercase tracking-wide">
              Operations & Process Standardization Audit
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

        {/* Sub-Dimension Grid */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2 pb-1 border-b border-slate-200">
            <Workflow className="w-3.5 h-3.5 text-[#0a192f]" />
            <h3 className="text-xs font-black uppercase text-[#0a192f] tracking-wider">
              Operational Sub-Dimension Assessment
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[8pt]">
            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Standard Operating Procedures (SOPs)</div>
                <div className="text-[7pt] text-slate-500">Written & visual process documentation level</div>
              </div>
              <span className="font-mono font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">52/100</span>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Quality Control & Delivery Uniformity</div>
                <div className="text-[7pt] text-slate-500">Error rate reduction & check-list audits</div>
              </div>
              <span className="font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">60/100</span>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Resource Utilization & Capacity</div>
                <div className="text-[7pt] text-slate-500">Staff throughput & turnaround speed</div>
              </div>
              <span className="font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">62/100</span>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Vendor & Supply Chain Reliability</div>
                <div className="text-[7pt] text-slate-500">Input cost control & delivery timelines</div>
              </div>
              <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">68/100</span>
            </div>
          </div>
        </div>

        {/* Operational Bottleneck Workflow Swimlane Box */}
        <div className="bg-[#0a192f] text-white rounded-lg p-3.5 border-l-4 border-[#c29d2f]">
          <div className="text-xs font-black uppercase text-white tracking-wider mb-2">
            Operational Friction Point Mapping (Current State)
          </div>

          <div className="grid grid-cols-3 gap-2 text-[7.5pt]">
            <div className="bg-slate-800 p-2 rounded border border-slate-700">
              <div className="text-[#c29d2f] font-bold uppercase">1. Intake & Order Prep</div>
              <div className="text-slate-300 mt-1 font-normal">Order parameters captured verbally or via text messages, creating ambiguity.</div>
            </div>
            <div className="bg-slate-800 p-2 rounded border border-red-500/80 bg-red-950/20">
              <div className="text-red-400 font-bold uppercase">2. Execution & Handoff (BOTTLENECK)</div>
              <div className="text-slate-200 mt-1 font-normal">Staff relies on memory; requires founder clarification on non-standard requests.</div>
            </div>
            <div className="bg-slate-800 p-2 rounded border border-slate-700">
              <div className="text-[#c29d2f] font-bold uppercase">3. Final Delivery & Billing</div>
              <div className="text-slate-300 mt-1 font-normal">Manual invoice generation delays payment collection by 10-15 days.</div>
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
                This observation reflects our diagnostic audit of your operational execution workflows. Documenting SOPs for high-frequency processes removes key-person dependencies and protects operating gross margins.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 flex flex-col justify-between">
            <div className="text-[6.5pt] font-extrabold text-[#0a192f] uppercase tracking-wider border-b border-slate-200 pb-0.5 mb-1 flex items-center justify-between">
              <span>Business Impact™</span>
              <span className="text-[6pt] font-mono text-slate-400">Pillar 4</span>
            </div>
            <div className="grid grid-cols-2 gap-x-1.5 gap-y-0.5 text-[6.5pt]">
              <div>
                <span className="text-slate-400 font-medium block">Revenue Impact:</span>
                <span className="font-bold text-slate-800">Quality Uniformity</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Cost Impact:</span>
                <span className="font-bold text-emerald-700">-30% Rework Error</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Risk Level:</span>
                <span className="font-bold text-red-700">{p.score < 50 ? 'Critical' : 'Moderate Risk'}</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Timeline:</span>
                <span className="font-bold text-[#0a192f]">Immediate · 30 Days</span>
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
                Operational Strengths
              </h3>
            </div>
            <ul className="space-y-1.5 text-[8pt] text-slate-800">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Deep domain knowledge within execution team in {data.industry}.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span>High willingness of staff to resolve customer emergencies.</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50/70 border border-red-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2 pb-1 border-b border-red-200">
              <ShieldAlert className="w-3.5 h-3.5 text-red-700" />
              <h3 className="text-xs font-black uppercase text-red-900 tracking-wider">
                Operational Vulnerabilities
              </h3>
            </div>
            <ul className="space-y-1.5 text-[8pt] text-slate-800">
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>High rework rates due to non-standardized intake checklists.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>Key-person vulnerability: Single points of failure in technical operations.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Operational Directives */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2 pb-1 border-b border-slate-200">
            <Target className="w-3.5 h-3.5 text-[#0a192f]" />
            <h3 className="text-xs font-black uppercase text-[#0a192f] tracking-wider">
              Operational Process Optimization Roadmap
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[8pt]">
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase">01. SOP Wiki Engine</div>
              <div className="font-bold text-slate-900 mt-0.5">Notion/Cloud SOP Base</div>
              <div className="text-[7pt] text-slate-500 mt-0.5">Document step-by-step SOPs for top 5 recurring operational tasks with video guides.</div>
            </div>
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase">02. QC Checklists</div>
              <div className="font-bold text-slate-900 mt-0.5">Sign-Off Checklists</div>
              <div className="text-[7pt] text-slate-500 mt-0.5">Implement mandatory physical/digital quality sign-off forms prior to customer delivery.</div>
            </div>
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase">03. Weekly Throughput KPI</div>
              <div className="font-bold text-slate-900 mt-0.5">Capacity Tracking</div>
              <div className="text-[7pt] text-slate-500 mt-0.5">Track daily completed units vs target to eliminate delivery bottlenecks early.</div>
            </div>
          </div>
        </div>
      </div>

      <DossierFooter companyName={data.companyName} reportId={data.displayReportId} />
    </div>
  );
};
