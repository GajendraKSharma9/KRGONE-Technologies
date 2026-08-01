import re

file = 'src/components/GrowthOSOverviewPage.tsx'
content = open(file).read()

content = content.replace('py-6 ', 'py-20 lg:py-24 ')
content = content.replace('py-8 ', 'py-24 lg:py-32 ')

open(file, 'w').write(content)
print("Padded GrowthOSOverviewPage")
