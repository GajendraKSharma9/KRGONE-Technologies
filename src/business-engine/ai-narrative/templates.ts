/**
 * Business Engine - AI Narrative Engine Templates
 * Reusable templates for deterministic consulting language generation.
 */

export const TEMPLATES = {
  EXECUTIVE_SUMMARY: {
    HEALTH: "The business demonstrates a {{healthStatus}} operational foundation, achieving an overall health score of {{score}}/100 ({{maturityBand}} maturity).",
    POSITION: "Operating within the {{industry}} sector, current capabilities highlight {{strengthsSummary}}.",
    POTENTIAL: "Further optimization in {{focusAreas}} will unlock significant potential for scalable growth and elevated market positioning."
  },
  PILLAR: {
    POSITION: "Assessment of {{pillarName}} indicates performance at a {{maturityBand}} level (Score: {{score}}).",
    STRENGTH: "Current operations highlight a reliable baseline for ongoing expansion. Specifically, the business demonstrates {{keyStrength}}.",
    IMPROVEMENT: "To support sustainable growth, additional structure is recommended. The assessment indicates an opportunity to address the following: {{improvementArea}}.",
    IMPACT: "Strategically resolving these constraints will systematically improve organizational resilience. The recommended action is to {{businessImpact}}."
  },
  OPPORTUNITY: {
    REVENUE: "Strategic market positioning and disciplined sales execution offer clear pathways to accelerate revenue generation and expand commercial reach.",
    EFFICIENCY: "Systematizing core processes will optimize resource allocation, reduce operational friction, and protect profit margins.",
    GROWTH: "Executing the structured 90-day roadmap establishes the critical infrastructure required to scale operations without proportional increases in overhead."
  },
  CLOSING: "The organization has established a solid operational baseline with clear avenues for strategic enhancement. Executing the structured 90-day roadmap will systematically strengthen foundational systems, optimize resource utilization, and accelerate sustainable expansion. The path forward is well-defined, and disciplined implementation will yield measurable improvements in both immediate performance and long-term enterprise value."
};
