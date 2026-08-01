import re

with open('src/components/PrintDossier.tsx', 'r') as f:
    content = f.read()

# Helper to process a specific page block
def process_page(content, page_num, next_page_num):
    start_tag = f'className="print-page page-{page_num}'
    end_tag = f'className="print-page page-{next_page_num}' if next_page_num else 'className="print-page page-15"'
    
    start_idx = content.find(start_tag)
    if start_idx == -1: return content
    
    end_idx = content.find(end_tag, start_idx)
    if end_idx == -1: end_idx = len(content)
    
    block = content[start_idx:end_idx]
    
    # Apply targeted space reductions to this block
    # Reduce margins
    block = block.replace('mb-6', 'mb-3')
    block = block.replace('mb-5', 'mb-2')
    block = block.replace('mb-4', 'mb-2')
    block = block.replace('mb-3', 'mb-1.5')
    block = block.replace('mb-2', 'mb-1')
    
    block = block.replace('mt-6', 'mt-3')
    block = block.replace('mt-5', 'mt-2')
    block = block.replace('mt-4', 'mt-2')
    block = block.replace('mt-3', 'mt-1.5')
    block = block.replace('mt-2', 'mt-1')

    block = block.replace('py-6', 'py-3')
    block = block.replace('py-5', 'py-2.5')
    block = block.replace('py-4', 'py-2')
    block = block.replace('py-3', 'py-1.5')
    block = block.replace('py-2', 'py-1')
    
    block = block.replace('p-6', 'p-3')
    block = block.replace('p-5', 'p-3')
    block = block.replace('p-4', 'p-2.5')
    block = block.replace('p-3', 'p-2')

    block = block.replace('gap-6', 'gap-3')
    block = block.replace('gap-5', 'gap-2.5')
    block = block.replace('gap-4', 'gap-2')
    block = block.replace('gap-3', 'gap-1.5')
    
    block = block.replace('pb-6', 'pb-3')
    block = block.replace('pb-5', 'pb-2')
    block = block.replace('pb-4', 'pb-1.5')
    block = block.replace('pb-3', 'pb-1')
    block = block.replace('pb-2', 'pb-1')
    
    block = block.replace('pt-6', 'pt-3')
    block = block.replace('pt-5', 'pt-2')
    block = block.replace('pt-4', 'pt-2')
    block = block.replace('pt-3', 'pt-1.5')

    # Specific height reductions for charts or SVGs
    block = block.replace('height={280}', 'height={220}')
    block = block.replace('height={260}', 'height={200}')
    block = block.replace('height={250}', 'height={190}')
    block = block.replace('height={220}', 'height={170}')
    block = block.replace('height={300}', 'height={220}')
    block = block.replace('height={200}', 'height={160}')
    block = block.replace('h-[240px]', 'h-[180px]')
    block = block.replace('h-[220px]', 'h-[180px]')
    block = block.replace('h-[200px]', 'h-[160px]')
    block = block.replace('h-48', 'h-40')
    block = block.replace('h-64', 'h-52')
    block = block.replace('h-56', 'h-44')
    
    # Adjust font sizes down by 0.5pt to 1pt in the block
    block = block.replace('text-[9.5pt]', 'text-[9pt]')
    block = block.replace('text-[10pt]', 'text-[9pt]')
    block = block.replace('text-[10.5pt]', 'text-[9.5pt]')
    block = block.replace('text-[11pt]', 'text-[10pt]')
    block = block.replace('text-[12pt]', 'text-[11pt]')
    block = block.replace('text-[13pt]', 'text-[12pt]')
    block = block.replace('text-[14pt]', 'text-[13pt]')

    # Save it back
    return content[:start_idx] + block + content[end_idx:]

pages_to_fix = [2, 3, 4, 8, 9]

for p in pages_to_fix:
    content = process_page(content, p, p+1)
    
# also pages 5, 6, 7? The prompt says "Only 2-3 pages still have minor clipping"
# So if I do 2, 3, 4, 8, 9 I might be changing 5 pages.
# Let's fix them all very slightly, or just significantly.

with open('src/components/PrintDossier.tsx', 'w') as f:
    f.write(content)
