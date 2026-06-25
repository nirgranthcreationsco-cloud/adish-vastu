"use client";

import { BookOpen, ChevronRight, Compass, Home, Sparkles, Star } from "lucide-react";
import { useTranslations } from 'next-intl';
import { useRouter } from "next/navigation";

export default function ServicesSection() {
  const t = useTranslations('services');
  const router = useRouter();

  const services = [
    {
      title: t('vastu.title'),
      subtitle: t('vastu.subtitle'),
      desc: t('vastu.desc'),
      features: [t('vastu.feature1'), t('vastu.feature2'), t('vastu.feature3')],
      icon: Home,
      slug: "vastu",
      gradient: "from-amber-500 to-orange-600",
      lightColor: "bg-amber-50",
      borderCol: "group-hover:border-amber-500",
    },
    {
      title: t('jyotish.title'),
      subtitle: t('jyotish.subtitle'),
      desc: t('jyotish.desc'),
      features: [t('jyotish.feature1'), t('jyotish.feature2'), t('jyotish.feature3')],
      icon: Star,
      slug: "jyotish",
      gradient: "from-orange-500 to-rose-600",
      lightColor: "bg-orange-50",
      borderCol: "group-hover:border-orange-500",
    },
    {
      title: t('courses.title'),
      subtitle: t('courses.subtitle'),
      desc: t('courses.desc'),
      features: [t('courses.feature1'), t('courses.feature2'), t('courses.feature3')],
      icon: BookOpen,
      slug: "courses",
      gradient: "from-amber-600 to-yellow-500",
      lightColor: "bg-amber-50",
      borderCol: "group-hover:border-amber-500",
    },
    {
      title: t('remedies.title'),
      subtitle: t('remedies.subtitle'),
      desc: t('remedies.desc'),
      features: [t('remedies.feature1'), t('remedies.feature2'), t('remedies.feature3')],
      icon: Compass,
      slug: "remedies",
      gradient: "from-yellow-600 to-orange-500",
      lightColor: "bg-orange-50",
      borderCol: "group-hover:border-yellow-500",
    },
  ];

  const handleConsult = (slug: string, title: string) => {
    router.push(`/?service=${slug}&msg=${encodeURIComponent(title)}%20Consultation#consultation-form`);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-orange-50/50 to-orange-100">
      
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-full shadow-2xl mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-black uppercase tracking-widest">{t('badge')}</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Sacred Services</span>
          </h2>

          <p className="text-lg text-slate-700 max-w-2xl mx-auto font-medium">
            Discover a comprehensive ecosystem designed to transform your space, spirit, and future through ancient wisdom.
          </p>
        </div>

        {/* Services Grid (2 Columns on Mobile, 4 on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                onClick={() => handleConsult(service.slug || 'vastu', service.title)}
                className={`group relative bg-white rounded-[1.5rem] sm:rounded-[2.5rem] border border-amber-100 p-4 sm:p-8 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(245,158,11,0.1)] hover:-translate-y-3 cursor-pointer flex flex-col h-full overflow-hidden`}
              >
                {/* Background Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 -mr-10 -mt-10 rounded-full blur-2xl`} />

                {/* Icon Container */}
                <div className="relative mb-6 sm:mb-10">
                  <div className={`w-10 h-10 sm:w-16 sm:h-16 ${service.lightColor} rounded-xl sm:rounded-2xl flex items-center justify-center transform group-hover:rotate-[10deg] transition-all duration-500 shadow-sm border border-amber-100`}>
                    <Icon className="w-5 h-5 sm:w-8 sm:h-8 text-amber-700" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-sm sm:text-2xl font-black text-slate-900 leading-tight mb-1 group-hover:text-amber-600 transition-colors line-clamp-1">
                      {service.title}
                    </h3>
                    <p className={`text-[8px] sm:text-xs font-black uppercase tracking-wider sm:tracking-widest opacity-60 text-amber-800`}>
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-655 text-[10px] sm:text-sm leading-normal sm:leading-relaxed mb-4 sm:mb-8 flex-1 line-clamp-2 sm:line-clamp-none">
                    {service.desc}
                  </p>

                  {/* Features (Hidden on mobile to keep 2-column view extremely clean) */}
                  <div className="space-y-3 mb-8 hidden sm:block">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-slate-700">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient} shadow-sm`} />
                        <span className="text-xs font-bold opacity-80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-3 sm:pt-6 border-t border-slate-50 flex items-center justify-between mt-auto">
                    <span className="text-[8px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-900 transition-colors">Discover</span>
                    <button className="w-6 h-6 sm:w-10 sm:h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-500">
                      <ChevronRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
