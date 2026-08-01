import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, 
  Send, ArrowLeft, Building2, User, Sparkles, Globe, Lock, 
  HelpCircle, MessageSquare, Copy, Check, ChevronDown, ChevronUp, AlertCircle
} from 'lucide-react';

interface ContactUsPageProps {
  onReturnHome?: () => void;
  onLaunchAssessment?: () => void;
}

export function ContactUsPage({ onReturnHome, onLaunchAssessment }: ContactUsPageProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    role: '',
    companyName: '',
    industry: '',
    email: '',
    mobileNumber: '',
    revenue: '',
    engagementFocus: '',
    message: '',
    requestNda: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('enquiry.krgone@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Network error occurred. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "How quickly will a KRG ONE Managing Partner respond to my inquiry?",
      a: "Our Executive Advisory Desk enforces a strict 4-to-12 business hour SLA. Once your form is submitted, a Senior Consultant reviews your corporate parameters and contacts you directly via phone or email to schedule an executive briefing."
    },
    {
      q: "Is our business data and financial metrics protected by an NDA?",
      a: "Yes, 100%. Every client engagement is protected under a legally binding Non-Disclosure Agreement (NDA). All shared metrics, operational bottlenecks, and financial disclosures remain strictly confidential."
    },
    {
      q: "Can initial strategy calls be held virtually or on-site?",
      a: "We offer both options. Initial diagnostic briefings are typically conducted via secure 1-on-1 Google Meet video calls. For enterprise clients requiring deep-dive operational audits, on-site partner visits can be arranged across India and international regions."
    },
    {
      q: "What is the difference between a Partner Strategy Call and the 90-Day Growth Sprint?",
      a: "The Partner Strategy Call is a 45-60 minute 1-on-1 session to diagnose high-level friction points and review your Growth Score. The 90-Day Growth Sprint is an intensive, hands-on consulting engagement where KRG ONE partners directly deploy SOP playbooks, CRM workflows, and cash-flow systems inside your firm."
    },
    {
      q: "What should I prepare prior to our initial consultation?",
      a: "We recommend completing our 3-minute Free Business Growth Assessment beforehand. This auto-generates a 15-page diagnostic dossier with your 7-Pillar scores, providing a concrete baseline for our discussion."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-blue-600/20 selection:text-blue-900">
      
      {/* TOP HEADER NAVIGATION BAR */}
      <div className="sticky top-[90px] lg:top-[108px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onReturnHome}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-600 uppercase tracking-wider transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
          
          <div className="flex items-center gap-8 sm:p-10 text-xs font-medium text-slate-600">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Advisory Desk Online (SLA: 4-12 hrs)
            </span>
            {onLaunchAssessment && (
              <button
                onClick={onLaunchAssessment}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-1.5 rounded-full text-[11px] tracking-wider uppercase transition-all shadow-sm cursor-pointer"
              >
                Free Diagnostic Assessment
              </button>
            )}
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-blue-50/70 via-slate-50 to-[#f8fafc] border-b border-slate-200">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 0.75px, transparent 0.75px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200/80 px-4 py-1.5 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900">Enterprise Advisory & Managing Partner Desk</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 font-serif">
            Connect With Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-800 to-[#b45309]">Senior Partners</span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-10">
            Whether you are seeking strategic turnaround advice, bespoke 90-Day Business Growth Sprints, or full-scale SOP systemization, KRG ONE managing partners engage directly with MSME founders and enterprise executives.
          </p>

          {/* SLA & NDA BADGES ROW */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:p-10 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-2 rounded-xl shadow-xs">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>100% Protected by Mutual NDA</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-2 rounded-xl shadow-xs">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Guaranteed 4-12 Hr Response Time</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-2 rounded-xl shadow-xs">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>HQ: Jaipur, Rajasthan, India</span>
            </div>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: CONTACT CHANNELS & HQ DETAILS (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Partner Hotline Card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl group transition-all duration-300">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#d4af37] to-[#8a6a12]"></div>
              
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-white/10 border border-white/20 rounded-xl text-[#d4af37]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37] block mb-1">Direct Advisory Hotline</span>
                  <h3 className="text-xl font-bold text-white mb-1">+91 7300300330</h3>
                  <p className="text-xs text-slate-300 mb-4">Monday – Saturday: 9:00 AM – 7:00 PM IST</p>
                  
                  <div className="flex flex-wrap gap-2">
                    <a 
                      href="tel:+917300300330" 
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c29d2f] to-[#e5c158] text-[#030816] font-bold text-xs px-4 py-2 rounded-lg hover:brightness-110 transition-all shadow-xs"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Hotline Now</span>
                    </a>
                    <a 
                      href="https://wa.me/917300300330?text=Hello%20KRG%20ONE%20Advisory%20Team%2C%20I%20would%20like%20to%20inquire%20about%20a%20business%20growth%20consultation." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2 rounded-lg transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Email Desk Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-blue-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 block mb-1">Official Advisory Email</span>
                  <h3 className="text-lg font-bold text-slate-900 truncate">enquiry.krgone@gmail.com</h3>
                  <p className="text-xs text-slate-500 mt-1">Direct inbox monitored by senior consulting partners.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <a 
                  href="mailto:enquiry.krgone@gmail.com"
                  className="flex-1 text-center bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 font-bold text-xs py-2.5 rounded-lg transition-colors"
                >
                  Compose Mail
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Corporate HQ & Regional Presence */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-amber-50 border border-amber-100 rounded-xl text-amber-700">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block mb-1">Corporate Advisory HQ</span>
                  <h3 className="text-lg font-bold text-slate-900">Jaipur, Rajasthan, India</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    10/B, Gokuldham Apartment, Gokul Nagar,<br />
                    Gokulpura, Kalwar Road, Jaipur opp. Powerhouse - 302012
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex justify-between items-center">
                  <span>Advisory Portal:</span>
                  <a href="https://www.krgone.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">
                    www.krgone.vercel.app
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <span>Client Onboarding SLA:</span>
                  <span className="text-emerald-700 font-semibold">24 Hours Guaranteed</span>
                </div>
              </div>
            </div>

            {/* NDA Commitment Guarantee Card */}
            <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-8 sm:p-10 shadow-xs">
              <div className="flex gap-3">
                <Lock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">Strict Non-Disclosure Commitment</h4>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    Every strategic review, financial disclosure, and operational audit is strictly protected by a formal Non-Disclosure Agreement (NDA). Your business confidentiality is our highest priority.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: EXECUTIVE INQUIRY FORM (7 COLS) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 sm:p-10 shadow-xl relative">
            
            <div className="mb-8 border-b border-slate-100 pb-6">
              <div className="inline-block bg-blue-50 border border-blue-200 text-blue-800 font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded-md mb-2">
                Executive Engagement Form
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif mb-2">
                Executive Advisory Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Fill out the strategic profile parameters below. Our senior partner desk will review your details and issue a response within 4-12 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 border border-emerald-300 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block mb-2">
                    Inquiry Successfully Dispatched
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                    We have received your request for <strong>{formData.companyName}</strong> regarding <strong>"{formData.engagementFocus}"</strong>.
                  </p>
                </div>

                <div className="bg-white border border-emerald-200 rounded-xl p-4 text-left text-xs space-y-2 text-slate-700 shadow-xs">
                  <div className="text-emerald-800 font-bold uppercase tracking-wider mb-1">
                    ⚡ OUR TEAM WILL GET BACK TO YOU SOON
                  </div>
                  <p>A Senior Managing Partner from KRG ONE will contact you shortly via email (<strong>{formData.email}</strong>) or phone (<strong>{formData.mobileNumber}</strong>).</p>
                  <p className="text-slate-500 pt-1">An official confirmation email has been dispatched to your inbox.</p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-6 py-3 rounded-xl transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                  {onLaunchAssessment && (
                    <button
                      onClick={onLaunchAssessment}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all cursor-pointer shadow-md"
                    >
                      Take Diagnostic Assessment
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMessage && (
                  <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-xs text-rose-800 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* ROW 1: Name & Executive Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder=""
                        className="w-full bg-slate-50/80 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900 rounded-xl pl-10 pr-4 py-3 text-sm placeholder-slate-400 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Role / Executive Title <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-slate-50/80 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
                      required
                    >
                      <option value="" disabled>Select your role...</option>
                      <option value="Managing Director / Founder">Managing Director / Founder</option>
                      <option value="CEO / Chief Executive">CEO / Chief Executive</option>
                      <option value="COO / Head of Operations">COO / Head of Operations</option>
                      <option value="VP of Sales & Growth">VP of Sales & Growth</option>
                      <option value="CFO / Finance Director">CFO / Finance Director</option>
                      <option value="General Manager">General Manager</option>
                      <option value="Partner / Board Member">Partner / Board Member</option>
                    </select>
                  </div>
                </div>

                {/* ROW 2: Company & Industry */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Company Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder=""
                        className="w-full bg-slate-50/80 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900 rounded-xl pl-10 pr-4 py-3 text-sm placeholder-slate-400 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Industry Vertical <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full bg-slate-50/80 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
                      required
                    >
                      <option value="" disabled>Select industry vertical...</option>
                      <option value="Management Consulting">Management Consulting</option>
                      <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                      <option value="Distribution & Supply Chain">Distribution & Supply Chain</option>
                      <option value="Consumer Products & FMCG">Consumer Products & FMCG</option>
                      <option value="Technology & IT Services">Technology & IT Services</option>
                      <option value="Education & EdTech">Education & EdTech</option>
                      <option value="Healthcare & Pharma">Healthcare & Pharma</option>
                      <option value="Real Estate & Infrastructure">Real Estate & Infrastructure</option>
                      <option value="FinTech & Financial Services">FinTech & Financial Services</option>
                      <option value="Professional Services">Professional Services</option>
                    </select>
                  </div>
                </div>

                {/* ROW 3: Email & Mobile Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Corporate Email Address <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder=""
                        className="w-full bg-slate-50/80 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900 rounded-xl pl-10 pr-4 py-3 text-sm placeholder-slate-400 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Mobile / Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        placeholder=""
                        className="w-full bg-slate-50/80 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900 rounded-xl pl-10 pr-4 py-3 text-sm placeholder-slate-400 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* ROW 4: Annual Revenue & Engagement Focus */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Annual Revenue Scale
                    </label>
                    <select
                      value={formData.revenue}
                      onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                      className="w-full bg-slate-50/80 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
                      required
                    >
                      <option value="" disabled>Select revenue range...</option>
                      <option value="Below ₹1 Crore">Below ₹1 Crore</option>
                      <option value="₹1 Crore - ₹5 Crores">₹1 Crore - ₹5 Crores</option>
                      <option value="₹5 Crores - ₹25 Crores">₹5 Crores - ₹25 Crores</option>
                      <option value="₹25 Crores - ₹100 Crores">₹25 Crores - ₹100 Crores</option>
                      <option value="Above ₹100 Crores">Above ₹100 Crores</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Primary Engagement Focus
                    </label>
                    <select
                      value={formData.engagementFocus}
                      onChange={(e) => setFormData({ ...formData, engagementFocus: e.target.value })}
                      className="w-full bg-blue-50/50 border border-blue-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-blue-900 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all font-bold"
                      required
                    >
                      <option value="" disabled>Select engagement focus...</option>
                      <option value="1-on-1 Partner Strategy Review Call">1-on-1 Partner Strategy Review Call</option>
                      <option value="Full Business Growth Diagnostic™">Full Business Growth Diagnostic™</option>
                      <option value="90-Day Business Growth Sprint™">90-Day Business Growth Sprint™</option>
                      <option value="Bespoke SOP & Workflow Systemization">Bespoke SOP & Workflow Systemization</option>
                      <option value="Fractional Sales & Growth Leadership">Fractional Sales & Growth Leadership</option>
                      <option value="General Corporate Advisory Inquiry">General Corporate Advisory Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* ROW 5: Strategic Message / Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Primary Strategic Challenge / Inquiry Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder=""
                    className="w-full bg-slate-50/80 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900 rounded-xl p-4 text-sm placeholder-slate-400 focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* ROW 6: NDA Checkbox */}
                <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-4 rounded-xl">
                  <input
                    type="checkbox"
                    id="ndaCheck"
                    checked={formData.requestNda}
                    onChange={(e) => setFormData({ ...formData, requestNda: e.target.checked })}
                    className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
                  />
                  <label htmlFor="ndaCheck" className="text-xs text-slate-700 cursor-pointer select-none">
                    <strong className="text-slate-900">Request Mutual NDA Execution:</strong> Issue a formal Non-Disclosure Agreement prior to our preliminary strategy call.
                  </label>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-sm py-4 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 active:scale-[0.99] transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Dispatching Inquiry to Partner Desk...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Executive Advisory Request</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-500 font-normal">
                  Protected by KRG ONE Enterprise Security & Confidentiality Framework.
                </p>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-slate-100/80 border-t border-b border-slate-200/80 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-2">Frequently Asked Questions</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">Executive Advisory FAQ</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all shadow-xs hover:border-blue-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-5 sm:p-8 sm:p-10 flex items-center justify-between gap-8 sm:p-10 focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    {faq.q}
                  </span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>

                {openFaq === idx && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100 mt-2 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CALLOUT */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-serif mb-3">Prefer an Immediate Business Growth Audit?</h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 font-normal">
            Take our 3-minute diagnostic assessment to receive a customized 15-page PDF Dossier in your inbox before your call.
          </p>
          {onLaunchAssessment && (
            <button
              onClick={onLaunchAssessment}
              className="bg-gradient-to-r from-[#c29d2f] to-[#e5c158] text-[#030816] font-extrabold text-xs px-8 py-3.5 rounded-full tracking-wider uppercase hover:brightness-110 transition-all shadow-lg cursor-pointer"
            >
              Launch Free Growth Assessment
            </button>
          )}
        </div>
      </section>

    </div>
  );
}
