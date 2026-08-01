import re

content = """import React, { useState } from 'react';
import {
  ShieldCheck, LayoutDashboard, BarChart3, TrendingUp, Cpu, Building2, Calendar, Download, PhoneCall,
  User, Factory, Users, Coins, CheckCircle2, AlertTriangle, ArrowUpRight, Activity, Target, AlertCircle, Clock, Award
} from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, LineChart, Line, YAxis } from 'recharts';

export default function DashboardReport({ formData, scores }: any) {
  const [activeTab, setActiveTab] = useState('overview');

  const PILLARS = [
    "Leadership & Vision",
    "Sales & Revenue",
    "Marketing & Customer Growth",
    "Operations & Process",
    "Finance & Business Performance",
    "People & Leadership",
    "Technology & Business Innovation"
  ];

  const getPillarScores = () => {
    return PILLARS.map((_, i) => {
      const start = i * 3;
      const total = (scores[start] || 0) + (scores[start+1] || 0) + (scores[start+2] || 0);
      return Math.round((total / 15) * 100);
    });
  };

  const getGlobalScore = () => {
    const weights = [0.15, 0.20, 0.15, 0.15, 0.15, 0.10, 0.10];
    const pScores = getPillarScores();
    let sum = 0;
    for (let i = 0; i < 7; i++) { sum += pScores[i] * weights[i]; }
    return Math.round(sum);
  };

  const globalScore = getGlobalScore();
  const pillarScores = getPillarScores();
  
  const radarData = PILLARS.map((pillar: string, i: number) => ({
    subject: pillar.replace(' & ', '\\n'),
    A: pillarScores[i],
    fullMark: 100,
  }));

  const isLowScore = globalScore < 70;
  const isHighScore = globalScore >= 85;

  const sparklineData = Array.from({ length: 10 }).map(() => ({ value: Math.random() * 100 }));
  const sparklineData2 = Array.from({ length: 10 }).map(() => ({ value: Math.random() * 100 }));
  const sparklineData3 = Array.from({ length: 10 }).map(() => ({ value: Math.random() * 100 }));

  const TABS = [
    { id: 'overview', name: 'Executive Overview', icon: ShieldCheck },
    { id: 'health', name: 'Business Health Dashboard', icon: LayoutDashboard },
    { id: 'pillars', name: '7-Pillar Analysis', icon: BarChart3 },
    { id: 'advisory', name: 'AI Growth Advisory™', icon: Cpu },
    { id: 'plan', name: 'Opportunities & 90-Day Plan', icon: Target }
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-[#0F172A] text-white flex flex-col shrink-0 z-20">
        <div className="p-6">
          <h1 className="text-xl font-bold tracking-wider text-white">KRG ONE</h1>
          <p className="text-[9px] uppercase tracking-widest text-slate-400 mt-1 leading-tight">Turning Knowledge<br/>Into Revenue Growth</p>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#FFD700] text-black font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5 font-semibold'
              }`}
            >
              <tab.icon className="w-4 h-4 shrink-0" />
              <span className="text-xs">{tab.name}</span>
            </button>
          ))}
          
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors font-semibold mt-4">
            <Download className="w-4 h-4 shrink-0" />
            <span className="text-xs">Download Report</span>
          </button>
        </nav>
        <div className="p-6">
          <div className="bg-[#1E293B] rounded-xl p-5 text-center border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
            <h3 className="text-sm font-bold text-white mb-1">Book 1-on-1</h3>
            <h3 className="text-sm font-bold text-white mb-2">Diagnostic Call</h3>
            <p className="text-[10px] text-slate-400 mb-4 leading-relaxed">Get expert insights and a custom growth roadmap.</p>
            <button className="w-full bg-transparent border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black flex items-center justify-center gap-2 py-2 rounded-lg transition-colors mb-4">
              <PhoneCall className="w-3 h-3" />
              <span className="text-[10px] font-bold">Book Diagnostic Call</span>
            </button>
            <div className="space-y-1">
              <div className="text-[11px] text-slate-500 line-through">₹ 9,999</div>
              <div className="text-xl font-black text-[#FFD700]">₹ 1,499</div>
              <div className="text-[9px] font-bold tracking-widest text-white mt-1 flex items-center justify-center gap-1">
                <Clock className="w-3 h-3" /> LIMITED TIME OFFER
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto p-8 relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-[28px] font-bold text-[#0F172A] tracking-tight">Business Growth Dashboard™</h2>
          <button className="bg-[#0F172A] text-white flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
            <Download className="w-4 h-4" />
            <span className="text-xs font-bold">Download PDF</span>
          </button>
        </div>

        {/* Subheader Box */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-[10px] text-slate-500 mb-0.5">Generated for</p>
            <h3 className="text-sm font-bold text-[#0F172A]">{formData.companyName || 'Your Company'}</h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
              <User className="w-4 h-4 text-slate-500" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 mb-0.5">Owner</p>
              <h3 className="text-sm font-bold text-[#0F172A]">{formData.fullName || 'User'}</h3>
            </div>
          </div>
          <div className="w-px h-8 bg-slate-200"></div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
              <Factory className="w-4 h-4 text-slate-500" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 mb-0.5">Industry</p>
              <h3 className="text-sm font-bold text-[#0F172A]">{formData.industry || 'N/A'}</h3>
            </div>
          </div>
          <div className="w-px h-8 bg-slate-200"></div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
              <Coins className="w-4 h-4 text-slate-500" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 mb-0.5">Revenue</p>
              <h3 className="text-sm font-bold text-[#0F172A]">{formData.revenue || 'N/A'}</h3>
            </div>
          </div>
        </div>

        {/* --- DYNAMIC VIEWS BASED ON TAB --- */}
        
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Score Card */}
              <div className="bg-[#0F172A] rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#FFD700] uppercase mb-2 block">Business Growth Score™</span>
                    <div className="flex items-baseline gap-2">
                      <h2 className="text-6xl font-black tracking-tighter">{globalScore}</h2>
                      <span className="text-xl text-slate-400 font-bold">/ 100</span>
                    </div>
                    <p className="text-sm text-slate-300 mt-4 max-w-md leading-relaxed">
                      {isHighScore 
                        ? 'Your business demonstrates an elite operational framework, primed for aggressive market expansion.'
                        : isLowScore 
                        ? 'Your operations show structural vulnerabilities. Immediate stabilization and process standardization are required.'
                        : 'Your business is stable but requires operational refinement to break through the current scaling ceiling.'}
                    </p>
                  </div>
                  <div className="w-32 h-32 shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                        <PolarGrid stroke="rgba(255,255,255,0.1)" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 8 }} />
                        <Radar name="Score" dataKey="A" stroke="#FFD700" fill="#FFD700" fillOpacity={0.3} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
               <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-sm font-bold text-[#0F172A] mb-4">Assessment Context</h3>
                  <div className="space-y-4">
                     <div>
                       <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Primary Challenge</span>
                       <span className="text-xs font-bold text-slate-900 bg-red-50 text-red-700 px-2 py-1 rounded-md border border-red-100">{formData.challenges[0] || 'Operational Bottlenecks'}</span>
                     </div>
                     <div>
                       <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Business Goal</span>
                       <span className="text-xs font-bold text-slate-900 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md border border-emerald-100">{formData.goal || 'Scale Revenue & Profitability'}</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'health' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#0F172A] mb-4">Business Health Dashboard</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 block">Sales Engine</span>
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <h4 className="text-3xl font-black text-[#0F172A]">{pillarScores[1]}%</h4>
                    <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full mt-1 inline-block">Score</span>
                  </div>
                  <div className="w-16 h-8">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sparklineData}>
                        <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 block">Operations & Process</span>
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <h4 className="text-3xl font-black text-[#0F172A]">{pillarScores[3]}%</h4>
                    <span className="text-[10px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full mt-1 inline-block">Score</span>
                  </div>
                  <div className="w-16 h-8">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sparklineData2}>
                        <Line type="monotone" dataKey="value" stroke="#F59E0B" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 block">Finance & Performance</span>
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <h4 className="text-3xl font-black text-[#0F172A]">{pillarScores[4]}%</h4>
                    <span className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full mt-1 inline-block">Score</span>
                  </div>
                  <div className="w-16 h-8">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sparklineData3}>
                        <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Extended radar for full analysis context */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-center justify-center h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 11, fontWeight: 600 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{fontSize: 10}} />
                  <Radar name="Performance" dataKey="A" stroke="#0F172A" strokeWidth={2} fill="#3B82F6" fillOpacity={0.15} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
        
        {activeTab === 'pillars' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#0F172A] mb-4">7-Pillar Detailed Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PILLARS.map((pillar, idx) => (
                <div key={pillar} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-sm font-bold text-[#0F172A]">{pillar}</h4>
                    <span className="text-xs font-black text-[#0F172A] bg-slate-100 px-2 py-1 rounded">{pillarScores[idx]}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-4">
                    <div 
                      className={`h-full rounded-full ${pillarScores[idx] < 50 ? 'bg-red-500' : pillarScores[idx] < 75 ? 'bg-amber-500' : 'bg-emerald-500'}`} 
                      style={{ width: `${pillarScores[idx]}%` }}
                    ></div>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {pillarScores[idx] < 50 
                      ? 'Critical vulnerability detected. Process optimization and immediate strategic intervention required.' 
                      : pillarScores[idx] < 75 
                      ? 'Developing capability. Strong foundation but lacking standardized automation.' 
                      : 'Elite performance metric. Ready for scaling and aggressive market expansion.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'advisory' && (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 space-y-8">
             <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0F172A] tracking-tight">KRG ONE AI Growth Advisory™</h3>
                  <p className="text-xs text-slate-500">Deep Diagnostic Core & Executive Synthesis</p>
                </div>
             </div>

             {/* Section A: The Executive Observation & Macro Diagnosis */}
             <div>
                <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-widest mb-4">Section A: Executive Observation & Macro Diagnosis</h4>
                
                {isLowScore ? (
                  <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed border-l-4 border-red-500 pl-4 bg-slate-50 p-4 rounded-r-xl">
                    <p className="font-medium">
                      <strong>Structural Systemic Volatility:</strong> An analytical review of {formData.companyName || 'your organization'} operating within the {formData.industry || 'specified'} vertical indicates that your organization has hit a structural scaling ceiling. While your market position allows you to cross revenue targets in the {formData.revenue || 'current'} bracket, your operational foundation relies almost exclusively on manual execution. The lack of standard automation frameworks means that scaling up will directly increase operational friction, leading to severe profit margin leakage and high staff burnout.
                    </p>
                    <p className="font-medium">
                      <strong>The Owner-Dependency Barrier:</strong> Your assessment answers reveal a critical operational dependency on the founder layer. Because daily validation, strategic planning, and performance management require your constant personal oversight, your team is restricted to running routine tasks. This lack of decentralization caps your ultimate enterprise valuation, as a company dependent on its owner cannot be easily scaled, sold, or institutionalized.
                    </p>
                  </div>
                ) : isHighScore ? (
                  <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed border-l-4 border-emerald-500 pl-4 bg-slate-50 p-4 rounded-r-xl">
                    <p className="font-medium">
                      <strong>Enterprise Maturity Evaluation:</strong> {formData.companyName || 'Your organization'} displays an elite operational framework, placing it in the top tier of maturity models for the {formData.industry || 'specified'} sector. By decoupling core day-to-day functions from manual founder oversight, you have cleared the initial growth bottlenecks that stall most MSMEs. Your business systems show solid baseline efficiency and consistent delivery parameters.
                    </p>
                    <p className="font-medium">
                      <strong>Strategic Capital Allocation Matrix:</strong> The objective for your enterprise must shift from protective management to aggressive market dominance. With an established core framework, you are prime to utilize your internal stability to deploy high-yield automation models, acquire market share from lower-tier competitors, and execute structured expansions into new regional verticals.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed border-l-4 border-amber-500 pl-4 bg-slate-50 p-4 rounded-r-xl">
                    <p className="font-medium">
                      <strong>Transitional Growth Phase:</strong> An analytical review of {formData.companyName || 'your organization'} operating within the {formData.industry || 'specified'} vertical indicates that you have established a viable market position, yet your operational architecture remains inconsistent. You have successfully bypassed initial startup friction, achieving targets in the {formData.revenue || 'current'} bracket, but you lack the standardized, automated systems required to scale without proportional increases in overhead.
                    </p>
                    <p className="font-medium">
                      <strong>Operational Decentralization Required:</strong> The data suggests that while some processes are systemized, the executive layer still absorbs too much daily operational shock. To break through your current revenue ceiling, you must transition from ad-hoc management to rigid, data-driven frameworks. This involves documenting core workflows and implementing rigid KPIs to extract founder involvement from day-to-day delivery.
                    </p>
                  </div>
                )}
             </div>

             {/* Section B: Top 5 Strategic Technical Recommendations */}
             <div>
                <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-widest mb-6 mt-8">Section B: Top 5 Strategic Technical Recommendations</h4>
                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#0F172A] text-white font-bold text-xs flex items-center justify-center shrink-0">1</div>
                      <h5 className="text-[15px] font-bold text-[#0F172A]">Develop Core Standard Operating Procedures (SOPs)</h5>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[12px] leading-relaxed">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <strong className="text-slate-800 block mb-1">The Friction Point:</strong> 
                        <span className="text-slate-600">Your business functions rely on tribal employee memory rather than clear documented systems, leading to high processing errors, unpredictable client delivery quality, and extended onboarding timelines for new hires.</span>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <strong className="text-slate-800 block mb-1">The Strategic Intervention:</strong> 
                        <span className="text-slate-600">Document a unified digital blueprint for your absolute highest-leverage processes across sales, operations, and finance. Map out visual step-by-step swimlane diagrams and set explicit processing speed rules for every department.</span>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                        <strong className="text-slate-800 block mb-1">KRG ONE Partner Deployment:</strong> 
                        <span className="text-slate-600">We deploy senior systems consultants directly into your firm to audit your workflows, write your custom operational playbooks, and build an interactive digital wiki database. This secures execution quality and helps insulate your profit margins.</span>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#0F172A] text-white font-bold text-xs flex items-center justify-center shrink-0">2</div>
                      <h5 className="text-[15px] font-bold text-[#0F172A]">Deploy Automated Lead Nurturing Frameworks</h5>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[12px] leading-relaxed">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <strong className="text-slate-800 block mb-1">The Friction Point:</strong> 
                        <span className="text-slate-600">High volumes of potential pipeline revenue are being leaked due to manual follow-up dependencies. Sales teams drop prospects that don't convert immediately, ignoring the long-term lifetime value matrix.</span>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <strong className="text-slate-800 block mb-1">The Strategic Intervention:</strong> 
                        <span className="text-slate-600">Architect a multi-channel automated CRM infrastructure that triggers behavior-based follow-up sequences. Establish strict lead scoring protocols to ensure your sales team only spends human capital on high-intent prospects.</span>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                        <strong className="text-slate-800 block mb-1">KRG ONE Partner Deployment:</strong> 
                        <span className="text-slate-600">Our revenue operations architects will completely rebuild your CRM topology, configure the automated workflows, and train your sales team on elite conversion methodologies to instantly recapture lost pipeline capital.</span>
                      </div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#0F172A] text-white font-bold text-xs flex items-center justify-center shrink-0">3</div>
                      <h5 className="text-[15px] font-bold text-[#0F172A]">Institute Rigid Financial KPI Tracking</h5>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[12px] leading-relaxed">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <strong className="text-slate-800 block mb-1">The Friction Point:</strong> 
                        <span className="text-slate-600">Decisions are being made on gross revenue assumptions rather than net unit profitability. Without granular financial visibility, capital is allocated inefficiently, masking structural cash flow bleed.</span>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <strong className="text-slate-800 block mb-1">The Strategic Intervention:</strong> 
                        <span className="text-slate-600">Deploy real-time financial dashboards focusing on Gross Margin, Customer Acquisition Cost (CAC), and Lifetime Value (LTV). Force a weekly executive review cycle anchored entirely to these hard mathematical truths.</span>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                        <strong className="text-slate-800 block mb-1">KRG ONE Partner Deployment:</strong> 
                        <span className="text-slate-600">We embed fractional CFO capabilities to restructure your chart of accounts, construct live business intelligence (BI) dashboards, and run aggressive monthly financial audits to maximize your capital efficiency.</span>
                      </div>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#0F172A] text-white font-bold text-xs flex items-center justify-center shrink-0">4</div>
                      <h5 className="text-[15px] font-bold text-[#0F172A]">Decentralize Executive Decision Making</h5>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[12px] leading-relaxed">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <strong className="text-slate-800 block mb-1">The Friction Point:</strong> 
                        <span className="text-slate-600">The founder is the ultimate bottleneck for both strategic and routine operational approvals. This centralized command structure suffocates middle-management initiative and caps operational speed.</span>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <strong className="text-slate-800 block mb-1">The Strategic Intervention:</strong> 
                        <span className="text-slate-600">Implement an 'Accountability Chart' rather than a standard organizational chart. Assign specific, measurable outcomes to department heads and grant them the explicit authority to execute within pre-approved budget parameters.</span>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                        <strong className="text-slate-800 block mb-1">KRG ONE Partner Deployment:</strong> 
                        <span className="text-slate-600">We conduct a comprehensive leadership audit, re-map your organizational responsibilities, and facilitate leadership training to transform your employees from task-takers into autonomous strategic operators.</span>
                      </div>
                    </div>
                  </div>

                  {/* Item 5 */}
                  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#0F172A] text-white font-bold text-xs flex items-center justify-center shrink-0">5</div>
                      <h5 className="text-[15px] font-bold text-[#0F172A]">Engineer a Scalable Talent Acquisition Machine</h5>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[12px] leading-relaxed">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <strong className="text-slate-800 block mb-1">The Friction Point:</strong> 
                        <span className="text-slate-600">Hiring is reactive and based on immediate desperation rather than strategic forecasting. This leads to poor cultural fits, high turnover rates, and massive unseen costs in constant retraining.</span>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <strong className="text-slate-800 block mb-1">The Strategic Intervention:</strong> 
                        <span className="text-slate-600">Treat recruitment exactly like customer acquisition. Build a continuous inbound talent funnel, standardize interview scorecards to eliminate bias, and create a rigid 30-60-90 day onboarding matrix.</span>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                        <strong className="text-slate-800 block mb-1">KRG ONE Partner Deployment:</strong> 
                        <span className="text-slate-600">Our HR optimization unit will design your employer branding assets, configure automated applicant tracking systems (ATS), and build the complete onboarding curriculum to guarantee immediate new-hire ROI.</span>
                      </div>
                    </div>
                  </div>

                </div>
             </div>
          </div>
        )}

        {activeTab === 'plan' && (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 space-y-8">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#0F172A] tracking-tight">Opportunities & 90-Day Plan™</h3>
                <p className="text-xs text-slate-500">The Time-Phased Execution Roadmap</p>
              </div>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[28px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              
              {/* Phase 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-white bg-[#0F172A] text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md relative z-10">
                  P1
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-[#0F172A] text-lg">Days 1–30</h4>
                    <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2.5 py-1 rounded-full border border-red-100 uppercase tracking-widest">Emergency Risk Mitigation & Stabilization</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    Isolate and plug immediate cash flow leakages and severe operational friction points. Deploy basic end-of-day daily tracking templates for all operational staff members. Set up absolute tracking metrics for the primary user challenge selected: <strong className="text-slate-800">{formData.challenges?.length ? formData.challenges.join(', ') : 'Core Operational Leakage'}</strong>. Stop daily administrative tasks from reaching the executive founder layer by establishing a strict delegation rule.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-white bg-[#FFD700] text-black font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md relative z-10">
                  P2
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-[#0F172A] text-lg">Days 31–60</h4>
                    <span className="bg-amber-50 text-amber-600 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-100 uppercase tracking-widest">Process Standardization & Workflow Architecture</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    Begin the formal drafting and deployment of step-by-step Standard Operating Procedures (SOPs) across your lowest-performing operational pillars. Build clean cloud-based tracking systems to monitor team output, optimize customer acquisition channels, and map customer retention journeys to maximize your lifetime client value metrics.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-white bg-emerald-600 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md relative z-10">
                  P3
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-[#0F172A] text-lg">Days 61–90</h4>
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-100 uppercase tracking-widest">System Optimization & Capital Scaling</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    Integrate scalable automation tools and modern business software models. Transition your management team to a formal weekly performance review cycle based on concrete KPIs rather than personal feelings. Review the unit profit margins across all core product lines to maximize revenue efficiency.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

      </main>
    </div>
  );
}
"""

with open("src/components/DashboardReport.tsx", "w") as f:
    f.write(content)
