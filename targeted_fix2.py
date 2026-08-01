import re

with open('src/components/PrintDossier.tsx', 'r') as f:
    content = f.read()

def replace_in_page(content, page_num, next_page, old, new):
    start_tag = f'className="print-page page-{page_num}'
    end_tag = f'className="print-page page-{next_page}' if next_page else 'className="print-page page-15"'
    
    start_idx = content.find(start_tag)
    if start_idx == -1: return content
    
    end_idx = content.find(end_tag, start_idx)
    if end_idx == -1: end_idx = len(content)
    
    block = content[start_idx:end_idx]
    block = block.replace(old, new)
    
    return content[:start_idx] + block + content[end_idx:]

# PAGE 2
content = replace_in_page(content, 2, 3, 'mb-1', 'mb-0')
content = replace_in_page(content, 2, 3, 'mt-1', 'mt-0')
content = replace_in_page(content, 2, 3, 'gap-2', 'gap-1')
content = replace_in_page(content, 2, 3, 'gap-3', 'gap-1')
content = replace_in_page(content, 2, 3, 'py-2', 'py-1')
content = replace_in_page(content, 2, 3, 'pb-2', 'pb-1')
content = replace_in_page(content, 2, 3, 'pt-4', 'pt-2')
content = replace_in_page(content, 2, 3, 'pt-3', 'pt-1')

# PAGE 3
content = replace_in_page(content, 3, 4, 'mb-1', 'mb-0')
content = replace_in_page(content, 3, 4, 'mt-1', 'mt-0')
content = replace_in_page(content, 3, 4, 'gap-2', 'gap-1')
content = replace_in_page(content, 3, 4, 'py-1.5', 'py-1')
content = replace_in_page(content, 3, 4, 'pt-4', 'pt-2')
content = replace_in_page(content, 3, 4, 'pb-2', 'pb-1')

# PAGE 8
content = replace_in_page(content, 8, 9, 'py-1', 'py-0')
content = replace_in_page(content, 8, 9, 'mb-1', 'mb-0')
content = replace_in_page(content, 8, 9, 'mt-1', 'mt-0')
content = replace_in_page(content, 8, 9, 'pb-1', 'pb-0')
content = replace_in_page(content, 8, 9, 'pt-2', 'pt-1')
content = replace_in_page(content, 8, 9, 'gap-2', 'gap-1')

# PAGE 9
content = replace_in_page(content, 9, 10, 'py-1', 'py-0')
content = replace_in_page(content, 9, 10, 'mb-1', 'mb-0')
content = replace_in_page(content, 9, 10, 'mt-1', 'mt-0')
content = replace_in_page(content, 9, 10, 'pt-2', 'pt-1')
content = replace_in_page(content, 9, 10, 'gap-2', 'gap-1')

# PAGE 4
content = replace_in_page(content, 4, 5, 'py-1', 'py-0')
content = replace_in_page(content, 4, 5, 'mb-1', 'mb-0')
content = replace_in_page(content, 4, 5, 'mt-1', 'mt-0')
content = replace_in_page(content, 4, 5, 'pb-1', 'pb-0')
content = replace_in_page(content, 4, 5, 'p-1', 'p-0.5')
content = replace_in_page(content, 4, 5, 'p-2', 'p-1')
content = replace_in_page(content, 4, 5, 'py-1.5', 'py-0.5')
content = replace_in_page(content, 4, 5, 'mb-0.5', 'mb-0')
content = replace_in_page(content, 4, 5, 'pt-2', 'pt-1')
content = replace_in_page(content, 4, 5, 'pb-0.5', 'pb-0')
content = replace_in_page(content, 4, 5, 'h-[80px]', 'h-[70px]')

with open('src/components/PrintDossier.tsx', 'w') as f:
    f.write(content)
