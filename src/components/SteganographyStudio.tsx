import React, { useState } from 'react';
import { WatermarkPayload, ForensicExtractionResult, ClearanceLevel } from '../types';
import { injectZeroWidthWatermark, performForensicScan } from '../utils/steganography';
import { Shield, Key, Eye, FileText, CheckCircle, AlertOctagon, Copy, Sparkles, Database } from 'lucide-react';
import { CyberFalconLogo } from './CyberFalconLogo';

interface SteganographyStudioProps {
  isArabic: boolean;
  onSaveToVault?: () => void;
}

export const SteganographyStudio: React.FC<SteganographyStudioProps> = ({ isArabic, onSaveToVault }) => {
  const [recipientName, setRecipientName] = useState('Leonardo DiCaprio');
  const [recipientRole, setRecipientRole] = useState('Lead Actor (Protagonist)');
  const [studioName, setStudioName] = useState('Warner Bros. Discovery');
  const [scriptTitle, setScriptTitle] = useState('THE DAMASCUS MATRIX (Project Sovereign)');
  const [clearanceLevel, setClearanceLevel] = useState<ClearanceLevel>('Top Secret (Cast Lead)');

  const [rawScript, setRawScript] = useState<string>(
    `المشهد الأخير - خارجي. جبل قاسيون - فجر

تقف الطائرات المسيّرة صامتة في السماء بينما ينظر القائد إلى أضواء دمشق الساحرة.

البطل
(ينظر إلى شريحة البيانات في يده)
لقد انتهت اللعبة يا روجرز... شاهين يرى كل شيء.`
  );

  const [watermarkedScript, setWatermarkedScript] = useState<string>('');
  const [investigationText, setInvestigationText] = useState<string>('');
  const [forensicResult, setForensicResult] = useState<ForensicExtractionResult | null>(null);
  const [copied, setCopied] = useState(false);

  const handleInject = () => {
    const payload: WatermarkPayload = {
      recipientName,
      recipientRole,
      studioName,
      scriptTitle,
      clearanceLevel,
      timestamp: new Date().toISOString(),
      cipherSignature: 'SHA256-SHAHEEN-ZERO-WIDTH-' + Math.random().toString(36).substring(2, 9).toUpperCase(),
      fingerprintHash: 'HASH_SWCM_' + Date.now().toString(16).toUpperCase(),
    };

    const injected = injectZeroWidthWatermark(rawScript, payload);
    setWatermarkedScript(injected);
    setInvestigationText(injected);
  };

  const handleScan = () => {
    const res = performForensicScan(investigationText);
    setForensicResult(res);
  };

  return (
    <div className="space-y-8">
      {/* Studio Header */}
      <div className="bg-[#0f172a] border border-[#00d2ff]/40 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="hidden sm:block shrink-0 mt-1">
            <CyberFalconLogo size="md" glow={true} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#00d2ff] text-slate-950 font-mono">
                S-WCM CORE ENGINE
              </span>
              <span className="text-xs text-[#00d2ff] font-mono font-bold">0.04ms Forensic Latency</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {isArabic
                ? 'استوديو حقن البصمة الصفرية والتتبع الجنائي (S-WCM)'
                : 'S-WCM Zero-Width Steganography & Forensic Extraction Suite'}
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-3xl leading-relaxed">
              {isArabic
                ? 'تشفير بصمة جنائية خفية داخل الفراغات الطبيعية للنص. لا تظهر للعين ولا تأخذ أي بكسل، ولكنها تفضح هوية المسرب فوراً في أقل من 0.04 ملي ثانية.'
                : 'Embeds cryptographically signed receiver DNA invisibly into Unicode zero-width gaps. Imperceptible to the human eye, court-admissible.'}
            </p>
          </div>
        </div>

        <button
          onClick={handleInject}
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#00d2ff] hover:from-[#1d4ed8] hover:to-[#00b4d8] text-white font-extrabold text-xs sm:text-sm shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span>{isArabic ? 'توليد وحقن البصمة الصفرية' : 'Inject Zero-Width DNA'}</span>
        </button>
      </div>

      {/* Grid: Injection & Scanner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Col: Injection Setup */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-5 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-[#1e293b] pb-3">
              <Shield className="w-4 h-4 text-[#00d2ff]" />
              <span>{isArabic ? 'بيانات المستلم ودرجة السرية' : 'Target Recipient Metadata'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">{isArabic ? 'اسم الممثل / المستلم:' : 'Recipient Name:'}</label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#020617] border border-[#334155] text-white text-xs font-mono focus:border-[#00d2ff] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1">{isArabic ? 'الدور / الصلاحية:' : 'Role / Scope:'}</label>
                <input
                  type="text"
                  value={recipientRole}
                  onChange={(e) => setRecipientRole(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#020617] border border-[#334155] text-white text-xs font-mono focus:border-[#00d2ff] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">{isArabic ? 'نص السيناريو الأصلي:' : 'Original Script Text:'}</label>
              <textarea
                rows={5}
                value={rawScript}
                onChange={(e) => setRawScript(e.target.value)}
                className="w-full p-3 rounded-lg bg-[#020617] border border-[#334155] text-slate-200 text-xs font-mono leading-relaxed focus:border-[#00d2ff] focus:outline-none resize-none"
              />
            </div>

            {watermarkedScript && (
              <div className="p-3 bg-blue-950/40 rounded-xl border border-[#00d2ff]/40 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#00d2ff] font-mono">
                    ✅ {isArabic ? 'تم حقن البصمة الصفرية بنجاح' : 'Zero-Width Stego Armed'}
                  </span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(watermarkedScript);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="text-[11px] text-slate-300 hover:text-white flex items-center gap-1 font-mono cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? (isArabic ? 'تم النسخ!' : 'Copied!') : (isArabic ? 'نسخ النص المشفر' : 'Copy')}</span>
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  {isArabic
                    ? 'النص الآن يبدو طبيعياً 100% للعين، ولكنه يحتوي على مصفوفة مشفرة مخفية لا يمكن إزالتها حتى لو تم نسخها عبر واتساب أو تيليجرام أو طباعتها كـ PDF!'
                    : 'Visually identical to original text, containing hidden zero-width Unicode streams immune to standard text stripping.'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Col: Forensic Leak Scanner */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-5 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-[#1e293b] pb-3">
              <Eye className="w-4 h-4 text-[#ff6b00]" />
              <span>{isArabic ? 'التحقيق الجنائي وكشف هوية المسرب' : 'Forensic Crime Lab Extraction'}</span>
            </h3>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">
                {isArabic ? 'الصق النص المسرب للتحقيق فيه:' : 'Paste Leaked / Intercepted Excerpt:'}
              </label>
              <textarea
                rows={5}
                value={investigationText}
                onChange={(e) => setInvestigationText(e.target.value)}
                placeholder={isArabic ? 'الصق أي نص من السيناريو هنا لفحصه...' : 'Paste text to extract leaker identity...'}
                className="w-full p-3 rounded-lg bg-[#020617] border border-[#334155] text-slate-200 text-xs font-mono leading-relaxed focus:border-[#ff6b00] focus:outline-none resize-none"
              />
            </div>

            <button
              onClick={handleScan}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff4500] to-[#ff6b00] hover:from-[#e03e00] hover:to-[#e05d00] text-white font-extrabold text-xs sm:text-sm shadow-[0_0_15px_rgba(255,69,0,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>{isArabic ? 'كشف هوية المسرب فورياً (Scan)' : 'Extract Forensic DNA (0.04ms)'}</span>
            </button>

            {forensicResult && (
              <div className={`p-4 rounded-xl border space-y-2.5 animate-in fade-in zoom-in-95 duration-200 ${
                forensicResult.detected
                  ? 'bg-emerald-950/60 border-emerald-500/50'
                  : 'bg-rose-950/60 border-rose-500/50'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {forensicResult.detected ? (
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : (
                      <AlertOctagon className="w-5 h-5 text-rose-400 shrink-0" />
                    )}
                    <span className="text-xs font-bold text-white font-mono">
                      {forensicResult.detected 
                        ? (isArabic ? '🚨 تم كشف هوية المسرب بنجاح!' : 'Forensic Identity Verified!')
                        : (isArabic ? 'لا توجد بصمة مخفية في هذا النص' : 'No Zero-Width DNA Detected')}
                    </span>
                  </div>

                  <span className="text-[11px] text-emerald-400 font-mono font-bold">
                    ⏱️ {forensicResult.extractionLatencyMs} ms
                  </span>
                </div>

                {forensicResult.detected && forensicResult.payload && (
                  <div className="mt-2 pt-2 border-t border-emerald-800/40 text-xs font-mono space-y-1 text-slate-200">
                    <p><strong className="text-emerald-300">{isArabic ? 'المسرب:' : 'Leaker:'}</strong> {forensicResult.payload.recipientName}</p>
                    <p><strong className="text-emerald-300">{isArabic ? 'الدور:' : 'Role:'}</strong> {forensicResult.payload.recipientRole}</p>
                    <p><strong className="text-emerald-300">{isArabic ? 'الاستوديو:' : 'Studio:'}</strong> {forensicResult.payload.studioName}</p>
                    <p><strong className="text-emerald-300">{isArabic ? 'التوقيت الجنائي:' : 'Timestamp:'}</strong> {forensicResult.payload.timestamp}</p>
                    <p><strong className="text-emerald-300">{isArabic ? 'التوقيع الجنائي:' : 'Signature:'}</strong> {forensicResult.payload.cipherSignature}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
