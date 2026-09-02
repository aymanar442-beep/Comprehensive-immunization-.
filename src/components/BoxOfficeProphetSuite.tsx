import React, { useState } from 'react';
import { AppLanguage } from '../types';
import { 
  TrendingUp, ShieldCheck, Sparkles, Activity, AlertTriangle, 
  CheckCircle2, Globe2, DollarSign, Zap, RefreshCw, Layers, 
  HeartHandshake, Eye, Lock, Cpu, Server, FileText, ArrowRight, BarChart3
} from 'lucide-react';

interface BoxOfficeProphetSuiteProps {
  lang: AppLanguage;
}

export const BoxOfficeProphetSuite: React.FC<BoxOfficeProphetSuiteProps> = ({ lang }) => {
  const [scriptTitle, setScriptTitle] = useState<string>('Shadow Falcon: Sovereign Protocol');
  const [targetBudget, setTargetBudget] = useState<number>(45000000); // 45M USD
  const [targetMarkets, setTargetMarkets] = useState<string[]>(['na', 'mena', 'eu', 'asia']);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'prophecy' | 'retention_curve' | 'immunization' | 'fault_tolerance'>('prophecy');
  const [hasImmunized, setHasImmunized] = useState<boolean>(false);

  // Simulation Data
  const projectedGross = hasImmunized ? 182000000 : 118000000;
  const roiMultiplier = hasImmunized ? '4.04x' : '2.62x';
  const preventedLoss = hasImmunized ? 24000000 : 0;
  const humanitarian10Percent = Math.round(preventedLoss * 0.10);

  const runPredictionRadar = () => {
    setIsScanning(true);
    setHasImmunized(false);
    setTimeout(() => {
      setIsScanning(false);
    }, 1800);
  };

  const applyInstantImmunization = () => {
    setIsScanning(true);
    setTimeout(() => {
      setHasImmunized(true);
      setIsScanning(false);
      setActiveTab('immunization');
    }, 1200);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn text-slate-100">
      
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-[#04192b] to-slate-950 border border-cyan-500/40 p-6 md:p-8 shadow-2xl">
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-black uppercase tracking-wider rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5" />
                GLOBAL PRE-PRODUCTION PROPHET v5.0
              </span>
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                150K QUANTUM PATHS
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-black tracking-tight text-white">
              {lang === 'ar' 
                ? 'رادار التنبؤ بشباك التذاكر والتحصين الدرامي المسبق' 
                : 'Pre-Production Box Office Prophet & Drama Immunizer'}
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
              {lang === 'ar'
                ? 'النواة المتكاملة التي تقرأ مصير الفيلم وإيراداته العالمية قبل تصوير لقطة واحدة: مسح 100 سنة سينما، كشف ثغرات الملل وهبوط المشاهدة، وتطبيق التحصين الدرامي الفوري لتحويل الخسائر لأرباح أسطورية.'
                : 'The ultimate pre-production foresight engine: Scans 100 years of cinema metrics, predicts regional box office revenue down to the dollar, and immunizes pacing flaws before cameras roll.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <div className="bg-slate-900/90 border border-cyan-500/40 p-4 rounded-xl text-center min-w-[170px]">
              <div className="text-xs text-slate-400 font-semibold uppercase">
                {lang === 'ar' ? 'الإيرادات المتوقعة عالمياً' : 'Projected Global Gross'}
              </div>
              <div className="text-2xl font-black text-cyan-400 font-mono">
                ${projectedGross.toLocaleString()}
              </div>
              <div className="text-[11px] text-emerald-400 font-bold mt-0.5">
                ROI: {roiMultiplier}
              </div>
            </div>

            <div className="bg-slate-900/90 border border-amber-500/50 p-4 rounded-xl text-center min-w-[170px]">
              <div className="text-xs text-amber-300 font-semibold uppercase flex items-center justify-center gap-1">
                <HeartHandshake className="w-3.5 h-3.5" />
                {lang === 'ar' ? 'صندوق شاهين (10%)' : 'Shaheen Pledge (10%)'}
              </div>
              <div className="text-2xl font-black text-amber-400 font-mono">
                ${humanitarian10Percent.toLocaleString()}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {lang === 'ar' ? 'من وفورات التحصين' : 'From Immunized Losses'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-800 gap-2 overflow-x-auto pb-1">
        {[
          { id: 'prophecy', ar: '📊 رادار الإيرادات والأسواق', en: 'Global Revenue Radar', icon: TrendingUp },
          { id: 'retention_curve', ar: '📉 منحنى انتباه المشاهد (Retention)', en: 'Viewer Retention Curve', icon: Activity },
          { id: 'immunization', ar: '🛡️ التحصين الدرامي الفوري', en: 'Drama Immunization Core', icon: Sparkles },
          { id: 'fault_tolerance', ar: '⚡ الحصانة السيادية (Zero-Downtime)', en: 'Fault-Tolerant Resilience', icon: Cpu }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-3 rounded-t-xl font-bold text-xs md:text-sm transition-all border-t border-x whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-slate-900 border-cyan-500 text-cyan-300 shadow-lg'
                  : 'bg-slate-950/50 border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{lang === 'ar' ? tab.ar : tab.en}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: Global Revenue & Market Radar */}
      {activeTab === 'prophecy' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Controls */}
          <div className="lg:col-span-1 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Zap className="w-4 h-4 text-cyan-400" />
              {lang === 'ar' ? 'إعدادات المشروع والمسح الراداري' : 'Project Parameters'}
            </h3>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">
                {lang === 'ar' ? 'عنوان السيناريو / المسودة' : 'Draft / Screenplay Title'}
              </label>
              <input 
                type="text" 
                value={scriptTitle}
                onChange={(e) => setScriptTitle(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-cyan-300 font-mono focus:border-cyan-400 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 flex justify-between">
                <span>{lang === 'ar' ? 'ميزانية الإنتاج المقترحة' : 'Proposed Production Budget'}</span>
                <span className="text-cyan-400 font-mono font-bold">${targetBudget.toLocaleString()}</span>
              </label>
              <input 
                type="range"
                min={5000000}
                max={200000000}
                step={5000000}
                value={targetBudget}
                onChange={(e) => setTargetBudget(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            <button
              onClick={runPredictionRadar}
              disabled={isScanning}
              className="w-full py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>{lang === 'ar' ? 'مسح الأسواق العالمية...' : 'Scanning Global Markets...'}</span>
                </>
              ) : (
                <>
                  <TrendingUp className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'إعادة تشغيل الرادار التنبؤي' : 'Execute Prediction Radar'}</span>
                </>
              )}
            </button>
          </div>

          {/* Market Performance Cards */}
          <div className="lg:col-span-2 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-bold text-white">
                  {lang === 'ar' ? 'توزيع التوقعات عبر الأسواق الجغرافية الكبرى' : 'Territory Breakdown & Audience Sentiment'}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {lang === 'ar' ? 'مبني على خوارزمية الرادار التنبؤي ومسح المشاعر اللحظية' : 'Powered by Predictive Radar Engine'}
                </p>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                125K Monte Carlo Nodes
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { 
                  region: lang === 'ar' ? '🇺🇸 أمريكا الشمالية (Domestic Box Office)' : 'North America', 
                  expected: hasImmunized ? '$78,000,000' : '$48,000,000',
                  sentiment: '91% Positive',
                  risk: hasImmunized ? 'LOW (Optimized)' : 'MEDIUM (Pacing Flaw at 45m)'
                },
                { 
                  region: lang === 'ar' ? '🌍 الشرق الأوسط وشمال أفريقيا (MENA)' : 'MENA Region', 
                  expected: hasImmunized ? '$34,000,000' : '$22,000,000',
                  sentiment: '96% Viral Buzz',
                  risk: 'VERY LOW (High Resonance)'
                },
                { 
                  region: lang === 'ar' ? '🇪🇺 أوروبا والمملكة المتحدة' : 'Europe & UK', 
                  expected: hasImmunized ? '$42,000,000' : '$29,000,000',
                  sentiment: '88% Approval',
                  risk: hasImmunized ? 'LOW' : 'MODERATE'
                },
                { 
                  region: lang === 'ar' ? '🌏 آسيا والمحيط الهادئ' : 'Asia-Pacific', 
                  expected: hasImmunized ? '$28,000,000' : '$19,000,000',
                  sentiment: '89% High Action Demand',
                  risk: 'LOW'
                }
              ].map((m, idx) => (
                <div key={idx} className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200">{m.region}</span>
                    <span className="text-sm font-black font-mono text-cyan-400">{m.expected}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] pt-1">
                    <span className="text-slate-400">{lang === 'ar' ? 'المشاعر:' : 'Sentiment:'} <span className="text-emerald-400 font-bold">{m.sentiment}</span></span>
                    <span className="text-slate-400">{lang === 'ar' ? 'المخاطرة:' : 'Risk:'} <span className={m.risk.includes('LOW') ? 'text-cyan-400' : 'text-amber-400 font-bold'}>{m.risk}</span></span>
                  </div>
                </div>
              ))}
            </div>

            {!hasImmunized && (
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" />
                  <div className="text-xs text-amber-200">
                    <div className="font-bold">{lang === 'ar' ? 'تنبيه النواة: تم رصد ثغرة إجهاد درامي في الدقيقة 45!' : 'Radar Alert: Pacing Drop Detected at 45m mark!'}</div>
                    <div className="text-slate-400 mt-0.5">{lang === 'ar' ? 'التحصين الفوري سيرفع الإيرادات بمقدار 64 مليون دولار ويمنع تسرب المشاهدين.' : 'Instant immunization will unlock +$64M and prevent viewer drop-off.'}</div>
                  </div>
                </div>
                <button
                  onClick={applyInstantImmunization}
                  className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-amber-500/20 whitespace-nowrap transition-all"
                >
                  {lang === 'ar' ? '⚡ تطبيق التحصين الفوري' : '⚡ Apply Immunization'}
                </button>
              </div>
            )}
          </div>

        </div>
      )}

      {/* TAB 2: Viewer Retention Curve */}
      {activeTab === 'retention_curve' && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                {lang === 'ar' ? 'مخطط الانتباه والتوتر الدرامي لكل دقيقة في الفيلم' : 'Minute-by-Minute Viewer Retention Curve'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'ar' ? 'مقارنة السيناريو الحالي مع 420,000 سيناريو تاريخي ناجح' : 'Benchmarked against 420,000 historical cinematic blockbusters'}
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-3 h-3 rounded-full bg-cyan-400" />
                <span>{hasImmunized ? 'Immunized Curve (98% Stay)' : 'Current Draft'}</span>
              </div>
              {!hasImmunized && (
                <div className="flex items-center gap-1.5 text-amber-400">
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span>Flaw Drop (34% Quit at 45m)</span>
                </div>
              )}
            </div>
          </div>

          {/* Visual Retention Timeline */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {[
                { time: '00:00 - 15:00', label: lang === 'ar' ? 'الافتتاحية والصدمة الأولى' : 'Hook & Inciting Incident', retention: '99%', status: 'optimal' },
                { time: '15:00 - 45:00', label: lang === 'ar' ? 'بناء الصراع وتصاعد التوتر' : 'Conflict Escalation', retention: '94%', status: 'optimal' },
                { 
                  time: '45:00 - 75:00', 
                  label: lang === 'ar' ? 'المطاردة والمنعطف الأوسط' : 'Midpoint Crisis', 
                  retention: hasImmunized ? '97%' : '66%', 
                  status: hasImmunized ? 'optimal' : 'danger' 
                },
                { time: '75:00 - 110:00', label: lang === 'ar' ? 'ذروة الأحداث والانقلاب السيادي' : 'Climax & Sovereign Reveal', retention: '98%', status: 'optimal' }
              ].map((act, i) => (
                <div 
                  key={i} 
                  className={`p-4 rounded-xl border transition-all ${
                    act.status === 'danger' 
                      ? 'bg-amber-950/40 border-amber-500/80 shadow-md shadow-amber-500/10' 
                      : 'bg-slate-950/60 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                    <span>{act.time}</span>
                    <span className={`font-bold ${act.status === 'danger' ? 'text-amber-400' : 'text-cyan-400'}`}>
                      {act.retention}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white">{act.label}</div>
                  {act.status === 'danger' && (
                    <div className="text-[11px] text-amber-300 mt-2 flex items-center gap-1 font-semibold">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      {lang === 'ar' ? 'هبوط درامي خطير!' : 'Severe Pacing Sag!'}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Retention Bar Graphic */}
            <div className="w-full bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs text-slate-400">
                <span>0m (Act I)</span>
                <span>45m (Act II Sag)</span>
                <span>90m (Act III Climax)</span>
                <span>110m (Credits)</span>
              </div>
              <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-cyan-400 w-[40%]" />
                <div className={`h-full transition-all ${hasImmunized ? 'bg-cyan-400' : 'bg-amber-500 animate-pulse'} w-[30%]`} />
                <div className="h-full bg-cyan-400 w-[30%]" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Drama Immunization Core */}
      {activeTab === 'immunization' && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/40">
                  {lang === 'ar' ? 'تم تفعيل درع التحصين' : 'IMMUNIZATION ACTIVE'}
                </span>
                <span className="text-xs text-slate-400">
                  {lang === 'ar' ? 'سرب الموظفين الأربعة أنجز المعالجة في 18ms' : 'Swarm processed in 18ms'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                {lang === 'ar' ? 'تقرير المعالجة الدرامية والتحويل الاستراتيجي للحبكة' : 'Pacing Refactoring & Plot Rescue Report'}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Before */}
            <div className="p-5 rounded-xl bg-slate-950/80 border border-red-900/40 space-y-3">
              <div className="text-xs font-bold uppercase text-red-400 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                {lang === 'ar' ? 'المشهد قبل التحصين (نقطة الخسارة $24M)' : 'Before: High Risk Flaw'}
              </div>
              <h4 className="text-sm font-bold text-white">
                {lang === 'ar' ? 'المشهد 24 (الدقيقة 48): حوار طويل في غرفة فندقية' : 'Scene 24 (48m): Lengthy Hotel Room Dialogue'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'ar'
                  ? 'حوار استرجاعي (Exposition) بطيء بين الشخصيتين يشرح الماضي، تسبب في هبوط رتم التشويق بنسبة 34% وخطر مغادرة الصالات.'
                  : 'Stagnant static backstory exposition causing a 34% pacing drop and high audience abandonment risk.'}
              </p>
            </div>

            {/* After */}
            <div className="p-5 rounded-xl bg-cyan-950/30 border border-cyan-500/50 space-y-3 shadow-lg shadow-cyan-500/10">
              <div className="text-xs font-bold uppercase text-cyan-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                {lang === 'ar' ? 'المشهد بعد التحصين السيادي (وفر أرباح +$64M)' : 'After: Sovereign Immunized Scene'}
              </div>
              <h4 className="text-sm font-bold text-white">
                {lang === 'ar' ? 'المشهد 24 المحصّن: فخ الشفرة واختراق الاتصال' : 'Immunized Scene 24: Wiretap Ambush & Split-Second Decryption'}
              </h4>
              <p className="text-xs text-cyan-200 leading-relaxed">
                {lang === 'ar'
                  ? 'تم تحويل الحوار البطيء إلى مواجهة مشحونة أثناء انقطاع التيار الكهربائي واكتشاف جهاز تجسس مخفي، مع الاحتفاظ بنفس المعلومات ولكن بإيقاع تشويق حابس للأنفاس.'
                  : 'Transformed sluggish exposition into an intense wiretap discovery during a tactical blackout, delivering backstory through high-adrenaline action.'}
              </p>
            </div>

          </div>
        </div>
      )}

      {/* TAB 4: Fault-Tolerant Sovereign Resilience */}
      {activeTab === 'fault_tolerance' && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              {lang === 'ar' ? 'بروتوكول الحصانة التشغيلية المستمرة (Zero-Downtime Resilience)' : 'Zero-Downtime Sovereign Hardware & Node Core'}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {lang === 'ar' ? 'تطبيق خوارزميات التناوب الثنائي للبطارية والسيرفرات + فيش الـ 32-Byte Checksum' : 'Active-Active Node Alternation with 32-Byte Binary Integrity'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Node Cycling */}
            <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-200 flex items-center gap-1.5">
                  <Server className="w-4 h-4 text-cyan-400" />
                  Dual-Cell Node Alternation
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">
                  ACTIVE
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'ar'
                  ? 'تناوب ديناميكي بين خوادم المعالجة لمنع أي انقطاع أو حظر للذكاء الاصطناعي أثناء العمليات الحساسة.'
                  : 'Automated 50% threshold cycling between independent sovereign nodes for 100% uptime.'}
              </p>
              <div className="text-[11px] font-mono text-cyan-400 bg-slate-900 p-2 rounded border border-slate-800">
                Primary: Node-A (Active) | Secondary: Standby
              </div>
            </div>

            {/* Offline Edge Buffer */}
            <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-200 flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-amber-400" />
                  Offline Edge Storage
                </span>
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px]">
                  SYNC READY
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'ar'
                  ? 'استمرار التدقيق والتحصين بالكامل حتى لو انقطع الإنترنت والكهرباء عن استوديو التصوير.'
                  : 'Zero data loss during mountain or offline sets. Automatic checksum handshake upon reconnection.'}
              </p>
              <div className="text-[11px] font-mono text-amber-400 bg-slate-900 p-2 rounded border border-slate-800">
                Checksum: 0xFF Match Confirmed (32-Byte)
              </div>
            </div>

            {/* Dual Layer Shield */}
            <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-200 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Dual-Layer Legal & Iron Shield
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">
                  ENFORCED
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'ar'
                  ? 'حماية تقنية وقانونية مزدوجة تحمي الملكية الفكرية وتخلي المسؤولية تلقائياً في السجل المشفر.'
                  : 'Automated blockchain-style tamper-proof timestamping protecting studio liability.'}
              </p>
              <div className="text-[11px] font-mono text-emerald-400 bg-slate-900 p-2 rounded border border-slate-800">
                Sovereign Disclaimer: Hash Signed
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
