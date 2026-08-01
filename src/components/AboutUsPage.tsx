import React, { useState } from 'react';
import { 
  Building2, Users, Target, TrendingUp, Award, ShieldCheck, 
  ArrowRight, Check, ChevronDown, Rocket, Sparkles, Lock, 
  Compass, Cpu, Layers, HelpCircle, ArrowLeft, Lightbulb, 
  Handshake, BarChart2, Star, CheckCircle2, Clock, MapPin, 
  Phone, Mail, FileText, Globe, CheckCircle, Zap
} from 'lucide-react';

interface AboutUsPageProps {
  onReturnHome?: () => void;
  onLaunchAssessment?: () => void;
  onContactUs?: () => void;
}

export function AboutUsPage({ onReturnHome, onLaunchAssessment, onContactUs }: AboutUsPageProps) {
  const [activePillarTab, setActivePillarTab] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pillars = [
    {
      num: "01",
      title: "Leadership & Strategic Alignment",
      tagline: "Visionary Governance & Founder Decoupling",
      description: "Decouples daily business operations from manual founder oversight. Establishes outcome-based accountability charts, executive decision boundaries, and long-term valuation targets.",
      outcomes: [
        "Eliminates founder operational bottlenecks",
        "Establishes weekly executive KPI scorecards",
        "Aligns leadership incentives with company valuation"
      ]
    },
    {
      num: "02",
      title: "Sales Engine & Pipeline Velocity",
      tagline: "Predictable Conversion Mechanics",
      description: "Replaces reliance on word-of-mouth with systematic CRM stage-gate pipeline management, behavior-triggered outreach, and strict deal qualification rules.",
      outcomes: [
        "+18% to +25% increase in lead-to-close velocity",
        "Automated SLA follow-up sequences",
        "Predictable monthly revenue forecasting"
      ]
    },
    {
      num: "03",
      title: "Marketing & Customer Retention",
      tagline: "High-Margin Client Acquisition",
      description: "Optimizes customer acquisition costs (CAC) while building systematic client retention and expansion cadences to maximize Lifetime Value (LTV).",
      outcomes: [
        "Lower CAC across acquisition channels",
        "Automated client onboarding & retention cadences",
        "Systematic upsell & account expansion playbooks"
      ]
    },
    {
      num: "04",
      title: "Operational Efficiency & Process SOPs",
      tagline: "Codified Standard Operating Procedures",
      description: "Transforms tribal employee memory into documented digital playbooks, interactive SOP wikis, and swimlane workflow diagrams across all business units.",
      outcomes: [
        "Reclaims up to 40% staff operational capacity",
        "Drastically reduces operational processing errors",
        "Accelerates new hire onboarding from weeks to days"
      ]
    },
    {
      num: "05",
      title: "Financial Controls & Unit Margins",
      tagline: "13-Week Cash Flow & Profit Protection",
      description: "Shifts accounting from retrospective tax reporting to real-time 13-week rolling cash forecasts, unit margin audits, and leak identification.",
      outcomes: [
        "Expands gross profit margins by +3% to +5%",
        "Eliminates unbilled scope creep & vendor waste",
        "Provides real-time Business Intelligence cockpit"
      ]
    },
    {
      num: "06",
      title: "People, Team & Governance",
      tagline: "High-Performance Autonomous Teams",
      description: "Structures clear role definitions, performance scorecards, and management review cadences to cultivate ownership and execution discipline.",
      outcomes: [
        "Reduces key-person dependency across departments",
        "Fosters outcome-oriented team culture",
        "Clear delegation boundaries for middle management"
      ]
    },
    {
      num: "07",
      title: "AI & Technology Integration",
      tagline: "Next-Gen Cloud & Automation Stacks",
      description: "Architects custom cloud workflows, automated API webhooks, and AI agent nodes to eliminate manual re-entry and supercharge execution speed.",
      outcomes: [
        "Eliminates redundant manual data entry",
        "Integrates CRM, ERP, billing, and ops software",
        "Deploys custom AI agents for rapid decision support"
      ]
    }
  ];

  const whatWeDoList = [
    {
      title: "Business Growth Consulting",
      desc: "Comprehensive 360° diagnostics, bottleneck analysis, and customized growth strategies for MSMEs.",
      icon: <Building2 className="w-6 h-6 text-[#275df5]" />
    },
    {
      title: "Revenue Growth Strategy",
      desc: "Structured sales pipeline velocity optimization, high-margin conversion playbooks, and CRM stage-gates.",
      icon: <TrendingUp className="w-6 h-6 text-[#275df5]" />
    },
    {
      title: "AI Business Solutions",
      desc: "Deployment of custom AI agents, automated workflow nodes, and predictive business intelligence tools.",
      icon: <Cpu className="w-6 h-6 text-[#275df5]" />
    },
    {
      title: "Business Transformation",
      desc: "Complete operational restructuring, SOP playbook creation, and owner-dependency decoupling.",
      icon: <Layers className="w-6 h-6 text-[#275df5]" />
    },
    {
      title: "Growth Implementation",
      desc: "Hands-on 90-day execution sprints with weekly review cadences alongside senior advisors.",
      icon: <Rocket className="w-6 h-6 text-[#275df5]" />
    }
  ];

  const whyKrgoneList = [
    {
      title: "Practical Business Expertise",
      desc: "Backed by 20+ years of corporate leadership, executive sales mastery, and real-world enterprise experience."
    },
    {
      title: "Structured Growth Framework",
      desc: "Powered by the proprietary KRGONE Business Growth OS™ and 7 Growth Pillars™ diagnostic engine."
    },
    {
      title: "AI-Enabled Consulting",
      desc: "Combining senior human strategic guidance with next-gen AI tools for rapid data analysis and execution."
    },
    {
      title: "Measurable Business Outcomes",
      desc: "Focused strictly on quantitative results: cash flow visibility, profit margin expansion, and scaling velocity."
    }
  ];

  const engagementStages = [
    {
      stage: "STAGE 01",
      title: "Free Business Growth Assessment™",
      duration: "3–5 Minutes • Self-Paced",
      price: "FREE",
      desc: "Instant quantitative scan across the 7 Growth Pillars™ generating a 15-page diagnostic dossier with your Business Growth Score™.",
      highlights: ["No-cost diagnostic", "Pillar score breakdown", "Prioritized action map"]
    },
    {
      stage: "STAGE 02",
      title: "Business Growth Consultation™",
      duration: "60-Minute Executive Session",
      price: "Advisory Session",
      desc: "One-on-one strategy review with a Senior Growth Advisor to review your diagnostic metrics and map quick-win interventions.",
      highlights: ["Dossier deep dive", "Bottleneck identification", "Tailored sprint roadmap"]
    },
    {
      stage: "STAGE 03",
      title: "Full Business Growth Diagnostic™",
      duration: "14 Days • On-Ground + Remote",
      price: "₹49,999 Starting",
      desc: "In-depth audit across leadership, sales, operations, and finance. Includes employee interviews, workflow mapping, and complete Growth Report™.",
      highlights: ["On-ground workflow audit", "Team interviews", "Custom 90-day blueprint"]
    },
    {
      stage: "STAGE 04",
      title: "90-Day Business Growth Sprint™",
      duration: "90 Days • Weekly Reviews",
      price: "Monthly Retainer",
      desc: "Hands-on implementation of priority recommendations. We work alongside your team to build SOPs, optimize CRM pipelines, and drive net margins.",
      highlights: ["Weekly execution cadences", "SOP playbook drafting", "KPI dashboard setup"]
    },
    {
      stage: "STAGE 05",
      title: "Fractional Sales Head™",
      duration: "Min. 6 Months • By Invitation",
      price: "Custom Retainer",
      desc: "High-level strategic sales leadership without the full-time C-suite overhead. Provides revenue planning, pipeline management, and deal coaching.",
      highlights: ["C-level revenue leadership", "Pipeline governance", "Sales team hiring & coaching"]
    }
  ];

  const faqs = [
    {
      q: "What is KRGONE and what does the firm specialize in?",
      a: "KRGONE is a Business Growth Consulting firm that helps MSMEs and growing businesses improve performance through structured strategy, practical consulting, and AI-enabled business transformation using our proprietary KRGONE Business Growth OS™."
    },
    {
      q: "Who is Gajendra Kumar Sharma?",
      a: "Gajendra Kumar Sharma is the Founder & Business Growth Advisor at KRGONE. With over 20 years of hands-on experience in corporate development, sales leadership, revenue expansion, and systemization, he created the KRGONE Growth OS™ to empower business leaders to scale without owner dependency."
    },
    {
      q: "How does the KRGONE Business Growth OS™ differ from traditional consulting?",
      a: "Traditional management consulting often results in thick reports that sit on a shelf. KRGONE combines quantitative data diagnostics, AI-enabled predictive insights, ready-to-deploy SOP playbooks, and 90-day hands-on implementation sprints with weekly review cadences to guarantee measurable execution."
    },
    {
      q: "Is our business data protected under a Non-Disclosure Agreement (NDA)?",
      a: "Yes, 100%. Every client engagement is protected under a legally binding Non-Disclosure Agreement (NDA). Your financial metrics, operational workflows, and strategic plans remain strictly confidential."
    },
    {
      q: "How do we begin working with KRGONE?",
      a: "The ideal starting point is our Free Business Growth Assessment™. It takes just 3 to 5 minutes, requires no credit card, and delivers an instant quantitative evaluation of your 7 Growth Pillars™."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-blue-600/20 selection:text-blue-900">
      
      {/* TOP HEADER NAVIGATION BAR */}
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
              About KRGONE • Business Growth OS™
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
      {/* 1. HERO SECTION (LITE THEME MATCHING CONTACT US)     */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-blue-50/70 via-slate-50 to-[#f8fafc] border-b border-slate-200">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 0.75px, transparent 0.75px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200/80 px-4 py-1.5 rounded-full mb-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900">ABOUT KRGONE • Knowledge. Revenue. Growth.</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-serif">
            Helping Businesses Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-800 to-[#b45309]">
              Sustainable Growth.
            </span>
          </h1>

          {/* Core Intro Paragraphs */}
          <div className="max-w-3xl mx-auto space-y-4 text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            <p>
              <strong className="text-slate-900 font-bold">KRGONE</strong> is a Business Growth Consulting firm that helps MSMEs and growing businesses improve performance through structured strategy, practical consulting, and AI-enabled business transformation.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm font-normal">
              Using the <strong className="text-blue-700 font-semibold">KRGONE Business Growth OS™</strong>, we diagnose business challenges, identify growth opportunities, and help organizations implement measurable improvements.
            </p>
          </div>

          {/* Hero Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-8 sm:p-10 max-w-md mx-auto">
            <button
              onClick={onLaunchAssessment}
              className="w-full sm:w-auto bg-[#275df5] hover:bg-[#1848d1] text-white font-black text-xs sm:text-sm uppercase tracking-wider py-3.5 px-7 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>Take Free Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onContactUs}
              className="w-full sm:w-auto bg-[#ff6f3c] hover:bg-[#e05b2a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Book Advisor Consultation</span>
            </button>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. OUR VISION & OUR MISSION                          */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-32 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#275df5] text-xs font-black uppercase tracking-widest block">
              OUR FOUNDATIONAL PURPOSE
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-serif">
              Our Vision & Mission
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Guiding enterprises toward predictable, self-sustaining revenue scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* OUR VISION CARD */}
            <div className="bg-[#f8fafc] rounded-2xl p-8 border border-slate-200 shadow-xs hover:border-[#275df5]/40 transition-all space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#275df5]">
                <Compass className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-extrabold text-[#275df5] uppercase tracking-wider block">
                  STRATEGIC DIRECTION
                </span>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed pt-1">
                  "To become India's most trusted Business Growth Consulting firm, empowering businesses to achieve sustainable, scalable growth through strategy, systems, and innovation."
                </p>
              </div>
            </div>

            {/* OUR MISSION CARD */}
            <div className="bg-[#f8fafc] rounded-2xl p-8 border border-slate-200 shadow-xs hover:border-[#275df5]/40 transition-all space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Target className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider block">
                  EXECUTION MANDATE
                </span>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed pt-1">
                  "To transform business knowledge into measurable revenue growth by combining practical consulting, structured frameworks, and AI-enabled solutions."
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. WHAT WE DO (5 CORE SERVICES)                      */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-32 md:py-20 bg-[#f4f6fb] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[#275df5] text-xs font-black uppercase tracking-widest block">
              CORE ADVISORY CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-serif">
              What We Do
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Five integrated business transformation pillars designed to eliminate operational friction and accelerate profit margins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {whatWeDoList.map((service, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xs hover:border-[#275df5] hover:shadow-md transition-all space-y-3 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1 text-[11px] font-bold text-[#275df5]">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. WHY KRGONE? (4 KEY DIFFERENTIATORS)               */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-32 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[#275df5] text-xs font-black uppercase tracking-widest block">
              THE KRGONE ADVANTAGE
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-serif">
              Why KRGONE?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Why leading MSMEs and enterprise founders trust KRGONE for their operational growth journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyKrgoneList.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#f8fafc] rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xs hover:border-emerald-500/50 transition-all space-y-3"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 font-extrabold text-sm">
                  ✔
                </div>
                <h3 className="text-base font-black text-slate-900 tracking-tight">
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
      {/* 9. CONFIDENTIALITY COMMITMENT                        */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-32 bg-[#f4f6fb] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-blue-200 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#275df5] shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div className="space-y-1 text-center md:text-left flex-1">
              <h3 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
                <span>100% Confidentiality & Professional NDA Guarantee</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Every client engagement with KRGONE is protected under a legally binding Non-Disclosure Agreement (NDA). Your proprietary metrics, financial accounts, and operational strategies remain strictly confidential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 10. FAQS SECTION                                     */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-32 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-[#275df5] text-xs font-black uppercase tracking-widest block">
              COMMON INQUIRIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-serif">
              Frequently Asked Questions About KRGONE
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div 
                key={i}
                className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-5 shadow-xs space-y-2 cursor-pointer transition-all hover:border-blue-300 hover:bg-white"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between gap-8 sm:p-10">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight pr-2">
                    {faq.q}
                  </h4>
                  <ChevronDown className={`w-4 h-4 text-[#275df5] shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </div>

                {openFaq === i && (
                  <p className="text-xs text-slate-600 font-medium leading-relaxed pt-2 border-t border-slate-200">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
