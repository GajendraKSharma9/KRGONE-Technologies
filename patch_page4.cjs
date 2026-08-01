const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

// Change page numbers
content = content.replace(/Page 2 of 3/g, 'Page 2 of 4');
content = content.replace(/Page 3 of 3/g, 'Page 3 of 4');

const endOfPage3 = '    </div>\n  );\n}';
const endOfPage3Alternative = '    </div>\n  );\n}\n';

const page4Content = `      {/* PAGE 4: 7 PILLAR DETAILED ANALYSIS */}
      <div className="print-page flex flex-col pt-8 pb-4 px-10 relative bg-white">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 mb-5 border-b-[1.5px] border-slate-300">
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
        <div className="mb-4">
          <h2 className="text-[24pt] font-black text-[#0f172a] uppercase tracking-wide leading-tight">4. 7 PILLAR DETAILED ANALYSIS</h2>
          <p className="text-[10pt] text-slate-600 mt-1">In-depth analysis of your business performance across 7 critical growth pillars.</p>
        </div>

        {/* Two Columns: Summary vs Comparison */}
        <div className="flex gap-4 mb-4">
          {/* Left Column: Pillar Performance Summary */}
          <div className="w-[50%] border border-slate-200 rounded-xl p-4 bg-slate-50/30 flex flex-col">
            <h3 className="text-[9.5pt] font-bold text-[#0f172a] uppercase tracking-wide text-center mb-4">PILLAR PERFORMANCE SUMMARY</h3>
            <div className="flex-1 space-y-3">
               {mappedPillars.map((p, i) => (
                  <div key={i} className="flex gap-3">
                     <div className="w-9 h-9 rounded-full bg-[#0f172a] flex items-center justify-center shrink-0">
                       {i === 0 ? <Users className="w-4 h-4 text-white"/> : 
                        i === 1 ? <DollarSign className="w-4 h-4 text-white"/> :
                        i === 2 ? <Target className="w-4 h-4 text-white"/> :
                        i === 3 ? <Settings className="w-4 h-4 text-white"/> :
                        i === 4 ? <Users className="w-4 h-4 text-white"/> :
                        i === 5 ? <Monitor className="w-4 h-4 text-white"/> :
                        <Trophy className="w-4 h-4 text-white"/>}
                     </div>
                     <div className="flex-1 border-b border-slate-100 pb-2">
                        <div className="flex justify-between items-start mb-0.5">
                          <h4 className="text-[8.5pt] font-bold text-[#0f172a] leading-none">{i+1}. {p.name}</h4>
                          <div className="text-right flex items-center gap-2">
                            <span className="text-[11pt] font-black leading-none text-[#0f172a]">{p.score}<span className="text-[7pt] font-bold text-slate-400">/100</span></span>
                            <span className={"text-[7.5pt] font-bold w-12 text-center " + (p.score >= 70 ? 'text-emerald-600' : p.score >= 50 ? 'text-emerald-600' : 'text-red-500')}>
                              {p.score >= 70 ? 'Good' : p.score >= 50 ? 'Moderate' : 'Weak'}
                            </span>
                          </div>
                        </div>
                        <p className="text-[7pt] text-slate-600 leading-tight mb-2 pr-14">
                          {p.name.includes('Leadership') && 'Leadership clarity and strategic direction are in place but execution consistency is needed.'}
                          {p.name.includes('Revenue') && 'Healthy revenue performance with good profitability and financial discipline.'}
                          {p.name.includes('Sales') && 'Sales process is functional but needs more structure and consistency.'}
                          {p.name.includes('Operations') && 'Operations are largely manual with opportunities to improve efficiency and standardization.'}
                          {p.name.includes('People') && 'Committed team with good culture foundation; performance management can be improved.'}
                          {p.name.includes('Technology') && 'Basic digital tools are used; automation and data-driven decision making can be enhanced.'}
                          {p.name.includes('Market') && 'Strong market position with clear competitive advantage and growth opportunities.'}
                        </p>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div className={"h-full " + (p.score >= 70 ? 'bg-[#0d9488]' : p.score >= 50 ? 'bg-[#0d9488]' : 'bg-red-500')} style={{width: \`\${p.score}%\`}}></div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-200">
              <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-emerald-600 rounded-sm"></div><span className="text-[6.5pt] text-[#0f172a] font-medium">80 - 100 Excellent</span></div>
              <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-[#0d9488] rounded-sm"></div><span className="text-[6.5pt] text-[#0f172a] font-medium">60 - 79 Good</span></div>
              <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-amber-500 rounded-sm"></div><span className="text-[6.5pt] text-[#0f172a] font-medium">40 - 59 Moderate</span></div>
              <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-red-500 rounded-sm"></div><span className="text-[6.5pt] text-[#0f172a] font-medium">20 - 39 Weak</span></div>
              <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-red-700 rounded-sm"></div><span className="text-[6.5pt] text-[#0f172a] font-medium">0 - 19 Critical</span></div>
            </div>
          </div>

          {/* Right Column: Comparison & Insights */}
          <div className="w-[50%] flex flex-col gap-4">
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/30 flex flex-col">
               <h3 className="text-[9.5pt] font-bold text-[#0f172a] uppercase tracking-wide text-center mb-1">PILLAR SCORE COMPARISON</h3>
               <div className="flex items-center justify-center gap-4 mb-2">
                 <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-[#0d9488]"></div><span className="text-[7pt] font-medium text-slate-600">Your Score</span></div>
                 <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-slate-300"></div><span className="text-[7pt] font-medium text-slate-600">Industry Benchmark</span></div>
               </div>
               
               <div className="flex-1 w-full h-[220px]">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart layout="vertical" data={mappedPillars.map(p => ({name: p.name.replace(' &', '\\n&').replace(' Capability', '\\nCapability').replace(' Position', '\\nPosition').replace(' Health', '\\nHealth'), score: p.score, benchmark: p.name.includes('Leadership') ? 65 : p.name.includes('Revenue') ? 67 : p.name.includes('Sales') ? 62 : p.name.includes('Operations') ? 60 : p.name.includes('People') ? 63 : p.name.includes('Technology') ? 65 : 70 }))} margin={{top: 0, right: 20, left: 20, bottom: 0}}>
                     <XAxis type="number" domain={[0, 100]} tick={{fontSize: 7}} tickCount={6} />
                     <YAxis dataKey="name" type="category" tick={{fontSize: 7, fill: '#0f172a', fontWeight: 'bold'}} interval={0} width={80} />
                     <Bar isAnimationActive={false} dataKey="score" fill="#0d9488" barSize={6} radius={[0, 4, 4, 0]} />
                     <Bar isAnimationActive={false} dataKey="benchmark" fill="#cbd5e1" barSize={6} radius={[0, 4, 4, 0]} />
                   </BarChart>
                 </ResponsiveContainer>
               </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/30 flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-[#0f172a] flex items-center justify-center shrink-0">
                  <Lightbulb className="w-4 h-4 text-white"/>
                </div>
                <h3 className="text-[9.5pt] font-bold text-[#0f172a] uppercase tracking-wide">PILLAR INSIGHTS</h3>
              </div>
              <div className="space-y-3 text-[7.5pt] text-[#0f172a] font-medium">
                <div className="flex gap-2.5 items-start">
                  <div className="w-4 h-4 rounded-full bg-emerald-600 flex items-center justify-center shrink-0 mt-0.5"><ArrowUp className="w-2.5 h-2.5 text-white" strokeWidth={3}/></div>
                  <p>Revenue & Financial Health and Market Position are key <span className="text-emerald-600 font-bold">strengths</span> driving business stability.</p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <div className="w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center shrink-0 mt-0.5"><Minus className="w-2.5 h-2.5 text-white" strokeWidth={3}/></div>
                  <p>Operations and Sales processes need <span className="text-amber-600 font-bold">improvement</span> to enhance efficiency and scalability.</p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <div className="w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center shrink-0 mt-0.5"><Minus className="w-2.5 h-2.5 text-white" strokeWidth={3}/></div>
                  <p>Technology adoption and automation present significant <span className="text-amber-600 font-bold">opportunities</span> for growth.</p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center shrink-0 mt-0.5 text-white font-black text-[10px]">!</div>
                  <p>Strengthen performance management and leadership execution to <span className="text-red-600 font-bold">unlock full potential</span>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Score Breakdown Table */}
        <div className="border border-slate-200 rounded-xl overflow-hidden mb-4 shadow-sm flex-1">
          <div className="bg-slate-50/50 py-2.5 px-4 border-b border-slate-200">
            <h3 className="text-[9.5pt] font-bold text-[#0f172a] uppercase tracking-wide text-center">PILLAR DETAILED SCORE BREAKDOWN</h3>
          </div>
          <table className="w-full text-left text-[7.5pt]">
            <thead className="bg-white text-[#0f172a]">
              <tr className="border-b-2 border-slate-200">
                <th className="py-2.5 px-4 font-bold w-[22%] text-slate-700">Pillar</th>
                <th className="py-2.5 px-2 font-bold text-center w-[8%] text-slate-700">Score<br/><span className="text-[6.5pt] text-slate-400 font-normal">(/100)</span></th>
                <th className="py-2.5 px-2 font-bold text-center w-[12%] text-slate-700">Rating</th>
                <th className="py-2.5 px-4 font-bold w-[29%] text-slate-700"><div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Key Strengths</div></th>
                <th className="py-2.5 px-4 font-bold w-[29%] text-slate-700"><div className="flex items-center gap-1.5"><AlertTriangle className="w-4 h-4 text-red-500"/> Key Improvement Areas</div></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
               {mappedPillars.map((p, i) => (
                 <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}>
                   <td className="py-2 px-4 font-bold text-[#0f172a] whitespace-nowrap">1. {p.name}</td>
                   <td className="py-2 px-2 text-center font-black text-[#0d9488]">{p.score}</td>
                   <td className={"py-2 px-2 text-center font-bold " + (p.score >= 70 ? 'text-[#0d9488]' : p.score >= 50 ? 'text-[#0d9488]' : 'text-amber-500')}>{p.score >= 70 ? 'Good' : p.score >= 50 ? 'Moderate' : 'Weak'}</td>
                   <td className="py-2 px-4 text-[#0f172a]">
                      <ul className="list-disc pl-3 space-y-0.5">
                        {p.name.includes('Leadership') && <><li>Clear vision and long-term thinking</li><li>Good commitment to organization</li></>}
                        {p.name.includes('Revenue') && <><li>Healthy revenue growth</li><li>Good cost control</li></>}
                        {p.name.includes('Sales') && <><li>Existing customer relationships</li><li>Basic sales process in place</li></>}
                        {p.name.includes('Operations') && <><li>Core operations are functional</li><li>Team collaboration</li></>}
                        {p.name.includes('People') && <><li>Positive work culture</li><li>Employee commitment</li></>}
                        {p.name.includes('Technology') && <><li>Basic digital tools usage</li><li>Openness to technology</li></>}
                        {p.name.includes('Market') && <><li>Strong market reputation</li><li>Competitive advantage</li></>}
                      </ul>
                   </td>
                   <td className="py-2 px-4 text-[#0f172a]">
                      <ul className="list-disc pl-3 space-y-0.5">
                        {p.name.includes('Leadership') && <><li>Execution consistency</li><li>Delegation and empowerment</li></>}
                        {p.name.includes('Revenue') && <><li>Diversify revenue streams</li><li>Improve working capital management</li></>}
                        {p.name.includes('Sales') && <><li>Sales pipeline management</li><li>Sales process standardization</li></>}
                        {p.name.includes('Operations') && <><li>Process standardization</li><li>Reduce manual dependencies</li></>}
                        {p.name.includes('People') && <><li>Performance management</li><li>Skill development</li></>}
                        {p.name.includes('Technology') && <><li>Automation of key processes</li><li>Data-driven decision making</li></>}
                        {p.name.includes('Market') && <><li>Brand building</li><li>Market expansion</li></>}
                      </ul>
                   </td>
                 </tr>
               ))}
            </tbody>
          </table>
        </div>

        {/* Footer Banner */}
        <div className="w-full bg-[#0f172a] rounded-xl p-4 flex items-center justify-between mb-4 mt-auto">
          <div className="flex gap-3 max-w-[50%] items-start">
            <span className="text-[40pt] text-[#0d9488] font-serif leading-none mt-[-10px] opacity-80">“</span>
            <div>
              <p className="text-[9.5pt] text-white font-medium leading-snug">
                Growth is never by mere chance; it is the result of forces working together.
              </p>
              <p className="text-[8.5pt] text-[#0d9488] mt-1">— James Cash Penney</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 px-4 text-white">
            <div className="flex flex-col items-center text-center">
               <Target className="w-6 h-6 text-white mb-2" strokeWidth={1.5} />
               <span className="text-[7.5pt] font-medium text-white">Focus on<br/>What Matters</span>
            </div>
            <div className="flex flex-col items-center text-center">
               <Users className="w-6 h-6 text-white mb-2" strokeWidth={1.5} />
               <span className="text-[7.5pt] font-medium text-white">Align People<br/>& Process</span>
            </div>
            <div className="flex flex-col items-center text-center">
               <Settings className="w-6 h-6 text-white mb-2" strokeWidth={1.5} />
               <span className="text-[7.5pt] font-medium text-white">Leverage<br/>Technology</span>
            </div>
            <div className="flex flex-col items-center text-center">
               <TrendingUp className="w-6 h-6 text-white mb-2" strokeWidth={1.5} />
               <span className="text-[7.5pt] font-medium text-white">Drive<br/>Sustainable Growth</span>
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
            <div className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-slate-400"/> +91 7300300330</div>
            <div className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-slate-400"/> enquiry.krgone@gmail.com</div>
            <div className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-slate-400"/> www.krgone.vercel.app</div>
            <div className="text-[8.5pt] font-bold text-white bg-[#0f172a] px-5 py-1.5 rounded-full">Page 4 of 4</div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

if (content.endsWith(endOfPage3)) {
  content = content.replace(endOfPage3, page4Content);
} else if (content.endsWith(endOfPage3Alternative)) {
  content = content.replace(endOfPage3Alternative, page4Content);
} else {
  console.log("Could not find the end of page 3 tag to replace.");
  process.exit(1);
}

// In the row rendering, make sure the number matches the pillar index properly (1 to 7)
content = content.replace(/1\. \{p\.name\}/g, '{i+1}. {p.name}');

fs.writeFileSync('src/components/PrintDossier.tsx', content, 'utf8');
console.log("Patch applied successfully!");
