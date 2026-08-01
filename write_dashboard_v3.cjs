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
  Phone
} from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface DashboardReportProps {
  formData: any;
  scores: number[];
}

export default function DashboardReport({ formData, scores }: DashboardReportProps) {
  const [activeTab, setActiveTab] = useState('DASHBOARD');

  const pillars = [
    'Leadership & Vision',
    'Sales & Revenue',
    'Marketing & Customers',
    'Operations & Process',
    'Finance & Performance',
    'People & Organisation',
    'Technology & Innovation'
  ];

  // Each pillar has 4 questions (total 28 questions). Max score per question is 100.
  // We need to accumulate active integer arrays from the 28 core questions.
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
    if (score >= 80) return '#10B981'; // Emerald Green
    if (score >= 60) return '#F59E0B'; // Alert Orange
    return '#EF4444'; // Crimson Red
  };

  const getScoreStatus = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Moderate';
    if (score >= 40) return 'Weak';
    return 'Critical';
  };

  const radarData = pillars.map((pillar, index) => ({
    subject: pillar.replace(' & ', ' &\\n'),
    A: getPillarScore(index) || 0, // No random defaults
    fullMark: 100,
  }));

  const menuItems = [
    { id: 'OVERVIEW', label: 'Executive Overview', icon: <Globe className="w-5 h-5" /> },
    { id: 'DASHBOARD', label: 'Business Health Dashboard', icon: <Activity className="w-5 h-5" /> },
    { id: '7_PILLAR', label: '7-Pillar Analysis', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'ADVISORY', label: 'AI Growth Advisory™', icon: <Cpu className="w-5 h-5" /> },
    { id: 'PLAN', label: '90-Day Growth Plan', icon: <Zap className="w-5 h-5" /> }
  ];

  const kpis = [
    { title: 'Business Growth Score', value: \`\${globalScore}/100\`, trend: '▲ Computed', color: getScoreColor(globalScore), status: getScoreStatus(globalScore), icon: <BarChart3 className="w-6 h-6 text-white" /> },
    { title: 'Growth Readiness', value: \`\${Math.round(globalScore * 0.9)}%\`, trend: 'Active', color: '#10B981', status: 'Good', icon: <Zap className="w-6 h-6 text-white" /> },
    { title: 'Revenue Opportunity', value: 'High', trend: 'High Potential', color: '#F59E0B', status: 'High Potential', icon: <TrendingUp className="w-6 h-6 text-white" /> },
    { title: 'Operational Maturity', value: \`\${getPillarScore(3)}%\`, trend: 'Computed', color: getScoreColor(getPillarScore(3)), status: getScoreStatus(getPillarScore(3)), icon: <Activity className="w-6 h-6 text-white" /> },
    { title: 'Leadership Vision', value: \`\${getPillarScore(0)}%\`, trend: 'Computed', color: getScoreColor(getPillarScore(0)), status: getScoreStatus(getPillarScore(0)), icon: <Target className="w-6 h-6 text-white" /> },
    { title: 'Immediate Priority', value: 'Leadership', subtitle: 'Systems', trend: 'Critical', color: '#EF4444', status: 'Critical', icon: <AlertTriangle className="w-6 h-6 text-white" /> },
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
    window.print() || alert("If the print window did not open, test it outside the developer sandbox wrapper!");
  };

  return (
    <div className="absolute top-0 left-0 w-full min-h-screen bg-[#071426] text-slate-900 font-sans grid grid-cols-1 md:grid-cols-12 gap-6 p-4 md:p-6 items-stretch z-50">
      {/* COLUMN A: Left Sidebar */}
      <div className="hidden md:flex flex-col bg-white/5 text-slate-300 border border-white/10 sticky top-6 h-[calc(100vh-3rem)] overflow-y-auto hide-scrollbar rounded-[16px] md:col-span-2">
        <div className="p-6 pb-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <span className="font-black tracking-widest text-[#D4AF37] text-3xl">KRG <span className="text-white">ONE</span></span>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-white mt-1 opacity-80">Turning Knowledge</p>
          <p className="text-[10px] uppercase tracking-widest text-white opacity-80">Into Revenue Growth</p>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1">
          {menuItems.map((item, idx) => (
            <button 
              key={idx} 
              onClick={() => setActiveTab(item.id)}
              className={\`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left text-sm font-medium transition-all \${activeTab === item.id ? 'bg-[#D4AF37] text-[#0B1A30] font-bold shadow-lg shadow-[#D4AF37]/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}\`}
            >
              <div className={activeTab === item.id ? "text-[#0B1A30]" : "text-slate-500"}>{item.icon}</div>
              {item.label}
            </button>
          ))}
          <button 
              className={\`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left text-sm font-medium transition-all text-slate-400 hover:text-white hover:bg-white/5\`}
              onClick={handlePrint}
            >
              <div className="text-slate-500"><Download className="w-5 h-5" /></div>
              Download Report
          </button>
        </nav>
        
        <div className="p-6 border-t border-white/5">
          <div className="bg-[#0f2342] border border-[#1a365d] rounded-xl p-5 relative overflow-hidden mb-4">
              <h4 className="relative z-10 text-sm font-bold text-white mb-2">Need Expert Guidance?</h4>
              <p className="relative z-10 text-xs text-slate-400 mb-4 leading-relaxed">Book your 1-on-1 Growth Consultation Call</p>
              <div className="relative z-10 text-2xl font-black text-[#D4AF37] mb-4">₹1,499</div>
              <button className="relative z-10 w-full py-2.5 bg-[#D4AF37] hover:bg-[#c29e2f] text-[#0B1A30] font-bold text-sm rounded-lg transition flex justify-center items-center gap-2">
                  <Activity className="w-4 h-4" /> Book Diagnostic Call
              </button>
          </div>
        </div>
      </div>

      {/* COLUMN B: Center Content */}
      <div className="col-span-12 md:col-span-7 overflow-y-auto h-[calc(100vh-3rem)] hide-scrollbar bg-[#f4f6f8] rounded-[16px] p-6 shadow-xl sticky top-6">
        
        {activeTab === 'OVERVIEW' && (
          <div className="bg-white border border-slate-200 rounded-[16px] p-8 shadow-sm h-full flex flex-col justify-center">
              <h1 className="text-3xl md:text-[40px] font-black text-[#0B1A30] tracking-tight mb-4">Welcome to Your Growth Dashboard</h1>
              <p className="text-slate-600 mb-8 text-lg">Hello {formData.fullName || 'Guest'}, here is a high-level summary of your business assessment.</p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 border-t border-slate-100 pt-8">
                <div className="flex items-center gap-1.5"><Calendar className="w-5 h-5 text-[#D4AF37]" /> Assessment Date: <span className="font-semibold text-slate-700">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span></div>
                <div className="flex items-center gap-1.5"><FileText className="w-5 h-5 text-[#D4AF37]" /> Report Version: <span className="font-semibold text-slate-700">Free Assessment v1.0</span></div>
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full font-bold text-sm border border-emerald-100">
                  <ShieldCheck className="w-5 h-5" /> AI Confidence: 94.14%
                </div>
              </div>
          </div>
        )}

        {activeTab === 'DASHBOARD' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-[#0B1A30] mb-2 tracking-tight">Business Health Dashboard™</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4 bg-white border border-slate-200 rounded-[16px] p-6 shadow-sm flex flex-col items-center justify-center text-center">
                  <h3 className="text-sm font-bold text-[#0B1A30] mb-6 w-full text-left uppercase tracking-wider">Overall Maturity</h3>
                  <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                    <svg className="absolute inset-0 w-full h-full transform -rotate-180" viewBox="0 0 36 36">
                        <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <path stroke={getScoreColor(globalScore)} strokeDasharray={\`\${(globalScore / 100) * 75}, 100\`} strokeWidth="3.5" fill="none" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <div className="flex flex-col items-center absolute bg-white rounded-full w-[120px] h-[120px] justify-center shadow-[inset_0_0_10px_rgba(0,0,0,0.05)]">
                        <span className="text-5xl font-black text-[#0B1A30]">{globalScore}</span>
                        <span className="text-xs font-bold text-slate-400 mt-1 border-t border-slate-200 w-12 pt-1">/100</span>
                    </div>
                  </div>
                  <p className="font-bold text-sm mb-1" style={{color: getScoreColor(globalScore)}}>{getScoreStatus(globalScore)} Business</p>
                  <p className="text-[10px] text-slate-500">Based on 28 core parameters</p>
              </div>
              
              <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                {kpis.map((kpi, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded-[16px] p-5 shadow-sm flex flex-col relative overflow-hidden group">
                        <div className="flex flex-col mb-4">
                            <div className="flex justify-between items-start mb-2">
                              <div className="w-10 h-10 rounded-full bg-[#0B1A30] flex items-center justify-center shrink-0">
                                  {kpi.icon}
                              </div>
                            </div>
                            <h3 className="text-[11px] font-bold text-slate-500 leading-tight h-8">{kpi.title}</h3>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-baseline gap-1">
                              <span className="text-3xl font-black" style={{ color: '#0B1A30' }}>{kpi.value.replace('/100','')}</span>
                              {kpi.value.includes('/100') && <span className="text-sm text-slate-500 font-bold">/100</span>}
                            </div>
                            {kpi.subtitle && <span className="block text-sm font-bold text-slate-700 mt-1">{kpi.subtitle}</span>}
                        </div>
                        <div className="h-8 w-full mb-3">
                          <svg width="100%" height="100%" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <path d={idx % 2 === 0 ? "M0,20 Q25,5 50,25 T100,10" : "M0,15 Q25,25 50,10 T100,20"} fill="none" stroke={kpi.color} strokeWidth="2" vectorEffect="non-scaling-stroke" />
                          </svg>
                        </div>
                        <div className="flex justify-between items-center mt-auto border-t border-slate-100 pt-3">
                            <span className={\`text-[10px] font-bold px-2 py-0.5 rounded-full text-white\`} style={{ backgroundColor: kpi.color }}>
                              {kpi.status}
                            </span>
                            <span className="text-[10px] font-bold text-slate-500">{kpi.trend}</span>
                        </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === '7_PILLAR' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-[#0B1A30] mb-2 tracking-tight">7-Pillar Analysis™</h2>
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                <div className="xl:col-span-5 bg-white border border-slate-200 rounded-[16px] p-6 shadow-sm flex flex-col">
                  <h3 className="text-sm font-bold text-[#0B1A30] mb-4">7 Pillar Performance Radar</h3>
                  <div className="flex gap-4 mb-2 justify-center">
                      <span className="text-[10px] font-semibold text-slate-600 flex items-center gap-1.5"><div className="w-4 h-0.5 bg-[#D4AF37]"></div> Your Score</span>
                      <span className="text-[10px] font-semibold text-slate-600 flex items-center gap-1.5"><div className="w-4 h-0.5 bg-slate-300"></div> Benchmark</span>
                  </div>
                  <div className="w-full aspect-square relative -ml-4 flex-1 min-h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                          <RadarChart cx="50%" cy="50%" outerRadius="65%" data={radarData}>
                              <PolarGrid stroke="#e2e8f0" />
                              <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 10, fontWeight: 500 }} />
                              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                              <Radar name="Industry" dataKey="fullMark" stroke="#cbd5e1" strokeWidth={1} fill="none" />
                              <Radar name="Your Score" dataKey="A" stroke="#D4AF37" strokeWidth={2} fill="#D4AF37" fillOpacity={0.1} />
                          </RadarChart>
                      </ResponsiveContainer>
                  </div>
                </div>
                <div className="xl:col-span-7 bg-white border border-slate-200 rounded-[16px] p-6 shadow-sm flex flex-col">
                    <h3 className="text-sm font-bold text-[#0B1A30] mb-8 border-b border-slate-100 pb-4">Business Health Snapshot</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 flex-1 content-start">
                        {pillarSnapshots.map((pillar, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                                <div className="text-slate-400 mb-2">
                                    <ArrowUpRight className="w-4 h-4 mx-auto mb-1" />
                                </div>
                                <span className="text-[11px] font-semibold text-[#0B1A30] leading-tight mb-4 h-8 flex items-center justify-center">{pillar.name}</span>
                                <div className="w-14 h-14 rounded-full border-4 flex items-center justify-center mb-4 relative" style={{ borderColor: \`\${pillar.color}30\` }}>
                                    <svg className="absolute inset-0 w-full h-full transform -rotate-90 p-0.5" viewBox="0 0 36 36">
                                        <path stroke={pillar.color} strokeDasharray={\`\${pillar.score}, 100\`} strokeWidth="3" fill="none" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <span className="text-lg font-black" style={{ color: pillar.color }}>{pillar.score}</span>
                                </div>
                                <span className={\`text-[10px] font-bold px-3 py-1 rounded-full text-white\`} style={{ backgroundColor: pillar.color }}>
                                  {pillar.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        )}

        {activeTab === 'ADVISORY' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-[#0B1A30] mb-2 tracking-tight">AI Growth Advisory™</h2>
            <div className="bg-[#0a1128] border-t-2 border-l-2 border-b-4 border-r-4 border-t-slate-700/50 border-l-slate-700/50 border-b-black border-r-black shadow-2xl rounded-[16px] p-8 text-white relative overflow-hidden">
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#d4af37]/10 blur-[80px] rounded-full pointer-events-none"></div>
                <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4 relative z-10">
                    <Cpu className="w-8 h-8 text-[#D4AF37]" /> 
                    <h3 className="text-xl font-black tracking-wide text-white uppercase">KRG ONE AI Growth Console</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-5 text-center border-r border-slate-800 pr-6">
                            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">AI Confidence Level</h4>
                            <div className="relative w-32 h-32 mx-auto flex items-center justify-center drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                    <path className="text-slate-800" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path stroke="#10B981" strokeDasharray={\`94, 100\`} strokeWidth="3" fill="none" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                </svg>
                                <div className="flex flex-col items-center">
                                    <span className="text-4xl font-black text-[#10B981]">94%</span>
                                </div>
                            </div>
                            <p className="text-[10px] text-slate-500 mt-6 uppercase tracking-wider font-mono bg-slate-900 py-1.5 rounded-lg border border-slate-800">Status: Optimized</p>
                        </div>

                        <div className="md:col-span-7 flex flex-col justify-center">
                            <h4 className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-widest mb-3 flex items-center gap-2">
                                <Zap className="w-3 h-3" /> Dynamic Prediction
                            </h4>
                            <div className="bg-black/40 border border-slate-800 p-4 rounded-xl mb-6 font-mono text-[11px] text-slate-300 leading-relaxed shadow-inner">
                              <span className="text-emerald-500 mr-2">></span&gt; ANALYSIS COMPLETE.<br/><br/>
                              <span className="text-emerald-500 mr-2">></span&gt; REVENUE LEAKAGE DETECTED IN OPERATIONS.<br/><br/>
                              <span className="text-emerald-500 mr-2">></span&gt; ADDRESSING BOTTLENECKS WILL UNLOCK SCALABILITY.
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                                    <span className="block text-[9px] text-slate-500 mb-1 uppercase font-bold tracking-wider">Revenue Potential</span>
                                    <span className="text-sm font-black text-[#10B981] tracking-tight">+20 – 30%</span>
                                </div>
                                <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                                    <span className="block text-[9px] text-slate-500 mb-1 uppercase font-bold tracking-wider">Profit Impact</span>
                                    <span className="text-sm font-black text-[#10B981] tracking-tight">+10 – 15%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 bg-slate-900/60 rounded-2xl p-6 border border-slate-800/80 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]">
                        <h4 className="text-[11px] font-bold text-amber-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Target className="w-4 h-4" /> Top 5 Action Items
                        </h4>
                        <ul className="space-y-5">
                            {[
                                'Build leadership systems & empower decision making',
                                'Standardize core processes and document SOPs',
                                'Improve sales execution and follow-up consistency',
                                'Strengthen customer retention and lifetime value',
                                'Implement automation in repetitive operational tasks'
                            ].map((rec, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="text-[#D4AF37] font-black text-xs font-mono mt-0.5 bg-[#D4AF37]/10 w-5 h-5 flex items-center justify-center rounded shrink-0">{i + 1}</span>
                                    <span className="text-xs text-slate-300 leading-snug font-medium">{rec}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        )}

        {activeTab === 'PLAN' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-[#0B1A30] mb-2 tracking-tight">90-Day Growth Plan</h2>
            <div className="bg-white border border-slate-200 rounded-[16px] p-8 shadow-sm">
                <div className="space-y-0">
                    <div className="flex gap-6 relative">
                        <div className="flex flex-col items-center relative z-10">
                            <div className="w-12 h-12 rounded-full bg-emerald-100 border-4 border-white flex items-center justify-center text-emerald-700 font-black text-sm shrink-0 shadow-sm">30</div>
                            <div className="w-0.5 h-full bg-slate-100 my-1 absolute top-12 bottom-[-16px]"></div>
                        </div>
                        <div className="pb-12 pt-2">
                            <h4 className="text-base font-bold text-[#0B1A30] mb-4">Phase 1: Stabilization & Systems (Days 1-30)</h4>
                            <ul className="space-y-4 text-sm text-slate-600 font-medium">
                              <li className="flex gap-3 items-start"><div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />Document core operating procedures for sales and delivery.</li>
                              <li className="flex gap-3 items-start"><div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />Establish weekly leadership accountability meetings.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="flex gap-6 relative">
                        <div className="flex flex-col items-center relative z-10">
                            <div className="w-12 h-12 rounded-full bg-blue-100 border-4 border-white flex items-center justify-center text-blue-700 font-black text-sm shrink-0 shadow-sm">60</div>
                            <div className="w-0.5 h-full bg-slate-100 my-1 absolute top-12 bottom-[-16px]"></div>
                        </div>
                        <div className="pb-12 pt-2">
                            <h4 className="text-base font-bold text-[#0B1A30] mb-4">Phase 2: Optimization (Days 31-60)</h4>
                            <ul className="space-y-4 text-sm text-slate-600 font-medium">
                              <li className="flex gap-3 items-start"><div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />Implement basic automation in repetitive operational tasks.</li>
                              <li className="flex gap-3 items-start"><div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />Train middle management on decision-making frameworks.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="flex gap-6 relative">
                        <div className="flex flex-col items-center relative z-10">
                            <div className="w-12 h-12 rounded-full bg-purple-100 border-4 border-white flex items-center justify-center text-purple-700 font-black text-sm shrink-0 shadow-sm">90</div>
                        </div>
                        <div className="pt-2">
                            <h4 className="text-base font-bold text-[#0B1A30] mb-4">Phase 3: Scale (Days 61-90)</h4>
                            <ul className="space-y-4 text-sm text-slate-600 font-medium">
                              <li className="flex gap-3 items-start"><div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />Launch new customer retention initiatives.</li>
                              <li className="flex gap-3 items-start"><div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />Review revenue growth metrics against targets.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )}

      </div>

      {/* COLUMN C: Right Sidebar */}
      <div className="bg-white border border-slate-200 p-6 flex flex-col md:col-span-3 h-[calc(100vh-3rem)] overflow-y-auto sticky top-6 hide-scrollbar shadow-xl rounded-[16px]">
        <h3 className="text-sm font-bold text-[#0B1A30] mb-8 pb-4 border-b border-slate-100 uppercase tracking-widest flex items-center gap-2">
          <User className="w-4 h-4 text-[#D4AF37]" /> User Profile
        </h3>
        
        <div className="space-y-6 flex-1">
            <div className="flex gap-4">
                <User className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                <div>
                    <span className="block text-[10px] text-slate-500 mb-1 uppercase tracking-wider font-bold">Full Name</span>
                    <span className="text-sm font-bold text-[#0B1A30]">{formData.fullName || 'Gajendra Kumar Sharma'}</span>
                </div>
            </div>
            
            <div className="flex gap-4">
                <Building2 className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                <div>
                    <span className="block text-[10px] text-slate-500 mb-1 uppercase tracking-wider font-bold">Company Name</span>
                    <span className="text-sm font-bold text-[#0B1A30]">{formData.companyName || 'ABC Manufacturing Pvt. Ltd.'}</span>
                </div>
            </div>
            
            <div className="flex gap-4">
                <Briefcase className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                <div>
                    <span className="block text-[10px] text-slate-500 mb-1 uppercase tracking-wider font-bold">Industry</span>
                    <span className="text-sm font-bold text-[#0B1A30]">{formData.industry || 'Manufacturing'}</span>
                </div>
            </div>
            
            <div className="flex gap-4">
                <Users className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                <div>
                    <span className="block text-[10px] text-slate-500 mb-1 uppercase tracking-wider font-bold">Employees</span>
                    <span className="text-sm font-bold text-[#0B1A30]">{formData.businessSize || '50 - 100'}</span>
                </div>
            </div>
            
            <div className="flex gap-4">
                <Phone className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                <div>
                    <span className="block text-[10px] text-slate-500 mb-1 uppercase tracking-wider font-bold">Mobile Number</span>
                    <span className="text-sm font-bold text-[#0B1A30]">{formData.mobile || '+91 9876543210'}</span>
                </div>
            </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6">
            <button className="w-full py-4 bg-[#D4AF37] text-[#0B1A30] font-bold text-sm rounded-xl hover:bg-[#c29e2f] transition-all text-center flex items-center justify-center gap-2 mb-3 shadow-lg shadow-[#D4AF37]/20 uppercase tracking-widest">
                Book Diagnostic Call →
            </button>
            <p className="text-[11px] text-center text-slate-500 font-bold uppercase tracking-widest">Special Rate: ₹1,499</p>
        </div>
      </div>
    </div>
  );
}
`

fs.writeFileSync('src/components/DashboardReport.tsx', content);
