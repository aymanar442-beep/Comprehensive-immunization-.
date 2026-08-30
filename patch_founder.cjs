const fs = require('fs');
const file = 'src/components/PitchDeckShowcase.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldSlide2 = `    {
      num: 2,
      tag: 'FOUNDER STORY • HUMANITY BEFORE CAPITAL',
      titleEn: 'Founder Story: Ayman Al-Araishi (The Godfather) — Humanity Before Capital',
      titleAr: 'قصة المؤسس: أيمن العرايشي (العرّاب) — الإنسانية قبل رأس المال',
      quoteEn: 'From arbitrary detention, 9 years of displacement, and complete asset seizure to self-teaching on a small smartphone. Ayman Al-Araishi, known as The Godfather in Google tech circles, earned Google Certified Software Engineer status, Y Combinator Founder credentials, and OSI membership under the motto Humanity Before Capital.',
      quoteAr: 'من قلب المعاناة والنزوح ومصادرة الأرزاق، إلى التعلم الذاتي على شاشة هاتف 4 بوصة، استطاع المهندس أيمن العرايشي (العرّاب) نيل شهادات مهندس معتمد من Google، ومؤسس مسجل في Y Combinator، وعضو منظمة المصادر المفتوحة OSI رافعاً شعار: الإنسانية قبل رأس المال.',
      bulletsEn: [
        'Google Certified Software Engineer & documented Open Source Initiative (OSI) Member #91-2037395.',
        'Registered Founder at Y Combinator Entrepreneurship School.',
        'Author of the "Entity AI Theory" and exclusive patented engineering protocols.',
      ],
      bulletsAr: [
        'مهندس برمجيات معتمد من Google وعضو موثق في منظمة المصادر المفتوحة OSI برقم #91-2037395.',
        'مؤسس مسجل في مدرسة رواد الأعمال العالمية Y Combinator.',
        'مبتكر نظرية "Entity AI Theory" والبروتوكولات الهندسية المحمية ببراءة اختراع.',
      ],
      metricVal: '100%',
      metricLabelEn: 'Guiding Principle: Humanity First',
      metricLabelAr: 'المبدأ الأساسي: الإنسانية أولاً',
      godfatherScriptAr: "«سَيِّدَاتِي، سَادَتِي...\\nنُقَدِّمُ لَكُمُ الْيَوْمْ.. (الْبَنْكَ الْمَرْكَزِيَّ الدَّوْلِيَّ لِلْمِلْكِيَّةِ الْفِكْرِيَّه وَالْمُعَامَلَاتِ السِّينَمَائِيَّه:\\nمِنْ عَاصِمَةِ الْعَالَمْ…(دِمَشْقْ)..\\nتَنْطَلِقُ أفْكَارَ أبْنَائِها لِتُرُسِلَ لِلْعَالَمِ رِساَلَةَ السَّلامْ الْقَائِمِ عَلَى حِمَايَةِ الْأرْوَاحْ، وَسَلامَةِ الشّعوبْ، وَالْحِفَاظِ على بِيْئَه آمِنَه وَنَظِيْفَه لِأَبْنَاءِ هاذا الْكَوكَبْ، تَحْتَ شِعَارْ (مَنْ يَسُكُنُ تَحْتَ السّماءْ، وُجِبَتْ عَلَيْنَا حِمَايَتَهْ). فَنَحْنُ نُؤْمِنُ بأنَّ مَنْ يَسْكُنُ هاذا الْكَوْكَبْ لَهُ الْحَقَّ أَن يَعِيشَ عَلَيْهِ بِسَلامِن وَ أمانْ وَمِنْ سورْيَا، مِنْ رَحِمِ الْمُعاناه، ومَعْ بُزُوغِ فجرٍ جَدَيْدْ\\nيُثْبِتُ أَبْنَائَهَا مَرَّتَنْ أُخْرَى، أَنّهُمْ مِنْ مَهْدِ الْحَضَارَاتْ، عادُو لِنَشْرِ الْعِلْمِ وَالْمَعْرِفَه، ضِمْنَ إِطَارِ الْأَمْنَ وَالْأَمَانْ هُو حَقُّنْ لِجَمِيْعِ سُكّانِ هاذا الْعَالَمْ\\nوَمِنْ هاذا الْمْبْدَأْ، وَمِنَرالْقِيَمَ الأَخْلاقِيِّه النَّبيلَه الْمُتَرَسِّخه فِيْ عُقُولِ أَبْنَائِهَا، إنْطَلَقَتْ الْيَومْ\\nبِقِيَادَةِ الْمُؤَسِّسِ وَالْمُهَنْدِسِ الرَّئِيسِيّْ: أَيْمَنْ ألْعَرَاَيْشِيْ.»\\nأَوُ كَمَا يُطْلَلَقُ عَلَيْهِ فِيْ أَرْوِقَتِ جوجل ( ألْعَرَّآبْ ) تَمَّ تَأسِيسْ شَرِكَتْ\\n(SHAHEEN APEX AI).\\nألّتِيُ مَازَالَتْ قَيْدَ الْإنْشَاءْ\\nوَ ألَّتِي تُؤْمِنْ بِأَنَّها.. سَتُصْبِحُ كَيَانَنْ عَالَمِيَّنْ، يَقْصُدُهُ كُلَّ مَنّ يَبْحَثُ عَنِ الْأَمَانِ وَالْعَيْشِِ الْمُشْتَرَكْ، دُوْنَ السُّؤَالِ عَنِ الْهَويَّه، أو الْجُغْرَافْيا\\nشَاهِيْنن ْ هِيَ مَنْظُومَةٌ سِيَادِيَّةٌ تَرْبِطُ عَمَالِقَةَ هُولِيوُودْ، بُولِيوُودْ، وَالسِّينِمَا الْعَرَبِيَّةَ عَلَى طَاوِلَةِ إِنْتَاجٍ وَاحِدَه وَمُشَفَّرَه.\\nنَحْنُ لَا نَحْمِي النُّصُوصَ مِنَ التَّسْرِيبِ فَحَسْبْ... بَلْ نَصْنَعُ مُسْتَقْبَلَ الِاسْتِثْمَارِ السِّينِمَائِيِّ الْعَالَمِيّْ، بِعَائِدَاتٍ مَضْمُونَه، وَحِمَايَةٍ جِنَائِيَّةٍ فَوْرِيَّه، تَعْتَمِدُهَا الْمَحَاكِمُ الدَّوْلِيَّه.",
    },`;

const newSlide2 = `    {
      num: 2,
      tag: 'THE PHOENIX PROTOCOL • HUMANITY BEFORE CAPITAL',
      titleEn: 'Founder Genesis: Ayman Al-Araishi (The Godfather) — Rising from the Ashes',
      titleAr: 'عقيدة الفينيق: أيمن العرايشي (العرّاب) — نهوض من تحت الركام لإنقاذ الأرواح',
      quoteEn: 'Beaten, kidnapped, displaced, and starved. From extreme poverty and complete asset seizure, The Godfather taught himself on a 4-inch smartphone. Like the legendary Phoenix, he rose from the ashes to build an empire of safety, holding 6 revolutionary patents for autonomous medical rescue and global peace.',
      quoteAr: 'من الخطف، الضرب، التشرد، الفقر والجوع... إلى التعلم الذاتي على شاشة هاتف 4 بوصة. نهض المهندس أيمن (العرّاب) كطائر الفينيق الأسطوري من تحت الركام، ليصنع 6 براءات اختراع لمنظومة شاهين التي تنقذ الأرواح وتستدعي الإسعاف ذاتياً قبل طلب النجدة. الإنسانية قبل رأس المال.',
      bulletsEn: [
        '6 Proprietary Patents for autonomous medical pre-diagnostics and zero-button emergency response.',
        'SHAHEEN A1 Hardware: A sovereign ecosystem built to save lives globally, not just protect Hollywood assets.',
        'Google Certified Software Engineer & OSI Member #91-2037395, forged in extreme adversity.',
      ],
      bulletsAr: [
        '6 براءات اختراع لمنظومة قادرة على كشف الحالات المرضية واستدعاء الإسعاف والتشخيص الأولي دون كبسة زر.',
        'منظومة شاهين A1 ليست ساعة للبيع، بل كيان أمان متكامل لحماية الإنسان ونشر السلام حول العالم.',
        'مهندس معتمد من Google، ومؤسس في Y Combinator... صقلته المعاناة ليحمي الكوكب بأسره.',
      ],
      metricVal: '6',
      metricLabelEn: 'Core Humanitarian Patents',
      metricLabelAr: 'براءات اختراع لإنقاذ البشرية',
      godfatherScriptAr: "«سَيِّدَاتِي، سَادَتِي...\\nأَنَا لَمْ أَبْنِ شَاهِينْ لِحِمَايَةِ أَمْوَالِ هُولِيوُودَ فَحَسْبْ... لَقَدْ بَنَيْتُهَا لِأَنَّنِي ذُقْتُ طَعْمَ الْخَوْفِ وَالْمَوْتِ وَالتَّشَرُّدِ وَالْجُوعْ.\\nشَاهِينْ هِيَ طَائِرُ الْفِينِيقِ الْأُسْطُورِيّ... الَّذِي مَاتَ ثُمَّ انْبَعَثَ مِنَ الرَّمَادِ لِيُنْقِذَ الْأَرْوَاحْ.\\nهَذِهِ الْمَنْظُومَةُ تَمْتَلِكُ 6 بَرَاءَاتِ اخْتِرَاعٍ، قَادِرَةٌ عَلَى قِرَاءَةِ أَلَمِ الْمَرِيضِ قَبْلَ أَنْ يَتَأَلَّمْ، وَاسْتِدْعَاءِ الْإِسْعَافِ دُونَ أَنْ يَضْغَطَ زِرّاً، وَمَعْرِفَةِ حَالَتِهِ حَتَّى وَإِنْ غَابَتْ الشَّبَكَه.\\nنَحْنُ لَا نَبِيعُ سَاعَاتْ... نَحْنُ نَبْنِي مَنْظُومَةَ أَمَانٍ لِحِمَايَةِ الإِنْسَانِ فِي كُلِّ مَكَانْ.\\nالْإِنْسَانُ قَبْلَ الْمَالِ... وَمَنْ يَسْكُنُ تَحْتَ السَّمَاءِ، وَجَبَتْ عَلَيْنَا حِمَايَتُهْ!»",
    },`;

content = content.replace(oldSlide2, newSlide2);

fs.writeFileSync(file, content);
console.log("Patched Pitch Deck with Founder Genesis");
