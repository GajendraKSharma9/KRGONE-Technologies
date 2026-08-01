import re

with open('src/AssessmentEngine.tsx', 'r') as f:
    content = f.read()

# Left Panel
old_left = """          {/* Left Pillar Indicators */}
          <div className="lg:col-span-3 bg-[#0a1128] text-white rounded-[24px] p-6 space-y-2 border-t-2 border-l-2 border-b-4 border-r-4 border-t-slate-700/50 border-l-slate-700/50 border-b-black border-r-black shadow-[8px_8px_16px_rgba(0,0,0,0.6),-4px_-4px_12px_rgba(255,255,255,0.05)] transform transition-transform duration-300">
            <span className="text-[9px] font-bold text-slate-400 font-mono tracking-widest block mb-2">OPERATIONAL SECTORS</span>
            {pillars.map((name, idx) => (
              <div key={idx} className={`p-3 rounded-xl flex justify-between items-center transition ${activePillarIdx === idx ? 'border border-amber-400 bg-white/10' : 'border border-transparent text-slate-400'}`}>
                <span className="text-xs font-bold truncate pr-1">{name}</span>
                <div className="flex gap-1">
                  {[0, 1, 2].map(i => {
                    let state = 'pending';
                    if (activePillarIdx > idx) state = 'completed';
                    else if (activePillarIdx === idx) {
                      if (i < (currentQuestionIdx % 3)) state = 'completed';
                      else if (i === (currentQuestionIdx % 3)) state = 'current';
                    }
                    return (
                      <div key={i} className={`w-1.5 h-1.5 rounded-full ${state === 'completed' ? 'bg-[#d4af37]' : state === 'current' ? 'bg-[#d4af37] animate-pulse ring-2 ring-[#d4af37]/30' : 'bg-slate-700'}`} />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>"""

new_left = """          {/* Left Pillar Indicators */}
          <div className="lg:col-span-3 bg-[#0a1128] text-white rounded-[24px] p-6 flex flex-col relative overflow-hidden border-t-2 border-l-2 border-b-4 border-r-4 border-t-slate-700/50 border-l-slate-700/50 border-b-black border-r-black shadow-[8px_8px_16px_rgba(0,0,0,0.6),-4px_-4px_12px_rgba(255,255,255,0.05)] transform transition-transform duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-[#0a1128]/0 to-transparent pointer-events-none"></div>
            
            <div className="flex justify-between items-center mb-4 relative z-10 border-b border-slate-800/80 pb-2">
              <span className="text-[9px] font-bold text-slate-400 font-mono tracking-widest">OPERATIONAL SECTORS</span>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_5px_red]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_5px_orange]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]"></span>
              </div>
            </div>

            <div className="space-y-2 relative z-10 flex-grow">
              {pillars.map((name, idx) => (
                <div key={idx} className={`relative p-3 rounded-xl flex justify-between items-center transition-all duration-300 ${activePillarIdx === idx ? 'border border-[#d4af37]/50 bg-gradient-to-r from-[#d4af37]/10 to-transparent shadow-[inset_0_0_10px_rgba(212,175,55,0.2)] scale-[1.02]' : 'border border-transparent text-slate-400 hover:bg-white/5'}`}>
                  {activePillarIdx === idx && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d4af37] rounded-l-xl shadow-[0_0_8px_#d4af37]"></div>
                  )}
                  <span className={`text-xs font-bold truncate pr-1 ${activePillarIdx === idx ? 'text-amber-400 drop-shadow-[0_0_2px_rgba(212,175,55,0.5)]' : ''}`}>{name}</span>
                  <div className="flex gap-1">
                    {[0, 1, 2].map(i => {
                      let state = 'pending';
                      if (activePillarIdx > idx) state = 'completed';
                      else if (activePillarIdx === idx) {
                        if (i < (currentQuestionIdx % 3)) state = 'completed';
                        else if (i === (currentQuestionIdx % 3)) state = 'current';
                      }
                      return (
                        <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${state === 'completed' ? 'bg-[#d4af37] shadow-[0_0_4px_#d4af37]' : state === 'current' ? 'bg-[#d4af37] animate-ping opacity-75 ring-2 ring-[#d4af37]/50' : 'bg-slate-700/50'}`} />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80 relative z-10 flex items-center justify-between opacity-70">
               <span className="text-[8px] font-mono text-slate-500">SYS.STATUS: ONLINE</span>
               <span className="text-[8px] font-mono text-emerald-500 drop-shadow-[0_0_2px_#10b981]">SYNCED</span>
            </div>
          </div>"""
content = content.replace(old_left, new_left)

# Right Panel
old_right = """          {/* Right Live Polygon Preview */}
          <div className="lg:col-span-3 bg-[#0a1128] rounded-[24px] p-6 text-white flex flex-col border-t-2 border-l-2 border-b-4 border-r-4 border-t-slate-700/50 border-l-slate-700/50 border-b-black border-r-black shadow-[8px_8px_16px_rgba(0,0,0,0.6),-4px_-4px_12px_rgba(255,255,255,0.05)] transform transition-transform duration-300">
            <div>
              <span className="text-[9px] font-bold text-slate-400 font-mono tracking-widest block mb-2">LIVE TRACKING</span>
              <h5 className="text-sm font-black text-white uppercase mt-0.5">Business Growth Snapshot™</h5>
            </div>
            
            <div className="my-6 flex justify-center">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="1" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="#1e293b" strokeWidth="1" />
                <polygon 
                  points={[0, 1, 2, 3, 4, 5, 6].map(i => {
                    const angle = (i * 360) / 7;
                    const r = (getPillarScore(i) / 100) * 40;
                    const x = 50 + r * Math.cos((angle * Math.PI) / 180);
                    const y = 50 + r * Math.sin((angle * Math.PI) / 180);
                    return `${x},${y}`;
                  }).join(' ')}
                  fill="rgba(212, 175, 55, 0.2)" 
                  stroke="#d4af37" 
                  strokeWidth="1.5" 
                />
              </svg>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-400">Business Growth Score™</span>
                <span className="text-xs font-bold text-[#d4af37]">{currentQuestionIdx === 0 ? 'Pending' : `${getGlobalScore()}%`}</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-400">Questions Completed</span>
                <span className="text-xs font-bold text-white">{currentQuestionIdx} / 21</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-400">Estimated Time Left</span>
                <span className="text-xs font-bold text-white">{Math.max(1, Math.ceil((21 - currentQuestionIdx) / 3))} min</span>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-slate-400">Your Progress</span>
                  <span className="text-xs font-bold text-white">{Math.round((currentQuestionIdx / 21) * 100)}%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#d4af37] h-full transition-all duration-300" style={{ width: `${(currentQuestionIdx / 21) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </div>"""

new_right = """          {/* Right Live Polygon Preview */}
          <div className="lg:col-span-3 bg-[#0a1128] rounded-[24px] p-6 text-white flex flex-col relative overflow-hidden border-t-2 border-l-2 border-b-4 border-r-4 border-t-slate-700/50 border-l-slate-700/50 border-b-black border-r-black shadow-[8px_8px_16px_rgba(0,0,0,0.6),-4px_-4px_12px_rgba(255,255,255,0.05)] transform transition-transform duration-300">
            {/* Ambient radar glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#d4af37]/10 blur-[50px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 border-b border-slate-800/80 pb-2 mb-2 flex justify-between items-start">
              <div>
                <span className="text-[9px] font-bold text-amber-500 font-mono tracking-widest block mb-1 drop-shadow-[0_0_4px_rgba(245,158,11,0.5)]">LIVE TRACKING</span>
                <h5 className="text-sm font-black text-white uppercase mt-0.5 tracking-tight">Growth Snapshot™</h5>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[8px] font-mono text-slate-500">ID: AX-7701</span>
                <span className="text-[8px] font-mono text-slate-500">{new Date().toISOString().slice(11,19)} Z</span>
              </div>
            </div>
            
            <div className="my-8 flex justify-center relative z-10">
              <svg className="w-40 h-40 transform -rotate-90 drop-shadow-[0_0_12px_rgba(212,175,55,0.3)]" viewBox="0 0 100 100">
                <defs>
                  <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(212,175,55,0.2)" />
                    <stop offset="100%" stopColor="rgba(212,175,55,0)" />
                  </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#radarGlow)" />
                {/* Radar Grid */}
                <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="2,2" />
                <circle cx="50" cy="50" r="28" fill="none" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="1,3" />
                <circle cx="50" cy="50" r="16" fill="none" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="1,3" />
                {/* Crosshairs */}
                <line x1="50" y1="5" x2="50" y2="95" stroke="#1e293b" strokeWidth="0.5" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="#1e293b" strokeWidth="0.5" />
                
                <polygon 
                  points={[0, 1, 2, 3, 4, 5, 6].map(i => {
                    const angle = (i * 360) / 7;
                    const r = (getPillarScore(i) / 100) * 40;
                    const x = 50 + r * Math.cos((angle * Math.PI) / 180);
                    const y = 50 + r * Math.sin((angle * Math.PI) / 180);
                    return `${x},${y}`;
                  }).join(' ')}
                  fill="rgba(212, 175, 55, 0.25)" 
                  stroke="#d4af37" 
                  strokeWidth="1.5"
                  className="transition-all duration-1000 ease-in-out"
                />
                
                {/* Inner glowing points */}
                {[0, 1, 2, 3, 4, 5, 6].map(i => {
                    const angle = (i * 360) / 7;
                    const r = (getPillarScore(i) / 100) * 40;
                    const x = 50 + r * Math.cos((angle * Math.PI) / 180);
                    const y = 50 + r * Math.sin((angle * Math.PI) / 180);
                    return <circle key={i} cx={x} cy={y} r="1.5" fill="#fff" className="transition-all duration-1000 ease-in-out" style={{ filter: 'drop-shadow(0px 0px 3px #d4af37)'}} />;
                  })}
              </svg>
            </div>

            <div className="space-y-3 relative z-10 flex-grow">
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 backdrop-blur-sm flex justify-between items-center shadow-inner">
                <span className="text-[10px] text-slate-400 font-mono tracking-wide uppercase">Score Matrix™</span>
                <span className="text-sm font-black text-[#d4af37] drop-shadow-[0_0_5px_rgba(212,175,55,0.6)]">{currentQuestionIdx === 0 ? 'Pending' : `${getGlobalScore()}%`}</span>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 backdrop-blur-sm flex justify-between items-center shadow-inner">
                <span className="text-[10px] text-slate-400 font-mono tracking-wide uppercase">Data Points</span>
                <span className="text-xs font-bold text-white">{currentQuestionIdx} <span className="text-slate-600">/ 21</span></span>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 backdrop-blur-sm flex justify-between items-center shadow-inner">
                <span className="text-[10px] text-slate-400 font-mono tracking-wide uppercase">Time EST.</span>
                <span className="text-xs font-bold text-white">{Math.max(1, Math.ceil((21 - currentQuestionIdx) / 3))} <span className="text-slate-600">min</span></span>
              </div>
              
              <div className="pt-2">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Completion</span>
                  <span className="text-[10px] font-bold text-amber-500 font-mono">{Math.round((currentQuestionIdx / 21) * 100)}%</span>
                </div>
                <div className="w-full bg-slate-900 border border-slate-800 h-2 rounded-full overflow-hidden shadow-inner relative">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9InRyYW5zcGFyZW50Ii8+PGxpbmUgeDE9IjAiIHkxPSI0IiB4Mj0iNCIgeTI9IjAiIHN0cm9rZT0iIzFmMjkzNyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-50 z-10"></div>
                  <div className="bg-gradient-to-r from-amber-600 to-[#d4af37] h-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(212,175,55,0.8)] relative z-0" style={{ width: `${(currentQuestionIdx / 21) * 100}%` }}></div>
                </div>
              </div>
            </div>

            {/* Terminal decoration */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 relative z-10 flex flex-col gap-1 overflow-hidden h-8">
                <span className="text-[7px] font-mono text-slate-600 leading-tight">{"0x" + Math.random().toString(16).substring(2, 8).toUpperCase()} - RECALIBRATING METRICS...</span>
                <span className="text-[7px] font-mono text-slate-600 leading-tight opacity-50">{"0x" + Math.random().toString(16).substring(2, 8).toUpperCase()} - SYNC NODE {(currentQuestionIdx % 7).toString().padStart(2, '0')}</span>
            </div>
          </div>"""
content = content.replace(old_right, new_right)

with open('src/AssessmentEngine.tsx', 'w') as f:
    f.write(content)
