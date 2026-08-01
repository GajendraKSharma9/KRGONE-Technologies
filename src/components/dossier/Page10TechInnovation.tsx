import React from 'react';
import { ProcessedDossierData } from './dossierTypes';
import { DossierHeader } from './DossierHeader';
import { DossierFooter } from './DossierFooter';
import { Cpu, Laptop, CheckCircle2, AlertTriangle, Cloud, Target, Database, Sparkles } from 'lucide-react';

export const Page10TechInnovation: React.FC<{ data: ProcessedDossierData }> = ({ data }) => {
  const p = data.pillars[6] || { name: 'Technology & Business Innovation', code: 'P7', score: 55, weight: '10%', status: 'Critical Risk', impact: 'Automation Gap', color: 'text-red-600 bg-red-50 border-red-200' };

  return (
    <div 
      className="print-page bg-white w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] text-[#0a192f] p-[12mm] flex flex-col justify-between box-border page-break-after:always relative overflow-hidden print:m-0 font-sans select-none"
      style={{ backgroundColor: '#ffffff', width: '210mm', height: '297mm', padding: '12mm' }}
    >
      <DossierHeader
        sectionTitle="Page 10 · Pillar 7: Technology & Digital Innovation"
        subtitle="Digital Maturity, Process Automation, Cloud Infrastructure & AI Readiness"
        pageNumber={10}
        icon={<Cpu className="w-4 h-4" />}
      />

      <div className="flex-1 flex flex-col gap-3 my-1 overflow-hidden">
        {/* Top Score Banner */}
        <div className="bg-slate-900 text-white p-3 rounded-lg flex items-center justify-between border-l-4 border-[#c29d2f]">
          <div>
            <div className="text-[7pt] text-[#c29d2f] font-mono font-bold uppercase tracking-widest">
              PILLAR 07 EVALUATION
            </div>
            <h2 className="text-xs font-black text-white uppercase tracking-wide">
              Digital Maturity, Automation & AI Readiness Audit
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

        {/* Tech Sub-Dimension Grid */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2 pb-1 border-b border-slate-200">
            <Cloud className="w-3.5 h-3.5 text-[#0a192f]" />
            <h3 className="text-xs font-black uppercase text-[#0a192f] tracking-wider">
              Technology & Innovation Sub-Dimension Audit
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[8pt]">
            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Cloud Systems & Software Stack</div>
                <div className="text-[7pt] text-slate-500">ERP, accounting, storage & SaaS integration</div>
              </div>
              <span className="font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">60/100</span>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Workflow Automation Level</div>
                <div className="text-[7pt] text-slate-500">Elimination of manual data entry tasks</div>
              </div>
              <span className="font-mono font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">48/100</span>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">AI Tool Adoption & Readiness</div>
                <div className="text-[7pt] text-slate-500">Generative AI usage in sales, ops & marketing</div>
              </div>
              <span className="font-mono font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">50/100</span>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Data Security & Cybersecurity</div>
                <div className="text-[7pt] text-slate-500">Backups, access permissions & cloud safety</div>
              </div>
              <span className="font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">62/100</span>
            </div>
          </div>
        </div>

        {/* Tech Stack Matrix Card */}
        <div className="bg-[#0a192f] text-white rounded-lg p-3.5 border-l-4 border-[#c29d2f]">
          <div className="text-xs font-black uppercase text-white tracking-wider mb-2">
            Technology Stack & Automation Quadrant
          </div>

          <div className="grid grid-cols-3 gap-2 text-[7.5pt] text-center">
            <div className="bg-slate-800 p-2 rounded border border-slate-700">
              <div className="text-slate-400 font-bold uppercase">Legacy Accounting</div>
              <div className="text-slate-200 font-bold mt-1">Tally / Manual</div>
              <div className="text-[6.5pt] text-slate-400 mt-0.5">Isolated Database</div>
            </div>

            <div className="bg-slate-800 p-2 rounded border border-red-500/80 bg-red-950/20">
              <div className="text-red-400 font-bold uppercase">Customer Data (CRM)</div>
              <div className="text-slate-200 font-bold mt-1">Spreadsheets</div>
              <div className="text-[6.5pt] text-slate-400 mt-0.5">High Data Loss Risk</div>
            </div>

            <div className="bg-slate-800 p-2 rounded border border-slate-700">
              <div className="text-slate-400 font-bold uppercase">Communication</div>
              <div className="text-slate-200 font-bold mt-1">WhatsApp / Email</div>
              <div className="text-[6.5pt] text-slate-400 mt-0.5">Unstructured History</div>
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
                This observation reflects our audit of your digital infrastructure and automation stack. Transitioning manual data entry into automated cloud triggers cuts turnaround friction and prepares your operations for AI assistance.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 flex flex-col justify-between">
            <div className="text-[6.5pt] font-extrabold text-[#0a192f] uppercase tracking-wider border-b border-slate-200 pb-0.5 mb-1 flex items-center justify-between">
              <span>Business Impact™</span>
              <span className="text-[6pt] font-mono text-slate-400">Pillar 7</span>
            </div>
            <div className="grid grid-cols-2 gap-x-1.5 gap-y-0.5 text-[6.5pt]">
              <div>
                <span className="text-slate-400 font-medium block">Revenue Impact:</span>
                <span className="font-bold text-slate-800">Speed to Market</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Cost Impact:</span>
                <span className="font-bold text-emerald-700">-70% Admin Hours</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Risk Level:</span>
                <span className="font-bold text-red-700">{p.score < 50 ? 'Critical' : 'Moderate'}</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Timeline:</span>
                <span className="font-bold text-[#0a192f]">Tier 2 · 60 Days</span>
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
                Tech Strengths
              </h3>
            </div>
            <ul className="space-y-1.5 text-[8pt] text-slate-800">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Basic internet & cloud literacy across management workforce.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Openness to adopting AI tools for rapid productivity gains.</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50/70 border border-red-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2 pb-1 border-b border-red-200">
              <AlertTriangle className="w-3.5 h-3.5 text-red-700" />
              <h3 className="text-xs font-black uppercase text-red-900 tracking-wider">
                Tech Vulnerabilities
              </h3>
            </div>
            <ul className="space-y-1.5 text-[8pt] text-slate-800">
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>Manual data re-entry between sales, ops, and finance systems.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>Zero automated workflow triggers (e.g. WhatsApp/Email order alerts).</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tech Directives */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2 pb-1 border-b border-slate-200">
            <Target className="w-3.5 h-3.5 text-[#0a192f]" />
            <h3 className="text-xs font-black uppercase text-[#0a192f] tracking-wider">
              Technology Modernization & AI Directives
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[8pt]">
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase">01. Cloud Data Centralization</div>
              <div className="font-bold text-slate-900 mt-0.5">Google Workspace / O365</div>
              <div className="text-[7pt] text-slate-500 mt-0.5">Migrate local files to cloud drive with role-based folder access rules.</div>
            </div>
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase">02. Automation Triggers</div>
              <div className="font-bold text-slate-900 mt-0.5">Zapier / Make Integration</div>
              <div className="text-[7pt] text-slate-500 mt-0.5">Connect web leads directly to CRM and dispatch automated WhatsApp alerts to sales reps.</div>
            </div>
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase">03. AI Productivity Tools</div>
              <div className="font-bold text-slate-900 mt-0.5">AI Agents & Assistance</div>
              <div className="text-[7pt] text-slate-500 mt-0.5">Deploy AI writing & proposal generators to cut proposal drafting time by 70%.</div>
            </div>
          </div>
        </div>
      </div>

      <DossierFooter companyName={data.companyName} reportId={data.displayReportId} />
    </div>
  );
};
