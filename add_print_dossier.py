import re

with open('src/components/DashboardReport.tsx', 'r') as f:
    content = f.read()

# Add import at the top
import_statement = "import { FileText, Activity, Layers, Target, Clock, CheckCircle, Award, Phone, Mail, ChevronRight, BarChart3, Globe, ShieldCheck, Download, Star, Cpu, Calendar } from 'lucide-react';\nimport PrintDossier from './PrintDossier';"
content = re.sub(r"import \{ FileText, [^\}]* \} from 'lucide-react';", import_statement, content)

# Wrap existing return in <div className="relative"> <div className="print:hidden"> ... </div> <PrintDossier ... /> </div>
# The existing return starts at `return (` and ends at the bottom of the file with `); }`

pattern = r'  return \(\s*(<div className="w-full min-h-screen bg-\[\#F8FAFC\].*)\);\s*\}'
# We need to be careful with DOTALL matching the whole block

# Let's do it by replacing `return (`
replacement = """  return (
    <div className="relative w-full">
      <div className="print:hidden">
        <div className="w-full min-h-screen bg-[#F8FAFC] text-slate-900 font-sans grid grid-cols-1 xl:grid-cols-12 gap-6 p-4 md:p-6 items-stretch">"""

# wait, the original has:
#   return (
#     <div className="w-full min-h-screen bg-[#F8FAFC] text-slate-900 font-sans grid grid-cols-1 xl:grid-cols-12 gap-6 p-4 md:p-6 items-stretch">

content = content.replace('  return (\n    <div className="w-full min-h-screen bg-[#F8FAFC] text-slate-900 font-sans grid grid-cols-1 xl:grid-cols-12 gap-6 p-4 md:p-6 items-stretch">', replacement)

# Now we need to append the closing tags at the end of the file.
# We'll replace the last `);`
end_replacement = """        </div>
      </div>
      <PrintDossier 
        formData={formData} 
        scores={scores} 
        globalScore={globalScore} 
        pillars={pillars} 
        getPillarScore={getPillarScore} 
        getScoreColor={getScoreColor} 
        getScoreStatus={getScoreStatus} 
        getScoreRating={getScoreRating} 
        getLowestPillar={getLowestPillar} 
        assessmentDate={assessmentDate} 
        reportId={reportId} 
      />
    </div>
  );
}"""

# Find the last occurrence of `  );\n}`
if content.endswith('  );\n}'):
    content = content[:-len('  );\n}')] + end_replacement
else:
    # Just in case
    content = re.sub(r'\s*\);\s*\}\s*$', '\n' + end_replacement, content)

with open('src/components/DashboardReport.tsx', 'w') as f:
    f.write(content)
print("Updated DashboardReport with PrintDossier!")
