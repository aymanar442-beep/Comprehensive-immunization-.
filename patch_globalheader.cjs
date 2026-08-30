const fs = require('fs');
const file = 'src/components/GlobalHeader.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /{ id: 'sap_protocol' as AppRoom, num: 10, ar: '🛡️ الأمن السيبراني S.A.P', en: 'S.A.P Security', fr: 'Sécurité S.A.P' },/g,
  `{ id: 'sap_protocol' as AppRoom, num: 10, ar: '🛡️ الأمن السيبراني S.A.P', en: 'S.A.P Security', fr: 'Sécurité S.A.P' },
    { id: 'shaheen_a1' as AppRoom, num: 11, ar: '⌚ عتاد شاهين A1 (SHAHEEN A1 Hardware)', en: 'SHAHEEN A1 Hardware', fr: 'Matériel SHAHEEN A1' },`
);

fs.writeFileSync(file, content);
console.log("Patched GlobalHeader.tsx");
