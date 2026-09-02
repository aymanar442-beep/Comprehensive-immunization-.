/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AppRoom, AppLanguage, WatermarkPayload } from './types';
import { GlobalHeader } from './components/GlobalHeader';
import { CastleGate } from './components/CastleGate';
import { ForensicEditor } from './components/ForensicEditor';
import { WritersLobby } from './components/WritersLobby';
import { CrisisRecovery } from './components/CrisisRecovery';
import { SemanticBreakdown } from './components/SemanticBreakdown';
import { CineGuardAudit } from './components/CineGuardAudit';
import { SteganographyStudio } from './components/SteganographyStudio';
import { PitchDeckShowcase } from './components/PitchDeckShowcase';
import { ShortReelsStudio } from './components/ShortReelsStudio';
import { TalentBountyMarketplace } from './components/TalentBountyMarketplace';
import { CinematicPrevizSimulator } from './components/CinematicPrevizSimulator';
import { CinemaTubeHub } from './components/CinemaTubeHub';
import { GodfatherSanctum } from './components/GodfatherSanctum';
import { AutonomousDirectorSuite } from './components/AutonomousDirectorSuite';
import { BoxOfficeProphetSuite } from './components/BoxOfficeProphetSuite';
import { VirtualProductionSuite } from './components/VirtualProductionSuite';
import { ShaheenA1Hardware } from './components/ShaheenA1Hardware';
import { SapProtocolDashboard } from './components/SapProtocolDashboard';
import { EliteArsenalStore } from './components/EliteArsenalStore';
import { CyberFalconLogo } from './components/CyberFalconLogo';
import { CyberFalconIntro } from './components/CyberFalconIntro';
import { FounderContractModal } from './components/FounderContractModal';
import { CheckCircle2, AlertCircle, Award, Maximize, Minimize, ExternalLink, X, Monitor } from 'lucide-react';

export default function App() {
  const [currentRoom, setCurrentRoom] = useState<AppRoom>('castle_gate');
  const [lang, setLang] = useState<AppLanguage>('en');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  // Cyber Falcon Intro disabled on startup as requested
  const [showIntro, setShowIntro] = useState<boolean>(false);
  
  // Sovereign Founder Deed / Patent Charter Modal
  const [isContractOpen, setIsContractOpen] = useState<boolean>(false);

  // Fullscreen state & initial prompt banner
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showFullscreenPrompt, setShowFullscreenPrompt] = useState<boolean>(true);

  // Listen to native fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleToggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        } else if ((document.documentElement as any).webkitRequestFullscreen) {
          await (document.documentElement as any).webkitRequestFullscreen();
        }
        setIsFullscreen(true);
        setShowFullscreenPrompt(false);
        showToast(lang === 'ar' ? 'تم تفعيل وضع ملء الشاشة' : 'Fullscreen mode enabled');
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
        setIsFullscreen(false);
        showToast(lang === 'ar' ? 'تم إنهاء وضع ملء الشاشة' : 'Exited fullscreen mode');
      }
    } catch (err) {
      console.warn('Fullscreen request failed (likely iframe sandbox policy):', err);
      // Fallback: If inside an iframe where requestFullscreen might be restricted, give clear guidance
      showToast(lang === 'ar' ? 'يمكنك أيضاً فتح الرابط في نافذة جديدة لعرض شاشة كاملة حقيقي' : 'Open in new tab for native full window');
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Web Speech API Voice Reading
  const handleToggleVoice = () => {
    if (!('speechSynthesis' in window)) {
      showToast(lang === 'ar' ? 'المتصفح لا يدعم القراءة الصوتية' : 'Speech synthesis not supported');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    let textToSpeak = '';
    if (currentRoom === 'cinema_tube') {
      textToSpeak = lang === 'ar'
        ? 'منصة شاهين سينما تيوب، يوتيوب السينما المفتوح، رفع مجاني للمواهب والكتّاب المغمورين ودخول مجاني للمنتجين لتحقيق فرص ربح حقيقية.'
        : 'Shaheen CinemaTube, open free video stage for obscure writers, actors and directors to secure real studio deals and grants.';
    } else if (currentRoom === 'castle_gate') {
      textToSpeak = lang === 'ar'
        ? 'أهلاً بكم في بوابة كاسل غيت لمنظومة شاهين إيبكس، نظام الحماية السيادي لسيناريوهات هوليوود.'
        : 'Welcome to Castle Gate SHAHEEN APEX AI, sovereign cinema script protection protocol.';
    } else if (currentRoom === 'autonomous_director') {
      textToSpeak = lang === 'ar'
        ? 'منظومة إدارة الإخراج الذاتي وهندسة الميزانية، تفاوض حي بين المخرج والسيناريست والمدقق المالي لتفصيل فيلم أسطوري بمقاس ميزانيتك.'
        : 'Autonomous Director Suite, real-time negotiation between AI Director, Screenwriter, and Loss Comptroller to tailor a cinema production to your exact budget.';
    } else if (currentRoom === 'forensic_editor') {
      textToSpeak = lang === 'ar'
        ? 'مساعد السيناريو والبحث الجنائي ومطابقة النصوص لكشف السرقات وحماية الملكية الفكرية.'
        : 'Forensic Screenplay Editor with instant copyright detection and tone elevation.';
    } else if (currentRoom === 'writers_lobby') {
      textToSpeak = lang === 'ar'
        ? 'رواق غرف الكتاب، مقسم إلى فئة الهواة والمحترفين وكبار الكتاب مع الحماية المشددة.'
        : 'Writers Lobby with tiered corridors and instant forensic video security overlay.';
    } else if (currentRoom === 'crisis_recovery') {
      textToSpeak = lang === 'ar'
        ? 'بوابة إنقاذ وإعادة هيكلة السيناريوهات بالذكاء الاصطناعي وخدمة العراب الخاصة.'
        : 'Crisis plot salvage engine generating counter-intelligence master twists.';
    } else if (currentRoom === 'semantic_breakdown') {
      textToSpeak = lang === 'ar'
        ? 'التفكيك الدلالي التلقائي للسيناريو وحساب الميزانية الفورية للمشاهد.'
        : 'Autonomous semantic script breakdown and instant line-item production costing.';
    } else if (currentRoom === 'cineguard_audit') {
      textToSpeak = lang === 'ar'
        ? 'فحص سين جارد، تحليل شباك التذاكر، والتنبؤ باحتفاظ الجمهور باستخدام الذكاء الاصطناعي.'
        : 'CineGuard Audit, Box Office Analytics, and Audience Retention Forecasting using AI.';
    } else if (currentRoom === 'short_reels') {
      textToSpeak = lang === 'ar'
        ? 'شاهين ريلز وتيك توك السينمائي، منصة فيديوهات رأسية سريعة بحد أقصى دقيقتين لعرض مسودات السيناريو وتجارب الأداء ورؤية المخرجين.'
        : 'Shaheen Short Reels, TikTok-style vertical cinema video feed up to 2 minutes for screenplay pitches and auditions.';
    } else if (currentRoom === 'pitch_deck') {
    } else if (currentRoom === 'sap_protocol') {
      textToSpeak = lang === 'ar'
        ? 'بروتوكول شاهين للأمن السيبراني، حماية صامتة تعتمد على المستشعرات الحيوية وخوارزميات التتبع الديناميكي.'
        : 'S.A.P Protocol, Cyber Security biometric filtering, ensuring Silent Adaptive Protection without cloud dependency.';
    } else if (currentRoom === 'shaheen_a1') {
      textToSpeak = lang === 'ar'
        ? 'عتاد شاهين إي ون. العقد السيادي والتقنية الفيزيائية المغلقة لحماية الأرواح وتشفير الأعصاب.'
        : 'SHAHEEN A1 Hardware. The sovereign closed-loop physical node for human safety and neuro-encryption.';
    } else {
      textToSpeak = lang === 'ar'
        ? 'منظومة شاهين إيبكس لحماية السينما العالمية واستخراج البصمة الصفرية في أجزاء من الثانية.'
        : 'SHAHEEN APEX AI sovereign Hollywood standard.';
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = lang === 'ar' ? 'ar-SA' : lang === 'fr' ? 'fr-FR' : 'en-US';
    utterance.rate = 0.98;
    utterance.pitch = 1.05;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#020617] text-slate-100 flex flex-col font-sans selection:bg-[#00d2ff] selection:text-slate-950"
    >
      {/* 1. Cyber Falcon 1.6-Second Intro Entrance Splash */}
      {showIntro && (
        <CyberFalconIntro
          lang={lang}
          onComplete={() => {
            setShowIntro(false);
            setCurrentRoom('cinematic_previz');
          }}
        />
      )}

      {/* 2. Sovereign Founder Deed / Legal Charter Modal */}
      <FounderContractModal
        isOpen={isContractOpen}
        onClose={() => setIsContractOpen(false)}
        lang={lang}
      />

      {/* 3. Global Application Header with Ticker & Room Switcher */}
      <GlobalHeader
        currentRoom={currentRoom}
        onSelectRoom={(room) => {
          setCurrentRoom(room);
          window.speechSynthesis?.cancel();
          setIsSpeaking(false);
        }}
        lang={lang}
        onLanguageChange={(l) => setLang(l)}
        onToggleVoice={handleToggleVoice}
        isSpeaking={isSpeaking}
        onOpenContract={() => setIsContractOpen(true)}
        onReplayIntro={() => setShowIntro(true)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* Fullscreen Prompt Floating Quick-Banner (خيار العرض بملء الشاشة عند فتح الرابط) */}
      {showFullscreenPrompt && !isFullscreen && (
        <div className="bg-gradient-to-r from-cyan-950/90 via-slate-900/95 to-cyan-950/90 border-b border-cyan-500/40 px-4 py-2.5 shadow-[0_4px_20px_rgba(0,210,255,0.2)] flex items-center justify-between gap-3 text-xs z-40 animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-2.5 text-cyan-300 font-mono">
            <Monitor className="w-4 h-4 text-cyan-400 shrink-0 animate-pulse" />
            <span>
              {lang === 'ar' 
                ? '🎬 هل ترغب بعرض المشروع بوضع الشاشة الكاملة (Fullscreen) لتجربة سينمائية شاملة؟' 
                : '🎬 Would you like to view the project in Fullscreen Mode for an immersive cinema experience?'}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleToggleFullscreen}
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black font-mono text-[11px] shadow-[0_0_12px_rgba(0,210,255,0.5)] flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105"
            >
              <Maximize className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? '⚡ شاشة كاملة الآن' : '⚡ Enter Fullscreen'}</span>
            </button>
            <button
              onClick={() => setShowFullscreenPrompt(false)}
              className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title={lang === 'ar' ? 'إغلاق الإشعار' : 'Dismiss'}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-5 end-5 z-50 px-4 py-3 rounded-xl bg-[#0f172a] text-[#00d2ff] border border-[#00d2ff]/50 shadow-2xl flex items-center gap-3 text-xs font-semibold animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Active Room View */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {currentRoom === 'castle_gate' && (
          <CastleGate
            lang={lang}
            onEnterApp={() => setShowIntro(true)}
            onNavigateRoom={(r) => setCurrentRoom(r)}
            onOpenContract={() => setIsContractOpen(true)}
          />
        )}

        {currentRoom === 'cinema_tube' && (
          <CinemaTubeHub lang={lang} />
        )}

        {currentRoom === 'cinematic_previz' && (
          <CinematicPrevizSimulator lang={lang} />
        )}

        {currentRoom === 'talent_bounty' && (
          <TalentBountyMarketplace lang={lang} />
        )}

        {currentRoom === 'godfather_sanctum' && (
          <GodfatherSanctum lang={lang} />
        )}

        {currentRoom === 'virtual_production' && (
          <VirtualProductionSuite lang={lang} />
        )}

        {currentRoom === 'box_office_prophet' && (
          <BoxOfficeProphetSuite lang={lang} />
        )}

        {currentRoom === 'autonomous_director' && (
          <AutonomousDirectorSuite lang={lang} />
        )}

        {currentRoom === 'forensic_editor' && (
          <ForensicEditor lang={lang} />
        )}

        {currentRoom === 'writers_lobby' && (
          <WritersLobby lang={lang} />
        )}

        {currentRoom === 'crisis_recovery' && (
          <CrisisRecovery lang={lang} />
        )}

        {currentRoom === 'semantic_breakdown' && (
          <SemanticBreakdown lang={lang} />
        )}

        {currentRoom === 'cineguard_audit' && (
          <CineGuardAudit lang={lang} />
        )}

        {currentRoom === 'elite_arsenal' && (
          <EliteArsenalStore lang={lang} />
        )}
        {currentRoom === 'steganography_pro' && (
          <SteganographyStudio
            isArabic={lang === 'ar'}
            onSaveToVault={() => showToast(lang === 'ar' ? 'تم الحفظ في الخزنة السحابية' : 'Saved to Cloud Vault')}
          />
        )}

        {currentRoom === 'pitch_deck' && (
          <PitchDeckShowcase 
            isArabic={lang === 'ar'} 
            onOpenContract={() => setIsContractOpen(true)}
          />
        )}

        {(currentRoom === 'short_reels' || currentRoom === 'crypto_arbitrage') && (
          <ShortReelsStudio lang={lang} />
        )}

        {currentRoom === 'sap_protocol' && (
          <SapProtocolDashboard lang={lang} />
        )}
        {currentRoom === 'shaheen_a1' && (
          <ShaheenA1Hardware lang={lang} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1e293b] bg-[#0b0f19] py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 font-mono">
            <CyberFalconLogo size="xs" glow={false} />
            <span className="text-white font-bold">Castle Gate بوابة القلعة</span>
            <span>•</span>
            <span className="text-[#00d2ff]">Sovereign Shield Architecture</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsContractOpen(true)}
              className="text-amber-400 hover:text-amber-300 font-mono text-[11px] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Award className="w-3 h-3 text-amber-400" />
              <span>{lang === 'ar' ? 'وثيقة العقد وبراءة الاختراع' : 'Sovereign Patent Deed'}</span>
            </button>
            <span className="text-slate-700">•</span>
            <p className="text-[11px] text-slate-400 font-mono">
              Designed & Engineered by <strong className="text-amber-400">Eng. Ayman Al-Araishi (The Godfather)</strong> • XPRIZE Top 100
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
