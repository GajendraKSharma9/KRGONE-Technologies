import re

with open('src/AssessmentEngine.tsx', 'r') as f:
    content = f.read()

# Replace Headers
content = content.replace(
    '''<h1 className="text-3xl font-black text-slate-900 tracking-tight">Let's Understand Your Business</h1>
                  <p className="text-slate-600 text-sm mt-2 font-medium">''',
    '''<h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Let's Understand Your Business</h1>
                  <p className="text-slate-600 text-[15px] mt-2 font-medium max-w-2xl leading-relaxed">'''
)

# Section 1
content = content.replace(
    '''<div className="flex items-center gap-3 mb-4">
                    <User className="w-6 h-6 text-[#e5c158]" />
                    <h3 className="text-lg font-bold text-slate-900">1. Contact Details</h3>
                    <div className="flex-1 h-px bg-amber-100 ml-4"></div>
                  </div>''',
    '''<div className="flex items-center gap-4 mb-6 mt-2">
                    <div className="w-12 h-12 rounded-full border border-amber-200 bg-amber-50 flex items-center justify-center shrink-0">
                      <User className="w-6 h-6 text-amber-500" />
                    </div>
                    <h3 className="text-[22px] font-bold text-slate-900 tracking-tight">1. Contact Details</h3>
                    <div className="flex-1 h-px bg-slate-200 ml-4"></div>
                  </div>'''
)

# Section 2
content = content.replace(
    '''<div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-[#e5c158]" />
                    <h3 className="text-lg font-bold text-slate-900">2. Company Profile</h3>
                    <div className="flex-1 h-px bg-amber-100 ml-4"></div>
                  </div>''',
    '''<div className="flex items-center gap-4 mb-6 mt-8">
                    <div className="w-12 h-12 rounded-full border border-amber-200 bg-amber-50 flex items-center justify-center shrink-0">
                      <Building2 className="w-6 h-6 text-amber-500" />
                    </div>
                    <h3 className="text-[22px] font-bold text-slate-900 tracking-tight">2. Company Profile</h3>
                    <div className="flex-1 h-px bg-slate-200 ml-4"></div>
                  </div>'''
)

# Section 3
content = content.replace(
    '''<div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-[#e5c158]" />
                    <h3 className="text-lg font-bold text-slate-900">3. Business Challenges & Goals</h3>
                    <div className="flex-1 h-px bg-amber-100 ml-4"></div>
                  </div>''',
    '''<div className="flex items-center gap-4 mb-6 mt-8">
                    <div className="w-12 h-12 rounded-full border border-amber-200 bg-amber-50 flex items-center justify-center shrink-0">
                      <Target className="w-6 h-6 text-amber-500" />
                    </div>
                    <h3 className="text-[22px] font-bold text-slate-900 tracking-tight">3. Business Challenges & Goals</h3>
                    <div className="flex-1 h-px bg-slate-200 ml-4"></div>
                  </div>'''
)

# Section 4
content = content.replace(
    '''<div className="flex items-center gap-3 mb-4">
                    <Info className="w-6 h-6 text-[#e5c158]" />
                    <h3 className="text-lg font-bold text-slate-900">4. Additional Information</h3>
                    <div className="flex-1 h-px bg-amber-100 ml-4"></div>
                  </div>''',
    '''<div className="flex items-center gap-4 mb-6 mt-8">
                    <div className="w-12 h-12 rounded-full border border-amber-200 bg-amber-50 flex items-center justify-center shrink-0">
                      <Info className="w-6 h-6 text-amber-500" />
                    </div>
                    <h3 className="text-[22px] font-bold text-slate-900 tracking-tight">4. Additional Information</h3>
                    <div className="flex-1 h-px bg-slate-200 ml-4"></div>
                  </div>'''
)

# Section 5
content = content.replace(
    '''<div className="flex items-center gap-3 mb-4">
                    <CheckSquare className="w-6 h-6 text-[#e5c158]" />
                    <h3 className="text-lg font-bold text-slate-900">5. Declaration</h3>
                    <div className="flex-1 h-px bg-amber-100 ml-4"></div>
                  </div>''',
    '''<div className="flex items-center gap-4 mb-6 mt-8">
                    <div className="w-12 h-12 rounded-full border border-amber-200 bg-amber-50 flex items-center justify-center shrink-0">
                      <CheckSquare className="w-6 h-6 text-amber-500" />
                    </div>
                    <h3 className="text-[22px] font-bold text-slate-900 tracking-tight">5. Declaration</h3>
                    <div className="flex-1 h-px bg-slate-200 ml-4"></div>
                  </div>'''
)


# Labels
content = content.replace('text-xs font-bold text-slate-900 block mb-1', 'text-[13px] font-bold text-slate-900 block mb-1.5')

# Inputs and Selects styling
old_input_class = 'w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all'
new_input_class = 'w-full border border-slate-300 rounded-lg px-4 py-3 text-[14px] outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all bg-white placeholder-slate-400'
content = content.replace(old_input_class, new_input_class)
content = content.replace(old_input_class + ' bg-white', new_input_class)

old_input_class2 = 'w-full mt-2 border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all'
new_input_class2 = 'w-full mt-3 border border-slate-300 rounded-lg px-4 py-3 text-[14px] outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all bg-white placeholder-slate-400'
content = content.replace(old_input_class2, new_input_class2)


# Checkboxes
content = content.replace('gap-2 text-xs text-slate-700 cursor-pointer', 'gap-2.5 text-[14px] text-slate-700 cursor-pointer mb-1')
content = content.replace('className="accent-red-500"', 'className="w-4 h-4 accent-red-500 cursor-pointer"')
content = content.replace('className="accent-emerald-600"', 'className="w-4 h-4 accent-emerald-600 cursor-pointer"')
content = content.replace('className="accent-[#d4af37]"', 'className="w-4 h-4 accent-[#d4af37] cursor-pointer"')

# Target section padding/spacing
content = content.replace('p-4 rounded-xl', 'p-6 rounded-xl')
content = content.replace('text-sm font-bold text-slate-900', 'text-[15px] font-bold text-slate-900')
content = content.replace('text-xs text-slate-600', 'text-[13px] text-slate-600 mt-1')

# Write back
with open('src/AssessmentEngine.tsx', 'w') as f:
    f.write(content)
