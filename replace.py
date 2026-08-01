import re

with open("src/App.tsx", "r") as f:
    content = f.read()

# Replace everything from {/* DASHBOARD SECTION */} to the end of the file except the last </div>); }
new_content = """      {/* DASHBOARD SECTION */}
      <section className="bg-[#fafafc] py-24 px-6 font-sans relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h2 className="text-[2.5rem] md:text-5xl font-bold text-[#0f2142] tracking-tight mb-2">
              Business Growth Dashboard™
            </h2>
            <h3 className="text-[2rem] md:text-[2.2rem] font-medium text-black tracking-tight mb-6">
              Turn Business Data into Growth Decisions
            </h3>
            <p className="text-slate-800 text-[18px] md:text-[20px] leading-relaxed max-w-4xl mx-auto font-normal">
              The KRG ONE™ Business Growth Dashboard transforms your Business Growth Assessment into executive
              insights, priority actions, and a practical roadmap for sustainable business growth.
            </p>
          </div>

          <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-start mb-16">
            
            {/* Left: Dashboard Visualization */}
            <div className="flex-1 w-full max-w-4xl mx-auto bg-[#f1f3f7] rounded-3xl p-6 lg:p-8 shadow-sm border border-slate-200 overflow-hidden relative">
              <div className="grid grid-cols-12 gap-4">
                
                {/* Left Column (4 cols) */}
                <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
                  {/* AI Business Insights */}
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 h-[240px]">
                    <h4 className="text-[12px] font-bold text-black mb-2">AI Business Insights™ Panel</h4>
                    <p className="text-[9px] text-slate-700 leading-tight mb-4">Concise, high-impact recommendations to concise, high-impact recommendations.</p>
                    <ul className="space-y-3">
                      <li className="flex gap-2 items-start">
                         <div className="w-1.5 h-1.5 rounded-full bg-slate-800 shrink-0 mt-1"></div>
                         <p className="text-[8.5px] text-slate-700 leading-tight">Achievers recommanded roiops fracting sitextions.and erecstainable business growth.</p>
                      </li>
                      <li className="flex gap-2 items-start">
                         <div className="w-1.5 h-1.5 rounded-full bg-slate-800 shrink-0 mt-1"></div>
                         <p className="text-[8.5px] text-slate-700 leading-tight">Eceliorliccwntees srevopis smeka-enerloed and cuslinerizzations growth.</p>
                      </li>
                      <li className="flex gap-2 items-start">
                         <div className="w-1.5 h-1.5 rounded-full bg-slate-800 shrink-0 mt-1"></div>
                         <p className="text-[8.5px] text-slate-700 leading-tight">Rengizss the erant.erzasaast recommendations and tract.arastinent prostete soncomtinenile and octions.</p>
                      </li>
                      <li className="flex gap-2 items-start">
                         <div className="w-1.5 h-1.5 rounded-full bg-slate-800 shrink-0 mt-1"></div>
                         <p className="text-[8.5px] text-slate-700 leading-tight">Develop moossoitatla tasl recommendation acooaistartttis and momtate and ttorial grotver anderplizes.</p>
                      </li>
                    </ul>
                  </div>

                  {/* 90-Day Growth Roadmap */}
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 h-[160px] relative">
                    <h4 className="text-[12px] font-bold text-black mb-1">90-Day Growth Roadmap™</h4>
                    <p className="text-[9px] text-slate-700 leading-tight mb-4">Visualization milestones designed intment with achievable milestones.</p>
                    <div className="relative w-full h-20 mt-2">
                      <div className="absolute top-[40%] left-0 right-0 h-px bg-slate-300"></div>
                      <div className="absolute top-[40%] left-[20%] w-2 h-2 rounded-full bg-slate-300 -translate-y-1/2"></div>
                      <div className="absolute top-[40%] left-[50%] w-3 h-3 rounded-full bg-[#ffb800] ring-4 ring-white -translate-y-1/2"></div>
                      <div className="absolute top-[40%] left-[80%] w-2 h-2 rounded-full bg-slate-300 -translate-y-1/2"></div>
                      
                      <div className="absolute top-[0%] right-[0%] bg-slate-100 text-slate-600 text-[6.5px] px-2 py-1 rounded">Achievable milestones</div>
                      <div className="absolute top-[20%] left-[25%] bg-[#0f2142] text-white text-[6.5px] px-2 py-1 rounded">90-Day graaaxix<br/>Achievable milestone: 1</div>
                      <div className="absolute top-[65%] left-[5%] bg-[#0f2142] text-white text-[6.5px] px-2 py-1 rounded">90-Day Growth<br/>milestones Timeline</div>
                      
                      <div className="absolute bottom-0 left-[18%] text-[8px] text-slate-500 font-medium">Jun</div>
                      <div className="absolute bottom-0 left-[48%] text-[8px] text-slate-500 font-medium">May</div>
                      <div className="absolute bottom-0 left-[78%] text-[8px] text-slate-500 font-medium">Sep</div>
                      <div className="absolute bottom-0 left-[0%] bg-slate-100 text-[7px] text-slate-600 font-medium flex items-center gap-1 px-1.5 py-0.5 rounded"><div className="w-1.5 h-1.5 bg-[#ffb800] rounded-full"></div> Nsesizes</div>
                    </div>
                  </div>
                </div>

                {/* Right Column (8 cols) */}
                <div className="col-span-12 md:col-span-8 flex flex-col gap-4">
                  {/* Top Row: Radar Chart and Exec Report */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:h-[240px]">
                    {/* Radar Chart */}
                    <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 p-5 relative">
                      <h4 className="text-[12px] font-bold text-black mb-1">Radar Chart</h4>
                      <p className="text-[9px] text-slate-700 mb-3">Multiplozation sizertle 7 growth and 7 growth pillars.</p>
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="flex items-center gap-1.5 text-[8px] text-slate-700 font-medium"><div className="w-2.5 h-2.5 bg-slate-200"></div> Leadership & Vision</div>
                        <div className="flex items-center gap-1.5 text-[8px] text-slate-700 font-medium"><div className="w-2.5 h-2.5 bg-[#ffb800]"></div> Radar Chart</div>
                        <div className="flex items-center gap-1.5 text-[8px] text-slate-700 font-medium"><div className="w-2.5 h-2.5 bg-[#0f2142]"></div> Proces & Systems</div>
                      </div>
                      
                      <div className="w-full h-32 sm:h-36 relative flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full max-w-[150px]">
                          {/* Grid */}
                          <polygon points="50,10 85,25 85,75 50,90 15,75 15,25" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                          <polygon points="50,25 75,37 75,63 50,75 25,63 25,37" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                          <polygon points="50,40 65,48 65,52 50,60 35,52 35,48" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                          {/* Lines */}
                          <line x1="50" y1="50" x2="50" y2="10" stroke="#e2e8f0" strokeWidth="0.5" />
                          <line x1="50" y1="50" x2="85" y2="25" stroke="#e2e8f0" strokeWidth="0.5" />
                          <line x1="50" y1="50" x2="85" y2="75" stroke="#e2e8f0" strokeWidth="0.5" />
                          <line x1="50" y1="50" x2="50" y2="90" stroke="#e2e8f0" strokeWidth="0.5" />
                          <line x1="50" y1="50" x2="15" y2="75" stroke="#e2e8f0" strokeWidth="0.5" />
                          <line x1="50" y1="50" x2="15" y2="25" stroke="#e2e8f0" strokeWidth="0.5" />
                          
                          {/* Shape 1 (Gray/Blue outline) */}
                          <polygon points="50,30 75,40 70,70 50,80 30,70 20,40" fill="rgba(148, 163, 184, 0.4)" stroke="#0f2142" strokeWidth="1" />
                          {/* Shape 2 (Yellow) */}
                          <polygon points="50,35 60,45 65,60 50,65 35,55 35,45" fill="rgba(255, 184, 0, 0.4)" stroke="#ffb800" strokeWidth="1" />
                        </svg>
                        
                        <div className="absolute top-[0%] left-1/2 -translate-x-1/2 text-[8px] text-black font-medium whitespace-nowrap">Leadership & Vision</div>
                        <div className="absolute top-[35%] -right-[5%] text-[8px] text-black font-medium text-center leading-tight">Sales &<br/>Marketing</div>
                        <div className="absolute bottom-[25%] -right-[10%] text-[8px] text-black font-medium text-center leading-tight">Operations<br/>& Process</div>
                        <div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 text-[8px] text-black font-medium whitespace-nowrap">Financial Mgmt</div>
                        <div className="absolute bottom-[25%] -left-[10%] text-[8px] text-black font-medium text-center leading-tight">People &<br/>Culture</div>
                        <div className="absolute top-[35%] -left-[10%] text-[8px] text-black font-medium text-center leading-tight">Process &<br/>Systems</div>
                        <div className="absolute top-[45%] -left-[15%] text-[8px] text-black font-medium text-center leading-tight">Technology<br/>& AI</div>
                      </div>
                    </div>

                    {/* Executive Growth Report */}
                    <div className="w-full sm:w-[150px] bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex flex-col">
                      <h4 className="text-[10px] font-bold text-black mb-2">Executive Growth Report™</h4>
                      <div className="flex-1 w-full flex items-center justify-center py-2">
                         <svg viewBox="0 0 100 100" className="w-16 h-16">
                           <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                           <polygon points="50,40 65,50 60,65 50,70 35,60 30,50" fill="rgba(255, 184, 0, 0.5)" stroke="#ffb800" strokeWidth="1" />
                         </svg>
                      </div>
                      <p className="text-[6.5px] text-slate-600 leading-tight text-left">The KRG ONE™ Business Growth Dashboard transforms your Business Growth Assessment into exesumes insights-cons exccuine rinsights, business growth.</p>
                      <p className="text-[6.5px] text-slate-600 leading-tight text-left mt-2">The garnatione reoeexrnent recommendation and toxi aneersnesnxth eeson en aai anasiging maraitr in iBalty sczone and a practical roadmap for sustainable business growth.</p>
                    </div>
                  </div>

                  {/* Bottom Row: 7-Pillar Performance */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:h-[160px]">
                    <div className="flex sm:w-[180px] gap-2">
                       <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 p-3 flex flex-col justify-center">
                           <div className="text-[8px] text-slate-600 font-medium mb-1">Leadership</div>
                           <div className="text-[14px] font-bold text-black">+ 160%</div>
                           <div className="w-full bg-slate-200 h-1.5 mt-2 rounded-full"><div className="w-[70%] bg-slate-400 h-full rounded-full"></div></div>
                       </div>
                       <div className="flex-1 flex flex-col gap-2">
                         <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 p-3 flex flex-col justify-center">
                           <div className="text-[8px] text-slate-600 font-medium mb-1">Sales Marketing</div>
                           <div className="text-[14px] font-bold text-black">4.0%</div>
                           <div className="w-full bg-slate-200 h-1.5 mt-1 rounded-full flex gap-1">
                             <div className="w-1/3 bg-[#ffb800] h-full rounded-full"></div>
                             <div className="w-1/4 bg-slate-400 h-full rounded-full"></div>
                           </div>
                         </div>
                         <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 p-3 flex flex-col justify-center">
                           <div className="text-[8px] text-slate-600 font-medium mb-1">Financial Mgmts</div>
                           <div className="text-[14px] font-bold text-black">63.5%</div>
                           <div className="w-full bg-slate-200 h-1.5 mt-1 rounded-full"><div className="w-[45%] bg-slate-400 h-full rounded-full"></div></div>
                         </div>
                       </div>
                    </div>

                    {/* 7-Pillar Bars */}
                    <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
                      <h4 className="text-[12px] font-bold text-black mb-3">7-Pillar Performance Dashboard™</h4>
                      <div className="space-y-2">
                        {[
                          { l: "Leadership & Vision", w1: "75%", w2: "15%", c: "bg-[#ffb800]" },
                          { l: "Sales & Marketing", w1: "55%", w2: "20%", c: "bg-[#0f2142]" },
                          { l: "Operations & Process", w1: "80%", w2: "10%", c: "bg-[#0f2142]" },
                          { l: "Financial Mgmt", w1: "45%", w2: "30%", c: "bg-[#0f2142]" },
                          { l: "People & Culture", w1: "65%", w2: "20%", c: "bg-[#0f2142]" },
                          { l: "Technology & AI", w1: "60%", w2: "30%", c: "bg-[#ffb800]" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <span className="text-[8px] font-medium text-slate-700 w-24">{item.l}</span>
                            <div className="flex-1 h-2.5 bg-slate-100 rounded-full flex overflow-hidden">
                              <div className={`h-full ${item.c}`} style={{ width: item.w1 }}></div>
                              <div className="h-full bg-slate-300" style={{ width: item.w2 }}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 mt-4 bg-slate-50 py-1.5 px-3 rounded text-[8px] text-slate-600 font-medium justify-center border border-slate-100">
                        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#ffb800]"></div> Nsview</div>
                        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div> Stats</div>
                        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#0f2142]"></div> Brockdown</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: What You'll Receive */}
            <div className="flex-1 w-full mt-4 xl:mt-0">
              <h3 className="text-[2rem] font-bold text-[#0f2142] mb-10">What You'll Receive</h3>
              
              <div className="space-y-8">
                {[
                  { 
                    title: "Business Growth Score™", 
                    text: "An overall Business Growth Score based on the KRG ONE™ 7-Pillar Business Growth Framework™, showing your current business health and growth readiness.",
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="24" width="8" height="12" fill="#94a3b8" />
                        <rect x="16" y="16" width="8" height="20" fill="#94a3b8" />
                        <rect x="28" y="8" width="8" height="28" fill="#ffb800" />
                        <path d="M2 38H38" stroke="#0f2142" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )
                  },
                  { 
                    title: "Growth Priority Matrix™", 
                    text: "Instantly identify the areas that need immediate attention and the opportunities that can deliver the highest business impact.",
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="4" width="14" height="14" rx="3" fill="#ffb800" />
                        <rect x="22" y="4" width="14" height="14" rx="3" fill="#cbd5e1" />
                        <rect x="4" y="22" width="14" height="14" rx="3" fill="#cbd5e1" />
                        <rect x="22" y="22" width="14" height="14" rx="3" fill="#94a3b8" />
                      </svg>
                    )
                  },
                  { 
                    title: "7-Pillar Performance Dashboard™", 
                    text: "View your performance across all seven growth pillars through a clear visual dashboard that highlights strengths, gaps, and improvement opportunities.",
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" stroke="#94a3b8" strokeWidth="1" fill="none"/>
                        <polygon points="20,10 30,16 30,24 20,30 10,24 10,16" stroke="#94a3b8" strokeWidth="1" fill="none"/>
                        <polygon points="20,12 28,18 25,28 15,28 12,18" fill="rgba(255, 184, 0, 0.4)" stroke="#ffb800" strokeWidth="1.5"/>
                        <line x1="20" y1="2" x2="20" y2="38" stroke="#94a3b8" strokeWidth="1"/>
                        <line x1="2" y1="12" x2="38" y2="28" stroke="#94a3b8" strokeWidth="1"/>
                        <line x1="2" y1="28" x2="38" y2="12" stroke="#94a3b8" strokeWidth="1"/>
                      </svg>
                    )
                  },
                  { 
                    title: "AI Business Insights™", 
                    text: "Receive intelligent recommendations that support better business decisions and help you focus on what matters most.",
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="14" width="28" height="20" rx="4" stroke="#0f2142" strokeWidth="2" fill="#f8fafc"/>
                        <circle cx="14" cy="24" r="3" fill="#ffb800"/>
                        <circle cx="26" cy="24" r="3" fill="#ffb800"/>
                        <line x1="20" y1="14" x2="20" y2="6" stroke="#0f2142" strokeWidth="2"/>
                        <circle cx="20" cy="4" r="2" fill="#94a3b8"/>
                        <path d="M16 30H24" stroke="#0f2142" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="2" y1="22" x2="6" y2="22" stroke="#0f2142" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="34" y1="22" x2="38" y2="22" stroke="#0f2142" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )
                  },
                  { 
                    title: "Executive Growth Report™", 
                    text: "A professionally structured report summarising your assessment results, business observations, and strategic recommendations.",
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" y="4" width="24" height="32" rx="2" stroke="#0f2142" strokeWidth="2" fill="white"/>
                        <line x1="14" y1="12" x2="26" y2="12" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="14" y1="18" x2="26" y2="18" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="14" y1="24" x2="22" y2="24" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round"/>
                        <rect x="14" y="28" width="12" height="4" fill="#ffb800" rx="1"/>
                      </svg>
                    )
                  },
                  { 
                    title: "90-Day Growth Roadmap™", 
                    text: "A prioritised action plan designed to improve business performance with practical, measurable, and achievable milestones.",
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12L14 8L26 12L36 8V32L26 36L14 32L4 36V12Z" fill="#f8fafc" stroke="#0f2142" strokeWidth="2" strokeLinejoin="round"/>
                        <line x1="14" y1="8" x2="14" y2="32" stroke="#0f2142" strokeWidth="2"/>
                        <line x1="26" y1="12" x2="26" y2="36" stroke="#0f2142" strokeWidth="2"/>
                        <path d="M30 14C30 10.6863 27.3137 8 24 8C20.6863 8 18 10.6863 18 14C18 18 24 24 24 24C24 24 30 18 30 14Z" fill="#ffb800" stroke="#0f2142" strokeWidth="2" strokeLinejoin="round"/>
                        <circle cx="24" cy="14" r="2" fill="white"/>
                      </svg>
                    )
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 sm:gap-6 items-start">
                    <div className="shrink-0 mt-1">
                      <Check className="w-7 h-7 text-[#ffb800]" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 pr-2 sm:pr-4">
                      <h4 className="text-[20px] sm:text-[22px] font-bold text-black mb-1.5">{item.title}</h4>
                      <p className="text-[16px] sm:text-[17px] text-black leading-relaxed font-normal">{item.text}</p>
                    </div>
                    <div className="shrink-0 ml-2 hidden sm:flex pt-1">
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="text-center mt-20 pb-12">
            <p className="text-[22px] sm:text-[26px] font-medium text-black mb-10 max-w-5xl mx-auto leading-snug">
              Every insight is designed to support better decisions, stronger execution, and sustainable business growth.
            </p>
            <button className="bg-[#ffb800] hover:bg-[#f0ad00] text-black font-bold py-4 px-8 sm:py-5 sm:px-10 rounded-xl transition-all flex items-center justify-center gap-2 mx-auto text-[20px] sm:text-[22px]">
              Start Free Business Growth Assessment™
              <ArrowRight className="w-6 h-6 ml-1" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
"""

content = re.sub(r'      \{\/\* DASHBOARD SECTION \*\/\}.*?(?=\Z)', new_content, content, flags=re.DOTALL)

with open("src/App.tsx", "w") as f:
    f.write(content)
