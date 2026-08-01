import React from 'react';
import { Lock } from 'lucide-react';

interface DossierHeaderProps {
  sectionTitle: string;
  subtitle: string;
  pageNumber: number;
  totalPages?: number;
  icon?: React.ReactNode;
}

export const DossierHeader: React.FC<DossierHeaderProps> = ({
  sectionTitle,
  subtitle,
  pageNumber,
  totalPages = 16,
  icon
}) => {
  const formattedPageNum = pageNumber < 10 ? `0${pageNumber}` : `${pageNumber}`;
  const formattedTotalPages = totalPages < 10 ? `0${totalPages}` : `${totalPages}`;

  return (
    <div className="w-full mb-3 shrink-0">
      {/* Top Brand & System Line */}
      <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="flex items-baseline gap-0.5 font-sans font-black text-sm tracking-tight text-[#0a192f]">
            <span>KRG</span>
            <span className="text-[#c29d2f]">ONE</span>
          </div>
          <span className="text-[7.5pt] text-slate-400 font-light">|</span>
          <span className="text-[7.5pt] font-semibold text-slate-500 uppercase tracking-wider">
            Knowledge · Revenue · Growth
          </span>
        </div>

        <div className="flex items-center gap-3 text-[7.5pt] font-semibold text-slate-500">
          <span className="uppercase tracking-wider text-[#0a192f] font-bold">
            KRGONE Business Growth OS™
          </span>
          <span className="text-slate-300">|</span>
          <div className="flex items-center gap-1 text-[#c29d2f] font-extrabold uppercase tracking-widest">
            <Lock className="w-2.5 h-2.5" />
            <span>Confidential</span>
          </div>
        </div>
      </div>

      {/* Main Section Banner */}
      <div className="mt-2 flex items-center justify-between bg-gradient-to-r from-[#0a192f] via-[#0f2847] to-[#1e3a5f] text-white rounded-md p-2.5 shadow-sm border-l-4 border-[#c29d2f]">
        <div className="flex items-center gap-2.5">
          {icon && (
            <div className="p-1.5 bg-[#c29d2f]/20 border border-[#c29d2f]/40 rounded text-[#c29d2f] shrink-0">
              {icon}
            </div>
          )}
          <div>
            <h1 className="text-xs font-black uppercase tracking-wider text-white font-sans leading-tight">
              {sectionTitle}
            </h1>
            <p className="text-[7.5pt] text-slate-300 font-medium tracking-wide mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
