import re

with open('src/AssessmentEngine.tsx', 'r') as f:
    content = f.read()

replacement = """          <div className="text-center pb-8 border-b border-slate-100">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Assessment Completed Successfully</h1>
            <p className="text-slate-500 font-medium mt-3">Thank you for completing the KRG ONE Business Growth Assessment™.</p>
          </div>"""

target = """          <div className="text-center pb-8 border-b border-slate-100 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent blur-3xl -z-10 rounded-full scale-150"></div>
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-[0_0_25px_rgba(16,185,129,0.3)] animate-bounce relative">
              <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
              <div className="w-16 h-16 bg-gradient-to-tr from-emerald-600 to-emerald-400 rounded-full flex items-center justify-center shadow-inner relative z-10">
                <CheckCircle2 className="w-10 h-10 text-white drop-shadow-md" />
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black uppercase tracking-widest rounded-full mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-sm">
              <PartyPopper className="w-4 h-4" />
              Congratulations
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight animate-in fade-in zoom-in-95 duration-700 delay-150">
              Assessment Completed <br className="hidden md:block" /> Successfully
            </h1>
            <p className="text-slate-500 font-medium mt-4 text-sm md:text-base max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
              Thank you for completing the KRG ONE Business Growth Assessment™.
            </p>
          </div>"""

content = content.replace(target, replacement)

with open('src/AssessmentEngine.tsx', 'w') as f:
    f.write(content)
