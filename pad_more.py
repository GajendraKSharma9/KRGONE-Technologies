import re
import glob

# Extra pages
target_files = [
    'src/components/BusinessHealthDashboardPage.tsx',
    'src/components/ExecutiveBusinessInsightsPage.tsx'
]

for file in target_files:
    try:
        content = open(file).read()
        
        # Increase section vertical padding
        content = content.replace('py-12 ', 'py-20 lg:py-24 ')
        content = content.replace('py-16 ', 'py-24 lg:py-32 ')
        content = content.replace('py-8 ', 'py-16 lg:py-24 ')
        content = content.replace('py-10 ', 'py-20 lg:py-24 ')
        content = content.replace('py-6 ', 'py-16 lg:py-24 ')
        
        open(file, 'w').write(content)
        print(f"Padded {file}")
    except Exception as e:
        print(e)

