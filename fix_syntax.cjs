const fs = require('fs');
const file = 'src/components/SapProtocolDashboard.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/\\\`/g, '`');
content = content.replace(/\\\$/g, '$');

fs.writeFileSync(file, content);
console.log("Fixed Syntax");
