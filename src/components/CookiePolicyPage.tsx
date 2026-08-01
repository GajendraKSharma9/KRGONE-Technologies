import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyPageProps {
  onReturnHome: () => void;
}

export const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ onReturnHome }) => {
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
            <h1 className="text-xl sm:text-2xl font-bold text-[#0f2142]">Cookie Policy</h1>
          </div>
          <Cookie className="w-6 h-6 text-[#d4af37]" />
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12 prose prose-slate max-w-none">
          <p className="text-sm text-slate-500 mb-8 font-medium">Effective Date: 1 August 2026</p>

          <div className="space-y-8">
            <section>
              <p className="leading-relaxed font-bold">
                KRGONE is a brand owned and operated by KRG Business Solutions.
              </p>
              <p className="leading-relaxed mt-4">
                This Cookie Policy explains how we use cookies and similar technologies when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">1. What Are Cookies?</h2>
              <p className="leading-relaxed">
                Cookies are small text files stored on your device to help websites function efficiently and improve your browsing experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">2. How We Use Cookies</h2>
              <p className="mb-4">We may use cookies to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Improve website performance</li>
                <li>Remember user preferences</li>
                <li>Understand website usage through analytics</li>
                <li>Enhance user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">3. Third-Party Cookies</h2>
              <p className="leading-relaxed">
                Our website may use trusted third-party services, such as analytics providers, which may place cookies to help us understand website performance and visitor behaviour.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">4. Managing Cookies</h2>
              <p className="mb-4">Most web browsers allow you to:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Accept or reject cookies</li>
                <li>Delete stored cookies</li>
                <li>Control cookie preferences</li>
              </ul>
              <p className="leading-relaxed">
                Disabling cookies may affect certain website features.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">5. Changes to This Policy</h2>
              <p className="leading-relaxed">
                KRG Business Solutions may update this Cookie Policy from time to time. Any changes will be published on this page with the revised effective date.
              </p>
            </section>

            <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-12">
              <h2 className="text-xl font-bold text-[#0f2142] mb-6">Contact Us</h2>
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
