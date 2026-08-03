import React, { useState } from 'react';
import { 
  Cpu, Bot, Globe, ShoppingCart, Workflow, Layout, Smartphone, TrendingUp, 
  CheckCircle, ArrowRight, ShieldCheck, Zap, Layers, Users, Clock, Mail, 
  Phone, MapPin, ChevronDown, MessageSquare, Database, Code, Sparkles, 
  Send, ArrowLeft, Building2, HeartPulse, GraduationCap, Store, Hotel, 
  Building, HardHat, Briefcase, Rocket, Factory, Check, X, Calendar, ArrowUp
} from 'lucide-react';

interface TechnologiesPageProps {
  onBackToGateway: () => void;
  onNavigateToConsulting?: () => void;
}

export function TechnologiesPage({ onBackToGateway, onNavigateToConsulting }: TechnologiesPageProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'industries' | 'about' | 'process' | 'tech' | 'faq' | 'contact'>('home');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  const [selectedServiceFilter, setSelectedServiceFilter] = useState<string>('all');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const triggerAIAssistant = (initialQuery?: string) => {
    window.dispatchEvent(new CustomEvent('open-krgone-ai-assistant', { detail: { initialQuery } }));
  };

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceNeeded: 'AI Solutions',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleFormSubmit = async (e: React.FormEvent, formType: string = 'Direct Inquiry') => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/technologies/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formType
        })
      });

      const result = await response.json();
      if (result.success) {
        setContactFormSubmitted(true);
        setTimeout(() => {
          setContactFormSubmitted(false);
          setIsConsultationModalOpen(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            serviceNeeded: 'AI Solutions',
            message: ''
          });
        }, 5000);
      } else {
        setSubmitError(result.error || 'Failed to submit inquiry. Please try again or call us at +91 7300300330.');
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setSubmitError('Network error. Please try again or email us directly at support.krgone@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // FAQs Data (10 Professional FAQs)
  const faqs = [
    {
      q: "How is KRGONE Technologies different from a standard web development agency?",
      a: "KRGONE Technologies is the technology division of KRGONE Business Transformation Group. Unlike traditional web dev agencies that focus purely on code or design, we combine 20+ years of enterprise business advisory experience with AI-powered engineering. Every digital solution we build is engineered specifically to drive measurable revenue growth, operational efficiency, and scalable business processes."
    },
    {
      q: "What types of AI solutions can KRGONE Technologies build for my business?",
      a: "We engineer custom AI Chatbots, AI Customer Support agents, AI Business Assistants, Internal Knowledge Base search tools, AI Voice Assistants, Document Processing Automation, and predictive business analytics tailored to your company's workflows."
    },
    {
      q: "How long does it take to develop a custom website or business application?",
      a: "By leveraging AI-assisted development tools and modular architecture, we deliver high-performance corporate websites in 10-14 days and custom business applications or automation pipelines in 3-5 weeks."
    },
    {
      q: "Can you integrate AI automation with our existing software and CRM systems?",
      a: "Yes. We specialize in custom API integrations and workflow automation connecting your website, WhatsApp, CRM (HubSpot, Salesforce, Zoho), ERP, email platforms, and payment gateways into a seamless automated ecosystem."
    },
    {
      q: "Do you provide post-launch maintenance, hosting, and security support?",
      a: "Absolutely. We offer long-term technology partnership plans including 24/7 uptime monitoring, security updates, feature enhancements, hosting management, and continuous optimization."
    },
    {
      q: "How does AI-powered development reduce costs for my organization?",
      a: "AI tools accelerate our coding, testing, and UI generation cycles by up to 60%, allowing us to deliver enterprise-grade architecture at a fraction of the cost and timeline of traditional software consultancies."
    },
    {
      q: "Will our business data be secure when using AI solutions?",
      a: "Yes. All AI models and databases we implement follow strict enterprise data privacy standards with end-to-end encryption, strict access controls, and custom non-disclosure agreements (NDAs)."
    },
    {
      q: "Can you redesign and modernize our existing slow or outdated corporate website?",
      a: "Yes. We perform complete digital revamps—upgrading legacy sites to fast, mobile-responsive, SEO-optimized, React/Next.js architectures equipped with lead conversion tools."
    },
    {
      q: "What industries do you specialize in serving?",
      a: "We serve Manufacturing, Healthcare, Education, Retail & E-Commerce, Hospitality, Real Estate, Construction, Professional Services, High-Growth Startups, and MSMEs across India and globally."
    },
    {
      q: "What is the process to get started with KRGONE Technologies?",
      a: "You can schedule a free 30-minute discovery consultation. We analyze your business requirements, define a clear technology roadmap, provide transparent pricing, and launch development promptly."
    }
  ];

  // Services List
  const services = [
    {
      id: "web-dev",
      title: "Business Website Development",
      category: "web",
      icon: Globe,
      tagline: "High-performance corporate web platforms built for authority & lead conversion.",
      features: [
        "Corporate Websites",
        "Business Websites",
        "Landing Pages",
        "Portfolio Websites",
        "Website Redesign",
        "Website Maintenance"
      ]
    },
    {
      id: "ecommerce",
      title: "E-Commerce Solutions",
      category: "web",
      icon: ShoppingCart,
      tagline: "Scalable online stores engineered for high conversion rates & automated fulfillment.",
      features: [
        "Online Stores",
        "Product Catalog Management",
        "Payment Gateway Integration",
        "Real-Time Inventory Systems",
        "Order Management Workflows"
      ]
    },
    {
      id: "ai-solutions",
      title: "AI Solutions",
      category: "ai",
      icon: Bot,
      tagline: "Intelligent AI agents & knowledge automation that transform customer experience.",
      features: [
        "24/7 AI Chatbots",
        "AI Customer Support Agents",
        "AI Business Assistant",
        "Internal AI Knowledge Base",
        "AI Voice Assistant Integration",
        "AI Document Automation"
      ]
    },
    {
      id: "automation",
      title: "Business Automation",
      category: "automation",
      icon: Workflow,
      tagline: "Streamline repetitive tasks, sales pipelines, and customer follow-ups automatically.",
      features: [
        "CRM & Pipeline Automation",
        "Lead Capture & Scoring",
        "Workflow Automation",
        "WhatsApp Business Automation",
        "Appointment Scheduling",
        "Automated Digital Forms"
      ]
    },
    {
      id: "custom-apps",
      title: "Custom Business Applications",
      category: "apps",
      icon: Layout,
      tagline: "Tailored web applications, client portals, and dashboards built for operational control.",
      features: [
        "Executive Business Dashboards",
        "Customer Portals",
        "Employee & Operations Portals",
        "Vendor Management Systems",
        "Custom Booking Engines",
        "Enterprise Management Software"
      ]
    },
    {
      id: "mobile-apps",
      title: "Mobile App Development",
      category: "apps",
      icon: Smartphone,
      tagline: "Native and cross-platform mobile apps for iOS and Android.",
      features: [
        "Android Mobile Apps",
        "iOS Mobile Apps",
        "Cross-Platform Apps (React Native/Flutter)",
        "Internal Business Apps",
        "Customer Experience Apps"
      ]
    }
  ];

  // Tech Stack Data
  const techStack = [
    { name: "HTML5 / CSS3", category: "Frontend", icon: "🌐" },
    { name: "JavaScript (ES6+)", category: "Frontend", icon: "⚡" },
    { name: "React 18", category: "Frontend", icon: "⚛️" },
    { name: "Next.js", category: "Frontend", icon: "▲" },
    { name: "Tailwind CSS", category: "Frontend", icon: "🎨" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "Python", category: "Backend / AI", icon: "🐍" },
    { name: "Firebase", category: "Database", icon: "🔥" },
    { name: "Supabase", category: "Database", icon: "⚡" },
    { name: "OpenAI API", category: "AI Models", icon: "🤖" },
    { name: "Google AI (Gemini)", category: "AI Models", icon: "✨" },
    { name: "Claude AI", category: "AI Models", icon: "🧠" },
    { name: "Hostinger / Cloud Run", category: "DevOps", icon: "☁️" },
    { name: "GitHub / CI/CD", category: "DevOps", icon: "🐙" }
  ];

  // Industries
  const industries = [
    { name: "Manufacturing", icon: Factory, desc: "Process automation, inventory control & ERP integration." },
    { name: "Healthcare", icon: HeartPulse, desc: "Patient portals, appointment booking & secure medical CRM." },
    { name: "Education", icon: GraduationCap, desc: "LMS platforms, student management & digital enrollment." },
    { name: "Retail & E-Commerce", icon: Store, desc: "D2C online stores, multi-channel inventory & payment flows." },
    { name: "Hospitality", icon: Hotel, desc: "Direct booking engines, guest communication & concierge AI." },
    { name: "Real Estate", icon: Building, desc: "Property listing portals, CRM automation & virtual tours." },
    { name: "Construction", icon: HardHat, desc: "Project tracking apps, vendor portals & document vaults." },
    { name: "Professional Services", icon: Briefcase, desc: "Client management portals, billing & automated SOPs." },
    { name: "Startups", icon: Rocket, desc: "Rapid MVP development, AI integration & scalable backend." },
    { name: "MSMEs", icon: Building2, desc: "Affordable digitization, WhatsApp automation & web presence." }
  ];

  // Process Steps
  const processSteps = [
    { step: "01", title: "Discover", desc: "We deep-dive into your operational model, bottlenecks, and growth targets." },
    { step: "02", title: "Plan", desc: "We architect a detailed technology roadmap, tech stack, and scope statement." },
    { step: "03", title: "Design", desc: "We craft clean, modern, enterprise-grade UI/UX designs focused on user retention." },
    { step: "04", title: "Develop", desc: "AI-assisted agile engineering ensures rapid, high-quality code delivery." },
    { step: "05", title: "Test", desc: "Rigorous performance, security, SEO, and user acceptance testing." },
    { step: "06", title: "Deploy", desc: "Smooth production release with post-launch training, hosting, and support." }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-slate-900 font-sans selection:bg-[#0B1F3A] selection:text-white">
      
      {/* ENTERPRISE TOP BAR */}
      <div className="bg-[#0B1F3A] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-0.5 rounded font-bold uppercase tracking-wider text-[10px]">
              Parent Brand
            </span>
            <span className="font-medium text-slate-200">
              KRGONE Business Transformation Group
            </span>
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="tel:+917300300330" className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>+91 7300300330</span>
            </a>
            <a href="mailto:support.krgone@gmail.com" className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>support.krgone@gmail.com</span>
            </a>
            <button 
              onClick={onBackToGateway}
              className="flex items-center gap-1 text-[#D4AF37] hover:underline font-semibold cursor-pointer pl-2 border-l border-slate-700"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Group Hub</span>
            </button>
          </div>
        </div>
      </div>

      {/* STICKY MAIN HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#0B1F3A] font-sans">
                KRG<span className="text-[#D4AF37]">ONE</span>
              </span>
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#2563EB] uppercase bg-[#2563EB]/10 border border-[#2563EB]/20 px-2.5 py-0.5 rounded-md">
                Technologies
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <button onClick={() => scrollToSection('hero')} className="hover:text-[#2563EB] transition-colors cursor-pointer">Home</button>
            <button onClick={() => scrollToSection('why-us')} className="hover:text-[#2563EB] transition-colors cursor-pointer">Why Us</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-[#2563EB] transition-colors cursor-pointer">Services</button>
            <button onClick={() => scrollToSection('industries')} className="hover:text-[#2563EB] transition-colors cursor-pointer">Industries</button>
            <button onClick={() => scrollToSection('process')} className="hover:text-[#2563EB] transition-colors cursor-pointer">Process</button>
            <button onClick={() => scrollToSection('tech-stack')} className="hover:text-[#2563EB] transition-colors cursor-pointer">Tech Stack</button>
            <button onClick={() => scrollToSection('about-founder')} className="hover:text-[#2563EB] transition-colors cursor-pointer">About</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-[#2563EB] transition-colors cursor-pointer">FAQ</button>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="bg-[#0B1F3A] hover:bg-[#162D4F] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2 border border-[#0B1F3A]"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Book Free Consultation</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative bg-gradient-to-b from-[#F8FAFC] via-white to-white py-16 lg:py-24 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs font-extrabold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI-Powered Digital Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1F3A] tracking-tight leading-[1.12]">
                Build Smarter Businesses with <span className="text-[#2563EB]">AI-Powered Technology</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium max-w-2xl">
                We design, develop and implement intelligent websites, AI solutions, business automation and custom software that help organizations grow faster and operate smarter.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <button
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="bg-[#0B1F3A] hover:bg-[#162D4F] text-white text-sm font-extrabold px-7 py-4 rounded-xl shadow-lg shadow-[#0B1F3A]/10 hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-3 border border-[#0B1F3A]"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>

                <button
                  onClick={() => scrollToSection('services')}
                  className="bg-white hover:bg-slate-50 text-[#0B1F3A] border border-slate-300 text-sm font-bold px-7 py-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Explore Services</span>
                </button>
              </div>

              {/* Key Highlights Trust Indicators */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-2xl font-black text-[#0B1F3A]">20+ Yrs</div>
                  <div className="text-xs font-semibold text-slate-500">Domain Expertise</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#2563EB]">100%</div>
                  <div className="text-xs font-semibold text-slate-500">Business Focused</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#0B1F3A]">AI First</div>
                  <div className="text-xs font-semibold text-slate-500">Architecture</div>
                </div>
              </div>
            </div>

            {/* Right Column Graphic Card */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#0B1F3A] rounded-2xl p-6 sm:p-8 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider">
                    KRGONE AI Core Platform v2.4
                  </span>
                </div>

                <div className="space-y-4 font-mono text-xs text-slate-300">
                  <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bot className="w-5 h-5 text-[#38BDF8]" />
                      <span>AI Agent Orchestration</span>
                    </div>
                    <span className="text-emerald-400 font-bold">Active</span>
                  </div>

                  <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Workflow className="w-5 h-5 text-[#D4AF37]" />
                      <span>CRM & Lead Automation</span>
                    </div>
                    <span className="text-emerald-400 font-bold">Connected</span>
                  </div>

                  <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-blue-400" />
                      <span>Enterprise React Portal</span>
                    </div>
                    <span className="text-emerald-400 font-bold">Deployed</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 text-center">
                  <p className="text-xs text-slate-400 font-sans">
                    Helping traditional enterprises transition into AI-driven market leaders.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY KRGONE TECHNOLOGIES */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest block mb-2">
              WHY KRGONE TECHNOLOGIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight">
              Technology Engineered for Real Business Results
            </h2>
            <p className="text-slate-600 text-base mt-3">
              We bridge the gap between complex software engineering and strategic enterprise growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1 */}
            <div className="bg-[#F8FAFC] border border-slate-200/90 p-8 rounded-2xl hover:border-[#2563EB] transition-all hover:shadow-lg group">
              <div className="w-14 h-14 rounded-xl bg-blue-100 text-[#2563EB] flex items-center justify-center mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                <Bot className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0B1F3A] mb-3">AI First Approach</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We embed artificial intelligence into customer service, sales workflows, and decision support from day one.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F8FAFC] border border-slate-200/90 p-8 rounded-2xl hover:border-[#2563EB] transition-all hover:shadow-lg group">
              <div className="w-14 h-14 rounded-xl bg-blue-100 text-[#2563EB] flex items-center justify-center mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0B1F3A] mb-3">Business Focused Solutions</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Led by 20+ years of business consulting expertise, every system we build is designed to increase revenue & ROI.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F8FAFC] border border-slate-200/90 p-8 rounded-2xl hover:border-[#2563EB] transition-all hover:shadow-lg group">
              <div className="w-14 h-14 rounded-xl bg-blue-100 text-[#2563EB] flex items-center justify-center mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0B1F3A] mb-3">Fast Development using AI</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                AI-assisted development tools enable us to launch production-grade digital solutions up to 60% faster.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#F8FAFC] border border-slate-200/90 p-8 rounded-2xl hover:border-[#2563EB] transition-all hover:shadow-lg group">
              <div className="w-14 h-14 rounded-xl bg-blue-100 text-[#2563EB] flex items-center justify-center mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0B1F3A] mb-3">Long-Term Technology Partner</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We don't just hand off code. We provide ongoing advisory, security maintenance, and continuous optimization.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION */}
      <section id="services" className="py-20 bg-[#F8FAFC] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest block mb-2">
              OUR CORE SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight">
              Comprehensive AI & Digital Engineering Capabilities
            </h2>
            <p className="text-slate-600 text-base mt-3">
              Modular technology solutions built specifically to automate operations and drive revenue.
            </p>
          </div>

          {/* Service Filter Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'web', label: 'Web & E-Commerce' },
              { id: 'ai', label: 'AI Solutions' },
              { id: 'automation', label: 'Automation' },
              { id: 'apps', label: 'Custom Apps' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedServiceFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedServiceFilter === tab.id
                    ? 'bg-[#0B1F3A] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services
              .filter(s => selectedServiceFilter === 'all' || s.category === selectedServiceFilter)
              .map((service) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={service.id}
                    className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-[#D4AF37] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <h3 className="text-xl font-extrabold text-[#0B1F3A] mb-2">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm font-medium mb-6 leading-relaxed">
                        {service.tagline}
                      </p>

                      <ul className="space-y-2.5 mb-8">
                        {service.features.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                            <Check className="w-4 h-4 text-[#2563EB] shrink-0 stroke-[2.5]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => {
                        setFormData(prev => ({ ...prev, serviceNeeded: service.title }));
                        setIsConsultationModalOpen(true);
                      }}
                      className="w-full bg-slate-50 hover:bg-[#0B1F3A] text-[#0B1F3A] hover:text-white font-extrabold text-xs py-3 px-4 rounded-xl border border-slate-200 hover:border-[#0B1F3A] transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
          </div>

        </div>
      </section>

      {/* KRGONE AI VIRTUAL BUSINESS ADVISOR SHOWCASE */}
      <section className="py-16 bg-gradient-to-r from-[#070D1B] via-[#0B1F3A] to-[#12223D] text-white border-y border-[#D4AF37]/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#0A1628]/90 backdrop-blur-md rounded-2xl border border-[#D4AF37]/30 p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-4">
                <Bot className="w-4 h-4" />
                <span>KRGONE AI Virtual Business Advisor</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-3">
                Experience AI-Powered Business Transformation
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Consult with <strong className="text-white">KRGONE AI Assistant</strong> — our official virtual advisor for KRGONE Technologies & KRGONE Consulting. Get instant guidance for custom websites, AI chatbots, mobile apps, business automation, and growth strategies.
              </p>
              
              <div className="flex flex-wrap gap-2.5">
                {[
                  "I need a website",
                  "I want AI solutions",
                  "I need business automation",
                  "I need a mobile app",
                  "Book Consultation"
                ].map((promptText, idx) => (
                  <button
                    key={idx}
                    onClick={() => triggerAIAssistant(promptText)}
                    className="bg-white/10 hover:bg-[#D4AF37] text-slate-200 hover:text-[#0B1F3A] border border-white/20 hover:border-[#D4AF37] text-xs font-bold px-3.5 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 shadow-sm group"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-[#0B1F3A]" />
                    <span>"{promptText}"</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center gap-3">
              <button
                onClick={() => triggerAIAssistant()}
                className="bg-gradient-to-r from-[#C29D2F] to-[#F3D97F] hover:from-[#D4AF37] hover:to-[#FFE894] text-[#0B1F3A] font-black text-sm px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center gap-3 transform hover:-translate-y-0.5 active:scale-95"
              >
                <Bot className="w-5 h-5" />
                <span>Chat with KRGONE AI Assistant</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-slate-400 font-medium">
                24/7 Virtual Business Advisor • Instant Consultation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest block mb-2">
              INDUSTRIES WE SERVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight">
              Tailored Digital Transformation Across Sectors
            </h2>
            <p className="text-slate-600 text-base mt-3">
              Deep industry-specific understanding to solve complex operational challenges.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((ind, idx) => {
              const IndIcon = ind.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 bg-[#F8FAFC] border border-slate-200 rounded-2xl hover:border-[#2563EB] hover:bg-white hover:shadow-lg transition-all text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                    <IndIcon className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-extrabold text-[#0B1F3A] mb-1">{ind.name}</h4>
                  <p className="text-[11px] text-slate-500 leading-tight">{ind.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section id="process" className="py-20 bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black text-[#D4AF37] uppercase tracking-widest block mb-2">
              OUR DEVELOPMENT PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Structured Agile Execution for Predictable Success
            </h2>
            <p className="text-slate-300 text-base mt-3">
              From requirement discovery to automated deployment and continuous maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {processSteps.map((p, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl relative flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-[#D4AF37] block mb-3 font-mono">{p.step}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY BUSINESSES CHOOSE US (8 PILLARS) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest block mb-2">
              THE KRGONE ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight">
              Why Forward-Thinking Businesses Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Business-Oriented Solutions",
              "AI-Powered Development",
              "Fast Delivery Timelines",
              "Scalable Cloud Architecture",
              "Modern Enterprise UI/UX",
              "Secure & Reliable Code",
              "Affordable Investment",
              "Dedicated 24/7 Support"
            ].map((pillar, i) => (
              <div key={i} className="p-6 bg-[#F8FAFC] border border-slate-200/90 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <span className="text-sm font-extrabold text-[#0B1F3A]">{pillar}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section id="tech-stack" className="py-20 bg-[#F8FAFC] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest block mb-2">
              ENTERPRISE TECH STACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight">
              Built on Modern, High-Performance Technologies
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {techStack.map((tech, idx) => (
              <div key={idx} className="bg-white border border-slate-200/90 p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
                <span className="text-2xl block mb-2">{tech.icon}</span>
                <span className="text-xs font-bold text-[#0B1F3A] block">{tech.name}</span>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">{tech.category}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ABOUT THE FOUNDER */}
      <section id="about-founder" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1F3A] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Founder Image */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative">
                  <div className="w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden border-4 border-[#D4AF37] shadow-2xl bg-slate-800">
                    <img 
                      src="/image.jpeg" 
                      alt="Gajendra Kumar Sharma - Founder & Managing Partner" 
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-[#D4AF37] text-[#0B1F3A] font-black text-xs px-4 py-2 rounded-lg shadow-xl uppercase tracking-wider z-10 border border-amber-200">
                    20+ Years Exp.
                  </div>
                </div>
              </div>

              {/* Bio Content */}
              <div className="lg:col-span-8 space-y-4 text-left">
                <span className="text-xs font-black text-[#D4AF37] uppercase tracking-widest block">
                  MEET THE FOUNDER
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Gajendra Kumar Sharma
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  With over 20 years of experience in Sales, Distribution, Business Development, and Business Growth, Gajendra Kumar Sharma has worked with organizations across multiple industries helping businesses improve revenue performance, optimize operations, and achieve sustainable growth.
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  His experience in business consulting combined with AI-powered technology enables KRGONE Technologies to deliver practical business-focused digital solutions rather than just software development.
                </p>

                <div className="pt-4 flex flex-wrap gap-3">
                  {[
                    "20+ Years Experience",
                    "Business Growth Expert",
                    "Sales & Distribution",
                    "Business Development",
                    "Technology Driven Transformation"
                  ].map((chip, cIdx) => (
                    <span key={cIdx} className="bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight">
              Got Questions? We Have Answers.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-extrabold text-[#0B1F3A] text-base cursor-pointer hover:text-[#2563EB]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#2563EB] shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-r from-[#0B1F3A] via-[#12223D] to-[#0B1F3A] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-[#D4AF37] text-xs font-black uppercase tracking-widest block">
            READY TO TRANSFORM YOUR BUSINESS?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Let's Build Your Next Digital Solution
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Schedule a free 30-minute discovery consultation with our technology team to discuss your goals.
          </p>

          <div className="pt-4">
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="bg-[#D4AF37] hover:bg-[#E5C158] text-[#0B1F3A] font-black text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer inline-flex items-center gap-3"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION / FOOTER CONTACT DETAILED */}
      <section id="contact" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest block mb-1">
                  DIRECT CONTACT
                </span>
                <h3 className="text-2xl font-black text-[#0B1F3A]">
                  KRGONE Technologies
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  Technology Division of KRGONE Business Transformation Group
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-700 font-medium">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-bold uppercase">Founder</span>
                    <span>Gajendra Kumar Sharma</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-bold uppercase">Phone / WhatsApp</span>
                    <a href="tel:+917300300330" className="hover:text-[#2563EB]">+91 7300300330</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-bold uppercase">Email</span>
                    <a href="mailto:support.krgone@gmail.com" className="hover:text-[#2563EB]">support.krgone@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-bold uppercase">Address</span>
                    <span>
                      10/B, Gokuldham Apartment, Gokul Nagar, Gokulpura, Kalwar Road, Opp. Power House, Jaipur, Rajasthan – 302012 India
                    </span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Card */}
              <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-500 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#2563EB]" />
                  <span>Jaipur Headquarters • Rajasthan, India</span>
                </div>
                <span className="text-[#2563EB] font-bold">Google Map</span>
              </div>
            </div>

            {/* Quick Consultation Form */}
            <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 p-8 rounded-2xl shadow-sm">
              <h4 className="text-xl font-black text-[#0B1F3A] mb-2">
                Send Us a Direct Inquiry
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm mb-6">
                Fill out the form below and our enterprise technology specialists will contact you within 24 hours.
              </p>

              {contactFormSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm font-bold text-center">
                  Thank you! Your inquiry has been submitted successfully. Confirmation & lead alert dispatched to Support.krgone@gmail.com. Our team will get in touch with you shortly.
                </div>
              ) : (
                <form onSubmit={(e) => handleFormSubmit(e, 'Direct Inquiry')} className="space-y-4">
                  {submitError && (
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-semibold">
                      {submitError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                      <input 
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="John Doe"
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="john@company.com"
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                      <input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91 9876543210"
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Company Name</label>
                      <input 
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        placeholder="Acme Enterprise"
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Service Required</label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData(prev => ({ ...prev, serviceNeeded: e.target.value }))}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#2563EB]"
                    >
                      <option value="Business Website Development">Business Website Development</option>
                      <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                      <option value="AI Solutions">AI Solutions & Chatbots</option>
                      <option value="Business Automation">Business Automation & CRM</option>
                      <option value="Custom Business Applications">Custom Business Applications</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Digital Growth Solutions">Digital Growth & SEO</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Project Details / Message</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Describe your requirement or business goals..."
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#2563EB]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0B1F3A] hover:bg-[#162D4F] disabled:opacity-50 text-white font-extrabold text-xs py-3.5 px-6 rounded-xl transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Notification & Alert...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#D4AF37]" />
                        <span>Submit Consultation Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B1F3A] text-slate-400 py-12 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
            {/* Col 1 */}
            <div className="space-y-3">
              <div className="text-xl font-black text-white font-sans">
                KRG<span className="text-[#D4AF37]">ONE</span> Technologies
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                AI-Powered Digital Solutions • Technology Division of KRGONE Business Transformation Group.
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h5 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">Quick Links</h5>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors cursor-pointer">Home</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer">Services</button></li>
                <li><button onClick={() => scrollToSection('industries')} className="hover:text-white transition-colors cursor-pointer">Industries</button></li>
                <li><button onClick={() => scrollToSection('about-founder')} className="hover:text-white transition-colors cursor-pointer">About Founder</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors cursor-pointer">Contact</button></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h5 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">Services</h5>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer">AI Solutions</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer">Website Development</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer">Business Automation</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer">Custom Applications</button></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h5 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">Social & Group</h5>
              <div className="flex gap-3 text-slate-300">
                <span className="hover:text-[#D4AF37] cursor-pointer">LinkedIn</span>
                <span>•</span>
                <span className="hover:text-[#D4AF37] cursor-pointer">Facebook</span>
                <span>•</span>
                <span className="hover:text-[#D4AF37] cursor-pointer">YouTube</span>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800">
                <button 
                  onClick={onBackToGateway}
                  className="text-[#D4AF37] hover:underline font-bold text-xs cursor-pointer flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to KRGONE Group Gateway</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[11px]">
            <p>© 2026 KRGONE Technologies. All Rights Reserved.</p>
            <p>Knowledge • Revenue • Growth</p>
          </div>

        </div>
      </footer>

      {/* CONSULTATION POPUP MODAL */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsConsultationModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest block mb-1">
                FREE CONSULTATION
              </span>
              <h3 className="text-xl font-black text-[#0B1F3A]">
                Schedule a 1-on-1 Technology Session
              </h3>
              <p className="text-slate-600 text-xs mt-1">
                Let's discuss how AI and custom technology can scale your organization.
              </p>
            </div>

            {contactFormSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-bold text-center">
                Thank you! Your consultation request has been received. Confirmation & lead alert dispatched to Support.krgone@gmail.com. We will contact you shortly.
              </div>
            ) : (
              <form onSubmit={(e) => handleFormSubmit(e, 'Book Free Consultation')} className="space-y-3.5">
                {submitError && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-semibold">
                    {submitError}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input 
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Gajendra Sharma"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email *</label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="gajendra@example.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#2563EB]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                    <input 
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+91 7300300330"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#2563EB]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Service Interest</label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData(prev => ({ ...prev, serviceNeeded: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#2563EB]"
                  >
                    <option value="AI Solutions">AI Solutions & Chatbots</option>
                    <option value="Business Website Development">Business Website Development</option>
                    <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                    <option value="Business Automation">Business Automation & CRM</option>
                    <option value="Custom Business Applications">Custom Business Applications</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Digital Growth Solutions">Digital Growth & SEO</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message / Key Goal</label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell us about your business requirement..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#2563EB]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0B1F3A] hover:bg-[#162D4F] disabled:opacity-50 text-white font-extrabold text-xs py-3 px-4 rounded-xl transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-[#D4AF37]" />
                      <span>Confirm Free Consultation Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
