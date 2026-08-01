import React from 'react';
import { SharedFooter } from './SharedFooter';
import { 
  ArrowLeft, ArrowRight, Sparkles, Compass, TrendingUp, Megaphone, 
  Settings, DollarSign, Users, Cpu, ShieldCheck, CheckCircle2, 
  Award, Phone, Mail, MapPin, Globe, Check
} from 'lucide-react';

interface SevenGrowthPillarsPageProps {
  onReturnHome?: () => void;
  onLaunchAssessment?: () => void;
  onContactUs?: () => void;
  onNavigate?: (view: string) => void;
}

export function SevenGrowthPillarsPage({ onReturnHome, onLaunchAssessment, onContactUs,
  onNavigate }: SevenGrowthPillarsPageProps) {
  const pillars = [
    {
      num: "01",
      title: "Leadership & Vision",
      subtitle: "Strategic Direction & Decision Making",
      desc: "Evaluate leadership effectiveness, business vision, governance, planning, and the organization's ability to lead sustainable growth.",
      icon: <Compass className="w-6 h-6 text-blue-600" />
    },
    {
      num: "02",
      title: "Sales & Revenue",
      subtitle: "Revenue Generation & Sales Performance",
      desc: "Assess sales strategy, pipeline management, customer conversion, revenue consistency, and overall sales effectiveness.",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />
    },
    {
      num: "03",
      title: "Marketing & Customer Growth",
      subtitle: "Market Reach & Customer Acquisition",
      desc: "Measure brand visibility, lead generation, customer acquisition, retention strategies, and competitive positioning.",
      icon: <Megaphone className="w-6 h-6 text-blue-600" />
    },
    {
      num: "04",
      title: "Operations & Process",
      subtitle: "Execution & Operational Excellence",
      desc: "Review SOPs, workflow efficiency, operational controls, process maturity, and business execution capabilities.",
      icon: <Settings className="w-6 h-6 text-blue-600" />
    },
    {
      num: "05",
      title: "Finance & Business Performance",
      subtitle: "Financial Stability & Profitability",
      desc: "Analyze profitability, cash flow, budgeting, financial controls, and overall business performance.",
      icon: <DollarSign className="w-6 h-6 text-blue-600" />
    },
    {
      num: "06",
      title: "People & Leadership",
      subtitle: "Team Capability & Organizational Culture",
      desc: "Assess workforce capability, leadership development, accountability, employee engagement, and organizational structure.",
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      num: "07",
      title: "Technology & Business Innovation",
      subtitle: "Digital Transformation & AI Readiness",
      desc: "Evaluate technology adoption, automation, digital maturity, innovation capability, and AI integration opportunities.",
      icon: <Cpu className="w-6 h-6 text-blue-600" />
    }
  ];

  const outcomes = [
    { label: "More Profitable", desc: "Optimized unit economics & margin health" },
    { label: "Operationally Efficient", desc: "Streamlined SOPs & zero waste workflows" },
    { label: "Customer Focused", desc: "Higher retention & predictable pipeline" },
    { label: "Financially Strong", desc: "Cash flow stability & clear budgeting" },
    { label: "Technology Ready", desc: "Automated tasks & AI tool adoption" },
    { label: "Better Led", desc: "Autonomous team & strategic clarity" },
    { label: "Scalable for Long-Term Growth", desc: "Institutionalized enterprise value" }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-blue-600/20 selection:text-blue-900">
      
      {/* ---------------------------------------------------- */}
      {/* TOP HEADER NAVIGATION BAR                            */}
      {/* ---------------------------------------------------- */}
      <div className="sticky top-[90px] lg:top-[108px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onReturnHome}
            className="inline-flex items-center gap-4 text-xs font-bold text-slate-700 hover:text-blue-600 uppercase tracking-wider transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
          
          <div className="flex items-center gap-10 md:gap-16 sm:p-10 text-xs font-medium text-slate-600">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              The 7 Growth Pillars • KRGONE Business Growth OS™
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          
          {/* Section Badge */}
          <div className="inline-flex items-center gap-4 bg-blue-100/80 border border-blue-200/80 px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900">THE 7 GROWTH PILLARS • KRGONE Business Growth OS™</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 font-serif">
            Every Great Business Is Built on <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-800 to-[#b45309]">
              Seven Core Pillars
            </span>
          </h1>

          {/* Subtitle / Intro */}
          <p className="max-w-3xl mx-auto text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-loose">
            The <strong className="text-slate-900 font-bold">KRGONE Business Growth OS™</strong> evaluates your business across seven interconnected pillars that drive long-term growth, operational excellence, and business resilience. Together, these pillars provide a comprehensive view of your organization's current performance and future growth potential.
          </p>
        </div>
      </section>
      {/* ---------------------------------------------------- */}
      {/* 2. THE 7 PILLARS GRID                                */}
      {/* ---------------------------------------------------- */}
      <section className="py-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-blue-600 text-xs font-black uppercase tracking-widest block">
              7-DRIVER ARCHITECTURE
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-serif">
              Comprehensive Performance Pillars
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Linearly structured for clarity, objective scoring, and actionable executive analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-10 md:gap-16 sm:p-10 max-w-6xl mx-auto">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className={`bg-[#f8fafc] rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xs hover:border-blue-500 hover:bg-white hover:shadow-md transition-all space-y-3 flex flex-col justify-between group lg:col-span-2 ${idx === 4 ? 'lg:col-start-2' : ''}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                    <span className="text-xs font-black text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                      Pillar {pillar.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {pillar.icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight font-serif">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-bold text-blue-700 uppercase tracking-wider pt-0.5">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-loose">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. WHY THESE PILLARS MATTER                          */}
      {/* ---------------------------------------------------- */}
      <section className="py-6 bg-[#f4f6fb] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-blue-600 text-xs font-black uppercase tracking-widest block">
              SYSTEMIC VALUE
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-serif">
              Why These Pillars Matter
            </h2>
            <p className="text-base sm:text-lg font-bold text-slate-700">
              When these seven pillars work together, businesses become:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-10 md:gap-16 sm:p-10 max-w-6xl mx-auto">
            {outcomes.map((item, idx) => (
              <div 
                key={idx}
                className={`bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:border-blue-400 transition-all space-y-2 flex flex-col justify-center lg:col-span-2 ${idx === 4 ? 'lg:col-start-2' : ''}`}
              >
                <div className="flex items-center gap-4.5 text-blue-700 font-extrabold text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{item.label}</span>
                </div>
                <p className="text-xs text-slate-500 font-medium pl-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. CONTINUE YOUR GROWTH JOURNEY (CTA)                */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-[#0f2142] to-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
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
            <button
              onClick={onContactUs}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all active:scale-95 border border-white/20 cursor-pointer flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              <span>Book Consultation</span>
            </button>
          </div>

        </div>
      </section>
      {/* ---------------------------------------------------- */}
      {/* 5. FOOTER DETAILS                                    */}
      {/* ---------------------------------------------------- */}
      <SharedFooter onNavigate={onNavigate} />

    </div>
  );
}
