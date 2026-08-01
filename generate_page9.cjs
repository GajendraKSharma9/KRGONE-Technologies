const fs = require('fs');

const page9Code = `
      {/* PAGE 9: COMPETITIVE LANDSCAPE & MARKET POSITION */}
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
          <h2 className="text-[24pt] font-black text-[#1e3a8a] uppercase tracking-wide leading-tight">9. COMPETITIVE LANDSCAPE & MARKET POSITION</h2>
          <p className="text-[10pt] text-slate-600 mt-1">Analysis of your market position, competitors and key external factors impacting your business.</p>
        </div>

        {/* Row 1: Map and Strengths/Weaknesses */}
        <div className="flex gap-4 mb-3 h-[280px]">
          {/* Left: Positioning Map */}
          <div className="w-[45%] border border-slate-200 rounded-xl bg-white flex flex-col p-3 relative h-full">
            <h3 className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide text-center">MARKET POSITIONING MAP</h3>
            <p className="text-[7pt] text-slate-500 text-center mb-6">Relative positioning of key players in your industry</p>
            
            <div className="flex-1 relative mx-6 mb-8 mt-2">
              {/* Axes lines with arrows */}
              <div className="absolute left-0 top-0 bottom-0 border-l border-slate-400">
                <div className="absolute -top-1 left-[-4px] w-0 h-0 border-l-[4px] border-l-transparent border-b-[6px] border-b-slate-400 border-r-[4px] border-r-transparent"></div>
              </div>
              <div className="absolute left-0 right-0 bottom-0 border-b border-slate-400">
                <div className="absolute -right-1 bottom-[-4px] w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-slate-400 border-b-[4px] border-b-transparent"></div>
              </div>
              
              {/* Quadrant lines */}
              <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-slate-300 -translate-y-1/2"></div>
              <div className="absolute top-0 bottom-0 left-1/2 border-l border-dashed border-slate-300 -translate-x-1/2"></div>
              
              {/* Axis Labels */}
              <span className="absolute -left-7 top-0 text-[6.5pt] text-slate-600">High</span>
              <span className="absolute -left-6 -bottom-4 text-[6.5pt] text-slate-600">Low</span>
              <span className="absolute right-0 -bottom-4 text-[6.5pt] text-slate-600">High</span>
              
              <div className="absolute top-1/2 -left-12 -translate-y-1/2 -rotate-90 text-[7pt] font-bold text-[#0f172a] tracking-widest whitespace-nowrap">MARKET PRESENCE</div>
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[7pt] font-bold text-[#0f172a] tracking-widest whitespace-nowrap">SERVICE / PRODUCT QUALITY</div>

              {/* Data Points */}
              <div className="absolute w-4 h-4 rounded-full bg-emerald-700 top-[15%] left-[80%] -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center"></div>
              <span className="absolute top-[15%] left-[80%] ml-3 -translate-y-1/2 text-[7.5pt] font-bold text-emerald-800 leading-tight">YOUR<br/>BUSINESS</span>

              <div className="absolute w-3 h-3 rounded-full bg-slate-400 top-[35%] left-[68%] -translate-x-1/2 -translate-y-1/2"></div>
              <span className="absolute top-[35%] left-[68%] ml-2.5 -translate-y-1/2 text-[7pt] text-slate-600 font-medium">Competitor A</span>

              <div className="absolute w-3 h-3 rounded-full bg-slate-400 top-[60%] left-[85%] -translate-x-1/2 -translate-y-1/2"></div>
              <span className="absolute top-[60%] left-[85%] ml-2.5 -translate-y-1/2 text-[7pt] text-slate-600 font-medium">Competitor B</span>

              <div className="absolute w-3 h-3 rounded-full bg-slate-400 top-[25%] left-[30%] -translate-x-1/2 -translate-y-1/2"></div>
              <span className="absolute top-[25%] left-[30%] ml-2.5 -translate-y-1/2 text-[7pt] text-slate-600 font-medium">Competitor C</span>

              <div className="absolute w-3 h-3 rounded-full bg-slate-400 top-[55%] left-[25%] -translate-x-1/2 -translate-y-1/2"></div>
              <span className="absolute top-[55%] left-[25%] ml-2.5 -translate-y-1/2 text-[7pt] text-slate-600 font-medium">Competitor D</span>

              <div className="absolute w-3 h-3 rounded-full bg-slate-400 top-[85%] left-[45%] -translate-x-1/2 -translate-y-1/2"></div>
              <span className="absolute top-[85%] left-[45%] ml-2.5 -translate-y-1/2 text-[7pt] text-slate-600 font-medium">Competitor E</span>
            </div>
            
            <div className="mt-auto bg-emerald-50 border border-emerald-100 rounded-lg p-2.5 flex gap-2 items-start">
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center border border-emerald-200 shrink-0">
                <Target className="w-3.5 h-3.5 text-emerald-600"/>
              </div>
              <p className="text-[7pt] text-slate-700 leading-snug">Your business is well-positioned on quality, with opportunity to further strengthen market presence and brand visibility.</p>
            </div>
          </div>

          {/* Right: Strengths and Weaknesses */}
          <div className="w-[55%] border border-slate-200 rounded-xl overflow-hidden bg-white flex flex-col h-full">
            <div className="bg-slate-50 py-2.5 text-center border-b border-slate-200">
              <span className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide">COMPETITIVE STRENGTHS & WEAKNESSES</span>
            </div>
            <div className="flex flex-1">
              {/* Strengths */}
              <div className="w-1/2 border-r border-slate-200 flex flex-col">
                <div className="bg-emerald-700 text-white py-1.5 flex items-center justify-center gap-1.5">
                  <Trophy className="w-4 h-4"/>
                  <span className="text-[7.5pt] font-bold">Strengths (vs Competitors)</span>
                </div>
                <div className="p-3 flex flex-col justify-around flex-1 space-y-1.5">
                  {[
                    "Strong product/service quality",
                    "Good customer relationships and retention",
                    "Skilled and experienced team",
                    "Healthy financial position",
                    "Operational stability",
                    "Flexibility and faster decision making"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-2 bg-slate-50 p-2 rounded-md">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="white" />
                      <span className="text-[7pt] text-[#0f172a] leading-tight font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Weaknesses */}
              <div className="w-1/2 flex flex-col">
                <div className="bg-red-700 text-white py-1.5 flex items-center justify-center gap-1.5">
                  <AlertTriangle className="w-4 h-4"/>
                  <span className="text-[7.5pt] font-bold">Weaknesses (vs Competitors)</span>
                </div>
                <div className="p-3 flex flex-col justify-around flex-1 space-y-1.5">
                  {[
                    "Limited brand visibility",
                    "Digital presence can be improved",
                    "Marketing and lead generation needs strengthening",
                    "Process documentation and standardization",
                    "Scalability and capacity constraints",
                    "Dependence on key customers"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-2 bg-slate-50 p-2 rounded-md">
                      <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5"><XCircle className="w-3.5 h-3.5 text-red-600 fill-white" strokeWidth={2.5}/></div>
                      <span className="text-[7pt] text-[#0f172a] leading-tight font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Opp/Threats & Comp Summary */}
        <div className="flex gap-4 mb-3">
          {/* Left: Opp & Threats */}
          <div className="w-[30%] border border-slate-200 rounded-xl overflow-hidden bg-white flex flex-col">
            <div className="bg-slate-50 py-2.5 text-center border-b border-slate-200">
              <span className="text-[8.5pt] font-bold text-[#0f172a] uppercase tracking-wide">OPPORTUNITIES & THREATS</span>
            </div>
            <div className="p-4 flex flex-col gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-emerald-600"/>
                  <span className="text-[8.5pt] font-bold text-emerald-800">KEY OPPORTUNITIES</span>
                </div>
                <ul className="space-y-1.5">
                  {[
                    "Growing market demand and customer base",
                    "Expansion into new segments and geographies",
                    "Digital marketing and online sales channels",
                    "Strategic partnerships and collaborations",
                    "Product/service innovation and diversification"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-600 flex items-center justify-center shrink-0 mt-0.5"><Check className="w-2.5 h-2.5 text-white" strokeWidth={3}/></div>
                      <span className="text-[7pt] text-slate-700 leading-tight">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-px bg-slate-100 w-full"></div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-red-600"/>
                    <div className="absolute inset-0 bg-red-600 rotate-45 scale-[0.8] rounded-sm opacity-20"></div>
                  </div>
                  <span className="text-[8.5pt] font-bold text-red-700 uppercase">KEY THREATS</span>
                </div>
                <ul className="space-y-1.5">
                  {[
                    "Intense competition and price pressure",
                    "Changing customer preferences",
                    "Rising operational and raw material costs",
                    "Technological disruption",
                    "Economic slowdown and market volatility"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5"><XCircle className="w-3 h-3 text-red-600 fill-white" strokeWidth={3}/></div>
                      <span className="text-[7pt] text-slate-700 leading-tight">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Comparison Summary */}
          <div className="w-[70%] border border-slate-200 rounded-xl overflow-hidden bg-white flex flex-col">
            <div className="bg-slate-50 py-2.5 text-center border-b border-slate-200">
              <span className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide">COMPETITIVE COMPARISON SUMMARY</span>
            </div>
            
            <div className="flex-1 flex flex-col text-[7pt]">
              <div className="flex bg-[#0f5f59] text-white font-bold border-b border-[#0f5f59]">
                <div className="flex-[1.5] py-2 px-3">Factor</div>
                <div className="flex-1 py-2 px-1 text-center border-l border-[#0d9488]/30">Your Business</div>
                <div className="flex-1 py-2 px-1 text-center border-l border-[#0d9488]/30">Top Competitor A</div>
                <div className="flex-1 py-2 px-1 text-center border-l border-[#0d9488]/30">Top Competitor B</div>
                <div className="flex-1 py-2 px-1 text-center border-l border-[#0d9488]/30">Industry Average</div>
              </div>
              
              {[
                { name: 'Product / Service Quality', icon: <Award className="w-4 h-4 text-[#0f5f59]"/>, stars: [4, 4, 3, 3] },
                { name: 'Pricing Competitiveness', icon: <IndianRupee className="w-4 h-4 text-[#0f5f59]"/>, stars: [3, 4, 3, 3] },
                { name: 'Market Presence', icon: <Users className="w-4 h-4 text-[#0f5f59]"/>, stars: [3, 4, 3, 3] },
                { name: 'Brand Strength', icon: <Tag className="w-4 h-4 text-[#0f5f59]"/>, stars: [3, 4, 3, 3] },
                { name: 'Customer Satisfaction', icon: <Smile className="w-4 h-4 text-[#0f5f59]"/>, stars: [4, 3, 3, 3] },
                { name: 'Innovation & Technology', icon: <Lightbulb className="w-4 h-4 text-[#0f5f59]"/>, stars: [3, 4, 3, 3] },
                { name: 'Operational Efficiency', icon: <Settings className="w-4 h-4 text-[#0f5f59]"/>, stars: [3, 4, 3, 3] },
                { name: 'Overall Competitiveness', icon: <BarChart3 className="w-4 h-4 text-[#0f5f59]"/>, stars: [3.5, 4, 3, 3] }
              ].map((row, idx) => (
                <div key={idx} className={\`flex items-center \${idx !== 7 ? 'border-b border-slate-100' : ''}\`}>
                  <div className="flex-[1.5] py-2 px-3 flex items-center gap-2 font-medium text-slate-700">
                    {row.icon}
                    {row.name}
                  </div>
                  {row.stars.map((score, sIdx) => {
                    const fullStars = Math.floor(score);
                    const halfStar = score % 1 !== 0;
                    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
                    return (
                      <div key={sIdx} className="flex-1 py-2 px-1 flex items-center justify-center border-l border-slate-100 gap-0.5">
                        {[...Array(fullStars)].map((_, i) => <Star key={\`f\${i}\`} className="w-2.5 h-2.5 text-[#0f5f59] fill-[#0f5f59]"/>)}
                        {halfStar && <div className="relative w-2.5 h-2.5"><Star className="absolute inset-0 w-2.5 h-2.5 text-[#0f5f59]" /><div className="absolute inset-0 w-[50%] overflow-hidden"><Star className="w-2.5 h-2.5 text-[#0f5f59] fill-[#0f5f59]" /></div></div>}
                        {[...Array(emptyStars)].map((_, i) => <Star key={\`e\${i}\`} className="w-2.5 h-2.5 text-slate-300"/>)}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            
            <div className="bg-slate-50 py-2 border-t border-slate-200 flex items-center justify-center gap-6 mt-auto">
              <div className="flex items-center gap-1.5"><div className="flex gap-0.5"><Star className="w-2.5 h-2.5 text-[#0f5f59] fill-[#0f5f59]"/><Star className="w-2.5 h-2.5 text-[#0f5f59] fill-[#0f5f59]"/><Star className="w-2.5 h-2.5 text-[#0f5f59] fill-[#0f5f59]"/><Star className="w-2.5 h-2.5 text-[#0f5f59] fill-[#0f5f59]"/><Star className="w-2.5 h-2.5 text-[#0f5f59] fill-[#0f5f59]"/></div> <span className="text-[6.5pt] text-slate-600 font-medium">Excellent</span></div>
              <div className="flex items-center gap-1.5"><div className="flex gap-0.5"><Star className="w-2.5 h-2.5 text-emerald-600 fill-emerald-600"/><Star className="w-2.5 h-2.5 text-emerald-600 fill-emerald-600"/><Star className="w-2.5 h-2.5 text-emerald-600 fill-emerald-600"/><Star className="w-2.5 h-2.5 text-emerald-600 fill-emerald-600"/><Star className="w-2.5 h-2.5 text-slate-300"/></div> <span className="text-[6.5pt] text-slate-600 font-medium">Good</span></div>
              <div className="flex items-center gap-1.5"><div className="flex gap-0.5"><Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500"/><Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500"/><Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500"/><Star className="w-2.5 h-2.5 text-slate-300"/><Star className="w-2.5 h-2.5 text-slate-300"/></div> <span className="text-[6.5pt] text-slate-600 font-medium">Average</span></div>
              <div className="flex items-center gap-1.5"><div className="flex gap-0.5"><Star className="w-2.5 h-2.5 text-orange-500 fill-orange-500"/><Star className="w-2.5 h-2.5 text-orange-500 fill-orange-500"/><Star className="w-2.5 h-2.5 text-slate-300"/><Star className="w-2.5 h-2.5 text-slate-300"/><Star className="w-2.5 h-2.5 text-slate-300"/></div> <span className="text-[6.5pt] text-slate-600 font-medium">Below Average</span></div>
              <div className="flex items-center gap-1.5"><div className="flex gap-0.5"><Star className="w-2.5 h-2.5 text-red-600 fill-red-600"/><Star className="w-2.5 h-2.5 text-slate-300"/><Star className="w-2.5 h-2.5 text-slate-300"/><Star className="w-2.5 h-2.5 text-slate-300"/><Star className="w-2.5 h-2.5 text-slate-300"/></div> <span className="text-[6.5pt] text-slate-600 font-medium">Poor</span></div>
            </div>

          </div>
        </div>

        {/* Row 3: Market Trends */}
        <div className="border border-slate-200 rounded-xl bg-white p-3 mb-3 relative flex flex-col items-center">
          <h3 className="text-[8.5pt] font-bold text-[#0f172a] uppercase tracking-wide bg-white px-4 relative z-10 -mt-5 mb-2">KEY MARKET TRENDS IMPACTING YOUR BUSINESS</h3>
          
          <div className="flex gap-4 mt-1">
            <div className="flex-1 flex gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0f5f59] flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4 text-white" strokeWidth={2.5}/>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[7.5pt] font-bold text-[#0f172a] leading-tight mb-0.5 uppercase tracking-wide">GROWING DEMAND</h4>
                <p className="text-[6.5pt] text-slate-600 leading-tight">Market demand is increasing steadily, creating opportunities for growth.</p>
              </div>
            </div>
            
            <div className="flex-1 flex gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0f5f59] flex items-center justify-center shrink-0">
                <Network className="w-4 h-4 text-white" strokeWidth={2.5}/>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[7.5pt] font-bold text-[#0f172a] leading-tight mb-0.5 uppercase tracking-wide">DIGITAL TRANSFORMATION</h4>
                <p className="text-[6.5pt] text-slate-600 leading-tight">Customers are shifting online. Digital presence and automation are becoming critical.</p>
              </div>
            </div>
            
            <div className="flex-1 flex gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0f5f59] flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-white" strokeWidth={2.5}/>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[7.5pt] font-bold text-[#0f172a] leading-tight mb-0.5 uppercase tracking-wide">CUSTOMER EXPECTATIONS</h4>
                <p className="text-[6.5pt] text-slate-600 leading-tight">Customers expect better quality, faster service and personalized experiences.</p>
              </div>
            </div>
            
            <div className="flex-1 flex gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0f5f59] flex items-center justify-center shrink-0">
                <Banknote className="w-4 h-4 text-white" strokeWidth={2.5}/>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[7.5pt] font-bold text-[#0f172a] leading-tight mb-0.5 uppercase tracking-wide">COST PRESSURE</h4>
                <p className="text-[6.5pt] text-slate-600 leading-tight">Rising input costs and price competition impact profitability margins.</p>
              </div>
            </div>
            
            <div className="flex-1 flex gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0f5f59] flex items-center justify-center shrink-0">
                <Leaf className="w-4 h-4 text-white" strokeWidth={2.5}/>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[7.5pt] font-bold text-[#0f172a] leading-tight mb-0.5 uppercase tracking-wide">SUSTAINABILITY FOCUS</h4>
                <p className="text-[6.5pt] text-slate-600 leading-tight">Sustainable and responsible business practices are gaining importance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4: Key Takeaways & Action Priorities */}
        <div className="flex gap-4 mb-3">
          <div className="w-[45%] bg-slate-50 border border-slate-200 rounded-xl flex items-center overflow-hidden">
            <div className="bg-[#0f172a] h-full w-[25%] flex items-center justify-center">
              <ClipboardList className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
            <div className="p-4 w-[75%]">
              <h3 className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide mb-2">KEY TAKEAWAYS</h3>
              <p className="text-[7.5pt] text-slate-700 leading-snug font-medium">You are well-positioned on quality and customer relationships. Strengthening brand visibility, digital presence and operational scalability will help you outperform competitors and capture greater market share.</p>
            </div>
          </div>
          
          <div className="w-[55%] bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between overflow-hidden relative">
            <div className="w-[70%] z-10 relative">
              <h3 className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide mb-2">STRATEGIC ACTION PRIORITIES</h3>
              <div className="space-y-2">
                {[
                  "Increase brand awareness and digital visibility",
                  "Enhance marketing and lead generation efforts",
                  "Standardize processes and improve operational efficiency",
                  "Innovate and diversify to stay ahead of competition"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={\`w-6 h-6 rounded-md flex items-center justify-center text-white font-bold text-[8pt] \${
                      i === 0 ? 'bg-[#0f5f59]' : i === 1 ? 'bg-[#0f5f59]' : i === 2 ? 'bg-orange-500' : 'bg-[#1e3a8a]'
                    }\`}>
                      0{i + 1}
                    </div>
                    <span className="text-[7.5pt] text-[#0f172a] leading-tight font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 text-[#0f5f59] opacity-20">
              <Target className="w-32 h-32" strokeWidth={1} />
            </div>
          </div>
        </div>

        {/* Footer Quote Banner */}
        <div className="w-full bg-[#0f172a] rounded-xl flex items-stretch overflow-hidden mt-auto">
          <div className="flex flex-col justify-center px-6 py-4 w-[50%] bg-[#0f172a] relative border-r border-slate-700">
            <span className="absolute top-1 left-3 text-[48pt] text-[#0d9488] font-serif leading-none opacity-50">“</span>
            <div className="relative z-10 space-y-1 mt-2">
              <p className="text-[8.5pt] text-white font-medium leading-snug">Know your competition, know your market, know yourself. Only then can you win.</p>
              <p className="text-[8.5pt] text-[#0d9488] font-medium leading-snug mt-1">— Sun Tzu</p>
            </div>
          </div>
          
          <div className="flex-1 flex justify-around items-center bg-[#0f172a] py-3 px-2 text-white">
            <div className="flex flex-col items-center gap-1.5 w-[25%]">
              <Target className="w-6 h-6 text-slate-300" strokeWidth={1.5}/>
              <span className="text-[6.5pt] text-center leading-tight">Analyze<br/>Deeply</span>
            </div>
            <div className="w-px h-10 bg-slate-700"></div>
            <div className="flex flex-col items-center gap-1.5 w-[25%]">
              {/* Using Layers or something similar for Differentiate */}
              <Layers className="w-6 h-6 text-slate-300" strokeWidth={1.5}/>
              <span className="text-[6.5pt] text-center leading-tight">Differentiate<br/>Clearly</span>
            </div>
            <div className="w-px h-10 bg-slate-700"></div>
            <div className="flex flex-col items-center gap-1.5 w-[25%]">
              <TrendingUp className="w-6 h-6 text-slate-300" strokeWidth={1.5}/>
              <span className="text-[6.5pt] text-center leading-tight">Compete<br/>Smart</span>
            </div>
            <div className="w-px h-10 bg-slate-700"></div>
            <div className="flex flex-col items-center gap-1.5 w-[25%]">
              <Trophy className="w-6 h-6 text-slate-300" strokeWidth={1.5}/>
              <span className="text-[6.5pt] text-center leading-tight">Win<br/>Sustainably</span>
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
              Page 9 of 14
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

const updatedContent = content.slice(0, splitIndex) + page9Code + '\n' + content.slice(splitIndex);

fs.writeFileSync('src/components/PrintDossier.tsx', updatedContent, 'utf8');
console.log('Successfully added PAGE 9.');
