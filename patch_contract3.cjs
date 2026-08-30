const fs = require('fs');
const file = 'src/components/FounderContractModal.tsx';
let content = fs.readFileSync(file, 'utf8');

const bonusAr = `
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.11</span>
                  <div>
                    <strong className="text-white block mb-1">علاوة الأرباح الاستثنائية (Super-Profit Bonus):</strong>
                    يُصرف للمؤسس <strong>بونص إضافي قدره 1%</strong> إذا تجاوزت أرباح الشركة سقف الـ <strong>100 مليون دولار</strong>، وذلك علاوةً على نسبة الـ 20% والراتب التنفيذي.
                  </div>
                </li>
              </ul>`;

const bonusEn = `
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.11</span>
                  <div>
                    <strong className="text-white block mb-1">Super-Profit Bonus:</strong>
                    An additional <strong>1% bonus</strong> is paid to the Founder if the company's profits exceed the <strong>$100 Million threshold</strong>, on top of the 20% equity and CEO salary.
                  </div>
                </li>
              </ul>`;

content = content.replace(/<\/ul>\s*\)\s*:\s*\(/g, bonusAr + '\n) : (');
content = content.replace(/<\/ul>\s*\)\s*}/g, bonusEn + '\n)}');

fs.writeFileSync(file, content);
console.log("Patched Contract 3");
