const fs = require('fs');
const file = 'src/types.ts';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/\| 'sap_protocol';/, "| 'sap_protocol' | 'shaheen_a1';");

fs.writeFileSync(file, content);
console.log("Patched types.ts");
