'use client';

import React, { useState } from 'react';
import { NoiseBackground } from "@/components/ui/noise-background";
import { 
  Banknote, 
  ShieldCheck, 
  FileCheck, 
  Lock, 
  ArrowRight, 
  CreditCard,
  CheckCircle2,
  HeartHandshake,
  BadgeCheck
} from 'lucide-react';

export default function Donate() {
  const [frequency, setFrequency] = useState<string>('one-time');
  const [amount, setAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState<string>('');

  const amounts = [25, 50, 100, 250];

  const handleAmountClick = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount(null);
  };



  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a237e] tracking-tight mb-3">
            Secure Donation
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Your contribution empowers global change. Every drop counts.
          </p>
          <p className="mt-2 text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-md px-3 py-1.5 inline-flex items-center gap-1.5 font-medium">
            <span className="text-amber-500">⚠</span> This is a demo page — no real transactions will be processed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Form Area (Left Column) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Stepper */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-6">
              <div className="flex items-center justify-between max-w-2xl mx-auto relative">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-slate-100 z-0 rounded-full"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 h-1 bg-[#1a237e] z-0 rounded-full transition-all duration-500"></div>
                
                {['Amount', 'Payment', 'Details'].map((step, index) => (
                  <div key={step} className="relative z-10 flex flex-col items-center bg-white px-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-2 transition-colors
                      ${index === 0 ? 'bg-[#1a237e] text-white shadow-md' : 'bg-slate-100 text-slate-400 border border-slate-200'}`}>
                      {index + 1}
                    </div>
                    <span className={`text-sm font-semibold ${index === 0 ? 'text-[#1a237e]' : 'text-slate-400'}`}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Step: Amount */}
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
              <div className="p-8">
                
                {/* Section Title */}
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-orange-100 p-2 rounded-lg text-[#ea580c]">
                    <Banknote size={24} strokeWidth={2.5} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1a237e]">Select Amount</h2>
                </div>

                {/* Frequency Toggle */}
                <div className="flex bg-slate-100 p-1 rounded-xl w-full max-w-md mx-auto mb-10">
                  <button
                    onClick={() => setFrequency('one-time')}
                    className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all duration-200 ${
                      frequency === 'one-time' 
                        ? 'bg-white text-[#1a237e] shadow-sm ring-1 ring-slate-200/50' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    onClick={() => setFrequency('monthly')}
                    className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all duration-200 ${
                      frequency === 'monthly' 
                        ? 'bg-white text-[#1a237e] shadow-sm ring-1 ring-slate-200/50' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    Monthly
                  </button>
                </div>

                {/* Amount Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {amounts.map((val) => (
                    <button
                      key={val}
                      onClick={() => handleAmountClick(val)}
                      className={`relative px-4 py-5 rounded-xl border-2 text-xl font-bold transition-all duration-200
                        ${amount === val 
                          ? 'border-[#1a237e] bg-indigo-50/50 text-[#1a237e] shadow-inner' 
                          : 'border-slate-200 text-slate-600 hover:border-[#1a237e]/30 hover:bg-slate-50'
                        }`}
                    >
                      ${val}
                      {val === 50 && (
                        <span className="absolute -top-3 -right-2 bg-[#1a237e] text-white text-[10px] uppercase font-black px-3 py-1 rounded-full shadow-md transform rotate-3">
                          Popular
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="relative mb-10">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-slate-400 font-bold text-lg">$</span>
                  </div>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Custom Amount"
                    className="w-full pl-10 pr-4 py-4 rounded-xl border-2 border-slate-200 text-lg font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1a237e] focus:ring-4 focus:ring-indigo-50 transition-all"
                  />
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <button className="group w-full md:w-auto bg-[#ea580c] hover:bg-[#d94a06] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40">
                    <span>Continue to Payment</span>
                    <ArrowRight size={20} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>

            {/* Next Step Preview (Payment Method) */}
            <div className="bg-white/60 rounded-xl border border-slate-200 p-5 flex items-center justify-between text-slate-400 cursor-not-allowed">
              <div className="flex items-center space-x-3">
                <CreditCard size={20} />
                <span className="font-semibold text-lg">Payment Method</span>
              </div>
              <ChevronDownIcon />
            </div>

          </div>

          {/* Sidebar Area (Right Column) */}
          <div className="lg:col-span-4">
            <NoiseBackground 
              containerClassName="bg-white/80 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden sticky top-8"
              className="p-8"
              gradientColors={[
                "rgba(26, 35, 126, 0.15)",   /* Primary blue */
                "rgba(234, 88, 12, 0.15)",   /* Secondary orange */
                "rgba(255, 255, 255, 0)"     /* Fade out */
              ]}
              noiseIntensity={0.3}
            >
                <h3 className="text-xl font-extrabold text-[#1a237e] mb-8 flex items-center space-x-2">
                  <HeartHandshake className="text-[#ea580c]" size={24} />
                  <span>Why Give to Crowdera?</span>
                </h3>

                <div className="space-y-8">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                        <ShieldCheck className="text-[#1a237e]" size={20} strokeWidth={2.5} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Transparent Stewardship</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        95% of your donation goes directly to field programs. Financial reports are public and audited.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                        <FileCheck className="text-[#1a237e]" size={20} strokeWidth={2.5} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Tax Deductible</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        We are a registered 501(c)(3) organization. You will receive an instant receipt for your records.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                        <Lock className="text-[#1a237e]" size={20} strokeWidth={2.5} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Secure Checkout</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Your payment information is encrypted and securely processed using industry standards.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-10 pt-6 border-t border-slate-100 flex justify-center items-center space-x-6 text-slate-400">
                  <BadgeCheck size={24} className="hover:text-[#1a237e] transition-colors cursor-pointer" />
                  <ShieldCheck size={24} className="hover:text-[#1a237e] transition-colors cursor-pointer" />
                  <CheckCircle2 size={24} className="hover:text-[#1a237e] transition-colors cursor-pointer" />
                </div>
            </NoiseBackground>
          </div>

        </div>
      </div>
    </div>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}
