import React from 'react';
import { ProcessedDossierData } from './dossierTypes';
import { Lock, MapPin, Phone, Mail, Globe, Shield, Award, Calendar, FileText } from 'lucide-react';

export const CoverPage: React.FC<{ data: ProcessedDossierData }> = ({ data }) => {
  return (
    <div 
      className="print-page bg-[#f8f9fa] w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] text-[#0f172a] p-0 flex flex-col justify-between box-border page-break-after:always relative overflow-hidden print:m-0 font-sans select-none" 
      style={{ backgroundColor: '#f8f9fa', width: '210mm', height: '297mm' }}
    >
      {/* Decorative Background Artwork */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 800 1130" fill="none">
        <line x1="450" y1="0" x2="800" y2="350" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="500" y1="0" x2="800" y2="300" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="550" y1="0" x2="800" y2="250" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="600" y1="0" x2="800" y2="200" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="650" y1="0" x2="800" y2="150" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="700" y1="0" x2="800" y2="100" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="750" y1="0" x2="800" y2="50" stroke="#cbd5e1" strokeWidth="0.8" />

        <line x1="0" y1="40" x2="160" y2="0" stroke="#94a3b8" strokeWidth="0.8" opacity="0.6" />
        <line x1="0" y1="80" x2="320" y2="0" stroke="#94a3b8" strokeWidth="0.8" opacity="0.6" />
        <line x1="0" y1="120" x2="480" y2="0" stroke="#94a3b8" strokeWidth="0.8" opacity="0.6" />
        <line x1="0" y1="160" x2="640" y2="0" stroke="#94a3b8" strokeWidth="0.8" opacity="0.6" />
      </svg>

      {/* Skyscraper Wireframe Vector */}
      <div className="absolute bottom-10 right-0 w-[55%] h-[45%] pointer-events-none opacity-25">
        <svg className="w-full h-full" viewBox="0 0 500 450" fill="none">
          <g stroke="#94a3b8" strokeWidth="0.8">
            <polygon points="250,450 250,220 360,180 360,450" fill="none" />
            <polygon points="360,450 360,180 470,220 470,450" fill="none" />
            <line x1="250" y1="280" x2="360" y2="240" />
            <line x1="250" y1="340" x2="360" y2="300" />
            <line x1="250" y1="400" x2="360" y2="360" />
            <line x1="360" y1="240" x2="470" y2="280" />
            <line x1="360" y1="300" x2="470" y2="340" />
            <line x1="360" y1="360" x2="470" y2="400" />

            <polygon points="340,450 340,120 430,80 430,450" fill="none" />
            <polygon points="430,450 430,80 500,110 500,450" fill="none" />
            <line x1="340" y1="180" x2="430" y2="140" />
            <line x1="340" y1="240" x2="430" y2="200" />
            <line x1="340" y1="300" x2="430" y2="260" />
            <line x1="340" y1="360" x2="430" y2="320" />
            <line x1="430" y1="140" x2="500" y2="170" />
            <line x1="430" y1="200" x2="500" y2="230" />
            <line x1="430" y1="260" x2="500" y2="290" />
            <line x1="430" y1="320" x2="500" y2="350" />
          </g>
        </svg>
      </div>

      {/* Navy Chevron Wedge with Gold Pinstripe */}
      <div className="absolute bottom-0 left-0 w-[42%] h-[52%] pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 350 500" preserveAspectRatio="none">
          <defs>
            <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0a192f" />
              <stop offset="100%" stopColor="#071224" />
            </linearGradient>
          </defs>
          <polygon points="0,180 290,500 0,500" fill="url(#bladeGrad)" />
          <line x1="0" y1="180" x2="290" y2="500" stroke="#c29d2f" strokeWidth="4" />
          <line x1="0" y1="192" x2="280" y2="500" stroke="#d4af37" strokeWidth="1.5" opacity="0.8" />
        </svg>
      </div>

      {/* Top Header Brand Block */}
      <div className="z-10 text-center pt-10 px-8">
        <div className="flex items-center justify-center gap-1">
          <span className="text-5xl font-black text-[#0a192f] tracking-tight font-sans">KRG</span>
          <span className="text-5xl font-black text-[#c29d2f] tracking-tight font-sans">ONE</span>
        </div>

        <div className="text-[#0a192f] text-base font-bold tracking-[0.2em] uppercase mt-2 font-sans">
          Knowledge <span className="text-[#c29d2f] mx-1">|</span> Revenue <span className="text-[#c29d2f] mx-1">|</span> Growth
        </div>

        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="w-16 h-[1.5px] bg-[#c29d2f]" />
          <span className="text-xs font-extrabold text-[#0a192f] tracking-[0.2em] uppercase">
            Business Growth Operating System™
          </span>
          <div className="w-16 h-[1.5px] bg-[#c29d2f]" />
        </div>
      </div>

      {/* Center Title Block */}
      <div className="z-10 text-center my-auto px-8 max-w-3xl mx-auto w-full">
        <div className="text-[#0a192f] text-base font-extrabold tracking-[0.45em] uppercase mb-2">
          E X E C U T I V E
        </div>

        <h1 className="text-5xl font-black text-[#0a192f] uppercase tracking-tight leading-[1.05] font-sans">
          BUSINESS GROWTH<br />DIAGNOSTIC REPORT
        </h1>

        <div className="w-40 h-[2px] bg-[#c29d2f] mx-auto my-4" />

        <p className="text-[#0a192f] text-base font-semibold tracking-wide">
          Enterprise Audit & Diagnostic Dossier · Version 2.0
        </p>

        <div className="mt-8 space-y-2">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-[#c29d2f]" />
            <span className="text-[#c29d2f] font-serif italic text-base">Prepared Exclusively For</span>
            <div className="w-12 h-[1px] bg-[#c29d2f]" />
          </div>

          <h2 className="text-3xl font-black text-[#0a192f] uppercase tracking-wide font-sans pt-1">
            {data.companyName}
          </h2>

          <div className="w-20 h-[1.5px] bg-[#c29d2f] mx-auto my-2" />

          <div className="text-slate-700 text-sm font-semibold space-y-0.5 pt-0.5">
            <div>{data.industry} Industry</div>
            <div>{data.cityLocation}, {data.stateLocation}, India</div>
          </div>
        </div>

        {/* Assessment Score Badge & Metadata Row */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="bg-[#0a192f] text-white px-4 py-2 rounded-lg border border-[#c29d2f] shadow-md flex items-center gap-3">
            <div className="text-right">
              <div className="text-[7pt] font-bold text-[#c29d2f] uppercase tracking-widest">BUSINESS HEALTH INDEX™</div>
              <div className="text-xs font-semibold text-slate-200">{data.maturityStage}</div>
            </div>
            <div className="w-[1px] h-8 bg-slate-700" />
            <div className="text-2xl font-black text-[#c29d2f] font-mono">{data.displayScore}<span className="text-xs text-slate-400 font-sans font-normal">/100</span></div>
          </div>

          <div className="bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm text-left text-xs font-semibold text-slate-700">
            <div><span className="text-slate-400">Report ID:</span> <span className="font-mono font-bold text-[#0a192f]">{data.displayReportId}</span></div>
            <div><span className="text-slate-400">Date:</span> <span className="font-bold text-[#0a192f]">{data.displayDate}</span></div>
          </div>
        </div>

        {/* CONFIDENTIAL Box Card */}
        <div className="mt-6 max-w-md mx-auto border border-[#c29d2f] rounded-lg p-3.5 bg-white/95 backdrop-blur-sm shadow-sm text-center">
          <div className="flex items-center justify-center gap-2 text-[#c29d2f] font-extrabold text-xs uppercase tracking-widest mb-1">
            <Lock className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>STRICTLY CONFIDENTIAL</span>
          </div>
          <p className="text-[8pt] text-slate-700 font-medium leading-relaxed">
            Prepared exclusively for the executive leadership of {data.companyName}.<br />
            This diagnostic dossier contains proprietary business architecture insights and benchmark data.
          </p>
        </div>
      </div>

      {/* Cover Page Footer Bar */}
      <div className="z-10 w-full bg-[#0a192f] border-t-2 border-[#c29d2f] py-3 px-6 flex items-center justify-center gap-3 text-white text-[8pt] font-medium mt-auto">
        <div className="flex items-center gap-3 text-slate-200 font-sans whitespace-nowrap">
          <span className="font-extrabold text-[#c29d2f] tracking-wider">KRGONE</span>

          <span className="text-[#c29d2f]/70 font-light">|</span>
          <div className="flex items-center gap-1.5 text-slate-200 whitespace-nowrap">
            <Globe className="w-3.5 h-3.5 text-[#c29d2f] shrink-0" />
            <span>www.krgone.vercel.app</span>
          </div>
        </div>
      </div>
    </div>
  );
};
