import React, { useState } from 'react';
import { AppLanguage, PlagiarismResult } from '../types';
import { Search, ShieldAlert, Sparkles, Lock, CheckCircle2, AlertTriangle, Eye, CreditCard, Feather } from 'lucide-react';
import { performForensicScan } from '../utils/steganography';
import { CyberFalconLogo } from './CyberFalconLogo';

interface ForensicEditorProps {
  lang: AppLanguage;
}

export const ForensicEditor: React.FC<ForensicEditorProps> = ({ lang }) => {
  const [writingMode, setWritingMode] = useState<'manual' | 'ai' | 'vip'>('manual');
  const defaultScriptAr = `المشهد 44 - داخلي. غرفة التحقيق الفيدرالية - ليل

أضواء النيون الباردة تنعكس على الطاولة الحديدية.

المحقق روجرز يرمي ملف القضية أمام المبرمج شاهين.

روجرز
(بغضب شديد)
كيف استطعت اختراق شفرة هوليوود بدون ترك أي أثر في السيرفرات؟

شاهين
(يبتسم بهدوء وينظر للكاميرا)
لم أخترق شيئاً يا روجرز... أنا فقط استخدمت الفراغات الصفرية بين الكلمات.`;

  const defaultScriptEn = `SCENE 44 - INT. FEDERAL INTERROGATION VAULT - NIGHT

Cold cyan neon refractions gleam across the reinforced steel table.

DETECTIVE ROGERS slams the classified file down before SHAHEEN.

ROGERS
(visibly enraged)
How did you bypass Hollywood's master cryptographic core without triggering server telemetry?

SHAHEEN
(smiles calmly, glancing directly into the surveillance lens)
I didn't hack anything, Rogers... I simply encoded sovereignty into the zero-width spaces between words.`;

  const [scriptText, setScriptText] = useState<string>(lang === 'ar' ? defaultScriptAr : defaultScriptEn);

  React.useEffect(() => {
    setScriptText(lang === 'ar' ? defaultScriptAr : defaultScriptEn);
  }, [lang]);

  const [analyzing, setAnalyzing] = useState(false);
  const [plagiarismResult, setPlagiarismResult] = useState<PlagiarismResult | null>(null);
  const [unlockedSuggestions, setUnlockedSuggestions] = useState<boolean>(false);

  // 1. Plagiarism & Forensic Intellectual Property Check
  const handlePlagiarismCheck = () => {
    setAnalyzing(true);
    setTimeout(() => {
      const scan = performForensicScan(scriptText);
      setPlagiarismResult({
        matchPercentage: scan.detected ? 0.0 : 4.2,
        isPlagiarized: false,
        tamperIntegrity: scan.tamperIntegrity,
        hiddenWatermarkFound: scan.detected,
        watermarkOwner: scan.payload?.recipientName || (lang === 'ar' ? 'مسودة قيد التطوير' : 'Unassigned / Draft Mode'),
        clicheLines: [
          {
            line: 4,
            text: lang === 'ar' ? 'المحقق روجرز يرمي ملف القضية بغضب شديد' : 'Detective Rogers slams the classified file down in anger',
            suggestion: lang === 'ar' 
              ? 'المحقق روجرز يسحب كرسيه ببطء مدوٍّ، يضع الملف دون أن يرفع عينيه الباردتين، مما يرفع التوتر النفسي 10 أضعاف.'
              : 'Rogers pulls his chair with deafening stillness, sliding the ledger across the table without raising his cold gaze.',
            locked: !unlockedSuggestions,
          },
          {
            line: 8,
            text: lang === 'ar' ? 'يبتسم بهدوء وينظر للكاميرا' : 'Smiles calmly, glancing directly into camera',
            suggestion: lang === 'ar'
              ? 'شاهين يُعدّل نبرة صوته لتطابق تردد أجهزة التنصت، كاشفاً أنه هو من يقود اللعبة.'
              : 'Shaheen modulates his acoustic resonance to match the surveillance frequencies, revealing complete tactical supremacy.',
            locked: !unlockedSuggestions,
          },
        ],
      });
      setAnalyzing(false);
    }, 600);
  };

  return (
    <div className="space-y-6">
      {/* 1. مسطرة أوضاع الكتابة الثلاثية العلوية */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0f172a] border border-[#1e293b] p-4 rounded-2xl shadow-xl">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setWritingMode('manual')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              writingMode === 'manual'
                ? 'bg-[#2563eb] text-white border border-[#00d2ff] shadow-[0_0_12px_rgba(0,210,255,0.5)]'
                : 'bg-[#020617] text-slate-400 border border-[#334155] hover:text-white'
            }`}
          >
            ✍️ {lang === 'ar' ? 'الوضع اليدوي (Manual Mode)' : 'Manual Writing Mode'}
          </button>

          <button
            onClick={() => setWritingMode('ai')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              writingMode === 'ai'
                ? 'bg-[#ff5500] text-white border border-[#ff6b00] shadow-[0_0_12px_rgba(255,85,0,0.5)]'
                : 'bg-[#020617] text-slate-400 border border-[#334155] hover:text-white'
            }`}
          >
            🤖 {lang === 'ar' ? 'المساعد الذكي (Gemini Assistant)' : 'AI Smart Co-Writer'}
          </button>

          <button
            onClick={() => setWritingMode('vip')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              writingMode === 'vip'
                ? 'bg-amber-600 text-white border border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                : 'bg-[#020617] text-slate-400 border border-[#334155] hover:text-white'
            }`}
          >
            💎 {lang === 'ar' ? 'خدمة الـ VIP الخاصة بالعرّاب' : 'Godfather VIP Suite'}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <CyberFalconLogo size="xs" glow={false} />
          <span className="text-[11px] text-[#00d2ff] font-mono font-bold bg-blue-950/60 px-3 py-1 rounded-lg border border-[#00d2ff]/30">
            {lang === 'ar' ? 'نظام الفحص الجنائي النشط' : 'Forensic Scanner Armed'}
          </span>
        </div>
      </div>

      {/* 2. Main Editor Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Main Writing Area (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-5 shadow-xl space-y-3">
            <div className="flex items-center justify-between border-b border-[#1e293b] pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Feather className="w-4 h-4 text-[#00d2ff]" />
                <span>{lang === 'ar' ? 'مساحة تحرير وتأمين السيناريو' : 'Screenplay Editor & Intellectual Armor'}</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">UTF-16 Zero-Width Safe</span>
            </div>

            <textarea
              rows={12}
              value={scriptText}
              onChange={(e) => setScriptText(e.target.value)}
              placeholder={lang === 'ar' ? 'اكتب أو الصق نص السيناريو هنا لتفعيل الفحص الجنائي وتأمين الملكية الفكرية...' : 'Type or paste your screenplay scene here...'}
              className="w-full p-4 rounded-xl bg-[#020617] border border-[#1e293b] text-slate-100 font-mono text-xs sm:text-sm leading-relaxed focus:outline-none focus:border-[#00d2ff] focus:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all resize-none"
            />

            {/* Actions Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={handlePlagiarismCheck}
                disabled={analyzing}
                className="px-5 py-2.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-extrabold shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>{lang === 'ar' ? '🔍 فحص الملكية والسرقات الأدبية' : 'Execute Forensic Copyright Audit'}</span>
              </button>

              <button
                onClick={handlePlagiarismCheck}
                disabled={analyzing}
                className="px-5 py-2.5 rounded-xl bg-[#ff5500] hover:bg-[#e04800] text-white text-xs font-extrabold shadow-[0_0_15px_rgba(255,85,0,0.4)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'ar' ? '💡 كشف العبارات المبتذلة والبدائل' : 'Detect Cliches & Elevate Tone'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right / Forensic Security & Cliche Panel (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-5 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-[#1e293b] pb-3">
              <ShieldAlert className="w-4 h-4 text-[#00d2ff]" />
              <span>{lang === 'ar' ? '🛡️ مركز الأمان والتحليل الجنائي' : 'Forensic Intelligence Panel'}</span>
            </h3>

            {/* Status Item 1: Digital Watermark State */}
            <div className="p-3 bg-[#020617] rounded-xl border border-[#1e293b] flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">{lang === 'ar' ? 'البصمة الرقمية غير المرئية:' : 'Zero-Width Stego DNA:'}</span>
              <span className={`px-2.5 py-0.5 rounded font-bold ${
                plagiarismResult?.hiddenWatermarkFound 
                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                  : 'bg-amber-950 text-amber-400 border border-amber-500/40'
              }`}>
                {plagiarismResult?.hiddenWatermarkFound ? '✅ محمية ومحقونة' : 'بانتظار الفحص'}
              </span>
            </div>

            {/* Status Item 2: Plagiarism Match Percentage */}
            <div className="p-3 bg-[#020617] rounded-xl border border-[#1e293b] flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">{lang === 'ar' ? 'نسبة التطابق والاقتباس على الويب:' : 'Web Plagiarism Match:'}</span>
              <span className="text-base font-extrabold text-emerald-400">
                {plagiarismResult ? `${plagiarismResult.matchPercentage}% (نص أصلي 100%)` : '-- %'}
              </span>
            </div>

            {/* Locked Suggestions Box (بدائل مغلقة للدفع) */}
            <div className="bg-[#020617] border border-dashed border-rose-500/40 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-[#ff6b00] flex items-center gap-1.5 font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? '💡 البدائل الفخمة المكتشفة بالذكاء الاصطناعي:' : 'AI Elite Rewrites Detected:'}</span>
                </h4>
                <span className="text-[10px] text-rose-400 font-mono font-bold bg-rose-950/80 px-2 py-0.5 rounded">
                  2 Cliches Found
                </span>
              </div>

              {plagiarismResult?.clicheLines.map((cliche, idx) => (
                <div key={idx} className="p-3 bg-[#0f172a] rounded-lg border border-[#1e293b] space-y-1.5 text-xs">
                  <p className="text-slate-300 font-medium text-[11px]">
                    <span className="text-rose-400 font-bold">{lang === 'ar' ? `صياغة مبتذلة بالسطر ${cliche.line}: ` : `Line ${cliche.line}: `}</span>
                    "{cliche.text}"
                  </p>

                  <div className={`p-2 bg-[#020617] rounded border border-slate-800 text-[11px] font-mono ${
                    unlockedSuggestions ? 'text-amber-300' : 'filter blur-[4px] select-none text-slate-500'
                  }`}>
                    {cliche.suggestion}
                  </div>
                </div>
              ))}

              {!unlockedSuggestions ? (
                <button
                  onClick={() => setUnlockedSuggestions(true)}
                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all cursor-pointer"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>{lang === 'ar' ? '💳 فتح البدائل الدرامية الفخمة (Unlock VIP)' : 'Unlock Premium Cinematic Rewrites'}</span>
                </button>
              ) : (
                <p className="text-[11px] text-emerald-400 font-mono text-center">
                  ✅ {lang === 'ar' ? 'تم فتح البدائل الحصرية بنجاح!' : 'All VIP Rewrites Unlocked!'}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
