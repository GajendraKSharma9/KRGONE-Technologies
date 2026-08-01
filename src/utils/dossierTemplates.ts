export const DOSSIER_TEMPLATES = {
  getMacroDiagnosis: (score: number, companyName: string, industry: string, revenue: string) => {
    if (score >= 85) {
      return {
        title: "Enterprise Maturity Evaluation",
        body: `${companyName || 'Your organization'} displays an elite operational framework, placing it in the top tier of maturity models for the ${industry || 'target'} sector. By decoupling core day-to-day functions from manual founder oversight, you have cleared the initial growth bottlenecks that stall most MSMEs. Your business systems show solid baseline efficiency and consistent delivery parameters. This structural integrity is a massive asset that actively protects your current enterprise valuation against market volatility.`,
        title2: "Strategic Capital Allocation Matrix",
        body2: "The objective for your enterprise must shift from protective management to aggressive market dominance. With an established core framework, you are prime to utilize your internal stability to deploy high-yield automation models, acquire market share from lower-tier competitors, and execute structured expansions into new regional verticals. We recommend mapping out a strategic acquisition roadmap or introducing new product lines to fully utilize your excess operational bandwidth."
      };
    } else if (score >= 70) {
      return {
        title: "The Growth Transition Phase",
        body: `An analytical review of ${companyName || 'your organization'} within the ${industry || 'target'} vertical shows moderate operational stability with intermittent friction points. While you are successfully managing the current volume at the ${revenue || 'current'} revenue bracket, your operational structure is straining under the load. The lack of fully documented mid-level processes means efficiency drops as scale increases. These process gaps are silently eroding your net profit margins.`,
        title2: "The Delegation Imperative",
        body2: "To cross your current revenue plateau, you must shift from active daily management to strategic oversight. This requires empowering mid-level leaders with strict KPI frameworks and clear accountability. Documenting core workflows will insulate your profit margins and prepare the business for the next phase of capital scaling. Formalizing these structures is non-negotiable for sustainable growth."
      };
    } else {
      return {
        title: "Structural Systemic Volatility",
        body: `An analytical review of ${companyName || 'your organization'} operating within the ${industry || 'target'} vertical indicates that your organization has hit a structural scaling ceiling. While your market position allows you to cross revenue targets in the ${revenue || 'current'} bracket, your operational foundation relies almost exclusively on manual execution. The lack of standard automation frameworks means that scaling up will directly increase operational friction, leading to severe profit margin leakage and high staff burnout. Without immediate intervention, this volatility will threaten baseline viability.`,
        title2: "The Owner-Dependency Barrier",
        body2: "Your assessment answers reveal a critical operational dependency on the founder layer. Because daily validation, strategic planning, and performance management require your constant personal oversight, your team is restricted to running routine tasks. This lack of decentralization caps your ultimate enterprise valuation, as a company dependent on its owner cannot be easily scaled, sold, or institutionalized. Breaking this barrier is the absolute highest priority."
      };
    }
  },
  getPillarDossier: (pillarTitle: string, score: number) => {
    if (score >= 85) {
      return {
        problemTitle: "THE ENTERPRISE CAPABILITY",
        problem: `Your organization displays exceptional framework maturity in the ${pillarTitle} vertical, tracking strong asset preservation and high execution efficiency. Operations run seamlessly, and internal metrics are insulated against external market shocks. Core execution is highly decentralized from the founder layer, meaning management teams can handle high-volume demands without breaking the core system architecture. The structural integrity of this department actively protects your baseline enterprise valuation and provides a launchpad for aggressive market share capture.`,
        solutionTitle: "THE SCALING VELOCITY SOLUTION",
        solution: "Leverage this internal operational strength to capture greater market share, deploy advanced corporate optimization frameworks, and execute aggressive expansion. Your immediate focus must shift from protective management to aggressive scaling velocity metrics and capital deployment. We recommend mapping out a strategic acquisition roadmap or introducing new product lines to fully utilize your excess operational bandwidth. Maintain strict adherence to your current KPI dashboards while increasing volume.",
        interventionTitle: "THE KRG ONE SUPPORT HUB",
        intervention: "KRG ONE Deployment: We guide high-performing leadership teams through advanced corporate structuring, equity design, and large-scale growth blueprints to secure enterprise-level dominance. Our principal consultants work with your board to align these strong internal metrics with external market acquisition strategies. Book your ₹1,499 Strategy Audit to map out your next exponential scaling phase."
      };
    } else if (score >= 70) {
      return {
        problemTitle: "THE CORE BOTTLENECK",
        problem: `Inconsistent application of documented processes in ${pillarTitle} and moderate reliance on owner intervention for non-standard operations creates an active execution ceiling. While the department functions reasonably well under normal conditions, stress-testing reveals hidden friction points. Profit margins are silently leaking due to inefficient rework cycles. This bottleneck prevents you from scaling confidently without increasing overhead proportionally.`,
        solutionTitle: "THE SYSTEMATIC SOLUTION",
        solution: "Formalize mid-level management structures and enforce strict KPI tracking across all departmental workflows to transition from reactive firefighting to formal systems engineering. Your management layer needs clear accountability metrics and daily reporting dashboards to take ownership of minor problems before they reach the executive team. Standardizing these workflows will immediately recover lost productivity cycles. Document every edge-case to reduce reliance on tribal knowledge.",
        interventionTitle: "THE KRG ONE SUPPORT HUB",
        intervention: "KRG ONE Deployment: We standardize core processes and implement automated tracking systems to recover lost productivity cycles and optimize profit margins. Our intervention focuses on upskilling your mid-level management to run operations autonomously. Secure your ₹1,499 Strategy Audit to let our experts blueprint your management transition plan."
      };
    } else {
      return {
        problemTitle: "THE CRITICAL PROBLEM",
        problem: `Severe operational friction exists due to heavy manual process dependency in ${pillarTitle}, resulting in immediate margin leakage and extreme workflow volatility. Your organization has hit a structural scaling ceiling because daily execution relies almost exclusively on tribal knowledge and manual owner intervention. These systemic bottlenecks create a fragile environment where every new client or project increases organizational chaos. The extreme founder dependency means the business cannot function effectively without your constant oversight.`,
        solutionTitle: "THE SYSTEMATIC SOLUTION",
        solution: "You must immediately transition from reactive troubleshooting to structured systems engineering by mapping out structural frameworks and formal SOP engineering. Implement strict tracking metrics and data-driven process controls to isolate and plug your severe cash flow leakages today. Deploy basic end-of-day tracking templates for all operational staff members immediately to establish accountability. Stop daily administrative tasks from reaching the executive founder layer by enforcing strict delegation rules.",
        interventionTitle: "THE KRG ONE SUPPORT HUB",
        intervention: "KRG ONE Deployment: Our execution consultants work directly with your team to physically draft your company playbooks and build your custom digital wiki dashboards. We run management training sprints to implement data-driven process controls that insulate and save your net profit margins. Book your ₹1,499 Strategy Audit today to let our deployment consultants build the exact blueprint required to fix these systemic bottlenecks."
      };
    }
  },
  getActionPlan: (challenges: string[]) => {
    return {
      days1_30: {
        title: "Days 1–30: Emergency Risk Mitigation & Stabilization Sprints",
        objective: "Isolate and plug immediate cash flow leakages and severe operational friction points.",
        items: [
          "Deploy basic end-of-day daily tracking templates for all operational staff members.",
          `Set up absolute tracking metrics for the primary user challenges selected: ${challenges && challenges.length > 0 ? challenges.join(', ') : 'Core Operational Leakage'}.`,
          "Stop daily administrative tasks from reaching the executive founder layer by establishing a strict delegation rule."
        ],
        outcome: "Clear visibility into process gaps and immediate short-term fixes identified. Cash flow leakages plugged.",
        success: "Completion of emergency workflow controls."
      },
      days31_60: {
        title: "Days 31–60: Process Standardization & Workflow Architecture Sprints",
        objective: "Begin the formal drafting and deployment of step-by-step Standard Operating Procedures (SOPs).",
        items: [
          "Draft SOPs across your lowest-performing operational pillars.",
          "Build clean cloud-based tracking systems to monitor team output.",
          "Optimize customer acquisition channels and map customer retention journeys to maximize your lifetime client value metrics."
        ],
        outcome: "Reduced reliance on founder for daily problem solving. Lifetime client value metrics mapped.",
        success: "First successful weekly KPI review meeting."
      },
      days61_90: {
        title: "Days 61–90: System Optimization & Capital Scaling Sprints",
        objective: "Integrate scalable automation tools and modern business software models.",
        items: [
          "Transition management to a formal weekly performance review cycle based on concrete KPIs.",
          "Review the unit profit margins across all core product lines.",
          "Maximize revenue efficiency and prepare for capital scaling."
        ],
        outcome: "Business operates predictably. Foundation is set to confidently acquire new market share and scale aggressively.",
        success: "Measurable increase in operational capacity and profit margins."
      }
    };
  }
};
