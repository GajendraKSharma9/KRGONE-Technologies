import re

with open('src/AssessmentEngine.tsx', 'r') as f:
    content = f.read()

# We want to replace everything from `      {/* WINDOW 3: DIAGNOSTIC SCORE REPORT */}` to the end of the file
# with our new DashboardReport call, then closing tags.

match = re.search(r'\s*\{/\* WINDOW 3: DIAGNOSTIC SCORE REPORT \*/\}', content)
if match:
    new_content = content[:match.start()] + """
      {/* FINAL DASHBOARD */}
      {view === 'RESULTS' && (
        <DashboardReport formData={formData} scores={scores} />
      )}
    </div>
  );
}
"""
    with open('src/AssessmentEngine.tsx', 'w') as f:
        f.write(new_content)
        print("Replaced successfully")
else:
    print("Match not found")
