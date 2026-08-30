import React, { useState, useEffect } from 'react';
import { AppRoom, AppLanguage } from '../types';
import { CyberFalconLogo } from './CyberFalconLogo';
import { Globe, Volume2, VolumeX, ShieldCheck, Sparkles, Flame, Eye, Film, Award, Play } from 'lucide-react';

interface GlobalHeaderProps {
  currentRoom: AppRoom;
  onSelectRoom: (room: AppRoom) => void;
  lang: AppLanguage;
  onLanguageChange: (lang: AppLanguage) => void;
  onToggleVoice: () => void;
  isSpeaking: boolean;
  onOpenContract?: () => void;
  onReplayIntro?: () => void;
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
}) => {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [tickerFading, setTickerFading] = useState(false);

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

  const rooms = [
    { id: 'castle_gate' as AppRoom, num: 1, ar: '🚪 بوابة Castle Gate', en: 'Castle Gate', fr: 'Porte du Château' },
    { id: 'forensic_editor' as AppRoom, num: 2, ar: '✍️ مساعد السيناريو الجنائي', en: 'Forensic Editor', fr: 'Éditeur Judiciaire' },
    { id: 'writers_lobby' as AppRoom, num: 3, ar: '🏛️ رواق غرف الكتاب', en: 'Writers Lobby', fr: 'Hall des Auteurs' },
    { id: 'crisis_recovery' as AppRoom, num: 4, ar: '🔥 إنقاذ السيناريوهات والعرّاب', en: 'Crisis Recovery', fr: 'Sauvetage de Crise' },
    { id: 'semantic_breakdown' as AppRoom, num: 5, ar: '🎬 التفكيك الدلالي والميزانية', en: 'Semantic Breakdown', fr: 'Ventilation Sémantique' },
    { id: 'cineguard_audit' as AppRoom, num: 6, ar: '📊 فحص CineGuard', en: 'CineGuard Audit', fr: 'Audit CineGuard' },
    { id: 'steganography_pro' as AppRoom, num: 7, ar: '🧬 البصمة الصفرية S-WCM', en: 'S-WCM Zero Stego', fr: 'Stéganographie S-WCM' },
    { id: 'pitch_deck' as AppRoom, num: 8, ar: '🏆 ملف هوليوود والمستثمرين', en: 'Hollywood Pitch', fr: 'Présentation Hollywood' },
    { id: 'crypto_arbitrage' as AppRoom, num: 9, ar: '⚡ شاهين كريبتو', en: 'Shaheen Crypto', fr: 'Shaheen Crypto' },
    { id: 'sap_protocol' as AppRoom, num: 10, ar: '🛡️ الأمن السيبراني S.A.P', en: 'S.A.P Security', fr: 'Sécurité S.A.P' },
    { id: 'shaheen_a1' as AppRoom, num: 11, ar: '⌚ عتاد شاهين A1 (SHAHEEN A1 Hardware)', en: 'SHAHEEN A1 Hardware', fr: 'Matériel SHAHEEN A1' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0f172a]/95 backdrop-blur-md border-b border-[#1e293b] shadow-2xl">
      {/* 1. Scrolling Ticker Banner (شريط الإعلانات الناري المتوهج المشع) */}
      <div className="bg-[#0b0f19] border-b border-[#00d2ff]/30 shadow-[0_4px_15px_rgba(0,210,255,0.15)] py-2 overflow-hidden relative flex items-center justify-center min-h-[36px]">
        <div className={`font-bold text-sm tracking-wide text-[#00d2ff] drop-shadow-[0_0_8px_#00d2ff] transition-opacity duration-500 ${tickerFading ? 'opacity-0' : 'opacity-100'}`}>
          {announcements[lang][tickerIndex]}
        </div>
      </div>

      {/* 2. Main Global Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Brand & Falcon 3D Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelectRoom('castle_gate')}>
          <CyberFalconLogo size="md" glow={true} />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold text-white tracking-wider font-mono">
                Castle Gate <span className="text-[#00d2ff] drop-shadow-[0_0_8px_#00d2ff]">بوابة القلعة</span>
              </h1>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-950/80 text-[#00d2ff] border border-[#00d2ff]/40 font-mono font-bold">
                SOVEREIGN V4.0
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              {lang === 'ar' ? 'العرّاب: م. أيمن العرايشي • دمشق & وادي السليكون' : 'Founder: Eng. Ayman Al-Araishi (The Godfather)'}
            </p>
          </div>
        </div>

        {/* Global Controls: Sovereign Deed, Intro Replay, Language Selector, Speech Synthesis, & LED Clock */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          
          {/* Sovereign Deed Button */}
          {onOpenContract && (
            <button
              onClick={onOpenContract}
              className="px-2.5 py-1.5 rounded-lg bg-amber-950/80 hover:bg-amber-900 border border-amber-500/50 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-[0_0_10px_rgba(245,158,11,0.25)] transition-all cursor-pointer"
              title={lang === 'ar' ? 'عرض عقد الملكية وبراءة الاختراع' : 'View Sovereign Deed'}
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">{lang === 'ar' ? 'العقد وبراءة الاختراع' : 'Sovereign Deed'}</span>
            </button>
          )}

          {/* Replay 1.6s Falcon Intro */}
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              className="px-2.5 py-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer"
              title={lang === 'ar' ? 'إعادة تشغيل دخول الصقر السيبراني (1.6 ثانية)' : 'Replay Falcon Intro'}
            >
              <Play className="w-3 h-3" />
              <span className="hidden md:inline">{lang === 'ar' ? 'دخول الصقر (1.6s)' : 'Intro 1.6s'}</span>
            </button>
          )}

          {/* Voice Reading Button (Web Speech API) */}
          <button
            id="voice-synthesis-btn"
            onClick={onToggleVoice}
            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isSpeaking
                ? 'bg-amber-500/20 text-amber-300 border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.5)] animate-pulse'
                : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-[#00d2ff] hover:text-[#00d2ff]'
            }`}
            title={lang === 'ar' ? 'تشغيل القراءة الصوتية الفورية' : 'Instant Voice Synthesis'}
          >
            {isSpeaking ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden sm:inline">
              {isSpeaking 
                ? (lang === 'ar' ? 'صوت شغال' : 'Voice Active') 
                : (lang === 'ar' ? 'قراءة صوتية' : 'Voice Read')}
            </span>
          </button>

          {/* Language Selector */}
          <div className="flex items-center gap-1 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1">
            <Globe className="w-3.5 h-3.5 text-[#00d2ff]" />
            <select
              id="globalLangSelector"
              value={lang}
              onChange={(e) => onLanguageChange(e.target.value as AppLanguage)}
              className="bg-transparent text-white text-xs font-medium focus:outline-none cursor-pointer"
            >
              <option value="ar" className="bg-slate-900 text-white">العربية (مكة المكرمة)</option>
              <option value="en" className="bg-slate-900 text-white">English (London GMT)</option>
              <option value="fr" className="bg-slate-900 text-white">Français (Paris CET)</option>
            </select>
          </div>

          {/* LED Digital Neon Clock */}
          <div 
            id="globalDigitalClock"
            className="text-base sm:text-lg font-mono font-extrabold text-[#00d2ff] tracking-widest px-3 py-1 bg-slate-950/90 border border-[#00d2ff] rounded-lg shadow-[0_0_12px_rgba(0,210,255,0.4)]"
          >
            {timeString}
          </div>
        </div>
      </div>

      {/* 3. Rooms Navigation Bar (مسطرة التنقل بين الغرف السبعة بأعلى الصفحة) */}
      <div className="bg-[#020617] border-t border-[#1e293b] px-4 py-2 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center gap-2">
          {rooms.map((room) => {
            const isActive = currentRoom === room.id;
            return (
              <button
                key={room.id}
                id={`room-btn-${room.id}`}
                onClick={() => onSelectRoom(room.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-[#00d2ff] border border-[#00d2ff] bg-blue-950/40 shadow-[0_0_15px_rgba(0,210,255,0.4)] scale-105'
                    : 'text-slate-400 border border-transparent hover:text-[#00d2ff] hover:border-[#00d2ff]/40 hover:bg-slate-900'
                }`}
              >
                {lang === 'ar' ? room.ar : lang === 'fr' ? room.fr : room.en}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
