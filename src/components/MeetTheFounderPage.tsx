import React from 'react';
import { 
  ArrowLeft, ArrowRight, Phone, Sparkles, TrendingUp, BarChart2, 
  Activity, Layers, Users, Cpu, ShieldCheck, Award, Target, 
  CheckCircle2, Building2, Lightbulb, Check
} from 'lucide-react';

interface MeetTheFounderPageProps {
  onReturnHome?: () => void;
  onLaunchAssessment?: () => void;
  onContactUs?: () => void;
}

export function MeetTheFounderPage({ onReturnHome, onLaunchAssessment, onContactUs }: MeetTheFounderPageProps) {
  const expertiseList = [
    {
      title: "Business Growth Strategy",
      desc: "Developing long-term scaling blueprints, market positioning, and sustainable revenue frameworks.",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Revenue & Sales Transformation",
      desc: "Optimizing sales pipelines, deal velocity, conversion mechanics, and C-level revenue governance.",
      icon: <BarChart2 className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Business Performance Diagnostics",
      desc: "Conducting quantitative 360° audits across operations, cash flow, unit margins, and leadership.",
      icon: <Activity className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Operations & Process Improvement",
      desc: "Codifying Standard Operating Procedures (SOPs), swimlane workflows, and eliminating owner dependency.",
      icon: <Layers className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Leadership Development",
      desc: "Building autonomous management structures, outcome-based KPIs, and executive decision boundaries.",
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      title: "AI-Enabled Business Consulting",
      desc: "Integrating predictive AI workflows, automated nodes, and custom business intelligence cockpits.",
      icon: <Cpu className="w-6 h-6 text-blue-600" />
    }
  ];

  const highlights = [
    {
      stat: "20+ Years",
      title: "Business & Sales Leadership",
      desc: "Two decades of hands-on corporate development, distribution, and revenue expansion experience."
    },
    {
      stat: "Growth OS™",
      title: "Creator of KRGONE Growth OS™",
      desc: "Architected a structured consulting framework for diagnosing and scaling growing enterprises."
    },
    {
      stat: "MSME Specialist",
      title: "Specialist in MSME Business Growth",
      desc: "Deep domain authority in helping Indian MSMEs eliminate operational friction and scale profit margins."
    },
    {
      stat: "Execution Focus",
      title: "Practical, Execution-Focused Consulting",
      desc: "Moving beyond theoretical reports to 90-day implementation sprints with weekly review cadences."
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
              Meet the Founder • KRGONE Business Growth OS™
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
      {/* 1. HERO & FOUNDER PROFILE HEADER                     */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-b from-blue-50/70 via-slate-50 to-[#f8fafc] border-b border-slate-200">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 0.75px, transparent 0.75px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          
          {/* Header Title Badge */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200/80 px-4 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-900">MEET THE FOUNDER • KRGONE Business Growth OS™</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-serif">
              Gajendra Kumar Sharma
            </h1>

            <p className="text-base sm:text-xl font-bold text-blue-700 tracking-wide uppercase">
              Founder & Business Growth Advisor
            </p>
          </div>

          {/* Hero Portrait & Quote Layout */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 sm:p-10 border border-slate-200 shadow-xl max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Portrait */}
              <div className="w-full lg:w-80 shrink-0 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-2xl translate-x-3 translate-y-3 opacity-20"></div>
                <div className="relative aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <img 
                    src="/image.jpeg" 
                    alt="Gajendra Kumar Sharma - Founder & Business Growth Advisor" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Right Column: Key Details & Professional Quote */}
              <div className="flex-1 space-y-6">
                
                <div className="space-y-2">
                  <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest block">
                    LEADERSHIP PHILOSOPHY
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif">
                    Building Systems That Scale Without Friction
                  </h2>
                </div>

                {/* Professional Quote */}
                <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-blue-50/90 to-indigo-50/50 border-l-4 border-l-blue-600 border border-blue-100 shadow-xs space-y-3">
                  <p className="text-base sm:text-lg italic text-slate-800 font-serif leading-relaxed">
                    "Businesses don't grow by working harder—they grow by building better systems, stronger leadership, and disciplined execution."
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-800 uppercase tracking-wider">
                    <span>— Gajendra Kumar Sharma</span>
                    <span>•</span>
                    <span className="text-slate-500">KRGONE Founder</span>
                  </div>
                </div>

                {/* Quick Trust Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>20+ Years Expertise</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Growth OS™ Creator</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>MSME Growth Partner</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Strict Professional NDA</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. ABOUT THE FOUNDER (SHORT STORY)                   */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-32 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="text-center space-y-2">
            <span className="text-blue-600 text-xs font-black uppercase tracking-widest block">
              BACKGROUND & VISION
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-serif">
              About the Founder
            </h2>
          </div>

          <div className="bg-[#f8fafc] rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              With over 20 years of experience in Sales, Distribution, Business Development, and Business Growth, Gajendra Kumar Sharma has worked closely with organizations across multiple industries, helping businesses improve revenue performance, strengthen operations, and achieve sustainable growth.
            </p>
            <p>
              His practical business experience inspired the creation of the <strong className="text-blue-700 font-bold">KRGONE Business Growth OS™</strong>—a structured consulting framework designed to help business owners diagnose challenges, prioritize improvements, and implement measurable growth strategies.
            </p>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. AREAS OF EXPERTISE (6 ICONS)                      */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-32 md:py-20 bg-[#f4f6fb] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-blue-600 text-xs font-black uppercase tracking-widest block">
              CORE DOMAIN MASTERY
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-serif">
              Areas of Expertise
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Six foundational pillars of executive capability that power every client engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseList.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. PROFESSIONAL HIGHLIGHTS (4 KPI CARDS)             */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-32 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-blue-600 text-xs font-black uppercase tracking-widest block">
              TRACK RECORD & CREDENTIALS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-serif">
              Professional Highlights
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Proven milestones shaping KRGONE's disciplined approach to enterprise growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#f8fafc] rounded-2xl p-7 border border-slate-200 shadow-xs hover:border-blue-400 transition-all space-y-3 text-center sm:text-left relative overflow-hidden"
              >
                <div className="inline-block text-2xl sm:text-3xl font-black text-blue-700 tracking-tight bg-blue-50 px-3.5 py-1 rounded-xl border border-blue-100">
                  {item.stat}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 tracking-tight pt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. FOUNDER'S PHILOSOPHY                              */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-32 md:py-20 bg-gradient-to-b from-blue-50/60 to-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <span className="text-blue-600 text-xs font-black uppercase tracking-widest block">
            CORE BELIEF
          </span>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif">
            Founder's Philosophy
          </h2>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-blue-200 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>

            <blockquote className="text-xl sm:text-3xl font-extrabold text-slate-900 font-serif tracking-tight leading-snug">
              "Knowledge creates clarity. Strategy creates direction. Execution creates growth."
            </blockquote>

            <p className="text-xs sm:text-sm font-bold text-blue-700 uppercase tracking-wider pt-6">
              — Gajendra Kumar Sharma, Founder & Growth Advisor
            </p>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. WORK WITH THE FOUNDER (CONSULTATION CTA)          */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-32 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-slate-900 via-[#0c2340] to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center space-y-8">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-3">
              <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest block">
                ONE-ON-ONE STRATEGIC ADVISORY
              </span>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-serif">
                Business Growth Consultation™
              </h2>

              <p className="text-xs sm:text-base text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto">
                A focused one-on-one advisory session to review your Business Health Assessment, identify growth opportunities, and recommend the most effective next steps for your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:p-10 pt-2">
              <button
                onClick={onContactUs}
                className="w-full sm:w-auto bg-[#ff6f3c] hover:bg-[#e05b2a] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Book Advisor Consultation</span>
              </button>

              <button
                onClick={onLaunchAssessment}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Take Free Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
