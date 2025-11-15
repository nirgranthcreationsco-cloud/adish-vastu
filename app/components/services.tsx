// File: /app/components/adish/ServicesSection.tsx
"use client";

import { ChevronRight, Sparkles } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950 via-amber-950 to-orange-950" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.3),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-400/20">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-300">Personally Guided by Adish</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Services{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
              Powered by Adish
            </span>
          </h2>

          <p className="text-xl text-amber-200/80 max-w-3xl mx-auto">
            Every service personally reviewed, guided, and blessed by the master himself
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Personal Vastu Consultation",
              subtitle: "with Adish",
              desc: "Transform your home into a sanctuary of positive energy. Comprehensive analysis of your space with personalized remedies.",
              features: [
                "1-on-1 video session",
                "Detailed floor plan analysis",
                "Custom remedy plan",
                "Follow-up support",
              ],
              icon: "🏠",
              gradient: "from-orange-500 to-amber-600",
            },
            {
              title: "Jyotish Kundali Reading",
              subtitle: "by Adish",
              desc: "Unlock your destiny through ancient Vedic astrology. Deep insights into your past, present, and future life path.",
              features: [
                "Complete birth chart analysis",
                "Life predictions",
                "Career & relationship guidance",
                "Gemstone recommendations",
              ],
              icon: "⭐",
              gradient: "from-amber-600 to-orange-500",
            },
            {
              title: "Online Courses",
              subtitle: "Taught by Adish",
              desc: "Learn the sacred sciences directly from the master. Comprehensive courses on Vastu & Jyotish from beginner to advanced.",
              features: [
                "Live interactive sessions",
                "Lifetime access",
                "Certificate of completion",
                "Private community access",
              ],
              icon: "📚",
              gradient: "from-orange-600 to-amber-500",
            },
            {
              title: "Energized Remedies",
              subtitle: "Selected by Adish",
              desc: "Authentic, consecrated items personally selected and energized. Yantras, crystals, and sacred objects for your transformation.",
              features: [
                "Personally energized items",
                "Authenticity guaranteed",
                "Installation guidance",
                "Blessing ceremony included",
              ],
              icon: "✨",
              gradient: "from-amber-500 to-orange-600",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-amber-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 cursor-pointer overflow-hidden"
            >
              {/* Animated Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-amber-400 font-semibold mb-4 text-lg">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-amber-200/80 mb-6 leading-relaxed">
                {service.desc}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-amber-100/90">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Adish Badge */}
              <div className="relative mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Placeholder for Adish image */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center border-2 border-amber-400/50">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-amber-300 font-semibold text-sm">
                        100% Personally Reviewed
                      </p>
                      <p className="text-amber-200/60 text-xs">by Adish</p>
                    </div>
                  </div>

                  <div className="text-amber-400/40 italic text-2xl font-serif">
                    Adish
                  </div>
                </div>
              </div>

              {/* CTA BUTTON */}
              <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-semibold rounded-lg shadow-lg group-hover:shadow-xl transition-all flex items-center justify-center gap-2">
                Learn More
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
