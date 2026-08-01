import React, { useEffect } from 'react';
import { ArrowLeft, RefreshCw } from 'lucide-react';

interface RefundPolicyPageProps {
  onReturnHome: () => void;
}

export const RefundPolicyPage: React.FC<RefundPolicyPageProps> = ({ onReturnHome }) => {
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
            <h1 className="text-xl sm:text-2xl font-bold text-[#0f2142]">Refund Policy</h1>
          </div>
          <RefreshCw className="w-6 h-6 text-[#d4af37]" />
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
                Our consulting services are knowledge-based professional engagements that require advance scheduling, preparation, research, and allocation of consulting resources. Therefore, all payments are generally non-refundable unless specifically stated otherwise below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">1. Business Growth Consultation™</h2>
              <p className="font-medium text-slate-700 mb-4">Fee: ₹1,499</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The consultation fee is payable in advance to confirm your appointment.</li>
                <li>Once a consultation is booked, consultant time is reserved exclusively for you.</li>
                <li>Payments are non-refundable.</li>
                <li>If you notify us at least 24 hours before the scheduled session, we may, at our sole discretion, allow one complimentary rescheduling within the next 30 days.</li>
                <li>Missed appointments or late cancellations are treated as completed consultations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">2. Full Business Growth Diagnostic™</h2>
              <p className="font-medium text-slate-700 mb-4">Starting at ₹49,999</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>This engagement begins with planning, business analysis, and consultant resource allocation immediately after confirmation.</li>
                <li>Therefore, all payments are non-refundable once the engagement has been confirmed.</li>
              </ul>
              <p className="leading-relaxed mb-4">
                If KRGONE is unable to commence the engagement for reasons solely attributable to us, the client may choose either:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>A mutually agreed rescheduled start date, or</li>
                <li>A refund where appropriate.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">3. 90-Day Business Growth Sprint™</h2>
              <p className="font-medium text-slate-700 mb-4">Investment: ₹2,49,000</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>This implementation program involves dedicated consulting resources over a fixed period.</li>
                <li>Payments made for the Sprint are non-refundable after confirmation of the engagement.</li>
                <li>Rescheduling or modification of timelines may be considered only by mutual written agreement.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">4. Fractional Sales Head™</h2>
              <p className="font-medium text-slate-700 mb-4">Monthly Strategic Engagement</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Monthly retainers secure dedicated consulting availability and strategic support.</li>
                <li>Retainer fees are non-refundable once the engagement period has commenced.</li>
                <li>Either party may discontinue future services in accordance with the agreed notice period.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2142] mb-4">5. Exceptional Circumstances</h2>
              <p className="mb-4">Refunds will not normally be provided due to:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Change of business plans</li>
                <li>Change of management decisions</li>
                <li>Lack of implementation by the client</li>
                <li>Change in financial circumstances</li>
                <li>Dissatisfaction arising from outcomes beyond KRGONE's control</li>
              </ul>
              <p className="leading-relaxed">
                Any exception will be reviewed solely at the discretion of KRG Business Solutions.
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
