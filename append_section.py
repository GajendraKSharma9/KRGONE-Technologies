import re

with open("src/App.tsx", "r") as f:
    content = f.read()

# Replace the last </div>\n    </div>\n  );\n} with the new section and then the closing tags

new_section = """
      {/* INTAKE PORTAL SECTION */}
      <section id="assessment-intake" className="bg-slate-50 py-16 px-4 md:px-8 font-sans min-h-screen flex items-center justify-center">
        <div className="max-w-6xl w-full bg-white border border-slate-200/80 rounded-[24px] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column */}
          <div className="lg:col-span-4 bg-[#0a1128] text-white p-8 flex flex-col justify-between relative">
            <div>
              <div className="text-[9px] font-bold tracking-widest text-[#d4af37] uppercase font-mono">DIAGNOSTIC TRACKING</div>
              <h3 className="text-xl font-black mt-2 tracking-tight">Your Growth Score Strategy</h3>
              
              <ul className="mt-8 space-y-3">
                {[
                  "Vision", 
                  "Revenue", 
                  "Velocity", 
                  "Finance", 
                  "Culture", 
                  "Infrastructure", 
                  "Automation"
                ].map((pillar, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center bg-slate-800 shrink-0">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                    </div>
                    <span className="text-slate-400 text-xs">{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-12">
              <div className="flex justify-between items-end mb-2">
                 <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase">Profile Completion</span>
                 <span className="text-xs font-bold text-[#d4af37]">33%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#d4af37] h-full w-1/3 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase font-mono">Step 1 of 3: Corporate Architecture</div>
              <h3 className="text-xl font-extrabold text-[#0f172a] mt-1 mb-6 tracking-tight">Tell us about your operational scale</h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Acme Corp" 
                    className="w-full border border-slate-200 focus:border-amber-400 focus:ring-0 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Industry Sector</label>
                  <select className="w-full border border-slate-200 focus:border-amber-400 focus:ring-0 rounded-xl px-4 py-3 text-sm appearance-none outline-none bg-white transition-colors cursor-pointer text-slate-600" defaultValue="">
                    <option value="" disabled>Select an industry...</option>
                    <option value="technology">Technology & SaaS</option>
                    <option value="finance">Financial Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Current Team Scale</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["1-10", "11-50", "51-200", "201+"].map((scale, i) => (
                      <div key={i} className="border border-slate-200 rounded-xl p-3 text-center text-xs font-bold text-[#0f172a] hover:border-amber-300 hover:bg-amber-50 cursor-pointer transition-all">
                        {scale}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Navigation Control Hub */}
            <div className="flex items-center justify-between pt-8 border-t border-slate-100 mt-8">
              <button className="flex items-center gap-2 text-slate-400 hover:text-slate-600 text-xs font-bold uppercase tracking-wider transition-colors">
                 <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button className="px-6 py-3 bg-[#d4af37] hover:bg-[#c29e2f] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition duration-200 shadow-md">
                 Next: Analyze Bottlenecks →
              </button>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
"""

content = re.sub(r'\n    </div>\n  \);\n}\n*\Z', new_section, content)

with open("src/App.tsx", "w") as f:
    f.write(content)
