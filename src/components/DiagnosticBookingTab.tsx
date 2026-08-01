import React, { useState } from 'react';
import {
  ShieldCheck,
  Calendar,
  Clock,
  User,
  Building2,
  Briefcase,
  Coins,
  Users,
  Mail,
  Phone,
  Edit2,
  Lock,
  Star,
  CheckCircle2,
  Pencil,
  ChevronDown,
  Info,
  BarChart3,
  FileText,
  Check,
  Save,
  X,
  Loader2,
  Globe,
  MapPin
} from 'lucide-react';

interface DiagnosticBookingTabProps {
  formData?: Record<string, any>;
  onEditProfile?: () => void;
}

export const DiagnosticBookingTab: React.FC<DiagnosticBookingTabProps> = ({
  formData = {},
  onEditProfile
}) => {
  // Local editable profile state
  const [profile, setProfile] = useState({
    companyName: formData?.companyName || 'Not Provided',
    industry: formData?.industry || 'Not Provided',
    revenue: formData?.revenue || 'Not Provided',
    employees: formData?.employees || 'Not Provided',
    contactPerson: formData?.ownerName || formData?.name || formData?.fullName || 'Not Provided',
    email: formData?.email || 'Not Provided',
    mobile: formData?.phone || formData?.mobile || formData?.mobileNumber || 'Not Provided'
  });

  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false);
  const [editForm, setEditForm] = useState({ ...profile });

  // Booking details state
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [customTime, setCustomTime] = useState<string>('');
  const [isCustomTimeMode, setIsCustomTimeMode] = useState<boolean>(false);
  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingMessage, setBookingMessage] = useState<string>('');

  const timeOptions = [
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    'Custom Time Choice...'
  ];

  const handleSaveProfile = () => {
    setProfile({ ...editForm });
    setIsEditingProfile(false);
    if (onEditProfile) {
      onEditProfile();
    }
  };

  const handleCancelEditProfile = () => {
    setEditForm({ ...profile });
    setIsEditingProfile(false);
  };

  const handleTimeSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === 'Custom Time Choice...') {
      setIsCustomTimeMode(true);
      setSelectedTime('');
    } else {
      setIsCustomTimeMode(false);
      setSelectedTime(val);
    }
  };

  const handleReserve = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const dossierEl = document.getElementById('krg-print-dossier-root');
      const dossierHtml = dossierEl ? dossierEl.innerHTML : '';

      const res = await fetch('/api/send-assessment-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formData: {
            fullName: profile.contactPerson,
            email: profile.email,
            mobileNumber: profile.mobile,
            companyName: profile.companyName,
            industry: profile.industry,
            revenue: profile.revenue,
            businessSize: profile.employees,
            challenges: [`Partner Call Booking: ${selectedDate || 'Upcoming'} at ${finalTimeDisplay}`],
            goals: [notes ? `Booking Notes: ${notes}` : 'Partner Diagnostic Strategy Session'],
            customerType: 'Partner Call Reservation'
          },
          scores: new Array(21).fill(4),
          overallScore: 85,
          pillarScores: [85, 85, 85, 85, 85, 85, 85],
          dossierHtml
        })
      });

      const data = await res.json();
      if (data.success) {
        setBookingMessage(`Confirmation email dispatched to ${profile.email} & notification alert sent to KRG ONE Advisory Team.`);
      } else {
        setBookingMessage(`Booking received. Our team will verify your appointment at ${profile.email}.`);
      }
    } catch (err) {
      console.error('Failed to send booking notification email:', err);
      setBookingMessage(`Booking registered. Our growth team will contact you directly.`);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const finalTimeDisplay = isCustomTimeMode
    ? customTime || 'Custom Time'
    : selectedTime || '11:30 AM - 12:30 PM';

  return (
    <div className="max-w-6xl mx-auto space-y-8 font-sans text-slate-800">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Book Your Business Growth Diagnostic™
          </h1>
          <div className="h-1 w-12 bg-amber-400 rounded-full my-2"></div>
          <p className="text-sm text-slate-600 font-medium">
            Reserve your private <strong className="text-slate-900 font-bold">60 minutes</strong> strategy session with a KRG ONE Growth Advisor.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200/80 px-3.5 py-2 rounded-full self-start md:self-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Your information is secure and confidential</span>
        </div>
      </div>

      {isSubmitted ? (
        /* CONFIRMATION SUCCESS VIEW */
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center max-w-2xl mx-auto space-y-6">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-slate-900">Diagnostic Reserved Successfully!</h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <strong className="text-slate-900">{profile.contactPerson}</strong>. Your private <strong className="text-slate-900">60-minute consultation</strong> for <strong className="text-slate-900">{profile.companyName}</strong> has been booked.
            </p>
          </div>

          {/* EMAIL NOTIFICATION STATUS BADGE */}
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold p-3.5 rounded-xl flex items-center justify-center gap-2 max-w-md mx-auto text-left">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{bookingMessage || `Confirmation email sent to ${profile.email} & notification alert sent to KRG ONE Advisory Team.`}</span>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left text-xs space-y-2.5 max-w-md mx-auto font-medium">
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="text-slate-500">Duration:</span>
              <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">60 Minutes</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="text-slate-500">Date & Time:</span>
              <span className="font-bold text-slate-900">{selectedDate || 'Upcoming Business Day'} | {finalTimeDisplay}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="text-slate-500">Meeting Platform:</span>
              <span className="font-bold text-slate-900">Google Meet (Online)</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="text-slate-500">Registered Email:</span>
              <span className="font-bold text-slate-900">{profile.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Advisor Status:</span>
              <span className="font-bold text-emerald-600">Assigned & Lock-In</span>
            </div>
          </div>

          {/* KRG ONE ADVISORY DIRECT CONTACT DETAILS */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-xl p-4 text-left text-xs max-w-md mx-auto space-y-2">
            <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-amber-400" /> KRG ONE Official Advisory Contact Details
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-slate-300">
              <div>
                <span className="text-slate-400 block text-[10px]">Official Email:</span>
                <a href="mailto:enquiry.krgone@gmail.com" className="font-bold text-sky-400 hover:underline">enquiry.krgone@gmail.com</a>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Advisory Hotline:</span>
                <a href="tel:+917300300330" className="font-bold text-white">+91 7300300330</a>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Corporate HQ:</span>
                <span className="font-medium text-slate-200">Jaipur, Rajasthan, India</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Advisory Portal:</span>
                <a href="https://www.krgone.vercel.app" target="_blank" rel="noreferrer" className="font-medium text-sky-400 hover:underline">www.krgone.vercel.app</a>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            A calendar invitation and Google Meet link have been dispatched to <strong className="text-slate-800">{profile.email}</strong>. Our team will verify your appointment within 24 hours.
          </p>

          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-[#0F172A] text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-slate-800 transition-colors"
          >
            Modify Booking Details
          </button>
        </div>
      ) : (
        /* MAIN 2-COLUMN BOOKING GRID */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT COLUMN: DIAGNOSTIC CARD + PROFILE CARD */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* DARK CARD: BUSINESS GROWTH DIAGNOSTIC */}
            <div className="bg-[#0B132B] text-white rounded-2xl p-6 space-y-6 shadow-md relative overflow-hidden">
              {/* Card Header with Icon */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-amber-400/80 bg-amber-400/10 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight text-white">
                    Business Growth<br />Diagnostic™
                  </h3>
                  <span className="inline-block mt-1 text-[11px] font-bold text-amber-300 bg-amber-400/15 border border-amber-400/30 px-2.5 py-0.5 rounded-full">
                    60 Minutes Session
                  </span>
                </div>
              </div>

              {/* Price & Offer */}
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black text-amber-400 tracking-tight">₹ 1,499</span>
                  <span className="bg-[#004D25] text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide">
                    Limited Time Offer
                  </span>
                </div>
                <div className="text-sm text-slate-400 line-through font-medium">
                  ₹ 9,999
                </div>
              </div>

              <div className="h-px bg-slate-800/80 w-full"></div>

              {/* What's Included */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-amber-400">What's Included</h4>
                <ul className="space-y-2.5 text-xs text-slate-200 font-medium">
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-amber-400 text-[#0B132B] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span className="font-bold text-amber-200">60-Minute Deep-Dive Session</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-amber-400 text-[#0B132B] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Business Growth Review</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-amber-400 text-[#0B132B] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Growth Bottleneck Analysis</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-amber-400 text-[#0B132B] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Personalized Action Roadmap</span>
                  </li>
                </ul>
              </div>

              {/* Rating Footer */}
              <div className="bg-[#070D1E] rounded-xl p-3.5 border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full border border-amber-400/40 bg-amber-400/10 flex items-center justify-center shrink-0">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300 leading-tight">
                    Trusted by 500+<br />Growing Businesses
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-extrabold text-amber-400 text-sm block">4.9/5</span>
                  <div className="flex items-center justify-end gap-0.5 text-amber-400 text-[10px]">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>

            {/* WHITE CARD: YOUR BUSINESS PROFILE (WITH INLINE EDIT & SAVE) */}
            <div className="bg-amber-50/20 rounded-2xl p-5 border border-amber-200/60 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-amber-200/40">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <User className="w-4 h-4 text-slate-700" />
                  <span>Your Business Profile</span>
                </div>
                {!isEditingProfile ? (
                  <button
                    type="button"
                    onClick={() => {
                      setEditForm({ ...profile });
                      setIsEditingProfile(true);
                    }}
                    className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 cursor-pointer bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 transition-colors"
                  >
                    <Edit2 className="w-3 h-3" />
                    <span>Edit Profile</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleSaveProfile}
                      className="text-xs text-emerald-700 hover:text-emerald-900 font-bold flex items-center gap-1 cursor-pointer bg-emerald-100 hover:bg-emerald-200 px-2.5 py-1 rounded-md border border-emerald-300 transition-colors"
                    >
                      <Save className="w-3 h-3" />
                      <span>Save</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelEditProfile}
                      className="text-xs text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1 cursor-pointer bg-slate-100 px-2 py-1 rounded-md border border-slate-200 transition-colors"
                    >
                      <X className="w-3 h-3" />
                      <span>Cancel</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Profile Fields or Edit Form */}
              {!isEditingProfile ? (
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Company</span>
                    </div>
                    <span className="font-semibold text-slate-900">{profile.companyName}</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Industry</span>
                    </div>
                    <span className="font-semibold text-slate-900">{profile.industry}</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Coins className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Annual Revenue</span>
                    </div>
                    <span className="font-semibold text-slate-900">{profile.revenue}</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Employees</span>
                    </div>
                    <span className="font-semibold text-slate-900">{profile.employees}</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <div className="flex items-center gap-2 text-slate-600">
                      <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Contact Person</span>
                    </div>
                    <span className="font-semibold text-slate-900">{profile.contactPerson}</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Email</span>
                    </div>
                    <span className="font-semibold text-slate-900">{profile.email}</span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Mobile</span>
                    </div>
                    <span className="font-semibold text-slate-900">{profile.mobile}</span>
                  </div>
                </div>
              ) : (
                /* EDIT FORM INPUTS */
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      value={editForm.companyName}
                      onChange={(e) => setEditForm({ ...editForm, companyName: e.target.value })}
                      className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Industry</label>
                    <input
                      type="text"
                      value={editForm.industry}
                      onChange={(e) => setEditForm({ ...editForm, industry: e.target.value })}
                      className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Annual Revenue</label>
                      <input
                        type="text"
                        value={editForm.revenue}
                        onChange={(e) => setEditForm({ ...editForm, revenue: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Employees</label>
                      <input
                        type="text"
                        value={editForm.employees}
                        onChange={(e) => setEditForm({ ...editForm, employees: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Contact Person</label>
                    <input
                      type="text"
                      value={editForm.contactPerson}
                      onChange={(e) => setEditForm({ ...editForm, contactPerson: e.target.value })}
                      className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                      className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Mobile Number</label>
                    <input
                      type="text"
                      value={editForm.mobile}
                      onChange={(e) => setEditForm({ ...editForm, mobile: e.target.value })}
                      className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center gap-2 justify-end">
                    <button
                      type="button"
                      onClick={handleCancelEditProfile}
                      className="px-3 py-1.5 text-xs text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveProfile}
                      className="px-4 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* CONFIDENTIAL NOTICE BOX */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 text-xs text-slate-600 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="font-medium">
                We never share your data with third parties. 100% Confidential.
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: BOOKING FORM STEPS */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-6">
            <form onSubmit={handleReserve} className="space-y-6">
              
              {/* STEP 1: PREFERRED DATE */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-950 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    1
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Preferred Date</h3>
                </div>
                <p className="text-xs text-slate-500 pl-9 -mt-2">
                  Select your preferred date for the consultation.
                </p>

                <div className="pl-9">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 2: PREFERRED TIME (FLEXIBLE USER TIME SELECTION) */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-950 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div className="flex items-center justify-between w-full pr-2">
                    <h3 className="font-bold text-slate-900 text-sm">Preferred Time</h3>
                    <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      Duration: 60 Minutes
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 pl-9 -mt-2">
                  Select your preferred time slot or enter your custom choice for the 60 minutes session.
                </p>

                <div className="pl-9 space-y-3">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      required={!isCustomTimeMode}
                      value={isCustomTimeMode ? 'Custom Time Choice...' : selectedTime}
                      onChange={handleTimeSelectChange}
                      className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 cursor-pointer"
                    >
                      <option value="">Select preferred time</option>
                      {timeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {/* CUSTOM TIME FIELD IF SELECTED */}
                  {isCustomTimeMode && (
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700">Enter Your Preferred Time:</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 03:00 PM - 04:00 PM or Any time after 4 PM"
                        value={customTime}
                        onChange={(e) => setCustomTime(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-amber-50/40 border border-amber-300 rounded-xl text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                      />
                    </div>
                  )}

                  <div className="bg-sky-50/70 border border-sky-100 rounded-xl p-3 flex items-center gap-2.5 text-xs text-slate-600">
                    <Info className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Session duration is <strong>60 minutes</strong>. Final appointment time will be confirmed by your Growth Advisor.</span>
                  </div>
                </div>
              </div>

              {/* STEP 3: MEETING */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-950 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    3
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Meeting</h3>
                </div>

                <div className="pl-9">
                  <div className="bg-sky-50/50 border border-sky-100 rounded-xl p-4 flex items-center gap-4">
                    {/* Google Meet 4-color Icon SVG */}
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                      <svg viewBox="0 0 48 48" className="w-9 h-9">
                        <path fill="#00832d" d="M 12.3 22.1 L 18.2 28 C 18.2 28 27 18 27 18 L 22.1 12.3 L 12.3 22.1 Z" />
                        <path fill="#0066da" d="M 35.7 12.3 L 27 18 L 27 28 L 35.7 33.7 C 36.8 34.4 38.3 33.6 38.3 32.3 L 38.3 13.7 C 38.3 12.4 36.8 11.6 35.7 12.3 Z" />
                        <path fill="#e94235" d="M 27 28 L 18.2 28 L 12.3 33.7 L 22.1 43.5 L 27 28 Z" />
                        <path fill="#26a69a" d="M 12.3 22.1 L 12.3 33.7 L 18.2 28 L 12.3 22.1 Z" />
                        <path fill="#4ab3f4" d="M 12.3 22.1 L 22.1 12.3 L 18.2 6.5 L 6.5 18.2 L 12.3 22.1 Z" />
                        <path fill="#ffb700" d="M 22.1 12.3 L 27 18 L 35.7 12.3 L 27 6.5 L 22.1 12.3 Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Google Meet (Online)</h4>
                      <p className="text-xs text-slate-500 font-medium">
                        Meeting link will be shared to your registered email after confirmation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 4: ADDITIONAL NOTES */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-950 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    4
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Additional Notes <span className="text-slate-400 font-normal">(Optional)</span></h3>
                </div>
                <p className="text-xs text-slate-500 pl-9 -mt-2">
                  Share any specific business challenge or discussion topic.
                </p>

                <div className="pl-9">
                  <div className="relative">
                    <div className="absolute top-3 left-3.5 text-slate-400 pointer-events-none">
                      <Pencil className="w-4 h-4" />
                    </div>
                    <textarea
                      rows={3}
                      maxLength={300}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Type your notes here..."
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-normal text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 resize-none"
                    ></textarea>
                    <div className="text-right text-[10px] text-slate-400 font-medium mt-1">
                      {notes.length}/300
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA BUTTON */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-amber-300 disabled:cursor-not-allowed text-slate-950 font-extrabold text-sm py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Reserving & Dispatching Confirmation...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Reserve My Diagnostic</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 text-center font-medium">
                  <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Your information remains confidential. We'll confirm your appointment within one business day.</span>
                </div>
              </div>

            </form>
          </div>

        </div>
      )}

      {/* BOTTOM FOOTER BAR (4 HIGHLIGHT CARDS) */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Highlight 1 */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0 text-slate-800">
            <User className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-xs">1-on-1 Strategy Session</h4>
            <p className="text-[11px] text-slate-500 leading-tight mt-0.5 font-medium">
              60 Minutes personalized session for your business.
            </p>
          </div>
        </div>

        {/* Highlight 2 */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0 text-slate-800">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-xs">Expert Growth Advice</h4>
            <p className="text-[11px] text-slate-500 leading-tight mt-0.5 font-medium">
              Actionable insights from industry experts.
            </p>
          </div>
        </div>

        {/* Highlight 3 */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0 text-slate-800">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-xs">Action Roadmap</h4>
            <p className="text-[11px] text-slate-500 leading-tight mt-0.5 font-medium">
              Clear next steps to accelerate your growth.
            </p>
          </div>
        </div>

        {/* Highlight 4 */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0 text-slate-800">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-xs">Confidential & Secure</h4>
            <p className="text-[11px] text-slate-500 leading-tight mt-0.5 font-medium">
              Your business information is always protected.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default DiagnosticBookingTab;
