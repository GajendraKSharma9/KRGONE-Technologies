with open("src/App.tsx", "r") as f:
    content = f.read()

import re
# Remove the ArrowLeft from the second lucide-react import
content = content.replace("ArrowLeft} from \"lucide-react\";", "} from \"lucide-react\";", 1)

with open("src/App.tsx", "w") as f:
    f.write(content)
