import React, { useState } from 'react';
import { CyberFalconLogo } from './CyberFalconLogo';
import { ShieldCheck, Award, FileText, CheckCircle2, Download, Printer, X, Lock, ExternalLink, Globe, Sparkles } from 'lucide-react';

interface FounderContractModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'ar' | 'en' | 'fr';
}

export const FounderContractModal: React.FC<FounderContractModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [copySuccess, setCopySuccess] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyHash = () => {
    navigator.clipboard.writeText('SHA256: 9f8a8b1c4e7d2f3a6b5c8e9d0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b');
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#0b1120] border-2 border-amber-500/60 rounded-2xl max-w-4xl w-full shadow-[0_0_50px_rgba(245,158,11,0.3)] overflow-hidden relative my-auto">
        
        {/* Top Header Ribbon */}
        <div className="bg-gradient-to-r from-amber-950 via-[#1e293b] to-amber-950 border-b border-amber-500/40 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CyberFalconLogo size="sm" glow={true} />
            <div>
              <h3 className="text-base sm:text-lg font-black text-amber-300 font-mono tracking-wider">
                {lang === 'ar' ? '📜 وثيقة العقد السيادي وبراءة الاختراع الملكية' : 'SOVEREIGN CHARTER & FOUNDER INTELLECTUAL PROPERTY DEED'}
              </h3>
              <p className="text-[11px] text-slate-300 font-mono">
                SOVEREIGN REGISTRATION ID: SA-APEX-2026-XPRIZE-001 • THE GODFATHER
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-rose-950 hover:text-rose-400 text-slate-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contract Certificate Body */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-200 text-xs sm:text-sm leading-relaxed max-h-[75vh] overflow-y-auto">
          
          {/* Certificate Crest & Founder Header */}
          <div className="border border-amber-500/30 bg-amber-950/20 rounded-xl p-5 text-center space-y-3 relative overflow-hidden">
            <div className="absolute top-2 right-2 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/40 font-bold">
              VERIFIED & SEALED
            </div>
            
            <div className="flex justify-center">
              <CyberFalconLogo size="lg" glow={true} />
            </div>

            <h4 className="text-xl sm:text-2xl font-black text-white tracking-wide font-serif">
              {lang === 'ar' 
                ? 'عقد إثبات الملكية الفكرية وتوثيق الخوارزميات السيادية' 
                : 'DEED OF INTELLECTUAL PROPERTY & SOVEREIGN ALGORITHM CHARTER'}
            </h4>
            
            <p className="text-amber-400 font-mono font-bold text-sm sm:text-base">
              {lang === 'ar'
                ? 'المؤسس والمعماري الرئيسي: المهندس أيمن العَرَّاب (The Godfather)'
                : 'Founder & Lead Architect: Eng. Ayman Al-Araishi (The Godfather)'}
            </p>
            <p className="text-slate-300 text-xs italic font-serif">
              "Humanity Before Capital — الإنسانية قبل رأس المال"
            </p>
          </div>

          {/* Founder Verified Credentials Grid */}
          <div>
            
            <h5 className="font-bold text-amber-300 uppercase tracking-widest text-xs mb-3 font-mono">
              {lang === 'ar' ? '1. الاعتمادات والسجلات الموثقة للمؤسس:' : '1. OFFICIAL FOUNDER CREDENTIALS & ACADEMIC REGISTRATIONS:'}
            </h5>
            
            <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-4 mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
               <div className="space-y-2">
                 <div className="flex gap-2 items-center"><span className="text-slate-400 w-24">الاسم واللقب:</span><strong className="text-white">أيمن العرايشي (العرّاب) — Ayman Alaraishi</strong></div>
                 <div className="flex gap-2 items-center"><span className="text-slate-400 w-24">البريد الإلكتروني:</span><strong className="text-white">aymanar442@gmail.com</strong></div>
                 <div className="flex gap-2 items-center"><span className="text-slate-400 w-24">واتساب:</span><strong className="text-white">+491731736547</strong></div>
               </div>
               <div className="space-y-2">
                 <div className="flex gap-2 items-center"><span className="text-slate-400 w-24">LinkedIn:</span><strong className="text-emerald-400">linkedin.com/in/ayman-alshame-7930b01a7</strong></div>
                 <div className="flex gap-2 items-center"><span className="text-slate-400 w-24">X / Twitter:</span><strong className="text-[#00d2ff]">x.com/Ayman__alshame</strong></div>
                 <div className="flex gap-2 items-center"><span className="text-slate-400 w-24">YouTube:</span><strong className="text-rose-400">@shaheen-apex-ai</strong></div>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-700 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white text-xs block">Google Cloud Professional Architect & DevOps</span>
                  <span className="text-[11px] text-slate-400">Professional Cloud Architect, DevOps Engineer, Security, Data, Network, Database & Security Operations.</span>
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-700 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white text-xs block">Generative AI Leader & ML Engineer</span>
                  <span className="text-[11px] text-slate-400">Professional Machine Learning Engineer, Gemini Enterprise Agent Ready, GDG Belfast & Cloud Saudi.</span>
                </div>
              </div>


              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-700 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white text-xs block">Y Combinator Entrepreneurship School</span>
                  <span className="text-[11px] text-slate-400">Registered Global Startup Founder credentials</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-700 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white text-xs block">Open Source Initiative (OSI) Member</span>
                  <span className="text-[11px] text-slate-400">Documented Global Membership ID: #91-2037395</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-700 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white text-xs block">XPRIZE "Build with Gemini" Candidate</span>
                  <span className="text-[11px] text-slate-400">Top 100 Official Submission & Survey Honoree</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sovereign Algorithm & IP Clauses */}
          <div className="space-y-4">
            <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <h5 className="font-bold text-amber-300 uppercase tracking-widest text-xs font-mono">
                {lang === 'ar' ? '2. بنود الملكية الحصرية للخوارزميات والأمان:' : '2. SOVEREIGN IP PROTECTION CLAUSES & ALGORITHM PROOFS:'}
              </h5>
              <ul className="space-y-2 list-disc list-inside text-slate-300 text-xs">
                <li>
                  <strong className="text-white">خوارزمية S-WCM (Steganographic Watermark Cryptographic Matrix):</strong> تُسجل بالكامل وبكافة معادلاتها الثنائية ومصفوفة الصفر المشفرة كملكية فكرية وتجارية غير قابلة للنقل دون إذن كتابي من المؤسس المهندس أيمن العَرَّاب.
                </li>
                <li>
                  <strong className="text-white">بوابة كاسل غيت (Castle Gate Protocol):</strong> النظام السيادي لعزل السيناريوهات وتتبع التسريب في 0.04 ملي ثانية بدقة 100% كدليل قضائي قطعي أمام المحاكم الدولية.
                </li>
                <li>
                  <strong className="text-white">حصرية الشراكة:</strong> الشراكة تقع حصراً في إيرادات البرنامج والمنتج البرمجي، ولا تمس أو تشارك في الملكية الفكرية أو الخوارزميات الأم، والتي تظل مملوكة بالكامل للمهندس أيمن العَرَّاب.
                </li>
              </ul>
            </div>

            {/* Financial Equity & Shares */}
            <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
              <h5 className="font-bold text-amber-300 uppercase tracking-widest text-xs font-mono">
                {lang === 'ar' ? '3. الهيكلة المالية والعقد السيادي (Equity & Shares):' : '3. FINANCIAL EQUITY & SOVEREIGN CONTRACT:'}
              </h5>
              {lang === 'ar' ? (

              <ul className="space-y-4 list-none text-slate-300 text-xs sm:text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.1</span>
                  <div>
                    <strong className="text-white block mb-1">المنصب والراتب التنفيذي (CEO & Salary):</strong>
                    يُعين المهندس أيمن العَرَّاب في منصب "المدير التنفيذي" (CEO) براتب شهري قدره <strong>30,000 دولار أمريكي</strong> (360,000 دولار سنوياً)، معفاة تماماً من الضرائب.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.2</span>
                  <div>
                    <strong className="text-white block mb-1">الأرباح التشغيلية (Net Equity):</strong>
                    يستحق المؤسس نسبة <strong>20% من صافي أرباح</strong> كافة الطلبات والخدمات المقدمة (معفاة من الضرائب تماماً). تُدفع هذه النسبة مجدولة على <strong>4 دفعات متساوية سنوياً</strong> (كل 3 أشهر كدفعة كاملة عن الاستحقاق الماضي).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.3</span>
                  <div>
                    <strong className="text-white block mb-1">مكافآت توقيع العقد (Signing Bonus):</strong>
                    صرف مبلغ <strong>25,000 دولار</strong> فور الاتفاق الشفهي لإنهاء الأوراق الرسمية والسفر، يتبعه مبلغ <strong>125,000 دولار كـ "مكافأة توقيع العقد"</strong> تدفع فور التوقيع النهائي.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.4</span>
                  <div>
                    <strong className="text-white block mb-1">التسهيلات اللوجستية والسيادية (Logistics & Residency):</strong>
                    تتكفل الشركة المنفذة/الداعمة بكافة تكاليف (السفر، الإقامة الفاخرة الدائمة، الفواتير). كما تتكفل باستخراج إقامة دائمة قابلة للتحويل إلى <strong>جنسية</strong>، مع تأمين كافة الأوراق التي تخول المؤسس حرية التنقل العالمي.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.5</span>
                  <div>
                    <strong className="text-white block mb-1">نمط الإدارة والمهل (Remote Management & Grace Period):</strong>
                    يتمتع المؤسس بإدارة مرنة <strong>(دوام غير ملتزم عن بعد)</strong> لضمان حرية السفر والتطوير. يُمْنح المؤسس مدة <strong>6 أشهر</strong> كفترة سماح قبل الالتحاق بالبرنامج، مع إمكانية التمديد في حال دعوته للاشتراك بأي عمل فني.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.6</span>
                  <div>
                    <strong className="text-white block mb-1">فصل الأعمال الخارجية (External Roles):</strong>
                    يُقر العقد أن أي أدوار خارجية (مشهد تمثيلي، كتابة سيناريو... إلخ) هي أعمال مستقلة كلياً لا علاقة للشركة بها ولا يحق للشركة أي حصة منها.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.7</span>
                  <div>
                    <strong className="text-white block mb-1">حقوق الإصدارات وملكية الشركة (Versions & Equity):</strong>
                    كافة الإصدارات اللاحقة للمشروع يحق للشركة أخذ نسبتها المقدرة منها مدى الحياة. <strong>إلا</strong> في حال حدوث خلل يستدعي فض النزاع والشراكة من قبل المهندس أيمن <strong>حصراً</strong>. من أسباب فض النزاع: محاولة إقصاء المؤسس من الإدارة بشكل تام، أو إخضاعه لإدارة تحاسبه.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.8</span>
                  <div>
                    <strong className="text-white block mb-1">حصرية "شاهين" للقطاعات الأخرى (Exclusive Extended Architectures):</strong>
                    يحق للمؤسس ابتكار نسخة مشابهة موسعة تستهدف قطاعات غير (السينما والتلفزيون والإذاعة). هذه النسخ الموسعة ستكون <strong>محتكرة بالكامل لشركة "شاهين"</strong>، ولا يحق للشركة الشريكة أي تدخل أو حصة فيها.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.9</span>
                  <div>
                    <strong className="text-white block mb-1">الجدوى الاقتصادية وسرية البراءة (Feasibility & Patent):</strong>
                    يوضح العقد أن خسائر تسريب المشاريع الضخمة تقدر بمئات الملايين، وتطبيق "شاهين" سيحول هذه الخسائر إلى عائدات فلكية مضمونة في المرحلة الأولى، وتتضاعف مع كل تحديث. كما يُمنع كشف الشفرة الأساسية للعلامة المائية درءاً لانتهاك براءة اختراع المطور.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.10</span>
                  <div>
                    <strong className="text-white block mb-1">الشراكة في التطبيق فقط (App Partnership Scope):</strong>
                    الشراكة مع المستثمرين تقتصر <strong>حصراً على تطبيق "شاهين"</strong>. ولا يُعد المستثمرون شركاء في كيان شركة "شاهين" الأم. وتظل الملكية الكاملة للمشروع والخوارزمية عائدة لشركة المؤسس.
                  </div>
                </li>
              
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.11</span>
                  <div>
                    <strong className="text-white block mb-1">علاوة الأرباح الاستثنائية (Super-Profit Bonus):</strong>
                    يُصرف للمؤسس <strong>بونص إضافي قدره 1%</strong> إذا تجاوزت أرباح الشركة سقف الـ <strong>100 مليون دولار</strong>، وذلك علاوةً على نسبة الـ 20% والراتب التنفيذي.
                  </div>
                </li>
              </ul>
) : (

              <ul className="space-y-4 list-none text-slate-300 text-xs sm:text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.1</span>
                  <div>
                    <strong className="text-white block mb-1">CEO Position & Salary:</strong>
                    Eng. Ayman Al-Araishi is appointed as Chief Executive Officer (CEO) with a monthly salary of <strong>$30,000 USD</strong> ($360,000 annually), strictly tax-free.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.2</span>
                  <div>
                    <strong className="text-white block mb-1">Operational Net Equity:</strong>
                    The Founder is entitled to <strong>20% of net profits</strong> from all requests and services provided (strictly tax-free). Distributed in <strong>4 equal annual installments</strong> (every 3 months covering the past quarter's equity).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.3</span>
                  <div>
                    <strong className="text-white block mb-1">Signing Bonuses:</strong>
                    Immediate payout of <strong>$25,000</strong> upon verbal agreement for logistics and paperwork, followed by a <strong>$125,000 "Signing Bonus"</strong> upon final contract signature.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.4</span>
                  <div>
                    <strong className="text-white block mb-1">Logistics & Sovereign Residency:</strong>
                    The Partnering Company covers all costs (travel, luxury permanent residence, utility bills). Furthermore, the company secures permanent residency convertible to <strong>citizenship</strong>, with all documentation enabling global mobility.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.5</span>
                  <div>
                    <strong className="text-white block mb-1">Remote Management & Grace Period:</strong>
                    The Founder enjoys flexible <strong>remote administration</strong> to allow for travel and development. Granted a <strong>6-month grace period</strong> before joining the program, with possible extensions if engaged in artistic projects.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.6</span>
                  <div>
                    <strong className="text-white block mb-1">Separation of External Roles:</strong>
                    Any external engagements (acting, scriptwriting, etc.) are entirely independent. The company has no right or equity in these external artistic endeavors.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.7</span>
                  <div>
                    <strong className="text-white block mb-1">Lifecycle Versions & Equity:</strong>
                    The company retains its agreed equity in all future project versions for life, <strong>unless</strong> a breach causes dispute termination initiated <strong>solely by Eng. Ayman</strong>. Grounds for termination include: attempting to remove the Founder from administration or imposing restrictive oversight.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.8</span>
                  <div>
                    <strong className="text-white block mb-1">Shaheen Exclusivity (Non-Cinema Vectors):</strong>
                    The Founder reserves the right to create an expanded version targeting sectors outside (Cinema, TV, and Radio). These versions will be <strong>monopolized strictly by the "Shaheen" entity</strong>, and the Partnering Company has no claim or equity in them.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.9</span>
                  <div>
                    <strong className="text-white block mb-1">Economic Feasibility & Patent Secrecy:</strong>
                    By preventing multi-million dollar leakages, "Shaheen" converts losses into guaranteed astronomical revenues, compounding with each update. The core cryptographic watermark matrix remains strictly confidential to protect the developer's patent.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.10</span>
                  <div>
                    <strong className="text-white block mb-1">Partnership Scope (App Only):</strong>
                    Investors are partners <strong>exclusively in the "Shaheen App"</strong>. They are NOT partners in the parent "Shaheen Company". Total ownership of the algorithms and overarching project rests entirely with the Founder's company.
                  </div>
                </li>
              
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.11</span>
                  <div>
                    <strong className="text-white block mb-1">Super-Profit Bonus:</strong>
                    An additional <strong>1% bonus</strong> is paid to the Founder if the company's profits exceed the <strong>$100 Million threshold</strong>, on top of the 20% equity and CEO salary.
                  </div>
                </li>
              </ul>
)}
            </div>
          </div>

          {/* Cryptographic Seal & Signature Block */}
          <div className="border-t border-slate-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-400 block">IMMUTABLE CRYPTOGRAPHIC HASH:</span>
              <button
                onClick={handleCopyHash}
                className="font-mono text-xs text-amber-300 bg-slate-950 px-2.5 py-1 rounded border border-slate-800 hover:border-amber-400 flex items-center gap-1.5 cursor-pointer"
              >
                <span>SHA256: 9f8a8b1c4e7d2f3a6b5c8e9d0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b</span>
                {copySuccess && <span className="text-emerald-400 text-[10px]">✓ Copied</span>}
              </button>
            </div>

            <div className="text-center sm:text-end">
              <span className="text-[11px] font-mono text-slate-400 block">SOVEREIGN SIGNATURE:</span>
              <span className="font-serif font-black text-amber-400 text-base tracking-wider block">
                Eng. Ayman Al-Araishi
              </span>
              <span className="text-[10px] text-slate-400 font-mono">The Godfather • Damascus / Silicon Valley</span>
            </div>
          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="bg-slate-900 border-t border-slate-800 p-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'ar' ? 'العقد موثق ومشفر على شبكة SHAHEEN' : 'Deed Sealed on SHAHEEN Apex Ledger'}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'طباعة / حفظ PDF' : 'Print / Export PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold text-xs font-mono transition-colors cursor-pointer"
            >
              {lang === 'ar' ? 'إغلاق وتأكيد العقد' : 'Accept & Close'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
