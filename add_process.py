with open('src/AssessmentEngine.tsx', 'r') as f:
    content = f.read()

new_block = '''
              <div className="bg-gradient-to-br from-[#152238] to-[#0a1128] rounded-2xl shadow-lg border border-slate-800 p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <h3 className="text-[#e5c158] text-lg font-bold border-b border-slate-700 pb-2 mb-6 relative z-10">How It Works</h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1e2f4a] border border-slate-600 flex items-center justify-center shrink-0">
                      <span className="text-[#e5c158] font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Take the Assessment</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">Complete the 7-pillar diagnostic questionnaire in about 5-7 minutes.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1e2f4a] border border-slate-600 flex items-center justify-center shrink-0">
                      <span className="text-[#e5c158] font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Get Your Score</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">Instantly view your Business Growth Score™ and performance breakdown.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1e2f4a] border border-slate-600 flex items-center justify-center shrink-0">
                      <span className="text-[#e5c158] font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Receive Action Plan</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">Unlock a personalized 90-day roadmap to start scaling your business.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
'''

content = content.replace('''                  </div>
                </div>
              </div>
            </div>
          </div>''', '''                  </div>
                </div>
              </div>
''' + new_block + '''          </div>''')

with open('src/AssessmentEngine.tsx', 'w') as f:
    f.write(content)
