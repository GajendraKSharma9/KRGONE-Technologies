import re

with open('src/components/DashboardReport.tsx', 'r') as f:
    content = f.read()

# 1. Rewrite the Executive Summary texts
old_problem = """<strong>Biggest Problem:</strong> The business depends too much on you, the owner. Because you have to make every single day-to-day decision, it slows down your daily work, creates pressure, and stops your company from expanding."""
new_problem = """<strong>Core Scaling Bottleneck:</strong> The business has a severe dependency on the owner. Because you are personally involved in every day-to-day operational decision, it creates an execution bottleneck, limits your team's productivity, and blocks business expansion."""
content = content.replace(old_problem, new_problem)

old_recommendation = """<p className="text-sm m-0">Our Top Advice: Stop spending all your time fixing daily small fires. Start writing down clear steps and simple rules (SOPs) for your daily sales, marketing, and office operations. Train your staff so they can manage daily work without needing you for every single approval.</p>"""
new_recommendation = """<p className="text-sm m-0">Strategic Action Plan: Shift your focus from daily firefighting to building strong operational systems. You must document clear, step-by-step Standard Operating Procedures (SOPs) for your sales, marketing, and office operations. Train and empower your team leaders to handle daily workflows so the business can scale efficiently without requiring your constant personal approval.</p>"""
content = content.replace(old_recommendation, new_recommendation)


# 2. Rewrite getPillarInsights
old_helper = """const getPillarInsights = (pillarTitle: string, score: number) => {
  let problem = "";
  let impact = "";
  let solution = "";

  if (pillarTitle === "Leadership & Vision") {
    problem = "Your business cannot run for even a single week without you. Every small decision requires the owner's signature or approval.";
    impact = "This slows down your daily operations, stresses you out, and stunts your company's growth.";
    solution = "We work directly with you to create a clear daily management chart, assign responsibilities to your team leaders, and give you back your freedom.";
  } else if (pillarTitle === "Sales & Revenue") {
    problem = "You do not have a steady, automated system to get new customer inquiries every month. You rely mostly on random word-of-mouth recommendations.";
    impact = "Making your monthly cash flow unpredictable and causing stress when sales drop unexpectedly.";
    solution = "We set up a simple digital sales track that continuously brings high-quality leads into your business month after month.";
  } else if (pillarTitle === "Marketing & Customers") {
    problem = "Your business blends in with competitors, and there is no simple way to track customer satisfaction or repeat business.";
    impact = "You are likely losing past customers to competitors and spending too much effort fighting for every single sale on price.";
    solution = "We help you build a simple follow-up system that keeps customers happy and coming back to you automatically.";
  } else if (pillarTitle === "Operations & Process") {
    problem = "Your staff handles tasks based on memory rather than a written system.";
    impact = "This leads to frequent calculation mistakes, customer complaints, and wasted inventory.";
    solution = "We help you build simple, clear, step-by-step checklists and SOPs in basic English so that even new employees can do the work perfectly without asking you questions.";
  } else if (pillarTitle === "Finance & Performance") {
    problem = "You only check the bank account balance and do not have a clear view of your exact daily profits and cash flow delays.";
    impact = "This creates cash shortages when paying suppliers or salaries and hides areas where you are losing cash/profits.";
    solution = "We set up a simple, one-page daily cash tracker so you always know exactly how much money you made today and where it went.";
  } else if (pillarTitle === "People & Organisation") {
    problem = "Employees are not clear on their exact daily goals, and training depends entirely on you shadowing them.";
    impact = "Staff leaving causes huge disruptions, and mistakes happen often because nobody is held accountable.";
    solution = "We create simple job scorecards and a quick 10-minute weekly meeting rule to keep everyone on track without micro-managing.";
  } else if (pillarTitle === "Technology & Business Innovation") {
    problem = "You are either using too much paper or disconnected softwares (like Excel, WhatsApp, and books) that don't talk to each other.";
    impact = "This forces you to do double data entry, wastes hours of admin time, and causes you to lose important customer details.";
    solution = "We help you select and set up one simple software tool that organizes all your bills, customers, and inventory in one place.";
  } else {
    problem = "Your business processes in this area rely heavily on manual effort and memory rather than clear systems.";
    impact = "This increases the chance of daily errors and keeps you stuck working in the business instead of growing it.";
    solution = "We will sit with you to document your best practices and train your team to follow them consistently.";
  }
  
  return { problem, impact, solution };
};"""

new_helper = """const getPillarInsights = (pillarTitle: string, score: number) => {
  let problem = "";
  let impact = "";
  let solution = "";

  if (pillarTitle === "Leadership & Vision") {
    problem = "The company lacks a structured management layer. Decisions are delayed because everything waits for owner approval.";
    impact = "This slows down your daily operations, limits your team's productivity, and blocks business expansion.";
    solution = "How KRG ONE Solves This: We work directly with you to design clear operational systems, set up automated management frameworks, and train your staff. This structure protects your profit margins, automates daily work, and allows your company to grow even when you are not in the office.";
  } else if (pillarTitle === "Sales & Revenue") {
    problem = "The business relies on unpredictable word-of-mouth rather than a steady system for getting new clients.";
    impact = "Making your monthly cash flow unpredictable and causing stress when sales drop unexpectedly.";
    solution = "How KRG ONE Solves This: We set up a predictable digital customer acquisition system to secure consistent monthly revenue, protecting your profit margins and allowing your company to grow even when you are not in the office.";
  } else if (pillarTitle === "Marketing & Customers") {
    problem = "Your business blends in with competitors, and there is no simple way to track customer satisfaction or repeat business.";
    impact = "You are likely losing past customers to competitors and spending too much effort fighting for every single sale on price.";
    solution = "How KRG ONE Solves This: We help you build a simple follow-up system that keeps customers happy and coming back to you automatically, protecting your profit margins and scaling the business.";
  } else if (pillarTitle === "Operations & Process") {
    problem = "Work is done based on memory rather than documented processes, leading to errors and lost profits.";
    impact = "This leads to frequent calculation mistakes, customer complaints, and wasted inventory.";
    solution = "How KRG ONE Solves This: We work directly with you to design clear operational systems, set up automated management frameworks, and build clear checklists to standardize your operations.";
  } else if (pillarTitle === "Finance & Performance") {
    problem = "You only check the bank account balance and do not have a clear view of your exact daily profits and cash flow delays.";
    impact = "This creates cash shortages when paying suppliers or salaries and hides areas where you are losing cash/profits.";
    solution = "How KRG ONE Solves This: We set up a simple, one-page daily cash tracker so you always know exactly how much profit you made today and where it went.";
  } else if (pillarTitle === "People & Organisation") {
    problem = "Employees are not clear on their exact daily goals, and training depends entirely on you shadowing them.";
    impact = "Staff leaving causes huge disruptions, and mistakes happen often because nobody is held accountable.";
    solution = "How KRG ONE Solves This: We create simple job scorecards and a quick 10-minute weekly meeting rule to keep everyone on track without micro-managing.";
  } else if (pillarTitle === "Technology & Business Innovation") {
    problem = "You are either using too much paper or disconnected softwares (like Excel, WhatsApp, and books) that don't talk to each other.";
    impact = "This forces you to do double data entry, wastes hours of admin time, and causes you to lose important customer details.";
    solution = "How KRG ONE Solves This: We help you select and set up one simple software tool that organizes all your bills, customers, and inventory in one place.";
  } else {
    problem = "Your business processes in this area rely heavily on manual effort and memory rather than clear systems.";
    impact = "This increases the chance of daily errors and keeps you stuck working in the business instead of growing it.";
    solution = "How KRG ONE Solves This: We work directly with you to design clear operational systems, set up automated management frameworks, and train your staff. This structure protects your profit margins, automates daily work, and allows your company to grow even when you are not in the office.";
  }
  
  return { problem, impact, solution };
};"""

if old_helper in content:
    content = content.replace(old_helper, new_helper)
else:
    print("Could not find old helper!")

with open('src/components/DashboardReport.tsx', 'w') as f:
    f.write(content)

