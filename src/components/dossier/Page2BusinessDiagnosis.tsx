import React from 'react';
import { ProcessedDossierData } from './dossierTypes';
import { DossierHeader } from './DossierHeader';
import { DossierFooter } from './DossierFooter';
import { Gauge, CheckCircle2, AlertOctagon, Zap, ShieldAlert, Award, TrendingUp } from 'lucide-react';

export const Page2BusinessDiagnosis: React.FC<{ data: ProcessedDossierData }> = ({ data }) => {
  const isLowScore = data.displayScore < 70;

  return (
    <div 
      className="print-page bg-white w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] text-[#0a192f] p-[12mm] flex flex-col justify-between box-border page-break-after:always relative overflow-hidden print:m-0 font-sans select-none"
      style={{ backgroundColor: '#ffffff', width: '210mm', height: '297mm', padding: '12mm' }}
    >
      <DossierHeader
        sectionTitle="Page 2 · Business Diagnosis Summary"
        subtitle="Executive Health Score, Systemic Risk Profile & Core Scaling Bottlenecks"
        pageNumber={2}
        icon={<Gauge className="w-4 h-4" />}
      />

      <div className="flex-1 flex flex-col gap-3 my-1 overflow-hidden">
        {/* Top Hero Score Card & Maturity Badge */}
        <div className="bg-gradient-to-r from-[#0a192f] via-[#0f2847] to-[#1e3a5f] text-white rounded-lg p-3 border-l-4 border-[#c29d2f] shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            {/* Circular Gauge */}
            <div className="relative w-16 h-16 rounded-full bg-[#0a192f] border-2 border-[#c29d2f] flex flex-col items-center justify-center shrink-0 shadow-inner">
              <span className="text-[5.5pt] font-extrabold text-[#c29d2f] uppercase tracking-widest">INDEX</span>
              <span className="text-xl font-black text-white font-mono leading-none">{data.displayScore}</span>
              <span className="text-[5.5pt] font-semibold text-slate-400">OUT OF 100</span>
            </div>

            <div>
              <div className="text-[6.5pt] font-mono text-[#c29d2f] font-bold uppercase tracking-widest mb-0.5">
                MATURITY DIAGNOSIS CLASSIFICATION
              </div>
              <h2 className="text-xs font-black text-white uppercase tracking-wide">
                {data.maturityStage}
              </h2>
              <p className="text-[7.5pt] text-slate-300 font-medium mt-0.5">
                Classification: <span className="text-[#c29d2f] font-bold">{data.maturityClass}</span> • Operating in {data.industry} Sector
              </p>
            </div>
          </div>

          <div className="text-right border-l border-slate-700/80 pl-3">
            <div className="text-[6.5pt] font-bold text-slate-400 uppercase">System Status</div>
            <div className={`text-[7.5pt] font-black uppercase tracking-wider px-2 py-0.5 rounded mt-0.5 border ${
              isLowScore ? 'bg-red-500/20 text-red-300 border-red-500/40' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
            }`}>
              {isLowScore ? 'Turnaround Required' : 'Scalable Architecture'}
            </div>
          </div>
        </div>

        {/* CEO EXECUTIVE SNAPSHOT: "SHOULD I WORRY?" */}
        <div className="bg-slate-900 text-white rounded-lg p-2.5 border-2 border-[#c29d2f] shadow-sm">
          <div className="flex items-center justify-between border-b border-white/15 pb-1 mb-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded bg-[#c29d2f] text-[#0a192f] font-black text-[6.5pt] flex items-center justify-center font-mono shrink-0">
                CEO
              </div>
              <span className="text-[7pt] font-black text-[#c29d2f] uppercase tracking-wider">
                CEO EXECUTIVE SNAPSHOT — AT A GLANCE DIAGNOSIS
              </span>
            </div>
            <span className="text-[6.5pt] font-bold text-amber-300 bg-amber-500/20 border border-amber-500/40 px-2 py-0.5 rounded uppercase font-mono">
              DIRECTOR LEVEL SUMMARY
            </span>
          </div>

          <div className="grid grid-cols-5 gap-1.5 text-center text-[7pt]">
            <div className="bg-white/5 border border-white/10 rounded p-1.5">
              <div className="text-[5.5pt] font-extrabold text-slate-400 uppercase tracking-tight">HEALTH SCORE</div>
              <div className="text-sm font-black text-[#c29d2f] font-mono mt-0.5">{data.displayScore}/100</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded p-1.5">
              <div className="text-[5.5pt] font-extrabold text-slate-400 uppercase tracking-tight">CURRENT STAGE</div>
              <div className="text-[7.5pt] font-bold text-white mt-0.5 truncate">{data.maturityClass}</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded p-1.5">
              <div className="text-[5.5pt] font-extrabold text-slate-400 uppercase tracking-tight">BIGGEST BUSINESS RISK</div>
              <div className="text-[7.5pt] font-bold text-red-300 mt-0.5 truncate">
                {isLowScore ? 'Founder Dependency' : 'Market Share Friction'}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded p-1.5">
              <div className="text-[5.5pt] font-extrabold text-slate-400 uppercase tracking-tight">ESTIMATED GROWTH LOSS</div>
              <div className="text-[7.5pt] font-bold text-amber-300 mt-0.5">
                {isLowScore ? 'High Margin Leakage' : 'Moderate Volatility'}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded p-1.5">
              <div className="text-[5.5pt] font-extrabold text-slate-400 uppercase tracking-tight">RECOMMENDED PRIORITY</div>
              <div className="text-[7.5pt] font-bold text-emerald-300 mt-0.5 truncate">
                {data.pillars.slice().sort((a,b)=>a.score-b.score)[0]?.name || 'Operations & Process'}
              </div>
            </div>
          </div>
        </div>

        {/* Executive Diagnosis (Multi-Paragraph Analysis) */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2 pb-1 border-b border-slate-200">
            <Zap className="w-3.5 h-3.5 text-[#0a192f]" />
            <h2 className="text-xs font-black uppercase text-[#0a192f] tracking-wider">
              2. Executive Macro Diagnosis & Architectural Assessment
            </h2>
          </div>

          {isLowScore ? (
            <div className="space-y-2 text-[8.5pt] text-slate-700 leading-relaxed">
              <p>
                <strong className="text-[#0a192f]">Structural Systemic Volatility:</strong> An analytical review of <strong className="text-[#0a192f]">{data.companyName}</strong> operating within the <strong className="text-[#0a192f]">{data.industry}</strong> vertical indicates that your organization has hit a structural scaling ceiling. While your market position allows you to cross revenue targets in the <strong className="text-[#0a192f]">{data.revenue}</strong> bracket, your operational foundation relies almost exclusively on manual execution. The lack of standard automation frameworks means that scaling up will directly increase operational friction, leading to severe profit margin leakage and high staff burnout.
              </p>
              <p>
                <strong className="text-[#0a192f]">The Owner-Dependency Barrier:</strong> Your assessment answers reveal a critical operational dependency on the founder layer. Because daily validation, strategic planning, and performance management require your constant personal oversight, your team is restricted to running routine tasks. This lack of decentralization caps your ultimate enterprise valuation, as a company dependent on its owner cannot be easily scaled, sold, or institutionalized.
              </p>
            </div>
          ) : (
            <div className="space-y-2 text-[8.5pt] text-slate-700 leading-relaxed">
              <p>
                <strong className="text-[#0a192f]">Enterprise Maturity Evaluation:</strong> <strong className="text-[#0a192f]">{data.companyName}</strong> displays an elite operational framework, placing it in the top tier of maturity models for the <strong className="text-[#0a192f]">{data.industry}</strong> sector. By decoupling core day-to-day functions from manual founder oversight, you have cleared the initial growth bottlenecks that stall most MSMEs. Your business systems show solid baseline efficiency and consistent delivery parameters.
              </p>
              <p>
                <strong className="text-[#0a192f]">Strategic Capital Allocation Matrix:</strong> The objective for your enterprise must shift from protective management to aggressive market dominance. With an established core framework, you are prime to utilize your internal stability to deploy high-yield automation models, acquire market share from lower-tier competitors, and execute structured expansions into new regional verticals.
              </p>
            </div>
          )}
        </div>

        {/* Strengths vs Systemic Risks Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Key System Strengths */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2 pb-1 border-b border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              <h3 className="text-xs font-black uppercase text-emerald-900 tracking-wider">
                Core System Strengths (Top 4)
              </h3>
            </div>
            <div className="space-y-1.5 text-[8pt]">
              <div className="bg-white p-2 rounded border border-emerald-200/80 font-medium text-slate-800">
                <span className="font-bold text-emerald-800">01. Established Market Footprint:</span> Strong customer retention within {data.customerType} market segment.
              </div>
              <div className="bg-white p-2 rounded border border-emerald-200/80 font-medium text-slate-800">
                <span className="font-bold text-emerald-800">02. Committed Core Team:</span> Experienced baseline workforce of {data.workforceSize}.
              </div>
              <div className="bg-white p-2 rounded border border-emerald-200/80 font-medium text-slate-800">
                <span className="font-bold text-emerald-800">03. High Product Relevance:</span> Proven value proposition driving revenue in {data.revenue} band.
              </div>
              <div className="bg-white p-2 rounded border border-emerald-200/80 font-medium text-slate-800">
                <span className="font-bold text-emerald-800">04. Adaptable Leadership:</span> Founder vision aligned with digital modernization goals.
              </div>
            </div>
          </div>

          {/* Key Systemic Risks */}
          <div className="bg-red-50/70 border border-red-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2 pb-1 border-b border-red-200">
              <ShieldAlert className="w-3.5 h-3.5 text-red-700" />
              <h3 className="text-xs font-black uppercase text-red-900 tracking-wider">
                Systemic Exposure Risks (Top 4)
              </h3>
            </div>
            <div className="space-y-1.5 text-[8pt]">
              <div className="bg-white p-2 rounded border border-red-200/80 font-medium text-slate-800">
                <span className="font-bold text-red-800">01. Process Undocumented:</span> Core execution relies on tribal memory rather than written SOPs.
              </div>
              <div className="bg-white p-2 rounded border border-red-200/80 font-medium text-slate-800">
                <span className="font-bold text-red-800">02. Revenue Predictability:</span> Lead generation fluctuates month-to-month without automated funnel.
              </div>
              <div className="bg-white p-2 rounded border border-red-200/80 font-medium text-slate-800">
                <span className="font-bold text-red-800">03. Delegation Deficit:</span> Executive bandwidth spent on operational firefighter tasks.
              </div>
              <div className="bg-white p-2 rounded border border-red-200/80 font-medium text-slate-800">
                <span className="font-bold text-red-800">04. Tech Under-utilization:</span> Cloud tools and AI automation remain unintegrated.
              </div>
            </div>
          </div>
        </div>

        {/* Primary Business Bottleneck Box */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-2.5 flex items-start gap-3">
          <div className="p-2 bg-amber-500 text-white rounded-lg shrink-0 mt-0.5">
            <AlertOctagon className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[7.5pt] font-black text-amber-900 uppercase tracking-widest">
              PRIMARY BUSINESS BOTTLENECK (#1 GROWTH CONSTRAINT)
            </div>
            <h4 className="text-xs font-black text-slate-900 uppercase mt-0.5">
              Lack of Standardized Execution & Founder Over-Involvement
            </h4>
            <p className="text-[7.5pt] text-slate-700 mt-0.5 leading-normal font-medium">
              Your primary bottleneck is the absence of documented Standard Operating Procedures (SOPs) across sales and operational workflows. This forces the leadership team into continuous operational supervision, capping enterprise throughput at current revenue limits.
            </p>
            <p className="text-[7.5pt] font-semibold text-amber-950 mt-1.5 pt-1 border-t border-amber-200/80 italic">
              Strategic Outlook: If the identified priorities are not addressed over the next 12 months, business growth may remain constrained by operational inefficiencies and inconsistent execution.
            </p>
          </div>
        </div>
      </div>

      <DossierFooter companyName={data.companyName} reportId={data.displayReportId} />
    </div>
  );
};
