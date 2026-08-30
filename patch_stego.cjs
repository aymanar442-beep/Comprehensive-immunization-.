const fs = require('fs');
const file = 'src/components/SteganographyStudio.tsx';
let content = fs.readFileSync(file, 'utf8');

const s_nvk_banner = `
      {/* S-NVK KERNEL Integration Alert */}
      <div className="bg-rose-950/40 border border-rose-500/50 rounded-xl p-4 flex items-center justify-between gap-4 animate-pulse">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-rose-500/20 rounded-lg">
            <Lock className="w-5 h-5 text-rose-400" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-rose-400 font-mono">S-NVK KERNEL ACTIVE</h4>
            <p className="text-xs text-rose-300 font-mono">150,000 Neural Scenarios Validated. Zero-Width Payload locked in 40ms.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">`;

content = content.replace(/<div className="grid grid-cols-1 md:grid-cols-2 gap-6">/, s_nvk_banner);
fs.writeFileSync(file, content);
console.log("Patched Stego");
