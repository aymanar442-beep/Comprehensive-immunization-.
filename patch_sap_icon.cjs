const fs = require('fs');
const file = 'src/components/SapProtocolDashboard.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('import { X }')) {
  content = content.replace(/import \{ ShieldCheck/, 'import { X, ShieldCheck');
}

fs.writeFileSync(file, content);
console.log("Patched SAP Icon");
