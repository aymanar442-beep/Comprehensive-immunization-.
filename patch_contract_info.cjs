const fs = require('fs');
const file = 'src/components/FounderContractModal.tsx';
let content = fs.readFileSync(file, 'utf8');

const newInfo = `
            <h5 className="font-bold text-amber-300 uppercase tracking-widest text-xs mb-3 font-mono">
              {lang === 'ar' ? '1. الاعتمادات والسجلات الموثقة للمؤسس:' : '1. OFFICIAL FOUNDER CREDENTIALS & ACADEMIC REGISTRATIONS:'}
            </h5>
            
            <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-4 mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
               <div className="space-y-2">
                 <div className="flex gap-2 items-center"><span className="text-slate-400 w-24">الاسم واللقب:</span><strong className="text-white">أيمن العرايشي (العرّاب) — Ayman Alaraishi</strong></div>
                 <div className="flex gap-2 items-center"><span className="text-slate-400 w-24">البريد الإلكتروني:</span><strong className="text-white">aymanar442@gmail.com</strong></div>
                 <div className="flex gap-2 items-center"><span className="text-slate-400 w-24">واتساب:</span><strong className="text-white">+491731736547</strong></div>
               </div>
               <div className="space-y-2">
                 <div className="flex gap-2 items-center"><span className="text-slate-400 w-24">LinkedIn:</span><strong className="text-emerald-400">linkedin.com/in/ayman-alshame-7930b01a7</strong></div>
                 <div className="flex gap-2 items-center"><span className="text-slate-400 w-24">X / Twitter:</span><strong className="text-[#00d2ff]">x.com/Ayman__alshame</strong></div>
                 <div className="flex gap-2 items-center"><span className="text-slate-400 w-24">YouTube:</span><strong className="text-rose-400">@shaheen-apex-ai</strong></div>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">`;

content = content.replace(/<h5 className="font-bold text-amber-300 uppercase tracking-widest text-xs mb-3 font-mono">[\s\S]*?<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">/, newInfo);

// Add Google Cloud Badges
const newBadges = `
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-700 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white text-xs block">Google Cloud Professional Architect & DevOps</span>
                  <span className="text-[11px] text-slate-400">Professional Cloud Architect, DevOps Engineer, Security, Data, Network, Database & Security Operations.</span>
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-700 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white text-xs block">Generative AI Leader & ML Engineer</span>
                  <span className="text-[11px] text-slate-400">Professional Machine Learning Engineer, Gemini Enterprise Agent Ready, GDG Belfast & Cloud Saudi.</span>
                </div>
              </div>
`;

content = content.replace(/<div className="p-3 rounded-lg bg-slate-900\/90 border border-slate-700 flex items-start gap-2.5">\s*<CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" \/>\s*<div>\s*<span className="font-bold text-white text-xs block">Google Certified Software Engineer<\/span>\s*<span className="text-\[11px\] text-slate-400">Gemini Enterprise Agent Ready, GDG Belfast & Cloud Saudi Badges<\/span>\s*<\/div>\s*<\/div>/, newBadges);

fs.writeFileSync(file, content);
console.log("Patched Contract Info");
