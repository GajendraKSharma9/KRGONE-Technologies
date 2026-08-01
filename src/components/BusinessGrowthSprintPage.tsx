import React from 'react';
import { SharedFooter } from './SharedFooter';
import { 
  ArrowLeft, ArrowRight, CheckCircle, Sparkles, ChevronRight,
  TrendingUp, Settings, Users, Target, Activity, Zap, Shield, 
  Map, Lightbulb, FileText, Cpu, Clock, Briefcase, BarChart, CheckCircle2
} from 'lucide-react';

interface BusinessGrowthSprintPageProps {
  onReturnHome?: () => void;
  onContactUs?: () => void;
  onNavigate?: (view: string) => void;
}

export function BusinessGrowthSprintPage({ 
  onReturnHome, 
  onContactUs,
  onNavigate 
}: BusinessGrowthSprintPageProps) {
  
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
              90-Day Business Growth Sprint™ • KRG ONE
            </span>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 1. HERO HEADER                                       */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden pt-12 pb-14 lg:pt-20 lg:pb-24 bg-gradient-to-br from-emerald-900 via-[#0f2142] to-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          
          <div className="inline-flex items-center gap-4 bg-emerald-900/40 border border-emerald-500/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-200">90-DAY BUSINESS GROWTH SPRINT™</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-serif leading-tight">
            From Strategy to <br className="hidden sm:block" /> Measurable Results
          </h1>

          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto rounded-full my-6"></div>

          <p className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-base lg:text-lg font-medium leading-loose">
            A great strategy creates value only when it is executed. The 90-Day Business Growth Sprint™ is a structured implementation program where KRGONE works alongside your leadership team to convert recommendations into measurable business outcomes.
          </p>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. WHAT WE DO (7 Feature Cards)                      */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">SPRINT DELIVERABLES</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-serif tracking-tight">What We Do</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-10 md:gap-16 sm:gap-10 md:gap-16 lg:gap-10">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Map className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">Implement the Business Growth Roadmap</span>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">Weekly Progress Reviews</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">Sales & Revenue Improvement</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Settings className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">Process & SOP Implementation</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300 lg:col-start-2 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <BarChart className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">KPI Monitoring & Performance Tracking</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">Leadership Coaching</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-10 md:gap-16 sm:p-10 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-relaxed">AI & Digital Enablement</span>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. 90-DAY JOURNEY                                    */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-serif tracking-tight">90-Day Journey</h2>
            <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 relative">
            
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-emerald-200 z-0"></div>

            {/* Month 1 */}
            <div className="bg-white rounded-2xl border-2 border-emerald-100 shadow-md p-8 sm:p-10 relative z-10 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-black shadow-lg mx-auto mb-10 md:mb-14 md:mb-10 border-4 border-white">1</div>
              <h3 className="text-xl font-black text-center text-slate-900 mb-10 md:mb-14 md:mb-10 md:mb-10 md:mb-14 font-serif">Month 1 – Build</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-4.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-700">Prioritize initiatives</span>
                </li>
                <li className="flex items-start gap-4.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-700">Set KPIs</span>
                </li>
                <li className="flex items-start gap-4.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-700">Standardize processes</span>
                </li>
              </ul>
            </div>

            {/* Month 2 */}
            <div className="bg-white rounded-2xl border-2 border-emerald-100 shadow-md p-8 sm:p-10 relative z-10 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-black shadow-lg mx-auto mb-10 md:mb-14 md:mb-10 border-4 border-white">2</div>
              <h3 className="text-xl font-black text-center text-slate-900 mb-10 md:mb-14 md:mb-10 md:mb-10 md:mb-14 font-serif">Month 2 – Execute</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-4.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-700">Implement improvements</span>
                </li>
                <li className="flex items-start gap-4.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-700">Review progress</span>
                </li>
                <li className="flex items-start gap-4.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-700">Remove bottlenecks</span>
                </li>
              </ul>
            </div>

            {/* Month 3 */}
            <div className="bg-white rounded-2xl border-2 border-emerald-100 shadow-md p-8 sm:p-10 relative z-10 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-black shadow-lg mx-auto mb-10 md:mb-14 md:mb-10 border-4 border-white">3</div>
              <h3 className="text-xl font-black text-center text-slate-900 mb-10 md:mb-14 md:mb-10 md:mb-10 md:mb-14 font-serif">Month 3 – Scale</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-4.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-700">Optimize performance</span>
                </li>
                <li className="flex items-start gap-4.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-700">Strengthen systems</span>
                </li>
                <li className="flex items-start gap-4.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-700">Prepare for sustainable growth</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. IDEAL FOR & OUTCOMES & INVESTMENT                 */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            <div className="space-y-12">
              {/* Ideal For */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900 font-serif tracking-tight">Ideal For</h3>
                  <div className="w-10 h-1 bg-emerald-600 rounded-full"></div>
                </div>

                <div className="grid gap-4">
                  <div className="border border-slate-200 rounded-xl p-4 flex items-start gap-4 bg-slate-50">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-bold text-slate-800 text-sm">Businesses ready to implement change</span>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-4 flex items-start gap-4 bg-slate-50">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-bold text-slate-800 text-sm">Companies with completed Business Growth Diagnostic™</span>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-4 flex items-start gap-4 bg-slate-50">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-bold text-slate-800 text-sm">Leadership teams seeking measurable results</span>
                  </div>
                </div>
              </div>

              {/* Expected Outcomes */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900 font-serif tracking-tight">Expected Outcomes</h3>
                  <div className="w-10 h-1 bg-blue-600 rounded-full"></div>
                </div>

                <div className="grid gap-4">
                  <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-center gap-10 md:gap-16 sm:p-10">
                    <TrendingUp className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="font-bold text-slate-800">Higher Revenue Growth</span>
                  </div>
                  <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-center gap-10 md:gap-16 sm:p-10">
                    <Settings className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="font-bold text-slate-800">Improved Operational Efficiency</span>
                  </div>
                  <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-center gap-10 md:gap-16 sm:p-10">
                    <Users className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="font-bold text-slate-800">Better Leadership Alignment</span>
                  </div>
                  <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-center gap-10 md:gap-16 sm:p-10">
                    <Shield className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="font-bold text-slate-800">Stronger Business Systems</span>
                  </div>
                  <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-center gap-10 md:gap-16 sm:p-10">
                    <Activity className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="font-bold text-slate-800">Sustainable Business Growth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Card */}
            <div className="lg:pt-16">
              <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-3xl border border-emerald-800 shadow-2xl p-8 sm:p-12 text-center space-y-8 sticky top-32">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white font-serif tracking-tight">Investment</h3>
                  <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-2">
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight font-serif">
                    ₹2,49,000
                  </div>
                  <div className="inline-flex items-center gap-4 bg-emerald-500/20 text-emerald-300 text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mt-2 border border-emerald-500/30">
                    <Clock className="w-4 h-4" /> 90-Day Engagement
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. CTA                                               */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0f2142] via-slate-900 to-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-white font-serif tracking-tight">Ready to Transform Your Business?</h2>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-xl mx-auto shadow-2xl space-y-8">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">90-Day Business Growth Sprint™</h3>
              <p className="text-sm font-medium text-blue-200">₹2,49,000 | 90-Day Implementation Program</p>
            </div>
            
            <button
              onClick={onContactUs}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm lg:text-base uppercase px-8 py-5 rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-4"
            >
              <span>Start Business Growth Sprint</span>
              <ChevronRight className="w-5 h-5" />
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
