const fs = require('fs');
let code = fs.readFileSync('src/components/PrintDossier.tsx', 'utf-8');

// 1. Revert renderFooter calls to 9 pages
code = code.replace(/renderFooter\((\d+), 10\)/g, 'renderFooter($1, 9)');

// 2. Remove Strategic Technical Recommendations Page
const startStr = "{/* NEW PAGE: STRATEGIC TECHNICAL RECOMMENDATIONS */}";
const endStr = "{/* PAGE 10: CLOSING                            */}";
const startIndex = code.indexOf(startStr);
const endIndex = code.indexOf(endStr);
if (startIndex !== -1 && endIndex !== -1) {
  code = code.substring(0, startIndex) + code.substring(endIndex);
}
code = code.replace("{/* PAGE 10: CLOSING                            */}", "{/* PAGE 9: CLOSING                            */}");


// 3. Revert Executive Observation back to AI DIAGNOSTIC ANALYSIS
const oldExecObs = `<div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm relative">
            <h3 className="text-[10px] font-black text-[#0A1128] uppercase tracking-wider flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> EXECUTIVE OBSERVATION & MACRO DIAGNOSIS
            </h3>
            <div className="text-[9.5pt] text-slate-700 leading-relaxed font-medium space-y-2">
              {getExecutiveDiagnosis().map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>`;

const newExecObs = `<div className="bg-slate-50 border border-slate-200 rounded-xl p-3 shadow-sm relative">
            <h3 className="text-[10px] font-black text-[#0A1128] uppercase tracking-wider flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> AI DIAGNOSTIC ANALYSIS
            </h3>
            <div className="text-[10pt] text-slate-700 leading-relaxed font-medium space-y-3">
              <p>The business demonstrates a {gClass.label.toLowerCase()} operational foundation, achieving an overall health score of {globalScore}/100 ({gClass.label}).</p>
              <p>Operating within the {industry || 'Technology'} sector, current capabilities highlight core competencies in {strongest?.name || 'Sales & Customer Acquisition'} and {secondStrongest?.name || 'Human Resources & People'}.</p>
              <p>Further optimization in {lowest?.name || 'Leadership & Governance'} and {secondWeakest?.name || 'Technology & Systems'} will unlock significant potential for scalable growth and elevated market positioning.</p>
            </div>
          </div>`;

code = code.replace(oldExecObs, newExecObs);

// 4. Remove getExecutiveDiagnosis and getDetailedRecommendations
const exDiagMatch = code.match(/const getExecutiveDiagnosis = \(\) => \{[\s\S]*?\};\s*const getDetailedRecommendations = \(\) => \{[\s\S]*?\};\s*return \(/);
if (exDiagMatch) {
  code = code.replace(exDiagMatch[0], "return (");
}

fs.writeFileSync('src/components/PrintDossier.tsx', code);
