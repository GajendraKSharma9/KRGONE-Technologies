import re

with open("src/App.tsx", "r") as f:
    content = f.read()

# We need to render <AssessmentEngine /> if showAssessment is true.
# Find the start of the return statement
return_index = content.find("return (")

if return_index != -1 and "if (showAssessment) return <AssessmentEngine />;" not in content:
    content = content[:return_index] + "if (showAssessment) return <AssessmentEngine />;\n\n  " + content[return_index:]

with open("src/App.tsx", "w") as f:
    f.write(content)
