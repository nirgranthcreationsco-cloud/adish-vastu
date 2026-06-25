"use client";

import { CheckCircle, ChevronRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ActivationGuidesSection() {
  const router = useRouter();
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
      desc: "A simple yet powerful ritual taught by Aadish Jain to remove stagnant or negative energy.",
      steps: ["Salt Water Method", "Incense Flow", "Sound Healing", "Space Reset Protocol"],
      video: false,
      icon: "🪔",
      gradient: "from-green-600 to-emerald-600",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-100 via-amber-50 to-orange-100"></div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-300 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-amber-700" />
          <span className="text-sm text-amber-900">Activate • Energize • Transform</span>
        </div>

        <h2 className="text-5xl font-bold text-slate-900 mb-4">
          Activation <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Guides</span>
        </h2>

        <p className="text-xl text-slate-700 max-w-3xl mx-auto">
          Follow authentic, step-by-step rituals personally taught by Aadish Jain to activate every remedy correctly.
        </p>
      </div>

      {/* Guide Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {guides.map((guide, i) => (
          <div
            key={i}
            className="group relative bg-white backdrop-blur-sm border border-amber-200 p-0 rounded-2xl overflow-hidden hover:scale-105 hover:shadow-lg transition-all shadow-xl"
          >
            {/* Top Icon Area */}
            <div
              className={`h-52 bg-gradient-to-br ${guide.gradient} flex items-center justify-center text-7xl`}
            >
              {guide.icon}
            </div>

            <div className="p-6">
              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{guide.title}</h3>
              <p className="text-slate-600 mb-4">{guide.desc}</p>

              {/* Steps */}
              <ul className="space-y-2 mb-4">
                {guide.steps.map((step, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
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
              <button 
                onClick={() => router.push(`/?service=remedies&msg=${encodeURIComponent(guide.title)}%20Activation%20Guide#consultation-form`)}
                className="w-full px-6 py-4 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
              >
                View Full Guide
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-24">
        <h3 className="text-3xl text-slate-900 font-bold mb-4">
          Want Personalized Guidance for Activation?
        </h3>

        <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
          Book a session where Aadish Jain personally guides you through rituals, placements and corrections for your home.
        </p>

        <button 
            onClick={() => router.push('/?service=vastu&msg=Personalized%20Ritual%20Session%20Booking#consultation-form')}
            className="px-12 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl shadow-2xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 mx-auto group"
        >
          Book 1-on-1 Ritual Session
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
