const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

const importStatement = `import { CryptoArbitrageEngine } from './components/CryptoArbitrageEngine';
import { ShaheenA1Hardware } from './components/ShaheenA1Hardware';`;

content = content.replace(/import { CryptoArbitrageEngine } from '.\/components\/CryptoArbitrageEngine';/, importStatement);

const routingCode = `        {currentRoom === 'sap_protocol' && (
          <SapProtocolDashboard lang={lang} />
        )}
        {currentRoom === 'shaheen_a1' && (
          <ShaheenA1Hardware lang={lang} />
        )}`;

content = content.replace(/{\s*currentRoom === 'sap_protocol' && \(\s*<SapProtocolDashboard lang={lang} \/>\s*\)\s*}/, routingCode);

const audioText = `} else if (currentRoom === 'sap_protocol') {
      textToSpeak = lang === 'ar'
        ? 'بروتوكول شاهين للأمن السيبراني، حماية صامتة تعتمد على المستشعرات الحيوية وخوارزميات التتبع الديناميكي.'
        : 'S.A.P Protocol, Cyber Security biometric filtering, ensuring Silent Adaptive Protection without cloud dependency.';
    } else if (currentRoom === 'shaheen_a1') {
      textToSpeak = lang === 'ar'
        ? 'عتاد شاهين إي ون. العقد السيادي والتقنية الفيزيائية المغلقة لحماية الأرواح وتشفير الأعصاب.'
        : 'SHAHEEN A1 Hardware. The sovereign closed-loop physical node for human safety and neuro-encryption.';
    } else {`;

content = content.replace(/} else if \(currentRoom === 'sap_protocol'\) {[\s\S]*?} else {/, audioText);

fs.writeFileSync(file, content);
console.log("Patched App.tsx with Hardware");
