import re

try:
    content = open('src/components/dossier/CoverPage.tsx').read()
    old_block = '''          <span className="text-[#c29d2f]/70 font-light">|</span>
          <div className="flex items-center gap-1.5 text-slate-200 whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5 text-[#c29d2f] shrink-0" />
            <span>Jaipur, India</span>
          </div>
          <span className="text-[#c29d2f]/70 font-light">|</span>
          <div className="flex items-center gap-1.5 text-slate-200 whitespace-nowrap">
            <Phone className="w-3.5 h-3.5 text-[#c29d2f] shrink-0" />
            <span>+91 7300300330</span>
          </div>
          <span className="text-[#c29d2f]/70 font-light">|</span>
          <div className="flex items-center gap-1.5 text-slate-200 whitespace-nowrap">
            <Mail className="w-3.5 h-3.5 text-[#c29d2f] shrink-0" />
            <span>enquiry.krgone@gmail.com</span>
          </div>'''
    content = content.replace(old_block, '')
    open('src/components/dossier/CoverPage.tsx', 'w').write(content)
except Exception as e:
    print(e)
