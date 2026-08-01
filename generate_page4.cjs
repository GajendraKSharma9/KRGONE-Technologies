const fs = require('fs');

const page4Code = `
      {/* PAGE 4: 7 PILLAR DETAILED ANALYSIS */}
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
          <h2 className="text-[24pt] font-black text-[#1e3a8a] uppercase tracking-wide leading-tight">4. 7 PILLAR DETAILED ANALYSIS</h2>
          <p className="text-[10pt] text-slate-600 mt-1">In-depth analysis of your business performance across 7 critical growth pillars.</p>
        </div>

        <div className="flex gap-5 mb-4">
          
          {/* LEFT COLUMN: PILLAR PERFORMANCE SUMMARY */}
          <div className="w-[50%] flex flex-col">
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white h-full flex flex-col">
              <div className="bg-slate-50 py-2.5 text-center border-b border-slate-200">
                <span className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide">PILLAR PERFORMANCE SUMMARY</span>
              </div>
              <div className="p-4 flex-1 flex flex-col gap-4">
                
                {/* 1 */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-start gap-3 w-[65%]">
                    <div className="w-10 h-10 rounded-full bg-[#0f172a] text-white flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5"/>
                    </div>
                    <div>
                      <h4 className="text-[9.5pt] font-bold text-[#0f172a]">1. Leadership</h4>
                      <p className="text-[7pt] text-slate-600 leading-tight mt-0.5">Leadership clarity and strategic direction are in place but execution consistency is needed.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end w-[30%]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[16pt] font-bold text-[#0d9488]">60</span><span className="text-[9pt] font-bold text-slate-400">/100</span>
                      <span className="text-[8pt] font-bold text-[#0d9488] ml-2">Moderate</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full mt-1.5 overflow-hidden">
                      <div className="h-full bg-[#0d9488] rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-start gap-3 w-[65%]">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      <IndianRupee className="w-5 h-5"/>
                    </div>
                    <div>
                      <h4 className="text-[9.5pt] font-bold text-[#0f172a]">2. Revenue & Financial Health</h4>
                      <p className="text-[7pt] text-slate-600 leading-tight mt-0.5">Healthy revenue performance with good profitability and financial discipline.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end w-[30%]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[16pt] font-bold text-[#0d9488]">65</span><span className="text-[9pt] font-bold text-slate-400">/100</span>
                      <span className="text-[8pt] font-bold text-[#0d9488] ml-2">Moderate</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full mt-1.5 overflow-hidden">
                      <div className="h-full bg-[#0d9488] rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-start gap-3 w-[65%]">
                    <div className="w-10 h-10 rounded-full bg-[#0f172a] text-white flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5"/>
                    </div>
                    <div>
                      <h4 className="text-[9.5pt] font-bold text-[#0f172a]">3. Sales & Go-To-Market</h4>
                      <p className="text-[7pt] text-slate-600 leading-tight mt-0.5">Sales process is functional but needs more structure and consistency.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end w-[30%]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[16pt] font-bold text-[#0d9488]">58</span><span className="text-[9pt] font-bold text-slate-400">/100</span>
                      <span className="text-[8pt] font-bold text-[#0d9488] ml-2">Moderate</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full mt-1.5 overflow-hidden">
                      <div className="h-full bg-[#0d9488] rounded-full" style={{width: '58%'}}></div>
                    </div>
                  </div>
                </div>

                {/* 4 */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-start gap-3 w-[65%]">
                    <div className="w-10 h-10 rounded-full bg-[#0d9488] text-white flex items-center justify-center shrink-0">
                      <Settings className="w-5 h-5"/>
                    </div>
                    <div>
                      <h4 className="text-[9.5pt] font-bold text-[#0f172a]">4. Operations</h4>
                      <p className="text-[7pt] text-slate-600 leading-tight mt-0.5">Operations are largely manual with opportunities to improve efficiency and standardization.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end w-[30%]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[16pt] font-bold text-[#0d9488]">55</span><span className="text-[9pt] font-bold text-slate-400">/100</span>
                      <span className="text-[8pt] font-bold text-[#0d9488] ml-2">Moderate</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full mt-1.5 overflow-hidden">
                      <div className="h-full bg-[#0d9488] rounded-full" style={{width: '55%'}}></div>
                    </div>
                  </div>
                </div>

                {/* 5 */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-start gap-3 w-[65%]">
                    <div className="w-10 h-10 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5"/>
                    </div>
                    <div>
                      <h4 className="text-[9.5pt] font-bold text-[#0f172a]">5. People & Culture</h4>
                      <p className="text-[7pt] text-slate-600 leading-tight mt-0.5">Committed team with good culture foundation; performance management can be improved.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end w-[30%]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[16pt] font-bold text-[#0d9488]">60</span><span className="text-[9pt] font-bold text-slate-400">/100</span>
                      <span className="text-[8pt] font-bold text-[#0d9488] ml-2">Moderate</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full mt-1.5 overflow-hidden">
                      <div className="h-full bg-[#0d9488] rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                </div>

                {/* 6 */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-start gap-3 w-[65%]">
                    <div className="w-10 h-10 rounded-full bg-[#0d9488] text-white flex items-center justify-center shrink-0">
                      <Monitor className="w-5 h-5"/>
                    </div>
                    <div>
                      <h4 className="text-[9.5pt] font-bold text-[#0f172a]">6. Technology & Digital Capability</h4>
                      <p className="text-[7pt] text-slate-600 leading-tight mt-0.5">Basic digital tools are used; automation and data-driven decision making can be enhanced.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end w-[30%]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[16pt] font-bold text-[#0d9488]">62</span><span className="text-[9pt] font-bold text-slate-400">/100</span>
                      <span className="text-[8pt] font-bold text-[#0d9488] ml-2">Moderate</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full mt-1.5 overflow-hidden">
                      <div className="h-full bg-[#0d9488] rounded-full" style={{width: '62%'}}></div>
                    </div>
                  </div>
                </div>

                {/* 7 */}
                <div className="flex items-center justify-between pb-1">
                  <div className="flex items-start gap-3 w-[65%]">
                    <div className="w-10 h-10 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0">
                      <Trophy className="w-5 h-5"/>
                    </div>
                    <div>
                      <h4 className="text-[9.5pt] font-bold text-[#0f172a]">7. Market & Competitive Position</h4>
                      <p className="text-[7pt] text-slate-600 leading-tight mt-0.5">Strong market position with clear competitive advantage and growth opportunities.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end w-[30%]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[16pt] font-bold text-emerald-600">68</span><span className="text-[9pt] font-bold text-slate-400">/100</span>
                      <span className="text-[8pt] font-bold text-emerald-600 ml-2">Good</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full mt-1.5 overflow-hidden">
                      <div className="h-full bg-emerald-600 rounded-full" style={{width: '68%'}}></div>
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Legend */}
              <div className="bg-slate-50 py-2.5 px-4 flex justify-between items-center border-t border-slate-200 mt-auto">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-emerald-700"></div><span className="text-[6.5pt] text-slate-600">80 - 100 Excellent</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-[#0d9488]"></div><span className="text-[6.5pt] text-slate-600">60 - 79 Good</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-orange-500"></div><span className="text-[6.5pt] text-slate-600">40 - 59 Moderate</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-red-600"></div><span className="text-[6.5pt] text-slate-600">20 - 39 Weak</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-red-900"></div><span className="text-[6.5pt] text-slate-600">0 - 19 Critical</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT COLUMN */}
          <div className="w-[50%] flex flex-col gap-4">
            
            {/* Bar Chart */}
            <div className="border border-slate-200 rounded-xl bg-white p-4 flex flex-col h-[280px]">
              <div className="text-center mb-4">
                <h3 className="text-[10pt] font-bold text-[#0f172a] uppercase tracking-wide">PILLAR SCORE COMPARISON</h3>
                <div className="flex items-center justify-center gap-6 mt-2">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#0d9488]"></div><span className="text-[8pt] text-slate-600">Your Score</span></div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-300"></div><span className="text-[8pt] text-slate-600">Industry Benchmark</span></div>
                </div>
              </div>
              <div className="flex-1 w-full text-[7pt]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { name: 'Leadership', score: 60, bench: 65 },
                    { name: 'Revenue & Financial Health', score: 65, bench: 67 },
                    { name: 'Sales & Go-To-Market', score: 58, bench: 62 },
                    { name: 'Operations', score: 55, bench: 60 },
                    { name: 'People & Culture', score: 60, bench: 63 },
                    { name: 'Technology & Digital Capability', score: 62, bench: 65 },
                    { name: 'Market & Competitive Position', score: 68, bench: 70 }
                  ]} layout="vertical" margin={{ top: 0, right: 30, left: -20, bottom: 0 }}>
                    <XAxis type="number" domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#64748b' }}/>
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#0f172a', fontWeight: 500 }} width={120} />
                    <Bar dataKey="score" fill="#0d9488" barSize={8} radius={[0, 4, 4, 0]}>
                       {/* You can add labels using LabelList if needed, but let's keep it simple to match */}
                    </Bar>
                    <Bar dataKey="bench" fill="#cbd5e1" barSize={8} radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Insights */}
            <div className="border border-slate-200 rounded-xl bg-slate-50 overflow-hidden flex-1 flex flex-col">
              <div className="bg-white py-2.5 text-center border-b border-slate-200 flex items-center justify-center gap-2">
                <Lightbulb className="w-4 h-4 text-[#0f172a]"/>
                <span className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide">PILLAR INSIGHTS</span>
              </div>
              <div className="p-4 flex flex-col justify-around flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <ArrowUp className="w-3.5 h-3.5"/>
                  </div>
                  <p className="text-[8.5pt] text-slate-700 leading-snug"><span className="font-semibold">Revenue & Financial Health</span> and <span className="font-semibold">Market Position</span> are key <span className="font-bold text-emerald-600">strengths</span> driving business stability.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Minus className="w-3.5 h-3.5"/>
                  </div>
                  <p className="text-[8.5pt] text-slate-700 leading-snug"><span className="font-semibold">Operations</span> and <span className="font-semibold">Sales</span> processes need <span className="font-bold text-orange-500">improvement</span> to enhance efficiency and scalability.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Minus className="w-3.5 h-3.5"/>
                  </div>
                  <p className="text-[8.5pt] text-slate-700 leading-snug"><span className="font-semibold">Technology adoption</span> and automation present significant <span className="font-bold text-orange-500">opportunities</span> for growth.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-3.5 h-3.5"/>
                  </div>
                  <p className="text-[8.5pt] text-slate-700 leading-snug">Strengthen <span className="font-semibold">performance management</span> and leadership execution to <span className="font-bold text-red-700">unlock full potential</span>.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* BOTTOM TABLE: DETAILED BREAKDOWN */}
        <div className="flex-1 border border-slate-200 rounded-xl overflow-hidden bg-white flex flex-col mb-4">
          <div className="bg-slate-50 py-2.5 text-center border-b border-slate-200">
            <span className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide">PILLAR DETAILED SCORE BREAKDOWN</span>
          </div>
          <div className="flex-1 p-0 flex flex-col">
            <div className="flex bg-white text-[7.5pt] font-bold text-[#0f172a] border-b border-slate-200">
              <div className="w-[22%] py-2 px-3 border-r border-slate-200">Pillar</div>
              <div className="w-[8%] py-2 px-3 text-center border-r border-slate-200">Score<br/><span className="text-[6.5pt] font-normal text-slate-500">(/100)</span></div>
              <div className="w-[12%] py-2 px-3 text-center border-r border-slate-200">Rating</div>
              <div className="w-[29%] py-2 px-3 border-r border-slate-200 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600"/> Key Strengths</div>
              <div className="w-[29%] py-2 px-3 flex items-center gap-1.5"><AlertTriangle className="w-4 h-4 text-red-600"/> Key Improvement Areas</div>
            </div>
            
            <div className="flex text-[7.5pt] border-b border-slate-100 bg-slate-50/30">
              <div className="w-[22%] py-2 px-3 border-r border-slate-200 font-bold text-[#0f172a] flex items-center">1. Leadership</div>
              <div className="w-[8%] py-2 px-3 text-center border-r border-slate-200 font-bold text-[#0d9488] flex items-center justify-center">60</div>
              <div className="w-[12%] py-2 px-3 text-center border-r border-slate-200 font-bold text-[#0d9488] flex items-center justify-center">Moderate</div>
              <div className="w-[29%] py-2 px-3 border-r border-slate-200">
                <ul className="list-disc pl-3 text-slate-700 space-y-0.5 marker:text-slate-400">
                  <li>Clear vision and long-term thinking</li>
                  <li>Good commitment to organization</li>
                </ul>
              </div>
              <div className="w-[29%] py-2 px-3">
                <ul className="list-disc pl-3 text-slate-700 space-y-0.5 marker:text-slate-400">
                  <li>Execution consistency</li>
                  <li>Delegation and empowerment</li>
                </ul>
              </div>
            </div>
            
            <div className="flex text-[7.5pt] border-b border-slate-100">
              <div className="w-[22%] py-2 px-3 border-r border-slate-200 font-bold text-[#0f172a] flex items-center">2. Revenue & Financial Health</div>
              <div className="w-[8%] py-2 px-3 text-center border-r border-slate-200 font-bold text-[#0d9488] flex items-center justify-center">65</div>
              <div className="w-[12%] py-2 px-3 text-center border-r border-slate-200 font-bold text-[#0d9488] flex items-center justify-center">Moderate</div>
              <div className="w-[29%] py-2 px-3 border-r border-slate-200">
                <ul className="list-disc pl-3 text-slate-700 space-y-0.5 marker:text-slate-400">
                  <li>Healthy revenue growth</li>
                  <li>Good cost control</li>
                </ul>
              </div>
              <div className="w-[29%] py-2 px-3">
                <ul className="list-disc pl-3 text-slate-700 space-y-0.5 marker:text-slate-400">
                  <li>Diversify revenue streams</li>
                  <li>Improve working capital management</li>
                </ul>
              </div>
            </div>
            
            <div className="flex text-[7.5pt] border-b border-slate-100 bg-slate-50/30">
              <div className="w-[22%] py-2 px-3 border-r border-slate-200 font-bold text-[#0f172a] flex items-center">3. Sales & Go-To-Market</div>
              <div className="w-[8%] py-2 px-3 text-center border-r border-slate-200 font-bold text-[#0d9488] flex items-center justify-center">58</div>
              <div className="w-[12%] py-2 px-3 text-center border-r border-slate-200 font-bold text-[#0d9488] flex items-center justify-center">Moderate</div>
              <div className="w-[29%] py-2 px-3 border-r border-slate-200">
                <ul className="list-disc pl-3 text-slate-700 space-y-0.5 marker:text-slate-400">
                  <li>Existing customer relationships</li>
                  <li>Basic sales process in place</li>
                </ul>
              </div>
              <div className="w-[29%] py-2 px-3">
                <ul className="list-disc pl-3 text-slate-700 space-y-0.5 marker:text-slate-400">
                  <li>Sales pipeline management</li>
                  <li>Sales process standardization</li>
                </ul>
              </div>
            </div>
            
            <div className="flex text-[7.5pt] border-b border-slate-100">
              <div className="w-[22%] py-2 px-3 border-r border-slate-200 font-bold text-[#0f172a] flex items-center">4. Operations</div>
              <div className="w-[8%] py-2 px-3 text-center border-r border-slate-200 font-bold text-[#0d9488] flex items-center justify-center">55</div>
              <div className="w-[12%] py-2 px-3 text-center border-r border-slate-200 font-bold text-[#0d9488] flex items-center justify-center">Moderate</div>
              <div className="w-[29%] py-2 px-3 border-r border-slate-200">
                <ul className="list-disc pl-3 text-slate-700 space-y-0.5 marker:text-slate-400">
                  <li>Core operations are functional</li>
                  <li>Team collaboration</li>
                </ul>
              </div>
              <div className="w-[29%] py-2 px-3">
                <ul className="list-disc pl-3 text-slate-700 space-y-0.5 marker:text-slate-400">
                  <li>Process standardization</li>
                  <li>Reduce manual dependencies</li>
                </ul>
              </div>
            </div>
            
            <div className="flex text-[7.5pt] border-b border-slate-100 bg-slate-50/30">
              <div className="w-[22%] py-2 px-3 border-r border-slate-200 font-bold text-[#0f172a] flex items-center">5. People & Culture</div>
              <div className="w-[8%] py-2 px-3 text-center border-r border-slate-200 font-bold text-[#0d9488] flex items-center justify-center">60</div>
              <div className="w-[12%] py-2 px-3 text-center border-r border-slate-200 font-bold text-[#0d9488] flex items-center justify-center">Moderate</div>
              <div className="w-[29%] py-2 px-3 border-r border-slate-200">
                <ul className="list-disc pl-3 text-slate-700 space-y-0.5 marker:text-slate-400">
                  <li>Positive work culture</li>
                  <li>Employee commitment</li>
                </ul>
              </div>
              <div className="w-[29%] py-2 px-3">
                <ul className="list-disc pl-3 text-slate-700 space-y-0.5 marker:text-slate-400">
                  <li>Performance management</li>
                  <li>Skill development</li>
                </ul>
              </div>
            </div>
            
            <div className="flex text-[7.5pt] border-b border-slate-100">
              <div className="w-[22%] py-2 px-3 border-r border-slate-200 font-bold text-[#0f172a] flex items-center">6. Technology & Digital Capability</div>
              <div className="w-[8%] py-2 px-3 text-center border-r border-slate-200 font-bold text-[#0d9488] flex items-center justify-center">62</div>
              <div className="w-[12%] py-2 px-3 text-center border-r border-slate-200 font-bold text-[#0d9488] flex items-center justify-center">Moderate</div>
              <div className="w-[29%] py-2 px-3 border-r border-slate-200">
                <ul className="list-disc pl-3 text-slate-700 space-y-0.5 marker:text-slate-400">
                  <li>Basic digital tools usage</li>
                  <li>Openness to technology</li>
                </ul>
              </div>
              <div className="w-[29%] py-2 px-3">
                <ul className="list-disc pl-3 text-slate-700 space-y-0.5 marker:text-slate-400">
                  <li>Automation of key processes</li>
                  <li>Data-driven decision making</li>
                </ul>
              </div>
            </div>
            
            <div className="flex text-[7.5pt] border-b-0 bg-slate-50/30">
              <div className="w-[22%] py-2 px-3 border-r border-slate-200 font-bold text-[#0f172a] flex items-center">7. Market & Competitive Position</div>
              <div className="w-[8%] py-2 px-3 text-center border-r border-slate-200 font-bold text-emerald-600 flex items-center justify-center">68</div>
              <div className="w-[12%] py-2 px-3 text-center border-r border-slate-200 font-bold text-emerald-600 flex items-center justify-center">Good</div>
              <div className="w-[29%] py-2 px-3 border-r border-slate-200">
                <ul className="list-disc pl-3 text-slate-700 space-y-0.5 marker:text-slate-400">
                  <li>Strong market reputation</li>
                  <li>Competitive advantage</li>
                </ul>
              </div>
              <div className="w-[29%] py-2 px-3">
                <ul className="list-disc pl-3 text-slate-700 space-y-0.5 marker:text-slate-400">
                  <li>Brand building</li>
                  <li>Market expansion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Quote Banner */}
        <div className="w-full bg-[#0f172a] rounded-xl flex items-stretch overflow-hidden">
          <div className="flex flex-col justify-center px-6 py-4 w-[40%] bg-[#0f172a] relative">
            <span className="absolute top-1 left-3 text-[48pt] text-[#0d9488] font-serif leading-none opacity-50">“</span>
            <div className="relative z-10 space-y-1 mt-2">
              <p className="text-[8.5pt] text-white font-medium leading-snug">Growth is never by mere chance; it is the result of forces working together.</p>
              <p className="text-[8.5pt] text-[#0d9488] font-medium leading-snug mt-1">— James Cash Penney</p>
            </div>
          </div>
          
          <div className="flex-1 flex justify-around items-center bg-[#1e293b] py-3 px-2 text-white">
            <div className="flex flex-col items-center gap-1.5 w-[25%]">
              <Target className="w-6 h-6 text-[#0d9488]" strokeWidth={1.5}/>
              <span className="text-[7pt] text-center leading-tight">Focus on<br/>What Matters</span>
            </div>
            <div className="w-px h-10 bg-slate-600"></div>
            <div className="flex flex-col items-center gap-1.5 w-[25%]">
              <Users className="w-6 h-6 text-[#0d9488]" strokeWidth={1.5}/>
              <span className="text-[7pt] text-center leading-tight">Align People<br/>& Process</span>
            </div>
            <div className="w-px h-10 bg-slate-600"></div>
            <div className="flex flex-col items-center gap-1.5 w-[25%]">
              <Settings className="w-6 h-6 text-[#0d9488]" strokeWidth={1.5}/>
              <span className="text-[7pt] text-center leading-tight">Leverage<br/>Technology</span>
            </div>
            <div className="w-px h-10 bg-slate-600"></div>
            <div className="flex flex-col items-center gap-1.5 w-[25%]">
              <BarChart3 className="w-6 h-6 text-[#0d9488]" strokeWidth={1.5}/>
              <span className="text-[7pt] text-center leading-tight">Drive<br/>Sustainable Growth</span>
            </div>
          </div>
        </div>
        
        {/* Custom Footer */}
        <div className="mt-3">
          <div className="flex items-center justify-between border-t border-slate-300 pt-3 text-[7.5pt] text-slate-700 font-medium">
            <div className="flex items-center gap-4">
               <span className="font-black text-[#0f172a] text-[10pt] tracking-widest uppercase">KRGONE</span>
               <span className="text-slate-500">Business Growth Consulting</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400"/> <span>Jaipur, Rajasthan, India</span></div>
              <div className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-slate-400"/> <span>+91 7300300330</span></div>
              <div className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-slate-400"/> <span>enquiry.krgone@gmail.com</span></div>
              <div className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-slate-400"/> <span>www.krgone.vercel.app</span></div>
            </div>
            <div className="font-bold text-white bg-[#0f172a] px-3 py-1 rounded">
              Page 4 of 14
            </div>
          </div>
        </div>
      </div>
`;

let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

// Insert after PAGE 3 ends.
// Let's find the string: "PAGE 4 (Design: 5. AI-POWERED GROWTH ADVISORY)"
const marker = '      {/* PAGE 4 (Design: 5. AI-POWERED GROWTH ADVISORY) */}';
const targetIndex = content.indexOf(marker);

if (targetIndex === -1) {
  console.log('Marker not found');
  process.exit(1);
}

// We also need to fix the PAGE 4 comment and footer for the *existing* page 4 (which is now page 5)
// and existing page 6 (now page 6?) Wait, the existing pages have "Page X of 14" now?
// Let's just insert it first.
const updatedContent = content.slice(0, targetIndex) + page4Code + '\n' + content.slice(targetIndex);

fs.writeFileSync('src/components/PrintDossier.tsx', updatedContent, 'utf8');
console.log('Successfully injected PAGE 4.');
