"use client";

import { getCategoryImage, normalizeCategoryName } from "@/app/data/business";
import { Award, ChevronRight, Loader2, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface DriveFolder {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
  description?: string;
}

export default function RemediesSection() {
  const t = useTranslations("remedies");
  const tCommon = useTranslations("common");
  const router = useRouter();
  const [categories, setCategories] = useState<DriveFolder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMockData, setIsMockData] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/drive");
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error);
      }

      const folders = data.items
        .filter(
          (item: DriveFolder) =>
            item.mimeType === "application/vnd.google-apps.folder"
        )
        .slice(0, 4);

      setCategories(folders);
      setIsMockData(data.isMock || false);
    } catch (err: any) {
      console.error("Error fetching categories:", err);
      setError(err.message || "Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (categoryName: string) => {
    const canonical = normalizeCategoryName(categoryName);
    const path = `/remedies/${encodeURIComponent(canonical.replace(/\s+/g, "-"))}`;
    router.push(path);
  };

  return (
    <section
      id="remedies"
      className="relative py-10 md:py-16 overflow-hidden bg-gradient-to-b from-orange-100 via-amber-50 to-orange-100 scroll-mt-16"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(251,191,36,0.5) 1px, transparent 0)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {isMockData && (
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-6">
          <div className="bg-blue-100 border-2 border-blue-300 rounded-xl p-4 text-center">
            <p className="text-blue-900 font-semibold">🧪 {t("devMode")}</p>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 border border-amber-300 rounded-full">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span className="text-sm text-amber-900">{t("badge")}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">
            {t("title")}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              {t("subtitle")}
            </span>
          </h2>

          <p className="text-slate-700 text-base md:text-lg max-w-xl mx-auto mt-3">
            {t("description")}
          </p>
        </div>

        <h3 className="text-2xl md:text-4xl text-slate-900 font-bold mb-8 text-center">
          {t("sectionTitle")}
        </h3>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-amber-600 animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-600 text-lg mb-4">{error}</p>
            <button
              onClick={fetchCategories}
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:scale-105 transition-all"
            >
              {tCommon("tryAgain")}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10">
            {categories.map((category) => {
              const displayName = normalizeCategoryName(category.name);
              const imageSrc = getCategoryImage(category.name);

              return (
                <div
                  key={category.id}
                  onClick={() => handleCategoryClick(category.name)}
                  className="group relative bg-white rounded-[1.5rem] sm:rounded-[2.5rem] border border-slate-100 hover:border-amber-400/50 p-2 sm:p-4 transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(245,158,11,0.12)]"
                >
                  <div className="relative h-28 sm:h-60 w-full rounded-[1rem] sm:rounded-[2rem] overflow-hidden bg-stone-100 shadow-xl border border-white/5">
                    <Image
                      src={imageSrc}
                      alt={displayName}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Soft gradient for badge readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

                    <div className="absolute top-2 left-2 sm:top-5 sm:left-5 px-1.5 py-0.5 sm:px-3 sm:py-1 bg-white/15 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                      <span className="text-[7px] sm:text-[9px] font-black text-white tracking-[0.1em] sm:tracking-[0.2em] uppercase">
                        {t("cardBadge")}
                      </span>
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 sm:bottom-5 sm:left-5 sm:right-5 translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="bg-black/45 backdrop-blur-md border border-white/15 p-1 sm:p-3 rounded-lg sm:rounded-xl flex items-center justify-between">
                        <span className="text-[7px] sm:text-[9px] font-black text-white/95 uppercase tracking-widest">
                          {t("cardFooter")}
                        </span>
                        <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-amber-400" />
                      </div>
                    </div>
                  </div>

                  <div className="px-1 sm:px-3 pt-3 sm:pt-6 pb-2 sm:pb-4">
                    <div className="flex items-center gap-1 sm:gap-1.5 mb-1 sm:mb-2.5">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-500 rounded-full" />
                      <span className="text-[7px] sm:text-[9px] font-black text-amber-600 uppercase tracking-widest">
                        {t("premium")}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-2xl font-black text-slate-900 mb-1 tracking-tight group-hover:text-amber-600 transition-colors line-clamp-1 product-title">
                      {displayName}
                    </h4>
                    <p className="text-slate-500 text-[10px] sm:text-xs font-medium leading-normal sm:leading-relaxed mb-3 sm:mb-6 pr-1 line-clamp-2">
                      {t("cardDesc")}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md sm:rounded-lg group-hover:bg-amber-600 transition-all duration-300">
                        <span className="text-[7px] sm:text-[9px] font-black text-slate-600 group-hover:text-white uppercase tracking-widest">
                          {t("viewCollection")}
                        </span>
                        <ChevronRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white border border-amber-200 rounded-3xl p-10 text-center backdrop-blur-sm shadow-xl">
            <Award className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-slate-900">
              {t("guaranteeTitle")}
            </h3>
            <p className="text-slate-700 max-w-md mx-auto mt-3 text-sm">
              {t("guaranteeDesc")}
            </p>
          </div>
        </div>

        <div className="text-center pb-8 mt-4">
          <button
            onClick={() =>
              router.push(
                "/?service=remedies&msg=Global%20Sacred%20Remedy%20Consultation#contact-form"
              )
            }
            className="px-12 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl shadow-2xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 mx-auto group"
          >
            {t("cta")}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
