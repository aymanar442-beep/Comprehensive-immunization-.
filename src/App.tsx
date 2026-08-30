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
import { CryptoArbitrageEngine } from './components/CryptoArbitrageEngine';
import { ShaheenA1Hardware } from './components/ShaheenA1Hardware';
import { SapProtocolDashboard } from './components/SapProtocolDashboard';
import { CyberFalconLogo } from './components/CyberFalconLogo';
import { CyberFalconIntro } from './components/CyberFalconIntro';
import { FounderContractModal } from './components/FounderContractModal';
import { CheckCircle2, AlertCircle, Award } from 'lucide-react';

export default function App() {
  const [currentRoom, setCurrentRoom] = useState<AppRoom>('castle_gate');
  const [lang, setLang] = useState<AppLanguage>('en');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  // 1.6-second Cyber Falcon Intro on startup
  const [showIntro, setShowIntro] = useState<boolean>(true);
  
  // Sovereign Founder Deed / Patent Charter Modal
  const [isContractOpen, setIsContractOpen] = useState<boolean>(false);

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
    if (currentRoom === 'castle_gate') {
      textToSpeak = lang === 'ar'
        ? 'أهلاً بكم في بوابة كاسل غيت لمنظومة شاهين إيبكس، نظام الحماية السيادي لسيناريوهات هوليوود.'
        : 'Welcome to Castle Gate SHAHEEN APEX AI, sovereign cinema script protection protocol.';
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
    } else if (currentRoom === 'pitch_deck') {
      textToSpeak = lang === 'ar'
        ? 'ملف العرض التقديمي الرسمي لمنظومة شاهين إيبكس وقصة المؤسس المهندس أيمن العرايشي العرّاب.'
        : 'Official Pitch Deck of SHAHEEN APEX AI and founder story of Eng. Ayman Al-Araishi (The Godfather).';
    } else if (currentRoom === 'crypto_arbitrage') {
      textToSpeak = lang === 'ar'
        ? 'منظومة شاهين كريبتو، محرك الأرباح الجنائية وهيكل الأمان المزدوج مع خوارزميات التداول التفاعلي.'
        : 'Shaheen Crypto Engine, Dual-Layer Security and Wealth Generation Algorithm for sovereign trading.';
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
          onComplete={() => setShowIntro(false)}
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
      />

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
            onEnterApp={() => setCurrentRoom('pitch_deck')}
            onNavigateRoom={(r) => setCurrentRoom(r)}
            onOpenContract={() => setIsContractOpen(true)}
          />
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

        {currentRoom === 'crypto_arbitrage' && (
          <CryptoArbitrageEngine lang={lang} />
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
