const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

// Change default language to 'en'
content = content.replace(/useState<AppLanguage>\('ar'\)/, "useState<AppLanguage>('en')");

fs.writeFileSync(file, content);
console.log("Patched App.tsx language default");
