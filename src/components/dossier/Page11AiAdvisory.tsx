import React from 'react';
import { ProcessedDossierData } from './dossierTypes';
import { DossierHeader } from './DossierHeader';
import { DossierFooter } from './DossierFooter';
import { Cpu, Sparkles, Bot, Zap, ArrowRight, CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';

export const Page11AiAdvisory: React.FC<{ data: ProcessedDossierData }> = ({ data }) => {
  return (
    <div 
      className="print-page bg-white w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] text-[#0a192f] p-[12mm] flex flex-col justify-between box-border page-break-after:always relative overflow-hidden print:m-0 font-sans select-none"
      style={{ backgroundColor: '#ffffff', width: '210mm', height: '297mm', padding: '12mm' }}
    >
      <DossierHeader
        sectionTitle="Page 11 · AI Growth Advisory™ & Automation Engine"
        subtitle="Enterprise AI Transformation Roadmap, High-Yield Automation Use Cases & Productivity Levers"
        pageNumber={11}
        icon={<Cpu className="w-4 h-4" />}
      />

      <div className="flex-1 flex flex-col gap-3 my-1 overflow-hidden">
        {/* Top Hero Banner */}
        <div className="bg-gradient-to-r from-[#0a192f] via-[#0f2847] to-[#1e3a5f] text-white p-3.5 rounded-lg border-l-4 border-[#c29d2f] shadow-sm flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-[7pt] font-mono text-[#c29d2f] font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              <span>AI GROWTH ADVISORY ENGINE™</span>
            </div>
            <h2 className="text-xs font-black text-white uppercase tracking-wide mt-0.5">
              Artificial Intelligence Transformation Opportunities for {data.companyName}
            </h2>
            <p className="text-[7.5pt] text-slate-300 font-medium mt-0.5">
              Target Impact: <span className="text-[#c29d2f] font-bold">25+ Hours/Week Saved</span> • <span className="text-emerald-400 font-bold">35% Faster Sales Cycle</span>
            </p>
          </div>

          <div className="text-right border-l border-slate-700 pl-4">
            <div className="text-[6.5pt] font-bold text-slate-400 uppercase">AI READINESS SCORE</div>
            <div className="text-lg font-black text-[#c29d2f] font-mono">62/100</div>
            <div className="text-[6.5pt] text-slate-300 uppercase font-semibold">High ROI Potential</div>
          </div>
        </div>

        {/* 4 High-Impact AI Automation Use Cases */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2 pb-1 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Bot className="w-3.5 h-3.5 text-[#0a192f]" />
              <h3 className="text-xs font-black uppercase text-[#0a192f] tracking-wider">
                Top 4 High-Yield AI Deployment Priorities
              </h3>
            </div>
            <span className="text-[7pt] font-mono font-bold text-[#c29d2f]">
              SECTOR SPECIFIC: {data.industry.toUpperCase()}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[8pt]">
            {/* Use Case 1 */}
            <div className="bg-white p-2.5 rounded border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1 mb-1">
                <div className="font-black text-[#0a192f] flex items-center gap-1.5">
                  <span className="text-[#c29d2f] font-mono text-xs">01</span>
                  <span>AI Sales Proposal & Pitch Generator</span>
                </div>
                <span className="text-[6.5pt] font-black text-red-700 bg-red-50 px-1.5 py-0.5 rounded border border-red-200">
                  RANK 1 · HIGH PRIORITY
                </span>
              </div>
              <p className="text-[7.5pt] text-slate-600 leading-relaxed font-normal">
                Automatically generate customized client proposals, pricing quotes, and pitch decks from lead intake forms in under 3 minutes using generative AI templates.
              </p>
              <div className="mt-1.5 pt-1 border-t border-slate-100 flex items-center justify-between text-[7pt] font-semibold text-slate-500">
                <span>Tool: Gemini / OpenAI API</span>
                <span className="text-emerald-700 font-bold">Savings: 8 Hours/Wk</span>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="bg-white p-2.5 rounded border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1 mb-1">
                <div className="font-black text-[#0a192f] flex items-center gap-1.5">
                  <span className="text-[#c29d2f] font-mono text-xs">02</span>
                  <span>AI WhatsApp & Email Support Agent</span>
                </div>
                <span className="text-[6.5pt] font-black text-red-700 bg-red-50 px-1.5 py-0.5 rounded border border-red-200">
                  RANK 2 · HIGH PRIORITY
                </span>
              </div>
              <p className="text-[7.5pt] text-slate-600 leading-relaxed font-normal">
                Deploy an AI customer agent trained on your company SOPs and product catalogs to instantly answer customer queries, qualify leads, and log data into your CRM.
              </p>
              <div className="mt-1.5 pt-1 border-t border-slate-100 flex items-center justify-between text-[7pt] font-semibold text-slate-500">
                <span>Tool: Custom AI Agent</span>
                <span className="text-emerald-700 font-bold">Response: &lt; 30 Seconds</span>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="bg-white p-2.5 rounded border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1 mb-1">
                <div className="font-black text-[#0a192f] flex items-center gap-1.5">
                  <span className="text-[#c29d2f] font-mono text-xs">03</span>
                  <span>AI Inventory & Supply Demand Predictor</span>
                </div>
                <span className="text-[6.5pt] font-black text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                  RANK 3 · MEDIUM PRIORITY
                </span>
              </div>
              <p className="text-[7.5pt] text-slate-600 leading-relaxed font-normal">
                Analyze historical order data to accurately forecast material requirements, preventing stockouts and reducing excess working capital tied up in slow inventory.
              </p>
              <div className="mt-1.5 pt-1 border-t border-slate-100 flex items-center justify-between text-[7pt] font-semibold text-slate-500">
                <span>Tool: Python Predictive Engine</span>
                <span className="text-blue-700 font-bold">Holding Cost: -18%</span>
              </div>
            </div>

            {/* Use Case 4 */}
            <div className="bg-white p-2.5 rounded border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1 mb-1">
                <div className="font-black text-[#0a192f] flex items-center gap-1.5">
                  <span className="text-[#c29d2f] font-mono text-xs">04</span>
                  <span>AI Executive Dashboard & Voice Summarizer</span>
                </div>
                <span className="text-[6.5pt] font-black text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                  RANK 4 · MEDIUM PRIORITY
                </span>
              </div>
              <p className="text-[7.5pt] text-slate-600 leading-relaxed font-normal">
                Receive daily automated executive voice or text briefings summarizing key sales numbers, cash flow balances, and operational alerts directly on your phone.
              </p>
              <div className="mt-1.5 pt-1 border-t border-slate-100 flex items-center justify-between text-[7pt] font-semibold text-slate-500">
                <span>Tool: KRGONE AI Digest</span>
                <span className="text-[#0a192f] font-bold">Daily Brief: 2 Mins</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Implementation Roadmap Table */}
        <div className="bg-slate-900 text-white rounded-lg p-3.5 border-l-4 border-[#c29d2f]">
          <div className="text-xs font-black uppercase text-white tracking-wider mb-2">
            Phased AI Deployment Matrix (30-60-90 Days)
          </div>

          <div className="grid grid-cols-3 gap-2 text-[7.5pt]">
            <div className="bg-slate-800 p-2.5 rounded border border-slate-700">
              <div className="text-[#c29d2f] font-bold uppercase">Phase 1 (Days 1-30)</div>
              <div className="text-white font-bold mt-0.5">Sales & Proposal AI</div>
              <p className="text-slate-300 text-[7pt] mt-1">Deploy generative proposal tool & train sales team on AI prompt templates.</p>
            </div>

            <div className="bg-slate-800 p-2.5 rounded border border-slate-700">
              <div className="text-[#c29d2f] font-bold uppercase">Phase 2 (Days 31-60)</div>
              <div className="text-white font-bold mt-0.5">Customer Service AI Agent</div>
              <p className="text-slate-300 text-[7pt] mt-1">Integrate AI WhatsApp bot for lead qualification and FAQ automation.</p>
            </div>

            <div className="bg-slate-800 p-2.5 rounded border border-slate-700">
              <div className="text-[#c29d2f] font-bold uppercase">Phase 3 (Days 61-90)</div>
              <div className="text-white font-bold mt-0.5">Executive AI Intelligence</div>
              <p className="text-slate-300 text-[7pt] mt-1">Connect financial data feeds into AI executive dashboard for real-time anomaly alerts.</p>
            </div>
          </div>
        </div>

        {/* Summary Impact Callout */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-emerald-700 shrink-0" />
            <div>
              <div className="text-xs font-black text-emerald-900 uppercase">
                Expected Transformation Value
              </div>
              <div className="text-[8pt] text-slate-700 font-medium">
                Implementing these 4 AI levers will recover over 100 hours of monthly management bandwidth, directly expanding operating gross margins by 4-6%.
              </div>
            </div>
          </div>
        </div>
      </div>

      <DossierFooter companyName={data.companyName} reportId={data.displayReportId} />
    </div>
  );
};
