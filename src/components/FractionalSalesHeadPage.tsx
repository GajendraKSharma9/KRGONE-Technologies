import React from 'react';
import { SharedFooter } from './SharedFooter';
import { 
  ArrowLeft, ArrowRight, CheckCircle, Sparkles, ChevronRight,
  TrendingUp, Settings, Users, Target, Activity, Map, 
  Lightbulb, FileText, Cpu, Briefcase, BarChart, 
  LineChart, Handshake, ShieldCheck
} from 'lucide-react';

interface FractionalSalesHeadPageProps {
  onReturnHome?: () => void;
  onContactUs?: () => void;
  onNavigate?: (view: string) => void;
}

export function FractionalSalesHeadPage({ 
  onReturnHome, 
  onContactUs,
  onNavigate 
}: FractionalSalesHeadPageProps) {
  
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
              Fractional Sales Head™ • KRG ONE
            </span>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 1. HERO HEADER                                       */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden pt-12 pb-14 lg:pt-20 lg:pb-24 bg-gradient-to-br from-slate-900 via-[#0f2142] to-blue-950 border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          
          <div className="inline-flex items-center gap-4 bg-blue-900/40 border border-blue-500/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-200">FRACTIONAL SALES HEAD™</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-serif leading-tight">
            Strategic Sales Leadership <br className="hidden sm:block" /> Without Full-Time Cost
          </h1>

          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full my-6"></div>

          <p className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-base lg:text-lg font-medium leading-loose">
            Not every growing business needs a full-time Sales Head—but every growing business needs experienced sales leadership. The Fractional Sales Head™ gives your business ongoing strategic guidance, sales leadership, and performance management through a flexible monthly engagement.
          </p>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. HOW WE HELP (7 Feature Cards)                     */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">STRATEGIC SUPPORT</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-serif tracking-tight">How We Help</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-10 md:gap-16 sm:gap-10 md:gap-16 lg:gap-10">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">Sales Strategy & Planning</span>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">Revenue Growth Reviews</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <BarChart className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">Sales Pipeline Management</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">Team Coaching & Performance</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 lg:col-start-2 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Map className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">Go-To-Market Support</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <LineChart className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">KPI Monitoring & Business Reviews</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Lightbulb className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">Leadership Guidance</span>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. IDEAL FOR & ENGAGEMENT MODEL & OUTCOMES           */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            <div className="space-y-12">
              {/* Ideal For */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900 font-serif tracking-tight">Ideal For</h3>
                  <div className="w-10 h-1 bg-blue-600 rounded-full"></div>
                </div>

                <div className="grid gap-4">
                  <div className="border border-slate-200 rounded-xl p-4 flex items-start gap-4 bg-white shadow-sm">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="font-bold text-slate-800 text-sm">Growing MSMEs</span>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-4 flex items-start gap-4 bg-white shadow-sm">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="font-bold text-slate-800 text-sm">Distribution Businesses</span>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-4 flex items-start gap-4 bg-white shadow-sm">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="font-bold text-slate-800 text-sm">Manufacturing Companies</span>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-4 flex items-start gap-4 bg-white shadow-sm">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="font-bold text-slate-800 text-sm">Startups Scaling Sales</span>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-4 flex items-start gap-4 bg-white shadow-sm">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="font-bold text-slate-800 text-sm">Businesses Without a Sales Leader</span>
                  </div>
                </div>
              </div>

              {/* Business Outcomes */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900 font-serif tracking-tight">Business Outcomes</h3>
                  <div className="w-10 h-1 bg-emerald-500 rounded-full"></div>
                </div>

                <div className="grid gap-4">
                  <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 flex items-center gap-10 md:gap-16 sm:p-10 shadow-sm">
                    <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="font-bold text-slate-800">Predictable Revenue Growth</span>
                  </div>
                  <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 flex items-center gap-10 md:gap-16 sm:p-10 shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="font-bold text-slate-800">Stronger Sales Discipline</span>
                  </div>
                  <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 flex items-center gap-10 md:gap-16 sm:p-10 shadow-sm">
                    <Users className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="font-bold text-slate-800">Better Sales Team Performance</span>
                  </div>
                  <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 flex items-center gap-10 md:gap-16 sm:p-10 shadow-sm">
                    <BarChart className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="font-bold text-slate-800">Improved Forecast Accuracy</span>
                  </div>
                  <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 flex items-center gap-10 md:gap-16 sm:p-10 shadow-sm">
                    <Handshake className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="font-bold text-slate-800">Long-Term Business Partnership</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Engagement Model Card */}
            <div className="lg:pt-16">
              <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl p-8 sm:p-12 text-center space-y-8 sticky top-32">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900 font-serif tracking-tight">Engagement Model</h3>
                  <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-6">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-serif text-blue-900">
                    Monthly Strategic Engagement
                  </div>
                  
                  <p className="text-slate-600 font-medium max-w-sm mx-auto leading-loose">
                    Flexible support based on your business requirements.
                  </p>

                  <div className="inline-flex items-center gap-4 bg-blue-50 text-blue-700 text-sm font-bold tracking-wide px-5 py-2.5 rounded-full border border-blue-200">
                    Custom plans available
                  </div>
                </div>
                
                <div className="pt-8 border-t border-slate-200">
                  <p className="text-sm font-bold text-slate-700 leading-loose italic">
                    "Gain the experience of a senior sales leader—without the cost and commitment of a full-time executive."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. CTA                                               */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0f2142] via-slate-900 to-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-white font-serif tracking-tight">Let's Build Sustainable Growth Together</h2>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-xl mx-auto shadow-2xl space-y-8">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">Fractional Sales Head™</h3>
              <p className="text-sm font-medium text-blue-200">Monthly Strategic Partnership</p>
            </div>
            
            <button
              onClick={onContactUs}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm lg:text-base uppercase px-8 py-5 rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-4"
            >
              <span>Schedule a Strategy Discussion</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. FOOTER                                            */}
      {/* ---------------------------------------------------- */}
      <SharedFooter onNavigate={onNavigate} />

    </div>
  );
}
