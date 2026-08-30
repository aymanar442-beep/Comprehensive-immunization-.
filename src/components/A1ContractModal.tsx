import React from 'react';
import { X, FileText, CheckCircle2, Shield, Lock, Briefcase, Activity } from 'lucide-react';
import { AppLanguage } from '../types';

interface A1ContractModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: AppLanguage;
}

export const A1ContractModal: React.FC<A1ContractModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#020617]/90 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-[#0f172a] border border-[#00d2ff]/40 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,210,255,0.15)] relative">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#0f172a]/95 backdrop-blur-md border-b border-[#1e293b] p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-950/50 border border-blue-500/30 flex items-center justify-center">
              <FileText className="w-6 h-6 text-[#00d2ff]" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white uppercase tracking-wider font-mono">
                {lang === 'ar' ? 'العقد السيادي لعتاد شاهين A1' : 'SHAHEEN A1 Hardware Term Sheet'}
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                PRE-SEED INVESTMENT & STRATEGIC OPERATIONAL PARTNERSHIP
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8 font-mono">
          
          {/* Executive Summary */}
          <div className="space-y-4">
            <h4 className="text-[#00d2ff] font-bold text-lg border-b border-slate-800 pb-2">
              1. EXECUTIVE SUMMARY & CAPITAL STRUCTURE
            </h4>
            <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 space-y-3 text-sm text-slate-300">
              <p><strong className="text-white">Project Name:</strong> SHAHEEN APEX AI</p>
              <p><strong className="text-white">Founder & Sole Inventor:</strong> Eng. Ayman Al-Araishi (The Godfather)</p>
              <p><strong className="text-white">Total Pre-Seed Ask:</strong> $600,000 USD for a 15% Strategic Equity Stake</p>
              <p><strong className="text-white">Post-Money Valuation:</strong> $4,000,000 USD</p>
              <div className="mt-4 p-4 bg-emerald-950/20 border border-emerald-500/20 rounded-lg">
                <p className="text-emerald-400 font-bold mb-2">Investment Tranches:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Tranche 1 ($150k):</strong> Immediate execution, IP assignment, WIPO/USPTO filings, Founder onboarding.</li>
                  <li><strong>Tranche 2 ($450k):</strong> Production & Scale, Hardware Tooling, PCB Manufacturing, Baseline deployment.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="space-y-4">
            <h4 className="text-[#00d2ff] font-bold text-lg border-b border-slate-800 pb-2">
              2. INTELLECTUAL PROPERTY & SOLE INVENTOR RIGHTS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <Shield className="w-5 h-5 text-amber-400 mb-2" />
                <strong className="text-white block mb-1">Sole Inventor Credit</strong>
                <span className="text-slate-400">All USPTO, WIPO, and international patents shall legally state Ayman Al Araishi as the Sole Inventor and Technology Author.</span>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <Lock className="w-5 h-5 text-amber-400 mb-2" />
                <strong className="text-white block mb-1">Source Code Secrecy</strong>
                <span className="text-slate-400">Algorithms remain locked under strict NDA. No reverse-engineering or independent monetization allowed.</span>
              </div>
            </div>
          </div>

          {/* Strategic Mandate */}
          <div className="space-y-4">
            <h4 className="text-[#00d2ff] font-bold text-lg border-b border-slate-800 pb-2">
              3. STRATEGIC 3-YEAR FULL OPERATIONAL MANDATE
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#00d2ff] shrink-0" />
                <span><strong className="text-white">Turnkey Responsibility:</strong> Investor assumes 100% operational, manufacturing, logistics, and global marketing execution for 36 months.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#00d2ff] shrink-0" />
                <span><strong className="text-white">Founder Handover:</strong> After 36 months, global distribution rights seamlessly hand over to the Founder's independent HQ.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#00d2ff] shrink-0" />
                <span><strong className="text-white">Marketing Expenditure:</strong> 100% funded by the Strategic Investor. No advertising costs deducted from the $600k Pre-Seed capital.</span>
              </li>
            </ul>
          </div>

          {/* Capital Allocation & Financial Model */}
          <div className="space-y-4">
            <h4 className="text-[#00d2ff] font-bold text-lg border-b border-slate-800 pb-2">
              4. CAPITAL ALLOCATION & FINANCIAL MODEL
            </h4>
            <div className="bg-blue-950/20 p-5 rounded-xl border border-blue-500/20 text-sm">
              <p className="text-blue-400 font-bold mb-3">Freemium SaaS Projections (Hardware Unit Cost: $50 / Retail: $399)</p>
              <div className="space-y-2 text-slate-300">
                <p className="flex justify-between border-b border-slate-800 pb-1"><span>Year 1 Hardware Sales (1,000 Units):</span> <strong className="text-white">$399,000 USD</strong></p>
                <p className="flex justify-between border-b border-slate-800 pb-1"><span>Premium SaaS (25% Conversion @ $180/yr):</span> <strong className="text-white">$45,000 USD</strong></p>
                <p className="flex justify-between pt-1"><span>Total Projected Year 1 Revenue:</span> <strong className="text-emerald-400">$444,000 USD</strong></p>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-slate-800 text-center">
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#00d2ff] hover:from-[#0369a1] hover:to-[#0ea5e9] text-white font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(0,210,255,0.3)]"
            >
              {lang === 'ar' ? 'إغلاق ومتابعة' : 'Close Document'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
