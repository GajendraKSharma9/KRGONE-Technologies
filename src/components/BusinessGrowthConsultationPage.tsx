import React from 'react';
import { SharedFooter } from './SharedFooter';
import { 
  ArrowLeft, ArrowRight, Video, FileText, Target, Map, 
  CheckCircle, Clock, Sparkles, Lightbulb, Compass, ArrowDown, ChevronRight
} from 'lucide-react';

interface BusinessGrowthConsultationPageProps {
  onReturnHome?: () => void;
  onContactUs?: () => void;
  onNavigate?: (view: string) => void;
}

export function BusinessGrowthConsultationPage({ 
  onReturnHome, 
  onContactUs,
  onNavigate 
}: BusinessGrowthConsultationPageProps) {
  
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-blue-600/20 selection:text-blue-900">
      
      {/* ---------------------------------------------------- */}
      {/* TOP HEADER NAVIGATION BAR                            */}
      {/* ---------------------------------------------------- */}
      <div className="sticky top-[90px] lg:top-[108px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onReturnHome}
            className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-700 hover:text-blue-600 uppercase tracking-wider transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-blue-600 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>
          
          <div className="flex items-center gap-4 text-[11px] font-medium text-slate-600">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-blue-800 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              Business Growth Consultation™ • KRG ONE
            </span>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 1. HERO HEADER                                       */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden pt-8 pb-10 lg:pt-16 lg:pb-16 bg-gradient-to-b from-blue-50/70 via-slate-50 to-[#f8fafc] border-b border-slate-200">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 0.75px, transparent 0.75px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          
          <div className="inline-flex items-center gap-4 bg-blue-100/80 border border-blue-200/80 px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-900">BUSINESS GROWTH CONSULTATION™</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-serif leading-tight">
            Expert Business Advice.<br className="hidden sm:block" /> Clear Growth Direction.
          </h1>

          <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base font-medium leading-loose pt-2">
            A focused one-on-one consultation designed to help you understand your business challenges, review your Business Health Assessment™, and identify the highest-impact opportunities for growth.
          </p>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. WHAT YOU'LL RECEIVE                               */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-serif tracking-tight mb-2">What's Included</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 sm:p-10">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 text-center flex flex-col items-center gap-4 shadow-sm hover:border-blue-300 transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-slate-800">Review of your Business Growth Assessment™</span>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 text-center flex flex-col items-center gap-4 shadow-sm hover:border-blue-300 transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-slate-800">Discussion of Key Business Challenges</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 text-center flex flex-col items-center gap-4 shadow-sm hover:border-blue-300 transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-slate-800">Priority Growth Recommendations</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 text-center flex flex-col items-center gap-4 shadow-sm hover:border-blue-300 transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-slate-800">Expert Business Guidance</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 text-center flex flex-col items-center gap-4 shadow-sm hover:border-blue-300 transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <Map className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-slate-800">Recommended Next Growth Roadmap</span>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. DETAILS & PRICE CARD                              */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            
            {/* Consultation Details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif tracking-tight">Consultation Details</h2>
                <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-10 md:gap-16 sm:p-10">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
                    <Clock className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Duration</h4>
                    <p className="text-base font-bold text-slate-900">60 Minutes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-10 md:gap-16 sm:p-10">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
                    <Video className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Mode</h4>
                    <p className="text-base font-bold text-slate-900">Online / Video Meeting</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">Ideal For</h4>
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-slate-200 text-slate-800 text-xs font-bold px-3 py-1 rounded-full">Business Owners</span>
                    <span className="bg-slate-200 text-slate-800 text-xs font-bold px-3 py-1 rounded-full">MSMEs</span>
                    <span className="bg-slate-200 text-slate-800 text-xs font-bold px-3 py-1 rounded-full">Startups</span>
                    <span className="bg-slate-200 text-slate-800 text-xs font-bold px-3 py-1 rounded-full">Growing Companies</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Price Card */}
            <div className="bg-white rounded-3xl border-2 border-blue-200 shadow-xl p-8 text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              
              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-rose-600 line-through block">
                  ₹9,999
                </span>
                <div className="text-5xl font-extrabold text-slate-900 tracking-tight font-serif">
                  ₹1,499
                </div>
                <div className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mt-2 border border-rose-200">
                  <Sparkles className="w-3 h-3" /> Limited-Time Introductory Consultation
                </div>
              </div>

              <div className="w-full h-px bg-slate-200"></div>

              <p className="text-sm text-slate-600 font-medium">
                A small investment that can help you make better business decisions with greater confidence.
              </p>

              <button
                onClick={onContactUs}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase px-6 py-4 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Book Advisor Consultation
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. IS THIS RIGHT FOR YOU?                            */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-white border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif tracking-tight">Is This Right for You?</h2>
            <p className="text-slate-600 text-sm font-medium">This consultation is ideal if you want to:</p>
          </div>

          <div className="grid gap-4">
            {[
              "Understand your Business Health Report",
              "Improve business performance",
              "Increase revenue and profitability",
              "Solve operational challenges",
              "Explore AI and digital transformation",
              "Plan your next stage of growth"
            ].map((item, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl flex items-center gap-10 md:gap-16 sm:p-10">
                <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                <span className="font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. SIMPLE GROWTH JOURNEY                             */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-blue-950 text-white text-center border-b border-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black font-serif tracking-tight text-white">What Happens After the Consultation?</h2>
            <p className="text-blue-200 text-sm font-medium">A structured pathway to sustainable growth.</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="bg-white/10 border border-white/20 px-6 py-3 rounded-xl font-bold w-full max-w-sm text-sm">
              Business Growth Assessment™
            </div>
            <ArrowDown className="w-5 h-5 text-blue-400 my-1" />
            <div className="bg-blue-600 border border-blue-500 px-6 py-3 rounded-xl font-bold w-full max-w-sm text-sm shadow-lg">
              Business Growth Consultation™
            </div>
            <ArrowDown className="w-5 h-5 text-blue-400 my-1" />
            <div className="bg-white/10 border border-white/20 px-6 py-3 rounded-xl font-bold w-full max-w-sm text-sm">
              Recommended Growth Path
            </div>
            <ArrowDown className="w-5 h-5 text-blue-400 my-1" />
            <div className="bg-white/10 border border-white/20 px-6 py-3 rounded-xl font-bold w-full max-w-sm text-sm">
              Full Business Growth Diagnostic™
            </div>
            <ArrowDown className="w-5 h-5 text-blue-400 my-1" />
            <div className="bg-white/10 border border-white/20 px-6 py-3 rounded-xl font-bold w-full max-w-sm text-sm">
              90-Day Business Growth Sprint™
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. LARGE CTA                                         */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-[#f8fafc] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif tracking-tight">Ready to Get Started?</h2>
            <p className="text-slate-600 text-sm font-medium">Secure your expert consultation today.</p>
          </div>
          
          <button
            onClick={onContactUs}
            className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase px-8 py-4 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <span>Book Advisor Consultation</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7. FOOTER                                            */}
      {/* ---------------------------------------------------- */}
      <SharedFooter onNavigate={onNavigate} />

    </div>
  );
}
