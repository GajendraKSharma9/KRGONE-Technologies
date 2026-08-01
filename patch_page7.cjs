const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

// replace the end of the file to include Page 7
const splitIndex = content.lastIndexOf('    </div>\n  );\n}');
if (splitIndex === -1) {
  console.log("Could not find end of file");
  process.exit(1);
}

const beforeEnd = content.slice(0, splitIndex);

const newPage7 = `      {/* PAGE 7 (Design: 7. DETAILED RECOMMENDATIONS) */}
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
          <h2 className="text-[24pt] font-black text-[#1e3a8a] uppercase tracking-wide leading-tight">7. DETAILED RECOMMENDATIONS</h2>
          <p className="text-[10pt] text-slate-600 mt-1">Actionable recommendations to improve performance and unlock growth.</p>
        </div>

        <div className="flex gap-5 flex-1 mb-2">
          
          {/* LEFT COLUMN: Recommendations List & Enablers */}
          <div className="w-[58%] flex flex-col h-full">
            
            {/* Recommendations List */}
            <div className="flex-1 flex flex-col gap-3">
              
              {/* Rec 1 */}
              <div className="flex border-b border-slate-100 pb-2">
                <div className="flex flex-col items-center mr-3 mt-1 relative">
                  <div className="w-12 h-12 rounded-full bg-[#0d9488] flex items-center justify-center shadow-sm">
                    <Settings className="w-6 h-6 text-white"/>
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-sm bg-[#0f172a] flex items-center justify-center text-white text-[9pt] font-bold">1</div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[10pt] font-bold text-[#0d9488] uppercase">OPTIMIZE OPERATIONS</h3>
                      <p className="text-[8pt] text-slate-700 leading-snug mt-1 max-w-[90%]">
                        Streamline core processes, define SOPs and eliminate non-value adding activities to improve efficiency and consistency.
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-start border-l border-slate-200 pl-3 min-w-[50px] shrink-0 mt-1">
                      <span className="text-[7pt] text-slate-500 font-medium">Impact</span>
                      <span className="text-[8pt] font-bold text-[#0d9488] mb-0.5">High</span>
                      <div className="flex items-end gap-[1.5px] h-[10px]">
                        <div className="w-[4px] h-[4px] bg-[#0d9488]"></div>
                        <div className="w-[4px] h-[7px] bg-[#0d9488]"></div>
                        <div className="w-[4px] h-[10px] bg-[#0d9488]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start mt-2">
                    <ul className="text-[7.5pt] text-slate-700 list-disc pl-4 space-y-1 marker:text-[#0d9488]">
                      <li>Map and standardize key processes</li>
                      <li>Implement SOPs and workflow automation</li>
                      <li>Reduce manual work and cycle time</li>
                    </ul>
                    <div className="flex flex-col items-center justify-start border-l border-slate-200 pl-3 min-w-[50px] shrink-0">
                      <span className="text-[7pt] text-slate-500 font-medium">Priority</span>
                      <span className="text-[8pt] font-bold text-[#0d9488]">High</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rec 2 */}
              <div className="flex border-b border-slate-100 pb-2">
                <div className="flex flex-col items-center mr-3 mt-1 relative">
                  <div className="w-12 h-12 rounded-full bg-[#4ade80] text-white flex items-center justify-center shadow-sm">
                    <Target className="w-6 h-6 text-white"/>
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-sm bg-[#0f172a] flex items-center justify-center text-white text-[9pt] font-bold">2</div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[10pt] font-bold text-emerald-600 uppercase">STRENGTHEN SALES ENGINE</h3>
                      <p className="text-[8pt] text-slate-700 leading-snug mt-1 max-w-[90%]">
                        Build a structured sales process, strengthen pipeline management and improve conversion.
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-start border-l border-slate-200 pl-3 min-w-[50px] shrink-0 mt-1">
                      <span className="text-[7pt] text-slate-500 font-medium">Impact</span>
                      <span className="text-[8pt] font-bold text-emerald-600 mb-0.5">High</span>
                      <div className="flex items-end gap-[1.5px] h-[10px]">
                        <div className="w-[4px] h-[4px] bg-emerald-600"></div>
                        <div className="w-[4px] h-[7px] bg-emerald-600"></div>
                        <div className="w-[4px] h-[10px] bg-emerald-600"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start mt-2">
                    <ul className="text-[7.5pt] text-slate-700 list-disc pl-4 space-y-1 marker:text-emerald-600">
                      <li>Define ideal customer profile and value proposition</li>
                      <li>Implement CRM and sales pipeline discipline</li>
                      <li>Train team on consultative selling</li>
                    </ul>
                    <div className="flex flex-col items-center justify-start border-l border-slate-200 pl-3 min-w-[50px] shrink-0">
                      <span className="text-[7pt] text-slate-500 font-medium">Priority</span>
                      <span className="text-[8pt] font-bold text-emerald-600">High</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rec 3 */}
              <div className="flex border-b border-slate-100 pb-2">
                <div className="flex flex-col items-center mr-3 mt-1 relative">
                  <div className="w-12 h-12 rounded-full bg-orange-400 text-white flex items-center justify-center shadow-sm">
                    <Monitor className="w-6 h-6 text-white"/>
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-sm bg-[#0f172a] flex items-center justify-center text-white text-[9pt] font-bold">3</div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[10pt] font-bold text-orange-500 uppercase">LEVERAGE TECHNOLOGY & AUTOMATION</h3>
                      <p className="text-[8pt] text-slate-700 leading-snug mt-1 max-w-[90%]">
                        Adopt digital tools to automate workflows, improve visibility and support data-driven decisions.
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-start border-l border-slate-200 pl-3 min-w-[50px] shrink-0 mt-1">
                      <span className="text-[7pt] text-slate-500 font-medium">Impact</span>
                      <span className="text-[8pt] font-bold text-orange-500 mb-0.5">Medium</span>
                      <div className="flex items-end gap-[1.5px] h-[10px]">
                        <div className="w-[4px] h-[4px] bg-orange-500"></div>
                        <div className="w-[4px] h-[7px] bg-orange-500"></div>
                        <div className="w-[4px] h-[10px] bg-slate-200"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start mt-2">
                    <ul className="text-[7.5pt] text-slate-700 list-disc pl-4 space-y-1 marker:text-orange-500">
                      <li>Automate repetitive tasks</li>
                      <li>Implement dashboards and reports</li>
                      <li>Use data to drive performance</li>
                    </ul>
                    <div className="flex flex-col items-center justify-start border-l border-slate-200 pl-3 min-w-[50px] shrink-0">
                      <span className="text-[7pt] text-slate-500 font-medium">Priority</span>
                      <span className="text-[8pt] font-bold text-orange-500">Medium</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rec 4 */}
              <div className="flex border-b border-slate-100 pb-2">
                <div className="flex flex-col items-center mr-3 mt-1 relative">
                  <div className="w-12 h-12 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shadow-sm">
                    <Users className="w-6 h-6 text-white"/>
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-sm bg-[#0f172a] flex items-center justify-center text-white text-[9pt] font-bold">4</div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[10pt] font-bold text-[#1e3a8a] uppercase">BUILD HIGH-PERFORMANCE TEAM</h3>
                      <p className="text-[8pt] text-slate-700 leading-snug mt-1 max-w-[90%]">
                        Invest in people capability, accountability framework and a high-performance culture.
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-start border-l border-slate-200 pl-3 min-w-[50px] shrink-0 mt-1">
                      <span className="text-[7pt] text-slate-500 font-medium">Impact</span>
                      <span className="text-[8pt] font-bold text-orange-500 mb-0.5">Medium</span>
                      <div className="flex items-end gap-[1.5px] h-[10px]">
                        <div className="w-[4px] h-[4px] bg-orange-500"></div>
                        <div className="w-[4px] h-[7px] bg-orange-500"></div>
                        <div className="w-[4px] h-[10px] bg-slate-200"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start mt-2">
                    <ul className="text-[7.5pt] text-slate-700 list-disc pl-4 space-y-1 marker:text-[#1e3a8a]">
                      <li>Define roles, KPIs and accountability</li>
                      <li>Invest in training and development</li>
                      <li>Recognize and reward performance</li>
                    </ul>
                    <div className="flex flex-col items-center justify-start border-l border-slate-200 pl-3 min-w-[50px] shrink-0">
                      <span className="text-[7pt] text-slate-500 font-medium">Priority</span>
                      <span className="text-[8pt] font-bold text-orange-500">Medium</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rec 5 */}
              <div className="flex border-b border-slate-100 pb-2">
                <div className="flex flex-col items-center mr-3 mt-1 relative">
                  <div className="w-12 h-12 rounded-full bg-purple-700 text-white flex items-center justify-center shadow-sm">
                    <TrendingUp className="w-6 h-6 text-white"/>
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-sm bg-[#0f172a] flex items-center justify-center text-white text-[9pt] font-bold">5</div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[10pt] font-bold text-purple-800 uppercase">EXPAND MARKET REACH</h3>
                      <p className="text-[8pt] text-slate-700 leading-snug mt-1 max-w-[90%]">
                        Strengthen brand positioning and explore new customer segments and markets.
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-start border-l border-slate-200 pl-3 min-w-[50px] shrink-0 mt-1">
                      <span className="text-[7pt] text-slate-500 font-medium">Impact</span>
                      <span className="text-[8pt] font-bold text-orange-500 mb-0.5">Medium</span>
                      <div className="flex items-end gap-[1.5px] h-[10px]">
                        <div className="w-[4px] h-[4px] bg-orange-500"></div>
                        <div className="w-[4px] h-[7px] bg-orange-500"></div>
                        <div className="w-[4px] h-[10px] bg-slate-200"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start mt-2">
                    <ul className="text-[7.5pt] text-slate-700 list-disc pl-4 space-y-1 marker:text-purple-800">
                      <li>Refine positioning and messaging</li>
                      <li>Explore new channels and partnerships</li>
                      <li>Launch focused marketing campaigns</li>
                    </ul>
                    <div className="flex flex-col items-center justify-start border-l border-slate-200 pl-3 min-w-[50px] shrink-0">
                      <span className="text-[7pt] text-slate-500 font-medium">Priority</span>
                      <span className="text-[8pt] font-bold text-orange-500">Medium</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            
            {/* KEY ENABLERS */}
            <div className="mt-2 border-t-[1.5px] border-slate-200 pt-3">
              <h3 className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide mb-3 text-center">KEY ENABLERS FOR SUCCESS</h3>
              <div className="flex justify-between">
                
                <div className="flex flex-col items-center text-center max-w-[80px]">
                  <div className="w-10 h-10 rounded-full bg-[#0d9488] text-white flex items-center justify-center mb-2 shadow-sm">
                    <Target className="w-5 h-5"/>
                  </div>
                  <h4 className="text-[6.5pt] font-bold text-[#0f172a] uppercase leading-tight mb-1">CLEAR STRATEGY<br/>& FOCUS</h4>
                  <p className="text-[6pt] text-slate-600 leading-tight">Define priorities and stay focused on what matters most.</p>
                </div>

                <div className="flex flex-col items-center text-center max-w-[80px]">
                  <div className="w-10 h-10 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center mb-2 shadow-sm">
                    <Users className="w-5 h-5"/>
                  </div>
                  <h4 className="text-[6.5pt] font-bold text-[#0f172a] uppercase leading-tight mb-1">DISCIPLINED<br/>EXECUTION</h4>
                  <p className="text-[6pt] text-slate-600 leading-tight">Execute with discipline and track progress consistently.</p>
                </div>

                <div className="flex flex-col items-center text-center max-w-[80px]">
                  <div className="w-10 h-10 rounded-full bg-[#0d9488] text-white flex items-center justify-center mb-2 shadow-sm">
                    <BarChart3 className="w-5 h-5"/>
                  </div>
                  <h4 className="text-[6.5pt] font-bold text-[#0f172a] uppercase leading-tight mb-1">DATA-DRIVEN<br/>DECISIONS</h4>
                  <p className="text-[6pt] text-slate-600 leading-tight">Use data and insights to make informed and faster decisions.</p>
                </div>

                <div className="flex flex-col items-center text-center max-w-[80px]">
                  <div className="w-10 h-10 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center mb-2 shadow-sm">
                    <Handshake className="w-5 h-5"/>
                  </div>
                  <h4 className="text-[6.5pt] font-bold text-[#0f172a] uppercase leading-tight mb-1">TEAM ALIGNMENT<br/>& ACCOUNTABILITY</h4>
                  <p className="text-[6pt] text-slate-600 leading-tight">Align the team with clear goals and strong accountability culture.</p>
                </div>

                <div className="flex flex-col items-center text-center max-w-[80px]">
                  <div className="w-10 h-10 rounded-full bg-[#0d9488] text-white flex items-center justify-center mb-2 shadow-sm">
                    <RefreshCw className="w-5 h-5"/>
                  </div>
                  <h4 className="text-[6.5pt] font-bold text-[#0f172a] uppercase leading-tight mb-1">CONTINUOUS<br/>IMPROVEMENT</h4>
                  <p className="text-[6pt] text-slate-600 leading-tight">Review, learn and improve continuously to stay ahead.</p>
                </div>
                
              </div>
            </div>

          </div>
          
          {/* RIGHT COLUMN: Tables & Success */}
          <div className="w-[42%] flex flex-col gap-3 h-full">
            
            {/* Table 1: IMPACT OVERVIEW */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
              <div className="bg-white py-2 text-center border-b border-slate-200">
                <span className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide">IMPLEMENTATION IMPACT OVERVIEW</span>
              </div>
              <div className="p-3">
                <div className="flex text-[7pt] font-bold text-[#0f172a] border-b border-slate-200 pb-2 mb-2">
                  <div className="flex-1">Impact Area</div>
                  <div className="w-[120px] text-right">Expected Improvement<br/>(90 Days)</div>
                </div>
                
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#0d9488] text-white flex items-center justify-center"><Settings className="w-4 h-4"/></div>
                    <span className="text-[8pt] text-slate-700">Operational Efficiency</span>
                  </div>
                  <span className="text-[9.5pt] font-bold text-emerald-600">20% – 30%</span>
                </div>
                
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center"><Target className="w-4 h-4"/></div>
                    <span className="text-[8pt] text-slate-700">Sales Performance</span>
                  </div>
                  <span className="text-[9.5pt] font-bold text-emerald-600">15% – 25%</span>
                </div>
                
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center"><IndianRupee className="w-4 h-4"/></div>
                    <span className="text-[8pt] text-slate-700">Cost Optimization</span>
                  </div>
                  <span className="text-[9.5pt] font-bold text-emerald-600">10% – 20%</span>
                </div>
                
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center"><Star className="w-4 h-4"/></div>
                    <span className="text-[8pt] text-slate-700">Customer Satisfaction</span>
                  </div>
                  <span className="text-[9.5pt] font-bold text-emerald-600">15% – 20%</span>
                </div>
                
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center"><Users className="w-4 h-4"/></div>
                    <span className="text-[8pt] text-slate-700">Employee Productivity</span>
                  </div>
                  <span className="text-[9.5pt] font-bold text-emerald-600">15% – 25%</span>
                </div>
                
                <div className="flex items-center justify-between py-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#0d9488] text-white flex items-center justify-center"><BarChart3 className="w-4 h-4"/></div>
                    <span className="text-[8pt] text-slate-700">Revenue Growth Potential</span>
                  </div>
                  <span className="text-[9.5pt] font-bold text-emerald-600">20% – 40%</span>
                </div>
              </div>
            </div>
            
            {/* Table 2: RESOURCES REQUIRED */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
              <div className="bg-white py-2 text-center border-b border-slate-200">
                <span className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide">RESOURCES REQUIRED</span>
              </div>
              <div className="p-3">
                <div className="flex text-[7.5pt] font-bold text-[#0f172a] border-b border-slate-200 pb-2 mb-2 px-2">
                  <div className="flex-1">Resource</div>
                  <div className="w-[80px] text-right">Type</div>
                </div>
                
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 px-2">
                  <div className="flex items-center gap-2.5">
                    <User className="w-4 h-4 text-[#0d9488]"/>
                    <span className="text-[7.5pt] text-slate-700">Leadership Commitment</span>
                  </div>
                  <span className="text-[7.5pt] text-slate-600">Internal</span>
                </div>
                
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 px-2">
                  <div className="flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-[#0d9488]"/>
                    <span className="text-[7.5pt] text-slate-700">Cross-functional Team</span>
                  </div>
                  <span className="text-[7.5pt] text-slate-600">Internal</span>
                </div>
                
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 px-2">
                  <div className="flex items-center gap-2.5">
                    <Briefcase className="w-4 h-4 text-[#0d9488]"/>
                    <span className="text-[7.5pt] text-slate-700">Process Management Tools</span>
                  </div>
                  <span className="text-[7.5pt] text-slate-600">Technology</span>
                </div>
                
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 px-2">
                  <div className="flex items-center gap-2.5">
                    <Monitor className="w-4 h-4 text-[#0d9488]"/>
                    <span className="text-[7.5pt] text-slate-700">CRM & Sales Tools</span>
                  </div>
                  <span className="text-[7.5pt] text-slate-600">Technology</span>
                </div>
                
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 px-2">
                  <div className="flex items-center gap-2.5">
                    <Settings className="w-4 h-4 text-[#0d9488]"/>
                    <span className="text-[7.5pt] text-slate-700">Automation & Integration Tools</span>
                  </div>
                  <span className="text-[7.5pt] text-slate-600">Technology</span>
                </div>
                
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 px-2">
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className="w-4 h-4 text-[#0d9488]"/>
                    <span className="text-[7.5pt] text-slate-700">Training & Development</span>
                  </div>
                  <span className="text-[7.5pt] text-slate-600">People</span>
                </div>
                
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 px-2">
                  <div className="flex items-center gap-2.5">
                    <Megaphone className="w-4 h-4 text-[#0d9488]"/>
                    <span className="text-[7.5pt] text-slate-700">Marketing & Branding Support</span>
                  </div>
                  <span className="text-[7.5pt] text-slate-600">External (as needed)</span>
                </div>
                
                <div className="flex items-center justify-between py-1.5 px-2">
                  <div className="flex items-center gap-2.5">
                    <IndianRupee className="w-4 h-4 text-[#0d9488]"/>
                    <span className="text-[7.5pt] text-slate-700">Investment Budget</span>
                  </div>
                  <span className="text-[7.5pt] text-slate-600">As per Scope</span>
                </div>
              </div>
            </div>
            
            {/* SUCCESS INDICATORS */}
            <div className="flex-1 flex flex-col pt-1">
              <h3 className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide mb-3 text-center">SUCCESS INDICATORS</h3>
              <div className="bg-slate-50/50 border border-slate-200 rounded-xl p-3 flex-1 flex flex-col justify-around">
                
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0d9488] text-white flex items-center justify-center shrink-0"><Check className="w-3.5 h-3.5"/></div>
                  <span className="text-[8pt] text-[#0f172a] font-medium leading-tight">Improved operational efficiency and reduced cycle time</span>
                </div>
                
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0d9488] text-white flex items-center justify-center shrink-0"><Check className="w-3.5 h-3.5"/></div>
                  <span className="text-[8pt] text-[#0f172a] font-medium leading-tight">Increased sales pipeline and conversion rates</span>
                </div>
                
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0d9488] text-white flex items-center justify-center shrink-0"><Check className="w-3.5 h-3.5"/></div>
                  <span className="text-[8pt] text-[#0f172a] font-medium leading-tight">Better profitability and cash flow</span>
                </div>
                
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0d9488] text-white flex items-center justify-center shrink-0"><Check className="w-3.5 h-3.5"/></div>
                  <span className="text-[8pt] text-[#0f172a] font-medium leading-tight">Stronger customer satisfaction and retention</span>
                </div>
                
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0d9488] text-white flex items-center justify-center shrink-0"><Check className="w-3.5 h-3.5"/></div>
                  <span className="text-[8pt] text-[#0f172a] font-medium leading-tight">Engaged and high-performing team</span>
                </div>
                
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0d9488] text-white flex items-center justify-center shrink-0"><Check className="w-3.5 h-3.5"/></div>
                  <span className="text-[8pt] text-[#0f172a] font-medium leading-tight">Scalable systems and sustainable growth</span>
                </div>
                
              </div>
            </div>

          </div>
        </div>

        {/* Footer Banner Quote Section */}
        <div className="w-full bg-[#0f172a] rounded-xl flex items-stretch mt-auto overflow-hidden">
          <div className="flex flex-col justify-center px-6 py-4 w-[40%] bg-[#0f172a] relative">
            <span className="absolute top-1 left-3 text-[48pt] text-[#0d9488] font-serif leading-none opacity-50">“</span>
            <div className="relative z-10 space-y-1 mt-2">
              <p className="text-[8.5pt] text-white font-medium leading-snug">The difference between successful companies and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.</p>
              <p className="text-[8.5pt] text-[#0d9488] font-medium leading-snug mt-1">— Vince Lombardi</p>
            </div>
          </div>
          
          <div className="flex-1 flex justify-around items-center bg-[#1e293b] py-3 px-2 text-white">
            <div className="flex flex-col items-center gap-1.5 w-[25%]">
              <Target className="w-6 h-6 text-[#0d9488]" strokeWidth={1.5}/>
              <span className="text-[7pt] text-center leading-tight">Plan<br/>with Clarity</span>
            </div>
            <div className="w-px h-10 bg-slate-600"></div>
            <div className="flex flex-col items-center gap-1.5 w-[25%]">
              <Settings className="w-6 h-6 text-[#0d9488]" strokeWidth={1.5}/>
              <span className="text-[7pt] text-center leading-tight">Execute<br/>with Focus</span>
            </div>
            <div className="w-px h-10 bg-slate-600"></div>
            <div className="flex flex-col items-center gap-1.5 w-[25%]">
              <BarChart3 className="w-6 h-6 text-[#0d9488]" strokeWidth={1.5}/>
              <span className="text-[7pt] text-center leading-tight">Measure<br/>with Discipline</span>
            </div>
            <div className="w-px h-10 bg-slate-600"></div>
            <div className="flex flex-col items-center gap-1.5 w-[25%]">
              <Trophy className="w-6 h-6 text-[#0d9488]" strokeWidth={1.5}/>
              <span className="text-[7pt] text-center leading-tight">Grow<br/>Sustainably</span>
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
            <div className="font-bold text-[#0f172a]">
              Page 7 of 14
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/components/PrintDossier.tsx', beforeEnd + newPage7, 'utf8');
console.log('Patched Page 7');
