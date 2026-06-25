"use client";

import { ChevronRight, Star } from "lucide-react";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TransformationStories() {
  const t = useTranslations('transformation');
  const router = useRouter();
  
  const stories = [
    {
      name: "Meera Sharma",
      location: "Mumbai",
      img: "/family.png",
      title: "From Chaos to Harmony",
      problem: "Family conflicts, health dips, financial stress.",
      solution: "Southwest Vastu correction & energy alignment.",
      outcome: "Peace restored, health uplifted, stable income.",
      quote:
        "Aadish Jain didn't just fix my home — he transformed our emotional space.",
    },
    {
      name: "Rajesh Patel",
      location: "Ahmedabad",
      img: "/profile.png",
      title: "Business Reborn",
      problem: "Heavy losses, clients leaving, no stability.",
      solution: "Office layout correction + prosperity activation.",
      outcome: "Doubled revenue & regained major clients.",
      quote: "We were 30 days from shutting down — now we're thriving.",
    },
    {
      name: "Priya & Arun",
      location: "Hyderabad",
      img: "/relation.png",
      title: "Relationship Healed",
      problem: "Misunderstandings, emotional distance, stress.",
      solution: "Bedroom Vastu + relationship energy correction.",
      outcome: "Harmony restored & deeper bonding.",
      quote:
        "Our home feels peaceful again — like a sanctuary.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [stories.length]);

  return (
    <section className="relative pt-4 pb-16 md:pt-6 md:pb-24 bg-gradient-to-b from-orange-100 via-amber-100 to-orange-100 overflow-hidden">

      {/* Header */}
      <div className="text-center mb-10">
        <p className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-300 text-amber-900 text-sm rounded-full">
          <Star className="w-4 h-4 fill-amber-700 text-amber-700" />
          {t('badge')}
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-5 leading-tight">
          {t('title')}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
            {t('subtitle')}
          </span>
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto px-4">
        {stories.map((s, i) => (
          <div
            key={i}
            className={`transition-opacity duration-500 ${
              index === i ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-white border border-amber-200 rounded-2xl p-5 md:p-10 backdrop-blur-sm shadow-xl">

              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden border border-amber-200 shadow-md h-[200px] md:h-[320px]">
                  <Image
                    src={s.img}
                    alt={s.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 space-y-4">

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="text-amber-700 text-xs md:text-sm mt-1">
                    {s.name} • {s.location}
                  </p>
                </div>

                <div>
                  <p className="text-red-600 text-xs font-semibold uppercase">
                    {t('problem')}
                  </p>
                  <p className="text-slate-700 text-sm md:text-base">{s.problem}</p>
                </div>

                <div>
                  <p className="text-amber-700 text-xs font-semibold uppercase">
                    {t('solution')}
                  </p>
                  <p className="text-slate-700 text-sm md:text-base">{s.solution}</p>
                </div>

                <div>
                  <p className="text-green-700 text-xs font-semibold uppercase">
                    {t('outcome')}
                  </p>
                  <p className="text-green-800 text-sm md:text-base">{s.outcome}</p>
                </div>

                <blockquote className="border-l-4 border-amber-400 pl-4 text-slate-700 italic text-sm md:text-lg">
                  "{s.quote}"
                </blockquote>

                <button 
                    onClick={() => router.push(`/?service=vastu&msg=Transformation%20Story%20Inquiry%20from%20${encodeURIComponent(s.name)}#consultation-form`)}
                    className="px-8 py-4 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl shadow-2xl shadow-slate-900/10 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
                >
                  {t('bookCta')}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {stories.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
              index === i
                ? "bg-amber-600 scale-125"
                : "bg-slate-400 hover:bg-slate-500"
            }`}
          ></div>
        ))}
      </div>

    </section>
  );
}
