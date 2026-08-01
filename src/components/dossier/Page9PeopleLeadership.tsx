import React from 'react';
import { ProcessedDossierData } from './dossierTypes';
import { DossierHeader } from './DossierHeader';
import { DossierFooter } from './DossierFooter';
import { Users, UserCheck, CheckCircle2, AlertTriangle, Crown, Target, HeartHandshake, Sparkles } from 'lucide-react';

export const Page9PeopleLeadership: React.FC<{ data: ProcessedDossierData }> = ({ data }) => {
  const p = data.pillars[5] || { name: 'People & Leadership', code: 'P6', score: 65, weight: '10%', status: 'Developing', impact: 'Delegation Deficit', color: 'text-amber-600 bg-amber-50 border-amber-200' };

  return (
    <div 
      className="print-page bg-white w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] text-[#0a192f] p-[12mm] flex flex-col justify-between box-border page-break-after:always relative overflow-hidden print:m-0 font-sans select-none"
      style={{ backgroundColor: '#ffffff', width: '210mm', height: '297mm', padding: '12mm' }}
    >
      <DossierHeader
        sectionTitle="Page 9 · Pillar 6: People & Organization Health"
        subtitle="Workforce Capability, Accountability Frameworks, Delegation & Company Culture"
        pageNumber={9}
        icon={<Users className="w-4 h-4" />}
      />

      <div className="flex-1 flex flex-col gap-3 my-1 overflow-hidden">
        {/* Top Score Banner */}
        <div className="bg-slate-900 text-white p-3 rounded-lg flex items-center justify-between border-l-4 border-[#c29d2f]">
          <div>
            <div className="text-[7pt] text-[#c29d2f] font-mono font-bold uppercase tracking-widest">
              PILLAR 06 EVALUATION
            </div>
            <h2 className="text-xs font-black text-white uppercase tracking-wide">
              People Capability, Delegation & Organizational Structure
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
            <UserCheck className="w-3.5 h-3.5 text-[#0a192f]" />
            <h3 className="text-xs font-black uppercase text-[#0a192f] tracking-wider">
              People & Culture Sub-Dimension Audit
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[8pt]">
            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Workforce Technical Capability</div>
                <div className="text-[7pt] text-slate-500">Skill sets & operational execution competence</div>
              </div>
              <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">70/100</span>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">KPI Accountability & Role Clarity</div>
                <div className="text-[7pt] text-slate-500">Written JDs & individual scorecards</div>
              </div>
              <span className="font-mono font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">55/100</span>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Middle Management Delegation</div>
                <div className="text-[7pt] text-slate-500">Autonomy level of department heads</div>
              </div>
              <span className="font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">62/100</span>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Culture & Talent Retention</div>
                <div className="text-[7pt] text-slate-500">Employee turnover & morale index</div>
              </div>
              <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">72/100</span>
            </div>
          </div>
        </div>

        {/* Organizational Health Matrix Box */}
        <div className="bg-[#0a192f] text-white rounded-lg p-3.5 border-l-4 border-[#c29d2f]">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-black uppercase text-white tracking-wider">
              Organizational Maturity & Delegation Matrix
            </div>
            <span className="text-[7pt] font-mono text-[#c29d2f] font-bold">TEAM SIZE: {data.workforceSize}</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-[7.5pt] text-center">
            <div className="bg-slate-800 p-2 rounded border border-slate-700">
              <div className="text-slate-400 font-bold uppercase">Founder Layer</div>
              <div className="text-slate-200 font-bold mt-1">High Overload</div>
              <div className="text-[6.5pt] text-slate-400 mt-0.5">80% Time on Daily Ops</div>
            </div>

            <div className="bg-slate-800 p-2 rounded border border-amber-500/80 bg-amber-950/20">
              <div className="text-amber-400 font-bold uppercase">Middle Management</div>
              <div className="text-slate-200 font-bold mt-1">Under-Empowered</div>
              <div className="text-[6.5pt] text-slate-400 mt-0.5">Needs Clear KPIs</div>
            </div>

            <div className="bg-slate-800 p-2 rounded border border-slate-700">
              <div className="text-slate-400 font-bold uppercase">Frontline Staff</div>
              <div className="text-slate-200 font-bold mt-1">Loyal Baseline</div>
              <div className="text-[6.5pt] text-slate-400 mt-0.5">Low Turnover Rate</div>
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
                This observation reflects our analysis of your organization's talent and accountability structure. Establishing weekly role scorecards and empowering department heads enables real delegation and unlocks founder capacity.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 flex flex-col justify-between">
            <div className="text-[6.5pt] font-extrabold text-[#0a192f] uppercase tracking-wider border-b border-slate-200 pb-0.5 mb-1 flex items-center justify-between">
              <span>Business Impact™</span>
              <span className="text-[6pt] font-mono text-slate-400">Pillar 6</span>
            </div>
            <div className="grid grid-cols-2 gap-x-1.5 gap-y-0.5 text-[6.5pt]">
              <div>
                <span className="text-slate-400 font-medium block">Revenue Impact:</span>
                <span className="font-bold text-slate-800">Higher Output</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Cost Impact:</span>
                <span className="font-bold text-slate-800">Founder Time Back</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Risk Level:</span>
                <span className="font-bold text-amber-700">{p.score < 50 ? 'Critical' : 'Moderate'}</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Timeline:</span>
                <span className="font-bold text-[#0a192f]">Tier 2 · 45 Days</span>
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
                People Strengths
              </h3>
            </div>
            <ul className="space-y-1.5 text-[8pt] text-slate-800">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Loyal core team with strong loyalty to founder vision.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Good interpersonal culture and low internal conflict.</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50/70 border border-red-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2 pb-1 border-b border-red-200">
              <AlertTriangle className="w-3.5 h-3.5 text-red-700" />
              <h3 className="text-xs font-black uppercase text-red-900 tracking-wider">
                People Vulnerabilities
              </h3>
            </div>
            <ul className="space-y-1.5 text-[8pt] text-slate-800">
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>Absence of weekly performance KPI scorecards for key positions.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>Lack of structured leadership training for newly promoted managers.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* People Directives */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2 pb-1 border-b border-slate-200">
            <Target className="w-3.5 h-3.5 text-[#0a192f]" />
            <h3 className="text-xs font-black uppercase text-[#0a192f] tracking-wider">
              People & Leadership Development Directives
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[8pt]">
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase">01. KPI Scorecards</div>
              <div className="font-bold text-slate-900 mt-0.5">Role Scorecards</div>
              <div className="text-[7pt] text-slate-500 mt-0.5">Define top 3 measurable weekly KPIs for every department head.</div>
            </div>
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase">02. Weekly One-on-Ones</div>
              <div className="font-bold text-slate-900 mt-0.5">Manager Syncs</div>
              <div className="text-[7pt] text-slate-500 mt-0.5">Institute mandatory 15-minute weekly performance check-ins.</div>
            </div>
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase">03. Incentive Alignment</div>
              <div className="font-bold text-slate-900 mt-0.5">Performance Bonus</div>
              <div className="text-[7pt] text-slate-500 mt-0.5">Link quarterly bonuses directly to business unit gross margin targets.</div>
            </div>
          </div>
        </div>
      </div>

      <DossierFooter companyName={data.companyName} reportId={data.displayReportId} />
    </div>
  );
};
