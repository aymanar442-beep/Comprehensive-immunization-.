import React, { useState } from 'react';
import { Watch, ShieldCheck, BatteryCharging, WifiOff, Cpu, HeartPulse, Activity, ArrowRight, Lock, FileText, CheckCircle2, BrainCircuit, SignalZero } from 'lucide-react';
import { AppLanguage } from '../types';
import { CyberFalconLogo } from './CyberFalconLogo';
import { A1ContractModal } from './A1ContractModal';

export const ShaheenA1Hardware: React.FC<{ lang: AppLanguage }> = ({ lang }) => {
  const [isContractOpen, setIsContractOpen] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in duration-500 font-mono">
      {/* Contract Modal */}
      <A1ContractModal 
        isOpen={isContractOpen} 
        onClose={() => setIsContractOpen(false)} 
        lang={lang} 
      />

      {/* Header Section */}
      <div className="bg-[#0f172a] border border-[#00d2ff]/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,210,255,0.1)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="relative z-10 flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-950 border border-[#00d2ff]/40 flex items-center justify-center">
              <Watch className="w-6 h-6 text-[#00d2ff]" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">
              SHAHEEN A1
            </h1>
          </div>
          <h2 className="text-xl text-[#00d2ff] font-bold">
            {lang === 'ar' ? 'العتاد السيادي للمنظومة (Beyond Consumer Tech)' : 'Sovereign Closed-Loop Hardware (Beyond Consumer Tech)'}
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
            {lang === 'ar' 
              ? 'هذه ليست ساعة آبل أو تسلا التي تموت بانقطاع الشبكة. شاهين A1 هو عتاد بقاء سيادي يمتلك وعياً إدراكياً وسلوكياً. يعمل خارج التغطية، يتكيف مع بيولوجيا صاحبه، ويقضي على 95% من الإنذارات الكاذبة بقراءة الجملة العصبية.'
              : 'This is not an Apple Watch that dies without a signal. SHAHEEN A1 is a sovereign survival node with behavioral and cognitive awareness. It operates entirely offline, adapts to its user\'s biology, and eliminates 95% of false alarms by reading the nervous system.'}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button 
              onClick={() => setIsContractOpen(true)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-900 hover:from-amber-500 hover:to-amber-800 text-white font-bold text-sm tracking-widest uppercase shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              {lang === 'ar' ? 'عرض العقد السيادي لـ A1' : 'View A1 Pre-Seed Term Sheet'}
            </button>
          </div>
        </div>

        <div className="relative z-10 shrink-0">
          <CyberFalconLogo size="lg" glow={true} />
        </div>
      </div>

      {/* Visual Presentation Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#0b0f19] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl group relative aspect-video flex items-center justify-center">
           <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80 z-10" />
           <img 
             src="/hardware-1.jpg" 
             alt="Shaheen A1 Showcase 1" 
             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
             onError={(e) => {
               (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 450"><rect width="800" height="450" fill="%230f172a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="20" fill="%2364748b">Drop 60119.jpg here as public/hardware-1.jpg</text></svg>';
             }}
           />
           <div className="absolute bottom-6 left-6 z-20">
             <h3 className="text-white font-bold text-lg mb-1">{lang === 'ar' ? 'تصميم عسكري فائق الفخامة' : 'Premium Military-Grade Design'}</h3>
             <p className="text-xs text-[#00d2ff]">Quiet Vigilance & The Electric Falcon Blue (#168FFF)</p>
           </div>
        </div>

        <div className="bg-[#0b0f19] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl group relative aspect-video flex items-center justify-center">
           <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80 z-10" />
           <img 
             src="/hardware-2.jpg" 
             alt="Shaheen A1 Showcase 2" 
             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
             onError={(e) => {
               (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 450"><rect width="800" height="450" fill="%230f172a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="20" fill="%2364748b">Drop 60061.jpg here as public/hardware-2.jpg</text></svg>';
             }}
           />
           <div className="absolute bottom-6 left-6 z-20">
             <h3 className="text-white font-bold text-lg mb-1">{lang === 'ar' ? 'واجهة التتبع والذكاء الاصطناعي' : 'Tracking & AI Interface'}</h3>
             <p className="text-xs text-[#00d2ff]">Real-Time Tracking & AI Protection System</p>
           </div>
        </div>
      </div>

      {/* Core Architectural Features (The 4 Pillars of Supremacy) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Anti-False Alarm */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-[#00d2ff]/30 transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/50 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <h4 className="text-white font-bold text-sm lg:text-base">
              {lang === 'ar' ? 'القضاء على 95% من الإنذارات الكاذبة (معضلة صرخة الذئب)' : '95% False Alarm Elimination (Wolf-Crying)'}
            </h4>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {lang === 'ar' 
              ? 'الأجهزة الأخرى تعتمد على النبض فقط فتطلق إنذاراً عند الركض. شاهين يقرأ التعرق والنشاط الجلدي الكهربائي (EDA) من الجملة العصبية مع مستشعر الحركة. لا إنذار إلا إذا كان الخطر حقيقياً.'
              : 'Consumer devices panic over a jog. Shaheen fuses Nervous System Skin Conductance (EDA), Pulse, and Motion. It never cries wolf; it only alerts during genuine biological and physical duress.'}
          </p>
        </div>

        {/* Cognitive AI */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-[#00d2ff]/30 transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-950/50 flex items-center justify-center shrink-0 border border-purple-500/20">
              <BrainCircuit className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="text-white font-bold text-sm lg:text-base">
              {lang === 'ar' ? 'الذكاء الإدراكي السلوكي والزمني (Cognitive Temporal AI)' : 'Cognitive Temporal & Behavioral AI'}
            </h4>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {lang === 'ar' 
              ? 'ليس مجرد مستشعر أصم. النظام يمتلك إدراكاً للزمن (يعلم متى غادرت ومتى عدت)، ويتعلم البصمة البيولوجية لصاحبه ليتكيف معها، فيفهم طبيعة جسده ليميز بين الإرهاق الطبيعي والخطر المميت.'
              : 'Not a dumb sensor. The AI possesses temporal awareness (knows when you left/returned) and learns your specific biological baseline to adapt and flawlessly distinguish between normal fatigue and lethal danger.'}
          </p>
        </div>

        {/* Offline Resilience */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-[#00d2ff]/30 transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-rose-950/50 flex items-center justify-center shrink-0 border border-rose-500/20">
              <SignalZero className="w-6 h-6 text-rose-400" />
            </div>
            <h4 className="text-white font-bold text-sm lg:text-base">
              {lang === 'ar' ? 'العمل المطلق خارج التغطية (Absolute Offline Resilience)' : 'Absolute Offline Resilience'}
            </h4>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {lang === 'ar' 
              ? 'إذا انقطعت الشبكة، تموت أجهزة آبل. أما شاهين، فيستمر في تحليل الإشارات الحيوية بالكامل، ويقوم بتشفير وحفظ البيانات بحزم دقيقة (32-Byte Payload) مزودة بـ Checksum لمنع الاختراق حتى تعود الشبكة.'
              : 'When the network drops, Apple devices die. Shaheen continues full biometric processing internally, buffering hyper-compressed 32-Byte payloads with strict Checksums to prevent spoofing until reconnected.'}
          </p>
        </div>

        {/* Dual Cell Battery */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-[#00d2ff]/30 transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-950/50 flex items-center justify-center shrink-0 border border-blue-500/20">
              <BatteryCharging className="w-6 h-6 text-[#00d2ff]" />
            </div>
            <h4 className="text-white font-bold text-sm lg:text-base">
              {lang === 'ar' ? 'الطاقة التبادلية الديناميكية (Dynamic Dual-Cell Swapping)' : 'Dynamic Dual-Cell Power Swapping'}
            </h4>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {lang === 'ar' 
              ? 'لا يطفئ فجأة. العتاد مزود بخلايا طاقة مزدوجة تعمل بالتناوب. النظام يحول سحب التيار بين الخلايا بذكاء لتأمين أطول فترة حياة للبطارية وضمان عدم انقطاع المراقبة في اللحظات الحرجة أبداً.'
              : 'Never abruptly dies. Engineered with dual power cells operating in dynamic alternation. The system intelligently swaps power draw to maximize battery lifespan and guarantee 100% uptime during critical events.'}
          </p>
        </div>

      </div>
    </div>
  );
};
