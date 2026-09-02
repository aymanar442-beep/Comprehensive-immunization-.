import React, { useState } from 'react';
import { CyberFalconLogo } from './CyberFalconLogo';
import { 
  Award, Shield, DollarSign, Globe, Sparkles, TrendingUp, Film, Cpu, 
  ChevronRight, ChevronLeft, Volume2, VolumeX, Play, Pause, Download, 
  CheckCircle2, Lock, Flame, Eye, Share2, Youtube, ExternalLink, Printer 
} from 'lucide-react';

interface PitchDeckProps {
  isArabic: boolean;
  onOpenContract?: () => void;
}

export const PitchDeckShowcase: React.FC<PitchDeckProps> = ({ isArabic, onOpenContract }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(2); // Default to Slide 2 as shown in screenshot
  const [activeTab, setActiveTab] = useState<'interactive' | 'all' | 'text'>('interactive');
  const [isNarrating, setIsNarrating] = useState<boolean>(false);
  const [narratorVoice, setNarratorVoice] = useState<'female' | 'male'>('female');
  const [selectedAccent, setSelectedAccent] = useState<'ar_sy_sa' | 'en_us'>('ar_sy_sa');
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false);
  const [mediaView, setMediaView] = useState<'video' | 'visual'>('video');

  const slides = [
    {
      num: 1,
      tag: 'EXECUTIVE OVERVIEW',
      titleEn: 'SHAHEEN APEX AI — The Sovereign Cinema Defense Infrastructure',
      titleAr: 'منظومة شاهين إيبكس — البنية التحتية السيادية لحماية السينما العالمية',
      quoteEn: 'Protecting Hollywood’s multi-billion dollar intellectual assets with sub-millisecond zero-width steganography.',
      quoteAr: 'حماية الملكية الفكرية لسيناريوهات هوليوود ومليارات الدولارات بتقنية البصمة الصفرية في أجزاء من الثانية.',
      bulletsEn: [
        'Zero-Width Cryptographic Steganography Matrix (S-WCM).',
        'Castle Gate sovereign access protocol for global studio writers.',
        'Autonomous semantic script breakdown & instant budget estimation.',
      ],
      bulletsAr: [
        'مصفوفة البصمة الصفرية الخفية S-WCM غير القابلة للاكتشاف أو الإزالة.',
        'بروتوكول Castle Gate الأمني لعزل واستخراج هوية المسرب فورياً.',
        'التفكيك الدلالي التلقائي للسيناريو وتقدير الميزانية الإنتاجية بدقة متناهية.',
      ],
      metricVal: '0.04ms',
      metricLabelEn: 'Extraction Latency (Fastest on Earth)',
      metricLabelAr: 'سرعة استخراج البصمة (الأسرع عالمياً)',
      godfatherScriptAr: "فِي عَالَمِ السِّينِمَا... كُلُّ كَلِمَةٍ هِيَ مَلَايِين الدُّولَارَاتْ، وَكُلُّ مَشْهَدْ هُوَ رُوحُ الْعَمَلْ. ولَاكِنْ... حِينَ تَتَسَرَّبُ الْأَسْرَارْ... تَنْهَارُ الْإِمْبِرَاطُورِيَّاتْ.\nهُنَا جَاءَتْ مَنْظُومَةُ (شَاهِينْ آبِكْسْ AI)... بِنِظِامِنْ أمْنِيِّنْ جَدَيْدْ.\nإِسْمُهُ (Castle Gate)\nوَكَأَنَّهُ يَقُولْ \"هُنَا الْبِدِايَةَ فَقَطْ\"\nيَتَكَوَّنْ هاذا النِّظَامْ بِأعْقَدِ الشّيفْرَاتِ الْأَمْنِيَّةَ في الْعَالَمْ.\nالْبَصْمَه الْمَجْهَرِيَّه الْخَفِيَّه الَّتِيْ لَا تُرَى... هِيَ أَمَانْ بِيُولُوجِيّْ لَا يُخْتَرَقْ... وَإِنْقَاذٌ دِرَامِيٌّ فَوْرِيٌّ لِأَعْتَى أَبْطَالِ هُولِيوُودْ.\nعَقِيدَتُنَا كَانَتْ وَسَتَبْقَى:… الْإِنْسَانْ قَبْلَ الْمَالْ... وَأَمَانُ شَاهِينْ فِي كُلِّ مَكَانْ!",
    },
    {
      num: 2,
      tag: 'THE PHOENIX PROTOCOL • HUMANITY BEFORE CAPITAL',
      titleEn: 'The Sovereign Creed: In Shaheen, Science & Humanity Unite Under One Sky',
      titleAr: 'في شاهينْ: تسخير العلم لنشر السلام والأمان وحماية كل من يسكن تحت السماء',
      quoteEn: 'In Shaheen, we do not sell products nor invent ordinary apps. We only compete with ourselves to innovate what protects human safety and the environment. We strive to harness science to spread peace and safety… From Damascus, the capital of history, from the womb of suffering, and from the resilience of its people in steadfastness, from the Phoenix which, whenever they think it has died, rises anew from its ashes.',
      quoteAr: '«فِي شَاهِينْ...\nنَحْنُ لا نَبِيعُ مُنْتَجَاتْ ولا نَخْتَرِعُ تَطْبيقَاتْ عادِيّهْ، وَلا نُنَافِسُ إلّا أَنْفُسَنَا لِتَطْويرِ كُلُّ ما يُحَافِظْ على سَلَامَةِ الْإِنْسَانِ وَالْبِيْئَهْ، نَحْنُ نَسْعَى لِتَسْخِيرِ الْعِلْمِ لِنَشْرِ السّلامِ وَالْأمانْ… \nمِنْ دِمَشْقَ عَاصِمَةِ التَّارِيْخْ، مِنْ رَحِمِ الْمَعَاناةْ، وَمِنْ صَلَابَةِ شَعْبِهَا بِالصُّمُودْ، مِنْ طَائِرِ الْفِيْنِيْقْ، الَّذِيْ إِذَا ظّنُّوْ أَنَّهُ مَاتْ .إِنْبَعَثَ مِنْ رَمَادِهِ مِنْ جَدِيْدْ»',
      bulletsEn: [
        'Proprietary sovereign innovations developed to safeguard human life and global ecology.',
        'Rising from the ashes: Born in the capital of history (Damascus) with unyielding resilience.',
        'Universal Humanity: Uniting the world through science without discrimination of race, identity, or creed.',
      ],
      bulletsAr: [
        'نَحْنُ لا نَبِيعُ مُنْتَجَاتْ ولا نَخْتَرِعُ تَطْبيقَاتْ عادِيّهْ، وَلا نُنَافِسُ إلّا أَنْفُسَنَا لِتَطْويرِ سَلَامَةِ الْإِنْسَانِ وَالْبِيْئَهْ.',
        'نَحْنُ نَسْعَى لِتَسْخِيرِ الْعِلْمِ لِنَشْرِ السّلامِ وَالْأمانْ… مِنْ دِمَشْقَ عَاصِمَةِ التَّارِيْخْ، مِنْ رَحِمِ الْمَعَاناةْ، وَمِنْ صَلَابَةِ شَعْبِهَا بِالصُّمُودْ.',
        'مِنْ طَائِرِ الْفِيْنِيْقْ، الَّذِيْ إِذَا ظّنُّوْ أَنَّهُ مَاتْ .إِنْبَعَثَ مِنْ رَمَادِهِ مِنْ جَدِيْدْ.',
      ],
      metricVal: 'UNIFIED',
      metricLabelEn: 'Humanity Above Capital',
      metricLabelAr: 'الإنسانية قبل كل شيء',
      godfatherScriptAr: "«فِي شَاهِينْ...\nنَحْنُ لا نَبِيعُ مُنْتَجَاتْ ولا نَخْتَرِعُ تَطْبيقَاتْ عادِيّهْ، وَلا نُنَافِسُ إلّا أَنْفُسَنَا لِتَطْويرِ كُلُّ ما يُحَافِظْ على سَلَامَةِ الْإِنْسَانِ وَالْبِيْئَهْ، نَحْنُ نَسْعَى لِتَسْخِيرِ الْعِلْمِ لِنَشْرِ السّلامِ وَالْأمانْ… \nمِنْ دِمَشْقَ عَاصِمَةِ التَّارِيْخْ، مِنْ رَحِمِ الْمَعَاناةْ، وَمِنْ صَلَابَةِ شَعْبِهَا بِالصُّمُودْ، مِنْ طَائِرِ الْفِيْنِيْقْ، الَّذِيْ إِذَا ظّنُّوْ أَنَّهُ مَاتْ .إِنْبَعَثَ مِنْ رَمَادِهِ مِنْ جَدِيْدْ»",
      godfatherScriptEn: "In SHAHEEN...\nWe do not sell products nor invent ordinary apps. We only compete with ourselves to innovate whatever preserves the safety of humanity and the environment. We strive to harness science to spread peace and safety…\nFrom Damascus, the capital of history, from the womb of suffering, and from the resilience of its people in steadfastness, from the Phoenix which, whenever they think it has died, rises anew from its ashes.",
    },
    {
      num: 3,
      tag: 'THE CRISIS & MARKET PAIN',
      titleEn: 'The $2.2B Screenplay Leak Crisis & Traditional DRM Failures',
      titleAr: 'أزمة تسريب السيناريوهات (2.2 مليار دولار) وفشل أنظمة الحماية التقليدية',
      quoteEn: 'Major studio leaks cost up to $45M in reshoots per film and destroy entire marketing campaigns.',
      quoteAr: 'تسريب سيناريوهات هوليوود يكلف ما يصل إلى 45 مليون دولار لإعادة تصوير الفيلم الواحد ويدمر مواسم العرض.',
      bulletsEn: [
        'Static PDF passwords fail instantly against screenshots and optical character recognition (OCR).',
        'Physical paper scripts get leaked on set or through third-party vendors without traceability.',
        'No existing tool can provide court-admissible sub-second forensic evidence.',
      ],
      bulletsAr: [
        'كلمات مرور PDF والعلامات المائية التقليدية تفشل تماماً أمام لقطات الشاشة أو النسخ اليدوي.',
        'تسريب النصوص في مواقع التصوير أو عبر أطراف ثالثة دون إمكانية إثبات الفاعل قانونياً.',
        'انعدام وجود أداة تقدم دليلاً جنائياً قطعياً مقبولاً في المحاكم خلال أجزاء من الثانية.',
      ],
      metricVal: '$45M+',
      metricLabelEn: 'Avg. Reshoot Cost Saved Per Leak',
      metricLabelAr: 'تكلفة إعادة التصوير الموفرة لكل فيلم',
      godfatherScriptAr: "يَعْتَمِدْ الْنظَامْ عَلَى أُسُسْ مُتَوَازِيه\n(SwarmArchitecture) تُفَكِّكْ اَلنُّصُوصُ اَلْمُمَيَّزَه أَوْ اَلْوَثَائِقِ الْمُعَقَّدَه، وَتُوَزِّعْ مَهَامَ التَّحْدِيدِ ٱلْفَوْرِيّ عَلَى وُكَلَاءْ ذَكَاءْ إصْطِنَاعِي مُتَخَصِّصِينْ (ألْوَكِيلْ ٱلْدّرَامِيْ لِلْحَبْكَه،\nوَكِيلْ قَانُونِيْ لِلْحُقُوقْ وَالْعُقُودْ،\nوَكِيْلْ مَالِيْ لِلْمِيزَانِيَّه وَٱلتَّكَالِيْفْ،\nوَ وَكِيْلْ أَمْنِيْ لِتَسْرِيْبِ الْخَبَرْ).\nتَكْتَمِلْ هاذِهِ ٱلْمَنْظُومَه بِتَحْلِيْلْ شَامِلْ خِلالَ دَقَائِقَ مَعْدُودَه وَ تَسْتَطِيْعْ بِهاذِهِ ٱلدَّقَائِقْ إنْهَاءْ ما يُنْهِيهِ ٱلْبَشَرْ خِلَالَ شُهُورْ وَ لِأَعْقَدِ الْمَوَاضِيعْ ألّتي تَأْخُذْ مِنَ الْوَقْتْ أَساَبِيعَ لَدِيهِمْ، مَعَ ضَمَانِ ٱلْإلْتِزَامِ بِالْمُوَافَقَه عَلَى 20% تَحَكُّمْ إِنْسَانِي و80% إِسْتقْلَالِيَّه تَامَّه.",
    },
    {
      num: 4,
      tag: 'BREAKTHROUGH TECHNOLOGY',
      titleEn: 'S-WCM Zero-Width Matrix: Invisible, Indelible, Instantaneous',
      titleAr: 'مصفوفة S-WCM الصفرية: خفية تماماً، غير قابلة للمسح، وفورية',
      quoteEn: 'Zero-Width Unicode cipher injection that survives copy-pasting, WhatsApp chats, and formatting strips.',
      quoteAr: 'حقن تشفيري ثنائي داخل الفراغات الصفرية غير المرئية بين الكلمات ينجو من النسخ ومحادثات واتساب وتغيير الخطوط.',
      bulletsEn: [
        'Zero visual impact: Screenwriters and actors see normal formatting with zero distortion.',
        'Tamper-proof HMAC SHA-256 cryptographic signature bonded to user identity.',
        'Sub-millisecond forensic decoding even from single isolated leaked paragraphs.',
      ],
      bulletsAr: [
        'أثر بصري معدوم: يقرأ الكاتب والممثل النص دون أي تشويه أو علامات مائية مزعجة.',
        'توقيع تشفيري HMAC SHA-256 مرتبط بهوية المستلم ومستوى التصريح الأمني.',
        'استخراج جنائي في أقل من 1 ملي ثانية حتى لو تم تسريب فقرة نصية واحدة فقط.',
      ],
      metricVal: '0.04ms',
      metricLabelEn: 'Forensic Extraction Speed',
      metricLabelAr: 'سرعة فك التشفير الجنائي',
      godfatherScriptAr: "حَتَّى لَوْ إلْتَقَطَ ٱلْخَائِنْ صُورَه مَائِلَه بِهَاتِفِهْ، أَو إسْتَخْدَمَ فَلاتِرَ مُعَقَّدَه... يَقُومُ مُحَرِّكَ شَاهِينْ لِلَْعلَامَاتِ ٱلْمَائِيَّةِ ٱلْغَيْرِ ٱلْمَرُئِيَّه، بِفَكِّ التَّشْفِيرِ فِيْ 40 مِلِّي ثَانِيه فَقَطْ، وَٱسْتِخْرَاجِ بَصْمَتِ اْلخَائِنْ. (إسْمُه، مَوْقِعِه) لِتَقْدِيمِهَا كَدَليُلِنْ قَاطِعِنْ لِلْمَحَاكِمَ ٱلدَّوْلِيَّه.",
    },
    {
      num: 5,
      tag: 'PERFORMANCE BENCHMARK',
      titleEn: 'Global Competitive Benchmarks: Shaheen vs. Silicon Valley DRM',
      titleAr: 'المقارنة العالمية: تفوق شاهين إيبكس على كبرى حلول وادي السليكون',
      quoteEn: 'Shaheen Apex AI outperforms standard DRM solutions by 10,000x in speed and 100% tamper resistance.',
      quoteAr: 'خوارزميات شاهين تتفوق على أنظمة وادي السليكون بـ 10,000 ضعف في السرعة وحصانة 100% ضد التلاعب.',
      bulletsEn: [
        'Silicon Valley legacy tools require 450ms; Shaheen executes in 0.04ms.',
        'Complete resilience against character permutation and basic paraphrasing attacks.',
        'Lightweight offline client runtime with zero cloud dependency overhead.',
      ],
      bulletsAr: [
        'الأنظمة التقليدية تستغرق 450 ملي ثانية بينما شاهين ينفذ في 0.04 ملي ثانية.',
        'صمود كامل أمام محاولات إعادة الصياغة أو إزالة الفراغات المعتادة.',
        'تشغيل فائق الخفة محلياً دون استهلاك باقات الإنترنت أو خوادم ثقيلة.',
      ],
      metricVal: '10,000x',
      metricLabelEn: 'Speed Advantage Over Standard DRM',
      metricLabelAr: 'فارق السرعة مقارنة بالأنظمة التقليدية',
      godfatherScriptAr: "(SHAHEEN APEX AI)\n لَيْسَ مُجَرَّدَ خَوَارِزْمِيَّاتْ بَرْمَجِيَّه... بَلْ هُوَ (عِقْدُنْ ذَكِيُّنْ مُشَفَّرْ) يَرْبِطُ حُقُوقَ الْمُؤَلِّفِينْ، وَالْمُخْرِجِينْ، وَشَرِكَاتِ الْإِنْتَاج فِي سِجِلَّاتِن عَالَمِيَّتِنْ رَصِينَتِتْ لَا تُخْتَرَقْ.\nبِمُجَرَّدِ ٱعْتِمَادِ النَّصّْ، تُوَثَّقُ الْمِلْكِيَّةُ الْفِكْرِيَّةُ حَصْرِيَّنْ، وَتُصْبِحُ أَيَّ مُحَاوَلَه لِلْسَرِقَه أَوِ ٱنْتِحَالْ... جَرِيمَتَنْ مَكْشُوفَتَنْ مَعْرُوفَةَ ٱلْمَصْدَرْ فِي أَجْزَاءِنْ مِنَ الثَّانِيَه.\nنَحْنُ نَقْضِيْ عَلَى ٱلْقَرْصَنَةِ فِي مَهْدِهَا... لِنَحْمِيَ صُنَّاعَ الْخَيَالْ.",
    },
    {
      num: 6,
      tag: 'SECURITY ARCHITECTURE',
      titleEn: 'Castle Gate: 3-Tier Writers Corridor & VIP Studio Hub',
      titleAr: 'معمارية كاسل غيت: أروقة الكتاب الثلاثة وغرفة العرّاب الخاصة',
      quoteEn: 'A sovereign digital fortress partitioning writers into Amateur, Pro Guild, and VIP Private Consulting.',
      quoteAr: 'حصن رقمي سيادي يقسم وصول الكتاب والمنتجين إلى 3 مستويات مدرعة بأعلى معايير التشفير.',
      bulletsEn: [
        'Amateur Corridor: Free open-access script discovery with base S-WCM protection.',
        'Pro Screenwriters Guild: Verified portfolio exchange for production-ready screenplays.',
        'VIP Godfather Hub: Encrypted direct line for multi-million dollar studio crisis consulting.',
      ],
      bulletsAr: [
        'رواق الهواة: مساحة حرة لاكتشاف المواهب مع حماية البصمة الصفرية الأساسية.',
        'نقابة المحترفين: تبادل مسودات السيناريو المعتمدة المجهزة للإنتاج المباشر.',
        'غرفة العرّاب VIP: قناة مشفرة لإنقاذ وإعادة هيكلة كبرى مشاريع هوليوود المتعثرة.',
      ],
      metricVal: '3 Tiers',
      metricLabelEn: 'Sovereign Multi-Tenancy Armor',
      metricLabelAr: 'مستويات العزل والحماية السيادية',
      godfatherScriptAr: "مِنْ هُنَا.. مِنْ أَقْدَمِ عَاصِمَتِنْ فِي ٱلتَّارِيخْ.. نَرْسُمُ مُسْتَقْبَلَ الْفَنِّ السَّابِعْ.\n(شَاهِينْ آَبِكْسْ)..\nهِيَ ٱلْبَوَّابَه، لِنِظَامِ عَالَمِ ٱلْفَنِّ ٱلجَّدِيْدْ.\nهِيَ نَوَاتِ ٱلْمُعَادَلَه ٱلتَّنَافِسِيّة لِكُلِّ شَرِكَاتِ الْعَالَمِ الرّائِدَه في صِنّاعِةِ الْفَنْ ومِضْمَارُ ٱلسِّبِاقَ لِمَنْ يُضِيْفُ سَطْرَن جَدِيْدَن لِحِمَايَتِهَا.\nوَٱلْكَيَانُ ٱلَّذي سَيَجْعَلُ الْجَمِيْعَ يَسْعَىزفيْ مُنَافَسَتِهَا\nوَأمّا ٱلْعَرَّاَب.\nلَمْ يُلَقَّبْ هاكَذَا لِيَسْمَحَ بِوجُودِ مَنْ يُحَاوِلْ ٱلإقْتِرَابَ مِنْ أَسْوَآرِ ٱلْقَلْعَةَ الَّتي سَيجعَلَهَا بِمَثَابَةِ الْأمَمَ المُتَّحِدَة لِلْفَنِّ حَوْلَ الْعَلَمْ\nوَأَعْضَائِهَا كَطَاوِلَةِ الْمَلِكْ آرْثْرْ وَمَقَاعِدَ الفُسَانِ الْعَشْرَه.\nوَلِأَنَّ الْإِبْدَاعَ ثَرْوَه... وَحِمَايَتَهُ هِيَ مَهَمَّتَنَا ٱلْأَسَاسِيَّه.\nسَيَكُونُ شَاهِينْيُرَاقِبُ مِنْ خَلْفِ ٱلسَّحَابَ بِعَيْنِهِ ٱلثّاقبه مايَدُورُ فِي سَاحاتِ السِّيْنَمَا الْعَالَمِيَّه وَكْشِفُ، مَا خَلْفَ الْكَوَالِيس، دُوْنَ أَنْ يَرَاهُ أَحَدْ\nحَيْثُ يَلْتَقِي الْفَنُّ بِالْأَمَانِ ٱلْمُطْلَقْ، وَتَبْقَى شَاشَةُ الْعَالَمِ نَظِيفَتَنْ وَآمِنَهْ.\nفَرِسَالَةَ ٱلْعَرَّاَبْ.\nإِذْهَبْ لِتَنَامَ بِسَلَام، فَهُنَاكَ مَنْ يَسْهَرُ مِنْ أَجْلِكْ\nفَٱلشَّاهِيْنْ هِيَ الْعَيْنُ ٱلْحَارِسَه، وَصَاحِبُهَا هُوَ ٱلْعَرَّابُ ٱلْجَدِيدُ لِلْصِنَاعَةِ السِّنَمَائِيَّهْ",
    },
    {
      num: 7,
      tag: 'AI PLOT SALVAGE',
      titleEn: 'Crisis Plot Salvage Engine: Counter-Intelligence Master Twists',
      titleAr: 'محرك إنقاذ السيناريوهات: توليد الحبكات المضادة والتحولات الذكية',
      quoteEn: 'Autonomous script reconstruction that salvages leaked climaxes in seconds while maintaining cinematic integrity.',
      quoteAr: 'إعادة بناء السيناريو تلقائياً لإنقاذ النهايات المسربة في ثوانٍ مع الحفاظ على التماسك الدرامي والجمالي.',
      bulletsEn: [
        'Instant generation of 3 distinct master narrative twists upon leak detection.',
        'Character arc preservation and pacing optimization.',
        'Direct consultation routing to Eng. Ayman Al-Araishi (The Godfather).',
      ],
      bulletsAr: [
        'توليد 3 حبكات بديلة مذهلة فور حدوث أي تسريب لإرباك المسربين وإنقاذ الفيلم.',
        'الحفاظ الكامل على البناء النفسي للشخصيات والإيقاع السينمائي الملحمي.',
        'إمكانية الاستشارة المباشرة مع المهندس أيمن العرايشي لإعادة صياغة المشاهد.',
      ],
      metricVal: '3 Modes',
      metricLabelEn: 'Counter-Twist Generation',
      metricLabelAr: 'أنماط الإنقاذ البديلة الفورية',
      godfatherScriptAr: "شَاهِينْ أَبِكْس... لَيْسَ مُجَرَّدَ حَارِسِنْ أَمْنِيّْ، بَلْ هُوَ شَرِيكُنْ إِسْتِرَاتِيجِيّْ لِكُلِّ عَمَلِنْ فَنِّيّْ.\nمِنْ خِلَالِ تَحْلِيلِ ٱلْبَيَانَاتِ ٱلضَّخْمَه، يَتَوَقَّعُ ٱلنِّظَامُ نَجَاحَ ٱلْأَفْلَامِ قَبْلَ إِنْتَاجِهَا، وَيُوَفِّرُ مَلَايِينَ ٱلدُّولَارَاتِ عَلَى شَرِكَاتِ ٱلْإِنْتَاجِ ٱلْعَالَمِيَّه.\nإِنَّ ذَكَائِنَا ٱلِٱصْطِنَاعِيّْ... هُوَ الْمُعَادَلَه الْجَدِيْدَه لِلنِّظَامِ الْأَمْنِيِّ الْعَالَمِيْ، وَهُوَ فَجْرُ السِّينَمَا الْعَالَمِيَّةِ الْجَّدَيْدْ، وَالْقَوَاعِدَ الْجَدِيْدَةَ لِنِظَامِ الْفَنِّ الْعَالَمِيّْ",
    },
    {
      num: 8,
      tag: 'SEMANTIC BREAKDOWN',
      titleEn: 'Autonomous Semantic Breakdown & Real-Time Production Costing',
      titleAr: 'التفكيك الدلالي التلقائي وحساب الميزانية الفورية للإنتاج',
      quoteEn: 'Parsing complex multi-scene scripts into actionable budget lines, crew requirements, and stunt safety matrices.',
      quoteAr: 'تحليل المشاهد المعقدة وتوزيع تكاليف الإنتاج والديكور والمجازفات والتصاريح في ثوانٍ معدودة.',
      bulletsEn: [
        'Automatic category tagging: Stunts, Locations, Cast, VFX, and Permits.',
        'Instant cost variance simulation across international shooting hubs (Hollywood, Riyadh, Prague).',
        'Reduction of manual pre-production breakdown time by 92%.',
      ],
      bulletsAr: [
        'تصنيف ذكي لعناصر المشهد: مجازفات، مواقع، ممثلين، مؤثرات بصرية، وتصاريح.',
        'محاكاة فورية لفروق التكاليف بين مواقع التصوير العالمية (هوليوود، الرياض، براغ).',
        'تقليص وقت تفريغ السيناريو اليدوي بنسبة 92%.',
      ],
      metricVal: '92%',
      metricLabelEn: 'Pre-Production Time Reduction',
      metricLabelAr: 'توفير الوقت في مرحلة التحضير',
      godfatherScriptAr: "فِيْ زَمَنِ ٱلِٱسْتِنْسَاخِ ٱلرَّقَمِيّْ، تَبْقَى ٱلْكَلِمَةُ ٱلْأَصْلِيَّةُ هِيَ ٱلْأَغْلَى.\nشَاهِينْ أَبِكْسْ يَمْنَحُ كُلَّ كَاتِبِنْ وَمُؤَلِّفِنْ جَوَازَ سَفَرِنْ رَقَمِيِّنْ لِأَفْكَارِهْ. أَيُّ ٱقْتِبَاسِنْ غَيْرَ مُصَرَّحِنْ بِهْ، يُرْصَدُ فَوْرَنْ عَبْرَ شَبَكَتِنَا ٱلْعَصَبِيَّه.\nإِبْدَاعُكَ مِلْكُكْ، وَنَحْنُ جَيْشُكَ ٱلَّذِي يَقِفُ دُونَه.",
    },
    {
      num: 9,
      tag: 'BUSINESS MODEL & ROI',
      titleEn: 'Studio Enterprise SaaS & Godfather High-Value Retainer',
      titleAr: 'النموذج الاستثماري: اشتراكات الاستوديوهات وعقود الاستشارة السيادية',
      quoteEn: 'Targeting Tier-1 Hollywood and global streaming giants (Disney, Universal, Netflix, Warner Bros).',
      quoteAr: 'استهداف استوديوهات هوليوود ومنصات البث العالمية (ديزني، يونيفرسال، نتفليكس، وارنر بروس).',
      bulletsEn: [
        'Strategic Seed Funding: Scaling global cloud infrastructure to secure Tier-1 Hollywood studios.',
        'Tier 1 Revenue: $250,000 per major feature film deployment (unlimited S-WCM tracking).',
        'Tier 2 Revenue: $1.2M annual enterprise license for comprehensive studio production suites.',
        'Godfather Crisis Retainer: $500,000 premium emergency script salvage & counter-twist deployment.',
      ],
      bulletsAr: [
        'التمويل الأولي الاستراتيجي: لتوسيع البنية التحتية السحابية وتأمين كبرى استوديوهات هوليوود.',
        'إيرادات الفئة 1: 250,000 دولار للفيلم الضخم الواحد (تتبع غير محدود بالبصمة الصفرية).',
        'إيرادات الفئة 2: ترخيص سنوي شامل بـ 1.2 مليون دولار للاستوديوهات الكبرى.',
        'عقد طوارئ العرّاب: 500,000 دولار لتدخل طارئ لإنقاذ السيناريوهات المسربة.',
      ],
      metricVal: '$250K',
      metricLabelEn: 'Per-Blockbuster License Base',
      metricLabelAr: 'قيمة الترخيص للفيلم الضخم الواحد',
      godfatherScriptAr: "ٱلْوَكِيلُ ٱلْمَالِيُّ فِي شَاهِينْ... يَقْرَأُ ٱلنَّصَّ فَيَحْسِبُ ٱلتَّكْلِفَه.\nلا دَاعِنْ لِلْمِيزَانِيَّاتِ ٱلْوَهْمِيَّةِ وَٱلْهَدْرِ ٱلْمَالِيّْ. فَكُلُّ مَشْهَد، كُلُّ حَرَكَةِ كَامِيرَا، يَتِمُّ تَسْعِيرُهَا بِدِقَّتِنْ مُتَنَاهِيَهْ قَبْلَ أَنْ يَبْدَأَ ٱلتَّصْوِيرْ.\nشَاهِينْ أَبِكْسْ... يَبْنِي إِمْبِرَاطُورِيَّتَكَ ٱلسِّينِمَائِيَّةَ بِأَسَاسَاتِنْ مِنْ ذَهَبْ.",
    },
    {
      num: 10,
      tag: 'XPRIZE & GLOBAL MILESTONE',
      titleEn: 'XPRIZE Build with Gemini Official Candidate & Top Global Contender',
      titleAr: 'مسابقة XPRIZE العالمية والترشح الأقوى للفوز بين أفضل المشاريع عالمياً',
      quoteEn: 'Official submission recognized by XPRIZE and Google Developer ecosystem, establishing Shaheen as a top contender for the global prize.',
      quoteAr: 'مشروع رسمي معتمد وموثق في مسابقة XPRIZE وبناء بيئة مطوري Google، مكرساً منظومة شاهين كالمرشح الأقوى للمنافسة عالمياً.',
      bulletsEn: [
        'Official confirmation email received from XPRIZE Competition Team.',
        'Over 10+ Google Developer Badges including Gemini Enterprise Agent Ready.',
        'Active international community engagement and developer leadership.',
      ],
      bulletsAr: [
        'استلام رسالة التقدير والتوثيق الرسمية من فريق مسابقة XPRIZE العالمية.',
        'أكثر من 10 شارات معتمدة من Google للمطورين بما فيها جاهزية وكلاء Gemini Enterprise.',
        'الترشح الأقوى للتتويج في المراتب الأولى للمسابقة العالمية.',
      ],
      metricVal: 'TOP CONTENDER',
      metricLabelEn: 'XPRIZE Gemini Competition Standing',
      metricLabelAr: 'المرشح الأقوى لجائزة XPRIZE',
      godfatherScriptAr: `«فِي شَاهِينْ...
نَحْنُ لا نَبِيعُ مُنْتَجَاتْ ولا نَخْتَرِعُ تَطْبيقَاتْ عادِيّهْ، وَلا نُنَافِسُ إلّا أَنْفُسَنَا لِتَطْويرِ كُلَّ ما يُحَافِظْ على سَلَامَةِ الْإِنْسَانِ وَالْبِيْئَهْ، نَحْنُ نَسْعَى لِتَسْخِيرِ الْعِلْمِ لِنَشْرِ السّلامِ وَالْأمانْ… 
مِنْ دِمَشْقَ عَاصِمَةِ التَّارِيْخْ، مِنْ رَحِمِ الْمَعَاناةْ، وَمِنْ صَلَابَةِ شَعْبِهَا بِالصُّمُودْ، مِنْ طَائِرِ الْفِيْنِيْقْ، الَّذِيْ إِذَا ظّنُّوْ أَنَّهُ مَاتْ .إِنْبَعَثَ مِنْ رَمَادِهِ مِنْ جَدِيْدْ
رِسَالَتَنَا الْعَمَلَ على تَوْحِيْدِ الْعَالَمِ بِالْعِلْمْ وَحِمَايَةَ كُلَّ مَنْ يَسْكُنُ تَحَتَ السَّمَاءْ، دُونُ التَّفرِقَهْ بَيْنَ أَحَدْ، لا بِالْهَويَّهْ ولا الْإِنْتِمَاءْ ولا الْعِرْقِ وِالدِّيْنْ.
فَكُلُّنَا سَوَاسِيَهْ وَالْإِنْسَانِيَّهْ هِيَ هُوِيَّتَنَا جَمِيْعَنْ.
مِنَ الْعَرَّابْ: ضَعُوْ أَيْدِيْكْمْ مَعَ أَيْدِيْنَا، لِبِنَاءِ الْمُسْتَقْبَلِ مَعَنْ!»`,
      godfatherScriptEn: `In SHAHEEN...
We do not sell mere products nor invent ordinary apps. We compete only with ourselves to pioneer everything that safeguards humanity and the environment. We strive to harness science for universal peace and security…
From Damascus, the capital of history, from the womb of suffering and the resolute resilience of its people—like the mythical Phoenix that, when thought dead, rises anew from its ashes.
Our mission is to unite the world through science and protect everyone dwelling beneath the heavens without distinction of identity, allegiance, race, or religion.
For we are all equals, and humanity is our common identity.
From The Godfather: Place your hands in ours, to build the future together!`,
    },
    {
      num: 11,
      tag: 'TECHNICAL SUPREMACY',
      titleEn: 'Technical Supremacy & Steganographic Mastery',
      titleAr: 'الكمال التقني وحصانة البصمة المائية الخفية',
      quoteEn: 'Zero-defect architecture with flawless Gemini AI integration and visually impossible-to-detect cryptography.',
      quoteAr: 'أداء 10/10: دقة تشفير (Steganography) خالية من العيوب، وتكامل مبهر مع ذكاء Gemini 3.1 Pro متعدد اللغات.',
      bulletsEn: [
        'Zero-Width Cryptographic Cipher: Impossible to detect via eye or standard OCR; no pixels altered.',
        'Reverse Engineering Immunity: Encrypted payloads require supercomputers to break without the Master Cipher Key.',
        'Forensic Extraction: Instantaneous (40ms) verifiable extraction of leaker identity (actor/employee) in court.',
      ],
      bulletsAr: [
        'البصمة المائية الخفية: تعتمد على دمج محارف (Unicode) صفرية داخل الفراغات، مستحيل كشفها بالعين أو تغييرها لتنسيق النص.',
        'الحصانة الجنائية (Reverse Engineering): حتى لو لوحظت، فهي مشفرة بمفتاح (Cipher Key) يستحيل فكه إلا عبر خوادمنا.',
        'الاستخراج الفوري: 40 ملي ثانية فقط لتقديم الدليل الجنائي القاطع باسم وتاريخ وتوقيت المسرب للمحاكم الدولية.',
      ],
      metricVal: '10/10',
      metricLabelEn: 'Performance & Innovation Rating',
      metricLabelAr: 'تقييم الأداء والابتكار التقني',
      godfatherScriptAr: "فِي شَاهِينْ أَبِكْسْ... نَحْنُ لَا نَعْتَمِدُ عَلَى مُجَرَّدِ حَمَايَةٍ تَقْلِيدِيَّة. نَحْنُ نَصْنَعُ بَصْمَةً مَائِيَّةً صِفْرِيَّةً تَتَخَلَّلُ كُلَّ حَرْفٍ وَسَطْرٍ دُونَ أَنْ تَرَاهَا الْعَيْنُ أَوْ تَكْتَشِفَهَا الْكَامِيرَاتْ.\nحَتَّى لَوْ تَمَّ تَسْرِيبُ النَّصِّ أَوْ تَصْوِيرُهُ بِالْهَاتِفْ... خِلَالَ أَرْبَعِينَ مِلِّي ثَانِيَة نَسْتَخْرِجُ اسْمَ الْمُسَرِّبِ، تَارِيخَ الْجَرِيمَةِ، وَتَوْقِيعَهُ الْجِنَائِيَّ لِلْمَحَاكِمِ الدَّوْلِيَّة.",
      godfatherScriptEn: "In SHAHEEN APEX AI... we do not rely on fragile legacy protection. We embed a zero-width cryptographic matrix into every word and line, completely invisible to the naked eye or OCR.\nEven if a script is snapped on a phone or leaked on set... in 40 milliseconds we extract the leaker identity, time of leak, and forensic proof for international courts.",
    },
    {
      num: 12,
      tag: 'FUTURE VISION: THE ENTITY',
      titleEn: 'Future Vision: From Application to Global Sovereign Entity',
      titleAr: 'الرؤية المستقبلية: من تطبيق برمجي إلى كيان عالمي سيادي',
      quoteEn: 'We are not just an app; we are an entity building the unified future of global cinema and IP protection.',
      quoteAr: 'نحن لسنا تطبيقاً، وإنما كيان يهدف لجمع هوليوود، بوليوود، والسينما العربية تحت سقف واحد.',
      bulletsEn: [
        'Phase 2: Global Writers Hub with tiered VIP access and free baseline IP protection against unauthorized AI training.',
        'Phase 3: Uniting Hollywood, Bollywood, and Arab Cinema to produce unified global multi-language films.',
        'Phase 4: Establishing annual global award ceremonies as a definitive art-sponsoring organization.',
      ],
      bulletsAr: [
        'المرحلة الثانية (المشاريع الموسعة): بناء مكتبة للكُتّاب العالميين والمغمورين (بأسلوب مشابه لـ LinkedIn) تضمن حماية مجانية لنصوصهم، مع اشتراكات للنخب والمنتجين.',
        'المرحلة الثالثة (جمع السينمات العالمية): جمع هوليوود، بوليوود، والسينما العربية كمنظمة موحدة لإنتاج عمل سينمائي مشترك يدمج اللغات والثقافات.',
        'المرحلة الرابعة: تأسيس حفلات توزيع جوائز سنوية دولية كهيئة راعية للفن ومنظمة داعمة للمواهب بشراكات رعاية ضخمة (نحن لسنا تطبيق، نحن كيان).',
      ],
      metricVal: 'PHASE 4',
      metricLabelEn: 'The Ultimate Entity Vision',
      metricLabelAr: 'رؤية الكيان المطلقة',
      godfatherScriptAr: "نَحْنُ لَسْنَا مُجَرَّدَ بَرْنَامَجٍ أَوْ تَطْبِيقْ... نَحْنُ كِيَانٌ سِيَادِيٌّ يَجْمَعُ عُظَمَاءَ هُولِيوُود، بُولِيوُود، وَالسِّينِمَا الْعَرَبِيَّةِ تَحْتَ سَقْفٍ وَاحِدْ.\nرُؤْيَتُنَا هِيَ تَأْسِيسُ جَوَائِزِ شَاهِينْ الدَّوْلِيَّةِ لِرِعَايَةِ الْفَنِّ وَحِمَايَةِ كُلِّ مُبْدِعٍ وَكَاتِبٍ فِي الْعَالَم.\nالإِنْسَانِيَّةُ قَبْلَ كُلِّ شَيْء... وَالْعِلْمُ هُوَ رَسُولُ السَّلَام.",
      godfatherScriptEn: "We are not merely software or an ordinary app... we are a sovereign global entity bringing together the legends of Hollywood, Bollywood, and Arab cinema under one roof.\nOur vision is to establish the annual Global Shaheen Awards to sponsor art and safeguard every creator and writer worldwide.\nHumanity above all... and science is the sovereign messenger of peace.",
    },
  ];

  const currentSlideData = slides[currentSlide - 1];

  // Speech Narration via Web Speech API
  const handleToggleNarration = () => {
    if (!('speechSynthesis' in window)) return;

    if (isNarrating) {
      window.speechSynthesis.cancel();
      setIsNarrating(false);
      return;
    }

    // If on hero slides (Slide 2, Slide 10, Slide 12) or if dual-speech is enabled, speak both Arabic and English seamlessly
    const isFinalOrHeroSlide = currentSlideData.num === 2 || currentSlideData.num === 10 || currentSlideData.num === 12;

    if (isFinalOrHeroSlide) {
      const arText = currentSlideData.godfatherScriptAr || `${currentSlideData.titleAr}. ${currentSlideData.quoteAr}. ${currentSlideData.bulletsAr.join('. ')}`;
      const enText = currentSlideData.godfatherScriptEn || `${currentSlideData.titleEn}. ${currentSlideData.quoteEn}. ${currentSlideData.bulletsEn.join('. ')}`;

      const utteranceAr = new SpeechSynthesisUtterance(arText);
      utteranceAr.lang = 'ar-SA';
      utteranceAr.rate = 0.95;
      utteranceAr.pitch = 0.9;

      const utteranceEn = new SpeechSynthesisUtterance(enText);
      utteranceEn.lang = 'en-US';
      utteranceEn.rate = 0.95;
      utteranceEn.pitch = 0.9;

      utteranceAr.onend = () => {
        // Automatically start the English message immediately after Arabic finishes
        window.speechSynthesis.speak(utteranceEn);
      };

      utteranceEn.onend = () => setIsNarrating(false);
      utteranceAr.onerror = () => setIsNarrating(false);
      utteranceEn.onerror = () => setIsNarrating(false);

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utteranceAr);
      setIsNarrating(true);
      return;
    }

    // Default narration for other slides according to selected language or slide rules
    const forceArabicAudio = currentSlideData.num === 2;
    const speakArabic = isArabic || forceArabicAudio;

    const textToSpeak = speakArabic
      ? (currentSlideData.godfatherScriptAr || `${currentSlideData.titleAr}. ${currentSlideData.quoteAr}. ${currentSlideData.bulletsAr.join('. ')}`)
      : (currentSlideData.godfatherScriptEn || `${currentSlideData.titleEn}. ${currentSlideData.quoteEn}. ${currentSlideData.bulletsEn.join('. ')}`);

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = speakArabic ? 'ar-SA' : 'en-US';
    utterance.rate = 0.95;
    utterance.pitch = narratorVoice === 'female' ? 1.15 : 0.9;

    utterance.onend = () => setIsNarrating(false);
    utterance.onerror = () => setIsNarrating(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsNarrating(true);
  };

  const handleNextSlide = () => {
    if (currentSlide < slides.length) {
      setCurrentSlide(currentSlide + 1);
      if (isNarrating) {
        window.speechSynthesis.cancel();
        setIsNarrating(false);
      }
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
      if (isNarrating) {
        window.speechSynthesis.cancel();
        setIsNarrating(false);
      }
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* 1. Top Deck Header Bar */}
      <div className="bg-[#0b1120] border border-[#1e293b] rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        
        {/* Left: Brand & Deck Title */}
        <div className="flex items-center gap-3">
          <CyberFalconLogo size="md" glow={true} />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-black text-white font-mono tracking-wider">
                SHAHEEN <span className="text-[#00d2ff]">APEX AI</span> Official Pitch Deck
              </h2>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/80 text-amber-400 border border-amber-500/40 font-mono font-bold">
                12 SLIDES
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              {isArabic
                ? 'المؤسس والمعماري: المهندس أيمن العَرَّاب (The Godfather) • وادي السليكون & دمشق'
                : 'Founder & Lead Architect: Eng. Ayman Al-Araishi (The Godfather)'}
            </p>
          </div>
        </div>

        {/* Right: Actions (Contract Modal Trigger, Narrator, PDF) */}
        <div className="flex flex-wrap items-center gap-2">
          {onOpenContract && (
            <button
              onClick={onOpenContract}
              className="px-3 py-1.5 rounded-lg bg-amber-950/80 hover:bg-amber-900 border border-amber-500/50 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-[0_0_12px_rgba(245,158,11,0.3)] transition-all cursor-pointer"
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>{isArabic ? '📜 العقد وبراءة الاختراع' : '📜 Sovereign Deed'}</span>
            </button>
          )}

          {/* Narration Button */}
          <button
            onClick={handleToggleNarration}
            className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              isNarrating
                ? 'bg-rose-950/90 text-rose-300 border-rose-500 animate-pulse shadow-[0_0_12px_rgba(244,63,94,0.5)]'
                : 'bg-slate-900 text-cyan-300 border-cyan-500/50 hover:bg-slate-800'
            }`}
          >
            {isNarrating ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span>
              {isNarrating
                ? (isArabic ? 'إيقاف الراوي' : 'Stop Narration')
                : (isArabic ? '🎙️ قراءة الشريحة' : '🎙️ Narrate Slide')}
            </span>
          </button>

          {/* Mode Switcher */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs font-mono">
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                activeTab === 'interactive' ? 'bg-[#00d2ff] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isArabic ? 'الشرائح التفاعلية' : 'Interactive Slides'}
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                activeTab === 'all' ? 'bg-[#00d2ff] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isArabic ? 'كل الشرائح (12)' : 'All 12 Slides'}
            </button>
          </div>
        </div>

      </div>

      {/* 2. Interactive Presentation Screen (YouTube / Unreal 8K Style) */}
      {activeTab === 'interactive' && (
        <div className="bg-[#0f172a] border border-[#1e293b] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
          
          {/* Slide Tag & Navigation Progress Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-blue-950 text-[#00d2ff] border border-[#00d2ff]/40 text-xs font-mono font-bold">
                SLIDE {currentSlide} / 12
              </span>
              <span className="text-xs font-mono text-slate-400 tracking-wider">
                {currentSlideData.tag}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <CyberFalconLogo size="xs" glow={false} />
              <span>SHAHEEN ECOSYSTEM</span>
            </div>
          </div>

          {/* Slide Main Headline */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
              {isArabic ? currentSlideData.titleAr : currentSlideData.titleEn}
            </h3>

            {currentSlideData.godfatherScriptAr ? (
              <div className="p-5 sm:p-7 rounded-2xl bg-slate-950/80 border-2 border-[#00d2ff]/40 shadow-[0_0_25px_rgba(0,210,255,0.1)] relative space-y-3">
                <div className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 bg-blue-950 border border-[#00d2ff]/50 rounded-full text-[10px] text-[#00d2ff] font-bold font-mono tracking-widest backdrop-blur-sm shadow-[0_0_10px_rgba(0,210,255,0.4)]">
                  {isArabic ? 'السيناريو السيادي (The Sovereign Script)' : 'THE SOVEREIGN SCRIPT • DUAL AUDIO'}
                </div>
                <p className="text-white text-sm sm:text-base leading-[1.8] whitespace-pre-wrap font-sans font-medium">
                  {isArabic ? currentSlideData.godfatherScriptAr : (currentSlideData.godfatherScriptEn || currentSlideData.godfatherScriptAr)}
                </p>
                {/* Secondary bilingual translation if on final slide or requested */}
                {!isArabic && currentSlideData.godfatherScriptAr && currentSlideData.godfatherScriptEn && (
                  <div className="pt-3 border-t border-slate-800/80 text-xs text-cyan-200/80 leading-relaxed font-sans italic">
                    <span className="font-mono text-[10px] text-cyan-400 block mb-1 font-bold">ARABIC ORIGINAL SCRIPT:</span>
                    {currentSlideData.godfatherScriptAr}
                  </div>
                )}
              </div>
            ) : (
              <div className="p-4 sm:p-5 rounded-2xl bg-[#020617]/80 border border-slate-800/80 shadow-inner relative">
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                  "{isArabic ? currentSlideData.quoteAr : currentSlideData.quoteEn}"
                </p>
              </div>
            )}
          </div>

          {/* Key Strategic Bullets & Metric Highlight */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            {/* Left 2 Cols: Bullets */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-mono font-bold text-[#00d2ff] uppercase tracking-wider">
                {isArabic ? 'النقاط الاستراتيجية والتقنية البارزة:' : 'KEY STRATEGIC & TECHNICAL HIGHLIGHTS:'}
              </h4>
              <div className="space-y-2.5">
                {(isArabic ? currentSlideData.bulletsAr : currentSlideData.bulletsEn).map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 leading-relaxed font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Hero Metric Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-950/60 via-[#0b1120] to-cyan-950/40 border border-[#00d2ff]/40 text-center space-y-2 shadow-[0_0_25px_rgba(0,210,255,0.15)] flex flex-col justify-center items-center min-h-[160px]">
              <span className="text-3xl sm:text-4xl font-black text-[#00d2ff] font-mono tracking-tight drop-shadow-[0_0_12px_#00d2ff]">
                {currentSlideData.metricVal}
              </span>
              <span className="text-xs font-mono text-slate-300 leading-tight">
                {isArabic ? currentSlideData.metricLabelAr : currentSlideData.metricLabelEn}
              </span>
            </div>

          </div>

          {/* Cinema / Falcon Hologram 8K Showcase Screen (Replicating User's Video & Image) */}
          <div className="rounded-2xl border border-cyan-500/40 bg-[#020617] overflow-hidden shadow-[0_0_30px_rgba(0,210,255,0.2)]">
            
            {/* Stage Bar */}
            <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-cyan-300">
                <Film className="w-3.5 h-3.5 text-[#00d2ff]" />
                <span className="font-bold">SHAHEEN CINEMA HQ • UNREAL 8K CORE</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/40">
                HD 1080P • ACTIVE ARBITRAGE
              </span>
            </div>

            {/* Video / Visual Simulation Canvas */}
            <div className="relative aspect-video sm:aspect-[21/9] bg-gradient-to-br from-[#020617] via-[#0b1528] to-[#020617] flex items-center justify-center p-6 overflow-hidden">
              
              {/* Background Trading Grids & Hologram Charts */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.15)_0%,transparent_70%)] pointer-events-none" />
              
              {/* Center Holographic Falcon & Trading Engine */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="transform hover:scale-105 transition-transform duration-500">
                  <CyberFalconLogo size="hero" glow={true} />
                </div>
                
                <div className="space-y-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-950/80 border border-[#00d2ff]/60 text-cyan-300 text-xs font-mono font-bold tracking-widest shadow-[0_0_15px_rgba(0,210,255,0.4)]">
                    HIGH-FREQUENCY SCRIPT DEFENSE & WATERMARK ARBITRAGE
                  </span>
                  <p className="text-[11px] text-slate-400 font-mono">
                    SHAHEEN APEX AI • REAL-TIME CYBERNETIC DETECTION
                  </p>
                </div>
              </div>

              {/* Hologram Floating Stats Boxes */}
              <div className="absolute top-4 left-4 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-300 hidden sm:block">
                <span className="text-[#00d2ff] font-bold block">STATUS: ONLINE</span>
                <span>CIPHER: HMAC-256</span>
                <br />
                <span>INTEGRITY: 100% COURT SEALED</span>
              </div>

              <div className="absolute top-4 right-4 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-300 hidden sm:block text-end">
                <span className="text-amber-400 font-bold block">XPRIZE SUBMISSION</span>
                <span>BUILD WITH GEMINI</span>
                <br />
                <span>TOP 100 RECOGNIZED</span>
              </div>

            </div>

          </div>

          {/* Slide Navigation Pagination & Arrows */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            
            {/* Prev Button */}
            <button
              onClick={handlePrevSlide}
              disabled={currentSlide === 1}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{isArabic ? 'الشريحة السابقة' : 'Previous Slide'}</span>
            </button>

            {/* Slide Quick Number Pills */}
            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              {slides.map((s) => (
                <button
                  key={s.num}
                  onClick={() => {
                    setCurrentSlide(s.num);
                    if (isNarrating) {
                      window.speechSynthesis.cancel();
                      setIsNarrating(false);
                    }
                  }}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    currentSlide === s.num
                      ? 'bg-[#00d2ff] text-slate-950 shadow-[0_0_12px_#00d2ff]'
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {s.num}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextSlide}
              disabled={currentSlide === slides.length}
              className="px-4 py-2 rounded-xl bg-[#00d2ff] hover:bg-[#38bdf8] disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 text-xs font-mono font-black flex items-center gap-1.5 transition-colors cursor-pointer shadow-[0_0_15px_rgba(0,210,255,0.4)]"
            >
              <span>{isArabic ? 'الشريحة التالية' : 'Next Slide'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>

        </div>
      )}

      {/* 3. All 10 Slides Grid View when switched */}
      {activeTab === 'all' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {slides.map((s) => (
            <div
              key={s.num}
              onClick={() => {
                setCurrentSlide(s.num);
                setActiveTab('interactive');
              }}
              className="bg-[#0f172a] border border-[#1e293b] hover:border-[#00d2ff] rounded-2xl p-6 space-y-3 transition-all duration-300 hover:-translate-y-1 shadow-xl cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-blue-950 text-[#00d2ff] border border-[#00d2ff]/40 font-bold">
                  SLIDE {s.num} / 12
                </span>
                <span className="text-slate-400">{s.tag}</span>
              </div>
              <h4 className="text-base font-bold text-white leading-snug">
                {isArabic ? s.titleAr : s.titleEn}
              </h4>
              <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                {isArabic ? s.quoteAr : s.quoteEn}
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#00d2ff]">
                <span>{s.metricVal}</span>
                <span className="text-slate-400 hover:text-white flex items-center gap-1">
                  {isArabic ? 'عرض تفاعلي' : 'View Slide'} &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. Google Developer Badges & Founder Trust Footer Card */}
      <div className="bg-[#0b1120] border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center font-mono font-bold text-amber-400">
            YC
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white">Founder Credentials & Certifications</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-400 font-mono font-bold">
                VERIFIED
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Registered Founder (Y Combinator) • Certified Google Software Engineer • Documented OSI Member (91-2037395)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-slate-400">Google Developer Badge:</span>
          <span className="px-2.5 py-1 rounded-lg bg-blue-950 text-cyan-300 border border-cyan-500/40 font-bold">
            Gemini Enterprise Agent Ready
          </span>
        </div>
      </div>

    </div>
  );
};
