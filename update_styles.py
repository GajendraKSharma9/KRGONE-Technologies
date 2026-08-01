import re

with open('src/AssessmentEngine.tsx', 'r') as f:
    content = f.read()

target = """          <div className="text-center pb-8 border-b border-slate-100 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl -z-10 rounded-full scale-[1.5]"></div>
            
            <motion.div 
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 border-[6px] border-white shadow-[0_0_30px_rgba(16,185,129,0.3)] relative"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-emerald-400 rounded-full"
              />
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-inner relative z-10">
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <CheckCircle2 className="w-10 h-10 text-white drop-shadow-md" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-emerald-800 text-xs font-black uppercase tracking-widest rounded-full mb-4 shadow-sm"
            >
              <motion.div
                animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
                transition={{ duration: 1, delay: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <PartyPopper className="w-4 h-4 text-emerald-600" />
              </motion.div>
              Congratulations
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            >
              Assessment Completed <br className="hidden md:block" /> Successfully
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-slate-500 font-medium mt-4 text-sm md:text-base max-w-lg mx-auto"
            >
              Thank you for completing the KRG ONE Business Growth Assessment™.
            </motion.p>
          </div>"""

replacement = """          <div className="text-center pb-8 border-b border-slate-100 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-transparent blur-3xl -z-10 rounded-full scale-[1.5]"></div>
            
            <motion.div 
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-32 h-32 bg-[#000080] rounded-full flex items-center justify-center mx-auto mb-8 border-[6px] border-[#000080] shadow-[0_0_40px_rgba(0,0,128,0.4)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 opacity-50 animate-spin" style={{ animationDuration: '3s' }}></div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#000080] rounded-full m-1"
              />
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 via-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] relative z-10 border-4 border-[#000080]">
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <CheckCircle2 className="w-12 h-12 text-[#fdfcf0] drop-shadow-md" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#000080] text-[#fdfcf0] text-3xl font-black uppercase tracking-widest rounded-full mb-6 shadow-2xl relative overflow-hidden border border-indigo-400"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 opacity-40 animate-pulse mix-blend-screen pointer-events-none"></div>
              <motion.div
                animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
                transition={{ duration: 1, delay: 1, repeat: Infinity, repeatDelay: 2 }}
                className="relative z-10"
              >
                <PartyPopper className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
              </motion.div>
              <span className="relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">Congratulations</span>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[#000080] p-8 rounded-3xl relative overflow-hidden shadow-[0_15px_50px_rgba(0,0,128,0.5)] border-2 border-slate-700/50 mx-auto max-w-4xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 opacity-30 animate-pulse mix-blend-color pointer-events-none"></div>
              <h1 className="text-[4.5rem] md:text-[7.5rem] leading-[1.1] font-black text-[#fdfcf0] tracking-tight relative z-10 drop-shadow-[0_0_15px_rgba(253,252,240,0.8)]">
                Assessment Completed <br className="hidden md:block" /> Successfully
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-slate-500 font-medium mt-6 text-xl md:text-2xl max-w-lg mx-auto"
            >
              Thank you for completing the KRG ONE Business Growth Assessment™.
            </motion.p>
          </div>"""

content = content.replace(target, replacement)

with open('src/AssessmentEngine.tsx', 'w') as f:
    f.write(content)
