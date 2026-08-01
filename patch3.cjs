const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

const importsToAdd = ['Monitor', 'Trophy', 'Settings', 'Lightbulb', 'ArrowUp', 'Minus', 'FileText'];
// add them to lucide-react import
let lucideMatch = content.match(/} from 'lucide-react';/);
if (lucideMatch) {
  content = content.replace(/} from 'lucide-react';/, `, ${importsToAdd.join(', ')} } from 'lucide-react';`);
}

// Change Page 2 of 2 to Page 2 of 3
content = content.replace(/Page 2 of 2/g, 'Page 2 of 3');

const endOfPage2 = '    </div>\n  );\n}';
const endOfPage2Alternative = '    </div>\n  );\n}\n';

const page3Content = `      {/* PAGE 3: BUSINESS HEALTH DASHBOARD */}
      <div className="print-page flex flex-col pt-8 pb-4 px-10 relative overflow-hidden bg-white">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 mb-5">
          <div className="flex items-center gap-1">
            <div className="relative flex items-center justify-center">
              <span className="text-[36pt] font-black text-[#0f172a] leading-none tracking-tighter">K</span>
              <div className="absolute right-[-8px] bottom-1.5 flex items-end gap-[3px]">
                <div className="w-[4px] h-[8px] bg-[#0d9488]"></div>
                <div className="w-[4px] h-[14px] bg-[#0d9488]"></div>
                <div className="relative w-[4px] h-[20px] bg-[#0d9488]">
                  <div className="absolute -top-1 -right-1 w-0 h-0 border-l-[4px] border-l-transparent border-b-[5px] border-b-[#0d9488] border-r-[4px] border-r-transparent rotate-[35deg]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-3">
              <span className="text-[24pt] font-black text-[#0f172a] tracking-tight leading-none mt-1">KRGONE</span>
              <div className="flex items-center gap-1.5 w-full mt-1.5">
                 <div className="flex-1 h-px bg-[#0d9488]"></div>
                 <p className="text-[8pt] text-slate-700 font-medium whitespace-nowrap">Business Growth OS™</p>
                 <div className="flex-1 h-px bg-[#0d9488]"></div>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <h2 className="text-[14pt] font-black text-[#0f172a] uppercase tracking-wide leading-snug">BUSINESS GROWTH DIAGNOSTIC™</h2>
            <div className="flex items-center justify-end gap-2 mt-1">
              <p className="text-[10pt] text-slate-500 font-medium">Executive Business Assessment Report</p>
            </div>
            <div className="flex items-center justify-end mt-2">
              <div className="flex-1 max-w-[200px] h-[1.5px] bg-[#0d9488]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#0d9488] ml-[-1px]"></div>
            </div>
          </div>
        </div>

        {/* Title Area */}
        <div className="mb-5">
          <h2 className="text-[24pt] font-black text-[#0f172a] uppercase tracking-wide leading-tight">3. BUSINESS HEALTH DASHBOARD</h2>
          <p className="text-[10.5pt] text-slate-600 mt-1">A comprehensive view of your business across 7 critical growth pillars.</p>
        </div>

        {/* Two Columns: Overall Score & Radar */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          
          {/* Left: Overall Score */}
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 flex flex-col">
            <h3 className="text-[10pt] font-bold text-[#0f172a] uppercase tracking-wide text-center mb-6">OVERALL BUSINESS HEALTH SCORE</h3>
            
            <div className="flex items-center justify-center gap-8 mb-6">
              {/* Donut Chart */}
              <div className="relative w-36 h-36 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="12" />
                  <circle 
                    cx="50" cy="50" r="40" 
                    fill="none" 
                    stroke="#0d9488" 
                    strokeWidth="12" 
                    strokeDasharray={\`\${(globalScore / 100) * 251.2} 251.2\`} 
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[36pt] font-black text-[#0f172a] leading-none tracking-tighter mt-2">{globalScore}</span>
                  <span className="text-[10pt] font-bold text-slate-500 uppercase tracking-widest mt-0">/100</span>
                </div>
              </div>
              
              <div>
                <h4 className={"text-[12pt] font-black uppercase tracking-widest mb-2 " + (globalScore >= 70 ? 'text-[#0d9488]' : globalScore >= 50 ? 'text-[#0d9488]' : 'text-red-500')}>
                  {globalScore >= 70 ? 'HIGH' : globalScore >= 50 ? 'MODERATE' : 'LOW'}
                </h4>
                <p className="text-[9pt] text-slate-700 leading-[1.6]">
                  Your business is on the right track with a solid foundation. Focused improvements in priority areas will accelerate growth and increase overall performance.
                </p>
              </div>
            </div>
            
            <div className="mt-auto border border-slate-200 rounded-lg p-3 bg-white">
              <p className="text-[8.5pt] font-bold text-[#0f172a] mb-2">Score Interpretation</p>
              <div className="grid grid-cols-5 gap-2 text-[7.5pt]">
                <div>
                  <p className="font-bold text-[#0f172a]">80 - 100</p>
                  <p className="font-semibold text-[#0d9488] mb-0.5">Excellent</p>
                  <p className="text-slate-500 leading-tight">Sustainable growth leader</p>
                </div>
                <div>
                  <p className="font-bold text-[#0f172a]">60 - 79</p>
                  <p className="font-semibold text-emerald-600 mb-0.5">Good</p>
                  <p className="text-slate-500 leading-tight">Well positioned for growth</p>
                </div>
                <div>
                  <p className="font-bold text-[#0f172a]">40 - 59</p>
                  <p className="font-semibold text-amber-500 mb-0.5">Moderate</p>
                  <p className="text-slate-500 leading-tight">Room for improvement</p>
                </div>
                <div>
                  <p className="font-bold text-[#0f172a]">20 - 39</p>
                  <p className="font-semibold text-orange-500 mb-0.5">Weak</p>
                  <p className="text-slate-500 leading-tight">Needs focused attention</p>
                </div>
                <div>
                  <p className="font-bold text-[#0f172a]">0 - 19</p>
                  <p className="font-semibold text-red-500 mb-0.5">Critical</p>
                  <p className="text-slate-500 leading-tight">High risk - Urgent action</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Radar Chart */}
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 flex flex-col items-center">
            <h3 className="text-[10pt] font-bold text-[#0f172a] uppercase tracking-wide text-center mb-2">7 PILLAR PERFORMANCE OVERVIEW</h3>
            
            <div className="flex-1 w-full h-[250px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={mappedPillars}>
                  <PolarGrid stroke="#cbd5e1" />
                  <PolarAngleAxis 
                    dataKey="name" 
                    tick={{ fill: '#0f172a', fontSize: 8.5, fontWeight: 700 }}
                    tickFormatter={(val) => {
                      if (val.includes('Leadership')) return 'Leadership\\n' + (mappedPillars[0]?.score||'');
                      if (val.includes('Revenue')) return 'Revenue &\\nFinancial Health\\n' + (mappedPillars[1]?.score||'');
                      if (val.includes('Sales')) return 'Sales &\\nGo-To-Market\\n' + (mappedPillars[2]?.score||'');
                      if (val.includes('Operations')) return 'Operations\\n' + (mappedPillars[3]?.score||'');
                      if (val.includes('People')) return 'People &\\nCulture\\n' + (mappedPillars[4]?.score||'');
                      if (val.includes('Technology')) return 'Technology &\\nDigital Capability\\n' + (mappedPillars[5]?.score||'');
                      if (val.includes('Market')) return 'Market &\\nCompetitive\\nPosition\\n' + (mappedPillars[6]?.score||'');
                      return val;
                    }}
                  />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{fontSize: 7}} tickCount={5} axisLine={false} />
                  <Radar name="Benchmark" dataKey={() => 60} stroke="#94a3b8" strokeWidth={1} fill="#f1f5f9" fillOpacity={0.5} />
                  <Radar name="Your Score" dataKey="score" stroke="#0d9488" strokeWidth={2} fill="#0d9488" fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex items-center gap-6 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#0d9488]"></div>
                <span className="text-[8.5pt] font-bold text-[#0f172a]">Your Score</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <span className="text-[8.5pt] font-bold text-slate-500">Benchmark (Industry Avg.)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar Scorecard */}
        <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 mb-4">
          <h3 className="text-[10pt] font-bold text-[#0f172a] uppercase tracking-wide text-center mb-4">PILLAR SCORECARD</h3>
          <div className="grid grid-cols-7 gap-2">
            {[
              { num: '1', name: 'Leadership', icon: <Users className="w-6 h-6 text-white"/>, score: mappedPillars[0]?.score||0 },
              { num: '2', name: 'Revenue &\\nFinancial Health', icon: <DollarSign className="w-6 h-6 text-white"/>, score: mappedPillars[1]?.score||0 },
              { num: '3', name: 'Sales &\\nGo-To-Market', icon: <Target className="w-6 h-6 text-white"/>, score: mappedPillars[2]?.score||0 },
              { num: '4', name: 'Operations', icon: <Settings className="w-6 h-6 text-white"/>, score: mappedPillars[3]?.score||0 },
              { num: '5', name: 'People &\\nCulture', icon: <Users className="w-6 h-6 text-white"/>, score: mappedPillars[4]?.score||0 },
              { num: '6', name: 'Technology &\\nDigital Capability', icon: <Monitor className="w-6 h-6 text-white"/>, score: mappedPillars[5]?.score||0 },
              { num: '7', name: 'Market &\\nCompetitive\\nPosition', icon: <Trophy className="w-6 h-6 text-white"/>, score: mappedPillars[6]?.score||0 }
            ].map((p, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#0f172a] flex items-center justify-center mb-2">
                  {p.icon}
                </div>
                <p className="text-[7.5pt] font-bold text-[#0f172a] mb-2 h-8 flex items-center justify-center whitespace-pre-line">{p.num}. {p.name}</p>
                <p className="text-[16pt] font-black text-[#0f172a] leading-none mb-1">{p.score}<span className="text-[9pt] font-bold text-slate-400">/100</span></p>
                <p className={"text-[8pt] font-bold mb-2 " + (p.score >= 70 ? 'text-[#0d9488]' : p.score >= 50 ? 'text-[#0d9488]' : 'text-amber-500')}>
                  {p.score >= 70 ? 'Good' : p.score >= 50 ? 'Moderate' : 'Weak'}
                </p>
                <div className={"w-full h-1.5 rounded-full " + (p.score >= 70 ? 'bg-[#0d9488]' : p.score >= 50 ? 'bg-[#0d9488]' : 'bg-amber-500')}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Insights & Priority */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#0f172a] flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-white"/>
              </div>
              <h3 className="text-[10pt] font-bold text-[#0f172a] uppercase tracking-wide">KEY INSIGHTS</h3>
            </div>
            
            <div className="space-y-4 text-[9pt] text-slate-700 font-medium">
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-[#0d9488] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowUp className="w-3.5 h-3.5 text-white" />
                </div>
                <p>Strong market position and competitive advantage are key strengths.</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-[#0d9488] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowUp className="w-3.5 h-3.5 text-white" />
                </div>
                <p>Financial health is stable with consistent revenue performance.</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Minus className="w-3.5 h-3.5 text-white" />
                </div>
                <p>Operations and sales processes need optimization to improve efficiency.</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Minus className="w-3.5 h-3.5 text-white" />
                </div>
                <p>Technology adoption and automation are critical opportunities.</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Minus className="w-3.5 h-3.5 text-white" />
                </div>
                <p>People development and performance culture can drive higher productivity.</p>
              </div>
            </div>
          </div>
          
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#0f172a] flex items-center justify-center">
                <Target className="w-4 h-4 text-white"/>
              </div>
              <h3 className="text-[10pt] font-bold text-[#0f172a] uppercase tracking-wide">PRIORITY FOCUS AREAS</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 bg-[#0f172a] text-white font-bold text-[12pt] flex items-center justify-center rounded-lg flex-shrink-0">1</div>
                <div className="flex-1">
                  <h4 className="text-[9pt] font-bold text-[#0d9488]">Operations Excellence</h4>
                  <p className="text-[8pt] text-slate-600 font-medium leading-snug">Streamline processes, reduce manual work and improve operational efficiency.</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-[7.5pt] font-bold text-slate-400">Impact</p>
                  <p className="text-[9pt] font-bold text-emerald-600">High</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 bg-[#0f172a] text-white font-bold text-[12pt] flex items-center justify-center rounded-lg flex-shrink-0">2</div>
                <div className="flex-1">
                  <h4 className="text-[9pt] font-bold text-[#0d9488]">Sales Effectiveness</h4>
                  <p className="text-[8pt] text-slate-600 font-medium leading-snug">Strengthen sales process, pipeline management and customer conversion.</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-[7.5pt] font-bold text-slate-400">Impact</p>
                  <p className="text-[9pt] font-bold text-emerald-600">High</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 bg-[#0f172a] text-white font-bold text-[12pt] flex items-center justify-center rounded-lg flex-shrink-0">3</div>
                <div className="flex-1">
                  <h4 className="text-[9pt] font-bold text-[#0f172a]">Technology & Automation</h4>
                  <p className="text-[8pt] text-slate-600 font-medium leading-snug">Increase digital adoption and automate key business workflows.</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-[7.5pt] font-bold text-slate-400">Impact</p>
                  <p className="text-[9pt] font-bold text-amber-500">Medium</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 bg-[#0f172a] text-white font-bold text-[12pt] flex items-center justify-center rounded-lg flex-shrink-0">4</div>
                <div className="flex-1">
                  <h4 className="text-[9pt] font-bold text-[#0f172a]">People Capability</h4>
                  <p className="text-[8pt] text-slate-600 font-medium leading-snug">Build skills, performance culture and accountability framework.</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-[7.5pt] font-bold text-slate-400">Impact</p>
                  <p className="text-[9pt] font-bold text-amber-500">Medium</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Banner */}
        <div className="w-full bg-[#0f172a] rounded-xl p-4 flex items-center justify-between mb-4">
          <div className="flex gap-3 max-w-[40%] items-start">
            <span className="text-[40pt] text-[#0d9488] font-serif leading-none mt-[-10px] opacity-80">“</span>
            <div>
              <p className="text-[9pt] text-white font-medium leading-snug">
                What gets measured gets managed.<br/>What gets managed gets improved.<br/>What gets improved grows.
              </p>
              <p className="text-[8.5pt] text-[#0d9488] mt-1">— Peter Drucker</p>
            </div>
          </div>
          
          <div className="flex items-center gap-8 px-4 text-white">
            <div className="flex flex-col items-center text-center">
               <Building2 className="w-6 h-6 text-white/80 mb-2" strokeWidth={1.5} />
               <span className="text-[7.5pt] text-white/70">Assessment Date</span>
               <span className="text-[8.5pt] font-bold">{assessmentDate || ''}</span>
            </div>
            <div className="flex flex-col items-center text-center">
               <FileText className="w-6 h-6 text-white/80 mb-2" strokeWidth={1.5} />
               <span className="text-[7.5pt] text-white/70">Assessment ID</span>
               <span className="text-[8.5pt] font-bold">{reportId || ''}</span>
            </div>
            <div className="flex flex-col items-center text-center">
               <Calendar className="w-6 h-6 text-white/80 mb-2" strokeWidth={1.5} />
               <span className="text-[7.5pt] text-white/70">Next Review Date</span>
               <span className="text-[8.5pt] font-bold">23 October 2026</span>
            </div>
            <div className="flex flex-col items-center text-center">
               <User className="w-6 h-6 text-white/80 mb-2" strokeWidth={1.5} />
               <span className="text-[7.5pt] text-white/70">Prepared By</span>
               <span className="text-[8.5pt] font-bold">KRGONE Advisory Team</span>
            </div>
          </div>
        </div>

        {/* Custom Footer */}
        <div className="mt-auto pt-2">
          <div className="flex items-end justify-between border-t border-slate-300 pt-3 text-[8.5pt] text-slate-700 font-medium">
            <div className="flex items-center gap-3">
              <span className="font-black text-[#0f172a] text-[10.5pt] block leading-none tracking-widest uppercase">KRGONE</span>
              <span className="text-[#0d9488] font-medium text-[8.5pt]">Business Growth Consulting</span>
            </div>
            <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-400"/> <span>{formData?.location ? formData.location + ', ' : ''}India</span></div>
            <div className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-slate-400"/> www.krgone.vercel.app</div>
            <div className="text-[8.5pt] font-bold text-white bg-[#0f172a] px-5 py-1.5 rounded-full">Page 3 of 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

if (content.endsWith(endOfPage2)) {
  content = content.replace(endOfPage2, page3Content);
} else if (content.endsWith(endOfPage2Alternative)) {
  content = content.replace(endOfPage2Alternative, page3Content);
} else {
  console.log("Could not find the end of page 2 tag to replace.");
  process.exit(1);
}

fs.writeFileSync('src/components/PrintDossier.tsx', content, 'utf8');
console.log("Patch applied successfully!");
