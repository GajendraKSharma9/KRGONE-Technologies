import React from 'react';

interface SharedFooterProps {
  onNavigate?: (view: string) => void;
}

export const SharedFooter: React.FC<SharedFooterProps> = ({ onNavigate }) => {
  const handleNav = (view: string) => {
    if (onNavigate) {
      onNavigate(view);
    }
  };

  return (
    <footer className="bg-[#0f172a] text-slate-400 py-10 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium">
          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('PRIVACY_POLICY'); }} className="hover:text-white transition-colors">Privacy Policy</a>
          <span className="text-slate-700 hidden sm:inline">|</span>
          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('TERMS_AND_CONDITIONS'); }} className="hover:text-white transition-colors">Terms & Conditions</a>
          <span className="text-slate-700 hidden sm:inline">|</span>
          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('DISCLAIMER'); }} className="hover:text-white transition-colors">Disclaimer</a>
          <span className="text-slate-700 hidden sm:inline">|</span>
          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('REFUND_POLICY'); }} className="hover:text-white transition-colors">Refund Policy</a>
          <span className="text-slate-700 hidden sm:inline">|</span>
          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('COOKIE_POLICY'); }} className="hover:text-white transition-colors">Cookie Policy</a>
          <span className="text-slate-700 hidden sm:inline">|</span>
          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('CONTACT_US'); }} className="hover:text-white transition-colors">Contact Us</a>
        </div>
        <div className="text-xs mt-2">
          &copy; 2026 KRGONE. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
