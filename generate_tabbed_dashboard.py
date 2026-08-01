with open('src/components/DashboardReport.tsx', 'w') as f:
    f.write("""import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, User, Target, BarChart3, PieChart, LayoutGrid, 
  Lightbulb, Briefcase, TrendingUp, AlertTriangle, CheckCircle2, 
  ArrowRight, ShieldCheck, Download, Printer, Compass, 
  Activity, Star, Zap, Anchor, LineChart, ChevronRight, Settings,
  Clock, Calendar, Layers, Map
} from 'lucide-react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, 
  ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid
} from 'recharts';

interface DashboardReportProps {
  formData: any;
  scores: number[];
}

export default function DashboardReport({ formData, scores }: DashboardReportProps) {
  const [activeTab, setActiveTab] = useState('OVERVIEW');
  
  const pillars = [
    "Leadership & Vision",
    "Sales & Revenue",
    "Marketing & Customer Growth",
    "Operations & Process",
    "Finance & Business Performance",
    "People & Leadership",
    "Technology & Business Innovation"
  ];

  const getPillarScore = (pillarIdx: number): number => {
    const start = pillarIdx * 3;
    const total = (scores[start] || 0) + (scores[start+1] || 0) + (scores[start+2] || 0);
    return Math.round((total / 15) * 100);
  };

  const globalScore = Math.round(
    [0, 1, 2, 3, 4, 5, 6].reduce((acc, curr) => acc + getPillarScore(curr), 0) / 7
  );

  const getMaturityLevel = (score: number) => {
    if (score < 40) return "Critical";
    if (score < 60) return "Developing";
    if (score < 75) return "Stable";
    if (score < 90) return "Growing";
    return "High Performing";
  };

  const confidenceScore = (scores[21] || 0) * 20; 

  const radarData = pillars.map((name, i) => ({
    pillar: name.split(" & ")[0], 
    score: getPillarScore(i),
    industryAvg: 65,
  }));

  const sortedPillars = [...pillars].map((name, i) => ({ name, score: getPillarScore(i) }))
    .sort((a, b) => b.score - a.score);
  
  const topStrengths = sortedPillars.slice(0, 3);
  const improvementAreas = sortedPillars.slice(-3).reverse();

  const handlePrint = () => {
    window.print();
  };

  const projectionData = [
    { month: 'Current', revenue: 100, projected: 100 },
    { month: 'Month 1', revenue: 100, projected: 105 + (globalScore * 0.1) },
    { month: 'Month 2', revenue: 100, projected: 112 + (globalScore * 0.15) },
    { month: 'Month 3', revenue: 100, projected: 125 + (globalScore * 0.2) },
    { month: 'Month 6', revenue: 100, projected: 140 + (globalScore * 0.3) },
    { month: 'Month 12', revenue: 100, projected: 170 + (globalScore * 0.5) },
  ];

  const tabs = [
    { id: 'OVERVIEW', label: 'Executive Overview', icon: <LayoutGrid className="w-4 h-4" /> },
    { id: 'ANALYSIS', label: 'Diagnostic Analysis', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'ROADMAP', label: '90-Day Roadmap', icon: <Map className="w-4 h-4" /> },
    { id: 'AI_ADVISORY', label: 'AI Advisory', icon: <Zap className="w-4 h-4" /> },
    { id: 'PROJECTIONS', label: 'Growth Projections', icon: <LineChart className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-sans text-slate-800 flex flex-col md:flex-row">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex-shrink-0 sticky top-0 md:h-screen overflow-y-auto z-40 hidden md:flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#000080] to-[#000040] rounded-xl flex items-center justify-center shadow-md">
            <ShieldCheck className="text-white w-5 h-5" />
          </div>
          <div>
            <span className="font-black tracking-widest text-[#000080] block text-sm">KRG ONE</span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Intelligence</span>
          </div>
        </div>
        
        <div className="p-4 flex-grow">
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 pl-3">Dashboards</div>
          <nav className="space-y-1.5">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-[#000080]/5 text-[#000080] shadow-[inset_4px_0_0_#d4af37]' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                }`}
              >
                <span className={activeTab === tab.id ? 'text-[#d4af37]' : 'text-slate-400'}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
          
          <div className="mt-12 border-t border-slate-100 pt-6">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Prepared For</div>
              <div className="font-bold text-slate-800 text-sm truncate">{formData.companyName || 'Your Business'}</div>
              <div className="text-xs text-slate-500 mt-1 truncate">{formData.fullName || 'Executive'}</div>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-slate-100">
          <button onClick={handlePrint} className="w-full flex items-center justify-center gap-2 text-sm font-bold text-slate-600 bg-white border border-slate-200 px-4 py-2.5 rounded-xl hover:bg-slate-50 hover:text-[#000080] transition-colors shadow-sm">
            <Printer className="w-4 h-4" /> Export Report
          </button>
        </div>
      </aside>

      {/* Mobile Nav (Top) */}
      <div className="md:hidden bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="p-4 flex items-center justify-between">
           <div className="flex items-center gap-2">
            <ShieldCheck className="text-[#000080] w-6 h-6" />
            <span className="font-black tracking-widest text-[#000080]">KRG ONE</span>
          </div>
          <button onClick={handlePrint} className="text-slate-500">
            <Download className="w-5 h-5" />
          </button>
        </div>
        <div className="flex overflow-x-auto px-4 pb-3 gap-2 no-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                activeTab === tab.id ? 'bg-[#000080] text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-8 lg:p-10 max-w-[1200px] overflow-x-hidden">
        
        {/* Header Area */}
        <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Business Intelligence</h1>
            <p className="text-sm font-medium text-slate-500 mt-1 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
             <div className="flex flex-col text-right">
               <span className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Growth Score</span>
               <span className="text-xl font-black text-[#000080] leading-none">{globalScore}%</span>
             </div>
             <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border-4 border-slate-100 relative">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className={`${globalScore > 70 ? 'text-emerald-500' : globalScore > 40 ? 'text-amber-500' : 'text-rose-500'}`} strokeDasharray={`${globalScore}, 100`} strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
             </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'OVERVIEW' && (
            <motion.div 
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Snapshot Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Maturity Stage</span>
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Activity className="w-4 h-4" /></div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-800">{getMaturityLevel(globalScore)}</h3>
                  <p className="text-xs font-medium text-slate-500 mt-1">Based on 21 operational factors</p>
                </div>
                
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Readiness</span>
                    <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Target className="w-4 h-4" /></div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-800">{confidenceScore}%</h3>
                  <p className="text-xs font-medium text-slate-500 mt-1">Goal achievement confidence</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Top Pillar</span>
                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><TrendingUp className="w-4 h-4" /></div>
                  </div>
                  <h3 className="text-base font-black text-slate-800 truncate">{topStrengths[0]?.name || 'N/A'}</h3>
                  <p className="text-xs font-medium text-emerald-600 mt-1">Leading growth driver</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Vulnerability</span>
                    <div className="p-2 bg-rose-50 text-rose-600 rounded-lg"><AlertTriangle className="w-4 h-4" /></div>
                  </div>
                  <h3 className="text-base font-black text-slate-800 truncate">{improvementAreas[0]?.name || 'N/A'}</h3>
                  <p className="text-xs font-medium text-rose-500 mt-1">Requires immediate action</p>
                </div>
              </div>

              {/* Main Summary & Profile Split */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
                  
                  <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2 relative z-10">
                    <Star className="w-5 h-5 text-[#d4af37]" /> Executive Summary
                  </h3>
                  
                  <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed relative z-10 font-medium">
                    <p>
                      Based on the diagnostic parameters evaluated, <strong className="text-slate-900">{formData.companyName || "the organization"}</strong> is currently positioned at a <strong className="text-[#000080]">{getMaturityLevel(globalScore)}</strong> stage with an Overall Business Growth Score™ of <strong className="text-[#000080]">{globalScore}%</strong>. 
                    </p>
                    <p>
                      The primary growth outlook suggests substantial upside potential if foundational operational systems are fortified. The biggest opportunity lies in scaling <strong className="text-slate-900">{topStrengths[0]?.name || 'Operations'}</strong>, where existing capabilities can be leveraged for market advantage. 
                    </p>
                    <div className="p-4 bg-rose-50 border-l-2 border-rose-400 rounded-r-xl mt-4">
                      <p className="text-rose-800 text-sm">
                        <strong className="block mb-1">Critical Constraint:</strong>
                        The most critical concern is identified within <strong>{improvementAreas[0]?.name || 'Finance'}</strong>, which currently poses a structural risk to sustainable expansion. Immediate stabilization is recommended.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                  <h3 className="text-base font-black text-slate-900 mb-6 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-slate-400" /> Business Profile
                  </h3>
                  
                  <div className="space-y-5">
                    <div>
                      <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Industry</div>
                      <div className="text-sm font-bold text-slate-800">{formData.industry || 'Not specified'}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Scale</div>
                      <div className="text-sm font-bold text-slate-800">{formData.businessSize || 'N/A'} Employees</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Revenue Stage</div>
                      <div className="text-sm font-bold text-slate-800">{formData.revenue || 'Not disclosed'}</div>
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                      <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Primary Objective</div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm font-bold text-[#000080]">
                        {formData.goal || 'Sustainable growth and optimization'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: ANALYSIS */}
          {activeTab === 'ANALYSIS' && (
            <motion.div
              key="analysis"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Radar Chart Card */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col">
                  <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center gap-2">
                    <Compass className="w-5 h-5 text-[#d4af37]" /> Operational Balance
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">Visual mapping of capabilities against industry average.</p>
                  
                  <div className="flex-grow w-full min-h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                        <PolarGrid stroke="#f1f5f9" />
                        <PolarAngleAxis dataKey="pillar" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 600 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar name="Your Score" dataKey="score" stroke="#000080" strokeWidth={3} fill="#000080" fillOpacity={0.15} />
                        <Radar name="Industry Average" dataKey="industryAvg" stroke="#cbd5e1" strokeDasharray="4 4" fill="transparent" strokeWidth={2} />
                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2"><span className="w-3 h-3 bg-[#000080] rounded-sm"></span><span className="text-xs font-bold text-slate-600">Your Score</span></div>
                    <div className="flex items-center gap-2"><span className="w-3 h-3 border-2 border-[#cbd5e1] border-dashed rounded-sm"></span><span className="text-xs font-bold text-slate-600">Industry Avg</span></div>
                  </div>
                </div>

                {/* Pillar Performance List */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                  <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[#d4af37]" /> Detail by Pillar
                  </h3>
                  
                  <div className="space-y-5">
                    {pillars.map((pillar, i) => {
                      const score = getPillarScore(i);
                      return (
                        <div key={i} className="group">
                          <div className="flex justify-between items-end mb-1.5">
                            <span className="text-sm font-bold text-slate-700">{pillar}</span>
                            <span className="text-sm font-black text-[#000080]">{score}%</span>
                          </div>
                          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${score}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className={`h-full ${score >= 75 ? 'bg-emerald-400' : score >= 50 ? 'bg-amber-400' : 'bg-rose-400'}`} 
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Priority Matrix */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
                  <LayoutGrid className="w-5 h-5 text-[#d4af37]" /> Growth Priority Matrix
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-rose-50/50 border border-rose-100 p-5 rounded-2xl transition-all hover:shadow-md hover:bg-rose-50">
                    <h4 className="text-xs font-black uppercase tracking-widest text-rose-800 mb-3 flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-rose-500"></div> High Impact / Urgent
                    </h4>
                    <ul className="space-y-3">
                      <li className="text-sm font-bold text-slate-700">{improvementAreas[0]?.name || 'N/A'} Structuring</li>
                      <li className="text-sm font-bold text-slate-700">Immediate Risk Mitigation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50/50 border border-amber-100 p-5 rounded-2xl transition-all hover:shadow-md hover:bg-amber-50">
                    <h4 className="text-xs font-black uppercase tracking-widest text-amber-800 mb-3 flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div> High Impact / Strategic
                    </h4>
                    <ul className="space-y-3">
                      <li className="text-sm font-bold text-slate-700">{improvementAreas[1]?.name || 'N/A'} Optimization</li>
                      <li className="text-sm font-bold text-slate-700">Cross-team Alignment</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl transition-all hover:shadow-md hover:bg-blue-50">
                    <h4 className="text-xs font-black uppercase tracking-widest text-blue-800 mb-3 flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div> Medium Priority
                    </h4>
                    <ul className="space-y-3">
                      <li className="text-sm font-bold text-slate-700">{topStrengths[1]?.name || 'N/A'} Enhancement</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl transition-all hover:shadow-md hover:bg-white">
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-600 mb-3 flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-slate-400"></div> Monitor & Maintain
                    </h4>
                    <ul className="space-y-3">
                      <li className="text-sm font-bold text-slate-700">{topStrengths[0]?.name || 'N/A'} Continuity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: ROADMAP */}
          {activeTab === 'ROADMAP' && (
            <motion.div
              key="roadmap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <div className="max-w-2xl mb-10">
                  <h3 className="text-2xl font-black text-[#000080] mb-3">90-Day Execution Roadmap</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    A phased, strategic approach designed to stabilize critical vulnerabilities and accelerate your core competencies to achieve: <strong className="text-slate-800">{formData.goal || 'sustainable expansion'}</strong>.
                  </p>
                </div>

                <div className="relative border-l-2 border-slate-100 ml-4 md:ml-8 space-y-12 pb-4">
                  {/* Phase 1 */}
                  <div className="relative pl-8 md:pl-12 group">
                    <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-white border-4 border-[#000080] shadow-[0_0_0_4px_rgba(0,0,128,0.05)] transition-all group-hover:scale-110"></div>
                    <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 transition-all group-hover:shadow-lg group-hover:bg-white group-hover:border-[#000080]/10">
                      <span className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest block mb-2">Days 1 - 30</span>
                      <h4 className="text-lg font-black text-slate-900 mb-4">Foundation & Stabilization</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="text-xs font-bold uppercase text-slate-400 mb-1">Focus</div>
                          <p className="text-sm font-medium text-slate-700">Resolve immediate bottlenecks in <strong className="text-[#000080]">{improvementAreas[0]?.name}</strong>.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <div>
                              <span className="text-[10px] font-bold uppercase text-slate-400 block">Milestone</span>
                              <span className="text-xs font-bold text-slate-800">Operational baseline documented and secured.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="relative pl-8 md:pl-12 group">
                    <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-white border-4 border-slate-300 transition-all group-hover:scale-110 group-hover:border-[#000080]"></div>
                    <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 transition-all group-hover:shadow-lg group-hover:bg-white group-hover:border-[#000080]/10">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Days 31 - 60</span>
                      <h4 className="text-lg font-black text-slate-900 mb-4">Integration & Optimization</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="text-xs font-bold uppercase text-slate-400 mb-1">Focus</div>
                          <p className="text-sm font-medium text-slate-700">Align team execution and deploy metrics tracking for <strong className="text-[#000080]">{improvementAreas[1]?.name}</strong>.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <div>
                              <span className="text-[10px] font-bold uppercase text-slate-400 block">Milestone</span>
                              <span className="text-xs font-bold text-slate-800">15% improvement in process efficiency.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="relative pl-8 md:pl-12 group">
                    <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-white border-4 border-slate-300 transition-all group-hover:scale-110 group-hover:border-[#000080]"></div>
                    <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 transition-all group-hover:shadow-lg group-hover:bg-white group-hover:border-[#000080]/10">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Days 61 - 90</span>
                      <h4 className="text-lg font-black text-slate-900 mb-4">Scale & Accelerate</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="text-xs font-bold uppercase text-slate-400 mb-1">Focus</div>
                          <p className="text-sm font-medium text-slate-700">Leverage <strong className="text-[#000080]">{topStrengths[0]?.name}</strong> to aggressively drive new revenue opportunities.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <div>
                              <span className="text-[10px] font-bold uppercase text-slate-400 block">Milestone</span>
                              <span className="text-xs font-bold text-slate-800">Measurable margin expansion.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: AI ADVISORY */}
          {activeTab === 'AI_ADVISORY' && (
            <motion.div
              key="advisory"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-[#000080] to-[#000040] rounded-3xl p-8 md:p-10 shadow-lg text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/20 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3"></div>
                
                <h3 className="text-xl font-black text-[#d4af37] mb-4 flex items-center gap-2 relative z-10">
                  <Zap className="w-5 h-5"/> AI Executive Observation
                </h3>
                
                <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed relative z-10 max-w-3xl">
                  Operating within the {formData.industry || "current"} sector at your scale, achieving your goal requires a fundamental shift from operator-led activity to system-led growth. Your score of {globalScore}% indicates that while core competencies exist, execution inconsistencies in <strong className="text-white">{improvementAreas[0]?.name}</strong> are actively suppressing profitability.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-4">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-black text-slate-900 mb-2">Immediate Risk</h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Lack of standardized protocols in {improvementAreas[0]?.name} is causing revenue leakage and limiting scalability.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-black text-slate-900 mb-2">Hidden Advantage</h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Your capability in {topStrengths[0]?.name} is currently underutilized and could be leveraged for rapid market differentiation.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-black text-slate-900 mb-2">Next Step Action</h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Schedule an executive sync this week to align leadership on the immediate Q3 stabilization targets.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center mt-8">
                 <h3 className="text-2xl font-black text-slate-900 mb-3">Translate Insights into Action</h3>
                 <p className="text-slate-500 font-medium mb-8 max-w-xl mx-auto">
                   Book a 60-90 minute Live Business Growth Diagnostic™ with an executive consultant to customize this roadmap to your exact scenario.
                 </p>
                 <button onClick={() => alert("Redirecting to checkout...")} className="bg-[#000080] text-white px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-[#000050] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                   Book Live Diagnostic
                 </button>
              </div>
            </motion.div>
          )}

          {/* TAB 5: PROJECTIONS (New "Next Level" Section) */}
          {activeTab === 'PROJECTIONS' && (
            <motion.div
              key="projections"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10">
                  <div className="max-w-xl">
                    <h3 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-emerald-500" /> Revenue Trajectory Model
                    </h3>
                    <p className="text-sm text-slate-500 font-medium">
                      Simulated growth compounding based on successfully implementing the 90-day roadmap and stabilizing current vulnerabilities. Baseline indexed at 100.
                    </p>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 text-center">
                      <div className="text-[10px] font-black uppercase text-slate-400 mb-1">Status Quo</div>
                      <div className="font-bold text-slate-700">Stagnant</div>
                    </div>
                    <div className="bg-emerald-50 px-4 py-3 rounded-xl border border-emerald-100 text-center">
                      <div className="text-[10px] font-black uppercase text-emerald-600 mb-1">Optimized</div>
                      <div className="font-bold text-emerald-700">+{Math.round((globalScore * 0.5))}%</div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={projectionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorBaseline" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 500 }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}
                        formatter={(value: number, name: string) => [`Index: ${Math.round(value)}`, name === 'projected' ? 'Optimized Path' : 'Status Quo']}
                      />
                      <Area type="monotone" dataKey="revenue" stroke="#94a3b8" strokeWidth={2} fillOpacity={1} fill="url(#colorBaseline)" />
                      <Area type="monotone" dataKey="projected" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorProjected)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}
"""
