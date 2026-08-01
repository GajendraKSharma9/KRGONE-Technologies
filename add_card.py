import re
file_path = 'src/components/GrowthOSOverviewPage.tsx'
content = open(file_path).read()

new_card = """    {
      title: "Clear Roadmap to Scale",
      desc: "Build a structured, phased execution plan designed to drive predictable revenue and long-term valuation.",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />
    },
    {
      title: "SYSTEM OVERVIEW • KRGONE Business Growth OS™",
      desc: "An integrated operating system designed to align your strategy, execution, and team performance.",
      icon: <Cpu className="w-6 h-6 text-blue-600" />
    }"""

content = content.replace("""    {
      title: "Clear Roadmap to Scale",
      desc: "Build a structured, phased execution plan designed to drive predictable revenue and long-term valuation.",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />
    }""", new_card)

open(file_path, 'w').write(content)
print("Added card")
