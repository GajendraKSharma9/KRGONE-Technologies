import re

with open('src/components/SharedFooter.tsx', 'r') as f:
    content = f.read()

target = r'<a href="#" onClick={\(e\) => e.preventDefault\(\)} className="hover:text-white transition-colors">Cookie Policy</a>'
replacement = '<a href="#" onClick={(e) => { e.preventDefault(); handleNav(\'COOKIE_POLICY\'); }} className="hover:text-white transition-colors">Cookie Policy</a>'

content = re.sub(target, replacement, content)

with open('src/components/SharedFooter.tsx', 'w') as f:
    f.write(content)

