"use client";

import { Award, Clock, Sparkles, Star, Users } from "lucide-react";

export default function CoursesSection() {
  const courses = [
    {
      title: "Vastu Shastra Mastery",
      level: "Beginner to Advanced",
      duration: "12 Weeks",
      lessons: 48,
      students: "2,400+",
      desc: "Transform any space using authentic Vastu principles combined with modern understanding.",
      highlights: ["Directional energies", "Room-by-room Vastu", "Case studies", "Remedies"],
      icon: "🏛️",
      color: "from-orange-500 to-amber-600",
    },
    {
      title: "Jyotish Vidya Foundation",
      level: "Complete Beginner",
      duration: "16 Weeks",
      lessons: 64,
      students: "1,800+",
      desc: "Decode your Kundali, understand planetary influences, and master predictive astrology.",
      highlights: ["Birth chart basics", "Planetary impact", "Dasha", "Prediction model"],
      icon: "⭐",
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Advanced Remedies & Rituals",
      level: "Intermediate",
      duration: "8 Weeks",
      lessons: 32,
      students: "950+",
      desc: "Master mantra, yantra, gemstones, rituals, and spiritual processes used for healing.",
      highlights: ["Gemstones", "Yantra activation", "Ritual timing", "Mantra power"],
      icon: "✨",
      color: "from-amber-500 to-yellow-600",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950 via-purple-950/50 to-orange-950" />

      {/* Sacred Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Om Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute text-amber-400/5 text-9xl font-serif animate-float"
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: "20s",
            }}
          >
            ॐ
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/10 rounded-full border border-purple-400/20">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Learn Directly from Adish</span>
          </div>

          <h2 className="text-5xl font-bold text-white">
            Online Courses  
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-purple-400">
              {" "}by Master Adish
            </span>
          </h2>

          <p className="text-xl text-amber-200/80 max-w-3xl mx-auto">
            Structured spiritual learning designed to guide you from basics to mastery.
          </p>
        </div>

        {/* Teaching Video Section */}
        <div className="mb-20">
          <div className="relative max-w-5xl mx-auto group">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/30 border-2 border-amber-400/30">
              <div className="relative w-full h-full bg-gradient-to-br from-purple-900 via-orange-900 to-amber-900">

                <div className="absolute inset-0 bg-black/50" />

                {/* Sacred Geometry */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-96 h-96 animate-spin-slow">
                    <svg viewBox="0 0 200 200">
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#fbbf24" strokeWidth="0.5" />
                      <circle cx="100" cy="100" r="60" fill="none" stroke="#fbbf24" strokeWidth="0.5" />
                      <circle cx="100" cy="100" r="40" fill="none" stroke="#fbbf24" strokeWidth="0.5" />
                    </svg>
                  </div>
                </div>

                {/* Overlay Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
                  <div className="w-24 h-24 mb-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-2" />
                  </div>

                  <h3 className="text-4xl font-bold text-white mb-3">Watch Adish Teach</h3>
                  <p className="text-amber-200 text-lg">Experience the Master's Teaching Style</p>
                  <p className="text-amber-300/70 text-sm mt-2">15-second preview of actual course content</p>

                  {/* LIVE badge */}
                  <div className="absolute top-8 left-8 px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-400/30">
                    <span className="text-amber-200 text-sm font-semibold">🔴 LIVE Sessions Available</span>
                  </div>
                </div>

                {/* Corners */}
                <div className="absolute top-6 left-6 w-12 h-12 border-t-4 border-l-4 border-amber-400" />
                <div className="absolute top-6 right-6 w-12 h-12 border-t-4 border-r-4 border-amber-400" />
                <div className="absolute bottom-6 left-6 w-12 h-12 border-b-4 border-l-4 border-amber-400" />
                <div className="absolute bottom-6 right-6 w-12 h-12 border-b-4 border-r-4 border-amber-400" />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-amber-500/30 to-orange-500/30 rounded-3xl blur-3xl -z-10 group-hover:blur-4xl transition-all" />
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {courses.map((course, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-amber-400/50 transition-all duration-500 hover:scale-105 hover:shadow-orange-500/30"
            >
              {/* THUMBNAIL */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color}`} />

                {/* ADISH ICON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center border-4 border-white/30 shadow-2xl">
                      <Sparkles className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white/30 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Course Icon */}
                <div className="absolute top-6 left-6 text-6xl opacity-80">
                  {course.icon}
                </div>

                {/* Badge */}
                <div className="absolute top-6 right-6 px-3 py-1.5 bg-black/40 backdrop-blur-sm text-white text-xs rounded-full border border-white/20">
                  {course.level}
                </div>

                {/* STATS */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white/80 flex justify-between text-sm">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {course.students}</span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-amber-300">{course.title}</h3>
                <p className="text-amber-200/80">{course.desc}</p>

                <div className="space-y-2">
                  <p className="text-amber-400 font-semibold text-sm">What You'll Master:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {course.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-amber-100/80 text-sm">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 pt-4 border-t border-white/10">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CERTIFICATE SECTION (detailed one inside the component) */}
        <div className="relative max-w-4xl mx-auto mb-24 p-10 bg-gradient-to-br from-amber-900/30 via-purple-900/30 to-orange-900/30 border-2 border-amber-400/30 rounded-3xl backdrop-blur-sm">

          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 rounded-full shadow-xl flex items-center gap-2 text-white font-bold">
            <Award className="w-5 h-5" />
            Certification of Mastery
          </div>

          <div className="pt-10 text-center space-y-6">
            <h3 className="text-4xl font-bold text-white">Receive Your Sacred Certificate</h3>
            <p className="text-xl text-amber-200/80">Personally Signed by Master Adish</p>

            {/* Certificate Preview */}
            <div className="relative max-w-2xl mx-auto mt-8">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-50 to-orange-50 border-4 border-amber-400 rounded-xl shadow-2xl p-8">
                <div className="border-2 border-amber-400/50 rounded-lg p-6 h-full flex flex-col items-center justify-center space-y-4">
                  <div className="text-6xl">🏆</div>

                  <p className="text-amber-900 text-2xl font-serif font-bold">Certificate of Completion</p>
                  <p className="text-amber-800 text-lg">This certifies that</p>

                  <p className="text-amber-900 font-bold text-xl border-b-2 border-amber-400 pb-2 px-8">
                    [Your Name]
                  </p>

                  <p className="text-amber-800">has successfully completed the sacred teachings</p>

                  <div className="mt-8 pt-4 border-t border-amber-400/50 w-full">
                    <p className="text-amber-900/60 text-sm">Blessed & Certified by</p>
                    <p className="text-amber-700 italic text-4xl font-serif">Adish</p>
                    <p className="text-amber-800 text-sm font-semibold">
                      Master of Vastu Shastra & Jyotish Vidya
                    </p>
                  </div>
                </div>
              </div>

              {/* Seals */}
              <div className="absolute -bottom-6 left-1/4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 border-4 border-amber-300 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-2xl">🔱</span>
              </div>
              <div className="absolute -bottom-6 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 border-4 border-purple-300 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-2xl">✨</span>
              </div>
            </div>

            <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg shadow-xl hover:scale-105 mx-auto">
              View All Courses
            </button>
          </div>
        </div>

       
      </div>
    </section>
  );
}
