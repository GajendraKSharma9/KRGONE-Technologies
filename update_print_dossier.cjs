const fs = require('fs');

const content = `
import React from 'react';
import {
  CheckCircle2, AlertTriangle, Check, ArrowRight, ShieldCheck, TrendingUp,
  Target, Activity, Award, Calendar, Phone, Mail, Globe, MapPin, Building2,
  Users, DollarSign, Cpu, Layers, User, Zap, BarChart3, Compass
} from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface PrintDossierProps {
  report?: any;
  formData?: any;
  scores?: number[];
  globalScore?: number;
  pillarScores?: number[];
  reportId?: string;
  assessmentDate?: string;
}

export default function PrintDossier({
  report,
  formData = {},
  scores = [],
  globalScore = 78,
  pillarScores = [],
  reportId = 'KRG-2026-0001',
  assessmentDate = ''
}: PrintDossierProps) {
  const companyName = report?.profile?.company?.companyName || formData?.companyName || 'Not Provided';
  const ownerName = report?.profile?.company?.contactPerson || formData?.fullName || 'Not Provided';
  const industry = report?.profile?.business?.industry || formData?.industry || 'Technology';
  const revenue = report?.profile?.size?.annualRevenueRange || formData?.revenue || '$1M - $5M';
  const employees = formData?.businessSize || formData?.headcount || '11-50 employees';
  const yearsInBusiness = formData?.yearsInBusiness || '6 Years';
  const businessModel = formData?.businessModel || 'Product + Services';
  const businessCategory = formData?.businessCategory || 'B2B Enterprise';

  const pScores = (() => {
    if (pillarScores && pillarScores.length > 0) {
      return pillarScores.map(val => (val >= 1 && val <= 5) ? val * 20 : val);
    }
    return [70, 60, 50, 40, 80, 90, 30]; // fallback
  })();

  const PILLARS = [
    { id: 1, name: 'Leadership & Vision', score: pScores[0] || 0 },
    { id: 2, name: 'Sales & Revenue', score: pScores[1] || 0 },
    { id: 3, name: 'Marketing & Customer Growth', score: pScores[2] || 0 },
    { id: 4, name: 'Operations & Process', score: pScores[3] || 0 },
    { id: 5, name: 'Finance & Business Performance', score: pScores[4] || 0 },
    { id: 6, name: 'People & Leadership', score: pScores[5] || 0 },
    { id: 7, name: 'Technology & Business Innovation', score: pScores[6] || 0 }
  ];

  const sortedPillars = [...PILLARS].sort((a, b) => a.score - b.score);
  const lowest = sortedPillars[0];
  const strongest = sortedPillars[sortedPillars.length - 1];

  const getGrowthClassification = (score: number) => {
    if (score >= 85) return { label: 'ELITE MATURITY', class: 'text-blue-700' };
    if (score >= 70) return { label: 'OPTIMIZED', class: 'text-blue-600' };
    if (score >= 50) return { label: 'DEVELOPING MATURITY', class: 'text-amber-600' };
    return { label: 'CRITICAL RISK', class: 'text-rose-600' };
  };
  const gClass = getGrowthClassification(globalScore);

  const getOpportunityBadge = (score: number) => {
    if (score >= 80) return <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-[9pt] font-semibold border border-emerald-200">Very High</span>;
    if (score >= 60) return <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-[9pt] font-semibold border border-blue-200">High</span>;
    if (score >= 40) return <span className="bg-amber-50 text-amber-700 px-2 py-1 rounded text-[9pt] font-semibold border border-amber-200">Medium</span>;
    return <span className="bg-rose-50 text-rose-700 px-2 py-1 rounded text-[9pt] font-semibold border border-rose-200">Low</span>;
  }

  const renderFooter = (page: number, total: number) => (
    <div className="mt-auto pt-4 border-t border-slate-200 text-[8.5pt] text-slate-500 grid grid-cols-3 items-center">
      <div className="font-bold text-slate-700 text-left">KRGONE</div>
      <div className="text-center">
        <span>Jaipur, Rajasthan</span>
        <span className="block mt-1">Page {page} of {total}</span>
      </div>
      <div className="text-right space-y-1">
        <div>📞 +91 7300300330</div>
        <div>✉ enquiry.krgone@gmail.com</div>
        <div>🌐 krgone.vercel.app</div>
      </div>
    </div>
  );

  return (
    <div id="krg-print-dossier-root" className="hidden print:block w-full bg-white text-slate-900 font-sans">
      <style dangerouslySetInnerHTML={{__html: \`
        @page { size: A4; margin: 20mm; }
        .print-page { page-break-after: always; height: 100%; display: flex; flex-direction: column; }
        .print-page:last-child { page-break-after: auto; }
        * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        body { margin: 0; padding: 0; background: white; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
        h1, h2, h3, h4, h5, p, span, div { page-break-inside: avoid; }
        .avoid-break { page-break-inside: avoid; }
      \`}} />

      {/* PAGE 1: COVER PAGE */}
      <div className="print-page flex flex-col justify-center items-center text-center">
        <div className="flex-1 flex flex-col justify-center items-center max-w-2xl mx-auto w-full space-y-12">
          <div className="space-y-4">
            <h2 className="text-[20pt] font-bold text-slate-800 uppercase tracking-widest">KRGONE</h2>
            <h3 className="text-[13pt] text-slate-500 uppercase tracking-widest">Business Growth Operating System™</h3>
          </div>
          
          <div className="w-24 h-px bg-slate-300 mx-auto"></div>
          
          <div className="space-y-6 w-full">
            <h1 className="text-[28pt] font-black text-[#0f172a] leading-tight uppercase tracking-tight">Business Diagnostic<br/>Report</h1>
            <span className="inline-block px-4 py-1.5 border border-slate-300 text-[10.5pt] text-slate-600 font-medium uppercase tracking-widest rounded">Confidential</span>
          </div>
          
          <div className="w-24 h-px bg-slate-300 mx-auto"></div>
          
          <div className="w-full text-center space-y-6 pt-8">
            <div className="space-y-1">
              <p className="text-[9pt] font-bold text-slate-400 uppercase tracking-widest">Prepared For</p>
              <p className="text-[16pt] font-semibold text-slate-800">{ownerName}</p>
              <p className="text-[13pt] text-slate-600">{companyName}</p>
            </div>
            
            <div className="flex justify-center gap-16 pt-8">
              <div className="space-y-1 text-center">
                <p className="text-[9pt] font-bold text-slate-400 uppercase tracking-widest">Assessment Date</p>
                <p className="text-[10.5pt] text-slate-800 font-medium">{assessmentDate}</p>
              </div>
              <div className="space-y-1 text-center">
                <p className="text-[9pt] font-bold text-slate-400 uppercase tracking-widest">Report ID</p>
                <p className="text-[10.5pt] text-slate-800 font-medium">{reportId}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 2: EXECUTIVE OVERVIEW */}
      <div className="print-page">
        <h2 className="text-[20pt] font-bold text-[#0f172a] mb-8 pb-2 border-b border-slate-200">1. Executive Overview</h2>
        
        <div className="grid grid-cols-5 gap-4 mb-10">
          <div className="col-span-1 border border-slate-200 rounded p-4 text-center">
            <p className="text-[9pt] text-slate-500 font-bold uppercase tracking-wider mb-2">SCORE</p>
            <p className="text-[20pt] font-black text-[#0f172a]">{globalScore}</p>
          </div>
          <div className="col-span-1 border border-slate-200 rounded p-4 text-center flex flex-col justify-center">
            <p className="text-[9pt] text-slate-500 font-bold uppercase tracking-wider mb-2">HEALTH</p>
            <p className={"text-[11pt] font-bold leading-tight " + gClass.class}>{gClass.label}</p>
          </div>
          <div className="col-span-1 border border-slate-200 rounded p-4 text-center">
            <p className="text-[9pt] text-slate-500 font-bold uppercase tracking-wider mb-2">READINESS</p>
            <p className="text-[13pt] font-bold text-slate-800">{globalScore >= 70 ? 'High' : (globalScore >= 50 ? 'Medium' : 'Low')}</p>
          </div>
          <div className="col-span-1 border border-slate-200 rounded p-4 text-center">
            <p className="text-[9pt] text-slate-500 font-bold uppercase tracking-wider mb-2">POTENTIAL</p>
            <p className="text-[13pt] font-bold text-slate-800">High</p>
          </div>
          <div className="col-span-1 border border-slate-200 rounded p-4 text-center">
            <p className="text-[9pt] text-slate-500 font-bold uppercase tracking-wider mb-2">RISK</p>
            <p className="text-[13pt] font-bold text-slate-800">{globalScore >= 70 ? 'Low' : (globalScore >= 50 ? 'Medium' : 'High')}</p>
          </div>
        </div>

        <h3 className="text-[16pt] font-bold text-[#0f172a] mb-4">Executive Summary</h3>
        <div className="text-[10.5pt] text-slate-700 leading-[1.7] space-y-5">
          <p>The business demonstrates a {gClass.label.toLowerCase()} operational foundation, achieving an overall health score of {globalScore}/100. Operating within the {industry} sector, current capabilities highlight core competencies in {strongest?.name}, providing a solid baseline for ongoing operations and customer value delivery.</p>
          
          <p>However, significant bottlenecks in {lowest?.name} currently restrict scalable growth. The reliance on manual execution and direct founder intervention creates a structural ceiling, requiring immediate standardization and the deployment of targeted operational frameworks to ensure sustainable scaling.</p>
          
          <p>By systematically addressing these systemic gaps and transitioning to a robust, process-driven architecture, {companyName} is positioned to unlock high-yield efficiencies, stabilize delivery, mitigate operational risks, and capture advanced market share in its primary segments.</p>
        </div>
        {renderFooter(2, 8)}
      </div>

      {/* PAGE 3: BUSINESS HEALTH DASHBOARD */}
      <div className="print-page">
        <h2 className="text-[20pt] font-bold text-[#0f172a] mb-8 pb-2 border-b border-slate-200">2. Business Health Dashboard™</h2>
        
        <h3 className="text-[16pt] font-bold text-[#0f172a] mb-4">Business Profile</h3>
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="border border-slate-200 p-4 rounded">
            <p className="text-[9pt] text-slate-500 font-bold uppercase mb-1">Industry</p>
            <p className="text-[10.5pt] font-semibold text-slate-800">{industry}</p>
          </div>
          <div className="border border-slate-200 p-4 rounded">
            <p className="text-[9pt] text-slate-500 font-bold uppercase mb-1">Business Category</p>
            <p className="text-[10.5pt] font-semibold text-slate-800">{businessCategory}</p>
          </div>
          <div className="border border-slate-200 p-4 rounded">
            <p className="text-[9pt] text-slate-500 font-bold uppercase mb-1">Business Model</p>
            <p className="text-[10.5pt] font-semibold text-slate-800">{businessModel}</p>
          </div>
          <div className="border border-slate-200 p-4 rounded">
            <p className="text-[9pt] text-slate-500 font-bold uppercase mb-1">Revenue Range</p>
            <p className="text-[10.5pt] font-semibold text-slate-800">{revenue}</p>
          </div>
          <div className="border border-slate-200 p-4 rounded">
            <p className="text-[9pt] text-slate-500 font-bold uppercase mb-1">Employee Range</p>
            <p className="text-[10.5pt] font-semibold text-slate-800">{employees}</p>
          </div>
          <div className="border border-slate-200 p-4 rounded">
            <p className="text-[9pt] text-slate-500 font-bold uppercase mb-1">Year Established</p>
            <p className="text-[10.5pt] font-semibold text-slate-800">{yearsInBusiness}</p>
          </div>
        </div>

        <h3 className="text-[16pt] font-bold text-[#0f172a] mb-4">Business Health Summary</h3>
        <div className="grid grid-cols-2 gap-8 items-center border border-slate-200 p-6 rounded">
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={PILLARS}>
                <PolarGrid stroke="#cbd5e1" />
                <PolarAngleAxis dataKey="name" tick={{ fill: '#475569', fontSize: 9, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 9 }} />
                <Radar name="Score" dataKey="score" stroke="#0f172a" fill="#0f172a" fillOpacity={0.08} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <span className="text-[10.5pt] font-semibold text-slate-600">Overall Score</span>
              <span className="text-[13pt] font-black text-[#0f172a]">{globalScore}/100</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <span className="text-[10.5pt] font-semibold text-slate-600">Business Readiness</span>
              <span className="text-[13pt] font-black text-[#0f172a]">{Math.min(100, Math.round(globalScore * 1.1))}%</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <span className="text-[10.5pt] font-semibold text-slate-600">Growth Index</span>
              <span className="text-[13pt] font-black text-[#0f172a]">{Math.max(20, Math.round(globalScore * 1.2))}%</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <span className="text-[10.5pt] font-semibold text-slate-600">Risk Index</span>
              <span className="text-[13pt] font-black text-rose-600">{Math.max(10, 100 - globalScore)}%</span>
            </div>
          </div>
        </div>
        {renderFooter(3, 8)}
      </div>

      {/* PAGE 4: SEVEN PILLAR ANALYSIS (1-2) */}
      <div className="print-page">
        <h2 className="text-[20pt] font-bold text-[#0f172a] mb-6 pb-2 border-b border-slate-200">3. Seven Pillar Analysis</h2>
        <div className="space-y-6 flex-1">
          {PILLARS.slice(0, 2).map((pillar) => (
            <div key={pillar.id} className="border border-slate-200 rounded p-6 avoid-break">
              <div className="flex justify-between items-end mb-4 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[9pt] font-bold text-slate-400 uppercase tracking-widest block mb-1">PILLAR {pillar.id}</span>
                  <h3 className="text-[16pt] font-bold text-[#0f172a]">{pillar.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-[16pt] font-black text-[#0f172a] block leading-none">{pillar.score}<span className="text-[10.5pt] font-medium text-slate-500">/100</span></span>
                  <span className="text-[9pt] font-bold text-slate-500 uppercase tracking-wider">Current Score</span>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-[9pt] font-bold text-slate-500 uppercase tracking-wider block mb-1">Current Position</span>
                <p className="text-[10.5pt] text-slate-700 leading-relaxed">
                  {pillar.score >= 80 ? 'Excelling in strategic execution and systemization.' : (pillar.score >= 50 ? 'Developing baseline capabilities but requires process optimization.' : 'Critical bottlenecks identified requiring immediate leadership intervention.')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[9pt] font-bold text-emerald-600 uppercase mb-2">Key Strengths</h4>
                  <ul className="text-[10.5pt] text-slate-700 list-none space-y-1">
                    <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span> Foundational alignment established.</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span> Operational awareness in {pillar.name.split(' & ')[0].toLowerCase()}.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[9pt] font-bold text-amber-600 uppercase mb-2">Improvement Areas</h4>
                  <ul className="text-[10.5pt] text-slate-700 list-none space-y-1">
                    <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">•</span> Standardizing repeatable workflows.</li>
                    <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">•</span> Reducing manual intervention.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[9pt] font-bold text-rose-600 uppercase mb-2">Business Risks</h4>
                  <ul className="text-[10.5pt] text-slate-700 list-none space-y-1">
                    <li className="flex items-start gap-2"><span className="text-rose-500 mt-0.5">•</span> Scalability severely limited by current friction.</li>
                    <li className="flex items-start gap-2"><span className="text-rose-500 mt-0.5">•</span> Inconsistent delivery outcomes.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[9pt] font-bold text-blue-600 uppercase mb-2">Strategic Recommendation</h4>
                  <ul className="text-[10.5pt] text-slate-700 list-none space-y-1">
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span> Implement strict KPI tracking frameworks.</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span> Document process playbooks.</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        {renderFooter(4, 8)}
      </div>

      {/* PAGE 5: SEVEN PILLAR ANALYSIS (3-4) */}
      <div className="print-page">
        <h2 className="text-[20pt] font-bold text-[#0f172a] mb-6 pb-2 border-b border-slate-200">3. Seven Pillar Analysis (Continued)</h2>
        <div className="space-y-6 flex-1">
          {PILLARS.slice(2, 4).map((pillar) => (
            <div key={pillar.id} className="border border-slate-200 rounded p-6 avoid-break">
              <div className="flex justify-between items-end mb-4 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[9pt] font-bold text-slate-400 uppercase tracking-widest block mb-1">PILLAR {pillar.id}</span>
                  <h3 className="text-[16pt] font-bold text-[#0f172a]">{pillar.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-[16pt] font-black text-[#0f172a] block leading-none">{pillar.score}<span className="text-[10.5pt] font-medium text-slate-500">/100</span></span>
                  <span className="text-[9pt] font-bold text-slate-500 uppercase tracking-wider">Current Score</span>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-[9pt] font-bold text-slate-500 uppercase tracking-wider block mb-1">Current Position</span>
                <p className="text-[10.5pt] text-slate-700 leading-relaxed">
                  {pillar.score >= 80 ? 'Excelling in strategic execution and systemization.' : (pillar.score >= 50 ? 'Developing baseline capabilities but requires process optimization.' : 'Critical bottlenecks identified requiring immediate leadership intervention.')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[9pt] font-bold text-emerald-600 uppercase mb-2">Key Strengths</h4>
                  <ul className="text-[10.5pt] text-slate-700 list-none space-y-1">
                    <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span> Foundational alignment established.</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span> Operational awareness in {pillar.name.split(' & ')[0].toLowerCase()}.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[9pt] font-bold text-amber-600 uppercase mb-2">Improvement Areas</h4>
                  <ul className="text-[10.5pt] text-slate-700 list-none space-y-1">
                    <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">•</span> Standardizing repeatable workflows.</li>
                    <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">•</span> Reducing manual intervention.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[9pt] font-bold text-rose-600 uppercase mb-2">Business Risks</h4>
                  <ul className="text-[10.5pt] text-slate-700 list-none space-y-1">
                    <li className="flex items-start gap-2"><span className="text-rose-500 mt-0.5">•</span> Scalability severely limited by current friction.</li>
                    <li className="flex items-start gap-2"><span className="text-rose-500 mt-0.5">•</span> Inconsistent delivery outcomes.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[9pt] font-bold text-blue-600 uppercase mb-2">Strategic Recommendation</h4>
                  <ul className="text-[10.5pt] text-slate-700 list-none space-y-1">
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span> Implement strict KPI tracking frameworks.</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span> Document process playbooks.</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        {renderFooter(5, 8)}
      </div>

      {/* PAGE 6: SEVEN PILLAR ANALYSIS (5-6) */}
      <div className="print-page">
        <h2 className="text-[20pt] font-bold text-[#0f172a] mb-6 pb-2 border-b border-slate-200">3. Seven Pillar Analysis (Continued)</h2>
        <div className="space-y-6 flex-1">
          {PILLARS.slice(4, 6).map((pillar) => (
            <div key={pillar.id} className="border border-slate-200 rounded p-6 avoid-break">
              <div className="flex justify-between items-end mb-4 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[9pt] font-bold text-slate-400 uppercase tracking-widest block mb-1">PILLAR {pillar.id}</span>
                  <h3 className="text-[16pt] font-bold text-[#0f172a]">{pillar.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-[16pt] font-black text-[#0f172a] block leading-none">{pillar.score}<span className="text-[10.5pt] font-medium text-slate-500">/100</span></span>
                  <span className="text-[9pt] font-bold text-slate-500 uppercase tracking-wider">Current Score</span>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-[9pt] font-bold text-slate-500 uppercase tracking-wider block mb-1">Current Position</span>
                <p className="text-[10.5pt] text-slate-700 leading-relaxed">
                  {pillar.score >= 80 ? 'Excelling in strategic execution and systemization.' : (pillar.score >= 50 ? 'Developing baseline capabilities but requires process optimization.' : 'Critical bottlenecks identified requiring immediate leadership intervention.')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[9pt] font-bold text-emerald-600 uppercase mb-2">Key Strengths</h4>
                  <ul className="text-[10.5pt] text-slate-700 list-none space-y-1">
                    <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span> Foundational alignment established.</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span> Operational awareness in {pillar.name.split(' & ')[0].toLowerCase()}.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[9pt] font-bold text-amber-600 uppercase mb-2">Improvement Areas</h4>
                  <ul className="text-[10.5pt] text-slate-700 list-none space-y-1">
                    <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">•</span> Standardizing repeatable workflows.</li>
                    <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">•</span> Reducing manual intervention.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[9pt] font-bold text-rose-600 uppercase mb-2">Business Risks</h4>
                  <ul className="text-[10.5pt] text-slate-700 list-none space-y-1">
                    <li className="flex items-start gap-2"><span className="text-rose-500 mt-0.5">•</span> Scalability severely limited by current friction.</li>
                    <li className="flex items-start gap-2"><span className="text-rose-500 mt-0.5">•</span> Inconsistent delivery outcomes.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[9pt] font-bold text-blue-600 uppercase mb-2">Strategic Recommendation</h4>
                  <ul className="text-[10.5pt] text-slate-700 list-none space-y-1">
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span> Implement strict KPI tracking frameworks.</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span> Document process playbooks.</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        {renderFooter(6, 8)}
      </div>

      {/* PAGE 7: SEVEN PILLAR ANALYSIS (7) & AI GROWTH ADVISORY */}
      <div className="print-page">
        <h2 className="text-[20pt] font-bold text-[#0f172a] mb-6 pb-2 border-b border-slate-200">3. Seven Pillar Analysis (Continued)</h2>
        <div className="space-y-6 mb-10">
          {PILLARS.slice(6, 7).map((pillar) => (
            <div key={pillar.id} className="border border-slate-200 rounded p-6 avoid-break">
              <div className="flex justify-between items-end mb-4 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[9pt] font-bold text-slate-400 uppercase tracking-widest block mb-1">PILLAR {pillar.id}</span>
                  <h3 className="text-[16pt] font-bold text-[#0f172a]">{pillar.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-[16pt] font-black text-[#0f172a] block leading-none">{pillar.score}<span className="text-[10.5pt] font-medium text-slate-500">/100</span></span>
                  <span className="text-[9pt] font-bold text-slate-500 uppercase tracking-wider">Current Score</span>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-[9pt] font-bold text-slate-500 uppercase tracking-wider block mb-1">Current Position</span>
                <p className="text-[10.5pt] text-slate-700 leading-relaxed">
                  {pillar.score >= 80 ? 'Excelling in strategic execution and systemization.' : (pillar.score >= 50 ? 'Developing baseline capabilities but requires process optimization.' : 'Critical bottlenecks identified requiring immediate leadership intervention.')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[9pt] font-bold text-emerald-600 uppercase mb-2">Key Strengths</h4>
                  <ul className="text-[10.5pt] text-slate-700 list-none space-y-1">
                    <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span> Foundational alignment established.</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span> Operational awareness in {pillar.name.split(' & ')[0].toLowerCase()}.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[9pt] font-bold text-amber-600 uppercase mb-2">Improvement Areas</h4>
                  <ul className="text-[10.5pt] text-slate-700 list-none space-y-1">
                    <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">•</span> Standardizing repeatable workflows.</li>
                    <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">•</span> Reducing manual intervention.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[9pt] font-bold text-rose-600 uppercase mb-2">Business Risks</h4>
                  <ul className="text-[10.5pt] text-slate-700 list-none space-y-1">
                    <li className="flex items-start gap-2"><span className="text-rose-500 mt-0.5">•</span> Scalability severely limited by current friction.</li>
                    <li className="flex items-start gap-2"><span className="text-rose-500 mt-0.5">•</span> Inconsistent delivery outcomes.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[9pt] font-bold text-blue-600 uppercase mb-2">Strategic Recommendation</h4>
                  <ul className="text-[10.5pt] text-slate-700 list-none space-y-1">
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span> Implement strict KPI tracking frameworks.</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span> Document process playbooks.</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-[20pt] font-bold text-[#0f172a] mb-6 pb-2 border-b border-slate-200">4. AI Growth Advisory</h2>
        <div className="space-y-6 text-[10.5pt] text-slate-700 leading-[1.7]">
          <div>
            <h3 className="text-[13pt] font-bold text-[#0f172a] mb-2">Executive Diagnosis & Business Summary</h3>
            <p>Our diagnostic review of {companyName} reveals clear structural growth constraints. While momentum exists in select areas, systemic dependencies on manual oversight limit scalability. The immediate priority is decoupling day-to-day execution from executive validation.</p>
          </div>
          <div>
            <h3 className="text-[13pt] font-bold text-[#0f172a] mb-2">Top Opportunities & Risks</h3>
            <p>Significant yield can be unlocked by automating routine delivery tasks. However, failing to institutionalize these workflows presents an acute operational risk, potentially leading to increased margin degradation and stalled revenue performance during high-volume periods.</p>
          </div>
          <div>
            <h3 className="text-[13pt] font-bold text-[#0f172a] mb-2">Strategic Priorities</h3>
            <p>Implementation must focus on standardizing your top 10 workflows within 90 days. Establishing a robust digital infrastructure will protect existing profit margins and provide the leverage needed for aggressive market expansion and sustained operational excellence.</p>
          </div>
        </div>
        {renderFooter(7, 8)}
      </div>

      {/* PAGE 8: OPPORTUNITIES & 90-DAY PLAN */}
      <div className="print-page">
        <h2 className="text-[20pt] font-bold text-[#0f172a] mb-8 pb-2 border-b border-slate-200">5. Opportunities & 90-Day Plan</h2>
        
        <h3 className="text-[16pt] font-bold text-[#0f172a] mb-4">Strategic Growth Opportunities</h3>
        
        <div className="border border-slate-200 rounded overflow-hidden mb-10">
          <table className="w-full text-left text-[9pt]">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="py-3 px-4 font-bold text-slate-700 w-2/3 uppercase tracking-wider">Opportunity Area</th>
                <th className="py-3 px-4 font-bold text-slate-700 text-right w-1/3 uppercase tracking-wider">Potential</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="py-3 px-4 text-slate-800 font-semibold text-[10.5pt]">Revenue Growth Readiness</td>
                <td className="py-3 px-4 text-right">{getOpportunityBadge(PILLARS[1].score)}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-800 font-semibold text-[10.5pt]">Operational Excellence</td>
                <td className="py-3 px-4 text-right">{getOpportunityBadge(PILLARS[3].score)}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-800 font-semibold text-[10.5pt]">Business Scalability</td>
                <td className="py-3 px-4 text-right">{getOpportunityBadge(globalScore)}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-800 font-semibold text-[10.5pt]">Digital Transformation</td>
                <td className="py-3 px-4 text-right">{getOpportunityBadge(PILLARS[6].score)}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-800 font-semibold text-[10.5pt]">Leadership Readiness</td>
                <td className="py-3 px-4 text-right">{getOpportunityBadge(PILLARS[0].score)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-[16pt] font-bold text-[#0f172a] mb-4">90-Day Execution Plan</h3>
        
        <div className="space-y-6">
          <div className="border border-slate-200 rounded p-5 avoid-break">
            <h4 className="text-[13pt] font-bold text-[#0f172a] mb-3 border-b border-slate-100 pb-2">Days 1–30: Stabilization & Audit</h4>
            <div className="grid grid-cols-2 gap-6 text-[10.5pt]">
              <div>
                <p className="text-[9pt] font-bold text-slate-400 uppercase tracking-wider mb-1">Objective</p>
                <p className="text-slate-700 mb-3">Isolate process leaks and map current state workflows.</p>
                <p className="text-[9pt] font-bold text-slate-400 uppercase tracking-wider mb-1">Success KPI</p>
                <p className="text-slate-700 font-semibold">Completion of Core Workflow Audit</p>
              </div>
              <div>
                <p className="text-[9pt] font-bold text-slate-400 uppercase tracking-wider mb-1">Top 3 Actions</p>
                <ul className="text-slate-700 list-none space-y-1">
                  <li className="flex items-start gap-2"><span className="text-slate-400 mt-0.5">•</span> Conduct departmental friction analysis.</li>
                  <li className="flex items-start gap-2"><span className="text-slate-400 mt-0.5">•</span> Implement daily stand-ups.</li>
                  <li className="flex items-start gap-2"><span className="text-slate-400 mt-0.5">•</span> Draft initial delegation framework.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border border-slate-200 rounded p-5 avoid-break">
            <h4 className="text-[13pt] font-bold text-[#0f172a] mb-3 border-b border-slate-100 pb-2">Days 31–60: Systematization</h4>
            <div className="grid grid-cols-2 gap-6 text-[10.5pt]">
              <div>
                <p className="text-[9pt] font-bold text-slate-400 uppercase tracking-wider mb-1">Objective</p>
                <p className="text-slate-700 mb-3">Document Standard Operating Procedures (SOPs).</p>
                <p className="text-[9pt] font-bold text-slate-400 uppercase tracking-wider mb-1">Success KPI</p>
                <p className="text-slate-700 font-semibold">80% of Core Tasks Documented</p>
              </div>
              <div>
                <p className="text-[9pt] font-bold text-slate-400 uppercase tracking-wider mb-1">Top 3 Actions</p>
                <ul className="text-slate-700 list-none space-y-1">
                  <li className="flex items-start gap-2"><span className="text-slate-400 mt-0.5">•</span> Record video walkthroughs of key tasks.</li>
                  <li className="flex items-start gap-2"><span className="text-slate-400 mt-0.5">•</span> Set up central digital playbook repository.</li>
                  <li className="flex items-start gap-2"><span className="text-slate-400 mt-0.5">•</span> Define role-specific scorecards.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border border-slate-200 rounded p-5 avoid-break">
            <h4 className="text-[13pt] font-bold text-[#0f172a] mb-3 border-b border-slate-100 pb-2">Days 61–90: Automation & Scaling</h4>
            <div className="grid grid-cols-2 gap-6 text-[10.5pt]">
              <div>
                <p className="text-[9pt] font-bold text-slate-400 uppercase tracking-wider mb-1">Objective</p>
                <p className="text-slate-700 mb-3">Integrate software tools and optimize resource allocation.</p>
                <p className="text-[9pt] font-bold text-slate-400 uppercase tracking-wider mb-1">Success KPI</p>
                <p className="text-slate-700 font-semibold">Weekly Executive KPI Dashboard Active</p>
              </div>
              <div>
                <p className="text-[9pt] font-bold text-slate-400 uppercase tracking-wider mb-1">Top 3 Actions</p>
                <ul className="text-slate-700 list-none space-y-1">
                  <li className="flex items-start gap-2"><span className="text-slate-400 mt-0.5">•</span> Deploy API integrations for data handoffs.</li>
                  <li className="flex items-start gap-2"><span className="text-slate-400 mt-0.5">•</span> Transition to weekly KPI review cycles.</li>
                  <li className="flex items-start gap-2"><span className="text-slate-400 mt-0.5">•</span> Finalize 12-month capital roadmap.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {renderFooter(8, 8)}
      </div>
      
    </div>
  );
}
`
fs.writeFileSync('src/components/PrintDossier.tsx', content);
