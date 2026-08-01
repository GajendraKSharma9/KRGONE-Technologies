import re

# DossierFooter
try:
    content = open('src/components/dossier/DossierFooter.tsx').read()
    old_block = '''          <span className="text-slate-500">|</span>
          <div className="flex items-center gap-1">
            <MapPin className="w-2.5 h-2.5 text-[#c29d2f] shrink-0" />
            <span>Jaipur, India</span>
          </div>
          <span className="text-slate-500">|</span>
          <div className="flex items-center gap-1">
            <Phone className="w-2.5 h-2.5 text-[#c29d2f] shrink-0" />
            <span>+91 7300300330</span>
          </div>
          <span className="text-slate-500">|</span>
          <div className="flex items-center gap-1">
            <Mail className="w-2.5 h-2.5 text-[#c29d2f] shrink-0" />
            <span>enquiry.krgone@gmail.com</span>
          </div>'''
    content = content.replace(old_block, '')
    open('src/components/dossier/DossierFooter.tsx', 'w').write(content)
except Exception as e:
    print(e)
