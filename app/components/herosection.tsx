"use client";

import { Award, ChevronRight, Clock, Sparkles, Star, Users } from "lucide-react";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HomeEnergyScoreModal from "./homeenergyscoremodal";
import { useLocale } from "./localeprovider";

export default function HeroSection() {
  const { locale, switchLocale } = useLocale();
  const t = useTranslations('hero');
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [energyScoreOpen, setEnergyScoreOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Language Switcher - Only in Hero Section */}
      <div className="absolute top-24 right-6 z-40">
        <button
          onClick={() => switchLocale(locale === 'en' ? 'hi' : 'en')}
          className="px-5 py-2.5 bg-white/80 backdrop-blur-md border border-amber-200 text-amber-900 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 group"
          aria-label="Switch Language"
        >
          <span className="text-xl group-hover:rotate-12 transition-transform">
            {locale === 'en' ? '🇮🇳' : '🇬🇧'}
          </span>
          <span className="text-sm tracking-wide">
            {locale === 'en' ? 'हिन्दी' : 'English'}
          </span>
        </button>
      </div>

      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-orange-100 z-10" />

        {/* Rotating Mandala */}
        <div className="absolute inset-0 flex items-center justify-center opacity-25 -z-0">
          <div className="w-[480px] h-[480px] md:w-[680px] md:h-[680px] animate-spin-slower">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <radialGradient id="mandalaHero">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
                </radialGradient>
              </defs>

              {/* Rings */}
              <circle cx="100" cy="100" r="85" fill="none" stroke="url(#mandalaHero)" strokeWidth="1.2" />
              <circle cx="100" cy="100" r="65" fill="none" stroke="url(#mandalaHero)" strokeWidth="1" />
              <circle cx="100" cy="100" r="45" fill="none" stroke="url(#mandalaHero)" strokeWidth="0.8" />

              {/* Lines */}
              {[...Array(24)].map((_, i) => (
                <line
                  key={i}
                  x1="100"
                  y1="100"
                  x2={100 + 85 * Math.cos((i * Math.PI) / 12)}
                  y2={100 + 85 * Math.sin((i * Math.PI) / 12)}
                  stroke="url(#mandalaHero)"
                  strokeWidth="0.8"
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* --- CONTENT WRAPPER --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 w-full">

        {/* MOBILE FIRST: IMAGE ON TOP */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: TEXT */}
          <div
            className={`text-slate-900 space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full border border-amber-300 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span className="text-sm font-medium text-amber-900">{t('badge')}</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t('title')}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 animate-gradient">
                {t('name')}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-amber-900">{t('subtitle')}</p>

            <p className="text-lg text-slate-700">
              {t('description')}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => router.push('/?service=vastu&msg=Hero%20Section%20Consultation#consultation-form')}
                className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl shadow-2xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
              >
                {t('cta1')}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={() => setEnergyScoreOpen(true)}
                className="px-8 py-4 bg-white hover:bg-amber-50 text-amber-900 font-semibold rounded-lg border border-amber-300 transition-all hover:scale-105"
              >
                {t('cta2')}
              </button>
            </div>

            {/* Trust stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center p-4 bg-white/80 rounded-lg border border-amber-200 backdrop-blur-sm">
                <Clock className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-amber-700">{t('stats.experience')}</div>
                <div className="text-xs text-slate-600">{t('stats.experienceLabel')}</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg border border-amber-200 backdrop-blur-sm">
                <Users className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-amber-700">{t('stats.families')}</div>
                <div className="text-xs text-slate-600">{t('stats.familiesLabel')}</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg border border-amber-200 backdrop-blur-sm">
                <Award className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-amber-700">{t('stats.verified')}</div>
                <div className="text-xs text-slate-600">{t('stats.verifiedLabel')}</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg border border-amber-200 backdrop-blur-sm">
                <Star className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-amber-700">{t('stats.rating')}</div>
                <div className="text-xs text-slate-600">{t('stats.ratingLabel')}</div>
              </div>
            </div>
          </div>

          {/* RIGHT: BIG IMAGE + MANDALA */}
          <div className="relative flex items-center justify-center">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full blur-3xl animate-pulse" />

            {/* Image size (Desktop 420px • Mobile 260px) */}
            <div className="relative w-[260px] h-[260px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-4 border-amber-400/40 shadow-2xl shadow-amber-500/50 hover:scale-105 transition-transform duration-700">
              <Image 
                src="/profile.png" 
                alt="Aadish Jain" 
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Sacred Element */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-48 md:h-48 opacity-80 animate-float pointer-events-none">
              <Image 
                src="/vastu_elements.png" 
                alt="Sacred Elements" 
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce text-amber-600">
        <div className="p-3 bg-white/50 backdrop-blur-sm rounded-full border border-amber-200">
          <ChevronRight className="w-6 h-6 rotate-90" />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slower {
          animation: spin-slower 35s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
          50% { transform: translateY(-30px) rotate(10deg); opacity: 1; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>

    {/* Home Energy Score Modal */}
    <HomeEnergyScoreModal 
      isOpen={energyScoreOpen} 
      onClose={() => setEnergyScoreOpen(false)} 
    />
    </>
  );
}
