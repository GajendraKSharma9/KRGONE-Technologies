import re

app_file = 'src/App.tsx'
content = open(app_file).read()

# Replace footer in App.tsx
import_line = "import { SharedFooter } from './components/SharedFooter';"
if "SharedFooter" not in content:
    content = content.replace("import React", f"import React\n{import_line}")

footer_start = content.find('      {/* Footer Section */}')
footer_end = content.find('      </footer>', footer_start) + len('      </footer>')

if footer_start != -1 and footer_end != -1:
    footer_block = content[footer_start:footer_end]
    content = content.replace(footer_block, '      <SharedFooter onNavigate={(view) => { setActiveAppView(view as any); window.scrollTo(0, 0); }} />')
    open(app_file, 'w').write(content)
    print("Updated App.tsx")

