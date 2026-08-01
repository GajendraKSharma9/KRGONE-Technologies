import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onReturnHome: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onReturnHome }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onReturnHome}
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-[#0f2142]">Privacy Policy</h1>
          </div>
          <Shield className="w-6 h-6 text-[#d4af37]" />
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12 prose prose-slate max-w-none">
          <p className="text-sm text-slate-500 mb-8 font-medium">Effective Date: 1 August 2026</p>

          <div className="space-y-8">
            <section>
              <p className="leading-relaxed">
                Welcome to KRGONE, a brand owned and operated by KRG Business Solutions.
              </p>
              <p className="leading-relaxed mt-4">
                KRG Business Solutions respects your privacy and is committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website, Business Growth Assessment™, and consulting services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">1. Information We Collect</h2>
              <p className="mb-4">We may collect the following information:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Name</li>
                <li>Company Name</li>
                <li>Email Address</li>
                <li>Mobile Number</li>
                <li>Business Information</li>
                <li>Business Growth Assessment™ responses</li>
                <li>Messages submitted through contact forms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">Your information is used to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Deliver the Business Growth Assessment™</li>
                <li>Prepare Business Health Reports</li>
                <li>Provide Business Growth Consulting services</li>
                <li>Schedule consultations</li>
                <li>Respond to enquiries</li>
                <li>Improve our services</li>
                <li>Send important service-related communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">3. Business Assessment Data</h2>
              <p className="leading-relaxed mb-4">
                Information submitted during the Business Growth Assessment™ is used solely for preparing your business analysis, recommendations, and consulting services.
              </p>
              <p className="leading-relaxed">
                KRG Business Solutions does not sell, rent, or share your confidential business information with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">4. Data Security</h2>
              <p className="leading-relaxed">
                We implement reasonable technical and organizational measures to protect your information from unauthorized access, misuse, alteration, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">5. Cookies</h2>
              <p className="leading-relaxed mb-4">
                Our website may use cookies to improve user experience, website performance, and analytics.
              </p>
              <p className="leading-relaxed">
                You can disable cookies through your browser settings at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">6. Third-Party Services</h2>
              <p className="mb-4">We may use trusted third-party providers for:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Website Hosting</li>
                <li>Analytics</li>
                <li>Email Communication</li>
                <li>Payment Processing (where applicable)</li>
              </ul>
              <p className="leading-relaxed">
                These providers process data only to deliver their respective services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">7. Data Retention</h2>
              <p className="leading-relaxed">
                We retain your information only for as long as necessary to provide our services, maintain business records, and comply with applicable legal requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">8. Your Rights</h2>
              <p className="mb-4">You may request to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access your personal information</li>
                <li>Update inaccurate information</li>
                <li>Request deletion of your personal information (subject to legal requirements)</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">9. Policy Updates</h2>
              <p className="leading-relaxed">
                KRG Business Solutions may update this Privacy Policy periodically. Any changes will be published on this page with the revised effective date.
              </p>
            </section>

            <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-12">
              <h2 className="text-xl font-bold text-[#0f2142] mb-6">Contact Information</h2>
              <div className="space-y-4">
                <p className="font-bold">KRG Business Solutions</p>
                <p>Brand: KRGONE</p>
                <p className="flex items-center gap-2">📍 Jaipur, Rajasthan, India</p>
                <p className="flex items-center gap-2">📞 +91 7300300330</p>
                <p className="flex items-center gap-2">✉ enquiry.krgone@gmail.com</p>
                <p className="flex items-center gap-2">🌐 www.krgone.vercel.app</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};
