const fs = require('fs');
let code = fs.readFileSync('src/components/PrintDossier.tsx', 'utf-8');

// Revert Phase 1
const p1New = `<div className="p-4 grid grid-cols-2 gap-3 bg-white text-[9.5pt] font-bold text-slate-700 leading-relaxed">
              <div className="space-y-2">
                <p>&bull; Emergency Risk Mitigation: Isolate and plug immediate cash flow leakages and severe operational friction points in {lowest?.name || 'Operations'}.</p>
                <p>&bull; Stabilization Sprint: Deploy basic end-of-day daily tracking templates for all operational staff members to secure consistent output.</p>
              </div>
              <div className="space-y-2">
                <p>&bull; Governance Constraint: Stop daily administrative tasks from reaching the executive founder layer by establishing a strict delegation rule.</p>
                <p>&bull; Challenge Mapping: Set up absolute tracking metrics for primary bottleneck: "{formData?.challenges && formData.challenges.length > 0 ? formData.challenges[0] : 'Core Operational Leakage'}".</p>
              </div>
            </div>`;

const p1Old = `<div className="p-3 grid grid-cols-2 gap-3 bg-white text-[10pt] font-bold text-slate-700 leading-relaxed">
              <div className="space-y-2">
                <p>&bull; Urgently address critical vulnerabilities in<br/>{lowest?.name || 'Technology & Systems'} (current score: {Math.round(lowest?.score || 29)}%).</p>
                <p>&bull; Set up absolute tracking metrics for<br/>selected primary challenge: "{formData?.challenges && formData.challenges.length > 0 ? formData.challenges[0] : 'Core Operational Leakage'}".</p>
              </div>
              <div className="space-y-2">
                <p>&bull; Establish immediate administrative<br/>delegation rules to reclaim founder<br/>bandwidth from {lowest?.name || 'Technology & Systems'}.</p>
                <p>&bull; Deploy daily 15-minute standups to audit<br/>workflow leakages and address Leadership &<br/>Governance constraints.</p>
              </div>
            </div>`;
code = code.replace(p1New, p1Old);

// Revert Phase 2
const p2New = `<div className="p-4 grid grid-cols-2 gap-3 bg-white text-[9.5pt] font-bold text-slate-700 leading-relaxed">
              <div className="space-y-2">
                <p>&bull; Workflow Architecture: Begin formal drafting and deployment of step-by-step SOPs across your lowest-performing operational pillars.</p>
                <p>&bull; Departmental Sprints: Build lightweight cloud tracking systems to monitor departmental output and customer acquisition channels.</p>
              </div>
              <div className="space-y-2">
                <p>&bull; Friction Elimination: Optimize {industryTerm} to systematically eliminate handoff friction and delays between teams.</p>
                <p>&bull; Accountability Alignment: Conduct team accountability alignment sprints to match staff responsibilities with concrete operational targets.</p>
              </div>
            </div>`;
const p2Old = `<div className="p-3 grid grid-cols-2 gap-3 bg-white text-[10pt] font-bold text-slate-700 leading-relaxed">
              <div className="space-y-2">
                <p>&bull; Draft and deploy step-by-step Standard<br/>Operating Procedures (SOPs) for Leadership<br/>& Governance workflows.</p>
                <p>&bull; Build lightweight cloud tracking systems to<br/>monitor departmental output and customer<br/>acquisition channels.</p>
              </div>
              <div className="space-y-2">
                <p>&bull; Optimize DevOps/software delivery &<br/>automated deployment logs to systematically<br/>eliminate handoff friction and delays.</p>
                <p>&bull; Conduct team accountability alignment<br/>sprints to match staff responsibilities with<br/>operational targets.</p>
              </div>
            </div>`;
code = code.replace(p2New, p2Old);

// Revert Phase 3
const p3New = `<div className="p-4 grid grid-cols-2 gap-3 bg-white text-[9.5pt] font-bold text-slate-700 leading-relaxed">
              <div className="space-y-2">
                <p>&bull; Automation Integration: Integrate scalable automation tools and modern business software models to eliminate redundant labor tasks.</p>
                <p>&bull; Review Cycles: Transition management team to a formal weekly performance review cycle based on concrete KPIs rather than personal oversight.</p>
              </div>
              <div className="space-y-2">
                <p>&bull; Capital Scaling: Formulate a 12-month capital reallocation and expansion roadmap to solidify your market position and maximize efficiency.</p>
                <p>&bull; Revenue Optimization: Review the unit profit margins across all core product lines to maximize revenue efficiency and fuel aggressive scaling.</p>
              </div>
            </div>`;
const p3Old = `<div className="p-3 grid grid-cols-2 gap-3 bg-white text-[10pt] font-bold text-slate-700 leading-relaxed">
              <div className="space-y-2">
                <p>&bull; Leverage core organizational strength in<br/>{strongest?.name || 'Sales & Customer Acquisition'} to fuel primary<br/>growth goals.</p>
                <p>&bull; Transition leadership team to weekly KPI<br/>review cycles, removing owner validation<br/>gates.</p>
              </div>
              <div className="space-y-2">
                <p>&bull; Implement targeted automations to execute<br/>business goal: "{mainGoal}".</p>
                <p>&bull; Formulate a 12-month capital reallocation<br/>and expansion roadmap to solidify your<br/>market position.</p>
              </div>
            </div>`;
code = code.replace(p3New, p3Old);

fs.writeFileSync('src/components/PrintDossier.tsx', code);
