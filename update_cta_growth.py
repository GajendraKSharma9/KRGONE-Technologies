import re

file_path = 'src/components/GrowthOSOverviewPage.tsx'
content = open(file_path).read()

# Pattern to replace
pattern = r'\{\/\* 5\. START YOUR GROWTH JOURNEY \(DUAL CTAS\) \*\/\}.*?<\/section>'
replacement = """{/* 5. START YOUR GROWTH JOURNEY (SINGLE CTA)            */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-[#0f2142] to-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          <div className="space-y-4">
            <span className="text-blue-400 text-xs sm:text-sm font-black uppercase tracking-[0.2em] block">
              CONTINUE YOUR BUSINESS GROWTH JOURNEY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif leading-tight">
              Free Business Growth Assessment™
            </h2>
            <p className="text-base sm:text-xl text-blue-100/90 font-medium leading-relaxed max-w-2xl mx-auto">
              Discover how your business performs across all seven pillars and receive your personalized Business Health Dashboard™.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6">
            <button
              onClick={onLaunchAssessment}
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>Take Free Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={onContactUs}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all active:scale-95 border border-white/20 cursor-pointer flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              <span>Book Consultation</span>
            </button>
          </div>

        </div>
      </section>"""

content = re.sub(pattern, replacement, content, flags=re.DOTALL)

open(file_path, 'w').write(content)
print("Updated CTA section in GrowthOSOverviewPage.tsx")
