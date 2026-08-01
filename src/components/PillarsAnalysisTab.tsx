import React, { useState } from 'react';
import { 
  ShieldCheck, TrendingUp, Users, GitBranch, Coins, User, Cpu, 
  CheckCircle2, AlertCircle, Download, PhoneCall, Sparkles, FileText, ChevronRight
} from 'lucide-react';

interface PillarsAnalysisTabProps {
  report: any; // UnifiedReport
  formData?: any;
  handlePrintPDF?: () => void;
  setActiveTab?: (tab: string) => void;
  isGeneratingPDF?: boolean;
  pdfStatusMessage?: string;
}

const PILLAR_ICONS: Record<string, React.ElementType> = {
  p1: ShieldCheck,
  p2: TrendingUp,
  p3: Users,
  p4: GitBranch,
  p5: Coins,
  p6: User,
  p7: Cpu,
  "Leadership & Vision": ShieldCheck,
  "Sales & Revenue": TrendingUp,
  "Marketing & Customer Growth": Users,
  "Operations & Process": GitBranch,
  "Finance & Business Performance": Coins,
  "People & Leadership": User,
  "Technology & Business Innovation": Cpu,
};

export const PillarsAnalysisTab: React.FC<PillarsAnalysisTabProps> = ({
  report,
  formData,
  handlePrintPDF,
  setActiveTab,
  isGeneratingPDF = false,
  pdfStatusMessage = '',
}) => {
  const pillarAnalysis = report?.bi?.pillarAnalysis || [];
  const pillarNarratives = report?.narratives?.pillarNarratives || {};
  const compName = report?.profile?.company?.companyName || formData?.companyName || 'Your Enterprise';
  const industry = report?.profile?.business?.industry || formData?.industry || 'Commercial Vertical';

  const [selectedPillarId, setSelectedPillarId] = useState<string>(
    pillarAnalysis[0]?.pillarId || 'p1'
  );

  const getStatusBadge = (score: number) => {
    if (score >= 75) {
      return { text: 'Optimal', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200', bar: 'bg-emerald-500' };
    }
    if (score >= 55) {
      return { text: 'Needs Focus', bg: 'bg-amber-50 text-amber-700 border-amber-200', bar: 'bg-amber-500' };
    }
    return { text: 'Critical Gap', bg: 'bg-rose-50 text-rose-700 border-rose-200', bar: 'bg-rose-500' };
  };

  const activePillar = pillarAnalysis.find((p: any) => p.pillarId === selectedPillarId) || pillarAnalysis[0] || {};
  const activeNarrative = pillarNarratives[activePillar.pillarId] || {};
  const activePillarIcon = PILLAR_ICONS[activePillar.pillarId] || PILLAR_ICONS[activePillar.pillarName] || ShieldCheck;

  return (
    <div className="space-y-5 font-sans">
      
      {/* ---------------------------------------------------- */}
      {/* 1. COMPACT HEADER BANNER WITH DOWNLOAD REPORT BUTTON */}
      {/* ---------------------------------------------------- */}
      <div className="bg-[#0f172a] text-white p-5 rounded-2xl shadow-md border border-slate-800 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-amber-500/15 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="relative z-10 space-y-1.5 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-500/30 px-2.5 py-0.5 rounded-full text-amber-300 text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-amber-400" /> 7-Pillar Health Diagnostic
            </span>
            <span className="text-[11px] text-slate-400 font-semibold">
              Industry: <span className="text-slate-200 font-bold">{industry}</span>
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            7-Pillar Summary for <span className="text-amber-400">{compName}</span>
          </h2>
          
          <p className="text-xs text-slate-300 font-medium leading-relaxed max-w-xl">
            Compact diagnostic snapshot across your 7 business pillars. Detailed sub-metric scoring, RACI team matrices, and swimlane SOP playbooks are compiled in your downloadable PDF report.
          </p>
        </div>

        {/* Action Buttons Header Block */}
        <div className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center gap-2.5 shrink-0">
          {handlePrintPDF && (
            <button
              onClick={handlePrintPDF}
              disabled={isGeneratingPDF}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-60"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>{isGeneratingPDF ? (pdfStatusMessage || 'Generating PDF...') : 'Download PDF Report'}</span>
            </button>
          )}

          {setActiveTab && (
            <button
              onClick={() => setActiveTab('booking')}
              className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>Book Diagnostic Call</span>
            </button>
          )}
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. COMPACT 7-PILLAR SCORECARD GRID                   */}
      {/* ---------------------------------------------------- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {pillarAnalysis.map((pa: any, idx: number) => {
          const score = typeof pa.score === 'number' ? pa.score : 65;
          const status = getStatusBadge(score);
          const PillarIcon = PILLAR_ICONS[pa.pillarId] || PILLAR_ICONS[pa.pillarName] || ShieldCheck;
          const isSelected = pa.pillarId === selectedPillarId;

          return (
            <div
              key={pa.pillarId || idx}
              onClick={() => setSelectedPillarId(pa.pillarId)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 h-[125px] ${
                isSelected 
                  ? 'bg-slate-900 border-slate-900 text-white shadow-md ring-2 ring-amber-400/50' 
                  : 'bg-white border-slate-200/85 hover:border-slate-300 hover:shadow-xs text-slate-900'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 overflow-hidden">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-100 text-slate-800'
                  }`}>
                    <PillarIcon className="w-3.5 h-3.5" />
                  </div>
                  <h4 className={`text-[11px] font-black uppercase tracking-tight truncate ${
                    isSelected ? 'text-white' : 'text-slate-900'
                  }`}>
                    {pa.pillarName}
                  </h4>
                </div>
                <span className="text-sm font-black shrink-0">{score}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100/30 h-1.5 rounded-full overflow-hidden">
                <div className={`${status.bar} h-full rounded-full transition-all duration-500`} style={{ width: `${score}%` }} />
              </div>

              <div className="flex items-center justify-between text-[10px]">
                <span className={`px-2 py-0.5 rounded-full font-bold uppercase text-[9px] border ${status.bg}`}>
                  {status.text}
                </span>
                <span className={`text-[10px] font-bold ${isSelected ? 'text-amber-400' : 'text-slate-400'}`}>
                  {isSelected ? 'Selected' : 'View Detail →'}
                </span>
              </div>
            </div>
          );
        })}

        {/* PDF Callout Card matching height */}
        {handlePrintPDF && (
          <div 
            onClick={handlePrintPDF}
            className="p-3.5 rounded-xl border border-amber-300 bg-gradient-to-br from-amber-500/10 via-amber-50/50 to-white hover:border-amber-400 transition-all cursor-pointer flex flex-col justify-between space-y-1 h-[125px] shadow-2xs group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                Full 30+ Page PDF
              </span>
              <Download className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 className="text-[11px] font-black text-slate-900 uppercase">Download Complete Report</h4>
              <p className="text-[10px] text-slate-500 font-semibold leading-tight line-clamp-2 mt-0.5">
                Detailed sub-metrics & SOP playbooks for all 7 pillars.
              </p>
            </div>
            <span className="text-[10px] font-black text-amber-700 uppercase flex items-center gap-1">
              Download PDF Dossier →
            </span>
          </div>
        )}
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. SELECTED PILLAR DETAILED SNAPSHOT CARD            */}
      {/* ---------------------------------------------------- */}
      {activePillar && (
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                {React.createElement(activePillarIcon, { className: "w-4 h-4" })}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
                  Pillar Breakdown: {activePillar.pillarName}
                </h3>
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Score: {activePillar.score ?? 65}% • Health Status: {activePillar.healthStatus || 'Evaluated'}
                </span>
              </div>
            </div>

            {handlePrintPDF && (
              <button
                onClick={handlePrintPDF}
                disabled={isGeneratingPDF}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1 rounded-lg transition-all cursor-pointer disabled:opacity-50"
              >
                <Download className="w-3.5 h-3.5 text-amber-600" />
                <span>Download Report</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-800 font-black text-[10px] uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Core Pillar Strength</span>
              </div>
              <p className="text-slate-700 font-semibold text-[11px] leading-relaxed">
                {activeNarrative?.keyStrength || activePillar.strength?.coreStrength || 'Demonstrates solid baseline operational capabilities.'}
              </p>
            </div>

            <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-800 font-black text-[10px] uppercase">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Key Improvement Area</span>
              </div>
              <p className="text-slate-700 font-semibold text-[11px] leading-relaxed">
                {activeNarrative?.improvementArea || activePillar.gap?.missingSystems || 'Standard operating procedures require formal digital documentation.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 4. BOTTOM ACTION CTA BAR WITH DOWNLOAD PDF BUTTON    */}
      {/* ---------------------------------------------------- */}
      <div className="bg-[#0f172a] text-white p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-sm font-black uppercase tracking-wide text-white">Get Your Complete 7-Pillar PDF Dossier</h4>
          <p className="text-xs text-slate-300 font-medium">
            Download the comprehensive report or schedule a private 1-on-1 diagnostic call with a KRG ONE senior partner.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
          {handlePrintPDF && (
            <button
              onClick={handlePrintPDF}
              disabled={isGeneratingPDF}
              className="flex-1 sm:flex-none bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>{isGeneratingPDF ? 'Preparing PDF...' : 'Download PDF Report'}</span>
            </button>
          )}

          {setActiveTab && (
            <button
              onClick={() => setActiveTab('booking')}
              className="flex-1 sm:flex-none bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>Book Call</span>
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
