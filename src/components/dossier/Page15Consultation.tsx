import React from 'react';
import { ProcessedDossierData } from './dossierTypes';
import { DossierHeader } from './DossierHeader';
import { DossierFooter } from './DossierFooter';
import { Award, CheckCircle2, ArrowRight, Sparkles, Calendar, Clock } from 'lucide-react';

export const Page15Consultation: React.FC<{ data: ProcessedDossierData }> = ({ data }) => {
  return (
    <div 
      className="print-page bg-white w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] text-[#0a192f] p-[12mm] flex flex-col justify-between box-border page-break-after:always relative overflow-hidden print:m-0 font-sans select-none"
      style={{ backgroundColor: '#ffffff', width: '210mm', height: '297mm', padding: '12mm' }}
    >
      <DossierHeader
        sectionTitle="Page 15 · Business Growth Consultation™"
        subtitle="Executive Consultation, Diagnostic Services & Growth Scaling Packages"
        pageNumber={15}
        icon={<Award className="w-4 h-4" />}
      />

      <div className="flex-1 flex flex-col justify-between py-1 my-0.5 overflow-hidden gap-2">
        {/* HERO CARD - PRIMARY OFFER */}
        <div className="bg-gradient-to-br from-[#0a192f] via-[#0f2847] to-[#1e3a5f] text-white p-4 rounded-xl border-2 border-[#c29d2f] shadow-lg relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[6.5pt] font-mono text-[#c29d2f] font-bold uppercase tracking-widest block">
                  1-ON-1 EXECUTIVE SESSION
                </span>
                <h2 className="text-base font-black text-white tracking-tight mt-0.5">
                  Business Growth Consultation™
                </h2>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-300 font-mono line-through text-slate-400 font-normal">
                  Valued at ₹9,999
                </div>
                <div className="text-xl font-black text-[#c29d2f] font-mono leading-none mt-0.5">
                  ₹1,499 <span className="text-[8pt] text-slate-200 font-sans font-medium">Only</span>
                </div>
              </div>
            </div>

            <p className="text-[8pt] text-slate-100 mt-2 leading-relaxed font-medium">
              In 60 minutes we'll explain your report, answer your questions, identify your biggest growth bottleneck, and recommend the most suitable next step for your business.
            </p>

            {/* Includes Grid */}
            <div className="mt-3 pt-2.5 border-t border-slate-700/80">
              <span className="text-[6.5pt] font-extrabold text-[#c29d2f] uppercase tracking-wider block mb-1.5">
                Includes:
              </span>
              <div className="grid grid-cols-2 gap-1.5 text-[7.5pt]">
                <div className="flex items-center gap-1.5 bg-white/5 rounded px-2.5 py-1.5 border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c29d2f] shrink-0" />
                  <span className="font-medium text-slate-100">Assessment Review</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 rounded px-2.5 py-1.5 border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c29d2f] shrink-0" />
                  <span className="font-medium text-slate-100">Priority Growth Opportunities</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 rounded px-2.5 py-1.5 border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c29d2f] shrink-0" />
                  <span className="font-medium text-slate-100">Expert Business Advice</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 rounded px-2.5 py-1.5 border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c29d2f] shrink-0" />
                  <span className="font-medium text-slate-100">Q&A Session</span>
                </div>
              </div>
            </div>
          </div>

          {/* Prominent Button Box */}
          <div className="mt-3 pt-2.5 border-t border-slate-700/80 flex items-center justify-between">
            <div className="flex items-center gap-3 text-[7pt] text-slate-300">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#c29d2f]" /> 60 Mins</span>
              <span className="text-slate-500">•</span>
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-[#c29d2f]" /> Priority Scheduling</span>
            </div>
            <div className="bg-[#c29d2f] text-[#0a192f] px-5 py-2 rounded-lg font-extrabold text-[8.5pt] uppercase tracking-wider flex items-center gap-2 shadow-md border border-amber-300">
              <span>Book Your Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </div>
        </div>

        {/* SECONDARY SECTION */}
        <div className="flex flex-col gap-1.5">
          <p className="text-[7.5pt] font-semibold text-[#0a192f] bg-amber-50/80 p-2 rounded border border-amber-200/80 text-center italic">
            Every engagement begins with a Business Growth Consultation™ to validate priorities and recommend the most appropriate growth pathway.
          </p>

          <div className="flex items-center justify-between border-b border-slate-200 pb-1 mt-0.5">
            <h3 className="text-[8.5pt] font-black text-[#0a192f] uppercase tracking-wide">
              Continue Your Growth Journey
            </h3>
            <span className="text-[6.5pt] font-semibold text-slate-400 uppercase tracking-widest">
              Long-Term Execution Solutions
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {/* Card 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 flex flex-col justify-between relative">
              <div>
                <h4 className="text-[8pt] font-bold text-[#0a192f] uppercase leading-tight">
                  Full Business Growth Diagnostic™
                </h4>
                <div className="text-[7.5pt] font-semibold text-slate-700 mt-1">
                  ₹49,999 Starting
                </div>
                <div className="flex flex-col gap-0.5 text-[6.5pt] font-medium text-slate-500 mt-0.5">
                  <span>Duration: 14 Days</span>
                  <span>Delivery: On-Ground + Remote</span>
                  <span className="text-[#0a192f] font-bold mt-1">Best For: Businesses requiring complete operational diagnosis.</span>
                </div>
                <p className="text-[6.8pt] text-slate-600 mt-1.5 leading-relaxed">
                  A comprehensive diagnostic across all key business areas to uncover growth opportunities and build a winning roadmap.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 flex flex-col justify-between relative">
              <div className="absolute top-2 right-2 bg-slate-200 text-slate-700 text-[5.5pt] font-bold uppercase px-1.5 py-0.5 rounded">
                Most Popular
              </div>

              <div>
                <h4 className="text-[8pt] font-bold text-[#0a192f] uppercase leading-tight pr-14">
                  90-Day Business Growth Sprint™
                </h4>
                <div className="text-[7.5pt] font-semibold text-slate-700 mt-1">
                  ₹2,49,000
                </div>
                <div className="flex flex-col gap-0.5 text-[6.5pt] font-medium text-slate-500 mt-0.5">
                  <span>Duration: 90 Days</span>
                  <span className="text-[#0a192f] font-bold mt-1">Best For: Businesses ready for guided implementation.</span>
                </div>
                <p className="text-[6.8pt] text-slate-600 mt-1.5 leading-relaxed">
                  We work alongside your leadership team to implement the roadmap and deliver measurable business outcomes.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 flex flex-col justify-between relative">
              <div>
                <h4 className="text-[8pt] font-bold text-[#0a192f] uppercase leading-tight">
                  Fractional Sales Head™
                </h4>
                <div className="text-[7.5pt] font-semibold text-slate-700 mt-1">
                  Monthly Engagement
                </div>
                <div className="flex flex-col gap-0.5 text-[6.5pt] font-medium text-slate-500 mt-0.5">
                  <span className="text-[#0a192f] font-bold mt-1">Best For: Growing companies needing strategic sales leadership.</span>
                </div>
                <p className="text-[6.8pt] text-slate-600 mt-1.5 leading-relaxed">
                  Strategic sales leadership without the cost of hiring a full-time senior executive.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION - HORIZONTAL JOURNEY */}
        <div className="bg-slate-100/90 rounded-lg p-2 border border-slate-200 flex items-center justify-between">
          <span className="text-[6.5pt] font-extrabold text-[#0a192f] uppercase tracking-wider pl-1 shrink-0">
            Growth Journey:
          </span>
          <div className="flex-1 flex items-center justify-evenly px-2 text-[7.5pt] font-bold text-[#0a192f]">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white rounded border border-slate-200 shadow-2xs">
              <span className="w-4 h-4 rounded-full bg-[#c29d2f] text-[#0a192f] text-[6pt] font-black flex items-center justify-center">1</span>
              <span>Consult</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white rounded border border-slate-200 shadow-2xs">
              <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 text-[6pt] font-black flex items-center justify-center">2</span>
              <span>Diagnose</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white rounded border border-slate-200 shadow-2xs">
              <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 text-[6pt] font-black flex items-center justify-center">3</span>
              <span>Implement</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white rounded border border-slate-200 shadow-2xs">
              <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 text-[6pt] font-black flex items-center justify-center">4</span>
              <span>Scale</span>
            </div>
          </div>
        </div>
      </div>

      <DossierFooter companyName={data.companyName} reportId={data.displayReportId} />
    </div>
  );
};

