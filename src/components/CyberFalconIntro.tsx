import React, { useState, useRef } from 'react';
import { CyberFalconLogo } from './CyberFalconLogo';
import { Play, ArrowRight } from 'lucide-react';

interface CyberFalconIntroProps {
  onComplete: () => void;
  lang: 'ar' | 'en' | 'fr';
}

export const CyberFalconIntro: React.FC<CyberFalconIntroProps> = ({ onComplete, lang }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startIntro = () => {
    setHasStarted(true);
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Video play error:", err);
        // If it fails to play (e.g., policy block), just skip to the app
        onComplete();
      });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#020617] flex flex-col items-center justify-center overflow-hidden select-none">
      
      {/* Background Holographic Grid when waiting to start */}
      {!hasStarted && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.15)_0%,rgba(2,6,23,0.95)_70%)] pointer-events-none" />
      )}

      {/* The Cinematic Video Intro */}
      <video
        ref={videoRef}
        src="/shaheen-intro.mp4"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-0 ${hasStarted ? 'opacity-100' : 'opacity-0'}`}
        onEnded={onComplete}
        playsInline
      />
      
      {/* Initiation Screen */}
      {!hasStarted && (
        <div className="relative z-10 flex flex-col items-center text-center max-w-lg space-y-8 p-4">
          <div className="relative transform scale-110 sm:scale-125 transition-transform animate-pulse">
            <CyberFalconLogo size="hero" glow={true} />
          </div>
          
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-widest font-mono drop-shadow-[0_0_20px_#00d2ff]">
              Castle Gate <span className="text-[#00d2ff]">بوابة القلعة</span>
            </h1>
            <p className="text-xs sm:text-sm font-mono text-[#00d2ff] tracking-[0.2em] uppercase">
              {lang === 'ar' ? 'بروتوكول الدفاع السيادي' : 'SOVEREIGN DEFENSE PROTOCOL'}
            </p>
            <p className="text-xs text-slate-400 font-mono mt-2">
              {lang === 'ar' ? 'المؤسس والمعماري: المهندس أيمن العرايشي (العرّاب)' : 'Founder & Lead Architect: Eng. Ayman Al-Araishi (The Godfather)'}
            </p>
          </div>
          
          <button
            onClick={startIntro}
            className="px-8 py-4 mt-8 rounded-2xl bg-gradient-to-r from-[#0284c7] to-[#00d2ff] hover:from-[#0369a1] hover:to-[#0ea5e9] text-white font-black text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(0,210,255,0.5)] hover:shadow-[0_0_40px_rgba(0,210,255,0.7)] transition-all flex items-center gap-3 cursor-pointer"
          >
            <Play className="w-6 h-6 fill-current" />
            <span>{lang === 'ar' ? 'تفعيل وتشغيل المنظومة' : 'INITIATE SOVEREIGN SYSTEM'}</span>
          </button>
        </div>
      )}

      {/* Skip Button (visible during video) */}
      {hasStarted && (
        <button
          onClick={onComplete}
          className="absolute bottom-8 right-8 px-4 py-2 rounded-lg bg-slate-900/40 hover:bg-slate-900/80 border border-slate-700 hover:border-[#00d2ff] text-white text-xs font-mono flex items-center gap-2 transition-all cursor-pointer z-20 backdrop-blur-md"
        >
          <span>{lang === 'ar' ? 'تخطي' : 'SKIP'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
