const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

const splitIndex = content.indexOf('{/* PAGE 4: 7 PILLAR DETAILED ANALYSIS */}');
if (splitIndex === -1) {
  console.log("Could not find PAGE 4 delimiter");
  process.exit(1);
}

const beforePage4 = content.slice(0, splitIndex);

const newPage4 = `      {/* PAGE 4 (Design: 5. AI-POWERED GROWTH ADVISORY) */}
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
          <h2 className="text-[24pt] font-black text-[#0f172a] uppercase tracking-wide leading-tight">5. AI-POWERED GROWTH ADVISORY</h2>
          <p className="text-[10pt] text-slate-600 mt-1">Intelligent insights and strategic recommendations to accelerate growth and improve business performance.</p>
        </div>

        <div className="flex gap-4 mb-4 flex-1">
          {/* Left Column */}
          <div className="w-[58%] flex flex-col gap-4">
            
            {/* Top Box: AI Insight & Growth Potential */}
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 flex">
              {/* Left: Insight */}
              <div className="w-[60%] pr-4 border-r border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#0f172a] flex items-center justify-center shrink-0">
                    <Brain className="w-4 h-4 text-white"/>
                  </div>
                  <h3 className="text-[10pt] font-bold text-[#0f172a] uppercase tracking-wide">AI EXECUTIVE INSIGHT</h3>
                </div>
                <div className="text-[8pt] text-slate-700 space-y-2.5 leading-relaxed">
                  <p>Your business has a solid foundation with healthy financials and a good market position. The primary opportunity lies in strengthening operational efficiency, standardizing sales processes and leveraging technology & automation.</p>
                  <p>By addressing these areas, you can improve scalability, reduce dependency on key individuals and unlock the next level of sustainable growth.</p>
                </div>
              </div>
              
              {/* Right: Growth Potential */}
              <div className="w-[40%] pl-4 flex flex-col items-center justify-center">
                <h3 className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide mb-3">GROWTH POTENTIAL</h3>
                
                <div className="relative w-32 h-16 flex justify-center items-end overflow-hidden mb-2">
                   <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-[12px] border-slate-200 border-t-[#0d9488] border-l-[#0f172a] rotate-[45deg]"></div>
                   <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0f172a] z-10"></div>
                   <div className="absolute bottom-[-4px] left-[65%] w-1.5 h-16 bg-[#0f172a] origin-bottom -rotate-[30deg] z-0 rounded-t-full"></div>
                </div>
                <div className="text-[18pt] font-black text-[#0f172a] leading-none mb-1">70%</div>
                <div className="text-[9pt] font-bold text-[#0d9488]">High Potential</div>
                <p className="text-[6.5pt] text-center text-slate-500 mt-2 leading-tight">With focused execution, your business has high potential to scale significantly in the next 12-18 months.</p>
              </div>
            </div>
            
            {/* Bottom Box: Quick Wins */}
            <div className="border border-slate-200 rounded-xl p-4 bg-white flex-1 flex flex-col">
              <h3 className="text-[9.5pt] font-bold text-[#0f172a] uppercase tracking-wide mb-3">QUICK WIN OPPORTUNITIES (Next 90 Days)</h3>
              
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex items-center gap-3 py-1.5 border-b border-slate-100">
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200"><ClipboardList className="w-3.5 h-3.5 text-slate-700"/></div>
                  <p className="text-[8pt] text-slate-700 flex-1 leading-snug">Standardize key operational processes and implement SOPs for critical functions.</p>
                  <div className="flex flex-col items-end shrink-0 w-12"><span className="text-[6.5pt] text-slate-500 font-medium">Impact</span><span className="text-[7.5pt] font-bold text-emerald-600">High</span></div>
                </div>
                
                <div className="flex items-center gap-3 py-1.5 border-b border-slate-100">
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200"><Filter className="w-3.5 h-3.5 text-slate-700"/></div>
                  <p className="text-[8pt] text-slate-700 flex-1 leading-snug">Focus on top 20% high-value leads and improve follow-up system to increase conversion.</p>
                  <div className="flex flex-col items-end shrink-0 w-12"><span className="text-[6.5pt] text-slate-500 font-medium">Impact</span><span className="text-[7.5pt] font-bold text-emerald-600">High</span></div>
                </div>
                
                <div className="flex items-center gap-3 py-1.5 border-b border-slate-100">
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200"><BarChart3 className="w-3.5 h-3.5 text-slate-700"/></div>
                  <p className="text-[8pt] text-slate-700 flex-1 leading-snug">Implement a simple dashboard to track sales, operations and financial KPIs weekly.</p>
                  <div className="flex flex-col items-end shrink-0 w-12"><span className="text-[6.5pt] text-slate-500 font-medium">Impact</span><span className="text-[7.5pt] font-bold text-amber-500">Medium</span></div>
                </div>
                
                <div className="flex items-center gap-3 py-1.5 border-b border-slate-100">
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200"><Users className="w-3.5 h-3.5 text-slate-700"/></div>
                  <p className="text-[8pt] text-slate-700 flex-1 leading-snug">Conduct regular team meetings and set clear goals with accountability.</p>
                  <div className="flex flex-col items-end shrink-0 w-12"><span className="text-[6.5pt] text-slate-500 font-medium">Impact</span><span className="text-[7.5pt] font-bold text-amber-500">Medium</span></div>
                </div>
                
                <div className="flex items-center gap-3 py-1.5">
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200"><Megaphone className="w-3.5 h-3.5 text-slate-700"/></div>
                  <p className="text-[8pt] text-slate-700 flex-1 leading-snug">Strengthen customer communication and follow-up for retention and referrals.</p>
                  <div className="flex flex-col items-end shrink-0 w-12"><span className="text-[6.5pt] text-slate-500 font-medium">Impact</span><span className="text-[7.5pt] font-bold text-amber-500">Medium</span></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Priority Recommendations */}
          <div className="w-[42%] border border-slate-200 rounded-xl p-4 bg-slate-50/30 flex flex-col">
            <h3 className="text-[9.5pt] font-bold text-[#0f172a] uppercase tracking-wide text-center mb-4">PRIORITY RECOMMENDATIONS</h3>
            
            <div className="flex-1 flex flex-col justify-between">
              {/* Rec 1 */}
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded bg-[#0f172a] text-white flex items-center justify-center font-bold text-[12pt] shrink-0 mt-1">1</div>
                <div className="flex gap-2">
                  <Settings className="w-6 h-6 text-slate-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-[9.5pt] font-bold text-[#0f172a] leading-tight">Optimize Operations</h4>
                    <p className="text-[7.5pt] text-slate-600 mt-1 leading-snug">Streamline processes, define SOPs and reduce manual work.</p>
                    <p className="text-[7.5pt] mt-1"><span className="text-slate-500 font-medium">Impact:</span> <span className="text-emerald-600 font-bold">High</span></p>
                  </div>
                </div>
              </div>
              
              {/* Rec 2 */}
              <div className="flex gap-3 mt-3">
                <div className="w-7 h-7 rounded bg-[#0d9488] text-white flex items-center justify-center font-bold text-[12pt] shrink-0 mt-1">2</div>
                <div className="flex gap-2">
                  <Target className="w-6 h-6 text-slate-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-[9.5pt] font-bold text-[#0d9488] leading-tight">Strengthen Sales Engine</h4>
                    <p className="text-[7.5pt] text-slate-600 mt-1 leading-snug">Build a structured sales process, improve pipeline management and increase conversion.</p>
                    <p className="text-[7.5pt] mt-1"><span className="text-slate-500 font-medium">Impact:</span> <span className="text-emerald-600 font-bold">High</span></p>
                  </div>
                </div>
              </div>
              
              {/* Rec 3 */}
              <div className="flex gap-3 mt-3">
                <div className="w-7 h-7 rounded bg-amber-500 text-white flex items-center justify-center font-bold text-[12pt] shrink-0 mt-1">3</div>
                <div className="flex gap-2">
                  <Monitor className="w-6 h-6 text-slate-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-[9.5pt] font-bold text-amber-600 leading-tight">Leverage Technology & Automation</h4>
                    <p className="text-[7.5pt] text-slate-600 mt-1 leading-snug">Adopt digital tools to automate workflows and gain real-time business visibility.</p>
                    <p className="text-[7.5pt] mt-1"><span className="text-slate-500 font-medium">Impact:</span> <span className="text-amber-500 font-bold">Medium</span></p>
                  </div>
                </div>
              </div>
              
              {/* Rec 4 */}
              <div className="flex gap-3 mt-3">
                <div className="w-7 h-7 rounded bg-[#1e3a8a] text-white flex items-center justify-center font-bold text-[12pt] shrink-0 mt-1">4</div>
                <div className="flex gap-2">
                  <Users className="w-6 h-6 text-slate-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-[9.5pt] font-bold text-[#1e3a8a] leading-tight">Build High-Performance Team</h4>
                    <p className="text-[7.5pt] text-slate-600 mt-1 leading-snug">Invest in people capability, accountability framework and performance culture.</p>
                    <p className="text-[7.5pt] mt-1"><span className="text-slate-500 font-medium">Impact:</span> <span className="text-amber-500 font-bold">Medium</span></p>
                  </div>
                </div>
              </div>
              
              {/* Rec 5 */}
              <div className="flex gap-3 mt-3">
                <div className="w-7 h-7 rounded bg-purple-600 text-white flex items-center justify-center font-bold text-[12pt] shrink-0 mt-1">5</div>
                <div className="flex gap-2">
                  <TrendingUp className="w-6 h-6 text-slate-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-[9.5pt] font-bold text-purple-700 leading-tight">Expand Market Reach</h4>
                    <p className="text-[7.5pt] text-slate-600 mt-1 leading-snug">Strengthen brand positioning and explore new customer segments for growth.</p>
                    <p className="text-[7.5pt] mt-1"><span className="text-slate-500 font-medium">Impact:</span> <span className="text-amber-500 font-bold">Medium</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="mb-4 flex flex-col items-center">
          <h3 className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide mb-3 bg-white px-4 relative z-10">STRATEGIC RECOMMENDATIONS ROADMAP</h3>
          <div className="w-full h-px bg-slate-200 -mt-5 mb-5 z-0"></div>
          
          <div className="w-full flex items-stretch gap-2">
            {/* 0-90 Days */}
            <div className="flex-1 border border-emerald-200 rounded-xl overflow-hidden flex flex-col bg-emerald-50/30">
              <div className="bg-emerald-700 text-white text-center py-1.5 mx-8 rounded-b-xl mb-3 shadow-sm">
                <span className="text-[7pt] font-bold uppercase tracking-wider">0 - 90 DAYS</span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-3">
                 <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center"><Rocket className="w-4 h-4 text-white"/></div>
                 <h4 className="text-[9pt] font-bold text-emerald-800">STABILIZE & OPTIMIZE</h4>
              </div>
              <ul className="text-[7.5pt] text-slate-700 px-5 space-y-1.5 list-disc pl-8 mb-4">
                <li>Implement SOPs for core processes</li>
                <li>Strengthen sales follow-up system</li>
                <li>Improve operational efficiency</li>
                <li>Track key metrics and performance</li>
                <li>Build team accountability</li>
              </ul>
              <div className="mt-auto bg-emerald-100/50 py-2.5 px-4 text-center border-t border-emerald-100">
                 <p className="text-[6.5pt] font-bold text-emerald-800 mb-0.5">Expected Outcome</p>
                 <p className="text-[7pt] text-slate-700 leading-tight">Better efficiency, clarity and control in daily operations.</p>
              </div>
            </div>
            
            <div className="flex items-center text-slate-300"><ArrowRight className="w-6 h-6"/></div>
            
            {/* 91-180 Days */}
            <div className="flex-1 border border-blue-200 rounded-xl overflow-hidden flex flex-col bg-blue-50/30">
              <div className="bg-[#1e3a8a] text-white text-center py-1.5 mx-8 rounded-b-xl mb-3 shadow-sm">
                <span className="text-[7pt] font-bold uppercase tracking-wider">91 - 180 DAYS</span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-3">
                 <div className="w-8 h-8 rounded-full bg-[#1e3a8a] flex items-center justify-center"><Settings className="w-4 h-4 text-white"/></div>
                 <h4 className="text-[9pt] font-bold text-[#1e3a8a]">SYSTEMIZE & GROW</h4>
              </div>
              <ul className="text-[7.5pt] text-slate-700 px-5 space-y-1.5 list-disc pl-8 mb-4">
                <li>Automate key business workflows</li>
                <li>Enhance sales process & conversion</li>
                <li>Build dashboards and reporting</li>
                <li>Invest in team capability & training</li>
                <li>Improve customer experience</li>
              </ul>
              <div className="mt-auto bg-blue-100/50 py-2.5 px-4 text-center border-t border-blue-100">
                 <p className="text-[6.5pt] font-bold text-[#1e3a8a] mb-0.5">Expected Outcome</p>
                 <p className="text-[7pt] text-slate-700 leading-tight">Stronger systems, higher productivity and improved performance.</p>
              </div>
            </div>
            
            <div className="flex items-center text-slate-300"><ArrowRight className="w-6 h-6"/></div>
            
            {/* 181-365 Days */}
            <div className="flex-1 border border-purple-200 rounded-xl overflow-hidden flex flex-col bg-purple-50/30">
              <div className="bg-purple-800 text-white text-center py-1.5 mx-8 rounded-b-xl mb-3 shadow-sm">
                <span className="text-[7pt] font-bold uppercase tracking-wider">181 - 365 DAYS</span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-3">
                 <div className="w-8 h-8 rounded-full bg-purple-800 flex items-center justify-center"><BarChart3 className="w-4 h-4 text-white"/></div>
                 <h4 className="text-[9pt] font-bold text-purple-900">SCALE & TRANSFORM</h4>
              </div>
              <ul className="text-[7.5pt] text-slate-700 px-5 space-y-1.5 list-disc pl-8 mb-4">
                <li>Expand to new markets / segments</li>
                <li>Strengthen brand and positioning</li>
                <li>Leverage data for strategic decisions</li>
                <li>Build scalable business model</li>
                <li>Drive innovation and continuous improvement</li>
              </ul>
              <div className="mt-auto bg-purple-100/50 py-2.5 px-4 text-center border-t border-purple-100">
                 <p className="text-[6.5pt] font-bold text-purple-900 mb-0.5">Expected Outcome</p>
                 <p className="text-[7pt] text-slate-700 leading-tight">Scalable growth, higher profitability and long-term sustainability.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Success Factors */}
        <div className="mb-4 flex flex-col items-center">
          <h3 className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide mb-3 bg-white px-4 relative z-10">KEY SUCCESS FACTORS</h3>
          <div className="w-full h-px bg-slate-200 -mt-5 mb-4 z-0"></div>
          
          <div className="w-full flex justify-between px-4">
            <div className="flex flex-col items-center text-center max-w-[80px]">
              <div className="w-10 h-10 rounded-full border-2 border-[#0d9488] flex items-center justify-center mb-2"><Target className="w-5 h-5 text-[#0d9488]"/></div>
              <span className="text-[7.5pt] font-bold text-[#0f172a] leading-tight">Clear Strategy<br/>& Focus</span>
            </div>
            <div className="flex flex-col items-center text-center max-w-[80px]">
              <div className="w-10 h-10 rounded-full border-2 border-emerald-600 flex items-center justify-center mb-2"><Users className="w-5 h-5 text-emerald-600"/></div>
              <span className="text-[7.5pt] font-bold text-[#0f172a] leading-tight">Right People<br/>& Culture</span>
            </div>
            <div className="flex flex-col items-center text-center max-w-[80px]">
              <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center mb-2"><Settings className="w-5 h-5 text-orange-500"/></div>
              <span className="text-[7.5pt] font-bold text-[#0f172a] leading-tight">Efficient Systems<br/>& Processes</span>
            </div>
            <div className="flex flex-col items-center text-center max-w-[80px]">
              <div className="w-10 h-10 rounded-full border-2 border-[#1e3a8a] flex items-center justify-center mb-2"><Monitor className="w-5 h-5 text-[#1e3a8a]"/></div>
              <span className="text-[7.5pt] font-bold text-[#0f172a] leading-tight">Technology<br/>& Automation</span>
            </div>
            <div className="flex flex-col items-center text-center max-w-[80px]">
              <div className="w-10 h-10 rounded-full border-2 border-purple-800 flex items-center justify-center mb-2"><PieChart className="w-5 h-5 text-purple-800"/></div>
              <span className="text-[7.5pt] font-bold text-[#0f172a] leading-tight">Data-Driven<br/>Decisions</span>
            </div>
            <div className="flex flex-col items-center text-center max-w-[80px]">
              <div className="w-10 h-10 rounded-full border-2 border-[#0f172a] flex items-center justify-center mb-2"><Trophy className="w-5 h-5 text-[#0f172a]"/></div>
              <span className="text-[7.5pt] font-bold text-[#0f172a] leading-tight">Execution<br/>Excellence</span>
            </div>
          </div>
        </div>

        {/* Footer Banner */}
        <div className="w-full bg-[#0f172a] rounded-xl flex items-stretch overflow-hidden mt-auto mb-2 border-b-[4px] border-b-blue-600">
          <div className="bg-[#0f172a] px-5 py-4 flex gap-3 w-[45%]">
            <span className="text-[32pt] text-[#0d9488] font-serif leading-none mt-[-5px] opacity-80">“</span>
            <div>
              <p className="text-[8pt] text-white font-medium leading-snug">
                The best businesses are not just built on ideas,<br/>but on systems, people and execution.
              </p>
              <p className="text-[7.5pt] text-[#0d9488] mt-1">— KRGONE Advisory Team</p>
            </div>
          </div>
          
          <div className="flex-1 flex text-white text-[7.5pt] divide-x divide-slate-700 py-3">
             <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
               <Calendar className="w-5 h-5 mb-1.5 text-slate-300" strokeWidth={1.5}/>
               <span className="font-medium text-slate-300 mb-0.5">Assessment Date</span>
               <span className="font-bold">23 July 2026</span>
             </div>
             <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
               <IdCard className="w-5 h-5 mb-1.5 text-slate-300" strokeWidth={1.5}/>
               <span className="font-medium text-slate-300 mb-0.5">Assessment ID</span>
               <span className="font-bold">KRG-2026-000124</span>
             </div>
             <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
               <Calendar className="w-5 h-5 mb-1.5 text-slate-300" strokeWidth={1.5}/>
               <span className="font-medium text-slate-300 mb-0.5">Next Review Date</span>
               <span className="font-bold">23 October 2026</span>
             </div>
             <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
               <User className="w-5 h-5 mb-1.5 text-slate-300" strokeWidth={1.5}/>
               <span className="font-medium text-slate-300 mb-0.5">Prepared By</span>
               <span className="font-bold text-center leading-tight">KRGONE Advisory Team</span>
             </div>
          </div>
        </div>

        {/* Custom Footer */}
        <div className="mt-auto pt-2">
          <div className="flex items-center justify-between border-t border-slate-300 pt-3 text-[7.5pt] text-slate-700 font-medium">
            <span className="font-black text-[#0f172a] text-[10pt] tracking-widest uppercase">KRGONE</span>
            <div className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400"/> <span>Jaipur, Rajasthan</span></div>
            <div className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-slate-400"/> <span>7300300330</span></div>
            <div className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-slate-400"/> <span>enquiry.krgone@gmail.com</span></div>
            <div className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-slate-400"/> <span>www.krgone.vercel.app</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}`;

fs.writeFileSync('src/components/PrintDossier.tsx', beforePage4 + newPage4, 'utf8');
console.log('Patched Page 4');
