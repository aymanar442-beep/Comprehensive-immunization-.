const fs = require('fs');
const file = 'src/components/PitchDeckShowcase.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldAudio = `    const textToSpeak = isArabic
      ? (currentSlideData.godfatherScriptAr || \`\${currentSlideData.titleAr}. \${currentSlideData.quoteAr}. \${currentSlideData.bulletsAr.join('. ')}\`)
      : \`\${currentSlideData.titleEn}. \${currentSlideData.quoteEn}. \${currentSlideData.bulletsEn.join('. ')}\`;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = isArabic ? 'ar-SA' : 'en-US';`;

const newAudio = `    // Force Arabic audio for Slide 2 (Founder Story) even if UI is in English
    const forceArabicAudio = currentSlideData.num === 2;
    const speakArabic = isArabic || forceArabicAudio;

    const textToSpeak = speakArabic
      ? (currentSlideData.godfatherScriptAr || \`\${currentSlideData.titleAr}. \${currentSlideData.quoteAr}. \${currentSlideData.bulletsAr.join('. ')}\`)
      : \`\${currentSlideData.titleEn}. \${currentSlideData.quoteEn}. \${currentSlideData.bulletsEn.join('. ')}\`;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = speakArabic ? 'ar-SA' : 'en-US';`;

content = content.replace(oldAudio, newAudio);
fs.writeFileSync(file, content);
console.log("Patched audio");
