import React, { useState, useEffect } from 'react';
import { AppRoom, AppLanguage } from '../types';
import { CyberFalconLogo } from './CyberFalconLogo';
import { Globe, Volume2, VolumeX, ShieldCheck, Sparkles, Flame, Eye, Film, Award, Play, Maximize, Minimize, Key, Lock, Crown, X, CheckCircle2, ShieldAlert } from 'lucide-react';

interface GlobalHeaderProps {
  currentRoom: AppRoom;
  onSelectRoom: (room: AppRoom) => void;
  lang: AppLanguage;
  onLanguageChange: (lang: AppLanguage) => void;
  onToggleVoice: () => void;
  isSpeaking: boolean;
  onOpenContract?: () => void;
  onReplayIntro?: () => void;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
}

export const GlobalHeader: React.FC<GlobalHeaderProps> = ({
  currentRoom,
  onSelectRoom,
  lang,
  onLanguageChange,
  onToggleVoice,
  isSpeaking,
  onOpenContract,
  onReplayIntro,
  isFullscreen,
  onToggleFullscreen,
}) => {
  const [isSecretModalOpen, setIsSecretModalOpen] = useState(false);
  const [passcodeInput, setPasscodeInput] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);
  const [passcodeSuccess, setPasscodeSuccess] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);
  const [tickerFading, setTickerFading] = useState(false);

  const handleVerifyPasscode = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const clean = passcodeInput.trim().toUpperCase();
    // Accept valid secret codes
    if (['777', 'SHAHEEN-777', 'SHAHEEN', 'APEX', 'APEX-2026', '1234', '0000', 'عراب', 'شاهين', '999'].includes(clean)) {
      setPasscodeSuccess(true);
      setPasscodeError(false);
      setTimeout(() => {
        setIsSecretModalOpen(false);
        setPasscodeSuccess(false);
        setPasscodeInput('');
        onSelectRoom('godfather_sanctum');
      }, 700);
    } else {
      setPasscodeError(true);
      setTimeout(() => setPasscodeError(false), 2500);
    }
  };

  const announcements = {
    ar: [
      '🔥 عاجل: منصة SHAHEEN APEX AI تطلق نظام Castle Gate الأمني ومحرك S-WCM لحماية سيناريوهات هوليوود.',
      '⚡ التدمير الذاتي العصبي (S-NVK): اشتقاق المفتاح اللحظي من حالة النبض والأعصاب دون تخزين مفاتيح.',
      '🛡️ محرك البصمة الصفرية S-WCM يدمج بصمة الخائن الجنائية في 40 ملي ثانية فقط.',
      '⚖️ العقد السيادي: توثيق دولي للملكية الفكرية وخوارزميات الذكاء الاصطناعي للمؤسس أيمن العَرَّاب.',
      '🌐 منصة شاهين توفر ما يتجاوز 45 مليون دولار لكل إنتاج سينمائي بمحاكاة مونت كارلو الدقيقة.'
    ],
    en: [
      '🔥 BREAKING: SHAHEEN APEX AI launches Castle Gate & S-WCM for sovereign Hollywood script protection.',
      '⚡ S-NVK NEURO-VAULT: Ephemeral Neuro-Key Derivation without stored cryptographic keys.',
      '🛡️ S-WCM Zero-Width Engine embeds forensic traitor footprint in just 40 milliseconds.',
      '⚖️ SOVEREIGN DEED: International IP registration for Founder Eng. Ayman Al-Araishi.',
      '🌐 Shaheen Platform saves over $45M per production using Monte Carlo risk simulations.'
    ],
    fr: [
      '🔥 FLASH INFO: SHAHEEN APEX AI lance Castle Gate et S-WCM pour la protection d\'Hollywood.',
      '⚡ S-NVK NEURO-VAULT: Dérivation éphémère de clé neuronale sans clés stockées.',
      '🛡️ Le moteur stéganographique S-WCM intègre l\'empreinte du traître en 40 millisecondes.',
      '⚖️ ACTE SOUVERAIN: Propriété intellectuelle internationale pour le Fondateur Ayman Al-Araishi.',
      '🌐 Shaheen économise plus de 45 M$ par production grâce aux simulations Monte Carlo.'
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerFading(true);
      setTimeout(() => {
        setTickerIndex((prev) => (prev + 1) % announcements.ar.length);
        setTickerFading(false);
      }, 500); // 500ms fade out
    }, 7000); // Change announcement every 7 seconds
    return () => clearInterval(interval);
  }, []);

  const [timeString, setTimeString] = useState<string>('00:00:00');

  // Clock synced with selected timezone (Mecca, London, Paris)
  useEffect(() => {
    const updateClock = () => {
      let tz = 'Asia/Riyadh';
      if (lang === 'en') tz = 'Europe/London';
      if (lang === 'fr') tz = 'Europe/Paris';

      const now = new Date();
      const formatter = new Intl.DateTimeFormat(lang === 'ar' ? 'ar-SA' : 'en-US', {
        timeZone: tz,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTimeString(formatter.format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  // 4 Core Master Categories to prevent visual clutter
  const categories = [
    { 
      id: 'creation', 
      labelAr: '🎬 صناعة السينما والإنتاج', 
      labelEn: 'Cinema & Video Creation',
      rooms: [
        { id: 'short_reels' as AppRoom, icon: '⚡', ar: 'شاهين ريلز (فيديوهات قصيرة دقيقتين)', en: 'Shaheen Reels (Shorts & TikTok <2m)' },
        { id: 'cinema_tube' as AppRoom, icon: '📺', ar: 'شاهين سينما تيوب (يوتيوب المواهب)', en: 'Shaheen CinemaTube (Video Hub)' },
        { id: 'cinematic_previz' as AppRoom, icon: '🎥', ar: 'محاكي الفيديو وفض النزاعات', en: 'Cinematic Pre-Viz (3 Cuts)' },
        { id: 'virtual_production' as AppRoom, icon: '🎬', ar: 'غرفة العمليات الإخراجية (3 في 1)', en: 'Virtual Production Ops' },
        { id: 'autonomous_director' as AppRoom, icon: '🤖', ar: 'إدارة الإخراج وسرب التفاوض', en: 'Autonomous Director Suite' },
        { id: 'box_office_prophet' as AppRoom, icon: '🔮', ar: 'رادار التنبؤ بشباك التذاكر', en: 'Box Office Prophet' },
        { id: 'semantic_breakdown' as AppRoom, icon: '📊', ar: 'التفكيك الدلالي والميزانية', en: 'Semantic Breakdown' },
      ]
    },
    {
      id: 'writing_titans',
      labelAr: '👑 جناح الكتابة الإبداعية',
      labelEn: "Writing Suites & Guild",
      rooms: [
        { id: 'writers_lobby' as AppRoom, icon: '🏛️', ar: 'رواق الكتاب (غرف الهواة والمحترفين)', en: 'Writers Lobby' },
        { id: 'forensic_editor' as AppRoom, icon: '✍️', ar: 'مساعد السيناريو الجنائي', en: 'Forensic Script Editor' },
        { id: 'crisis_recovery' as AppRoom, icon: '🔥', ar: 'إنقاذ السيناريوهات المأزومة', en: 'Crisis Recovery Suite' },
      ]
    },
    {
      id: 'marketplace_empowerment',
      labelAr: '⚡ التمكين وسوق الفرص',
      labelEn: 'Talent Market & Deals',
      rooms: [
        { id: 'talent_bounty' as AppRoom, icon: '⚡', ar: 'سوق المهام الفورية والوظائف ($10-$50)', en: 'Instant Micro-Bounties & Jobs' },
        { id: 'pitch_deck' as AppRoom, icon: '🏆', ar: 'ملف هوليوود والمستثمرين العالمي', en: 'Hollywood Pitch Deck' },
      ]
    },
    {
      id: 'security_tech',
      labelAr: '🛡️ الحصانة السيادية والعتاد',
      labelEn: 'Security & Shaheen Hardware',
      rooms: [
        { id: 'elite_arsenal' as AppRoom, icon: '🏴‍☠️', ar: 'متجر الترسانة السوداء (كود فوري)', en: 'The Elite Arsenal Store' },
        { id: 'castle_gate' as AppRoom, icon: '🚪', ar: 'بوابة القلعة الرئيسية (Castle Gate)', en: 'Castle Gate Portal' },
        { id: 'steganography_pro' as AppRoom, icon: '🧬', ar: 'البصمة الصفرية S-WCM لمنع السرقة', en: 'S-WCM Zero Stego Seal' },
        { id: 'cineguard_audit' as AppRoom, icon: '🛡️', ar: 'فحص الحماية الجنائية CineGuard', en: 'CineGuard Security Audit' },
        { id: 'sap_protocol' as AppRoom, icon: '🔒', ar: 'بروتوكول S.A.P السيادي المشفر', en: 'S.A.P Cyber Protocol' },
        { id: 'shaheen_a1' as AppRoom, icon: '⌚', ar: 'عتاد شاهين A1 (SHAHEEN A1 Hardware)', en: 'SHAHEEN A1 Hardware' },
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#070b14]/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl">
      {/* 1. Scrolling Ticker Banner (شريط الإعلانات الناري المتوهج المشع) */}
      <div className="bg-[#040810] border-b border-[#00d2ff]/30 shadow-[0_4px_15px_rgba(0,210,255,0.15)] py-2 overflow-hidden relative flex items-center justify-center min-h-[36px]">
        <div className={`font-bold text-xs sm:text-sm tracking-wide text-[#00d2ff] drop-shadow-[0_0_8px_#00d2ff] transition-opacity duration-500 text-center px-4 ${tickerFading ? 'opacity-0' : 'opacity-100'}`}>
          {announcements[lang][tickerIndex]}
        </div>
      </div>

      {/* 2. Main Global Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Brand & Falcon 3D Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onSelectRoom('castle_gate')}>
          <CyberFalconLogo size="md" glow={true} />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-wider font-mono group-hover:text-cyan-300 transition-colors">
                SHAHEEN <span className="text-[#00d2ff] drop-shadow-[0_0_8px_#00d2ff]">APEX AI</span>
              </h1>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950/90 text-[#00d2ff] border border-[#00d2ff]/50 font-mono font-bold shadow">
                SOVEREIGN CINEMA
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              {lang === 'ar' ? 'العرّاب: م. أيمن العرايشي • منصة ثورة السينما العالمية' : 'Mastermind: Eng. Ayman Al-Araishi (The Godfather)'}
            </p>
          </div>
        </div>

        {/* Global Controls: CinemaTube, Sovereign Deed, Intro Replay, Language Selector, Speech Synthesis, & LED Clock */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          
          {/* Direct Open CinemaTube Free Hub Shortcut */}
          <button
            onClick={() => onSelectRoom('cinema_tube')}
            className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              currentRoom === 'cinema_tube'
                ? 'bg-red-600 text-white border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.5)] font-black'
                : 'bg-red-950/80 hover:bg-red-900 border-red-500/50 text-red-300 shadow-[0_0_10px_rgba(239,68,68,0.25)]'
            }`}
            title={lang === 'ar' ? 'منصة سينما تيوب المفتوحة والمجانية للمواهب والكتّاب' : 'CinemaTube Free Open Video & Script Hub'}
          >
            <Film className="w-3.5 h-3.5 text-red-400" />
            <span>{lang === 'ar' ? '📺 سينما تيوب مجاناً' : '📺 CinemaTube Free'}</span>
          </button>

          {/* Secret Room Passcode Access Button (غرفة شاهين السرية المحمية برمز) */}
          <button
            id="secret-room-passcode-btn"
            onClick={() => setIsSecretModalOpen(true)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              currentRoom === 'godfather_sanctum'
                ? 'bg-amber-500/30 text-amber-300 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)] font-black'
                : 'bg-amber-950/70 hover:bg-amber-900/90 text-amber-400 border-amber-500/50 hover:border-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
            }`}
            title={lang === 'ar' ? 'بوابة غرفة شاهين السرية (تتطلب رمز فك التشفير)' : 'Shaheen Secret Sanctum Keypad (Passcode Required)'}
          >
            <Key className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="hidden sm:inline">{lang === 'ar' ? '🔑 رمز الغرفة السرية' : '🔑 Secret Passkey'}</span>
          </button>

          {/* Sovereign Deed Button */}
          {onOpenContract && (
            <button
              onClick={onOpenContract}
              className="px-3 py-1.5 rounded-xl bg-amber-950/80 hover:bg-amber-900 border border-amber-500/50 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-[0_0_10px_rgba(245,158,11,0.25)] transition-all cursor-pointer"
              title={lang === 'ar' ? 'عرض عقد الملكية وبراءة الاختراع' : 'View Sovereign Deed'}
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">{lang === 'ar' ? 'العقد والسيادة' : 'Sovereign Deed'}</span>
            </button>
          )}

          {/* Replay 1.6s Falcon Intro */}
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              className="px-2.5 py-1.5 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer"
              title={lang === 'ar' ? 'إعادة تشغيل دخول الصقر السيبراني (1.6 ثانية)' : 'Replay Falcon Intro'}
            >
              <Play className="w-3 h-3" />
              <span className="hidden md:inline">{lang === 'ar' ? 'دخول الصقر (1.6s)' : 'Intro'}</span>
            </button>
          )}

          {/* Fullscreen Mode Button */}
          {onToggleFullscreen && (
            <button
              id="fullscreen-toggle-btn"
              onClick={onToggleFullscreen}
              className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                isFullscreen
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_12px_rgba(0,210,255,0.4)]'
                  : 'bg-slate-900/90 text-cyan-400 border-cyan-800/60 hover:border-cyan-400 hover:bg-cyan-950/60 hover:shadow-[0_0_10px_rgba(0,210,255,0.3)]'
              }`}
              title={lang === 'ar' ? (isFullscreen ? 'إنهاء وضع ملء الشاشة' : 'عرض ملء الشاشة') : (isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen')}
            >
              {isFullscreen ? <Minimize className="w-3.5 h-3.5 text-cyan-300" /> : <Maximize className="w-3.5 h-3.5 text-cyan-400" />}
              <span className="hidden md:inline">
                {isFullscreen
                  ? (lang === 'ar' ? 'تصغير الشاشة' : 'Exit Full')
                  : (lang === 'ar' ? '⛶ ملء الشاشة' : '⛶ Fullscreen')}
              </span>
            </button>
          )}

          {/* Voice Reading Button (Web Speech API) */}
          <button
            id="voice-synthesis-btn"
            onClick={onToggleVoice}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isSpeaking
                ? 'bg-amber-500/20 text-amber-300 border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.5)] animate-pulse'
                : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-[#00d2ff] hover:text-[#00d2ff]'
            }`}
            title={lang === 'ar' ? 'تشغيل القراءة الصوتية الفورية' : 'Instant Voice Synthesis'}
          >
            {isSpeaking ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden sm:inline">
              {isSpeaking 
                ? (lang === 'ar' ? 'صوت شغال' : 'Voice On') 
                : (lang === 'ar' ? 'قراءة صوتية' : 'Voice Read')}
            </span>
          </button>

          {/* Language Selector */}
          <div className="flex items-center gap-1 bg-slate-900 border border-slate-700 rounded-xl px-2.5 py-1">
            <Globe className="w-3.5 h-3.5 text-[#00d2ff]" />
            <select
              id="globalLangSelector"
              value={lang}
              onChange={(e) => onLanguageChange(e.target.value as AppLanguage)}
              className="bg-transparent text-white text-xs font-medium focus:outline-none cursor-pointer"
            >
              <option value="ar" className="bg-slate-900 text-white">العربية</option>
              <option value="en" className="bg-slate-900 text-white">English</option>
              <option value="fr" className="bg-slate-900 text-white">Français</option>
            </select>
          </div>

          {/* LED Digital Neon Clock */}
          <div 
            id="globalDigitalClock"
            className="text-sm sm:text-base font-mono font-extrabold text-[#00d2ff] tracking-widest px-3 py-1 bg-slate-950/90 border border-[#00d2ff]/60 rounded-xl shadow-[0_0_12px_rgba(0,210,255,0.3)]"
          >
            {timeString}
          </div>
        </div>
      </div>

      {/* 3. Ultra-Clean Sovereign Navigation Hub (مصنفة بـ 4 أجنحة كبرى بلا فوضى) */}
      <div className="bg-[#030712] border-t border-slate-800/80 px-4 py-2 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center justify-start md:justify-center gap-1.5 sm:gap-2">
          {categories.flatMap(c => c.rooms).map((room) => {
            const isActive = currentRoom === room.id;
            return (
              <button
                key={room.id}
                id={`room-btn-${room.id}`}
                onClick={() => onSelectRoom(room.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'text-cyan-300 border-2 border-cyan-400 bg-cyan-950/70 shadow-[0_0_16px_rgba(0,210,255,0.4)] scale-105'
                    : 'text-slate-400 border border-slate-800/80 hover:text-white hover:border-slate-600 bg-slate-950/60'
                }`}
              >
                <span>{room.icon}</span>
                <span>{lang === 'ar' ? room.ar : room.en}</span>
              </button>
            );
          })}
        </div>
      </div>
      {/* Secret Room Passcode Modal (بوابة فك تشفير غرفة شاهين السرية ومجلس العظماء) */}
      {isSecretModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-gradient-to-b from-slate-950 via-[#0c1020] to-slate-950 border-2 border-amber-500/60 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-[0_0_50px_rgba(245,158,11,0.3)] space-y-5 text-slate-100 relative">
            <button 
              onClick={() => { setIsSecretModalOpen(false); setPasscodeInput(''); setPasscodeError(false); }}
              className="absolute top-4 end-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                <Crown className="w-7 h-7 text-amber-400 animate-pulse" />
              </div>
              <h3 className="text-xl font-black text-white font-mono tracking-wider">
                {lang === 'ar' ? '🔒 غرفة شاهين السرية السيادية' : '🔒 Shaheen Apex Secret Sanctum'}
              </h3>
              <p className="text-xs text-slate-300">
                {lang === 'ar' 
                  ? 'هذه الغرفة محصنة ومشفرة مخصصة للعرّاب ومجلس العباقرة الأربعة. أدخل رمز الأمان للفتح:' 
                  : 'Classified Sovereign Sanctum. Enter your clearance passkey to unlock:'}
              </p>
            </div>

            <form onSubmit={handleVerifyPasscode} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={passcodeInput}
                  onChange={(e) => setPasscodeInput(e.target.value)}
                  placeholder={lang === 'ar' ? 'أدخل الرمز السري (مثال: 777 أو SHAHEEN)' : 'Enter passkey (e.g., 777, SHAHEEN)'}
                  autoFocus
                  className={`w-full bg-slate-900/90 border-2 rounded-2xl px-4 py-3.5 text-center text-lg font-mono font-black tracking-widest outline-none transition-all ${
                    passcodeError
                      ? 'border-rose-500 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.5)]'
                      : passcodeSuccess
                      ? 'border-emerald-400 text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.5)]'
                      : 'border-amber-500/60 text-amber-300 focus:border-amber-400 shadow-inner'
                  }`}
                />
              </div>

              {/* Quick Dial Pad (0-9, Clear, Enter) */}
              <div className="grid grid-cols-3 gap-2">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
                  <button
                    key={digit}
                    type="button"
                    onClick={() => setPasscodeInput((prev) => prev + digit)}
                    className="py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 text-white font-mono font-bold text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    {digit}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setPasscodeInput('')}
                  className="py-2.5 rounded-xl bg-rose-950/60 hover:bg-rose-900 border border-rose-700/50 text-rose-300 font-mono font-bold text-xs transition-all cursor-pointer"
                >
                  {lang === 'ar' ? 'مسح' : 'Clear'}
                </button>
                <button
                  type="button"
                  onClick={() => setPasscodeInput((prev) => prev + '0')}
                  className="py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 text-white font-mono font-bold text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  0
                </button>
                <button
                  type="button"
                  onClick={() => setPasscodeInput('777')}
                  className="py-2.5 rounded-xl bg-amber-950/80 hover:bg-amber-900 border border-amber-500/60 text-amber-300 font-mono font-black text-xs transition-all cursor-pointer shadow-[0_0_10px_rgba(245,158,11,0.3)]"
                >
                  777 ⚡
                </button>
              </div>

              {passcodeError && (
                <div className="p-2.5 rounded-xl bg-rose-950/80 border border-rose-500/60 text-rose-300 text-xs font-mono text-center flex items-center justify-center gap-1.5 animate-shake">
                  <ShieldAlert className="w-4 h-4 text-rose-400" />
                  <span>{lang === 'ar' ? 'رمز غير صحيح! الرمز الافتراضي هو 777 أو SHAHEEN' : 'Invalid Passkey! Use default 777 or SHAHEEN'}</span>
                </div>
              )}

              {passcodeSuccess && (
                <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 text-xs font-mono text-center flex items-center justify-center gap-1.5 animate-pulse">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'ar' ? 'تم فك التشفير السيادي! جاري الدخول للغرفة السرية...' : 'Clearance Granted! Entering Sanctum...'}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={passcodeSuccess}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black font-mono text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Key className="w-4 h-4 text-slate-950" />
                <span>{lang === 'ar' ? 'فتح الغرفة السرية ومجلس العباقرة' : 'Unlock Sanctum & Council'}</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};
