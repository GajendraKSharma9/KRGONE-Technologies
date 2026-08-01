import React from 'react';
import { 
  Calendar, CheckCircle2, Zap, Target, 
  TrendingUp, Clock, ListChecks, MessageSquare
} from 'lucide-react';

interface PlanRoadmapTabProps {
  report: {
    pillarScores: Record<string, number>;
    overallScore: number;
  };
  formData: any;
  handlePrintPDF: () => void;
  setActiveTab: (tab: string) => void;
  isGeneratingPDF?: boolean;
  pdfStatusMessage?: string;
}

export const PlanRoadmapTab: React.FC<PlanRoadmapTabProps> = ({
  report,
  formData,
  handlePrintPDF,
  setActiveTab,
  isGeneratingPDF = false,
  pdfStatusMessage = ''
}) => {
  // Logic to find lowest pillars
  const pillarNames = Object.keys(report.pillarScores || {});
  const sortedPillars = pillarNames.length > 0 
    ? [...pillarNames].sort((a, b) => report.pillarScores[a] - report.pillarScores[b])
    : ['General'];
  const lowestPillar = sortedPillars[0];

  const getDynamicContent = (pillar: string) => {
    switch (pillar) {
      case 'Sales & Revenue':
        return {
          p1: ["Audit current sales conversion rates.", "Define top 3 revenue priorities.", "Set immediate weekly sales KPIs."],
          p1Outcome: "Identified revenue leaks and established sales accountability.",
          p2: ["Standardize deal progression in CRM.", "Improve lead qualification criteria.", "Conduct weekly sales performance reviews."],
          p2Outcome: "Increased sales velocity and predictable pipeline management.",
          p3: ["Scale high-performing lead channels.", "Optimize pricing for maximum margin.", "Deploy automated follow-up sequences."],
          p3Outcome: "A sustainable, scalable revenue engine with predictable growth."
        };
      case 'Operations & Process':
        return {
          p1: ["Map high-leverage delivery workflows.", "Identify 3 major operational bottlenecks.", "Set output and speed targets."],
          p1Outcome: "Clear visibility into process friction and baseline throughput.",
          p2: ["Draft core Standard Operating Procedures (SOPs).", "Implement cloud-based task tracking.", "Automate departmental hand-offs."],
          p2Outcome: "Eliminated manual rework and reduced service delivery variance.",
          p3: ["Integrate cross-departmental automation.", "Optimize resource allocation.", "Deploy quality assurance benchmarks."],
          p3Outcome: "Frictionless operations capable of 2x-3x current volume."
        };
      case 'Technology & Business Innovation':
        return {
          p1: ["Audit current tech-stack efficiency.", "Identify manual data entry points.", "Prioritize digital tool upgrades."],
          p1Outcome: "Comprehensive roadmap for digital transformation and AI readiness.",
          p2: ["Deploy core automation for repetitive tasks.", "Migrate critical data to unified systems.", "Train team on new digital tools."],
          p2Outcome: "Reduced administrative burden through technological leverage.",
          p3: ["Scale AI and digital adoption.", "Optimize data-driven decision loops.", "Implement real-time BI dashboards."],
          p3Outcome: "A digitally-advanced enterprise with automated intelligence."
        };
      default:
        return {
          p1: ["Review Business Health assessment findings.", "Define top 3 business priorities.", "Set monthly revenue and KPI targets."],
          p1Outcome: "Clear priorities and alignment across the leadership team.",
          p2: ["Improve sales pipeline management.", "Standardize key business processes (SOPs).", "Conduct weekly KPI reviews."],
          p2Outcome: "Improved efficiency, sales discipline, and operational consistency.",
          p3: ["Optimize high-performing initiatives.", "Implement business dashboards.", "Expand AI and digital adoption."],
          p3Outcome: "A scalable business with measurable and sustainable growth systems."
        };
    }
  };

  const roadmap = {
    p1: {
      title: "Emergency Risk Mitigation & Stabilization Sprints",
      directives: `Isolate and plug immediate cash flow leakages and severe operational friction points. Deploy basic end-of-day daily tracking templates for all operational staff members. Set up absolute tracking metrics for the primary user challenge selected: ${formData.challenges ? formData.challenges.join(', ') : 'Core Operational Leakage'}. Stop daily administrative tasks from reaching the executive founder layer by establishing a strict delegation rule.`,
      focus: ["Immediate Cash Flow Audit", "End-of-Day Staff Tracking", "Executive Guardrail Setup", "Primary Constraint Mitigation"],
      outcome: "Operational baseline stabilized with zero-leakage financial controls."
    },
    p2: {
      title: "Process Standardization & Workflow Architecture Sprints",
      directives: "Begin the formal drafting and deployment of step-by-step Standard Operating Procedures (SOPs) across your lowest-performing operational pillars. Build clean cloud-based tracking systems to monitor team output, optimize customer acquisition channels, and map customer retention journeys to maximize your lifetime client value metrics.",
      focus: ["Formal SOP Drafting", "Cloud Output Monitoring", "CAC/LTV Optimization", "Customer Retention Mapping"],
      outcome: "Transition from tribal memory to documented corporate systems."
    },
    p3: {
      title: "System Optimization & Capital Scaling Sprints",
      directives: "Integrate scalable automation tools and modern business software models. Transition your management team to a formal weekly performance review cycle based on concrete KPIs rather than personal feelings. Review the unit profit margins across all core product lines to maximize revenue efficiency.",
      focus: ["Enterprise Automation Integration", "KPI-Based Performance Reviews", "Unit Margin Optimization", "Strategic Market Expansion"],
      outcome: "Scalable growth engine decoupled from manual founder oversight."
    }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* HEADER SECTION */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Calendar className="w-32 h-32 text-indigo-600" />
        </div>
        <div className="relative z-10">
          <h2 className="text-xl font-black text-slate-900 mb-1">90-Day Business Growth Plan™</h2>
          <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest">Transform Strategy into Measurable Business Results</p>
          <p className="text-sm text-slate-500 mt-4 max-w-3xl leading-relaxed font-medium">
            This action plan is generated from your <strong>Business Growth Assessment™</strong> and prioritizes the activities that will deliver the greatest business impact over the next 90 days.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* PHASE 1 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col group hover:border-rose-300 transition-all shadow-sm">
          <div className="bg-rose-50 p-5 border-b border-rose-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[13px] font-black text-rose-900 uppercase tracking-tight">Days 1–30</h3>
                <p className="text-[11px] font-bold text-rose-600 uppercase">Stabilize & Prioritize</p>
              </div>
            </div>
          </div>
          <div className="p-6 flex-grow space-y-6">
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Directives</h4>
              <p className="text-xs font-bold text-slate-900 leading-relaxed italic border-l-2 border-rose-200 pl-3">"{roadmap.p1.directives}"</p>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <ListChecks className="w-3 h-3" /> Key Focus Areas
              </h4>
              <ul className="space-y-2.5">
                {roadmap.p1.focus.map((item, i) => (
                  <li key={i} className="flex gap-2 text-xs text-slate-600 font-bold leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-5 border-t border-slate-50 mt-auto">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Expected Outcome</h4>
              <p className="text-xs text-rose-900 font-black leading-relaxed">{roadmap.p1.outcome}</p>
            </div>
          </div>
        </div>

        {/* PHASE 2 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col group hover:border-amber-300 transition-all shadow-sm">
          <div className="bg-amber-50 p-5 border-b border-amber-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[13px] font-black text-amber-900 uppercase tracking-tight">Days 31–60</h3>
                <p className="text-[11px] font-bold text-amber-600 uppercase">Improve & Optimize</p>
              </div>
            </div>
          </div>
          <div className="p-6 flex-grow space-y-6">
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Directives</h4>
              <p className="text-xs font-bold text-slate-900 leading-relaxed italic border-l-2 border-amber-200 pl-3">"{roadmap.p2.directives}"</p>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <ListChecks className="w-3 h-3" /> Key Focus Areas
              </h4>
              <ul className="space-y-2.5">
                {roadmap.p2.focus.map((item, i) => (
                  <li key={i} className="flex gap-2 text-xs text-slate-600 font-bold leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-5 border-t border-slate-50 mt-auto">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Expected Outcome</h4>
              <p className="text-xs text-amber-900 font-black leading-relaxed">{roadmap.p2.outcome}</p>
            </div>
          </div>
        </div>

        {/* PHASE 3 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col group hover:border-emerald-300 transition-all shadow-sm">
          <div className="bg-emerald-50 p-5 border-b border-emerald-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[13px] font-black text-emerald-900 uppercase tracking-tight">Days 61–90</h3>
                <p className="text-[11px] font-bold text-emerald-600 uppercase">Scale & Sustain</p>
              </div>
            </div>
          </div>
          <div className="p-6 flex-grow space-y-6">
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Directives</h4>
              <p className="text-xs font-bold text-slate-900 leading-relaxed italic border-l-2 border-emerald-200 pl-3">"{roadmap.p3.directives}"</p>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <ListChecks className="w-3 h-3" /> Key Focus Areas
              </h4>
              <ul className="space-y-2.5">
                {roadmap.p3.focus.map((item, i) => (
                  <li key={i} className="flex gap-2 text-xs text-slate-600 font-bold leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-5 border-t border-slate-50 mt-auto">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Expected Outcome</h4>
              <p className="text-xs text-emerald-900 font-black leading-relaxed">{roadmap.p3.outcome}</p>
            </div>
          </div>
        </div>
      </div>


      {/* SUCCESS INDICATORS */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="p-6 border-b border-slate-800 bg-slate-800/50">
          <h3 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" /> Success Indicators
          </h3>
          <p className="text-xs text-slate-400 mt-1 font-medium">By completing this roadmap, your business should be positioned to achieve:</p>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Improved Revenue Growth",
              "Better Operational Efficiency",
              "Stronger Leadership Alignment",
              "Improved Customer Experience",
              "Sustainable Business Growth"
            ].map((indicator, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-sm font-bold text-slate-100">{indicator}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONSULTATION CTA */}
      <div className="bg-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
          <TrendingUp className="w-32 h-32" />
        </div>
        <div className="relative z-10">
          <h3 className="text-lg font-black uppercase tracking-tight mb-2">Business Growth Consultation™</h3>
          <p className="text-sm font-medium text-indigo-100 leading-relaxed mb-6 max-w-xl">
            Need expert support implementing this roadmap? Book a Business Growth Consultation™ to review your progress and receive personalized guidance from our senior partners.
          </p>
          <button 
            onClick={() => setActiveTab('booking')}
            className="inline-flex items-center gap-2 bg-white text-indigo-700 px-5 py-2.5 rounded-xl font-black text-[12px] uppercase tracking-wider hover:bg-indigo-50 transition-all shadow-lg active:scale-95"
          >
            <MessageSquare className="w-4 h-4" /> Book Consultation Now
          </button>
        </div>
      </div>
    </div>
  );
};
