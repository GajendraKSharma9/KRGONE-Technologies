const fs = require('fs');
let content = fs.readFileSync('src/components/PrintDossier.tsx', 'utf8');

const replacementFooter = `        {/* Custom Footer */}
        <div className="mt-auto pt-2">
          <div className="flex items-center justify-between border-t border-slate-300 pt-3 text-[7.5pt] text-slate-700 font-medium">
            <span className="font-black text-[#0f172a] text-[10pt] tracking-widest uppercase">KRGONE</span>
            <div className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400"/> <span>Jaipur, Rajasthan</span></div>
            <div className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-slate-400"/> <span>7300300330</span></div>
            <div className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-slate-400"/> <span>enquiry.krgone@gmail.com</span></div>
            <div className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-slate-400"/> <span>www.krgone.vercel.app</span></div>
          </div>
        </div>`;

// Replace Page 2
content = content.replace(
/\{\/\* Custom Footer \*\/\}\s*<div className="mt-auto pt-2">\s*<div className="flex items-end justify-between border-t border-slate-300 pt-3 text-\[8\.5pt\] text-slate-700 font-medium">\s*<div>\s*<span className="font-black text-\[#0f172a\] text-\[12pt\] block leading-none mb-1 tracking-widest uppercase">KRGONE<\/span>\s*<span className="text-\[#0d9488\] font-bold text-\[7\.5pt\] tracking-widest uppercase">BUSINESS GROWTH CONSULTING<\/span>\s*<\/div>\s*<div className="flex items-center gap-1\.5"><MapPin className="w-3\.5 h-3\.5 text-slate-400"\/> <span>\{formData\?\.location \|\| ''\}<br\/>India<\/span><\/div>\s*<div className="flex items-center gap-1\.5"><Phone className="w-3\.5 h-3\.5 text-slate-400"\/> \+91 7300300330<\/div>\s*<div className="flex items-center gap-1\.5"><Mail className="w-3\.5 h-3\.5 text-slate-400"\/> enquiry\.krgone@gmail\.com<\/div>\s*<div className="flex items-center gap-1\.5"><Globe className="w-3\.5 h-3\.5 text-slate-400"\/> www\.krgone\.vercel\.app<\/div>\s*<\/div>\s*<div className="flex justify-center items-center mt-3 relative">\s*<div className="text-\[8\.5pt\] font-bold text-slate-700 bg-slate-100 px-4 py-1 rounded-full border border-slate-200">Page 2 of 4<\/div>\s*<div className="text-\[7\.5pt\] font-bold text-white bg-\[#0f172a\] px-3 py-1 rounded-full absolute right-0">Version 1\.0<\/div>\s*<\/div>\s*<\/div>/,
replacementFooter
);

// Replace Page 3
content = content.replace(
/\{\/\* Custom Footer \*\/\}\s*<div className="mt-auto pt-2">\s*<div className="flex items-end justify-between border-t border-slate-300 pt-3 text-\[8\.5pt\] text-slate-700 font-medium">\s*<div className="flex items-center gap-3">\s*<span className="font-black text-\[#0f172a\] text-\[10\.5pt\] block leading-none tracking-widest uppercase">KRGONE<\/span>\s*<span className="text-\[#0d9488\] font-medium text-\[8\.5pt\]">Business Growth Consulting<\/span>\s*<\/div>\s*<div className="flex items-center gap-1\.5"><MapPin className="w-3\.5 h-3\.5 text-slate-400"\/> <span>\{formData\?\.location \? formData\.location \+ ', ' : ''\}India<\/span><\/div>\s*<div className="flex items-center gap-1\.5"><Globe className="w-3\.5 h-3\.5 text-slate-400"\/> www\.krgone\.vercel\.app<\/div>\s*<div className="text-\[8\.5pt\] font-bold text-white bg-\[#0f172a\] px-5 py-1\.5 rounded-full">Page 3 of 4<\/div>\s*<\/div>\s*<\/div>/,
replacementFooter
);

// Replace Page 4
content = content.replace(
/\{\/\* Custom Footer \*\/\}\s*<div className="mt-auto pt-2">\s*<div className="flex items-end justify-between border-t border-slate-300 pt-3 text-\[8\.5pt\] text-slate-700 font-medium">\s*<div className="flex items-center gap-3">\s*<span className="font-black text-\[#0f172a\] text-\[10\.5pt\] block leading-none tracking-widest uppercase">KRGONE<\/span>\s*<span className="text-\[#0d9488\] font-medium text-\[8\.5pt\]">Business Growth Consulting<\/span>\s*<\/div>\s*<div className="flex items-center gap-1\.5"><MapPin className="w-3\.5 h-3\.5 text-slate-400"\/> <span>\{formData\?\.location \? formData\.location \+ ', ' : ''\}India<\/span><\/div>\s*<div className="flex items-center gap-1\.5"><Phone className="w-3\.5 h-3\.5 text-slate-400"\/> \+91 7300300330<\/div>\s*<div className="flex items-center gap-1\.5"><Mail className="w-3\.5 h-3\.5 text-slate-400"\/> enquiry\.krgone@gmail\.com<\/div>\s*<div className="flex items-center gap-1\.5"><Globe className="w-3\.5 h-3\.5 text-slate-400"\/> www\.krgone\.vercel\.app<\/div>\s*<div className="text-\[8\.5pt\] font-bold text-white bg-\[#0f172a\] px-5 py-1\.5 rounded-full">Page 4 of 4<\/div>\s*<\/div>\s*<\/div>/,
replacementFooter
);

fs.writeFileSync('src/components/PrintDossier.tsx', content, 'utf8');
