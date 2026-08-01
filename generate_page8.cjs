const fs = require('fs');

const page8Code = `
      {/* PAGE 8: FINANCIAL SNAPSHOT & INSIGHTS */}
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
        <div className="mb-3">
          <h2 className="text-[24pt] font-black text-[#1e3a8a] uppercase tracking-wide leading-tight">8. FINANCIAL SNAPSHOT & INSIGHTS</h2>
          <p className="text-[10pt] text-slate-600 mt-1">A high-level view of your financial performance and key financial indicators.</p>
        </div>

        {/* First Row: Summary & Ratios */}
        <div className="flex gap-4 mb-3">
          
          {/* Left Col: Summary & Chart */}
          <div className="w-[50%] flex flex-col gap-3">
            
            {/* Table 1: FINANCIAL PERFORMANCE SUMMARY */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
              <div className="bg-slate-50 py-2 text-center border-b border-slate-200">
                <span className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide">FINANCIAL PERFORMANCE SUMMARY</span>
              </div>
              <div>
                <div className="flex bg-[#0f5f59] text-white text-[7.5pt] font-bold">
                  <div className="flex-[2] py-2 px-3 border-r border-[#0d9488]/30">Particulars (₹ Lakhs)</div>
                  <div className="flex-1 py-2 px-1 text-center border-r border-[#0d9488]/30">FY 2023</div>
                  <div className="flex-1 py-2 px-1 text-center border-r border-[#0d9488]/30">FY 2024</div>
                  <div className="flex-1 py-2 px-1 text-center border-r border-[#0d9488]/30">FY 2025<br/><span className="font-normal text-[6.5pt]">(YTD)</span></div>
                  <div className="flex-1 py-2 px-1 text-center">Trend</div>
                </div>
                
                {[
                  { name: 'Total Revenue', v1: '1,250.0', v2: '1,575.0', v3: '1,325.0', tr: 'up', bold: true },
                  { name: 'Gross Profit', v1: '375.0', v2: '457.5', v3: '387.0', tr: 'up', bold: true },
                  { name: 'Gross Profit Margin (%)', v1: '30.0%', v2: '29.0%', v3: '29.2%', tr: 'right', italic: true, indent: true },
                  { name: 'EBITDA', v1: '187.5', v2: '236.3', v3: '208.0', tr: 'up', bold: true },
                  { name: 'EBITDA Margin (%)', v1: '15.0%', v2: '15.0%', v3: '15.7%', tr: 'right', italic: true, indent: true },
                  { name: 'Net Profit', v1: '112.5', v2: '141.8', v3: '124.5', tr: 'up', bold: true },
                  { name: 'Net Profit Margin (%)', v1: '9.0%', v2: '9.0%', v3: '9.4%', tr: 'right', italic: true, indent: true },
                  { name: 'Operating Cash Flow', v1: '165.0', v2: '198.0', v3: '172.0', tr: 'up', bold: true }
                ].map((row, idx) => (
                  <div key={idx} className={\`flex text-[7.5pt] \${idx !== 7 ? 'border-b border-slate-100' : ''}\`}>
                    <div className={\`flex-[2] py-2 px-3 border-r border-slate-100 \${row.bold ? 'font-bold text-[#0f172a]' : 'text-slate-700'} \${row.italic ? 'italic' : ''} \${row.indent ? 'pl-6' : ''}\`}>{row.name}</div>
                    <div className="flex-1 py-2 px-1 text-center border-r border-slate-100">{row.v1}</div>
                    <div className="flex-1 py-2 px-1 text-center border-r border-slate-100">{row.v2}</div>
                    <div className="flex-1 py-2 px-1 text-center border-r border-slate-100">{row.v3}</div>
                    <div className="flex-1 py-2 px-1 text-center flex items-center justify-center">
                      {row.tr === 'up' ? <ArrowUp className="w-3.5 h-3.5 text-emerald-600"/> : <ArrowRight className="w-3.5 h-3.5 text-orange-500"/>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* REVENUE & PROFIT TREND CHART */}
            <div className="border border-slate-200 rounded-xl bg-white p-3 flex flex-col items-center h-[240px]">
              <h3 className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide text-center">REVENUE & PROFIT TREND <span className="text-slate-500 normal-case font-normal">(₹ Lakhs)</span></h3>
              <div className="flex items-center justify-center gap-6 mt-1 mb-2 text-[7pt]">
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-[#0f5f59]"></div><span className="text-slate-600">Total Revenue</span></div>
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-[#15803d]"></div><span className="text-slate-600">Net Profit</span></div>
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-orange-500 rounded-full"></div><span className="text-slate-600">Net Profit Margin (%)</span></div>
              </div>
              <div className="w-full flex-1 relative text-[7pt]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={[
                    { name: 'FY 2023', rev: 1250, np: 112.5, margin: 9.0 },
                    { name: 'FY 2024', rev: 1575, np: 141.8, margin: 9.0 },
                    { name: 'FY 2025 (YTD)', rev: 1325, np: 124.5, margin: 9.4 }
                  ]} margin={{ top: 15, right: -15, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 8, fill: '#64748b', fontWeight: 600 }} dy={5} />
                    <YAxis yAxisId="left" type="number" domain={[0, 2000]} ticks={[0, 400, 800, 1200, 1600, 2000]} axisLine={false} tickLine={false} tick={{ fontSize: 8, fill: '#64748b' }} />
                    <YAxis yAxisId="right" orientation="right" type="number" domain={[0, 20]} ticks={[0, 5, 10, 15, 20]} axisLine={false} tickLine={false} tick={{ fontSize: 8, fill: '#64748b' }} tickFormatter={(val) => \`\${val}%\`} />
                    
                    <Bar yAxisId="left" dataKey="rev" fill="#0f5f59" barSize={32} radius={[2, 2, 0, 0]} />
                    <Bar yAxisId="left" dataKey="np" fill="#15803d" barSize={32} radius={[2, 2, 0, 0]} />
                    <Line yAxisId="right" type="linear" dataKey="margin" stroke="#f97316" strokeWidth={2} dot={{ r: 3, fill: '#f97316', strokeWidth: 0 }} activeDot={{ r: 5 }} />
                  </ComposedChart>
                </ResponsiveContainer>
                {/* Labels on top of bars, manual overlay for simplicity */}
                <div className="absolute inset-0 pointer-events-none text-[6.5pt] font-bold text-[#0f172a]">
                  <div className="absolute top-[32%] left-[12%]">1,250.0</div>
                  <div className="absolute top-[82%] left-[21%] text-slate-700">112.5</div>
                  <div className="absolute top-[58%] left-[23%] text-orange-600 bg-white/70 px-0.5 rounded">9.0%</div>
                  
                  <div className="absolute top-[18%] left-[45%]">1,575.0</div>
                  <div className="absolute top-[80%] left-[54%] text-slate-700">141.8</div>
                  <div className="absolute top-[58%] left-[56%] text-orange-600 bg-white/70 px-0.5 rounded">9.0%</div>
                  
                  <div className="absolute top-[28%] left-[78%]">1,325.0</div>
                  <div className="absolute top-[82%] left-[87%] text-slate-700">124.5</div>
                  <div className="absolute top-[56%] left-[89%] text-orange-600 bg-white/70 px-0.5 rounded">9.4%</div>
                </div>
              </div>
              <div className="w-full mt-2 text-[6pt] text-slate-500">Note: Financials are based on information provided by the business.</div>
            </div>

          </div>
          
          {/* Right Col: Ratios & Waterfall */}
          <div className="w-[50%] flex flex-col gap-3">
            
            {/* Table 2: KEY FINANCIAL RATIOS */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
              <div className="bg-slate-50 py-2 text-center border-b border-slate-200">
                <span className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide">KEY FINANCIAL RATIOS</span>
              </div>
              <div>
                <div className="flex bg-slate-50 text-slate-700 text-[7.5pt] font-bold border-b border-slate-200">
                  <div className="flex-[2.5] py-2 px-3 border-r border-slate-200">Ratio</div>
                  <div className="flex-1 py-2 px-1 text-center border-r border-slate-200">FY 2023</div>
                  <div className="flex-1 py-2 px-1 text-center border-r border-slate-200">FY 2024</div>
                  <div className="flex-1 py-2 px-1 text-center border-r border-slate-200">FY 2025<br/><span className="font-normal text-[6.5pt]">(YTD)</span></div>
                  <div className="flex-1 py-2 px-1 text-center border-r border-slate-200">Benchmark</div>
                  <div className="w-[40px] py-2 px-1 text-center">Status</div>
                </div>
                
                {[
                  { name: 'Gross Profit Margin (%)', v1: '30.0%', v2: '29.0%', v3: '29.2%', bench: '20%+', st: 'check' },
                  { name: 'EBITDA Margin (%)', v1: '15.0%', v2: '15.0%', v3: '15.7%', bench: '12%+', st: 'check' },
                  { name: 'Net Profit Margin (%)', v1: '9.0%', v2: '9.0%', v3: '9.4%', bench: '8%+', st: 'check' },
                  { name: 'Current Ratio (x)', v1: '1.65', v2: '1.72', v3: '1.68', bench: '1.5+', st: 'check' },
                  { name: 'Debt to Equity (x)', v1: '0.42', v2: '0.38', v3: '0.40', bench: '1.0 or less', st: 'check' },
                  { name: 'Return on Capital Employed (%)', v1: '16.2%', v2: '17.1%', v3: '16.8%', bench: '15%+', st: 'check' },
                  { name: 'Inventory Turnover (x)', v1: '5.2', v2: '5.6', v3: '5.4', bench: '4.0+', st: 'check' },
                  { name: 'Receivables Days', v1: '48', v2: '44', v3: '46', bench: '45 or less', st: 'minus' },
                  { name: 'Payables Days', v1: '32', v2: '34', v3: '32', bench: '30 - 45', st: 'check' }
                ].map((row, idx) => (
                  <div key={idx} className={\`flex text-[7.5pt] \${idx !== 8 ? 'border-b border-slate-100' : ''}\`}>
                    <div className="flex-[2.5] py-2 px-3 border-r border-slate-100 font-medium text-[#0f172a]">{row.name}</div>
                    <div className="flex-1 py-2 px-1 text-center border-r border-slate-100">{row.v1}</div>
                    <div className="flex-1 py-2 px-1 text-center border-r border-slate-100">{row.v2}</div>
                    <div className="flex-1 py-2 px-1 text-center border-r border-slate-100">{row.v3}</div>
                    <div className="flex-1 py-2 px-1 text-center border-r border-slate-100 text-slate-600">{row.bench}</div>
                    <div className="w-[40px] py-2 px-1 flex items-center justify-center">
                      {row.st === 'check' ? (
                        <div className="w-4 h-4 rounded-full bg-emerald-600 flex items-center justify-center"><Check className="w-3 h-3 text-white"/></div>
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center"><Minus className="w-3 h-3 text-white"/></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CASH FLOW SNAPSHOT */}
            <div className="border border-slate-200 rounded-xl bg-white p-3 h-[200px] flex flex-col">
              <h3 className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide text-center mb-4">CASH FLOW SNAPSHOT <span className="text-slate-500 normal-case font-normal">(₹ Lakhs)</span></h3>
              
              <div className="flex-1 flex w-full">
                {/* Custom Waterfall Chart */}
                <div className="w-[70%] h-full flex flex-col relative pb-4 pr-2">
                  {/* Y Axis Labels */}
                  <div className="absolute left-0 top-0 bottom-4 w-6 flex flex-col justify-between text-[6.5pt] text-slate-500">
                    <span>250</span><span>200</span><span>150</span><span>100</span><span>50</span><span>0</span>
                  </div>
                  {/* Grid Lines */}
                  <div className="absolute left-8 right-0 top-1 bottom-4 border-l border-b border-slate-300">
                    <div className="border-t border-slate-100 w-full absolute top-[20%]"></div>
                    <div className="border-t border-slate-100 w-full absolute top-[40%]"></div>
                    <div className="border-t border-slate-100 w-full absolute top-[60%]"></div>
                    <div className="border-t border-slate-100 w-full absolute top-[80%]"></div>
                  </div>
                  
                  {/* Bars */}
                  <div className="absolute left-8 right-0 top-1 bottom-4 flex items-end justify-around px-2">
                    
                    {/* Bar 1 */}
                    <div className="relative w-8 h-[68.8%] bg-[#0f5f59] flex flex-col justify-start">
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[6.5pt] font-bold text-[#0f172a]">172.0</span>
                    </div>
                    {/* Connector 1 to 2 */}
                    <div className="absolute left-[calc(12.5%+1rem)] w-[25%] h-px border-t border-dashed border-slate-400" style={{bottom: '68.8%'}}></div>
                    
                    {/* Bar 2 */}
                    <div className="relative w-8 h-[19.2%] bg-red-600 self-start mt-[31.2%]">
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[6.5pt] font-bold text-[#0f172a]">-48.0</span>
                    </div>
                    {/* Connector 2 to 3 */}
                    <div className="absolute left-[calc(37.5%+1rem)] w-[25%] h-px border-t border-dashed border-slate-400" style={{bottom: '49.6%'}}></div>

                    {/* Bar 3 */}
                    <div className="relative w-8 h-[14%] bg-red-600 self-start mt-[50.4%]">
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[6.5pt] font-bold text-[#0f172a]">-35.0</span>
                    </div>
                    {/* Connector 3 to 4 */}
                    <div className="absolute left-[calc(62.5%+1rem)] w-[25%] h-px border-t border-dashed border-slate-400" style={{bottom: '35.6%'}}></div>

                    {/* Bar 4 */}
                    <div className="relative w-8 h-[35.6%] bg-[#0f5f59]">
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[6.5pt] font-bold text-[#0f172a]">89.0</span>
                    </div>

                  </div>
                  
                  {/* X Axis Labels */}
                  <div className="absolute left-8 right-0 -bottom-1 flex justify-around text-[6.5pt] text-slate-700 font-medium text-center">
                    <span className="w-12 leading-tight mt-1">Operating<br/>Cash Flow</span>
                    <span className="w-12 leading-tight mt-1">Investing<br/>Cash Flow</span>
                    <span className="w-12 leading-tight mt-1">Financing<br/>Cash Flow</span>
                    <span className="w-12 leading-tight mt-1">Net Cash<br/>Flow</span>
                  </div>
                </div>
                
                {/* Callout Box */}
                <div className="w-[30%] flex flex-col items-center justify-center p-2 bg-slate-50 border border-slate-200 rounded-lg ml-2">
                  <div className="w-10 h-10 rounded-full bg-[#0f5f59] flex items-center justify-center mb-2">
                    <Banknote className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-[6.5pt] text-center text-slate-700 leading-snug font-medium">Positive operating cash flow indicates healthy core business performance and ability to generate cash consistently.</p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Second Row: Insights & Opportunities */}
        <div className="flex gap-4 mb-2 flex-1">
          
          {/* Left Col: Insights */}
          <div className="w-[50%] flex flex-col">
            <h3 className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide text-center border-b-[1.5px] border-slate-200 pb-2 mb-3">FINANCIAL INSIGHTS</h3>
            <div className="flex flex-col gap-3 flex-1 justify-between">
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <TrendingUp className="w-5 h-5 text-white"/>
                </div>
                <div>
                  <h4 className="text-[9.5pt] font-bold text-emerald-800">Revenue Growth</h4>
                  <p className="text-[7.5pt] text-slate-700 leading-snug mt-0.5">Revenue has shown consistent growth over the last two years, indicating strong market demand and business traction.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <IndianRupee className="w-5 h-5 text-white"/>
                </div>
                <div>
                  <h4 className="text-[9.5pt] font-bold text-emerald-800">Healthy Profitability</h4>
                  <p className="text-[7.5pt] text-slate-700 leading-snug mt-0.5">Gross profit and net profit margins are healthy and above industry benchmarks, reflecting efficient cost management.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Banknote className="w-5 h-5 text-white"/>
                </div>
                <div>
                  <h4 className="text-[9.5pt] font-bold text-emerald-800">Strong Cash Generation</h4>
                  <p className="text-[7.5pt] text-slate-700 leading-snug mt-0.5">Positive operating cash flow demonstrates the business's ability to convert profits into cash effectively.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <PieChart className="w-5 h-5 text-white"/>
                </div>
                <div>
                  <h4 className="text-[9.5pt] font-bold text-orange-600">Working Capital Management</h4>
                  <p className="text-[7.5pt] text-slate-700 leading-snug mt-0.5">Receivables days are slightly higher than benchmark. Focus on faster collections to improve working capital cycle.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Scale className="w-5 h-5 text-white"/>
                </div>
                <div>
                  <h4 className="text-[9.5pt] font-bold text-emerald-800">Low Leverage</h4>
                  <p className="text-[7.5pt] text-slate-700 leading-snug mt-0.5">Debt to equity ratio is low and within a safe range, indicating low financial risk and strong solvency position.</p>
                </div>
              </div>

            </div>
          </div>
          
          {/* Right Col: Opportunities */}
          <div className="w-[50%] flex flex-col">
            <h3 className="text-[9pt] font-bold text-[#0f172a] uppercase tracking-wide text-center border-b-[1.5px] border-slate-200 pb-2 mb-3">TOP FINANCIAL IMPROVEMENT OPPORTUNITIES</h3>
            <div className="flex flex-col gap-3 flex-1 justify-between">
              
              <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="w-9 h-9 bg-[#0f5f59] rounded-md flex items-center justify-center shrink-0 text-white font-bold text-[11pt]">1</div>
                <div className="flex-1">
                  <h4 className="text-[9pt] font-bold text-[#0f5f59]">Improve Receivables Cycle</h4>
                  <p className="text-[7.5pt] text-slate-600 leading-snug">Implement collection process, credit control and follow-up system to reduce receivables days.</p>
                </div>
                <div className="flex flex-col items-center justify-center shrink-0 min-w-[50px] border-l border-slate-200 pl-2">
                  <span className="text-[6.5pt] text-slate-500">Impact</span>
                  <span className="text-[8.5pt] font-bold text-emerald-600">High</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="w-9 h-9 bg-[#0f5f59] rounded-md flex items-center justify-center shrink-0 text-white font-bold text-[11pt]">2</div>
                <div className="flex-1">
                  <h4 className="text-[9pt] font-bold text-[#0f5f59]">Optimize Operating Costs</h4>
                  <p className="text-[7.5pt] text-slate-600 leading-snug">Review cost structure and reduce non-value adding expenses.</p>
                </div>
                <div className="flex flex-col items-center justify-center shrink-0 min-w-[50px] border-l border-slate-200 pl-2">
                  <span className="text-[6.5pt] text-slate-500">Impact</span>
                  <span className="text-[8.5pt] font-bold text-emerald-600">High</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="w-9 h-9 bg-orange-500 rounded-md flex items-center justify-center shrink-0 text-white font-bold text-[11pt]">3</div>
                <div className="flex-1">
                  <h4 className="text-[9pt] font-bold text-orange-600">Increase Inventory Efficiency</h4>
                  <p className="text-[7.5pt] text-slate-600 leading-snug">Optimize inventory levels and improve turnover through better planning.</p>
                </div>
                <div className="flex flex-col items-center justify-center shrink-0 min-w-[50px] border-l border-slate-200 pl-2">
                  <span className="text-[6.5pt] text-slate-500">Impact</span>
                  <span className="text-[8.5pt] font-bold text-orange-500">Medium</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="w-9 h-9 bg-[#1e3a8a] rounded-md flex items-center justify-center shrink-0 text-white font-bold text-[11pt]">4</div>
                <div className="flex-1">
                  <h4 className="text-[9pt] font-bold text-[#1e3a8a]">Increase High Margin Offerings</h4>
                  <p className="text-[7.5pt] text-slate-600 leading-snug">Focus on high margin products/services to improve overall profitability.</p>
                </div>
                <div className="flex flex-col items-center justify-center shrink-0 min-w-[50px] border-l border-slate-200 pl-2">
                  <span className="text-[6.5pt] text-slate-500">Impact</span>
                  <span className="text-[8.5pt] font-bold text-orange-500">Medium</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-purple-800 rounded-md flex items-center justify-center shrink-0 text-white font-bold text-[11pt]">5</div>
                <div className="flex-1">
                  <h4 className="text-[9pt] font-bold text-purple-800">Strengthen Pricing Strategy</h4>
                  <p className="text-[7.5pt] text-slate-600 leading-snug">Review pricing and value proposition to improve margin and competitiveness.</p>
                </div>
                <div className="flex flex-col items-center justify-center shrink-0 min-w-[50px] border-l border-slate-200 pl-2">
                  <span className="text-[6.5pt] text-slate-500">Impact</span>
                  <span className="text-[8.5pt] font-bold text-purple-700">Low</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Quote Banner */}
        <div className="w-full bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between px-6 py-3 mt-1 shadow-sm">
           <div className="flex items-center gap-3">
              <span className="text-[32pt] text-[#0d9488] font-serif leading-none mt-2">“</span>
              <p className="text-[9pt] text-[#0f172a] font-bold mt-1">Numbers tell the story. Insights create the strategy. Action drives the growth.</p>
           </div>
           <p className="text-[8pt] text-[#0d9488] font-bold uppercase">— KRGONE Advisory Team</p>
        </div>

        {/* Dark Blue Info Bar */}
        <div className="w-full bg-[#0f172a] rounded-xl flex items-stretch overflow-hidden mt-3 text-white">
          <div className="flex flex-col items-center justify-center text-center px-4 py-3 border-r border-slate-700 flex-1">
             <Calendar className="w-5 h-5 mb-1.5 text-slate-300" strokeWidth={1.5}/>
             <span className="font-medium text-[6.5pt] text-slate-300 mb-0.5">Assessment Date</span>
             <span className="font-bold text-[7.5pt]">23 July 2026</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4 py-3 border-r border-slate-700 flex-1">
             <IdCard className="w-5 h-5 mb-1.5 text-slate-300" strokeWidth={1.5}/>
             <span className="font-medium text-[6.5pt] text-slate-300 mb-0.5">Assessment ID</span>
             <span className="font-bold text-[7.5pt]">KRG-2026-000124</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4 py-3 border-r border-slate-700 flex-1">
             <Calendar className="w-5 h-5 mb-1.5 text-slate-300" strokeWidth={1.5}/>
             <span className="font-medium text-[6.5pt] text-slate-300 mb-0.5">Next Review Date</span>
             <span className="font-bold text-[7.5pt]">23 October 2026</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4 py-3 border-r border-slate-700 flex-1">
             <User className="w-5 h-5 mb-1.5 text-slate-300" strokeWidth={1.5}/>
             <span className="font-medium text-[6.5pt] text-slate-300 mb-0.5">Prepared By</span>
             <span className="font-bold text-[7.5pt] text-center leading-tight">KRGONE Advisory Team</span>
          </div>
          <div className="flex flex-col justify-center px-4 py-3 flex-[1.5] bg-[#1e293b]">
             <span className="font-medium text-[6.5pt] text-slate-300 mb-1">Data Sources</span>
             <ul className="text-[6.5pt] space-y-0.5 list-disc pl-3">
               <li>Information provided by the business</li>
               <li>Management discussion</li>
               <li>Financial statements (as provided)</li>
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
              Page 8 of 14
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

const updatedContent = content.slice(0, splitIndex) + page8Code + '\n' + content.slice(splitIndex);

fs.writeFileSync('src/components/PrintDossier.tsx', updatedContent, 'utf8');
console.log('Successfully added PAGE 8.');
