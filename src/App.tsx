import { FileSearch, Search, Rocket, Gauge, Network, ClipboardList, Megaphone, User, Landmark, ShieldCheck, UserCheck, CheckCircle, TrendingUp as TrendingUpIcon, Lightbulb, Clock, CheckCircle2, TrendingDown as TrendingDownIcon, RefreshCcw, IndianRupee, UserCog, Star, Cpu, ArrowUpRight, Gift, Building2, Lock, UserCircle, Handshake, Factory, Truck, GraduationCap, Coins, Mail, Phone } from "lucide-react";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Menu, X, ChevronDown, ChevronRight,
  TrendingUp, TrendingDown, BarChart, BarChart2, Bot, Activity, Briefcase, 
  Layers, Target, LineChart, HeartPulse, FileText, Check, LayoutGrid, MapPin,
  BookOpen, HelpCircle, ArrowRight, Brain, Settings, Users, Calendar
, ArrowLeft} from "lucide-react";
import React, { useState, useEffect, useRef } from 'react';
import { SharedFooter } from './components/SharedFooter';
import AssessmentEngine from "./AssessmentEngine";
import { ContactUsPage } from "./components/ContactUsPage";
import { AboutUsPage } from "./components/AboutUsPage";
import { MeetTheFounderPage } from "./components/MeetTheFounderPage";
import { OurMethodologyPage } from "./components/OurMethodologyPage";
import { GrowthOSOverviewPage } from "./components/GrowthOSOverviewPage";
import { SevenGrowthPillarsPage } from "./components/SevenGrowthPillarsPage";
import { BusinessHealthDashboardPage } from "./components/BusinessHealthDashboardPage";
import { ExecutiveBusinessInsightsPage } from "./components/ExecutiveBusinessInsightsPage";
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage";
import { TermsAndConditionsPage } from "./components/TermsAndConditionsPage";
import { DisclaimerPage } from "./components/DisclaimerPage";
import { RefundPolicyPage } from "./components/RefundPolicyPage";
import { CookiePolicyPage } from "./components/CookiePolicyPage";
import { BusinessGrowthConsultationPage } from "./components/BusinessGrowthConsultationPage";
import { FullBusinessDiagnosticPage } from "./components/FullBusinessDiagnosticPage";
import { BusinessGrowthSprintPage } from "./components/BusinessGrowthSprintPage";
import { FractionalSalesHeadPage } from "./components/FractionalSalesHeadPage";
import { GatewayPage } from "./components/GatewayPage";
import { TechnologiesPage } from "./components/TechnologiesPage";
import { ScrollToTopButton } from "./components/ScrollToTopButton";

const navigationConfig = [
  { title: "Home", href: "#", action: "LANDING", dropdown: null },
  { 
    title: "Solutions", 
    action: null,
    dropdown: [
      "Business Growth Consultation™",
      "Full Business Growth Diagnostic™",
      "90-Day Business Growth Sprint™",
      "Fractional Sales Head™"
    ]
  },
  {
    title: "Growth OS™",
    action: null,
    dropdown: [
      "Overview",
      "The 7 Growth Pillars",
      "Business Health Dashboard™",
      "Executive Business Insights™"
    ]
  },
  {
    title: "Industries",
    action: null,
    dropdown: [
      "Manufacturing",
      "Distribution",
      "Consumer Products",
      "Education",
      "Healthcare",
      "Technology",
      "Real Estate",
      "FinTech",
      "Professional Services",
      "Startups & MSMEs"
    ]
  },
  {
    title: "Resources",
    action: null,
    dropdown: [
      "Articles",
      "Business Guides",
      "FAQs",
      "Growth Insights",
      "Case Studies"
    ]
  },
  {
    title: "About Us",
    action: "ABOUT_US",
    dropdown: [
      "About KRG ONE",
      "Meet the Founder",
      "Our Methodology"
    ]
  },
  { title: "Contact Us", href: "#", action: "CONTACT_US", dropdown: null }
];

export function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeAppView, setActiveAppView] = useState<'GATEWAY' | 'TECHNOLOGIES_LANDING' | 'LANDING' | 'ASSESSMENT_PORTAL' | 'CONTACT_US' | 'ABOUT_US' | 'MEET_FOUNDER' | 'OUR_METHODOLOGY' | 'GROWTH_OS_OVERVIEW' | 'SEVEN_PILLARS' | 'BUSINESS_HEALTH_DASHBOARD' | 'EXECUTIVE_INSIGHTS' | 'BUSINESS_GROWTH_CONSULTATION' | 'FULL_BUSINESS_DIAGNOSTIC' | 'BUSINESS_GROWTH_SPRINT' | 'FRACTIONAL_SALES_HEAD' | 'PRIVACY_POLICY' | 'TERMS_AND_CONDITIONS' | 'DISCLAIMER' | 'REFUND_POLICY' | 'COOKIE_POLICY'>('GATEWAY');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (activeAppView === 'GATEWAY') {
    return (
      <>
        <GatewayPage onNavigateToConsulting={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }} onNavigateToTechnologies={() => { setActiveAppView('TECHNOLOGIES_LANDING'); window.scrollTo(0, 0); }} />
        <ScrollToTopButton />
      </>
    );
  }

  if (activeAppView === 'TECHNOLOGIES_LANDING') {
    return (
      <>
        <TechnologiesPage 
          onBackToGateway={() => { setActiveAppView('GATEWAY'); window.scrollTo(0, 0); }} 
          onNavigateToConsulting={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }}
        />
        <ScrollToTopButton />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden">
      {/* ENTERPRISE TOP BAR */}
      <div className="bg-[#070D1B] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-[#c29d2f]/20 z-50 relative">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-0.5 rounded font-bold uppercase tracking-wider text-[10px]">
              Parent Brand
            </span>
            <span className="font-medium text-slate-200">
              KRGONE Business Transformation Group
            </span>
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="tel:+917300300330" className="flex items-center gap-1.5 text-slate-300 hover:text-[#D4AF37] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>+91 7300300330</span>
            </a>
            <a href="mailto:enquiry.krgone@gmail.com" className="flex items-center gap-1.5 text-slate-300 hover:text-[#D4AF37] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>enquiry.krgone@gmail.com</span>
            </a>
            <button 
              onClick={() => { setActiveAppView('GATEWAY'); window.scrollTo(0, 0); }}
              className="flex items-center gap-1 text-[#D4AF37] hover:underline font-semibold cursor-pointer pl-2 border-l border-slate-700"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Group Hub</span>
            </button>
          </div>
        </div>
      </div>

      {/* Premium Navbar */}
      <nav 
        ref={navRef}
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0A1128]/95 backdrop-blur-xl border-b border-[#c29d2f]/30 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]' 
            : 'bg-[#0A1128]/95 backdrop-blur-lg border-b border-[#c29d2f]/10'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px] lg:h-[80px]">
            {/* Brand / Logo */}
            <div 
              className="flex items-center shrink-0 cursor-pointer group py-2" 
              onClick={(e) => { 
                e.preventDefault(); 
                setActiveAppView('LANDING'); 
                window.scrollTo(0, 0); 
              }}
            >
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white font-sans flex items-center">
                  KRG<span className="text-[#D4AF37]">ONE</span>
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-widest text-[#D4AF37] uppercase bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-2.5 py-1 rounded-md shrink-0">
                  Consulting
                </span>
              </div>
            </div>

            {/* Right Side: Desktop Navigation & CTA */}
            <div className="flex items-center gap-2 xl:gap-4 2xl:gap-6 flex-nowrap">
              {activeAppView !== 'ASSESSMENT_PORTAL' ? (
                <>
                  {/* Desktop Navigation */}
                  <div className="hidden xl:flex items-center gap-1.5 xl:gap-3 2xl:gap-5 flex-nowrap">
                  {navigationConfig.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="relative group h-[72px] lg:h-[80px] flex items-center shrink-0"
                      onMouseEnter={() => item.dropdown && setActiveDropdown(item.title)}
                      onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                    >
                      <a 
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          if (item.action === "ASSESSMENT_PORTAL") {
                            setActiveAppView('ASSESSMENT_PORTAL');
                            window.scrollTo(0, 0);
                          } else if (item.action === "CONTACT_US") {
                            setActiveAppView('CONTACT_US');
                            window.scrollTo(0, 0);
                          } else if (item.action === "ABOUT_US") {
                            setActiveAppView('ABOUT_US');
                            window.scrollTo(0, 0);
                          } else if (item.action === "LANDING") {
                            setActiveAppView('LANDING');
                            window.scrollTo(0, 0);
                          }
                        }}
                        className={`flex items-center gap-1 text-[13px] 2xl:text-[14px] font-medium tracking-wide transition-colors duration-250 px-2 py-2 relative cursor-pointer whitespace-nowrap ${
                          activeDropdown === item.title || (item.action === "CONTACT_US" && activeAppView === "CONTACT_US") || (item.action === "ABOUT_US" && activeAppView === "ABOUT_US") ? 'text-[#c29d2f]' : 'text-slate-200 hover:text-[#c29d2f]'
                        }`}
                      >
                        <span className="whitespace-nowrap">{item.title}</span>
                        {item.dropdown && (
                          <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-250 ${activeDropdown === item.title ? 'rotate-180 text-[#c29d2f]' : 'text-slate-400 group-hover:text-[#c29d2f]'}`} />
                        )}
                        {/* Gold Underline Animation */}
                        <span className={`absolute bottom-0 left-0 h-[2px] bg-[#c29d2f] transition-all duration-300 ${activeDropdown === item.title ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                      </a>

                      {/* Dropdown Menu */}
                      {item.dropdown && (
                        <div 
                          className={`absolute top-[68px] left-1/2 -translate-x-1/2 w-[280px] bg-[#0A1128] rounded-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-[#c29d2f]/20 p-2 transition-all duration-250 origin-top ${
                            activeDropdown === item.title ? 'opacity-100 translate-y-0 visible scale-100' : 'opacity-0 -translate-y-2 invisible scale-95'
                          }`}
                        >
                          <div className="absolute -top-4 left-0 w-full h-4"></div> {/* Hover bridge */}
                          <div className="px-4 py-3 mb-2 border-b border-[#c29d2f]/10">
                            <span className="text-[#c29d2f] text-[11px] font-bold uppercase tracking-[0.15em] whitespace-nowrap">{item.title}</span>
                          </div>
                          <div className="flex flex-col">
                            {item.dropdown.map((dropItem, dIdx) => (
                              <a 
                                key={dIdx} 
                                href="#" 
                                onClick={(e) => {
                                  e.preventDefault();
                                  setActiveDropdown(null);
                                  if (dropItem.includes("Founder")) {
                                    setActiveAppView('MEET_FOUNDER');
                                    window.scrollTo(0, 0);
                                  } else if (dropItem.includes("Methodology")) {
                                    setActiveAppView('OUR_METHODOLOGY');
                                    window.scrollTo(0, 0);
                                  } else if (dropItem.includes("Pillars")) {
                                    setActiveAppView('SEVEN_PILLARS');
                                    window.scrollTo(0, 0);
                                  } else if (dropItem === "Business Growth Consultation™") {
                                    setActiveAppView('BUSINESS_GROWTH_CONSULTATION');
                                    window.scrollTo(0, 0);
                                  } else if (dropItem === "Full Business Growth Diagnostic™") {
                                    setActiveAppView('FULL_BUSINESS_DIAGNOSTIC');
                                    window.scrollTo(0, 0);
                                  } else if (dropItem === "90-Day Business Growth Sprint™") {
                                    setActiveAppView('BUSINESS_GROWTH_SPRINT');
                                    window.scrollTo(0, 0);
                                  } else if (dropItem === "Fractional Sales Head™") {
                                    setActiveAppView('FRACTIONAL_SALES_HEAD');
                                    window.scrollTo(0, 0);
                                  } else if (dropItem.includes("Health Dashboard")) {
                                    setActiveAppView('BUSINESS_HEALTH_DASHBOARD');
                                    window.scrollTo(0, 0);
                                  } else if (dropItem.includes("Executive Business Insights")) {
                                    setActiveAppView('EXECUTIVE_INSIGHTS');
                                    window.scrollTo(0, 0);
                                  } else if (dropItem === "Overview" || (item.title.includes("Growth OS") && dropItem.includes("Overview"))) {
                                    setActiveAppView('GROWTH_OS_OVERVIEW');
                                    window.scrollTo(0, 0);
                                  } else if (item.title === "About Us" || dropItem.includes("About")) {
                                    setActiveAppView('ABOUT_US');
                                    window.scrollTo(0, 0);
                                  }
                                }}
                                className="px-5 py-3.5 text-[14px] text-white hover:text-[#c29d2f] hover:bg-white/5 rounded-xl transition-colors duration-200 flex items-center gap-2 group/drop cursor-pointer"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#c29d2f]/0 group-hover/drop:bg-[#c29d2f] transition-colors shrink-0"></span>
                                <span className="whitespace-nowrap">{dropItem}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  </div>

                  {/* Right CTA */}
                  <div className="hidden xl:flex items-center shrink-0 self-center bg-gradient-to-b from-[#e5c158] to-[#8a6a12] p-[2px] rounded-full shadow-[0_8px_20px_-4px_rgba(194,157,47,0.5)] hover:shadow-[0_15px_30px_-4px_rgba(194,157,47,0.7)] transition-all duration-300 hover:-translate-y-0.5 animate-pulse-glow">
                    <button 
                      onClick={(e) => { e.preventDefault(); setActiveAppView('ASSESSMENT_PORTAL'); window.scrollTo(0, 0); }}
                      className="flex items-center justify-center whitespace-nowrap shrink-0 bg-gradient-to-b from-[#f3d97f] via-[#c29d2f] to-[#9c7816] text-[#030816] px-4 xl:px-5 2xl:px-6 py-2.5 rounded-full font-bold text-[11px] 2xl:text-[11.5px] tracking-[0.08em] xl:tracking-[0.1em] uppercase transition-all duration-300 shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-2px_6px_rgba(0,0,0,0.4)] hover:brightness-110 active:shadow-[inset_0_3px_8px_rgba(0,0,0,0.6)] cursor-pointer"
                    >
                      <span className="whitespace-nowrap">Free Business Growth Assessment</span>
                    </button>
                  </div>

                  {/* Mobile menu button */}
                  <div className="flex items-center xl:hidden">
                    <button 
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className="text-slate-200 hover:text-[#c29d2f] focus:outline-none transition-colors p-2"
                    >
                      {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-3">
                  <button 
                    type="button"
                    onClick={(e) => { 
                      e.preventDefault(); 
                      setActiveAppView('LANDING'); 
                      window.scrollTo(0, 0); 
                    }} 
                    className="flex items-center gap-2 bg-[#c29d2f]/10 hover:bg-[#c29d2f]/20 text-white px-5 py-2.5 rounded-full text-[12px] font-bold tracking-wide border border-[#c29d2f]/40 hover:border-[#c29d2f] transition-all cursor-pointer group shadow-sm"
                  >
                    <ArrowLeft className="w-4 h-4 text-[#c29d2f] group-hover:-translate-x-1 transition-transform" />
                    <span>RETURN TO HOME PAGE</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div 
          className={`xl:hidden absolute top-full left-0 w-full bg-[#0A1128] border-b border-[#c29d2f]/20 shadow-2xl transition-all duration-300 ease-in-out origin-top overflow-hidden ${
            isMobileMenuOpen ? 'max-h-[85vh] opacity-100 visible overflow-y-auto' : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-6 flex flex-col gap-2">
            {navigationConfig.map((item, idx) => (
              <div key={idx} className="flex flex-col border-b border-white/5 last:border-0 pb-2 mb-2 last:pb-0 last:mb-0">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.action === "ASSESSMENT_PORTAL") {
                      setActiveAppView('ASSESSMENT_PORTAL');
                      window.scrollTo(0, 0);
                      setIsMobileMenuOpen(false);
                    } else if (item.action === "CONTACT_US") {
                      setActiveAppView('CONTACT_US');
                      window.scrollTo(0, 0);
                      setIsMobileMenuOpen(false);
                    } else if (item.action === "LANDING") {
                      setActiveAppView('LANDING');
                      window.scrollTo(0, 0);
                      setIsMobileMenuOpen(false);
                    } else if (item.dropdown) {
                      setActiveDropdown(activeDropdown === item.title ? null : item.title);
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className="flex items-center justify-between w-full px-2 py-3 text-[15px] font-medium text-slate-200 hover:text-[#c29d2f] transition-colors cursor-pointer"
                >
                  {item.title}
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180 text-[#c29d2f]' : 'text-slate-500'}`} />
                  )}
                </button>
                
                {/* Mobile Dropdown Sub-menu */}
                {item.dropdown && (
                  <div 
                    className={`overflow-hidden transition-all duration-300 flex flex-col gap-2 pl-4 ${
                      activeDropdown === item.title ? 'max-h-[500px] py-2 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {item.dropdown.map((dropItem, dIdx) => (
                      <a 
                        key={dIdx} 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          if (dropItem.includes("Founder")) {
                            setActiveAppView('MEET_FOUNDER');
                            window.scrollTo(0, 0);
                          } else if (dropItem.includes("Methodology")) {
                            setActiveAppView('OUR_METHODOLOGY');
                            window.scrollTo(0, 0);
                          } else if (dropItem.includes("Pillars")) {
                            setActiveAppView('SEVEN_PILLARS');
                            window.scrollTo(0, 0);
                          } else if (dropItem === "Business Growth Consultation™") {
                            setActiveAppView('BUSINESS_GROWTH_CONSULTATION');
                            window.scrollTo(0, 0);
                          } else if (dropItem === "Full Business Growth Diagnostic™") {
                            setActiveAppView('FULL_BUSINESS_DIAGNOSTIC');
                            window.scrollTo(0, 0);
                          } else if (dropItem === "90-Day Business Growth Sprint™") {
                            setActiveAppView('BUSINESS_GROWTH_SPRINT');
                            window.scrollTo(0, 0);
                          } else if (dropItem === "Fractional Sales Head™") {
                            setActiveAppView('FRACTIONAL_SALES_HEAD');
                            window.scrollTo(0, 0);
                          } else if (dropItem.includes("Health Dashboard")) {
                            setActiveAppView('BUSINESS_HEALTH_DASHBOARD');
                            window.scrollTo(0, 0);
                          } else if (dropItem.includes("Executive Business Insights")) {
                            setActiveAppView('EXECUTIVE_INSIGHTS');
                            window.scrollTo(0, 0);
                          } else if (dropItem === "Overview" || (item.title.includes("Growth OS") && dropItem.includes("Overview"))) {
                            setActiveAppView('GROWTH_OS_OVERVIEW');
                            window.scrollTo(0, 0);
                          } else if (item.title === "About Us" || dropItem.includes("About")) {
                            setActiveAppView('ABOUT_US');
                            window.scrollTo(0, 0);
                          }
                        }}
                        className="px-2 py-2 text-[14px] text-slate-400 hover:text-[#c29d2f] transition-colors cursor-pointer"
                      >
                        {dropItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
      

      {activeAppView === 'LANDING' ? (
        <>
      {/* Hero Section */}
      <main className="w-full relative bg-white overflow-hidden">
        {/* Faint Grid Texture */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:items-stretch max-w-7xl mx-auto py-24 lg:py-32 px-6 relative z-10">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-start justify-between lg:py-2">
            <div>
              {/* Top Pill Tag */}
              <div className="inline-flex items-center gap-2.5 border border-[#D4AF37]/40 rounded-full px-4 py-2 mb-6 lg:mb-8 bg-gradient-to-r from-[#070D1B] via-[#0B1F3A] to-[#070D1B] text-white shadow-md shadow-[#0B1F3A]/15 hover:border-[#D4AF37] transition-all group">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                <span className="text-[11px] font-bold text-white tracking-wider uppercase flex items-center gap-1.5">
                  <span>Business Growth Consulting</span>
                  <span className="text-slate-400">•</span>
                  <span>AI Solutions</span>
                  <span className="text-slate-400">•</span>
                  <span>Growth OS™</span>
                </span>
              </div>
              
              {/* Primary Title */}
              <h1 className="text-4xl lg:text-[3rem] font-extrabold text-[#0f172a] tracking-tight leading-[1.2] lg:leading-[1.15] mb-6">
                <span className="block mb-2 sm:mb-3">Measure Before You Scale.</span>
                <span className="block">Turn Knowledge into <span className="text-[#c29d2f]">Revenue Growth.</span></span>
              </h1>
              
              {/* Paragraph */}
              <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-8 lg:mb-10 max-w-[95%]">
                We diagnose your business to uncover hidden growth opportunities, improve revenue, strengthen profitability, and build scalable business systems. Get clear insights, measurable actions, and the confidence to make better business decisions.
              </p>
              
              {/* Call to Action Array */}
              <div className="flex flex-wrap items-center gap-4 mb-10 lg:mb-14 w-full">
                <button 
                  aria-label="Start Free Business Growth Assessment"
                  onClick={(e) => { e.preventDefault(); setActiveAppView('ASSESSMENT_PORTAL'); window.scrollTo(0, 0); }} 
                  className="bg-gradient-to-r from-[#d4af37] to-[#e5c158] hover:from-[#c29d2f] hover:to-[#d4af37] text-white font-semibold py-3.5 px-6 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 text-sm lg:text-base animate-pulse-glow"
                >
                  Free Business Growth Assessment <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  aria-label="Learn more about Growth OS"
                  onClick={(e) => { e.preventDefault(); document.getElementById('growth-os')?.scrollIntoView({ behavior: 'smooth' }); }} 
                  className="border border-gray-300 hover:border-[#c29d2f] hover:bg-gray-50 text-gray-800 font-semibold py-3.5 px-6 rounded-lg transition-all hover:shadow-sm hover:-translate-y-0.5 active:scale-95 bg-white shadow-sm text-sm lg:text-base"
                >
                  Learn About Growth OS™
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-7 w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="w-full max-w-[800px] bg-[#0f172a] rounded-2xl p-4 sm:p-5 border border-slate-700/90 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] flex flex-col text-slate-200 relative w-full">
              
              {/* Header */}
              <div className="flex flex-wrap justify-between items-center mb-3.5 pb-2.5 border-b border-slate-800/80 gap-2 shrink-0">
                <div>
                  <h3 className="text-white font-black text-sm sm:text-base tracking-wide flex items-center gap-1.5">
                    KRG ONE<span className="text-[9px] font-bold text-[#d4af37]">™</span>
                  </h3>
                  <p className="text-[11px] text-slate-300 font-medium">Business Growth Operating System™</p>
                </div>
                <div className="flex items-center gap-2.5 text-[11px] flex-wrap">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-slate-100 font-semibold shadow-inner">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-mono text-[10px] font-bold tracking-wider">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]"></span>
                    </span>
                    <span>LIVE</span>
                  </div>
                  <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-md px-2.5 py-1 flex items-center gap-1.5 transition-colors font-medium">
                    Last 30 Days <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Dashboard Body */}
              <div className="flex flex-col gap-3">
                
                {/* Row A: Top Data Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Card 1: Growth Score */}
                  <div className="bg-slate-800/70 rounded-xl border border-slate-700/80 p-3 flex flex-col justify-between shadow-sm min-h-[125px]">
                    <h4 className="text-[11px] font-bold text-slate-100 mb-1">Business Growth Score</h4>
                    <div className="flex-1 flex items-center justify-center relative py-1">
                      <svg viewBox="0 0 100 55" className="w-[100px] h-[55px]">
                        <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
                        <path d="M 10 50 A 40 40 0 0 1 72 16" fill="none" stroke="#d4af37" strokeWidth="8" strokeLinecap="round" />
                      </svg>
                      <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <span className="text-xl font-black text-white leading-none tracking-tight">72</span>
                        <span className="text-[9px] text-slate-300 font-semibold block leading-none mt-0.5">/100</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-center pt-1 border-t border-slate-700/50 mt-1">
                      <span className="text-[10px] text-emerald-400 font-bold">Good</span>
                      <p className="text-[9px] text-slate-300 font-medium">
                        Top 28% of peers
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Maturity Level */}
                  <div className="bg-slate-800/70 rounded-xl border border-slate-700/80 p-3 flex flex-col justify-between shadow-sm min-h-[125px]">
                    <h4 className="text-[11px] font-bold text-slate-100 mb-0.5">Growth Maturity Level</h4>
                    <div>
                       <div className="text-[#ffd700] text-lg font-black leading-tight">Level 3</div>
                       <div className="text-[10px] text-slate-200 font-semibold">Growing Stage</div>
                    </div>
                    <div className="flex items-end gap-1.5 h-6 my-1.5">
                      <div className="w-full bg-[#d4af37] rounded-sm h-[30%]"></div>
                      <div className="w-full bg-[#d4af37] rounded-sm h-[50%]"></div>
                      <div className="w-full bg-[#d4af37] rounded-sm h-[75%]"></div>
                      <div className="w-full bg-slate-700 rounded-sm h-[90%]"></div>
                      <div className="w-full bg-slate-700 rounded-sm h-[100%]"></div>
                    </div>
                    <p className="text-[9px] text-slate-300 leading-tight font-medium border-t border-slate-700/50 pt-1">
                      Strong growth foundation
                    </p>
                  </div>

                  {/* Card 3: Revenue Trend */}
                  <div className="bg-slate-800/70 rounded-xl border border-slate-700/80 p-3 flex flex-col justify-between shadow-sm min-h-[125px]">
                    <h4 className="text-[11px] font-bold text-slate-100 mb-0.5">Revenue Trend</h4>
                    <div>
                       <div className="text-emerald-400 text-lg font-black leading-tight">+18.6%</div>
                       <div className="text-[9px] text-slate-300 font-medium">vs previous 30 days</div>
                    </div>
                    <div className="w-full h-7 my-1 relative">
                       <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
                         <polyline points="0,25 20,20 40,22 60,15 80,18 100,5" fill="none" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                         <circle cx="0" cy="25" r="2" fill="#d4af37" />
                         <circle cx="20" cy="20" r="2" fill="#d4af37" />
                         <circle cx="40" cy="22" r="2" fill="#d4af37" />
                         <circle cx="60" cy="15" r="2" fill="#d4af37" />
                         <circle cx="80" cy="18" r="2" fill="#d4af37" />
                         <circle cx="100" cy="5" r="3" fill="#fff" className="shadow-[0_0_6px_#d4af37]" />
                       </svg>
                    </div>
                    <p className="text-[9px] text-slate-300 leading-tight font-medium border-t border-slate-700/50 pt-1">
                      Strong upward momentum
                    </p>
                  </div>
                </div>

                {/* Row B: Middle Data Panels */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Panel 1: Radar Chart */}
                  <div className="bg-slate-800/70 rounded-xl border border-slate-700/80 p-3 flex flex-col shadow-sm">
                    <h4 className="text-[11px] font-bold text-slate-100 mb-1">Growth Pillar Performance</h4>
                    <div className="relative flex items-center justify-center my-1 py-1">
                      {/* Custom SVG Radar with clean viewBox padding */}
                      <svg viewBox="-10 -10 260 215" className="w-full max-w-[240px] h-[155px]">
                        {/* Radar webs */}
                        <polygon points="120,25 176.2,52 190.2,113 151.2,162 88.8,162 49.8,113 63.8,52" fill="none" stroke="#475569" strokeWidth="1" />
                        <polygon points="120,43 162.2,63.2 172.6,109 143.4,145.8 96.6,145.8 67.4,109 77.8,63.2" fill="none" stroke="#475569" strokeWidth="1" />
                        <polygon points="120,61 148.2,74.5 155.1,105 135.6,129.5 104.4,129.5 84.9,105 91.8,74.5" fill="none" stroke="#475569" strokeWidth="1" />
                        
                        {/* Axes */}
                        <line x1="120" y1="97" x2="120" y2="25" stroke="#475569" strokeWidth="1" />
                        <line x1="120" y1="97" x2="176.2" y2="52" stroke="#475569" strokeWidth="1" />
                        <line x1="120" y1="97" x2="190.2" y2="113" stroke="#475569" strokeWidth="1" />
                        <line x1="120" y1="97" x2="151.2" y2="162" stroke="#475569" strokeWidth="1" />
                        <line x1="120" y1="97" x2="88.8" y2="162" stroke="#475569" strokeWidth="1" />
                        <line x1="120" y1="97" x2="49.8" y2="113" stroke="#475569" strokeWidth="1" />
                        <line x1="120" y1="97" x2="63.8" y2="52" stroke="#475569" strokeWidth="1" />

                        {/* Data: Industry Avg (dashed gray) */}
                        <polygon points="120,48 162.2,63.2 159.5,106 145.4,149.8 100.5,137.7 84.9,105 81.3,66" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" />
                        
                        {/* Data: Your Score (solid gold, translucent fill) */}
                        <polygon points="120,34 158.7,66 177,110 149.2,158 102.5,133.5 67.4,109 74.3,60.5" fill="rgba(212,175,55,0.25)" stroke="#ffd700" strokeWidth="2" />
                        <circle cx="120" cy="34" r="2.5" fill="#ffd700" />
                        <circle cx="158.7" cy="66" r="2.5" fill="#ffd700" />
                        <circle cx="177" cy="110" r="2.5" fill="#ffd700" />
                        <circle cx="149.2" cy="158" r="2.5" fill="#ffd700" />
                        <circle cx="102.5" cy="133.5" r="2.5" fill="#ffd700" />
                        <circle cx="67.4" cy="109" r="2.5" fill="#ffd700" />
                        <circle cx="74.3" cy="60.5" r="2.5" fill="#ffd700" />

                        {/* Labels with clear position offsets */}
                        <text x="120" y="14" fill="#f1f5f9" fontSize="8" fontWeight="700" textAnchor="middle">Leadership</text>
                        <text x="182" y="48" fill="#f1f5f9" fontSize="8" fontWeight="700" textAnchor="start">Sales &amp; Rev</text>
                        <text x="196" y="116" fill="#f1f5f9" fontSize="8" fontWeight="700" textAnchor="start">Marketing</text>
                        <text x="155" y="176" fill="#f1f5f9" fontSize="8" fontWeight="700" textAnchor="start">Operations</text>
                        <text x="85" y="176" fill="#f1f5f9" fontSize="8" fontWeight="700" textAnchor="end">Finance</text>
                        <text x="44" y="116" fill="#f1f5f9" fontSize="8" fontWeight="700" textAnchor="end">Culture</text>
                        <text x="58" y="48" fill="#f1f5f9" fontSize="8" fontWeight="700" textAnchor="end">Tech &amp; AI</text>
                      </svg>
                    </div>
                    <div className="flex justify-center gap-4 mt-0.5">
                       <div className="flex items-center gap-1.5 text-[9.5px] text-slate-200 font-semibold">
                         <div className="w-3 h-0.5 bg-[#ffd700]"></div> Your Score
                       </div>
                       <div className="flex items-center gap-1.5 text-[9.5px] text-slate-300 font-medium">
                         <div className="w-3 h-0.5 border-t border-dashed border-slate-300"></div> Industry Avg.
                       </div>
                    </div>
                  </div>

                  {/* Panel 2: Priority Actions */}
                  <div className="bg-slate-800/70 rounded-xl border border-slate-700/80 p-3 flex flex-col shadow-sm">
                    <h4 className="text-[11px] font-bold text-slate-100 mb-2">Priority Actions</h4>
                    <div className="flex flex-col gap-2 flex-1">
                      {[
                        { num: 1, title: 'Improve Sales Conversion Process', sub: 'High Impact • Quick Win', bg: 'bg-amber-500/30 text-amber-300 border border-amber-500/50' },
                        { num: 2, title: 'Strengthen Financial Planning', sub: 'High Impact • Long Term', bg: 'bg-amber-500/30 text-amber-300 border border-amber-500/50' },
                        { num: 3, title: 'Optimize Operational Efficiency', sub: 'Medium Impact • Quick Win', bg: 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/50' },
                        { num: 4, title: 'Build Scalable Systems & SOPs', sub: 'Medium Impact • Long Term', bg: 'bg-purple-500/30 text-purple-300 border border-purple-500/50' }
                      ].map((action, i) => (
                        <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-700/60 transition-colors group cursor-pointer border border-slate-700/40 hover:border-slate-500">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${action.bg}`}>
                              {action.num}
                            </div>
                            <div className="min-w-0">
                              <h5 className="text-[11px] text-white font-semibold leading-tight group-hover:text-[#ffd700] transition-colors truncate">{action.title}</h5>
                              <p className="text-[9.5px] text-slate-300 font-medium mt-0.5 truncate">{action.sub}</p>
                            </div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors shrink-0 ml-1" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Row C: Bottom Metrics Row */}
                <div className="bg-slate-800/70 rounded-xl border border-slate-700/80 p-3 flex flex-col shadow-sm">
                  <h4 className="text-[11px] font-bold text-slate-100 mb-2">Top Growth Opportunities</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { title: 'Revenue Potential', val: '₹2.45 Cr', icon: <TrendingUp className="w-3.5 h-3.5 text-amber-400 shrink-0" /> },
                      { title: 'Improve Profitability', val: '₹78.5 L', icon: <BarChart className="w-3.5 h-3.5 text-amber-400 shrink-0" /> },
                      { title: 'Reduce Ops Cost', val: '₹36.2 L', icon: <TrendingDown className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> },
                      { title: 'Working Capital', val: '₹1.12 Cr', icon: <Activity className="w-3.5 h-3.5 text-amber-400 shrink-0" /> }
                    ].map((op, i) => (
                      <div key={i} className="bg-slate-900/80 rounded-lg border border-slate-700/80 p-2.5 flex flex-col justify-between relative overflow-hidden">
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <h5 className="text-[10px] text-slate-200 font-semibold leading-tight truncate">{op.title}</h5>
                          {op.icon}
                        </div>
                        <div className="text-[14px] font-black text-white leading-tight">{op.val}</div>
                        <div className="text-[8.5px] text-slate-400 font-medium mt-0.5">Annual Opportunity</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Footer Caption */}
                <div className="text-center mt-0.5">
                  <p className="text-[9.5px] text-slate-400 font-medium">Real-time metrics calculated from your Business Growth Assessment</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>


      {/* BUSINESS CHALLENGES WE SOLVE SECTION */}
      <section id="framework-pillars" className="bg-slate-50/50 py-24 lg:py-32 px-6 border-b border-slate-100 font-sans relative block w-full overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-amber-50/60 to-transparent -z-10 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] -z-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 bg-white border-2 border-slate-300 border-b-[8px] border-r-[6px] rounded-3xl p-8 md:p-12 shadow-md relative">
            <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300/80 mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#b3881b]"></span>
              <p className="text-xs sm:text-sm font-extrabold tracking-widest text-[#856108] uppercase">
                BUSINESS CHALLENGES WE SOLVE
              </p>
              <span className="w-2 h-2 rounded-full bg-[#b3881b]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight leading-[1.15] mb-6">
              What's Holding <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a17a14] via-[#c29d2f] to-[#a17a14]">Your Business</span> Back?
            </h2>
            <div className="space-y-3 max-w-3xl mx-auto text-center text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                Every business wants to grow—but growth doesn't happen by chance.
              </p>
              <p>
                Many businesses work hard every day, yet sales, revenue, and profits don't improve as expected.
              </p>
              <p>
                The biggest challenges are often hidden until they begin affecting growth, profitability, and decision-making.
              </p>
              <p className="pt-1 text-slate-800 font-semibold">
                The first step to solving a problem is identifying it.
              </p>
            </div>
          </div>

          {/* The 6-Card Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { 
                num: "1.", title: "Sales Growth\nHas Slowed Down", 
                text: "You're putting in the effort, but sales are no longer growing as expected.",
                accent: "bg-[#f59e0b]", bgCircle: "bg-amber-50/80", iconColor: "text-amber-600", shadowGlow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]",
                icon: <TrendingDownIcon className="w-8 h-8" strokeWidth={1.5} />
              },
              { 
                num: "2.", title: "Customers\nDon't Come Back", 
                text: "Winning new customers is expensive, but existing customers aren't returning or buying again.",
                accent: "bg-[#22c55e]", bgCircle: "bg-green-50/80", iconColor: "text-green-600", shadowGlow: "shadow-[0_0_20px_rgba(34,197,94,0.15)]",
                icon: <RefreshCcw className="w-8 h-8" strokeWidth={1.5} />
              },
              { 
                num: "3.", title: "Revenue is Growing,\nBut Profits Are Not", 
                text: "Sales are increasing, but profitability and cash flow remain under pressure.",
                accent: "bg-[#f97316]", bgCircle: "bg-orange-50/80", iconColor: "text-orange-600", shadowGlow: "shadow-[0_0_20px_rgba(249,115,22,0.15)]",
                icon: <IndianRupee className="w-8 h-8" strokeWidth={1.5} />
              },
              { 
                num: "4.", title: "Too Much Depends\non the Business Owner", 
                text: "Your business needs your constant involvement to keep things moving.",
                accent: "bg-[#a855f7]", bgCircle: "bg-purple-50/80", iconColor: "text-purple-600", shadowGlow: "shadow-[0_0_20px_rgba(168,85,247,0.15)]",
                icon: <UserCog className="w-8 h-8" strokeWidth={1.5} />
              },
              { 
                num: "5.", title: "Teams Need\nBetter Direction", 
                text: "Everyone is busy, but accountability, ownership, and execution are inconsistent.",
                accent: "bg-[#eab308]", bgCircle: "bg-yellow-50/80", iconColor: "text-yellow-600", shadowGlow: "shadow-[0_0_20px_rgba(234,179,8,0.15)]",
                icon: <div className="flex flex-col items-center"><Star className="w-4 h-4 mb-0.5" strokeWidth={2.5} /><Users className="w-7 h-7" strokeWidth={1.5} /></div>
              },
              { 
                num: "6.", title: "AI & Technology\nFeel Complicated", 
                text: "You know technology can help your business, but you're unsure where to begin or how to use it effectively.",
                accent: "bg-[#0ea5e9]", bgCircle: "bg-sky-50/80", iconColor: "text-sky-600", shadowGlow: "shadow-[0_0_20px_rgba(14,165,233,0.15)]",
                icon: <Cpu className="w-8 h-8" strokeWidth={1.5} />
              }
            ].map((card, idx) => (
              <div key={idx} className={`bg-white border-2 border-slate-200 border-b-[6px] border-r-[4px] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col sm:flex-row gap-5 items-start relative overflow-hidden transition-all duration-300 hover:border-b-[8px] hover:-translate-y-1 group cursor-default h-full`}>
                {/* Left color border indicator */}
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${card.accent} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                
                {/* Icon Circle */}
                <div className={`w-[72px] h-[72px] rounded-full flex items-center justify-center shrink-0 ${card.bgCircle} ${card.iconColor} ${card.shadowGlow} relative`}>
                  <div className="relative z-10">{card.icon}</div>
                </div>
                
                {/* Text Content */}
                <div className="pt-1 flex-1">
                  <h3 className="text-xl font-bold text-[#0a1128] mb-2.5 leading-[1.3] whitespace-pre-line tracking-tight">
                    <span className="mr-1">{card.num}</span>
                    {card.title}
                  </h3>
                  <div className="w-10 h-[2px] bg-slate-100 mb-3 group-hover:bg-slate-200 transition-colors"></div>
                  <p className="text-base text-slate-500 leading-relaxed font-medium">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="bg-[#0a1128] rounded-xl p-8 flex flex-col lg:flex-row items-center justify-between gap-8 border-2 border-[#1e293b] border-b-[8px] shadow-2xl relative overflow-hidden mt-8">
            {/* Dark texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10 flex-1">
              <div className="w-14 h-14 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <Lightbulb className="w-7 h-7 text-[#d4af37]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                  Every Business Challenge Has a <span className="text-[#d4af37]">Solution.</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-2xl font-medium">
                  <strong className="text-slate-200 font-semibold">KRG ONE™</strong> helps you identify what's limiting your business growth through a structured <strong className="text-slate-200 font-semibold">Business Growth Assessment™</strong> and provides practical strategies to improve sales, customer retention, profitability, operations, and long-term business performance.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-stretch lg:items-end gap-3 relative z-10 shrink-0 w-full lg:w-auto">
              <div className="flex items-center gap-4 w-full">
                <div className="hidden lg:flex flex-col items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-[#d4af37] mb-1" strokeWidth={1.5} />
                </div>
                <button 
                  aria-label="Start Free 35-Point Diagnostic Now"
                  onClick={(e) => { e.preventDefault(); setActiveAppView('ASSESSMENT_PORTAL'); window.scrollTo(0, 0); }} 
                  className="flex-1 lg:flex-none bg-gradient-to-r from-[#d4af37] to-[#e5c158] hover:from-[#c29d2f] hover:to-[#d4af37] text-[#0a1128] font-bold py-4 px-6 md:px-8 rounded-xl flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-[0_4px_15px_rgba(212,175,55,0.3)] text-[15px]"
                >
                  Start Free Business<br className="hidden md:block" />Growth Assessment™
                  <ArrowRight className="w-5 h-5 ml-1 shrink-0" />
                </button>
              </div>
              <div className="flex items-center justify-center lg:justify-end gap-3 md:gap-4 text-[11px] md:text-xs font-semibold text-slate-400 w-full">
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Takes only 5–7 minutes</div>
                <div className="w-[1px] h-3 bg-slate-700"></div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> No signup required</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* OUR STRUCTURED APPROACH SECTION */}
      <section id="structured-approach" className="bg-slate-50/50 py-24 lg:py-32 px-6 font-sans relative block w-full overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 bg-white border-2 border-slate-200 border-b-[8px] border-r-[6px] rounded-3xl p-8 md:p-12 shadow-sm relative">
            <p className="text-[11px] font-bold tracking-widest text-[#c29d2f] uppercase flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#c29d2f]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c29d2f]"></span>
              OUR STRUCTURED APPROACH
              <span className="w-1.5 h-1.5 rounded-full bg-[#c29d2f]"></span>
              <span className="w-8 h-[1px] bg-[#c29d2f]"></span>
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a1128] tracking-tight leading-[1.15] mb-6">
              How KRG ONE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c29d2f] to-[#e5c158]">Supports</span> Your Business Growth
            </h2>
            <div className="text-slate-600 text-[16px] leading-relaxed font-medium max-w-3xl mx-auto space-y-2">
              <p>We assess your business, identify growth opportunities, prioritize what matters most, and provide practical strategies to improve revenue, profitability, and long-term business performance.</p>
            </div>
          </div>

          {/* 4-Step Process Flow */}
          <div className="relative mb-16 mt-8">
            {/* Connecting line (hidden on mobile) */}
            <div className="hidden lg:block absolute top-0 left-[12%] right-[12%] h-[2px] border-t-2 border-dotted border-slate-300 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12 relative z-10">
              {[
                { 
                  num: "1", 
                  title: "Business Growth\nAssessment™", 
                  text: "Evaluate your business across the 7 critical business pillars.",
                  icon: <FileSearch className="w-10 h-10" strokeWidth={1.5} />,
                  borderColor: "border-amber-200",
                  bgColor: "bg-[#f59e0b]",
                  textColor: "text-[#f59e0b]"
                },
                { 
                  num: "2", 
                  title: "7-Pillar Business\nGrowth Framework™", 
                  text: "Identify strengths, gaps, and improvement opportunities.",
                  icon: <Landmark className="w-10 h-10" strokeWidth={1.5} />,
                  borderColor: "border-green-200",
                  bgColor: "bg-[#22c55e]",
                  textColor: "text-[#22c55e]"
                },
                { 
                  num: "3", 
                  title: "Growth OS™\n\n", 
                  text: "Transform insights into a practical business growth roadmap.",
                  icon: <Settings className="w-10 h-10" strokeWidth={1.5} />,
                  borderColor: "border-amber-200",
                  bgColor: "bg-[#f59e0b]",
                  textColor: "text-[#f59e0b]"
                },
                { 
                  num: "4", 
                  title: "AI-Enabled\nConsulting", 
                  text: "Implement smarter decisions, automation, and sustainable growth.",
                  icon: <Cpu className="w-10 h-10" strokeWidth={1.5} />,
                  borderColor: "border-purple-200",
                  bgColor: "bg-[#8b5cf6]",
                  textColor: "text-[#8b5cf6]"
                }
              ].map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center">
                  {/* Card */}
                  <div className={`bg-white border-2 ${step.borderColor} border-b-[6px] border-r-[4px] rounded-3xl p-8 pt-12 w-full text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-center flex-1 transition-all hover:-translate-y-1 hover:border-b-[8px] duration-300 relative`}>
                    {/* Number Badge */}
                    <div className={`absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full ${step.bgColor} text-white font-bold flex items-center justify-center text-lg shadow-sm z-10 ring-[6px] ring-white`}>
                      {step.num}
                    </div>
                    
                    <div className={`w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-6 ${step.textColor}`}>
                      {step.icon}
                    </div>
                    <h3 className="text-[19px] font-bold text-[#0a1128] mb-4 leading-tight whitespace-pre-line tracking-tight h-[56px] flex items-center justify-center">
                      {step.title}
                    </h3>
                    <div className="w-10 h-[1px] bg-slate-200 mb-4"></div>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      {step.text}
                    </p>
                  </div>

                  {/* Arrow for LG screens */}
                  {idx < 3 && (
                    <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border border-slate-100 shadow-sm items-center justify-center z-20 text-slate-400">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Banner */}
          <div className="bg-[#fefcf8] border-2 border-[#f5ead2] border-b-[8px] border-r-[6px] rounded-3xl p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 shadow-[0_8px_30px_rgba(212,175,55,0.05)] relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10 flex-1">
              <div className="w-20 h-20 rounded-full bg-white border border-[#f0e1c2] flex items-center justify-center shrink-0 shadow-sm">
                <TrendingUp className="w-10 h-10 text-[#d4af37]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-[#0a1128] mb-3 tracking-tight">
                  Your Growth Journey Starts Here
                </h3>
                <div className="w-16 h-0.5 bg-[#d4af37] mb-3"></div>
                <p className="text-slate-600 text-[15px] leading-relaxed max-w-2xl font-medium">
                  From understanding your business to implementing practical improvements, KRG ONE provides a structured roadmap for sustainable business growth.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-stretch lg:items-end gap-3 relative z-10 shrink-0 w-full lg:w-auto">
              <button 
                aria-label="Access the Growth Intelligence Platform"
                onClick={(e) => { e.preventDefault(); setActiveAppView('ASSESSMENT_PORTAL'); window.scrollTo(0, 0); }} 
                className="w-full lg:w-auto bg-gradient-to-r from-[#e5c158] to-[#d4af37] hover:from-[#d4af37] hover:to-[#c29d2f] text-[#0a1128] font-bold py-4 px-6 md:px-8 rounded-xl flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-[0_4px_15px_rgba(212,175,55,0.3)] text-[16px]"
              >
                <TrendingUp className="w-5 h-5 shrink-0" strokeWidth={2} />
                <span className="text-left leading-tight">Start Free Business<br className="hidden md:block" />Growth Assessment™</span>
                <ArrowRight className="w-5 h-5 shrink-0 ml-2" />
              </button>
              <div className="flex items-center justify-center lg:justify-end gap-3 md:gap-4 text-[12px] font-semibold text-slate-500 w-full mt-2">
                <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#d4af37]" /> Takes only 5–7 minutes</div>
                <div className="w-[1px] h-3 bg-slate-300"></div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#d4af37]" /> No signup required</div>
              </div>
            </div>
          </div>

          {/* Footer 4-item row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-100 mt-4">
            {[
              { title: "Proven Framework", text: "Built on real business experience", icon: <ShieldCheck className="w-8 h-8 text-amber-600" strokeWidth={1.5} /> },
              { title: "Expert Support", text: "Guided by business experts", icon: <UserCheck className="w-8 h-8 text-green-600" strokeWidth={1.5} /> },
              { title: "Practical Solutions", text: "Actionable and easy to implement", icon: <Target className="w-8 h-8 text-orange-500" strokeWidth={1.5} /> },
              { title: "Measurable Results", text: "Track progress, achieve growth", icon: <BarChart className="w-8 h-8 text-purple-600" strokeWidth={1.5} /> }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#0a1128] text-base tracking-tight mb-1">{feature.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-tight">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* GROWTH OS SECTION */}
      <section id="growth-os" className="bg-[#050b14] py-24 lg:py-32 px-6 font-sans relative block w-full overflow-hidden text-white border-b-8 border-r-4 border-[#1e293b] rounded-b-3xl">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="max-w-[1300px] mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center border border-[#c29d2f]/40 rounded-full px-5 py-1.5 mb-6 bg-[#0a1128]/50 shadow-[0_0_15px_rgba(194,157,47,0.15)]">
              <span className="text-[10px] font-bold tracking-widest text-[#c29d2f] uppercase">
                INSIDE THE KRG ONE™
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.2] lg:leading-[1.1] mb-6">
              Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5c158] via-[#d4af37] to-[#c29d2f]">OS</span><sup className="text-2xl font-bold text-[#c29d2f] top-[-1em]">™</sup>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              A proven operating system to evaluate, prioritise, and accelerate <span className="text-[#d4af37] font-semibold">sustainable business growth.</span>
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-start justify-between mb-20">
            
            {/* Left Column: 7 Pillars List */}
            <div className="w-full lg:w-80 shrink-0">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[#d4af37] text-4xl font-black drop-shadow-md">7</span>
                <span className="text-sm font-bold tracking-widest text-slate-200 uppercase mt-1">GROWTH PILLARS</span>
              </div>
              <div className="space-y-6">
                {[
                  { num: "1", title: "LEADERSHIP & VISION", text: "Strong leadership, clear vision, and a growth-oriented culture drive everything we do.", icon: <User className="w-6 h-6 text-[#d4af37]" />, color: "border-[#d4af37]/30 text-[#d4af37]", bgHover: "hover:bg-[#d4af37]/10" },
                  { num: "2", title: "SALES & REVENUE", text: "A predictable sales engine, strong pipeline, and effective revenue growth strategies.", icon: <TrendingUp className="w-6 h-6 text-amber-400" />, color: "border-amber-500/30 text-amber-400", bgHover: "hover:bg-amber-500/10" },
                  { num: "3", title: "MARKETING & CUSTOMER GROWTH", text: "Right positioning, strong brand, and customer acquisition that drives sustainable growth.", icon: <Megaphone className="w-6 h-6 text-green-400" />, color: "border-green-500/30 text-green-400", bgHover: "hover:bg-green-500/10" },
                  { num: "4", title: "OPERATIONS & PROCESS", text: "Efficient processes and scalable operations that improve productivity and profitability.", icon: <Settings className="w-6 h-6 text-purple-400" />, color: "border-purple-500/30 text-purple-400", bgHover: "hover:bg-purple-500/10" },
                  { num: "5", title: "FINANCE & BUSINESS PERFORMANCE", text: "Strong financial health, unit economics, and decision-making backed by accurate numbers.", icon: <IndianRupee className="w-6 h-6 text-amber-400" />, color: "border-amber-500/30 text-amber-400", bgHover: "hover:bg-amber-500/10" },
                  { num: "6", title: "PEOPLE & ORGANISATION", text: "Right people, right roles, continuous development, and a high-performance organisation.", icon: <Users className="w-6 h-6 text-cyan-400" />, color: "border-cyan-500/30 text-cyan-400", bgHover: "hover:bg-cyan-500/10" },
                  { num: "7", title: "TECHNOLOGY & AI", text: "Leverage technology and AI to automate, innovate, and build a future-ready business.", icon: <Cpu className="w-6 h-6 text-indigo-400" />, color: "border-indigo-500/30 text-indigo-400", bgHover: "hover:bg-indigo-500/10" }
                ].map((item, idx) => (
                  <div key={idx} className={`flex gap-4 p-3 -ml-3 rounded-xl transition-all duration-300 ${item.bgHover} cursor-default group hover:translate-x-1`}>
                    <div className={`w-12 h-12 rounded-full border bg-[#0a1128] flex items-center justify-center shrink-0 ${item.color} shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#c29d2f]/50`}>
                      {item.icon}
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className={`text-sm font-bold mb-1 tracking-tight ${item.color.split(' ')[1]}`}>
                        {item.num}. {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-snug group-hover:text-slate-200 transition-colors">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center: Circular Graphic (highly stylized 3D representation) */}
            <div className="flex-1 w-full max-w-[550px] relative flex items-center justify-center min-h-[550px] mx-auto scale-[0.85] sm:scale-100 group">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

              {/* Outer rings */}
              <div className="absolute inset-2 rounded-full border border-slate-600/30 bg-gradient-to-br from-slate-800/40 to-transparent shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] pointer-events-none animate-[spin_30s_linear_infinite]"></div>
              
              {/* 7-Segment Base Ring */}
              <div className="absolute inset-6 rounded-full border border-slate-800 bg-[#0a1128] overflow-hidden" style={{
                background: `conic-gradient(
                  from -25.7deg,
                  rgba(59,130,246,0.15) 0deg 51.4deg,
                  #0a1128 51.4deg 52.4deg,
                  rgba(14,165,233,0.15) 52.4deg 103.8deg,
                  #0a1128 103.8deg 104.8deg,
                  rgba(34,197,94,0.15) 104.8deg 155.2deg,
                  #0a1128 155.2deg 156.2deg,
                  rgba(168,85,247,0.15) 156.2deg 206.6deg,
                  #0a1128 206.6deg 207.6deg,
                  rgba(245,158,11,0.15) 207.6deg 258.0deg,
                  #0a1128 258.0deg 259.0deg,
                  rgba(6,182,212,0.15) 259.0deg 309.4deg,
                  #0a1128 309.4deg 310.4deg,
                  rgba(99,102,241,0.15) 310.4deg 360deg
                )`
              }}>
                {/* 3D Glass Overlay for segments */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent mix-blend-overlay"></div>
                <div className="absolute inset-0 shadow-[inset_0_20px_50px_rgba(255,255,255,0.05),inset_0_-20px_50px_rgba(0,0,0,0.8)] pointer-events-none"></div>
              </div>

              {/* Segment Glow Accents & Dividers */}
              <div className="absolute inset-6 rounded-full border-[1.5px] border-slate-700/50 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)] pointer-events-none"></div>
              
              {/* Center Hub Outer Ring */}
              <div className="absolute inset-[135px] rounded-full border-[6px] border-[#0a1128] bg-gradient-to-b from-[#1e293b] to-[#050b14] shadow-[0_15px_30px_rgba(0,0,0,0.9)] z-10 pointer-events-none animate-[spin_40s_linear_infinite_reverse]"></div>
              <div className="absolute inset-[140px] rounded-full border border-slate-600/50 shadow-[inset_0_0_15px_rgba(255,255,255,0.05)] z-10 pointer-events-none"></div>

              {/* Center Hub Content */}
              <div className="relative z-20 w-[200px] h-[200px] rounded-full flex flex-col items-center justify-center transform transition-transform hover:scale-105 duration-500 cursor-default">
                <span className="text-[11px] font-bold tracking-widest text-slate-300 mb-1.5">KRG ONE™</span>
                <div className="text-[26px] font-black text-white leading-none mb-3.5 flex items-start">
                  Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5c158] to-[#c29d2f] ml-2">OS</span><sup className="text-[#d4af37] text-sm mt-0.5 ml-0.5">™</sup>
                </div>
                <div className="w-16 h-[1px] bg-slate-600 mb-3"></div>
                <div className="text-[10px] text-center text-slate-300 font-medium leading-snug">
                  One Framework.<br/>Seven Pillars.<br/>Unlimited Growth.
                </div>
              </div>

              {/* Glowing Connection Nodes */}
              {[
                { r: -90 },
                { r: -38.5 },
                { r: 12.8 },
                { r: 64.2 },
                { r: 115.7 },
                { r: 167.1 },
                { r: 218.5 },
              ].map((rot, i) => (
                <div key={i} className="absolute inset-[135px] rounded-full pointer-events-none z-30" style={{ transform: `rotate(${rot.r}deg)` }}>
                  <div className={`absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_10px_#d4af37,0_0_20px_#d4af37] animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }}></div>
                </div>
              ))}

              {/* Orbiting Elements */}
              {[
                { top: "12%", left: "50%", transform: "translate(-50%, -50%)", num: "01", title: "LEADERSHIP\n& VISION", icon: <User className="w-6 h-6 text-white" /> },
                { top: "30%", left: "82%", transform: "translate(-50%, -50%)", num: "02", title: "SALES &\nREVENUE", icon: <TrendingUp className="w-6 h-6 text-white" /> },
                { top: "68%", left: "85%", transform: "translate(-50%, -50%)", num: "03", title: "MARKETING &\nCUSTOMER\nGROWTH", icon: <Megaphone className="w-6 h-6 text-white" /> },
                { top: "88%", left: "62%", transform: "translate(-50%, -50%)", num: "04", title: "OPERATIONS &\nPROCESS", icon: <Settings className="w-6 h-6 text-white" /> },
                { top: "88%", left: "38%", transform: "translate(-50%, -50%)", num: "05", title: "FINANCE &\nBUSINESS\nPERFORMANCE", icon: <IndianRupee className="w-6 h-6 text-white" /> },
                { top: "68%", left: "15%", transform: "translate(-50%, -50%)", num: "06", title: "PEOPLE &\nORGANISATION", icon: <Users className="w-6 h-6 text-white" /> },
                { top: "30%", left: "18%", transform: "translate(-50%, -50%)", num: "07", title: "TECHNOLOGY\n& AI", icon: <Cpu className="w-6 h-6 text-white" /> }
              ].map((orbit, i) => (
                <div key={i} className="absolute flex flex-col items-center z-20 hover:scale-110 transition-transform duration-300 cursor-default" style={{ top: orbit.top, left: orbit.left, transform: orbit.transform }}>
                  <div className="text-[16px] font-black text-[#e5c158] mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{orbit.num}</div>
                  <div className="mb-2 drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] opacity-90 transition-transform duration-500 hover:rotate-12">{orbit.icon}</div>
                  <div className="text-[9px] font-bold text-center uppercase text-white tracking-widest whitespace-pre-line drop-shadow-[0_2px_2px_rgba(0,0,0,1)] leading-tight">{orbit.title}</div>
                </div>
              ))}
            </div>

            {/* Right Column: How it works */}
            <div className="w-full lg:w-80 shrink-0 bg-[#0a1128] border border-[#1e293b] rounded-2xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <h3 className="text-[#d4af37] text-sm font-bold tracking-widest uppercase mb-8">HOW IT WORKS</h3>
              <div className="space-y-8 relative">
                {/* Connecting Line */}
                <div className="absolute left-6 top-10 bottom-10 w-[1px] border-l border-dashed border-slate-700"></div>

                {[
                  { title: "EVALUATE", text: "We assess your business across all 7 pillars using our proprietary assessment methodology.", icon: <Search className="w-5 h-5 text-[#d4af37]" /> },
                  { title: "ANALYSE", text: "Identify strengths, gaps, and growth opportunities with data-backed insights.", icon: <Target className="w-5 h-5 text-[#d4af37]" /> },
                  { title: "PRIORITISE", text: "Focus on the areas that will create the highest business impact.", icon: <TrendingUp className="w-5 h-5 text-[#d4af37]" /> },
                  { title: "ACCELERATE", text: "Implement a practical roadmap to drive measurable and sustainable growth.", icon: <Rocket className="w-5 h-5 text-[#d4af37]" /> }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 relative z-10 group cursor-default">
                    <div className="w-12 h-12 rounded-full border border-slate-600 bg-[#050b14] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-[#d4af37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                      <div className="transition-transform duration-300 group-hover:scale-110">{step.icon}</div>
                    </div>
                    <div className="pt-1">
                      <h4 className="text-sm font-bold text-white mb-1.5 tracking-tight transition-colors duration-300 group-hover:text-[#d4af37]">{step.title}</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed transition-colors duration-300 group-hover:text-slate-300">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom 4 metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-slate-800 mb-10">
            {[
              { title: "BUSINESS GROWTH SCORE™", text: "A single score that shows how healthy and growth-ready your business is.", icon: <Gauge className="w-8 h-8 text-[#d4af37]" /> },
              { title: "DATA-BACKED INSIGHTS", text: "Quantified insights across all 7 pillars to make better decisions.", icon: <Network className="w-8 h-8 text-amber-400" /> },
              { title: "PRIORITISED ROADMAP", text: "A clear, step-by-step roadmap focused on high-impact areas.", icon: <ClipboardList className="w-8 h-8 text-green-400" /> },
              { title: "MEASURABLE IMPACT", text: "Track progress, improve performance, and accelerate business growth.", icon: <TrendingUp className="w-8 h-8 text-amber-500" /> }
            ].map((metric, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="shrink-0 mt-1">{metric.icon}</div>
                <div>
                  <h4 className="font-bold text-white text-xs mb-1.5 tracking-tight">{metric.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">{metric.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Banner */}
          <div className="bg-[#141b2d] border border-slate-700/50 rounded-xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl font-medium text-center lg:text-left">
              Every pillar contributes to your <strong className="text-[#d4af37] font-semibold">Business Growth Score™</strong>. Our <strong className="text-[#d4af37] font-semibold">Growth OS™</strong> evaluates every pillar to identify opportunities, prioritise improvements, and build a practical roadmap for sustainable business growth.
            </p>
            <button 
              onClick={(e) => { e.preventDefault(); setActiveAppView('CONTACT_US'); window.scrollTo(0, 0); }}
              className="shrink-0 bg-gradient-to-r from-[#e5c158] to-[#d4af37] hover:from-[#d4af37] hover:to-[#c29d2f] text-[#0a1128] font-bold py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-transform transform active:scale-95 text-sm uppercase tracking-wide"
            >
              EXPLORE THE GROWTH OS™
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* DASHBOARD SECTION */}
      <section id="dashboard" className="bg-[#fafafc] py-24 lg:py-32 px-6 font-sans relative block w-full overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-[#0f2142] mb-4 tracking-tight leading-tight">Business Growth Dashboard™</h2>
            <h3 className="text-[1.75rem] md:text-[2.25rem] font-medium text-black mb-6 leading-tight">Turn Business Data into Growth Decisions</h3>
            <p className="text-[18px] text-slate-800 leading-relaxed font-normal">
              The KRG ONE™ Business Growth Dashboard transforms your Business Growth Assessment into executive insights, priority actions, and a practical roadmap for sustainable business growth.
            </p>
          </div>

          <div className="flex flex-col xl:flex-row gap-12 items-start">
            {/* Left: The Dashboard Graphic */}
            <div className="w-full xl:w-[60%] shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Col 1 */}
                <div className="flex flex-col gap-4">
                  <div className="bg-[#f4f7fc] border border-white/50 rounded-2xl p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex-1 flex flex-col">
                    <h4 className="text-[12px] font-bold text-black mb-2 tracking-tight">AI Business Insights™ Panel</h4>
                    <p className="text-[9px] text-slate-700 mb-3 leading-snug">Concise, high-impact recommendations recommendations to concise, high-impact recommendations.</p>
                    <ul className="text-[9px] text-slate-700 space-y-2.5 list-disc pl-3">
                      <li>Achievers recommended actions fraction situations and creatable business growth.</li>
                      <li>Evaluate constraints strategies make-enabled and customer-centric growth.</li>
                      <li>Recognize the central areas recommendations and track transparent processes for continued actions.</li>
                      <li>Develop most detailed task recommendations accountabilities and mandate and total growth underpins.</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-auto flex flex-col">
                    <h4 className="text-[12px] font-bold text-black mb-2 tracking-tight">90-Day Growth Roadmap™</h4>
                    <p className="text-[9px] text-slate-600 mb-6 leading-snug">Visualization milestones designed intent with achievable milestones.</p>
                    <div className="relative h-20 mt-4">
                      <div className="absolute top-[40%] left-0 right-0 h-px bg-slate-200"></div>
                      <div className="absolute top-[40%] left-[20%] w-2 h-2 rounded-full bg-[#ffb800] ring-4 ring-amber-100 -translate-y-1/2 z-20"></div>
                      <div className="absolute top-[40%] left-[50%] w-2 h-2 rounded-full bg-[#0f2142] -translate-y-1/2 z-20"></div>
                      <div className="absolute top-[40%] left-[80%] w-2 h-2 rounded-full bg-[#0f2142] -translate-y-1/2 z-20"></div>
                      <div className="absolute top-0 right-0 bg-slate-50 border border-slate-100 text-[6px] px-1.5 py-1 rounded text-slate-500 font-medium shadow-sm z-20">Achievable milestones</div>
                      
                      <div className="absolute top-[20%] left-[5%] bg-[#0f2142] text-white text-[7px] px-2 py-1.5 rounded-md shadow-md w-[80px] z-30">
                        90-Day Growth<br/>milestones: 1 Month
                        <div className="absolute -bottom-1 right-3 w-2 h-2 bg-[#0f2142] rotate-45"></div>
                      </div>
                      
                      <div className="absolute top-[30%] -left-[2%] bg-[#0f2142] text-white text-[7px] px-2 py-1.5 rounded-md shadow-md w-[80px] z-20 opacity-80 scale-90">
                        90 Day grass<br/>Achievable milestone: 1
                      </div>
                      
                      <div className="absolute bottom-[20%] left-0 h-full bg-[#ffb800]/10 border-r border-[#ffb800] w-[80%]"></div>
                      
                      <div className="absolute bottom-[-10px] left-[18%] text-[8px] text-slate-500 font-medium">Jun</div>
                      <div className="absolute bottom-[-10px] left-[48%] text-[8px] text-slate-500 font-medium">May</div>
                      <div className="absolute bottom-[-10px] left-[78%] text-[8px] text-slate-500 font-medium">Sep</div>
                    </div>
                    <div className="mt-8 inline-flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md text-[8px] font-medium text-slate-600 border border-slate-100 self-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ffb800]"></div> Nsesizes <ChevronDown className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </div>

                {/* Col 2 */}
                <div className="md:col-span-2 bg-white rounded-2xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex flex-col">
                  <h4 className="text-[16px] font-bold text-black mb-1">Radar Chart</h4>
                  <p className="text-[10px] text-slate-600 mb-6">Multiplozation sizertle 7 growth and 7 growth pillars.</p>
                  
                  <div className="flex items-center justify-center gap-4 mb-4 text-[9px] text-slate-600 font-medium">
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-slate-200 rounded-sm"></div> Leadership & Vision</div>
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-[#ffb800] rounded-sm"></div> Radar Chart</div>
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-[#0f2142] rounded-sm"></div> Proces & Systems</div>
                  </div>
                  
                  <div className="w-full flex-1 relative flex items-center justify-center min-h-[280px] mt-4 pb-4">
                    <svg viewBox="0 0 100 100" className="w-full h-full max-w-[320px] overflow-visible">
                      {/* Grid polygons */}
                      {[1, 2, 3, 4, 5].map((level) => {
                        const size = 10 + (level * 9);
                        const top = 50 - size;
                        const bottom = 50 + size;
                        const right = 50 + (size * 0.95);
                        const left = 50 - (size * 0.95);
                        const topRightX = 50 + (size * 0.75);
                        const topRightY = 50 - (size * 0.5);
                        const topLeftX = 50 - (size * 0.75);
                        const topLeftY = 50 - (size * 0.5);
                        const botRightX = 50 + (size * 0.75);
                        const botRightY = 50 + (size * 0.5);
                        const botLeftX = 50 - (size * 0.75);
                        const botLeftY = 50 + (size * 0.5);
                        return (
                          <polygon 
                            key={level}
                            points={`50,${top} ${right},${topRightY} ${botRightX},${botRightY} 50,${bottom} ${botLeftX},${botLeftY} ${left},${topLeftY}`} 
                            fill="none" 
                            stroke="#e2e8f0" 
                            strokeWidth="0.5" 
                          />
                        );
                      })}
                      
                      {/* Lines from center */}
                      <line x1="50" y1="50" x2="50" y2="5" stroke="#e2e8f0" strokeWidth="0.5" />
                      <line x1="50" y1="50" x2="92" y2="28" stroke="#e2e8f0" strokeWidth="0.5" />
                      <line x1="50" y1="50" x2="92" y2="72" stroke="#e2e8f0" strokeWidth="0.5" />
                      <line x1="50" y1="50" x2="50" y2="95" stroke="#e2e8f0" strokeWidth="0.5" />
                      <line x1="50" y1="50" x2="8" y2="72" stroke="#e2e8f0" strokeWidth="0.5" />
                      <line x1="50" y1="50" x2="8" y2="28" stroke="#e2e8f0" strokeWidth="0.5" />
                        
                      {/* Shape Yellow */}
                      <polygon points="50,25 65,35 65,65 50,70 35,60 30,40" fill="rgba(255, 184, 0, 0.2)" stroke="#ffb800" strokeWidth="1" />
                      {/* Shape Dark */}
                      <polygon points="50,30 72,40 60,62 50,62 40,58 45,35" fill="rgba(15, 33, 66, 0.4)" stroke="#0f2142" strokeWidth="1.5" />
                      
                      {/* Dots for Dark shape */}
                      <circle cx="50" cy="30" r="1.5" fill="#0f2142" />
                      <circle cx="72" cy="40" r="1.5" fill="#0f2142" />
                      <circle cx="60" cy="62" r="1.5" fill="#0f2142" />
                      <circle cx="50" cy="62" r="1.5" fill="#0f2142" />
                      <circle cx="40" cy="58" r="1.5" fill="#0f2142" />
                      <circle cx="45" cy="35" r="1.5" fill="#0f2142" />
                    </svg>
                    
                    <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 text-[10px] font-bold text-black bg-white/80 px-1 whitespace-nowrap">Leadership & Vision</div>
                    <div className="absolute top-[25%] -right-[8%] text-[10px] font-bold text-black text-center leading-snug bg-white/80 px-1">Sales &<br/>Marketing</div>
                    <div className="absolute bottom-[20%] -right-[8%] text-[10px] font-bold text-black text-center leading-snug bg-white/80 px-1">Operations<br/>& Process</div>
                    <div className="absolute bottom-[-8%] left-1/2 -translate-x-1/2 text-[10px] font-bold text-black bg-white/80 px-1 text-center whitespace-nowrap">Financial<br/>Mgmt</div>
                    <div className="absolute bottom-[20%] -left-[8%] text-[10px] font-bold text-black text-center leading-snug bg-white/80 px-1">People &<br/>Culture</div>
                    <div className="absolute top-[25%] -left-[8%] text-[10px] font-bold text-black text-center leading-snug bg-white/80 px-1">Process &<br/>Systems</div>
                    <div className="absolute top-[50%] -left-[12%] -translate-y-1/2 text-[10px] font-bold text-black text-center leading-snug bg-white/80 px-1">Technology<br/>& AI</div>
                  </div>
                  
                  <div className="flex gap-3 mt-auto pt-6">
                    <div className="flex-1 bg-[#f4f7fc] p-3 rounded-xl flex flex-col justify-center">
                      <div className="text-[9px] text-slate-500 font-medium mb-0.5">Leadership</div>
                      <div className="text-[14px] font-bold text-black mb-1.5">+ 160%</div>
                      <div className="w-full h-1 bg-slate-200 rounded-full"><div className="w-3/4 h-full bg-slate-400 rounded-full"></div></div>
                    </div>
                    <div className="flex-1 bg-[#f4f7fc] p-3 rounded-xl flex flex-col justify-center">
                      <div className="text-[9px] text-slate-500 font-medium mb-0.5">Sales Marketing</div>
                      <div className="text-[14px] font-bold text-black mb-1.5">4.0%</div>
                      <div className="w-full h-1 bg-slate-200 rounded-full flex"><div className="w-1/4 h-full bg-[#ffb800] rounded-l-full"></div><div className="w-2 h-full bg-[#0f2142]"></div></div>
                    </div>
                    <div className="flex-1 bg-[#f4f7fc] p-3 rounded-xl flex flex-col justify-center">
                      <div className="text-[9px] text-slate-500 font-medium mb-0.5">Financial Mgmts</div>
                      <div className="text-[14px] font-bold text-black mb-1.5">63.5%</div>
                      <div className="w-full h-1 bg-slate-200 rounded-full"><div className="w-1/2 h-full bg-slate-400 rounded-full"></div></div>
                    </div>
                  </div>
                </div>

                {/* Col 3 */}
                <div className="flex flex-col gap-4">
                  <div className="bg-white rounded-2xl p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex-1 flex flex-col">
                    <h4 className="text-[13px] font-bold text-black mb-3">Executive Growth Report™</h4>
                    
                    <div className="flex gap-2 mb-3 h-[90px]">
                      <div className="flex-1 border border-slate-100 rounded-lg p-2 flex flex-col items-center justify-center">
                        <div className="text-[5px] text-slate-400 font-medium mb-2">Executive Report</div>
                        <svg viewBox="0 0 100 100" className="w-full h-full max-w-[50px]">
                          <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                          <polygon points="50,30 65,40 60,60 50,70 35,60 35,40" fill="rgba(148, 163, 184, 0.2)" stroke="#94a3b8" strokeWidth="1" />
                          <polygon points="50,40 60,45 55,60 50,65 40,55 45,40" fill="rgba(255, 184, 0, 0.4)" stroke="#ffb800" strokeWidth="1" />
                        </svg>
                      </div>
                      <div className="flex-1 border border-slate-100 rounded-lg p-2 flex flex-col items-center justify-end pb-1">
                        <div className="text-[5px] text-slate-400 font-medium mb-auto mt-1">Executive Growth Report</div>
                        <div className="flex items-end gap-1 h-full max-h-[30px] w-full px-1">
                          <div className="w-full bg-slate-200 h-[20%] rounded-t-sm"></div>
                          <div className="w-full bg-slate-300 h-[40%] rounded-t-sm"></div>
                          <div className="w-full bg-slate-400 h-[60%] rounded-t-sm"></div>
                          <div className="w-full bg-[#ffb800] h-[80%] rounded-t-sm"></div>
                        </div>
                        <div className="flex w-full justify-between text-[4px] text-slate-400 mt-1 px-1">
                          <span>Low</span><span>Mid</span><span>High</span><span>Max</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-[8.5px] text-slate-700 leading-snug mb-2">The KRG ONE™ Business Growth Dashboard transforms your Business Growth Assessment into executive insights-cons excutive rinisights, business growth.</p>
                    <p className="text-[8.5px] text-slate-700 leading-snug">The garnatione reoeexrnent recommendation and toxi aneersnesnxth eeson en aai anasiging maraitr in iBalty sczone and a practical roadmap for sustainable business growth.</p>
                  </div>
                  
                  <div className="bg-[#f4f7fc] border border-white/50 rounded-2xl p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-auto flex flex-col">
                    <h4 className="text-[11px] font-bold text-black mb-3">7-Pillar Performance Dashboard™</h4>
                    <div className="space-y-3.5 mb-auto">
                      {[
                        { label: "Leadership & Vision", val1: "70%", val2: "15%", col: "bg-[#0f2142]", col2: "bg-[#ffb800]" },
                        { label: "Sales & Marketing", val1: "65%", val2: "20%", col: "bg-[#0f2142]", col2: "bg-slate-300" },
                        { label: "Operations & Process", val1: "50%", val2: "30%", col: "bg-[#0f2142]", col2: "bg-[#ffb800]" },
                        { label: "Financial Mgmt", val1: "55%", val2: "25%", col: "bg-[#0f2142]", col2: "bg-slate-400" },
                        { label: "People & Culture", val1: "45%", val2: "35%", col: "bg-[#0f2142]", col2: "bg-slate-300" },
                        { label: "Technology & AI", val1: "60%", val2: "10%", col: "bg-[#0f2142]", col2: "bg-[#ffb800]" },
                      ].map((p, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-[85px] text-[8px] text-black font-medium tracking-tight">{p.label}</div>
                          <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden flex">
                            <div className={`h-full ${p.col}`} style={{ width: p.val1 }}></div>
                            <div className={`h-full ${p.col2}`} style={{ width: p.val2 }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-5 px-1 bg-white p-2 rounded-xl">
                      <div className="flex items-center gap-1.5 text-[8px] text-slate-600 font-medium"><div className="w-2.5 h-2.5 rounded-full bg-[#ffb800]"></div> Nssview</div>
                      <div className="flex items-center gap-1.5 text-[8px] text-slate-600 font-medium"><div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div> Stats</div>
                      <div className="flex items-center gap-1.5 text-[8px] text-slate-600 font-medium"><div className="w-2.5 h-2.5 rounded-full bg-[#0f2142]"></div> Brockdown</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: What You'll Receive list */}
            <div className="flex-1 w-full mt-4 xl:mt-0 xl:pl-4">
              <h3 className="text-[1.75rem] font-bold text-[#0f2142] mb-6">What You'll Receive</h3>
              
              <div className="space-y-5">
                {[
                  { 
                    title: "Business Growth Score™", 
                    text: "An overall Business Growth Score based on the KRG ONE™ 7-Pillar Business Growth Framework™, showing your current business health and growth readiness.",
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="24" width="8" height="12" fill="#94a3b8" />
                        <rect x="16" y="16" width="8" height="20" fill="#94a3b8" />
                        <rect x="28" y="8" width="8" height="28" fill="#ffb800" />
                        <path d="M2 38H38" stroke="#0f2142" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )
                  },
                  { 
                    title: "Growth Priority Matrix™", 
                    text: "Instantly identify the areas that need immediate attention and the opportunities that can deliver the highest business impact.",
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="4" width="14" height="14" rx="3" fill="#ffb800" />
                        <rect x="22" y="4" width="14" height="14" rx="3" fill="#cbd5e1" />
                        <rect x="4" y="22" width="14" height="14" rx="3" fill="#cbd5e1" />
                        <rect x="22" y="22" width="14" height="14" rx="3" fill="#94a3b8" />
                      </svg>
                    )
                  },
                  { 
                    title: "7-Pillar Performance Dashboard™", 
                    text: "View your performance across all seven growth pillars through a clear visual dashboard that highlights strengths, gaps, and improvement opportunities.",
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" stroke="#94a3b8" strokeWidth="1" fill="none"/>
                        <polygon points="20,10 30,16 30,24 20,30 10,24 10,16" stroke="#94a3b8" strokeWidth="1" fill="none"/>
                        <polygon points="20,12 28,18 25,28 15,28 12,18" fill="rgba(255, 184, 0, 0.4)" stroke="#ffb800" strokeWidth="1.5"/>
                        <line x1="20" y1="2" x2="20" y2="38" stroke="#94a3b8" strokeWidth="1"/>
                        <line x1="2" y1="12" x2="38" y2="28" stroke="#94a3b8" strokeWidth="1"/>
                        <line x1="2" y1="28" x2="38" y2="12" stroke="#94a3b8" strokeWidth="1"/>
                      </svg>
                    )
                  },
                  { 
                    title: "AI Business Insights™", 
                    text: "Receive intelligent recommendations that support better business decisions and help you focus on what matters most.",
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="14" width="28" height="20" rx="4" stroke="#0f2142" strokeWidth="2" fill="#f8fafc"/>
                        <circle cx="14" cy="24" r="3" fill="#ffb800"/>
                        <circle cx="26" cy="24" r="3" fill="#ffb800"/>
                        <line x1="20" y1="14" x2="20" y2="6" stroke="#0f2142" strokeWidth="2"/>
                        <circle cx="20" cy="4" r="2" fill="#94a3b8"/>
                        <path d="M16 30H24" stroke="#0f2142" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="2" y1="22" x2="6" y2="22" stroke="#0f2142" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="34" y1="22" x2="38" y2="22" stroke="#0f2142" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )
                  },
                  { 
                    title: "Executive Growth Report™", 
                    text: "A professionally structured report summarising your assessment results, business observations, and strategic recommendations.",
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" y="4" width="24" height="32" rx="2" stroke="#0f2142" strokeWidth="2" fill="white"/>
                        <line x1="14" y1="12" x2="26" y2="12" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="14" y1="18" x2="26" y2="18" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="14" y1="24" x2="22" y2="24" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round"/>
                        <rect x="14" y="28" width="12" height="4" fill="#ffb800" rx="1"/>
                      </svg>
                    )
                  },
                  { 
                    title: "90-Day Growth Roadmap™", 
                    text: "A prioritised action plan designed to improve business performance with practical, measurable, and achievable milestones.",
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12L14 8L26 12L36 8V32L26 36L14 32L4 36V12Z" fill="#f8fafc" stroke="#0f2142" strokeWidth="2" strokeLinejoin="round"/>
                        <line x1="14" y1="8" x2="14" y2="32" stroke="#0f2142" strokeWidth="2"/>
                        <line x1="26" y1="12" x2="26" y2="36" stroke="#0f2142" strokeWidth="2"/>
                        <path d="M30 14C30 10.6863 27.3137 8 24 8C20.6863 8 18 10.6863 18 14C18 18 24 24 24 24C24 24 30 18 30 14Z" fill="#ffb800" stroke="#0f2142" strokeWidth="2" strokeLinejoin="round"/>
                        <circle cx="24" cy="14" r="2" fill="white"/>
                      </svg>
                    )
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 sm:gap-4 items-start">
                    <div className="shrink-0 mt-1.5">
                      <Check className="w-5 h-5 text-[#ffb800]" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 pr-2 sm:pr-4">
                      <h4 className="text-[17px] sm:text-[19px] font-semibold text-[#0f2142] mb-0.5 leading-snug">{item.title}</h4>
                      <p className="text-[14px] sm:text-[15px] text-slate-700 leading-snug font-normal">{item.text}</p>
                    </div>
                    <div className="shrink-0 ml-2 hidden sm:flex pt-1 scale-90 origin-top-right">
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="text-center mt-20 pb-12">
            <p className="text-[22px] sm:text-[26px] font-medium text-black mb-10 max-w-5xl mx-auto leading-snug">
              Every insight is designed to support better decisions, stronger execution, and sustainable business growth.
            </p>
            <button onClick={(e) => { e.preventDefault(); setActiveAppView('ASSESSMENT_PORTAL'); window.scrollTo(0, 0); }} className="bg-[#ffb800] hover:bg-[#f0ad00] text-black font-bold py-4 px-8 sm:py-5 sm:px-10 rounded-xl transition-all flex items-center justify-center gap-2 mx-auto text-[20px] sm:text-[22px]">
              Start Free Business Growth Assessment™
              <ArrowRight className="w-6 h-6 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-24 lg:py-32 bg-[#f8fafc] relative block w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px bg-[#c29d2f] w-12 sm:w-24"></div>
              <span className="text-[#c29d2f] font-bold text-[13px] tracking-[0.15em] uppercase">Choose Your Business Growth Journey</span>
              <div className="h-px bg-[#c29d2f] w-12 sm:w-24"></div>
            </div>
            <h2 className="text-[2.5rem] sm:text-[3rem] font-bold text-[#0f2142] mb-6 leading-tight tracking-tight">
              One Framework. Five Levels of Business Growth Support.
            </h2>
            <p className="text-[1.125rem] text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Start with a free assessment and progress to the level of support that best fits your business growth needs.
            </p>
          </div>

          {/* The 5 Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch mb-12">
            {/* Card 1 */}
            <div className="flex flex-col bg-white rounded-2xl border-2 border-[#c29d2f] overflow-hidden relative shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="p-6 lg:p-8 flex flex-col flex-grow items-center text-center relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#c29d2f] text-white font-bold text-[18px] flex items-center justify-center mb-3">01</div>
                <div className="text-[#c29d2f] text-[10px] font-bold tracking-widest mb-6 uppercase">Stage 01 &bull; Entry</div>
                
                <div className="mb-6 text-[#c29d2f]">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="12" y="8" width="24" height="32" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="18" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="18" y1="22" x2="30" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="18" y1="28" x2="24" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="34" cy="34" r="8" fill="white" stroke="currentColor" strokeWidth="2"/>
                    <path d="M30 34L33 37L38 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <h3 className="text-[20px] font-bold text-[#0f2142] mb-3 leading-tight min-h-[50px] flex items-center justify-center">Free Business Growth Assessment&trade;</h3>
                <p className="text-[13px] text-slate-600 mb-8 leading-snug">Know where your business stands before deciding where to grow.</p>
                
                <div className="mt-auto w-full">
                  <div className="text-[28px] font-black text-[#c29d2f] mb-2">FREE</div>
                  <div className="flex items-center justify-center gap-2 text-[10px] font-bold tracking-wider text-slate-500 mb-6 uppercase">
                    15&ndash;20 Minutes &bull; Online
                  </div>

                  <div className="space-y-3 text-left w-full mb-8">
                    {[
                      "Business Growth Score™",
                      "7-Pillar Assessment™",
                      "Growth Insights™",
                      "Priority Areas™",
                      "Executive Summary"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-[12px] text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full border border-[#c29d2f] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#c29d2f]" strokeWidth={2.5} />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <button onClick={() => { setActiveAppView('ASSESSMENT_PORTAL'); window.scrollTo(0, 0); }} className="w-full bg-[#c29d2f] hover:bg-[#a68628] text-white font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 text-[13px] uppercase tracking-wide shadow-sm hover:shadow-md">
                    Start Free Assessment <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden relative shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="p-6 lg:p-8 flex flex-col flex-grow items-center text-center relative z-10">
                <div className="w-10 h-10 rounded-full border border-[#0f2142] text-[#0f2142] font-bold text-[18px] flex items-center justify-center mb-3">02</div>
                <div className="text-slate-500 text-[10px] font-bold tracking-widest mb-6 uppercase">Stage 02 &bull; Discover</div>
                
                <div className="mb-6 text-[#0f2142]">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="14" y="10" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="20" cy="18" r="2" fill="currentColor"/>
                    <circle cx="24" cy="18" r="2" fill="currentColor"/>
                    <circle cx="28" cy="18" r="2" fill="currentColor"/>
                    <path d="M20 26L16 32H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="16" cy="38" r="3" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="24" cy="38" r="3" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="32" cy="38" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 42C12 40 14 38 16 38C18 38 20 40 20 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M20 42C20 40 22 38 24 38C26 38 28 40 28 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M28 42C28 40 30 38 32 38C34 38 36 40 36 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>

                <h3 className="text-[20px] font-bold text-[#0f2142] mb-3 leading-tight min-h-[50px] flex items-center justify-center">Business Growth Consultation&trade;</h3>
                <p className="text-[13px] text-slate-600 mb-8 leading-snug">A focused session to review your assessment and identify key growth opportunities.</p>
                
                <div className="mt-auto w-full">
                  <div className="text-[24px] font-black text-[#0f2142] mb-2">&#8377;1,499</div>
                  <div className="text-[10px] font-bold tracking-wider text-slate-500 mb-2 uppercase">One-Time</div>
                  <div className="flex items-center justify-center gap-1.5 text-[9px] font-bold tracking-wider text-slate-500 mb-6 uppercase">
                    <Clock className="w-3 h-3 shrink-0" /> 60 Minutes &bull; Same Week
                  </div>

                  <div className="space-y-3 text-left w-full mb-8">
                    {[
                      "Review Assessment Results",
                      "Executive Discussion",
                      "Key Growth Opportunities",
                      "Action Recommendations",
                      "Next-Step Plan"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-[12px] text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full border border-[#0f2142] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#0f2142]" strokeWidth={2.5} />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <button onClick={(e) => { e.preventDefault(); setActiveAppView('CONTACT_US'); window.scrollTo(0, 0); }} className="w-full bg-[#0f2142] hover:bg-[#1a3363] text-white font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 text-[13px] uppercase tracking-wide shadow-sm hover:shadow-md">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 (Most Popular - Dark) */}
            <div className="flex flex-col bg-[#0f2142] rounded-2xl border-none overflow-hidden relative shadow-2xl transform lg:scale-105 z-20 hover:-translate-y-1 transition-all duration-300 h-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#c29d2f] text-[#030816] text-[10px] font-bold uppercase tracking-widest py-1.5 px-6 rounded-b-lg flex items-center gap-1.5 z-30">
                <Star className="w-3 h-3 fill-[#030816]" /> Most Popular
              </div>
              <div className="p-6 lg:p-8 pt-10 flex flex-col flex-grow items-center text-center relative z-10">
                <div className="w-10 h-10 rounded-full bg-white text-[#0f2142] font-bold text-[18px] flex items-center justify-center mb-3">03</div>
                <div className="text-[#c29d2f] text-[10px] font-bold tracking-widest mb-6 uppercase">Stage 03 &bull; Diagnose</div>
                
                <div className="mb-6 text-[#c29d2f]">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="28" x2="22" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="16" y1="22" x2="26" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="16" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="28" cy="28" r="6" fill="#0f2142" stroke="currentColor" strokeWidth="2"/>
                    <line x1="32.5" y1="32.5" x2="38" y2="38" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>

                <h3 className="text-[22px] font-bold text-white mb-3 leading-tight min-h-[50px] flex items-center justify-center">Full Business Growth Diagnostic&trade;</h3>
                <p className="text-[13px] text-slate-300 mb-8 leading-snug">A comprehensive diagnostic across all key areas to uncover growth opportunities and build a winning roadmap.</p>
                
                <div className="mt-auto w-full">
                  <div className="text-[26px] font-black text-[#c29d2f] mb-2">&#8377;49,999 <span className="text-[12px] font-bold text-slate-300 tracking-wider uppercase">Starting</span></div>
                  <div className="flex items-center justify-center gap-1.5 text-[9px] font-bold tracking-wider text-slate-300 mb-6 uppercase">
                    <Calendar className="w-3 h-3 shrink-0" /> 14 Days &bull; On-Ground + Remote
                  </div>

                  <div className="space-y-3 text-left w-full mb-8">
                    {[
                      "Leadership & Team Interviews",
                      "Sales, Marketing & Pipeline Audit",
                      "Operations & Process Review",
                      "Financial & Performance Analysis",
                      "Business Growth Report™",
                      "Prioritised Growth Roadmap™"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-white font-medium">
                        <div className="w-4 h-4 rounded-full bg-[#c29d2f]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#c29d2f]" strokeWidth={3.5} />
                        </div>
                        <span className="text-[12px]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button onClick={(e) => { e.preventDefault(); setActiveAppView('CONTACT_US'); window.scrollTo(0, 0); }} className="w-full bg-[#c29d2f] hover:bg-[#a68628] text-[#030816] font-bold py-4 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 text-[14px] uppercase tracking-wide shadow-lg hover:shadow-xl">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden relative shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="p-6 lg:p-8 flex flex-col flex-grow items-center text-center relative z-10">
                <div className="w-10 h-10 rounded-full border border-[#0f2142] text-[#0f2142] font-bold text-[18px] flex items-center justify-center mb-3">04</div>
                <div className="text-slate-500 text-[10px] font-bold tracking-widest mb-6 uppercase">Stage 04 &bull; Scale</div>
                
                <div className="mb-6 text-[#0f2142]">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="12" y="28" width="6" height="12" rx="1" fill="currentColor"/>
                    <rect x="21" y="20" width="6" height="20" rx="1" fill="currentColor"/>
                    <rect x="30" y="12" width="6" height="28" rx="1" fill="currentColor"/>
                    <path d="M10 24L20 14L28 20L38 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M32 8H38V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <h3 className="text-[20px] font-bold text-[#0f2142] mb-3 leading-tight min-h-[50px] flex items-center justify-center">90-Day Business Growth Sprint&trade;</h3>
                <p className="text-[13px] text-slate-600 mb-8 leading-snug">We work with your team to implement the roadmap and drive measurable results.</p>
                
                <div className="mt-auto w-full">
                  <div className="text-[13px] font-black text-[#0f2142] mb-2 uppercase tracking-wider">Monthly Retainer</div>
                  <div className="flex items-center justify-center gap-1.5 text-[9px] font-bold tracking-wider text-slate-500 mb-6 uppercase">
                    <Clock className="w-3 h-3 shrink-0" /> 90 Days &bull; Weekly Reviews
                  </div>

                  <div className="space-y-3 text-left w-full mb-8">
                    {[
                      "Implementation of Priorities",
                      "Weekly Leadership Reviews",
                      "KPI & Performance Dashboard",
                      "Sales & Process Improvement",
                      "Leadership Coaching",
                      "Monthly Progress Reports"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-[12px] text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full border border-[#0f2142] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#0f2142]" strokeWidth={2.5} />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <button onClick={(e) => { e.preventDefault(); setActiveAppView('CONTACT_US'); window.scrollTo(0, 0); }} className="w-full bg-[#0f2142] hover:bg-[#1a3363] text-white font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 text-[13px] uppercase tracking-wide shadow-sm hover:shadow-md">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden relative shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="p-6 lg:p-8 flex flex-col flex-grow items-center text-center relative z-10">
                <div className="w-10 h-10 rounded-full border border-[#0f2142] text-[#0f2142] font-bold text-[18px] flex items-center justify-center mb-3">05</div>
                <div className="text-slate-500 text-[10px] font-bold tracking-widest mb-6 uppercase">Stage 05 &bull; Lead</div>
                
                <div className="mb-6 text-[#0f2142]">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="16" r="6" stroke="currentColor" strokeWidth="2"/>
                    <path d="M10 32C10 26.4772 14.4772 22 20 22H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M10 32H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M28 28L32 18L36 28L44 28L38 34L40 42L32 38L24 42L26 34L20 28H28Z" fill="white" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                </div>

                <h3 className="text-[20px] font-bold text-[#0f2142] mb-3 leading-tight min-h-[50px] flex items-center justify-center">Fractional Sales Head&trade;</h3>
                <p className="text-[13px] text-slate-600 mb-8 leading-snug">Strategic sales leadership without the cost of a full-time executive.</p>
                
                <div className="mt-auto w-full">
                  <div className="text-[13px] font-black text-[#0f2142] mb-2 uppercase tracking-wider">Monthly Retainer</div>
                  <div className="flex items-center justify-center gap-1 text-[8.5px] font-bold tracking-wider text-slate-500 mb-6 uppercase flex-wrap leading-tight">
                    2-3 Days / Month <br/> Min. 6 Months &bull; By Invitation
                  </div>

                  <div className="space-y-3 text-left w-full mb-8">
                    {[
                      "Revenue Strategy & Planning",
                      "Sales Team Leadership",
                      "Pipeline & Deal Reviews",
                      "Hiring & Coaching Support",
                      "Board & Management Reporting",
                      "Long-Term Sales Leadership"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-[12px] text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full border border-[#0f2142] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#0f2142]" strokeWidth={2.5} />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <button onClick={(e) => { e.preventDefault(); setActiveAppView('CONTACT_US'); window.scrollTo(0, 0); }} className="w-full bg-[#0f2142] hover:bg-[#1a3363] text-white font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 text-[13px] uppercase tracking-wide shadow-sm hover:shadow-md">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-[#fffdf7] border border-amber-100 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm mx-auto max-w-5xl mt-16 relative z-20">
            <div className="flex items-center gap-5 md:gap-6">
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#ffeaab] flex items-center justify-center text-amber-600 shadow-sm">
                <Rocket className="w-7 h-7" strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-[1.25rem] font-bold text-[#0f2142] mb-1">Not sure where to begin?</h4>
                <p className="text-[13px] sm:text-[14px] text-slate-600 leading-snug">
                  Start with the Free Business Growth Assessment™ <br className="hidden sm:block"/> and we'll recommend the right journey for your business.
                </p>
              </div>
            </div>
            <button 
              aria-label="Start Your Business Growth Assessment"
              onClick={() => { setActiveAppView('ASSESSMENT_PORTAL'); window.scrollTo(0, 0); }} 
              className="w-full md:w-auto shrink-0 bg-[#ffb800] hover:bg-[#f0ad00] text-black font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-[14px] uppercase tracking-wide shadow-sm active:scale-95"
            >
              Start Free Assessment <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 lg:py-28 relative block w-full overflow-hidden bg-[#fafcff]">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)] opacity-30 z-0 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Title Card */}
          <div className="max-w-[1000px] mx-auto mb-20 relative">
            {/* Drop shadow effects */}
            <div className="absolute inset-0 border-2 border-[#ffb800] rounded-[32px] translate-y-4 translate-x-0 bg-transparent"></div>
            <div className="absolute inset-0 bg-[#0f2142] rounded-[32px] translate-y-2 translate-x-0"></div>
            
            {/* Actual Card */}
            <div className="relative bg-white rounded-[32px] py-14 px-8 sm:px-16 text-center shadow-sm">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ffb800]"></div>
                <span className="text-[#ffb800] font-bold text-[12px] tracking-[0.2em] uppercase">Supporting Business Growth Across Diverse Industries</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#ffb800]"></div>
              </div>
              
              <h2 className="text-[2.25rem] sm:text-[3.25rem] font-bold text-[#0f2142] mb-6 leading-[1.1] tracking-tight uppercase">
                Proven Framework. Scalable Across<br className="hidden sm:block"/> Verticals.
              </h2>
              
              <p className="text-[1.125rem] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Tailored strategic frameworks designed to scale efficiency, optimize operations, and unlock maximum profitability across all major business verticals.
              </p>
            </div>
          </div>
          
          {/* 10 Industry Badges */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mb-20 max-w-6xl mx-auto">
            {[
              { title: "Manufacturing", desc: "Supply chain &\nfloor metrics" },
              { title: "Distribution", desc: "Logistics &\nmargin security" },
              { title: "Consumer\nProducts", desc: "Inventory &\nshelf velocity" },
              { title: "Education", desc: "Enrollment &\ngrowth mechanics" },
              { title: "Healthcare", desc: "Compliance &\nthroughput metrics" },
              { title: "Technology", desc: "MRR expansion &\nchurn optimization" },
              { title: "Real Estate", desc: "Asset velocity &\nyield planning" },
              { title: "FinTech", desc: "Transaction volume\n& risk metrics" },
              { title: "Professional\nServices", desc: "Utilization &\nbillable scale" },
              { title: "Startups &\nMSMEs", desc: "Product-market fit\n& funding scale" }
            ].map((ind, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 w-[150px] sm:w-[175px] flex flex-col items-center justify-center text-center shadow-[0_4px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-1">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-[#0f2142] mb-2 leading-tight whitespace-pre-line">{ind.title}</h4>
                <p className="text-[11.5px] sm:text-[12px] text-slate-500 font-medium leading-relaxed whitespace-pre-line">{ind.desc}</p>
              </div>
            ))}
          </div>
          
          {/* 5 Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              { 
                stat: "100+", 
                label: "Businesses Empowered", 
                desc: "Active platform deployments across global markets." 
              },
              { 
                stat: "15+", 
                label: "Industries Served", 
                desc: "Configured diagnostic contexts for diverse enterprise benchmarks." 
              },
              { 
                stat: "20–300%", 
                label: "Average Revenue Improvement", 
                desc: "Documented financial & bottleneck diagnostic improvements." 
              },
              { 
                stat: "7", 
                label: "Core Growth Pillars", 
                desc: "Comprehensive matrix indexing operating & delivery capability." 
              },
              { 
                stat: <><span className="text-[#ffb800]">AI-</span><br className="hidden lg:block"/><span className="text-[#ffb800]">Powered</span></>, 
                label: "Smarter Insights, Better Outcomes", 
                desc: "Predictive intelligence modeling bottlenecks before they cost you.",
                statClass: "!text-[36px] sm:!text-[42px] leading-[1.1]"
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#0f2142] rounded-[24px] p-6 sm:p-8 flex flex-col shadow-[0_10px_30px_-10px_rgba(15,33,66,0.5)]">
                <div className={`text-[40px] sm:text-[48px] font-black text-[#ffb800] mb-5 tracking-tight leading-none ${item.statClass || ''}`}>
                  {item.stat}
                </div>
                <div className="text-[11px] sm:text-[12px] font-bold text-white uppercase tracking-widest mb-16 sm:mb-20 leading-snug">
                  {item.label}
                </div>
                <div className="mt-auto">
                  <p className="text-[12px] sm:text-[13px] text-slate-300 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-20 lg:py-28 relative block w-full overflow-hidden bg-[#fafcff]">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)] opacity-30 z-0 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-sm border border-slate-200 relative">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px bg-[#ffb800] w-12 sm:w-16"></div>
              <span className="text-[#ffb800] font-bold text-[13px] tracking-[0.2em] uppercase">Meet The Founder</span>
              <div className="h-px bg-[#ffb800] w-12 sm:w-16"></div>
            </div>
            
            <h2 className="text-[2.5rem] sm:text-[3.25rem] font-bold text-[#0f2142] mb-3 leading-[1.1] text-center tracking-tight font-serif">
              Meet Your Growth Advisor
            </h2>
            <p className="text-[1.125rem] text-slate-500 mb-16 text-center max-w-3xl mx-auto">
              Practical Experience. Structured Thinking. Sustainable Business Growth.
            </p>

            <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
              {/* Left Col - Image */}
              <div className="w-full md:w-[320px] lg:w-[360px] shrink-0 relative">
                <div className="absolute inset-0 bg-[#ffb800] rounded-[24px] translate-x-4 translate-y-4"></div>
                <div className="relative aspect-[4/5] bg-slate-200 rounded-[24px] overflow-hidden">
                  <img src="/image.jpeg" alt="Founder of KRG ONE - Business Strategy and Growth Expert" className="absolute inset-0 w-full h-full object-cover object-top" loading="lazy" />
                </div>
              </div>

              {/* Right Col - Content */}
              <div className="flex-1 flex flex-col justify-center py-4">
                <h3 className="text-[2.25rem] md:text-[2.75rem] font-bold text-[#0f2142] mb-1 leading-tight font-serif tracking-tight">Gajendra Kumar Sharma</h3>
                <h4 className="text-[#ffb800] text-[1.125rem] md:text-[1.25rem] font-bold mb-6">Founder & Business Growth Advisor</h4>
                
                <p className="text-slate-700 text-[15px] sm:text-[1.05rem] leading-relaxed mb-10 font-medium">
                  With over 20 years of experience in business development, sales leadership, revenue growth, and business transformation, I help businesses identify growth opportunities, solve critical challenges, and build scalable systems through the <strong className="text-black font-bold">KRG ONE Growth OS™</strong>.
                </p>

                {/* 5 Icons Row */}
                <div className="flex flex-wrap md:flex-nowrap gap-4 sm:gap-6 justify-between mb-12 relative">
                  {/* Connecting line */}
                  <div className="absolute top-[28px] left-8 right-8 h-px bg-[#ffb800] opacity-30 z-0 hidden md:block"></div>
                  
                  {[
                    { icon: TrendingUpIcon, label: "20+ Years\nBusiness Growth\nExperience" },
                    { icon: Target, label: "Revenue &\nSales Strategy" },
                    { icon: Settings, label: "Growth OS™\nCreator" },
                    { icon: Cpu, label: "AI-Enabled\nBusiness Consulting" },
                    { icon: ShieldCheck, label: "NDA-Based\nConfidential\nEngagements" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center w-[90px] relative z-10 group">
                      <div className="w-14 h-14 rounded-full bg-[#0f2142] flex items-center justify-center text-[#ffb800] mb-3 shrink-0 shadow-lg ring-8 ring-white group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="text-[10.5px] font-bold text-slate-800 leading-[1.3] whitespace-pre-line">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="relative bg-[#fafcff] border border-slate-200 rounded-xl p-8 pl-12 mb-4 shadow-sm">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ffb800] rounded-l-xl"></div>
                  <div className="absolute top-8 left-4 text-[#ffb800] opacity-80">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                    </svg>
                  </div>
                  <p className="text-[1.125rem] sm:text-[1.2rem] italic text-slate-800 leading-relaxed font-serif">
                    Business growth is not about working harder—it's about building better systems, making better decisions, and executing consistently.
                  </p>
                </div>

                {/* Button */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-28 relative block w-full overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px bg-[#ffb800] w-12 sm:w-16"></div>
              <span className="text-[#ffb800] font-bold text-[13px] tracking-[0.15em] uppercase">Frequently Asked Questions</span>
              <div className="h-px bg-[#ffb800] w-12 sm:w-16"></div>
            </div>
            
            <h2 className="text-[2.75rem] sm:text-[3.5rem] font-bold text-[#0f2142] mb-4 leading-tight font-serif tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[1.125rem] text-slate-500 max-w-2xl mx-auto font-medium">
              Everything you need to know before working with KRG ONE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
            {[
              {
                num: "01",
                icon: Gift,
                q: "Is the Business Growth Assessment™ really free?",
                a: "Yes. The assessment is completely free and helps you understand your current business growth position, key opportunities, and priority improvement areas."
              },
              {
                num: "02",
                icon: Star,
                q: "How is KRG ONE different from traditional consulting firms?",
                a: "KRG ONE combines practical business experience, the proprietary Growth OS™, AI-enabled insights, and hands-on implementation support to deliver measurable business outcomes."
              },
              {
                num: "03",
                icon: Building2,
                q: "Which businesses do you support?",
                a: "We support businesses across Manufacturing, Distribution, Consumer Products, Education, Healthcare, Technology, Real Estate, FinTech, Professional Services, and Startups & MSMEs."
              },
              {
                num: "04",
                icon: Lock,
                q: "Is my business information kept confidential?",
                a: "Absolutely. Every client engagement is protected through a professional Non-Disclosure Agreement (NDA). Your business information is never shared without written permission."
              },
              {
                num: "05",
                icon: ClipboardList,
                q: "What happens after I complete the Business Growth Assessment™?",
                a: "You'll receive your Business Growth Score™, insights across the Growth Pillars™, and recommendations. You can then choose to book a Business Growth Consultation™ to review the results."
              },
              {
                num: "06",
                icon: Clock,
                q: "How long does the assessment take and when do I get results?",
                a: "The Business Growth Assessment™ takes only 5–7 minutes to complete online. Immediately after submission, you will receive your Business Growth Score™ and personalized Business Health Dashboard™."
              }
            ].map((faq, i) => (
              <div 
                key={i} 
                className="bg-white border border-slate-100 rounded-[20px] p-6 sm:p-8 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.08)] transition-all flex gap-5 sm:gap-6 relative group overflow-hidden cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="w-[80px] h-[80px] rounded-full bg-[#fffdf7] border-2 border-[#ffeaab] flex items-center justify-center text-[#ffb800] shrink-0 mt-4 relative z-0 transition-transform duration-300 group-hover:scale-105">
                  <faq.icon className="w-10 h-10 stroke-[1.5]" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="text-[1.125rem] sm:text-[1.2rem] font-bold text-[#0f2142] leading-snug tracking-tight pr-4">
                      {faq.q}
                    </h4>
                    <ChevronDown className={`w-5 h-5 text-[#0f2142] shrink-0 mt-1 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} />
                  </div>
                  <div className={`grid transition-all duration-300 ease-in-out ${openFaq === i ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed font-medium overflow-hidden">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Confidentiality Banner */}
          <div className="max-w-5xl mx-auto bg-[#fffcf5] border border-[#ffeaab] rounded-[16px] p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="flex items-center gap-4 shrink-0 md:border-r border-amber-200/50 md:pr-6">
              <div className="w-10 h-10 rounded-full bg-[#0f2142] flex items-center justify-center text-white shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-[15px] font-bold text-[#0f2142]">Confidentiality Commitment</h4>
            </div>
            <div className="text-[13.5px] sm:text-[14px] text-slate-700 leading-relaxed font-medium">
              Every client engagement is protected through a professional Non-Disclosure Agreement (NDA).<br className="hidden md:block"/>
              Client information and strategic discussions remain strictly confidential unless written permission is provided.
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 lg:py-32 bg-[#f8fafc] text-center relative overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f2142 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          <div className="space-y-4">
            <span className="text-[#d4af37] text-xs sm:text-sm font-black uppercase tracking-[0.2em] block">
              CONTINUE YOUR BUSINESS GROWTH JOURNEY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f2142] tracking-tight font-serif leading-tight">
              Free Business Growth Assessment™
            </h2>
            <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Discover how your business performs across all seven pillars and receive your personalized Business Health Dashboard™.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6">
            <button
              onClick={() => setActiveAppView('ASSESSMENT_PORTAL')}
              className="w-full sm:w-auto bg-[#ffb800] hover:bg-[#e6a600] text-[#0f2142] font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-[0_4px_12px_-4px_rgba(255,184,0,0.5)] transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>Take Free Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveAppView('CONTACT_US')}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#0f2142] font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-sm transition-all active:scale-95 border border-slate-200 cursor-pointer flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      </section>

      <SharedFooter onNavigate={(view) => { setActiveAppView(view as any); window.scrollTo(0, 0); }} />
        </>
      ) : activeAppView === 'CONTACT_US' ? (
        <ContactUsPage 
          onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }} 
          onLaunchAssessment={() => { setActiveAppView('ASSESSMENT_PORTAL'); window.scrollTo(0, 0); }} 
        />
      ) : activeAppView === 'ABOUT_US' ? (
        <AboutUsPage 
          onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }} 
          onLaunchAssessment={() => { setActiveAppView('ASSESSMENT_PORTAL'); window.scrollTo(0, 0); }} 
          onContactUs={() => { setActiveAppView('CONTACT_US'); window.scrollTo(0, 0); }}
        />
      ) : activeAppView === 'MEET_FOUNDER' ? (
        <MeetTheFounderPage 
          onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }} 
          onLaunchAssessment={() => { setActiveAppView('ASSESSMENT_PORTAL'); window.scrollTo(0, 0); }} 
          onContactUs={() => { setActiveAppView('CONTACT_US'); window.scrollTo(0, 0); }}
        />
      ) : activeAppView === 'OUR_METHODOLOGY' ? (
        <OurMethodologyPage 
          onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }} 
          onLaunchAssessment={() => { setActiveAppView('ASSESSMENT_PORTAL'); window.scrollTo(0, 0); }} 
          onContactUs={() => { setActiveAppView('CONTACT_US'); window.scrollTo(0, 0); }}
        />
      ) : activeAppView === 'GROWTH_OS_OVERVIEW' ? (
        <GrowthOSOverviewPage 
          onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }} 
          onLaunchAssessment={() => { setActiveAppView('ASSESSMENT_PORTAL'); window.scrollTo(0, 0); }} 
          onContactUs={() => { setActiveAppView('CONTACT_US'); window.scrollTo(0, 0); }}
        />
      ) : activeAppView === 'SEVEN_PILLARS' ? (
        <SevenGrowthPillarsPage 
          onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }} 
          onLaunchAssessment={() => { setActiveAppView('ASSESSMENT_PORTAL'); window.scrollTo(0, 0); }} 
          onContactUs={() => { setActiveAppView('CONTACT_US'); window.scrollTo(0, 0); }}
        onNavigate={(view) => { setActiveAppView(view as any); window.scrollTo(0, 0); }}
        />
      ) : activeAppView === 'BUSINESS_HEALTH_DASHBOARD' ? (
        <BusinessHealthDashboardPage 
          onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }} 
          onLaunchAssessment={() => { setActiveAppView('ASSESSMENT_PORTAL'); window.scrollTo(0, 0); }} 
          onContactUs={() => { setActiveAppView('CONTACT_US'); window.scrollTo(0, 0); }}
          onExploreInsights={() => { setActiveAppView('EXECUTIVE_INSIGHTS'); window.scrollTo(0, 0); }}
        />
      ) : activeAppView === 'EXECUTIVE_INSIGHTS' ? (
        <ExecutiveBusinessInsightsPage 
          onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }} 
          onLaunchAssessment={() => { setActiveAppView('ASSESSMENT_PORTAL'); window.scrollTo(0, 0); }} 
          onContactUs={() => { setActiveAppView('CONTACT_US'); window.scrollTo(0, 0); }}
        />
      ) : activeAppView === 'BUSINESS_GROWTH_CONSULTATION' ? (
        <BusinessGrowthConsultationPage 
          onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }} 
          onContactUs={() => { setActiveAppView('CONTACT_US'); window.scrollTo(0, 0); }}
        onNavigate={(view) => { setActiveAppView(view as any); window.scrollTo(0, 0); }}
        />
      ) : activeAppView === 'FULL_BUSINESS_DIAGNOSTIC' ? (
        <FullBusinessDiagnosticPage 
          onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }} 
          onContactUs={() => { setActiveAppView('CONTACT_US'); window.scrollTo(0, 0); }}
        onNavigate={(view) => { setActiveAppView(view as any); window.scrollTo(0, 0); }}
        />
      ) : activeAppView === 'BUSINESS_GROWTH_SPRINT' ? (
        <BusinessGrowthSprintPage 
          onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }} 
          onContactUs={() => { setActiveAppView('CONTACT_US'); window.scrollTo(0, 0); }}
        onNavigate={(view) => { setActiveAppView(view as any); window.scrollTo(0, 0); }}
        />
      ) : activeAppView === 'FRACTIONAL_SALES_HEAD' ? (
        <FractionalSalesHeadPage 
          onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }} 
          onContactUs={() => { setActiveAppView('CONTACT_US'); window.scrollTo(0, 0); }}
        onNavigate={(view) => { setActiveAppView(view as any); window.scrollTo(0, 0); }}
        />
      ) : activeAppView === 'PRIVACY_POLICY' ? (
        <PrivacyPolicyPage 
          onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }}
        />
            ) : activeAppView === 'TERMS_AND_CONDITIONS' ? (
        <TermsAndConditionsPage 
          onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }}
        />
            ) : activeAppView === 'DISCLAIMER' ? (
        <DisclaimerPage 
          onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }}
        />
            ) : activeAppView === 'REFUND_POLICY' ? (
        <RefundPolicyPage 
          onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }}
        />
            ) : activeAppView === 'COOKIE_POLICY' ? (
        <CookiePolicyPage 
          onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }}
        />
      ) : (
        <AssessmentEngine onReturnHome={() => { setActiveAppView('LANDING'); window.scrollTo(0, 0); }} />
      )}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
