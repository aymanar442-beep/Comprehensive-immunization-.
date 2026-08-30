const fs = require('fs');
const file = 'src/components/SapProtocolDashboard.tsx';
let content = fs.readFileSync(file, 'utf8');

const snvk_hardware_text = `
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed mt-4">
            <p className="text-emerald-400 font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              SYNCHRONIZED WITH SHAHEEN A1 HARDWARE NODE
            </p>
            <p className="mb-1 text-slate-400 border-b border-slate-800 pb-1">
              (Proprietary Ephemeral Neuro-Key Derivation, Stealth One-Way Dead-Drop, and Instant Memory Zeroization Architecture)
            </p>
            <p className="mt-2">{lang === 'ar' ? 'المخترع والمؤسس الحصري: أَيْمن الْعَرَايْشِي (Ayman Al-Araishi) — دمشق، سوريا.' : 'Inventor & Exclusive Founder: Eng. Ayman Al-Araishi — Damascus, Syria.'}</p>
            <p>{lang === 'ar' ? 'رقم العضوية والتوثيق: OSI Member (91-2037395) • Y Combinator Startup School' : 'Registry: OSI Member (91-2037395) • Y Combinator Startup School'}</p>
          </div>
`;

content = content.replace(/<div className="bg-slate-900\/60 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed mt-4">[\s\S]*?<\/div>/, snvk_hardware_text);

fs.writeFileSync(file, content);
console.log("Patched SAP with Hardware");
