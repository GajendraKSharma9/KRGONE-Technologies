const fs = require('fs');

let report = fs.readFileSync('src/components/DashboardReport.tsx', 'utf8');

// The macro diagnosis block needs to use DOSSIER_TEMPLATES.getMacroDiagnosis
const advisoryTabRegex = /\{\/\* PAGE 3: ADVISORY \*\/\}[\s\S]*?\{\/\* PAGE 4: PLAN \*\/\}/;

const advisoryReplacement = `
          {/* PAGE 3: ADVISORY */}
          {activeTab === 'ADVISORY' && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 relative z-10">
                
                {/* Hero Advisory Card */}
                <div className="bg-[#0B2545] rounded-2xl p-6 md:p-8 text-white relative overflow-hidden shadow-lg border border-[#0B2545]">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[80px] rounded-full pointer-events-none"></div>
                   <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-1">
                         <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B5CF6]/20 text-[#C4B5FD] text-[10px] font-bold uppercase tracking-widest mb-4 border border-[#8B5CF6]/30">
                            <Cpu className="w-3 h-3" /> Signature AI Insights
                         </span>
                         <h3 className="text-xl font-serif font-bold text-[#D4AF37] mb-3">{DOSSIER_TEMPLATES?.getMacroDiagnosis(globalScore, formData?.companyName, formData?.industry, formData?.revenue)?.title || 'Executive Observation & Diagnosis'}</h3>
                         <p className="text-sm text-slate-300 leading-relaxed mb-4">
                            {DOSSIER_TEMPLATES?.getMacroDiagnosis(globalScore, formData?.companyName, formData?.industry, formData?.revenue)?.body || 'The diagnostic engine has identified a systemic misalignment between your revenue goals and your operational framework.'}
                         </p>
                         <h3 className="text-xl font-serif font-bold text-[#D4AF37] mb-3 mt-6">{DOSSIER_TEMPLATES?.getMacroDiagnosis(globalScore, formData?.companyName, formData?.industry, formData?.revenue)?.title2 || 'Strategic Capital Allocation Matrix'}</h3>
                         <p className="text-sm text-slate-300 leading-relaxed mb-4">
                            {DOSSIER_TEMPLATES?.getMacroDiagnosis(globalScore, formData?.companyName, formData?.industry, formData?.revenue)?.body2 || 'We recommend mapping out a strategic acquisition roadmap.'}
                         </p>
                      </div>
                   </div>
                </div>

                {/* AI Strategic Recommendations */}
                <h3 className="text-lg font-bold text-[#0B2545] border-b border-slate-200 pb-2 mt-8 mb-4">Top 5 Strategic Recommendations</h3>
                <div className="space-y-6">
                   {(() => {
                      const sortedPillars = pillars
                        .map((p, idx) => ({ title: p, score: getPillarScore(idx) }))
                        .sort((a, b) => a.score - b.score)
                        .slice(0, 5);
                      
                      return sortedPillars.map((p, i) => {
                         const dossier = DOSSIER_TEMPLATES?.getPillarDossier(p.title, p.score) || { problemTitle: 'ISSUE', problem: 'Data unavailable', solutionTitle: 'SOLUTION', solution: 'Data unavailable', interventionTitle: 'INTERVENTION', intervention: 'Data unavailable' };
                         return (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col gap-4">
                               <div className="flex items-center gap-3 mb-2 border-b border-slate-100 pb-3">
                                  <div className="w-8 h-8 rounded-full bg-[#0B2545] text-[#D4AF37] font-black text-sm flex items-center justify-center shrink-0">{i+1}</div>
                                  <h4 className="text-lg font-bold text-[#0B2545]">{p.title}</h4>
                               </div>
                               
                               <div className="space-y-5">
                                  <div>
                                     <span className="text-[10px] uppercase font-bold text-red-500 block mb-1 tracking-widest">{dossier.problemTitle}</span>
                                     <p className="text-xs text-slate-700 leading-relaxed bg-red-50/50 p-4 rounded-lg border border-red-100">{dossier.problem}</p>
                                  </div>
                                  <div>
                                     <span className="text-[10px] uppercase font-bold text-emerald-600 block mb-1 tracking-widest">{dossier.solutionTitle}</span>
                                     <p className="text-xs text-slate-700 leading-relaxed bg-emerald-50/50 p-4 rounded-lg border border-emerald-100">{dossier.solution}</p>
                                  </div>
                                  <div>
                                     <span className="text-[10px] uppercase font-bold text-[#0B2545] block mb-1 tracking-widest">{dossier.interventionTitle}</span>
                                     <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-200">{dossier.intervention}</p>
                                  </div>
                               </div>
                            </div>
                         );
                      });
                   })()}
                </div>
             </div>
          )}
`;

report = report.replace(advisoryTabRegex, advisoryReplacement + '\n\n          {/* PAGE 4: PLAN */}');

fs.writeFileSync('src/components/DashboardReport.tsx', report);
