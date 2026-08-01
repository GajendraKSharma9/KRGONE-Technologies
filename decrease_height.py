with open('src/AssessmentEngine.tsx', 'r') as f:
    content = f.read()

# Container padding
content = content.replace('p-10 md:p-14', 'p-8 md:p-10')

# Space between sections
content = content.replace('space-y-8', 'space-y-6')

# Section headers spacing
content = content.replace('mb-6 mt-8', 'mb-5 mt-6')
content = content.replace('mb-6 mt-2', 'mb-5 mt-2')

# Top header bottom margin
content = content.replace('mb-8', 'mb-6')

# Input paddings
content = content.replace('px-4 py-3', 'px-3.5 py-2.5')

# Write back
with open('src/AssessmentEngine.tsx', 'w') as f:
    f.write(content)
