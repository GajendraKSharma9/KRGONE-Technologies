import re

with open('src/AssessmentEngine.tsx', 'r') as f:
    content = f.read()

target = "  const [splashingOption, setSplashingOption] = useState<number | null>(null);"
replacement = """  const [splashingOption, setSplashingOption] = useState<number | null>(null);
  const [analysisStep, setAnalysisStep] = useState(0);

  useEffect(() => {
    if (view === 'RESULTS') {
      setAnalysisStep(0);
      const timer = setInterval(() => {
        setAnalysisStep(prev => {
          if (prev >= 4) {
            clearInterval(timer);
            return 5;
          }
          return prev + 1;
        });
      }, 700);
      return () => clearInterval(timer);
    }
  }, [view]);"""

content = content.replace(target, replacement)

with open('src/AssessmentEngine.tsx', 'w') as f:
    f.write(content)
