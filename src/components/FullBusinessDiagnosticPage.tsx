import React from 'react';
import { SharedFooter } from './SharedFooter';
import { 
  ArrowLeft, ArrowRight, Building2, FileText, Target, Map, 
  CheckCircle, Clock, Sparkles, Lightbulb, Compass, ChevronRight, Phone,
  BarChart, Users, Settings, Cpu, LineChart, Globe, Briefcase, Factory, Shield
} from 'lucide-react';

interface FullBusinessDiagnosticPageProps {
  onReturnHome?: () => void;
  onContactUs?: () => void;
  onNavigate?: (view: string) => void;
}

export function FullBusinessDiagnosticPage({ 
  onReturnHome, 
  onContactUs,
  onNavigate 
}: FullBusinessDiagnosticPageProps) {
  
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
              Full Business Growth Diagnostic™ • KRG ONE
            </span>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 1. HERO HEADER                                       */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden pt-16 lg:pt-24 pb-16 lg:pb-24 lg:pt-20 lg:pb-20 bg-gradient-to-b from-[#0f2142] to-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          
          <div className="inline-flex items-center gap-4 bg-blue-900/40 border border-blue-500/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-200">FULL BUSINESS GROWTH DIAGNOSTIC™</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-serif leading-tight">
            A Complete Business Growth Assessment <br className="hidden sm:block" /> for Organizations Ready to Scale
          </h1>

          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full my-6"></div>

          <p className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-base font-medium leading-loose">
            Your business deserves more than assumptions. The Full Business Growth Diagnostic™ is a comprehensive consulting engagement designed to uncover growth bottlenecks, improve operational performance, and build a practical roadmap for sustainable business growth. Unlike generic consulting reports, every recommendation is tailored to your business, industry, and growth objectives.
          </p>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. WHAT YOU RECEIVE                                  */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">ENGAGEMENT DELIVERABLES</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif tracking-tight">What You Receive</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-10 md:gap-16 sm:gap-10 md:gap-16 lg:gap-10">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">Comprehensive Business Assessment</span>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">Leadership Interview</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Settings className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">Process & Performance Review</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <LineChart className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">Revenue Growth Analysis</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 lg:col-start-2 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">AI Growth Opportunity Assessment</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <BarChart className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">Executive Business Diagnostic Report</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Map className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">90-Day Strategic Growth Roadmap</span>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. ENGAGEMENT DETAILS                                */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="p-8 sm:p-10 text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif tracking-tight">Engagement Details</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 sm:gap-10 md:gap-16 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 pt-4">
                <div className="space-y-2 pt-4 sm:pt-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Duration</span>
                  <div className="text-xl font-bold text-slate-900 flex items-center justify-center gap-4">
                    <Clock className="w-5 h-5 text-blue-600" /> 14 Days
                  </div>
                </div>
                
                <div className="space-y-2 pt-4 sm:pt-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Mode</span>
                  <div className="text-xl font-bold text-slate-900 flex items-center justify-center gap-4">
                    <Globe className="w-5 h-5 text-blue-600" /> On-site + Remote
                  </div>
                </div>

                <div className="space-y-2 pt-4 sm:pt-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Starting Investment</span>
                  <div className="text-xl font-black text-slate-900 flex items-center justify-center gap-4 font-serif text-blue-900">
                    ₹49,999
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. BEST SUITED FOR & BUSINESS OUTCOMES               */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Best Suited For */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900 font-serif tracking-tight">Best Suited For</h3>
                <div className="w-10 h-1 bg-blue-600 rounded-full"></div>
              </div>

              <div className="grid grid-cols-2 gap-10 md:gap-16 sm:p-10">
                <div className="border border-slate-200 rounded-xl p-4 flex items-center gap-4 bg-slate-50">
                  <Briefcase className="w-5 h-5 text-slate-400 shrink-0" />
                  <span className="font-bold text-slate-800 text-sm">MSMEs</span>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 flex items-center gap-4 bg-slate-50">
                  <Factory className="w-5 h-5 text-slate-400 shrink-0" />
                  <span className="font-bold text-slate-800 text-sm">Manufacturing Businesses</span>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 flex items-center gap-4 bg-slate-50">
                  <Building2 className="w-5 h-5 text-slate-400 shrink-0" />
                  <span className="font-bold text-slate-800 text-sm">Distribution Companies</span>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 flex items-center gap-4 bg-slate-50">
                  <Target className="w-5 h-5 text-slate-400 shrink-0" />
                  <span className="font-bold text-slate-800 text-sm">Service Organizations</span>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 flex items-center gap-4 bg-slate-50">
                  <TrendingUp className="w-5 h-5 text-slate-400 shrink-0" />
                  <span className="font-bold text-slate-800 text-sm">Growing Businesses</span>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 flex items-center gap-4 bg-slate-50">
                  <Users className="w-5 h-5 text-slate-400 shrink-0" />
                  <span className="font-bold text-slate-800 text-sm">Family-Owned Enterprises</span>
                </div>
              </div>
            </div>

            {/* Business Outcomes */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900 font-serif tracking-tight">Business Outcomes</h3>
                <p className="text-sm font-medium text-slate-600">After completing the diagnostic, you'll gain:</p>
                <div className="w-10 h-1 bg-emerald-500 rounded-full mt-2"></div>
              </div>

              <div className="space-y-3">
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 flex items-center gap-10 md:gap-16 sm:p-10">
                  <Shield className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="font-bold text-slate-800">Clear Business Priorities</span>
                </div>
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 flex items-center gap-10 md:gap-16 sm:p-10">
                  <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="font-bold text-slate-800">Revenue Growth Opportunities</span>
                </div>
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 flex items-center gap-10 md:gap-16 sm:p-10">
                  <Settings className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="font-bold text-slate-800">Operational Improvement Plan</span>
                </div>
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 flex items-center gap-10 md:gap-16 sm:p-10">
                  <Compass className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="font-bold text-slate-800">Strategic Decision Framework</span>
                </div>
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 flex items-center gap-10 md:gap-16 sm:p-10">
                  <Map className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="font-bold text-slate-800">Actionable Growth Roadmap</span>
                </div>
              </div>
            </div>

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
              onClick={() => onNavigate && onNavigate('ASSESSMENT_PORTAL')}
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>Take Free Assessment</span>
              <ChevronRight className="w-5 h-5" />
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
      {/* 6. FOOTER                                            */}
      {/* ---------------------------------------------------- */}
      <SharedFooter onNavigate={onNavigate} />

    </div>
  );
}

// Dummy icon for TrendingUp since it wasn't imported in this scope but might be needed
function TrendingUp(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
