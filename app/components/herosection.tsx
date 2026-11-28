"use client";

import { Award, ChevronRight, Clock, Sparkles, Star, Users } from "lucide-react";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HomeEnergyScoreModal from "./homeenergyscoremodal";

export default function HeroSection() {
  const t = useTranslations('hero');
  const tCommon = useTranslations('common');
  const router = useRouter();
  // locale switcher lives globally in layout
  const [isVisible, setIsVisible] = useState(false);
  const [energyScoreOpen, setEnergyScoreOpen] = useState(false);
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    setIsVisible(true);
    const generated = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${5 + Math.random() * 5}s`,
    }));
    setParticles(generated);
  }, []);

  const scrollToProducts = () => {
    const el = document.getElementById("remedies");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
    <section className="relative flex items-center justify-center overflow-hidden pt-14 pb-8 md:pt-16 md:pb-10">

      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-orange-100 z-10" />

        {/* Rotating Mandala */}
        {isVisible && (
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
        )}

        {/* Floating particles */}
        {isVisible && particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full animate-float"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* --- CONTENT WRAPPER --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-8 md:py-12 w-full">

        {/* MOBILE FIRST: IMAGE ON TOP */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* LEFT: TEXT */}
          <div
            className={`text-slate-900 space-y-5 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full border border-amber-300 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span className="text-sm font-medium text-amber-900">{t('badge')}</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {t('title')}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 animate-gradient">
                {t('name')}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-amber-900">{t('subtitle')}</p>

            <p className="text-base text-slate-700 line-clamp-2 md:line-clamp-none">
              {t('description')}
            </p>

            {/* Buttons — shop first, then consult */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={scrollToProducts}
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl shadow-2xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                {t('shopCta')}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => router.push('/?service=remedies&msg=Contact%20Aadish%20-%20free%20product%20help#contact-form')}
                className="px-6 py-3.5 bg-white hover:bg-amber-50 text-amber-900 font-semibold rounded-xl border border-amber-300 transition-all hover:scale-105"
              >
                {t('cta1')}
              </button>

              <button
                onClick={() => setEnergyScoreOpen(true)}
                className="px-6 py-3.5 bg-white/70 hover:bg-amber-50 text-amber-900 font-semibold rounded-xl border border-amber-200 transition-all hover:scale-105"
              >
                {t('cta2')}
              </button>
            </div>

            {/* Trust stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
              <div className="text-center p-3 bg-white/80 rounded-lg border border-amber-200 backdrop-blur-sm">
                <Clock className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                <div className="text-base font-bold text-amber-700">{t('stats.experience')}</div>
                <div className="text-[10px] text-slate-600">{t('stats.experienceLabel')}</div>
              </div>
              <div className="text-center p-3 bg-white/80 rounded-lg border border-amber-200 backdrop-blur-sm">
                <Users className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                <div className="text-base font-bold text-amber-700">{t('stats.families')}</div>
                <div className="text-[10px] text-slate-600">{t('stats.familiesLabel')}</div>
              </div>
              <div className="text-center p-3 bg-white/80 rounded-lg border border-amber-200 backdrop-blur-sm">
                <Award className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                <div className="text-base font-bold text-amber-700">{t('stats.verified')}</div>
                <div className="text-[10px] text-slate-600">{t('stats.verifiedLabel')}</div>
              </div>
              <div className="text-center p-3 bg-white/80 rounded-lg border border-amber-200 backdrop-blur-sm">
                <Star className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                <div className="text-base font-bold text-amber-700">{t('stats.rating')}</div>
                <div className="text-[10px] text-slate-600">{t('stats.ratingLabel')}</div>
              </div>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full blur-3xl animate-pulse" />

            <div className="relative w-[200px] h-[200px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-amber-400/40 shadow-2xl shadow-amber-500/50 hover:scale-105 transition-transform duration-700">
              <Image
                src="/profile.png"
                alt="Jain Vastu Solutions"
                fill
                sizes="(max-width: 768px) 200px, 320px"
                className="object-cover"
                priority
              />
            </div>

            {isVisible && (
              <>
                <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 z-30 px-3 py-2 bg-white/90 backdrop-blur-md border border-amber-200 rounded-2xl shadow-xl flex items-center gap-2 animate-float">
                  <div className="w-7 h-7 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">{tCommon('approach')}</p>
                    <p className="text-[11px] font-black text-slate-800">{tCommon('scientific')}</p>
                  </div>
                </div>

                <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 z-30 px-3 py-2 bg-white/90 backdrop-blur-md border border-amber-200 rounded-2xl shadow-xl flex items-center gap-2 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="w-7 h-7 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">{tCommon('remedies')}</p>
                    <p className="text-[11px] font-black text-slate-800">{tCommon('personallyEnergized')}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Jump to products */}
      <button
        type="button"
        onClick={scrollToProducts}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 animate-bounce text-amber-600"
        aria-label="Scroll to products"
      >
        <div className="p-2 bg-white/50 backdrop-blur-sm rounded-full border border-amber-200">
          <ChevronRight className="w-5 h-5 rotate-90" />
        </div>
      </button>

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
