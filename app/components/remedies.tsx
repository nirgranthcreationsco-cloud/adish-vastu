"use client";

import { Award, ChevronRight, Clock, Sparkles } from "lucide-react";

export default function RemediesSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      
      {/* Mystical Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950 via-red-950/50 to-orange-950" />
      
      {/* Sacred Geometry Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L100 50 L50 100 L0 50 Z' fill='none' stroke='%23fbbf24' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='30' fill='none' stroke='%23fbbf24' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center mb-16 space-y-6">

          {/* Sacred Symbol */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-28 h-28 border-2 border-amber-400/30 rotate-45 flex items-center justify-center animate-pulse">
                <div className="w-24 h-24 border-2 border-amber-400/50 flex items-center justify-center -rotate-45">
                  <div className="text-5xl text-amber-400">🔱</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-amber-400/20 blur-2xl animate-pulse" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full border border-red-400/30">
            <Sparkles className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-300">
              Energized & Consecrated by Adish
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Sacred Remedies
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-red-400 to-orange-400 animate-gradient">
              Handpicked by Adish
            </span>
          </h2>

          <p className="text-xl text-amber-200/80 max-w-3xl mx-auto leading-relaxed">
            Every remedy personally selected, energized, and blessed by Master Adish. 
            Not just products—sacred instruments of transformation.
          </p>
        </div>

        {/* ADISH NOTE */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-amber-900/40 via-orange-900/40 to-red-900/40 rounded-3xl border-2 border-amber-400/30 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-6 items-center">

              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center border-4 border-amber-400/50 shadow-2xl">
                  <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>
              </div>

              {/* Message */}
              <div className="flex-1 text-center md:text-left space-y-3">
                <p className="text-amber-400 font-semibold text-sm uppercase tracking-wide">
                  A Message from Adish
                </p>
                <blockquote className="text-lg md:text-xl text-white leading-relaxed italic">
                  "I personally select each remedy with deep intention. Every yantra is consecrated, 
                  every crystal charged, every item blessed with sacred mantras. These are not mere 
                  objects—they are living instruments of divine energy, ready to transform your space 
                  and consciousness."
                </blockquote>
                <div className="text-amber-300 font-serif text-3xl mt-4">
                  — Adish
                </div>
              </div>
            </div>

            {/* Corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-400" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-400" />
          </div>
        </div>

        {/* FEATURED KITS */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Adish's <span className="text-amber-400">Sacred Kits</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                name: "Adish's Protection Kit",
                subtitle: "Shield Your Space & Family",
                items: ["Vastu Pyramid", "Black Tourmaline", "Protection Yantra", "Sacred Thread"],
                price: "₹8,999",
                icon: "🛡️",
                gradient: "from-red-600 to-orange-600"
              },
              {
                name: "Prosperity Kit",
                subtitle: "Attract Abundance & Success",
                items: ["Kuber Yantra", "Citrine Crystal", "Lakshmi Coin", "Prosperity Oil"],
                price: "₹9,999",
                icon: "💰",
                gradient: "from-yellow-600 to-amber-600",
                featured: true
              },
              {
                name: "Relationship Harmony Kit",
                subtitle: "Restore Love & Peace",
                items: ["Rose Quartz Pair", "Harmony Yantra", "Couple Crystals", "Love Incense"],
                price: "₹7,999",
                icon: "💖",
                gradient: "from-pink-600 to-rose-600"
              }
            ].map((kit, i) => (
              <div
                key={i}
                className={`group relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl overflow-hidden backdrop-blur-sm border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  kit.featured
                    ? "border-amber-400 shadow-xl shadow-amber-500/30"
                    : "border-white/10 hover:border-amber-400/50"
                }`}
              >
                {/** MOST POPULAR BADGE */}
                {kit.featured && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg">
                    <span className="text-white text-xs font-bold">MOST POPULAR</span>
                  </div>
                )}

                {/** KIT IMAGE */}
                <div className="relative h-64">
                  <div className={`absolute inset-0 bg-gradient-to-br ${kit.gradient}`} />

                  <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">
                      {kit.icon}
                    </div>

                    {/* Avatar */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                      <div className="relative inline-block">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center border-4 border-white/30 shadow-2xl">
                          <Sparkles className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                          <span className="text-xs">✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* KIT CONTENT */}
                <div className="p-6 space-y-4">
                  <h4 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {kit.name}
                  </h4>
                  <p className="text-amber-400 text-sm font-semibold">{kit.subtitle}</p>

                  {/* ITEMS */}
                  <p className="text-amber-300/80 text-sm font-semibold">Sacred Items Included:</p>
                  <ul className="space-y-1">
                    {kit.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-amber-100/80 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* PRICE */}
                  <div className="pt-4 space-y-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">{kit.price}</span>
                      <span className="text-amber-200/60 line-through text-sm">
                        ₹{parseInt(kit.price.replace(/[₹,]/g, "")) * 1.5}
                      </span>
                    </div>

                    <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                      Add to Cart
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================== */}
        {/* INDIVIDUAL PRODUCTS */}
        {/* ============================== */}

        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Individual <span className="text-amber-400">Sacred Remedies</span>
          </h3>
          <p className="text-center text-amber-200/70 mb-12 max-w-2xl mx-auto">
            Each remedy comes with Adish's personal guidance video on proper placement and activation
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                name: "Sri Yantra",
                category: "Sacred Geometry",
                desc: "Handcrafted copper Sri Yantra for prosperity and spiritual growth",
                price: "₹3,499",
                icon: "🔺",
                video: true
              },
              {
                name: "Crystal Pyramid",
                category: "Energy Amplifier",
                desc: "Natural quartz pyramid for Vastu correction and energy balance",
                price: "₹2,499",
                icon: "💎",
                video: true
              },
              {
                name: "Navagraha Set",
                category: "Planetary Remedies",
                desc:
                  "Complete set of nine planetary gemstones with copper yantras",
                price: "₹12,999",
                icon: "🌟",
                video: true
              },
              {
                name: "Vastu Compass",
                category: "Direction Tool",
                desc: "Professional brass compass for accurate directional analysis",
                price: "₹1,999",
                icon: "🧭",
                video: true
              },
              {
                name: "Sacred Thread",
                category: "Protection",
                desc: "Blessed Kalava for continuous protection and positive energy",
                price: "₹499",
                icon: "🧵",
                video: false
              },
              {
                name: "Incense Collection",
                category: "Purification",
                desc: "Seven sacred incense varieties for space cleansing rituals",
                price: "₹899",
                icon: "🪔",
                video: false
              },
              {
                name: "Rudraksha Mala",
                category: "Meditation Tool",
                desc: "Authentic 108-bead rudraksha mala for meditation and mantras",
                price: "₹4,999",
                icon: "📿",
                video: true
              },
              {
                name: "Copper Kalash",
                category: "Ritual Vessel",
                desc: "Pure copper kalash for home pujas and water energization",
                price: "₹2,799",
                icon: "🏺",
                video: true
              }
            ].map((product, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20"
              >
                {/* PRODUCT IMAGE */}
                <div className="relative h-48 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 flex items-center justify-center">
                  <div className="text-6xl group-hover:scale-110 transition-transform">
                    {product.icon}
                  </div>

                  {/* Video badge */}
                  {product.video && (
                    <div className="absolute top-3 right-3 z-20 px-2 py-1 bg-red-500 rounded-full flex items-center gap-1 shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span className="text-white text-xs font-bold">VIDEO</span>
                    </div>
                  )}

                  {/* Approved badge */}
                  <div className="absolute bottom-3 left-3 right-3 px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full border border-amber-400/30 flex items-center gap-1 justify-center">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span className="text-amber-300 text-xs font-semibold">
                      Adish Approved
                    </span>
                  </div>

                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* PRODUCT CONTENT */}
                <div className="p-4 space-y-3">
                  <p className="text-amber-400/80 text-xs font-semibold uppercase tracking-wide">
                    {product.category}
                  </p>

                  <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {product.name}
                  </h4>

                  <p className="text-amber-200/70 text-sm leading-relaxed line-clamp-2">
                    {product.desc}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{product.price}</span>

                    <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-sm font-semibold rounded-lg shadow-md transition-all">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HOW TO USE VIDEOS */}
        <div className="mt-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Learn to <span className="text-amber-400">Activate Your Remedies</span>
              </h3>
              <p className="text-xl text-amber-200/80">
                Adish personally guides you through proper placement, consecration, and daily practices
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Proper Placement",
                  desc:
                    "Learn exact directional placement according to Vastu principles",
                  icon: "🧭",
                  duration: "5 min"
                },
                {
                  title: "Sacred Activation",
                  desc:
                    "Step-by-step mantra and ritual process for energizing your remedy",
                  icon: "🕉️",
                  duration: "8 min"
                },
                {
                  title: "Daily Practices",
                  desc: "Simple daily rituals to maintain and amplify the energy",
                  icon: "🙏",
                  duration: "4 min"
                }
              ].map((guide, i) => (
                <div
                  key={i}
                  className="group relative bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-amber-400/30 transition-all hover:scale-105 cursor-pointer"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {guide.icon}
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {guide.title}
                  </h4>

                  <p className="text-amber-200/70 text-sm mb-4">{guide.desc}</p>

                  <div className="flex items-center gap-2 text-amber-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{guide.duration} video</span>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 bg-amber-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-amber-400/30 group-hover:bg-amber-500/40 transition-all">
                    <div className="w-0 h-0 border-l-4 border-l-amber-400 border-t-3 border-t-transparent border-b-3 border-b-transparent ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TRUST & AUTHENTICITY */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-green-900/30 via-emerald-900/30 to-teal-900/30 rounded-3xl border-2 border-green-400/30 backdrop-blur-sm">

            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50">
                  <Award className="w-10 h-10 text-white" />
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white">
                100% Authenticity{" "}
                <span className="text-green-400">Guaranteed</span>
              </h3>

              <div className="grid md:grid-cols-3 gap-8 pt-6">
                {[
                  {
                    icon: "✓",
                    title: "Verified Sources",
                    desc: "Every item sourced from trusted artisans and authentic suppliers"
                  },
                  {
                    icon: "🔐",
                    title: "Quality Tested",
                    desc: "Rigorous quality checks for purity, craftsmanship, and energy"
                  },
                  {
                    icon: "🙏",
                    title: "Blessed by Adish",
                    desc: "Personal consecration and energization before shipping"
                  }
                ].map((trust, i) => (
                  <div key={i} className="text-center space-y-2">
                    <div className="text-4xl text-green-400 mb-3">{trust.icon}</div>
                    <h4 className="text-lg font-bold text-white">{trust.title}</h4>
                    <p className="text-green-200/70 text-sm">{trust.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-green-200/80 text-lg italic">
                  "I personally inspect and bless each remedy before it reaches you. 
                  Your trust is sacred to me." — Adish
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-green-400 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-green-400 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-green-400 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-green-400 rounded-br-lg" />
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-20 text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Begin Your Sacred Journey Today
          </h3>

          <p className="text-xl text-amber-200/80 max-w-2xl mx-auto">
            Every remedy comes with lifetime guidance and support from Adish's team
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="group px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-lg rounded-lg shadow-2xl shadow-orange-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Explore All Sacred Remedies
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-lg backdrop-blur-sm border-2 border-white/20 hover:border-amber-400/50 transition-all transform hover:scale-105">
              Speak to Our Team
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
