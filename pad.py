import re
import glob

# The user feels the padding and spacing is "congested across all pages under growth os tab".
# These pages generally have:
# - Sections with `py-16` or `py-20 lg:py-24`
# - Grid gaps like `gap-4`, `gap-6`
# - Card padding like `p-6` or `p-8`
# - Paragraph/text line height (we can ensure leading-relaxed or leading-loose)
# Let's apply a systematic boost to all of them.

target_files = [
    'src/components/FullBusinessDiagnosticPage.tsx',
    'src/components/BusinessGrowthConsultationPage.tsx',
    'src/components/BusinessGrowthSprintPage.tsx',
    'src/components/FractionalSalesHeadPage.tsx',
    'src/components/SevenGrowthPillarsPage.tsx',
    'src/components/GrowthOSOverviewPage.tsx'
]

for file in target_files:
    try:
        content = open(file).read()
        
        # Increase section vertical padding
        content = content.replace('py-12', 'py-16 lg:py-24')
        content = content.replace('py-16', 'py-20 lg:py-28')
        content = content.replace('py-20', 'py-24 lg:py-32')
        content = content.replace('py-8', 'py-12 lg:py-16')
        content = content.replace('py-10', 'py-14 lg:py-20')
        content = content.replace('pb-12', 'pb-16 lg:pb-24')
        content = content.replace('pt-10', 'pt-16 lg:pt-24')
        
        # Fix possible double insertions
        content = re.sub(r'(lg:py-\d+\s)+', lambda m: m.group(1), content)
        content = re.sub(r'(py-\d+\s)+', lambda m: m.group(1), content)
        
        # Space out flex/grid gaps
        content = content.replace('gap-4', 'gap-6 md:gap-8')
        content = content.replace('gap-6 md:gap-8 sm:gap-6', 'gap-6 md:gap-8')
        content = content.replace('gap-6', 'gap-8 md:gap-12')
        content = content.replace('gap-8 md:gap-12 md:gap-8', 'gap-8 md:gap-12')
        content = content.replace('gap-8', 'gap-10 md:gap-16')
        
        content = content.replace('gap-2', 'gap-3')
        content = content.replace('gap-3', 'gap-4')
        
        # Add more padding inside cards
        content = content.replace('p-6', 'p-8 lg:p-10')
        content = content.replace('p-8 lg:p-10 sm:p-10', 'p-8 lg:p-10')
        content = content.replace('p-8 lg:p-10 sm:p-8 lg:p-10', 'p-8 lg:p-10')
        content = content.replace('p-5', 'p-6 sm:p-8')
        
        # Increase text leading for better readability
        content = content.replace('leading-relaxed', 'leading-loose')
        content = content.replace('leading-snug', 'leading-relaxed')
        
        # Improve margin bottom of headings
        content = content.replace('mb-4', 'mb-6 md:mb-8')
        content = content.replace('mb-6 md:mb-8 md:mb-8', 'mb-6 md:mb-8')
        content = content.replace('mb-6', 'mb-8 md:mb-10')
        content = content.replace('mb-8 md:mb-10 md:mb-12', 'mb-8 md:mb-10')
        content = content.replace('mb-8', 'mb-10 md:mb-14')
        content = content.replace('mb-10 md:mb-14 md:mb-12', 'mb-10 md:mb-14')
        content = content.replace('mb-12', 'mb-16 md:mb-20')
        
        # Extra top margins for some sections
        content = content.replace('mt-6', 'mt-8 md:mt-10')
        content = content.replace('mt-8', 'mt-10 md:mt-14')
        content = content.replace('mt-12', 'mt-16 md:mt-20')
        
        # Max-width adjustment to breathe more
        content = content.replace('max-w-4xl', 'max-w-5xl')
        content = content.replace('max-w-5xl', 'max-w-6xl')
        
        open(file, 'w').write(content)
        print(f"Padded {file}")
    except Exception as e:
        print(e)

