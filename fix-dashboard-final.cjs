const fs = require('fs');

let report = fs.readFileSync('src/components/DashboardReport.tsx', 'utf8');

// 1. Ensure optional chaining on DOSSIER_TEMPLATES.getActionPlan
report = report.replace(/DOSSIER_TEMPLATES\.getActionPlan\(formData\.challenges\)/g, "(DOSSIER_TEMPLATES?.getActionPlan?.(formData?.challenges || []) || {})");

// Wait, the getActionPlan returns an object with days1_30, days31_60, days61_90.
// Let's replace the whole PLAN tab variables safely.

const planRegex = /\{\/\* PAGE 4: PLAN \*\/\}[\s\S]*?\{\/\* PAGE 5: NEXT STEP \*\/\}/;

const newPlan = `
          {/* PAGE 4: PLAN */}
          {activeTab === 'PLAN' && (() => {
             const planData = DOSSIER_TEMPLATES?.getActionPlan?.(formData?.challenges || []) || {
                days1_30: { title: '', objective: '', items: [], outcome: '', success: '' },
                days31_60: { title: '', objective: '', items: [], outcome: '', success: '' },
                days61_90: { title: '', objective: '', items: [], outcome: '', success: '' }
             };
             
             return (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 relative z-10">
                <div className="bg-[#0B2545] rounded-2xl p-6 md:p-8 text-white relative overflow-hidden shadow-lg border border-[#0B2545]">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                   <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                      <div className="flex-1">
                         <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-widest mb-4 border border-emerald-500/30">
                            <Target className="w-3 h-3" /> 90-Day Execution Plan
                         </span>
                         <h3 className="text-xl font-serif font-bold text-white mb-2">The Architecture of Scale</h3>
                         <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                            We have broken down your strategic transition into three distinct 30-day sprints. This corporate operations timeline ensures strict accountability and isolates risk before aggressive scaling begins.
                         </p>
                      </div>
                      <div className="w-24 h-24 shrink-0 bg-white/5 rounded-full border border-white/10 flex items-center justify-center">
                         <Calendar className="w-10 h-10 text-emerald-400" />
                      </div>
                   </div>
                </div>

                <div className="space-y-6 relative z-10">
                   {/* Days 1-30 */}
                   <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-red-500 relative z-10">
                      <h4 className="text-sm font-bold text-[#0B2545] uppercase tracking-widest mb-1">{planData?.days1_30?.title || 'Days 1-30'}</h4>
                      <p className="text-xs text-slate-500 mb-4">Objective: {planData?.days1_30?.objective || ''}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                         <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2">Detailed Directives</span>
                            <ul className="space-y-2">
                               {(planData?.days1_30?.items || []).map((item, idx) => (
                               <li key={idx} className="text-xs text-slate-700 flex gap-2 items-start"><CheckCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" /> {item}</li>
                               ))}
                            </ul>
                         </div>
                         <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Expected Outcome</span>
                            <p className="text-xs text-slate-800 mb-3 font-medium">{planData?.days1_30?.outcome || ''}</p>
                            <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Success Indicator</span>
                            <p className="text-xs text-red-700 font-bold bg-red-50 px-2 py-1 rounded inline-block">{planData?.days1_30?.success || ''}</p>
                         </div>
                      </div>
                   </div>

                   {/* Days 31-60 */}
                   <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-[#0B2545] relative z-10">
                      <h4 className="text-sm font-bold text-[#0B2545] uppercase tracking-widest mb-1">{planData?.days31_60?.title || 'Days 31-60'}</h4>
                      <p className="text-xs text-slate-500 mb-4">Objective: {planData?.days31_60?.objective || ''}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                         <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2">Detailed Directives</span>
                            <ul className="space-y-2">
                               {(planData?.days31_60?.items || []).map((item, idx) => (
                               <li key={idx} className="text-xs text-slate-700 flex gap-2 items-start"><CheckCircle className="w-3.5 h-3.5 text-[#0B2545] shrink-0 mt-0.5" /> {item}</li>
                               ))}
                            </ul>
                         </div>
                         <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Expected Outcome</span>
                            <p className="text-xs text-slate-800 mb-3 font-medium">{planData?.days31_60?.outcome || ''}</p>
                            <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Success Indicator</span>
                            <p className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-1 rounded inline-block">{planData?.days31_60?.success || ''}</p>
                         </div>
                      </div>
                   </div>

                   {/* Days 61-90 */}
                   <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-emerald-500 relative z-10">
                      <h4 className="text-sm font-bold text-[#0B2545] uppercase tracking-widest mb-1">{planData?.days61_90?.title || 'Days 61-90'}</h4>
                      <p className="text-xs text-slate-500 mb-4">Objective: {planData?.days61_90?.objective || ''}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                         <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2">Detailed Directives</span>
                            <ul className="space-y-2">
                               {(planData?.days61_90?.items || []).map((item, idx) => (
                               <li key={idx} className="text-xs text-slate-700 flex gap-2 items-start"><CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> {item}</li>
                               ))}
                            </ul>
                         </div>
                         <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Expected Outcome</span>
                            <p className="text-xs text-slate-800 mb-3 font-medium">{planData?.days61_90?.outcome || ''}</p>
                            <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Success Indicator</span>
                            <p className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-1 rounded inline-block">{planData?.days61_90?.success || ''}</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             );
          })}
          
          {/* PAGE 5: NEXT STEP */}`;

report = report.replace(planRegex, newPlan);

// Also add protective optional chaining for `formData.challenges` everywhere else
report = report.replace(/formData\.challenges\[0\]/g, "(formData?.challenges?.[0] || 'Leadership Dependency')");
report = report.replace(/formData\.challenges\?/g, "(formData?.challenges || [])?");

// Also implement zero-baseline displayScore logic
// find getGlobalScore logic
const getGlobalScoreRegex = /const globalScore = getGlobalScore\(\);/;
const displayScoreInjection = `
  const globalScore = getGlobalScore();
  const isComplete = scores && scores.slice(0, 21).filter(s => typeof s === 'number' && s !== 0).length === 21;
  const displayScore = isComplete ? globalScore : "--";
`;
report = report.replace(getGlobalScoreRegex, displayScoreInjection);

// Replace `{globalScore}` with `{displayScore}` in the UI where it's shown as a number
report = report.replace(/<span className="text-5xl font-black text-\[\#0B2545\]">\{globalScore\}<\/span>/, '<span className="text-5xl font-black text-[#0B2545]">{displayScore}</span>');
report = report.replace(/<span className="block text-3xl font-black text-\[\#0B2545\] mb-1">\{globalScore\}<\/span>/, '<span className="block text-3xl font-black text-[#0B2545] mb-1">{displayScore}</span>');

// Check the import
if (!report.includes("import { DOSSIER_TEMPLATES }")) {
    report = report.replace(/import \{ Radar/, "import { DOSSIER_TEMPLATES } from '../utils/dossierTemplates';\nimport { Radar");
}

fs.writeFileSync('src/components/DashboardReport.tsx', report);

// Now apply protective checks to AssessmentEngine.tsx
let engine = fs.readFileSync('src/AssessmentEngine.tsx', 'utf8');
if (!engine.includes("import { DOSSIER_TEMPLATES }")) {
    engine = engine.replace(/import DashboardReport/, "import { DOSSIER_TEMPLATES } from './utils/dossierTemplates';\nimport DashboardReport");
}
fs.writeFileSync('src/AssessmentEngine.tsx', engine);

