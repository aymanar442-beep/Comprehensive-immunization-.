import React from 'react';

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
      {/* Cybernetic Falcon SVG Emblem */}
      <div className={`relative shrink-0 ${sizeMap[size]}`}>
        {/* Ambient Neon Backlight */}
        {glow && (
          <div className="absolute inset-0 rounded-full bg-[#00d2ff]/25 blur-md animate-pulse pointer-events-none" />
        )}

        <img
          src="/shaheen-logo.jpg"
          alt="Shaheen Apex AI Logo"
          className="w-full h-full relative z-10 rounded-full object-cover border-2 border-[#00d2ff]/40 shadow-[0_0_15px_rgba(0,210,255,0.3)]"
        />
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
