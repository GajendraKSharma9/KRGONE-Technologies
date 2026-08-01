import React from 'react';
import { ProcessedDossierData } from './dossierTypes';
import { DossierHeader } from './DossierHeader';
import { DossierFooter } from './DossierFooter';
import { Calendar, Target, CheckCircle2, Clock, Users, ArrowRight, ShieldAlert } from 'lucide-react';

export const Page14Sprint90Days: React.FC<{ data: ProcessedDossierData }> = ({ data }) => {
  return (
    <div 
      className="print-page bg-white w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] text-[#0a192f] p-[12mm] flex flex-col justify-between box-border page-break-after:always relative overflow-hidden print:m-0 font-sans select-none"
      style={{ backgroundColor: '#ffffff', width: '210mm', height: '297mm', padding: '12mm' }}
    >
      <DossierHeader
        sectionTitle="Page 14 · 90-Day Business Growth Sprint™"
        subtitle="Phase-Wise Implementation Sprints, Execution Milestones & Target KPIs"
        pageNumber={14}
        icon={<Calendar className="w-4 h-4" />}
      />

      <div className="flex-1 flex flex-col gap-3 my-1 overflow-hidden">
        {/* Top Header Summary */}
        <div className="bg-slate-900 text-white p-3 rounded-lg flex items-center justify-between border-l-4 border-[#c29d2f]">
          <div>
            <div className="text-[7pt] text-[#c29d2f] font-mono font-bold uppercase tracking-widest">
              EXECUTION ARCHITECTURE
            </div>
            <h2 className="text-xs font-black text-white uppercase tracking-wide">
              90-Day Operational Transformation Sprint for {data.companyName}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-[6.5pt] text-slate-400 font-bold uppercase">TARGET COMPLETION</div>
              <div className="text-xs font-black text-[#c29d2f] font-mono">90 DAYS</div>
            </div>
            <span className="text-[7.5pt] font-extrabold px-2 py-0.5 rounded border border-emerald-500/40 bg-emerald-500/20 text-emerald-300">
              HIGH PRIORITY
            </span>
          </div>
        </div>

        {/* Sprint Phase 1: Days 1 to 30 */}
        <div className="bg-red-50/70 border border-red-200 rounded-lg p-3">
          <div className="flex items-center justify-between border-b border-red-200 pb-1.5 mb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-red-800 text-white font-mono font-black text-xs flex items-center justify-center">01</span>
              <div>
                <h3 className="text-xs font-black uppercase text-red-900">
                  Days 1–30: Emergency Risk Mitigation & Stabilization Sprint
                </h3>
                <div className="text-[7pt] text-red-800 font-medium">Focus: Plug cash leakages, stop founder firefighting & stabilize sales pipeline</div>
              </div>
            </div>
            <span className="text-[6.5pt] font-extrabold text-red-800 bg-red-100 px-2 py-0.5 rounded border border-red-300">
              STABILIZATION
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-[7.5pt]">
            <div className="bg-white p-2 rounded border border-red-200">
              <div className="font-bold text-red-900">1. Operational Daily Tracking</div>
              <div className="text-slate-700 mt-0.5 font-normal">Deploy end-of-day task reporting templates for operational team.</div>
              <div className="text-[6.5pt] font-bold text-slate-500 mt-1">Owner: Ops Manager</div>
            </div>

            <div className="bg-white p-2 rounded border border-red-200">
              <div className="font-bold text-red-900">2. Sales Pipeline CRM</div>
              <div className="text-slate-700 mt-0.5 font-normal">Migrate active leads from spreadsheets to Cloud CRM with stage gates.</div>
              <div className="text-[6.5pt] font-bold text-slate-500 mt-1">Owner: Sales Lead</div>
            </div>

            <div className="bg-white p-2 rounded border border-red-200">
              <div className="font-bold text-red-900">3. Accounts Receivable Audit</div>
              <div className="font-bold text-slate-700 mt-0.5 font-normal">Audit overdue invoices & dispatch firm payment reminder notices.</div>
              <div className="text-[6.5pt] font-bold text-slate-500 mt-1">Owner: Finance Lead</div>
            </div>
          </div>
        </div>

        {/* Sprint Phase 2: Days 31 to 60 */}
        <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-3">
          <div className="flex items-center justify-between border-b border-amber-200 pb-1.5 mb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-amber-800 text-white font-mono font-black text-xs flex items-center justify-center">02</span>
              <div>
                <h3 className="text-xs font-black uppercase text-amber-900">
                  Days 31–60: Process Standardization & Workflow Architecture Sprint
                </h3>
                <div className="text-[7pt] text-amber-800 font-medium">Focus: Document core SOPs, automate customer communication & clarify roles</div>
              </div>
            </div>
            <span className="text-[6.5pt] font-extrabold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
              STANDARDIZATION
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-[7.5pt]">
            <div className="bg-white p-2 rounded border border-amber-200">
              <div className="font-bold text-amber-900">1. SOP Document Drafting</div>
              <div className="text-slate-700 mt-0.5 font-normal">Publish visual SOP guides for top 5 recurring delivery tasks.</div>
              <div className="text-[6.5pt] font-bold text-slate-500 mt-1">Owner: Process Consultant</div>
            </div>

            <div className="bg-white p-2 rounded border border-amber-200">
              <div className="font-bold text-amber-900">2. Customer Retention Journeys</div>
              <div className="text-slate-700 mt-0.5 font-normal">Launch automated post-delivery check-in emails & review requests.</div>
              <div className="text-[6.5pt] font-bold text-slate-500 mt-1">Owner: Marketing Lead</div>
            </div>

            <div className="bg-white p-2 rounded border border-amber-200">
              <div className="font-bold text-amber-900">3. Role Scorecards & KPIs</div>
              <div className="text-slate-700 mt-0.5 font-normal">Define 3 weekly measurable KPIs for all department heads.</div>
              <div className="text-[6.5pt] font-bold text-slate-500 mt-1">Owner: Founder</div>
            </div>
          </div>
        </div>

        {/* Sprint Phase 3: Days 61 to 90 */}
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-lg p-3">
          <div className="flex items-center justify-between border-b border-emerald-200 pb-1.5 mb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-emerald-800 text-white font-mono font-black text-xs flex items-center justify-center">03</span>
              <div>
                <h3 className="text-xs font-black uppercase text-emerald-900">
                  Days 61–90: System Optimization & Capital Scaling Sprint
                </h3>
                <div className="text-[7pt] text-emerald-800 font-medium">Focus: Deploy AI automation tools, review product margins & review performance</div>
              </div>
            </div>
            <span className="text-[6.5pt] font-extrabold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
              OPTIMIZATION
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-[7.5pt]">
            <div className="bg-white p-2 rounded border border-emerald-200">
              <div className="font-bold text-emerald-900">1. AI Tool Integration</div>
              <div className="text-slate-700 mt-0.5 font-normal">Deploy AI sales proposal generator & automated WhatsApp agent.</div>
              <div className="text-[6.5pt] font-bold text-slate-500 mt-1">Owner: Tech Partner</div>
            </div>

            <div className="bg-white p-2 rounded border border-emerald-200">
              <div className="font-bold text-emerald-900">2. Gross Margin Audit</div>
              <div className="text-slate-700 mt-0.5 font-normal">Prune unprofitable product lines & re-negotiate low-margin contracts.</div>
              <div className="text-[6.5pt] font-bold text-slate-500 mt-1">Owner: Finance Lead</div>
            </div>

            <div className="bg-white p-2 rounded border border-emerald-200">
              <div className="font-bold text-emerald-900">3. Quarterly Strategy Review</div>
              <div className="text-slate-700 mt-0.5 font-normal">Conduct formal 90-day review & map next sprint milestones.</div>
              <div className="text-[6.5pt] font-bold text-slate-500 mt-1">Owner: Founder & KRGONE</div>
            </div>
          </div>
        </div>

        {/* Target KPIs Table */}
        <div className="bg-[#0a192f] text-white p-3 rounded-lg border-l-4 border-[#c29d2f] text-[7.5pt]">
          <div className="font-black text-[#c29d2f] uppercase tracking-wider mb-1">
            90-DAY TARGET KPIS & EVALUATION METRICS
          </div>
          <div className="grid grid-cols-4 gap-2 text-center mt-1">
            <div className="bg-slate-800 p-1.5 rounded border border-slate-700">
              <div className="text-slate-400 text-[6.5pt] uppercase">Collection DSO</div>
              <div className="text-emerald-400 font-bold font-mono text-xs mt-0.5">&lt; 45 Days</div>
            </div>
            <div className="bg-slate-800 p-1.5 rounded border border-slate-700">
              <div className="text-slate-400 text-[6.5pt] uppercase">Proposal Win Rate</div>
              <div className="text-emerald-400 font-bold font-mono text-xs mt-0.5">25%+ Win Rate</div>
            </div>
            <div className="bg-slate-800 p-1.5 rounded border border-slate-700">
              <div className="text-slate-400 text-[6.5pt] uppercase">Founder Ops Hours</div>
              <div className="text-emerald-400 font-bold font-mono text-xs mt-0.5">&lt; 15 Hrs / Wk</div>
            </div>
            <div className="bg-slate-800 p-1.5 rounded border border-slate-700">
              <div className="text-slate-400 text-[6.5pt] uppercase">SOP Coverage</div>
              <div className="text-emerald-400 font-bold font-mono text-xs mt-0.5">Top 5 Processes</div>
            </div>
          </div>
        </div>
      </div>

      <DossierFooter companyName={data.companyName} reportId={data.displayReportId} />
    </div>
  );
};
