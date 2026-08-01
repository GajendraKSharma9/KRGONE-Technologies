const fs = require('fs');

const page10Code = `
      {/* PAGE 10: CUSTOMER & STAKEHOLDER INSIGHTS */}
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
          <h2 className="text-[24pt] font-black text-[#1e3a8a] uppercase tracking-wide leading-tight">10. CUSTOMER & STAKEHOLDER INSIGHTS</h2>
          <p className="text-[10pt] text-slate-600 mt-1">Understanding customer perception and stakeholder satisfaction to drive better business outcomes.</p>
        </div>

        {/* Row 1: Satisfaction & Feedback */}
        <div className="flex gap-4 mb-3 h-[250px]">
          {/* Left: Customer Satisfaction Summary */}
          <div className="w-[45%] border border-slate-200 rounded-xl bg-white flex flex-col h-full overflow-hidden">
            <div className="bg-[#0f5f59] py-2 text-center">
              <span className="text-[9pt] font-bold text-white uppercase tracking-wide">CUSTOMER SATISFACTION SUMMARY</span>
            </div>
            <div className="flex flex-1 p-4 items-center">
              <div className="w-1/2 flex flex-col items-center justify-center border-r border-slate-100 pr-2 h-full">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                    <path className="text-[#0f5f59]" strokeDasharray="72, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[24pt] font-black text-[#0f172a] leading-none">72%</span>
                    <span className="text-[6.5pt] text-slate-500 font-medium text-center leading-tight mt-1">Overall Satisfaction<br/>Score</span>
                  </div>
                </div>
                <div className="mt-3 font-bold text-emerald-600 text-[9pt]">Good</div>
                <p className="text-[7pt] text-slate-600 text-center leading-snug mt-4 px-2">Your customers are generally satisfied with your offerings. Focus on improving experience consistency and engagement.</p>
              </div>
              <div className="w-1/2 pl-4 flex flex-col justify-between h-full py-1">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <div className="w-6 h-6 rounded-full bg-[#0f5f59]/10 flex items-center justify-center"><Award className="w-3.5 h-3.5 text-[#0f5f59]"/></div>
                     <span className="text-[7.5pt] font-medium text-slate-700">Product / Service Quality</span>
                   </div>
                   <div className="flex items-center gap-2"><span className="text-[8pt] font-bold text-[#0f172a]">78%</span><span className="text-[7pt] text-emerald-600 font-bold">Good</span></div>
                </div>
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <div className="w-6 h-6 rounded-full bg-[#0f5f59]/10 flex items-center justify-center"><UserCircle className="w-3.5 h-3.5 text-[#0f5f59]"/></div>
                     <span className="text-[7.5pt] font-medium text-slate-700">Customer Support</span>
                   </div>
                   <div className="flex items-center gap-2"><span className="text-[8pt] font-bold text-[#0f172a]">70%</span><span className="text-[7pt] text-emerald-600 font-bold">Good</span></div>
                </div>
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <div className="w-6 h-6 rounded-full bg-[#0f5f59]/10 flex items-center justify-center"><RefreshCw className="w-3.5 h-3.5 text-[#0f5f59]"/></div>
                     <span className="text-[7.5pt] font-medium text-slate-700">Timely Delivery</span>
                   </div>
                   <div className="flex items-center gap-2"><span className="text-[8pt] font-bold text-[#0f172a]">75%</span><span className="text-[7pt] text-emerald-600 font-bold">Good</span></div>
                </div>
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <div className="w-6 h-6 rounded-full bg-[#0f5f59]/10 flex items-center justify-center"><IndianRupee className="w-3.5 h-3.5 text-[#0f5f59]"/></div>
                     <span className="text-[7.5pt] font-medium text-slate-700">Value for Money</span>
                   </div>
                   <div className="flex items-center gap-2"><span className="text-[8pt] font-bold text-[#0f172a]">68%</span><span className="text-[7pt] text-amber-500 font-bold">Average</span></div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                   <div className="flex items-center gap-2">
                     <div className="w-6 h-6 rounded-full bg-[#0f5f59] flex items-center justify-center"><RefreshCw className="w-3.5 h-3.5 text-white"/></div>
                     <span className="text-[7.5pt] font-bold text-slate-800">Overall Experience</span>
                   </div>
                   <div className="flex items-center gap-2"><span className="text-[8pt] font-bold text-[#0f172a]">72%</span><span className="text-[7pt] text-emerald-600 font-bold">Good</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Customer Feedback Highlights */}
          <div className="w-[55%] border border-slate-200 rounded-xl bg-white flex flex-col h-full overflow-hidden">
             <div className="bg-slate-50 py-2 text-center border-b border-slate-200">
              <span className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide">CUSTOMER FEEDBACK HIGHLIGHTS</span>
            </div>
            <div className="flex flex-1 p-4 gap-4">
               <div className="w-[55%] flex flex-col gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center">
                        <ThumbsUp className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-[8.5pt] font-bold text-emerald-800">What Customers Like</span>
                    </div>
                    <ul className="space-y-1.5 pl-8">
                       {["Good product/service quality", "Responsive and supportive team", "Meeting commitments on time", "Professional and reliable", "Strong technical expertise"].map((item, i) => (
                         <li key={i} className="flex items-start gap-1.5">
                           <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" strokeWidth={3}/>
                           <span className="text-[7.5pt] text-[#0f172a] leading-tight">{item}</span>
                         </li>
                       ))}
                    </ul>
                  </div>
                  <div className="w-full h-px bg-slate-200 border-dashed border-b"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                        <ThumbsDown className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-[8.5pt] font-bold text-red-700">Areas to Improve</span>
                    </div>
                    <ul className="space-y-1.5 pl-8">
                       {["Faster response time", "More proactive communication", "Better after-sales support", "Pricing competitiveness", "Digital experience and engagement"].map((item, i) => (
                         <li key={i} className="flex items-start gap-1.5">
                           <XCircle className="w-3 h-3 text-red-600 fill-white shrink-0 mt-0.5" strokeWidth={2.5}/>
                           <span className="text-[7.5pt] text-[#0f172a] leading-tight">{item}</span>
                         </li>
                       ))}
                    </ul>
                  </div>
               </div>
               
               <div className="w-[45%] bg-[#0f5f59]/5 rounded-xl border border-[#0f5f59]/20 p-4 relative flex flex-col">
                  <Quote className="w-8 h-8 text-[#0f5f59] opacity-30 mb-2" fill="currentColor"/>
                  <p className="text-[8pt] text-[#0f172a] italic leading-relaxed flex-1 font-medium">
                    "The quality of your product and the way your team supports us is commendable. If response time and communication can be improved, it will create an amazing experience."
                  </p>
                  <div className="text-right mt-2">
                    <span className="text-[7pt] font-bold text-[#0f5f59]">— Customer Feedback</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Row 2: Segments & NPS */}
        <div className="flex gap-4 mb-3 h-[220px]">
          {/* Left: Segment Analysis */}
          <div className="w-[50%] border border-slate-200 rounded-xl bg-white flex flex-col h-full overflow-hidden">
            <div className="bg-slate-50 py-2 text-center border-b border-slate-200">
              <span className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide">CUSTOMER SEGMENT ANALYSIS</span>
            </div>
            <div className="flex flex-1 p-3 items-center relative">
               <div className="w-[45%] flex justify-center">
                  <div className="relative w-36 h-36 rounded-full overflow-hidden flex items-center justify-center shadow-sm" style={{ background: 'conic-gradient(#0f5f59 0% 40%, #10b981 40% 65%, #f59e0b 65% 85%, #1e3a8a 85% 95%, #94a3b8 95% 100%)' }}>
                     {/* Labels on pie */}
                     <span className="absolute text-white font-bold text-[8pt] top-[40%] right-[20%]">40%</span>
                     <span className="absolute text-white font-bold text-[8pt] bottom-[20%] left-[30%]">25%</span>
                     <span className="absolute text-white font-bold text-[8pt] top-[45%] left-[10%]">20%</span>
                     <span className="absolute text-white font-bold text-[8pt] top-[15%] left-[25%]">10%</span>
                     <span className="absolute text-white font-bold text-[8pt] top-[10%] right-[35%]">5%</span>
                     {/* The line separators */}
                     <div className="absolute inset-0 bg-transparent rounded-full border border-white" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0)'}}></div>
                  </div>
               </div>
               
               <div className="w-[55%] flex flex-col pl-4">
                  <div className="flex border-b border-slate-200 pb-1 mb-2">
                     <span className="flex-1 text-[7.5pt] font-bold text-slate-800">Customer Segment</span>
                     <span className="text-[7.5pt] font-bold text-slate-800">Satisfaction Score</span>
                  </div>
                  <div className="space-y-3">
                     <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-[#0f5f59] rounded-sm"></div><span className="text-[7.5pt] text-slate-700">Existing Customers</span></div>
                        <span className="text-[7.5pt] font-bold text-emerald-600">74%</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-[#10b981] rounded-sm"></div><span className="text-[7.5pt] text-slate-700">New Customers</span></div>
                        <span className="text-[7.5pt] font-bold text-amber-500">68%</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-[#f59e0b] rounded-sm"></div><span className="text-[7.5pt] text-slate-700">Key Accounts</span></div>
                        <span className="text-[7.5pt] font-bold text-emerald-600">76%</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-[#1e3a8a] rounded-sm"></div><span className="text-[7.5pt] text-slate-700">Small & Medium Customers</span></div>
                        <span className="text-[7.5pt] font-bold text-emerald-600">70%</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-[#94a3b8] rounded-sm"></div><span className="text-[7.5pt] text-slate-700">Other Segments</span></div>
                        <span className="text-[7.5pt] font-bold text-amber-500">65%</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="bg-slate-50 p-2.5 mx-3 mb-3 rounded-lg flex gap-2 items-start">
               <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center border border-slate-200 shrink-0">
                  <Target className="w-3.5 h-3.5 text-[#0f5f59]"/>
               </div>
               <p className="text-[7pt] text-slate-700 leading-snug">Key Accounts and Existing Customers are highly satisfied.<br/>Focus on improving experience for New and Other Segments.</p>
            </div>
          </div>

          {/* Right: NPS */}
          <div className="w-[50%] border border-slate-200 rounded-xl bg-white flex flex-col h-full overflow-hidden">
            <div className="bg-slate-50 py-2 text-center border-b border-slate-200">
              <span className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide">NET PROMOTER SCORE (NPS)</span>
            </div>
            <div className="flex flex-1 p-3 items-center">
               <div className="w-1/2 flex flex-col items-center justify-center relative pt-4">
                  {/* Gauge SVG */}
                  <div className="relative w-40 h-20 overflow-hidden">
                     <svg viewBox="0 0 100 50" className="w-full h-full">
                        <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#e2e8f0" strokeWidth="15" />
                        <path d="M 10 50 A 40 40 0 0 1 30 15.35" fill="none" stroke="#ef4444" strokeWidth="15" />
                        <path d="M 30 15.35 A 40 40 0 0 1 65 11" fill="none" stroke="#f59e0b" strokeWidth="15" />
                        <path d="M 65 11 A 40 40 0 0 1 90 50" fill="none" stroke="#10b981" strokeWidth="15" />
                     </svg>
                     {/* Needle */}
                     <div className="absolute bottom-0 left-1/2 w-0.5 h-[35px] bg-[#0f172a] origin-bottom rounded-t-full z-10" style={{ transform: 'translateX(-50%) rotate(30deg)' }}></div>
                     <div className="absolute bottom-[-3px] left-1/2 w-2 h-2 rounded-full bg-[#0f172a] -translate-x-1/2 z-20"></div>
                  </div>
                  
                  <div className="w-full flex justify-between px-4 text-[7pt] text-slate-500 font-bold -mt-1">
                     <span>-100</span>
                     <span className="absolute top-[-10px] left-1/2 -translate-x-1/2">0</span>
                     <span>+100</span>
                  </div>
                  
                  <div className="mt-2 text-center">
                     <span className="text-[28pt] font-black text-[#0f172a] leading-none">32</span>
                     <div className="text-[9pt] font-bold text-emerald-600 mt-1">Good</div>
                  </div>
                  
                  <p className="text-[7pt] text-slate-600 text-center leading-snug mt-3 px-2">Your NPS score indicates that more customers are likely to recommend your business.</p>
               </div>
               
               <div className="w-1/2 pl-4 flex flex-col justify-center h-full">
                  <div className="space-y-4">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <Smile className="w-6 h-6 text-emerald-600"/>
                           <span className="text-[8pt] text-slate-700">Promoters (9-10)</span>
                        </div>
                        <span className="text-[9pt] font-bold text-emerald-600">44%</span>
                     </div>
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <Meh className="w-6 h-6 text-amber-500"/>
                           <span className="text-[8pt] text-slate-700">Passives (7-8)</span>
                        </div>
                        <span className="text-[9pt] font-bold text-amber-500">28%</span>
                     </div>
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <Frown className="w-6 h-6 text-red-600"/>
                           <span className="text-[8pt] text-slate-700">Detractors (0-6)</span>
                        </div>
                        <span className="text-[9pt] font-bold text-red-600">28%</span>
                     </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-slate-200 flex justify-between items-center">
                     <span className="text-[8.5pt] font-bold text-slate-800">NPS Score</span>
                     <span className="text-[12pt] font-black text-emerald-600">+32</span>
                  </div>
                  
                  <div className="bg-slate-50 p-2 mt-4 rounded-lg flex gap-2 items-start">
                     <Star className="w-4 h-4 text-[#0f5f59] fill-[#0f5f59] shrink-0 mt-0.5"/>
                     <p className="text-[7pt] text-slate-700 leading-snug">Focus on converting Passives to Promoters and addressing concerns of Detractors.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Row 3: Stakeholders & Retention */}
        <div className="flex gap-4 mb-3 h-[210px]">
          {/* Left: Stakeholder Insights */}
          <div className="w-[65%] border border-slate-200 rounded-xl bg-white flex flex-col h-full overflow-hidden">
             <div className="flex border-b border-slate-200 bg-slate-50">
               <div className="w-1/2 py-2 text-center border-r border-slate-200"><span className="text-[8.5pt] font-bold text-[#0f172a] uppercase tracking-wide">STAKEHOLDER INSIGHTS</span></div>
               <div className="w-1/2 py-2 text-center"><span className="text-[8.5pt] font-bold text-[#0f172a] uppercase tracking-wide">KEY TAKEAWAYS</span></div>
             </div>
             
             <div className="flex flex-1 items-stretch text-[7.5pt]">
                <div className="w-1/2 border-r border-slate-200 flex flex-col">
                   <div className="flex-1 flex items-center p-3 border-b border-slate-100 gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#1e3a8a] flex items-center justify-center shrink-0"><Users className="w-4 h-4 text-white"/></div>
                      <div className="flex-1">
                         <div className="font-bold text-[#0f172a] text-[8pt]">Employees</div>
                         <div className="text-[6.5pt] text-slate-600 leading-tight mt-0.5">Motivated team with good collaboration and commitment.</div>
                      </div>
                      <div className="font-bold text-emerald-600 text-[10pt]">75%</div>
                   </div>
                   <div className="flex-1 flex items-center p-3 border-b border-slate-100 gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center shrink-0"><TrendingUp className="w-4 h-4 text-white"/></div>
                      <div className="flex-1">
                         <div className="font-bold text-[#0f172a] text-[8pt]">Investors / Partners</div>
                         <div className="text-[6.5pt] text-slate-600 leading-tight mt-0.5">Confident in management capabilities and growth potential.</div>
                      </div>
                      <div className="font-bold text-emerald-600 text-[10pt]">72%</div>
                   </div>
                   <div className="flex-1 flex items-center p-3 border-b border-slate-100 gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0"><Rocket className="w-4 h-4 text-white"/></div>
                      <div className="flex-1">
                         <div className="font-bold text-[#0f172a] text-[8pt]">Suppliers</div>
                         <div className="text-[6.5pt] text-slate-600 leading-tight mt-0.5">Good relationships and timely payments.</div>
                      </div>
                      <div className="font-bold text-emerald-600 text-[10pt]">70%</div>
                   </div>
                   <div className="flex-1 flex items-center p-3 gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0f5f59] flex items-center justify-center shrink-0"><Building2 className="w-4 h-4 text-white"/></div>
                      <div className="flex-1">
                         <div className="font-bold text-[#0f172a] text-[8pt]">Lenders / Banks</div>
                         <div className="text-[6.5pt] text-slate-600 leading-tight mt-0.5">Healthy relationship with satisfactory compliance.</div>
                      </div>
                      <div className="font-bold text-emerald-600 text-[10pt]">74%</div>
                   </div>
                </div>
                
                <div className="w-1/2 flex flex-col">
                   <div className="flex-1 flex items-center p-3 border-b border-slate-100 gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0"><Check className="w-3.5 h-3.5 text-emerald-600"/></div>
                      <div className="text-[7.5pt] text-slate-700 leading-tight font-medium">Customer satisfaction is good with strong opportunities for improvement.</div>
                   </div>
                   <div className="flex-1 flex items-center p-3 border-b border-slate-100 gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0"><Check className="w-3.5 h-3.5 text-emerald-600"/></div>
                      <div className="text-[7.5pt] text-slate-700 leading-tight font-medium">Communication, response time and after-sales service need more focus.</div>
                   </div>
                   <div className="flex-1 flex items-center p-3 border-b border-slate-100 gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0"><Check className="w-3.5 h-3.5 text-emerald-600"/></div>
                      <div className="text-[7.5pt] text-slate-700 leading-tight font-medium">Employee and partner confidence is positive and supports business stability.</div>
                   </div>
                   <div className="flex-1 flex items-center p-3 gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0"><Check className="w-3.5 h-3.5 text-emerald-600"/></div>
                      <div className="text-[7.5pt] text-slate-700 leading-tight font-medium">Strengthen customer engagement and loyalty programs for long-term growth.</div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right: Retention */}
          <div className="w-[35%] border border-slate-200 rounded-xl bg-white flex flex-col h-full overflow-hidden">
             <div className="bg-slate-50 py-2 text-center border-b border-slate-200">
              <span className="text-[8.5pt] font-bold text-[#0f172a] uppercase tracking-wide">CUSTOMER RETENTION & LOYALTY</span>
            </div>
            <div className="flex-1 flex flex-col p-4">
               <span className="text-[7pt] font-bold text-center text-slate-700 mb-2">CUSTOMER RETENTION RATE</span>
               
               <div className="flex-1 w-full flex items-end justify-around relative px-2 mb-2">
                 {/* Chart Y Axis labels */}
                 <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[6pt] text-slate-400">
                   <span>100%</span>
                   <span>75%</span>
                   <span>50%</span>
                   <span>25%</span>
                   <span>0%</span>
                 </div>
                 {/* Chart horizontal lines */}
                 <div className="absolute left-6 right-0 top-1 border-b border-dashed border-slate-200"></div>
                 <div className="absolute left-6 right-0 top-1/4 border-b border-dashed border-slate-200"></div>
                 <div className="absolute left-6 right-0 top-2/4 border-b border-dashed border-slate-200"></div>
                 <div className="absolute left-6 right-0 top-3/4 border-b border-dashed border-slate-200"></div>
                 <div className="absolute left-6 right-0 bottom-0 border-b border-slate-300"></div>

                 {/* Bars */}
                 <div className="w-8 relative flex flex-col items-center justify-end h-full z-10 ml-6">
                   <span className="text-[7pt] font-bold text-[#0f172a] mb-1">68%</span>
                   <div className="w-full bg-[#0f5f59] rounded-t-sm" style={{height: '68%'}}></div>
                   <span className="text-[6pt] text-slate-600 mt-1 absolute -bottom-4">FY 2023</span>
                 </div>
                 <div className="w-8 relative flex flex-col items-center justify-end h-full z-10">
                   <span className="text-[7pt] font-bold text-[#0f172a] mb-1">72%</span>
                   <div className="w-full bg-[#0f5f59] rounded-t-sm" style={{height: '72%'}}></div>
                   <span className="text-[6pt] text-slate-600 mt-1 absolute -bottom-4">FY 2024</span>
                 </div>
                 <div className="w-8 relative flex flex-col items-center justify-end h-full z-10">
                   <span className="text-[7pt] font-bold text-[#0f172a] mb-1">74%</span>
                   <div className="w-full bg-[#0f5f59] rounded-t-sm" style={{height: '74%'}}></div>
                   <span className="text-[6pt] text-slate-600 mt-1 absolute -bottom-4 whitespace-nowrap">FY 2025<br/>(YTD)</span>
                 </div>
               </div>
               
               <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 mt-6 flex items-center justify-center gap-3">
                  <div className="flex items-center gap-2">
                     <RefreshCw className="w-6 h-6 text-[#0f5f59]"/>
                     <span className="text-[18pt] font-black text-[#0f5f59]">62%</span>
                  </div>
                  <div className="text-[6.5pt] text-slate-600 leading-snug font-medium max-w-[100px]">
                     Good repeat business indicates trust and long-term relationships.
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Row 4: Actions Banner */}
        <div className="w-full border border-slate-200 bg-white rounded-xl flex flex-col overflow-hidden mb-3">
           <div className="bg-slate-50 py-2 text-center border-b border-slate-200">
              <span className="text-[8.5pt] font-bold text-[#0f172a] uppercase tracking-wide">ACTIONS TO ENHANCE CUSTOMER & STAKEHOLDER VALUE</span>
           </div>
           <div className="flex items-center justify-around p-3 px-6">
              <div className="flex items-center gap-2 max-w-[180px]">
                 <div className="w-8 h-8 rounded-full bg-[#0f5f59] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-white" strokeWidth={2.5} />
                 </div>
                 <span className="text-[7pt] font-medium text-slate-700 leading-snug">Improve response time and proactive communication.</span>
              </div>
              <div className="flex items-center gap-2 max-w-[180px]">
                 <div className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center shrink-0">
                    <Handshake className="w-4 h-4 text-white" strokeWidth={2.5} />
                 </div>
                 <span className="text-[7pt] font-medium text-slate-700 leading-snug">Enhance after-sales support and resolve issues faster.</span>
              </div>
              <div className="flex items-center gap-2 max-w-[180px]">
                 <div className="w-8 h-8 rounded-full bg-[#f59e0b] flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4 text-white" strokeWidth={2.5} />
                 </div>
                 <span className="text-[7pt] font-medium text-slate-700 leading-snug">Implement customer loyalty and referral programs.</span>
              </div>
              <div className="flex items-center gap-2 max-w-[180px]">
                 <div className="w-8 h-8 rounded-full bg-[#1e3a8a] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-white" strokeWidth={2.5} />
                 </div>
                 <span className="text-[7pt] font-medium text-slate-700 leading-snug">Collect feedback regularly and act on key insights.</span>
              </div>
              <div className="flex items-center gap-2 max-w-[180px]">
                 <div className="w-8 h-8 rounded-full bg-[#1e3a8a] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4 text-white" strokeWidth={2.5} />
                 </div>
                 <span className="text-[7pt] font-medium text-slate-700 leading-snug">Continuously improve product/service quality and experience.</span>
              </div>
           </div>
        </div>

        {/* Footer Quote Banner */}
        <div className="w-full bg-[#0f172a] rounded-xl flex items-center justify-between px-6 py-3 overflow-hidden mt-auto mb-3">
            <div className="flex items-center gap-3">
               <span className="text-[36pt] text-[#0d9488] font-serif leading-none h-[25px] flex items-center overflow-hidden">“</span>
               <p className="text-[9pt] text-white font-medium">Happy customers are your greatest advocates and the foundation of sustainable growth.</p>
            </div>
            <span className="text-[8.5pt] text-[#0d9488] font-medium">— KRGONE Advisory Team</span>
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
               <li>Customer Surveys</li>
               <li>Stakeholder Feedback</li>
               <li>Internal Team Input</li>
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
              Page 10 of 14
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

const updatedContent = content.slice(0, splitIndex) + page10Code + '\n' + content.slice(splitIndex);

fs.writeFileSync('src/components/PrintDossier.tsx', updatedContent, 'utf8');
console.log('Successfully added PAGE 10.');
