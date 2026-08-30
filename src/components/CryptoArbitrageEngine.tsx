import React, { useState, useEffect } from 'react';
import { AppLanguage } from '../types';
import { CyberFalconLogo } from './CyberFalconLogo';
import { DualLayerSecurity, WealthExecutionResult, PredictiveRadar, RadarTelemetry } from '../utils/cryptoAlgorithms';
import { ShieldAlert, Zap, Lock, Activity, ShieldCheck, Cpu, Play, CheckCircle2, AlertTriangle, Scale } from 'lucide-react';

interface CryptoArbitrageEngineProps {
  lang: AppLanguage;
}

export const CryptoArbitrageEngine: React.FC<CryptoArbitrageEngineProps> = ({ lang }) => {
  const [asset, setAsset] = useState('BTC/USDT');
  const [price, setPrice] = useState(65432.10);
  const [disclaimerSigned, setDisclaimerSigned] = useState(false);
  const [forcedOverride, setForcedOverride] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  
  const [telemetry, setTelemetry] = useState<RadarTelemetry | null>(null);
  const [result, setResult] = useState<any>(null);

  // Live Price Mock
  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prev => prev + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 15));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDisclaimerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisclaimerSigned(e.target.checked);
    DualLayerSecurity.signLegalDisclaimer(e.target.checked);
  };

  const executeEngine = () => {
    if (!disclaimerSigned) {
      alert(lang === 'ar' ? 'يجب الموافقة على الإقرار القانوني أولاً' : 'Must sign legal disclaimer first');
      return;
    }

    setIsRunning(true);
    setResult(null);

    // Simulate Radar Telemetry instantly
    const radar = PredictiveRadar.scan(asset, price);
    setTelemetry(radar);

    // Delay for visualization of the "Sub-millisecond" Engine
    setTimeout(() => {
      try {
        const outcome = DualLayerSecurity.attemptSovereignTrade(asset, price, forcedOverride);
        setResult(outcome);
      } catch (err: any) {
        setResult({ status: 'ERROR', message: err.message });
      }
      setIsRunning(false);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Header Container */}
      <div className="bg-[#0f172a] border border-[#00d2ff]/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,210,255,0.1)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="flex items-start gap-4 relative z-10">
          <CyberFalconLogo size="lg" glow={true} />
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#00d2ff] text-slate-950 font-mono tracking-widest uppercase">
                {lang === 'ar' ? 'منظومة الذكاء المالي السيادي' : 'Sovereign Financial AI'}
              </span>
              <span className="text-[10px] text-emerald-400 font-mono font-bold border border-emerald-500/40 px-2 py-0.5 rounded bg-emerald-950/50 flex items-center gap-1">
                <Activity className="w-3 h-3" /> LIVE
              </span>
            </div>
            <h2 className="text-2xl font-black text-white tracking-wider">
              {lang === 'ar' ? 'شاهين كريبتو - محرك الأرباح الجنائية' : 'Shaheen Crypto - Sovereign Wealth Engine'}
            </h2>
            <p className="text-xs text-slate-400 mt-2 max-w-2xl leading-relaxed">
              {lang === 'ar' 
                ? 'الاندماج الأعظم بين كود الأمان السلوكي وتدفق النموذج التفاعلي. محرك ذكاء اصطناعي يدرس سلوك المنصات، يكتشف الفخاخ، ويفرض تثبيت الربح بصرامة.'
                : 'The ultimate fusion of Behavioral Security Code and Interactive Flow. An AI engine that studies platform behavior, detects traps, and forces profit locking.'}
            </p>
          </div>
        </div>

        {/* Live Asset Ticker */}
        <div className="bg-[#020617] border border-[#1e293b] rounded-xl p-4 flex flex-col items-center justify-center min-w-[200px] shrink-0">
          <span className="text-xs font-mono text-slate-400 mb-1">TARGET ASSET</span>
          <select 
            value={asset} 
            onChange={(e) => setAsset(e.target.value)}
            className="bg-transparent text-xl font-black text-white font-mono text-center outline-none cursor-pointer"
          >
            <option value="BTC/USDT">BTC/USDT</option>
            <option value="ETH/USDT">ETH/USDT</option>
            <option value="SOL/USDT">SOL/USDT</option>
          </select>
          <div className="text-2xl font-black text-[#00d2ff] font-mono mt-2 tracking-tight">
            ${price.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Dual Layer Legal & Controls */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-xl p-5 shadow-xl">
            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2 font-mono border-b border-slate-800 pb-3">
              <Scale className="w-4 h-4 text-amber-400" />
              {lang === 'ar' ? 'هيكل الأمان المزدوج (الدرع القانوني)' : 'Dual-Layer Security (Legal Shield)'}
            </h3>

            <label className="flex items-start gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={disclaimerSigned}
                onChange={handleDisclaimerChange}
                className="mt-1 w-4 h-4 rounded border-slate-700 text-[#00d2ff] focus:ring-[#00d2ff] bg-slate-900 cursor-pointer"
              />
              <span className="text-[11px] text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                {lang === 'ar' 
                  ? 'أقر بأن التطبيق يعمل كدرع حماية بنسبة 100%، وأتحمل المسؤولية القانونية الكاملة عن أي أوامر تداول يدوية تتجاوز حماية الذكاء الاصطناعي.' 
                  : 'I acknowledge the AI provides 100% protection. I assume full legal responsibility for any manual overrides that bypass the AI.'}
              </span>
            </label>

            <div className="mt-4 pt-4 border-t border-slate-800">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-[11px] text-slate-400 font-mono">
                  {lang === 'ar' ? 'تجاوز يدوّي للمحرك (Override)' : 'Manual AI Override'}
                </span>
                <input 
                  type="checkbox" 
                  checked={forcedOverride}
                  onChange={(e) => setForcedOverride(e.target.checked)}
                  disabled={!disclaimerSigned}
                  className="w-8 h-4 bg-slate-700 rounded-full appearance-none checked:bg-rose-600 transition-colors cursor-pointer disabled:opacity-50 relative after:content-[''] after:absolute after:w-3 after:h-3 after:bg-white after:rounded-full after:top-0.5 after:left-0.5 checked:after:translate-x-4 after:transition-transform"
                />
              </label>
            </div>
          </div>

          <button
            onClick={executeEngine}
            disabled={!disclaimerSigned || isRunning}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#00d2ff] hover:from-[#0369a1] hover:to-[#0ea5e9] text-white font-black text-sm tracking-widest uppercase shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-mono"
          >
            {isRunning ? (
              <span className="animate-pulse">{lang === 'ar' ? 'جاري الفحص واستشعار السوق...' : 'SCANNING MARKET...'}</span>
            ) : (
              <>
                <Play className="w-5 h-5 fill-current" />
                {lang === 'ar' ? 'تفعيل محرك الأثرياء (Execute)' : 'Execute Wealth Engine'}
              </>
            )}
          </button>
        </div>

        {/* Right Column: Engine Console & Results */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Telemetry Radar Screen */}
          <div className="bg-[#020617] border border-slate-800 rounded-xl p-5 shadow-inner relative overflow-hidden font-mono">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800/60">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
                <Cpu className="w-4 h-4" />
                {lang === 'ar' ? 'الرادار التنبؤي ومحاكاة مونت كارلو' : 'Predictive Radar & Monte Carlo Simulation'}
              </div>
              <span className="text-[10px] text-slate-500">150,000 PATHS / MILLISECOND</span>
            </div>

            {telemetry ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                  <div className="text-[10px] text-slate-400 mb-1">VOLATILITY (0-1)</div>
                  <div className={`text-lg font-black ${telemetry.volatilityScore > 0.65 ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {telemetry.volatilityScore.toFixed(3)}
                  </div>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                  <div className="text-[10px] text-slate-400 mb-1">PREDICTED TARGET</div>
                  <div className="text-lg font-black text-[#00d2ff]">
                    ${telemetry.targetPrice.toFixed(2)}
                  </div>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                  <div className="text-[10px] text-slate-400 mb-1">LATENCY PING</div>
                  <div className="text-lg font-black text-amber-400">
                    {telemetry.crossExchangeLatency.toFixed(2)}ms
                  </div>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                  <div className="text-[10px] text-slate-400 mb-1">RADAR VERDICT</div>
                  <div className={`text-sm font-black mt-1 ${telemetry.isSafeToEngage ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {telemetry.isSafeToEngage ? 'SAFE TO ENGAGE' : 'HIGH RISK'}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-slate-600 space-y-2">
                <Activity className="w-8 h-8 opacity-20" />
                <span className="text-[11px] uppercase tracking-widest">
                  {lang === 'ar' ? 'في انتظار الإطلاق...' : 'Awaiting Execution...'}
                </span>
              </div>
            )}
          </div>

          {/* Execution Result Box */}
          {result && (
            <div className={`p-5 rounded-xl border-2 font-mono shadow-lg transition-all animate-in zoom-in-95 duration-300 ${
              result.status === 'EXECUTED_WITH_ABSOLUTE_SAFETY' ? 'bg-emerald-950/30 border-emerald-500/50' : 
              result.status === 'BLOCKED_BY_AI' ? 'bg-blue-950/30 border-[#00d2ff]/50' : 
              'bg-rose-950/30 border-rose-500/50'
            }`}>
              <div className="flex items-start gap-3">
                {result.status === 'EXECUTED_WITH_ABSOLUTE_SAFETY' && <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />}
                {result.status === 'BLOCKED_BY_AI' && <ShieldCheck className="w-6 h-6 text-[#00d2ff] shrink-0" />}
                {result.status === 'EXECUTED_UNDER_USER_LIABILITY' && <AlertTriangle className="w-6 h-6 text-rose-400 shrink-0" />}
                
                <div className="w-full space-y-2">
                  <h4 className={`text-sm font-black tracking-widest uppercase ${
                    result.status === 'EXECUTED_WITH_ABSOLUTE_SAFETY' ? 'text-emerald-400' : 
                    result.status === 'BLOCKED_BY_AI' ? 'text-[#00d2ff]' : 'text-rose-400'
                  }`}>
                    {result.status.replace(/_/g, ' ')}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                    {result.message}
                  </p>

                  {result.executionData && (
                    <div className="mt-4 pt-3 border-t border-emerald-900/50 grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-[10px] text-slate-500 mb-1">LOCKED PROFIT MARGIN</div>
                        <div className="text-lg font-black text-emerald-400">
                          +${result.executionData.lockedProfitMargin.toFixed(2)}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 mb-1">EXECUTION SPEED</div>
                        <div className="text-sm font-bold text-[#00d2ff]">
                          {result.executionData.executionSpeed}
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-[10px] text-slate-500 mb-1">IMMUTABLE AUDIT HASH (SHA-256)</div>
                        <div className="text-[10px] font-mono text-slate-400 break-all bg-[#020617] p-2 rounded border border-slate-800">
                          {result.executionData.auditHash}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
