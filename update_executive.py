import re

with open('src/components/DashboardReport.tsx', 'r') as f:
    content = f.read()

def get_dynamic_text():
    return """
                     <p>
                        Based on the KRG ONE Business Growth Assessment™, <strong>{formData.companyName || 'your business'}</strong> currently operates with an overall Growth Score of <strong>{globalScore}/100</strong>, indicating a <strong>{getScoreStatus(globalScore).toLowerCase()}</strong> state of operational readiness and market positioning in the {formData.industry || 'business'} sector.
                     </p>
                     {(() => {
                         const lowestPillar = getLowestPillar();
                         const goal = formData.goal || 'scale operations';
                         const challenge = (formData.challenges && formData.challenges.length > 0) ? formData.challenges[0] : 'execution bottlenecks';
                         const industry = formData.industry || 'your sector';

                         return (
                             <p>
                                 <strong>Core Dynamic Observation:</strong> While foundational market demand exists within {industry}, current analytical models indicate that inconsistent systems in <strong>{lowestPillar}</strong> are actively generating structural friction. Prior to aggressively pursuing your objective to {goal.toLowerCase()}, you must immediately resolve these <strong>{lowestPillar}</strong> vulnerabilities. Failure to do so will directly amplify your current {challenge.toLowerCase()} and erode enterprise margins.
                             </p>
                         );
                     })()}
                     {(() => {
                         if (globalScore >= 80) {
                             return (
                                 <>
                                     <p><strong>Strategic Positioning:</strong> Your enterprise exhibits exceptional operational maturity, strong internal systems, and minimal owner dependency. You have successfully cleared the standard growth bottlenecks that crush most MSMEs.</p>
                                     <p><strong>Immediate Priority:</strong> Do not play defensive. Your core objective now is aggressive market expansion, capital optimization, and leveraging your structured framework to dominate your sector.</p>
                                 </>
                             );
                         } else if (globalScore >= 50) {
                             return (
                                 <>
                                     <p><strong>Core Scaling Bottleneck:</strong> The enterprise has solid baseline mechanics but suffers from critical dependencies on the owner for key day-to-day decisions, creating an active execution ceiling.</p>
                                     <p><strong>Immediate Priority:</strong> Transition from reactive firefighting to formal systems engineering by standardizing core operations.</p>
                                 </>
                             );
                         } else {
                             return (
                                 <>
                                     <p><strong>Enterprise Vulnerability Alert:</strong> The diagnostic reveals severe structural deficiencies across multiple core pillars. The enterprise is highly exposed to severe operational leakage, cash-flow volatility, and systemic risk due to an absolute lack of documented processes.</p>
                                     <p><strong>Immediate Priority:</strong> Urgent stabilization is required. You must immediately isolate your highest profit leakage zones and deploy emergency workflow controls.</p>
                                 </>
                             );
                         }
                     })()}
                     <div className="bg-[#F8FAFC] border-l-4 border-[#D4AF37] p-4 rounded-r-lg mt-4">
                        <strong className="text-[#0B2545] text-xs uppercase tracking-widest block mb-1">Executive Recommendation</strong>
                        {(() => {
                            if (globalScore >= 80) {
                                return <p className="text-sm m-0">How KRG ONE Accelerates You: We help high-performing firms design advanced scaling blueprints, execute strategic market entries, and multiply valuation metrics to prepare for enterprise-level dominance.</p>;
                            } else if (globalScore >= 50) {
                                return <p className="text-sm m-0">How KRG ONE Supports You: We deploy functional process optimization tracks to remove structural drag and stabilize growth metrics.</p>;
                            } else {
                                return <p className="text-sm m-0">How KRG ONE Saves Your Margins: This is a high-alert scenario. Our senior turnaround consultants work directly with you to plug immediate operational leaks, secure your cash pipelines, and build emergency checklists to keep your business alive and stable.</p>;
                            }
                        })()}
                     </div>
"""

prose_pattern = r'<div className="prose prose-sm max-w-none text-slate-600 space-y-4">.*?</div>\s*</div>\s*</div>\s*\{\/\* KPI Cards \*\/\}'
match2 = re.search(prose_pattern, content, re.DOTALL)
if match2:
    replacement = f'<div className="prose prose-sm max-w-none text-slate-600 space-y-4">{get_dynamic_text()}                  </div>\n              </div>\n              {{/* KPI Cards */}}'
    content = content.replace(match2.group(0), replacement)

with open('src/components/DashboardReport.tsx', 'w') as f:
    f.write(content)
print("Updated executive summary!")
