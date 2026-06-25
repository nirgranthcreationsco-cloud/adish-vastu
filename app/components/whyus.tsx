"use client";

import { AlertTriangle, ShieldCheck, Target, UserCheck } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function WhyUsSection() {
  const t = useTranslations('whyUs');
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-orange-100 via-amber-100 to-orange-100 overflow-hidden">
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(251,191,36,0.5) 1px, transparent 0)",
            backgroundSize: "38px 38px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            {t('title')}
          </h2>
          <p className="text-slate-700 text-lg md:text-xl mt-3 max-w-2xl mx-auto">
            {t('subtitle')} <span className="text-amber-700 font-semibold">{t('conflicting')}</span>{t('description')}
          </p>
        </div>

        {/* ROW FORMAT — 4 Key Reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* 1 */}
          <div className="flex gap-4 items-start bg-white border border-amber-200 p-6 rounded-xl backdrop-blur-sm hover:border-amber-400 hover:shadow-lg transition">
            <ShieldCheck className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{t('reason1Title')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('reason1Desc')}
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex gap-4 items-start bg-white border border-amber-200 p-6 rounded-xl backdrop-blur-sm hover:border-amber-400 hover:shadow-lg transition">
            <Target className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{t('reason2Title')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('reason2Desc')}
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex gap-4 items-start bg-white border border-amber-200 p-6 rounded-xl backdrop-blur-sm hover:border-amber-400 hover:shadow-lg transition">
            <UserCheck className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{t('reason3Title')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('reason3Desc')}
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="flex gap-4 items-start bg-white border border-amber-200 p-6 rounded-xl backdrop-blur-sm hover:border-amber-400 hover:shadow-lg transition">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{t('reason4Title')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('reason4Desc')}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
