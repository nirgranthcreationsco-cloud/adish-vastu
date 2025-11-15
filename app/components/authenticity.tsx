"use client";

import { Award, CheckCircle, FileCheck2, ShieldCheck, Sparkles, Star } from "lucide-react";

export default function AuthenticityGuaranteeSection() {
  const points = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-400" />,
      title: "100% Authentic Products",
      desc: "All remedies are sourced directly from trusted, certified spiritual artisans and verified vendors.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-400" />,
      title: "Personally Blessed by Adish",
      desc: "Every item undergoes sacred energization rituals performed by Adish himself.",
    },
    {
      icon: <Award className="w-8 h-8 text-amber-400" />,
      title: "Certificate of Authenticity",
      desc: "Each remedy comes with an official authenticity certificate with hologram verification.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-amber-400" />,
      title: "Lab Verified Crystals",
      desc: "Crystals and gemstones are lab tested for purity, weight, and energetic resonance.",
    },
    {
      icon: <FileCheck2 className="w-8 h-8 text-amber-400" />,
      title: "Ritual Safety Checked",
      desc: "Every product is checked through a multi-step ritual process to ensure safety.",
    },
    {
      icon: <Star className="w-8 h-8 text-amber-400" />,
      title: "Lifetime Energy Support",
      desc: "You can request re-energization, placement help, and lifetime ritual support anytime.",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950 via-amber-900/50 to-orange-950"></div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-16">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/10 border border-amber-400/20 rounded-full mb-4">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-amber-300">Guaranteed • Verified • Blessed</span>
        </div>

        <h2 className="text-5xl font-bold text-white mb-4">
          Authenticity <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">Guaranteed</span>
        </h2>

        <p className="text-xl text-amber-200/80 max-w-3xl mx-auto">
          Trust is sacred. Every remedy you receive is verified, energized, and guaranteed to be authentic.
        </p>
      </div>

      {/* Guarantee Points */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {points.map((p, i) => (
          <div
            key={i}
            className="group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 hover:border-amber-400/40 transition-all hover:scale-105"
          >
            <div className="mb-4 flex items-center justify-center">{p.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">{p.title}</h3>
            <p className="text-amber-200/70 text-sm leading-relaxed text-center">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Certificate Display Block */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 mt-20">
        <div className="bg-white/5 border border-amber-400/20 backdrop-blur-sm rounded-3xl p-10 text-center shadow-2xl hover:shadow-orange-500/30 transition">
          
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
              <Award className="w-10 h-10 text-white" />
            </div>
          </div>

          <h3 className="text-3xl font-bold text-white mb-3">Official Certificate of Authenticity</h3>
          <p className="text-amber-200/80 mb-6 max-w-2xl mx-auto">
            Each remedy comes with a unique verification hologram, serial number, QR code, and Adish’s blessing signature.
          </p>

          <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg shadow-xl hover:scale-105 transition-all">
            View Sample Certificate
          </button>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-16">
        <p className="text-lg text-amber-200/70 italic">
          “Authenticity is not a feature — it is a sacred responsibility.”  
        </p>
        <p className="text-amber-300 font-semibold mt-2">— Master Adish</p>
      </div>
    </section>
  );
}
