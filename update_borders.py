import re

with open('src/AssessmentEngine.tsx', 'r') as f:
    content = f.read()

# 1. Left Pillar Indicators
old_left = 'className="lg:col-span-3 bg-[#0a1128] text-white rounded-[24px] p-6 space-y-2 border border-slate-800 shadow-xl"'
new_left = 'className="lg:col-span-3 bg-[#0a1128] text-white rounded-[24px] p-6 space-y-2 border-t-2 border-l-2 border-b-4 border-r-4 border-t-slate-700/50 border-l-slate-700/50 border-b-black border-r-black shadow-[8px_8px_16px_rgba(0,0,0,0.6),-4px_-4px_12px_rgba(255,255,255,0.05)] transform transition-transform duration-300"'
content = content.replace(old_left, new_left)

# 2. Right Panel
old_right = 'className="lg:col-span-3 bg-[#0a1128] border border-slate-800 rounded-[24px] p-6 text-white flex flex-col shadow-xl"'
new_right = 'className="lg:col-span-3 bg-[#0a1128] rounded-[24px] p-6 text-white flex flex-col border-t-2 border-l-2 border-b-4 border-r-4 border-t-slate-700/50 border-l-slate-700/50 border-b-black border-r-black shadow-[8px_8px_16px_rgba(0,0,0,0.6),-4px_-4px_12px_rgba(255,255,255,0.05)] transform transition-transform duration-300"'
content = content.replace(old_right, new_right)

# 3. Center Panel
old_center = 'className="lg:col-span-6 bg-gradient-to-br from-[#ffffff]/90 via-[#f8f9fa]/90 to-[#e2e8f0]/90 backdrop-blur-3xl border border-white/60 rounded-[24px] p-8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_20px_50px_rgba(0,0,0,0.15)] flex flex-col justify-between relative overflow-hidden"'
new_center = 'className="lg:col-span-6 bg-gradient-to-br from-[#ffffff]/90 via-[#f8f9fa]/90 to-[#e2e8f0]/90 backdrop-blur-3xl border-t-2 border-l-2 border-b-4 border-r-4 border-t-white border-l-white border-b-slate-300 border-r-slate-300 rounded-[24px] p-8 shadow-[inset_0_4px_10px_rgba(255,255,255,1),8px_8px_20px_rgba(0,0,0,0.15),-4px_-4px_12px_rgba(255,255,255,0.8)] flex flex-col justify-between relative overflow-hidden"'
content = content.replace(old_center, new_center)

# 4. Question Text Box
old_qbox = 'className="my-8 bg-white/40 border border-white/80 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-[inset_0_2px_15px_rgba(0,0,0,0.02),0_10px_30px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:border-amber-200/60 transition-colors duration-500"'
new_qbox = 'className="my-8 bg-white/40 border-t-2 border-l-2 border-b-4 border-r-4 border-t-white border-l-white border-b-slate-200 border-r-slate-200 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-[inset_0_4px_10px_rgba(255,255,255,0.8),4px_4px_15px_rgba(0,0,0,0.05)] relative overflow-hidden group transition-all duration-500 transform hover:translate-y-[-2px]"'
content = content.replace(old_qbox, new_qbox)

# 5. Grid items (buttons)
# We need a regex or careful replace for the buttons to add 3D borders
import re

old_button_base = r"className={`py-3 md:py-4 px-1 flex flex-col items-center justify-center rounded-xl transition-all duration-300 transform hover:scale-\[1.05\] active:scale-\[0.95\] \$\{"
new_button_base = r"className={`py-3 md:py-4 px-1 flex flex-col items-center justify-center rounded-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-1 active:shadow-inner ${"
content = re.sub(old_button_base, new_button_base, content)

# 6. We will also enhance the button styles directly in the ternary operator
old_btn_active = "'bg-gradient-to-b from-amber-400 to-amber-500 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_10px_20px_rgba(251,191,36,0.4)] border border-amber-300 z-10'"
new_btn_active = "'bg-gradient-to-b from-amber-400 to-amber-500 text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),0_8px_15px_rgba(251,191,36,0.4)] border-t-2 border-l-2 border-b-4 border-r-4 border-t-amber-300 border-l-amber-300 border-b-amber-700 border-r-amber-700 z-10'"
content = content.replace(old_btn_active, new_btn_active)

old_btn_selected = "'bg-[#d4af37] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_15px_rgba(212,175,55,0.4)] border border-amber-400'"
new_btn_selected = "'bg-[#d4af37] text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),4px_6px_10px_rgba(212,175,55,0.3)] border-t-2 border-l-2 border-b-4 border-r-4 border-t-amber-300 border-l-amber-300 border-b-amber-700 border-r-amber-700'"
content = content.replace(old_btn_selected, new_btn_selected)

old_btn_default = "'bg-white/60 hover:bg-white border border-slate-200 hover:border-amber-300/60 text-slate-600 hover:text-amber-700 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_2px_5px_rgba(0,0,0,0.02)] hover:shadow-[0_5px_15px_rgba(212,175,55,0.1)] backdrop-blur-sm'"
new_btn_default = "'bg-white/60 hover:bg-white border-t-2 border-l-2 border-b-4 border-r-4 border-t-white border-l-white border-b-slate-300 border-r-slate-300 hover:border-b-amber-200 hover:border-r-amber-200 text-slate-600 hover:text-amber-700 shadow-[4px_6px_10px_rgba(0,0,0,0.05),inset_0_2px_5px_rgba(255,255,255,1)] hover:shadow-[6px_8px_15px_rgba(212,175,55,0.15)] backdrop-blur-sm'"
content = content.replace(old_btn_default, new_btn_default)

# Let's apply Next Question button 3D border
old_next_btn = 'className="px-6 py-2.5 bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-slate-50 hover:border-slate-300 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_4px_10px_rgba(0,0,0,0.05)] transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"'
new_next_btn = 'className="px-6 py-2.5 bg-white border-t-2 border-l-2 border-b-4 border-r-4 border-t-white border-l-white border-b-slate-300 border-r-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-slate-50 shadow-[4px_6px_10px_rgba(0,0,0,0.05)] transform transition-all duration-200 hover:-translate-y-1 active:translate-y-1 active:border-b-2 active:border-r-2 active:border-t-4 active:border-l-4 active:shadow-inner"'
content = content.replace(old_next_btn, new_next_btn)

# Let's apply Compile Results button 3D border
old_compile_btn = 'className="px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b38f25] text-white text-xs font-black uppercase tracking-wider rounded-xl hover:brightness-110 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_8px_20px_rgba(212,175,55,0.3)] transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"'
new_compile_btn = 'className="px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b38f25] text-white text-xs font-black uppercase tracking-wider rounded-xl hover:brightness-110 shadow-[4px_6px_15px_rgba(212,175,55,0.4)] border-t-2 border-l-2 border-b-4 border-r-4 border-t-amber-200 border-l-amber-200 border-b-amber-700 border-r-amber-700 transform transition-all duration-200 hover:-translate-y-1 active:translate-y-1 active:border-b-2 active:border-r-2 active:border-t-4 active:border-l-4"'
content = content.replace(old_compile_btn, new_compile_btn)

with open('src/AssessmentEngine.tsx', 'w') as f:
    f.write(content)
