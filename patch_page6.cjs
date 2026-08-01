const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

// replace the end of the file to include Page 6
const splitIndex = content.lastIndexOf('    </div>\n  );\n}');
if (splitIndex === -1) {
  console.log("Could not find end of file");
  process.exit(1);
}

const beforeEnd = content.slice(0, splitIndex);

const newPage6 = `      {/* PAGE 6 (Design: 6. 90-DAY GROWTH ROADMAP) */}
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
          <h2 className="text-[24pt] font-black text-[#1e3a8a] uppercase tracking-wide leading-tight">6. 90-DAY GROWTH ROADMAP</h2>
          <p className="text-[10pt] text-slate-600 mt-1">A phased action plan to improve performance and drive measurable results.</p>
        </div>

        <div className="flex gap-4 flex-1 mb-4">
          {/* Main Roadmap Table */}
          <div className="flex-1 flex flex-col">
            {/* Headers */}
            <div className="flex">
              <div className="w-[110px] shrink-0"></div>
              
              <div className="flex-1 flex px-2 border-l border-slate-200">
                <div className="w-10 h-10 rounded-full bg-[#0d9488] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Rocket className="w-5 h-5"/>
                </div>
                <div className="ml-3 flex flex-col">
                  <span className="text-[9pt] font-bold text-[#0d9488] uppercase tracking-wide">PHASE 1</span>
                  <span className="text-[8pt] font-bold text-[#0f172a] uppercase leading-tight">0 – 30 DAYS</span>
                  <span className="text-[7pt] text-slate-600 font-medium mt-0.5">Stabilize & Plan</span>
                </div>
              </div>
              
              <div className="flex-1 flex px-2 border-l border-slate-200">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Settings className="w-5 h-5"/>
                </div>
                <div className="ml-3 flex flex-col">
                  <span className="text-[9pt] font-bold text-emerald-700 uppercase tracking-wide">PHASE 2</span>
                  <span className="text-[8pt] font-bold text-[#0f172a] uppercase leading-tight">31 – 60 DAYS</span>
                  <span className="text-[7pt] text-slate-600 font-medium mt-0.5">Execute & Optimize</span>
                </div>
              </div>
              
              <div className="flex-1 flex px-2 border-l border-slate-200">
                <div className="w-10 h-10 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <BarChart3 className="w-5 h-5"/>
                </div>
                <div className="ml-3 flex flex-col">
                  <span className="text-[9pt] font-bold text-[#1e3a8a] uppercase tracking-wide">PHASE 3</span>
                  <span className="text-[8pt] font-bold text-[#0f172a] uppercase leading-tight">61 – 90 DAYS</span>
                  <span className="text-[7pt] text-slate-600 font-medium mt-0.5">Scale & Improve</span>
                </div>
              </div>
            </div>
            
            {/* Rows */}
            <div className="flex-1 flex flex-col mt-4 border border-slate-200 rounded-xl overflow-hidden bg-white">
              
              {/* Row 1: FOCUS */}
              <div className="flex border-b border-slate-200 min-h-[60px]">
                <div className="w-[110px] shrink-0 flex items-center gap-2 pl-3 border-r border-slate-200 bg-slate-50/50">
                  <Target className="w-5 h-5 text-[#0f172a]" strokeWidth={1.5}/>
                  <span className="text-[8pt] font-bold text-[#0f172a] uppercase">FOCUS</span>
                </div>
                <div className="flex-1 flex items-center px-4 py-3 border-r border-slate-200">
                  <p className="text-[7.5pt] text-slate-700 font-medium leading-snug">Stabilize operations and create clarity</p>
                </div>
                <div className="flex-1 flex items-center px-4 py-3 border-r border-slate-200">
                  <p className="text-[7.5pt] text-slate-700 font-medium leading-snug">Optimize key processes and improve efficiency</p>
                </div>
                <div className="flex-1 flex items-center px-4 py-3">
                  <p className="text-[7.5pt] text-slate-700 font-medium leading-snug">Scale growth and build sustainable systems</p>
                </div>
              </div>
              
              {/* Row 2: KEY ACTIONS */}
              <div className="flex border-b border-slate-200 flex-1">
                <div className="w-[110px] shrink-0 flex items-center gap-2 pl-3 border-r border-slate-200 bg-slate-50/50 py-3">
                  <ClipboardList className="w-5 h-5 text-[#0f172a]" strokeWidth={1.5}/>
                  <span className="text-[8pt] font-bold text-[#0f172a] uppercase leading-tight">KEY<br/>ACTIONS</span>
                </div>
                <div className="flex-1 px-4 py-3 border-r border-slate-200">
                  <ul className="list-disc pl-3 text-[7.5pt] text-slate-700 space-y-1.5 marker:text-slate-400">
                    <li>Define priorities and clear goals</li>
                    <li>Review performance metrics</li>
                    <li>Identify quick wins</li>
                    <li>Align team on 90-day plan</li>
                  </ul>
                </div>
                <div className="flex-1 px-4 py-3 border-r border-slate-200">
                  <ul className="list-disc pl-3 text-[7.5pt] text-slate-700 space-y-1.5 marker:text-slate-400">
                    <li>Optimize core processes</li>
                    <li>Strengthen sales & marketing</li>
                    <li>Implement automation tools</li>
                    <li>Improve reporting & dashboards</li>
                  </ul>
                </div>
                <div className="flex-1 px-4 py-3">
                  <ul className="list-disc pl-3 text-[7.5pt] text-slate-700 space-y-1.5 marker:text-slate-400">
                    <li>Expand customer base</li>
                    <li>Build scalable systems</li>
                    <li>Strengthen team capability</li>
                    <li>Drive continuous improvement</li>
                  </ul>
                </div>
              </div>

              {/* Row 3: BUSINESS AREAS */}
              <div className="flex border-b border-slate-200 flex-1">
                <div className="w-[110px] shrink-0 flex items-center gap-2 pl-3 border-r border-slate-200 bg-slate-50/50 py-3">
                  <BarChart3 className="w-5 h-5 text-[#0f172a]" strokeWidth={1.5}/>
                  <span className="text-[8pt] font-bold text-[#0f172a] uppercase leading-tight">BUSINESS<br/>AREAS</span>
                </div>
                <div className="flex-1 px-4 py-3 border-r border-slate-200">
                  <ul className="list-disc pl-3 text-[7.5pt] text-slate-700 space-y-1.5 marker:text-slate-400">
                    <li>Operations</li>
                    <li>Sales & Marketing</li>
                    <li>Finance</li>
                    <li>People & Culture</li>
                  </ul>
                </div>
                <div className="flex-1 px-4 py-3 border-r border-slate-200">
                  <ul className="list-disc pl-3 text-[7.5pt] text-slate-700 space-y-1.5 marker:text-slate-400">
                    <li>Process Excellence</li>
                    <li>Customer Experience</li>
                    <li>Technology & Automation</li>
                    <li>Performance Management</li>
                  </ul>
                </div>
                <div className="flex-1 px-4 py-3">
                  <ul className="list-disc pl-3 text-[7.5pt] text-slate-700 space-y-1.5 marker:text-slate-400">
                    <li>Market Expansion</li>
                    <li>Innovation & New Offerings</li>
                    <li>Strategic Partnerships</li>
                    <li>Profitability Improvement</li>
                  </ul>
                </div>
              </div>

              {/* Row 4: OWNER */}
              <div className="flex border-b border-slate-200 min-h-[50px]">
                <div className="w-[110px] shrink-0 flex items-center gap-2 pl-3 border-r border-slate-200 bg-slate-50/50">
                  <User className="w-5 h-5 text-[#0f172a]" strokeWidth={1.5}/>
                  <span className="text-[8pt] font-bold text-[#0f172a] uppercase">OWNER</span>
                </div>
                <div className="flex-1 flex items-center justify-center px-4 py-2 border-r border-slate-200">
                  <span className="text-[7.5pt] text-slate-700 font-medium">Leadership Team</span>
                </div>
                <div className="flex-1 flex items-center justify-center px-4 py-2 border-r border-slate-200">
                  <span className="text-[7.5pt] text-slate-700 font-medium">Department Heads</span>
                </div>
                <div className="flex-1 flex items-center justify-center px-4 py-2">
                  <span className="text-[7.5pt] text-slate-700 font-medium">Leadership Team</span>
                </div>
              </div>

              {/* Row 5: SUCCESS METRIC */}
              <div className="flex border-b border-slate-200 flex-1">
                <div className="w-[110px] shrink-0 flex items-center gap-2 pl-3 border-r border-slate-200 bg-slate-50/50 py-3">
                  <div className="w-5 flex justify-center"><div className="w-3.5 h-3.5 border-2 border-[#0f172a] rounded-sm"></div></div>
                  <span className="text-[8pt] font-bold text-[#0f172a] uppercase leading-tight">SUCCESS<br/>METRIC</span>
                </div>
                <div className="flex-1 px-4 py-3 border-r border-slate-200">
                  <ul className="list-disc pl-3 text-[7.5pt] text-slate-700 space-y-1.5 marker:text-slate-400">
                    <li>Clear 90-day plan approved</li>
                    <li>Key metrics baseline set</li>
                    <li>Quick wins implemented</li>
                  </ul>
                </div>
                <div className="flex-1 px-4 py-3 border-r border-slate-200">
                  <ul className="list-disc pl-3 text-[7.5pt] text-slate-700 space-y-1.5 marker:text-slate-400">
                    <li>Process efficiency improved</li>
                    <li>Sales pipeline increased</li>
                    <li>Automation in key areas</li>
                  </ul>
                </div>
                <div className="flex-1 px-4 py-3">
                  <ul className="list-disc pl-3 text-[7.5pt] text-slate-700 space-y-1.5 marker:text-slate-400">
                    <li>Revenue growth achieved</li>
                    <li>Profitability improved</li>
                    <li>Scalable systems in place</li>
                  </ul>
                </div>
              </div>

              {/* Row 6: REVIEW CHECKPOINT */}
              <div className="flex min-h-[60px]">
                <div className="w-[110px] shrink-0 flex items-center gap-2 pl-3 border-r border-slate-200 bg-slate-50/50">
                  <Calendar className="w-5 h-5 text-[#0f172a]" strokeWidth={1.5}/>
                  <span className="text-[8pt] font-bold text-[#0f172a] uppercase leading-tight">REVIEW<br/>CHECKPOINT</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center px-4 py-2 border-r border-slate-200 bg-slate-50/30">
                  <span className="text-[7.5pt] font-bold text-[#0f172a]">End of 30 Days</span>
                  <span className="text-[7pt] text-slate-600">(Review & Adjust)</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center px-4 py-2 border-r border-slate-200 bg-slate-50/30">
                  <span className="text-[7.5pt] font-bold text-[#0f172a]">End of 60 Days</span>
                  <span className="text-[7pt] text-slate-600">(Review & Optimize)</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center px-4 py-2 bg-slate-50/30">
                  <span className="text-[7.5pt] font-bold text-[#0f172a]">End of 90 Days</span>
                  <span className="text-[7pt] text-slate-600">(Review & Plan Next)</span>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Right Sidebar: KEY ENABLERS */}
          <div className="w-[200px] shrink-0 flex flex-col">
            <div className="border border-slate-200 rounded-xl overflow-hidden h-full flex flex-col bg-slate-50/30">
              <div className="py-2.5 text-center border-b border-slate-200">
                <span className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide">KEY ENABLERS</span>
              </div>
              
              <div className="flex flex-col flex-1 p-3 gap-3">
                {/* Enabler 1 */}
                <div className="flex gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#0d9488] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4.5 h-4.5"/>
                  </div>
                  <div>
                    <h4 className="text-[8pt] font-bold text-[#0d9488] leading-tight uppercase">LEADERSHIP<br/>COMMITMENT</h4>
                    <p className="text-[7pt] text-slate-600 mt-1 leading-snug">Strong leadership and accountability drive successful execution.</p>
                  </div>
                </div>
                
                {/* Enabler 2 */}
                <div className="flex gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Settings className="w-4.5 h-4.5"/>
                  </div>
                  <div>
                    <h4 className="text-[8pt] font-bold text-emerald-700 leading-tight uppercase">PROCESS<br/>EXCELLENCE</h4>
                    <p className="text-[7pt] text-slate-600 mt-1 leading-snug">Standardized and efficient processes improve productivity.</p>
                  </div>
                </div>
                
                {/* Enabler 3 */}
                <div className="flex gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu className="w-4.5 h-4.5"/>
                  </div>
                  <div>
                    <h4 className="text-[8pt] font-bold text-[#1e3a8a] leading-tight uppercase">TECHNOLOGY<br/>& AUTOMATION</h4>
                    <p className="text-[7pt] text-slate-600 mt-1 leading-snug">Leverage technology to automate, track and make data-driven decisions.</p>
                  </div>
                </div>
                
                {/* Enabler 4 */}
                <div className="flex gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-purple-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4.5 h-4.5"/>
                  </div>
                  <div>
                    <h4 className="text-[8pt] font-bold text-purple-800 leading-tight uppercase">PEOPLE & CULTURE</h4>
                    <p className="text-[7pt] text-slate-600 mt-1 leading-snug">Empowered people and a positive culture fuel growth and innovation.</p>
                  </div>
                </div>
                
                {/* Enabler 5 */}
                <div className="flex gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#0f172a] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <BarChart3 className="w-4.5 h-4.5"/>
                  </div>
                  <div>
                    <h4 className="text-[8pt] font-bold text-[#0f172a] leading-tight uppercase">DATA & INSIGHTS</h4>
                    <p className="text-[7pt] text-slate-600 mt-1 leading-snug">Accurate data and insights help in better planning and faster execution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Outcomes and Milestones */}
        <div className="flex gap-4 mb-3">
          {/* Left: Expected Outcomes */}
          <div className="flex-1 border border-slate-200 rounded-xl overflow-hidden bg-white p-4">
            <h3 className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide mb-4 text-center">EXPECTED OUTCOMES IN 90 DAYS</h3>
            
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200"><TrendingUp className="w-5 h-5 text-[#0d9488]"/></div>
                <div className="flex flex-col justify-center">
                  <span className="text-[8pt] font-bold text-emerald-800 leading-tight">Improved Operational Efficiency</span>
                  <span className="text-[7.5pt] text-slate-600 leading-snug mt-0.5">Streamlined processes leading to reduced costs and better productivity.</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200"><Users className="w-5 h-5 text-emerald-700"/></div>
                <div className="flex flex-col justify-center">
                  <span className="text-[8pt] font-bold text-emerald-800 leading-tight">Stronger Sales Performance</span>
                  <span className="text-[7.5pt] text-slate-600 leading-snug mt-0.5">Increased pipeline, better conversion and improved customer retention.</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#1e3a8a] flex items-center justify-center shrink-0 shadow-sm"><span className="text-white font-bold text-[14pt] -mt-0.5">₹</span></div>
                <div className="flex flex-col justify-center">
                  <span className="text-[8pt] font-bold text-[#1e3a8a] leading-tight">Better Financial Health</span>
                  <span className="text-[7.5pt] text-slate-600 leading-snug mt-0.5">Improved profitability, cash flow and overall financial stability.</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200"><Users className="w-5 h-5 text-purple-700"/></div>
                <div className="flex flex-col justify-center">
                  <span className="text-[8pt] font-bold text-purple-800 leading-tight">High-Performance Team</span>
                  <span className="text-[7.5pt] text-slate-600 leading-snug mt-0.5">Engaged and accountable team aligned with business goals.</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200"><Target className="w-5 h-5 text-[#0d9488]"/></div>
                <div className="flex flex-col justify-center">
                  <span className="text-[8pt] font-bold text-[#0d9488] leading-tight">Sustainable Growth Foundation</span>
                  <span className="text-[7.5pt] text-slate-600 leading-snug mt-0.5">Scalable systems, data-driven decisions and continuous improvement culture.</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Key Milestones */}
          <div className="flex-1 border border-slate-200 rounded-xl overflow-hidden bg-white p-4">
            <h3 className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide mb-4 text-center">KEY MILESTONES</h3>
            
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[17px] top-4 bottom-4 w-px bg-slate-200 z-0"></div>
              
              <div className="flex flex-col gap-3.5 relative z-10">
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0d9488] text-white flex items-center justify-center shrink-0 shadow-sm border-2 border-white"><div className="w-4 h-4 rounded-sm border-2 border-white"></div></div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[8pt] font-bold text-[#0d9488] leading-tight">DAY 0 – Plan Kickoff</span>
                    <span className="text-[7.5pt] text-slate-700 leading-snug mt-0.5">90-day roadmap finalized and team aligned on priorities.</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm border-2 border-white"><Check className="w-5 h-5"/></div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[8pt] font-bold text-emerald-700 leading-tight">DAY 30 – First Review</span>
                    <span className="text-[7.5pt] text-slate-700 leading-snug mt-0.5">Quick wins delivered and key metrics show positive movement.</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 shadow-sm border-2 border-white"><Settings className="w-5 h-5"/></div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[8pt] font-bold text-[#1e3a8a] leading-tight">DAY 60 – Mid Review</span>
                    <span className="text-[7.5pt] text-slate-700 leading-snug mt-0.5">Processes optimized, automation implemented and performance improved.</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-700 text-white flex items-center justify-center shrink-0 shadow-sm border-2 border-white"><BarChart3 className="w-5 h-5"/></div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[8pt] font-bold text-purple-800 leading-tight">DAY 90 – Final Review</span>
                    <span className="text-[7.5pt] text-slate-700 leading-snug mt-0.5">Goals achieved, growth trajectory established and next 90-day plan defined.</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0f172a] text-white flex items-center justify-center shrink-0 shadow-sm border-2 border-white"><Rocket className="w-5 h-5"/></div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[8pt] font-bold text-[#0f172a] leading-tight">BEYOND 90 DAYS – Scale & Sustain</span>
                    <span className="text-[7.5pt] text-slate-700 leading-snug mt-0.5">Focus on scaling growth, innovation and long-term value creation.</span>
                  </div>
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
              <p className="text-[8.5pt] text-white font-medium leading-snug">A goal without a plan is just a wish.</p>
              <p className="text-[8.5pt] text-white font-medium leading-snug">A plan with action creates results.</p>
              <p className="text-[8.5pt] text-white font-medium leading-snug">A system with consistency creates growth.</p>
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
              Page 6 of 14
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/components/PrintDossier.tsx', beforeEnd + newPage6, 'utf8');
console.log('Patched Page 6');
