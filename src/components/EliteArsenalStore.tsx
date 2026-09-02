import React, { useState } from 'react';
import { Shield, Zap, Lock, Terminal, ShieldAlert, Cpu, ArrowRight, Code, Key, ExternalLink } from 'lucide-react';

interface EliteArsenalStoreProps {
  lang: 'ar' | 'en' | 'fr';
}

const PRODUCTS = [
  {
    id: 'zero-interaction-intent',
    nameEn: 'Zero-Interaction Intent Scanner',
    nameAr: 'نظام كشف النوايا الصفري',
    descEn: 'Predictive anomaly suppression script for backend servers. Detects unauthorized telemetry anomalies before they trigger.',
    descAr: 'سكربت تنبؤي لقمع الشذوذ في السيرفرات. يكتشف أي اختراق صامت قبل تنفيذه باستخدام تحليل سلوكي.',
    price: '250',
    type: 'Node.js / Python Script',
    icon: <ShieldAlert className="w-8 h-8" />
  },
  {
    id: 'silent-protection-core',
    nameEn: 'Silent Protection Perimeter',
    nameAr: 'نواة الحماية الصامتة',
    descEn: 'Deploy invisible honeypot layers inside your API routes. Confuses automated scanners and traps zero-day exploits silently.',
    descAr: 'انشر فخاخ غير مرئية داخل واجهات الـ API الخاصة بك. يعطل هجمات الثغرات الصفرية بصمت تام ودون تنبيه الهاكر.',
    price: '150',
    type: 'Middleware (Express/Next.js)',
    icon: <Lock className="w-8 h-8" />
  },
  {
    id: 'crypto-wallet-shield',
    nameEn: 'Web3 Wallet Liveness Check',
    nameAr: 'فحص الحيوية لمحافظ Web3',
    descEn: 'Dynamic biometric-style verification for DApps. Prevents session hijacking during network disconnects or bridging.',
    descAr: 'فحص حيوي ديناميكي لتطبيقات الويب 3. يمنع سرقة الجلسات أثناء انقطاع الشبكة أو التحويل بين الشبكات.',
    price: '100',
    type: 'React / Solidity Module',
    icon: <Cpu className="w-8 h-8" />
  }
];

export const EliteArsenalStore: React.FC<EliteArsenalStoreProps> = ({ lang }) => {
  const isArabic = lang === 'ar';
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  // You can replace this with your actual Binance / MEXC address
  const BINANCE_PAY_ADDRESS = "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"; // Placeholder

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* Header Section */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-950 border border-emerald-500/30 p-8 sm:p-12 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 text-center space-y-4">
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 mb-2">
            <Shield className="w-10 h-10 text-emerald-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            {isArabic ? 'متجر الترسانة السوداء' : 'The Elite Arsenal'}
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            {isArabic 
              ? 'أكواد حماية استباقية وسكربتات سيبرانية متطورة مصممة لكبار المطورين. الدفع فوري عبر USDT والتسليم تلقائي.'
              : 'Pre-emptive security scripts and cybernetic modules for elite developers. Instant USDT checkout & delivery.'}
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <div 
            key={product.id}
            className={`relative p-6 rounded-2xl border transition-all duration-300 ${
              selectedProduct === product.id 
                ? 'bg-emerald-950/40 border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]' 
                : 'bg-slate-900 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/80'
            }`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400">
                {product.icon}
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 font-mono font-bold text-lg">
                ${product.price} <span className="text-xs">USDT</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <h3 className="text-xl font-bold text-white">
                {isArabic ? product.nameAr : product.nameEn}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed min-h-[60px]">
                {isArabic ? product.descAr : product.descEn}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-950 px-3 py-2 rounded-lg w-fit">
                <Code className="w-3.5 h-3.5" />
                <span>{product.type}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedProduct(product.id)}
              className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-emerald-600 text-white font-bold transition-colors flex items-center justify-center gap-2 group"
            >
              <Zap className="w-4 h-4 group-hover:text-amber-300" />
              {isArabic ? 'شراء الكود الآن' : 'Purchase Module'}
            </button>
          </div>
        ))}
      </div>

      {/* Checkout Section (Appears when a product is selected) */}
      {selectedProduct && (
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/40 shadow-2xl animate-in fade-in slide-in-from-bottom-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Terminal className="w-6 h-6 text-emerald-400" />
                  {isArabic ? 'بوابة الدفع اللامركزية (USDT)' : 'Decentralized Checkout (USDT)'}
                </h2>
                <p className="text-slate-400">
                  {isArabic 
                    ? 'سيتم تزويدك برابط تحميل السكربت بمجرد تأكيد وصول الحوالة على شبكة البلوكتشين.'
                    : 'Download link will be provided immediately upon blockchain confirmation.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                  <span className="text-slate-400">{isArabic ? 'المنتج المحدد:' : 'Selected Module:'}</span>
                  <span className="text-white font-bold text-right">
                    {isArabic ? PRODUCTS.find(p => p.id === selectedProduct)?.nameAr : PRODUCTS.find(p => p.id === selectedProduct)?.nameEn}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xl">
                  <span className="text-slate-400">{isArabic ? 'الإجمالي المطلوب:' : 'Total Due:'}</span>
                  <span className="text-emerald-400 font-mono font-black">
                    ${PRODUCTS.find(p => p.id === selectedProduct)?.price} USDT
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-slate-800 flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-48 h-48 bg-white p-2 rounded-xl flex items-center justify-center">
                {/* Simulated QR Code Area */}
                <div className="w-full h-full border-4 border-dashed border-slate-300 flex items-center justify-center flex-col gap-2 text-slate-500 bg-slate-50">
                  <Key className="w-8 h-8" />
                  <span className="text-xs font-bold uppercase">{isArabic ? 'امسح للدفع' : 'Scan to Pay'}</span>
                </div>
              </div>
              
              <div className="w-full space-y-2">
                <label className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                  {isArabic ? 'عنوان الدفع (شبكة TRC20)' : 'USDT Deposit Address (TRC20)'}
                </label>
                <div className="flex items-center gap-2">
                  <input 
                    type="text" 
                    readOnly 
                    value={BINANCE_PAY_ADDRESS}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 px-3 text-slate-300 font-mono text-sm focus:outline-none"
                  />
                  <button 
                    onClick={() => navigator.clipboard.writeText(BINANCE_PAY_ADDRESS)}
                    className="p-2.5 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-white transition-colors"
                  >
                    {isArabic ? 'نسخ' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
