import React, { useState } from 'react';
import { AppLanguage } from '../types';
import { 
  Clapperboard, Camera, Calendar, Clock, DollarSign, Sparkles, 
  Layers, Users, Film, CheckCircle2, ChevronRight, Sliders, Eye, 
  MapPin, HeartHandshake, Zap, Download, RefreshCw, AlertCircle, 
  Share2, ArrowRight
} from 'lucide-react';

interface VirtualProductionSuiteProps {
  lang: AppLanguage;
}

interface ShotItem {
  shotNumber: string;
  type: string;
  lens: string;
  cameraMovement: string;
  lightingSetup: string;
  actorDirection: string;
  estimatedCost: number;
}

interface ShootingDay {
  dayNumber: number;
  location: string;
  scenesCount: number;
  scenesList: string[];
  castRequired: string[];
  dailyBudget: number;
  savedCost: number;
}

export const VirtualProductionSuite: React.FC<VirtualProductionSuiteProps> = ({ lang }) => {
  const [activeRole, setActiveRole] = useState<'writer' | 'director' | 'producer'>('director');
  const [selectedScene, setSelectedScene] = useState<number>(1);
  const [sceneText, setSceneText] = useState<string>(
    lang === 'ar'
      ? 'مشهد 12 - ليل / داخلي - غرفة المراقبة السيادية\nيصل شاهين وهو يرتدي معطفاً داكناً. شاشات الرادار تومض بالأحمر. يلتفت إلى المهندس أيمن: "الخوارزمية اخترقت الجدار الناري... لدينا 3 دقائق قبل أن تبدأ عاصفة السيرفرات".'
      : 'SCENE 12 - NIGHT / INT - SOVEREIGN SURVEILLANCE VAULT\nSHAHEEN enters wearing a tactical trenchcoat. Radar displays strobe in crimson. He turns to ENG. AYMAN: "The kernel penetrated the sovereign firewall... We have 3 minutes before the server storm hits."'
  );

  // Writer Cost Assistant State
  const [rawCostEstimate, setRawCostEstimate] = useState<number>(450000);
  const [optimizedCost, setOptimizedCost] = useState<number>(65000);
  const [creativeOffset, setCreativeOffset] = useState<string>(
    lang === 'ar'
      ? 'استبدال 15 ممثلاً إضافياً وإطلاق نار حقيقي بمؤثرات صوتية محيطية وإضاءة ستروب حمراء مركزة تعكس حالة الهلع النفسي وتوفر 385,000 دولار!'
      : 'Replace 15 background extras and live pyrotechnics with low-key neon rim lighting and ambient binaural sound design, saving $385,000 while escalating psychological dread!'
  );

  // Director Shot List State
  const shotsList: ShotItem[] = [
    {
      shotNumber: '12A',
      type: 'Wide Establishing Shot',
      lens: '35mm Anamorphic T1.5',
      cameraMovement: 'Slow Slow Push-In on Steadicam',
      lightingSetup: 'High-contrast Chiaroscuro with Cyan & Amber accents',
      actorDirection: 'Composed, authoritative presence, zero blinking.',
      estimatedCost: 15000
    },
    {
      shotNumber: '12B',
      type: 'Medium Close-Up (MCU) - Over the Shoulder',
      lens: '50mm Prime Lens T1.3',
      cameraMovement: 'Subtle Handheld Drift (Simulating Tension)',
      lightingSetup: 'Single key light reflecting off server monitor glow',
      actorDirection: 'Deliver dialogue at a cold, calculated whisper.',
      estimatedCost: 12000
    },
    {
      shotNumber: '12C',
      type: 'Extreme Close-Up (ECU) - Eye & Terminal',
      lens: '85mm Macro Cine Lens',
      cameraMovement: 'Locked Static Dutch Angle',
      lightingSetup: 'Fast cycling red alarm strobe (120 FPS sync)',
      actorDirection: 'Eyes tracking moving hex code on screen.',
      estimatedCost: 8000
    }
  ];

  // Producer Shooting Schedule State
  const shootingDays: ShootingDay[] = [
    {
      dayNumber: 1,
      location: 'Sovereign Vault Studio (Soundstage A)',
      scenesCount: 5,
      scenesList: ['Scene 12', 'Scene 13', 'Scene 14', 'Scene 22', 'Scene 23'],
      castRequired: ['Shaheen', 'Eng. Ayman', 'Lead Hacker'],
      dailyBudget: 42000,
      savedCost: 110000
    },
    {
      dayNumber: 2,
      location: 'High-Tech Rooftop Helipad (Night Shoot)',
      scenesCount: 3,
      scenesList: ['Scene 30', 'Scene 31', 'Scene 32'],
      castRequired: ['Shaheen', 'Sovereign Pilot'],
      dailyBudget: 68000,
      savedCost: 95000
    },
    {
      dayNumber: 3,
      location: 'Underground Fiber Tunnel',
      scenesCount: 4,
      scenesList: ['Scene 4', 'Scene 5', 'Scene 40', 'Scene 41'],
      castRequired: ['Lead Hacker', 'Tactical Squad'],
      dailyBudget: 35000,
      savedCost: 80000
    }
  ];

  const totalSavedProduction = shootingDays.reduce((acc, curr) => acc + curr.savedCost, 0) + (rawCostEstimate - optimizedCost);
  const humanitarian10Percent = Math.round(totalSavedProduction * 0.10);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn text-slate-100">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-[#071626] to-slate-950 border border-cyan-500/40 p-6 md:p-8 shadow-2xl">
        <div className="absolute -top-12 -right-12 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-black uppercase tracking-wider rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 flex items-center gap-1.5">
                <Clapperboard className="w-3.5 h-3.5" />
                SOVEREIGN VIRTUAL PRODUCTION SUITE v6.0
              </span>
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                WRITER • DIRECTOR • PRODUCER
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-black tracking-tight text-white">
              {lang === 'ar' 
                ? 'غرفة العمليات الإخراجية الشاملة وهندسة التصوير' 
                : 'Sovereign 3-in-1 Virtual Production Ops'}
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
              {lang === 'ar'
                ? 'الحل الموحد لثالوث السينما: كتابة السيناريو مع ضبط التكلفة الفوري، توليد قائمة لقطات الكاميرا والعدسات بدقة هوليوودية للمخرج، وضغط أيام التصوير للمنتج لمنع أي هدر مالي.'
                : 'The unified production bridge: Real-time script budgeting for screenwriters, Hollywood-grade shot & lens blocking for directors, and zero-waste schedule compaction for producers.'}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <div className="bg-slate-900/90 border border-cyan-500/40 p-4 rounded-xl text-center min-w-[170px]">
              <div className="text-xs text-slate-400 font-semibold uppercase">
                {lang === 'ar' ? 'إجمالي الوفورات الإنتاجية' : 'Total Waste Prevented'}
              </div>
              <div className="text-2xl font-black text-cyan-400 font-mono">
                ${totalSavedProduction.toLocaleString()}
              </div>
              <div className="text-[11px] text-emerald-400 font-bold mt-0.5">
                {lang === 'ar' ? 'تصوير محسوب بالدقيقة' : 'Zero Shooting Waste'}
              </div>
            </div>

            <div className="bg-slate-900/90 border border-amber-500/50 p-4 rounded-xl text-center min-w-[170px]">
              <div className="text-xs text-amber-300 font-semibold uppercase flex items-center justify-center gap-1">
                <HeartHandshake className="w-3.5 h-3.5" />
                {lang === 'ar' ? 'حصة الإنسانية (10%)' : 'Humanitarian 10%'}
              </div>
              <div className="text-2xl font-black text-amber-400 font-mono">
                ${humanitarian10Percent.toLocaleString()}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {lang === 'ar' ? 'من ميزانية الوفر' : 'Auto Allocated'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Role Navigation Switcher */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { 
            id: 'writer', 
            ar: '✍️ 1. منصة الكاتب وضبط الميزانية اللحظية', 
            en: '1. Writer Live Cost Optimizer', 
            desc: lang === 'ar' ? 'اكتب بحرية والذكاء يحول المشاهد المكلفة لبدائل ذكية' : 'Draft scenes with instant cost refactoring',
            icon: Clapperboard,
            color: 'cyan'
          },
          { 
            id: 'director', 
            ar: '🎬 2. قمرة المخرج وقائمة اللقطات (Shot List)', 
            en: '2. Director Shot & Lens Blocking', 
            desc: lang === 'ar' ? 'توليد تلقائي لنوع العدسات وحركة الكاميرا وإضاءة المشهد' : 'Auto lens, camera motion & lighting blocking',
            icon: Camera,
            color: 'amber'
          },
          { 
            id: 'producer', 
            ar: '📅 3. مجدول المنتج الذكي (Zero-Waste Schedule)', 
            en: '3. Producer Compaction Call Sheets', 
            desc: lang === 'ar' ? 'تجميع المشاهد والمواقع لتقليص مدة التصوير للنصف' : 'Scene aggregation cutting shooting days by 50%',
            icon: Calendar,
            color: 'emerald'
          },
        ].map((role) => {
          const Icon = role.icon;
          const isActive = activeRole === role.id;
          return (
            <button
              key={role.id}
              onClick={() => setActiveRole(role.id as any)}
              className={`p-5 rounded-2xl text-left rtl:text-right border transition-all duration-200 flex flex-col justify-between space-y-2 ${
                isActive 
                  ? 'bg-slate-900 border-cyan-500 shadow-xl shadow-cyan-500/10 scale-[1.01]' 
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-bold text-sm text-white flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  {lang === 'ar' ? role.ar : role.en}
                </span>
                {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
              </div>
              <p className="text-xs text-slate-400">{role.desc}</p>
            </button>
          );
        })}
      </div>

      {/* 1. WRITER WORKSPACE */}
      {activeRole === 'writer' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Clapperboard className="w-4 h-4 text-cyan-400" />
                {lang === 'ar' ? 'محرر السيناريو المربوط بحساب التكلفة الفورية' : 'Live Screenplay Editor & Real-Time Cost Feed'}
              </h3>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                SCENE 12
              </span>
            </div>

            <textarea 
              rows={8}
              value={sceneText}
              onChange={(e) => setSceneText(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-xs md:text-sm font-mono text-cyan-200 focus:border-cyan-400 outline-none leading-relaxed resize-none"
            />

            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>{lang === 'ar' ? 'الكلمات: 48 كلمة' : '48 words'}</span>
              <span>{lang === 'ar' ? 'الوقت التقديري على الشاشة: 1:30 دقيقة' : 'Est. Screen Time: 1m 30s'}</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-5">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              {lang === 'ar' ? 'هندسة التكلفة والبديل الإبداعي الذكي' : 'Smart Aesthetic Cost Offsetting'}
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 bg-slate-950 rounded-xl border border-red-900/40">
                <div className="text-[11px] text-slate-400 uppercase font-semibold">{lang === 'ar' ? 'التكلفة بالإنتاج التقليدي' : 'Raw Production'}</div>
                <div className="text-lg font-black text-red-400 font-mono mt-1">${rawCostEstimate.toLocaleString()}</div>
              </div>
              <div className="p-3.5 bg-slate-950 rounded-xl border border-emerald-500/40">
                <div className="text-[11px] text-emerald-400 uppercase font-semibold">{lang === 'ar' ? 'التكلفة بعد التحصين الذكي' : 'Sovereign Optimized'}</div>
                <div className="text-lg font-black text-emerald-400 font-mono mt-1">${optimizedCost.toLocaleString()}</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/40 space-y-2">
              <div className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                {lang === 'ar' ? 'اقتراح النواة لإنقاذ المشهد بدون خفض القيمة الفنية:' : 'AI Director Swarm Creative Offset:'}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {creativeOffset}
              </p>
            </div>

            <div className="pt-2 flex justify-between items-center text-xs font-mono text-amber-400 bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span>{lang === 'ar' ? 'الوفر المحقق في هذا المشهد:' : 'Net Scene Savings:'}</span>
              <span className="font-bold text-sm text-emerald-400">${(rawCostEstimate - optimizedCost).toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. DIRECTOR WORKSPACE */}
      {activeRole === 'director' && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Camera className="w-5 h-5 text-amber-400" />
                {lang === 'ar' ? 'قائمة لقطات الكاميرا والعدسات (Director Shot List & Lens Blocking)' : 'Automated Director Shot List & Blocking Deck'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'ar' ? 'تفكيك المشهد 12 إلى زوايا تصوير سينمائية جاهزة للتنفيذ بدون إضاعة دقيقة واحدة في موقع التصوير' : 'Scene 12 parsed into precision camera setups, focal lengths, and actor cues'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all text-slate-200">
                <Download className="w-3.5 h-3.5" />
                {lang === 'ar' ? 'تصدير لمدير التصوير (PDF)' : 'Export DOP Sheet'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {shotsList.map((shot, idx) => (
              <div key={idx} className="p-5 bg-slate-950/70 border border-slate-800 hover:border-cyan-500/50 rounded-2xl space-y-3 transition-all">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                  <span className="font-mono font-black text-base text-cyan-400">{shot.shotNumber}</span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                    {shot.type}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-slate-500 font-semibold">{lang === 'ar' ? 'العدسة الموصى بها:' : 'Lens & Aperture:'}</span>
                    <div className="font-mono text-amber-300 font-bold mt-0.5">{shot.lens}</div>
                  </div>

                  <div>
                    <span className="text-slate-500 font-semibold">{lang === 'ar' ? 'حركة الكاميرا:' : 'Camera Movement:'}</span>
                    <div className="text-slate-200 mt-0.5">{shot.cameraMovement}</div>
                  </div>

                  <div>
                    <span className="text-slate-500 font-semibold">{lang === 'ar' ? 'هندسة الإضاءة:' : 'Lighting Scheme:'}</span>
                    <div className="text-slate-300 mt-0.5">{shot.lightingSetup}</div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/60">
                    <span className="text-slate-500 font-semibold">{lang === 'ar' ? 'توجيه الممثلين:' : 'Actor Direction:'}</span>
                    <div className="text-cyan-200 italic mt-0.5">"{shot.actorDirection}"</div>
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center text-[11px] font-mono text-slate-400 border-t border-slate-800/60">
                  <span>{lang === 'ar' ? 'تكلفة اللقطة:' : 'Shot Budget:'}</span>
                  <span className="text-emerald-400 font-bold">${shot.estimatedCost.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. PRODUCER WORKSPACE */}
      {activeRole === 'producer' && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-400" />
                {lang === 'ar' ? 'مجدول أيام التصوير الذكي (Compacted Shooting Schedule)' : 'Zero-Waste Schedule & Call Sheet Matrix'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'ar' ? 'تجميع المشاهد في نفس اللوكيشن لتقليص مدة التصوير من 60 يوماً إلى 28 يوماً' : 'Grouping scenes by location and cast availability to cut overall shooting duration in half'}
              </p>
            </div>
            <div className="text-xs font-mono px-3 py-1.5 rounded-xl bg-emerald-950/60 text-emerald-300 border border-emerald-500/40">
              {lang === 'ar' ? 'وفر إجمالي: 53% من تكاليف الإنتاج' : 'Total Saved: 53% of Call Budget'}
            </div>
          </div>

          <div className="space-y-3">
            {shootingDays.map((day, idx) => (
              <div key={idx} className="p-5 bg-slate-950/70 border border-slate-800 rounded-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-cyan-300 font-mono font-bold text-xs">
                      DAY {day.dayNumber}
                    </span>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {day.location}
                    </h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pt-1">
                    <span>{lang === 'ar' ? 'المشاهد المجدولة:' : 'Scenes:'}</span>
                    {day.scenesList.map((sc, sIdx) => (
                      <span key={sIdx} className="px-2 py-0.5 bg-slate-900 rounded font-mono text-[11px] text-slate-300 border border-slate-800">
                        {sc}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-slate-400">
                    <span>{lang === 'ar' ? 'الممثلون المطلوبون:' : 'Cast Needed:'}</span>{' '}
                    <span className="text-slate-200 font-semibold">{day.castRequired.join(', ')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 border-t lg:border-t-0 lg:border-l rtl:lg:border-l-0 rtl:lg:border-r border-slate-800 pt-3 lg:pt-0 lg:px-6 shrink-0">
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase">{lang === 'ar' ? 'ميزانية اليوم' : 'Daily Spend'}</div>
                    <div className="text-base font-black text-white font-mono">${day.dailyBudget.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-emerald-500 font-semibold uppercase">{lang === 'ar' ? 'الوفر المحقق' : 'Waste Prevented'}</div>
                    <div className="text-base font-black text-emerald-400 font-mono">${day.savedCost.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
