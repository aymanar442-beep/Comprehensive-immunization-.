import React, { useState, useEffect, useRef } from 'react';
import { AppLanguage } from '../types';
import { 
  Play, Pause, UploadCloud, Film, Video, Star, DollarSign, Heart, 
  MessageSquare, Share2, ShieldCheck, CheckCircle2, Award, Users, 
  Send, FileText, Search, Sparkles, Filter, Eye, Check, X, Clock,
  Briefcase, ThumbsUp, AlertTriangle, Download, Landmark, Zap, Gift,
  Layers, Volume2, VolumeX, ChevronRight, UserPlus, Compass
} from 'lucide-react';

// Import 4K Cinematic Visuals for Previews
import talentCastingImg from '../assets/images/previz_talent_casting_1788142683518.jpg';
import directorShot1 from '../assets/images/previz_director_shot1_1788140643387.jpg';
import directorShot2 from '../assets/images/previz_director_shot2_1788140656689.jpg';
import directorShot3 from '../assets/images/previz_director_shot3_1788140671272.jpg';
import writerShot1 from '../assets/images/previz_writer_shot1_1788140683719.jpg';
import writerShot2 from '../assets/images/previz_writer_shot2_1788140699132.jpg';
import producerShot1 from '../assets/images/previz_producer_shot1_1788140712602.jpg';
import tunnelChaseImg from '../assets/images/previz_tunnel_chase_1788140740139.jpg';
import leakTurnaroundImg from '../assets/images/previz_leak_turnaround_1788142669087.jpg';
import endowmentImg from '../assets/images/previz_endowment_future_1788141170073.jpg';

interface CinemaTubeHubProps {
  lang: AppLanguage;
}

export interface CinemaVideo {
  id: string;
  titleAr: string;
  titleEn: string;
  creatorName: string;
  creatorRoleAr: string;
  creatorRoleEn: string;
  category: 'writer_pitch' | 'acting_audition' | 'short_film' | 'directing_pilot' | 'voice_acting' | 'vfx_stunt';
  thumbnail: string;
  duration: string;
  views: number;
  likes: number;
  tipsTotal: number;
  uploadedTimeAgoAr: string;
  uploadedTimeAgoEn: string;
  synopsisAr: string;
  synopsisEn: string;
  scriptExcerptAr: string;
  scriptExcerptEn: string;
  askingBudget: number;
  isObscureTalent: boolean; // علامة كاتب أو موهبة مغمورة للحصول على الأولوية والدعم
  hasContractOffers: number;
  rating: number;
  verifiedProtection: boolean;
  tags: string[];
}

export const CinemaTubeHub: React.FC<CinemaTubeHubProps> = ({ lang }) => {
  // Initial rich sample videos representing obscure writers, aspiring actors, indie directors, stunt coordinators
  const initialVideos: CinemaVideo[] = [
    {
      id: 'vid-1',
      titleAr: 'مسودة "حارس الظلال" - سيناريو إثارة وغموض يبحث عن منتج',
      titleEn: '"Shadow Keeper" - Mystery Thriller Screenplay Pitch Looking for Producer',
      creatorName: 'سارة الزهراني (كاتبة سيناريو مغمورة)',
      creatorRoleAr: 'كاتبة سيناريو صاعدة • لم تنشر أعمالها بعد',
      creatorRoleEn: 'Emerging Screenwriter • First-time Creator',
      category: 'writer_pitch',
      thumbnail: writerShot1,
      duration: '03:45',
      views: 14200,
      likes: 890,
      tipsTotal: 650,
      uploadedTimeAgoAr: 'منذ يومين',
      uploadedTimeAgoEn: '2 days ago',
      synopsisAr: 'في شوارع مدينة الرياض القديمة، يكتشف مهندس ترميم وثائق سرية تكشف أن جريمة غامضة وقعت قبل 40 عاماً لم تكن حادثاً بل مؤامرة سيادية. قصة محبوكة بنظام الـ 3 فصول جاهزة للتصوير.',
      synopsisEn: 'In old Riyadh, a restoration architect discovers confidential blueprints revealing a 40-year-old cold case was an orchestrated sovereign heist. Ready 3-act feature screenplay.',
      scriptExcerptAr: 'المشهد 4: ليل - داخلي / الأرشيف القديم.\nخالد (35) يمسك بالمخطوطة بيديْن ترتجفان. الضوء الخافت يكشف عن خيط أحرف مشفرة بين الأسطر:\nخالد: "لم تكن صدفة أبداً... كانوا يعلمون أننا سنصل إلى هنا بعد أربعين عاماً!".',
      scriptExcerptEn: 'SCENE 4: INT. OLD VAULT - NIGHT.\nKhaled (35) holds the blueprint with trembling hands. Dim ambient light reveals encrypted cipher lines:\nKHALED: "It was never an accident... They knew we would uncover this 40 years later!".',
      askingBudget: 3500, // سعر بيع السيناريو للإنتاج
      isObscureTalent: true,
      hasContractOffers: 2,
      rating: 4.9,
      verifiedProtection: true,
      tags: ['سيناريو', 'غموض', 'كاتب مغمور', 'جاهز للإنتاج', 'عقود سريعة']
    },
    {
      id: 'vid-2',
      titleAr: 'تجرِبة أداء مونولوج تراجيدي - دور البطولة لفيلم أكشن نفسي',
      titleEn: 'Tragic Monologue Audition - Lead Role Reel for Psychological Action Feature',
      creatorName: 'فهد المنصور (ممثل صاعد)',
      creatorRoleAr: 'ممثل مسرحي وسينمائي يبحث عن فرصة احترافية',
      creatorRoleEn: 'Aspiring Lead Actor seeking studio debut',
      category: 'acting_audition',
      thumbnail: talentCastingImg,
      duration: '02:15',
      views: 28400,
      likes: 1940,
      tipsTotal: 1200,
      uploadedTimeAgoAr: 'منذ 5 ساعات',
      uploadedTimeAgoEn: '5 hours ago',
      synopsisAr: 'مونولوج انفعالي مدته دقيقتان يجسد شخصية محقق شرطة يواجه قاتلاً متسلسلاً يعلم سر عائلته. أداء صوتي وبصري مشحون بالتوتر مع تحولات عاطفية حادة.',
      synopsisEn: 'High-intensity 2-minute dramatic monologue playing a police detective confronting a mastermind who holds his family hostage. Dynamic range and raw emotion.',
      scriptExcerptAr: 'المحقق طارق (بانفعال ممسوك): "أنت تظن أنك كسرتني لأنك كشفت ماضي عائلتي؟ الحقيقة أنك حررتني من الخوف الذي كان يقيدني... والآن ليس لدي ما أخسره!".',
      scriptExcerptEn: 'DETECTIVE TARIQ: "You think you broke me by exposing my past? The truth is, you freed me from the fear that chained me... and now I have nothing to lose!".',
      askingBudget: 5000,
      isObscureTalent: true,
      hasContractOffers: 4,
      rating: 4.8,
      verifiedProtection: true,
      tags: ['تمثيل', 'كاستينغ', 'مونولوج', 'بطل رئيسي', 'موهبة جديدة']
    },
    {
      id: 'vid-3',
      titleAr: 'فيلم قصير مستقل: "نبض الإسفلت" - نموذج إخراجي ميزانية منخفضة',
      titleEn: 'Indie Short: "Asphalt Pulse" - Micro-Budget Directing Showcase',
      creatorName: 'طارق الدوسري (مخرج مستقل)',
      creatorRoleAr: 'مخرج ومصور سينمائي يبحث عن منتج لفيلمه الطويل',
      creatorRoleEn: 'Indie Director seeking co-producer for feature film',
      category: 'directing_pilot',
      thumbnail: tunnelChaseImg,
      duration: '06:30',
      views: 35100,
      likes: 2420,
      tipsTotal: 2150,
      uploadedTimeAgoAr: 'منذ أسبوع',
      uploadedTimeAgoEn: '1 week ago',
      synopsisAr: 'مطاردة ليلية تم تصويرها بكاميرا واحدة وميزانية لا تتجاوز ألفي دولار، تثبت قدرة المخرج على خلق كادرات سينمائية عالمية وإيقاع تصاعدي متسارع بأقل الإمكانيات.',
      synopsisEn: 'A high-octane night chase shot on a single lens with a $2,000 micro-budget, demonstrating top-tier kinetic blocking and Hollywood-grade lighting on low cost.',
      scriptExcerptAr: 'لقطة 12: تتبع ديناميكي منخفض (Low Angle Dolly).\nالسيارة السوداء تنعطف بحرقة إطارات نحو نفق مظلم، بينما تومض أضواء النيون كنبضات قلب محتضر.',
      scriptExcerptEn: 'SHOT 12: Low Angle Kinetic Dolly.\nThe black sedan drifts sharply into the subterranean tunnel as neon amber reflections shimmer like a dying heartbeat.',
      askingBudget: 25000,
      isObscureTalent: true,
      hasContractOffers: 3,
      rating: 5.0,
      verifiedProtection: true,
      tags: ['إخراج', 'مطاردات', 'فيلم قصير', 'ميزانية منخفضة', 'تصوير سينمائي']
    },
    {
      id: 'vid-4',
      titleAr: 'سيناريو خيال علمي تاريخي: "صانع الأندلس" - مشروع مسلسل جاهز',
      titleEn: 'Historical Sci-Fi Screenplay: "The Clockwork Artisan" - TV Pilot',
      creatorName: 'ياسين الأندلسي (كاتب هاوٍ ومخترع قصص)',
      creatorRoleAr: 'مؤلف روايات وسيناريوهات لم يجد فرصة للتواصل مع المنتجين',
      creatorRoleEn: 'Unpublished novelist & screenwriter connecting directly to studios',
      category: 'writer_pitch',
      thumbnail: writerShot2,
      duration: '04:10',
      views: 18900,
      likes: 1250,
      tipsTotal: 980,
      uploadedTimeAgoAr: 'منذ 3 أيام',
      uploadedTimeAgoEn: '3 days ago',
      synopsisAr: 'في قرطبة القرن العاشر، عالم فلكي يصنع ساعة ميكانيكية تستبق الكوارث، ليجد نفسه مطارداً من قوى تسعى لامتلاك المستقبل. سيناريو تفصيلي لـ 8 حلقات.',
      synopsisEn: 'In 10th-century Cordoba, an astronomer constructs a celestial mechanism capable of anticipating seismic disasters, sparking an empire-wide pursuit.',
      scriptExcerptAr: 'المشهد 1: داخلي / مرصد قرطبة.\nعباس ينظر عبر العدسة الأسطرلابية. التروس النحاسية تدور بتناغم ساحر.\nعباس: "الزمن ليس نهراً يجري في اتجاه واحد... إنه فلكٌ يعيد رسم أقداره لمن يفهم حسابه".',
      scriptExcerptEn: 'SCENE 1: INT. CORDOBA OBSERVATORY.\nAbbas peers through the astrolabe. Brass gears rotate in mesmerizing harmony:\nABBAS: "Time is not a one-way river... it is an orbital compass that yields only to those who master its calculus".',
      askingBudget: 8000,
      isObscureTalent: true,
      hasContractOffers: 1,
      rating: 4.9,
      verifiedProtection: true,
      tags: ['خيال علمي', 'تاريخي', 'مسلسل', 'كاتب مغمور', 'سيناريو متكامل']
    },
    {
      id: 'vid-5',
      titleAr: 'استعراض أداء صوتي ودبلجة سينمائية - 5 أصوات لشخصيات مختلفة',
      titleEn: 'Cinematic Voice Reel - 5 Dynamic Character Voices for Animation & Drama',
      creatorName: 'ريم الهاشمي (فنانة أداء صوتي)',
      creatorRoleAr: 'مؤدية صوتية تبحث عن أعمال دبلجة وأفلام أنيميشن وسينما',
      creatorRoleEn: 'Voice Talent seeking feature animation & voiceover contracts',
      category: 'voice_acting',
      thumbnail: leakTurnaroundImg,
      duration: '01:50',
      views: 11200,
      likes: 920,
      tipsTotal: 480,
      uploadedTimeAgoAr: 'منذ 4 أيام',
      uploadedTimeAgoEn: '4 days ago',
      synopsisAr: 'استعراض مبهر لخمس طبقات صوتية: الراوية الحكيمة، الساحرة الشريرة، البطلة الشابة، الطفل الصغير، وصوت الذكاء الاصطناعي السيادي.',
      synopsisEn: 'Showcase of 5 character voice profiles: Wise Historian, Villainous Queen, Heroic Lead, Child, and Cybernetic AI.',
      scriptExcerptAr: 'الصوت 1 (الذكاء الاصطناعي): "تم تفعيل بروتوكول كاسل غيت... لا تراجع عن أمر السيادة!".\nالصوت 2 (الساحرة): "تظنون أنكم أطفأتم شعلتي؟ أنا الظلام الذي يبتلع نوركم!".',
      scriptExcerptEn: 'VOICE 1 (Cyber AI): "Castle Gate Protocol engaged... Sovereignty cannot be compromised!".\nVOICE 2 (Witch): "You thought you extinguished my ember? I am the midnight that swallows your dawn!".',
      askingBudget: 1200,
      isObscureTalent: true,
      hasContractOffers: 2,
      rating: 4.7,
      verifiedProtection: true,
      tags: ['دوبلاج', 'أداء صوتي', 'أنيميشن', 'موهبة واعدة', 'عقود سريعة']
    },
    {
      id: 'vid-6',
      titleAr: 'استعراض لقطات أكشن ومطاردات واقعية بدون مؤثرات حاسوبية',
      titleEn: 'Practical Action & Stunt Choreography Reel - Zero CGI Showcase',
      creatorName: 'كريم عساف وفريقه (فريق مجازفات مستقل)',
      creatorRoleAr: 'منسق مجازفات ومؤدي حركات خطيرة يبحث عن تعاقدات أفلام',
      creatorRoleEn: 'Stunt Coordinator & Action Choreographer for Indie & Studio Films',
      category: 'vfx_stunt',
      thumbnail: directorShot3,
      duration: '03:15',
      views: 42000,
      likes: 3100,
      tipsTotal: 1800,
      uploadedTimeAgoAr: 'منذ أسبوعين',
      uploadedTimeAgoEn: '2 weeks ago',
      synopsisAr: 'حركات قتال شوارع، قفز من مبانٍ، وسقوط مدروس تم تنفيذه بأعلى معايير الأمان الدولية لإثبات قدرة الفريق على تنفيذ معارك سينمائية حابسة للأنفاس.',
      synopsisEn: 'Martial arts combat, rooftop leaps, and precision falls executed to international safety standards, ready for hire on action sets.',
      scriptExcerptAr: 'القتال رقم 3: مواجهة 1 ضد 4 في ممر ضيق مع استخدام أدوات البيئة المحيطة لتشتيت الخصوم.',
      scriptExcerptEn: 'FIGHT CHOREOGRAPHY #3: 1 vs 4 corridor encounter utilizing environmental props and rapid counter-strikes.',
      askingBudget: 6000,
      isObscureTalent: false,
      hasContractOffers: 5,
      rating: 4.9,
      verifiedProtection: true,
      tags: ['أكشن', 'مجازفات', 'قتال سينمائي', 'فريق جاهز', 'تصوير فوري']
    }
  ];

  const [videos, setVideos] = useState<CinemaVideo[]>(initialVideos);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeVideo, setActiveVideo] = useState<CinemaVideo>(initialVideos[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeVideoTime, setActiveVideoTime] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Community Comments State
  const [comments, setComments] = useState<Record<string, Array<{ id: string; author: string; role: string; text: string; timeAgo: string; isProducer: boolean }>>>({
    'vid-1': [
      { id: 'c1', author: 'المنتج عبد المحسن الرشيد', role: 'منتج في أستوديو سينمائي', text: 'حبكة "حارس الظلال" ممتازة جداً والمشهد الرابع كتب بأسلوب تشويقي هوليوودي. أرسلت لك عرض شراء مبدئي للسيناريو عبر المنظومة.', timeAgo: 'منذ ساعتين', isProducer: true },
      { id: 'c2', author: 'المخرج فادي كنعان', role: 'مخرج مستقل', text: 'سيناريو عبقري وبسيط التكلفة! أنصحك يا سارة بالتمسك بهذا العمل وتطوير النهاية.', timeAgo: 'منذ 4 ساعات', isProducer: false }
    ],
    'vid-2': [
      { id: 'c3', author: 'وكالة كاستينغ الشرق', role: 'مديرة تجارب أداء', text: 'نبرة الصوت وتحول التعبيرات في الدقيقة 1:20 استثنائية! لدينا فيلم سينمائي قادم ونريدك للدور المساند.', timeAgo: 'منذ ساعة', isProducer: true }
    ]
  });
  const [newCommentText, setNewCommentText] = useState<string>('');

  // Modals
  const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);
  const [isContractModalOpen, setIsContractModalOpen] = useState<boolean>(false);
  const [isTipModalOpen, setIsTipModalOpen] = useState<boolean>(false);
  const [isScriptModalOpen, setIsScriptModalOpen] = useState<boolean>(false);
  const [isGrantModalOpen, setIsGrantModalOpen] = useState<boolean>(false);

  // New Upload Form State
  const [uploadTitle, setUploadTitle] = useState<string>('');
  const [uploadCreatorName, setUploadCreatorName] = useState<string>('');
  const [uploadCategory, setUploadCategory] = useState<CinemaVideo['category']>('writer_pitch');
  const [uploadRole, setUploadRole] = useState<string>('');
  const [uploadSynopsis, setUploadSynopsis] = useState<string>('');
  const [uploadScriptExcerpt, setUploadScriptExcerpt] = useState<string>('');
  const [uploadBudget, setUploadBudget] = useState<number>(3000);
  const [uploadIsObscure, setUploadIsObscure] = useState<boolean>(true);
  const [uploadTags, setUploadTags] = useState<string>('سيناريو, موهبة جديدة, جاهز للإنتاج');
  const [uploadedFileName, setUploadedFileName] = useState<string>('');

  // Contract Offer Form State
  const [offerProducerName, setOfferProducerName] = useState<string>('أستوديوهات الصقر الذهبي للإنتاج');
  const [offerProducerEmail, setOfferProducerEmail] = useState<string>('production@goldenfalcon.film');
  const [offerType, setOfferType] = useState<string>('شراء السيناريو بالكامل (Full Acquisition)');
  const [offerAmount, setOfferAmount] = useState<number>(activeVideo.askingBudget || 5000);
  const [offerRoyaltyPercent, setOfferRoyaltyPercent] = useState<number>(5);
  const [offerTerms, setOfferTerms] = useState<string>('تلتزم الشركة المنتجة ببدء التحضيرات خلال 6 أشهر مع حفظ اسم الكاتب بالكامل وتوثيق العقد عبر بوابة شاهين.');

  // Direct Tip State
  const [tipAmount, setTipAmount] = useState<number>(50);
  const [tipSenderName, setTipSenderName] = useState<string>('داعم للفن السابع');
  const [tipMessage, setTipMessage] = useState<string>('عملك ملهم جداً ويستحق الوصول للعالمية! واصل إبداعك.');

  // Notification Toast
  const [notification, setNotification] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 5000);
  };

  // Canvas Cinema Player Animated Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    const img = new Image();
    img.src = activeVideo.thumbnail;

    const render = () => {
      frame++;
      const w = canvas.width;
      const h = canvas.height;

      // Draw background/poster image
      if (img.complete) {
        ctx.save();
        const zoom = isPlaying ? 1 + (frame % 400) * 0.0002 : 1;
        const panX = isPlaying ? Math.sin(frame * 0.02) * 2 : 0;
        ctx.translate(w / 2 + panX, h / 2);
        ctx.scale(zoom, zoom);
        ctx.drawImage(img, -w / 2, -h / 2, w, h);
        ctx.restore();
      } else {
        ctx.fillStyle = '#090d16';
        ctx.fillRect(0, 0, w, h);
      }

      // Anamorphic Cinema Letterbox
      const barH = 36;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, w, barH);
      ctx.fillRect(0, h - barH, w, barH);

      // Top YouTube-Cinema Overlay
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(20, 18, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(isPlaying ? 'PLAYING NOW ● 4K OPEN STREAM' : 'PAUSED ● FREE TALENT SHOWCASE', 32, 22);

      ctx.fillStyle = '#00d2ff';
      ctx.font = 'bold 10px monospace';
      ctx.fillText(`SHAHEEN S-WCM ZERO PROTECTED • ${activeVideo.creatorName}`, w - 340, 22);

      // Center Play Indicator if Paused
      if (!isPlaying) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
        ctx.fillRect(0, 0, w, h);

        ctx.beginPath();
        ctx.arc(w / 2, h / 2, 38, 0, Math.PI * 2);
        ctx.fillStyle = '#00d2ff';
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(w / 2 - 12, h / 2 - 18);
        ctx.lineTo(w / 2 + 20, h / 2);
        ctx.lineTo(w / 2 - 12, h / 2 + 18);
        ctx.closePath();
        ctx.fillStyle = '#020617';
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(lang === 'ar' ? 'انقر لتشغيل الفيديو واستعراض العمل مجاناً' : 'Click to Play Reel & Pitch for Free', w / 2, h / 2 + 65);
        ctx.textAlign = 'start';
      }

      // Bottom Video Ribbon
      ctx.fillStyle = 'rgba(2, 6, 23, 0.92)';
      ctx.fillRect(10, h - 85, w - 20, 44);
      ctx.strokeStyle = '#00d2ff';
      ctx.lineWidth = 1;
      ctx.strokeRect(10, h - 85, w - 20, 44);

      ctx.fillStyle = '#00d2ff';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(lang === 'ar' ? activeVideo.titleAr : activeVideo.titleEn, 22, h - 67);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '10.5px sans-serif';
      const shortDesc = (lang === 'ar' ? activeVideo.synopsisAr : activeVideo.synopsisEn).substring(0, 95) + '...';
      ctx.fillText(shortDesc, 22, h - 49);

      animationRef.current = requestAnimationFrame(render);
    };

    render();
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [activeVideo, isPlaying, lang]);

  // Video switch handler
  const handleSelectVideo = (video: CinemaVideo) => {
    setActiveVideo(video);
    setIsPlaying(true);
    setOfferAmount(video.askingBudget || 5000);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Like video handler
  const handleLikeVideo = (id: string) => {
    setVideos((prev) =>
      prev.map((v) => (v.id === id ? { ...v, likes: v.likes + 1 } : v))
    );
    if (activeVideo.id === id) {
      setActiveVideo((prev) => ({ ...prev, likes: prev.likes + 1 }));
    }
    showNotification(lang === 'ar' ? 'شكراً لدعمك الموهبة! تم تسجيل إعجابك وتصعيد الفيديو في الرادار.' : 'Liked! You boosted this talent in the sovereign feed.');
  };

  // Add Community Comment
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment = {
      id: `c-${Date.now()}`,
      author: lang === 'ar' ? 'صانع سينما / منتج زائر' : 'Visiting Cinema Producer / Filmmaker',
      role: lang === 'ar' ? 'مستكشف مواهب معتمد' : 'Verified Talent Scout',
      text: newCommentText,
      timeAgo: lang === 'ar' ? 'الآن' : 'Just now',
      isProducer: true
    };

    setComments((prev) => ({
      ...prev,
      [activeVideo.id]: [newComment, ...(prev[activeVideo.id] || [])]
    }));

    setNewCommentText('');
    showNotification(lang === 'ar' ? 'تم نشر تعليقك ودعمك للمبدع بنجاح!' : 'Comment posted successfully!');
  };

  // Submit Free Upload Video
  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadTitle.trim() || !uploadCreatorName.trim()) {
      alert(lang === 'ar' ? 'يرجى كتابة عنوان العمل واسم المبدع' : 'Please provide Title and Creator Name');
      return;
    }

    const newVid: CinemaVideo = {
      id: `vid-${Date.now()}`,
      titleAr: uploadTitle,
      titleEn: uploadTitle,
      creatorName: uploadCreatorName,
      creatorRoleAr: uploadRole || (lang === 'ar' ? 'كاتب سيناريو وموهبة صاعدة' : 'Emerging Screenwriter & Talent'),
      creatorRoleEn: uploadRole || 'Emerging Screenwriter & Talent',
      category: uploadCategory,
      thumbnail: uploadCategory === 'writer_pitch' ? writerShot1 : uploadCategory === 'acting_audition' ? talentCastingImg : directorShot2,
      duration: '03:30',
      views: 1,
      likes: 1,
      tipsTotal: 0,
      uploadedTimeAgoAr: 'الآن',
      uploadedTimeAgoEn: 'Just now',
      synopsisAr: uploadSynopsis || 'عمل إبداعي جديد تم رفعه مجاناً عبر منصة شاهين سينما تيوب للوصول إلى المنتجين والمخرجين.',
      synopsisEn: uploadSynopsis || 'New creative work uploaded freely on Shaheen CinemaTube to connect directly with producers and directors.',
      scriptExcerptAr: uploadScriptExcerpt || 'المشهد الأول: بداية القصة... تم حفظ النص ببصمة S-WCM الصفرية غير القابلة للسرقة.',
      scriptExcerptEn: uploadScriptExcerpt || 'SCENE 1: Opening scene... protected with S-WCM zero-width cryptographic seal.',
      askingBudget: Number(uploadBudget) || 2000,
      isObscureTalent: uploadIsObscure,
      hasContractOffers: 0,
      rating: 5.0,
      verifiedProtection: true,
      tags: uploadTags.split(',').map((t) => t.trim())
    };

    setVideos([newVid, ...videos]);
    setActiveVideo(newVid);
    setIsUploadModalOpen(false);
    showNotification(lang === 'ar' ? '🎉 ألف مبروك! تم رفع عملك مجاناً بالكامل وتأمينه ببصمة S-WCM وهو متاح الآن لكل المنتجين والمخرجين!' : '🎉 Congratulations! Your reel & pitch are live for free and secured with S-WCM for all producers to see!');
  };

  // Submit Producer Contract Offer
  const handleContractSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVideos((prev) =>
      prev.map((v) =>
        v.id === activeVideo.id
          ? { ...v, hasContractOffers: v.hasContractOffers + 1 }
          : v
      )
    );
    setActiveVideo((prev) => ({ ...prev, hasContractOffers: prev.hasContractOffers + 1 }));
    setIsContractModalOpen(false);

    // Auto-generate downloadable contract summary
    const contractText = `
================================================================================
📜 وثيقة عرض التعاقد الرسمي والشراء المباشر عبر منصة شاهين سينما تيوب 📜
الرقم المرجعي السيادي: SHAHEEN-DEAL-${Date.now().toString().slice(-6)}
المشروع المستهدف: ${lang === 'ar' ? activeVideo.titleAr : activeVideo.titleEn}
المبدع المستحق: ${activeVideo.creatorName} (${lang === 'ar' ? activeVideo.creatorRoleAr : activeVideo.creatorRoleEn})
الجهة المنتجة / المخرج: ${offerProducerName} (${offerProducerEmail})
نوع العقد: ${offerType}
المبلغ المالي المعروض: $${offerAmount.toLocaleString()} دولار أمريكي نقداً
نسبة الأرباح الإضافية: ${offerRoyaltyPercent}% من إجمالي شباك التذاكر
شروط العرض: ${offerTerms}
حالة الحماية: مؤمن 100% ببصمة S-WCM الصفرية تحت إشراف المهندس أيمن العريشي
================================================================================
    `.trim();

    const blob = new Blob([contractText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SHAHEEN_Contract_Offer_${activeVideo.creatorName.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showNotification(lang === 'ar' ? `تم إرسال عرض التعاقد بمبلغ $${offerAmount.toLocaleString()} وتحميل نسخة العقد الرسمية!` : `Contract offer of $${offerAmount.toLocaleString()} dispatched and contract dossier downloaded!`);
  };

  // Submit Direct Tip
  const handleTipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVideos((prev) =>
      prev.map((v) =>
        v.id === activeVideo.id ? { ...v, tipsTotal: v.tipsTotal + tipAmount } : v
      )
    );
    setActiveVideo((prev) => ({ ...prev, tipsTotal: prev.tipsTotal + tipAmount }));
    setIsTipModalOpen(false);
    showNotification(lang === 'ar' ? `جزاك الله خيراً! تم تحويل $${tipAmount} مباشرة إلى المحفظة الإبداعية لـ ${activeVideo.creatorName}.` : `Success! $${tipAmount} sent directly to ${activeVideo.creatorName}'s creative wallet.`);
  };

  // Filter videos
  const filteredVideos = videos.filter((v) => {
    const matchesCategory =
      selectedCategory === 'all'
        ? true
        : selectedCategory === 'obscure'
        ? v.isObscureTalent
        : v.category === selectedCategory;

    const matchesSearch =
      searchQuery.trim() === ''
        ? true
        : (v.titleAr + v.titleEn + v.creatorName + v.tags.join(' '))
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-6 space-y-6 text-slate-100 animate-fadeIn">
      
      {/* 1. Sovereign Banner & Welcome Header */}
      <div className="bg-gradient-to-r from-slate-950 via-[#0a1122] to-slate-950 p-5 sm:p-7 rounded-3xl border-2 border-[#00d2ff]/40 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d2ff]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 text-xs font-black flex items-center gap-1.5 shadow-md shadow-red-500/20 animate-pulse">
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>SHAHEEN CINEMA TUBE • 100% FREE</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-xs font-bold flex items-center gap-1">
                <Landmark className="w-3.5 h-3.5" />
                {lang === 'ar' ? 'دخول مجاني للمنتجين والكتّاب والمخرجين' : 'Zero-Fee for Producers, Writers & Directors'}
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                {lang === 'ar' ? 'فرص كسب مالي للكاتب والموهبة المغمورة' : 'Direct Monetization for Obscure Creators'}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
              {lang === 'ar' 
                ? '🎬 منصة شاهين سينما تيوب: يوتيوب السينما المفتوح لدعم الكتّاب والمواهب والمنتجين' 
                : '🎬 SHAHEEN CinemaTube: The Free Sovereign Video & Script Stage for Talent, Writers & Studios'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              {lang === 'ar'
                ? 'منصة حرة ومجانية بالكامل تتيح لكل كاتب مغمور، ممثل، ومخرج صاعد رفع فيديوهاتهم وسيناريوهاتهم لعرضها أمام كبار المنتجين في هوليوود والعالم العربي للتعاقد المباشر والحصول على تمويل وأرباح فورية دون وساطة أو استغلال.'
                : 'A 100% open and free video stage empowering obscure screenwriters, undiscovered actors, and indie directors to upload showreels and scripts directly to global studio producers for instant smart contracts, funding, and revenue.'}
            </p>
          </div>

          {/* Big Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="flex-1 sm:flex-none px-4 py-3 rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-red-500/30 cursor-pointer transform hover:scale-[1.02] transition-all"
            >
              <UploadCloud className="w-5 h-5" />
              <span>{lang === 'ar' ? '📤 ارفع فيديوك أو سيناريوك مجاناً' : '📤 Upload Video / Pitch (Free)'}</span>
            </button>

            <button
              onClick={() => setIsGrantModalOpen(true)}
              className="flex-1 sm:flex-none px-4 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/40 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all"
            >
              <Gift className="w-4 h-4 text-amber-400" />
              <span>{lang === 'ar' ? 'صندوق دعم الكتّاب ($100K)' : 'Endowment Grants ($100K)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="p-3.5 bg-emerald-950 border-2 border-emerald-500 text-emerald-200 text-xs sm:text-sm font-bold rounded-2xl flex items-center justify-between shadow-2xl animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{notification}</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400">VERIFIED ESCROW</span>
        </div>
      )}

      {/* 2. YouTube-Style Interactive Video Player & Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Main Video Cinema Canvas & Controls */}
        <div className="lg:col-span-2 space-y-4">
          
          {/* 4K Canvas Screen */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-cyan-500/60 bg-black shadow-2xl shadow-cyan-950/70">
            <canvas
              ref={canvasRef}
              width={960}
              height={540}
              className="w-full h-auto block aspect-video cursor-pointer"
              onClick={() => setIsPlaying(!isPlaying)}
            />

            {/* Speaking/Protection Badge Overlay */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-xl bg-black/80 backdrop-blur-md border border-cyan-500/50 text-cyan-300 text-[10px] font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                {lang === 'ar' ? 'محمي ببصمة S-WCM الصفرية' : 'S-WCM Zero Watermarked'}
              </span>
              {activeVideo.isObscureTalent && (
                <span className="px-2.5 py-1 rounded-xl bg-amber-500/90 text-slate-950 text-[10px] font-black flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  {lang === 'ar' ? 'موهبة / كاتب مغمور (أولوية الدعم)' : 'Obscure Creator (Priority)'}
                </span>
              )}
            </div>

            {/* Bottom Playback HUD Bar */}
            <div className="p-3 bg-slate-950/95 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-md shadow-red-600/30"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{isPlaying ? (lang === 'ar' ? 'إيقاف' : 'Pause') : (lang === 'ar' ? 'تشغيل العرض' : 'Play Video')}</span>
                </button>

                <button
                  onClick={() => handleLikeVideo(activeVideo.id)}
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-rose-400 border border-rose-500/30 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105"
                >
                  <Heart className="w-4 h-4 fill-rose-500/20" />
                  <span>{activeVideo.likes}</span>
                </button>

                <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 px-2 font-mono">
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{activeVideo.views.toLocaleString()} {lang === 'ar' ? 'مشاهدة' : 'views'}</span>
                </div>
              </div>

              {/* Instant Moneymaking & Contract Buttons for this video */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsTipModalOpen(true)}
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/30 cursor-pointer"
                >
                  <DollarSign className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'ادعم المبدع مالياً' : 'Tip Creator'}</span>
                </button>

                <button
                  onClick={() => setIsContractModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/30 cursor-pointer"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>{lang === 'ar' ? '💼 تقديم عرض شراء / عقد' : '💼 Offer Contract'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Active Video Header & Detailed Info Box */}
          <div className="p-5 sm:p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4 shadow-xl">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div className="space-y-1">
                <h2 className="text-base sm:text-xl font-black text-white">
                  {lang === 'ar' ? activeVideo.titleAr : activeVideo.titleEn}
                </h2>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span className="text-cyan-400 font-bold">{activeVideo.creatorName}</span>
                  <span>•</span>
                  <span>{lang === 'ar' ? activeVideo.creatorRoleAr : activeVideo.creatorRoleEn}</span>
                  <span>•</span>
                  <span>{lang === 'ar' ? activeVideo.uploadedTimeAgoAr : activeVideo.uploadedTimeAgoEn}</span>
                </div>
              </div>

              {/* Asking Price & Contract Offers Badge */}
              <div className="flex items-center gap-2">
                <div className="text-right rtl:text-left px-3 py-1.5 bg-slate-900 rounded-2xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">{lang === 'ar' ? 'سعر البيع / الميزانية:' : 'Asking Price:'}</span>
                  <span className="text-sm font-black text-emerald-400">${activeVideo.askingBudget.toLocaleString()}</span>
                </div>
                <div className="text-right rtl:text-left px-3 py-1.5 bg-cyan-950/60 rounded-2xl border border-cyan-500/30">
                  <span className="text-[10px] text-cyan-400 block">{lang === 'ar' ? 'عروض المنتجين:' : 'Studio Bids:'}</span>
                  <span className="text-sm font-black text-white">{activeVideo.hasContractOffers} {lang === 'ar' ? 'عروض' : 'Offers'}</span>
                </div>
              </div>
            </div>

            {/* Synopsis & Summary */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                {lang === 'ar' ? 'ملخص الفكرة والرؤية الدرامية:' : 'Story Synopsis & Vision:'}
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800/80">
                {lang === 'ar' ? activeVideo.synopsisAr : activeVideo.synopsisEn}
              </p>
            </div>

            {/* Script Excerpt Drawer Toggle Button */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={() => setIsScriptModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 text-xs font-bold flex items-center gap-2 cursor-pointer transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>{lang === 'ar' ? '📄 قراءة مشهد من السيناريو المحمي' : '📄 Read Protected Script Excerpt'}</span>
              </button>

              <div className="flex flex-wrap items-center gap-1.5">
                {activeVideo.tags.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 font-mono">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Total Tips & Financial Support Bar */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/40 to-slate-900 border border-amber-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-300 block">
                    {lang === 'ar' ? 'إجمالي الدعم المالي المحول للمبدع:' : 'Total Direct Financial Tips Received:'}
                  </span>
                  <span className="text-sm font-black text-white">${activeVideo.tipsTotal.toLocaleString()} USD</span>
                </div>
              </div>

              <button
                onClick={() => setIsTipModalOpen(true)}
                className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black cursor-pointer shadow-md shadow-amber-500/20"
              >
                {lang === 'ar' ? '+ إرسال دعم الآن' : '+ Send Tip'}
              </button>
            </div>

            {/* Comments & Feedback Section */}
            <div className="space-y-3 pt-3 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-black text-white">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span>{lang === 'ar' ? 'تعليقات المنتجين والمخرجين والمجتمع:' : 'Producers & Community Feedback:'}</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  {(comments[activeVideo.id] || []).length} {lang === 'ar' ? 'تعليق' : 'comments'}
                </span>
              </div>

              {/* New Comment Input */}
              <form onSubmit={handleAddComment} className="flex gap-2">
                <input
                  type="text"
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  placeholder={lang === 'ar' ? 'اكتب تعليقاً أو رأياً إنتاجياً لدعم هذا المبدع...' : 'Add a producer note or supportive review...'}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs flex items-center gap-1 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'إرسال' : 'Post'}</span>
                </button>
              </form>

              {/* Comments List */}
              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {(comments[activeVideo.id] || []).map((c) => (
                  <div key={c.id} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">{c.author}</span>
                        {c.isProducer && (
                          <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[9px] font-bold">
                            {lang === 'ar' ? 'منتج معتمد' : 'Verified Producer'}
                          </span>
                        )}
                        <span className="text-[10px] text-slate-500">({c.role})</span>
                      </div>
                      <span className="text-[10px] text-slate-500">{c.timeAgo}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Right Col: Video Categories & Video Feed Playlist */}
        <div className="space-y-4">
          
          {/* Search & Category Pills Bar */}
          <div className="p-4 rounded-3xl bg-slate-950 border border-slate-800 space-y-3 shadow-xl">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 rtl:right-3 rtl:left-auto top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'ar' ? 'ابحث عن نص، ممثل، مخرج، تصنيف...' : 'Search scripts, actors, directors...'}
                className="w-full pl-9 rtl:pr-9 rtl:pl-3 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', labelAr: '🌟 الكل', labelEn: 'All' },
                { id: 'obscure', labelAr: '👑 كتّاب ومواهب مغمورة', labelEn: 'Obscure Talent' },
                { id: 'writer_pitch', labelAr: '✍️ سيناريوهات للبيع', labelEn: 'Screenplay Pitches' },
                { id: 'acting_audition', labelAr: '🎭 كاستينغ وتمثيل', labelEn: 'Audition Reels' },
                { id: 'directing_pilot', labelAr: '🎬 أفلام مخرجين', labelEn: 'Directing Pilots' },
                { id: 'voice_acting', labelAr: '🎙️ أداء صوتي', labelEn: 'Voice Talent' },
                { id: 'vfx_stunt', labelAr: '💥 مجازفات وأكشن', labelEn: 'Stunt & VFX' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-bold cursor-pointer transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-cyan-500 text-slate-950 font-black shadow-md shadow-cyan-500/30'
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {lang === 'ar' ? cat.labelAr : cat.labelEn}
                </button>
              ))}
            </div>

          </div>

          {/* Video Feed Playlist Cards */}
          <div className="space-y-3 max-h-[750px] overflow-y-auto pr-1">
            {filteredVideos.map((video) => {
              const isCurrent = activeVideo.id === video.id;
              return (
                <div
                  key={video.id}
                  onClick={() => handleSelectVideo(video)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex gap-3 ${
                    isCurrent
                      ? 'bg-slate-900 border-cyan-400 ring-2 ring-cyan-500/40 shadow-xl'
                      : 'bg-slate-950/90 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  {/* Video Thumbnail */}
                  <div className="relative w-32 sm:w-36 h-20 shrink-0 rounded-xl overflow-hidden bg-slate-900">
                    <img
                      src={video.thumbnail}
                      alt={video.titleAr}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-white font-mono text-[9px] font-bold">
                      {video.duration}
                    </span>
                    {video.isObscureTalent && (
                      <span className="absolute top-1 left-1 px-1 py-0.5 rounded bg-amber-500 text-slate-950 font-bold text-[8px]">
                        مغمور
                      </span>
                    )}
                  </div>

                  {/* Video Info */}
                  <div className="flex-1 flex flex-col justify-between overflow-hidden">
                    <div>
                      <h3 className="text-xs font-bold text-white line-clamp-2 leading-snug">
                        {lang === 'ar' ? video.titleAr : video.titleEn}
                      </h3>
                      <p className="text-[10px] text-cyan-400 font-semibold mt-0.5 truncate">
                        {video.creatorName}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                      <span className="font-mono text-emerald-400 font-bold">
                        ${video.askingBudget.toLocaleString()}
                      </span>
                      <div className="flex items-center gap-2 font-mono">
                        <span>{video.likes} ❤️</span>
                        <span>{video.hasContractOffers} 💼</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* 3. MODAL: Upload Video & Screenplay Reel (100% Free) */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-slate-950 border-2 border-red-500/50 rounded-3xl max-w-2xl w-full p-5 sm:p-7 space-y-5 shadow-2xl relative my-8">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-red-500/20 text-red-400 rounded-2xl border border-red-500/30">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">
                    {lang === 'ar' ? 'رفع فيديو / سيناريو مجاناً في شاهين سينما تيوب' : 'Free Upload Video & Screenplay Reel'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {lang === 'ar' ? 'متاح 100% بدون أي رسوم لكل كاتب، ممثل، ومخرج للوصول للمنتجين' : '100% Free for Writers, Actors & Indie Directors'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleUploadSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">
                    {lang === 'ar' ? 'عنوان العمل أو الفيلم / النص:' : 'Title of Reel / Script:'}
                  </label>
                  <input
                    type="text"
                    required
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    placeholder={lang === 'ar' ? 'مثال: سيناريو صائد الأسرار' : 'e.g. Secret Hunter Screenplay Pitch'}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">
                    {lang === 'ar' ? 'اسمك أو اسم الفريق:' : 'Your Name / Team:'}
                  </label>
                  <input
                    type="text"
                    required
                    value={uploadCreatorName}
                    onChange={(e) => setUploadCreatorName(e.target.value)}
                    placeholder={lang === 'ar' ? 'مثال: أحمد الدوسري (كاتب سيناريو)' : 'e.g. Ahmed Al-Dossari (Screenwriter)'}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">
                    {lang === 'ar' ? 'التصنيف الرئيسي:' : 'Category:'}
                  </label>
                  <select
                    value={uploadCategory}
                    onChange={(e) => setUploadCategory(e.target.value as CinemaVideo['category'])}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-hidden cursor-pointer"
                  >
                    <option value="writer_pitch">{lang === 'ar' ? '✍️ سيناريو / عرض نص' : 'Writer Pitch'}</option>
                    <option value="acting_audition">{lang === 'ar' ? '🎭 تجربة أداء / كاستينغ' : 'Acting Audition'}</option>
                    <option value="directing_pilot">{lang === 'ar' ? '🎬 فيلم قصير / بيلوت مخرج' : 'Directing Pilot'}</option>
                    <option value="voice_acting">{lang === 'ar' ? '🎙️ أداء صوتي ودبلجة' : 'Voice Acting'}</option>
                    <option value="vfx_stunt">{lang === 'ar' ? '💥 مجازفات وأكشن ومؤثرات' : 'Stunt & VFX'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">
                    {lang === 'ar' ? 'المبلغ المطلوب للتعاقد ($):' : 'Asking Price / Target ($):'}
                  </label>
                  <input
                    type="number"
                    value={uploadBudget}
                    onChange={(e) => setUploadBudget(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-hidden font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">
                    {lang === 'ar' ? 'صفتك الإبداعية:' : 'Creator Role:'}
                  </label>
                  <input
                    type="text"
                    value={uploadRole}
                    onChange={(e) => setUploadRole(e.target.value)}
                    placeholder={lang === 'ar' ? 'مثال: كاتب مغمور يبحث عن منتج' : 'e.g. Emerging Screenwriter'}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Video File / Reel Drag and Drop Box */}
              <div className="p-4 border-2 border-dashed border-slate-700 hover:border-cyan-500 rounded-2xl bg-slate-900/70 text-center space-y-2 cursor-pointer transition-all">
                <Video className="w-8 h-8 text-cyan-400 mx-auto" />
                <div className="space-y-0.5">
                  <span className="font-bold text-white block">
                    {uploadedFileName || (lang === 'ar' ? 'اسحب ملف الفيديو هنا أو انقر للاختيار (.mp4, .mov, .webm)' : 'Drag & drop video reel or click to select (.mp4, .mov)')}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {lang === 'ar' ? 'حجم غير محدود • مجاني 100% • يتم تشفيره فوراً بالبصمة الصفرية S-WCM' : 'Unlimited size • 100% Free • Automatically sealed with S-WCM'}
                  </span>
                </div>
                <input
                  type="file"
                  accept="video/*,image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setUploadedFileName(e.target.files[0].name);
                    }
                  }}
                  className="hidden"
                  id="video-upload-file"
                />
                <label
                  htmlFor="video-upload-file"
                  className="inline-block px-3.5 py-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold cursor-pointer hover:bg-cyan-500 hover:text-slate-950 transition-all"
                >
                  {lang === 'ar' ? 'اختر ملف الفيديو من جهازك' : 'Browse Local File'}
                </label>
              </div>

              {/* Synopsis & Script Excerpt */}
              <div>
                <label className="block text-slate-300 font-bold mb-1">
                  {lang === 'ar' ? 'ملخص القصة والفكرة العامة (Logline / Synopsis):' : 'Synopsis & Logline:'}
                </label>
                <textarea
                  rows={2}
                  value={uploadSynopsis}
                  onChange={(e) => setUploadSynopsis(e.target.value)}
                  placeholder={lang === 'ar' ? 'اشرح فكرة فيلمك أو مشهدك باختصار لجذب انتباه المنتجين والمخرجين...' : 'Briefly describe your story to catch producer attention...'}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">
                  {lang === 'ar' ? 'مقطع من السيناريو أو الحوار (محمي بالبصمة الصفرية):' : 'Script Excerpt (Protected with S-WCM):'}
                </label>
                <textarea
                  rows={2}
                  value={uploadScriptExcerpt}
                  onChange={(e) => setUploadScriptExcerpt(e.target.value)}
                  placeholder={lang === 'ar' ? 'اكتب مشهداً أو حواراً مشوقاً من السيناريو الخاص بك...' : 'Paste a compelling dialogue or scene excerpt...'}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-hidden font-serif"
                />
              </div>

              {/* Obscure Priority Checkbox */}
              <div className="flex items-center gap-2 p-3 bg-amber-950/30 border border-amber-500/30 rounded-xl">
                <input
                  type="checkbox"
                  id="obscure-check"
                  checked={uploadIsObscure}
                  onChange={(e) => setUploadIsObscure(e.target.checked)}
                  className="w-4 h-4 text-amber-500 rounded cursor-pointer"
                />
                <label htmlFor="obscure-check" className="text-amber-200 text-xs font-semibold cursor-pointer">
                  {lang === 'ar' ? 'أنا كاتب أو موهبة مغمورة (تفعيل أولوية الدعم المالي والترشيح للمنتجين)' : 'I am an obscure/emerging talent (Enable priority financial grants and studio matching)'}
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsUploadModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold cursor-pointer"
                >
                  {lang === 'ar' ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-black cursor-pointer shadow-lg shadow-red-500/30"
                >
                  {lang === 'ar' ? '🚀 نشر الفيديو والسيناريو مجاناً الآن' : '🚀 Publish Video & Pitch Free Now'}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* 4. MODAL: Producer Contract Offer Dispatcher */}
      {isContractModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-slate-950 border-2 border-cyan-500/50 rounded-3xl max-w-xl w-full p-5 sm:p-7 space-y-4 shadow-2xl relative">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-cyan-500/20 text-cyan-400 rounded-2xl border border-cyan-500/30">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    {lang === 'ar' ? 'تقديم عرض شراء / تعاقد رسمي للمبدع' : 'Send Official Producer Acquisition / Contract Offer'}
                  </h3>
                  <p className="text-xs text-cyan-400">
                    {lang === 'ar' ? `المشروع: ${activeVideo.titleAr}` : `Target: ${activeVideo.titleEn}`}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsContractModalOpen(false)}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleContractSubmit} className="space-y-3.5 text-xs">
              
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-400 block">{lang === 'ar' ? 'المستفيد من التعاقد:' : 'Contract Recipient:'}</span>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">{activeVideo.creatorName}</span>
                  <span className="text-cyan-400 font-mono text-xs">{lang === 'ar' ? activeVideo.creatorRoleAr : activeVideo.creatorRoleEn}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">
                    {lang === 'ar' ? 'اسم جهة الإنتاج / المخرج:' : 'Production Studio / Director:'}
                  </label>
                  <input
                    type="text"
                    required
                    value={offerProducerName}
                    onChange={(e) => setOfferProducerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">
                    {lang === 'ar' ? 'البريد الإلكتروني المهني:' : 'Professional Email:'}
                  </label>
                  <input
                    type="email"
                    required
                    value={offerProducerEmail}
                    onChange={(e) => setOfferProducerEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">
                    {lang === 'ar' ? 'نوع العقد / الصفقة:' : 'Contract Type:'}
                  </label>
                  <select
                    value={offerType}
                    onChange={(e) => setOfferType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-hidden cursor-pointer"
                  >
                    <option value="شراء السيناريو بالكامل (Full Acquisition)">{lang === 'ar' ? 'شراء السيناريو بالكامل (Full Acquisition)' : 'Full Script Acquisition'}</option>
                    <option value="حجز حقوق حصري لسنة (12-Month Option)">{lang === 'ar' ? 'حجز حقوق حصري لسنة (12-Month Option)' : '12-Month Exclusive Option'}</option>
                    <option value="عقد دور بطولة تمثيلي (Lead Acting Deal)">{lang === 'ar' ? 'عقد دور بطولة تمثيلي (Lead Acting Deal)' : 'Lead Acting Contract'}</option>
                    <option value="عقد إخراج فيلم كامل (Director Agreement)">{lang === 'ar' ? 'عقد إخراج فيلم كامل (Director Agreement)' : 'Director Agreement'}</option>
                    <option value="إنتاج مشترك ومناصفة أرباح (Co-Production)">{lang === 'ar' ? 'إنتاج مشترك ومناصفة أرباح (Co-Production)' : 'Co-Production & Revenue Split'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">
                    {lang === 'ar' ? 'المبلغ المالي المعروض ($ USD):' : 'Offer Amount ($ USD):'}
                  </label>
                  <input
                    type="number"
                    value={offerAmount}
                    onChange={(e) => setOfferAmount(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-cyan-500/50 text-cyan-300 font-mono font-bold focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">
                  {lang === 'ar' ? 'شروط الإنتاج والجدول الزمني:' : 'Production Terms & Timeline:'}
                </label>
                <textarea
                  rows={2}
                  value={offerTerms}
                  onChange={(e) => setOfferTerms(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-hidden"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsContractModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-slate-400 font-bold cursor-pointer"
                >
                  {lang === 'ar' ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black cursor-pointer shadow-lg shadow-cyan-500/30 flex items-center gap-1.5"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'إرسال العقد وتحميل النسخة الرسمية' : 'Dispatch Contract Offer & Download'}</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* 5. MODAL: Direct Tip & Financial Support */}
      {isTipModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-slate-950 border-2 border-amber-500/50 rounded-3xl max-w-md w-full p-5 sm:p-6 space-y-4 shadow-2xl relative">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white">
                    {lang === 'ar' ? 'دعم مالي مباشر للمبدع' : 'Direct Financial Tip'}
                  </h3>
                  <p className="text-xs text-amber-400">
                    {lang === 'ar' ? `المستفيد: ${activeVideo.creatorName}` : `Recipient: ${activeVideo.creatorName}`}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsTipModalOpen(false)}
                className="p-1.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleTipSubmit} className="space-y-3.5 text-xs">
              
              {/* Quick Amount Select Buttons */}
              <div className="space-y-1">
                <label className="block text-slate-300 font-bold">
                  {lang === 'ar' ? 'اختر مبلغ الدعم:' : 'Select Amount:'}
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[25, 50, 100, 250].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setTipAmount(amt)}
                      className={`py-2 rounded-xl font-mono font-black text-xs cursor-pointer border ${
                        tipAmount === amt
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/30'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">
                  {lang === 'ar' ? 'اسمك أو صفتك:' : 'Your Name / Studio:'}
                </label>
                <input
                  type="text"
                  value={tipSenderName}
                  onChange={(e) => setTipSenderName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-amber-400 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">
                  {lang === 'ar' ? 'رسالة تشجيع للمبدع:' : 'Message of Encouragement:'}
                </label>
                <textarea
                  rows={2}
                  value={tipMessage}
                  onChange={(e) => setTipMessage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-amber-400 focus:outline-hidden"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsTipModalOpen(false)}
                  className="px-3.5 py-2 rounded-xl bg-slate-900 text-slate-400 font-bold cursor-pointer"
                >
                  {lang === 'ar' ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black cursor-pointer shadow-lg shadow-amber-500/30 flex items-center gap-1.5"
                >
                  <DollarSign className="w-4 h-4" />
                  <span>{lang === 'ar' ? `تحويل $${tipAmount} الآن` : `Send $${tipAmount} Now`}</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* 6. MODAL: Protected Script Excerpt Reader */}
      {isScriptModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-slate-950 border-2 border-cyan-500/50 rounded-3xl max-w-2xl w-full p-5 sm:p-7 space-y-4 shadow-2xl relative my-8">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-cyan-500/20 text-cyan-400 rounded-2xl">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    {lang === 'ar' ? 'مسودة السيناريو المحمي ببصمة S-WCM الصفرية' : 'S-WCM Zero-Width Protected Script Excerpt'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {activeVideo.creatorName} • {lang === 'ar' ? activeVideo.titleAr : activeVideo.titleEn}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsScriptModalOpen(false)}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Script Text Page Layout */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 font-serif text-slate-100 leading-relaxed text-sm sm:text-base max-h-96 overflow-y-auto">
              <div className="text-center font-sans border-b border-slate-800 pb-2">
                <span className="text-xs font-mono text-cyan-400 block font-bold">SOVEREIGN PROTECTED SCRIPT DRAFT</span>
                <h4 className="text-base font-bold text-white mt-1">{lang === 'ar' ? activeVideo.titleAr : activeVideo.titleEn}</h4>
                <p className="text-xs text-slate-400">{lang === 'ar' ? 'تأليف: ' : 'Written by: '} {activeVideo.creatorName}</p>
              </div>

              <div className="whitespace-pre-line bg-black/40 p-4 rounded-xl border border-slate-800/80">
                {lang === 'ar' ? activeVideo.scriptExcerptAr : activeVideo.scriptExcerptEn}
              </div>

              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs font-sans text-cyan-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  {lang === 'ar' 
                    ? 'هذا النص مشفر ببصمة صفرية غير مرئية توثق هوية القارئ والوقت، وأي نسخ غير مصرح به يولد دليلاً جنائياً ملزماً قانونياً.' 
                    : 'This excerpt is embedded with invisible S-WCM zero-width watermark, generating binding forensic proof against theft.'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800">
              <span className="text-xs font-mono text-slate-400">
                {lang === 'ar' ? 'السعر المحدد للنص الكامل:' : 'Full Script Asking Price:'} <strong className="text-emerald-400">${activeVideo.askingBudget.toLocaleString()}</strong>
              </span>

              <button
                onClick={() => {
                  setIsScriptModalOpen(false);
                  setIsContractModalOpen(true);
                }}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs cursor-pointer shadow-lg shadow-cyan-500/30"
              >
                {lang === 'ar' ? '💼 تقديم عرض شراء هذا السيناريو' : '💼 Acquire This Screenplay'}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 7. MODAL: Endowment Micro-Grants Pool ($100,000) */}
      {isGrantModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-slate-950 border-2 border-amber-500/50 rounded-3xl max-w-xl w-full p-5 sm:p-7 space-y-4 shadow-2xl relative my-8">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-2xl border border-amber-500/30">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    {lang === 'ar' ? 'صندوق شاهين الوقفي لدعم الكتّاب المغمورين ($100,000)' : 'Shaheen $100K Endowment Fund for Obscure Talent'}
                  </h3>
                  <p className="text-xs text-amber-300">
                    {lang === 'ar' ? 'اقتطاع 10% دائم لدعم الشباب والكتّاب الذين لم يجدوا فرصة' : '10% Permanent Cinema Endowment Micro-Grants'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsGrantModalOpen(false)}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p>
                {lang === 'ar'
                  ? 'انطلاقاً من رؤية المهندس أيمن العريشي الإنسانية، تخصص منظومة شاهين 10% ثابتة من كافة عوائدها وأرباحها كوقف تنموي دائم يقدم منحاً مالية سريعة تتراوح بين 1,000$ إلى 5,000$ لمساعدة الكتّاب المغمورين والمخرجين المستقلين على إكمال نصوصهم وتصوير نماذجهم الأولية.'
                  : 'Rooted in Eng. Ayman Al-Araishi’s philanthropic vision, SHAHEEN allocates 10% of all revenues to provide $1,000 to $5,000 micro-grants directly to obscure writers and emerging creators.'}
              </p>

              <div className="grid grid-cols-3 gap-2 py-2">
                <div className="p-3 rounded-2xl bg-slate-900 text-center border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">{lang === 'ar' ? 'إجمالي المنح الموزعة:' : 'Total Grants:'}</span>
                  <span className="text-sm font-black text-amber-400">$64,500</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900 text-center border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">{lang === 'ar' ? 'كتّاب تم دعمهم:' : 'Writers Funded:'}</span>
                  <span className="text-sm font-black text-cyan-400">42 كاتب</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900 text-center border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">{lang === 'ar' ? 'أفلام تم إنتاجها:' : 'Films Produced:'}</span>
                  <span className="text-sm font-black text-emerald-400">18 فيلماً</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-amber-200">
                <span className="font-bold block mb-1">
                  {lang === 'ar' ? '💡 كيف تحصل على منحة لسيناريوك أو فيلمك؟' : '💡 How to receive a micro-grant?'}
                </span>
                <span>
                  {lang === 'ar'
                    ? 'ببساطة ارفع فيديوك أو مسودة سيناريوك مجاناً عبر المنصة، وسيقوم مجلس العرّاب بمراجعة الأعمال وتقييم النصوص ذات الأصالة العالية وصرف المنحة الفورية في محفظتك الإبداعية.'
                    : 'Simply upload your script pitch or video reel on CinemaTube. High-originality works are automatically reviewed for immediate grant disbursement.'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => setIsGrantModalOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-900 text-slate-300 font-bold cursor-pointer"
              >
                {lang === 'ar' ? 'إغلاق' : 'Close'}
              </button>
              <button
                onClick={() => {
                  setIsGrantModalOpen(false);
                  setIsUploadModalOpen(true);
                }}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black cursor-pointer shadow-lg shadow-amber-500/30"
              >
                {lang === 'ar' ? 'رفع سيناريو للترشح للمنحة' : 'Upload Script for Grant'}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
