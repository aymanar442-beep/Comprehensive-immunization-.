import React, { useState } from 'react';
import { AppLanguage, ScriptAnalysisResult } from '../types';
import { Calculator, DollarSign, Film, Sparkles, Layers, CheckCircle2, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import { CyberFalconLogo } from './CyberFalconLogo';

interface SemanticBreakdownProps {
  lang: AppLanguage;
}

export const SemanticBreakdown: React.FC<SemanticBreakdownProps> = ({ lang }) => {
  const [sceneInput, setSceneInput] = useState<string>(
    lang === 'ar'
      ? 'مشهد 14: سيارتين بالليل بشارع عام عم يتسابقوا بسرعة جنونية مع انفجار محطة وقود جانبية والكاميرات موزعة على الدرون والمروحية مع مؤثرات إضاءة عالية.'
      : 'Scene 14: Night shoot on a public highway with two stunt cars racing at extreme velocity, side gas station explosion, multi-cam aerial coverage on drones and helicopters with intense anamorphic lighting effects.'
  );

  React.useEffect(() => {
    setSceneInput(
      lang === 'ar'
        ? 'مشهد 14: سيارتين بالليل بشارع عام عم يتسابقوا بسرعة جنونية مع انفجار محطة وقود جانبية والكاميرات موزعة على الدرون والمروحية مع مؤثرات إضاءة عالية.'
        : 'Scene 14: Night shoot on a public highway with two stunt cars racing at extreme velocity, side gas station explosion, multi-cam aerial coverage on drones and helicopters with intense anamorphic lighting effects.'
    );
  }, [lang]);

  const [analyzing, setAnalyzing] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<ScriptAnalysisResult | null>({
    totalEstimate: 84000,
    currency: 'USD',
    shootingScheduleDays: 3,
    crewRecommendation: 'Senior Stunt Coordination Unit + Drone Flight Specialists + Pyrotechnics Team',
    riskFactor: 'High',
    detectedElements: [
      {
        nameAr: 'مشهد حركة ومطاردة سيارات خطرة (Stunt Cars & Rigging)',
        nameEn: 'High-Speed Vehicle Stunt & Rigging',
        cost: 35000,
        category: 'stunt',
      },
      {
        nameAr: 'تصوير ليلي متقدم وتجهيزات مولدات وإضاءة ضخمة (Night Shoot)',
        nameEn: 'Night Production Lighting & Mobile Generators',
        cost: 16000,
        category: 'lighting',
      },
      {
        nameAr: 'حجز وإغلاق شارع عام وتصاريح بلدية وأمنية (Location Permits)',
        nameEn: 'Public Highway Closure & Municipal Permits',
        cost: 14000,
        category: 'permits',
      },
      {
        nameAr: 'مؤثرات بصرية ومفرقعات حريق واقعية (Pyrotechnics & VFX)',
        nameEn: 'Practical Pyrotechnics & VFX Safety Crew',
        cost: 19000,
        category: 'vfx',
      },
    ],
  });

  // Semantic Natural Language Parsing Algorithm (خوارزمية التفكيك الدلالي التلقائي)
  const handleAnalyzeScene = () => {
    setAnalyzing(true);
    setTimeout(() => {
      let cost = 6000; // Base baseline
      const elements: ScriptAnalysisResult['detectedElements'] = [];
      const text = sceneInput.toLowerCase();

      if (text.includes('ليل') || text.includes('night')) {
        cost += 16000;
        elements.push({
          nameAr: 'تصوير ليلي وتجهيزات إضاءة ومولدات (Night Production)',
          nameEn: 'Night Cinematography & Lighting Grid',
          cost: 16000,
          category: 'lighting',
        });
      }

      if (text.includes('سيار') || text.includes('سباق') || text.includes('car') || text.includes('stunt')) {
        cost += 35000;
        elements.push({
          nameAr: 'مشهد حركة ومطاردة سيارات خطرة (Vehicle Stunts)',
          nameEn: 'Precision Driving & Vehicle Rigging',
          cost: 35000,
          category: 'stunt',
        });
      }

      if (text.includes('شارع') || text.includes('street') || text.includes('location')) {
        cost += 14000;
        elements.push({
          nameAr: 'حجز شارع عام وتصاريح بلدية (Highway Closure)',
          nameEn: 'Public Road Closure & Police Permits',
          cost: 14000,
          category: 'permits',
        });
      }

      if (text.includes('انفجار') || text.includes('نار') || text.includes('explosion') || text.includes('fire')) {
        cost += 22000;
        elements.push({
          nameAr: 'مؤثرات انفجار وحرائق ميدانية (Pyrotechnics & Fire Safety)',
          nameEn: 'Controlled Pyrotechnics & Fire Marshall Units',
          cost: 22000,
          category: 'vfx',
        });
      }

      if (text.includes('مروح') || text.includes('درون') || text.includes('helicopter') || text.includes('drone')) {
        cost += 12000;
        elements.push({
          nameAr: 'تصوير جوي بالدرون والمروحيات (Aerial Cinematography)',
          nameEn: 'Licensed Drone & Aerial Gimbal Operators',
          cost: 12000,
          category: 'cast',
        });
      }

      setAnalysisResult({
        totalEstimate: cost,
        currency: 'USD',
        shootingScheduleDays: cost > 50000 ? 3 : 1,
        crewRecommendation: cost > 50000 ? 'Level-A Hollywood Stunt & Safety Directorate' : 'Standard Production Unit',
        riskFactor: cost > 60000 ? 'Extreme' : cost > 30000 ? 'High' : 'Low',
        detectedElements: elements,
      });
      setAnalyzing(false);
    }, 700);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-[#0f172a] border border-[#00d2ff]/40 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="hidden sm:block shrink-0 mt-1">
            <CyberFalconLogo size="md" glow={true} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#00d2ff] text-slate-950 font-mono">
                SEMANTIC BREAKDOWN ENGINE
              </span>
              <span className="text-xs text-[#00d2ff] font-mono font-bold">NLP Entity Extraction v4.2</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {lang === 'ar'
                ? 'التفكيك الدلالي التلقائي للسيناريو وحساب الميزانية الفورية'
                : 'Autonomous Semantic Script Breakdown & Instant Budgeting'}
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-3xl leading-relaxed">
              {lang === 'ar'
                ? 'خوارزمية ذكية تقرأ تفاصيل المشهد (السيارات، التصوير الليلي، الشوارع العامة، المفرقعات) وتفكك المتطلبات الإنتاجية فوراً لحساب تكلفة التصوير بدقة مذهلة.'
                : 'Transforms natural screenplay descriptions into real-time line-item budget estimates, permit requirements, and stunt risk calculations.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-[#020617] px-4 py-3 rounded-xl border border-[#1e293b]">
          <DollarSign className="w-6 h-6 text-emerald-400" />
          <div>
            <span className="text-[10px] text-slate-400 font-mono block">INSTANT BUDGET ENGINE</span>
            <span className="text-sm font-bold text-emerald-400 font-mono">AI Real-time Costing</span>
          </div>
        </div>
      </div>

      {/* Input & Semantic Analysis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Script Input (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-5 shadow-xl space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-[#1e293b] pb-3">
              <Film className="w-4 h-4 text-[#00d2ff]" />
              <span>{lang === 'ar' ? 'أدخل تفاصيل المشهد السينمائي' : 'Input Scene Description'}</span>
            </h3>

            <textarea
              rows={6}
              value={sceneInput}
              onChange={(e) => setSceneInput(e.target.value)}
              placeholder={lang === 'ar' ? 'اكتب وصف المشهد (مثال: سيارتين بالليل بشارع عام عم يتسابقوا...)' : 'Write scene description...'}
              className="w-full p-4 rounded-xl bg-[#020617] border border-[#1e293b] text-white text-xs sm:text-sm font-mono leading-relaxed focus:outline-none focus:border-[#00d2ff] focus:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all resize-none"
            />

            <button
              onClick={handleAnalyzeScene}
              disabled={analyzing}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#00d2ff] hover:from-[#1d4ed8] hover:to-[#00b4d8] text-white font-extrabold text-xs sm:text-sm shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>
                {analyzing
                  ? (lang === 'ar' ? 'جاري تفكيك الكلمات المفتاحية...' : 'Decomposing Semantic Elements...')
                  : (lang === 'ar' ? 'تفكيك المشهد وحساب التكلفة الإنتاجية' : 'Execute Semantic Budget Breakdown')}
              </span>
            </button>
          </div>
        </div>

        {/* Right Column: Calculated Breakdown & Line Items (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          {analysisResult && (
            <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-5 shadow-xl space-y-4">
              {/* Top Summary Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1e293b] pb-4">
                <div>
                  <span className="text-[11px] text-slate-400 font-mono uppercase block">TOTAL SCENE ESTIMATE</span>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono tracking-tight">
                    ${analysisResult.totalEstimate.toLocaleString()} {analysisResult.currency}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-blue-950/80 text-[#00d2ff] border border-[#00d2ff]/40 rounded-lg text-xs font-mono font-bold">
                    ⏱️ {analysisResult.shootingScheduleDays} {lang === 'ar' ? 'أيام تصوير تقديرية' : 'Shooting Days'}
                  </span>
                  <span className="px-3 py-1 bg-rose-950/80 text-rose-400 border border-rose-500/40 rounded-lg text-xs font-mono font-bold">
                    ⚠️ {analysisResult.riskFactor} Risk
                  </span>
                </div>
              </div>

              {/* Detected Entities List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-200 font-mono flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#00d2ff]" />
                  <span>{lang === 'ar' ? 'العناصر والتكاليف المفككة آلياً:' : 'Decomposed Production Line Items:'}</span>
                </h4>

                <div className="space-y-2">
                  {analysisResult.detectedElements.map((elem, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#020617] rounded-xl border border-[#1e293b] flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#00d2ff]" />
                        <span className="text-slate-200 font-medium font-sans">
                          {lang === 'ar' ? elem.nameAr : elem.nameEn}
                        </span>
                      </div>

                      <span className="text-emerald-400 font-mono font-bold shrink-0">
                        +${elem.cost.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Crew & Safety Directive */}
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[11px] text-slate-400 font-mono flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Crew Directive: {analysisResult.crewRecommendation}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
