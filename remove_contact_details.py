import re
import glob

files = [
    'src/components/FullBusinessDiagnosticPage.tsx',
    'src/components/BusinessGrowthConsultationPage.tsx',
    'src/components/BusinessGrowthSprintPage.tsx',
    'src/components/FractionalSalesHeadPage.tsx'
]

old_footer = '''      <footer className="bg-white border-t border-slate-200 py-8 text-center text-[11px] font-bold text-slate-500 uppercase tracking-wider">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span>KRG ONE</span>
          <span className="hidden sm:inline">•</span>
          <span>Jaipur, India</span>
          <span className="hidden sm:inline">•</span>
          <span>+91 7300300330</span>
          <span className="hidden sm:inline">•</span>
          <span>enquiry.krgone@gmail.com</span>
        </div>
      </footer>'''

new_footer = '''      <footer className="bg-white border-t border-slate-200 py-8 text-center text-[11px] font-bold text-slate-500 uppercase tracking-wider">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span>© {new Date().getFullYear()} KRG ONE. All Rights Reserved.</span>
        </div>
      </footer>'''

for file in files:
    try:
        content = open(file).read()
        if old_footer in content:
            content = content.replace(old_footer, new_footer)
            open(file, 'w').write(content)
            print(f"Updated {file}")
        else:
            print(f"Footer not found in {file}")
    except Exception as e:
        print(f"Error on {file}: {e}")
