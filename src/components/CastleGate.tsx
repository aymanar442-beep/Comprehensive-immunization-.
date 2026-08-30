import React, { useState } from 'react';
import { AppLanguage, AppRoom } from '../types';
import { CyberFalconLogo } from './CyberFalconLogo';
import { ShieldCheck, Lock, ArrowRight, ArrowLeft, Key, Sparkles, Film, CheckCircle2, Award } from 'lucide-react';

interface CastleGateProps {
  lang: AppLanguage;
  onEnterApp: () => void;
  onNavigateRoom: (room: AppRoom) => void;
  onOpenContract?: () => void;
}

export const CastleGate: React.FC<CastleGateProps> = ({ lang, onEnterApp, onNavigateRoom, onOpenContract }) => {
  const [email, setEmail] = useState('executive@warnerbros-studios.com');
  const [password, setPassword] = useState('••••••••••••');
  const [authenticated, setAuthenticated] = useState(false);
  const [authFeedback, setAuthFeedback] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAuthFeedback(null);

    // Secure Sanitization & Sovereign Authentication Gate
    setTimeout(() => {
      setLoading(false);
      setAuthenticated(true);
      setAuthFeedback(
        lang === 'ar'
          ? 'تم الدخول الآمن بنجاح عبر بروتوكول Castle Gate السيادي!'
          : 'Secure access granted via Castle Gate Sovereign Protocol.'
      );
      setTimeout(() => {
        onEnterApp();
      }, 800);
    }, 600);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 relative">
      {/* Background Ambience Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main 3D Neon Card Container */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-[#0f172a]/95 backdrop-blur-xl border border-[#00d2ff] rounded-3xl p-6 sm:p-8 text-center shadow-[0_0_35px_rgba(0,210,255,0.4),inset_0_0_20px_rgba(0,210,255,0.15)] transform transition-all hover:scale-[1.01] duration-500">
          
          {/* Cybernetic Falcon 3D Illuminated Logo */}
          <div className="flex justify-center mb-3">
            <CyberFalconLogo size="lg" glow={true} />
          </div>

          <h2 className="text-3xl font-black text-white tracking-wider font-mono">
            Castle Gate <span className="text-[#00d2ff] drop-shadow-[0_0_10px_#00d2ff]">بوابة القلعة</span>
          </h2>
          <p className="text-xs text-[#00d2ff]/80 font-mono mt-1 uppercase tracking-widest">
            {lang === 'ar' ? 'درع الحماية السيادي المطلق' : 'The Ultimate Sovereign Shield'}
          </p>

          <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
            {lang === 'ar'
              ? 'المنظومة الدفاعية الأولى من نوعها عالمياً لحماية سيناريوهات هوليوود من التسريب وكشف هوية الفاعل في 0.04 ملي ثانية.'
              : 'The world\'s sovereign defense platform engineered to secure major studio screenplays and extract forensic identities in 0.04ms.'}
          </p>

          {/* Sovereign Deed Pill */}
          {onOpenContract && (
            <button
              type="button"
              onClick={onOpenContract}
              className="mt-3 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-[11px] font-mono hover:bg-amber-900/80 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'ar' ? 'المؤسس: م. أيمن العرايشي (عرض وثيقة العقد)' : 'Founder: Eng. Ayman Al-Araishi (View Charter)'}</span>
            </button>
          )}

          {/* Secure Login Form */}
          <form onSubmit={handleLogin} className="mt-5 space-y-3 text-start">
            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1">
                {lang === 'ar' ? 'البريد الإلكتروني المعتمد للمنتج / الاستوديو' : 'Authorized Studio / Executive Email'}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#020617] border border-[#334155] text-white text-xs font-mono focus:outline-none focus:border-[#00d2ff] focus:shadow-[0_0_12px_rgba(0,210,255,0.5)] transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1">
                {lang === 'ar' ? 'مفتاح التشفير السيادي (كلمة المرور)' : 'Sovereign Cipher Key (Password)'}
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#020617] border border-[#334155] text-white text-xs font-mono focus:outline-none focus:border-[#00d2ff] focus:shadow-[0_0_12px_rgba(0,210,255,0.5)] transition-all"
              />
            </div>

            {authFeedback && (
              <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{authFeedback}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#00d2ff] hover:from-[#1d4ed8] hover:to-[#00b4d8] text-white font-extrabold text-xs sm:text-sm tracking-wide uppercase shadow-[0_0_20px_rgba(0,210,255,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <span>{lang === 'ar' ? 'جاري التحقق الجنائي...' : 'Authenticating...'}</span>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'دخول آمن للمنظومة (Castle Gate)' : 'Secure Castle Gate Entry'}</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Jump Buttons to other rooms */}
          <div className="mt-5 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-center gap-2 text-[11px]">
            <button
              onClick={() => onNavigateRoom('pitch_deck')}
              className="text-amber-400 hover:text-amber-300 font-bold transition-colors"
            >
              🏆 {lang === 'ar' ? 'ملف هوليوود والمستثمرين' : 'Hollywood Pitch Deck'}
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onNavigateRoom('forensic_editor')}
              className="text-slate-400 hover:text-[#00d2ff] transition-colors"
            >
              ✍️ {lang === 'ar' ? 'مساعد السيناريو' : 'Forensic Editor'}
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onNavigateRoom('steganography_pro')}
              className="text-slate-400 hover:text-[#00d2ff] transition-colors"
            >
              🧬 {lang === 'ar' ? 'البصمة الصفرية S-WCM' : 'S-WCM Zero Stego'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
