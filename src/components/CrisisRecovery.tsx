import React, { useState } from 'react';
import { AppLanguage } from '../types';
import { Sparkles, Crown, Zap, DollarSign, RefreshCw, CheckCircle2, ShieldCheck, CreditCard } from 'lucide-react';
import { CyberFalconLogo } from './CyberFalconLogo';

interface CrisisRecoveryProps {
  lang: AppLanguage;
}

export const CrisisRecovery: React.FC<CrisisRecoveryProps> = ({ lang }) => {
  const [leakedText, setLeakedText] = useState<string>(
    'المشهد 92: تم تسريب موت البطل الرئيسي بالسم وانكشاف هوية الخائن في الصحافة قبل موعد العرض بشهرين!'
  );
  const [aiGenerating, setAiGenerating] = useState<boolean>(false);
  const [salvageDone, setSalvageDone] = useState<boolean>(false);

  const handleAIRecovery = () => {
    if (!leakedText.trim()) return;
    setAiGenerating(true);
    setTimeout(() => {
      setAiGenerating(false);
      setSalvageDone(true);
    }, 1000);
  };

  const handleGodfatherRecovery = () => {
    alert(
      lang === 'ar'
        ? 'جارٍ فتح بوابة الدفع الآمنة سترايب لإنهاء حجز استشارة العرّاب الخاصة وتشفير الملفات بجدول سري...'
        : 'Connecting secure Stripe gateway for VIP Godfather recovery session...'
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-[#0f172a] border border-[#ff4500]/40 rounded-2xl p-6 shadow-2xl text-center space-y-2 relative">
        <div className="flex justify-center mb-1">
          <CyberFalconLogo size="sm" glow={true} />
        </div>
        <h2 className="text-2xl font-black text-[#ff6b00] tracking-wider font-mono drop-shadow-[0_0_10px_#ff4500]">
          {lang === 'ar' ? 'بوابة إنقاذ وإعادة هيكلة السيناريوهات (Crisis Recovery Portal)' : 'Crisis Salvage & Plot Recovery Portal'}
        </h2>
        <p className="text-xs text-slate-300 max-w-2xl mx-auto">
          {lang === 'ar'
            ? 'قم بتحويل التسريب الكارثي إلى حبكة مفاجئة وصدمة درامية للمشاهد، وتوفير أكثر من 45 مليون دولار من تكاليف إعادة التصوير.'
            : 'Convert catastrophic spoiler leaks into in-universe counter-intelligence twists, saving millions in physical reshoot expenses.'}
        </p>
      </div>

      {/* Leaked Input Box */}
      <div className="max-w-3xl mx-auto space-y-3">
        <label className="block text-xs font-bold text-slate-300">
          {lang === 'ar' ? 'انسخ المشهد أو النص الذي تسرب للعلن هنا:' : 'Paste Leaked Script Excerpt or Spoiler Scene:'}
        </label>
        <textarea
          rows={5}
          value={leakedText}
          onChange={(e) => setLeakedText(e.target.value)}
          placeholder={lang === 'ar' ? 'انسخ المشهد أو النص الذي تسرب للعلن واشرح باختصار ما الذي انحرق...' : 'Paste the leaked scene here...'}
          className="w-full p-4 rounded-xl bg-[#020617] border border-[#1e293b] text-white text-xs sm:text-sm font-mono focus:outline-none focus:border-[#ff4500] focus:shadow-[0_0_15px_rgba(255,69,0,0.4)] transition-all resize-none"
        />
      </div>

      {/* 2 3D Recovery Options Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto perspective-1000">
        
        {/* Option 1: AI Re-constructor */}
        <div className="bg-[#0f172a]/90 border border-[#1e293b] hover:border-[#00d2ff] rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:rotate-y-[-4deg] shadow-xl hover:shadow-[0_0_25px_rgba(0,210,255,0.5)] flex flex-col justify-between h-[380px]">
          <div>
            <div className="text-5xl mb-3">🤖</div>
            <h3 className="text-lg font-bold text-white mb-2">
              {lang === 'ar' ? 'إعادة الهيكلة الآلية الذكية (Gemini 3.7)' : 'Autonomous AI Plot Reconstruction'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'يقوم النظام بإعادة صياغة الحبكة لجعل الجزء المسرب مجرد تمهيد لخدعة ومفاجأة أكبر بكثير بالسيناريو مع الحفاظ على ترابط الشخصيات.'
                : 'Instantly restructures the screenplay arc, turning the leaked death into an in-universe diversion planted by the lead character.'}
            </p>
          </div>

          <button
            onClick={handleAIRecovery}
            disabled={aiGenerating}
            className="w-full py-3.5 bg-[#2563eb] hover:bg-[#00d2ff] text-white font-extrabold text-xs rounded-xl shadow-[0_0_15px_#2563eb] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {aiGenerating ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Zap className="w-4 h-4" />
            )}
            <span>{lang === 'ar' ? 'تحليل وإعادة بناء الحبكة فوراً' : 'Execute AI Plot Restructure'}</span>
          </button>
        </div>

        {/* Option 2: VIP Godfather Recovery */}
        <div className="bg-[#0f172a]/90 border border-[#1e293b] hover:border-[#ff4500] rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:rotate-y-[4deg] shadow-xl hover:shadow-[0_0_25px_rgba(255,69,0,0.5)] flex flex-col justify-between h-[380px]">
          <div>
            <div className="text-5xl mb-3">👑</div>
            <h3 className="text-lg font-bold text-white mb-2">
              {lang === 'ar' ? 'إنقاذ العرّاب الخاص - فئة كبار الشخصيات' : 'VIP Godfather Executive Salvage'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'طلب مخصص لمعالجة يدوية إبداعية خاصة، تُحفظ بخصوصية تامة ومشفرة عبر بوابة الدفع الآمنة Stripe مع تدخل هندسي سيادي.'
                : 'Direct confidential consultation with Principal Cinema Architects to engineer a zero-leak blockbuster mastercut.'}
            </p>
          </div>

          <button
            onClick={handleGodfatherRecovery}
            className="w-full py-3.5 bg-gradient-to-r from-[#ff4500] to-[#ff6b00] hover:from-[#e03e00] hover:to-[#e05d00] text-white font-extrabold text-xs rounded-xl shadow-[0_0_20px_#ff4500] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Crown className="w-4 h-4" />
            <span>{lang === 'ar' ? 'طلب خدمة العرّاب الخاصة (VIP)' : 'Retain Godfather VIP Salvage'}</span>
          </button>
        </div>

      </div>

      {/* Generated Solution Result */}
      {salvageDone && (
        <div className="max-w-4xl mx-auto bg-[#020617] border border-emerald-500/50 rounded-2xl p-6 shadow-2xl space-y-4 animate-in fade-in slide-in-from-bottom-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <h4 className="text-sm font-bold text-white font-mono">
                {lang === 'ar' ? 'الحبكة البديلة الجاهزة (The Counter-Intelligence Twist):' : 'Reconstructed Master Scenario:'}
              </h4>
            </div>
            <span className="text-xs text-emerald-400 font-mono font-bold">
              💰 {lang === 'ar' ? 'توفير تقديري: 45.2 مليون دولار' : 'Est. Reshoot Savings: $45.2M'}
            </span>
          </div>

          <div className="p-4 bg-[#0f172a] rounded-xl border border-[#1e293b] font-mono text-xs text-slate-200 leading-relaxed whitespace-pre-wrap">
            {lang === 'ar'
              ? `المشهد 92 المعدل (نسخة الإنقاذ الدرامي):

البطل لم يمت بالسم... السم كان مادة تخديرية مؤقتة صممها بنفسه لإقناع العدو بنجاح خطته وسحب اعتراف مسجل في الغرفة.

تفتح الكاميرا على شاشة المراقبة، حيث يبتسم البطل في غرفة سرية بينما الخائن يتم اعتقاله بالجرم المشهود.`
              : `SCENE 92 - RECONSTRUCTED (CRISIS MITIGATION MASTER EDIT):

The protagonist did not die from the poison... The compound was an engineered synthetic paralytic deployed deliberately to induce the syndicate to broadcast their full confession on live satellite arrays.`}
          </div>
        </div>
      )}
    </div>
  );
};
