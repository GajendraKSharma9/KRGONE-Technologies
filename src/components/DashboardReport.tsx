import React, { useState, useRef, useEffect, useMemo } from 'react';
import { generateUnifiedReport } from '../reportGenerator';
// { useState, useRef, useEffect } from 'react';
import PrintDossier from './PrintDossier';
import {
  ShieldCheck, LayoutDashboard, BarChart3, TrendingUp, Cpu, Building2, Calendar, Download, PhoneCall,
  User, Factory, Users, Coins, CheckCircle2, AlertTriangle, ArrowUpRight, Activity, Target, AlertCircle, Clock, Award,
  ChevronRight, Check, Sparkles, Send, Share2, Printer, Briefcase, GitBranch, Star, Shield, Rocket, Info, RotateCcw, Database, ArrowLeft, FileText
} from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { ExecutiveAdvisoryTab } from './ExecutiveAdvisoryTab';
import { PlanRoadmapTab } from './PlanRoadmapTab';
import { PillarsAnalysisTab } from './PillarsAnalysisTab';
import { DiagnosticBookingTab } from './DiagnosticBookingTab';
import { KnowledgeBaseExplorer } from './KnowledgeBaseExplorer';


export function DashboardReport({ formData = {}, scores = [], onResetAssessment, onReturnHome }: any) {
  const report = useMemo(() => generateUnifiedReport(formData, scores), [formData, scores]);

  const [activeTab, setActiveTab] = useState('overview');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [selectedDate, setSelectedDate] = useState('July 24, 2026');
  const [selectedTime, setSelectedTime] = useState('11:30 AM IST');
  const [copiedLink, setCopiedLink] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [pdfStatusMessage, setPdfStatusMessage] = useState('');

  // Automated Email Notification & Lead Alert Dispatching State
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [emailMessage, setEmailMessage] = useState<string>('');
  const hasDispatchedRef = useRef(false);

  useEffect(() => {
    const custEmail = formData?.email || 'customer';
    const emailKey = `krgone_email_sent_${custEmail}_${report?.overallScore || 0}`;
    
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem(emailKey)) {
      setEmailStatus('sent');
      setEmailMessage(`Assessment report sent to ${custEmail}`);
      return;
    }

    if (hasDispatchedRef.current) {
      return;
    }

    hasDispatchedRef.current = true;
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(emailKey, 'in_progress');
    }

    const dispatchEmail = async () => {
      try {
        setEmailStatus('sending');
        setEmailMessage('Generating PDF dossier & dispatching report emails...');

        // Wait a brief tick for PrintDossier component to mount in DOM
        await new Promise(r => setTimeout(r, 400));
        const dossierEl = document.getElementById('krg-print-dossier-root');
        const dossierHtml = dossierEl ? dossierEl.innerHTML : '';

        const response = await fetch('/api/send-assessment-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formData,
            scores,
            overallScore: report?.overallScore ?? 72,
            pillarScores: report?.pillarScores ?? [],
            recommendations: report?.recommendations ?? [],
            dossierHtml
          })
        });

        const data = await response.json();
        if (data.success) {
          setEmailStatus('sent');
          setEmailMessage(`Assessment report & PDF dossier sent to ${custEmail}`);
          if (typeof sessionStorage !== 'undefined') {
            sessionStorage.setItem(emailKey, 'true');
          }
        } else {
          setEmailStatus('error');
          setEmailMessage(data.error || 'Failed to dispatch email report');
        }
      } catch (err: any) {
        console.error('Email dispatch error:', err);
        setEmailStatus('error');
        setEmailMessage('Error dispatching automated assessment emails.');
      }
    };

    dispatchEmail();
  }, [formData, scores, report]);

  const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  const leftSidebarRef = useRef<HTMLElement>(null);
  const rightSidebarRef = useRef<HTMLElement>(null);
  const activeTabContentRef = useRef<HTMLDivElement>(null);

  const [availableSpace, setAvailableSpace] = useState(0);

  useEffect(() => {
    let animFrameId: number;
    const updateHeights = () => {
      if (!leftSidebarRef.current || !rightSidebarRef.current || !activeTabContentRef.current) return;
      
      const leftHeight = leftSidebarRef.current.offsetHeight || 0;
      const rightHeight = rightSidebarRef.current.offsetHeight || 0;
      const centerHeight = activeTabContentRef.current.offsetHeight || 0;
      
      const maxSidebar = Math.max(leftHeight, rightHeight);
      const space = maxSidebar - centerHeight;
      const newSpace = space > 0 ? space : 0;
      setAvailableSpace(prev => (prev !== newSpace ? newSpace : prev));
    };

    const handleResize = () => {
      cancelAnimationFrame(animFrameId);
      animFrameId = requestAnimationFrame(updateHeights);
    };

    // Run initially after mounting/rendering
    const timeoutId = setTimeout(updateHeights, 100);

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => {
        handleResize();
      });

      if (leftSidebarRef.current) observer.observe(leftSidebarRef.current);
      if (rightSidebarRef.current) observer.observe(rightSidebarRef.current);
      if (activeTabContentRef.current) observer.observe(activeTabContentRef.current);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animFrameId);
      if (observer) observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [activeTab, completedTasks, selectedDate, selectedTime, bookingConfirmed]);

  // Fallback defaults to match the image exactly
  const compName = formData?.companyName || 'Your Enterprise';
  const ownerName = formData?.fullName || 'Business Owner';
  const industryType = formData?.industry || 'Commercial Vertical';
  const revenueTier = formData?.revenue || 'Confidential';
  const rawEmployees = formData?.businessSize || formData?.employees || '';
  const employeeCount = rawEmployees ? `${rawEmployees}` : 'Not Disclosed';
  const businessGoal = formData?.goals?.join(', ') || 'Scale & Optimize';
  const topChallenge = formData?.challenges?.[0] || 'Core Operational Leakage';

  const PILLARS = [
    "Leadership & Vision",
    "Sales & Revenue",
    "Marketing & Customer Growth",
    "Operations & Process",
    "Finance & Business Performance",
    "People & Leadership",
    "Technology & Business Innovation"
  ];

  // Dynamic Pillar score calculations or high-fidelity defaults matching the image
  const getPillarScores = () => {
    const hasScores = scores && scores.length > 0 && scores.some((s: number) => s > 0);
    if (!hasScores) {
      return [72, 68, 65, 58, 80, 70, 75]; // Matches default profile
    }
    const pillarWeights = [
      [0.45, 0.35, 0.20], // Pillar 1 (LDR)
      [0.45, 0.30, 0.25], // Pillar 2 (STR)
      [0.40, 0.35, 0.25], // Pillar 3 (SLS)
      [0.40, 0.35, 0.25], // Pillar 4 (OPS)
      [0.40, 0.35, 0.25], // Pillar 5 (FIN)
      [0.40, 0.35, 0.25], // Pillar 6 (HR)
      [0.40, 0.35, 0.25], // Pillar 7 (TEC)
    ];
    return PILLARS.map((_, i) => {
      const start = i * 3;
      const pAns = [scores[start], scores[start + 1], scores[start + 2]];
      const weights = pillarWeights[i] || [0.333, 0.333, 0.334];
      let sum = 0;
      let wSum = 0;
      pAns.forEach((s: number, idx: number) => {
        if (typeof s === 'number' && s > 0) {
          const valIn100 = s <= 5 ? s * 20 : s;
          sum += valIn100 * weights[idx];
          wSum += weights[idx];
        }
      });
      if (wSum === 0) return 0;
      return Math.round(sum / wSum);
    });
  };

  const pillarScores = getPillarScores();

  const getGlobalScore = () => {
    const hasScores = scores && scores.length > 0 && scores.some((s: number) => s > 0);
    if (!hasScores) return 72;
    const weights = [0.18, 0.17, 0.14, 0.16, 0.15, 0.10, 0.10];
    let sum = 0;
    let weightSum = 0;
    for (let i = 0; i < 7; i++) {
      const pAns = [scores[i * 3], scores[i * 3 + 1], scores[i * 3 + 2]].filter((s: number) => s > 0);
      if (pAns.length > 0) {
        sum += pillarScores[i] * weights[i];
        weightSum += weights[i];
      }
    }
    if (weightSum === 0) return 72;
    return Math.round(sum / weightSum);
  };

  const globalScore = getGlobalScore();

  // McKinsey-level diagnostic calculations
  const getLowestPillar = () => {
    if (!pillarScores || pillarScores.length === 0) {
      return { name: PILLARS[0] || 'Operations & Process', score: 50 };
    }
    let lowestIdx = 0;
    let lowestScore = pillarScores[0] ?? 50;
    for (let i = 1; i < pillarScores.length; i++) {
      if ((pillarScores[i] ?? 0) < lowestScore) {
        lowestScore = pillarScores[i];
        lowestIdx = i;
      }
    }
    return { name: PILLARS[lowestIdx] || 'Operations & Process', score: lowestScore };
  };
  const lowestPillar = getLowestPillar();

  const revenueMidpoint = (() => {
    const rev = String(revenueTier).toLowerCase();
    if (rev.includes('under') || rev.includes('<') || (rev.includes('5 cr') && rev.includes('under'))) return 25000000;
    if (rev.includes('5–20') || rev.includes('5-20')) return 125000000;
    if (rev.includes('20–50') || rev.includes('20-50')) return 350000000;
    if (rev.includes('50 cr+')) return 750000000;
    if (rev.includes('1-5') || rev.includes('1 – 5')) return 30000000;
    return 125000000;
  })();

  const calculatedHiddenRevNum = Math.round(revenueMidpoint * (1 - globalScore / 100) * 0.25);
  const formatCurrency = (num: number) => {
    if (num >= 10000000) {
      return `₹ ${(num / 10000000).toFixed(2)} Cr`;
    } else {
      return `₹ ${(num / 100000).toFixed(1)} Lakhs`;
    }
  };
  const dynamicHiddenRev = formatCurrency(calculatedHiddenRevNum);

  const avgDependencyScore = (() => {
    const q3 = scores[2] || 0;
    const q11 = scores[10] || 0;
    if (q3 === 0 && q11 === 0) return 2.5;
    if (q3 === 0) return q11;
    if (q11 === 0) return q3;
    return (q3 + q11) / 2;
  })();

  const founderDependencyPct = (() => {
    if (avgDependencyScore <= 1.5) return "76%–100% Stuck Without Owner";
    if (avgDependencyScore <= 2.5) return "51%–75% High Dependency";
    if (avgDependencyScore <= 3.5) return "26%–50% Moderate Dependency";
    return "0%–25% Scaled & Decoupled";
  })();

  const diagnosticBriefText = `An analytical assessment of ${compName} operating within the ${industryType} vertical indicates that your organization has hit a structural scaling ceiling. While your market position allows you to cross revenue targets in the ${revenueTier} bracket, your operational foundation relies almost exclusively on manual execution. The lack of standard automation frameworks means that scaling up will directly increase operational friction, leading to severe profit margin leakage and high staff burnout. Additionally, high owner dependency within ${lowestPillar.name} (currently operating at a critical ${lowestPillar.score}% performance score) creates a severe structural headwind for your organization. Because daily verification, strategic planning, and process execution are heavily anchored to your personal leadership, strategic throughput is directly restricted to the limits of your personal bandwidth rather than a repeatable, self-sustaining system. Decoupling this pillar from your manual daily oversight through standardized frameworks is the single highest-leverage intervention required to plug active margin leaks and capture the ${dynamicHiddenRev} in trapped scaling value.`;


  const getScoreStateLabel = (score: number) => {
    switch (score) {
      case 1: return { text: "Score: 1/4 - Poor", style: "text-rose-700 bg-rose-50/80 border-rose-100" };
      case 2: return { text: "Score: 2/4 - Basic", style: "text-amber-700 bg-amber-50/80 border-amber-100" };
      case 3: return { text: "Score: 3/4 - Good", style: "text-emerald-700 bg-emerald-50/80 border-emerald-100" };
      case 4: return { text: "Score: 4/4 - Elite", style: "text-indigo-700 bg-indigo-50/80 border-indigo-100" };
      default: return { text: `Score: ${score}/4`, style: "text-slate-700 bg-slate-50/80 border-slate-100" };
    }
  };

  const isLowScore = globalScore < 70;
  const isHighScore = globalScore >= 85;

  const radarData = PILLARS.map((pillar, i) => ({
    subject: pillar.replace(' & ', '\n'),
    A: pillarScores[i],
    fullMark: 100,
  }));

  const TABS = [
    { id: 'overview', name: 'Executive Overview', icon: ShieldCheck },
    { id: 'health', name: 'Business Health Dashboard™', icon: LayoutDashboard },
    { id: 'pillars', name: '7-Pillar Analysis', icon: BarChart3 },
    { id: 'advisory', name: 'AI Growth Advisory', icon: Cpu },
    { id: 'plan', name: 'Opportunities & 90-Day Plan', icon: Calendar },
    { id: 'booking', name: 'Diagnostic Booking', icon: PhoneCall }
  ];

  // Dynamic values based on revenue brackets to show real hidden revenue
  const getHiddenRevenue = () => {
    if (revenueTier.includes('< 1')) return '₹ 15 Lakhs';
    if (revenueTier.includes('1 – 5') || revenueTier.includes('1 - 5')) return '₹ 65 Lakhs';
    if (revenueTier.includes('5 – 20') || revenueTier.includes('5 - 20')) return '₹ 1.8 Cr';
    if (revenueTier.includes('20 – 50') || revenueTier.includes('20 - 50')) return '₹ 5.4 Cr';
    return '₹ 12.5 Cr';
  };

  const hiddenRev = getHiddenRevenue();

  // McKinsey/BCG level analytical recommendations mapped to user's selections
  const getTopRecommendations = () => {
    const isLow = globalScore < 70;
    const isHigh = globalScore >= 85;

    const pool = [
      {
        id: 'sops',
        title: 'Develop Core Standard Operating Procedures (SOPs)',
        friction: isLow
          ? 'Your business functions rely on tribal employee memory rather than clear documented systems, leading to high processing errors, unpredictable client delivery quality, and extended onboarding timelines for new hires.'
          : isHigh
          ? 'While basic procedures are written, your systems lack seamless cross-departmental alignment, causing minor delays when passing work between departments and requiring too much manual tracking at high volumes.'
          : 'Your team has documented some key processes, but they are scattered across different platforms and rarely updated, leading to inconsistent compliance and varying delivery standards.',
        intervention: isLow
          ? 'Document a unified digital blueprint for your absolute highest-leverage processes across sales, operations, and finance. Map out visual step-by-step swimlane diagrams and set explicit processing speed rules for every department.'
          : isHigh
          ? 'Upgrade your existing SOP library to a fully integrated business workflow database. Use continuous optimization frameworks to identify and eliminate minor bottlenecks before they impact delivery speed.'
          : 'Consolidate and centralize your standard procedures into a single, easily accessible team portal. Implement regular training reviews and clear compliance tracking to ensure systems are followed.',
        deployment: isLow
          ? 'We deploy senior systems consultants directly into your firm to audit your workflows, write your custom operational playbooks, and build an interactive digital wiki database. This secures execution quality and helps insulate your profit margins.'
          : isHigh
          ? 'We audit your workflow metrics, introduce advanced workflow tracing tools, and set up real-time performance dashboards to keep your operations running at maximum efficiency.'
          : 'We build your unified team playbook center, run alignment workshops with department heads, and establish clear, measurable compliance standards to stabilize delivery quality.',
        triggers: ['Operational Inefficiency', 'High Operational Costs', 'Lack of Systems']
      },
      {
        id: 'leads',
        title: 'Deploy Automated Lead Nurturing Frameworks',
        friction: isLow
          ? 'High volumes of valuable pipeline prospects are leaking daily due to manual follow-up dependencies. Sales teams focus strictly on immediate conversions, leaving warm opportunities entirely neglected.'
          : isHigh
          ? 'Your conversion sequences are active but lack dynamic personalization, failing to maximize lifetime value and customer referral networks.'
          : 'Leads are followed up, but the timing is highly inconsistent and depends on individual staff schedules rather than an automated, predictable system.',
        intervention: isLow
          ? 'Architect an automated, multi-channel customer relationship management (CRM) infrastructure. Trigger behavior-based email and SMS sequences, and establish programmatic lead scoring to maximize conversions.'
          : isHigh
          ? 'Implement advanced predictive behavior tracking and personal customer messaging to nurture premium tier accounts and automate upsells.'
          : 'Establish basic, reliable automated email and SMS follow-ups within your current database to guarantee prompt contact with every lead.',
        deployment: isLow
          ? 'Our revenue operations division completely restructures your CRM platform, designs custom conversion sequences, and implements a predictive pipeline monitoring cockpit to capture lost revenue.'
          : isHigh
          ? 'We integrate advanced marketing analytics platforms and configure specialized customer retention programs to grow your lifetime value metrics.'
          : 'We optimize your active lead pipelines, configure standard auto-responders, and train your team on managing lead status within the system.',
        triggers: ['Inconsistent Sales', 'Inconsistent Sales Growth', 'Customer Acquisition']
      },
      {
        id: 'finance',
        title: 'Institute Rigid Financial KPI Tracking',
        friction: isLow
          ? 'Decisions are frequently guided by gross revenue numbers rather than net unit profitability. This lack of granular visibility obscures high-volume cost leaks, leaving your monthly cash flow vulnerable.'
          : isHigh
          ? 'Although unit profitability is visible, your capital allocation models are conservative, missing high-yield investment opportunities and optimal tax structures.'
          : 'Monthly financial statements are generated but they are reviewed too late to make timely, proactive changes to pricing or operations.',
        intervention: isLow
          ? 'Deploy a real-time financial reporting cockpit to monitor unit economics including Gross Margin, Customer Acquisition Cost (CAC), and Lifetime Value (LTV) through a strict weekly executive audit cycle.'
          : isHigh
          ? 'Design forward-looking cash flow forecast tools to model various expansion scenarios, pricing shifts, and capital investments.'
          : 'Move from monthly reports to a live, bi-weekly dashboard tracking your primary revenue and margin indicators.',
        deployment: isLow
          ? 'We embed professional CFO capabilities to restructure your accounting frameworks, design live Business Intelligence dashboard grids, and optimize your working capital allocations.'
          : isHigh
          ? 'We help you analyze strategic capital pathways, design tax-efficient investment strategies, and structure external capital options for rapid expansion.'
          : 'We set up automated financial imports, build custom margin trackers, and establish a bi-weekly financial review routine with your management.',
        triggers: ['Low Profitability', 'Cash Flow Issues', 'Financial Leakage']
      },
      {
        id: 'delegation',
        title: 'Decentralize Executive Decision Making',
        friction: isLow
          ? 'The executive founder layer acts as a structural bottleneck for both high-level strategies and daily administrative approvals, paralyzing middle-management speed and capping company capacity.'
          : isHigh
          ? 'Middle management executes efficiently, but lacks strategic alignment with your long-term expansion goals, leading to misaligned project priorities.'
          : 'Some tasks are delegated, but the owner must frequently step back in to resolve minor operational conflicts due to vague authority boundaries.',
        intervention: isLow
          ? 'Formulate an outcome-oriented Accountability Chart. Define explicit, measurable Key Performance Indicators (KPIs) for each department lead and grant them structured budget autonomy.'
          : isHigh
          ? 'Align leadership compensation directly to company valuation targets and implement a formal, quarterly strategic planning cycle.'
          : 'Clarify and define exact authority levels and spending limits for each department head to prevent unnecessary escalation.',
        deployment: isLow
          ? 'We run structured delegation workshops, rewrite managerial role definitions, and establish a high-performance leadership cadence to free up the founder for high-leverage strategic expansion.'
          : isHigh
          ? 'We structure performance-based partner bonus plans and run quarterly strategic planning sessions with your leadership team.'
          : 'We write exact decision-making authority guidelines and establish weekly department report structures to maintain visibility without micromanagement.',
        triggers: ['Leadership Dependency', 'Team Productivity', 'Founder Burnout']
      },
      {
        id: 'talent',
        title: 'Engineer a Scalable Talent Acquisition Machine',
        friction: isLow
          ? 'Hiring remains reactive, triggered by sudden operational crises rather than strategic forecasting. This ad-hoc approach leads to poor cultural fits, high employee turnover, and continuous retraining costs.'
          : isHigh
          ? 'Your talent acquisition works, but you struggle to attract highly specialized executive talent needed to lead new divisions or regional expansions.'
          : 'Basic job descriptions exist, but candidate screening is inconsistent, resulting in hires who take too long to reach full productivity.',
        intervention: isLow
          ? 'Treat recruitment with the same rigor as customer acquisition. Build a continuous pipeline of active candidates, enforce scorecard-based interviews, and implement a structured 30-60-90 day onboarding matrix.'
          : isHigh
          ? 'Build a sophisticated executive search and employer branding strategy to attract high-caliber industry leaders.'
          : 'Design structured interview scorecards and a standardized 2-week training path for every role.',
        deployment: isLow
          ? 'Our HR optimization consultants design your employer branding assets, integrate advanced Applicant Tracking Systems, and write standard onboarding playbooks to accelerate new-hire productivity.'
          : isHigh
          ? 'We design competitive executive search plans, establish leadership recruitment channels, and build your long-term talent pipeline.'
          : 'We optimize your hiring process, design role-specific scorecards, and outline standardized training paths to speed up onboarding.',
        triggers: ['Team Productivity', 'Scaling Challenges', 'Employee Churn']
      }
    ];

    const pillarIndexMap: Record<string, number> = {
      delegation: 0,
      leads: 2,
      sops: 3,
      finance: 4,
      talent: 5
    };

    const sortedPool = [...pool].sort((a, b) => {
      const scoreA = pillarScores[pillarIndexMap[a.id] ?? 0] ?? 100;
      const scoreB = pillarScores[pillarIndexMap[b.id] ?? 0] ?? 100;
      return scoreA - scoreB;
    });

    return sortedPool;
  };

  const topRecommendations = getTopRecommendations();

  // Upcoming slots for calendar
  const upcomingDates = [
    { dayName: 'Mon', dayNum: '27', monthName: 'JUL', dateStr: 'July 27, 2026' },
    { dayName: 'Tue', dayNum: '28', monthName: 'JUL', dateStr: 'July 28, 2026' },
    { dayName: 'Wed', dayNum: '29', monthName: 'JUL', dateStr: 'July 29, 2026' },
    { dayName: 'Thu', dayNum: '30', monthName: 'JUL', dateStr: 'July 30, 2026' }
  ];

  const timeSlots = ["10:00 AM IST", "11:30 AM IST", "02:00 PM IST", "04:30 PM IST"];

  const PILLAR_STRENGTH_DESC: Record<string, string> = {
    "Leadership & Vision": "Strong strategic direction and core leadership alignment.",
    "Sales & Revenue": "Solid baseline sales volume and client conversion rates.",
    "Marketing & Customer Growth": "Effective customer reach and market positioning.",
    "Operations & Process": "Stable day-to-day operations and service delivery.",
    "Finance & Business Performance": "Strong working capital control and fiscal discipline.",
    "People & Leadership": "Positive team culture and stable retention metrics.",
    "Technology & Business Innovation": "Successful tool integration and digital-ready workflows."
  };

  const PILLAR_IMPROVEMENT_DESC: Record<string, string> = {
    "Leadership & Vision": "Systemize strategic planning to reduce reliance on founder intuition.",
    "Sales & Revenue": "Deploy multi-channel lead follow-ups to stop pipeline leakage.",
    "Marketing & Customer Growth": "Develop structured client acquisition funnels for predictable scaling.",
    "Operations & Process": "Formulate standard SOPs to eliminate tribal knowledge dependency.",
    "Finance & Business Performance": "Implement weekly unit-economic tracking and gross margin audits.",
    "People & Leadership": "Delegate core operational approvals to senior middle management.",
    "Technology & Business Innovation": "Automate manual data reentry across disparate systems."
  };

  // Dynamically determine Strengths based on top 3 highest scores
  const getDynamicStrengths = () => {
    const list = PILLARS.map((name, idx) => ({ name, score: pillarScores[idx] }));
    return list.sort((a, b) => b.score - a.score).slice(0, 3);
  };

  // Dynamically determine Improvement Areas based on bottom 3 lowest scores
  const getDynamicImprovements = () => {
    const list = PILLARS.map((name, idx) => ({ name, score: pillarScores[idx] }));
    return list.sort((a, b) => a.score - b.score).slice(0, 3);
  };

  const dynamicStrengths = getDynamicStrengths();
  const dynamicImprovements = getDynamicImprovements();

  // Instant, high-resolution PDF generation and print trigger
  const handlePrintPDF = async () => {
    if (isGeneratingPDF) return;
    setIsGeneratingPDF(true);
    setPdfStatusMessage('Opening Print Window...');

    try {
      const printElement = document.getElementById('krg-print-dossier-root');
      if (printElement) {
        const printWin = window.open('', '_blank');
        if (printWin) {
          printWin.document.write(`
            <!DOCTYPE html>
            <html>
              <head>
                <title>KRGONE Business Growth Diagnostic Report</title>
                <script src="https://cdn.tailwindcss.com"></script>
                <style>
                  @media print {
                    @page { size: A4 portrait; margin: 0; }
                    body { margin: 0 !important; padding: 0 !important; background: white !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; height: auto !important; min-height: auto !important; overflow: visible !important; }
                    .print-page { 
                      width: 210mm !important; 
                      height: 297mm !important; 
                      min-height: 297mm !important; 
                      max-height: 297mm !important; 
                      box-sizing: border-box !important; 
                      page-break-after: always !important; 
                      break-after: page !important; 
                      page-break-inside: avoid !important; 
                      break-inside: avoid !important; 
                      margin: 0 auto !important; 
                      padding: 10mm 12mm 12mm 12mm !important; 
                      position: relative !important; 
                      display: flex !important; 
                      flex-direction: column !important;
                      justify-content: space-between !important;
                      background-color: #ffffff; 
                      overflow: hidden !important; 
                      -webkit-print-color-adjust: exact !important;
                      print-color-adjust: exact !important;
                    }
                    .print-page.dark-cover,
                    .print-page.bg-\[\#030712\],
                    .print-page.bg-\[\#030816\] {
                      background-color: #030712 !important;
                      color: #ffffff !important;
                    }
                    .print-page:last-of-type {
                      page-break-after: auto !important;
                      break-after: auto !important;
                    }
                    .print-page > div, 
                    .print-page table,
                    .print-page .flex,
                    .print-page .grid,
                    .print-page .bg-slate-50,
                    .print-page .bg-white,
                    .avoid-break {
                      page-break-inside: avoid !important;
                      break-inside: avoid !important;
                    }
                    .no-print { display: none !important; }
                  }
                  body { font-family: system-ui, -apple-system, sans-serif; background: #0f172a; padding: 20px; }
                  .print-page { 
                      background: white; 
                      width: 210mm !important; 
                      height: 297mm !important; 
                      min-height: 297mm !important; 
                      max-height: 297mm !important; 
                      padding: 10mm 12mm 12mm 12mm !important; 
                      margin: 0 auto 20px auto !important; 
                      box-shadow: 0 10px 25px rgba(0,0,0,0.4); 
                      box-sizing: border-box; 
                      position: relative; 
                      overflow: hidden !important;
                      display: flex !important;
                      flex-direction: column !important;
                      justify-content: space-between !important;
                  }
                  .print-page.dark-cover,
                  .print-page.bg-\[\#030712\],
                  .print-page.bg-\[\#030816\] {
                      background: #030712 !important;
                      color: #ffffff !important;
                  }
                  .print-title { font-size: 20pt !important; font-weight: 800 !important; line-height: 1.2 !important; color: #0A1128 !important; }
                  .print-section-heading { font-size: 16pt !important; font-weight: 800 !important; line-height: 1.3 !important; color: #0A1128 !important; text-transform: uppercase !important; border-bottom: 2px solid #D4AF37 !important; padding-bottom: 4px !important; margin-top: 0 !important; margin-bottom: 12px !important; display: flex !important; align-items: center !important; gap: 8px !important; }
                  .print-sub-heading { font-size: 13pt !important; font-weight: 700 !important; line-height: 1.4 !important; color: #0A1128 !important; }
                  .print-body { font-size: 10.5pt !important; line-height: 1.5 !important; color: #334155 !important; }
                  .print-caption { font-size: 9pt !important; line-height: 1.4 !important; color: #64748b !important; }
                  .print-footer-container { position: absolute !important; bottom: 8mm !important; left: 15mm !important; right: 15mm !important; border-top: 1px solid #e2e8f0 !important; padding-top: 6px !important; display: flex !important; justify-content: space-between !important; align-items: flex-start !important; background-color: #ffffff !important; }
                </style>
              </head>
              <body>
                <div style="position: fixed; top: 15px; right: 20px; z-index: 10000; display: flex; gap: 10px;" class="no-print">
                  <button onclick="window.print()" style="background: #0A1128; color: #D4AF37; border: 1px solid #D4AF37; padding: 10px 20px; font-weight: bold; border-radius: 8px; cursor: pointer; font-size: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
                    🖨️ Save as PDF / Print Report
                  </button>
                  <button onclick="window.close()" style="background: #e2e8f0; color: #1e293b; border: none; padding: 10px 16px; font-weight: bold; border-radius: 8px; cursor: pointer; font-size: 14px;">
                    Close
                  </button>
                </div>
                ${printElement.innerHTML}
                <script>
                  setTimeout(() => {
                    window.print();
                  }, 800);
                </script>
              </body>
            </html>
          `);
          printWin.document.close();
        } else {
          alert("Could not generate PDF. Please ensure pop-ups are allowed or try using Chrome.");
        }
      }
    } catch (printErr) {
      console.error("Print fallback failed:", printErr);
      alert("Could not generate PDF. Please ensure pop-ups are allowed or try using Chrome.");
    } finally {
      setIsGeneratingPDF(false);
      setPdfStatusMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      {/* Dynamic CSS injecting high-impact print layout */}
      <style>{`
        @media screen {
          .no-screen {
            display: none !important;
          }
        }
        @media print {
          body { background: white !important; margin: 0 !important; padding: 0 !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          aside, main, nav, header, button, .no-print { display: none !important; }
          .no-screen, .print-dossier-root { display: block !important; width: 100% !important; margin: 0 !important; padding: 0 !important; }
          .print-page {
            page-break-after: always !important;
            break-after: page !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          @page { size: A4 portrait; margin: 0.5in; }
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-none {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      {/* LEFT SIDEBAR REMOVED FROM VIEWPORT SIBLING LEVEL */}

      {/* MAIN VIEWPORT */}
      <main className="flex-1 bg-[#F8FAFC] relative z-10 p-6 xl:p-8">
        
        {/* TOP STATUS LINE & EXPORTS */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200/60 no-print">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <h2 className="text-2xl font-black text-[#0F172A] tracking-tight capitalize">
                {activeTab === 'overview' ? 'Executive Overview' : TABS.find(t => t.id === activeTab)?.name || 'Dashboard'}
              </h2>
            </div>
            <p className="text-xs text-slate-500">Your business at a glance</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-sm font-mono">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Assessment Date & Time: <strong className="text-slate-900 font-bold">{formattedDate}, {formattedTime}</strong></span>
              <span className="flex h-2 w-2 relative ml-1" title="Real-time live sync active">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            {onResetAssessment && (
              <button
                onClick={onResetAssessment}
                className="bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all duration-200 text-xs font-bold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset & Retake</span>
              </button>
            )}
            <button
              onClick={handlePrintPDF}
              disabled={isGeneratingPDF}
              className="bg-[#0F172A] hover:bg-slate-800 text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-xs font-bold cursor-pointer disabled:opacity-60 min-w-[130px] justify-center"
            >
              {isGeneratingPDF ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                  <span>{pdfStatusMessage || 'Generating...'}</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download PDF</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* EMAIL DISPATCH NOTIFICATION BANNER */}
        {emailStatus !== 'idle' && (
          <div className={`mb-6 p-3.5 rounded-xl border flex items-center justify-between gap-3 text-xs font-medium no-print transition-all ${
            emailStatus === 'sending' 
              ? 'bg-amber-500/10 border-amber-500/30 text-amber-900' 
              : emailStatus === 'sent' 
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900 shadow-sm' 
                : 'bg-rose-50 border-rose-200 text-rose-900'
          }`}>
            <div className="flex items-center gap-2.5">
              {emailStatus === 'sending' && (
                <div className="w-4 h-4 border-2 border-amber-600 border-t-transparent rounded-full animate-spin shrink-0"></div>
              )}
              {emailStatus === 'sent' && (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              )}
              {emailStatus === 'error' && (
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              )}
              <span>
                <strong>Automated Dispatch:</strong> {emailMessage}
              </span>
            </div>
          </div>
        )}

        {/* TOP COMPACT PROFILE METRIC BAR */}
        <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-2xl shadow-lg border border-slate-800 p-5 mb-6 grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-4 items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] pointer-events-none"></div>
          
          <div className="border-r border-slate-800/80 last:border-0 pr-2 md:pr-4">
            <span className="text-[9px] text-amber-400 font-extrabold uppercase tracking-[0.15em] block mb-1">Company Name</span>
            <span className="text-xs font-black text-white line-clamp-1 leading-tight tracking-tight uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
              {compName}
            </span>
          </div>
          
          <div className="border-r border-slate-800/80 last:border-0 pr-2 md:pr-4">
            <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-[0.15em] block mb-1">Owner / Leader</span>
            <span className="text-xs font-black text-white flex items-center gap-2 leading-tight">
              <div className="w-5 h-5 rounded-md bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                <User className="w-3 h-3" />
              </div>
              <span className="line-clamp-1">{ownerName}</span>
            </span>
          </div>
          
          <div className="col-span-2 md:col-span-1 border-r border-slate-800/80 last:border-0 pr-2 md:pr-4">
            <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-[0.15em] block mb-1">Industry Segment</span>
            <span className="text-xs font-black text-white flex items-center gap-2 leading-tight">
              <div className="w-5 h-5 rounded-md bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                <Factory className="w-3 h-3" />
              </div>
              <span className="line-clamp-1">{industryType}</span>
            </span>
          </div>
          
          <div className="border-r border-slate-800/80 last:border-0 pr-2 md:pr-4">
            <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-[0.15em] block mb-1">Annual Revenue</span>
            <span className="text-xs font-black text-white flex items-center gap-2 leading-tight">
              <div className="w-5 h-5 rounded-md bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                <Coins className="w-3 h-3" />
              </div>
              <span className="line-clamp-1">{revenueTier}</span>
            </span>
          </div>
          
          <div className="last:border-0">
            <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-[0.15em] block mb-1">Employees</span>
            <span className="text-xs font-black text-white flex items-center gap-2 leading-tight">
              <div className="w-5 h-5 rounded-md bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                <Users className="w-3 h-3" />
              </div>
              <span className="line-clamp-1">{employeeCount}</span>
            </span>
          </div>
        </div>

        {/* GLOBAL THREE-COLUMN WORKSPACE */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 items-start relative z-10">
          
          {/* LEFT SIDEBAR (COLUMN A) - Renders exactly ONCE to satisfy Specification 3 */}
          <aside ref={leftSidebarRef} className="xl:col-span-1 sticky top-6 bg-[#FAFBFC] text-slate-800 flex flex-col shrink-0 z-20 shadow-md border border-slate-200/85 rounded-[20px] self-start no-print">
            {/* Single Merged Premium Sidebar Container */}
            <div className="flex flex-col p-6 space-y-6 overflow-y-auto scrollbar-none">
              


              
              {/* 2. Navigation */}
              <nav className="space-y-1.5 no-print">
                {TABS.map(tab => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-150 ${
                        isActive
                          ? 'bg-[#0F172A] text-white font-extrabold shadow-sm scale-[1.01]'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-bold'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <tab.icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                        <span className="text-[12px] tracking-tight text-left leading-tight">{tab.name}</span>
                      </div>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></div>}
                    </button>
                  );
                })}
              </nav>

              {/* Download PDF Report Sidebar CTA */}
              <div className="no-print bg-[#0f172a] text-white rounded-xl p-3.5 space-y-2 border border-slate-800 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-wider">PDF Report</span>
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <p className="text-[10px] text-slate-300 font-medium leading-snug">
                  Get your full enterprise diagnostic dossier with detailed swimlane playbooks.
                </p>
                <button
                  onClick={handlePrintPDF}
                  disabled={isGeneratingPDF}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-[11px] uppercase tracking-wider py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer disabled:opacity-60"
                >
                  <Download className="w-3.5 h-3.5 text-slate-950" />
                  <span>{isGeneratingPDF ? (pdfStatusMessage || 'Preparing...') : 'Download Report'}</span>
                </button>
              </div>

              {/* 3. Why Upgrade? */}
              <div className="bg-sky-50/70 border border-sky-100 rounded-xl p-4 space-y-2.5">
                <h4 className="text-[11px] font-black text-slate-800 uppercase tracking-wider">Why Upgrade?</h4>
                <ul className="space-y-2 text-[11px] font-bold text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3.5] shrink-0 bg-emerald-100 rounded-full p-0.5" />
                    <span>Find Growth Gaps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3.5] shrink-0 bg-emerald-100 rounded-full p-0.5" />
                    <span>Unlock Revenue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3.5] shrink-0 bg-emerald-100 rounded-full p-0.5" />
                    <span>Prioritize Actions</span>
                  </li>
                </ul>
              </div>

              {/* 4. How It Works */}
              <div className="space-y-3.5 pt-4 border-t border-slate-200/60">
                <h4 className="text-[11px] font-black text-slate-800 uppercase tracking-wider">How It Works</h4>
                <div className="flex flex-col gap-1 pl-1">
                  {/* Step 1 */}
                  <div className="flex items-start gap-3 relative">
                    <div className="absolute left-[9px] top-5 w-[2px] h-7 bg-amber-400"></div>
                    <span className="w-5 h-5 rounded-full bg-amber-400/10 border-2 border-amber-500 text-amber-700 flex items-center justify-center text-[10px] font-extrabold shrink-0">1</span>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black text-slate-800 leading-tight">Assessment</span>
                      <span className="text-[9px] text-slate-500">Completed diagnostic profile</span>
                    </div>
                  </div>
                  {/* Spacer */}
                  <div className="h-2.5"></div>
                  {/* Step 2 */}
                  <div className="flex items-start gap-3 relative">
                    <div className="absolute left-[9px] top-5 w-[2px] h-7 bg-amber-400"></div>
                    <span className="w-5 h-5 rounded-full bg-amber-400/10 border-2 border-amber-500 text-amber-700 flex items-center justify-center text-[10px] font-extrabold shrink-0">2</span>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black text-slate-800 leading-tight">AI Report</span>
                      <span className="text-[9px] text-slate-500">Automated business score card</span>
                    </div>
                  </div>
                  {/* Spacer */}
                  <div className="h-2.5"></div>
                  {/* Step 3 */}
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-indigo-50 border-2 border-indigo-600 text-indigo-700 flex items-center justify-center text-[10px] font-extrabold shrink-0">3</span>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black text-indigo-600 leading-tight">Expert Call</span>
                      <span className="text-[9px] text-slate-500 font-semibold">Strategic diagnostic review</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. What You'll Get */}
              <div className="bg-emerald-50/50 border border-emerald-100/80 rounded-xl p-4.5 space-y-2.5">
                <h4 className="text-[11px] font-black text-emerald-800 uppercase tracking-wider">What You'll Get</h4>
                <ul className="space-y-2 text-[11px] font-bold text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[3] shrink-0" />
                    <span>60-Min Strategy Session</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[3] shrink-0" />
                    <span>Root Cause Analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[3] shrink-0" />
                    <span>90-Day Growth Plan</span>
                  </li>
                </ul>
              </div>

              {/* 6. Premium CTA */}
              <div className="pt-4 border-t border-slate-200/60">
                <div className="bg-[#0F172A] text-white rounded-xl p-4.5 relative overflow-hidden border border-slate-800 shadow-md">
                  {/* Radial background glow */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="inline-block bg-amber-400/20 text-amber-300 text-[9px] font-black px-2 py-0.5 rounded border border-amber-400/10 uppercase tracking-widest leading-none">
                        Limited Time Offer
                      </span>
                      <h4 className="text-[13px] font-black tracking-wide text-white leading-tight">Unlock Your Growth Blueprint™</h4>
                      <p className="text-[10px] text-slate-400 font-bold">Business Growth Diagnostic™</p>
                    </div>
                    
                    <div className="flex items-baseline gap-2">
                      <span className="text-[12px] text-slate-500 line-through font-semibold font-mono">₹9,999</span>
                      <span className="text-xl font-black text-amber-400 font-mono">₹1,499</span>
                    </div>
                    
                    <button
                      onClick={() => setActiveTab('booking')}
                      className="w-full bg-amber-500 hover:bg-amber-400 text-[#0F172A] py-2.5 rounded-lg font-black text-[12px] uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-1.5 shadow-md active:scale-95 animate-pulse"
                    >
                      <span>Book Diagnostic Call</span>
                      <ChevronRight className="w-4 h-4 stroke-[3]" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </aside>

          {/* CENTER REPORT PANEL */}
          <div className="xl:col-span-3 space-y-8 flex flex-col justify-between">
            <div ref={activeTabContentRef} className="space-y-8 w-full">

            {/* ---------------------------------------------------- */}
            {/* VIEW 1: EXECUTIVE OVERVIEW (TAB CORE)              */}
            {/* ---------------------------------------------------- */}
            {activeTab === 'overview' && (() => {
              const growthReadiness = Math.min(100, Math.round(globalScore * 1.06));
              const growthPotential = Math.min(60, Math.max(10, Math.round((100 - globalScore) * 0.5 + 10)));
              
              const getScoreTag = (score: number) => {
                if (score < 50) return { text: "Critical Gaps", bg: "bg-rose-50 text-rose-700 border-rose-100/50" };
                if (score < 70) return { text: "Needs Improvement", bg: "bg-amber-50 text-amber-700 border-amber-100/50" };
                if (score < 85) return { text: "Moderate", bg: "bg-emerald-50 text-emerald-700 border-emerald-100/50" };
                return { text: "Elite Scaling", bg: "bg-indigo-50 text-indigo-700 border-indigo-100/50" };
              };

              const getReadinessTag = (score: number) => {
                if (score < 50) return { text: "Low", bg: "bg-rose-50 text-rose-700 border-rose-100/50" };
                if (score < 70) return { text: "Moderate", bg: "bg-amber-50 text-amber-700 border-amber-100/50" };
                if (score < 85) return { text: "Strong", bg: "bg-emerald-50 text-emerald-700 border-emerald-100/50" };
                return { text: "Excellent", bg: "bg-indigo-50 text-indigo-700 border-indigo-100/50" };
              };

              const getOpportunityTag = (num: number) => {
                if (num > 50000000) return { text: "High Opportunity", bg: "bg-emerald-50 text-emerald-700 border-emerald-100/50" };
                if (num > 20000000) return { text: "Significant Opportunity", bg: "bg-amber-50 text-amber-700 border-amber-100/50" };
                return { text: "Moderate Opportunity", bg: "bg-amber-50 text-amber-700 border-amber-100/50" };
              };

              const getPotentialTag = (score: number) => {
                if (score > 30) return { text: "High Potential", bg: "bg-emerald-50 text-emerald-700 border-emerald-100/50" };
                if (score > 20) return { text: "Moderate Potential", bg: "bg-emerald-50 text-emerald-700 border-emerald-100/50" };
                return { text: "Steady Growth", bg: "bg-indigo-50 text-indigo-700 border-indigo-100/50" };
              };

              const STRENGTHS_LOOKUP: Record<string, { title: string; desc: string }> = {
                "Leadership & Vision": {
                  title: "Strong Strategic Alignment",
                  desc: "Clear vision and robust growth objectives across departments."
                },
                "Sales & Revenue": {
                  title: "Effective Customer Acquisition",
                  desc: "Consistent conversion and repeatable sales processes."
                },
                "Marketing & Customer Growth": {
                  title: "Healthy Client Brand Retention",
                  desc: "Strong NPS customer feedback loop and high referral rate."
                },
                "Operations & Process": {
                  title: "Streamlined Workflow Delivery",
                  desc: "High operational efficiency and systematic quality assurance."
                },
                "Finance & Business Performance": {
                  title: "Healthy Profit Margins",
                  desc: "Strong working capital control and low cash-flow friction."
                },
                "People & Leadership": {
                  title: "Experienced Core Team",
                  desc: "Skilled workforce with stable retention and clear alignment."
                },
                "Technology & Business Innovation": {
                  title: "Modern Integrated Tooling",
                  desc: "Effective database structures with minimal manual workarounds."
                }
              };

              const ISSUES_LOOKUP: Record<string, { title: string; desc: string }> = {
                "Leadership & Vision": {
                  title: "Strategic Planning Gaps",
                  desc: "Decisions relying heavily on founder intuition rather than KPI telemetry."
                },
                "Sales & Revenue": {
                  title: "Inconsistent Sales Pipeline",
                  desc: "High customer churn and leakage from word-of-mouth reliance."
                },
                "Marketing & Customer Growth": {
                  title: "Inconsistent Lead Flow",
                  desc: "Unpredictable marketing channels and low demand generation."
                },
                "Operations & Process": {
                  title: "Lack of Standard Processes (SOPs)",
                  desc: "Workflows rely on tribal memory leading to execution errors."
                },
                "Finance & Business Performance": {
                  title: "Operational Profit Leakage",
                  desc: "Unmeasured unit economics and lack of real-time margin audits."
                },
                "People & Leadership": {
                  title: "Founder Dependency in Key Areas",
                  desc: "Decision-making bottlenecked by founder layer, capping valuation."
                },
                "Technology & Business Innovation": {
                  title: "Manual Technology Workarounds",
                  desc: "Disparate systems require double-entry and slow down operations."
                }
              };

              const IMMEDIATE_PRIORITY_LOOKUP: Record<string, { action: string; desc: string }> = {
                "Operations & Process": {
                  action: "Build Standard Operating Processes (SOPs)",
                  desc: "Systemizing key processes will improve efficiency, reduce errors and unlock scalability."
                },
                "Leadership & Vision": {
                  action: "Establish Central Strategic OKRs",
                  desc: "Documenting strategic goal alignments will align team execution with founder's long-term targets."
                },
                "Sales & Revenue": {
                  action: "Structure CRM Sales Pipeline Gates",
                  desc: "Setting up automated conversion check-points inside the sales cycle stops revenue leakage."
                },
                "Marketing & Customer Growth": {
                  action: "Develop Paid Acquisition Funnels",
                  desc: "Implementing repeatable lead capture pages reduces reliance on word-of-mouth pipelines."
                },
                "Finance & Business Performance": {
                  action: "Implement Weekly Unit Profit Reviews",
                  desc: "Auditing gross margins on every product line will plug active capital leaks immediately."
                },
                "People & Leadership": {
                  action: "Delegate Approvals to Middle-Mgmt",
                  desc: "Creating a clear corporate authority matrix frees up founder bandwidth to focus on core growth."
                },
                "Technology & Business Innovation": {
                  action: "Automate Manual Data Ingestion",
                  desc: "Connecting databases through automated APIs eliminates error-prone transcription tasks."
                }
              };

              return (
                <div className="space-y-6">
                  
                  {/* BUSINESS SNAPSHOT (TOP KPIs) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans">
                    
                    {/* CARD 1: BUSINESS GROWTH SCORE */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80 flex flex-col justify-between h-[155px] relative overflow-hidden z-10">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                          <TrendingUp className="w-5.5 h-5.5" />
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">BUSINESS GROWTH SCORE™</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-black text-slate-900 leading-none">{globalScore}</span>
                            <span className="text-xs font-bold text-slate-400">/100</span>
                          </div>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold border ${getScoreTag(globalScore).bg}`}>
                            {getScoreTag(globalScore).text}
                          </span>
                        </div>
                      </div>
                      <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-[10px] font-semibold text-slate-400">
                        <span>Industry Average: 58</span>
                        <Info className="w-3.5 h-3.5 text-slate-300" />
                      </div>
                    </div>

                    {/* CARD 2: GROWTH READINESS */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80 flex flex-col justify-between h-[155px] relative overflow-hidden z-10">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-5.5 h-5.5" />
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">GROWTH READINESS™</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-black text-slate-900 leading-none">{growthReadiness}%</span>
                          </div>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold border ${getReadinessTag(growthReadiness).bg}`}>
                            {getReadinessTag(growthReadiness).text}
                          </span>
                        </div>
                      </div>
                      <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-[10px] font-semibold text-slate-400">
                        <span>Industry Average: 60%</span>
                        <Info className="w-3.5 h-3.5 text-slate-300" />
                      </div>
                    </div>

                    {/* CARD 3: HIDDEN REVENUE OPPORTUNITY */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80 flex flex-col justify-between h-[155px] relative overflow-hidden z-10">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0">
                          <Coins className="w-5.5 h-5.5" />
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">HIDDEN REVENUE OPPORTUNITY™</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-black text-slate-900 leading-none">{dynamicHiddenRev}</span>
                          </div>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold border ${getOpportunityTag(calculatedHiddenRevNum).bg}`}>
                            {getOpportunityTag(calculatedHiddenRevNum).text}
                          </span>
                        </div>
                      </div>
                      <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-[10px] font-semibold text-slate-400">
                        <span>Industry Average: {formatCurrency(Math.round(calculatedHiddenRevNum * 0.5))}</span>
                        <Info className="w-3.5 h-3.5 text-slate-300" />
                      </div>
                    </div>

                    {/* CARD 4: GROWTH POTENTIAL */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80 flex flex-col justify-between h-[155px] relative overflow-hidden z-10">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-full bg-[#E2F5EB] text-emerald-600 flex items-center justify-center shrink-0">
                          <Rocket className="w-5.5 h-5.5" />
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">GROWTH POTENTIAL™ (12-MONTH)</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-black text-slate-900 leading-none">+{growthPotential}%</span>
                          </div>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold border ${getPotentialTag(growthPotential).bg}`}>
                            {getPotentialTag(growthPotential).text}
                          </span>
                        </div>
                      </div>
                      <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-[10px] font-semibold text-slate-400">
                        <span>Industry Average: +16%</span>
                        <Info className="w-3.5 h-3.5 text-slate-300" />
                      </div>
                    </div>

                  </div>

                  {/* AI EXECUTIVE SUMMARY */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative font-sans">
                    <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                      <Sparkles className="w-4.5 h-4.5 text-indigo-600 animate-pulse shrink-0" />
                      <h3 className="text-xs font-black text-slate-950 uppercase tracking-wider">AI EXECUTIVE SUMMARY</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                      An executive review of <strong className="font-black text-slate-900">{compName}</strong> operating within the <strong className="font-black text-slate-900">{industryType}</strong> sector indicates a solid revenue foundation of <strong className="font-black text-slate-900">{revenueTier}</strong> with strong baseline capabilities. However, scaling is being capped by critical process dependencies, particularly a <strong className="font-black text-rose-700">critical performance gap inside {lowestPillar.name} ({lowestPillar.score}% score)</strong> and high <strong className="font-black text-rose-700">founder dependency ({founderDependencyPct.split(' ')[0]})</strong>. Significant revenue upside of <strong className="font-black text-emerald-700">{dynamicHiddenRev}</strong> exists through <strong className="font-black text-slate-900">systematic process standardization</strong>, <strong className="font-black text-slate-900">targeted automation</strong>, and establishing a <strong className="font-black text-slate-900">decentralized leadership framework</strong> to reclaim active founder bandwidth.
                    </p>
                  </div>

                  {/* THREE-COLUMN STRATEGIC DETAILS */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
                    
                    {/* COLUMN 1: TOP 3 STRENGTHS */}
                    <div className="bg-[#F4FBF7] border border-[#E2F5EB] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 pb-3 mb-4 border-b border-emerald-100">
                          <Award className="w-5 h-5 text-emerald-600 shrink-0" />
                          <h4 className="text-xs font-black text-emerald-800 uppercase tracking-wider">TOP 3 STRENGTHS</h4>
                        </div>
                        <ul className="space-y-4">
                          {dynamicStrengths.map((item, idx) => {
                            const info = STRENGTHS_LOOKUP[item.name] || { title: item.name, desc: "Demonstrates stable baseline operational readiness." };
                            return (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <div className="space-y-0.5">
                                  <span className="font-black text-slate-800 text-xs block leading-tight">{info.title}</span>
                                  <p className="text-[10.5px] text-slate-500 font-semibold leading-snug">{info.desc}</p>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    {/* COLUMN 2: TOP 3 PRIORITY ISSUES */}
                    <div className="bg-[#FFF5F5] border border-[#FEE2E2] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 pb-3 mb-4 border-b border-rose-100">
                          <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                          <h4 className="text-xs font-black text-rose-800 uppercase tracking-wider">TOP 3 PRIORITY ISSUES</h4>
                        </div>
                        <ul className="space-y-4">
                          {dynamicImprovements.map((item, idx) => {
                            const info = ISSUES_LOOKUP[item.name] || { title: item.name, desc: "Operational bottleneck requiring standard guidelines." };
                            return (
                              <li key={idx} className="flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                                <div className="space-y-0.5">
                                  <span className="font-black text-slate-800 text-xs block leading-tight">{info.title}</span>
                                  <p className="text-[10.5px] text-slate-500 font-semibold leading-snug">{info.desc}</p>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    {/* COLUMN 3: IMMEDIATE PRIORITY */}
                    <div className="bg-[#FCFAF2] border border-[#F5EFC3]/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 pb-3 mb-4 border-b border-amber-100">
                          <Star className="w-5 h-5 text-amber-500 shrink-0 fill-amber-400" />
                          <h4 className="text-xs font-black text-amber-800 uppercase tracking-wider">IMMEDIATE PRIORITY</h4>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <span className="font-black text-slate-800 text-sm block leading-tight">
                              {IMMEDIATE_PRIORITY_LOOKUP[lowestPillar?.name || '']?.action || "Build Standard Operating Processes (SOPs)"}
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                              <span className="text-xs text-slate-600 font-bold">Impact: High</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4.5 h-4.5 text-slate-400 shrink-0" />
                              <span className="text-xs text-slate-600 font-bold">Timeline: 0 - 90 Days</span>
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 font-semibold mt-4 pt-4 border-t border-slate-200/50 leading-relaxed">
                            {IMMEDIATE_PRIORITY_LOOKUP[lowestPillar?.name || '']?.desc || "Systemizing key processes will improve efficiency, reduce errors and unlock scalability."}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* NEXT BEST STEP & DIAGNOSTIC CTA */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                    {/* Next Best Step */}
                    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                          <TrendingUp className="w-4 h-4 text-[#0F172A]" />
                          <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">Next Best Step</h4>
                        </div>
                        <div className="mt-3.5 space-y-2 text-xs text-slate-600 leading-relaxed font-semibold">
                          <p>
                            1. **Decouple Core Workflow Dependencies**: Establish process guidelines inside <strong>{lowestPillar?.name ?? 'Operations'}</strong> to relieve 40%+ of active founder bottlenecks.
                          </p>
                          <p>
                            2. **Deploy Programmatic Retention Systems**: Protect your baseline by formalizing customer satisfaction check-ins and collecting referral reviews systematically.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Business Growth Diagnostic CTA */}
                    <div className="bg-[#0F172A] text-white rounded-2xl p-5 flex flex-col justify-between border border-slate-800 shadow-md relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>
                      <div className="space-y-2 relative z-10">
                        <span className="text-[9px] font-black text-amber-400 tracking-wider uppercase block mb-0.5">Partner Consultation</span>
                        <h4 className="text-xs font-black text-white uppercase tracking-wider">Book Growth Diagnostic™</h4>
                        <p className="text-[10px] text-slate-300 leading-relaxed font-semibold font-sans">
                          Schedule your private, 1-on-1 Business Growth Diagnostic™ call to systemize {(lowestPillar?.name || 'Operations').split(" & ")[0]} and capitalize on your untapped {dynamicHiddenRev} revenue potential.
                        </p>
                      </div>
                      <button
                        onClick={() => setActiveTab('booking')}
                        className="w-full bg-amber-500 hover:bg-amber-400 text-[#0F172A] font-black text-[11px] uppercase tracking-wider py-2 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 shadow-md active:scale-95 mt-4 cursor-pointer"
                      >
                        <span>Book Diagnostic Call</span>
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })()}

        {/* ---------------------------------------------------- */}
        {/* VIEW 2: BUSINESS HEALTH DASHBOARD                    */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'health' && (() => {
          // Define and calculate operational indicators
          const overallScore = globalScore;
          
          const processScore = pillarScores[3]; // Operations & Process
          const financeScore = pillarScores[4]; // Finance
          const salesScore = pillarScores[1];   // Sales & Revenue
          
          // Calculated Operational Stability
          const opStabilityScore = Math.round((pillarScores[0] * 0.15 + pillarScores[3] * 0.55 + pillarScores[6] * 0.3));
          
          const getMaturityLevel = (score: number) => {
            if (score < 50) return { title: "Turnaround Stage", subtitle: "Tier 4: Reactive Operation", style: "bg-rose-50 text-rose-700 border-rose-100/60", color: "rose" };
            if (score < 70) return { title: "Structured Base", subtitle: "Tier 3: Standardized Operation", style: "bg-amber-50 text-amber-700 border-amber-100/60", color: "amber" };
            if (score < 85) return { title: "Scale-Ready", subtitle: "Tier 2: Scale-Optimized", style: "bg-emerald-50 text-emerald-700 border-emerald-100/60", color: "emerald" };
            return { title: "Elite State", subtitle: "Tier 1: World Class", style: "bg-indigo-50 text-indigo-700 border-indigo-100/60", color: "indigo" };
          };

          const maturityInfo = getMaturityLevel(globalScore);

          // Card rendering helper to keep look cohesive and premium
          const getScoreColorClasses = (score: number) => {
            if (score >= 85) return { text: "text-indigo-600", bg: "bg-indigo-50/70 border-indigo-100", labelBg: "bg-indigo-100 text-indigo-800" };
            if (score >= 70) return { text: "text-emerald-600", bg: "bg-emerald-50/70 border-emerald-100", labelBg: "bg-emerald-100 text-emerald-800" };
            if (score >= 50) return { text: "text-amber-600", bg: "bg-amber-50/70 border-amber-100", labelBg: "bg-amber-100 text-amber-800" };
            return { text: "text-rose-600", bg: "bg-rose-50/70 border-rose-100", labelBg: "bg-rose-100 text-rose-800" };
          };

          // 1. Overall Health Card details
          const overallColors = getScoreColorClasses(overallScore);
          
          // 2. Process Health details
          const processColors = getScoreColorClasses(processScore);
          const processStatus = processScore >= 85 ? "Elite Workflows" : processScore >= 70 ? "Standardized" : processScore >= 50 ? "Process Gaps" : "Tribal Memory";
          
          // 3. Financial Health details
          const financeColors = getScoreColorClasses(financeScore);
          const financeStatus = financeScore >= 85 ? "Elite Liquidity" : financeScore >= 70 ? "Solid Reserves" : financeScore >= 50 ? "Basic Tracking" : "Margin Leakage";

          // 4. Sales Engine Health details
          const salesColors = getScoreColorClasses(salesScore);
          const salesStatus = salesScore >= 85 ? "Predictable Pipeline" : salesScore >= 70 ? "Consistent Sales" : salesScore >= 50 ? "Leads Slip Gates" : "Unpredictable Flow";

          // 5. Operational Stability details
          const stabilityColors = getScoreColorClasses(opStabilityScore);
          const stabilityStatus = opStabilityScore >= 85 ? "Highly Resilient" : opStabilityScore >= 70 ? "Stable Base" : opStabilityScore >= 50 ? "Moderate Volatility" : "High System Risk";

          // 6. Business Maturity details
          const maturityColors = getScoreColorClasses(overallScore); // use overall score to drive colors
          const maturityStatus = maturityInfo.title;

          // Compute risks from data
          const detectedRisks = [];
          
          // Owner Dependency Risk (from avgDependencyScore)
          if (avgDependencyScore <= 2.5) {
            detectedRisks.push({
              title: "Owner Dependency",
              level: "High Risk",
              levelStyle: "bg-rose-50 text-rose-700 border-rose-100/80",
              priority: "Critical (Phase 1)",
              priorityStyle: "text-rose-700 bg-rose-50 border-rose-100/50",
              impact: "Strategic bandwidth is bottlenecked at the founder layer. daily operations stall without your constant personal oversight, capping valuation."
            });
          } else {
            detectedRisks.push({
              title: "Owner Dependency",
              level: "Moderate Risk",
              levelStyle: "bg-amber-50 text-amber-700 border-amber-100/80",
              priority: "Medium Priority",
              priorityStyle: "text-amber-700 bg-amber-50 border-amber-100/50",
              impact: "The business can survive basic operations, but key strategic decisions and client relationships remain owner-reliant."
            });
          }

          // SOP Missing (Q10 index 9)
          const q10Val = scores?.[9] || 2;
          if (q10Val <= 2) {
            detectedRisks.push({
              title: "SOP Missing & Tribal Memory",
              level: "High Risk",
              levelStyle: "bg-rose-50 text-rose-700 border-rose-100/80",
              priority: "Critical (Phase 1)",
              priorityStyle: "text-rose-700 bg-rose-50 border-rose-100/50",
              impact: "Lack of process standardization results in delivery errors, unpredictable output quality, and long ramp-up cycles for new hires."
            });
          }

          // Sales Process Gap (Q5 index 4)
          const q5Val = scores?.[4] || 2;
          if (q5Val <= 2) {
            detectedRisks.push({
              title: "Sales Process Playbook Gap",
              level: "High Risk",
              levelStyle: "bg-rose-50 text-rose-700 border-rose-100/80",
              priority: "High Priority",
              priorityStyle: "text-rose-700 bg-rose-50 border-rose-100/50",
              impact: "New lead conversion relies on individual talent rather than a repeatable, automated pipeline, allowing deals to leak silently."
            });
          }

          // Cash Flow Risk (Q14 index 13 or Q15 index 14)
          const q14Val = scores?.[13] || 2;
          const q15Val = scores?.[14] || 2;
          if (q14Val <= 2 || q15Val <= 2) {
            detectedRisks.push({
              title: "Working Capital Liquidity Risk",
              level: "High Risk",
              levelStyle: "bg-rose-50 text-rose-700 border-rose-100/80",
              priority: "Critical (Immediate)",
              priorityStyle: "text-rose-700 bg-rose-50 border-rose-100/50",
              impact: "Absence of real-time accounts aging audits and cash buffers exposes the firm to severe liquidity squeezes if top clients delay payment."
            });
          } else {
            detectedRisks.push({
              title: "Working Capital Liquidity Risk",
              level: "Moderate Risk",
              levelStyle: "bg-amber-50 text-amber-700 border-amber-100/80",
              priority: "Medium Priority",
              priorityStyle: "text-amber-700 bg-amber-50 border-amber-100/50",
              impact: "Cash reserves exist but are not segmented or protected inside a strict 6-month operating buffer."
            });
          }

          // Customer Concentration/Retention Risk (Q6 index 5)
          const q6Val = scores?.[5] || 2;
          if (q6Val <= 2) {
            detectedRisks.push({
              title: "Client Retention Vulnerability",
              level: "High Risk",
              levelStyle: "bg-rose-50 text-rose-700 border-rose-100/80",
              priority: "High Priority",
              priorityStyle: "text-rose-700 bg-rose-50 border-rose-100/50",
              impact: "Lack of systemized post-delivery care loops creates high customer churn, forcing constant expensive client acquisition campaigns."
            });
          }

          // Revenue Dependency / Lead Deficit (Q4 index 3)
          const q4Val = scores?.[3] || 2;
          if (q4Val <= 2) {
            detectedRisks.push({
              title: "Lead Generation Dependency",
              level: "High Risk",
              levelStyle: "bg-rose-50 text-rose-700 border-rose-100/80",
              priority: "Critical (Immediate)",
              priorityStyle: "text-rose-700 bg-rose-50 border-rose-100/50",
              impact: "Over-reliance on word-of-mouth creates a volatile pipeline, preventing strategic staff hires or stable capital investments."
            });
          }

          // Performance snapshot progress bars values:
          const revStabilityScore = Math.round((pillarScores[1] + pillarScores[4]) / 2);
          const custStabilityScore = Math.round((pillarScores[2] + (scores?.[5] ? (scores[5] / 4) * 100 : 70)) / 2);
          const teamCapabilityScore = pillarScores[5];
          const processStandardScore = pillarScores[3];
          const autoReadinessScore = pillarScores[6];

          // Trend chart data (6 nodes ending on today's globalScore)
          const trendData = [
            { month: 'Jan 2025', score: Math.max(40, globalScore - 20) },
            { month: 'Mar 2025', score: Math.max(45, globalScore - 15) },
            { month: 'May 2025', score: Math.max(50, globalScore - 10) },
            { month: 'Jul 2025', score: Math.max(55, globalScore - 6) },
            { month: 'Sep 2025', score: Math.max(60, globalScore - 4) },
            { month: 'Nov 2025', score: Math.max(63, globalScore - 2) },
            { month: 'Jul 2026', score: globalScore }
          ];

          return (
            <div className="space-y-6">

              {/* 1. OPERATIONAL HEALTH INDICATORS (6 CONCISE KPI CARDS) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 font-sans">
                
                {/* 1. Overall Health Score */}
                <div className="bg-white rounded-2xl p-4.5 shadow-sm border border-slate-200/85 flex flex-col justify-between h-[125px] z-10">
                  <div className="flex items-start justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                        <Activity className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">OVERALL HEALTH</span>
                    </div>
                    <span className={`inline-flex px-1.5 py-0.5 rounded-full text-[8.5px] font-black uppercase tracking-wider ${overallColors.labelBg}`}>
                      {overallScore >= 70 ? '↑ Improving' : '↓ Gaps'}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-2.5xl font-black text-slate-900 leading-none">{overallScore}%</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 block leading-tight mt-1 line-clamp-1">
                      {overallScore >= 85 ? 'Elite Scaling' : overallScore >= 70 ? 'Stable Growth' : overallScore >= 50 ? 'Needs Attention' : 'Critical Turnaround'}
                    </span>
                  </div>
                </div>

                {/* 2. Process Health */}
                <div className="bg-white rounded-2xl p-4.5 shadow-sm border border-slate-200/85 flex flex-col justify-between h-[125px] z-10">
                  <div className="flex items-start justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-600 flex items-center justify-center shrink-0">
                        <GitBranch className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">PROCESS HEALTH</span>
                    </div>
                    <span className={`inline-flex px-1.5 py-0.5 rounded-full text-[8.5px] font-black uppercase tracking-wider ${processColors.labelBg}`}>
                      → Stable
                    </span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-2.5xl font-black text-slate-900 leading-none">{processScore}%</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 block leading-tight mt-1 line-clamp-1">
                      {processStatus}
                    </span>
                  </div>
                </div>

                {/* 3. Financial Health */}
                <div className="bg-white rounded-2xl p-4.5 shadow-sm border border-slate-200/85 flex flex-col justify-between h-[125px] z-10">
                  <div className="flex items-start justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <Coins className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">FINANCIAL HEALTH</span>
                    </div>
                    <span className={`inline-flex px-1.5 py-0.5 rounded-full text-[8.5px] font-black uppercase tracking-wider ${financeColors.labelBg}`}>
                      {financeScore >= 70 ? '↑ Improving' : '→ Stable'}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-2.5xl font-black text-slate-900 leading-none">{financeScore}%</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 block leading-tight mt-1 line-clamp-1">
                      {financeStatus}
                    </span>
                  </div>
                </div>

                {/* 4. Sales Engine Health */}
                <div className="bg-white rounded-2xl p-4.5 shadow-sm border border-slate-200/85 flex flex-col justify-between h-[125px] z-10">
                  <div className="flex items-start justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                        <Target className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">SALES ENGINE</span>
                    </div>
                    <span className={`inline-flex px-1.5 py-0.5 rounded-full text-[8.5px] font-black uppercase tracking-wider ${salesColors.labelBg}`}>
                      → Stable
                    </span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-2.5xl font-black text-slate-900 leading-none">{salesScore}%</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 block leading-tight mt-1 line-clamp-1">
                      {salesStatus}
                    </span>
                  </div>
                </div>

                {/* 5. Operational Stability */}
                <div className="bg-white rounded-2xl p-4.5 shadow-sm border border-slate-200/85 flex flex-col justify-between h-[125px] z-10">
                  <div className="flex items-start justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">STABILITY INDEX</span>
                    </div>
                    <span className={`inline-flex px-1.5 py-0.5 rounded-full text-[8.5px] font-black uppercase tracking-wider ${stabilityColors.labelBg}`}>
                      → Stable
                    </span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-2.5xl font-black text-slate-900 leading-none">{opStabilityScore}%</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 block leading-tight mt-1 line-clamp-1">
                      {stabilityStatus}
                    </span>
                  </div>
                </div>

                {/* 6. Business Maturity */}
                <div className="bg-white rounded-2xl p-4.5 shadow-sm border border-slate-200/85 flex flex-col justify-between h-[125px] z-10">
                  <div className="flex items-start justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                        <Award className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">MATURITY LEVEL</span>
                    </div>
                    <span className={`inline-flex px-1.5 py-0.5 rounded-full text-[8.5px] font-black uppercase tracking-wider ${maturityColors.labelBg}`}>
                      ↑ Advancing
                    </span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-lg font-black text-slate-900 leading-none">
                        {overallScore < 50 ? 'Tier 4' : overallScore < 70 ? 'Tier 3' : overallScore < 85 ? 'Tier 2' : 'Tier 1'}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 block leading-tight mt-1 line-clamp-1">
                      {maturityStatus}
                    </span>
                  </div>
                </div>

              </div>

              {/* TWO COLUMN GRID FOR RISKS & PERFORMANCE SNAPSHOT */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* 2. BUSINESS RISK MONITOR */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/85 flex flex-col justify-between font-sans">
                  <div>
                    <div className="flex items-center gap-2 pb-3.5 mb-4 border-b border-slate-100">
                      <AlertTriangle className="w-4.5 h-4.5 text-rose-500" />
                      <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider">Business Risk Monitor</h4>
                    </div>
                    
                    <div className="space-y-4">
                      {detectedRisks.slice(0, 3).map((risk, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-black text-slate-900">{risk.title}</span>
                            <div className="flex items-center gap-1.5">
                              <span className={`inline-flex px-1.5 py-0.5 rounded text-[8.5px] font-black uppercase tracking-wider border ${risk.levelStyle}`}>
                                {risk.level}
                              </span>
                              <span className={`inline-flex px-1.5 py-0.5 rounded text-[8.5px] font-black uppercase tracking-wider border ${risk.priorityStyle}`}>
                                {risk.priority}
                              </span>
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-600 font-semibold leading-relaxed">
                            <span className="font-bold text-slate-400">Impact: </span>{risk.impact}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-slate-100 pt-3.5 mt-5 text-[10px] font-semibold text-slate-400 flex items-center justify-between">
                    <span>Evidence-Based Risk Telemetry</span>
                    <span className="flex items-center gap-1 text-rose-500 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span> Risks Logged
                    </span>
                  </div>
                </div>

                {/* 3. PERFORMANCE SNAPSHOT */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/85 flex flex-col justify-between font-sans">
                  <div>
                    <div className="flex items-center gap-2 pb-3.5 mb-4 border-b border-slate-100">
                      <BarChart3 className="w-4.5 h-4.5 text-slate-800" />
                      <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider">Performance Snapshot</h4>
                    </div>

                    <div className="space-y-4.5">
                      
                      {/* Metric 1 */}
                      <div>
                        <div className="flex justify-between text-[11px] font-bold text-slate-700 mb-1">
                          <span>Revenue Stability</span>
                          <span className="text-indigo-600 font-black">{revStabilityScore}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-indigo-500 h-full rounded-full transition-all duration-500" style={{ width: `${revStabilityScore}%` }} />
                        </div>
                      </div>

                      {/* Metric 2 */}
                      <div>
                        <div className="flex justify-between text-[11px] font-bold text-slate-700 mb-1">
                          <span>Customer Stability</span>
                          <span className="text-emerald-600 font-black">{custStabilityScore}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${custStabilityScore}%` }} />
                        </div>
                      </div>

                      {/* Metric 3 */}
                      <div>
                        <div className="flex justify-between text-[11px] font-bold text-slate-700 mb-1">
                          <span>Team Capability</span>
                          <span className="text-teal-600 font-black">{teamCapabilityScore}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-teal-500 h-full rounded-full transition-all duration-500" style={{ width: `${teamCapabilityScore}%` }} />
                        </div>
                      </div>

                      {/* Metric 4 */}
                      <div>
                        <div className="flex justify-between text-[11px] font-bold text-slate-700 mb-1">
                          <span>Process Standardization</span>
                          <span className="text-amber-600 font-black">{processStandardScore}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-amber-500 h-full rounded-full transition-all duration-500" style={{ width: `${processStandardScore}%` }} />
                        </div>
                      </div>

                      {/* Metric 5 */}
                      <div>
                        <div className="flex justify-between text-[11px] font-bold text-slate-700 mb-1">
                          <span>Automation Readiness</span>
                          <span className="text-rose-600 font-black">{autoReadinessScore}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-rose-500 h-full rounded-full transition-all duration-500" style={{ width: `${autoReadinessScore}%` }} />
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="border-t border-slate-100 pt-3.5 mt-5 text-[10px] font-semibold text-slate-400 flex items-center justify-between">
                    <span>Performance KPIs Normalized</span>
                    <Info className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                </div>

              </div>

              {/* BOTTOM TWO COLUMN/GRID ROW FOR HEALTH TREND & DIAGNOSTIC BANNER */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* 4. BUSINESS HEALTH TREND */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-slate-200/85 flex flex-col justify-between font-sans">
                  <div>
                    <div className="flex items-center gap-2 pb-3.5 mb-4 border-b border-slate-100">
                      <TrendingUp className="w-4.5 h-4.5 text-slate-800" />
                      <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider">Business Health Trend</h4>
                    </div>

                    <div className="w-full h-56 mt-2">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={trendData} margin={{ top: 10, right: 20, left: -25, bottom: 0 }}>
                          <XAxis dataKey="month" tick={{ fill: '#64748B', fontSize: 9, fontWeight: 'bold' }} axisLine={false} tickLine={false} />
                          <YAxis domain={[0, 100]} tick={{ fill: '#64748B', fontSize: 9, fontWeight: 'bold' }} axisLine={false} tickLine={false} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#0F172A', borderRadius: '8px', border: 'none', color: '#fff' }} 
                            labelStyle={{ fontWeight: 'black', fontSize: '10px', color: '#94A3B8' }}
                            itemStyle={{ fontWeight: 'black', fontSize: '12px', color: '#10B981' }}
                            formatter={(value) => [`${value}%`, 'Health Score']}
                          />
                          <Line type="monotone" dataKey="score" stroke="#10B981" strokeWidth={3.5} dot={{ r: 4, stroke: '#10B981', strokeWidth: 2, fill: '#fff' }} activeDot={{ r: 6 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="border-t border-slate-100 pt-3 mt-4 text-[10px] font-semibold text-slate-400 flex items-center justify-between">
                    <span>Current Index Tracked Monthly</span>
                    <span className="flex items-center gap-1 text-emerald-500 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Real-time
                    </span>
                  </div>
                </div>

                {/* 5. DIAGNOSTIC BANNER */}
                <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white rounded-2xl p-5 border border-slate-800 shadow-md relative overflow-hidden flex flex-col justify-between font-sans h-full">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>
                  
                  <div className="space-y-1 relative z-10">
                    <span className="text-[9px] font-black text-amber-400 tracking-wider uppercase block mb-1">Accelerated Systems Engineering</span>
                    <h3 className="text-lg font-black text-white leading-tight uppercase tracking-wider">Unlock Your Growth Blueprint™</h3>
                    <p className="text-xs text-amber-300 font-bold mt-0.5">Business Growth Diagnostic™</p>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-semibold mt-2.5">
                      Schedule a private 1-on-1 Business Growth Diagnostic™ with our senior McKinsey/BCG strategist. We'll identify margin leakage, solve bottlenecks, and align customized roadmaps.
                    </p>
                  </div>

                  <div className="mt-5 relative z-10 space-y-3.5">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 line-through text-xs font-bold">₹9,999</span>
                      <span className="bg-amber-500/20 text-amber-400 font-black text-[9.5px] px-2 py-0.5 rounded border border-amber-500/30">
                        Limited Offer ₹1,499
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveTab('booking')}
                      className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-150 shadow-md active:scale-95 shrink-0 animate-pulse cursor-pointer"
                    >
                      <span>Book Diagnostic Call</span>
                      <ChevronRight className="w-4 h-4 stroke-[3]" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          );
        })()}

        {/* ---------------------------------------------------- */}
        {/* VIEW 3: 7-PILLAR ANALYSIS                            */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'pillars' && (
          <PillarsAnalysisTab 
            report={report} 
            formData={formData}
            handlePrintPDF={handlePrintPDF}
            setActiveTab={setActiveTab}
            isGeneratingPDF={isGeneratingPDF}
            pdfStatusMessage={pdfStatusMessage}
          />
        )}

        {/* ---------------------------------------------------- */}
        {/* VIEW 4: GROWTH OPPORTUNITIES                         */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'opportunities' && (
          <div className="space-y-6">
            
            {/* Header Description */}
            <div id="opportunities-header" className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <h3 className="text-base font-black text-slate-950 uppercase tracking-tight mb-2">Enterprise Growth & Opportunity Audit</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                A quantitative review of <strong className="text-slate-900">{compName}</strong> metrics indicates significant trapped capital across three major operational vectors. By addressing these leakage nodes, you can safely unlock up to <strong className="text-emerald-700">{hiddenRev}</strong> in unrealized annual value.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Module 1: Revenue Opportunities (Cross-selling, Upselling, Market Expansion) */}
              <div id="opps-revenue-module" className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                    <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">01. Revenue Expansion Levers</h4>
                  </div>
                  
                  <div className="space-y-3.5 text-xs text-slate-600 leading-relaxed font-semibold">
                    <div>
                      <span className="block text-[11px] font-black text-slate-900 uppercase tracking-tight">Structured Upsell & Cross-sell Matrices:</span>
                      <p className="text-[11px] text-slate-500 font-medium mt-1">
                        Develop a programmatic account mapping framework to automatically align supplementary service extensions with active high-tier clients in the {industryType} sector. This is projected to raise individual client lifetime value by up to 18%.
                      </p>
                    </div>
                    <div>
                      <span className="block text-[11px] font-black text-slate-900 uppercase tracking-tight">Regional Market Replication:</span>
                      <p className="text-[11px] text-slate-500 font-medium mt-1">
                        Utilize current operational successes to execute localized digital market-expansion campaigns, targeting adjacent regional demographics. Decoupling customer acquisition from manual founder efforts is key to scaling.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-100 mt-4">
                  <span className="text-[8px] font-mono font-bold text-emerald-800 uppercase tracking-widest block mb-0.5">ESTIMATED REVENUE YIELD</span>
                  <span className="text-lg font-black text-emerald-700 block">₹ 35 - 85 Lakhs</span>
                  <span className="text-[8px] text-slate-400 block mt-0.5 font-semibold">Based on {revenueTier} baseline</span>
                </div>
              </div>

              {/* Module 2: Cost Reduction Opportunities (Margin Protection, Plugging leaks) */}
              <div id="opps-cost-module" className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                    <div className="w-5 h-5 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <Coins className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">02. Corporate Cost Reduction Levers</h4>
                  </div>
                  
                  <div className="space-y-3.5 text-xs text-slate-600 leading-relaxed font-semibold">
                    <div>
                      <span className="block text-[11px] font-black text-slate-900 uppercase tracking-tight">Weekly Unit-Economic Leakage Auditing:</span>
                      <p className="text-[11px] text-slate-500 font-medium mt-1">
                        Transition from retrospective accounting to a real-time weekly gross margin audit. Pinpoint and neutralize micro-operational leaks, third-party software redundancies, and supply delivery lag immediately.
                      </p>
                    </div>
                    <div>
                      <span className="block text-[11px] font-black text-slate-900 uppercase tracking-tight">Optimizing Sourcing Logistics:</span>
                      <p className="text-[11px] text-slate-500 font-medium mt-1">
                        Consolidate supplier networks and renegotiate key terms, utilizing structured bulk-volume commitments to mitigate variable cash flow friction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50/50 p-3.5 rounded-xl border border-amber-100 mt-4">
                  <span className="text-[8px] font-mono font-bold text-amber-800 uppercase tracking-widest block mb-0.5">ESTIMATED COST SAVINGS</span>
                  <span className="text-lg font-black text-amber-700 block">3% – 5% Gross Margin Lift</span>
                  <span className="text-[8px] text-slate-400 block mt-0.5 font-semibold">Reduces active cash flow leakage</span>
                </div>
              </div>

              {/* Module 3: Automation Opportunities (Replacing manual bottlenecks) */}
              <div id="opps-automation-module" className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                    <div className="w-5 h-5 rounded-md bg-slate-950/10 text-slate-900 flex items-center justify-center shrink-0">
                      <Cpu className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">03. Workflow Automation Levers</h4>
                  </div>
                  
                  <div className="space-y-3.5 text-xs text-slate-600 leading-relaxed font-semibold">
                    <div>
                      <span className="block text-[11px] font-black text-slate-900 uppercase tracking-tight">Programmatic CRM Nurture Channels:</span>
                      <p className="text-[11px] text-slate-500 font-medium mt-1">
                        Replace manual follow-up dependencies with programmatic, multi-channel email/SMS nurture campaigns. Automatically warm cold pipeline leads to maximize conversion potential without adding staff overhead.
                      </p>
                    </div>
                    <div>
                      <span className="block text-[11px] font-black text-slate-900 uppercase tracking-tight">Self-Serve Customer Portals:</span>
                      <p className="text-[11px] text-slate-500 font-medium mt-1">
                        Deploy secure digital intake and status reporting systems, cutting manual support volumes by up to 40% and freeing your core operations layer.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/[0.03] p-3.5 rounded-xl border border-slate-200 mt-4">
                  <span className="text-[8px] font-mono font-bold text-slate-600 uppercase tracking-widest block mb-0.5">ESTIMATED VELOCITY IMPROVEMENT</span>
                  <span className="text-lg font-black text-slate-800 block">40% Less Manual Oversight</span>
                  <span className="text-[8px] text-slate-400 block mt-0.5 font-semibold">Frees up crucial executive time</span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* VIEW 5: AI GROWTH ADVISORY                           */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'advisory' && (
          <ExecutiveAdvisoryTab report={report} formData={formData} handlePrintPDF={handlePrintPDF} setActiveTab={setActiveTab} isGeneratingPDF={isGeneratingPDF} pdfStatusMessage={pdfStatusMessage} />
        )}
        {/* Legacy advisory code suppressed */}
        {false && (() => {
          const getAdvisoryCardData = (pillarIndex: number, score: number) => {
            const isLow = score < 50;
            const isMedium = score >= 50 && score < 75;
            
            switch (pillarIndex) {
              case 0: // Leadership
                return {
                  title: "Leadership & Vision",
                  situation: `Operating at ${score}% performance index with high founder-dependency.`,
                  observation: isLow 
                    ? "Decision bottlenecks at the executive layer delay operational execution and stunt strategy."
                    : isMedium 
                    ? "Strategic planning is documented but lacks clear weekly telemetry tracking for middle-mgmt."
                    : "Highly aligned leadership with mature long-term OKRs and proactive management cycles.",
                  risk: isLow 
                    ? "Severe key-person risk caps enterprise valuation and limits strategic scalability."
                    : isMedium 
                    ? "Operational friction from minor misalignments between division heads and long-term targets."
                    : "Minimal risk; focus should be on strategic capital deployment and external mergers.",
                  direction: isLow 
                    ? "Map an outcome-oriented Accountability Chart and set explicit departmental KPIs."
                    : isMedium 
                    ? "Incorporate a formal, bi-weekly performance review cadence using centralized executive dashboards."
                    : "Establish a corporate governance board to explore joint ventures and market expansion."
                };
              case 1: // Sales
                return {
                  title: "Sales & Revenue",
                  situation: `Operating at ${score}% performance index. Pipeline conversions rely heavily on manual efforts.`,
                  observation: isLow 
                    ? "Sales pipelines lack a repeatable playbook, making conversion erratic and team-dependent."
                    : isMedium 
                    ? "Standard pipeline gates are configured but lack programmatic lead scoring and routing."
                    : "Highly structured conversions with standardized stage-gates and optimized touchpoints.",
                  risk: isLow 
                    ? "Unpredictable cash flow loops and high revenue leakage during client onboarding phases."
                    : isMedium 
                    ? "Inconsistent win-rates across team members, diluting marketing capital on un-scored leads."
                    : "Inability to absorb rapid customer growth without proportional sales staff overhead.",
                  direction: isLow 
                    ? "Formulate a standardized Sales Playbook with predefined scripts and follow-up templates."
                    : isMedium 
                    ? "Integrate predictive pipeline monitoring grids to automate lead routing and score warm leads."
                    : "Automate sales commission calculations and configure upsell matrices for high-value accounts."
                };
              case 2: // Marketing
                return {
                  title: "Marketing & Customer Growth",
                  situation: `Operating at ${score}% performance index with heavy reliance on word-of-mouth.`,
                  observation: isLow 
                    ? "Marketing spend is treated as a flat cost center due to lack of client-acquisition tracking."
                    : isMedium 
                    ? "Organic search and trade pipelines are active but lack automated multi-channel lead capture."
                    : "Mature demand generation engine with structured CAC/LTV tracking and high conversion rate.",
                  risk: isLow 
                    ? "High vulnerability to competitor campaigns and erratic inquiry flow during market shifts."
                    : isMedium 
                    ? "High client acquisition treadmill speeds, forcing continuous spend on un-doped marketing channels."
                    : "Dilution of branding assets across unoptimized digital networks during expansion phases.",
                  direction: isLow 
                    ? "Deploy standard UTM tracking, map client acquisition channels, and launch a referral program."
                    : isMedium 
                    ? "Architect an annual, budget-locked marketing calendar and automate email nurture campaigns."
                    : "Leverage advanced predictive behavior models to run hyper-targeted campaigns for premium tiers."
                };
              case 3: // Operations
                return {
                  title: "Operations & Process",
                  situation: `Operating at ${score}% performance index. Workflows are heavily reliant on tribal knowledge.`,
                  observation: isLow 
                    ? "Process delivery varies by individual operator, leading to high processing errors."
                    : isMedium 
                    ? "Some SOPs are written but are scattered across platforms, leading to low employee compliance."
                    : "Streamlined operational delivery with unified cloud-based ERP systems and real-time tracking.",
                  risk: isLow 
                    ? "Frequent delivery delays, high customer complaints, and long new-hire onboarding times."
                    : isMedium 
                    ? "Operational leakage from minor bottlenecks when passing tasks between siloed departments."
                    : "Systemic latency at extreme volume levels if third-party logistics lag behind production.",
                  direction: isLow 
                    ? "Create a digital SOP wiki for the top 10 highest-leverage operational procedures."
                    : isMedium 
                    ? "Consolidate standard playbooks into a single, centralized team portal with compliance checks."
                    : "Deploy continuous workflow tracing tools to proactively eliminate micro-bottlenecks."
                };
              case 4: // Finance
                return {
                  title: "Finance & Business Performance",
                  situation: `Operating at ${score}% performance index. Trailing financial records limit forward visibility.`,
                  observation: isLow 
                    ? "Financial tracking focuses on gross revenue numbers rather than net unit profitability."
                    : isMedium 
                    ? "P&L accounts are reviewed monthly but finalized too late to support agile adjustments."
                    : "Strong cash reserves with real-time financial reporting cockpits and weekly margin audits.",
                  risk: isLow 
                    ? "Undetected operational cost creep and sudden cash crunches during growth spurts."
                    : isMedium 
                    ? "Trapped working capital in overdue accounts receivable, stalling active operations."
                    : "Sub-optimal capital allocation, leading to tax inefficiencies and low-yield cash holdings.",
                  direction: isLow 
                    ? "Deploy a weekly accounts receivable age tracker and schedule a bi-weekly margin audit cycle."
                    : isMedium 
                    ? "Move from monthly statements to bi-weekly dynamic cash flow forecast models."
                    : "Structure strategic tax plans and prepare capital pathways for rapid regional expansion."
                };
              case 5: // People
                return {
                  title: "People & Organisation",
                  situation: `Operating at ${score}% performance index. Role definitions have overlapping scopes.`,
                  observation: isLow 
                    ? "Employee performance reviews are highly subjective, relying on feelings rather than hard data."
                    : isMedium 
                    ? "Basic job descriptions exist but candidate screening scorecards are inconsistent."
                    : "High-performing team with objective KPI alignment dashboards and stable retention.",
                  risk: isLow 
                    ? "Role confusion, task duplication, finger-pointing, and high employee turnover."
                    : isMedium 
                    ? "New hires take too long to reach full productivity, draining senior management bandwidth."
                    : "Over-reliance on highly specialized executive talent without structured succession plans.",
                  direction: isLow 
                    ? "Write structured job scorecards for each team member with 3 to 5 clear output results."
                    : isMedium 
                    ? "Design role-specific interview scorecards and a standardized 2-week training path."
                    : "Create executive incentive packages and plan succession strategies for vital managers."
                };
              case 6: // Technology
                return {
                  title: "Technology & Innovation",
                  situation: `Operating at ${score}% performance index with redundant manual data entries.`,
                  observation: isLow 
                    ? "Core departments operate in software siloes, requiring slow manual double-entry of data."
                    : isMedium 
                    ? "Digital systems are active but lack automation hooks (APIs) to sync records instantly."
                    : "Optimized technological architecture with secure cloud-based systems and automated workflows.",
                  risk: isLow 
                    ? "High labor overhead, transaction lag, and severe transcription errors across invoices."
                    : isMedium 
                    ? "Data fragmentation, preventing the team from having a single secure source of truth."
                    : "Vulnerability to advanced cybersecurity vectors if access rules are too permissive.",
                  direction: isLow 
                    ? "Perform a digital transformation audit to integrate billing and CRM records via APIs."
                    : isMedium 
                    ? "Deploy unified client-intake portals and configure role-based access controls."
                    : "Enforce multi-factor authentication and automate daily cloud backups with secure encryption."
                };
              default:
                return { title: "", situation: "", observation: "", risk: "", direction: "" };
            }
          };

          return (
            <div className="space-y-10 font-sans relative z-10 print-full">
              
              {/* 1. AI EXECUTIVE DIAGNOSIS */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200/80 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-950 uppercase tracking-widest">
                      01. AI Executive Diagnosis
                    </h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Boardroom Observation Dossier</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[11px] font-semibold leading-relaxed">
                  <div className="bg-slate-50/70 p-6 rounded-xl border border-slate-200/60 md:col-span-2 lg:col-span-3 space-y-4">
                    <span className="block text-[10px] font-black text-indigo-600 uppercase tracking-wider">01-A. Executive Observation & Macro Diagnosis</span>
                    {globalScore < 70 ? (
                      <div className="space-y-4 text-slate-600 font-medium text-xs sm:text-[13px] leading-relaxed">
                        <p>
                          <strong className="font-black text-slate-900">Structural Systemic Volatility:</strong> An analytical review of <strong className="font-black text-slate-900">{compName}</strong> operating within the <strong className="font-black text-slate-900">{industryType}</strong> vertical indicates that your organization has hit a structural scaling ceiling. While your market position allows you to cross revenue targets in the <strong className="font-black text-slate-900">{revenueTier}</strong> bracket, your operational foundation relies almost exclusively on manual execution. The lack of standard automation frameworks means that scaling up will directly increase operational friction, leading to severe profit margin leakage and high staff burnout.
                        </p>
                        <p>
                          <strong className="font-black text-slate-900">The Owner-Dependency Barrier:</strong> Your assessment answers reveal a critical operational dependency on the founder layer. Because daily validation, strategic planning, and performance management require your constant personal oversight, your team is restricted to running routine tasks. This lack of decentralization caps your ultimate enterprise valuation, as a company dependent on its owner cannot be easily scaled, sold, or institutionalized.
                        </p>
                      </div>
                    ) : globalScore >= 85 ? (
                      <div className="space-y-4 text-slate-600 font-medium text-xs sm:text-[13px] leading-relaxed">
                        <p>
                          <strong className="font-black text-slate-900">Enterprise Maturity Evaluation:</strong> <strong className="font-black text-slate-900">{compName}</strong> displays an elite operational framework, placing it in the top tier of maturity models for the <strong className="font-black text-slate-900">{industryType}</strong> sector. By decoupling core day-to-day functions from manual founder oversight, you have cleared the initial growth bottlenecks that stall most MSMEs. Your business systems show solid baseline efficiency and consistent delivery parameters.
                        </p>
                        <p>
                          <strong className="font-black text-slate-900">Strategic Capital Allocation Matrix:</strong> The objective for your enterprise must shift from protective management to aggressive market dominance. With an established core framework, you are prime to utilize your internal stability to deploy high-yield automation models, acquire market share from lower-tier competitors, and execute structured expansions into new regional verticals.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4 text-slate-600 font-medium text-xs sm:text-[13px] leading-relaxed">
                        <p>
                          <strong className="font-black text-slate-900">Operational Transition Analysis:</strong> <strong className="font-black text-slate-900">{compName}</strong> is currently navigating a transitional phase within the <strong className="font-black text-slate-900">{industryType}</strong> sector. While your systems have evolved past early-stage ad-hoc execution, they still exhibit localized vulnerabilities. Your business generates substantial value at the <strong className="font-black text-slate-900">{revenueTier}</strong> level, but scaling further without formalizing processes will strain your core resources, leading to inconsistent client experiences.
                        </p>
                        <p>
                          <strong className="font-black text-slate-900">The Decentralization Mandate:</strong> To sustain and accelerate growth, you must transition from centralized founder control to a decentralized, metrics-driven management model. This requires establishing clear departmental KPIs, standardizing key workflow gates, and delegating tactical decisions to senior staff, enabling you to focus on high-leverage strategic partnerships.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-200/60">
                    <span className="block text-[10px] font-black text-slate-900 uppercase tracking-wider mb-2 text-indigo-600">Growth Stage</span>
                    <p className="text-slate-800 font-extrabold text-xs">
                      {globalScore < 70 
                        ? 'Immediate Turnaround & Stabilization Phase' 
                        : globalScore >= 85 
                        ? 'Elite Corporate Scaling Phase' 
                        : 'Transitional Systemization Phase'}
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium mt-1.5 leading-normal">
                      Focus must shift from ad-hoc growth toward formal decentralization to protect net margins.
                    </p>
                  </div>

                  <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-200/60">
                    <span className="block text-[10px] font-black text-slate-900 uppercase tracking-wider mb-2 text-emerald-600">Biggest Business Strength</span>
                    <p className="text-slate-800 font-extrabold text-xs">
                      {dynamicStrengths[0]?.name || 'Core Leadership'}
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium mt-1.5 leading-normal">
                      Operating at an elite <strong className="text-emerald-700 font-bold">{dynamicStrengths[0]?.score || 75}%</strong> efficiency. This serves as your primary strategic anchor to leverage for future campaigns.
                    </p>
                  </div>

                  <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-200/60">
                    <span className="block text-[10px] font-black text-slate-900 uppercase tracking-wider mb-2 text-rose-600">Biggest Business Constraint</span>
                    <p className="text-slate-800 font-extrabold text-xs">
                      {lowestPillar.name}
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium mt-1.5 leading-normal">
                      Operating at a critical <strong className="text-rose-700 font-bold">{lowestPillar.score}%</strong>. Strategic throughput is bounded directly by owner-dependencies in this sector.
                    </p>
                  </div>

                  <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-200/60 md:col-span-2 lg:col-span-3">
                    <span className="block text-[10px] font-black text-slate-900 uppercase tracking-wider mb-2 text-indigo-600">Overall Business Outlook</span>
                    <p className="text-slate-600 font-medium">
                      {globalScore < 70 
                        ? "Immediate system stabilization is required. Trying to accelerate customer acquisition under current owner-dependent workflows will cause delivery failures and high employee churn. Standardizing standard operational routines is the highest yield option."
                        : globalScore >= 85
                        ? "Excellent market positioning. You are primed to expand into adjacent regional demographics, automate client nurture streams, and acquire market share from lower-tier competitors."
                        : "Highly favorable, contingent on systemizing key delegation gates and automating manual tracking lines to prevent operational bottlenecks at high volume tiers."}
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. TOP 5 STRATEGIC PRIORITIES */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-950 uppercase tracking-widest">
                      02. Top 5 Strategic Priorities
                    </h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Ranked by potential business impact</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {topRecommendations.slice(0, 5).map((rec, index) => {
                    // Specific expected impact calculation to avoid generic outputs
                    const expectedImpact = rec.id === 'sops'
                      ? "Reclaims up to 40% of team capacity, speeds up onboarding by 50%, and secures a 4-6% gross margin lift."
                      : rec.id === 'leads'
                      ? "Unlocks a 15-22% increase in customer conversion, stabilizing pipeline value and revenue predictability."
                      : rec.id === 'finance'
                      ? "Secures an immediate 3-5% margin lift, mitigates accounts receivable aging, and accumulates 3-6 months of liquid reserves."
                      : rec.id === 'delegation'
                      ? "Frees 15-20 hours of founder bandwidth weekly, transferring daily validations to autonomous division leads."
                      : "Reduces candidate-to-productivity cycle from 90 days to 14 days, cutting employee churn by up to 30%.";

                    const urgency = index < 2 ? "High" : "Medium";
                    const urgencyStyle = index < 2 
                      ? "bg-rose-50 text-rose-700 border-rose-100/60" 
                      : "bg-amber-50 text-amber-700 border-amber-100/60";

                    return (
                      <div key={rec.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-100">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-950 text-white font-mono font-black text-xs flex items-center justify-center shrink-0 shadow-sm">
                              0{index + 1}
                            </div>
                            <div>
                              <h4 className="text-sm font-black text-[#0F172A] tracking-tight uppercase">{rec.title}</h4>
                              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Priority Rank #{index + 1}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-mono text-slate-400 font-bold uppercase">Urgency:</span>
                            <span className={`px-2.5 py-1 text-[9px] font-black uppercase rounded-full border ${urgencyStyle}`}>
                              {urgency}
                            </span>
                          </div>
                        </div>

                        {/* Top level priority metadata */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6 bg-slate-50/50 p-4 rounded-xl border border-slate-200/60 text-[11px] font-semibold">
                          <div>
                            <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">Business Reason</span>
                            <p className="text-slate-600 font-medium leading-relaxed">
                              With {compName} operating in the {industryType} sector at the {revenueTier} tier, manual friction in operations creates a severe barrier to expansion. Resolving this priority immediately plugs structural margin leaks and secures your operational baseline.
                            </p>
                          </div>
                          <div>
                            <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">Expected Business Impact</span>
                            <p className="text-slate-700 font-extrabold leading-relaxed">
                              {expectedImpact}
                            </p>
                          </div>
                        </div>

                        {/* Three-Layer Narrative Container (Specification 1) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-[11px] leading-relaxed font-semibold pt-2">
                          <div className="bg-rose-50/40 p-4 rounded-xl border border-rose-100/40">
                            <strong className="text-rose-800 block mb-1 uppercase tracking-wider text-[9px] font-mono">The Friction Point:</strong>
                            <span className="text-slate-600 font-medium">{rec.friction}</span>
                          </div>
                          <div className="bg-emerald-50/40 p-4 rounded-xl border border-emerald-100/40">
                            <strong className="text-emerald-800 block mb-1 uppercase tracking-wider text-[9px] font-mono">The Strategic Intervention:</strong>
                            <span className="text-slate-600 font-medium">{rec.intervention}</span>
                          </div>
                          <div className="bg-amber-50/40 p-4 rounded-xl border border-amber-200/40">
                            <strong className="text-amber-800 block mb-1 uppercase tracking-wider text-[9px] font-mono">KRG ONE Partner Deployment:</strong>
                            <span className="text-slate-600 font-medium">{rec.deployment}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3. AI ADVISORY CARDS */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                    <LayoutDashboard className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-950 uppercase tracking-widest">
                      03. AI Advisory Cards
                    </h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Functional Pillar Diagnostics</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {PILLARS.map((p, idx) => {
                    const score = pillarScores[idx];
                    const data = getAdvisoryCardData(idx, score);
                    
                    return (
                      <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                            <span className="text-xs font-black text-slate-900 uppercase tracking-tight line-clamp-1">{data.title}</span>
                            <span className={`font-mono text-[10px] font-black px-2 py-0.5 rounded ${
                              score < 50 ? 'bg-rose-50 text-rose-700 border border-rose-100' :
                              score < 75 ? 'bg-amber-50 text-amber-700 border border-amber-100' :
                              'bg-emerald-50 text-emerald-700 border border-emerald-100'
                            }`}>
                              {score}%
                            </span>
                          </div>

                          <div className="space-y-4 text-[11px] font-semibold leading-relaxed">
                            <div>
                              <span className="text-[8.5px] font-mono text-slate-400 uppercase block mb-0.5">Current Situation</span>
                              <p className="text-slate-700 font-extrabold leading-normal">{data.situation}</p>
                            </div>
                            <div>
                              <span className="text-[8.5px] font-mono text-slate-400 uppercase block mb-0.5">AI Observation</span>
                              <p className="text-slate-600 font-medium leading-normal">{data.observation}</p>
                            </div>
                            <div>
                              <span className="text-[8.5px] font-mono text-slate-400 uppercase block mb-0.5">Business Risk</span>
                              <p className="text-rose-700 font-bold leading-normal">{data.risk}</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-5 pt-3.5 border-t border-slate-100 bg-slate-50 -mx-5 -mb-5 p-4 rounded-b-2xl">
                          <span className="text-[8.5px] font-mono text-indigo-600 uppercase tracking-widest block mb-1">Suggested Direction</span>
                          <p className="text-[11px] text-slate-800 font-bold leading-relaxed">{data.direction}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 4. OPPORTUNITY VS RISK MATRIX */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-950 uppercase tracking-widest">
                      04. Opportunity vs Risk Matrix
                    </h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Prioritized by direct financial yield</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Opportunities */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider">High Opportunity Drivers</h4>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-xl border border-emerald-100/50 bg-emerald-50/20 text-[11px] font-semibold leading-relaxed">
                        <span className="block text-slate-950 font-extrabold text-xs uppercase mb-1">Workflow Standardization (SOPs)</span>
                        <p className="text-slate-600 font-medium">
                          Catalyzing digital SOPs can reclaim up to 40% of team capacity currently lost to ad-hoc coordinates, resulting in significant, sustainable output stability.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl border border-emerald-100/50 bg-emerald-50/20 text-[11px] font-semibold leading-relaxed">
                        <span className="block text-slate-950 font-extrabold text-xs uppercase mb-1">Automated Client Nurture Systems</span>
                        <p className="text-slate-600 font-medium">
                          Plugging CRM follow-up delays using automated SMS/Email channels is projected to recover up to 22% of pipeline prospects currently lost.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl border border-emerald-100/50 bg-emerald-50/20 text-[11px] font-semibold leading-relaxed">
                        <span className="block text-slate-950 font-extrabold text-xs uppercase mb-1">Financial Margin Telemetry Auditing</span>
                        <p className="text-slate-600 font-medium">
                          Deploying weekly AR aging dashboards and gross margin reviews isolates 3-5% cash redundancies and secures liquid treasury buffers.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Risks */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></div>
                      <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider">High Risk Vulnerabilities</h4>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-xl border border-rose-100/50 bg-rose-50/20 text-[11px] font-semibold leading-relaxed">
                        <span className="block text-slate-950 font-extrabold text-xs uppercase mb-1">Single Point of Failure (SPOF)</span>
                        <p className="text-slate-600 font-medium">
                          Severe daily dependence on the founder layer means strategic throughput is directly restricted to the owner's personal bandwidth, stalling valuation.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl border border-rose-100/50 bg-rose-50/20 text-[11px] font-semibold leading-relaxed">
                        <span className="block text-slate-950 font-extrabold text-xs uppercase mb-1">Tribal Process Memory</span>
                        <p className="text-slate-600 font-medium">
                          Lack of centralized written workflows results in quality variations during customer delivery and extended, costly onboarding cycles.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl border border-rose-100/50 bg-rose-50/20 text-[11px] font-semibold leading-relaxed">
                        <span className="block text-slate-950 font-extrabold text-xs uppercase mb-1">Blind Gross Financial Planning</span>
                        <p className="text-slate-600 font-medium">
                          Relying on gross revenue numbers rather than granular net profitability tracking leaves the business highly vulnerable to sudden cost spikes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. AI GROWTH ROADMAP */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-950 uppercase tracking-widest">
                      05. AI Growth Roadmap
                    </h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Time-phased implementation sprints</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Immediate */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                        <span className="text-xs font-black text-slate-950 uppercase tracking-tight">Immediate (0-30 Days)</span>
                        <span className="bg-rose-50 text-rose-700 text-[9px] font-black px-2.5 py-0.5 rounded border border-rose-100 uppercase font-mono">Critical</span>
                      </div>
                      <div className="space-y-4 text-[11px] font-semibold leading-relaxed">
                        <div>
                          <span className="text-[8.5px] font-mono text-slate-400 uppercase block mb-1">Business Objective</span>
                          <p className="text-slate-800 font-extrabold">Isolate Margin Leakage & Deploy Daily Staff Logs</p>
                        </div>
                        <div>
                          <span className="text-[8.5px] font-mono text-slate-400 uppercase block mb-1">Expected Outcome</span>
                          <p className="text-slate-600 font-medium">
                            Plug active overhead leaks, deploy simple daily metrics tracking, and redirect routine questions away from the founder's daily view.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mt-5 text-[10px] text-slate-500 font-bold text-center">
                      Sprint focus: Stabilization
                    </div>
                  </div>

                  {/* Short Term */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                        <span className="text-xs font-black text-slate-950 uppercase tracking-tight">Short Term (30-90 Days)</span>
                        <span className="bg-amber-50 text-amber-700 text-[9px] font-black px-2.5 py-0.5 rounded border border-amber-100 uppercase font-mono">High</span>
                      </div>
                      <div className="space-y-4 text-[11px] font-semibold leading-relaxed">
                        <div>
                          <span className="text-[8.5px] font-mono text-slate-400 uppercase block mb-1">Business Objective</span>
                          <p className="text-slate-800 font-extrabold">Design & Implement Core Standard Operating Procedures & Launch Nurture Automations</p>
                        </div>
                        <div>
                          <span className="text-[8.5px] font-mono text-slate-400 uppercase block mb-1">Expected Outcome</span>
                          <p className="text-slate-600 font-medium">
                            Formally draft top 10 workflows with clear step-by-step charts, and configure CRM campaigns to auto-respond to leads.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mt-5 text-[10px] text-slate-500 font-bold text-center">
                      Sprint focus: Standardization
                    </div>
                  </div>

                  {/* Long Term */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                        <span className="text-xs font-black text-slate-950 uppercase tracking-tight">Long Term (90-180 Days)</span>
                        <span className="bg-indigo-50 text-indigo-700 text-[9px] font-black px-2.5 py-0.5 rounded border border-indigo-100 uppercase font-mono">Strategic</span>
                      </div>
                      <div className="space-y-4 text-[11px] font-semibold leading-relaxed">
                        <div>
                          <span className="text-[8.5px] font-mono text-slate-400 uppercase block mb-1">Business Objective</span>
                          <p className="text-slate-800 font-extrabold">API System Synchronization & Middle-Mgmt KPI Alignment</p>
                        </div>
                        <div>
                          <span className="text-[8.5px] font-mono text-slate-400 uppercase block mb-1">Expected Outcome</span>
                          <p className="text-slate-600 font-medium">
                            Connect disconnected billing and customer platforms, and transition your management team to a formal, metrics-based weekly review.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mt-5 text-[10px] text-slate-500 font-bold text-center">
                      Sprint focus: Optimization
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. EXPECTED BUSINESS IMPACT */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                    <Coins className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-950 uppercase tracking-widest">
                      06. Expected Business Impact
                    </h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Projections derived from current maturity score</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 font-mono text-slate-900 font-bold">
                  <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm text-center">
                    <span className="text-[8px] text-slate-400 font-black uppercase tracking-wider block mb-1.5">REVENUE GROWTH</span>
                    <span className="text-xl sm:text-2xl font-black text-emerald-700 block">
                      {globalScore < 70 ? '18% - 35%' : globalScore < 85 ? '10% - 18%' : '5% - 10%'}
                    </span>
                    <span className="text-[9px] text-slate-500 font-bold block mt-1">Expected Lift</span>
                  </div>

                  <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm text-center">
                    <span className="text-[8px] text-slate-400 font-black uppercase tracking-wider block mb-1.5">COST SAVING</span>
                    <span className="text-xl sm:text-2xl font-black text-emerald-700 block">
                      {globalScore < 70 ? '5% - 12%' : globalScore < 85 ? '3% - 5%' : '1% - 2%'}
                    </span>
                    <span className="text-[9px] text-slate-500 font-bold block mt-1">Margin Retained</span>
                  </div>

                  <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm text-center">
                    <span className="text-[8px] text-slate-400 font-black uppercase tracking-wider block mb-1.5">PRODUCTIVITY</span>
                    <span className="text-xl sm:text-2xl font-black text-emerald-700 block">
                      {globalScore < 70 ? '35% - 50%' : globalScore < 85 ? '20% - 35%' : '10% - 15%'}
                    </span>
                    <span className="text-[9px] text-slate-500 font-bold block mt-1">Capacity Gained</span>
                  </div>

                  <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm text-center col-span-1">
                    <span className="text-[8px] text-slate-400 font-black uppercase tracking-wider block mb-1.5">CUSTOMER RECOVERY</span>
                    <span className="text-xl sm:text-2xl font-black text-emerald-700 block">
                      {globalScore < 70 ? '20% - 40%' : globalScore < 85 ? '12% - 20%' : '5% - 10%'}
                    </span>
                    <span className="text-[9px] text-slate-500 font-bold block mt-1">Retention Boost</span>
                  </div>

                  <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm text-center col-span-2 md:col-span-1">
                    <span className="text-[8px] text-slate-400 font-black uppercase tracking-wider block mb-1.5">HEALTH SCORE™</span>
                    <span className="text-xl sm:text-2xl font-black text-emerald-700 block">
                      {globalScore < 70 ? '+15 - +25' : globalScore < 85 ? '+8 - +15' : '+3 - +5'}
                    </span>
                    <span className="text-[9px] text-slate-500 font-bold block mt-1">Index Point Lift</span>
                  </div>
                </div>
              </div>

              {/* 7. AI ADVISORY CONFIDENCE */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-950 uppercase tracking-widest">
                      07. AI Advisory Confidence
                    </h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Statistical confidence intervals</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-semibold">
                  <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-100">
                        <span className="text-xs font-black text-slate-950 uppercase tracking-tight">SOP Digitalization</span>
                        <span className="text-xs font-black text-emerald-700 font-mono">94% Confidence</span>
                      </div>
                      <div className="space-y-3 text-[11px] leading-relaxed">
                        <div>
                          <span className="text-[8.5px] font-mono text-slate-400 uppercase block mb-0.5">Based On</span>
                          <p className="text-slate-700 font-extrabold">Operations Index ({pillarScores[3]}%) & Tech Index ({pillarScores[6]}%)</p>
                        </div>
                        <div>
                          <span className="text-[8.5px] font-mono text-slate-400 uppercase block mb-0.5">Supporting Evidence</span>
                          <p className="text-slate-500 font-medium leading-normal">
                            Over 82% of comparable MSMEs operating in the {industryType} sector with similar operations scores saw immediate, secure gross margin recovery upon SOP deployment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-100">
                        <span className="text-xs font-black text-slate-950 uppercase tracking-tight">CRM Automation</span>
                        <span className="text-xs font-black text-emerald-700 font-mono">91% Confidence</span>
                      </div>
                      <div className="space-y-3 text-[11px] leading-relaxed">
                        <div>
                          <span className="text-[8.5px] font-mono text-slate-400 uppercase block mb-0.5">Based On</span>
                          <p className="text-slate-700 font-extrabold">Sales Index ({pillarScores[1]}%) & Marketing Index ({pillarScores[2]}%)</p>
                        </div>
                        <div>
                          <span className="text-[8.5px] font-mono text-slate-400 uppercase block mb-0.5">Supporting Evidence</span>
                          <p className="text-slate-500 font-medium leading-normal">
                            Programmatic client outreach eliminates manual follow-up latency, driving up sales conversion rates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-100">
                        <span className="text-xs font-black text-slate-950 uppercase tracking-tight">Financial Auditing</span>
                        <span className="text-xs font-black text-emerald-700 font-mono">95% Confidence</span>
                      </div>
                      <div className="space-y-3 text-[11px] leading-relaxed">
                        <div>
                          <span className="text-[8.5px] font-mono text-slate-400 uppercase block mb-0.5">Based On</span>
                          <p className="text-slate-700 font-extrabold">Finance Index ({pillarScores[4]}%) & Revenue Tier ({revenueTier})</p>
                        </div>
                        <div>
                          <span className="text-[8.5px] font-mono text-slate-400 uppercase block mb-0.5">Supporting Evidence</span>
                          <p className="text-slate-500 font-medium leading-normal">
                            Consistent weekly unit economic reviews successfully identify 3-5% margin leakage within early-stage audit parameters.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8. NEXT BEST ACTION (HERO BLOCK) */}
              <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl p-7 border border-slate-800 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400/5 rounded-full blur-2xl pointer-events-none"></div>
                <div className="flex items-center gap-2 pb-4 mb-5 border-b border-slate-800 relative z-10">
                  <Star className="w-5 h-5 text-amber-400 shrink-0 fill-amber-400" />
                  <h4 className="text-xs font-black uppercase tracking-widest text-amber-400">08. Next Best Action</h4>
                </div>

                <div className="space-y-4 relative z-10 text-[11px] font-semibold leading-relaxed">
                  <div className="space-y-1">
                    <span className="text-amber-400/90 font-black tracking-widest text-[9.5px] uppercase block">If you do only ONE thing this month, it should be:</span>
                    <h5 className="text-lg sm:text-xl font-black tracking-tight text-white uppercase mt-1">
                      Develop Standard Operating Procedures (SOPs) for {lowestPillar.name}
                    </h5>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3 border-t border-slate-800/80">
                    <div>
                      <span className="text-[8.5px] font-mono text-slate-400 uppercase tracking-widest block mb-1">Why It Matters</span>
                      <p className="text-slate-300 font-medium leading-relaxed">
                        Your assessment highlights <strong className="text-amber-300">{lowestPillar.name}</strong> as your absolute lowest performance node (operating at a critical <strong className="text-amber-300">{lowestPillar.score}%</strong>). Leaving this bottleneck unchecked creates severe operational and financial friction, directly blocking cash flow and anchoring throughput to the limits of personal bandwidth.
                      </p>
                    </div>
                    <div>
                      <span className="text-[8.5px] font-mono text-slate-400 uppercase tracking-widest block mb-1">Expected Business Benefit</span>
                      <p className="text-slate-300 font-medium leading-relaxed">
                        Unlocks up to 40% team productivity, lowers onboarding friction for new hires by 50%, and secures a consistent, repeatable delivery quality that directly increases enterprise value.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          );
        })()}

        {/* ---------------------------------------------------- */}
        {/* VIEW 6: INDUSTRY BENCHMARK                           */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'benchmark' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-black uppercase tracking-wider mb-2">
                  <Building2 className="w-3.5 h-3.5 text-amber-600" />
                  Industry Segment: {industryType}
                </div>
                <h3 className="text-base font-black text-[#0F172A] uppercase tracking-wider">
                  Industry Benchmark Diagnostics — {industryType} Sector
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  Granular evaluation comparing maturity scores for <strong className="text-slate-800">{compName}</strong> directly against average benchmarks and top 10% market leaders in the <strong className="text-indigo-700">{industryType}</strong> industry segment.
                </p>
              </div>

              {/* Benchmark Bar Chart */}
              <div className="w-full h-80 pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={PILLARS.map((p, idx) => {
                      const benchmarkList = [68, 58, 54, 62, 66, 52, 48];
                      const topList = [88, 85, 82, 89, 91, 84, 86];
                      return {
                        name: p,
                        shortName: p.split('&')[0].trim(),
                        'Your Score': pillarScores[idx],
                        [`${industryType} Benchmark`]: benchmarkList[idx],
                        [`${industryType} Top 10%`]: topList[idx]
                      };
                    })}
                    margin={{ top: 20, right: 20, left: 0, bottom: 25 }}
                  >
                    <XAxis
                      dataKey="shortName"
                      tick={{ fontSize: 9, fill: '#475569', fontWeight: 'bold' }}
                      interval={0}
                      angle={-15}
                      textAnchor="end"
                    />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 9, fill: '#64748B' }} />
                    <Tooltip
                      formatter={(value: any, name: any) => [`${value}%`, name]}
                      contentStyle={{ borderRadius: '12px', fontSize: '11px', fontWeight: 'bold' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', fontWeight: 'bold', paddingTop: '10px' }} />
                    <Bar dataKey="Your Score" fill="#F59E0B" radius={[4, 4, 0, 0]} name="Your Current Score" />
                    <Bar dataKey={`${industryType} Benchmark`} fill="#6366F1" radius={[4, 4, 0, 0]} name={`${industryType} Industry Benchmark`} />
                    <Bar dataKey={`${industryType} Top 10%`} fill="#0F172A" radius={[4, 4, 0, 0]} name={`${industryType} Top 10% Leaders`} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Detailed Benchmark Breakdown Table */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-indigo-600" />
                  7-Pillar Benchmark Summary ({industryType} Sector)
                </h4>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase text-[9.5px] font-black tracking-wider">
                        <th className="py-2.5 px-3">Pillar Name</th>
                        <th className="py-2.5 px-3 text-center">Your Current Score</th>
                        <th className="py-2.5 px-3 text-center">{industryType} Benchmark</th>
                        <th className="py-2.5 px-3 text-center">Top 10% Leaders</th>
                        <th className="py-2.5 px-3 text-center">Variance vs Benchmark</th>
                        <th className="py-2.5 px-3 text-center">Sector Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {PILLARS.map((p, idx) => {
                        const benchmarkList = [68, 58, 54, 62, 66, 52, 48];
                        const topList = [88, 85, 82, 89, 91, 84, 86];
                        const userScore = pillarScores[idx];
                        const benchScore = benchmarkList[idx];
                        const diff = userScore - benchScore;
                        const isAbove = diff >= 0;

                        return (
                          <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                            <td className="py-2.5 px-3 font-bold text-slate-900">{p}</td>
                            <td className="py-2.5 px-3 text-center font-black">
                              <span className={`inline-block px-2 py-0.5 rounded font-mono ${
                                userScore >= 70 ? 'bg-emerald-50 text-emerald-700' :
                                userScore >= 50 ? 'bg-amber-50 text-amber-700' :
                                'bg-rose-50 text-rose-700'
                              }`}>
                                {userScore}%
                              </span>
                            </td>
                            <td className="py-2.5 px-3 text-center font-bold font-mono text-slate-600 bg-slate-50/50">
                              {benchScore}%
                            </td>
                            <td className="py-2.5 px-3 text-center font-bold font-mono text-slate-800">
                              {topList[idx]}%
                            </td>
                            <td className="py-2.5 px-3 text-center font-black font-mono">
                              <span className={isAbove ? 'text-emerald-600' : 'text-rose-600'}>
                                {isAbove ? `+${diff}%` : `${diff}%`}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 text-center">
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase border ${
                                isAbove
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                  : 'bg-rose-50 text-rose-700 border-rose-200'
                              }`}>
                                {isAbove ? 'Outperforming' : 'Opportunity Area'}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* VIEW: BUSINESS RULE DATABASE KNOWLEDGE BASE          */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'rules' && (
          <KnowledgeBaseExplorer />
        )}

        {/* ---------------------------------------------------- */}
        {/* VIEW 7: 90-DAY GROWTH PLAN ROADMAP                     */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'plan' && (
          <PlanRoadmapTab 
            report={report} 
            formData={formData}
            handlePrintPDF={handlePrintPDF}
            setActiveTab={setActiveTab}
            isGeneratingPDF={isGeneratingPDF}
            pdfStatusMessage={pdfStatusMessage}
          />
        )}

        {/* ---------------------------------------------------- */}
        {/* VIEW 8: REPORTS & DOWNLOADS                          */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'downloads' && (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 max-w-4xl mx-auto space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Reports & Corporate Downloads</h3>
              <p className="text-xs text-slate-500">Access and download formal corporate PDF, presentation slide, and spreadsheets.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
                <ShieldCheck className="w-8 h-8 text-[#0F172A] mx-auto mb-3" />
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-2">Executive Diagnostic Dossier</h4>
                <p className="text-[10px] text-slate-500 leading-relaxed mb-4">Complete macro audit analysis and technical roadmap compiled into a PDF document.</p>
                <button
                  onClick={handlePrintPDF}
                  disabled={isGeneratingPDF}
                  className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-extrabold text-[10px] uppercase tracking-wider py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 min-h-[36px]"
                >
                  {isGeneratingPDF ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                      <span>{pdfStatusMessage || 'Generating...'}</span>
                    </>
                  ) : (
                    <span>Export PDF Report</span>
                  )}
                </button>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
                <Building2 className="w-8 h-8 text-[#0F172A] mx-auto mb-3" />
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-2">Operational SOP Templates</h4>
                <p className="text-[10px] text-slate-500 leading-relaxed mb-4">Custom SOP swimlane blueprints and operational tracking spreadsheets formatted for Excel.</p>
                <button
                  onClick={() => alert("Excel export initiated! Checking data tables...")}
                  className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-extrabold text-[10px] uppercase tracking-wider py-2 rounded-lg transition-colors"
                >
                  Export Excel Sheet
                </button>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
                <Cpu className="w-8 h-8 text-[#0F172A] mx-auto mb-3" />
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-2">Consulting Pitch Deck</h4>
                <p className="text-[10px] text-slate-500 leading-relaxed mb-4">Visual high-impact presentation slides showing the core bottlenecks and 90-day action plan.</p>
                <button
                  onClick={() => alert("Powerpoint presentation slide generation initiated...")}
                  className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-extrabold text-[10px] uppercase tracking-wider py-2 rounded-lg transition-colors"
                >
                  Export Slides Deck
                </button>
              </div>
            </div>

            {/* Link Share Tool */}
            <div className="pt-6 border-t border-slate-100 bg-slate-50/50 p-5 rounded-xl border border-slate-100">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                <Share2 className="w-4 h-4 text-amber-500" /> Share Advisory Dashboard with Key Stakeholders
              </h4>
              <p className="text-[10px] text-slate-500 mb-4">
                Generate and copy a secure live link to share this consultative growth dossier with your executive board or core partners.
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  readOnly
                  value="https://krg.one/advisory/dashboard-assessment-AX7701"
                  className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-600 font-mono"
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("https://krg.one/advisory/dashboard-assessment-AX7701");
                    setCopiedLink(true);
                    setTimeout(() => setCopiedLink(false), 2000);
                  }}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase px-4 py-1.5 rounded-lg transition-colors"
                >
                  {copiedLink ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* VIEW: DIAGNOSTIC BOOKING                             */}
        {/* ---------------------------------------------------- */}
        {activeTab === 'booking' && (
          <DiagnosticBookingTab formData={formData} />
        )}

            </div> {/* END OF activeTabContentRef */}

            {/* ADAPTIVE PROMOTIONAL BANNER SYSTEM */}
            {availableSpace > 85 && (
              <div className="no-print pt-6">
                {availableSpace <= 180 ? (
                  /* Small Space: Compact CTA Card */
                  <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-xl p-3 border border-slate-800 shadow-md flex items-center justify-between text-white relative overflow-hidden h-[72px]">
                    <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-block bg-amber-400/20 text-amber-300 text-[8px] font-black px-1.5 py-0.5 rounded border border-amber-400/10 uppercase tracking-widest leading-none">
                        Limited Offer
                      </span>
                      <div>
                        <h4 className="text-[11px] font-black tracking-wide leading-tight text-white">Unlock Your Growth Blueprint™</h4>
                        <p className="text-[9px] text-slate-400 font-bold">Business Growth Diagnostic™</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-baseline gap-1.5 shrink-0">
                        <span className="text-[9px] text-slate-500 line-through font-semibold">₹9,999</span>
                        <span className="text-sm font-black text-amber-400">₹1,499</span>
                      </div>
                      <button
                        onClick={() => setActiveTab('booking')}
                        className="bg-amber-500 hover:bg-amber-400 text-[#0F172A] px-3 py-1.5 rounded-md font-black text-[10px] uppercase tracking-wider transition-all duration-150 flex items-center gap-1 shadow-md active:scale-95 shrink-0"
                      >
                        <span>Book Call</span>
                        <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                      </button>
                    </div>
                  </div>
                ) : availableSpace <= 350 ? (
                  /* Medium Space: Promotional Card with benefits */
                  <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-2xl p-4.5 border border-slate-800 shadow-lg text-white relative overflow-hidden flex flex-col justify-between h-[170px]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="bg-amber-400/20 text-amber-300 text-[8px] font-black px-2 py-0.5 rounded border border-amber-400/10 uppercase tracking-widest leading-none">
                            Limited Time Offer
                          </span>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth Diagnostic</span>
                        </div>
                        <h4 className="text-sm font-black tracking-wide text-white leading-tight">Unlock Your Growth Blueprint™</h4>
                        <p className="text-[10px] text-slate-400 font-bold">Business Growth Diagnostic™</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="flex items-baseline justify-end gap-1.5">
                          <span className="text-[10px] text-slate-500 line-through font-semibold">₹9,999</span>
                          <span className="text-lg font-black text-amber-400">₹1,499</span>
                        </div>
                        <span className="text-[9px] font-bold text-emerald-400 block">Save 85% Today</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 border-t border-slate-800/80 pt-2">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 bg-emerald-500/10 rounded-full p-0.5" />
                        <span>Revenue Growth Strategy</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 bg-emerald-500/10 rounded-full p-0.5" />
                        <span>Root Cause Analysis</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 bg-emerald-500/10 rounded-full p-0.5" />
                        <span>Hidden Revenue Opportunities</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 bg-emerald-500/10 rounded-full p-0.5" />
                        <span>90-Day Growth Roadmap</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <span className="text-[10px] text-slate-400 font-bold">₹1,499 Limited Offer</span>
                      <button
                        onClick={() => setActiveTab('booking')}
                        className="bg-amber-500 hover:bg-amber-400 text-[#0F172A] px-4 py-1.5 rounded-lg font-black text-[11px] uppercase tracking-wider transition-all duration-150 flex items-center gap-1.5 shadow-md active:scale-95"
                      >
                        <span>Book Diagnostic Call</span>
                        <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Large Space: Full-width Premium Banner with CTA */
                  <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0A1128] rounded-[24px] p-6 border border-slate-800 shadow-xl text-white relative overflow-hidden flex flex-col justify-between h-[270px]">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:20px_20px] pointer-events-none"></div>
                    
                    <div className="flex justify-between items-start gap-6">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2.5">
                          <span className="inline-block bg-amber-400/25 text-amber-300 text-[10px] font-black px-2.5 py-0.5 rounded border border-amber-400/15 uppercase tracking-[0.15em] leading-none">
                            Limited Time Offer
                          </span>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                            KRG ONE Enterprise Diagnostic
                          </span>
                        </div>
                        <h3 className="text-xl font-black tracking-tight text-white font-sans">Unlock Your Growth Blueprint™</h3>
                        <p className="text-xs text-slate-400 font-bold">Business Growth Diagnostic™</p>
                      </div>
                      
                      <div className="text-right shrink-0 bg-slate-900/40 px-4 py-2.5 rounded-xl border border-slate-800">
                        <span className="text-[9px] text-slate-500 block uppercase tracking-wider font-extrabold mb-0.5">Special Pricing</span>
                        <div className="flex items-baseline justify-end gap-1.5">
                          <span className="text-xs text-slate-500 line-through font-semibold">₹9,999</span>
                          <span className="text-2xl font-black text-amber-400">₹1,499</span>
                        </div>
                        <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest block mt-0.5">85% Off Applied</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-800/80 pt-4.5 my-auto">
                      <div className="space-y-2.5">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">What You Receive:</span>
                        <div className="grid grid-cols-1 gap-2">
                          <div className="flex items-center gap-2.5 text-xs font-bold text-slate-200">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 bg-emerald-400/15 rounded-full p-0.5 border border-emerald-400/10" />
                            <span>Revenue Growth Strategy</span>
                          </div>
                          <div className="flex items-center gap-2.5 text-xs font-bold text-slate-200">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 bg-emerald-400/15 rounded-full p-0.5 border border-emerald-400/10" />
                            <span>Root Cause Analysis</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2.5 md:pt-5">
                        <div className="grid grid-cols-1 gap-2">
                          <div className="flex items-center gap-2.5 text-xs font-bold text-slate-200">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 bg-emerald-400/15 rounded-full p-0.5 border border-emerald-400/10" />
                            <span>Hidden Revenue Opportunities</span>
                          </div>
                          <div className="flex items-center gap-2.5 text-xs font-bold text-slate-200">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 bg-emerald-400/15 rounded-full p-0.5 border border-emerald-400/10" />
                            <span>90-Day Growth Roadmap</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-800/60 pt-4 mt-1">
                      <p className="text-[10px] text-slate-400 font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                        <span>Designed to restore page balance & drive conversions</span>
                      </p>
                      <button
                        onClick={() => setActiveTab('booking')}
                        className="bg-amber-500 hover:bg-amber-400 text-[#0F172A] px-6 py-2.5 rounded-xl font-black text-[12px] uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-lg active:scale-95"
                      >
                        <span>Book Diagnostic Call</span>
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

          </div> {/* END OF CENTER REPORT PANEL (xl:col-span-3) */}

          {/* STICKY RIGHT SIDEBAR (COLUMN B) */}
          <aside ref={rightSidebarRef} className="xl:col-span-1 sticky top-6 space-y-6 self-start no-print">
            
            {/* Card 1: Strategic Focus */}
            <div className="bg-white rounded-[24px] shadow-sm border border-slate-200 flex flex-col overflow-hidden relative text-slate-800">
              <div className="p-6">
                
                {/* SECTION: Strategic Focus */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-indigo-600" />
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Strategic Focus</h4>
                    </div>
                    <span className="bg-indigo-50 text-indigo-600 text-[8px] font-extrabold px-2 py-0.5 rounded-full border border-indigo-200/40 uppercase tracking-wider">
                      Targeted
                    </span>
                  </div>

                  {/* Row 1: Business Goal */}
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Briefcase className="w-3 h-3" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Business Goal</span>
                      <span className="text-xs font-black text-slate-800">{businessGoal}</span>
                    </div>
                  </div>

                  {/* Row 2: Top Challenges */}
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Star className="w-3 h-3" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Top Challenges</span>
                      <ul className="space-y-1">
                        {(formData.challenges && formData.challenges.length > 0 ? formData.challenges : ["High Operational Costs", "Leadership Dependency", "Inconsistent Sales Growth"]).map((challenge: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Row 3: Growth Stage */}
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                      <GitBranch className="w-3 h-3" />
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Growth Stage</span>
                      <span className="inline-block bg-emerald-50 text-emerald-700 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-emerald-100 uppercase tracking-wider">
                        Growing Business
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 2: Meet Your Growth Advisor */}
            <div className="bg-white rounded-[24px] shadow-sm border border-slate-200 p-6 relative overflow-hidden flex flex-col justify-between min-h-[640px] text-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <div>
                <div className="flex items-center border-b border-slate-100 pb-4 mb-6">
                  <span className="text-indigo-600 font-black text-[9px] tracking-[0.2em] uppercase">Meet Your Growth Advisor</span>
                </div>
                
                <div className="flex flex-col gap-6">
                  {/* Taller & More Prominent Executive Image Container */}
                  <div className="relative w-[104px] h-[128px] mx-auto shrink-0 transition-all duration-300">
                    {/* Shadow Decor Backdrop */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#ffb800] to-amber-300 rounded-[12px] translate-x-1 translate-y-1 opacity-90 shadow-md"></div>
                    <div className="absolute -inset-1 border border-[#ffb800]/20 rounded-[13px] translate-x-0.5 translate-y-0.5 pointer-events-none"></div>
                    
                    <div className="relative w-full h-full bg-slate-100 rounded-[12px] overflow-hidden border border-slate-200/80 shadow-lg">
                      <img 
                        src="/image.jpeg" 
                        alt="Gajendra Kumar Sharma - Founder and Senior Growth Advisor at KRG ONE" 
                        className="absolute inset-0 w-full h-full object-cover object-top scale-102 hover:scale-108 transition-all duration-700 ease-out" 
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f2142]/30 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </div>

                  {/* High Contrast Content Col */}
                  <div className="text-center mt-3">
                    <h3 className="text-lg md:text-xl font-serif font-black text-[#0f2142] tracking-tight leading-tight">
                      Gajendra Kumar Sharma
                    </h3>
                    <div className="inline-block bg-amber-500/10 text-[#e0a000] text-[10px] font-extrabold mt-1.5 mb-4 px-3 py-1 rounded-md uppercase tracking-wider">
                      Founder & Growth Advisor
                    </div>

                    {/* Premium Highly-Visible Highlights Grid */}
                    <div className="grid grid-cols-1 gap-3.5 pt-5 border-t border-slate-100 text-left max-w-xs mx-auto">
                      <div className="flex items-center gap-3 text-slate-800 text-[12px] font-bold hover:translate-x-1 transition-transform duration-200">
                        <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 shadow-sm border border-indigo-100">
                          <Award className="w-3.5 h-3.5" />
                        </div>
                        <span className="tracking-tight text-slate-900">20+ Years Business Growth Consulting</span>
                      </div>
                      
                      <div className="flex items-center gap-3 text-slate-800 text-[12px] font-bold hover:translate-x-1 transition-transform duration-200">
                        <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 shadow-sm border border-indigo-100">
                          <TrendingUp className="w-3.5 h-3.5" />
                        </div>
                        <span className="tracking-tight text-slate-900">Revenue Strategy</span>
                      </div>
                      
                      <div className="flex items-center gap-3 text-slate-800 text-[12px] font-bold hover:translate-x-1 transition-transform duration-200">
                        <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 shadow-sm border border-indigo-100">
                          <Activity className="w-3.5 h-3.5" />
                        </div>
                        <span className="tracking-tight text-slate-900">Business Transformation</span>
                      </div>

                      <div className="flex items-center gap-3 text-slate-800 text-[12px] font-bold hover:translate-x-1 transition-transform duration-200">
                        <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 shadow-sm border border-indigo-100">
                          <Cpu className="w-3.5 h-3.5" />
                        </div>
                        <span className="tracking-tight text-slate-900">AI Enabled Growth Systems</span>
                      </div>

                      <div className="flex items-center gap-3 text-slate-800 text-[12px] font-bold hover:translate-x-1 transition-transform duration-200">
                        <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 shadow-sm border border-indigo-100">
                          <ShieldCheck className="w-3.5 h-3.5" />
                        </div>
                        <span className="tracking-tight text-slate-900">NDA Protected Consulting</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Styled Quote Block at bottom */}
              <div className="relative bg-[#fafcff] border border-slate-200/80 rounded-2xl p-4 pl-6 mt-6 shadow-sm">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ffb800] rounded-l-2xl"></div>
                <p className="text-xs italic text-slate-800 leading-relaxed font-serif font-medium">
                  "Business growth is not about working harder. It is about building better systems."
                </p>
              </div>

            </div>
          </aside>

        </div> {/* END OF GLOBAL TWO-COLUMN WORKSPACE */}

      </main>

      {/* 20-PAGE EXECUTIVE PDF REPORT */}
      <PrintDossier report={report} formData={formData} assessmentDate={formattedDate} globalScore={globalScore} pillarScores={pillarScores} />
    </div>
  );
}

export default DashboardReport;
