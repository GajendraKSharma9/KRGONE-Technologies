import React, { useState } from 'react';
import { 
  Sparkles, Download, ShieldCheck, Target, 
  TrendingUp, Zap, PhoneCall, Lightbulb, Briefcase,
  XCircle, Check, AlertTriangle, Compass, UserCheck, Layers, Cpu, Building2, BarChart2, ShieldAlert,
  ArrowRight, Activity, ChevronDown, ChevronUp, ChevronsUpDown
} from 'lucide-react';

interface ExecutiveAdvisoryTabProps {
  report: any; // UnifiedReport
  formData: any; // Form profile metrics
  handlePrintPDF: () => void;
  setActiveTab: (tab: string) => void;
  isGeneratingPDF?: boolean;
  pdfStatusMessage?: string;
}

export const ExecutiveAdvisoryTab: React.FC<ExecutiveAdvisoryTabProps> = ({
  report,
  formData,
  handlePrintPDF,
  setActiveTab,
  isGeneratingPDF = false,
  pdfStatusMessage = '',
}) => {
  const compName = report?.profile?.company?.companyName || formData?.companyName || 'Your Enterprise';
  const industry = report?.profile?.business?.industry || formData?.industry || 'Commercial Vertical';
  const revenue = report?.profile?.size?.annualRevenueRange || formData?.revenue || 'Not Specified';
  
  const globalScore = report?.overallScore ?? 72;
  const isElite = globalScore >= 85;
  const isMid = globalScore >= 70 && globalScore < 85;

  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleRecommendation = (index: number) => {
    setOpenIndices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };
  
  const renderMacroDiagnosis = () => {
    if (globalScore < 70) {
      return (
        <div className="space-y-6">
          <div className="bg-rose-50/30 border border-rose-100 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldAlert className="w-32 h-32 text-rose-600" />
            </div>
            <div className="relative z-10 space-y-6">
              <div>
                <h4 className="text-lg font-black text-rose-900 uppercase tracking-tight mb-4">Structural Systemic Volatility</h4>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  An analytical review of <strong>{compName}</strong> operating within the <strong>{industry}</strong> vertical indicates that your organization has hit a structural scaling ceiling. While your market position allows you to cross revenue targets in the <strong>{revenue}</strong> bracket, your operational foundation relies almost exclusively on manual execution. The lack of standard automation frameworks means that scaling up will directly increase operational friction, leading to severe profit margin leakage and high staff burnout.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-black text-rose-900 uppercase tracking-tight mb-4">The Owner-Dependency Barrier</h4>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  Your assessment answers reveal a critical operational dependency on the founder layer. Because daily validation, strategic planning, and performance management require your constant personal oversight, your team is restricted to running routine tasks. This lack of decentralization caps your ultimate enterprise valuation, as a company dependent on its owner cannot be easily scaled, sold, or institutionalized.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (globalScore >= 85) {
      return (
        <div className="space-y-6">
           <div className="bg-emerald-50/30 border border-emerald-100 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldCheck className="w-32 h-32 text-emerald-600" />
            </div>
            <div className="relative z-10 space-y-6">
              <div>
                <h4 className="text-lg font-black text-emerald-900 uppercase tracking-tight mb-4">Enterprise Maturity Evaluation</h4>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  <strong>{compName}</strong> displays an elite operational framework, placing it in the top tier of maturity models for the <strong>{industry}</strong> sector. By decoupling core day-to-day functions from manual founder oversight, you have cleared the initial growth bottlenecks that stall most MSMEs. Your business systems show solid baseline efficiency and consistent delivery parameters.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-black text-emerald-900 uppercase tracking-tight mb-4">Strategic Capital Allocation Matrix</h4>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  The objective for your enterprise must shift from protective management to aggressive market dominance. With an established core framework, you are prime to utilize your internal stability to deploy high-yield automation models, acquire market share from lower-tier competitors, and execute structured expansions into new regional verticals.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
       return (
        <div className="space-y-6">
          <div className="bg-indigo-50/30 border border-indigo-100 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <TrendingUp className="w-32 h-32 text-indigo-600" />
            </div>
            <div className="relative z-10 space-y-6">
              <div>
                <h4 className="text-lg font-black text-indigo-900 uppercase tracking-tight mb-4">Operational Transition Analysis</h4>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  <strong>{compName}</strong> is currently navigating a transitional phase within the <strong>{industry}</strong> sector. While your systems have evolved past early-stage ad-hoc execution, they still exhibit localized vulnerabilities. Your business generates substantial value at the <strong>{revenue}</strong> level, but scaling further without formalizing processes will strain your core resources, leading to inconsistent client experiences.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-black text-indigo-900 uppercase tracking-tight mb-4">The Decentralization Mandate</h4>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  To sustain and accelerate growth, you must transition from centralized founder control to a decentralized, metrics-driven management model. This requires establishing clear departmental KPIs, standardizing key workflow gates, and delegating tactical decisions to senior staff, enabling you to focus on high-leverage strategic partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
       );
    }
  };

  const renderRecommendations = () => {
    const isLow = globalScore < 70;
    const isHigh = globalScore >= 85;

    const recommendations = [
      {
        title: "Develop Core Standard Operating Procedures (SOPs)",
        friction: isLow 
          ? "Your business functions rely on tribal employee memory rather than clear documented systems, leading to high processing errors, unpredictable client delivery quality, and extended onboarding timelines for new hires."
          : isHigh
          ? "While basic procedures are written, your systems lack seamless cross-departmental alignment, causing minor delays when passing work between departments and requiring too much manual tracking at high volumes."
          : "Your team has documented some key processes, but they are scattered across different platforms and rarely updated, leading to inconsistent compliance and varying delivery standards.",
        intervention: isLow
          ? "Document a unified digital blueprint for your absolute highest-leverage processes across sales, operations, and finance. Map out visual step-by-step swimlane diagrams and set explicit processing speed rules for every department."
          : isHigh
          ? "Upgrade your existing SOP library to a fully integrated business workflow database. Use continuous optimization frameworks to identify and eliminate minor bottlenecks before they impact delivery speed."
          : "Consolidate and centralize your standard procedures into a single, easily accessible team portal. Implement regular training reviews and clear compliance tracking to ensure systems are followed.",
        deployment: isLow
          ? "We deploy senior systems consultants directly into your firm to audit your workflows, write your custom operational playbooks, and build an interactive digital wiki database. This secures execution quality and helps insulate your profit margins."
          : isHigh
          ? "We audit your workflow metrics, introduce advanced workflow tracing tools, and set up real-time performance dashboards to keep your operations running at maximum efficiency."
          : "We build your unified team playbook center, run alignment workshops with department heads, and establish clear, measurable compliance standards to stabilize delivery quality."
      },
      {
        title: "Deploy Automated Lead Nurturing Frameworks",
        friction: isLow
          ? "High volumes of valuable pipeline prospects are leaking daily due to manual follow-up dependencies. Sales teams focus strictly on immediate conversions, leaving warm opportunities entirely neglected."
          : isHigh
          ? "Your conversion sequences are active but lack dynamic personalization, failing to maximize customer referral networks."
          : "Leads are followed up, but the timing is highly inconsistent and depends on individual staff schedules rather than an automated, predictable system.",
        intervention: isLow
          ? "Architect an automated, multi-channel customer relationship management (CRM) infrastructure. Trigger behavior-based email and SMS sequences, and establish programmatic lead scoring to maximize conversions."
          : isHigh
          ? "Implement advanced predictive behavior tracking and personal customer messaging to nurture premium tier accounts and automate upsells."
          : "Establish basic, reliable automated email and SMS follow-ups within your current database to guarantee prompt contact with every lead.",
        deployment: isLow
          ? "Our revenue operations division completely restructures your CRM platform, designs custom conversion sequences, and implements a predictive pipeline monitoring cockpit to capture lost revenue."
          : isHigh
          ? "We integrate advanced marketing analytics platforms and configure specialized customer retention programs to grow your lifetime value metrics."
          : "We optimize your active lead pipelines, configure standard auto-responders, and train your team on managing lead status within the system."
      },
      {
        title: "Decentralize Executive Decision Making",
        friction: isLow
          ? "The executive founder layer acts as a structural bottleneck for both high-level strategies and daily administrative approvals, paralyzing middle-management speed and capping company capacity."
          : isHigh
          ? "Middle management executes efficiently, but lacks strategic alignment with your long-term expansion goals, leading to misaligned project priorities."
          : "Some tasks are delegated, but the owner must frequently step back in to resolve minor operational conflicts due to vague authority boundaries.",
        intervention: isLow
          ? "Formulate an outcome-oriented Accountability Chart. Define explicit, measurable Key Performance Indicators (KPIs) for each department lead and grant them structured budget autonomy."
          : isHigh
          ? "Align leadership compensation directly to company valuation targets and implement a formal, quarterly strategic planning cycle."
          : "Clarify and define exact authority levels and spending limits for each department head to prevent unnecessary escalation.",
        deployment: isLow
          ? "We run structured delegation workshops, rewrite managerial role definitions, and establish a high-performance leadership cadence to free up the founder for high-leverage strategic expansion."
          : isHigh
          ? "We structure performance-based partner bonus plans and run quarterly strategic planning sessions with your leadership team."
          : "We write exact decision-making authority guidelines and establish weekly department report structures to maintain visibility without micromanagement."
      },
      {
        title: "Institute Rigid Financial KPI Tracking",
        friction: isLow
          ? "Decisions are frequently guided by gross revenue numbers rather than net unit profitability. This lack of granular visibility obscures high-volume cost leaks, leaving your monthly cash flow vulnerable."
          : isHigh
          ? "Although unit profitability is visible, your capital allocation models are conservative, missing high-yield investment opportunities."
          : "Monthly financial statements are generated but they are reviewed too late to make timely, pricing shifts or operations.",
        intervention: isLow
          ? "Deploy a real-time financial reporting cockpit to monitor unit economics including Gross Margin, Customer Acquisition Cost (CAC), and Lifetime Value (LTV) through a strict weekly executive audit cycle."
          : isHigh
          ? "Design forward-looking cash flow forecast tools to model various expansion scenarios, pricing shifts, and capital investments."
          : "Move from monthly reports to a live, bi-weekly dashboard tracking your primary revenue and margin indicators.",
        deployment: isLow
          ? "We embed professional CFO capabilities to restructure your accounting frameworks, design live Business Intelligence dashboard grids, and optimize your working capital allocations."
          : isHigh
          ? "We help you analyze strategic capital pathways, design tax-efficient investment strategies, and structure external capital options for rapid expansion."
          : "We set up automated financial imports, build custom margin trackers, and establish a bi-weekly financial review routine with your management."
      },
      {
        title: "Engineer a Scalable Talent Acquisition Machine",
        friction: isLow
          ? "Hiring remains reactive, triggered by sudden operational crises rather than strategic forecasting. This ad-hoc approach leads to poor cultural fits and high employee turnover."
          : isHigh
          ? "Your talent acquisition works, but you struggle to attract highly specialized executive talent needed to lead new divisions or regional expansions."
          : "Basic job descriptions exist, but candidate screening is inconsistent, resulting in hires who take too long to reach full productivity.",
        intervention: isLow
          ? "Treat recruitment with the same rigor as customer acquisition. Build a continuous pipeline of active candidates, enforce scorecard-based interviews, and implement a structured 30-60-90 day onboarding matrix."
          : isHigh
          ? "Build a sophisticated executive search and employer branding strategy to attract high-caliber industry leaders."
          : "Design structured interview scorecards and a standardized 2-week training path for every role.",
        deployment: isLow
          ? "Our HR optimization consultants design your employer branding assets, integrate advanced Applicant Tracking Systems, and write standard onboarding playbooks to accelerate new-hire productivity."
          : isHigh
          ? "We design competitive executive search plans, establish leadership recruitment channels, and build your long-term talent pipeline."
          : "We optimize your hiring process, design role-specific scorecards, and outline standardized training paths to speed up onboarding."
      }
    ];

    return (
      <div className="space-y-4">
        {recommendations.map((rec, index) => {
          const isExpanded = openIndices.includes(index);
          return (
            <div 
              key={index} 
              className={`bg-white border rounded-2xl transition-all duration-300 overflow-hidden ${
                isExpanded ? 'border-indigo-300 shadow-md ring-1 ring-indigo-500/10' : 'border-slate-200 shadow-sm hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleRecommendation(index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className={`w-10 h-10 rounded-full font-mono font-black text-sm flex items-center justify-center shrink-0 shadow-sm transition-colors ${
                    isExpanded ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-amber-400 group-hover:bg-slate-800'
                  }`}>
                    0{index + 1}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base font-black text-[#0F172A] tracking-tight uppercase group-hover:text-indigo-900 transition-colors truncate">
                      {rec.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                      Strategic Growth Priority #{index + 1}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider hidden sm:inline-block transition-colors ${
                    isExpanded 
                      ? 'bg-indigo-100 text-indigo-700' 
                      : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700'
                  }`}>
                    {isExpanded ? 'Hide Point Details' : 'Expand Point Details'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    isExpanded ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                  }`}>
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </button>

              {isExpanded && (
                <div className="p-6 pt-2 border-t border-slate-100 animate-fade-in bg-slate-50/30">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    <div className="bg-rose-50/60 p-5 rounded-xl border border-rose-100/80 shadow-xs">
                      <h5 className="text-[10px] font-black text-rose-800 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <ShieldAlert className="w-3.5 h-3.5 text-rose-600" /> The Friction Point
                      </h5>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {rec.friction}
                      </p>
                    </div>
                    <div className="bg-indigo-50/60 p-5 rounded-xl border border-indigo-100/80 shadow-xs">
                      <h5 className="text-[10px] font-black text-indigo-800 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-indigo-600" /> The Strategic Intervention
                      </h5>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {rec.intervention}
                      </p>
                    </div>
                    <div className="bg-emerald-50/60 p-5 rounded-xl border border-emerald-100/80 shadow-xs">
                      <h5 className="text-[10px] font-black text-emerald-800 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <UserCheck className="w-3.5 h-3.5 text-emerald-600" /> KRG ONE Partner Deployment
                      </h5>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {rec.deployment}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="space-y-10 animate-fade-in pb-12">
      {/* 1. HEADER SECTION */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Cpu className="w-32 h-32 text-indigo-600" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6" />
             </div>
             <div>
                <h2 className="text-2xl font-black text-slate-900 leading-tight">AI Growth Advisory™</h2>
                <p className="text-xs font-black text-indigo-600 uppercase tracking-widest">Executive Diagnostic Core</p>
             </div>
          </div>
          <p className="text-sm text-slate-500 max-w-2xl leading-relaxed font-medium">
            This dossier contains a multi-layered data analysis evaluating your explicit profile metrics to render a deep-dive consulting diagnosis.
          </p>
        </div>
      </div>

      {/* Section A: The Executive Observation & Macro Diagnosis */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
            <Activity className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">01. Executive Observation & Macro Diagnosis</h3>
        </div>
        {renderMacroDiagnosis()}
      </div>

      {/* Section B: Top 5 Strategic Technical Recommendations */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">02. Top 5 Strategic Technical Recommendations</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Click any point to toggle detailed analysis</p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setOpenIndices([0, 1, 2, 3, 4])}
              className="text-[10px] font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/60 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Expand All Points
            </button>
            <button
              type="button"
              onClick={() => setOpenIndices([])}
              className="text-[10px] font-bold text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>
        {renderRecommendations()}
      </div>


      {/* ---------------------------------------------------- */}
      {/* 4. BOTTOM ACTION FOOTER BANNER                       */}
      {/* ---------------------------------------------------- */}
      <div className="bg-[#0f172a] text-white p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform duration-500">
          <Cpu className="w-48 h-48" />
        </div>
        <div className="space-y-2 text-center sm:text-left relative z-10">
          <span className="inline-block bg-indigo-500/20 text-indigo-300 text-[10px] font-black px-2.5 py-0.5 rounded border border-indigo-500/30 uppercase tracking-widest mb-1">
            AI Implementation Partnership
          </span>
          <h4 className="text-base sm:text-lg font-black uppercase tracking-wide text-white">Scale Your Enterprise With AI</h4>
          <p className="text-sm text-slate-300 font-medium max-w-xl leading-relaxed">
            Download your full AI Strategy Dossier or speak with an AI Deployment Partner to discuss how we can build these systems for you.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0 relative z-10">
          <button
            onClick={handlePrintPDF}
            disabled={isGeneratingPDF}
            className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-indigo-400 hover:from-indigo-400 hover:to-indigo-300 text-white font-black text-[12px] uppercase tracking-wider py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50"
          >
            <Download className="w-4 h-4 text-white" />
            <span>{isGeneratingPDF ? 'Preparing PDF...' : 'Download AI Roadmap'}</span>
          </button>
          <button
            onClick={() => setActiveTab('booking')}
            className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-[12px] uppercase tracking-wider py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            <PhoneCall className="w-4 h-4 text-indigo-400" />
            <span>Book AI Strategy Call</span>
          </button>
        </div>
      </div>
    </div>
  );
};
