"use client";

import { ChevronRight, Sparkles, Star, Zap } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950 via-amber-900 to-orange-950" />

      {/* Sacred Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500 blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-400/20 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-amber-300 font-medium">
            The Journey Toward Alignment Begins Here
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
          Align Your Home.  
          <br />
          Align Your Life.  
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
            Align Your Destiny.
          </span>
        </h2>

        {/* Sub Heading */}
        <p className="text-xl text-amber-200/80 max-w-3xl mx-auto mb-10">
          Thousands of families have transformed their lives through the wisdom of Vastu and Jyotish.  
          Let Adish guide you toward clarity, harmony, and prosperity.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { label: "Lives Transformed", value: "10,000+", icon: <Star className="w-6 h-6 text-amber-400" /> },
            { label: "Years of Mastery", value: "10+", icon: <Zap className="w-6 h-6 text-amber-400" /> },
            { label: "Success Rate", value: "98%", icon: <Sparkles className="w-6 h-6 text-amber-400" /> },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl backdrop-blur-sm flex flex-col items-center"
            >
              <div className="mb-1">{stat.icon}</div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-amber-200/70 tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Book Session */}
          <button className="group px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold rounded-lg shadow-orange-500/40 shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2">
            Book Consultation with Adish
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Explore Remedies */}
          <button className="px-10 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-sm transition-all transform hover:scale-105">
            Visit Sacred Remedies Store
          </button>

          {/* Courses */}
          <button className="px-10 py-4 bg-white/10 border border-amber-400/20 hover:border-amber-300 text-amber-200 font-bold rounded-lg backdrop-blur-sm transition-all transform hover:scale-105">
            Explore Courses
          </button>
        </div>

        {/* Final Line */}
        <p className="mt-12 text-lg text-amber-200/70 italic">
          “A shift in your space can shift your destiny.” — <span className="text-amber-300 font-semibold">Master Adish</span>
        </p>
      </div>
    </section>
  );
}
