import React, { useState } from 'react';

interface CyberFalconLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showSubtitle?: boolean;
  glow?: boolean;
  className?: string;
}

export const CyberFalconLogo: React.FC<CyberFalconLogoProps> = ({
  size = 'md',
  showSubtitle = false,
  glow = true,
  className = '',
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  const sizeMap = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    hero: 'w-36 h-36 sm:w-44 sm:h-44',
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Cybernetic Falcon Emblem */}
      <div className={`relative shrink-0 ${sizeMap[size]}`}>
        {/* Ambient Neon Backlight */}
        {glow && (
          <div className="absolute inset-0 rounded-full bg-[#00d2ff]/30 blur-xl animate-pulse pointer-events-none" />
        )}

        {!imgFailed ? (
          <img
            src="/shaheen-logo.jpg"
            alt="Shaheen Apex AI Logo"
            onError={() => setImgFailed(true)}
            className="w-full h-full relative z-10 rounded-full object-cover border-2 border-[#00d2ff] shadow-[0_0_20px_rgba(0,210,255,0.6)]"
          />
        ) : (
          <div className="w-full h-full relative z-10 rounded-full bg-gradient-to-br from-slate-900 via-cyan-950 to-blue-900 border-2 border-[#00d2ff] shadow-[0_0_25px_rgba(0,210,255,0.8)] flex items-center justify-center p-2">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#00d2ff] drop-shadow-[0_0_8px_#00d2ff]">
              <path d="M50 10 L62 38 L92 42 L68 62 L76 92 L50 74 L24 92 L32 62 L8 42 L38 38 Z" opacity="0.25" />
              <path d="M50 15 C55 25 70 30 85 35 C75 45 65 50 60 65 C55 58 52 50 50 42 C48 50 45 58 40 65 C35 50 25 45 15 35 C30 30 45 25 50 15 Z" />
              <circle cx="44" cy="36" r="2.5" fill="#ffffff" />
              <circle cx="56" cy="36" r="2.5" fill="#ffffff" />
              <polygon points="50,42 46,49 54,49" fill="#eab308" />
            </svg>
          </div>
        )}
      </div>

      {/* Brand Text when requested */}
      {showSubtitle && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-mono font-black text-white tracking-widest text-sm sm:text-base">
              SHAHEEN <span className="text-[#00d2ff] drop-shadow-[0_0_8px_#00d2ff]">APEX AI</span>
            </span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-950 text-[#00d2ff] border border-[#00d2ff]/40 font-mono font-bold">
              SOVEREIGN
            </span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono tracking-wider">
            CYBERNETIC ADVANCEMENTS • THE GODFATHER
          </span>
        </div>
      )}
    </div>
  );
};
