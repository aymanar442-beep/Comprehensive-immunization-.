import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface CyberFalconIntroProps {
  onComplete: () => void;
  lang: 'ar' | 'en' | 'fr';
}

export const CyberFalconIntro: React.FC<CyberFalconIntroProps> = ({ onComplete, lang }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Auto-play with sound blocked by browser, trying unmuted fallback:", err);
          // If browser strictly blocks unmuted autoplay without prior interaction, fallback to muted then user can unmute
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(() => {
              setVideoError(true);
            });
          }
        });
      }
    }
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden select-none">
      {/* Cinematic Fullscreen Intro Video */}
      <video
        ref={videoRef}
        src="/shaheen-intro.mp4"
        className="w-full h-full object-cover sm:object-contain bg-black"
        onEnded={onComplete}
        onError={() => setVideoError(true)}
        playsInline
        autoPlay
      />

      {/* Ambient Cyber Neon Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/60" />

      {/* Top Banner Tag */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-[#00d2ff]/60 backdrop-blur-md text-[#00d2ff] font-mono text-xs font-bold shadow-[0_0_20px_rgba(0,210,255,0.4)]">
        <Sparkles className="w-3.5 h-3.5 animate-spin" />
        <span>🦅 {lang === 'ar' ? 'الصقر السيبراني السيادي | دخول القلعة' : 'SOVEREIGN CYBER FALCON | CASTLE GATE ENTRY'}</span>
      </div>

      {/* Control Buttons (Bottom Corner) */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
        {/* Sound Toggle Button if needed */}
        <button
          onClick={toggleSound}
          className="px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-cyan-300 text-xs font-mono flex items-center gap-2 transition-all cursor-pointer backdrop-blur-md shadow-lg"
          title={isMuted ? (lang === 'ar' ? 'تشغيل الصوت' : 'Enable Audio') : (lang === 'ar' ? 'كتم الصوت' : 'Mute Audio')}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>{lang === 'ar' ? '🔊 تفعيل الصوت' : '🔊 Enable Audio'}</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'ar' ? 'صوت مفعّل' : 'Audio On'}</span>
            </>
          )}
        </button>

        {/* Skip Button */}
        <button
          onClick={onComplete}
          className="px-4 py-2 rounded-xl bg-cyan-600/90 hover:bg-cyan-500 text-slate-950 text-xs font-black font-mono flex items-center gap-2 transition-all cursor-pointer backdrop-blur-md shadow-[0_0_15px_rgba(0,210,255,0.5)] hover:scale-105"
        >
          <span>{lang === 'ar' ? 'تخطي إلى العرض السينمائي' : 'SKIP TO CINEMA'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Fallback if video failed to load */}
      {videoError && (
        <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-6 text-center z-30">
          <div className="text-4xl mb-3">🦅</div>
          <h2 className="text-xl font-bold text-cyan-400 mb-2 font-mono">
            {lang === 'ar' ? 'الصقر السيبراني السيادي' : 'SOVEREIGN CYBER FALCON'}
          </h2>
          <p className="text-xs text-slate-400 max-w-md mb-6">
            {lang === 'ar' ? 'جاري الانتقال المباشر إلى المنظومة...' : 'Transitioning to Master Presentation...'}
          </p>
          <button
            onClick={onComplete}
            className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold font-mono text-xs cursor-pointer"
          >
            {lang === 'ar' ? 'دخول العرض ➔' : 'Proceed ➔'}
          </button>
        </div>
      )}
    </div>
  );
};

