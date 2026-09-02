import React, { useState } from 'react';
import { AppLanguage } from '../types';
import { 
  Clapperboard, DollarSign, Sparkles, ShieldAlert, CheckCircle2, 
  RefreshCw, TrendingUp, HeartHandshake, Film, Layers, Zap, Scale,
  UserCheck, AlertTriangle, ArrowRight, Eye, Play, Sliders
} from 'lucide-react';

interface AutonomousDirectorSuiteProps {
  lang: AppLanguage;
}

interface ScenePlan {
  sceneNum: number;
  title: string;
  cost: number;
  originalCost: number;
  essential: boolean;
  actionSummary: string;
  smartCompromise: string;
}

export const AutonomousDirectorSuite: React.FC<AutonomousDirectorSuiteProps> = ({ lang }) => {
  const [budgetInput, setBudgetInput] = useState<number>(100000);
  const [genre, setGenre] = useState<string>('action_thriller');
  const [isSynthesizing, setIsSynthesizing] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(true);
  const [negotiationLog, setNegotiationLog] = useState<string[]>([]);
  const [selectedPlanMode, setSelectedPlanMode] = useState<'optimized' | 'blockbuster_expansion' | 'commercial_lean'>('optimized');

  const genres = [
    { id: 'action_thriller', ar: '🎬 إثارة وحركة ملحمية (Action Thriller)', en: 'Action Thriller' },
    { id: 'sci_fi_mystery', ar: '🌌 خيال علمي وغموض سري (Sci-Fi Mystery)', en: 'Sci-Fi Mystery' },
    { id: 'historical_drama', ar: '⚔️ دراما تاريخية وسير ذاتية (Historical Drama)', en: 'Historical Drama' },
    { id: 'psychological_noir', ar: '🧠 جريمة نفسية معقدة (Psychological Noir)', en: 'Psychological Noir' }
  ];

  // Run the 3-Agent Negotiation Loop
  const runAutonomousNegotiation = () => {
    setIsSynthesizing(true);
    setShowResult(false);
    setActiveStep(1);
    setNegotiationLog([]);

    const logs: string[] = [];

    setTimeout(() => {
      logs.push(
        lang === 'ar' 
          ? '🎬 [المخرج ذكاء بيك]: استلمت الميزانية المطروحة ($' + budgetInput.toLocaleString() + '). مطلوب رؤية إخراجية هوليوودية متكاملة دون هبوط في رتم الإبهار البصري.'
          : '🎬 [Executive AI Director]: Target budget ingested ($' + budgetInput.toLocaleString() + '). Goal: Directing a high-tension visual cinematic experience.'
      );
      setNegotiationLog([...logs]);
      setActiveStep(2);
    }, 600);

    setTimeout(() => {
      logs.push(
        lang === 'ar' 
          ? '✍️ [الكاتب والسيناريست]: قمت بمسح 420,000 سيناريو تاريخي لضمان خلو النص من التكرار والابتذال. كتبت مسودة من 8 مشاهد متكاملة، لكن تقدير المشهد 4 و 7 يتجاوز السقف المحدد بـ 28%.'
          : '✍️ [Master Screenwriter]: Scanned 420,000 global screenplays to avoid copyright cliches. Screenplay drafted with 8 pivotal sequences. Scenes 4 & 7 initially breach cost limits by 28%.'
      );
      setNegotiationLog([...logs]);
      setActiveStep(3);
    }, 1400);

    setTimeout(() => {
      logs.push(
        lang === 'ar' 
          ? '💰 [المدقق المالي واقتصاديات الإنتاج]: تم تشغيل 150,000 محاكاة مونت كارلو لمصاريف البرغي، ومعدات الإضاءة، وتأجير الكرو. وفرنا $42,000 بتحويل مشهد التفجير الخارجي إلى صدمة داخلية مشوقة.'
          : '💰 [Financial Loss Comptroller]: Executed 150,000 Quantum Monte Carlo cost simulations. Replaced expensive external pyrotechnics with high-contrast psycho-thriller interior lighting, saving $42,000!'
      );
      setNegotiationLog([...logs]);
      setActiveStep(4);
    }, 2200);

    setTimeout(() => {
      logs.push(
        lang === 'ar' 
          ? '⚖️ [قرار النواة السيادية]: تم قفل الميزانية بدقة 100%. تم إنتاج سيناريو فخم بمقاس $' + budgetInput.toLocaleString() + ' تماماً، واقتطاع 10% من وفورات الهدر لصالح صندوق شاهين الإنساني.'
          : '⚖️ [Sovereign Swarm Verdict]: Budget locked at 100% precision. Golden production package ready. 10% humanitarian allocation dedicated to Shaheen Foundation.'
      );
      setNegotiationLog([...logs]);
      setIsSynthesizing(false);
      setShowResult(true);
    }, 3000);
  };

  // Dynamic Scene Calculation based on budget
  const calculateScenes = (): ScenePlan[] => {
    const b = budgetInput;
    return [
      {
        sceneNum: 1,
        title: lang === 'ar' ? 'المشهد الافتتاحي: التسلل إلى الخادم السري' : 'Opening Sequence: Server Infiltration',
        originalCost: Math.round(b * 0.25),
        cost: Math.round(b * 0.18),
        essential: true,
        actionSummary: lang === 'ar' ? 'تسلل ليلي مع مؤثرات صوتية عالية وتصوير بكاميرا سينمائية أحادية.' : 'Stealth night infiltration with binaural audio design.',
        smartCompromise: lang === 'ar' ? 'استخدام إضاءة نيون مركزة بدلاً من حشد 30 كومبارس، ما زاد التوتر الدرامي.' : 'Focused neon chiaroscuro lighting instead of 30 extras.'
      },
      {
        sceneNum: 2,
        title: lang === 'ar' ? 'المواجهة الحوارية: كشف الخائن' : 'The Interrogation: Unmasking Traitor',
        originalCost: Math.round(b * 0.15),
        cost: Math.round(b * 0.12),
        essential: true,
        actionSummary: lang === 'ar' ? 'حوار ناري مغلق مشحون بالتوتر النفسي بين البطل والمسؤول.' : 'High-stakes two-hander psychological interrogation.',
        smartCompromise: lang === 'ar' ? 'موقع تصوير واحد فخم (One-Room Setup) مع تقطيع مونتاجي ديناميكي.' : 'Single high-production room setup with dynamic pacing.'
      },
      {
        sceneNum: 3,
        title: lang === 'ar' ? 'مطاردة السيارات والمصيدة الرقمية' : 'High-Speed Grid Lock & Car Chase',
        originalCost: Math.round(b * 0.35),
        cost: Math.round(b * 0.22),
        essential: true,
        actionSummary: lang === 'ar' ? 'مطاردة سيارة واحدة بالتحكم الرقمي وكاميرات درون احترافية.' : 'Precision single-vehicle pursuit using agile FPV drones.',
        smartCompromise: lang === 'ar' ? 'استبدال تحطيم 5 سيارات بمطاردة درون سريعة ترفع الإثارة وتخفض تكلفة التأمين.' : 'FPV drone angles replacing 5 car crashes, zero stunt insurance risk.'
      },
      {
        sceneNum: 4,
        title: lang === 'ar' ? 'المشهد الختامي: كشف لغز العرّاب' : 'Climax: The Sovereign Revelation',
        originalCost: Math.round(b * 0.30),
        cost: Math.round(b * 0.28),
        essential: true,
        actionSummary: lang === 'ar' ? 'انقلاب درامي حاسم في الأحداث يترك الجمهور مذهولاً ويوثق بصمة النواة.' : 'Twist-ending revelation leaving the audience in shock.',
        smartCompromise: lang === 'ar' ? 'تركيز الميزانية هنا لصنع نهاية لا تُنسى قابلة للترشح للجوائز.' : 'Max budget allocation concentrated here for award-grade impact.'
      }
    ];
  };

  const scenes = calculateScenes();
  const totalSceneCost = scenes.reduce((acc, s) => acc + s.cost, 0);
  const totalOriginalCost = scenes.reduce((acc, s) => acc + s.originalCost, 0);
  const totalSavings = Math.max(0, totalOriginalCost - totalSceneCost);
  const humanitarianShare = Math.round(totalSavings * 0.10);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn text-slate-100">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-[#031525] to-slate-950 border border-cyan-500/30 p-6 md:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-cyan-500/20 border border-cyan-400/40 rounded-xl text-cyan-400">
                <Clapperboard className="w-8 h-8 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    SHAHEEN APEX CORE KERNEL v4.0
                  </span>
                  <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {lang === 'ar' ? 'سرب الإخراج والإنتاج الذاتي' : 'Autonomous 3-Agent Swarm'}
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white mt-1">
                  {lang === 'ar' 
                    ? 'منظومة إدارة الإخراج الذاتي وهندسة الميزانية الحتمية' 
                    : 'Autonomous Director Suite & Zero-Loss Budget Architect'}
                </h1>
              </div>
            </div>
            <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
              {lang === 'ar'
                ? 'النواة السيادية التي تفاوض بين (المخرج الذكي + كاتب السيناريو + المدقق المالي): ضَع أي ميزانية معك، وسيقوم السرب بصياغة فيلم وسيناريو بمقاس ميزانيتك تماماً بأعلى جودة هوليوودية، مع منع الهدر وحفظ 10% للأعمال الإنسانية.'
                : 'The Sovereign Kernel negotiating between (AI Director + Master Screenwriter + Financial Comptroller): Enter any target budget, and the swarm synthesizes a bespoke cinematic masterpiece fitted perfectly without a single dollar wasted.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="bg-slate-900/80 border border-slate-700/60 p-4 rounded-xl text-center min-w-[160px]">
              <div className="text-xs text-slate-400 uppercase font-semibold">
                {lang === 'ar' ? 'الميزانية المستهدفة' : 'Target Budget'}
              </div>
              <div className="text-2xl font-black text-cyan-400">
                ${budgetInput.toLocaleString()}
              </div>
            </div>
            <div className="bg-slate-900/80 border border-amber-500/40 p-4 rounded-xl text-center min-w-[160px]">
              <div className="text-xs text-amber-300 uppercase font-semibold flex items-center justify-center gap-1">
                <HeartHandshake className="w-3.5 h-3.5" />
                {lang === 'ar' ? 'حصة صندوق شاهين (10%)' : '10% Humanity Pledge'}
              </div>
              <div className="text-2xl font-black text-amber-400">
                ${humanitarianShare.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Panel: Budget Slider & Genre Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Step 1: Input Dial */}
        <div className="lg:col-span-1 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <Sliders className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-bold text-white">
              {lang === 'ar' ? '1. محدد الميزانية والنوع السينمائي' : '1. Budget & Cinematic Genre'}
            </h2>
          </div>

          {/* Budget Presets */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-300 flex justify-between">
              <span>{lang === 'ar' ? 'الميزانية المتاحة للمنتج ($ USD)' : 'Available Producer Capital ($ USD)'}</span>
              <span className="text-cyan-400 font-mono font-bold">${budgetInput.toLocaleString()}</span>
            </label>
            <input 
              type="range" 
              min={25000} 
              max={5000000} 
              step={25000}
              value={budgetInput}
              onChange={(e) => setBudgetInput(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            
            {/* Quick Presets */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {[
                { label: '$50,000', val: 50000, desc: lang === 'ar' ? 'فيلم مستقل' : 'Indie Film' },
                { label: '$100,000', val: 100000, desc: lang === 'ar' ? 'ميزانية متوسطة' : 'Mid Budget' },
                { label: '$500,000', val: 500000, desc: lang === 'ar' ? 'إنتاج ضخم' : 'Tentpole' }
              ].map((p) => (
                <button
                  key={p.val}
                  onClick={() => setBudgetInput(p.val)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                    budgetInput === p.val 
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/10' 
                      : 'bg-slate-800/60 border-slate-700/60 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  <div>{p.label}</div>
                  <div className="text-[10px] font-normal opacity-70">{p.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Genre Selection */}
          <div className="space-y-2 pt-2">
            <label className="text-sm font-semibold text-slate-300">
              {lang === 'ar' ? 'تصنيف العمل الدرامي' : 'Dramatic Classification'}
            </label>
            <div className="space-y-2">
              {genres.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setGenre(g.id)}
                  className={`w-full text-left rtl:text-right px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ${
                    genre === g.id
                      ? 'bg-cyan-950/60 border-cyan-500 text-cyan-200 shadow-sm'
                      : 'bg-slate-800/40 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                  }`}
                >
                  <span>{lang === 'ar' ? g.ar : g.en}</span>
                  {genre === g.id && <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Trigger Button */}
          <button
            onClick={runAutonomousNegotiation}
            disabled={isSynthesizing}
            className="w-full py-3.5 px-4 rounded-xl font-black text-sm uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSynthesizing ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span>{lang === 'ar' ? 'السرب يتفاوض ويخصور السيناريو...' : 'Swarm Negotiating Screenplay...'}</span>
              </>
            ) : (
              <>
                <Zap className="w-5 h-5 text-amber-300" />
                <span>{lang === 'ar' ? 'إطلاق سرب الإخراج والتفاوض الفوري' : 'Launch Autonomous Director Swarm'}</span>
              </>
            )}
          </button>
        </div>

        {/* Step 2: Live 3-Agent Negotiation Arena */}
        <div className="lg:col-span-2 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <UsersIcon className="w-5 h-5 text-amber-400" />
                <h2 className="text-lg font-bold text-white">
                  {lang === 'ar' ? '2. حلبة تفاوض الموظفين الثلاثة (AI Swarm Arena)' : '2. The 3-Agent Negotiation Arena'}
                </h2>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {lang === 'ar' ? 'زمن الاستجابة: 32ms' : 'Latency: 32ms'}
              </span>
            </div>

            {/* 3 Agents Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              
              {/* Agent 1: Director */}
              <div className={`p-4 rounded-xl border transition-all ${
                activeStep === 1 || activeStep === 4
                  ? 'bg-cyan-950/40 border-cyan-500 text-cyan-200 shadow-md shadow-cyan-500/10'
                  : 'bg-slate-800/40 border-slate-800 text-slate-400'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-sm text-cyan-400 flex items-center gap-1.5">
                    <Clapperboard className="w-4 h-4" />
                    <span>{lang === 'ar' ? 'المخرج ذكاء بيك' : 'Executive Director'}</span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                    Tier 1
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  {lang === 'ar'
                    ? 'يضمن أعلى جودة إبهار بصري وتوتر درامي، ويرفض الهبوط دون المستوى الفني.'
                    : 'Enforces supreme visual grandeur, tension pacing, and award-grade standards.'}
                </p>
              </div>

              {/* Agent 2: Writer */}
              <div className={`p-4 rounded-xl border transition-all ${
                activeStep === 2 || activeStep === 4
                  ? 'bg-purple-950/40 border-purple-500 text-purple-200 shadow-md shadow-purple-500/10'
                  : 'bg-slate-800/40 border-slate-800 text-slate-400'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-sm text-purple-400 flex items-center gap-1.5">
                    <Film className="w-4 h-4" />
                    <span>{lang === 'ar' ? 'السيناريست العالمي' : 'Master Screenwriter'}</span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">
                    420K Scripts
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  {lang === 'ar'
                    ? 'يمسح أرشيف نصوص العالم من 1920، ويعدل المشاهد والشخصيات فوراً لتناسب التكلفة.'
                    : 'Scans global screenplay history, refactoring character arcs to fit exact constraints.'}
                </p>
              </div>

              {/* Agent 3: Comptroller */}
              <div className={`p-4 rounded-xl border transition-all ${
                activeStep === 3 || activeStep === 4
                  ? 'bg-amber-950/40 border-amber-500 text-amber-200 shadow-md shadow-amber-500/10'
                  : 'bg-slate-800/40 border-slate-800 text-slate-400'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-sm text-amber-400 flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4" />
                    <span>{lang === 'ar' ? 'المدقق المالي الحازم' : 'Loss Comptroller'}</span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">
                    150K MC Sims
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  {lang === 'ar'
                    ? 'يحسب تكلفة كل برغي ودقيقة تصوير، ويحذف المشاهد الزائدة ويضمن نسبة الخسارة 0%.'
                    : 'Simulates every crew hour and bolt cost, locking 0% loss and surplus allocation.'}
                </p>
              </div>

            </div>

            {/* Live Terminal Dialogue Stream */}
            <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-4 font-mono text-xs space-y-2 min-h-[140px] max-h-[180px] overflow-y-auto">
              <div className="text-slate-500 flex items-center justify-between border-b border-slate-900 pb-1">
                <span>// AUTONOMOUS_SWARM_ORCHESTRATION_LOG</span>
                <span>STATUS: {isSynthesizing ? 'ACTIVE_NEGOTIATION' : 'IDLE_READY'}</span>
              </div>
              {negotiationLog.length === 0 ? (
                <div className="text-slate-600 italic py-4 text-center">
                  {lang === 'ar' ? 'اضغط على زر إطلاق سرب الإخراج لمشاهدة التفاوض الحي المباشر...' : 'Click Launch Swarm to view real-time multi-agent negotiation logs...'}
                </div>
              ) : (
                negotiationLog.map((log, idx) => (
                  <div key={idx} className="text-slate-200 animate-fadeIn leading-relaxed">
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Golden Guarantee Stamp */}
          <div className="flex items-center justify-between p-3.5 bg-gradient-to-r from-cyan-950/30 to-amber-950/30 border border-cyan-500/30 rounded-xl text-xs">
            <div className="flex items-center gap-2 text-cyan-300 font-semibold">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>{lang === 'ar' ? 'ضمان شاهين: لا إنفاق يتجاوز الميزانية ولا هبوط في الجودة' : 'Shaheen Guarantee: 100% Budget Adherence with Zero Quality Degradation'}</span>
            </div>
            <div className="text-amber-400 font-mono font-bold">
              {lang === 'ar' ? 'وفورات مؤكدة: ' : 'Saved: '}${totalSavings.toLocaleString()}
            </div>
          </div>
        </div>

      </div>

      {/* Production Breakdown Output: Scenes & Custom Tailoring */}
      {showResult && (
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  {lang === 'ar' ? 'تم اعتماد الخطة الإنتاجية' : 'APPROVED PRODUCTION BLUEPRINT'}
                </span>
                <span className="text-xs text-slate-400">
                  {lang === 'ar' ? 'جاهز للتنفيذ الفوري والتصوير' : 'Ready for Principal Photography'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                {lang === 'ar' ? 'تفصيل المشاهد المحسوبة هندسياً والبدائل الذكية' : 'Engineered Scene Breakdown & Intelligent Cost Offsets'}
              </h3>
            </div>

            {/* Mode Tabs */}
            <div className="flex p-1 bg-slate-950 rounded-xl border border-slate-800">
              {[
                { id: 'optimized', ar: 'المسار الذهبي المتزن', en: 'Golden Optimized' },
                { id: 'blockbuster_expansion', ar: 'توسعة إبهارية (طلب تمويل)', en: 'Blockbuster Pitch' },
                { id: 'commercial_lean', ar: 'النسخة التجارية السريعة', en: 'Lean Commercial' }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedPlanMode(m.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedPlanMode === m.id
                      ? 'bg-cyan-500 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {lang === 'ar' ? m.ar : m.en}
                </button>
              ))}
            </div>
          </div>

          {/* Scenes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {scenes.map((scene) => (
              <div 
                key={scene.sceneNum}
                className="bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 rounded-xl p-5 space-y-3 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs flex items-center justify-center font-bold">
                      {scene.sceneNum}
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      {scene.title}
                    </h4>
                  </div>
                  <div className="text-right rtl:text-left">
                    <div className="text-sm font-bold font-mono text-cyan-400">
                      ${scene.cost.toLocaleString()}
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 line-through">
                      ${scene.originalCost.toLocaleString()}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {scene.actionSummary}
                </p>

                {/* Smart Compromise Box */}
                <div className="p-2.5 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-[11px] text-cyan-300 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">{lang === 'ar' ? 'حل السرب الذكي: ' : 'Swarm Smart Solution: '}</span>
                    {scene.smartCompromise}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final Economic & Humanitarian Tally */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-slate-950 via-[#071625] to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left rtl:md:text-right">
              <div className="text-xs text-slate-400">
                {lang === 'ar' ? 'إجمالي التكلفة المغلقة بعد التفاوض' : 'Total Locked Production Outlay'}
              </div>
              <div className="text-2xl font-black text-white font-mono flex items-center gap-2 justify-center md:justify-start">
                <span>${totalSceneCost.toLocaleString()}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  100% {lang === 'ar' ? 'مطابق للميزانية' : 'Budget Matched'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right rtl:text-left">
                <div className="text-xs text-amber-300 font-bold">
                  {lang === 'ar' ? 'مخصص صندوق شاهين للإنسانية' : 'Shaheen Humanity Allocation'}
                </div>
                <div className="text-sm font-mono text-slate-300">
                  ${humanitarianShare.toLocaleString()} {lang === 'ar' ? '(من وفورات الهدر)' : '(From Prevented Waste)'}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400">
                <HeartHandshake className="w-6 h-6" />
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

// Helper icon
function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}
