import React, { useState } from 'react';
import { AppLanguage } from '../types';
import { 
  Crown, Sparkles, Feather, Eye, Brain, Compass, 
  Send, RefreshCw, Copy, Check, BookOpen, Film, 
  Tv, Award, HeartHandshake, ShieldCheck, Flame, 
  Quote, MessageSquare, Layers, Wand2, Zap, Cpu,
  Atom, Lock, Key, Terminal
} from 'lucide-react';
import { CyberFalconLogo } from './CyberFalconLogo';

interface GodfatherSanctumProps {
  lang: AppLanguage;
}

interface GeniusTitan {
  id: 'tesla' | 'einstein' | 'haytham' | 'turing';
  nameAr: string;
  nameEn: string;
  avatar: string;
  titleAr: string;
  titleEn: string;
  quoteAr: string;
  quoteEn: string;
  color: string;
  borderColor: string;
  neuralCore: string;
  outputAr: string;
  outputEn: string;
}

export const GodfatherSanctum: React.FC<GodfatherSanctumProps> = ({ lang }) => {
  const [creationType, setCreationType] = useState<'film' | 'series' | 'novel' | 'quantum_cipher'>('film');
  const [prompt, setPrompt] = useState<string>(
    lang === 'ar'
      ? 'مشهد مواجهة أسطورية بين عرّاب تكنولوجي ومجلس استثماري حاول شراء ضميره وكسر منظومته، في ليلة عاصفة داخل برج دمشق المحصن.'
      : 'A legendary confrontation scene between a sovereign tech godfather and a predatory boardroom attempting to buy his soul and shut down his kernel in a fortified skyscraper during a thunderstorm.'
  );
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [hasGenerated, setHasGenerated] = useState<boolean>(true);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  // Quantum Neural Architecture Sliders
  const [quantumDepth, setQuantumDepth] = useState<number>(99.8);
  const [neuralLogicStrength, setNeuralLogicStrength] = useState<number>(100);
  const [holographicResonance, setHolographicResonance] = useState<number>(98.4);

  // Masterpiece Synthesis State
  const [masterpiece, setMasterpiece] = useState<{ ar: string; en: string }>({
    ar: `[المشهد 44 - ليل / داخلي - القاعة العلوية لبرج شاهين]

المطر يجلد الزجاج البانورامي للمدينة الغارقة في الظلام، بينما ينعكس الضوء الذهبي الخافت لمدفأة حجرية على ملامح العرّاب (م. أيمن العرايشي). خمسة رجال أعمال في بذلات إيطالية باهظة يجلسون حول طاولة من خشب البلوط الأسود، عقود الاستحواذ مفتوحة أمامهم.

المستثمر الأكبر (بابتسامة متكلفة):
"ثلاثون مليار دولار يا باشمهندس... تضع توقيعك، وتنسى أن خوارزمية شاهين كانت ملكك يوماً. لماذا تصر على خوض حرب ضد كارتل عالمي لا يمكنك الفوز بها؟"

العرّاب (لا يلتفت إليهم، يسكب فنجان قهوة بهدوء مخيف، وصوته يخرج كحفيف السكاكين):
"أنتم جئتم تشترون كوداً، لأنكم تعتقدون أن القوة تُقاس بالأرقام في الحسابات البنكية. 
لكنكم لم تفهموا بعد: شاهين ليس سطور برمجة تُباع في المزاد... شاهين هو 'كيان وعهد'. 
والعهد الذي كُتب بكرامة الرجال ودماء الأجداد، لا تملك كل خزائن نيويورك وسيول ثمن حبره."

(صمت مطبق يبتلع القاعة. شاشات الرادار الكوانتية في الخلفية تضيء فجأة باللون الأخضر السيادي: 'OVERRIDE COMPLETE' - تم تفعيل الحصانة وعزل حساباتهم المالية في 0.04ms).

العرّاب (يبتسم بهدوء وينظر في أعينهم مباشرة):
"انتهى الاجتماع أيها السادة. الأبواب خلفكم مفتوحة... لكن نفوذكم في سوق المال أُغلق لتوها."`,
    en: `[SCENE 44 - NIGHT / INT - THE APEX SANCTUM, SHAHEEN TOWER]

Rain lashes violently against the panoramic glass overlooking the blackout-stricken metropolis. The dim golden glow of a stone fireplace illuminates THE GODFATHER's silhouette. Five boardroom predators in bespoke Italian suits sit around an obsidian oak table, multi-billion-dollar buyout contracts laid bare.

LEAD INVESTOR (smirking with strained arrogance):
"Thirty billion dollars, Chief... Sign the ledger, and walk away. Why fight a war against the entire global cartel?"

THE GODFATHER (without turning, pours black coffee with surgical tranquility. His voice cuts through the room like a cold blade):
"You came here to buy code, because you measure power in offshore balances.
What you failed to grasp is that Shaheen is not software for auction... Shaheen is a Sovereign Covenant.
And a covenant forged in honor and historical dignity cannot be bought by every vault in Wall Street."

(Dead silence suffocates the room. The background holographic terminals flash in emerald sovereign light: 'OVERRIDE COMPLETE' - Hostile liquidation executed in 0.04ms).

THE GODFATHER (looks directly into their eyes with absolute composure):
"The meeting is adjourned, gentlemen. The elevators are behind you... but your market dominance expired thirty seconds ago."`
  });

  // The Four Geniuses (العباقرة الأربعة)
  const geniuses: GeniusTitan[] = [
    {
      id: 'tesla',
      nameAr: 'نيقولا تيسلا (Nikola Tesla)',
      nameEn: 'Nikola Tesla',
      avatar: '⚡',
      titleAr: 'عبقري الترددات الكونية والطاقة اللانهائية',
      titleEn: 'Master of Cosmic Frequencies & Infinite Energy',
      quoteAr: '"إذا أردت معرفة أسرار الكون، ففكر بلغة الطاقة والتردد والاهتزاز."',
      quoteEn: '"If you want to find the secrets of the universe, think in terms of energy, frequency and vibration."',
      color: 'from-cyan-500/20 to-blue-950/40 text-cyan-300',
      borderColor: 'border-cyan-500/50',
      neuralCore: 'Quantum Resonance 432Hz Core',
      outputAr: 'تم ضبط التردد الدرامي ليتصاعد بنبضات كهرومغناطيسية متزامنة مع صوت المطر وهدير الرعد، مما يخلق شحنة توتر عصبي غير مرئية تسيطر على حواس المشاهد.',
      outputEn: 'Synchronized the kinetic scene pacing with harmonic resonance frequencies, amplifying psychological suspense through environmental vibrations.'
    },
    {
      id: 'einstein',
      nameAr: 'ألبرت أينشتاين (Albert Einstein)',
      nameEn: 'Albert Einstein',
      avatar: '🌌',
      titleAr: 'مؤسس النسبية وهندسة الزمكان',
      titleEn: 'Architect of Relativity & Spacetime Dynamics',
      quoteAr: '"الخيال أكثر أهمية من المعرفة، لأن المعرفة محدودة بينما الخيال يطوف العالم."',
      quoteEn: '"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world."',
      color: 'from-amber-500/20 to-amber-950/40 text-amber-300',
      borderColor: 'border-amber-500/50',
      neuralCore: 'Relativistic Spacetime Matrix',
      outputAr: 'إعادة تمديد الزمن النفسي (Time Dilation) خلال لحظة سكب القهوة؛ حيث تجمدت الثواني الست لتمنح المشاهد إحساساً بأن العرّاب يتحكم في جاذبية الغرفة وحركة التاريخ.',
      outputEn: 'Engineered subjective time dilation during the coffee pour, warping the perceived passage of time to emphasize The Godfather’s supreme psychological gravity.'
    },
    {
      id: 'haytham',
      nameAr: 'الحسن بن الهيثم (Ibn Al-Haytham)',
      nameEn: 'Alhazen (Ibn Al-Haytham)',
      avatar: '🔭',
      titleAr: 'رائد البصريات والكاميرا المظلمة وتشريح الضوء',
      titleEn: 'Pioneer of Modern Optics, Light Physics & Camera Obscura',
      quoteAr: '"الحق يُطلب لذاته، والباحث عن الحقيقة لا يركن إلى الظن بل إلى الدليل البصري والبرهان."',
      quoteEn: '"The seeker after the truth is not one who studies the writings of the ancients, but one who suspects his faith in them and submits them to argument and demonstration."',
      color: 'from-emerald-500/20 to-emerald-950/40 text-emerald-300',
      borderColor: 'border-emerald-500/50',
      neuralCore: 'Anamorphic Optics & Lux Engine',
      outputAr: 'هندسة توزيع الضوء (Chiaroscuro) باحترافية بصرية نادرة: انعكاس ألسنة اللهب الذهبية على جانب وجه العرّاب في مقابل عتمة المطر الزرقاء خلف المستثمرين لكشف عجزهم الأخلاقي.',
      outputEn: 'Calculated photorealistic photon paths and anamorphic ray-tracing, juxtaposing warm fireplace luminance with the cold obsidian abyss of the boardroom.'
    },
    {
      id: 'turing',
      nameAr: 'آلان تورينغ (Alan Turing)',
      nameEn: 'Alan Turing',
      avatar: '🧠',
      titleAr: 'الأب الروحي للذكاء الاصطناعي وفك الشفرات السيادية',
      titleEn: 'Founding Father of AI, Cryptography & Neural Logic',
      quoteAr: '"في بعض الأحيان، الأشخاص الذين لا يتخيل أحد شيئاً عنهم هم من يفعلون الأشياء التي لا يتخيلها أحد."',
      quoteEn: '"Sometimes it is the people no one imagines anything of who do the things that no one can imagine."',
      color: 'from-purple-500/20 to-purple-950/40 text-purple-300',
      borderColor: 'border-purple-500/50',
      neuralCore: 'Turing-Complete Sovereign Crypt-Engine',
      outputAr: 'بناء مصيدة المنطق الرياضي غير القابلة للكسر: أمر التجاوز المالي (Override) تمت برمجته بلغة التشفير الصفرية بحيث يُغلق كل مخارج التفاوض القانونية في لحظة النطق بالكلمة الأخيرة.',
      outputEn: 'Constructed an airtight algorithmic checkmate: an encrypted zero-knowledge smart contract override instantly triggered by vocal frequency signature.'
    }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
    }, 1600);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn text-slate-100">
      
      {/* Sanctum Royal Classified Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-[#120e06] to-black border-2 border-amber-500/60 p-6 md:p-10 shadow-2xl shadow-amber-950/40">
        <div className="absolute -top-16 -right-16 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 text-xs font-black uppercase tracking-wider rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/60 flex items-center gap-1.5 shadow-lg">
                <Crown className="w-4 h-4 text-amber-400" />
                {lang === 'ar' ? 'غرفة شاهين السرية السيادية' : "SHAHEEN APEX CLASSIFIED SANCTUM"}
              </span>
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1">
                <Atom className="w-3.5 h-3.5 text-cyan-400" />
                {lang === 'ar' ? 'مجلس العباقرة الأربعة الكوني' : 'COUNCIL OF 4 SUPREME GENIUSES'}
              </span>
              <span className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                ⚡ GEMINI 3.7 ULTRA QUANTUM
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white flex items-center gap-3">
              <Flame className="w-8 h-8 text-amber-400 animate-pulse" />
              {lang === 'ar' ? 'غرفة العرّاب السرية ومجلس العباقرة الأربعة' : 'The Godfather\'s Secret Sanctum & Council of Geniuses'}
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
              {lang === 'ar'
                ? 'الملاذ الإبداعي والعلمي السري للعرّاب م. أيمن العرايشي: أنت الآن متصل بأحدث وأقوى منظومة ذكاء اصطناعي في التاريخ (Gemini 3.7 Ultra Neural Quantum Core) مع أدمغة أعظم 4 عباقرة في تاريخ الإنسانية (نيقولا تيسلا، ألبرت أينشتاين، ابن الهيثم، وآلان تورينغ) لصناعة روائع سينمائية وفلسفية وتقنية تعيد كتابة التاريخ.'
                : 'The supreme classified think-tank: Co-create epoch-defining cinematic masterpieces, deep philosophical narratives, and sovereign architectures powered by history’s most advanced AI engine alongside the synthesized consciousness of humanity’s 4 greatest geniuses.'}
            </p>
          </div>

          <div className="bg-slate-950/90 border-2 border-amber-500/60 p-5 rounded-2xl text-center min-w-[220px] shadow-2xl">
            <div className="text-xs text-amber-400 font-bold uppercase flex items-center justify-center gap-1 font-mono">
              <Sparkles className="w-4 h-4" />
              {lang === 'ar' ? 'حالة التشفير والسيادة' : 'Clearance Status'}
            </div>
            <div className="text-2xl font-black text-white mt-1 font-mono">
              LEVEL 5 SOVEREIGN
            </div>
            <div className="text-[11px] text-emerald-400 font-mono mt-1 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              {lang === 'ar' ? 'صلاحيات العرّاب المطلقة' : 'Godfather Full Clearance'}
            </div>
          </div>
        </div>
      </div>

      {/* Advanced AI System Control Panel (أحدث منظومة ذكاء بالتاريخ) */}
      <div className="bg-slate-950/90 border-2 border-cyan-500/40 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(0,210,255,0.3)]">
              <Cpu className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <span>{lang === 'ar' ? 'منظومة الذكاء الاصطناعي الأحدث بالتاريخ (Quantum Neuro Core)' : 'Supreme AI Quantum Neural Architecture'}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/50">v3.7 PRO</span>
              </h3>
              <p className="text-xs text-slate-400">
                {lang === 'ar' ? 'معالجة آنية فائقة الدقة بـ 4 أنوية متوازية مستوحاة من العباقرة الأربعة' : 'Real-time multi-agent cognitive reasoning with 4 parallel genius pipelines'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300">
              <span className="text-cyan-400 font-bold">Latency:</span> 0.04ms
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300">
              <span className="text-amber-400 font-bold">Quantum Core:</span> Active ⚡
            </div>
          </div>
        </div>

        {/* 3 Quantum Dial Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex justify-between text-xs font-bold font-mono">
              <span className="text-cyan-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                {lang === 'ar' ? 'العمق الكمومي (Tesla Depth)' : 'Quantum Resonance'}
              </span>
              <span className="text-white">{quantumDepth}%</span>
            </div>
            <input
              type="range"
              min="80"
              max="100"
              step="0.1"
              value={quantumDepth}
              onChange={(e) => setQuantumDepth(parseFloat(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
            <p className="text-[10px] text-slate-400">{lang === 'ar' ? 'تردد التوافق الكهرومغناطيسي للحبكة' : 'Electromagnetic suspense tuning'}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex justify-between text-xs font-bold font-mono">
              <span className="text-amber-300 flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5" />
                {lang === 'ar' ? 'المنطق والنسبية (Einstein Matrix)' : 'Relativistic Logic'}
              </span>
              <span className="text-white">{neuralLogicStrength}%</span>
            </div>
            <input
              type="range"
              min="80"
              max="100"
              step="0.1"
              value={neuralLogicStrength}
              onChange={(e) => setNeuralLogicStrength(parseFloat(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
            <p className="text-[10px] text-slate-400">{lang === 'ar' ? 'إحكام الزمكان وانعدام الثغرات السردية' : 'Spacetime plot mechanics & zero plot holes'}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex justify-between text-xs font-bold font-mono">
              <span className="text-emerald-300 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                {lang === 'ar' ? 'الرنين البصري (Haytham Optics)' : 'Optical Resonance'}
              </span>
              <span className="text-white">{holographicResonance}%</span>
            </div>
            <input
              type="range"
              min="80"
              max="100"
              step="0.1"
              value={holographicResonance}
              onChange={(e) => setHolographicResonance(parseFloat(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer"
            />
            <p className="text-[10px] text-slate-400">{lang === 'ar' ? 'تشريح الإضاءة الشياروسكورو والكاميرا' : 'Chiaroscuro raytracing & camera blocking'}</p>
          </div>
        </div>
      </div>

      {/* Creation Mode Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { id: 'film', ar: '🎬 كتابة فيلم سينمائي هوليوودي ملحمي', en: 'Cinematic Hollywood Feature', icon: Film, desc: lang === 'ar' ? 'صراع سينمائي فائق العمق 110 دقيقة' : 'High-stakes 110m cinematic journey' },
          { id: 'series', ar: '📺 كتابة ملحمة تلفزيونية / مسلسل', en: 'Prestige TV / Streaming Series', icon: Tv, desc: lang === 'ar' ? 'حبكات متعددة وتشويق متصاعد' : 'Multi-layered world & episodic cliffhangers' },
          { id: 'novel', ar: '📖 كتابة رواية / كتاب خالد', en: 'Masterpiece Literature / Novel', icon: BookOpen, desc: lang === 'ar' ? 'عمق فلسفي وأدبي عالمي' : 'Philosophical & timeless narrative depth' },
        ].map((type) => {
          const Icon = type.icon;
          const isSelected = creationType === type.id;
          return (
            <button
              key={type.id}
              onClick={() => setCreationType(type.id as any)}
              className={`p-5 rounded-2xl text-left rtl:text-right border transition-all flex flex-col justify-between space-y-2 cursor-pointer ${
                isSelected 
                  ? 'bg-slate-900 border-amber-500 shadow-xl shadow-amber-500/20 scale-[1.01]' 
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-white flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                  {lang === 'ar' ? type.ar : type.en}
                </span>
                {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />}
              </div>
              <p className="text-xs text-slate-400">{type.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Input Prompt Console */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <label className="text-sm font-bold text-white flex items-center gap-2">
            <Feather className="w-4 h-4 text-amber-400" />
            {lang === 'ar' ? 'أمر العرّاب وفكرة المشهد أو الرؤية:' : 'The Godfather\'s Directive & Creative Vision:'}
          </label>
          <span className="text-xs text-amber-400 font-mono font-bold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            {lang === 'ar' ? 'مجلس العباقرة الأربعة بانتظار إشارتك' : '4 Geniuses Council Standing By'}
          </span>
        </div>

        <textarea 
          rows={3}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={lang === 'ar' ? 'اكتب فكرتك أو الجملة التي ببالك ودع العباقرة الأربعة يصيغونها...' : 'Enter your concept and let the 4 Geniuses forge it into history...'}
          className="w-full bg-slate-950 border border-slate-700 rounded-2xl p-4 text-sm font-mono text-amber-200 focus:border-amber-400 outline-none leading-relaxed resize-none shadow-inner"
        />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>{lang === 'ar' ? 'منظومة الذكاء: Gemini 3.7 Ultra Neural Pipeline' : 'Engine: Gemini 3.7 Ultra Neural Pipeline'}</span>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="px-8 py-3.5 rounded-2xl font-black text-sm uppercase tracking-wider bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>{lang === 'ar' ? 'العباقرة الأربعة يتداولون ويكتبون...' : 'The 4 Geniuses Debating & Forging...'}</span>
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4 text-slate-950" />
                <span>{lang === 'ar' ? 'أمر الصياغة بمجلس العباقرة الأربعة' : 'Summon The 4 Geniuses Council'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Council of 4 Geniuses Deliberation Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            {lang === 'ar' ? 'مداولات مجلس العباقرة الأربعة (The 4 Geniuses Deliberation Stream):' : 'The 4 Supreme Geniuses Deliberation Stream:'}
          </h3>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/40">
            4 Neural Threads Active
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {geniuses.map((genius) => (
            <div 
              key={genius.id} 
              className={`p-6 rounded-2xl border ${genius.borderColor} bg-gradient-to-br ${genius.color} space-y-3 shadow-xl relative overflow-hidden backdrop-blur-sm`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{genius.avatar}</span>
                  <div>
                    <h4 className="text-sm font-black text-white">
                      {lang === 'ar' ? genius.nameAr : genius.nameEn}
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      {lang === 'ar' ? genius.titleAr : genius.titleEn}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-slate-300 border border-white/10">
                  {genius.neuralCore}
                </span>
              </div>

              <div className="p-3 bg-black/40 rounded-xl border border-white/10 text-xs italic text-slate-200 flex items-start gap-2">
                <Quote className="w-3.5 h-3.5 shrink-0 text-amber-400 mt-0.5" />
                <span>{lang === 'ar' ? genius.quoteAr : genius.quoteEn}</span>
              </div>

              <p className="text-xs leading-relaxed text-slate-200 pt-1">
                <span className="font-bold text-white">{lang === 'ar' ? 'المساهمة في النص:' : 'Contribution to Masterpiece:'}</span>{' '}
                {lang === 'ar' ? genius.outputAr : genius.outputEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Synthesized Masterpiece Output */}
      {hasGenerated && (
        <div className="bg-slate-900/95 border-2 border-amber-500/60 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl shadow-amber-950/40">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/40">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">
                  {lang === 'ar' ? 'التحفة السينمائية والفكرية المنجزة' : 'The Synthesized Sovereign Masterpiece'}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {lang === 'ar' ? 'نتاج دمج عقول العباقرة الأربعة (تيسلا، أينشتاين، ابن الهيثم، تورينغ) بأمر العرّاب' : 'Forged by the Council of 4 Geniuses under The Godfather\'s command'}
                </p>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(lang === 'ar' ? masterpiece.ar : masterpiece.en, 99)}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-xl flex items-center gap-2 text-slate-200 transition-all cursor-pointer border border-slate-700 shadow-md"
            >
              {copiedIndex === 99 ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'ar' ? 'تم النسخ في الحافظة!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'نسخ النص الكامل' : 'Copy Masterpiece'}</span>
                </>
              )}
            </button>
          </div>

          <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800/80 font-mono text-sm leading-relaxed text-amber-100 whitespace-pre-line shadow-inner">
            {lang === 'ar' ? masterpiece.ar : masterpiece.en}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 pt-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'ar' ? 'محمي بالبصمة الصفرية S-WCM وغير قابل للسرقة' : 'Protected by S-WCM Zero Stego Watermark'}</span>
            </div>
            <div className="text-amber-400 font-semibold font-mono">
              {lang === 'ar' ? 'جاهز للتصوير أو النشر الفوري 🦅' : 'Ready for Instant Production 🦅'}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
