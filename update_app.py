import re

with open("dump_app.tsx", "r") as f:
    content = f.read()

# 1. State Replacement
content = content.replace("const [showAssessment, setShowAssessment] = useState(false);", "const [activeAppView, setActiveAppView] = useState<'LANDING' | 'ASSESSMENT_PORTAL'>('LANDING');")
content = content.replace("if (showAssessment) return <AssessmentEngine />;", "")
if "import AssessmentEngine" not in content:
    content = content.replace("import React", "import AssessmentEngine from './AssessmentEngine';\nimport React")

# Replace existing onClick
content = content.replace("onClick={() => setShowAssessment(true)}", "onClick={(e) => { e.preventDefault(); setActiveAppView('ASSESSMENT_PORTAL'); window.scrollTo(0, 0); }}")

# Ensure all buttons that mention "Assessment" and don't have an onClick yet get one.
def replace_button(match):
    tag = match.group(0)
    if "Assessment" in tag and "onClick=" not in tag:
        # inject after <button
        return tag.replace("<button", "<button onClick={(e) => { e.preventDefault(); setActiveAppView('ASSESSMENT_PORTAL'); window.scrollTo(0, 0); }}")
    return tag

content = re.sub(r'<button[^>]*>.*?<\/button>', replace_button, content, flags=re.DOTALL)

# Wrap the component logic
split_index = content.find("      {/* Hero Section */}")
if split_index != -1:
    before = content[:split_index]
    after = content[split_index:]
    
    last_section_index = after.rfind("</section>")
    if last_section_index != -1:
        end_index = last_section_index + len("</section>")
        
        landing_content = after[:end_index]
        footer_content = after[end_index:]
        
        new_app = before + """
      {activeAppView === 'LANDING' ? (
        <>
""" + landing_content + """
        </>
      ) : (
        <div className="pt-20 relative"> 
          <button 
            onClick={() => setActiveAppView('LANDING')} 
            className="absolute top-6 left-6 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition font-mono z-50 cursor-pointer shadow-sm border border-slate-200"
          >
            ← Return to Home Page
          </button>
          <AssessmentEngine />
        </div>
      )}
""" + footer_content
        
        # fix outer class name if needed
        new_app = new_app.replace('<div className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">', '<div className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden">')
        with open("src/App.tsx", "w") as f:
            f.write(new_app)
        print("Success")
    else:
        print("Could not find last </section>")
else:
    print("Could not find {/* Hero Section */}")

