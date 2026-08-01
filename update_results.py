import re

with open('src/AssessmentEngine.tsx', 'r') as f:
    content = f.read()

# Using regex to match from `{/* WINDOW 3: DIAGNOSTIC SCORE REPORT */}` to `{/* WINDOW 4: AUTOMATIC AI PLAN PORTAL */}`
pattern = r"\{/\* WINDOW 3: DIAGNOSTIC SCORE REPORT \*/\}.*?(?=\{/\* WINDOW 4: AUTOMATIC AI PLAN PORTAL \*/\})"
new_results = """{/* WINDOW 3: DIAGNOSTIC SCORE REPORT */}
      {view === 'RESULTS' && (
        <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-[32px] p-8 md:p-12 shadow-2xl mt-4">
          <div className="text-center pb-8 border-b border-slate-100">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Assessment Completed Successfully</h1>
            <p className="text-slate-500 font-medium mt-3">Thank you for completing the KRG ONE Business Growth Assessment™.</p>
          </div>

          <div className="py-8">
            <h2 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              Your responses have been successfully analysed.
            </h2>
            <p className="text-sm font-semibold text-slate-600 mb-6">Our Growth OS™ is preparing your personalised Business Growth Plan based on:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {['Your Business Information', 'Your Business Challenges', 'Your Business Goals', '21 Strategic Assessment Responses'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 transition-all duration-300 hover:border-slate-300">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${analysisStep > i ? 'bg-emerald-500 text-white shadow-[0_0_8px_#10b981]' : 'bg-slate-200 text-slate-400'}`}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className={`text-sm font-bold ${analysisStep > i ? 'text-slate-800' : 'text-slate-500'}`}>{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#0a1128] rounded-2xl p-8 text-white relative overflow-hidden border-t-2 border-l-2 border-b-4 border-r-4 border-t-slate-700/50 border-l-slate-700/50 border-b-black border-r-black shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 blur-[60px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
              <h3 className="text-sm font-black text-[#d4af37] uppercase tracking-widest mb-6 border-b border-slate-800 pb-3 relative z-10">What You'll Receive</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 relative z-10">
                {[
                  'Business Growth Score™',
                  'Growth Maturity Level™',
                  '7-Pillar Analysis™',
                  'Growth Priority Matrix™',
                  'Executive Summary™',
                  '90-Day Business Growth Roadmap™',
                  'Top Growth Recommendations™'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0" />
                    <span className="text-sm font-bold text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-slate-50 border border-slate-200 p-6 rounded-2xl flex gap-4">
              <Lock className="w-8 h-8 text-slate-700 shrink-0" />
              <div>
                <h4 className="text-sm font-black text-slate-900 mb-2 uppercase tracking-wide">Confidentiality Commitment</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">Your assessment is completely confidential and protected under KRG ONE's professional Confidentiality Commitment.</p>
                <p className="text-xs text-slate-600 leading-relaxed font-medium mt-2">Your business information is never shared with any third party.</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col items-center min-h-[120px] justify-center">
            {analysisStep < 5 ? (
              <div className="flex flex-col items-center justify-center py-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse">
                  {analysisStep === 0 && "Analysing Leadership..."}
                  {analysisStep === 1 && "Analysing Sales..."}
                  {analysisStep === 2 && "Analysing Operations..."}
                  {analysisStep >= 3 && "Preparing Growth Plan..."}
                </span>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <button 
                  type="button" 
                  onClick={() => setView('GROWTH_PLAN')} 
                  className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#d4af37] to-[#b38f25] hover:brightness-110 text-white font-black text-sm uppercase tracking-widest rounded-xl shadow-[4px_6px_15px_rgba(212,175,55,0.4)] border-t-2 border-l-2 border-b-4 border-r-4 border-t-amber-200 border-l-amber-200 border-b-amber-700 border-r-amber-700 transition-all duration-200 transform hover:-translate-y-1 active:translate-y-1"
                >
                  Continue to Business Growth Plan →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      """

content = re.sub(pattern, new_results, content, flags=re.DOTALL)

with open('src/AssessmentEngine.tsx', 'w') as f:
    f.write(content)
