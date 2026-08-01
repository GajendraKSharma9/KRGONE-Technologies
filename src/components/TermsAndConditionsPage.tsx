import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsAndConditionsPageProps {
  onReturnHome: () => void;
}

export const TermsAndConditionsPage: React.FC<TermsAndConditionsPageProps> = ({ onReturnHome }) => {
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
            <h1 className="text-xl sm:text-2xl font-bold text-[#0f2142]">Terms & Conditions</h1>
          </div>
          <FileText className="w-6 h-6 text-[#d4af37]" />
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
                By accessing our website, using our Business Growth Assessment™, or engaging our consulting services, you agree to these Terms & Conditions.
              </p>
              <p className="leading-relaxed mt-4 font-medium">
                If you do not agree with these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">1. Our Services</h2>
              <p className="mb-4">KRGONE provides professional business consulting services, including but not limited to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Business Growth Consultation™</li>
                <li>Full Business Growth Diagnostic™</li>
                <li>90-Day Business Growth Sprint™</li>
                <li>Fractional Sales Head™</li>
                <li>AI Business Advisory</li>
                <li>Business Health Assessment™</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">2. Professional Advice</h2>
              <p className="leading-relaxed mb-4">
                All recommendations provided by KRGONE are professional business opinions based on the information shared by the client.
              </p>
              <p className="leading-relaxed">
                Implementation decisions remain the sole responsibility of the client.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">3. Accuracy of Information</h2>
              <p className="leading-relaxed mb-4">
                Clients are responsible for providing complete and accurate business information.
              </p>
              <p className="leading-relaxed">
                KRGONE is not responsible for recommendations affected by incomplete or incorrect information provided by the client.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">4. Fees & Payments</h2>
              <p className="leading-relaxed mb-4">
                Service fees must be paid as agreed before commencement of the engagement unless otherwise stated in writing.
              </p>
              <p className="leading-relaxed">
                Prices may change without prior notice for future engagements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">5. Confidentiality</h2>
              <p className="leading-relaxed">
                All business information shared during assessments and consulting engagements will be treated as confidential and used only for delivering agreed services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">6. Intellectual Property</h2>
              <p className="leading-relaxed mb-4">
                All reports, frameworks, templates, methodologies, Business Growth OS™, Business Health Index™, and other consulting materials remain the intellectual property of KRG Business Solutions unless otherwise agreed in writing.
              </p>
              <p className="leading-relaxed">
                They may not be copied, reproduced, modified, distributed, or sold without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">7. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                KRGONE provides strategic business guidance only.
              </p>
              <p className="mb-4">We do not guarantee:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Revenue growth</li>
                <li>Profit improvement</li>
                <li>Business success</li>
                <li>Investment returns</li>
                <li>Specific financial outcomes</li>
              </ul>
              <p className="leading-relaxed">
                Business results depend on market conditions, management decisions, implementation quality, and other external factors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">8. Website Usage</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Misuse the website</li>
                <li>Attempt unauthorized access</li>
                <li>Copy website content without permission</li>
                <li>Use our services for unlawful purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">9. Third-Party Services</h2>
              <p className="leading-relaxed mb-4">
                Our website may include links to third-party websites or services.
              </p>
              <p className="leading-relaxed">
                KRGONE is not responsible for their content, policies, or practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">10. Governing Law</h2>
              <p className="leading-relaxed mb-4">
                These Terms & Conditions shall be governed by the laws of India.
              </p>
              <p className="leading-relaxed">
                Any disputes shall be subject to the jurisdiction of the courts in Jaipur, Rajasthan.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">11. Changes to These Terms</h2>
              <p className="leading-relaxed mb-4">
                KRG Business Solutions reserves the right to modify these Terms & Conditions at any time.
              </p>
              <p className="leading-relaxed">
                Updated versions will be published on this website.
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
