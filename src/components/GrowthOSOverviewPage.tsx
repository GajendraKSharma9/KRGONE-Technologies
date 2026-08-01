import React from 'react';
import { 
  ArrowLeft, ArrowRight, Phone, Sparkles, Check, Layers, Target, 
  Search, Filter, Zap, TrendingUp, BarChart2, ShieldCheck, 
  FileCheck, Cpu, LayoutDashboard, Lightbulb, Calendar, Activity
} from 'lucide-react';

interface GrowthOSOverviewPageProps {
  onReturnHome?: () => void;
  onLaunchAssessment?: () => void;
  onContactUs?: () => void;
}

export function GrowthOSOverviewPage({ onReturnHome, onLaunchAssessment, onContactUs }: GrowthOSOverviewPageProps) {
  const whyPoints = [
    {
      title: "7 Critical Growth Pillars",
      desc: "Evaluate your business comprehensively across Strategy, Sales, Operations, Finance, Leadership, Tech & Talent.",
      icon: <Layers className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Uncover Hidden Opportunities",
      desc: "Identify operational strengths, profit risks, and structural growth bottlenecks before they disrupt scaling.",
      icon: <Search className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Business Health Index™",
      desc: "Benchmark your enterprise performance with an objective quantitative scoring model calibrated for MSMEs.",
      icon: <Activity className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Practical, Data-Driven Guidance",
      desc: "Receive actionable, battle-tested consulting recommendations instead of high-level generic theories.",
      icon: <FileCheck className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Clear Roadmap to Scale",
      desc: "Build a structured, phased execution plan designed to drive predictable revenue and long-term valuation.",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />
    },
    {
      title: "SYSTEM OVERVIEW • KRGONE Business Growth OS™",
      desc: "An integrated operating system designed to align your strategy, execution, and team performance.",
      icon: <Cpu className="w-6 h-6 text-blue-600" />
    }
  ];

  const howItWorksSteps = [
    {
      num: "01",
      step: "Assess",
      desc: "Complete the Business Growth Assessment™ to evaluate your business."
    },
    {
      num: "02",
      step: "Diagnose",
      desc: "Identify key business bottlenecks and improvement areas."
    },
    {
      num: "03",
      step: "Prioritize",
      desc: "Focus on the initiatives that deliver the greatest business impact."
    },
    {
      num: "04",
      step: "Transform",
      desc: "Implement practical strategies, systems, and AI-enabled solutions."
    },
    {
      num: "05",
      step: "Scale",
      desc: "Create predictable, sustainable, and measurable business growth."
    }
  ];

  const deliverables = [
    {
      title: "Business Health Dashboard™",
      desc: "360° visual scorecard tracking global health metrics and pillar balance across your enterprise.",
      icon: <LayoutDashboard className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Executive Business Insights™",
      desc: "Deep-dive diagnostic briefing identifying founder bottlenecks, margin leakage, and systemic risks.",
      icon: <BarChart2 className="w-6 h-6 text-blue-600" />
    },
    {
      title: "7-Pillar Performance Analysis",
      desc: "Granular breakdown comparing performance against high-growth benchmarks in your vertical.",
      icon: <Layers className="w-6 h-6 text-blue-600" />
    },
    {
      title: "AI Growth Advisory™",
      desc: "Algorithmic risk detection highlighting quick wins and operational priority targets.",
      icon: <Cpu className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Strategic Recommendations™",
      desc: "Tailored problem-solution-support blueprints designed to streamline daily workflows.",
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />
    },
    {
      title: "90-Day Sprint Roadmap",
      desc: "Time-phased implementation sprints focusing on stabilization, SOPs, and system optimization.",
      icon: <Calendar className="w-6 h-6 text-blue-600" />
    }
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
              Overview • KRGONE Business Growth OS™
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
      {/* 1. HERO SECTION                                      */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden pt-4 pb-4 lg:pt-6 lg:pb-6 bg-gradient-to-b from-blue-50/70 via-slate-50 to-[#f8fafc] border-b border-slate-200">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 0.75px, transparent 0.75px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          
          {/* Header Title Badge */}
          <div className="inline-flex items-center gap-4 bg-blue-100/80 border border-blue-200/80 px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900">SYSTEM OVERVIEW • KRGONE Business Growth OS™</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 font-serif">
            A Structured Framework for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-800 to-[#b45309]">
              Sustainable Business Growth
            </span>
          </h1>

          {/* Short Introduction (2 concise paragraphs) */}
          <div className="max-w-3xl mx-auto space-y-3 text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-loose">
            <p>
              Most businesses don't struggle because they lack effort—they struggle because growth becomes difficult without the right systems, processes, and strategic direction.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm font-normal">
              The <strong className="text-blue-700 font-bold">KRGONE Business Growth OS™ (BGOS)</strong> is a comprehensive business assessment and consulting framework that helps organizations measure their business health, identify growth bottlenecks, and prioritize high-impact improvements across the seven core drivers of business success.
            </p>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. WHY BUSINESS GROWTH OS™                           */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-blue-600 text-xs font-black uppercase tracking-widest block">
              CORE ADVANTAGES
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-serif">
              Why Business Growth OS™?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Engineered to replace operational chaos with systematic, predictable expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 sm:p-10 max-w-6xl mx-auto">
            {whyPoints.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#f8fafc] rounded-2xl p-7 border border-slate-200 shadow-xs hover:border-blue-500 hover:bg-white hover:shadow-md transition-all space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-4">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{item.title}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-loose font-medium pl-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. HOW IT WORKS                                       */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-24 bg-[#f4f6fb] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-blue-600 text-xs font-black uppercase tracking-widest block">
              STEP-BY-STEP PROCESS
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-serif">
              How It Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              A proven 5-stage transformation pipeline designed for rapid execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 sm:p-10 relative">
            {howItWorksSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all space-y-3 flex flex-col justify-between relative group"
              >
                <div className="space-y-3">
                  <span className="text-xs font-black text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full inline-block">
                    Step {step.num}
                  </span>

                  <h3 className="text-xl font-black text-slate-900 tracking-tight font-serif">
                    {step.step}
                  </h3>

                  <p className="text-xs text-slate-600 font-medium leading-loose">
                    {step.desc}
                  </p>
                </div>

                {idx < howItWorksSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-white border border-slate-300 text-blue-600 rounded-full p-1 shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. WHAT YOU'LL RECEIVE                                */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-blue-600 text-xs font-black uppercase tracking-widest block">
              SYSTEM DELIVERABLES
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-serif">
              What You'll Receive
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              A full suite of institutional intelligence and actionable growth assets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 sm:p-10">
            {deliverables.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#f8fafc] rounded-2xl p-7 border border-slate-200 shadow-xs hover:border-blue-500 hover:bg-white hover:shadow-md transition-all space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-loose">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. CONTINUE YOUR GROWTH JOURNEY (CTA)                */}
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

    </div>
  );
}
