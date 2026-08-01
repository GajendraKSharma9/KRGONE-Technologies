import re
import sys

with open('src/components/DashboardReport.tsx', 'r') as f:
    content = f.read()

def get_dynamic_text():
    return """
                     <p>
                        Based on the KRG ONE Business Growth Assessment™, <strong>{formData.companyName || 'your business'}</strong> currently operates with an overall Growth Score of <strong>{globalScore}/100</strong>, indicating a <strong>{getScoreStatus(globalScore).toLowerCase()}</strong> state of operational readiness and market positioning.
                     </p>
                     <p>
                        <strong>Current Business Position & Growth Outlook:</strong> The business demonstrates foundational capabilities in its core service/product delivery. However, the trajectory is significantly constrained by inconsistent internal frameworks. The outlook suggests that without systemic intervention, the business will face a ceiling on its revenue potential, driven primarily by operational friction rather than market demand.
                     </p>
                     {(() => {
                         const goal = formData.goal || '';
                         const challenge = (formData.challenges && formData.challenges.length > 0) ? formData.challenges[0] : '';
                         const revenue = formData.revenue || 'current';
                         const companyName = formData.companyName || 'your business';

                         if (goal.includes('Improve Sales') || challenge.includes('Marketing ROI')) {
                             return (
                                 <>
                                     <p><strong>Biggest Opportunity:</strong> By optimizing your customer acquisition funnel and enhancing your marketing asset allocation, {companyName} can efficiently convert high-value prospects, directly accelerating top-line revenue growth within the {revenue} bracket.</p>
                                     <p><strong>Core Scaling Bottleneck:</strong> While customer acquisition potential is high, the data indicates structural deficiencies in marketing attribution, resulting in volatile client acquisition cycles and key executive dependencies.</p>
                                 </>
                             );
                         } else if (goal.includes('Improve Operations') || challenge.includes('Operational Efficiency')) {
                             return (
                                 <>
                                     <p><strong>Biggest Opportunity:</strong> By standardizing workflows and maximizing operational throughput, your enterprise can protect underlying margins, eliminate service delivery leakage, and manage increased volume seamlessly.</p>
                                     <p><strong>Core Scaling Bottleneck:</strong> Current infrastructure is highly vulnerable to manual process execution. A lack of institutionalized frameworks creates localized errors, raising organizational drag.</p>
                                 </>
                             );
                         } else {
                             return (
                                 <>
                                     <p><strong>Biggest Opportunity:</strong> You can quickly optimize profit margins and maximize enterprise revenue and reduce daily stress by writing down simple rules (SOPs) for your staff. When your team has clear instructions, they make fewer mistakes, eliminate operational drag and recover lost productivity cycles, and can handle more customers without scaling human capital infrastructure.</p>
                                     <p><strong>Core Scaling Bottleneck:</strong> The business has a severe dependency on the owner. Because you are personally involved in every day-to-day operational decision, it creates an execution bottleneck, limits your team's productivity, and blocks business expansion.</p>
                                 </>
                             );
                         }
                     })()}
                     <div className="bg-[#F8FAFC] border-l-4 border-[#D4AF37] p-4 rounded-r-lg mt-4">
                        <strong className="text-[#0B2545] text-xs uppercase tracking-widest block mb-1">Executive Recommendation</strong>
                        {(() => {
                            const goal = formData.goal || '';
                            const challenge = (formData.challenges && formData.challenges.length > 0) ? formData.challenges[0] : '';
                            
                            if (goal.includes('Improve Sales') || challenge.includes('Marketing ROI')) {
                                return <p className="text-sm m-0">Strategic Action Plan: Institutionalize data-driven tracking mechanisms for client acquisition. Standardize marketing performance review loops and streamline conversion parameters to secure predictable pipeline growth without manual executive tracking.</p>;
                            } else if (goal.includes('Improve Operations') || challenge.includes('Operational Efficiency')) {
                                return <p className="text-sm m-0">Strategic Action Plan: Transition immediately toward comprehensive workflow documentation. Deploy cloud-based tracking architecture and define explicit operational benchmarks to protect execution consistency.</p>;
                            } else {
                                return <p className="text-sm m-0">Strategic Action Plan: Shift your focus from reactive operational disruptions to building strong operational systems. You must document clear, step-by-step Standard Operating Procedures (SOPs) for your sales, marketing, and office operations. Train and empower your team leaders to handle daily workflows so the business can scale efficiently without requiring your constant personal approval.</p>;
                            }
                        })()}
                     </div>
"""

# Now search for the block
pattern = r'<div className="prose prose-sm max-w-none text-slate-600 space-y-4">.*?</div>\s*</div>\s*</div>\s*\{/\* KPI Cards \*/\}'
match = re.search(pattern, content, re.DOTALL)
if not match:
    print("Could not find the target block")
else:
    new_block = f'<div className="prose prose-sm max-w-none text-slate-600 space-y-4">{get_dynamic_text()}</div>\s*</div>\s*</div>\s*{{/* KPI Cards */}}'
    # we need to be careful with string replacement
    # better to just replace the prose block
    prose_pattern = r'<div className="prose prose-sm max-w-none text-slate-600 space-y-4">.*?</div>\s*</div>\s*</div>'
    match2 = re.search(prose_pattern, content, re.DOTALL)
    if match2:
        replacement = f'<div className="prose prose-sm max-w-none text-slate-600 space-y-4">{get_dynamic_text()}                  </div>\n              </div>'
        content = content.replace(match2.group(0), replacement)
        with open('src/components/DashboardReport.tsx', 'w') as f:
            f.write(content)
        print("Updated prose!")
