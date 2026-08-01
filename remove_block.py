with open('src/AssessmentEngine.tsx', 'r') as f:
    content = f.read()

block_to_remove = '''
              <div className="bg-[#152238] rounded-2xl shadow-lg border border-slate-800 p-8 md:p-10">
                <h3 className="text-[#e5c158] text-lg font-bold border-b border-slate-700 pb-2 mb-6">Who Should Take This?</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 text-slate-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Founders & CEOs</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">Looking to scale past operational bottlenecks and accelerate growth.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-slate-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Business Owners</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">Seeking a clear, data-driven roadmap to improve revenue and operations.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5 text-slate-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Managing Directors</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">Aiming to optimize team performance and maximize overall profitability.</p>
                    </div>
                  </div>
                </div>
              </div>'''

content = content.replace(block_to_remove, '')

with open('src/AssessmentEngine.tsx', 'w') as f:
    f.write(content)
