import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Activity, Cpu, Fingerprint, Lock, ShieldAlert, HeartPulse, HardDrive, CheckCircle2, Radar } from 'lucide-react';
import { CyberFalconLogo } from './CyberFalconLogo';

export const SapProtocolDashboard: React.FC<{ lang: 'ar' | 'en' | 'fr' }> = ({ lang }) => {
  const [analyzing, setAnalyzing] = useState(false);
  const [systemState, setSystemState] = useState<'normal' | 'threat' | 'purged'>('normal');
  const [pulse, setPulse] = useState(72);
  const [eda, setEda] = useState(0.85); // Electrodermal activity

  useEffect(() => {
    if (systemState === 'normal' || systemState === 'threat') {
      const interval = setInterval(() => {
        setPulse(prev => {
          const shift = Math.floor(Math.random() * 5) - 2;
          const newPulse = prev + shift;
          if (systemState === 'threat') {
             return Math.min(Math.max(newPulse, 120), 160); // High stress
          }
          return Math.min(Math.max(newPulse, 60), 90); // Normal
        });
        
        setEda(prev => {
           if (systemState === 'threat') {
             return Math.min(prev + (Math.random() * 0.5), 5.0); // Spiking EDA
           }
           return Math.max(prev - (Math.random() * 0.1), 0.5); // Baseline EDA
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [systemState]);

  const simulateDuress = () => {
    setSystemState('threat');
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setSystemState('purged');
    }, 4000);
  };

  const resetSystem = () => {
    setSystemState('normal');
    setPulse(72);
    setEda(0.85);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* 1. NVK KERNEL Header */}
      <div className="bg-[#0f172a] border border-[#00d2ff]/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,210,255,0.1)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="relative z-10 flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-950 border border-[#00d2ff]/40 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-[#00d2ff]" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight flex items-center gap-2">
                SHAHEEN NEURO-VAULT KERNEL (S-NVK)
              </h2>
              <span className="px-2 py-0.5 rounded bg-blue-950/50 border border-blue-500/30 text-blue-400 text-[10px] font-mono mt-1 inline-block">
                {lang === 'ar' ? 'التدمير الذاتي العصبي' : 'Neural Dead-Drop Zeroization'}
              </span>
            </div>
          </div>
          
          
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

        </div>

        <div className="relative z-10">
          <CyberFalconLogo size="lg" glow={systemState === 'normal'} />
        </div>
      </div>

      {/* 2. Neuro-Vitals Radar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#020617] border border-slate-800 rounded-2xl p-5 shadow-inner">
           <h3 className="text-amber-400 font-bold font-mono text-sm mb-4 flex items-center gap-2">
             <HeartPulse className="w-4 h-4" />
             {lang === 'ar' ? 'اشتقاق المفتاح اللحظي (PPG ⊗ EDA ⊗ IMU)' : 'Ephemeral Neuro-Key Derivation'}
           </h3>
           <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-slate-800 pb-2">
                 <span className="text-xs text-slate-400 font-mono">Heart Rate (PPG)</span>
                 <span className={`text-2xl font-black font-mono ${systemState === 'threat' ? 'text-rose-500 animate-pulse' : 'text-emerald-400'}`}>
                    {pulse} BPM
                 </span>
              </div>
              <div className="flex justify-between items-end border-b border-slate-800 pb-2">
                 <span className="text-xs text-slate-400 font-mono">Electrodermal (EDA)</span>
                 <span className={`text-2xl font-black font-mono ${systemState === 'threat' ? 'text-rose-500 animate-pulse' : 'text-[#00d2ff]'}`}>
                    {eda.toFixed(2)} µS
                 </span>
              </div>
              <div className="pt-2">
                <p className="text-xs text-slate-500 font-mono leading-relaxed">
                  {lang === 'ar' 
                    ? 'يستحيل على المخترق سرقة مفتاح التشفير من داخل الجهاز، لأنه لا يُحفظ أبداً بل يُشتق لحظياً من حالة النبض والأعصاب.'
                    : 'Zero Stored Keys: Impossible to extract encryption keys from the device, as they are ephemerally derived from neurological vitals.'}
                </p>
              </div>
           </div>
        </div>

        {/* 3. Action Panel & Dead Drop */}
        <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-5 shadow-xl flex flex-col justify-between">
           <div>
              <h3 className="text-white font-bold font-mono text-sm mb-3 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-500" />
                {lang === 'ar' ? 'محاكاة التهديد والإكراه (Duress Immunity)' : 'Duress Immunity Simulation'}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                {lang === 'ar' 
                  ? 'إذا هدّدك أحد بالسلاح لفتح النظام، جسمك وتوتر أعصابك سيغيران المفتاح تلقائياً ليفتح شاشة وهمية، بينما تُرسل الوثائق للدرج أحادي الاتجاه.'
                  : 'If coerced at gunpoint, stress spikes alter the key derivation, opening a decoy interface while stealthily dropping real data into the one-way vault.'}
              </p>
           </div>
           
           {systemState === 'normal' && (
             <button
               onClick={simulateDuress}
               className="w-full py-4 rounded-xl bg-gradient-to-r from-rose-600 to-rose-900 hover:from-rose-500 hover:to-rose-800 text-white font-bold text-sm tracking-widest font-mono shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all cursor-pointer"
             >
               {lang === 'ar' ? '⚠️ محاكاة التهديد بالأسلحة (DURESS TRIGGER)' : '⚠️ TRIGGER DURESS SIMULATION'}
             </button>
           )}

           {systemState === 'threat' && (
             <div className="w-full py-4 rounded-xl bg-rose-950 border border-rose-500 text-rose-400 font-bold text-sm tracking-widest font-mono text-center animate-pulse">
               {lang === 'ar' ? '🚨 يتم الآن التطهير اللحظي والإسقاط السري...' : '🚨 ZEROIZING MEMORY & EXECUTING DEAD-DROP...'}
             </div>
           )}

           {systemState === 'purged' && (
             <button
               onClick={resetSystem}
               className="w-full py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm tracking-widest font-mono transition-all cursor-pointer border border-slate-600"
             >
               {lang === 'ar' ? '🔄 إعادة ضبط المنظومة' : '🔄 RESET KERNEL'}
             </button>
           )}
        </div>
      </div>

      {/* 4. Vault Status (Zeroization) */}
      <div className={`border-2 rounded-2xl p-6 transition-all duration-700 ${systemState === 'purged' ? 'bg-rose-950/20 border-rose-500 shadow-[0_0_30px_rgba(225,29,72,0.2)]' : 'bg-[#0f172a] border-[#1e293b]'}`}>
         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-4 flex-1">
               <h3 className={`font-black font-mono text-lg ${systemState === 'purged' ? 'text-rose-500' : 'text-white'}`}>
                 {systemState === 'purged' 
                   ? (lang === 'ar' ? 'تم تدمير الذاكرة وتأمين البيانات' : 'MEMORY PURGED & VAULT SECURED')
                   : (lang === 'ar' ? 'الدرج أحادي الاتجاه (One-Way Dead Drop)' : 'One-Way Sovereign Dead Drop Vault')}
               </h3>
               
               {systemState === 'purged' ? (
                 <div className="space-y-2 font-mono text-xs">
                    <p className="text-rose-400 flex items-center gap-2">
                      <X className="w-4 h-4" /> Local RAM Overwritten (7-Pass DoD 5220.22-M)
                    </p>
                    <p className="text-emerald-400 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> Decoy UI Rendered to Attacker
                    </p>
                    <p className="text-amber-400 flex items-center gap-2">
                      <Lock className="w-4 h-4" /> Payload encrypted with Air-Gapped Master Key
                    </p>
                 </div>
               ) : (
                 <ul className="space-y-2 font-mono text-xs text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00d2ff]">•</span>
                      {lang === 'ar' ? 'البيانات تُسقط في العقدة اللامركزية ولا يمكن سحبها.' : 'Data is dropped into the decentralized node.'}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00d2ff]">•</span>
                      {lang === 'ar' ? 'التطهير الذاتي اللحظي: مسح الذاكرة 7 مرات فور رصد العبث.' : 'Instant Hardware Zeroization: 7-pass memory wipe on physical tamper.'}
                    </li>
                 </ul>
               )}
            </div>
            
            <div className="w-32 h-32 rounded-full border-4 border-slate-800 flex items-center justify-center relative bg-slate-950">
               {systemState === 'purged' ? (
                 <HardDrive className="w-12 h-12 text-rose-500" />
               ) : (
                 <>
                   <div className="absolute inset-2 border-2 border-dashed border-[#00d2ff]/30 rounded-full animate-[spin_10s_linear_infinite]" />
                   <Lock className="w-10 h-10 text-slate-500" />
                 </>
               )}
            </div>
         </div>
      </div>
    </div>
  );
};
