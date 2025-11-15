"use client";

import { CheckCircle, ChevronRight, Sparkles } from "lucide-react";

export default function ActivationGuidesSection() {
  const guides = [
    {
      title: "How to Energize Your Yantras",
      desc: "Learn the ancient, powerful method of energizing your Sri Yantra, Kuber Yantra, and Navagraha Yantras.",
      steps: ["Purification Ritual", "Mantra Activation", "Directional Placement", "Daily Energy Maintenance"],
      video: true,
      icon: "🕉️",
      gradient: "from-amber-600 to-orange-600",
    },
    {
      title: "Crystal Activation & Placement",
      desc: "Activate your crystals properly to unlock their full vibrational frequency.",
      steps: ["Cleansing", "Intention Setting", "Directional Charging", "Weekly Sun Energization"],
      video: true,
      icon: "💎",
      gradient: "from-purple-600 to-fuchsia-600",
    },
    {
      title: "Home Energy Cleansing Ritual",
      desc: "A simple yet powerful ritual taught by Adish to remove stagnant or negative energy.",
      steps: ["Salt Water Method", "Incense Flow", "Sound Healing", "Space Reset Protocol"],
      video: false,
      icon: "🪔",
      gradient: "from-green-600 to-emerald-600",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950 via-amber-900/60 to-orange-950"></div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/10 border border-amber-400/20 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-amber-300">Activate • Energize • Transform</span>
        </div>

        <h2 className="text-5xl font-bold text-white mb-4">
          Activation <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">Guides</span>
        </h2>

        <p className="text-xl text-amber-200/80 max-w-3xl mx-auto">
          Follow authentic, step-by-step rituals personally taught by Adish to activate every remedy correctly.
        </p>
      </div>

      {/* Guide Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {guides.map((guide, i) => (
          <div
            key={i}
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-0 rounded-2xl overflow-hidden hover:scale-105 transition-all shadow-xl"
          >
            {/* Top Icon Area */}
            <div
              className={`h-52 bg-gradient-to-br ${guide.gradient} flex items-center justify-center text-7xl`}
            >
              {guide.icon}
            </div>

            <div className="p-6">
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2">{guide.title}</h3>
              <p className="text-amber-200/70 mb-4">{guide.desc}</p>

              {/* Steps */}
              <ul className="space-y-2 mb-4">
                {guide.steps.map((step, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-amber-100/90 text-sm">
                    <CheckCircle className="w-4 h-4 text-amber-400" />
                    {step}
                  </li>
                ))}
              </ul>

              {/* Video Badge */}
              {guide.video && (
                <div className="flex items-center gap-2 text-red-400 text-sm font-semibold mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  Includes Video Guide
                </div>
              )}

              {/* CTA */}
              <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2">
                View Full Guide
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-24">
        <h3 className="text-3xl text-white font-bold mb-4">
          Want Personalized Guidance for Activation?
        </h3>

        <p className="text-lg text-amber-200/80 mb-8 max-w-2xl mx-auto">
          Book a session where Adish personally guides you through rituals, placements and corrections for your home.
        </p>

        <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg shadow-xl hover:scale-105 transition flex items-center gap-2 mx-auto">
          Book 1-on-1 Ritual Session
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
