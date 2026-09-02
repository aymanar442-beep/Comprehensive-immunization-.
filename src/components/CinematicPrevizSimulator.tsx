import React, { useState, useRef, useEffect, useCallback } from 'react';
import { AppLanguage } from '../types';
import { 
  Film, Video, Play, Pause, RotateCcw, Clapperboard, 
  Download, Volume2, VolumeX, ShieldCheck,
  Check, Camera, Layers, CheckCircle2, ChevronRight, ChevronLeft,
  DollarSign, Clock, Users, ArrowRight, Sparkles, RefreshCw,
  FileText, Award, Zap, Building2, Flame, AlertTriangle, Send, Copy,
  Scale, BookOpen, Lock, Landmark, UserPlus, UploadCloud, TrendingUp,
  Briefcase, Compass, Search, Wand2, Star, Eye, Maximize, Minimize
} from 'lucide-react';

// Import All 4K Cinematic Stills
import hollywoodLossImg from '../assets/images/previz_hollywood_loss_1788141149153.jpg';
import swcmCodeImg from '../assets/images/previz_swcm_code_1788141203456.jpg';
import leakTurnaroundImg from '../assets/images/previz_leak_turnaround_1788142669087.jpg';
import talentCastingImg from '../assets/images/previz_talent_casting_1788142683518.jpg';
import arbitrationImg from '../assets/images/previz_arbitration_boardroom_1788141590541.jpg';
import boxOfficeShieldImg from '../assets/images/previz_boxoffice_profit_shield_1788141605012.jpg';
import directorShot2 from '../assets/images/previz_director_shot2_1788140656689.jpg';
import endowmentImg from '../assets/images/previz_endowment_future_1788141170073.jpg';
import xprizeImg from '../assets/images/previz_xprize_sovereign_1788141181669.jpg';
import damascusPhoenixImg from '../assets/images/damascus_phoenix_science_1788195008750.jpg';

interface CinematicPrevizSimulatorProps {
  lang: AppLanguage;
}

interface MasterChapter {
  id: number;
  durationLabel: string;
  image: string;
  badgeAr: string;
  badgeEn: string;
  themeColor: string;
  titleAr: string;
  titleEn: string;
  narrationAr: string;
  narrationEn: string;
  executiveSummaryAr: string;
  executiveSummaryEn: string;
  legalAndEconomicImpactAr: string;
  legalAndEconomicImpactEn: string;
  lensSpecs: string;
}

export const CinematicPrevizSimulator: React.FC<CinematicPrevizSimulatorProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'presentation' | 'sovereign_engines' | 'committee_dossier'>('presentation');
  const [currentChapterIdx, setCurrentChapterIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speechRate, setSpeechRate] = useState<number>(0.86); // Calm, dignified, authoritative pacing
  const [isVoiceActive, setIsVoiceActive] = useState<boolean>(true);
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [speakingProgress, setSpeakingProgress] = useState<number>(0);
  const [isVideoFullscreen, setIsVideoFullscreen] = useState<boolean>(false);

  // Interactive Sub-Engine States
  const [selectedBudget, setSelectedBudget] = useState<number>(50000);
  const [budgetGenre, setBudgetGenre] = useState<string>('thriller');
  const [leakTitle, setLeakTitle] = useState<string>('مسودة فيلم الأكشن الكبرى');
  const [actorTalentName, setActorTalentName] = useState<string>('');
  const [actorRoleType, setActorRoleType] = useState<string>('دوران رئيسي - تراجيدي / أكشن');
  const [talentSubmitted, setTalentSubmitted] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const loadedImagesRef = useRef<Record<string, HTMLImageElement>>({});
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Fullscreen toggle handler
  const toggleFullscreen = useCallback(() => {
    const el = videoContainerRef.current;
    if (!el) return;

    if (!document.fullscreenElement) {
      if (el.requestFullscreen) {
        el.requestFullscreen().catch(() => {});
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }, []);

  // Listen to fullscreen changes
  useEffect(() => {
    const handleFsChange = () => {
      setIsVideoFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
    };
  }, []);

  // 9 In-Depth Master Chapters (Complete 4-Minute Strategic Presentation)
  const masterChapters: MasterChapter[] = [
    {
      id: 1,
      durationLabel: '0:00 - 0:25',
      image: hollywoodLossImg,
      badgeAr: 'المشكلة العالمية والنزيف المالي',
      badgeEn: 'Global Hollywood Crisis',
      themeColor: '#ef4444',
      titleAr: 'المحور الأول: نزيف مليارين ومئتي مليون دولار وفوضى تسريب السيناريوهات',
      titleEn: 'Chapter 1: The $2.2B Hollywood Bleed & Intellectual Theft',
      narrationAr: 'السَّيِّدَاتُ وَالسَّادَه.. أَعْضَاءُ لَجْنَةِ التَّحْكِيمِ وَصُنَّاعُ السِّينِمَا المُوَقَّرُونْ... تُوَاجِهُ صِنَاعَةُ الفَنِّ السَّابِعِ اليَوْمَ خَطَرَنْ حَقِيقِيّْ؛ تَخْسَرُ ٱسْتُودْيُوهَاتِ الْإِنْتَاجِ العَالَمِيَّةِ سَنَوِيَّنْ أَكْثَرَ مِنْ مِلْيَارَيْنْ وَمِئَتَيْ مِلْيُونَ دُولَارْ بِسَبَبِ تَسْرِيبِ مِسْوَدَّاتِ السِّينَارْيُوهَاتِ قَبْلَ اكْتِمَالِهَا، وَضَيَاعِ حُقُوقِ ال الْمُؤَلِّفِينْ، وَتَفَاقُمِ النِّزَاعَاتِ الْإِبْدَاعِيَّةِ وَالْمَالِيَّه. لَقَدْ كَانَ عَالَمُ السِّينِمَا يَفْتَقِرُ إِلَى مَنْظُومَتِنْ سِيَادِيَّتِنْ تَحْمِيْ الْإِبْدَاعَ وَتُنْقِذُ الْإِسْتِثْمَارْ.',
      narrationEn: 'Distinguished jury and cinema leaders: Hollywood and global studios lose over $2.2 Billion annually due to stolen screenplay drafts, uncredited creative theft, and explosive budget disputes. Cinema needed a sovereign shield.',
      executiveSummaryAr: 'تحليل أزمة هوليوود وخسارة 2.2 مليار دولار بسبب تسريب المسودات وفوضى الملكية الفكرية.',
      executiveSummaryEn: 'Hollywood script leaks drain $2.2B annually, causing massive production delays and litigation.',
      legalAndEconomicImpactAr: 'الخسائر المباشرة: 2.2 مليار دولار • تعطيل 38% من الأفلام • نزاعات قضائية معقدة.',
      legalAndEconomicImpactEn: 'Direct Losses: $2.2B • 38% production delays • Costly cross-border litigation.',
      lensSpecs: 'Arri Alexa 65 | 35mm Master Prime | Bleach Bypass Tension LUT'
    },
    {
      id: 2,
      durationLabel: '0:25 - 0:50',
      image: swcmCodeImg,
      badgeAr: 'براءة الاختراع والسلاح الجنائي',
      badgeEn: 'Zero-Width Steganography (S-WCM)',
      themeColor: '#06b6d4',
      titleAr: 'المحور الثاني: براءة اختراع البصمة الصفرية (S-WCM) وكشف المسرّب في 0.04 جزء من الثانية',
      titleEn: 'Chapter 2: Patented Invisible Watermarking & 0.04ms Forensic Decryption',
      narrationAr: 'مِنْ هُنَا انْطَلَقَتْ مَنْظُومَةُ شَاهِينْ بِابْتِكَارِ المُهَنْدِسِ أَيْمَن العَرَآيْشِيْ. تُقَدِّمُ الْمَنْظُومَةُ بَرَاءَةَ اخْتِرَاعِ البَصْمَةِ الْمَائِيَّةِ الصِّفْرِيَّه؛ حَيْثُ يَقُومُ بِحَقْنِ شِيفْرَاتِنْ رَقْمِيَّتِنْ غَيْرِ مَرْئِيَّتِنْ بَيْنَ حُرُوفِ الْكَلِمَاتِ فِي مِسْوَّدَتِ السِّينَارْيُو. هَاذِهِ البَصْمَه لَا يَرَاهَا الْبَشَرْ وَلَا تُحْذَفُ بِالنَّسْخِ أَوِ التَّعْدِيلْ، وَيَسْتَخْرِجُهَا مُحَرِّكُ التَّحْلِيلِ الْجِنَائِيِّ فِي صِفْرْ فَاصِلَه صِفْرْ أَرْبَعَه جُزْئِنْ مِنَ الثَّانِيَه لِيَكْشِفَ بِالدَّلِيلِ الْقَاطِعِ إِسْمَ الْمُسَرِّبَ وَتَوْقِيتَ التَّسْرِيبْ.',
      narrationEn: 'Engineered by Eng. Ayman Al-Araishi, SHAHEEN embeds invisible zero-width cryptographic watermarks between script letters, extracted in 0.04ms to provide irrefutable, court-admissible forensic proof.',
      executiveSummaryAr: 'تشفير غير مرئي بين الكلمات يولد وثيقة جنائية معتمدة أمام القضاء الدولي.',
      executiveSummaryEn: 'Invisible zero-width steganography generating court-admissible legal dossiers.',
      legalAndEconomicImpactAr: 'سرعة الكشف: 0.04 جزء من الثانية • مناعة مطلقة ضد الحذف والنسخ • دليل جنائي قطعي.',
      legalAndEconomicImpactEn: 'Decryption: 0.04ms • Immune to OCR & copy-paste • Legally binding evidence.',
      lensSpecs: 'Macro Probe 24mm | 120 FPS High-Speed | Cyan Neon Hologram UI'
    },
    {
      id: 3,
      durationLabel: '0:50 - 1:15',
      image: leakTurnaroundImg,
      badgeAr: 'سلاح إعادة الحبكة وتحويل الخسائر لأرباح',
      badgeEn: 'Plot-Twist Leak Recovery Engine',
      themeColor: '#10b981',
      titleAr: 'المحور الثالث: تحويل التسريب إلى أرباح وإعادة حبك السيناريو كخطة تمويهية عبقرية',
      titleEn: 'Chapter 3: Turning Script Leaks into Box Office Profits & Plot Twists',
      narrationAr: 'وَحَتَّى لِمَنْ تَعَرَّضُوا بِالفِعْلِ لِلتَّسْرِيبِ وَخَسِرُوا أَمْوَالَهُمْ، تَمْلِكُ شَاهِينْ مِيزَتَنْ إِسْتِثْنَائِيَّه: بِإِعَادَتِ هَنْدَسَةِ وَحَبْكِ السِّينَارْيُو بِذَكَائِنْ فَائِقْ، بِحَيْثُ تُصْبِحُ الأَحْدَاثُ المُسَرَّبَةُ مُجَرَّدَ فَخِّنْ دْرَامِيِّنْ وَتَمْوِيهِنْ مَقْصُودِنْ أَمَامَ الجُمْهُورْ، بَيْنَمَا تَنْفَجِرُ الأَحْدَاثُ الحَقِيقِيَّةُ بِحَبْكَتِنْ صَادِمَتِنْ لَمْ يَتَوَقَّعْهَا أَحَدْ! هَذَا يُحَوِّلُ صَدْمَةَ التَّسْرِيبِ إِلَى أَكْبَرِ حَمْلَةِ تَشْوِيقِنْ مَجَّانِيَّه، وَيَقْلِبُ الْخَسَائِرَ السَّابِقَةَ إِلَى أَرْبَاحِنْ تَارِيخِيَّتِنْ فِي شُبَّاكِ التَّذَاكِرْ!',
      narrationEn: 'For studios already damaged by leaks, SHAHEEN features a game-changing Plot Twist Re-Weaver: Restructuring the story so the leaked draft becomes a deliberate in-universe decoy, turning leak panic into viral box office hype and explosive profits.',
      executiveSummaryAr: 'إعادة صياغة المسودة المسربة لتصبح تمويهاً درامياً ذكياً يضاعف ترقب وتذاكر الفيلم.',
      executiveSummaryEn: 'Re-engineering leaked scripts into intentional decoys, transforming leaks into record marketing ROI.',
      legalAndEconomicImpactAr: 'استعادة الأرباح: +240% • تحويل الهدر إلى تسويق مجاني • الحفاظ على سرية النهاية الحقيقية.',
      legalAndEconomicImpactEn: 'Revenue Recovery: +240% • Organic viral hype • Preserving true climax secrecy.',
      lensSpecs: 'Sony Venice 4K | 50mm Anamorphic | High Dynamic Plot-Twist Lighting'
    },
    {
      id: 4,
      durationLabel: '1:15 - 1:40',
      image: boxOfficeShieldImg,
      badgeAr: 'بوابة الكتّاب وسوق السيناريوهات المجاني',
      badgeEn: 'Free Sovereign Writers Portal',
      themeColor: '#f59e0b',
      titleAr: 'المحور الرابع: بوابة مجانية لكل كاتب وسوق تعاقد فوري ومباشر مع كبار المنتجين',
      titleEn: 'Chapter 4: Free Protected Writer Gateway & Direct Studio Marketplace',
      narrationAr: 'تَفْتَحُ شَاهِينْ أَبْوَابَهَا مَجَّانَنْ بِالكِامِلِ لِكُلِّ كَاتِبِ سِينَارْيُو مَهْمَا كَانَ مُسْتَوَاه، وَتَمْنَحُهُ بَوَّابَتَنْ آمِنَتَنْ لِعَرْضِ أَعْمَالِهِ الْمَحْمِيَّةِ سِيَادِيَّنْ أَمَامَ كِبَارَ الْمُنْتِجِينَ فِي العَالَمْ. هَذَا يُمَكِّنُ المُنْتِجِينَ مِنَ الْعُثُورِ عَلَى النُّصُوصِ الْمِثَالِيَّةِ وَتَوْقِيعِ عُقُودِنْ ذَكِيَّتِنْ فَوْرِيَّتِنْ عَبْرَ الْمَنْظُومَه، مِمَّا يَقْضِي عَلَى البِيرُوقْرَاطِيَّه، وَيَحْمِي الكَاتِبَ الصَّاعِدَ مِنْ أَيِّ اسْتِغْلَالِنْ أَوْ سَرِقَتِنْ لِأَفْكَارِه.',
      narrationEn: 'SHAHEEN provides a 100% free protected portal for writers worldwide to present verified scripts directly to global producers, enabling instant smart contracts and eliminating barriers between talent and capital.',
      executiveSummaryAr: 'منصة مجانية تجمع الكتّاب بالمنتجين مع حماية تامة للعقود والملكية الفكرية.',
      executiveSummaryEn: 'Zero-fee writer portal connecting emerging creators with verified global producers securely.',
      legalAndEconomicImpactAr: 'تكلفة الكاتب: 0$ مجاناً • سرعة التعاقد: من 6 أشهر إلى 48 ساعة • حماية فكرية 100%.',
      legalAndEconomicImpactEn: 'Writer Cost: $0 Free • Deal Time: Reduced from 6 months to 48 hours • 100% IP security.',
      lensSpecs: 'Leica Summilux 35mm | Warm Golden Spotlight on Script Vault'
    },
    {
      id: 5,
      durationLabel: '1:40 - 2:05',
      image: directorShot2,
      badgeAr: 'تكييف السيناريو مع أي ميزانية متوفرة',
      badgeEn: 'Budget-to-Script Engine & Precision Costing',
      themeColor: '#8b5cf6',
      titleAr: 'المحور الخامس: حساب التكلفة بدقة وكتابة سيناريوهات بحجم المبلغ المتوفر لأي منتج',
      titleEn: 'Chapter 5: Precision Budget Costing & Tailored Screenplays for Any Budget',
      narrationAr: 'كَمَا تُوَفِّرُ الْمَنْظُومَةُ لِلْمُنْتِجِينَ مُحَرِّكَنْ فَائِقَ الدِّقَّةِ لِحِسَابِ التَّكَالِيفِ بِالدُّولَارْ، مَعَ قُدْرَتِنْ فَرِيدَتِنْ عَلَى كِتَابَةِ وَتَكْيِيفِ سِينَارْيُوهَاتِنْ إِحْتِرَافِيَّتِنْ مُفَصَّلَتِنْ تَمَامَنْ عَلَى حَجْمِ الْمِيزَانِيَّةِ الْمُتَوَفِّرَةِ لَدَى المُنْتِجِ مَهْمَا كَانَتْ قِيمَتُهَا، سَوَائَنْ كَانَتْ مِيزَانِيَّتَنْ مُسْتَقِلَّتَنْ صَغِيرَه، أَوْ إِنْتَاجَنْ ضَخْمَنْ، وَبِأَعْلَى جَوْدَتِنْ إِخْرَاجِيَّتَنْ لِتَفْتَحَ فُرْصَةَ الدُّخُولِ إِلَى عَالَمِ السِّينِمَا أَمَامَ الْجَمِيعِ دُونَ عَوَائِقَ مَالِيَّه.',
      narrationEn: 'SHAHEEN delivers precise production cost calculations and dynamically crafts scripts tailored specifically to whatever budget is available—from low-budget indie projects to mega-blockbusters—democratizing cinema access.',
      executiveSummaryAr: 'توليد سيناريوهات عالية المستوى محسوبة التكاليف بدقة لتمكين أي ميزانية من التصوير.',
      executiveSummaryEn: 'Precision budget breakdown and dynamically generated scripts matched to exact capital availability.',
      legalAndEconomicImpactAr: 'منع تجاوز الميزانيات: بنسبة 100% • ملاءمة الإنتاج لكل الفئات • توفير 45% من الهدر.',
      legalAndEconomicImpactEn: 'Budget Overrun Risk: 0% • Universal cinema accessibility • 45% financial efficiency.',
      lensSpecs: 'Cooke Anamorphic /i 40mm | Holographic Financial Analytics Grid'
    },
    {
      id: 6,
      durationLabel: '2:05 - 2:30',
      image: talentCastingImg,
      badgeAr: 'منصة اكتشاف مواهب التمثيل العالمية',
      badgeEn: 'Global Talent & Acting Audition Hub',
      themeColor: '#ec4899',
      titleAr: 'المحور السادس: فرصة للمواهب التمثيلية لرفع مقاطعهم أمام كبار صناع السينما',
      titleEn: 'Chapter 6: Global Acting Talent Hub & Direct Casting Contracts',
      narrationAr: 'وَلِأَنَّ السِّينِمَا تَقُومُ عَلَى الوُجُوهِ وَالمَشَاعِرْ، تُتِيحُ شَاهِينْ لِكُلِّ مَوْهِبَتِنْ تَمْثِيلِيَّتِنْ حَوْلَ العَالَمِ رَفْعَ مَقَاطِعَ مِنْ آَدَائِهِمْ وَإِبْدَاعَاتِهِمْ لِيَرَاهَا كِبَارُ المُخْرِجِينَ وَصُنَّاعَ السِّينِمَا وَوَكَالَاتُ الْكَاسْتِينْغْ الْعَالَمِيَّةِ مُبَاشَرَه، مِمَّا يَخْلُقُ فُرَصَ تَعَاقُدِنْ حَقِيقِيَّتِنْ وَاكْتِشَافَنْ عَادِلَنْ لِلنُّجُومِ الجُدُدْ، دُونَ الْحَاجَةِ لِوَسَاطَتِنْ أَوْ مَحْسُوبِيَّاتْ.',
      narrationEn: 'SHAHEEN launches an open audition and talent showcase portal, allowing aspiring actors worldwide to upload video reels directly to verified casting directors and Hollywood producers for immediate contract opportunities.',
      executiveSummaryAr: 'منصة مفتوحة للمواهب والوجوه الجديدة للوصول المباشر إلى كبار المخرجين والمنتجين.',
      executiveSummaryEn: 'Open digital casting stage connecting undiscovered actors directly with leading studios.',
      legalAndEconomicImpactAr: 'اكتشاف المواهب: عالمي ومباشر • عقود أداء رقمية موثقة • عدالة تكافؤ الفرص.',
      legalAndEconomicImpactEn: 'Talent Discovery: Global & Direct • Verified smart casting agreements • Merit-based inclusion.',
      lensSpecs: 'Arri Master Prime 50mm | Warm Studio Key Light on Rising Actor'
    },
    {
      id: 7,
      durationLabel: '2:30 - 2:55',
      image: arbitrationImg,
      badgeAr: 'محاكي الإنتاج وفض النزاعات',
      badgeEn: '4K Pre-Viz & Dispute Arbitration',
      themeColor: '#f59e0b',
      titleAr: 'المحور السابع: محاكي الإنتاج المسبق (4K Pre-Viz) وفض النزاع بين المخرج والكاتب والمنتج',
      titleEn: 'Chapter 7: 4K Pre-Viz & Multi-Perspective Dispute Resolution',
      narrationAr: 'المَنْظُومَةُ تَحْتَوِي عَلَى مُحَاكِي المَشَاهِدِ الْمَسْبُوقَةِ بِدِقَّةِ فُورْ كِيهْ؛ فَعِنْدَمَا يَخْتَلِفُ الْمُخْرِجُ وَالكِاتِبُ وَالمُنْتِجُ، يَعْرِضُ النِّظَامُ الْمَشْهَدَ بِرُؤْيَةِ الْمُخْرِجِ بِالإِبْهَارِ البَصَرِيّْ، وَبِرُؤْيَةِ الكَاتِبِ بِالعُمْقِ الدِّرَامِيّْ، وَبِرُؤْيَةِ الْمُنْتِجِ بِأَقَلِّ تَكْلُفَتِنْ وَسُرْعَةِ تَصْوِيرْ، لِيَتِمَّ التَّوَافُقَ فِي دَقَائِقْ، وَتَوْفِيرُ أَكْثَرَ مِنْ سِتِّينَ بِالمِئَةِ مِنْ تَكَالِيفِ إِعَادَةِ التَّصْوِيرْ.',
      narrationEn: 'SHAHEEN simulates scenes in 4K from the Director, Writer, and Producer viewpoints simultaneously, settling creative standoffs in minutes and saving up to 60% in reshoot costs.',
      executiveSummaryAr: 'محاكاة بصرية تفاعلية وحساب مالي يوفق بين طموح الإخراج وعاطفة النص وميزانية الإنتاج.',
      executiveSummaryEn: 'Simultaneous visual and financial arbitration resolving studio clashes seamlessly.',
      legalAndEconomicImpactAr: 'توفير التكاليف: 60% من الهدر • اختصار أيام التصوير • توافق عقدي فوري.',
      legalAndEconomicImpactEn: 'Cost Savings: 60% reshoot waste eliminated • Accelerated schedules • Fast consensus.',
      lensSpecs: 'Cooke Anamorphic /i 40mm | 4K Holographic Creative Table'
    },
    {
      id: 8,
      durationLabel: '2:55 - 3:20',
      image: endowmentImg,
      badgeAr: 'الوقف التنموي 10% لشباب العلم',
      badgeEn: '10% Permanent Youth Knowledge Endowment',
      themeColor: '#06b6d4',
      titleAr: 'المحور الثامن: الوقف التنموي المستدام 10% لتدريب وتأهيل شباب العلم والمطورين الموهوبين',
      titleEn: 'Chapter 8: The 10% Permanent Endowment for Young Scholars & AI Developers',
      narrationAr: 'وَرِسَالَتَنَا الْإِنْسَانِيَّه لَا تَتَوَقَّفْ؛ حَيْثُ تَلْتَزِمُ شَاهِينْ بِاقْتِطَاعِ عَشْرَتِنْ بِالمِئَةِ مِنْ كَافَّةِ أَرْبَاحِهَا وَعَوَائِدِهَا كَوَقْفِنْ تَنْمَوِيِّنْ دَائِمِنْ لِتَدْرِيبِ وَتَأْهِيلِ طُلَّابِ الْعِلْمِ وَالشَّبَابِ المَوْهُوبِين بِدُونِ النَّظَرَ إلى شَهَادَاتِهِمْ وَإِنَّمَا إِلى ما يَتَمَيَّزونَ بِه، وَتَزْوِيدِ كُلِّ مُطَوَّرِنْ بِأَحْدَثِ مَعَامِلِ الذَّكَاءِ الْإِصْطِنَاعِيّْ وَخَلْقِ الْفُرَصِ لِتأْهِيْلِهِمْ مِنْ أجْلِ أَنْ نَصْنَعَ جِيْلَنْ يَهْتَمُّ بِبِنَاءِ مُسْتَقْبَلِنْ وَاعِدْ.',
      narrationEn: 'SHAHEEN permanently pledges 10% of all profits as a sovereign endowment to train, equip, and empower young developers and scholars based on merit, unlocking access to advanced AI labs to build a thriving future.',
      executiveSummaryAr: 'تخصيص 10% ثابتة من عوائد المنظومة كوقف تعليمي وتنموي لتمكين شباب العلم والمطورين.',
      executiveSummaryEn: '10% perpetual endowment financing AI labs and empowering emerging tech creators.',
      legalAndEconomicImpactAr: 'أثر إنساني وتنموي مستدام: تمكين المطورين والموهوبين بدون قيود وبناء معامل ذكاء اصطناعي رائدة.',
      legalAndEconomicImpactEn: 'Lasting Impact: Direct AI lab funding • Merit-based empowerment for global youth.',
      lensSpecs: 'Leica 50mm Summilux T1.4 | Soft Golden Amber Glow'
    },
    {
      id: 9,
      durationLabel: '3:20 - 3:45',
      image: xprizeImg,
      badgeAr: 'خطة الـ 5 سنوات والتتويج السيادي',
      badgeEn: '5-Year Sovereign Roadmap & XPRIZE Legacy',
      themeColor: '#eab308',
      titleAr: 'المحور التاسع: خطة الخمس سنوات ومنافسة العرّاب (المصنف ضمن أفضل المنافسين في 3 جوائز عالمية - Eng. Ayman Al-Araishi)',
      titleEn: 'Chapter 9: 5-Year Global Sovereign Roadmap & Triple Global Award Contender Mastermind',
      narrationAr: 'تَمْلِكُ شَاهِين غَيْرَ هَذِهِ المَزَايَا الكَثِيرَ مِمَّا لَمْ نَذْكُرْهُ بَعْدُ، مَعَ خَارِطَةِ طَرِيقٍ سِيَادِيَّةٍ مُدَّتُهَا خَمْسُ سَنَوَاتٍ قَادِمَةٍ مِنَ التَّطَوُّرَاتِ وَالتَّحْسِينَاتِ العَالَمِيَّةِ. المَنْظُومَةُ ابْتِكَارٌ وَمَشْرُوعٌ نَهْضَوِيٌّ يَقُودُهُ المُهَنْدِسُ أَيْمَنْ ألْعَرَآيْشِيْ المُصَنَّفُ ضِمْنَ قَائِمَةِ أَفْضَلِ الْمُنَافِسِيْنَ لِأَفْضَلِ مُبْتَكِرِنْ فِي ثَلاثِ جَوَائِزَ عَالَمِيَّه... شَاهِينْ مَنَارَتَ الْإِنْسِانِيّه وَالْعُلُومِ الأَخْلاقِيَّه وَحَارِسُ الفَنِّ السَّابِعِ فِي العَالَم.',
      narrationEn: 'SHAHEEN holds countless unannounced breakthroughs backed by an ambitious 5-Year Sovereign Global Roadmap. Architected by Eng. Ayman Al-Araishi, ranked among the top global contenders for Best Innovator across three world awards: SHAHEEN, beacon of humanity, ethical sciences, and sovereign guardian of the Seventh Art.',
      executiveSummaryAr: 'خطة تطوير استراتيجية تمتد لـ 5 سنوات قادمة وتتويج المنظومة كمعيار سيادي معتمد لعام 2026.',
      executiveSummaryEn: '5-Year global expansion roadmap and official crowning presentation by Eng. Ayman Al-Araishi.',
      legalAndEconomicImpactAr: 'الاعتراف الدولي: المرشح الأقوى لجائزة XPRIZE • 6 براءات اختراع • معيار الصناعة المعتمد 2026-2031.',
      legalAndEconomicImpactEn: 'Global Recognition: Top XPRIZE Contender • 6 Patents • Certified 2026-2031 cinema standard.',
      lensSpecs: 'IMAX 70mm Format | Ultra-Wide 18mm Lens | Sovereign Golden Falcon Flare'
    },
    {
      id: 10,
      durationLabel: '3:45 - 4:25',
      image: damascusPhoenixImg,
      badgeAr: 'طائر الفينيق ودمشق عاصمة التاريخ',
      badgeEn: 'The Sovereign Phoenix & Damascus Legacy',
      themeColor: '#00d2ff',
      titleAr: 'المحور العاشر: ميثاق طائر الفينيق - تسخير العلم لنشر السلام وبناء المستقبل معاً من دمشق',
      titleEn: 'Chapter 10: The Sovereign Phoenix & Damascus Legacy - Uniting the World through Ethical Science',
      narrationAr: `«فِي شَاهِينْ...
نَحْنُ لا نَبِيعُ مُنْتَجَاتْ ولا نَخْتَرِعُ تَطْبيقَاتْ عادِيّهْ، وَلا نُنَافِسُ إلّا أَنْفُسَنَا لِتَطْويرِ كُلَّ ما يُحَافِظْ على سَلَامَةِ الْإِنْسَانِ وَالْبِيْئَهْ، نَحْنُ نَسْعَى لِتَسْخِيرِ الْعِلْمِ لِنَشْرِ السّلامِ وَالْأمانْ… 
مِنْ دِمَشْقَ عَاصِمَةِ التَّارِيْخْ، مِنْ رَحِمِ الْمَعَاناةْ، وَمِنْ صَلَابَةِ شَعْبِهَا بِالصُّمُودْ، مِنْ طَائِرِ الْفِيْنِيْقْ، الَّذِيْ إِذَا ظّنُّوْ أَنَّهُ مَاتْ .إِنْبَعَثَ مِنْ رَمَادِهِ مِنْ جَدِيْدْ
رِسَالَتَنَا الْعَمَلَ على تَوْحِيْدِ الْعَالَمِ بِالْعِلْمْ وَحِمَايَةَ كُلَّ مَنْ يَسْكُنُ تَحَتَ السَّمَاءْ، دُونُ التَّفرِقَهْ بَيْنَ أَحَدْ، لا بِالْهَويَّهْ ولا الْإِنْتِمَاءْ ولا الْعِرْقِ وِالدِّيْنْ.
فَكُلُّنَا سَوَاسِيَهْ وَالْإِنْسَانِيَّهْ هِيَ هُوِيَّتَنَا جَمِيْعَنْ.
مِنَ الْعَرَّابْ: ضَعُوْ أَيْدِيْكْمْ مَعَ أَيْدِيْنَا، لِبِنَاءِ الْمُسْتَقْبَلِ مَعَنْ!»`,
      narrationEn: `«In SHAHEEN...
We do not sell products nor invent ordinary apps. We only compete with ourselves to innovate whatever preserves the safety of humanity and the environment. We strive to harness science to spread peace and safety… 
From Damascus, the capital of history, from the womb of suffering, and from the resilience of its people in steadfastness, from the Phoenix which, whenever they think it has died, rises anew from its ashes.
Our mission is working to unite the world through science and protect everyone who dwells under the sky, without discrimination against anyone—neither by identity, nor belonging, nor race, nor religion.
For we are all equals, and humanity is the identity of us all.
From The Godfather: Place your hands in ours, to build the future together!»`,
      executiveSummaryAr: 'الميثاق الإنساني والسيادي الأعلى لشاهين: توحيد الإنسانية بالعلم والأخلاق من قلب دمشق.',
      executiveSummaryEn: 'The supreme humanitarian covenant of SHAHEEN: Uniting humanity through ethical science from Damascus.',
      legalAndEconomicImpactAr: 'الميثاق الأبدي: الإنسانية قبل رأس المال • تسخير الذكاء الاصطناعي لحفظ الحياة • بناء المستقبل معاً.',
      legalAndEconomicImpactEn: 'Eternal Covenant: Humanity above capital • AI dedicated to human preservation • Universal future.',
      lensSpecs: 'Panavision Ultra 70 | 28mm Primetime | Golden Phoenix Damascus Horizon & Lab Matrix'
    }
  ];

  // Preload all 4K Stills
  useEffect(() => {
    masterChapters.forEach((ch) => {
      if (!loadedImagesRef.current[ch.image]) {
        const img = new Image();
        img.src = ch.image;
        img.onload = () => {
          loadedImagesRef.current[ch.image] = img;
        };
        loadedImagesRef.current[ch.image] = img;
      }
    });
  }, []);

  // Professional Speech Synthesizer with full text completion guarantee
  const speakChapter = useCallback((index: number) => {
    if (!isVoiceActive || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const chapter = masterChapters[index];
      const textToSpeak = lang === 'ar' ? chapter.narrationAr : chapter.narrationEn;
      
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = speechRate; // Dignified, calm pacing (0.86x)
      utterance.pitch = 0.98;
      utterance.lang = lang === 'ar' ? 'ar-SA' : 'en-US';

      utterance.onboundary = (e) => {
        if (e.charIndex && textToSpeak.length) {
          const progress = Math.min(Math.round((e.charIndex / textToSpeak.length) * 100), 100);
          setSpeakingProgress(progress);
        }
      };

      utterance.onend = () => {
        setSpeakingProgress(100);
        // Only advance after 100% full speech completion + respectful 1.5s pause
        if (autoAdvance && isPlaying) {
          setTimeout(() => {
            setCurrentChapterIdx((prev) => {
              if (prev < masterChapters.length - 1) {
                return prev + 1;
              } else {
                setIsPlaying(false);
                return prev;
              }
            });
          }, 1500);
        }
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      // Fallback
    }
  }, [isVoiceActive, speechRate, lang, autoAdvance, isPlaying]);

  // Trigger speech on chapter index change or playback toggle
  useEffect(() => {
    if (isPlaying) {
      setSpeakingProgress(0);
      speakChapter(currentChapterIdx);
    } else {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentChapterIdx, isPlaying, speakChapter]);

  // Canvas Real Movie Frame & Anamorphic Letterbox Renderer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    const render = () => {
      frame++;
      const width = canvas.width;
      const height = canvas.height;
      const chapter = masterChapters[currentChapterIdx];
      const img = loadedImagesRef.current[chapter.image];

      // 1. Draw 4K Image with Smooth Cinematic Ken-Burns Pan & Zoom
      if (img && img.complete && img.naturalWidth > 0) {
        ctx.save();
        const zoom = 1 + (isPlaying ? ((frame % 600) * 0.00015) : 0);
        const panX = isPlaying ? Math.sin(frame * 0.01) * 3 : 0;
        const panY = isPlaying ? Math.cos(frame * 0.008) * 2 : 0;

        ctx.translate(width / 2 + panX, height / 2 + panY);
        ctx.scale(zoom, zoom);
        ctx.drawImage(img, -width / 2, -height / 2, width, height);
        ctx.restore();
      } else {
        // High-tech cinematic loading state
        if (!img) {
          const newImg = new Image();
          newImg.src = chapter.image;
          loadedImagesRef.current[chapter.image] = newImg;
        }
        ctx.fillStyle = '#060a12';
        ctx.fillRect(0, 0, width, height);
        
        // Subtle cyber grid
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.12)';
        ctx.lineWidth = 1;
        for (let x = 0; x < width; x += 40) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += 40) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        // Center Loading pulse
        ctx.fillStyle = chapter.themeColor;
        ctx.font = 'bold 14px monospace';
        ctx.textAlign = 'center';
        const pulseAlpha = 0.5 + Math.sin(frame * 0.08) * 0.5;
        ctx.globalAlpha = pulseAlpha;
        ctx.fillText(lang === 'ar' ? `[ جاري تحميل الإطار السينمائي 4K للمحور ${chapter.id}... ]` : `[ LOADING 4K CINEMATIC STILL - ACT ${chapter.id}... ]`, width / 2, height / 2);
        ctx.globalAlpha = 1.0;
        ctx.textAlign = 'left';
      }

      // 2. Cinematic Anamorphic Letterbox (2.39:1 Aspect Bars)
      const barH = 44;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, barH);
      ctx.fillRect(0, height - barH, width, barH);

      // 3. Top Cinema HUD
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(24, 22, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px monospace';
      ctx.fillText(`REC ● 4K 2.39:1 [ACT ${chapter.id}/10]`, 36, 26);

      ctx.fillStyle = chapter.themeColor;
      ctx.fillText(`${chapter.durationLabel} • ${lang === 'ar' ? chapter.badgeAr : chapter.badgeEn}`, width / 2 - 160, 26);

      ctx.fillStyle = '#94a3b8';
      ctx.fillText(`ENG. AYMAN AL-ARAISHI`, width - 170, 26);

      // 4. Bottom Subtitle & Title Ribbon
      ctx.fillStyle = 'rgba(0, 0, 0, 0.90)';
      ctx.fillRect(15, height - 98, width - 30, 50);
      ctx.strokeStyle = chapter.themeColor;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(15, height - 98, width - 30, 50);

      ctx.fillStyle = chapter.themeColor;
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(lang === 'ar' ? chapter.titleAr : chapter.titleEn, 28, height - 78);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px sans-serif';
      const shortText = lang === 'ar' 
        ? chapter.narrationAr.substring(0, 105) + '...'
        : chapter.narrationEn.substring(0, 115) + '...';
      ctx.fillText(shortText, 28, height - 58);

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [currentChapterIdx, isPlaying, lang]);

  // Video Downloader (.webm)
  const handleDownloadMasterVideo = () => {
    setIsRecording(true);
    const canvas = canvasRef.current;
    if (!canvas) {
      setIsRecording(false);
      return;
    }

    try {
      const stream = canvas.captureStream(30);
      const recorder = new MediaRecorder(stream, {
        mimeType: MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
          ? 'video/webm;codecs=vp9'
          : 'video/webm'
      });

      const chunks: Blob[] = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `SHAHEEN_Master_Executive_Cinema_Presentation_Eng_Ayman_AlAraishi.webm`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setIsRecording(false);
        setNotification(lang === 'ar' ? 'تم تنزيل ملف العرض السينمائي الكامل بنجاح في جهازك!' : 'Master Cinema Presentation Video Downloaded!');
        setTimeout(() => setNotification(null), 5000);
      };

      recorder.start();
      setTimeout(() => {
        if (recorder.state !== 'inactive') recorder.stop();
      }, 7000);
    } catch (e) {
      setIsRecording(false);
    }
  };

  // Snapshot PNG
  const handleDownloadSnapshot = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = `SHAHEEN_4K_Act_${currentChapterIdx + 1}_Snapshot.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setNotification(lang === 'ar' ? 'تم حفظ لقطة بدقة 4K فائقة الجودة!' : '4K Chapter Snapshot Saved!');
    setTimeout(() => setNotification(null), 4000);
  };

  // Copy Full Committee Screenplay & Dossier
  const handleCopyFullDossier = () => {
    const fullText = `
================================================================================
🎬 الملف التنفيذي والسيناريو الرسمي لمنظومة شاهين لحماية الفن السابع 🎬
المبتكر والمشرف العام: المهندس أيمن العريشي (The Godfather / XPRIZE Top 100)
معمارية براءات الاختراع: Castle Gate Sovereign Shield Architecture & S-WCM Protocol
المدة الزمنية للعرض الرسمي: 4.5 دقيقة كاملة (10 محاور استراتيجية شاملة)
================================================================================

[المحور 1: نزيف 2.2 مليار دولار وأزمة تسريب السيناريوهات في هوليوود]
تخسر أستوديوهات الإنتاج العالمية سنوياً أكثر من مليارين ومئتي مليون دولار نتيجة تسريب المسودات، وضياع الملكية الفكرية، ونشوب النزاعات بين الكاتب والمخرج والمنتج.

[المحور 2: براءة اختراع البصمة المائية الصفرية (S-WCM)]
حقن شيفرات رقمية غير مرئية بين حروف الكلمات لا يراها البشر ولا تحذف بالنسخ أو التعديل، تُستخرج في 0.04 جزء من الثانية لتقديم دليل جنائي قطعي ملزم أمام المحاكم الدولية.

[المحور 3: تحويل التسريب إلى أرباح وإعادة حبك السيناريو (Plot-Twist Leak Recovery)]
حتى لمن تعرضوا بالفعل للتسريب وخسروا أموالهم، تملك شاهين القدرة على إعادة هندسة السيناريو بحيث يصبح التسريب فخاً وتمويهاً مقصوداً، وتنفجر الأحداث الحقيقية بحبكة صادمة تقلب الخسائر السابقة لأرباح تاريخية.

[المحور 4: بوابة مجانية لكل كاتب وسوق تعاقد فوري ومباشر مع كبار المنتجين]
بوابة آمنة ومجانية 100% لكتّاب السيناريو لعرض أعمالهم المحمية أمام كبار المنتجين في العالم والتعاقد السريع عبر عقود ذكية مشفرة.

[المحور 5: حساب التكلفة بدقة وكتابة سيناريوهات بحجم المبلغ المتوفر لأي منتج]
محرك دقيق لحساب التكاليف بالدولار، مع قدرة فريدة على كتابة وتكييف سيناريوهات احترافية مفصلة تماماً على حجم الميزانية المتوفرة لدى المنتج مهما كانت قيمتها.

[المحور 6: فرصة للمواهب التمثيلية لرفع مقاطعهم أمام كبار صناع السينما]
منصة مفتوحة تتيح للممثلين والمواهب حول العالم رفع مقاطع أدائهم ليراها كبار المخرجين وصناع السينما ووكالات الكاستينغ العالمية مباشرة لخلق فرص تعاقد عادلة.

[المحور 7: محاكي الإنتاج المسبق (4K Pre-Viz) وفض النزاعات الإبداعية والمالية]
محاكاة فورية بدقة 4K لرؤية المخرج (الأكشن والإبهار)، ورؤية الكاتب (العمق الدرامي)، ورؤية المنتج (أقل تكلفة وأسرع تصوير)، مما يحسم النزاعات في دقائق ويوفر 60% من تكاليف إعادة التصوير.

[المحور 8: الوقف التنموي المستدام 10% لتعليم وتدريب شباب السينما العرب]
اقتطاع 10% ثابتة من كافة عوائد المنظومة كوقف تعليمي واجتماعي دائم لتدريب طلاب السينما وصناع المستقبل وتزويدهم بأحدث تقنيات الإنتاج والذكاء الاصطناعي.

[المحور 9: خطة الـ 5 سنوات القادمة (2026-2031) وتتويج العرّاب - وسام XPRIZE Top 100]
تمتلك شاهين غير هذه المزايا الكثير مع خطة مدتها 5 سنوات قادمة من التحسينات السيادية العالمية تحت إشراف المهندس أيمن العريشي لحماية الفن السابع وصناع السينما في العالم.

[المحور 10: ميثاق طائر الفينيق ودمشق عاصمة التاريخ - توحيد الإنسانية بالعلم]
«فِي شَاهِينْ...
نَحْنُ لا نَبِيعُ مُنْتَجَاتْ ولا نَخْتَرِعُ تَطْبيقَاتْ عادِيّهْ، وَلا نُنَافِسُ إلّا أَنْفُسَنَا لِتَطْويرِ كُلَّ ما يُحَافِظْ على سَلَامَةِ الْإِنْسَانِ وَالْبِيْئَهْ، نَحْنُ نَسْعَى لِتَسْخِيرِ الْعِلْمِ لِنَشْرِ السّلامِ وَالْأمانْ… 
مِنْ دِمَشْقَ عَاصِمَةِ التَّارِيْخْ، مِنْ رَحِمِ الْمَعَاناةْ، وَمِنْ صَلَابَةِ شَعْبِهَا بِالصُّمُودْ، مِنْ طَائِرِ الْفِيْنِيْقْ، الَّذِيْ إِذَا ظّنُّوْ أَنَّهُ مَاتْ .إِنْبَعَثَ مِنْ رَمَادِهِ مِنْ جَدِيْدْ
رِسَالَتَنَا الْعَمَلَ على تَوْحِيْدِ الْعَالَمِ بِالْعِلْمْ وَحِمَايَةَ كُلَّ مَنْ يَسْكُنُ تَحَتَ السَّمَاءْ، دُونُ التَّفرِقَهْ بَيْنَ أَحَدْ، لا بِالْهَويَّهْ ولا الْإِنْتِمَاءْ ولا الْعِرْقِ وِالدِّيْنْ.
فَكُلُّنَا سَوَاسِيَهْ وَالْإِنْسَانِيَّهْ هِيَ هُوِيَّتَنَا جَمِيْعَنْ.
مِنَ الْعَرَّابْ: ضَعُوْ أَيْدِيْكْمْ مَعَ أَيْدِيْنَا، لِبِنَاءِ الْمُسْتَقْبَلِ مَعَنْ!»

================================================================================
    `.trim();

    navigator.clipboard.writeText(fullText);
    setNotification(lang === 'ar' ? 'تم نسخ كامل الملف التنفيذي والسيناريو للجنة بنجاح!' : 'Full Committee Dossier Copied to Clipboard!');
    setTimeout(() => setNotification(null), 4000);
  };

  const activeChapter = masterChapters[currentChapterIdx];

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-3 sm:py-6 space-y-4 sm:space-y-6 text-slate-100 animate-fadeIn">
      
      {/* 1. Top Header Bar with 3 Main Tabs */}
      <div className="bg-slate-950 p-4 sm:p-5 rounded-3xl border border-cyan-500/40 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-cyan-500/20 via-amber-500/20 to-purple-500/20 text-cyan-400 rounded-2xl border border-cyan-500/30">
            <Film className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-xl font-black text-white">
                {lang === 'ar' ? 'العرض التنفيذي والسيناريو الرسمي للجان التحكيم وصناع السينما' : 'Executive Cinema Pitch & Official Committee Master Dossier'}
              </h1>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-[10px] font-bold">
                4.5 MIN MASTER
              </span>
            </div>
            <p className="text-xs text-slate-300">
              {lang === 'ar' 
                ? 'شرح هادئ ومفصل: سيادة النصوص، تحويل التسريب لأرباح، بوابة الكتّاب، ممثلو المستقبل، وخطة الـ 5 سنوات، وميثاق الفينيق من دمشق' 
                : 'Complete strategic breakdown: IP sovereignty, leak turnaround, writers portal, casting hub, 5-year roadmap & Phoenix legacy'}
            </p>
          </div>
        </div>

        {/* 3 Main Action Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          <button
            onClick={() => setActiveTab('presentation')}
            className={`flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'presentation'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 font-black'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            <span>{lang === 'ar' ? 'العرض المرئي والصوتي (10 محاور)' : 'Live Presentation (10 Acts)'}</span>
          </button>

          <button
            onClick={() => setActiveTab('sovereign_engines')}
            className={`flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'sovereign_engines'
                ? 'bg-purple-500 text-slate-950 shadow-lg shadow-purple-500/30 font-black'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'ar' ? 'محركات شاهين التفاعلية (5 أسلحة)' : 'Interactive Engines (5 Weapons)'}</span>
          </button>

          <button
            onClick={() => setActiveTab('committee_dossier')}
            className={`flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'committee_dossier'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 font-black'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{lang === 'ar' ? 'الملف الكامل للجنة' : 'Full Committee Dossier'}</span>
          </button>
        </div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="p-3 bg-emerald-950 border border-emerald-500 text-emerald-200 text-xs sm:text-sm font-bold rounded-2xl flex items-center justify-between shadow-xl animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{notification}</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400">OFFICIAL RECORD</span>
        </div>
      )}

      {/* 2. TAB A: Full 10-Chapter Master Presentation */}
      {activeTab === 'presentation' && (
        <div className="space-y-4">
          
          {/* Main 4K Canvas Player Screen Container (Supports Native Fullscreen Mode - YouTube Style) */}
          <div 
            ref={videoContainerRef}
            className={`relative overflow-hidden transition-all bg-black ${
              isVideoFullscreen 
                ? 'fixed inset-0 z-[9999] w-screen h-screen flex flex-col justify-between bg-black p-0 m-0' 
                : 'rounded-3xl border-2 border-cyan-500/60 shadow-2xl shadow-cyan-950/60'
            }`}
          >
            {/* Top Floating Fullscreen & Resolution HUD Bar */}
            <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 z-30 flex items-center gap-2">
              <button
                onClick={toggleFullscreen}
                className="px-3 py-1.5 rounded-xl bg-black/85 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 border border-cyan-500/50 backdrop-blur-md text-xs font-black flex items-center gap-1.5 transition-all shadow-xl cursor-pointer"
                title={lang === 'ar' ? 'ملء الشاشة لتصوير احترافي فائق الدقة' : 'Toggle Cinematic Fullscreen'}
              >
                {isVideoFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                <span>{isVideoFullscreen ? (lang === 'ar' ? 'إنهاء ملء الشاشة' : 'Exit Fullscreen') : (lang === 'ar' ? 'ملء الشاشة ⛶' : 'Fullscreen ⛶')}</span>
              </button>
            </div>

            {/* Video / Canvas Area Centered */}
            <div className={`w-full flex items-center justify-center relative ${isVideoFullscreen ? 'flex-1 h-full max-h-[calc(100vh-80px)]' : ''}`}>
              <canvas
                ref={canvasRef}
                width={960}
                height={540}
                className={`w-full block aspect-video cursor-pointer object-contain ${
                  isVideoFullscreen ? 'h-full max-h-full max-w-full mx-auto' : 'h-auto'
                }`}
                onClick={() => setIsPlaying(!isPlaying)}
              />

              {/* Play Overlay if Paused */}
              {!isPlaying && (
                <div
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center cursor-pointer z-20"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-cyan-400/60 hover:scale-110 transition-all">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-current" />
                  </div>
                  <span className="mt-3 px-4 py-1.5 rounded-full bg-black/90 border border-cyan-400 text-cyan-300 font-bold text-xs">
                    {lang === 'ar' ? '▶ انقر لتشغيل العرض السينمائي والحديث المفصل' : '▶ Click to Play Master Presentation'}
                  </span>
                </div>
              )}
            </div>

            {/* Speaking Progress Bar */}
            <div className="w-full bg-slate-900 h-1.5">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 via-amber-400 to-purple-400 transition-all duration-300"
                style={{ width: `${speakingProgress}%` }}
              />
            </div>

            {/* Dignified Control Bar */}
            <div className="p-3 sm:p-4 bg-slate-950/95 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              
              {/* Playback Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/30 cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{isPlaying ? (lang === 'ar' ? 'إيقاف مؤقت' : 'Pause') : (lang === 'ar' ? 'تشغيل العرض' : 'Play Presentation')}</span>
                </button>

                {/* Prev Chapter */}
                <button
                  onClick={() => {
                    setCurrentChapterIdx((prev) => Math.max(0, prev - 1));
                  }}
                  disabled={currentChapterIdx === 0}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-slate-300 text-xs cursor-pointer"
                  title={lang === 'ar' ? 'المحور السابق' : 'Previous Chapter'}
                >
                  <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                </button>

                {/* Next Chapter */}
                <button
                  onClick={() => {
                    setCurrentChapterIdx((prev) => Math.min(masterChapters.length - 1, prev + 1));
                  }}
                  disabled={currentChapterIdx === masterChapters.length - 1}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-slate-300 text-xs cursor-pointer"
                  title={lang === 'ar' ? 'المحور التالي' : 'Next Chapter'}
                >
                  <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                </button>

                {/* Voice Narration Active Toggle */}
                <button
                  onClick={() => setIsVoiceActive(!isVoiceActive)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
                    isVoiceActive
                      ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                  title={lang === 'ar' ? 'التعليق الصوتي' : 'Voice Narration'}
                >
                  {isVoiceActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  <span className="hidden sm:inline">
                    {isVoiceActive ? (lang === 'ar' ? 'الصوت شغال' : 'Voice On') : (lang === 'ar' ? 'مكتوم' : 'Muted')}
                  </span>
                </button>

                {/* Natural Dignified Pacing Selector */}
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 px-1 font-mono">{lang === 'ar' ? 'نبرة الإلقاء:' : 'Pace:'}</span>
                  {[
                    { label: lang === 'ar' ? 'هادئ ومفصل' : 'Calm 0.86x', val: 0.86 },
                    { label: lang === 'ar' ? 'طبيعي' : 'Natural 1.0x', val: 1.0 }
                  ].map((item) => (
                    <button
                      key={item.val}
                      onClick={() => setSpeechRate(item.val)}
                      className={`px-2 py-1 rounded text-[10px] font-bold cursor-pointer ${
                        speechRate === item.val ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Instant Fullscreen, Download & Snapshot */}
              <div className="flex items-center gap-2">
                {/* Fullscreen Button in bar */}
                <button
                  onClick={toggleFullscreen}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 border border-cyan-500/40 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                  title={lang === 'ar' ? 'ملء الشاشة للتصوير الاحترافي' : 'Toggle Fullscreen'}
                >
                  {isVideoFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                  <span className="hidden sm:inline">{isVideoFullscreen ? (lang === 'ar' ? 'تصغير' : 'Exit') : (lang === 'ar' ? 'ملء الشاشة ⛶' : 'Fullscreen')}</span>
                </button>

                <button
                  onClick={handleDownloadMasterVideo}
                  disabled={isRecording}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-cyan-500/30 cursor-pointer"
                >
                  {isRecording ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin text-slate-950" />
                      <span>{lang === 'ar' ? 'جاري تجهيز الفيديو...' : 'Encoding...'}</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'تحميل العرض (.webm)' : 'Download Video'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleDownloadSnapshot}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 text-xs cursor-pointer"
                  title={lang === 'ar' ? 'حفظ لقطة 4K' : 'Save 4K Frame'}
                >
                  <Camera className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

          {/* 10 Chapter Selection Tabs (Full Structure) */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
            {masterChapters.map((ch, idx) => {
              const isSelected = currentChapterIdx === idx;
              return (
                <button
                  key={ch.id}
                  onClick={() => {
                    setCurrentChapterIdx(idx);
                    setIsPlaying(true);
                  }}
                  className={`p-2 rounded-2xl border transition-all flex flex-col justify-between text-left rtl:text-right cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-400 ring-2 ring-cyan-500/40 shadow-xl'
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 opacity-70'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="font-bold text-cyan-400">{ch.durationLabel}</span>
                    <span className="text-slate-400">#{ch.id}</span>
                  </div>

                  <p className="text-[10px] font-bold text-white line-clamp-2 mt-1">
                    {lang === 'ar' ? ch.titleAr.split(':')[1] || ch.titleAr : ch.titleEn.split(':')[1] || ch.titleEn}
                  </p>

                  <span className={`mt-2 text-[8px] font-bold px-1 py-0.5 rounded w-fit truncate max-w-full ${
                    isSelected ? 'bg-cyan-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {lang === 'ar' ? ch.badgeAr : ch.badgeEn}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Chapter Deep Strategic Narrative Box */}
          <div className="p-5 sm:p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4 shadow-xl">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold block">
                  {activeChapter.durationLabel} • ACT #{activeChapter.id} OF 10
                </span>
                <h2 className="text-base sm:text-lg font-black text-white mt-0.5">
                  {lang === 'ar' ? activeChapter.titleAr : activeChapter.titleEn}
                </h2>
              </div>

              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                {activeChapter.lensSpecs}
              </span>
            </div>

            {/* Official Full Narration Paragraph */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-black uppercase tracking-wider">
                <Volume2 className="w-4 h-4" />
                <span>{lang === 'ar' ? 'النص الصوتي المباشر للجنة التحكيم (يُقرأ الآن بهدوء):' : 'Active Committee Narration Transcript:'}</span>
              </div>
              <p className="text-sm sm:text-base text-slate-100 font-serif leading-relaxed italic border-l-2 rtl:border-r-2 rtl:border-l-0 border-amber-400 pl-3 rtl:pr-3 whitespace-pre-line">
                "{lang === 'ar' ? activeChapter.narrationAr : activeChapter.narrationEn}"
              </p>
            </div>

            {/* Economic & Legal Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <Scale className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'الأثر القانوني والسيادي' : 'Legal & Sovereign Impact'}</span>
                </div>
                <p className="text-slate-300">
                  {lang === 'ar' ? activeChapter.legalAndEconomicImpactAr : activeChapter.legalAndEconomicImpactEn}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <DollarSign className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'الملخص التنفيذي والعائد المالي' : 'Executive & Financial Value'}</span>
                </div>
                <p className="text-slate-300">
                  {lang === 'ar' ? activeChapter.executiveSummaryAr : activeChapter.executiveSummaryEn}
                </p>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* 3. TAB B: 5 Interactive Sovereign Engines (Interactive Simulator Suite) */}
      {activeTab === 'sovereign_engines' && (
        <div className="space-y-6">
          
          {/* Top Banner */}
          <div className="p-5 rounded-3xl bg-gradient-to-r from-purple-950 via-slate-950 to-cyan-950 border border-purple-500/40 space-y-2">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'ar' ? 'الترسانة والأسلحة الثورية لمنظومة شاهين' : 'SHAHEEN Sovereign Tool Suite & Engines'}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-white">
              {lang === 'ar' ? 'خمسة محركات سيادية تغير قواعد الفن السابع في العالم' : '5 Game-Changing Engines Redefining Global Cinema'}
            </h2>
            <p className="text-xs text-slate-300 max-w-3xl">
              {lang === 'ar'
                ? 'تحويل التسريب لأرباح، البوابة المجانية للكتّاب، تكييف السيناريو على أي ميزانية، منصة اكتشاف المواهب، وخطة الـ 5 سنوات.'
                : 'Plot twist turnaround, free writer marketplace, budget-to-script engine, global casting hub, and 5-year roadmap.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            
            {/* ENGINE 1: Plot Twist Leak-Recovery Simulator */}
            <div className="p-5 rounded-3xl bg-slate-950 border border-emerald-500/40 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {lang === 'ar' ? '1. محرك تحويل التسريب إلى أرباح' : '1. Leak-to-Profit Twist Engine'}
                    </h3>
                    <p className="text-[10px] text-slate-400">
                      {lang === 'ar' ? 'إعادة حبك المسودة المسربة كفخ تمويهي' : 'Decoy rewriting turning leak into viral box office hype'}
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                  +240% ROI
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-[11px] font-bold text-slate-300 block mb-1">
                    {lang === 'ar' ? 'اسم الفيلم أو المسودة المسربة:' : 'Leaked Script / Movie Title:'}
                  </label>
                  <input
                    type="text"
                    value={leakTitle}
                    onChange={(e) => setLeakTitle(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 text-xs focus:border-emerald-400 focus:outline-hidden"
                  />
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-2">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                    {lang === 'ar' ? 'خطة شاهين لإعادة الحبكة الدرامية فوراً:' : 'SHAHEEN Sovereign Decoy Re-weaving:'}
                  </span>
                  <p className="text-slate-200 text-xs leading-relaxed">
                    {lang === 'ar'
                      ? `تم تحويل نهاية "${leakTitle}" المسربة إلى خطة تمويه وخداع داخل القصة (In-Universe Red Herring)، وحقن الذروة الحقيقية الصادمة (The True Climax) التي ستفاجئ الجمهور وتحول فضول الملايين إلى تذاكر سينما مباعة!`
                      : `Leaked climax of "${leakTitle}" rebranded as an in-universe decoy red-herring, preserving the real shocking plot twist and driving massive theatrical ticket demand!`}
                  </p>
                </div>
              </div>
            </div>

            {/* ENGINE 2: Budget-to-Script Precision Generator */}
            <div className="p-5 rounded-3xl bg-slate-950 border border-purple-500/40 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                    <Wand2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {lang === 'ar' ? '2. مولد السيناريو حسب الميزانية' : '2. Budget-Tailored Screenplay Engine'}
                    </h3>
                    <p className="text-[10px] text-slate-400">
                      {lang === 'ar' ? 'كتابة نص احترافي على مقاس أي مبلغ متوفر' : 'Precision scripts engineered for exact available capital'}
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-mono font-bold">
                  UNIVERSAL
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-300 mb-1">
                    <span>{lang === 'ar' ? 'الميزانية المتوفرة للمنتج:' : 'Available Producer Budget:'}</span>
                    <span className="font-mono text-purple-400 font-black">${selectedBudget.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={10000}
                    max={5000000}
                    step={10000}
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-slate-500 font-mono mt-0.5">
                    <span>$10K (Indie)</span>
                    <span>$1M (Mid-Tier)</span>
                    <span>$5M+ (Blockbuster)</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/30 space-y-1.5">
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block">
                    {lang === 'ar' ? 'توصيف شاهين للسيناريو الذكي المقترح:' : 'SHAHEEN Tailored Production Specs:'}
                  </span>
                  <p className="text-slate-200 text-xs">
                    {selectedBudget < 100000 
                      ? (lang === 'ar' ? 'سيناريو نفسي درامي عالي التوتر (3 مواقع تصوير مغلقة، 4 ممثلين رئيسيين، إضاءة سينمائية مكثفة، صفر هدر مالي).' : 'High-tension psychological thriller (3 interior locations, 4 cast members, maximum drama, zero financial waste).')
                      : (lang === 'ar' ? 'سيناريو أكشن وتشويق دولي (مطاردات محسوبة، مؤثرات بصرية ذكية، وتوزيع تصوير استراتيجي في 6 مواقع).' : 'International action-thriller with calculated kinetic set-pieces, optimized VFX, and 6 strategic filming locations.')}
                  </p>
                </div>
              </div>
            </div>

            {/* ENGINE 3: Free Sovereign Writers Gateway */}
            <div className="p-5 rounded-3xl bg-slate-950 border border-amber-500/40 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {lang === 'ar' ? '3. بوابة الكتّاب المجانية وسوق الإنتاج' : '3. Free Sovereign Writers Marketplace'}
                    </h3>
                    <p className="text-[10px] text-slate-400">
                      {lang === 'ar' ? 'فرصة مجانية 100% لكل كاتب للوصول للمنتجين' : 'Direct producer connection with zero commission barrier'}
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold">
                  100% FREE
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <p className="text-slate-300 leading-relaxed">
                  {lang === 'ar'
                    ? 'مهما كانت خبرتك أو بلدك، ارفع مسودتك لتحصل فوراً على براءة الحماية المشفرة، وعرضها في منصة المنتجين العالمية للتعاقد الفوري.'
                    : 'Regardless of your background, upload your script for instant cryptographic watermark protection and direct global studio contracting.'}
                </p>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <span className="text-slate-400 block text-[9px]">{lang === 'ar' ? 'الرسوم على الكاتب' : 'Writer Fees'}</span>
                    <span className="text-amber-400 font-black">$0 (مجاني تماماً)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <span className="text-slate-400 block text-[9px]">{lang === 'ar' ? 'العقود الذكية' : 'Smart Contracts'}</span>
                    <span className="text-cyan-400 font-black">حماية فورية 100%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ENGINE 4: Global Acting Talent Casting Hub */}
            <div className="p-5 rounded-3xl bg-slate-950 border border-pink-500/40 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-pink-500/20 text-pink-400">
                    <UserPlus className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {lang === 'ar' ? '4. منصة اكتشاف مواهب التمثيل العالمية' : '4. Global Acting Talent Audition Stage'}
                    </h3>
                    <p className="text-[10px] text-slate-400">
                      {lang === 'ar' ? 'رفع مقاطع الأداء لكبار صناع السينما' : 'Open casting stage for emerging actors worldwide'}
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 text-[10px] font-mono font-bold">
                  OPEN CASTING
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder={lang === 'ar' ? 'اسم الممثل / الموهبة' : 'Actor / Talent Name'}
                    value={actorTalentName}
                    onChange={(e) => setActorTalentName(e.target.value)}
                    className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 text-xs focus:border-pink-400 focus:outline-hidden"
                  />
                  <select
                    value={actorRoleType}
                    onChange={(e) => setActorRoleType(e.target.value)}
                    className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 text-xs focus:border-pink-400 focus:outline-hidden"
                  >
                    <option value="دوران رئيسي - تراجيدي / أكشن">بطولة رئيسية (أكشن / دراما)</option>
                    <option value="شخصية مركبة / شرير">شخصية مركبة / شرير (Antagonist)</option>
                    <option value="صوت ودوبلاج سينمائي">أداء صوتي سينمائي (Voice-Over)</option>
                  </select>
                </div>

                <button
                  onClick={() => {
                    setTalentSubmitted(true);
                    setNotification(lang === 'ar' ? 'تم تسجيل وتوثيق ملف الموهبة التمثيلية في سجل الكاستينغ العالمي لشاهين!' : 'Actor profile registered in SHAHEEN Global Casting Vault!');
                    setTimeout(() => setNotification(null), 4000);
                  }}
                  className="w-full py-2.5 rounded-xl bg-pink-500 hover:bg-pink-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-pink-500/20"
                >
                  <UploadCloud className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'رفع وتوثيق ملف الموهبة للمنتجين' : 'Submit Audition Reel to Producers'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* ENGINE 5: 5-Year Global Sovereign Roadmap (2026 - 2031) */}
          <div className="p-5 sm:p-6 rounded-3xl bg-slate-950 border-2 border-yellow-500/40 shadow-2xl space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-yellow-500/20 text-yellow-400">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white">
                    {lang === 'ar' ? '5. خارطة طريق الـ 5 سنوات القادمة لمنظومة شاهين (2026 - 2031)' : '5. SHAHEEN 5-Year Global Sovereign Roadmap (2026 - 2031)'}
                  </h3>
                  <p className="text-xs text-yellow-300/80 font-mono">
                    Under Direct Command of Eng. Ayman Al-Araishi (The Godfather) • XPRIZE Top 100
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 font-mono text-xs font-bold">
                SOVEREIGN EXPANSION
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono text-cyan-400 font-bold block">YEAR 1 (2026): FOUNDATION</span>
                <h4 className="font-bold text-white text-xs">{lang === 'ar' ? 'التطبيق السيادي والحصانة الدولية' : 'Sovereign Protocol & Festival Standard'}</h4>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {lang === 'ar' ? 'اعتماد بصمة S-WCM كمعيار رسمي في مهرجانات السينما وحماية أول 500 فيلم عالمي.' : 'Standardizing S-WCM watermark across international film festivals and protecting 500 major films.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono text-amber-400 font-bold block">YEAR 2-3 (2027-2028): ECOSYSTEM</span>
                <h4 className="font-bold text-white text-xs">{lang === 'ar' ? 'إطلاق الوقف التنموي ومعامل الذكاء الاصطناعي' : 'Arab AI Film Labs & 10% Endowment'}</h4>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {lang === 'ar' ? 'تدريب 10,000 طالب سينما عربي وافتتاح أول شبكة استوديوهات إنتاج افتراضي ذكية.' : 'Training 10,000 Arab cinema students and opening sovereign AI virtual production laboratories.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono text-yellow-400 font-bold block">YEAR 4-5 (2029-2031): SUPREMACY</span>
                <h4 className="font-bold text-white text-xs">{lang === 'ar' ? 'السيادة العالمية وسوق السينما اللامركزي' : 'Global Cinema Sovereignty & Decentralized Box Office'}</h4>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {lang === 'ar' ? 'إطلاق بورصة حقوق السينما السيادية وعقود الإنتاج الفوري اللامركزية عبر القارات.' : 'Launching sovereign film IP exchange and borderless instant cinema production contracts worldwide.'}
                </p>
              </div>
            </div>

            <div className="p-3 bg-yellow-950/30 border border-yellow-500/30 rounded-2xl flex items-center justify-between text-xs text-yellow-200">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>
                  {lang === 'ar' 
                    ? 'تمتلك شاهين أكثر من 20 ميزة سيادية إضافية غير معلنة لحفظ التفوق التقني والتنافسي.' 
                    : 'SHAHEEN holds over 20 additional proprietary sovereign breakthroughs reserved for industry deployment.'}
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold text-yellow-400">CLASSIFIED</span>
            </div>
          </div>

        </div>
      )}

      {/* 4. TAB C: Official Full Screenplay Dossier */}
      {activeTab === 'committee_dossier' && (
        <div className="p-5 sm:p-7 rounded-3xl bg-slate-950 border-2 border-amber-500/40 shadow-2xl space-y-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📜</span>
                <h2 className="text-base sm:text-xl font-black text-white">
                  {lang === 'ar' 
                    ? 'الملف التنفيذي والسيناريو الرسمي الكامل لتقديمه للجان التحكيم وصناع السينما' 
                    : 'Official Hollywood Master Screenplay & Committee Dossier'}
                </h2>
              </div>
              <p className="text-xs text-amber-400 font-mono mt-1">
                Mastermind: Eng. Ayman Al-Araishi (The Godfather) • XPRIZE Top 100 • Castle Gate Sovereign Architecture
              </p>
            </div>

            <button
              onClick={handleCopyFullDossier}
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25 cursor-pointer"
            >
              <Copy className="w-4 h-4" />
              <span>{lang === 'ar' ? 'نسخ الملف الكامل للجنة' : 'Copy Full Committee Dossier'}</span>
            </button>
          </div>

          {/* Detailed Printable Screenplay Box */}
          <div className="p-5 bg-slate-900/90 rounded-2xl border border-slate-800 font-mono text-xs sm:text-sm text-slate-300 space-y-6 leading-relaxed">
            
            <div className="text-center border-b border-slate-800 pb-4 text-amber-300">
              <p className="font-black text-base sm:text-lg tracking-widest uppercase">SHAHEEN APEX: THE SOVEREIGN CINEMA SHIELD</p>
              <p className="text-xs text-slate-400 mt-1">Official Festival & Investment Committee Presentation (4.0 Minutes)</p>
              <p className="text-xs text-cyan-400 mt-0.5">Engineered by Eng. Ayman Al-Araishi • XPRIZE Top 100</p>
            </div>

            {masterChapters.map((ch) => (
              <div key={ch.id} className="space-y-2 pt-2 border-b border-slate-800/80 pb-4">
                <div className="flex items-center justify-between text-cyan-400 font-bold">
                  <span>ACT {ch.id}: {ch.titleEn}</span>
                  <span className="text-[10px] text-amber-400 font-mono">{ch.durationLabel}</span>
                </div>
                
                <p className="text-slate-400 italic text-xs">
                  [SCENE ACTION & VISUAL NOTE]: {ch.executiveSummaryEn} — Lens: {ch.lensSpecs}
                </p>

                <div className="text-amber-200 font-bold uppercase pt-1 text-[11px]">
                  [OFFICIAL ARABIC NARRATION TRANSCRIPT]:
                </div>
                <p className="text-slate-100 font-sans text-sm italic bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  "{ch.narrationAr}"
                </p>

                <div className="text-cyan-300 font-bold uppercase pt-1 text-[11px]">
                  [OFFICIAL ENGLISH NARRATION TRANSCRIPT]:
                </div>
                <p className="text-slate-200 text-xs italic bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  "{ch.narrationEn}"
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-sans pt-1">
                  <div className="text-cyan-300">
                    <strong>السيادة والقانون:</strong> {ch.legalAndEconomicImpactAr}
                  </div>
                  <div className="text-emerald-300">
                    <strong>العائد والجدوى:</strong> {ch.executiveSummaryAr}
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Committee Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <button
              onClick={handleCopyFullDossier}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'ar' ? 'نسخ الملف لطباعته وتقديمه للجنة' : 'Copy Dossier for Print & Submission'}</span>
            </button>

            <button
              onClick={() => setActiveTab('presentation')}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{lang === 'ar' ? 'الرجوع لمشاهدة العرض وسماع الصوت' : 'Back to Presentation Video'}</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
