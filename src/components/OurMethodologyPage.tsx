import React from 'react';
import { 
  ArrowLeft, ArrowRight, Phone, Sparkles, Target, Search, Filter, 
  Zap, TrendingUp, CheckCircle2, ShieldCheck, Check, Cpu, BarChart2,
  FileCheck, Layers
} from 'lucide-react';

interface OurMethodologyPageProps {
  onReturnHome?: () => void;
  onLaunchAssessment?: () => void;
  onContactUs?: () => void;
}

export function OurMethodologyPage({ onReturnHome, onLaunchAssessment, onContactUs }: OurMethodologyPageProps) {
  const frameworkSteps = [
    {
      num: "01",
      step: "Assess",
      title: "Self-Paced Assessment",
      desc: "Understand your business through our Free Business Growth Assessment™ and identify strengths, risks, and improvement areas.",
      icon: <FileCheck className="w-6 h-6 text-blue-600" />
    },
    {
      num: "02",
      step: "Diagnose",
      title: "Deep Diagnostic Audit",
      desc: "Conduct a detailed Business Growth Diagnostic™ to uncover root causes, operational bottlenecks, and hidden growth opportunities.",
      icon: <Search className="w-6 h-6 text-blue-600" />
    },
    {
      num: "03",
      step: "Prioritize",
      title: "High-Impact Roadmap",
      desc: "Focus on the initiatives that deliver the highest business impact based on your goals, industry, and current maturity.",
      icon: <Filter className="w-6 h-6 text-blue-600" />
    },
    {
      num: "04",
      step: "Transform",
      title: "Execution & SOPs",
      desc: "Implement practical strategies, process improvements, leadership initiatives, and AI-enabled business solutions.",
      icon: <Zap className="w-6 h-6 text-blue-600" />
    },
    {
      num: "05",
      step: "Scale",
      title: "Predictable Expansion",
      desc: "Build systems, monitor performance, and create a foundation for predictable and sustainable long-term growth.",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />
    }
  ];

  const differentiators = [
    {
      title: "Structured Business Growth Framework",
      desc: "Driven by the proprietary KRGONE Business Growth OS™ to remove guesswork and provide a clear execution roadmap.",
      icon: <Layers className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Data-Driven Decision Making",
      desc: "Moving beyond gut feel with quantitative 360° diagnostics, pillar scorecards, and objective metric benchmarks.",
      icon: <BarChart2 className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Practical & Execution-Focused Consulting",
      desc: "Hands-on implementation sprints alongside senior advisors to build real SOPs and operational playbooks.",
      icon: <Target className="w-6 h-6 text-blue-600" />
    },
    {
      title: "AI-Enabled Business Solutions",
      desc: "Deploying next-gen AI agent nodes and cloud automation to supercharge team velocity and eliminate manual entry.",
      icon: <Cpu className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Measurable Business Outcomes",
      desc: "Uncompromising focus on net profit expansion, cash flow visibility, deal velocity, and long-term valuation.",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />
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
              Our Methodology • KRGONE Business Growth OS™
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
      {/* 1. HERO SECTION (LITE THEME)                         */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-b from-blue-50/70 via-slate-50 to-[#f8fafc] border-b border-slate-200">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 0.75px, transparent 0.75px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          
          {/* Header Title Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200/80 px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900">OUR METHODOLOGY • KRGONE Business Growth OS™</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-serif">
            A Structured Framework for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-800 to-[#b45309]">
              Sustainable Business Growth
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Every business is unique, but successful growth follows a disciplined process. Our Business Growth OS™ combines structured consulting, data-driven diagnostics, and practical implementation to help businesses improve performance and scale with confidence.
          </p>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. 5-STEP GROWTH FRAMEWORK (CONNECTED CARDS)          */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-32 md:py-20 lg:py-32 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-blue-600 text-xs font-black uppercase tracking-widest block">
              THE EXECUTION PIPELINE
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-serif">
              Our 5-Step Growth Framework
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Assess → Diagnose → Prioritize → Transform → Scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:p-10 relative">
            {frameworkSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-[#f8fafc] rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xs hover:border-blue-500 hover:bg-white hover:shadow-md transition-all space-y-4 flex flex-col justify-between relative group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                    <span className="text-xs font-black text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                      Step {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {step.icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 tracking-tight">
                      {step.step}
                    </h3>
                    <p className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                      {step.title}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < frameworkSteps.length - 1 && (
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
      {/* 3. WHAT MAKES OUR METHODOLOGY DIFFERENT (5 CARDS)    */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-32 md:py-20 bg-[#f4f6fb] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-blue-600 text-xs font-black uppercase tracking-widest block">
              THE KRGONE DIFFERENTIATORS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-serif">
              What Makes Our Methodology Different?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Why business leaders choose KRGONE for systematic, risk-free enterprise transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {differentiators.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 tracking-tight flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item.title}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium pl-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. OUR COMMITMENT                                     */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-32 md:py-20 bg-gradient-to-b from-blue-50/60 to-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <span className="text-blue-600 text-xs font-black uppercase tracking-widest block">
            UNCOMPROMISING STANDARD
          </span>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif">
            Our Commitment
          </h2>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-blue-200 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>

            <p className="text-lg sm:text-2xl font-extrabold text-slate-900 font-serif tracking-tight leading-relaxed">
              "We don't believe in generic advice or one-size-fits-all solutions."
            </p>

            <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed pt-4 max-w-2xl mx-auto">
              Every recommendation is tailored to your business, your industry, and your growth objectives—ensuring every engagement delivers practical value and measurable results.
            </p>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. DUAL ACTION CTAS                                  */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-32 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-blue-600 text-xs font-black uppercase tracking-widest block">
              READY TO START?
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-serif">
              Choose Your Next Growth Step
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* CTA CARD 1: ASSESSMENT */}
            <div className="bg-[#f8fafc] rounded-3xl p-8 border-2 border-blue-200 shadow-md space-y-6 flex flex-col justify-between hover:border-blue-600 hover:bg-white transition-all">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-extrabold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Free Self-Paced Tool
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Free Business Growth Assessment™
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Understand your business health and discover your next growth opportunity. Takes just 3 minutes.
                </p>
              </div>

              <button
                onClick={onLaunchAssessment}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Take Free Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* CTA CARD 2: CONSULTATION */}
            <div className="bg-[#f8fafc] rounded-3xl p-8 border-2 border-amber-200 shadow-md space-y-6 flex flex-col justify-between hover:border-[#ff6f3c] hover:bg-white transition-all">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider">
                  <Phone className="w-3.5 h-3.5 text-[#ff6f3c]" /> Expert Advisory Session
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Business Growth Consultation™
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Discuss your assessment with a KRGONE Advisor and receive expert guidance tailored to your operational goals.
                </p>
              </div>

              <button
                onClick={onContactUs}
                className="w-full bg-[#ff6f3c] hover:bg-[#e05b2a] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Book Advisor Consultation</span>
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
