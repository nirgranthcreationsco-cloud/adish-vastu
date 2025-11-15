"use client";

import { Award, ChevronRight, Clock, Sparkles, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/95 via-amber-900/90 to-orange-950/95 z-10" />

        {/* Animated Mandala */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-96 h-96 md:w-[600px] md:h-[600px] animate-spin-slow">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <radialGradient id="mandalaGrad">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="80" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.5" />
              {[...Array(12)].map((_, i) => (
                <line
                  key={i}
                  x1="100"
                  y1="100"
                  x2={100 + 80 * Math.cos((i * Math.PI) / 6)}
                  y2={100 + 80 * Math.sin((i * Math.PI) / 6)}
                  stroke="url(#mandalaGrad)"
                  strokeWidth="0.5"
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Light Rays */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-full bg-gradient-to-b from-amber-400/40 to-transparent origin-top animate-pulse"
              style={{
                transform: `rotate(${i * 45}deg) translateY(-50%)`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: "3s",
              }}
            />
          ))}
        </div>

        {/* Floating Particles */}
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

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className={`text-white space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full border border-amber-400/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-200">India's Trusted Master</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Home & Destiny with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 animate-gradient">
                Adish
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-amber-100/90">India's Trusted Vastu & Jyotish Mentor</p>

            <p className="text-lg text-amber-200/80">
              One master. One path. Personalized guidance, ancient wisdom, and real results for your family & life.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-semibold rounded-lg shadow-2xl shadow-orange-500/50 transition-all hover:scale-105 flex items-center gap-2">
                Book Your Personal Session with Adish
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/20 transition-all hover:scale-105">
                Get Your Free Vastu Score
              </button>
            </div>

            {/* Trust Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {[
                { icon: Clock, label: "10+ Years", sub: "Experience" },
                { icon: Users, label: "10,000+", sub: "Families Guided" },
                { icon: Award, label: "Verified", sub: "Master" },
                { icon: Star, label: "4.9★", sub: "Satisfaction" },
              ].map((item, idx) => (
                <div key={idx} className="text-center p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
                  <item.icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-amber-300">{item.label}</div>
                  <div className="text-xs text-amber-200/70">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Hero Image */}
<div
  className={`relative transition-all duration-1000 delay-300 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  <div className="relative flex items-center justify-center">

    {/* 🔥 Magical Mandala Behind Image */}
    <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-40">
      <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] animate-spin-slower">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <radialGradient id="heroMandalaGrad">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
            </radialGradient>
          </defs>

          {/* Outer rings */}
          <circle cx="100" cy="100" r="85" fill="none" stroke="url(#heroMandalaGrad)" strokeWidth="1.2" />
          <circle cx="100" cy="100" r="65" fill="none" stroke="url(#heroMandalaGrad)" strokeWidth="1" />
          <circle cx="100" cy="100" r="45" fill="none" stroke="url(#heroMandalaGrad)" strokeWidth="0.8" />

          {/* Radiating lines */}
          {[...Array(24)].map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="100"
              x2={100 + 85 * Math.cos((i * Math.PI) / 12)}
              y2={100 + 85 * Math.sin((i * Math.PI) / 12)}
              stroke="url(#heroMandalaGrad)"
              strokeWidth="0.8"
            />
          ))}

          {/* Decorative petals */}
          {[...Array(12)].map((_, i) => (
            <circle
              key={i}
              cx={100 + 55 * Math.cos((i * Math.PI) / 6)}
              cy={100 + 55 * Math.sin((i * Math.PI) / 6)}
              r="4"
              fill="#fbbf24"
              fillOpacity="0.8"
            />
          ))}
        </svg>
      </div>
    </div>

    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full blur-3xl animate-pulse" />

    {/* Portrait Image */}
    <div className="relative aspect-square rounded-full overflow-hidden border-4 border-amber-400/30 shadow-2xl shadow-amber-500/50">
      <img src="/profile.png" alt="Adish Portrait" className="w-full h-full object-cover" />
    </div>

    {/* Glow Decorations */}
    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-2xl opacity-60 animate-pulse" />
    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full blur-2xl opacity-60 animate-pulse delay-700" />
  </div>

  
</div>


        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-amber-400 rounded-full animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0; }
          50% { transform: translateY(-100px); opacity: 1; }
        }
          @keyframes spin-slower {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-spin-slower {
      animation: spin-slower 35s linear infinite;
    }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-float { animation: float linear infinite; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
      `}</style>
    </section>
  );
}
