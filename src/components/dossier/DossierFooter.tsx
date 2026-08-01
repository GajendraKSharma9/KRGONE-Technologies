import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

interface DossierFooterProps {
  companyName?: string;
  reportId?: string;
}

export const DossierFooter: React.FC<DossierFooterProps> = () => {
  return (
    <div className="w-full mt-auto shrink-0 pt-2">
      <div className="w-full bg-[#0a192f] border-t-2 border-[#c29d2f] py-2 px-4 rounded-b-sm flex items-center justify-center text-white text-[7.5pt] font-medium">
        <div className="flex items-center gap-3 text-slate-200 font-sans whitespace-nowrap">
          <span className="font-extrabold text-[#c29d2f] tracking-wider">KRGONE</span>

          <span className="text-slate-500">|</span>
          <div className="flex items-center gap-1">
            <Globe className="w-2.5 h-2.5 text-[#c29d2f] shrink-0" />
            <span>www.krgone.vercel.app</span>
          </div>
        </div>
      </div>
    </div>
  );
};


