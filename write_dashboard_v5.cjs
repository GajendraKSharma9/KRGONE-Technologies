const fs = require('fs');

const content = `import React, { useState } from 'react';
import { 
  Building2, 
  Target, 
  BarChart3, 
  Lightbulb, 
  Cpu, 
  ShieldCheck, 
  Download,
  AlertTriangle,
  CheckCircle,
  ArrowUpRight,
  TrendingUp,
  Activity,
  Zap,
  Globe,
  Users,
  Briefcase,
  HelpCircle,
  Calendar,
  FileText,
  User,
  Phone,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  PieChart,
  DollarSign,
  TrendingDown,
  Layers,
  MapPin,
  Clock
} from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface DashboardReportProps {
  formData: any;
  scores: number[];
}

function ExpandableCard({ title, preview, children, icon, defaultExpanded = false, badge = null }: any) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm mb-4 transition-all hover:border-slate-300">
       <div className="p-4 md:p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/50" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex items-center gap-4">
             {icon && <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0B1A30] shrink-0">{icon}</div>}
             <div>
                <h4 className="font-bold text-[#0B1A30] text-sm">{title}</h4>
                {preview && <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">{preview}</p>}
             </div>
          </div>
          <div className="flex items-center gap-3 pl-4">
            {badge && <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-1 rounded bg-slate-100 text-slate-600 whitespace-nowrap">{badge}</span>}
            <button className="text-[#D4AF37] text-xs font-bold flex items-center gap-1 whitespace-nowrap">
               <span className="hidden sm:inline">{isExpanded ? 'Hide Details' : 'View Details'}</span> 
               {isExpanded ? <ChevronUp className="w-4 h-4"/> : <ChevronDown className="w-4 h-4"/>}
            </button>
          </div>
       </div>
       {isExpanded && (
         <div className="p-5 border-t border-slate-100 bg-white animate-in slide-in-from-top-2 duration-200">
           {children}
         </div>
       )}
    </div>
  );
}

export default function DashboardReport({ formData, scores }: DashboardReportProps) {
  const [activeTab, setActiveTab] = useState('OVERVIEW');

  const pillars = [
    'Leadership & Vision',
    'Sales & Revenue',
    'Marketing & Customers',
    'Operations & Process',
    'Finance & Performance',
    'People & Organisation',
    'Technology & Innovation'
  ];

  const getPillarScore = (index: number) => {
    if (!scores || scores.length === 0) return 0;
    const startIdx = index * 4;
    const pillarScores = scores.slice(startIdx, startIdx + 4).filter(s => typeof s === 'number' && !isNaN(s) && s > 0);
    if (pillarScores.length === 0) return 0;
    const sum = pillarScores.reduce((a, b) => a + b, 0);
    return Math.round(sum / pillarScores.length);
  };

  const getGlobalScore = () => {
    if (!scores || scores.length === 0) return 0;
    const activeScores = scores.filter(s => typeof s === 'number' && !isNaN(s) && s > 0);
    if (activeScores.length === 0) return 0;
    const sum = activeScores.reduce((a, b) => a + b, 0);
    return Math.round(sum / activeScores.length);
  };

  const globalScore = getGlobalScore();
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return '#10B981';
    if (score >= 60) return '#F59E0B';
    return '#EF4444';
  };

  const getScoreStatus = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Moderate';
    if (score >= 40) return 'Weak';
    return 'Critical';
  };

  const radarData = pillars.map((pillar, index) => ({
    subject: pillar.replace(' & ', ' &\\n'),
    A: getPillarScore(index) || 0,
    fullMark: 100,
  }));

  const menuItems = [
    { id: 'OVERVIEW', label: 'Executive Overview', icon: <Globe className="w-4 h-4" /> },
    { id: 'DASHBOARD', label: 'Business Health Dashboard', icon: <Activity className="w-4 h-4" /> },
    { id: '7_PILLAR', label: '7-Pillar Analysis', icon: <Layers className="w-4 h-4" /> },
    { id: 'ADVISORY', label: 'AI Growth Advisory™', icon: <Cpu className="w-4 h-4" /> },
    { id: 'PLAN', label: '90-Day Growth Plan', icon: <Calendar className="w-4 h-4" /> },
    { id: 'OPPORTUNITIES', label: 'Growth Opportunities', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'BENCHMARK', label: 'Industry Benchmark', icon: <Target className="w-4 h-4" /> },
    { id: 'FINANCIAL', label: 'Financial Impact', icon: <DollarSign className="w-4 h-4" /> },
  ];

  const kpis = [
    { title: 'Growth Score™', value: \`\${globalScore}\`, trend: '▲ Computed', color: getScoreColor(globalScore), status: getScoreStatus(globalScore), icon: <BarChart3 className="w-5 h-5 text-white" /> },
    { title: 'Growth Readiness', value: \`\${Math.round(globalScore * 0.9)}%\`, trend: 'Active', color: '#10B981', status: 'Good', icon: <Zap className="w-5 h-5 text-white" /> },
    { title: 'Revenue Opp.', value: 'High', trend: 'High Potential', color: '#F59E0B', status: 'High', icon: <TrendingUp className="w-5 h-5 text-white" /> },
    { title: 'Ops Maturity', value: \`\${getPillarScore(3)}%\`, trend: 'Computed', color: getScoreColor(getPillarScore(3)), status: getScoreStatus(getPillarScore(3)), icon: <Activity className="w-5 h-5 text-white" /> },
  ];

  const pillarSnapshots = pillars.map((p, i) => {
    const score = getPillarScore(i);
    return {
      name: p,
      score: score,
      status: getScoreStatus(score),
      color: getScoreColor(score)
    };
  });

  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.print();
  };

  return (
    <div className="absolute top-0 left-0 w-full min-h-screen bg-[#071426] text-slate-900 font-sans grid grid-cols-1 md:grid-cols-12 gap-6 p-4 md:p-6 items-stretch z-50">
      
      {/* COLUMN A: Left Sidebar Navigation */}
      <div className="hidden md:flex flex-col bg-[#0f2342]/80 backdrop-blur-md text-slate-300 border border-slate-700/50 sticky top-6 h-[calc(100vh-3rem)] overflow-y-auto hide-scrollbar rounded-[20px] md:col-span-3 lg:col-span-2 shadow-2xl">
        <div className="p-6 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="font-black tracking-widest text-[#D4AF37] text-2xl">KRG <span className="text-white">ONE</span></span>
          </div>
          <p className="text-[9px] uppercase tracking-widest text-slate-400 mt-1.5">Intelligence Workspace</p>
        </div>
        
        <nav className="flex-1 py-4 px-3 space-y-1">
          {menuItems.map((item, idx) => (
            <button 
              key={idx} 
              onClick={() => setActiveTab(item.id)}
              className={\`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-xs font-semibold transition-all duration-200 \${activeTab === item.id ? 'bg-[#D4AF37] text-[#0B1A30] shadow-[0_4px_12px_rgba(212,175,55,0.2)]' : 'text-slate-400 hover:text-white hover:bg-white/5'}\`}
            >
              <div className={activeTab === item.id ? "text-[#0B1A30]" : "text-slate-500"}>{item.icon}</div>
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-slate-800 space-y-2">
          <button 
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-xs font-semibold transition-all text-slate-300 hover:text-white hover:bg-white/5 border border-slate-700 hover:border-slate-500"
              onClick={handlePrint}
            >
              <div className="text-slate-400"><Download className="w-4 h-4" /></div>
              Download Report
          </button>
          <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#b89528] text-[#0B1A30] font-black text-xs uppercase tracking-wider rounded-lg hover:brightness-110 transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <Phone className="w-3.5 h-3.5" /> Diagnostic Call
          </button>
        </div>
      </div>

      {/* COLUMN B: Center Workspace */}
      <div className="col-span-12 md:col-span-6 lg:col-span-7 flex flex-col h-[calc(100vh-3rem)]">
        {/* Top Header */}
        <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-[20px] p-5 mb-6 shadow-sm flex items-center justify-between z-10 shrink-0">
          <div>
            <h2 className="text-lg font-black text-[#0B1A30] uppercase tracking-tight flex items-center gap-2">
               {menuItems.find(m => m.id === activeTab)?.icon}
               {menuItems.find(m => m.id === activeTab)?.label}
            </h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Workspace Intelligence Console</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="hidden sm:flex items-center gap-1.5 bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> AI Confidence: 94%
             </div>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto hide-scrollbar space-y-6 pb-20">
          
          {/* OVERVIEW TAB */}
          {activeTab === 'OVERVIEW' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {kpis.map((kpi, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col">
                        <div className="flex justify-between items-start mb-3">
                          <div className="w-8 h-8 rounded-full bg-[#0B1A30] flex items-center justify-center shrink-0">{kpi.icon}</div>
                          <span className="text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider text-white" style={{ backgroundColor: kpi.color }}>{kpi.status}</span>
                        </div>
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{kpi.title}</h3>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-[#0B1A30]">{kpi.value}</span>
                        </div>
                    </div>
                ))}
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6">
                <h3 className="text-sm font-black text-[#0B1A30] uppercase tracking-widest mb-3 flex items-center gap-2"><Target className="w-4 h-4 text-[#D4AF37]"/> Executive Summary</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  The business exhibits strong market demand and customer acquisition capabilities, reflected in its marketing maturity. However, growth is currently bottlenecked by an over-reliance on founder-led decision making and inconsistent operational frameworks. Addressing leadership delegation and standardizing operating procedures will immediately unlock scalability, reduce profit leakage, and create a more resilient revenue engine.
                </p>
              </div>

              <ExpandableCard 
                title="Top Strengths" 
                preview="Marketing & Customers, Sales Performance" 
                icon={<TrendingUp className="w-5 h-5"/>} 
                defaultExpanded={true}
              >
                 <div className="space-y-4">
                    {pillarSnapshots.filter(p => p.score >= 60).slice(0, 3).map((p, i) => (
                      <div key={i} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                         <div>
                            <div className="flex items-center gap-2 mb-1">
                               <div className="flex text-[#D4AF37] text-xs">★★★★☆</div>
                               <span className="text-xs font-bold text-[#0B1A30]">{p.name}</span>
                            </div>
                            <p className="text-[10px] text-slate-500">Performing above industry baseline.</p>
                         </div>
                         <div className="text-right">
                            <span className="text-lg font-black" style={{color: p.color}}>{p.score}</span>
                            <span className="text-[10px] text-slate-400 block font-bold">/100</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </ExpandableCard>

              <ExpandableCard 
                title="Top Improvement Areas" 
                preview="Leadership, Operations & Process" 
                icon={<AlertTriangle className="w-5 h-5"/>}
              >
                 <div className="space-y-4">
                    {pillarSnapshots.filter(p => p.score < 60).sort((a,b) => a.score - b.score).slice(0, 3).map((p, i) => (
                      <div key={i} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                         <div>
                            <div className="flex items-center gap-2 mb-1">
                               <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold uppercase">Priority</span>
                               <span className="text-xs font-bold text-[#0B1A30]">{p.name}</span>
                            </div>
                            <p className="text-[10px] text-slate-500">Requires immediate attention to unlock scale.</p>
                         </div>
                         <div className="text-right">
                            <span className="text-lg font-black" style={{color: p.color}}>{p.score}</span>
                            <span className="text-[10px] text-slate-400 block font-bold">/100</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </ExpandableCard>

              <ExpandableCard 
                title="Business Journey" 
                preview="Current Stage: Stabilization Phase" 
                icon={<MapPin className="w-5 h-5"/>}
              >
                 <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
                    <div className="text-center flex-1">
                       <div className="w-10 h-10 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-black mb-2">1</div>
                       <h5 className="text-[11px] font-bold text-[#0B1A30] uppercase mb-1">Stabilization</h5>
                       <p className="text-[10px] text-slate-500">Current Phase</p>
                    </div>
                    <div className="hidden sm:block flex-1 h-px bg-slate-200 relative"><ArrowRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"/></div>
                    <div className="text-center flex-1">
                       <div className="w-10 h-10 mx-auto bg-slate-100 text-slate-400 rounded-full flex items-center justify-center font-black mb-2">2</div>
                       <h5 className="text-[11px] font-bold text-slate-400 uppercase mb-1">Optimization</h5>
                       <p className="text-[10px] text-slate-400">Next Phase</p>
                    </div>
                    <div className="hidden sm:block flex-1 h-px bg-slate-200 relative"><ArrowRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"/></div>
                    <div className="text-center flex-1">
                       <div className="w-10 h-10 mx-auto bg-slate-100 text-slate-400 rounded-full flex items-center justify-center font-black mb-2">3</div>
                       <h5 className="text-[11px] font-bold text-slate-400 uppercase mb-1">Scale</h5>
                       <p className="text-[10px] text-slate-400">Future Phase</p>
                    </div>
                 </div>
              </ExpandableCard>
            </div>
          )}

          {/* DASHBOARD TAB */}
          {activeTab === 'DASHBOARD' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col items-center justify-center text-center">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Business Health Score</h3>
                    <div className="relative w-40 h-40 flex items-center justify-center mb-4">
                      <svg className="absolute inset-0 w-full h-full transform -rotate-180" viewBox="0 0 36 36">
                          <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          <path stroke={getScoreColor(globalScore)} strokeDasharray={\`\${(globalScore / 100) * 75}, 100\`} strokeWidth="3.5" fill="none" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      </svg>
                      <div className="flex flex-col items-center absolute bg-white rounded-full w-[120px] h-[120px] justify-center shadow-[inset_0_0_15px_rgba(0,0,0,0.03)]">
                          <span className="text-5xl font-black text-[#0B1A30]">{globalScore}</span>
                          <span className="text-xs font-bold text-slate-400 mt-1">/100</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 mt-2">Grade: {getScoreStatus(globalScore)}</span>
                 </div>

                 <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col items-center justify-center">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Maturity Radar</h3>
                    <div className="w-full aspect-square relative -ml-4 flex-1 max-h-[220px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                                <PolarGrid stroke="#e2e8f0" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 9, fontWeight: 600 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Radar name="Score" dataKey="A" stroke="#D4AF37" strokeWidth={2} fill="#D4AF37" fillOpacity={0.2} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                 </div>
              </div>

              <h3 className="text-sm font-black text-[#0B1A30] uppercase tracking-widest mt-8 mb-4">7-Pillar Summary</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {pillarSnapshots.map((pillar, idx) => (
                    <ExpandableCard 
                       key={idx} 
                       title={pillar.name} 
                       badge={\`Score: \${pillar.score}\`}
                       icon={<Layers className="w-4 h-4"/>}
                    >
                       <div className="space-y-3">
                          <div className="flex justify-between items-center mb-2">
                             <span className="text-[10px] uppercase font-bold text-slate-500">Current Status</span>
                             <span className="text-[10px] font-bold px-2 py-0.5 rounded text-white" style={{ backgroundColor: pillar.color }}>{pillar.status}</span>
                          </div>
                          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                             <div className="h-full rounded-full" style={{ width: \`\${pillar.score}%\`, backgroundColor: pillar.color }}></div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100">
                             <div>
                                <span className="block text-[9px] uppercase font-bold text-slate-400 mb-1">Strengths</span>
                                <p className="text-[10px] text-slate-700 leading-relaxed">Core processes identified.</p>
                             </div>
                             <div>
                                <span className="block text-[9px] uppercase font-bold text-slate-400 mb-1">Weaknesses</span>
                                <p className="text-[10px] text-slate-700 leading-relaxed">Lack of documentation.</p>
                             </div>
                          </div>
                       </div>
                    </ExpandableCard>
                 ))}
              </div>
            </div>
          )}

          {/* 7 PILLAR TAB */}
          {activeTab === '7_PILLAR' && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                {pillarSnapshots.map((pillar, idx) => (
                    <ExpandableCard 
                       key={idx} 
                       title={pillar.name} 
                       preview={\`Status: \${pillar.status} | Detailed analysis and AI diagnosis.\`}
                       badge={\`Score: \${pillar.score}/100\`}
                       icon={<BarChart3 className="w-5 h-5"/>}
                       defaultExpanded={idx === 0}
                    >
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                             <h5 className="text-[10px] uppercase font-bold text-slate-400 mb-2">Current Situation</h5>
                             <p className="text-xs text-slate-700 leading-relaxed mb-4">The current framework for {pillar.name.toLowerCase()} shows mixed indicators. While foundational elements exist, systematic execution is inconsistent.</p>
                             
                             <h5 className="text-[10px] uppercase font-bold text-slate-400 mb-2">Business Impact</h5>
                             <p className="text-xs text-slate-700 leading-relaxed mb-4">Moderate risk to scalability. Inefficiencies here directly limit overall revenue generation potential.</p>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                             <h5 className="text-[10px] uppercase font-bold text-[#D4AF37] mb-2 flex items-center gap-1"><Cpu className="w-3 h-3"/> AI Diagnosis</h5>
                             <ul className="space-y-2 mb-4">
                                <li className="text-[11px] text-slate-600 flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 shrink-0"/> Standardize core metrics tracking.</li>
                                <li className="text-[11px] text-slate-600 flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 shrink-0"/> Automate repetitive reporting.</li>
                             </ul>
                             <div className="pt-3 border-t border-slate-200">
                                <span className="block text-[9px] uppercase font-bold text-slate-400 mb-1">Industry Benchmark</span>
                                <div className="flex items-center gap-2">
                                   <div className="flex-1 h-1 bg-slate-200 rounded"><div className="h-full bg-slate-400 rounded" style={{width: '65%'}}></div></div>
                                   <span className="text-[10px] font-bold text-slate-600">65</span>
                                </div>
                             </div>
                          </div>
                       </div>
                    </ExpandableCard>
                 ))}
             </div>
          )}

          {/* ADVISORY TAB */}
          {activeTab === 'ADVISORY' && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                <div className="bg-[#0B1A30] rounded-xl p-6 md:p-8 text-white relative overflow-hidden shadow-lg border border-slate-800">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[80px] rounded-full pointer-events-none"></div>
                   <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                      <div className="text-center shrink-0">
                         <div className="w-24 h-24 mx-auto rounded-full border-4 border-[#10B981]/30 flex items-center justify-center relative mb-3">
                            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                <path stroke="#10B981" strokeDasharray="94, 100" strokeWidth="2.5" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                            <span className="text-3xl font-black text-[#10B981]">94<span className="text-lg">%</span></span>
                         </div>
                         <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400 bg-slate-800 px-2 py-1 rounded">AI Confidence</span>
                      </div>
                      <div>
                         <h3 className="text-lg font-black text-[#D4AF37] uppercase tracking-wider mb-2 flex items-center gap-2"><Cpu className="w-5 h-5"/> Top Recommendation</h3>
                         <p className="text-sm text-slate-300 leading-relaxed font-medium mb-4">
                            Implement robust middle-management frameworks and decentralize decision-making. Your operational bottlenecks are driven by leadership dependency.
                         </p>
                         <div className="flex gap-4">
                            <span className="text-xs font-bold px-3 py-1.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">Priority: CRITICAL</span>
                            <span className="text-xs font-bold px-3 py-1.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Impact: HIGH</span>
                         </div>
                      </div>
                   </div>
                </div>

                <ExpandableCard 
                  title="Detailed AI Strategy" 
                  preview="Root cause analysis and recommended actions." 
                  icon={<Lightbulb className="w-5 h-5"/>}
                  defaultExpanded={true}
                >
                   <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                         <div>
                            <h5 className="text-[10px] uppercase font-bold text-slate-400 mb-2">Root Cause</h5>
                            <p className="text-xs text-slate-700 leading-relaxed">Lack of documented SOPs leading to heavy reliance on founder intuition.</p>
                         </div>
                         <div>
                            <h5 className="text-[10px] uppercase font-bold text-slate-400 mb-2">Business Risk</h5>
                            <p className="text-xs text-slate-700 leading-relaxed">Burnout, capped growth, and poor valuation multiple upon exit.</p>
                         </div>
                      </div>
                      <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                         <h5 className="text-[10px] uppercase font-bold text-[#0B1A30] mb-3">Recommended Actions</h5>
                         <ul className="space-y-3">
                            <li className="flex gap-3 text-xs text-slate-700"><div className="w-4 h-4 rounded bg-[#D4AF37] text-white flex items-center justify-center font-bold text-[9px] shrink-0">1</div> Map out top 3 revenue-generating processes.</li>
                            <li className="flex gap-3 text-xs text-slate-700"><div className="w-4 h-4 rounded bg-[#D4AF37] text-white flex items-center justify-center font-bold text-[9px] shrink-0">2</div> Appoint process owners within existing team.</li>
                            <li className="flex gap-3 text-xs text-slate-700"><div className="w-4 h-4 rounded bg-[#D4AF37] text-white flex items-center justify-center font-bold text-[9px] shrink-0">3</div> Implement weekly KPI dashboard reviews.</li>
                         </ul>
                      </div>
                   </div>
                </ExpandableCard>
             </div>
          )}

          {/* PLAN TAB */}
          {activeTab === 'PLAN' && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                <ExpandableCard 
                  title="Phase 1: 30 Days (Stabilization)" 
                  preview="Establish baseline systems and core documentation." 
                  icon={<Calendar className="w-5 h-5"/>}
                  defaultExpanded={true}
                >
                   <div className="space-y-4">
                      <div className="flex gap-4 items-start pb-4 border-b border-slate-100">
                         <div className="w-8 h-8 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">W1</div>
                         <div>
                            <h5 className="text-xs font-bold text-[#0B1A30] mb-1">Audit Existing Processes</h5>
                            <p className="text-[11px] text-slate-500">Identify gaps in current delivery workflow. Assign responsibility.</p>
                         </div>
                      </div>
                      <div className="flex gap-4 items-start pb-4 border-b border-slate-100">
                         <div className="w-8 h-8 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">W2</div>
                         <div>
                            <h5 className="text-xs font-bold text-[#0B1A30] mb-1">Draft Core SOPs</h5>
                            <p className="text-[11px] text-slate-500">Document the 20% of processes that yield 80% of results.</p>
                         </div>
                      </div>
                      <div className="flex gap-4 items-start">
                         <div className="w-8 h-8 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">W3-4</div>
                         <div>
                            <h5 className="text-xs font-bold text-[#0B1A30] mb-1">Team Onboarding</h5>
                            <p className="text-[11px] text-slate-500">Train staff on new documentation and establish feedback loops.</p>
                         </div>
                      </div>
                   </div>
                </ExpandableCard>

                <ExpandableCard 
                  title="Phase 2: 60 Days (Optimization)" 
                  preview="Implement automation and accountability." 
                  icon={<Calendar className="w-5 h-5"/>}
                >
                   <div className="p-4 text-center text-slate-500 text-sm">
                      <p>Detailed weekly breakdown available upon expanding this phase.</p>
                   </div>
                </ExpandableCard>

                <ExpandableCard 
                  title="Phase 3: 90 Days (Scale)" 
                  preview="Accelerate growth and expand capabilities." 
                  icon={<Calendar className="w-5 h-5"/>}
                >
                   <div className="p-4 text-center text-slate-500 text-sm">
                      <p>Detailed weekly breakdown available upon expanding this phase.</p>
                   </div>
                </ExpandableCard>
             </div>
          )}

          {/* OPPORTUNITIES TAB */}
          {activeTab === 'OPPORTUNITIES' && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                <ExpandableCard 
                  title="Customer Retention & LTV" 
                  preview="High Priority • Estimated Impact: +15% Revenue" 
                  icon={<Users className="w-5 h-5"/>}
                  defaultExpanded={true}
                >
                   <p className="text-xs text-slate-600 leading-relaxed">Implementing a structured post-sale follow-up sequence and loyalty program could increase customer lifetime value significantly with low acquisition cost.</p>
                </ExpandableCard>
                <ExpandableCard 
                  title="Pricing Optimization" 
                  preview="Medium Priority • Estimated Impact: +8% Margin" 
                  icon={<DollarSign className="w-5 h-5"/>}
                >
                   <p className="text-xs text-slate-600 leading-relaxed">Restructuring service tiers to capture premium segments can immediately improve bottom-line profitability.</p>
                </ExpandableCard>
             </div>
          )}

          {/* BENCHMARK TAB */}
          {activeTab === 'BENCHMARK' && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                <ExpandableCard 
                  title="Industry Comparison" 
                  preview="Manufacturing Sector • Size: 50-100 Employees" 
                  icon={<Target className="w-5 h-5"/>}
                  defaultExpanded={true}
                >
                   <div className="space-y-6">
                      <div>
                         <div className="flex justify-between text-xs font-bold mb-1">
                            <span className="text-[#0B1A30]">Your Overall Score</span>
                            <span className="text-[#D4AF37]">{globalScore}/100</span>
                         </div>
                         <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-[#D4AF37] rounded-full" style={{width: \`\${globalScore}%\`}}></div>
                         </div>
                      </div>
                      <div>
                         <div className="flex justify-between text-xs font-bold mb-1">
                            <span className="text-[#0B1A30]">Industry Average</span>
                            <span className="text-slate-500">62/100</span>
                         </div>
                         <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-slate-400 rounded-full" style={{width: '62%'}}></div>
                         </div>
                      </div>
                   </div>
                </ExpandableCard>
             </div>
          )}

          {/* FINANCIAL TAB */}
          {activeTab === 'FINANCIAL' && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                <ExpandableCard 
                  title="Revenue Opportunity Analysis" 
                  preview="Estimated Unlocked Potential: High" 
                  icon={<TrendingUp className="w-5 h-5"/>}
                  defaultExpanded={true}
                >
                   <div className="grid grid-cols-2 gap-4">
                      <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-lg">
                         <span className="block text-[10px] uppercase font-bold text-emerald-700 mb-1">Growth Potential</span>
                         <span className="text-xl font-black text-emerald-600">+20-30%</span>
                      </div>
                      <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                         <span className="block text-[10px] uppercase font-bold text-red-700 mb-1">Profit Leakage</span>
                         <span className="text-xl font-black text-red-600">Moderate</span>
                      </div>
                   </div>
                   <p className="text-xs text-slate-600 mt-4">By addressing operational inefficiencies, profit margins can be expanded without increasing top-line volume proportionally.</p>
                </ExpandableCard>
             </div>
          )}

        </div>
      </div>

      {/* COLUMN C: Right Sidebar Profile */}
      <div className="hidden lg:flex flex-col bg-white border border-slate-200 sticky top-6 h-[calc(100vh-3rem)] overflow-y-auto hide-scrollbar rounded-[20px] lg:col-span-3 shadow-xl">
        <div className="p-6 border-b border-slate-100 flex-shrink-0">
           <h3 className="text-xs font-black text-[#0B1A30] uppercase tracking-widest flex items-center gap-2">
             <User className="w-4 h-4 text-[#D4AF37]" /> Executive Profile
           </h3>
        </div>
        
        <div className="p-6 space-y-5 flex-1 overflow-y-auto">
            <div className="flex gap-4">
                <Building2 className="w-4 h-4 text-[#0B1A30] shrink-0 mt-0.5" />
                <div>
                    <span className="block text-[9px] text-slate-400 mb-1 uppercase tracking-wider font-bold">Company Name</span>
                    <span className="text-xs font-bold text-[#0B1A30]">{formData.companyName || 'ABC Manufacturing Pvt. Ltd.'}</span>
                </div>
            </div>
            
            <div className="flex gap-4">
                <User className="w-4 h-4 text-[#0B1A30] shrink-0 mt-0.5" />
                <div>
                    <span className="block text-[9px] text-slate-400 mb-1 uppercase tracking-wider font-bold">Owner</span>
                    <span className="text-xs font-bold text-[#0B1A30]">{formData.fullName || 'Gajendra Kumar Sharma'}</span>
                </div>
            </div>
            
            <div className="flex gap-4">
                <Briefcase className="w-4 h-4 text-[#0B1A30] shrink-0 mt-0.5" />
                <div>
                    <span className="block text-[9px] text-slate-400 mb-1 uppercase tracking-wider font-bold">Industry</span>
                    <span className="text-xs font-bold text-[#0B1A30]">{formData.industry || 'Manufacturing'}</span>
                </div>
            </div>
            
            <div className="flex gap-4">
                <Users className="w-4 h-4 text-[#0B1A30] shrink-0 mt-0.5" />
                <div>
                    <span className="block text-[9px] text-slate-400 mb-1 uppercase tracking-wider font-bold">Employees</span>
                    <span className="text-xs font-bold text-[#0B1A30]">{formData.businessSize || '50 - 100'}</span>
                </div>
            </div>

            <div className="flex gap-4">
                <TrendingUp className="w-4 h-4 text-[#0B1A30] shrink-0 mt-0.5" />
                <div>
                    <span className="block text-[9px] text-slate-400 mb-1 uppercase tracking-wider font-bold">Annual Revenue</span>
                    <span className="text-xs font-bold text-[#0B1A30]">{formData.revenue || '₹5 - 20 Cr'}</span>
                </div>
            </div>

            <div className="flex gap-4">
                <Target className="w-4 h-4 text-[#0B1A30] shrink-0 mt-0.5" />
                <div>
                    <span className="block text-[9px] text-slate-400 mb-1 uppercase tracking-wider font-bold">Primary Goal</span>
                    <span className="text-xs font-bold text-[#10B981]">{formData.goal || 'Improve Sales Performance'}</span>
                </div>
            </div>

            <div className="flex gap-4">
                <AlertTriangle className="w-4 h-4 text-[#0B1A30] shrink-0 mt-0.5" />
                <div>
                    <span className="block text-[9px] text-slate-400 mb-1 uppercase tracking-wider font-bold">Primary Challenge</span>
                    <span className="text-[11px] font-bold text-[#0B1A30] bg-slate-50 px-2 py-1 rounded inline-block mt-1">Leadership Dependency</span>
                </div>
            </div>
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-100 flex-shrink-0 rounded-b-[20px]">
            <div className="flex justify-between items-center mb-4">
               <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Growth Score</span>
               <span className="text-lg font-black" style={{color: getScoreColor(globalScore)}}>{globalScore}/100</span>
            </div>
            <button className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#b89528] text-[#0B1A30] font-black text-[11px] rounded-xl hover:brightness-110 transition-all shadow-[0_4px_15px_rgba(212,175,55,0.3)] uppercase tracking-widest mb-3">
                Book Diagnostic Call →
            </button>
            <p className="text-[9px] text-center text-slate-400 font-bold uppercase tracking-widest">Special Assessment Rate: ₹1,499</p>
        </div>
      </div>
      
    </div>
  );
}
`
fs.writeFileSync('src/components/DashboardReport.tsx', content);
