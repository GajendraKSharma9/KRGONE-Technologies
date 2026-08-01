import React, { useEffect } from 'react';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

interface DisclaimerPageProps {
  onReturnHome: () => void;
}

export const DisclaimerPage: React.FC<DisclaimerPageProps> = ({ onReturnHome }) => {
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
            <h1 className="text-xl sm:text-2xl font-bold text-[#0f2142]">Disclaimer</h1>
          </div>
          <AlertTriangle className="w-6 h-6 text-[#d4af37]" />
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
                The information, recommendations, reports, frameworks, assessments, and consulting services provided through KRGONE are intended solely for business advisory and educational purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">1. No Guarantee of Results</h2>
              <p className="mb-4">
                Business Growth Assessments™, consulting recommendations, and strategic advice are designed to support informed business decisions.
              </p>
              <p className="mb-4">KRG Business Solutions does not guarantee:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Revenue growth</li>
                <li>Profit improvement</li>
                <li>Business success</li>
                <li>Investment returns</li>
                <li>Customer acquisition</li>
                <li>Operational improvements</li>
                <li>Any specific financial or commercial outcome</li>
              </ul>
              <p className="leading-relaxed">
                Business performance depends on numerous factors, including implementation, leadership decisions, market conditions, competition, and economic circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">2. Client Responsibility</h2>
              <p className="leading-relaxed mb-4">
                All business decisions remain the responsibility of the client.
              </p>
              <p className="leading-relaxed">
                Clients should independently evaluate all recommendations before implementation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">3. Business Assessment™</h2>
              <p className="leading-relaxed mb-4">
                The Business Growth Assessment™ provides an analytical view of business performance based on the information submitted by the client.
              </p>
              <p className="leading-relaxed">
                Results are intended to support strategic discussions and should not be interpreted as financial, legal, tax, investment, or regulatory advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">4. Professional Services</h2>
              <p className="leading-relaxed mb-4">
                Our consulting services are based on professional experience, structured methodologies, and business best practices.
              </p>
              <p className="leading-relaxed">
                Every business is different, and recommendations may vary depending on industry, business size, objectives, and available information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">5. Third-Party Information</h2>
              <p className="leading-relaxed mb-4">
                Our website may reference third-party resources or external websites for informational purposes.
              </p>
              <p className="leading-relaxed">
                KRG Business Solutions is not responsible for the accuracy, availability, or content of external websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">6. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                To the maximum extent permitted by law, KRG Business Solutions shall not be liable for any direct, indirect, incidental, consequential, or financial losses arising from the use of our website, Business Growth Assessment™, reports, or consulting services.
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
