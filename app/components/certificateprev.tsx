"use client";

import { Award } from "lucide-react";

export default function CertificatePreview() {
  return (
    <div className="max-w-4xl mx-auto my-20 relative p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden border-[6px] border-amber-500 bg-[url('/paper-texture.png')] bg-cover bg-center">

      {/* Outer Gold Frame */}
      <div className="absolute inset-0 border-[10px] border-amber-300 rounded-2xl pointer-events-none" />

      {/* Inner Ornamental Frame */}
      <div className="absolute inset-[18px] border-[3px] border-amber-500/70 rounded-xl pointer-events-none" />

      {/* Corner Decorations */}
      <div className="absolute top-6 left-6 text-4xl text-amber-500/80">✦</div>
      <div className="absolute top-6 right-6 text-4xl text-amber-500/80">✦</div>
      <div className="absolute bottom-6 left-6 text-4xl text-amber-500/80">✦</div>
      <div className="absolute bottom-6 right-6 text-4xl text-amber-500/80">✦</div>

      <div className="relative text-center px-6">

        {/* Certificate Header */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 shadow-xl flex items-center justify-center border-4 border-white/50">
            <Award className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 className="text-5xl font-serif tracking-wide text-amber-900 font-bold mb-2">
          Certificate of Achievement
        </h1>

        <p className="text-lg text-amber-700 tracking-wide mb-6">
          Awarded with blessings & recognition from <span className="font-semibold">Master Aadish Jain</span>
        </p>

        {/* Divider */}
        <div className="w-48 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-10" />

        {/* Certificate Body */}
        <p className="text-xl text-amber-800 mb-3">This certifies that</p>

        <h2 className="text-4xl font-bold font-serif text-amber-900 mb-4 tracking-wide">
          [ Student Name ]
        </h2>

        <p className="text-lg text-amber-800 mt-4">
          has successfully completed the sacred teachings of
        </p>

        <h3 className="text-2xl font-semibold text-amber-700 italic mt-2">
          “[ Course Title ]”
        </h3>

        <p className="text-amber-700 max-w-2xl mx-auto mt-6 leading-relaxed text-lg">
          under the personal guidance, wisdom, and spiritual mentorship of  
          <span className="font-semibold text-amber-900"> Master Aadish Jain</span>,  
          demonstrating commitment, discipline, and mastery of divine knowledge.
        </p>

        {/* Seal + Signature + Date */}
        <div className="mt-16 grid grid-cols-3 items-center text-center">

          {/* Left Seal */}
          <div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg border-4 border-white/60 flex items-center justify-center mx-auto">
              <span className="text-3xl text-white">🔱</span>
            </div>
            <p className="mt-2 text-amber-700 text-sm tracking-wide">Official Seal</p>
          </div>

          {/* Signature */}
          <div>
            <p className="text-4xl font-serif italic text-amber-900">Aadish Jain</p>
            <p className="text-sm text-amber-700">Master & Mentor</p>
          </div>

          {/* Date */}
          <div>
            <p className="text-xl text-amber-800 font-medium">Date</p>
            <p className="text-lg text-amber-700">DD / MM / YYYY</p>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="w-36 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-12" />

        {/* Download Button */}
        <button className="mt-10 px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg shadow-xl hover:scale-105 transition-all">
          Download Certificate
        </button>

      </div>
    </div>
  );
}
