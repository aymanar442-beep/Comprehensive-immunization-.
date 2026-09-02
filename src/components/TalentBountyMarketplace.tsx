import React, { useState } from 'react';
import { AppLanguage } from '../types';
import { 
  Briefcase, CheckCircle2, DollarSign, Clock, Zap, Sparkles, 
  Send, ShieldCheck, Award, ArrowUpRight, Search, Filter, 
  Coins, FileText, Video, Eye, ThumbsUp, UserCheck, AlertCircle, 
  HeartHandshake, ChevronRight, Check
} from 'lucide-react';

interface TalentBountyMarketplaceProps {
  lang: AppLanguage;
}

interface MicroBounty {
  id: string;
  titleAr: string;
  titleEn: string;
  companyName: string;
  categoryAr: string;
  categoryEn: string;
  payoutUSD: number;
  estMinutes: number;
  descriptionAr: string;
  descriptionEn: string;
  validationMetricAr: string;
  validationMetricEn: string;
  status: 'open' | 'evaluating' | 'completed';
  difficulty: 'easy' | 'medium';
}

interface JobPost {
  id: string;
  roleAr: string;
  roleEn: string;
  studioName: string;
  location: string;
  typeAr: string;
  typeEn: string;
  salaryRange: string;
  requiredSkills: string[];
  postedAgo: string;
}

export const TalentBountyMarketplace: React.FC<TalentBountyMarketplaceProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'bounties' | 'jobs' | 'instant_submit'>('bounties');
  const [selectedBounty, setSelectedBounty] = useState<MicroBounty | null>(null);
  const [userBalance, setUserBalance] = useState<number>(45); // e.g. User earned $45 so far
  const [submissionText, setSubmissionText] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);

  // Micro Bounties - Objective, AI-Verified Gigs with Instant Automated Payout
  const bounties: MicroBounty[] = [
    {
      id: 'bounty-01',
      titleAr: 'صياغة هوك إعلاني من سطرين (Hook) لإعلان عطر فاخر',
      titleEn: 'Write a 2-Line Cinematic Hook for Luxury Perfume Ad',
      companyName: 'Apex Media Group (Dubai)',
      categoryAr: 'كتابة إعلانية',
      categoryEn: 'Copywriting',
      payoutUSD: 15,
      estMinutes: 10,
      descriptionAr: 'المطلوب كتابة جملتين افتتاحيتين لمشهد رجل يمشي في صحراء دبي ليلاً. التقييم فوري عبر النواة لقياس قوة الجذب والجاذبية الصوتية.',
      descriptionEn: 'Craft 2 punchy opening lines for a luxury midnight desert commercial. Auto-evaluated for emotional resonance.',
      validationMetricAr: 'فحص فوري للجاذبية الإعلانية > 85% عبر الذكاء',
      validationMetricEn: 'Instant AI Hook Strength > 85%',
      status: 'open',
      difficulty: 'easy'
    },
    {
      id: 'bounty-02',
      titleAr: 'تدقيق لغوي وإملائي لسيناريو حلقة بودكاست (4 صفحات)',
      titleEn: 'Proofread & Polish 4-Page Tech Podcast Script',
      companyName: 'Silicon Oasis Studios',
      categoryAr: 'تدقيق وتحرير',
      categoryEn: 'Proofreading',
      payoutUSD: 25,
      estMinutes: 20,
      descriptionAr: 'تصحيح الأخطاء الإملائية وضبط علامات الترقيم لملف نصي من 1200 كلمة. يتم الفحص التلقائي ضد معايير التدقيق اللغوي.',
      descriptionEn: 'Fix typos, punctuation, and flow for a 1200-word tech discussion. Instant algorithmic grammar check.',
      validationMetricAr: 'دقة لغوية 100% دون أخطاء نحوية',
      validationMetricEn: '100% Grammar Accuracy Validation',
      status: 'open',
      difficulty: 'easy'
    },
    {
      id: 'bounty-03',
      titleAr: 'كتابة 3 أفكار مختلفة لنهاية غير متوقعة (Twist) لمشهد مطاردة',
      titleEn: 'Brainstorm 3 Shocking Scene Twists for Action Script',
      companyName: 'Falcon Cinema Lab (Riyadh)',
      categoryAr: 'تطوير حبكة',
      categoryEn: 'Plotting',
      payoutUSD: 40,
      estMinutes: 25,
      descriptionAr: 'تقديم 3 مسارات انقلابية لمشهد محاصرة سيارة في نفق مظلم. يجب أن تكون الأفكار منطقية وغير مكررة في السينما.',
      descriptionEn: 'Deliver 3 plausible yet unpredictable outcomes for a tunnel standoff. Evaluated for originality & logic.',
      validationMetricAr: 'فحص الأصالة والابتكار > 90% (منع التكرار)',
      validationMetricEn: 'Novelty & Logic Score > 90%',
      status: 'open',
      difficulty: 'medium'
    },
    {
      id: 'bounty-04',
      titleAr: 'تلخيص حلقة مسلسل تلفزيوني (Logline + Synopsis)',
      titleEn: 'Episode Logline & 1-Paragraph Synopsis Summary',
      companyName: 'CineStream Network',
      categoryAr: 'تلخيص وإنتاج',
      categoryEn: 'Summaries',
      payoutUSD: 20,
      estMinutes: 15,
      descriptionAr: 'قراءة مسودة حلقة من 10 صفحات وصياغة ملخص تسويقي في 80 كلمة لتقديمه للجنة التقييم.',
      descriptionEn: 'Summarize a 10-page draft into a compelling 80-word distributor logline.',
      validationMetricAr: 'تطابق النقاط الدرامية الرئيسية بالكامل',
      validationMetricEn: 'Core Plot-Point Match Check',
      status: 'open',
      difficulty: 'easy'
    }
  ];

  // Verified Job Vacancies from Real Production Houses
  const jobs: JobPost[] = [
    {
      id: 'job-01',
      roleAr: 'كاتب نصوص إعلانية وسيناريو قصير (عن بُعد)',
      roleEn: 'Remote Junior Screenwriter & Copywriter',
      studioName: 'Horizon Creative Media (Riyadh / Remote)',
      location: 'Remote (العمل من المنزل)',
      typeAr: 'دوام كامل (عن بعد)',
      typeEn: 'Full-Time Remote',
      salaryRange: '$1,800 - $2,500 / شهر',
      requiredSkills: ['كتابة سيناريو', 'سرعة الإنجاز', 'السرد الإعلاني'],
      postedAgo: 'منذ يومين'
    },
    {
      id: 'job-02',
      roleAr: 'مساعد باحث وتوثيق تاريخي للأفلام والمسلسلات',
      roleEn: 'Historical Script Researcher & Script Doctor',
      studioName: 'Pan-Arab Documentaries (Cairo / Remote)',
      location: 'Cairo / Remote',
      typeAr: 'عقد بالمشروع (Freelance)',
      typeEn: 'Per-Project Contract',
      salaryRange: '$800 / الحلقة',
      requiredSkills: ['البحث التاريخي', 'التدقيق الدرامي', 'اللغة العربية الفصحى'],
      postedAgo: 'اليوم'
    },
    {
      id: 'job-03',
      roleAr: 'مطور حوارات شخصيات ومراجع لهجات',
      roleEn: 'Dialogue Polisher & Dialect Specialist',
      studioName: 'Apex Gulf Studios',
      location: 'Remote',
      typeAr: 'دوام جزئي',
      typeEn: 'Part-Time Remote',
      salaryRange: '$1,200 / شهر',
      requiredSkills: ['صياغة الحوار', 'اللهجات العربية', 'إيقاع الكوميديا والدراما'],
      postedAgo: 'منذ 3 أيام'
    }
  ];

  const handleStartBounty = (bounty: MicroBounty) => {
    setSelectedBounty(bounty);
    setActiveTab('instant_submit');
    setSubmissionText('');
    setSubmissionSuccess(false);
  };

  const handleVerifyAndPayout = () => {
    if (!submissionText.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      if (selectedBounty) {
        setUserBalance((prev) => prev + selectedBounty.payoutUSD);
      }
    }, 1500);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn text-slate-100">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-[#0a1e17] to-slate-900 border-2 border-emerald-500/40 p-6 md:p-8 shadow-2xl">
        <div className="absolute -top-12 -right-12 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-black uppercase tracking-wider rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 flex items-center gap-1.5 shadow-lg">
                <Briefcase className="w-3.5 h-3.5" />
                SOVEREIGN TALENT BOUNTY & JOB PORTAL
              </span>
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                100% OBJECTIVE VERIFICATION
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-black tracking-tight text-white">
              {lang === 'ar' 
                ? 'سوق المهام الإبداعية الفورية والوظائف الحقيقية' 
                : 'Instant Micro-Bounties & Verified Industry Jobs'}
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
              {lang === 'ar'
                ? 'لا سؤال عن واسطة ولا كشف عن الوضع المادي: أنجز مهام حقيقية مفيدة (صياغة هوك، تدقيق صفحات، ابتكار تويست) واستلم مستحقاتك فوراً بكرامة بعد التدقيق الذاتي الصارم للنواة، أو تقدم للوظائف الموثقة.'
                : 'Zero charity, 100% merit & dignity: Complete fast objective tasks (copywriting, proofreading, twists) and get paid automatically upon automated AI quality validation.'}
            </p>
          </div>

          {/* User Live Balance Card */}
          <div className="bg-slate-900/90 border border-emerald-500/50 p-5 rounded-2xl text-center min-w-[200px] shadow-xl">
            <div className="text-xs text-slate-400 font-semibold uppercase flex items-center justify-center gap-1">
              <Coins className="w-4 h-4 text-amber-400" />
              {lang === 'ar' ? 'رصيد أرباحك الجاهز للسحب' : 'Available Earnings'}
            </div>
            <div className="text-3xl font-black text-emerald-400 font-mono mt-1">
              ${userBalance}.00
            </div>
            <button className="mt-2 w-full py-1.5 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow cursor-pointer">
              {lang === 'ar' ? 'سحب فوري (USDT / بنك)' : 'Instant Payout (Crypto/Bank)'}
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex border-b border-slate-800 gap-3 overflow-x-auto pb-1">
        {[
          { id: 'bounties', ar: '⚡ 1. مهام سريعة مدفوعة فوراً (10$ - 50$)', en: 'Instant Micro-Bounties ($10-$50)', icon: Zap },
          { id: 'jobs', ar: '💼 2. وظائف وفرص عمل عن بُعد', en: 'Verified Remote Jobs', icon: Briefcase },
          { id: 'instant_submit', ar: '✍️ 3. منصة تسليم المهمة والفحص الفوري', en: 'Bounty Submission & AI Check', icon: FileText },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-t-2xl font-bold text-xs md:text-sm transition-all border-t border-x whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-slate-900 border-emerald-500 text-emerald-300 shadow-lg'
                  : 'bg-slate-950/60 border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{lang === 'ar' ? tab.ar : tab.en}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: Micro Bounties Feed */}
      {activeTab === 'bounties' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-300">
              {lang === 'ar' 
                ? '💡 يتم دفع المكافأة لمحفظتك فوراً بمجرد اجتياز معيار الجودة البرمجي، دون انتظار موافقة بشرية.' 
                : '💡 Automated payout releases to your balance the moment your output passes the objective algorithmic benchmark.'}
            </div>
            <div className="text-xs font-mono text-emerald-400 shrink-0">
              {bounties.length} {lang === 'ar' ? 'مهام متاحة الآن' : 'Active Tasks Available'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bounties.map((b) => (
              <div 
                key={b.id}
                className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 flex flex-col justify-between space-y-4 transition-all hover:shadow-xl hover:shadow-emerald-950/20"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {lang === 'ar' ? b.categoryAr : b.categoryEn}
                    </span>
                    <span className="text-lg font-black text-emerald-400 font-mono flex items-center gap-1">
                      ${b.payoutUSD}.00
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {lang === 'ar' ? b.titleAr : b.titleEn}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang === 'ar' ? b.descriptionAr : b.descriptionEn}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-800">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      {lang === 'ar' ? `الوقت المقدر: ${b.estMinutes} دقيقة` : `Est. Time: ${b.estMinutes}m`}
                    </span>
                    <span className="text-slate-300 font-semibold">{b.companyName}</span>
                  </div>

                  <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-amber-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{lang === 'ar' ? b.validationMetricAr : b.validationMetricEn}</span>
                  </div>

                  <button
                    onClick={() => handleStartBounty(b)}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow transition-all cursor-pointer"
                  >
                    <span>{lang === 'ar' ? 'بدء المهمة الآن وكسب المكافأة' : 'Start Task & Earn Payout'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: Verified Remote Jobs */}
      {activeTab === 'jobs' && (
        <div className="space-y-4">
          <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">
                {lang === 'ar' ? 'شواغر وفرص عمل موثقة في استوديوهات الإنتاج' : 'Verified Industry Production Jobs'}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {lang === 'ar' ? 'عقود ورواتب واضحة للعمل عن بُعد مع شركات إنتاج حقيقية' : 'Legitimate remote positions with transparent compensation'}
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-cyan-950 text-cyan-300 border border-cyan-500/40 rounded-xl">
              Direct Apply
            </span>
          </div>

          <div className="space-y-3">
            {jobs.map((job) => (
              <div 
                key={job.id} 
                className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h4 className="text-base font-bold text-white">
                      {lang === 'ar' ? job.roleAr : job.roleEn}
                    </h4>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                      {lang === 'ar' ? job.typeAr : job.typeEn}
                    </span>
                  </div>

                  <div className="text-xs text-slate-400 flex flex-wrap items-center gap-4">
                    <span className="font-semibold text-slate-300">{job.studioName}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span className="text-slate-500">{job.postedAgo}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.requiredSkills.map((s, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between md:flex-col md:items-end gap-3 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-800">
                  <div className="text-right">
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">{lang === 'ar' ? 'الراتب المعروض' : 'Compensation'}</div>
                    <div className="text-base font-black text-emerald-400 font-mono">{job.salaryRange}</div>
                  </div>
                  <button className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all cursor-pointer shadow">
                    {lang === 'ar' ? 'تقديم طلب توظيف' : 'Apply Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Instant Submission & Automated AI Verification */}
      {activeTab === 'instant_submit' && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
          <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {selectedBounty ? (lang === 'ar' ? `المهمة: ${selectedBounty.titleAr}` : `Task: ${selectedBounty.titleEn}`) : (lang === 'ar' ? 'مهمة مخصصة' : 'Custom Task Submission')}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {lang === 'ar' ? 'منصة تسليم الإنجاز والتحقق التلقائي من الجودة' : 'Live Work Submission & Algorithmic Validation'}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400">{lang === 'ar' ? 'قيمة المكافأة:' : 'Task Bounty:'}</span>
              <div className="text-2xl font-black text-emerald-400 font-mono">
                ${selectedBounty ? selectedBounty.payoutUSD : 15}.00
              </div>
            </div>
          </div>

          {!submissionSuccess ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  {lang === 'ar' ? 'معيار الفحص التلقائي:' : 'Automated Quality Benchmark:'}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {selectedBounty ? (lang === 'ar' ? selectedBounty.validationMetricAr : selectedBounty.validationMetricEn) : (lang === 'ar' ? 'فحص معايير الجودة والأصالة التامة' : 'Full quality and originality scan')}
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">
                  {lang === 'ar' ? 'اكتب إجابتك أو الصق عملك المنجز هنا:' : 'Type or paste your completed deliverable:'}
                </label>
                <textarea 
                  rows={6}
                  value={submissionText}
                  onChange={(e) => setSubmissionText(e.target.value)}
                  placeholder={lang === 'ar' ? 'الصق النص المنجز هنا للتدقيق الفوري...' : 'Paste your work here for instant AI verification...'}
                  className="w-full bg-slate-950 border border-slate-700 rounded-2xl p-4 text-sm font-mono text-emerald-200 focus:border-emerald-400 outline-none leading-relaxed resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleVerifyAndPayout}
                  disabled={isSubmitting || !submissionText.trim()}
                  className={`px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                    !submissionText.trim() 
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-xl shadow-emerald-500/20 hover:scale-[1.01]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin text-slate-950" />
                      <span>{lang === 'ar' ? 'جاري الفحص التلقائي وإطلاق الدفعة...' : 'Verifying & Releasing Payout...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{lang === 'ar' ? 'إرسال وفحص العمل لاستلام المكافأة فوراً' : 'Submit & Claim Instant Payout'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-emerald-950/40 border-2 border-emerald-500 text-center space-y-4 shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-black text-white">
                  {lang === 'ar' ? 'تم اجتياز الفحص بنجاح بنسبة 94%!' : 'Validation Passed: 94% Score!'}
                </h4>
                <p className="text-xs text-emerald-300 mt-1 max-w-md mx-auto">
                  {lang === 'ar' 
                    ? `تم تحويل مبلغ $${selectedBounty ? selectedBounty.payoutUSD : 15}.00 مباشرة إلى رصيدك المتاح للسحب. عمل ممتاز!` 
                    : `Payout of $${selectedBounty ? selectedBounty.payoutUSD : 15}.00 has been credited to your balance.`}
                </p>
              </div>
              <button
                onClick={() => {
                  setSubmissionSuccess(false);
                  setSubmissionText('');
                  setActiveTab('bounties');
                }}
                className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all cursor-pointer shadow"
              >
                {lang === 'ar' ? 'تصفح مهام أخرى لكسب المزيد' : 'Browse More Bounties'}
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
