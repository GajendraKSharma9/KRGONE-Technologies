import React from 'react';
import { ProcessedDossierData } from './dossierTypes';
import { DossierHeader } from './DossierHeader';
import { DossierFooter } from './DossierFooter';
import { FileText, Shield, Award, Scale, Check, Lock } from 'lucide-react';

export const Page16Methodology: React.FC<{ data: ProcessedDossierData }> = ({ data }) => {
  return (
    <div 
      className="print-page bg-white w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] text-[#0a192f] p-[12mm] flex flex-col justify-between box-border page-break-after:always relative overflow-hidden print:m-0 font-sans select-none"
      style={{ backgroundColor: '#ffffff', width: '210mm', height: '297mm', padding: '12mm' }}
    >
      <DossierHeader
        sectionTitle="Page 16 · Assessment Methodology & Scoring Framework"
        subtitle="Business Health Index™ Calculation Algorithm, Evaluation Criteria & Legal Disclaimer"
        pageNumber={16}
        icon={<FileText className="w-4 h-4" />}
      />

      <div className="flex-1 flex flex-col gap-3 my-1 overflow-hidden">
        {/* Methodology Framework Overview */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2 pb-1 border-b border-slate-200">
            <Scale className="w-3.5 h-3.5 text-[#0a192f]" />
            <h2 className="text-xs font-black uppercase text-[#0a192f] tracking-wider">
              1. Business Health Index™ Weighted Algorithm
            </h2>
          </div>

          <p className="text-[8pt] text-slate-700 leading-relaxed font-normal mb-2">
            The <strong className="text-[#0a192f]">KRGONE Business Health Index™</strong> applies a proprietary multi-variable scoring model designed specifically for Small and Medium Enterprises (MSMEs) operating in emerging economies. Scores range from 0 to 100 based on a weighted evaluation across 7 fundamental business pillars.
          </p>

          <div className="grid grid-cols-4 gap-2 text-center text-[7.5pt]">
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="font-bold text-red-800 uppercase">0 – 45: Emerging</div>
              <div className="text-[6.5pt] text-slate-500 mt-0.5">High operational friction & founder dependency</div>
            </div>
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="font-bold text-amber-800 uppercase">46 – 65: Developing</div>
              <div className="text-[6.5pt] text-slate-500 mt-0.5">Functional baseline, needs SOP standardization</div>
            </div>
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="font-bold text-blue-800 uppercase">66 – 80: Maturing</div>
              <div className="text-[6.5pt] text-slate-500 mt-0.5">Systematized, ready for market scaling</div>
            </div>
            <div className="bg-white p-2 rounded border border-slate-200">
              <div className="font-bold text-emerald-800 uppercase">81 – 100: Elite OS</div>
              <div className="text-[6.5pt] text-slate-500 mt-0.5">Decoupled execution, high valuation model</div>
            </div>
          </div>
        </div>

        {/* 7 Pillar Weightings Table */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div className="text-xs font-black uppercase text-[#0a192f] mb-1.5 pb-1 border-b border-slate-200">
            2. Pillar Weight Distribution Table
          </div>

          <table className="w-full text-left text-[7.5pt] border-collapse">
            <thead>
              <tr className="bg-[#0a192f] text-white font-bold uppercase">
                <th className="p-1.5 rounded-l">Pillar Name</th>
                <th className="p-1.5 text-center">Weight</th>
                <th className="p-1.5">Evaluation Focus Area</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="p-1.5 font-bold text-slate-900">Leadership & Vision</td>
                <td className="p-1.5 text-center font-mono font-bold text-[#c29d2f]">15%</td>
                <td className="p-1.5 text-slate-600">Strategic direction, decision speed, governance</td>
              </tr>
              <tr>
                <td className="p-1.5 font-bold text-slate-900">Sales & Revenue</td>
                <td className="p-1.5 text-center font-mono font-bold text-[#c29d2f]">20%</td>
                <td className="p-1.5 text-slate-600">Pipeline health, conversion rates, deal closure velocity</td>
              </tr>
              <tr>
                <td className="p-1.5 font-bold text-slate-900">Marketing & Customer Growth</td>
                <td className="p-1.5 text-center font-mono font-bold text-[#c29d2f]">15%</td>
                <td className="p-1.5 text-slate-600">Lead generation consistency, digital footprint, retention</td>
              </tr>
              <tr>
                <td className="p-1.5 font-bold text-slate-900">Operations & Process</td>
                <td className="p-1.5 text-center font-mono font-bold text-[#c29d2f]">15%</td>
                <td className="p-1.5 text-slate-600">SOP documentation level, quality control, turnaround time</td>
              </tr>
              <tr>
                <td className="p-1.5 font-bold text-slate-900">Finance & Performance</td>
                <td className="p-1.5 text-center font-mono font-bold text-[#c29d2f]">15%</td>
                <td className="p-1.5 text-slate-600">Profit margins, working capital cycle, cash flow runway</td>
              </tr>
              <tr>
                <td className="p-1.5 font-bold text-slate-900">People & Organization</td>
                <td className="p-1.5 text-center font-mono font-bold text-[#c29d2f]">10%</td>
                <td className="p-1.5 text-slate-600">Workforce capability, role scorecards, delegation level</td>
              </tr>
              <tr>
                <td className="p-1.5 font-bold text-slate-900">Technology & Innovation</td>
                <td className="p-1.5 text-center font-mono font-bold text-[#c29d2f]">10%</td>
                <td className="p-1.5 text-slate-600">Cloud adoption, process automation, AI tool readiness</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Confidentiality & Legal Disclaimer */}
        <div className="bg-slate-900 text-white p-3 rounded-lg border-l-4 border-[#c29d2f] text-[7.5pt] space-y-1.5">
          <div className="flex items-center gap-1.5 text-[#c29d2f] font-bold uppercase tracking-wider">
            <Lock className="w-3 h-3" />
            <span>CONFIDENTIALITY STATEMENT & LEGAL DISCLAIMER</span>
          </div>

          <p className="text-slate-300 leading-relaxed font-normal">
            <strong>Confidentiality:</strong> This Business Growth Diagnostic Report is strictly confidential and prepared exclusively for the executive leadership of <strong className="text-white">{data.companyName}</strong>. No part of this publication may be reproduced or distributed without prior written consent from KRGONE Consulting.
          </p>

          <p className="text-slate-300 leading-relaxed font-normal">
            <strong>Disclaimer:</strong> The analysis, benchmarks, and recommendations contained herein are based on self-reported assessment inputs provided by the client as of <strong className="text-white">{data.displayDate}</strong>. While KRGONE applies rigorous diagnostic methodologies, actual performance outcomes depend on market conditions and internal management execution.
          </p>
        </div>

        {/* Official Signature & Verification Seal Block */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="text-[7pt] font-bold text-slate-400 uppercase">AUTHORIZED DIAGNOSTIC VERIFICATION</div>
            <div className="text-xs font-black text-[#0a192f] uppercase">KRGONE BUSINESS GROWTH OS™</div>
            <div className="text-[7.5pt] text-slate-600 font-medium">Verified for Client: {data.companyName}</div>
          </div>

          <div className="text-right border-l border-slate-200 pl-4 space-y-0.5">
            <div className="text-xs font-serif italic font-bold text-[#0a192f]">KRGONE Audit Committee</div>
            <div className="text-[6.5pt] font-mono text-slate-400">VERIFICATION SEAL: VERIFIED-2026</div>
            <div className="text-[6.5pt] font-mono text-[#c29d2f] font-bold">{data.displayReportId}</div>
          </div>
        </div>

        {/* Final Executive Closing Statement */}
        <div className="bg-gradient-to-r from-[#0a192f] via-[#0f2847] to-[#1e3a5f] text-white p-3 rounded-lg border-2 border-[#c29d2f] text-center shadow-md">
          <p className="text-[8pt] text-slate-100 font-serif italic leading-relaxed">
            "Every great business reaches a stage where experience alone is no longer enough. Sustainable growth comes from systems, strategy, and disciplined execution. KRGONE Business Growth OS™ is designed to help businesses make that transition."
          </p>
        </div>
      </div>

      <DossierFooter companyName={data.companyName} reportId={data.displayReportId} />
    </div>
  );
};
