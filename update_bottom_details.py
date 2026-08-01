import re

with open('src/AssessmentEngine.tsx', 'r') as f:
    content = f.read()

# Left Panel bottom
old_left_bottom = """            <div className="mt-4 pt-4 border-t border-slate-800/80 relative z-10 flex items-center justify-between opacity-70">
               <span className="text-[8px] font-mono text-slate-500">SYS.STATUS: ONLINE</span>
               <span className="text-[8px] font-mono text-emerald-500 drop-shadow-[0_0_2px_#10b981]">SYNCED</span>
            </div>"""

new_left_bottom = """            <div className="mt-4 pt-4 border-t border-slate-800/80 relative z-10 flex flex-col gap-2 opacity-80">
               <div className="flex items-center justify-between">
                 <span className="text-[8px] font-mono text-slate-400">SYS.STATUS: ONLINE</span>
                 <span className="text-[8px] font-mono text-emerald-400 drop-shadow-[0_0_2px_#10b981]">SYNCED</span>
               </div>
               <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden shadow-inner">
                 <div className="bg-amber-500/50 h-full w-full animate-[pulse_3s_ease-in-out_infinite]"></div>
               </div>
               <span className="text-[7px] text-slate-500 font-mono text-center tracking-widest mt-1">KRG ONE AUDIT ENGINE V1.0</span>
            </div>"""

content = content.replace(old_left_bottom, new_left_bottom)

# Right Panel bottom
old_right_bottom = """            {/* Terminal decoration */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 relative z-10 flex flex-col gap-1 overflow-hidden h-8">
                <span className="text-[7px] font-mono text-slate-600 leading-tight">{"0x" + Math.random().toString(16).substring(2, 8).toUpperCase()} - RECALIBRATING METRICS...</span>
                <span className="text-[7px] font-mono text-slate-600 leading-tight opacity-50">{"0x" + Math.random().toString(16).substring(2, 8).toUpperCase()} - SYNC NODE {(currentQuestionIdx % 7).toString().padStart(2, '0')}</span>
            </div>"""

new_right_bottom = """            {/* Terminal decoration */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 relative z-10 flex flex-col gap-1 overflow-hidden h-12">
                <span className="text-[7px] font-mono text-slate-400 leading-tight">{"0x" + Math.random().toString(16).substring(2, 8).toUpperCase()} - RECALIBRATING METRICS...</span>
                <span className="text-[7px] font-mono text-slate-500 leading-tight opacity-75">{"0x" + Math.random().toString(16).substring(2, 8).toUpperCase()} - SYNC NODE {(currentQuestionIdx % 7).toString().padStart(2, '0')}</span>
                <span className="text-[7px] font-mono text-[#d4af37] leading-tight opacity-100 animate-pulse mt-0.5">STREAMING TELEMETRY TO DASHBOARD...</span>
            </div>"""

content = content.replace(old_right_bottom, new_right_bottom)

with open('src/AssessmentEngine.tsx', 'w') as f:
    f.write(content)

