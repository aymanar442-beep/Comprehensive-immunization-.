import React, { useState } from 'react';
import { AppLanguage } from '../types';
import { Lock, Unlock, Play, ShieldAlert, Check, Star, Award, Film } from 'lucide-react';
import { CyberFalconLogo } from './CyberFalconLogo';

interface WritersLobbyProps {
  lang: AppLanguage;
}

export const WritersLobby: React.FC<WritersLobbyProps> = ({ lang }) => {
  const [showSecurityAlert, setShowSecurityAlert] = useState<boolean>(false);
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotice = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSimulateVideoEnd = () => {
    setVideoPlaying(false);
    setShowSecurityAlert(true);
  };

  return (
    <div className="space-y-8">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-24 right-6 z-50 p-4 rounded-xl bg-slate-900/95 border border-cyan-500/80 text-cyan-300 text-xs font-mono shadow-[0_0_20px_rgba(0,210,255,0.4)] animate-in fade-in slide-in-from-top-2">
          {notification}
        </div>
      )}

      {/* Header Description */}
      <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-6 shadow-xl text-center space-y-2 relative">
        <div className="flex justify-center mb-1">
          <CyberFalconLogo size="sm" glow={true} />
        </div>
        <h2 className="text-2xl font-black text-white tracking-wider font-mono">
          🏛️ {lang === 'ar' ? 'رواق غرف الكتاب والسينمائيين (Writers Lobby)' : 'Sovereign Writers Lobby'}
        </h2>
        <p className="text-xs text-slate-300 max-w-2xl mx-auto">
          {lang === 'ar'
            ? 'مساحة سينمائية حصرية تقسم الوصول إلى 3 فئات فخمة بـ تصميم ليد نيون متناسق، مع حماية أمنية مشددة تمنع سرقة أي مسودة أو اقتباس.'
            : 'Multi-tiered sovereign script exchange divided into Amateur, Pro, and VIP Godfather corridors with real-time intellectual property armor.'}
        </p>
      </div>

      {/* 3 Room Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1. غرفة المبدعين الهواة (متاحة بدون تكلفة) */}
        <div className="bg-[#0f172a]/90 border border-[#1e293b] hover:border-[#00d2ff] rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] flex flex-col justify-between h-[380px]">
          <div>
            <span className="inline-block bg-[#0284c7] text-white px-3 py-1 rounded-full text-xs font-bold font-mono uppercase mb-4 shadow-sm">
              {lang === 'ar' ? 'متاح للجميع (Free Tier)' : 'Open Corridor'}
            </span>
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-lg font-bold text-white mb-2">
              {lang === 'ar' ? 'غرفة المبدعين الهواة' : 'Amateur Creators Room'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'اكتشف مواهب جديدة، نصوصهم وسيناريوهاتهم متاحة للقراءة بدون تكلفة مع حماية بصمة S-WCM الأساسية.'
                : 'Discover emerging writing talent and indie draft screenplays accessible for public viewing.'}
            </p>
          </div>

          <button
            onClick={() => showNotice(lang === 'ar' ? '✅ تم الدخول إلى رواق الهواة المفتوح!' : '✅ Connected to Open Creators Lobby!')}
            className="w-full py-3 bg-[#0284c7] hover:bg-[#00d2ff] text-white font-extrabold text-xs rounded-xl shadow-[0_0_12px_#0284c7] transition-all cursor-pointer"
          >
            {lang === 'ar' ? 'دخول مجاني (Enter Free)' : 'Enter Free Lobby'}
          </button>
        </div>

        {/* 2. غرفة الكتاب المحترفين (مغلقة وتتطلب اشتراك) */}
        <div className="bg-[#0f172a]/90 border border-[#334155] rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#00d2ff] hover:-translate-y-2 shadow-xl hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] flex flex-col justify-between h-[380px] opacity-90">
          <div>
            <span className="inline-block bg-[#475569] text-white px-3 py-1 rounded-full text-xs font-bold font-mono uppercase mb-4 shadow-sm">
              🔒 {lang === 'ar' ? 'فئة المحترفين (Pro Tier)' : 'Pro Verified Only'}
            </span>
            <div className="text-4xl mb-3">⭐</div>
            <h3 className="text-lg font-bold text-white mb-2">
              {lang === 'ar' ? 'غرفة الكتاب المحترفين' : 'Pro Screenwriters Guild'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'تصفح سيناريوهات مميزة من كتاب معتمدين وحاصلين على تقييمات وجوائز عالمية، جاهزة للإنتاج الفوري.'
                : 'Browse elite festival-winning screenplays and WGA-standard scripts ready for immediate studio acquisition.'}
            </p>
          </div>

          <button
            onClick={() => showNotice(lang === 'ar' ? '🔒 يرجى تفعيل اشتراك المحترفين للاستوديوهات!' : '🔒 Pro Studio Subscription required to decrypt.')}
            className="w-full py-3 bg-[#1e293b] hover:bg-[#334155] text-slate-200 border border-[#475569] font-extrabold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'اشترك للفتح (Pro Pass)' : 'Unlock with Pro Pass'}</span>
          </button>
        </div>

        {/* 3. غرفة كبار الكتاب والخدمات الخاصة (VIP) */}
        <div className="bg-[#0f172a]/90 border border-[#b45309]/50 rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#ff4500] hover:-translate-y-2 shadow-xl hover:shadow-[0_0_25px_rgba(255,69,0,0.5)] flex flex-col justify-between h-[380px]">
          <div>
            <span className="inline-block bg-[#b45309] text-white px-3 py-1 rounded-full text-xs font-bold font-mono uppercase mb-4 shadow-sm">
              👑 {lang === 'ar' ? 'فئة كبار الكتاب (VIP Godfather)' : 'VIP Godfather Suite'}
            </span>
            <div className="text-4xl mb-3">💎</div>
            <h3 className="text-lg font-bold text-white mb-2">
              {lang === 'ar' ? 'غرفة الخدمات الخاصة والاستشارات' : 'Exclusive VIP Studio Hub'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'مساحة حصرية لطلب سيناريوهات مفصلة وتواصل مشفر ومباشر مع كبار الكتاب والمهندسين السياديين.'
                : 'Direct encrypted collaboration channel with principal cinema architects and blockbuster salvage consultants.'}
            </p>
          </div>

          <button
            onClick={() => showNotice(lang === 'ar' ? '👑 جاري تجهيز القناة المشفرة للعرّاب...' : '👑 Initializing sovereign encrypted VIP corridor...')}
            className="w-full py-3 bg-gradient-to-r from-[#ff4500] to-[#ff6b00] text-white font-extrabold text-xs rounded-xl shadow-[0_0_15px_#ff4500] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Star className="w-3.5 h-3.5 fill-white" />
            <span>{lang === 'ar' ? 'طلب استشارة العرّاب (VIP)' : 'Request VIP Master Session'}</span>
          </button>
        </div>
      </div>

      {/* Video Presentation Section with Security Overlay Trigger */}
      <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-[#1e293b] pb-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Film className="w-4 h-4 text-[#00d2ff]" />
            <span>{lang === 'ar' ? 'عرض توضيحي محمي (Security Demonstration Stage)' : 'Protected Video Stage'}</span>
          </h3>
          <span className="text-xs text-amber-400 font-mono font-bold bg-amber-950/60 px-2.5 py-0.5 rounded border border-amber-500/30">
            Watermark Active
          </span>
        </div>

        {/* Video Simulation Box with Interactive Overlay */}
        <div className="relative w-full max-w-2xl mx-auto h-72 bg-[#020617] rounded-2xl overflow-hidden border border-[#334155] shadow-2xl flex items-center justify-center">
          {!videoPlaying && !showSecurityAlert && (
            <div className="text-center space-y-3 p-6">
              <div className="text-5xl text-[#00d2ff] filter drop-shadow-[0_0_10px_#00d2ff]">🎬</div>
              <p className="text-xs text-slate-300 font-mono">
                {lang === 'ar'
                  ? 'انقر لتشغيل المحاكاة ورؤية بطاقة التنبيه القانوني التلقائية فور الانتهاء'
                  : 'Click play to simulate video completion and experience the automatic security overlay'}
              </p>
              <button
                onClick={() => {
                  setVideoPlaying(true);
                  setTimeout(() => handleSimulateVideoEnd(), 2000);
                }}
                className="px-6 py-2.5 rounded-xl bg-[#2563eb] hover:bg-[#00d2ff] text-white font-extrabold text-xs shadow-[0_0_15px_#2563eb] transition-all flex items-center gap-2 mx-auto cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{lang === 'ar' ? 'بدء تشغيل العرض' : 'Play Presentation'}</span>
              </button>
            </div>
          )}

          {videoPlaying && (
            <div className="text-center space-y-2">
              <div className="w-10 h-10 border-4 border-[#00d2ff] border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-xs text-[#00d2ff] font-mono animate-pulse">
                {lang === 'ar' ? 'جاري العرض السينمائي المشفر...' : 'Streaming Encrypted Video Stream...'}
              </p>
            </div>
          )}

          {/* Security Overlay Floating Card (تنبيه الحماية فور انتهاء العرض) */}
          {showSecurityAlert && (
            <div className="absolute inset-0 bg-[#0f172a]/95 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center border-2 border-[#ff4500] shadow-[0_0_35px_rgba(255,69,0,0.7)] z-20 animate-in fade-in zoom-in-95 duration-300">
              <div className="text-5xl mb-2 filter drop-shadow-[0_0_12px_#ff4500]">🛡️</div>
              <h3 className="text-lg font-black text-white font-mono">
                {lang === 'ar' ? 'نظام الحماية والتوثيق السيادي' : 'Sovereign IP & Anti-Leak Shield'}
              </h3>
              <p className="text-xs font-bold text-[#ff6b00] drop-shadow-[0_0_8px_rgba(255,69,0,0.5)] max-w-md my-3 leading-relaxed">
                {lang === 'ar'
                  ? 'هذا العرض والمحتوى محمي وموثق بالكامل عبر منظومة الحماية والأمان الجنائي الفني الخاصة بالمنصة. أي اقتباس أو سرقة فكرية تكشف هوية السارق ومصدر التسريب فورياً في 0.04ms.'
                  : 'This presentation and its contents are forensic-watermarked. Any unauthorized reproduction instantly exposes the leaker\'s identity in 0.04ms.'}
              </p>
              <button
                onClick={() => setShowSecurityAlert(false)}
                className="px-6 py-2 bg-gradient-to-r from-[#ff4500] to-[#ff6b00] hover:from-[#e03e00] hover:to-[#e05d00] text-white text-xs font-extrabold rounded-lg shadow-[0_0_15px_#ff4500] transition-all cursor-pointer"
              >
                {lang === 'ar' ? 'فهمت ذلك وتأكيد الحماية' : 'Acknowledge & Confirm Protection'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
