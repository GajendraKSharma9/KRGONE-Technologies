with open('src/components/DashboardReport.tsx', 'w') as f:
    f.write("""import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, User, Target, BarChart3, PieChart, LayoutGrid, 
  Lightbulb, Briefcase, TrendingUp, AlertTriangle, CheckCircle2, 
  ArrowRight, ShieldCheck, Download, Printer, Compass, 
  Activity, Star, Zap, Anchor, LineChart, ChevronRight, Settings,
  Clock, Calendar, Layers, Map, Network, Users, DollarSign,
  FileText, ChevronDown, ChevronUp, Check, Award, ZapIcon, Sparkles
} from 'lucide-react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, 
  ResponsiveContainer, Tooltip as RechartsTooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid,
  BarChart, Bar, Legend, Cell
} from 'recharts';

interface DashboardReportProps {
  formData: any;
  scores: number[];
}

export default function DashboardReport({ formData, scores }: DashboardReportProps) {
  const [activeTab, setActiveTab] = useState('OVERVIEW');
  const [expandedPillar, setExpandedPillar] = useState<number | null>(0);
  
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

  const getScoreColor = (score: number) => {
    if (score >= 90) return "#16A34A"; // Green
    if (score >= 75) return "#22C55E"; // Light Green
    if (score >= 60) return "#F59E0B"; // Amber
    if (score >= 40) return "#F97316"; // Orange
    return "#DC2626"; // Red
  };

  const confidenceScore = (scores[21] || 0) * 20; 

  const radarData = pillars.map((name, i) => ({
    pillar: name.split(" & ")[0], 
    score: getPillarScore(i),
    industryAvg: 65,
    target: 90
  }));

  const sortedPillars = [...pillars].map((name, i) => ({ name, score: getPillarScore(i), idx: i }))
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
    { id: '7_PILLARS', label: '7 Pillar Analysis', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'OPPORTUNITIES', label: 'Growth Opportunities', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'AI_ADVISORY', label: 'AI Growth Advisory™', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'ROADMAP', label: '90-Day Growth Plan', icon: <Map className="w-4 h-4" /> },
  ];

  const companyName = formData.companyName || "Your Business";
  const industry = formData.industry || "your industry";

  return (
    <div className="bg-[#F7F8FA] min-h-screen font-sans text-slate-800 flex flex-col md:flex-row animate-in fade-in duration-1000">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex-shrink-0 sticky top-0 md:h-screen overflow-y-auto z-40 hidden md:flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] print:hidden">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0B2545] rounded-xl flex items-center justify-center shadow-md">
            <ShieldCheck className="text-[#D4AF37] w-6 h-6" />
          </div>
          <div>
            <span className="font-black tracking-widest text-[#0B2545] block text-sm">KRG ONE</span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Intelligence</span>
          </div>
        </div>
        
        <div className="p-4 flex-grow">
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 pl-3">Dashboards</div>
          <nav className="space-y-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-[#0B2545] text-white shadow-[0_4px_12px_rgba(11,37,69,0.2)]' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-[#0B2545]'
                }`}
              >
                <span className={activeTab === tab.id ? 'text-[#D4AF37]' : 'text-slate-400'}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
          
          <div className="mt-12 border-t border-slate-100 pt-6">
            <div className="bg-slate-50 rounded-[16px] p-5 border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Prepared For</div>
              <div className="font-bold text-[#0B2545] text-sm truncate">{companyName}</div>
              <div className="text-xs text-slate-500 mt-1 truncate">{formData.fullName || 'Executive'}</div>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-slate-100">
          <button onClick={handlePrint} className="w-full flex items-center justify-center gap-2 text-sm font-bold text-white bg-[#0B2545] px-4 py-3 rounded-[12px] hover:bg-[#081a30] transition-colors shadow-md">
            <Printer className="w-4 h-4 text-[#D4AF37]" /> Export Report
          </button>
        </div>
      </aside>

      {/* Mobile Nav (Top) */}
      <div className="md:hidden bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm print:hidden">
        <div className="p-4 flex items-center justify-between">
           <div className="flex items-center gap-2">
            <ShieldCheck className="text-[#0B2545] w-6 h-6" />
            <span className="font-black tracking-widest text-[#0B2545]">KRG ONE</span>
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
                activeTab === tab.id ? 'bg-[#0B2545] text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-8 lg:p-10 max-w-[1400px] overflow-x-hidden print:w-full print:max-w-none print:p-0">
        
        {/* Header Area */}
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 print:mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-[#0B2545] tracking-tight">Business Growth Intelligence™</h1>
            <p className="text-sm font-medium text-slate-500 mt-2 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Generated for {companyName} • {new Date().toLocaleDateString()}
            </p>
          </div>
        </header>

        <AnimatePresence mode="wait">
          
          {/* TAB 1: OVERVIEW */}
          {(activeTab === 'OVERVIEW' || true) && ( 
            <motion.div 
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`space-y-8 ${activeTab !== 'OVERVIEW' ? 'hidden print:block' : 'print:block'}`}
            >
              {/* Executive Hero Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Growth Score Card - Circular */}
                <div className="bg-white p-6 rounded-[20px] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] print:shadow-none print:border-slate-300 flex flex-col items-center justify-center relative overflow-hidden transition-transform hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0B2545]/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/4"></div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Business Growth Score™</h3>
                  <div className="relative w-32 h-32 flex items-center justify-center mb-2">
                     <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                       <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                       <path stroke={getScoreColor(globalScore)} strokeDasharray={`${globalScore}, 100`} strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                     </svg>
                     <span className="text-4xl font-black text-[#0B2545]">{globalScore}</span>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-sm font-bold" style={{ color: getScoreColor(globalScore) }}>
                    {getMaturityLevel(globalScore)}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-[20px] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] print:shadow-none print:border-slate-300 transition-transform hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">Revenue Opportunity</span>
                      <div className="p-2 bg-[#16A34A]/10 text-[#16A34A] rounded-[10px]"><TrendingUp className="w-5 h-5" /></div>
                    </div>
                    <h3 className="text-3xl font-black text-[#0B2545] mb-1">High</h3>
                    <div className="flex items-center gap-1 text-[#D4AF37]">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 text-slate-200" />
                    </div>
                  </div>
                  <p className="text-sm font-medium text-slate-500 mt-4 border-t border-slate-100 pt-4">Substantial upside in scaling {topStrengths[0]?.name || 'Operations'}.</p>
                </div>

                <div className="bg-white p-6 rounded-[20px] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] print:shadow-none print:border-slate-300 transition-transform hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">Growth Readiness</span>
                      <div className="p-2 bg-[#2563EB]/10 text-[#2563EB] rounded-[10px]"><Target className="w-5 h-5" /></div>
                    </div>
                    <h3 className="text-3xl font-black text-[#0B2545] mb-1">{confidenceScore}%</h3>
                    <p className="text-sm font-bold text-slate-600">Goal achievement confidence</p>
                  </div>
                  <p className="text-sm font-medium text-slate-500 mt-4 border-t border-slate-100 pt-4">Based on current structural alignment.</p>
                </div>

                <div className="bg-white p-6 rounded-[20px] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] print:shadow-none print:border-slate-300 transition-transform hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">Immediate Priority</span>
                      <div className="p-2 bg-[#DC2626]/10 text-[#DC2626] rounded-[10px]"><AlertTriangle className="w-5 h-5" /></div>
                    </div>
                    <h3 className="text-xl font-black text-[#0B2545] leading-tight mb-1">{improvementAreas[0]?.name || 'N/A'}</h3>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#DC2626]/10 text-[#DC2626] text-xs font-bold mt-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse"></div> Critical Risk
                    </div>
                  </div>
                  <p className="text-sm font-medium text-slate-500 mt-4 border-t border-slate-100 pt-4">Requires stabilization in next 30 days.</p>
                </div>
              </div>

              {/* Executive Summary & Profile Split */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <div className="lg:col-span-2 bg-white rounded-[24px] border border-slate-100 p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden print:shadow-none print:border-slate-300">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#0B2545]/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
                  
                  <h3 className="text-2xl font-black text-[#0B2545] mb-8 flex items-center gap-3 relative z-10">
                    <FileText className="w-6 h-6 text-[#D4AF37]" /> Executive Summary
                  </h3>
                  
                  <div className="space-y-6 text-slate-600 text-[15px] leading-relaxed relative z-10">
                    <div className="space-y-4">
                      <h4 className="text-sm font-black uppercase tracking-widest text-[#0B2545]">Current Business Position</h4>
                      <p>
                        Based on our comprehensive 7-pillar diagnostic, <strong>{companyName}</strong> is operating at a <strong style={{ color: getScoreColor(globalScore) }}>{getMaturityLevel(globalScore)}</strong> maturity level with an Overall Business Growth Score™ of <strong>{globalScore}%</strong>. Within the {industry} sector, this indicates a business that has established core competencies but is experiencing friction in scaling operations predictably. The current configuration suggests that while top-line revenue may be functional, bottom-line profitability and operational efficiency are likely constrained by manual dependencies and misaligned systems.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-sm font-black uppercase tracking-widest text-[#0B2545]">Strategic Strengths & Bottlenecks</h4>
                      <p>
                        Your primary operational advantage lies in <strong>{topStrengths[0]?.name}</strong> (Scoring {topStrengths[0]?.score}%), demonstrating a strong foundation that can be leveraged for market differentiation. However, this advantage is being actively neutralized by systemic vulnerabilities in <strong>{improvementAreas[0]?.name}</strong> (Scoring {improvementAreas[0]?.score}%). This critical gap creates a "growth ceiling"—meaning any new revenue generated will likely increase operational chaos rather than proportional profit margins. 
                      </p>
                    </div>
                    
                    <div className="bg-[#F7F8FA] p-6 rounded-[16px] border-l-4 border-[#0B2545]">
                      <h4 className="text-sm font-black uppercase tracking-widest text-[#0B2545] mb-3">Executive Recommendation</h4>
                      <p className="text-[#0B2545] font-medium">
                        To achieve your stated objective of <strong>"{formData.goal || 'Sustainable growth and optimization'}"</strong>, immediate leadership focus must shift away from localized problem-solving towards structural fortification. We recommend a 90-day stabilization phase targeting {improvementAreas[0]?.name}, followed by aggressive scaling of your {topStrengths[0]?.name} capabilities. Failure to address these operational leaks prior to scaling will compound existing risks and diminish long-term enterprise value.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-[24px] border border-slate-100 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] print:shadow-none print:border-slate-300">
                  <h3 className="text-xl font-black text-[#0B2545] mb-8 flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-[#D4AF37]" /> Business Profile
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1.5">Executive Owner</div>
                      <div className="text-base font-bold text-[#0B2545]">{formData.fullName || 'Not specified'}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1.5">Company Name</div>
                      <div className="text-base font-bold text-[#0B2545]">{companyName}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1.5">Industry</div>
                        <div className="text-sm font-bold text-[#0B2545]">{industry}</div>
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1.5">Scale</div>
                        <div className="text-sm font-bold text-[#0B2545]">{formData.businessSize || 'N/A'}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1.5">Revenue Stage</div>
                      <div className="text-sm font-bold text-[#0B2545] bg-[#F7F8FA] px-3 py-1.5 rounded-lg inline-block">{formData.revenue || 'Not disclosed'}</div>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100">
                      <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Primary Objective</div>
                      <div className="bg-[#0B2545]/5 p-4 rounded-[12px] border border-[#0B2545]/10 text-sm font-bold text-[#0B2545]">
                        {formData.goal || 'Sustainable growth and optimization'}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Key Challenges</div>
                      <div className="bg-[#DC2626]/5 p-4 rounded-[12px] border border-[#DC2626]/10 text-sm font-bold text-[#DC2626]">
                        {formData.challenges && formData.challenges.length > 0 ? formData.challenges.join(', ') : 'Identifying operational bottlenecks'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: 7 PILLARS */}
          {(activeTab === '7_PILLARS' || true) && (
            <motion.div
              key="7_pillars"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`space-y-8 ${activeTab !== '7_PILLARS' ? 'hidden print:block print:mt-12' : 'print:mt-12'}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Radar Chart Card */}
                <div className="lg:col-span-1 bg-white rounded-[24px] border border-slate-100 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col print:shadow-none print:border-slate-300">
                  <h3 className="text-xl font-black text-[#0B2545] mb-2 flex items-center gap-3">
                    <Compass className="w-5 h-5 text-[#D4AF37]" /> Diagnostics Map
                  </h3>
                  <p className="text-sm text-slate-500 mb-8 font-medium">Visual mapping of your 7 business capabilities against industry benchmark targets.</p>
                  
                  <div className="flex-grow w-full min-h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                        <PolarGrid stroke="#F7F8FA" strokeWidth={2} />
                        <PolarAngleAxis dataKey="pillar" tick={{ fill: '#0B2545', fontSize: 11, fontWeight: 700 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar name="Your Score" dataKey="score" stroke="#0B2545" strokeWidth={3} fill="#0B2545" fillOpacity={0.15} />
                        <Radar name="Industry Target" dataKey="target" stroke="#D4AF37" strokeDasharray="5 5" fill="transparent" strokeWidth={2} />
                        <RechartsTooltip 
                          contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
                          itemStyle={{ fontWeight: 700 }}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2"><span className="w-3 h-3 bg-[#0B2545] rounded-sm"></span><span className="text-xs font-bold text-slate-600">Your Score</span></div>
                    <div className="flex items-center gap-2"><span className="w-3 h-3 border-2 border-[#D4AF37] border-dashed rounded-sm"></span><span className="text-xs font-bold text-slate-600">Benchmark</span></div>
                  </div>
                </div>

                {/* Pillar Deep Dive List */}
                <div className="lg:col-span-2 space-y-4">
                   <h3 className="text-xl font-black text-[#0B2545] mb-2 px-2">Detailed Pillar Analysis</h3>
                   <p className="text-sm text-slate-500 mb-6 font-medium px-2">Expand each section for deep-dive executive observations and strategic recommendations.</p>
                   
                   {sortedPillars.map((pillar) => {
                     const isExpanded = expandedPillar === pillar.idx;
                     const scoreColor = getScoreColor(pillar.score);
                     const isCritical = pillar.score < 50;
                     
                     return (
                       <div key={pillar.idx} className={`bg-white rounded-[20px] border ${isExpanded ? 'border-[#0B2545]/20 shadow-[0_8px_30px_rgba(0,0,0,0.06)]' : 'border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.02)]'} overflow-hidden transition-all duration-300`}>
                         <button 
                           onClick={() => setExpandedPillar(isExpanded ? null : pillar.idx)}
                           className="w-full px-6 py-5 flex items-center justify-between focus:outline-none hover:bg-slate-50/50"
                         >
                           <div className="flex items-center gap-4">
                             <div className="w-12 h-12 rounded-[12px] flex items-center justify-center font-black text-lg" style={{ backgroundColor: `${scoreColor}15`, color: scoreColor }}>
                               {pillar.score}
                             </div>
                             <div className="text-left">
                               <h4 className="text-base font-black text-[#0B2545]">{pillar.name}</h4>
                               <div className="flex items-center gap-3 mt-1">
                                 <span className="text-xs font-bold uppercase tracking-wider" style={{ color: scoreColor }}>
                                   {pillar.score >= 75 ? 'Leading' : pillar.score >= 50 ? 'Developing' : 'Critical Risk'}
                                 </span>
                                 {isCritical && (
                                   <span className="flex items-center gap-1 text-[10px] font-bold text-[#DC2626] bg-[#DC2626]/10 px-2 py-0.5 rounded-md">
                                     <AlertTriangle className="w-3 h-3" /> Urgent
                                   </span>
                                 )}
                               </div>
                             </div>
                           </div>
                           <div className="flex items-center gap-4">
                             <div className="hidden md:block w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                               <div className="h-full rounded-full" style={{ width: `${pillar.score}%`, backgroundColor: scoreColor }}></div>
                             </div>
                             {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                           </div>
                         </button>
                         
                         <AnimatePresence>
                           {isExpanded && (
                             <motion.div
                               initial={{ height: 0, opacity: 0 }}
                               animate={{ height: 'auto', opacity: 1 }}
                               exit={{ height: 0, opacity: 0 }}
                               transition={{ duration: 0.3 }}
                               className="border-t border-slate-100 bg-[#F7F8FA]/50"
                             >
                               <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                 <div className="space-y-6">
                                   <div>
                                     <h5 className="text-[11px] font-black uppercase text-slate-400 tracking-widest mb-2">Executive Observation</h5>
                                     <p className="text-sm font-medium text-slate-700 leading-relaxed">
                                       {pillar.score >= 75 
                                         ? `Your capability in ${pillar.name} demonstrates high maturity. The systems and processes here are functioning as a strategic advantage for ${companyName}. The focus should shift from building to optimizing and leveraging this strength to pull other weaker areas forward.`
                                         : pillar.score >= 50
                                         ? `Performance in ${pillar.name} is functional but inconsistent. While basic operations exist, they lack the robust systematization required for scale. You are heavily reliant on manual intervention, which will break under rapid growth.`
                                         : `Critical vulnerability detected in ${pillar.name}. The current state presents immediate commercial risk. Without foundational restructuring, this area will actively block your ability to achieve your goal of "${formData.goal}".`}
                                     </p>
                                   </div>
                                   <div>
                                     <h5 className="text-[11px] font-black uppercase text-slate-400 tracking-widest mb-2">Business Impact</h5>
                                     <div className="bg-white p-4 rounded-[12px] border border-slate-100 shadow-sm text-sm font-medium text-slate-600">
                                       {isCritical 
                                         ? "Direct loss of revenue potential, high operational friction, and increased executive fatigue."
                                         : "Moderate inefficiencies causing margin compression and delayed strategic execution."}
                                     </div>
                                   </div>
                                 </div>
                                 
                                 <div className="space-y-6">
                                   <div className="bg-[#2563EB]/5 border border-[#2563EB]/10 rounded-[16px] p-5">
                                     <h5 className="text-[11px] font-black uppercase text-[#2563EB] tracking-widest mb-3 flex items-center gap-1.5">
                                       <Sparkles className="w-3.5 h-3.5" /> AI Recommendation
                                     </h5>
                                     <p className="text-sm font-bold text-[#0B2545] leading-relaxed mb-4">
                                       {isCritical 
                                         ? `Implement an immediate 30-day turnaround protocol for ${pillar.name}. Audit all existing workflows, remove bottlenecks, and establish rigid KPIs.`
                                         : `Standardize the top 20% of activities driving 80% of results in ${pillar.name}. Introduce automation where applicable to free up capacity.`}
                                     </p>
                                     <div className="flex items-center gap-4 border-t border-[#2563EB]/10 pt-3">
                                       <div>
                                         <span className="text-[10px] uppercase text-slate-500 font-bold block">Effort</span>
                                         <span className="text-xs font-black text-[#0B2545]">{isCritical ? 'High' : 'Medium'}</span>
                                       </div>
                                       <div>
                                         <span className="text-[10px] uppercase text-slate-500 font-bold block">Expected ROI</span>
                                         <span className="text-xs font-black text-[#16A34A]">{isCritical ? 'Transformative' : 'Incremental'}</span>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </motion.div>
                           )}
                         </AnimatePresence>
                       </div>
                     );
                   })}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: OPPORTUNITIES */}
          {(activeTab === 'OPPORTUNITIES' || true) && (
            <motion.div
              key="opportunities"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`space-y-8 ${activeTab !== 'OPPORTUNITIES' ? 'hidden print:block print:mt-12' : 'print:mt-12'}`}
            >
              <div className="bg-white rounded-[24px] border border-slate-100 p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] print:shadow-none print:border-slate-300">
                <div className="max-w-3xl mb-10">
                  <h3 className="text-3xl font-black text-[#0B2545] mb-4 flex items-center gap-3">
                    <TrendingUp className="w-7 h-7 text-[#D4AF37]" /> Value Creation Opportunities
                  </h3>
                  <p className="text-base text-slate-600 font-medium leading-relaxed">
                    Based on your diagnostic profile, we have quantified specific areas where operational optimization will directly translate into commercial value for <strong>{companyName}</strong>. 
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#F7F8FA] rounded-[20px] p-6 border border-slate-100 hover:border-[#D4AF37]/50 transition-colors">
                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-6">
                      <DollarSign className="w-6 h-6 text-[#16A34A]" />
                    </div>
                    <h4 className="text-lg font-black text-[#0B2545] mb-2">Revenue Velocity</h4>
                    <p className="text-sm font-medium text-slate-600 mb-6 line-clamp-3">
                      By resolving friction in {improvementAreas[0]?.name}, you can accelerate your sales cycle and improve conversion rates without increasing marketing spend.
                    </p>
                    <div className="bg-white p-3 rounded-[12px] border border-slate-100">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Impact Potential</span>
                      <span className="text-sm font-black text-[#16A34A]">High Commercial Value</span>
                    </div>
                  </div>

                  <div className="bg-[#F7F8FA] rounded-[20px] p-6 border border-slate-100 hover:border-[#D4AF37]/50 transition-colors">
                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-6">
                      <Users className="w-6 h-6 text-[#2563EB]" />
                    </div>
                    <h4 className="text-lg font-black text-[#0B2545] mb-2">Operational Leverage</h4>
                    <p className="text-sm font-medium text-slate-600 mb-6 line-clamp-3">
                      Standardizing processes within {improvementAreas[1]?.name || 'Operations'} will decouple your revenue growth from headcount growth, dramatically improving profit margins.
                    </p>
                    <div className="bg-white p-3 rounded-[12px] border border-slate-100">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Impact Potential</span>
                      <span className="text-sm font-black text-[#2563EB]">Margin Expansion</span>
                    </div>
                  </div>

                  <div className="bg-[#F7F8FA] rounded-[20px] p-6 border border-slate-100 hover:border-[#D4AF37]/50 transition-colors">
                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-6">
                      <Building2 className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <h4 className="text-lg font-black text-[#0B2545] mb-2">Enterprise Valuation</h4>
                    <p className="text-sm font-medium text-slate-600 mb-6 line-clamp-3">
                      Transitioning from a founder-dependent model to a systematized operation ({topStrengths[0]?.name}) instantly increases the transferable value of the organization.
                    </p>
                    <div className="bg-white p-3 rounded-[12px] border border-slate-100">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Impact Potential</span>
                      <span className="text-sm font-black text-[#D4AF37]">Strategic Multiplier</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Growth Priority Matrix */}
              <div className="bg-white rounded-[24px] border border-slate-100 p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] print:shadow-none print:border-slate-300">
                <h3 className="text-2xl font-black text-[#0B2545] mb-8 flex items-center gap-3">
                  <LayoutGrid className="w-6 h-6 text-[#D4AF37]" /> Strategic Intervention Matrix
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-t-4 border-[#DC2626] bg-[#F7F8FA] p-6 rounded-b-[16px] rounded-t-sm">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-sm font-black uppercase tracking-widest text-[#0B2545]">Fix First</h4>
                      <span className="bg-[#DC2626] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Urgent</span>
                    </div>
                    <h5 className="text-lg font-black text-[#0B2545] mb-2">{improvementAreas[0]?.name || 'Financial Structuring'}</h5>
                    <p className="text-sm text-slate-600 font-medium mb-4">Immediate risk mitigation required to prevent operational failure during scaling.</p>
                    <div className="flex gap-4 border-t border-slate-200 pt-4">
                      <div><span className="text-[10px] text-slate-400 font-bold block uppercase">ROI</span><span className="text-sm font-bold text-[#0B2545]">High</span></div>
                      <div><span className="text-[10px] text-slate-400 font-bold block uppercase">Effort</span><span className="text-sm font-bold text-[#0B2545]">High</span></div>
                    </div>
                  </div>

                  <div className="border-t-4 border-[#F59E0B] bg-[#F7F8FA] p-6 rounded-b-[16px] rounded-t-sm">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-sm font-black uppercase tracking-widest text-[#0B2545]">Optimize Next</h4>
                      <span className="bg-[#F59E0B] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Strategic</span>
                    </div>
                    <h5 className="text-lg font-black text-[#0B2545] mb-2">{improvementAreas[1]?.name || 'Process Automation'}</h5>
                    <p className="text-sm text-slate-600 font-medium mb-4">Cross-team alignment and workflow optimization to improve margin efficiency.</p>
                    <div className="flex gap-4 border-t border-slate-200 pt-4">
                      <div><span className="text-[10px] text-slate-400 font-bold block uppercase">ROI</span><span className="text-sm font-bold text-[#0B2545]">Medium</span></div>
                      <div><span className="text-[10px] text-slate-400 font-bold block uppercase">Effort</span><span className="text-sm font-bold text-[#0B2545]">Medium</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: AI ADVISORY */}
          {(activeTab === 'AI_ADVISORY' || true) && (
            <motion.div
              key="advisory"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`space-y-8 ${activeTab !== 'AI_ADVISORY' ? 'hidden print:block print:mt-12' : 'print:mt-12'}`}
            >
              <div className="bg-[#F0F5FF] rounded-[24px] border border-[#2563EB]/20 p-8 md:p-12 relative overflow-hidden print:bg-none print:bg-white print:border-slate-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/10 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3 print:hidden"></div>
                
                <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-[#2563EB]/20 mb-6 relative z-10">
                  <Sparkles className="w-4 h-4 text-[#2563EB]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#2563EB]">Generated by KRG ONE AI Growth Advisory™</span>
                </div>

                <h3 className="text-3xl font-black text-[#0B2545] mb-6 relative z-10 max-w-3xl leading-tight">
                  Strategic Advisory & Leadership Perspective
                </h3>
                
                <div className="text-base md:text-lg text-slate-700 font-medium leading-relaxed relative z-10 max-w-4xl space-y-6">
                  <p>
                    Operating within the {industry} sector at your scale, achieving your goal of "{formData.goal}" requires a fundamental paradigm shift from operator-led activity to system-led growth. 
                  </p>
                  <p>
                    Your overall score of {globalScore}% indicates that while core competencies exist, execution inconsistencies in <strong className="text-[#0B2545]">{improvementAreas[0]?.name}</strong> are actively suppressing profitability and capping your growth potential. The business is currently overly dependent on key personnel or manual oversight.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-[20px] border border-slate-100 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow">
                  <div className="w-12 h-12 bg-[#0B2545] rounded-[14px] flex items-center justify-center mb-6">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-black text-[#0B2545] mb-3">Critical Business Risk</h4>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Lack of standardized, documented protocols in {improvementAreas[0]?.name} is causing revenue leakage. Every new client or project currently increases operational friction linearly.
                  </p>
                </div>
                
                <div className="bg-white rounded-[20px] border border-slate-100 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow">
                  <div className="w-12 h-12 bg-[#0B2545] rounded-[14px] flex items-center justify-center mb-6">
                    <Award className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-lg font-black text-[#0B2545] mb-3">Strategic Advantage</h4>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Your existing capability in {topStrengths[0]?.name} is highly mature. Rather than building new features, package and systemize this strength to create an unassailable moat against competitors.
                  </p>
                </div>

                <div className="bg-white rounded-[20px] border border-slate-100 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-[14px] flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-[#0B2545]" />
                  </div>
                  <h4 className="text-lg font-black text-[#0B2545] mb-3">Top Executive Decision</h4>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Stop competing on operational heroics. Invest the next quarter exclusively in building the management infrastructure for {improvementAreas[0]?.name} before attempting to scale sales.
                  </p>
                </div>
              </div>

              <div className="bg-[#0B2545] rounded-[24px] p-10 md:p-14 text-center mt-12 relative overflow-hidden print:hidden shadow-2xl">
                 <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9InRyYW5zcGFyZW50Ii8+PGxpbmUgeDE9IjAiIHkxPSI0IiB4Mj0iNCIgeTI9IjAiIHN0cm9rZT0iIzFmMjkzNyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-10"></div>
                 <h3 className="text-3xl font-black text-white mb-4 relative z-10">Translate Insights into Action</h3>
                 <p className="text-slate-300 font-medium mb-10 max-w-2xl mx-auto relative z-10 text-lg">
                   Book a comprehensive 90-minute Live Business Growth Diagnostic™ with a Senior Executive Consultant to customize this strategic roadmap to your exact organizational context.
                 </p>
                 <button onClick={() => alert("Redirecting to booking...")} className="relative z-10 bg-[#D4AF37] text-[#0B2545] px-10 py-4 rounded-[12px] font-black uppercase tracking-widest text-sm hover:bg-white transition-colors shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                   Book Executive Diagnostic (₹1,499)
                 </button>
              </div>
            </motion.div>
          )}

          {/* TAB 5: ROADMAP */}
          {(activeTab === 'ROADMAP' || true) && (
            <motion.div
              key="roadmap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`space-y-8 ${activeTab !== 'ROADMAP' ? 'hidden print:block print:mt-12 print:break-before-page' : 'print:mt-12'}`}
            >
              <div className="bg-white rounded-[24px] border border-slate-100 p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] print:shadow-none print:border-slate-300">
                <div className="max-w-3xl mb-14">
                  <h3 className="text-3xl font-black text-[#0B2545] mb-4">90-Day Execution Roadmap</h3>
                  <p className="text-base text-slate-600 font-medium leading-relaxed">
                    A phased, strategic consulting approach designed to stabilize critical vulnerabilities and accelerate core competencies for <strong>{companyName}</strong>. 
                  </p>
                </div>

                <div className="relative space-y-8">
                  {/* Phase 1 */}
                  <div className="relative group">
                    <div className="bg-[#F7F8FA] rounded-[20px] border border-slate-100 p-8 hover:border-[#0B2545]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
                        <div>
                          <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest block mb-2">Phase 1 • Days 1 - 30</span>
                          <h4 className="text-2xl font-black text-[#0B2545]">Foundation & Stabilization</h4>
                        </div>
                        <span className="inline-block bg-[#0B2545] text-white text-xs font-bold px-4 py-2 rounded-full self-start md:self-auto">Owner: Executive Team</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Primary Objective</div>
                          <p className="text-sm font-medium text-slate-700 leading-relaxed">Audit and resolve immediate bottlenecks in <strong className="text-[#0B2545]">{improvementAreas[0]?.name}</strong>. Document existing workflows to establish a rigid operational baseline.</p>
                        </div>
                        <div className="bg-white p-5 rounded-[16px] border border-slate-100 shadow-sm">
                          <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3">Expected Outcome</div>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                              <span className="text-sm font-bold text-[#0B2545]">Operational baseline documented and secured.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                              <span className="text-sm font-bold text-[#0B2545]">Immediate revenue leaks identified and plugged.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="relative group">
                    <div className="bg-[#F7F8FA] rounded-[20px] border border-slate-100 p-8 hover:border-[#0B2545]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
                        <div>
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">Phase 2 • Days 31 - 60</span>
                          <h4 className="text-2xl font-black text-[#0B2545]">Integration & Optimization</h4>
                        </div>
                        <span className="inline-block bg-white border border-slate-200 text-slate-600 text-xs font-bold px-4 py-2 rounded-full self-start md:self-auto">Owner: Department Heads</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Primary Objective</div>
                          <p className="text-sm font-medium text-slate-700 leading-relaxed">Align team execution and deploy strict metrics tracking for <strong className="text-[#0B2545]">{improvementAreas[1]?.name}</strong>. Introduce automation to reduce manual data entry.</p>
                        </div>
                        <div className="bg-white p-5 rounded-[16px] border border-slate-100 shadow-sm">
                          <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3">Expected Outcome</div>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                              <span className="text-sm font-bold text-[#0B2545]">15% measurable improvement in process efficiency.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="relative group">
                    <div className="bg-[#F7F8FA] rounded-[20px] border border-slate-100 p-8 hover:border-[#0B2545]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
                        <div>
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">Phase 3 • Days 61 - 90</span>
                          <h4 className="text-2xl font-black text-[#0B2545]">Scale & Accelerate</h4>
                        </div>
                        <span className="inline-block bg-white border border-slate-200 text-slate-600 text-xs font-bold px-4 py-2 rounded-full self-start md:self-auto">Owner: Growth Team</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Primary Objective</div>
                          <p className="text-sm font-medium text-slate-700 leading-relaxed">Leverage robust systems to aggressively scale <strong className="text-[#0B2545]">{topStrengths[0]?.name}</strong>. Push for new market share without breaking operations.</p>
                        </div>
                        <div className="bg-white p-5 rounded-[16px] border border-slate-100 shadow-sm">
                          <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3">Expected Outcome</div>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                              <span className="text-sm font-bold text-[#0B2545]">Measurable margin expansion and top-line growth.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

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
