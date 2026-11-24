"use client";

import {
  Award,
  CheckCircle,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function AuthenticityGuaranteeSection() {
  const router = useRouter();
  const t = useTranslations("authenticity");

  const points = [
    {
      icon: <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-amber-600" />,
      title: t("p1Title"),
      desc: t("p1Desc"),
    },
    {
      icon: <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-amber-600" />,
      title: t("p2Title"),
      desc: t("p2Desc"),
    },
    {
      icon: <Award className="w-7 h-7 md:w-8 md:h-8 text-amber-600" />,
      title: t("p3Title"),
      desc: t("p3Desc"),
    },
    {
      icon: <CheckCircle className="w-7 h-7 md:w-8 md:h-8 text-amber-600" />,
      title: t("p4Title"),
      desc: t("p4Desc"),
    },
    {
      icon: <FileCheck2 className="w-7 h-7 md:w-8 md:h-8 text-amber-600" />,
      title: t("p5Title"),
      desc: t("p5Desc"),
    },
    {
      icon: <Star className="w-7 h-7 md:w-8 md:h-8 text-amber-600" />,
      title: t("p6Title"),
      desc: t("p6Desc"),
    },
  ];

  return (
    <section className="relative py-16 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-100 via-amber-50 to-orange-100" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-14 md:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-300 rounded-full mb-4">
          <ShieldCheck className="w-4 h-4 text-amber-700" />
          <span className="text-xs md:text-sm text-amber-900">{t("badge")}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
          {t("title")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
            {t("titleAccent")}
          </span>
        </h2>

        <p className="text-base md:text-xl text-slate-700 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
          {t("description")}
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {points.map((p, i) => (
          <div
            key={i}
            className="group bg-white border border-amber-200 rounded-2xl p-6 text-center backdrop-blur-sm transition-all hover:border-amber-400 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="mb-4 flex items-center justify-center">{p.icon}</div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
              {p.title}
            </h3>
            <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 mt-16 md:mt-24">
        <div className="bg-white border border-amber-200 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center shadow-2xl transition-all">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
              <Award className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            {t("certTitle")}
          </h3>

          <p className="text-slate-700 text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            {t("certDesc")}
          </p>

          <button
            onClick={() =>
              router.push(
                "/?service=remedies&msg=Cerificate%20Verification%20and%20Authenticity%20Query#consultation-form"
              )
            }
            className="px-10 py-5 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl shadow-2xl shadow-slate-900/10 hover:scale-105 active:scale-95 transition-all"
          >
            {t("viewCert")}
          </button>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-14 md:mt-20">
        <p className="text-base md:text-lg text-slate-600 italic">{t("quote")}</p>
        <p className="text-amber-700 font-semibold mt-2">{t("quoteAuthor")}</p>
      </div>
    </section>
  );
}
