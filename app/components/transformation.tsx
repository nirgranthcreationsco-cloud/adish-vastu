"use client";
import { Award, ChevronRight, Sparkles, Star } from "lucide-react";
import { useState } from "react";

export default function TransformationStories() {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      name: "Meera Sharma",
      location: "Mumbai",
      image: "👩‍👧‍👦",
      title: "From Chaos to Harmony",
      problem: "Constant conflicts, health issues, financial stress",
      solution: "Southwest Vastu correction + Energy alignment",
      result: "Complete family transformation in 90 days",
      quote: "Adish didn't just fix our home—he restored our family's soul.",
      metrics: { conflicts: "-87%", health: "+95%", peace: "100%" }
    },
    {
      name: "Rajesh Patel",
      location: "Ahmedabad",
      image: "👨‍💼",
      title: "Business Resurrection",
      problem: "Near bankruptcy, mounting debts, losing everything",
      solution: "Office direction realignment + Prosperity yantra",
      result: "Revenue doubled in 6 months, debts cleared",
      quote: "30 days from closing. Adish's guidance saved my legacy.",
      metrics: { revenue: "+175%", clients: "+112%", stress: "-78%" }
    },
    {
      name: "Priya & Arun",
      location: "Hyderabad",
      image: "💑",
      title: "Love Rekindled",
      problem: "Marriage falling apart, children suffering",
      solution: "Bedroom Vastu + Relationship energy flow",
      result: "Fell in love again, kids thriving",
      quote: "We were strangers in our own home. Now it's our sanctuary.",
      metrics: { harmony: "+200%", focus: "+85%", intimacy: "∞" }
    }
  ];

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950 via-amber-950 to-orange-950" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #fbbf24 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-500/10 rounded-full border border-amber-400/20 backdrop-blur-sm">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="text-base font-semibold text-amber-300 tracking-wide">
              10,000+ FAMILIES TRANSFORMED
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Real People.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
              Real Transformations.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-amber-200/70 max-w-3xl mx-auto">
            Stories that defy logic. Results that speak for themselves.
          </p>
        </div>

        {/* Story Selector */}
        <div className="flex justify-center gap-4 mb-16">
          {stories.map((story, i) => (
            <button
              key={i}
              onClick={() => setActiveStory(i)}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeStory === i
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-2xl shadow-orange-500/50 scale-105'
                  : 'bg-white/5 text-amber-300/60 hover:bg-white/10 hover:text-amber-300 border border-white/10'
              }`}
            >
              {story.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Main Story Display */}
        <div className="mb-20">
          {stories.map((story, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ${
                activeStory === i ? 'opacity-100 block' : 'opacity-0 hidden'
              }`}
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 rounded-3xl overflow-hidden backdrop-blur-sm border border-white/10 shadow-2xl">
                
                {/* Top Section - Profile */}
                <div className="p-12 md:p-16 bg-gradient-to-r from-amber-900/30 to-orange-900/30 border-b border-white/10">
                  <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-6xl border-4 border-amber-400/30 shadow-2xl">
                      {story.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        {story.title}
                      </h3>
                      <div className="flex flex-col md:flex-row items-center gap-3 text-amber-200 text-lg mb-4">
                        <span className="font-semibold">{story.name}</span>
                        <span className="hidden md:block text-amber-400/50">•</span>
                        <span>{story.location}</span>
                      </div>
                      <div className="flex gap-1 justify-center md:justify-start">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-6 h-6 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Middle Section - Journey */}
                <div className="grid md:grid-cols-3 gap-8 p-12 md:p-16">
                  {/* Problem */}
                  <div className="space-y-4">
                    <div className="text-red-400 text-sm font-bold uppercase tracking-wider mb-2">
                      The Problem
                    </div>
                    <div className="text-5xl mb-4">😰</div>
                    <p className="text-red-200/80 text-lg leading-relaxed">
                      {story.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-4">
                    <div className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-2">
                      Adish's Solution
                    </div>
                    <div className="text-5xl mb-4">✨</div>
                    <p className="text-amber-200/80 text-lg leading-relaxed">
                      {story.solution}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="space-y-4">
                    <div className="text-green-400 text-sm font-bold uppercase tracking-wider mb-2">
                      The Outcome
                    </div>
                    <div className="text-5xl mb-4">🎉</div>
                    <p className="text-green-200/80 text-lg leading-relaxed">
                      {story.result}
                    </p>
                  </div>
                </div>

                {/* Metrics Bar */}
                <div className="grid grid-cols-3 gap-4 px-12 md:px-16 pb-12">
                  {Object.entries(story.metrics).map(([key, value], idx) => (
                    <div key={idx} className="text-center p-6 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-400/20">
                      <div className="text-3xl md:text-4xl font-bold text-amber-300 mb-2">
                        {value}
                      </div>
                      <div className="text-amber-200/60 text-sm uppercase tracking-wide">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote Section */}
                <div className="p-12 md:p-16 bg-gradient-to-r from-purple-950/30 to-orange-950/30 border-t border-white/10">
                  <blockquote className="relative">
                    <div className="text-8xl text-amber-400/10 absolute -top-4 -left-2">❝</div>
                    <p className="relative text-2xl md:text-3xl text-white font-light italic leading-relaxed pl-12">
                      {story.quote}
                    </p>
                  </blockquote>
                  
                  <div className="flex items-center justify-center gap-4 mt-12 pt-8 border-t border-white/10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center border-3 border-white/30">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-amber-300 font-bold text-lg">Guided by Master Adish</div>
                      <div className="text-amber-200/60 text-sm">Personally Supervised</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { number: "10,000+", label: "Families Helped", icon: "👨‍👩‍👧‍👦" },
            { number: "10+", label: "Years Experience", icon: "📿" },
            { number: "4.9★", label: "Client Rating", icon: "⭐" },
            { number: "98%", label: "Success Rate", icon: "✅" }
          ].map((stat, i) => (
            <div
              key={i}
              className="group relative p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-amber-300 mb-2">
                {stat.number}
              </div>
              <div className="text-amber-200/70 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative p-12 md:p-16 bg-gradient-to-br from-amber-900/40 via-orange-900/40 to-amber-900/40 rounded-3xl border-2 border-amber-400/30 backdrop-blur-sm text-center overflow-hidden">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 blur-3xl animate-pulse" />
            
            <div className="relative space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-400/40">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-300 text-sm font-semibold">Limited Consultations Available</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Your Story Could Be
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                  Next on This List
                </span>
              </h3>

              <p className="text-xl text-amber-200/80 max-w-2xl mx-auto">
                Join thousands who've experienced life-altering transformations through Adish's guidance
              </p>

              <button className="group px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-xl rounded-xl shadow-2xl shadow-orange-500/50 transition-all transform hover:scale-105 hover:shadow-orange-500/70 flex items-center justify-center gap-3 mx-auto">
                Book Your Personal Consultation
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-3 text-amber-300/80">
                <Award className="w-5 h-5" />
                <span className="text-sm">100% Satisfaction Guaranteed</span>
              </div>
            </div>

            {/* Decorative Corners */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-amber-400" />
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-amber-400" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-amber-400" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-amber-400" />
          </div>
        </div>
      </div>
    </section>
  );
}