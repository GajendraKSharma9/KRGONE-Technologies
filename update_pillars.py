import re

with open('src/AssessmentEngine.tsx', 'r') as f:
    content = f.read()

# Replace pillars
old_pillars = """  const pillars = [
    "Leadership & Direction",
    "Sales & Marketing",
    "Operations & Process",
    "Financial Management",
    "People & Culture",
    "Process & Systems",
    "Technology & AI"
  ];"""

new_pillars = """  const pillars = [
    "Leadership & Vision",
    "Sales & Revenue",
    "Marketing & Customer Growth",
    "Operations & Process",
    "Finance & Business Performance",
    "People & Organisation",
    "Technology & AI"
  ];"""

content = content.replace(old_pillars, new_pillars)

# Replace indicator rendering
old_render = """                <span className="text-[10px] font-mono font-black text-[#d4af37] bg-white/5 px-2 py-0.5 rounded border border-white/5">{getPillarScore(idx)}%</span>"""

new_render = """                <div className="flex gap-1">
                  {[0, 1, 2, 3].map(i => {
                    let state = 'pending';
                    if (activePillarIdx > idx) state = 'completed';
                    else if (activePillarIdx === idx) {
                      if (i < (currentQuestionIdx % 4)) state = 'completed';
                      else if (i === (currentQuestionIdx % 4)) state = 'current';
                    }
                    return (
                      <div key={i} className={`w-1.5 h-1.5 rounded-full ${state === 'completed' ? 'bg-[#d4af37]' : state === 'current' ? 'bg-[#d4af37] animate-pulse ring-2 ring-[#d4af37]/30' : 'bg-slate-700'}`} />
                    );
                  })}
                </div>"""

content = content.replace(old_render, new_render)

with open('src/AssessmentEngine.tsx', 'w') as f:
    f.write(content)
