import re

with open('src/components/DashboardReport.tsx', 'r') as f:
    content = f.read()

target = r'<div className="grid grid-cols-1 xl:grid-cols-5 gap-8 items-start">'
replacement = '<div className="grid grid-cols-1 xl:grid-cols-5 gap-8 items-start relative z-10">'
content = content.replace(target, replacement)

target2 = r'<div className="xl:col-span-3 min-w-0 space-y-6">'
replacement2 = '<div className="xl:col-span-3 min-w-0 space-y-6 relative z-10">'
content = content.replace(target2, replacement2)

with open('src/components/DashboardReport.tsx', 'w') as f:
    f.write(content)
