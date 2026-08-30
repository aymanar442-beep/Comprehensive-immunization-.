const fs = require('fs');
const file = 'src/components/FounderContractModal.tsx';
let content = fs.readFileSync(file, 'utf8');

const newClausesAr = `
              <ul className="space-y-4 list-none text-slate-300 text-xs sm:text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.1</span>
                  <div>
                    <strong className="text-white block mb-1">المنصب والراتب التنفيذي (CEO & Salary):</strong>
                    يُعين المهندس أيمن العَرَّاب في منصب "المدير التنفيذي" (CEO) براتب شهري قدره <strong>30,000 دولار أمريكي</strong> (360,000 دولار سنوياً)، معفاة تماماً من الضرائب.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.2</span>
                  <div>
                    <strong className="text-white block mb-1">الأرباح التشغيلية (Net Equity):</strong>
                    يستحق المؤسس نسبة <strong>20% من صافي أرباح</strong> كافة الطلبات والخدمات المقدمة (معفاة من الضرائب تماماً). تُدفع هذه النسبة مجدولة على <strong>4 دفعات متساوية سنوياً</strong> (كل 3 أشهر كدفعة كاملة عن الاستحقاق الماضي).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.3</span>
                  <div>
                    <strong className="text-white block mb-1">مكافآت توقيع العقد (Signing Bonus):</strong>
                    صرف مبلغ <strong>25,000 دولار</strong> فور الاتفاق الشفهي لإنهاء الأوراق الرسمية والسفر، يتبعه مبلغ <strong>125,000 دولار كـ "مكافأة توقيع العقد"</strong> تدفع فور التوقيع النهائي.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.4</span>
                  <div>
                    <strong className="text-white block mb-1">التسهيلات اللوجستية والسيادية (Logistics & Residency):</strong>
                    تتكفل الشركة المنفذة/الداعمة بكافة تكاليف (السفر، الإقامة الفاخرة الدائمة، الفواتير). كما تتكفل باستخراج إقامة دائمة قابلة للتحويل إلى <strong>جنسية</strong>، مع تأمين كافة الأوراق التي تخول المؤسس حرية التنقل العالمي.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.5</span>
                  <div>
                    <strong className="text-white block mb-1">نمط الإدارة والمهل (Remote Management & Grace Period):</strong>
                    يتمتع المؤسس بإدارة مرنة <strong>(دوام غير ملتزم عن بعد)</strong> لضمان حرية السفر والتطوير. يُمْنح المؤسس مدة <strong>6 أشهر</strong> كفترة سماح قبل الالتحاق بالبرنامج، مع إمكانية التمديد في حال دعوته للاشتراك بأي عمل فني.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.6</span>
                  <div>
                    <strong className="text-white block mb-1">فصل الأعمال الخارجية (External Roles):</strong>
                    يُقر العقد أن أي أدوار خارجية (مشهد تمثيلي، كتابة سيناريو... إلخ) هي أعمال مستقلة كلياً لا علاقة للشركة بها ولا يحق للشركة أي حصة منها.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.7</span>
                  <div>
                    <strong className="text-white block mb-1">حقوق الإصدارات وملكية الشركة (Versions & Equity):</strong>
                    كافة الإصدارات اللاحقة للمشروع يحق للشركة أخذ نسبتها المقدرة منها مدى الحياة. <strong>إلا</strong> في حال حدوث خلل يستدعي فض النزاع والشراكة من قبل المهندس أيمن <strong>حصراً</strong>. من أسباب فض النزاع: محاولة إقصاء المؤسس من الإدارة بشكل تام، أو إخضاعه لإدارة تحاسبه.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.8</span>
                  <div>
                    <strong className="text-white block mb-1">حصرية "شاهين" للقطاعات الأخرى (Exclusive Extended Architectures):</strong>
                    يحق للمؤسس ابتكار نسخة مشابهة موسعة تستهدف قطاعات غير (السينما والتلفزيون والإذاعة). هذه النسخ الموسعة ستكون <strong>محتكرة بالكامل لشركة "شاهين"</strong>، ولا يحق للشركة الشريكة أي تدخل أو حصة فيها.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.9</span>
                  <div>
                    <strong className="text-white block mb-1">الجدوى الاقتصادية وسرية البراءة (Feasibility & Patent):</strong>
                    يوضح العقد أن خسائر تسريب المشاريع الضخمة تقدر بمئات الملايين، وتطبيق "شاهين" سيحول هذه الخسائر إلى عائدات فلكية مضمونة في المرحلة الأولى، وتتضاعف مع كل تحديث. كما يُمنع كشف الشفرة الأساسية للعلامة المائية درءاً لانتهاك براءة اختراع المطور.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.10</span>
                  <div>
                    <strong className="text-white block mb-1">الشراكة في التطبيق فقط (App Partnership Scope):</strong>
                    الشراكة مع المستثمرين تقتصر <strong>حصراً على تطبيق "شاهين"</strong>. ولا يُعد المستثمرون شركاء في كيان شركة "شاهين" الأم. وتظل الملكية الكاملة للمشروع والخوارزمية عائدة لشركة المؤسس.
                  </div>
                </li>
              </ul>
`;

const newClausesEn = `
              <ul className="space-y-4 list-none text-slate-300 text-xs sm:text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.1</span>
                  <div>
                    <strong className="text-white block mb-1">CEO Position & Salary:</strong>
                    Eng. Ayman Al-Araishi is appointed as Chief Executive Officer (CEO) with a monthly salary of <strong>$30,000 USD</strong> ($360,000 annually), strictly tax-free.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.2</span>
                  <div>
                    <strong className="text-white block mb-1">Operational Net Equity:</strong>
                    The Founder is entitled to <strong>20% of net profits</strong> from all requests and services provided (strictly tax-free). Distributed in <strong>4 equal annual installments</strong> (every 3 months covering the past quarter's equity).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.3</span>
                  <div>
                    <strong className="text-white block mb-1">Signing Bonuses:</strong>
                    Immediate payout of <strong>$25,000</strong> upon verbal agreement for logistics and paperwork, followed by a <strong>$125,000 "Signing Bonus"</strong> upon final contract signature.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.4</span>
                  <div>
                    <strong className="text-white block mb-1">Logistics & Sovereign Residency:</strong>
                    The Partnering Company covers all costs (travel, luxury permanent residence, utility bills). Furthermore, the company secures permanent residency convertible to <strong>citizenship</strong>, with all documentation enabling global mobility.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.5</span>
                  <div>
                    <strong className="text-white block mb-1">Remote Management & Grace Period:</strong>
                    The Founder enjoys flexible <strong>remote administration</strong> to allow for travel and development. Granted a <strong>6-month grace period</strong> before joining the program, with possible extensions if engaged in artistic projects.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.6</span>
                  <div>
                    <strong className="text-white block mb-1">Separation of External Roles:</strong>
                    Any external engagements (acting, scriptwriting, etc.) are entirely independent. The company has no right or equity in these external artistic endeavors.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.7</span>
                  <div>
                    <strong className="text-white block mb-1">Lifecycle Versions & Equity:</strong>
                    The company retains its agreed equity in all future project versions for life, <strong>unless</strong> a breach causes dispute termination initiated <strong>solely by Eng. Ayman</strong>. Grounds for termination include: attempting to remove the Founder from administration or imposing restrictive oversight.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.8</span>
                  <div>
                    <strong className="text-white block mb-1">Shaheen Exclusivity (Non-Cinema Vectors):</strong>
                    The Founder reserves the right to create an expanded version targeting sectors outside (Cinema, TV, and Radio). These versions will be <strong>monopolized strictly by the "Shaheen" entity</strong>, and the Partnering Company has no claim or equity in them.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.9</span>
                  <div>
                    <strong className="text-white block mb-1">Economic Feasibility & Patent Secrecy:</strong>
                    By preventing multi-million dollar leakages, "Shaheen" converts losses into guaranteed astronomical revenues, compounding with each update. The core cryptographic watermark matrix remains strictly confidential to protect the developer's patent.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold font-mono">3.10</span>
                  <div>
                    <strong className="text-white block mb-1">Partnership Scope (App Only):</strong>
                    Investors are partners <strong>exclusively in the "Shaheen App"</strong>. They are NOT partners in the parent "Shaheen Company". Total ownership of the algorithms and overarching project rests entirely with the Founder's company.
                  </div>
                </li>
              </ul>
`;

const searchStr = `              <ul className="space-y-3 list-disc list-inside text-slate-300 text-xs leading-relaxed">                <li>                  <strong className="text-white">النسخة الأولى (إصدار هوليوود):</strong> 80% للشركاء والمستثمرين، و 20% للمؤسس المهندس أيمن العَرَّاب.                </li>                <li>                  <strong className="text-white">المشاريع الموسعة (تأسيس الكيان المنفصل):</strong> في حال التوسع للرؤية المستقبلية بتأسيس "كيان الشاهين" الشامل، يُبرم عقد منفصل بحصص <strong>85% لشركة الشاهين</strong> (بقيادة المهندس أيمن العَرَّاب كمدير تنفيذي - CEO)، و <strong>15% للشركة المنفذة</strong>.                </li>                <li>                  <strong className="text-white">الضمان المالي (Net Profit):</strong> تكون الحصة (85%) صافي ربح خالي تماماً من الضرائب. وتتحمل الشركة المنفذة كافة تكاليف الورشات، المصاريف التشغيلية، والضرائب الدولية.                </li>              </ul>`;

// Regex replacement to handle whitespace differences safely
const regex = /<ul className="space-y-3 list-disc list-inside text-slate-300 text-xs leading-relaxed">[\s\S]*?<\/ul>/g;

content = content.replace(regex, `{lang === 'ar' ? (\n${newClausesAr}\n) : (\n${newClausesEn}\n)}`);

fs.writeFileSync(file, content);
console.log("Patched Founder Contract Modal");
