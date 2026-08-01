import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Add TermsAndConditionsPage import
import_stmt = "import { TermsAndConditionsPage } from \"./components/TermsAndConditionsPage\";\n"
if "TermsAndConditionsPage" not in content:
    content = re.sub(r'(import \{ PrivacyPolicyPage.*?\n)', r'\1' + import_stmt, content)

# Add TERMS_AND_CONDITIONS to AppView type
if "TERMS_AND_CONDITIONS" not in content:
    content = content.replace("useState<'LANDING' | 'ASSESSMENT_PORTAL' | 'CONTACT_US' | 'ABOUT_US' | 'MEET_FOUNDER' | 'OUR_METHODOLOGY' | 'GROWTH_OS_OVERVIEW' | 'SEVEN_PILLARS' | 'BUSINESS_HEALTH_DASHBOARD' | 'EXECUTIVE_INSIGHTS' | 'BUSINESS_GROWTH_CONSULTATION' | 'FULL_BUSINESS_DIAGNOSTIC' | 'BUSINESS_GROWTH_SPRINT' | 'FRACTIONAL_SALES_HEAD' | 'PRIVACY_POLICY'>('LANDING')", "useState<'LANDING' | 'ASSESSMENT_PORTAL' | 'CONTACT_US' | 'ABOUT_US' | 'MEET_FOUNDER' | 'OUR_METHODOLOGY' | 'GROWTH_OS_OVERVIEW' | 'SEVEN_PILLARS' | 'BUSINESS_HEALTH_DASHBOARD' | 'EXECUTIVE_INSIGHTS' | 'BUSINESS_GROWTH_CONSULTATION' | 'FULL_BUSINESS_DIAGNOSTIC' | 'BUSINESS_GROWTH_SPRINT' | 'FRACTIONAL_SALES_HEAD' | 'PRIVACY_POLICY' | 'TERMS_AND_CONDITIONS'>('LANDING')")

# Add the route at the end of the return statement
route_block = """      ) : activeAppView === 'TERMS_AND_CONDITIONS' ? (
        <TermsAndConditionsPage 
          onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }}
        />
      ) : (
        <AssessmentEngine onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }} />
      )}"""
if "TERMS_AND_CONDITIONS' ? (" not in content:
    content = re.sub(r'\) : \(\s*<AssessmentEngine onReturnHome=\{\(\) => \{ setActiveAppView\(\'LANDING\'\); window\.scrollTo\(0, 0\); \}\} />\s*\)\}', route_block, content)

with open('src/App.tsx', 'w') as f:
    f.write(content)

