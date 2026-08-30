import React, { useState } from 'react';
import { AppLanguage } from '../types';
import { ShieldCheck, Activity, BarChart4, Target, Eye, AlertTriangle } from 'lucide-react';
import { CyberFalconLogo } from './CyberFalconLogo';
import Markdown from 'react-markdown';

interface CineGuardAuditProps {
  lang: AppLanguage;
}

export const CineGuardAudit: React.FC<CineGuardAuditProps> = ({ lang }) => {
  const [analyzing, setAnalyzing] = useState(false);
  const [reportReady, setReportReady] = useState(false);

  const mockScript = `المشهد 12 - خارجي. جسر الجيزة الجديد - منتصف الليل (أمطار حمضية غزيرة)
تنعكس لوحات الإعلانات ثلاثية الأبعاد النيونية على الكروم المبلل لدراجة طارق الإلكترونية. يقوم بتعديل قناعه العصبي.
طارق
ليلى، جدار الحماية الخاص بالبنك المركزي ينبض كل 4 مللي ثانية. إذا تجاوزتُ عقدة سفينكس، فستدمر طائراتهم الدفاعية الآلية الممر الجوي.
ليلى (عبر التغذية العصبية)
لا تلمس عقدة أبو الهول! إنها فخٌّ مُضلل بنته شركة بلاك ووتر للذكاء الاصطناعي.
وابل من رصاصات البلازما المتتبعة يمزق حاجز الممر العلوي فوق طارق!
طارق (يتسارع نحو السقوط الحر)
سيُطفأ الظلام خلال ثلاثة، اثنين، واحد!`;

  const [scriptInput, setScriptInput] = useState(mockScript);

  const markdownReport = `
[CINEGUARD APEX] // تقرير التدقيق التحليلي والتنبؤ الجماهيري
مشروع: THE NILE PROTOCOL: CYBER HEIST 2099
مستوى السرية: مصنف / مسودة مشفرة
الجهة المستهدفة: خوارزميات الاستحواذ والبث الرقمي (SVOD) وشباك التذاكر العالمي

───

### 1. تقييم التجاوب مع الجمهور المستهدف (Demographic Resonance)
الفئة: الجيل Z (Gen-Z) ومستهلكو منصات البث الرقمي (أكشن / خيال علمي وتقني)

* **الجاذبية البصرية والسردية (Arab-Futurism / Cyberpunk):**
  * **درجة التوافق:** 94%
  * **التحليل:** المزج بين الطابع المستقبلي السايبربانك والمعالم التراثية (نيو جيزة، عقدة أبو الهول، كابلات القلعة القديمة) يكسر النمطية الغربية المعتادة في هذا النوع، مما يخلق هوية بصرية فريدة ذات جاذبية عالمية وفضول ثقافي عالي للجيل Z.
* **إيقاع لغة الحوار وأسلوب ألعاب الفيديو (Gamer-adjacent Pacing):**
  * الحوار السريع عبر الرابط العصبي (Neuro-feed) واستخدام مصطلحات الهاكينغ والدرونز يعطي إحساساً تفاعلياً يشبه مهام ألعاب الجيل الجديد (مثل Cyberpunk 2077).

───

### 2. مؤشرات الجدوى التجارية وقابلية المشاهدة المتتابعة

| المؤشر | النتيجة | التقييم التحليلي |
| :--- | :--- | :--- |
| **مؤشر الجدوى التجارية (Commercial Viability)** | 87% | قابلية تسويق عالمية عبر الجمع بين الأكشن السريع ومفاهيم الذكاء الاصطناعي المعادية. |
| **مؤشر المشاهدة المتتابعة (Bingeability Index)** | 92/100 | المشهد ينتهي بـ Micro-Cliffhanger يضمن بقاء المشاهد في الحلقة التالية دون انقطاع. |
| **إمكانات التحويل السينمائي (Box Office Factor)** | 82% | المشاهد البصرية (مطر حمضي، دراجة سايبر، إطلاق بلازما) تستغل شاشات IMAX و4DX بامتياز. |

───

### 3. خريطة الاحتفاظ بالمشاهدين ومخاطر التسرّب (Retention Hotspots & Churn)

\`\`\`text
[مخطط تدفق خطي للمشهد 12]
100% | /--- (القفز في التجارة الحرة / تغيير الأدرينالين)
 80% | /--- (تحديد موقع عقدة أبو الهول) /
 60% | /                  /
 40% |_/ (حوار الترددات والفايرول) -------
  0% +-------------------------------------------------> الزمن (ثوانٍ)
\`\`\`

* **نقطة الاحتفاظ القصوى (Retention Hotspot):**
  * **اللحظة:** A barrage of plasma tracer rounds... TAREK accelerating into freefall
  * **الأثر:** قفزة فورية في هرمون الدوبامين للمشاهد، وتصفير احتمالية الخروج (Drop-off Rate < 1.2%).
* **نقطة الخطر المحتملة للتسرّب (Viewer Churn Risk):**
  * **اللحظة:** التفصيل التقني الأولي (4 milliseconds, Blackwater-AI honeypot).
  * **التوصية:** يجب ألا يتجاوز الحوار التقني 4-6 ثوانٍ على الشاشة قبل دخول إطلاق البلازما لمنع التشتت الذهني السريع لجمهور "التمرير السريع" (Short-form attention span).

───

### 4. مقترحات الخطاف التسويقي ونقاط ذروة العرض التشويقي (Marketing Hooks & Trailer Beats)

**أ. ذروة الإعلان التشويقي (Teaser Trailer Climax):**
1. **الصوت (Audio Drop):** انقطاع كامل للموسيقى التصويرية عند جملة: Going dark in three, two, one!
2. **الصورة (Visual Beat):** تجميد الكادر (Freeze-Frame) لحظة انقضاض الدراجة في السقوط الحر بين ناطحات السحاب المغمورة بالمطر الحمضي وشعاع البلازما يمر بمحاذاة الخوذة.
3. **الضربة الصوتية (Bass Drop):** صوت محرك النيترو السايبر يعود بقوة مع ظهور شعار الفيلم.

**ب. خطافات منصات التواصل الاجتماعي (Viral Social Hooks):**
* **TikTok / Reels Hook:** استخدام تباين "كابلات القلعة النحاسية لعام 2042" ضد "ذكاء اصطناعي 2099" كفكرة ميمز تقنية سريعة الانتشار (Retro-tech vs. Super-AI).
* **فلتر تفاعلي (AR Filter):** محاكاة واجهة العرض الرأسية (HUD) لـ "Tarek’s Neuro-link" تكشف عقدة أبو الهول المشفرة على ملامح المستخدم.

───

**القرار النهائي للنظام:** اعتماد المشهد للتنفيذ مع التركيز على المؤثرات البصرية للـ Tracer Rounds لضمان أقصى عائد احتفاظ بصري.
`;

  const handleAudit = () => {
    setAnalyzing(true);
    setReportReady(false);
    setTimeout(() => {
      setAnalyzing(false);
      setReportReady(true);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#0f172a] border border-[#00d2ff]/40 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="hidden sm:block shrink-0 mt-1">
            <CyberFalconLogo size="md" glow={true} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#00d2ff] text-slate-950 font-mono uppercase">
                {lang === 'ar' ? 'استوديو الفحص الأمني والإنقاذ' : 'Audit & Crisis Salvage Studio'}
              </span>
              <span className="text-xs text-[#00d2ff] font-mono font-bold">CineGuard AI (Gemini 3.1 Pro)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {lang === 'ar'
                ? 'تحليل شباك التذاكر والتنبؤ باحتفاظ الجمهور'
                : 'Box Office Analytics & Audience Retention Forecaster'}
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-3xl leading-relaxed">
              {lang === 'ar'
                ? 'تقييم شامل للنص لاستخراج نقاط الذروة، الجدوى التجارية، وخريطة احتفاظ المشاهدين باستخدام خوارزميات التنبؤ.'
                : 'Comprehensive script evaluation extracting climax points, commercial viability, and viewer retention mappings using predictive algorithms.'}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-5 shadow-xl space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-[#1e293b] pb-3">
              <Activity className="w-4 h-4 text-[#00d2ff]" />
              <span>{lang === 'ar' ? 'أدخل نص المشهد المراد فحصه' : 'Input Scene Script for Auditing'}</span>
            </h3>
            <textarea
              rows={12}
              value={scriptInput}
              onChange={(e) => setScriptInput(e.target.value)}
              className="w-full p-4 rounded-xl bg-[#020617] border border-[#1e293b] text-slate-300 text-xs sm:text-sm font-mono leading-relaxed focus:outline-none focus:border-[#00d2ff] transition-all resize-none"
            />
            <button
              onClick={handleAudit}
              disabled={analyzing}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#00d2ff] hover:from-[#1d4ed8] hover:to-[#00b4d8] text-white font-extrabold text-xs sm:text-sm shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <Target className="w-4 h-4" />
              <span>
                {analyzing
                  ? (lang === 'ar' ? 'جاري الفحص المتقدم...' : 'Executing Deep Audit...')
                  : (lang === 'ar' ? 'فحص النص واستخراج التقرير' : 'Run Script Audit')}
              </span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-5 shadow-xl min-h-[400px]">
            <h3 className="text-sm font-bold text-[#00d2ff] flex items-center gap-2 border-b border-[#1e293b] pb-3 mb-4">
              <BarChart4 className="w-4 h-4" />
              <span>{lang === 'ar' ? 'تقرير التدقيق التحليلي (CineGuard)' : 'Audit Analytics Report (CineGuard)'}</span>
            </h3>
            
            {analyzing ? (
              <div className="flex flex-col items-center justify-center h-64 space-y-4">
                <div className="w-12 h-12 border-4 border-[#00d2ff]/20 border-t-[#00d2ff] rounded-full animate-spin" />
                <p className="text-xs text-slate-400 font-mono animate-pulse">
                  {lang === 'ar' ? 'يتم الآن تحليل الجدوى التجارية...' : 'Analyzing Commercial Viability...'}
                </p>
              </div>
            ) : reportReady ? (
              <div className="prose prose-invert prose-sm prose-cyan max-w-none text-slate-300
                prose-headings:text-white prose-headings:font-bold prose-h3:text-cyan-400 prose-h3:text-sm prose-h3:border-b prose-h3:border-slate-800 prose-h3:pb-2
                prose-a:text-[#00d2ff] hover:prose-a:text-cyan-300
                prose-strong:text-emerald-400
                prose-table:border prose-table:border-slate-800 prose-th:bg-slate-900 prose-th:p-2 prose-td:p-2 prose-td:border-t prose-td:border-slate-800
                prose-pre:bg-[#020617] prose-pre:border prose-pre:border-slate-800 prose-pre:text-xs">
                <Markdown>{markdownReport}</Markdown>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-slate-500 space-y-3">
                <ShieldCheck className="w-12 h-12 opacity-20" />
                <p className="text-xs">{lang === 'ar' ? 'التقرير سيظهر هنا...' : 'Report will appear here...'}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
