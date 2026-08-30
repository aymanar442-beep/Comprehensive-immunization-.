const fs = require('fs');
const file = 'src/components/GlobalHeader.tsx';
let content = fs.readFileSync(file, 'utf8');

// The requested ticker change: make it dynamic
const imports = `import React, { useState, useEffect } from 'react';\nimport { AppLanguage, AppRoom } from '../types';\nimport { ShieldAlert, Fingerprint, Film, BrainCircuit, Mic, VolumeX, Menu, X, Globe, MapPin, SearchCode, Database, Activity, Code, ShieldCheck, Sword, Zap, Scale, FileText } from 'lucide-react';`;

content = content.replace(/import React, { useState } from 'react';[\s\S]*?import { ShieldAlert,[^;]+;/, imports);

const tickerLogic = `
  const [tickerIndex, setTickerIndex] = useState(0);
  const [tickerFading, setTickerFading] = useState(false);

  const announcements = {
    ar: [
      '🔥 عاجل: منصة SHAHEEN APEX AI تطلق نظام Castle Gate الأمني ومحرك S-WCM لحماية سيناريوهات هوليوود.',
      '⚡ التدمير الذاتي العصبي (S-NVK): اشتقاق المفتاح اللحظي من حالة النبض والأعصاب دون تخزين مفاتيح.',
      '🛡️ محرك البصمة الصفرية S-WCM يدمج بصمة الخائن الجنائية في 40 ملي ثانية فقط.',
      '⚖️ العقد السيادي: توثيق دولي للملكية الفكرية وخوارزميات الذكاء الاصطناعي للمؤسس أيمن العَرَّاب.',
      '🌐 منصة شاهين توفر ما يتجاوز 45 مليون دولار لكل إنتاج سينمائي بمحاكاة مونت كارلو الدقيقة.'
    ],
    en: [
      '🔥 BREAKING: SHAHEEN APEX AI launches Castle Gate & S-WCM for sovereign Hollywood script protection.',
      '⚡ S-NVK NEURO-VAULT: Ephemeral Neuro-Key Derivation without stored cryptographic keys.',
      '🛡️ S-WCM Zero-Width Engine embeds forensic traitor footprint in just 40 milliseconds.',
      '⚖️ SOVEREIGN DEED: International IP registration for Founder Eng. Ayman Al-Araishi.',
      '🌐 Shaheen Platform saves over $45M per production using Monte Carlo risk simulations.'
    ],
    fr: [
      '🔥 FLASH INFO: SHAHEEN APEX AI lance Castle Gate et S-WCM pour la protection d\\'Hollywood.',
      '⚡ S-NVK NEURO-VAULT: Dérivation éphémère de clé neuronale sans clés stockées.',
      '🛡️ Le moteur stéganographique S-WCM intègre l\\'empreinte du traître en 40 millisecondes.',
      '⚖️ ACTE SOUVERAIN: Propriété intellectuelle internationale pour le Fondateur Ayman Al-Araishi.',
      '🌐 Shaheen économise plus de 45 M$ par production grâce aux simulations Monte Carlo.'
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerFading(true);
      setTimeout(() => {
        setTickerIndex((prev) => (prev + 1) % announcements.ar.length);
        setTickerFading(false);
      }, 500); // 500ms fade out
    }, 7000); // Change announcement every 7 seconds
    return () => clearInterval(interval);
  }, []);
`;

content = content.replace(/export const GlobalHeader: React.FC<GlobalHeaderProps> = \({[^}]+}\) => {/, `$&${tickerLogic}`);

const oldTicker = /<div className="bg-\[#0b0f19\] border-b-2 border-\[#ff4500\] shadow-\[0_4px_15px_rgba\(255,69,0,0.45\)\] py-2 overflow-hidden whitespace-nowrap relative">\s*<div className="inline-block animate-marquee font-bold text-sm tracking-wide text-\[#ff6b00\] drop-shadow-\[0_0_10px_#ff4500\]">\s*🔥 \{lang === 'ar'[\s\S]*?\}\s*<\/div>\s*<\/div>/;

const newTicker = `<div className="bg-[#0b0f19] border-b border-[#00d2ff]/30 shadow-[0_4px_15px_rgba(0,210,255,0.15)] py-2 overflow-hidden relative flex items-center justify-center min-h-[36px]">
        <div className={\`font-bold text-sm tracking-wide text-[#00d2ff] drop-shadow-[0_0_8px_#00d2ff] transition-opacity duration-500 \${tickerFading ? 'opacity-0' : 'opacity-100'}\`}>
          {announcements[lang][tickerIndex]}
        </div>
      </div>`;

content = content.replace(oldTicker, newTicker);

fs.writeFileSync(file, content);
console.log("Patched GlobalHeader");
