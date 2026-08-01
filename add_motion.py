import re

with open('src/AssessmentEngine.tsx', 'r') as f:
    content = f.read()

if 'from "motion/react"' not in content and "from 'motion/react'" not in content:
    content = content.replace("import React, { useState, useEffect } from 'react';", "import React, { useState, useEffect } from 'react';\nimport { motion } from 'motion/react';")

if 'PartyPopper' not in content:
    content = content.replace('ShieldCheck } from', 'ShieldCheck, PartyPopper } from')

with open('src/AssessmentEngine.tsx', 'w') as f:
    f.write(content)
