import React from 'react';
import { 
  ArrowLeft, ArrowRight, Phone, Sparkles, AlertCircle, CheckCircle2, 
  TrendingUp, BarChart2, ShieldCheck, Target, Zap, Activity,
  Compass, Megaphone, Settings, DollarSign, Users, Cpu, Layers
} from 'lucide-react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, 
  ResponsiveContainer 
} from 'recharts';

interface BusinessHealthDashboardPageProps {
  onReturnHome?: () => void;
  onLaunchAssessment?: () => void;
  onContactUs?: () => void;
  onExploreInsights?: () => void;
}

export function BusinessHealthDashboardPage({ 
  onReturnHome, 
  onLaunchAssessment, 
  onContactUs,
  onExploreInsights 
}: BusinessHealthDashboardPageProps) {

  // 7-Pillar Data for Radar Chart & Progress Bars
  const pillarData = [
    { subject: 'Leadership & Vision', score: 88, fullMark: 100, icon: Compass },
    { subject: 'Sales & Revenue', score: 82, fullMark: 100, icon: TrendingUp },
    { subject: 'Marketing & Growth', score: 64, fullMark: 100, icon: Megaphone },
    { subject: 'Operations & Process', score: 80, fullMark: 100, icon: Settings },
    { subject: 'Finance & Performance', score: 85, fullMark: 100, icon: DollarSign },
    { subject: 'People & Leadership', score: 68, fullMark: 100, icon: Users },
    { subject: 'Tech & AI Innovation', score: 65, fullMark: 100, icon: Cpu },
  ];

  const priorityFocusAreas = [
    {
      title: "Strengthen Marketing & Customer Growth",
      score: "64 / 100",
      status: "Critical Priority",
      color: "bg-rose-50 text-rose-700 border-rose-200",
      badgeColor: "bg-rose-600 text-white",
      desc: "Lead acquisition relies on organic referral channels without predictable omni-channel campaigns. Scaling requires systematic outbound funnel architecture and CRM tracking.",
      icon: Megaphone
    },
    {
      title: "Improve Technology & Business Innovation",
      score: "65 / 100",
      status: "High Priority",
      color: "bg-amber-50 text-amber-800 border-amber-200",
      badgeColor: "bg-amber-600 text-white",
      desc: "Manual operational workflows create administrative drag. Deploying modern workflow automation nodes and AI copilots will recover executive time and boost team output.",
      icon: Cpu
    },
    {
      title: "Enhance People & Leadership",
      score: "68 / 100",
      status: "Medium Priority",
      color: "bg-blue-50 text-blue-800 border-blue-200",
      badgeColor: "bg-blue-600 text-white",
      desc: "Middle management requires structured SOP playbooks to operate autonomously. Transitioning from founder oversight to KPI accountability will remove growth bottlenecks.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-blue-600/20 selection:text-blue-900">
      
      {/* ---------------------------------------------------- */}
      {/* TOP HEADER NAVIGATION BAR                            */}
      {/* ---------------------------------------------------- */}
      <div className="sticky top-[90px] lg:top-[108px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onReturnHome}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-600 uppercase tracking-wider transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
          
          <div className="flex items-center gap-8 sm:p-10 text-xs font-medium text-slate-600">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Business Health Dashboard™ • KRGONE Business Growth OS™
            </span>
            {onLaunchAssessment && (
              <button
                onClick={onLaunchAssessment}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-1.5 rounded-full text-[11px] tracking-wider uppercase transition-all shadow-sm cursor-pointer"
              >
                Free Diagnostic Assessment
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 1. HERO HEADER                                       */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden pt-4 pb-4 lg:pt-6 lg:pb-6 bg-gradient-to-b from-blue-50/70 via-slate-50 to-[#f8fafc] border-b border-slate-200">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 0.75px, transparent 0.75px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-2">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200/80 px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900">BUSINESS HEALTH DASHBOARD™</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-serif">
            Your Business at a Glance
          </h1>

          <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Your Business Health Dashboard™ provides an instant view of your organization's overall performance, highlighting where your business is strong and where immediate attention can accelerate growth.
          </p>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
        
        {/* ---------------------------------------------------- */}
        {/* 2. BUSINESS HEALTH INDEX™ SCORE CARD                 */}
        {/* ---------------------------------------------------- */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 sm:p-10 border-2 border-blue-200 shadow-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">Business Health Index™ Benchmark</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif">
                Overall Business Health Index™
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                A solid foundation with clear opportunities to improve performance and scale faster.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <span className="bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1 rounded-lg">
                7 Core Pillars
              </span>
              <span className="bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1 rounded-lg">
                3 Priority Targets
              </span>
              <span className="bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold px-3 py-1 rounded-lg">
                High Growth Readiness
              </span>
            </div>
          </div>

          {/* Big Circular Score Dial */}
          <div className="flex flex-col items-center justify-center bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 min-w-[220px] text-center shadow-inner space-y-1 relative">
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
              HEALTH INDEX SCORE
            </span>
            
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-6xl font-black text-blue-700 tracking-tight font-serif">78</span>
              <span className="text-xl font-bold text-slate-400">/ 100</span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-emerald-600 text-white font-black text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>Strong Business</span>
            </div>
          </div>

        </div>

        {/* ---------------------------------------------------- */}
        {/* 3. 7-PILLAR PERFORMANCE (RADAR & PROGRESS BARS)      */}
        {/* ---------------------------------------------------- */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-3">
          
          <div className="text-center md:text-left space-y-1 border-b border-slate-200 pb-4">
            <span className="text-blue-600 text-xs font-black uppercase tracking-widest block">
              PERFORMANCE BREAKDOWN
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-serif">
              7-Pillar Performance Analysis
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Multi-dimensional evaluation across Strategy, Sales, Operations, Finance, Marketing, People, and Technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* RADAR CHART (5 cols) */}
            <div className="lg:col-span-5 bg-[#f8fafc] rounded-2xl p-3 border border-slate-200 flex flex-col items-center justify-center min-h-[280px]">
              <span className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider mb-1">
                Pillar Balance Radar Chart
              </span>
              <div className="w-full h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={pillarData}>
                    <PolarGrid stroke="#cbd5e1" strokeDasharray="3 3" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#334155', fontSize: 10, fontWeight: 700 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 9, fill: '#64748b' }} />
                    <Radar 
                      name="Pillar Score" 
                      dataKey="score" 
                      stroke="#2563eb" 
                      fill="#3b82f6" 
                      fillOpacity={0.45} 
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* PROGRESS BARS (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              {pillarData.map((item, idx) => {
                const IconComp = item.icon;
                const isLower = item.score < 70;
                return (
                  <div key={idx} className="space-y-1 bg-[#f8fafc] p-2 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900">
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded bg-blue-50 text-blue-600 border border-blue-100">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span>{item.subject}</span>
                      </div>
                      <span className={`font-extrabold ${isLower ? 'text-amber-700' : 'text-blue-700'}`}>
                        {item.score}%
                      </span>
                    </div>

                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className={`h-2.5 rounded-full transition-all duration-500 ${
                          isLower ? 'bg-amber-500' : 'bg-blue-600'
                        }`} 
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* ---------------------------------------------------- */}
        {/* 4. PRIORITY FOCUS AREAS (3 CARDS)                    */}
        {/* ---------------------------------------------------- */}
        <div className="space-y-3">
          <div className="text-center md:text-left space-y-1">
            <span className="text-blue-600 text-xs font-black uppercase tracking-widest block">
              TARGETED INTERVENTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-serif">
              Priority Focus Areas
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              The top 3 high-leverage business pillars requiring immediate strategic sprint execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:p-10">
            {priorityFocusAreas.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <div 
                  key={idx}
                  className={`rounded-xl p-5 border-2 shadow-xs space-y-3 flex flex-col justify-between hover:shadow-md transition-all ${card.color}`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${card.badgeColor}`}>
                        {card.status}
                      </span>
                      <span className="text-xs font-black font-serif text-slate-800 bg-white/80 border border-slate-200 px-2 py-0.5 rounded-md">
                        {card.score}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <CardIcon className="w-5 h-5 text-slate-900 shrink-0" />
                      <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                        {card.title}
                      </h3>
                    </div>

                    <p className="text-xs font-medium leading-relaxed text-slate-700">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 5. WHAT THIS MEANS (3-4 LINES CALLOUT BOX)          */}
        {/* ---------------------------------------------------- */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-4 sm:p-8 sm:p-10 shadow-lg relative overflow-hidden space-y-3">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center gap-2 text-blue-300 text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>EXECUTIVE DIAGNOSTIC SUMMARY</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black font-serif text-white tracking-tight">
            What This Means For Your Business
          </h3>

          <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed max-w-4xl">
            Your business has a strong foundation. Focusing on the priority areas identified above will improve operational efficiency, increase revenue potential, and support long-term sustainable growth.
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 6. CONTINUE YOUR GROWTH JOURNEY (CTA)                */}
        {/* ---------------------------------------------------- */}
        <div className="bg-gradient-to-br from-blue-900 via-[#0f2142] to-slate-900 text-center relative overflow-hidden rounded-2xl p-8 sm:p-12 shadow-2xl">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <span className="text-blue-400 text-xs sm:text-sm font-black uppercase tracking-[0.2em] block">
                CONTINUE YOUR BUSINESS GROWTH JOURNEY
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif leading-tight">
                Free Business Growth Assessment™
              </h2>
              <p className="text-base sm:text-xl text-blue-100/90 font-medium leading-relaxed max-w-2xl mx-auto">
                Discover how your business performs across all seven pillars and receive your personalized Business Health Dashboard™.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6">
              <button
                onClick={onLaunchAssessment}
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-3"
              >
                <span>Take Free Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              {onContactUs && (
                <button
                  onClick={onContactUs}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all active:scale-95 border border-white/20 cursor-pointer flex items-center justify-center gap-3 backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5" />
                  <span>Book Consultation</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
