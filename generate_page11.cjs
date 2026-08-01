const fs = require('fs');

const page11Code = `
      {/* PAGE 11: INTERNAL CAPABILITIES & OPERATIONS */}
      <div className="print-page flex flex-col pt-8 pb-4 px-10 relative bg-white">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b-[1.5px] border-slate-300">
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
            <h2 className="text-[14pt] font-black text-[#1e3a8a] uppercase tracking-wide leading-snug">BUSINESS GROWTH DIAGNOSTIC™</h2>
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
        <div className="mb-3">
          <h2 className="text-[24pt] font-black text-[#1e3a8a] uppercase tracking-wide leading-tight">11. INTERNAL CAPABILITIES & OPERATIONS</h2>
          <p className="text-[10pt] text-slate-600 mt-1">Evaluating your internal strengths, processes, systems and operational effectiveness.</p>
        </div>

        {/* Row 1: Maturity & Effectiveness */}
        <div className="flex gap-4 mb-3 h-[250px]">
          {/* Left: Operational Maturity Assessment */}
          <div className="w-[48%] border border-slate-200 rounded-xl bg-white flex flex-col h-full overflow-hidden">
            <div className="bg-slate-50 py-2.5 text-center border-b border-slate-200">
              <span className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide">OPERATIONAL MATURITY ASSESSMENT</span>
            </div>
            <div className="flex flex-1 p-3 items-center">
              <div className="w-[45%] flex flex-col items-center justify-center border-r border-slate-100 pr-2 h-full">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                    <path className="text-[#0f5f59]" strokeDasharray="68, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[24pt] font-black text-[#0f172a] leading-none">68%</span>
                    <span className="text-[6.5pt] text-slate-500 font-medium text-center leading-tight mt-1">Maturity Score</span>
                  </div>
                </div>
                <div className="mt-3 font-bold text-amber-500 text-[10pt]">Moderate</div>
                <p className="text-[7pt] text-slate-600 text-center leading-snug mt-3 px-2">Your operations are partially mature with good foundation in key areas. Focus on standardization and automation to reach the next level.</p>
              </div>
              <div className="w-[55%] pl-4 flex flex-col justify-between h-full py-1">
                 <div className="flex border-b border-slate-200 pb-1.5 mb-1.5">
                    <span className="flex-[2] text-[7.5pt] font-bold text-[#0f172a]">Capability Area</span>
                    <span className="flex-1 text-[7.5pt] font-bold text-[#0f172a] text-center">Score</span>
                    <span className="flex-[1.5] text-[7.5pt] font-bold text-[#0f172a] text-right">Maturity Level</span>
                 </div>
                 {[
                   { name: "Process Standardization", icon: <Settings className="w-4 h-4 text-[#0f5f59]"/>, score: "65%", level: "Moderate", color: "text-amber-500" },
                   { name: "Workflow Efficiency", icon: <Workflow className="w-4 h-4 text-[#0f5f59]"/>, score: "70%", level: "Good", color: "text-emerald-600" },
                   { name: "Quality Management", icon: <ShieldCheck className="w-4 h-4 text-[#0f5f59]"/>, score: "75%", level: "Good", color: "text-emerald-600" },
                   { name: "People & Skills", icon: <Users className="w-4 h-4 text-[#0f5f59]"/>, score: "60%", level: "Moderate", color: "text-amber-500" },
                   { name: "Technology Enablement", icon: <Monitor className="w-4 h-4 text-[#0f5f59]"/>, score: "65%", level: "Moderate", color: "text-amber-500" },
                   { name: "Data & Reporting", icon: <BarChart3 className="w-4 h-4 text-[#0f5f59]"/>, score: "70%", level: "Good", color: "text-emerald-600" }
                 ].map((row, i) => (
                   <div key={i} className="flex items-center justify-between py-1 border-b border-slate-50 last:border-0">
                     <div className="flex-[2] flex items-center gap-2">
                       <div className="w-6 h-6 rounded-md bg-[#0f5f59]/10 flex items-center justify-center shrink-0">{row.icon}</div>
                       <span className="text-[7.5pt] font-medium text-slate-700">{row.name}</span>
                     </div>
                     <span className="flex-1 text-[7.5pt] font-bold text-[#0f172a] text-center">{row.score}</span>
                     <span className={\`flex-[1.5] text-[7.5pt] font-bold text-right \${row.color}\`}>{row.level}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          {/* Right: Process Effectiveness Overview */}
          <div className="w-[52%] border border-slate-200 rounded-xl bg-white flex flex-col h-full overflow-hidden">
             <div className="bg-slate-50 py-2.5 text-center border-b border-slate-200">
              <span className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide">PROCESS EFFECTIVENESS OVERVIEW</span>
            </div>
            <div className="flex flex-1 p-4 gap-4">
               <div className="w-[55%] flex flex-col justify-between">
                 {[
                   { label: "Planning & Strategy", value: 72 },
                   { label: "Operations Execution", value: 70 },
                   { label: "Monitoring & Control", value: 62 },
                   { label: "Continuous Improvement", value: 68 },
                   { label: "Customer Focus", value: 75 }
                 ].map((item, i) => (
                   <div key={i} className="flex flex-col">
                     <div className="flex justify-between mb-1">
                       <span className="text-[7.5pt] font-medium text-slate-700">{item.label}</span>
                       <span className="text-[7.5pt] font-bold text-[#0f172a]">{item.value}%</span>
                     </div>
                     <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full rounded-full bg-[#0f5f59]" style={{ width: \`\${item.value}%\` }}></div>
                     </div>
                   </div>
                 ))}
               </div>
               
               <div className="w-[45%] bg-emerald-50 rounded-xl border border-emerald-100 p-4 flex flex-col">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm mb-3 text-[#0f5f59]">
                     <Target className="w-5 h-5"/>
                  </div>
                  <h4 className="text-[8.5pt] font-bold text-emerald-800 mb-1">Key Insight</h4>
                  <p className="text-[7.5pt] text-slate-700 leading-relaxed font-medium italic">
                    Your core operational processes are on the right track. Strengthen monitoring, control and continuous improvement mechanisms to achieve higher effectiveness.
                  </p>
               </div>
            </div>
          </div>
        </div>

        {/* Row 2: Strengths, Gaps, Operating Model */}
        <div className="flex gap-4 mb-3 h-[280px]">
          {/* Left: Core Strengths */}
          <div className="w-[32%] border border-slate-200 rounded-xl bg-white flex flex-col h-full overflow-hidden">
            <div className="bg-slate-50 py-2.5 text-center border-b border-slate-200">
              <span className="text-[8.5pt] font-bold text-[#0f172a] uppercase tracking-wide">CORE STRENGTHS</span>
            </div>
            <div className="flex-1 p-3 flex flex-col justify-around">
               {[
                 { title: "Experienced Team", desc: "Skilled and experienced team with domain knowledge and commitment.", icon: <CheckCircle2 className="w-4 h-4 text-emerald-600"/> },
                 { title: "Customer Relationships", desc: "Strong relationships with existing customers and partners.", icon: <ShieldCheck className="w-4 h-4 text-emerald-600"/> },
                 { title: "Financial Stability", desc: "Healthy financial position and steady cash flow.", icon: <Users className="w-4 h-4 text-emerald-600"/> },
                 { title: "Operational Foundation", desc: "Well established processes and systems in key areas.", icon: <IndianRupee className="w-4 h-4 text-emerald-600"/> },
                 { title: "Data Availability", desc: "Access to key business data for decision making and reporting.", icon: <Database className="w-4 h-4 text-emerald-600"/> }
               ].map((item, i) => (
                 <div key={i} className="flex gap-3 items-start">
                   <div className="w-6 h-6 rounded-full border-2 border-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                     {item.icon}
                   </div>
                   <div>
                     <div className="text-[7.5pt] font-bold text-emerald-800 leading-tight">{item.title}</div>
                     <div className="text-[6.5pt] text-slate-600 leading-snug mt-0.5">{item.desc}</div>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Middle: Key Operational Gaps */}
          <div className="w-[32%] border border-slate-200 rounded-xl bg-white flex flex-col h-full overflow-hidden">
             <div className="bg-slate-50 py-2.5 text-center border-b border-slate-200">
              <span className="text-[8.5pt] font-bold text-[#0f172a] uppercase tracking-wide">KEY OPERATIONAL GAPS</span>
            </div>
            <div className="flex-1 p-3 flex flex-col justify-around">
               {[
                 { title: "Process Standardization", desc: "Inconsistent processes and lack of SOPs across functions.", icon: <ClipboardList className="w-3.5 h-3.5 text-red-600"/> },
                 { title: "Automation Usage", desc: "Low adoption of automation and digital tools in daily operations.", icon: <Monitor className="w-3.5 h-3.5 text-red-600"/> },
                 { title: "Performance Tracking", desc: "Limited KPIs and dashboards for real-time performance monitoring.", icon: <BarChart3 className="w-3.5 h-3.5 text-red-600"/> },
                 { title: "Cross-functional Alignment", desc: "Siloed working and communication gaps between departments.", icon: <Network className="w-3.5 h-3.5 text-red-600"/> },
                 { title: "Documentation & Knowledge", desc: "Lack of documentation and knowledge management system.", icon: <FileText className="w-3.5 h-3.5 text-red-600"/> }
               ].map((item, i) => (
                 <div key={i} className="flex gap-3 items-start">
                   <div className="w-6 h-6 rounded-md border border-red-600 flex items-center justify-center shrink-0 mt-0.5 bg-red-50">
                     {item.icon}
                   </div>
                   <div>
                     <div className="text-[7.5pt] font-bold text-red-700 leading-tight">{item.title}</div>
                     <div className="text-[6.5pt] text-slate-600 leading-snug mt-0.5">{item.desc}</div>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Right: Operating Model Review */}
          <div className="w-[36%] border border-slate-200 rounded-xl bg-white flex flex-col h-full overflow-hidden">
             <div className="bg-slate-50 py-2 text-center border-b border-slate-200 flex justify-between px-4 items-center">
              <span className="text-[8.5pt] font-bold text-[#0f172a] uppercase tracking-wide">OPERATING MODEL REVIEW</span>
              <span className="text-[6.5pt] font-bold text-slate-500">Alignment</span>
            </div>
            <div className="flex-1 p-3 flex flex-col">
               <div className="flex flex-1">
                  <div className="w-[35%] relative h-full flex flex-col justify-between py-1">
                     <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                       <polygon points="50,0 65,23 35,23" fill="#0f5f59"/>
                       <polygon points="34,25 66,25 80,48 20,48" fill="#10b981"/>
                       <polygon points="19,50 81,50 95,73 5,73" fill="#f59e0b"/>
                       <polygon points="4,75 96,75 100,100 0,100" fill="#ef4444"/>
                     </svg>
                     <div className="relative h-1/4 flex items-center justify-center text-white"><Network className="w-4 h-4"/></div>
                     <div className="relative h-1/4 flex items-center justify-center text-white"><Settings className="w-5 h-5"/></div>
                     <div className="relative h-1/4 flex items-center justify-center text-white"><Users className="w-5 h-5"/></div>
                     <div className="relative h-1/4 flex items-center justify-center text-white"><FileText className="w-5 h-5"/></div>
                  </div>
                  
                  <div className="w-[65%] pl-3 flex flex-col justify-between py-1">
                     <div className="h-1/4 flex items-center justify-between">
                        <div className="pr-1">
                           <div className="text-[7.5pt] font-bold text-[#0f172a]">Strategic</div>
                           <div className="text-[6pt] text-slate-600 leading-tight mt-0.5">Aligned with business goals and long-term vision.</div>
                        </div>
                        <div className="flex flex-col items-center gap-0.5 shrink-0">
                           <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>
                           <span className="text-[6pt] font-bold text-emerald-600">Good</span>
                        </div>
                     </div>
                     <div className="h-1/4 flex items-center justify-between">
                        <div className="pr-1">
                           <div className="text-[7.5pt] font-bold text-[#0f172a]">Tactical</div>
                           <div className="text-[6pt] text-slate-600 leading-tight mt-0.5">Effective execution plans and resource allocation.</div>
                        </div>
                        <div className="flex flex-col items-center gap-0.5 shrink-0">
                           <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>
                           <span className="text-[6pt] font-bold text-emerald-600">Good</span>
                        </div>
                     </div>
                     <div className="h-1/4 flex items-center justify-between">
                        <div className="pr-1">
                           <div className="text-[7.5pt] font-bold text-[#0f172a]">Operational</div>
                           <div className="text-[6pt] text-slate-600 leading-tight mt-0.5">Day-to-day operations managed efficiently.</div>
                        </div>
                        <div className="flex flex-col items-center gap-0.5 shrink-0">
                           <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                           <span className="text-[6pt] font-bold text-amber-500">Moderate</span>
                        </div>
                     </div>
                     <div className="h-1/4 flex items-center justify-between">
                        <div className="pr-1">
                           <div className="text-[7.5pt] font-bold text-[#0f172a]">Foundational</div>
                           <div className="text-[6pt] text-slate-600 leading-tight mt-0.5">Systems, processes and data supporting the business.</div>
                        </div>
                        <div className="flex flex-col items-center gap-0.5 shrink-0">
                           <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
                           <span className="text-[6pt] font-bold text-red-600 leading-tight text-center">Needs<br/>Focus</span>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 mt-3 flex items-start gap-2">
                  <Lightbulb className="w-3.5 h-3.5 text-[#0f5f59] shrink-0"/>
                  <p className="text-[6.5pt] text-[#0f172a] font-medium leading-snug">Strengthen the foundational layer to build a more scalable and efficient operating model.</p>
               </div>
            </div>
          </div>
        </div>

        {/* Row 3: Opportunities & Priorities */}
        <div className="flex gap-4 mb-3 h-[240px]">
          {/* Left: Top Process Improvement Opportunities */}
          <div className="w-[55%] border border-slate-200 rounded-xl bg-white flex flex-col h-full overflow-hidden">
             <div className="bg-slate-50 py-2.5 text-center border-b border-slate-200">
              <span className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide">TOP PROCESS IMPROVEMENT OPPORTUNITIES</span>
            </div>
            <div className="flex-1 flex flex-col p-2">
               <div className="flex px-2 pb-1 border-b border-slate-200 text-[6.5pt] font-bold text-slate-600 uppercase">
                  <div className="flex-[3]">Opportunity</div>
                  <div className="flex-1 text-center">Impact</div>
                  <div className="flex-1 text-center">Effort</div>
                  <div className="flex-1 text-center">Priority</div>
               </div>
               
               <div className="flex-1 flex flex-col justify-around">
                  {[
                    { num: 1, title: "Standardize Core Processes", desc: "Document and standardize key processes across departments.", impact: "high", effort: "medium", priority: "High", color: "emerald" },
                    { num: 2, title: "Implement Workflow Automation", desc: "Automate repetitive tasks to improve efficiency and reduce errors.", impact: "high", effort: "medium", priority: "High", color: "emerald" },
                    { num: 3, title: "Strengthen Performance Monitoring", desc: "Define KPIs and implement dashboards for real-time tracking.", impact: "medium", effort: "low", priority: "Medium", color: "amber" },
                    { num: 4, title: "Improve Cross-functional Collaboration", desc: "Enhance communication and alignment between teams.", impact: "medium", effort: "medium", priority: "Medium", color: "amber" },
                    { num: 5, title: "Build Knowledge Management System", desc: "Create repository for SOPs, best practices and key learnings.", impact: "low", effort: "medium", priority: "Low", color: "red" }
                  ].map((row, i) => (
                    <div key={i} className="flex items-center px-2 py-1.5 border-b border-slate-50 last:border-0">
                       <div className="flex-[3] flex items-start gap-2">
                          <div className={\`w-5 h-5 rounded flex items-center justify-center text-white font-bold text-[7.5pt] shrink-0 mt-0.5 \${
                            row.color === 'emerald' ? 'bg-emerald-700' : row.color === 'amber' ? 'bg-amber-500' : 'bg-red-600'
                          }\`}>{row.num}</div>
                          <div>
                             <div className={\`text-[7.5pt] font-bold leading-tight \${
                               row.color === 'emerald' ? 'text-emerald-700' : row.color === 'amber' ? 'text-amber-600' : 'text-red-600'
                             }\`}>{row.title}</div>
                             <div className="text-[6.5pt] text-slate-600 leading-tight mt-0.5 pr-2">{row.desc}</div>
                          </div>
                       </div>
                       
                       <div className="flex-1 flex flex-col items-center justify-center gap-1">
                          {/* Signal Icon */}
                          <div className="flex items-end gap-[2px] h-3.5">
                            <div className={\`w-1.5 h-1.5 \${row.impact !== 'none' ? (row.impact==='high'?'bg-emerald-600':row.impact==='medium'?'bg-amber-500':'bg-red-500') : 'bg-slate-200'}\`}></div>
                            <div className={\`w-1.5 h-2.5 \${row.impact === 'high' || row.impact === 'medium' ? (row.impact==='high'?'bg-emerald-600':'bg-amber-500') : 'bg-slate-200'}\`}></div>
                            <div className={\`w-1.5 h-3.5 \${row.impact === 'high' ? 'bg-emerald-600' : 'bg-slate-200'}\`}></div>
                          </div>
                          <span className={\`text-[6pt] font-bold \${row.impact === 'high' ? 'text-emerald-600' : row.impact === 'medium' ? 'text-amber-500' : 'text-red-500'}\`}>{row.impact.charAt(0).toUpperCase() + row.impact.slice(1)}</span>
                       </div>
                       
                       <div className="flex-1 flex flex-col items-center justify-center gap-1">
                          {/* Gauge Icon */}
                          <svg viewBox="0 0 100 50" className="w-8 h-4">
                            <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#e2e8f0" strokeWidth="15"/>
                            <path d="M 10 50 A 40 40 0 0 1 30 15" fill="none" stroke="#10b981" strokeWidth="15"/>
                            <path d="M 30 15 A 40 40 0 0 1 70 15" fill="none" stroke="#f59e0b" strokeWidth="15"/>
                            <path d="M 70 15 A 40 40 0 0 1 90 50" fill="none" stroke="#ef4444" strokeWidth="15"/>
                            {row.effort === 'low' && <line x1="50" y1="50" x2="28" y2="28" stroke="#0f172a" strokeWidth="4"/>}
                            {row.effort === 'medium' && <line x1="50" y1="50" x2="50" y2="18" stroke="#0f172a" strokeWidth="4"/>}
                            {row.effort === 'high' && <line x1="50" y1="50" x2="72" y2="28" stroke="#0f172a" strokeWidth="4"/>}
                            <circle cx="50" cy="50" r="6" fill="#0f172a"/>
                          </svg>
                          <span className={\`text-[6pt] font-bold \${row.effort === 'low' ? 'text-emerald-600' : row.effort === 'medium' ? 'text-amber-500' : 'text-red-500'}\`}>{row.effort.charAt(0).toUpperCase() + row.effort.slice(1)}</span>
                       </div>
                       
                       <div className="flex-1 flex items-center justify-center">
                          <div className={\`px-3 py-1 rounded text-[7pt] font-bold border \${
                            row.priority === 'High' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                            row.priority === 'Medium' ? 'bg-amber-50 text-amber-700 border-amber-200' : 
                            'bg-red-50 text-red-700 border-red-200'
                          }\`}>
                            {row.priority}
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Right: Capability Building Priorities */}
          <div className="w-[45%] border border-slate-200 rounded-xl bg-white flex flex-col h-full overflow-hidden">
             <div className="bg-slate-50 py-2.5 border-b border-slate-200 flex justify-between px-4 items-center">
              <span className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide">CAPABILITY BUILDING PRIORITIES</span>
              <span className="text-[6.5pt] font-bold text-slate-500">Timeline</span>
            </div>
            <div className="flex-1 flex flex-col">
               {[
                 { num: "01", title: "Build Process Discipline", desc: "Train teams on SOPs and process adherence.", icon: <Users className="w-5 h-5 text-[#0f5f59]"/>, time: "0 – 30 Days", bg: "bg-[#0f5f59]" },
                 { num: "02", title: "Invest in Automation Tools", desc: "Adopt tools to automate key workflows and reporting.", icon: <Cpu className="w-5 h-5 text-emerald-600"/>, time: "30 – 60 Days", bg: "bg-[#10b981]" },
                 { num: "03", title: "Develop Data Culture", desc: "Promote data-driven decision making across the organization.", icon: <BarChart3 className="w-5 h-5 text-amber-500"/>, time: "60 – 90 Days", bg: "bg-[#f59e0b]" },
                 { num: "04", title: "Upskill & Empower Teams", desc: "Invest in training, upskilling and empowerment.", icon: <Users className="w-5 h-5 text-red-600"/>, time: "90 – 120 Days", bg: "bg-[#ef4444]" },
                 { num: "05", title: "Enhance Continuous Improvement", desc: "Implement culture of continuous review and improvement.", icon: <RefreshCw className="w-5 h-5 text-[#312e81]"/>, time: "120+ Days", bg: "bg-[#312e81]" }
               ].map((item, i) => (
                 <div key={i} className="flex-1 flex items-stretch border-b border-slate-100 last:border-0">
                    <div className={\`w-12 flex items-center justify-center text-white font-bold text-[10pt] \${item.bg}\`}>
                       {item.num}
                    </div>
                    <div className="flex items-center justify-center px-3">
                       {item.icon}
                    </div>
                    <div className="flex-1 flex flex-col justify-center py-1">
                       <div className="text-[7.5pt] font-bold text-[#0f172a]">{item.title}</div>
                       <div className="text-[6.5pt] text-slate-600 leading-tight mt-0.5">{item.desc}</div>
                    </div>
                    <div className="w-20 flex items-center justify-end pr-4">
                       <span className="text-[7pt] font-bold text-slate-700">{item.time}</span>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Row 4: Key Takeaways Banner */}
        <div className="w-full border border-slate-200 bg-white rounded-xl flex items-stretch overflow-hidden mb-3">
           <div className="bg-[#0f172a] w-[20%] flex items-center justify-center p-3">
              <span className="text-[8.5pt] font-bold text-white uppercase tracking-wide">KEY TAKEAWAYS</span>
           </div>
           <div className="flex-1 flex items-center justify-around py-2">
              <div className="flex items-start gap-2 max-w-[150px]">
                 <Check className="w-4 h-4 text-[#0f5f59] shrink-0 mt-0.5" strokeWidth={3}/>
                 <span className="text-[7pt] text-slate-700 leading-snug font-medium">Strong foundation in core operations and team capability.</span>
              </div>
              <div className="flex items-start gap-2 max-w-[150px]">
                 <Check className="w-4 h-4 text-[#0f5f59] shrink-0 mt-0.5" strokeWidth={3}/>
                 <span className="text-[7pt] text-slate-700 leading-snug font-medium">Focus on standardization, automation and monitoring.</span>
              </div>
              <div className="flex items-start gap-2 max-w-[150px]">
                 <Check className="w-4 h-4 text-[#0f5f59] shrink-0 mt-0.5" strokeWidth={3}/>
                 <span className="text-[7pt] text-slate-700 leading-snug font-medium">Build a scalable operating model for sustainable growth.</span>
              </div>
           </div>
           <div className="w-[30%] bg-emerald-50 border-l border-emerald-100 flex items-center gap-3 p-3">
              <TrendingUp className="w-8 h-8 text-emerald-700 shrink-0"/>
              <span className="text-[7.5pt] font-bold text-emerald-800 leading-snug">Stronger operations today lead to better results tomorrow.</span>
           </div>
        </div>

        {/* Footer Quote Banner */}
        <div className="w-full bg-[#0f172a] rounded-xl flex items-stretch overflow-hidden mt-auto mb-3">
            <div className="flex items-center gap-3 w-[45%] p-4 border-r border-slate-700">
               <span className="text-[36pt] text-[#0d9488] font-serif leading-none h-[25px] flex items-center overflow-hidden">“</span>
               <div className="flex flex-col">
                  <p className="text-[8.5pt] text-white font-medium leading-snug">Excellence in operations is not about working harder. It is about working smarter, every single day.</p>
                  <span className="text-[8.5pt] text-[#0d9488] font-medium mt-1.5">— KRGONE Advisory Team</span>
               </div>
            </div>
            <div className="flex-1 flex justify-around items-center p-3 text-white">
               <div className="flex flex-col items-center gap-1.5">
                  <Network className="w-5 h-5 text-slate-300" strokeWidth={1.5}/>
                  <span className="text-[6.5pt] text-center leading-tight">Standardize<br/>Processes</span>
               </div>
               <div className="w-px h-8 bg-slate-700"></div>
               <div className="flex flex-col items-center gap-1.5">
                  <Monitor className="w-5 h-5 text-slate-300" strokeWidth={1.5}/>
                  <span className="text-[6.5pt] text-center leading-tight">Automate<br/>Workflows</span>
               </div>
               <div className="w-px h-8 bg-slate-700"></div>
               <div className="flex flex-col items-center gap-1.5">
                  <BarChart3 className="w-5 h-5 text-slate-300" strokeWidth={1.5}/>
                  <span className="text-[6.5pt] text-center leading-tight">Measure<br/>Performance</span>
               </div>
               <div className="w-px h-8 bg-slate-700"></div>
               <div className="flex flex-col items-center gap-1.5">
                  <RefreshCw className="w-5 h-5 text-slate-300" strokeWidth={1.5}/>
                  <span className="text-[6.5pt] text-center leading-tight">Improve<br/>Continuously</span>
               </div>
            </div>
        </div>
        
        {/* Assessment Info Footer */}
        <div className="w-full bg-[#0f172a] rounded-xl flex items-center justify-between p-4 text-white">
           <div className="flex flex-col items-center flex-1 border-r border-slate-700">
             <CalendarDays className="w-6 h-6 text-[#0d9488] mb-1.5"/>
             <span className="text-[6.5pt] text-slate-400 mb-0.5">Assessment Date</span>
             <span className="text-[8pt] font-bold">23 July 2026</span>
           </div>
           <div className="flex flex-col items-center flex-1 border-r border-slate-700">
             <ClipboardList className="w-6 h-6 text-[#0d9488] mb-1.5"/>
             <span className="text-[6.5pt] text-slate-400 mb-0.5">Assessment ID</span>
             <span className="text-[8pt] font-bold">KRG-2026-000124</span>
           </div>
           <div className="flex flex-col items-center flex-1 border-r border-slate-700">
             <CalendarDays className="w-6 h-6 text-[#0d9488] mb-1.5"/>
             <span className="text-[6.5pt] text-slate-400 mb-0.5">Next Review Date</span>
             <span className="text-[8pt] font-bold">23 October 2026</span>
           </div>
           <div className="flex flex-col items-center flex-1 border-r border-slate-700">
             <UserCircle className="w-6 h-6 text-[#0d9488] mb-1.5"/>
             <span className="text-[6.5pt] text-slate-400 mb-0.5">Prepared By</span>
             <span className="text-[8pt] font-bold">KRGONE Advisory Team</span>
           </div>
           <div className="flex flex-col flex-1 pl-6">
             <span className="text-[7.5pt] font-bold text-[#0d9488] mb-1">Data Sources</span>
             <ul className="text-[6.5pt] text-slate-300 space-y-0.5 list-disc pl-3">
               <li>Internal Processes Review</li>
               <li>Team Interviews</li>
               <li>System & Data Analysis</li>
             </ul>
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
              Page 11 of 14
            </div>
          </div>
        </div>
      </div>
`;

let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

// Insert at the end before closing tag
const splitIndex = content.lastIndexOf('    </div>\n  );\n}');
if (splitIndex === -1) {
  console.log("Could not find end of file");
  process.exit(1);
}

const updatedContent = content.slice(0, splitIndex) + page11Code + '\n' + content.slice(splitIndex);

fs.writeFileSync('src/components/PrintDossier.tsx', updatedContent, 'utf8');
console.log('Successfully added PAGE 11.');
