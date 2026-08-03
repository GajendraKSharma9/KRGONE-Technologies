import React from 'react';
import {
  ArrowRight,
  Landmark,
  Cpu,
  Target,
  TrendingUp,
  Settings,
  Code2,
  Bot,
  Users,
  Layout,
  Network,
  Layers,
  Sparkles,
  ClipboardCheck,
  Globe
} from 'lucide-react';

interface GatewayPageProps {
  onNavigateToConsulting: () => void;
  onNavigateToTechnologies: () => void;
}

export function GatewayPage({ onNavigateToConsulting, onNavigateToTechnologies }: GatewayPageProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-x-hidden selection:bg-[#0B1F3A] selection:text-white pb-24">
      
      {/* HERO SECTION */}
      <div className="relative pt-8 pb-4 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0B1F3A] leading-none mb-3">
          KRGONE
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#D4AF37] tracking-tight mt-3">
            Empowering Businesses for Growth
          </span>
        </h1>

        {/* Subtitle list */}
        <div className="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-full bg-white shadow-sm border border-slate-200/90 my-4 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#0B1F3A]">
          <span>Strategy</span>
          <span className="text-[#D4AF37] font-black">•</span>
          <span>Technology</span>
          <span className="text-[#D4AF37] font-black">•</span>
          <span>Execution</span>
        </div>

        {/* Paragraph */}
        <p className="text-slate-900 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-semibold bg-white px-6 py-3.5 rounded-2xl border border-slate-300/80 shadow-md">
          Two specialized divisions. One shared mission.<br className="hidden sm:inline" />
          Helping organizations solve complex business challenges through strategic consulting and AI-powered technology solutions.
        </p>
      </div>

      {/* TWO MAIN DIVISION CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 -mt-1 sm:-mt-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT CARD: KRGONE CONSULTING */}
          <div 
            onClick={onNavigateToConsulting}
            className="group cursor-pointer rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col bg-white border border-slate-200/80"
          >
            {/* Top Half - Dark Blue Executive Header */}
            <div className="relative bg-[#0A1628] p-8 sm:p-10 text-white min-h-[280px] flex flex-col justify-between overflow-hidden">
              
              {/* Background Executive Boardroom Meeting Graphic Visual */}
              <div className="absolute top-0 right-0 w-[55%] h-full opacity-20 pointer-events-none overflow-hidden">
                <svg className="w-full h-full text-blue-400" viewBox="0 0 200 200" fill="none">
                  {/* Glass Office Panes */}
                  <rect x="20" y="20" width="160" height="160" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="1" />
                  
                  {/* Conference Table & Silhouettes */}
                  <ellipse cx="100" cy="140" rx="60" ry="20" fill="currentColor" fillOpacity="0.3" />
                  <circle cx="60" cy="120" r="10" fill="currentColor" />
                  <circle cx="100" cy="115" r="10" fill="currentColor" />
                  <circle cx="140" cy="120" r="10" fill="currentColor" />

                  {/* Growth Chart on Presentation Board */}
                  <rect x="40" y="40" width="70" height="50" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
                  <path d="M 50 80 L 65 65 L 80 70 L 95 50" stroke="#2563EB" strokeWidth="3" />
                </svg>
              </div>

              <div className="relative z-10">
                {/* Header Badge Icon - Greek Temple Landmark */}
                <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center mb-5 shadow-lg">
                  <Landmark className="w-6 h-6" strokeWidth={2} />
                </div>

                {/* Title */}
                <h2 className="text-3xl font-extrabold tracking-tight mb-2">
                  KRGONE <span className="text-[#3B82F6]">Consulting</span>
                </h2>

                {/* Subtitle */}
                <p className="text-white font-bold text-sm sm:text-base mb-2">
                  Business Growth Intelligence Platform
                </p>

                {/* Accent Line */}
                <div className="w-12 h-1 bg-[#2563EB] mb-5 rounded-full"></div>

                {/* Paragraph */}
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-md font-medium">
                  We help founders, business owners and leadership teams accelerate growth through strategic consulting, business diagnostics and our proprietary Business Growth Operating System™.
                </p>
              </div>
            </div>

            {/* Bottom Half - Focus Areas & Button */}
            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></span>
                  <p className="text-xs font-black tracking-widest text-[#0B1F3A] uppercase">
                    KEY FOCUS AREAS
                  </p>
                </div>

                <div className="grid grid-cols-5 gap-1.5 sm:gap-3 text-center mb-8">
                  {/* Focus 1 */}
                  <div className="flex flex-col items-center group/item">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-center mb-2.5 text-[#2563EB] shadow-sm group-hover/item:scale-105 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                      <Landmark className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] sm:text-[12px] leading-tight sm:leading-snug text-[#0B1F3A] font-extrabold">
                      Business<br />Strategy
                    </span>
                  </div>

                  {/* Focus 2 */}
                  <div className="flex flex-col items-center group/item">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-center mb-2.5 text-[#2563EB] shadow-sm group-hover/item:scale-105 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] sm:text-[12px] leading-tight sm:leading-snug text-[#0B1F3A] font-extrabold">
                      Revenue<br />Growth
                    </span>
                  </div>

                  {/* Focus 3 */}
                  <div className="flex flex-col items-center group/item">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-center mb-2.5 text-[#2563EB] shadow-sm group-hover/item:scale-105 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                      <Cpu className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] sm:text-[12px] leading-tight sm:leading-snug text-[#0B1F3A] font-extrabold">
                      AI<br />Readiness
                    </span>
                  </div>

                  {/* Focus 4 */}
                  <div className="flex flex-col items-center group/item">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-center mb-2.5 text-[#2563EB] shadow-sm group-hover/item:scale-105 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                      <Layers className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] sm:text-[12px] leading-tight sm:leading-snug text-[#0B1F3A] font-extrabold">
                      Business<br />Transformation
                    </span>
                  </div>

                  {/* Focus 5 */}
                  <div className="flex flex-col items-center group/item">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-100/90 border border-amber-400/80 flex items-center justify-center mb-2.5 text-[#D4AF37] shadow-md group-hover/item:scale-105 group-hover/item:bg-[#D4AF37] group-hover/item:text-slate-900 transition-all animate-pulse-glow">
                      <ClipboardCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#B8860B] group-hover/item:text-slate-900" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] sm:text-[12px] leading-tight sm:leading-snug text-[#0B1F3A] font-extrabold">
                      Free Growth<br />Assessment
                    </span>
                  </div>
                </div>
              </div>

              {/* Button */}
              <button className="w-full bg-[#0A1628] hover:bg-[#112240] text-white py-3.5 px-6 rounded-full font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-md group-hover:scale-[1.01]">
                Enter KRGONE Consulting
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT CARD: KRGONE TECHNOLOGIES */}
          <div 
            onClick={onNavigateToTechnologies}
            className="group cursor-pointer rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col bg-white border border-slate-200/80"
          >
            {/* Top Half - Dark Blue Tech AI Header */}
            <div className="relative bg-[#0A1628] p-8 sm:p-10 text-white min-h-[280px] flex flex-col justify-between overflow-hidden">
              
              {/* Background AI Brain & Holographic Tech Graphic Visual */}
              <div className="absolute top-0 right-0 w-[55%] h-full opacity-25 pointer-events-none overflow-hidden">
                <svg className="w-full h-full text-cyan-400" viewBox="0 0 200 200" fill="none">
                  {/* Holographic AI Brain Circuit Network */}
                  <g transform="translate(100, 100)">
                    <circle cx="0" cy="0" r="60" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="0" cy="0" r="40" stroke="#2563EB" strokeWidth="1.5" />
                    <circle cx="0" cy="0" r="20" fill="currentColor" fillOpacity="0.2" />
                    
                    {/* Glowing Nodes */}
                    <circle cx="-30" cy="-20" r="4" fill="#38BDF8" />
                    <circle cx="30" cy="-20" r="4" fill="#38BDF8" />
                    <circle cx="0" cy="35" r="5" fill="#2563EB" />
                    <line x1="-30" y1="-20" x2="0" y2="35" stroke="currentColor" strokeWidth="1" />
                    <line x1="30" y1="-20" x2="0" y2="35" stroke="currentColor" strokeWidth="1" />
                  </g>
                </svg>
              </div>

              <div className="relative z-10">
                {/* Header Badge Icon - Chip CPU */}
                <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center mb-5 shadow-lg">
                  <Cpu className="w-6 h-6" strokeWidth={2} />
                </div>

                {/* Title */}
                <h2 className="text-3xl font-extrabold tracking-tight mb-2">
                  KRGONE <span className="text-[#38BDF8]">Technologies</span>
                </h2>

                {/* Subtitle */}
                <p className="text-white font-bold text-sm sm:text-base mb-2">
                  AI-Powered Digital Solutions
                </p>

                {/* Accent Line */}
                <div className="w-12 h-1 bg-[#38BDF8] mb-5 rounded-full"></div>

                {/* Paragraph */}
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-md font-medium">
                  We build intelligent digital solutions, automation systems and AI-powered platforms that drive efficiency, innovation and measurable business growth.
                </p>
              </div>
            </div>

            {/* Bottom Half - Key Solutions & Button */}
            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]"></span>
                  <p className="text-xs font-black tracking-widest text-[#0B1F3A] uppercase">
                    KEY SOLUTIONS
                  </p>
                </div>

                <div className="grid grid-cols-5 gap-1.5 sm:gap-3 text-center mb-8">
                  {/* Solution 1 */}
                  <div className="flex flex-col items-center group/item">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-50/80 border border-cyan-200/80 flex items-center justify-center mb-2.5 text-[#0284C7] shadow-sm group-hover/item:scale-105 group-hover/item:bg-[#0284C7] group-hover/item:text-white transition-all">
                      <Bot className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] sm:text-[12px] leading-tight sm:leading-snug text-[#0B1F3A] font-extrabold">
                      AI<br />Solutions
                    </span>
                  </div>

                  {/* Solution 2 */}
                  <div className="flex flex-col items-center group/item">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-50/80 border border-cyan-200/80 flex items-center justify-center mb-2.5 text-[#0284C7] shadow-sm group-hover/item:scale-105 group-hover/item:bg-[#0284C7] group-hover/item:text-white transition-all">
                      <Code2 className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] sm:text-[12px] leading-tight sm:leading-snug text-[#0B1F3A] font-extrabold">
                      Software<br />Dev
                    </span>
                  </div>

                  {/* Solution 3 */}
                  <div className="flex flex-col items-center group/item">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-50/80 border border-cyan-200/80 flex items-center justify-center mb-2.5 text-[#0284C7] shadow-sm group-hover/item:scale-105 group-hover/item:bg-[#0284C7] group-hover/item:text-white transition-all">
                      <Network className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] sm:text-[12px] leading-tight sm:leading-snug text-[#0B1F3A] font-extrabold">
                      Automation &amp;<br />Integrations
                    </span>
                  </div>

                  {/* Solution 4 */}
                  <div className="flex flex-col items-center group/item">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-50/80 border border-cyan-200/80 flex items-center justify-center mb-2.5 text-[#0284C7] shadow-sm group-hover/item:scale-105 group-hover/item:bg-[#0284C7] group-hover/item:text-white transition-all">
                      <Layout className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] sm:text-[12px] leading-tight sm:leading-snug text-[#0B1F3A] font-extrabold">
                      Digital<br />Platforms
                    </span>
                  </div>

                  {/* Solution 5 */}
                  <div className="flex flex-col items-center group/item">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-50/80 border border-cyan-200/80 flex items-center justify-center mb-2.5 text-[#0284C7] shadow-sm group-hover/item:scale-105 group-hover/item:bg-[#0284C7] group-hover/item:text-white transition-all">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] sm:text-[12px] leading-tight sm:leading-snug text-[#0B1F3A] font-extrabold">
                      Digital<br />Transformation
                    </span>
                  </div>
                </div>
              </div>

              {/* Button */}
              <button className="w-full bg-[#1D4ED8] hover:bg-[#1e40af] text-white py-3.5 px-6 rounded-full font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-md group-hover:scale-[1.01]">
                Enter KRGONE Technologies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* WHY KRGONE SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
            Why KRGONE
          </h2>
          <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-2.5 rounded-full"></div>
        </div>

        {/* 5 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-200/80">
          
          {/* Column 1 */}
          <div className="flex flex-col items-center text-center px-3 pt-4 sm:pt-0">
            <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200/70 flex items-center justify-center mb-4 text-[#2563EB]">
              <Target className="w-7 h-7" strokeWidth={1.8} />
            </div>
            <h3 className="text-sm font-bold text-[#0B1F3A] mb-1.5">
              Strategic Consulting
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Data-driven insights and strategy that drive growth.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center text-center px-3 pt-6 sm:pt-0">
            <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200/70 flex items-center justify-center mb-4 text-[#2563EB]">
              <Cpu className="w-7 h-7" strokeWidth={1.8} />
            </div>
            <h3 className="text-sm font-bold text-[#0B1F3A] mb-1.5">
              AI-Powered Technology
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Modern solutions leveraging AI, automation and cloud.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center text-center px-3 pt-6 lg:pt-0">
            <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200/70 flex items-center justify-center mb-4 text-[#2563EB]">
              <Settings className="w-7 h-7" strokeWidth={1.8} />
            </div>
            <h3 className="text-sm font-bold text-[#0B1F3A] mb-1.5">
              End-to-End Implementation
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              From strategy to execution, we deliver results.
            </p>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col items-center text-center px-3 pt-6 lg:pt-0">
            <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200/70 flex items-center justify-center mb-4 text-[#2563EB]">
              <TrendingUp className="w-7 h-7" strokeWidth={1.8} />
            </div>
            <h3 className="text-sm font-bold text-[#0B1F3A] mb-1.5">
              Sustainable Business Growth
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Building scalable systems for long-term success.
            </p>
          </div>

          {/* Column 5 */}
          <div className="flex flex-col items-center text-center px-3 pt-6 lg:pt-0">
            <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200/70 flex items-center justify-center mb-4 text-[#2563EB]">
              <Users className="w-7 h-7" strokeWidth={1.8} />
            </div>
            <h3 className="text-sm font-bold text-[#0B1F3A] mb-1.5">
              Trusted Leadership
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Experienced advisors and technologists you can trust.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
