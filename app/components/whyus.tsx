"use client";

import { ChevronRight, Sparkles } from "lucide-react";

export default function IceBreakerB() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950 via-amber-900 to-orange-950" />

      {/* PATTERN */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #fbbf24 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">


        {/* ⭐ LEFT — HUGE ADISH IMAGE + MANDALA (UPGRADED SIZE) ⭐ */}
        <div className="relative flex justify-center items-center">
          
          {/* CENTERED WRAPPER → BIGGER */}
          <div className="relative w-[520px] h-[520px] lg:w-[600px] lg:h-[600px] flex items-center justify-center">
            
            {/* OUTER AURA */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-3xl" />

            {/* ROTATING MANDALA — BIGGER */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] opacity-35 animate-spin-slow">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#fbbf24" strokeWidth="0.7" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#fbbf24" strokeWidth="0.6" />
                  <circle cx="100" cy="100" r="40" fill="none" stroke="#fbbf24" strokeWidth="0.5" />

                  {[...Array(12)].map((_, i) => (
                    <line
                      key={i}
                      x1="100"
                      y1="100"
                      x2={100 + 80 * Math.cos((i * Math.PI) / 6)}
                      y2={100 + 80 * Math.sin((i * Math.PI) / 6)}
                      stroke="#fbbf24"
                      strokeWidth="0.6"
                    />
                  ))}
                </svg>
              </div>
            </div>

            {/* IMAGE — MUCH BIGGER */}
            <div className="absolute w-[360px] h-[360px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-amber-400/40 shadow-[0_0_50px_rgba(251,191,36,0.55)]">
              <img
                src="/profile.png"
                alt="Adish"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>


        {/* ⭐ RIGHT — ICE BREAKER TEXT ⭐ */}
        <div className="space-y-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full border border-red-400/30">
            <Sparkles className="w-5 h-5 text-red-300" />
            <span className="text-sm font-semibold text-red-300">
              The Harsh Reality
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Confused After  
            <span className="text-red-300"> Multiple Astrologers?</span><br />
            You're Not Alone.
          </h2>

          <p className="text-amber-200/80 text-lg leading-relaxed">
            Different astrologers. Different remedies. Different predictions.  
            No clarity. No direction. No real progress.
          </p>

          {/* Conflict Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { issue: "Wear Blue Sapphire", vs: "NEVER Wear Sapphire!", emoji: "💎" },
              { issue: "Bedroom is perfect", vs: "Bedroom is WRONG", emoji: "🛏️" },
              { issue: "Jupiter helps you", vs: "Jupiter harms you", emoji: "🪐" },
            ].map((c, i) => (
              <div
                key={i}
                className="p-6 bg-black/30 rounded-xl border border-red-400/20 text-center space-y-3"
              >
                <div className="text-4xl">{c.emoji}</div>
                <p className="text-green-300 text-sm">{c.issue}</p>
                <div className="text-red-400 text-2xl">⚠️</div>
                <p className="text-red-300 text-sm font-bold">{c.vs}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-lg rounded-xl shadow-2xl shadow-orange-500/50 transition-all transform hover:scale-105 flex items-center gap-3">
            <Sparkles className="w-6 h-6" />
            Why One Master Is The Solution
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
