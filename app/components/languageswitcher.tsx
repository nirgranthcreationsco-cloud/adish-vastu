"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "./localeprovider";

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { locale, switchLocale } = useLocale();
  const t = useTranslations("common");

  return (
    <button
      type="button"
      onClick={() => switchLocale(locale === "en" ? "hi" : "en")}
      className={`inline-flex items-center gap-2 px-3.5 py-2 bg-white/95 backdrop-blur-md border border-amber-200/80 text-amber-950 font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all text-sm ${className}`}
      aria-label="Switch language"
    >
      <span className="text-base leading-none" aria-hidden>
        {locale === "en" ? "🇮🇳" : "🇬🇧"}
      </span>
      <span className="leading-none font-semibold">
        {locale === "en" ? t("langHi") : t("langEn")}
      </span>
    </button>
  );
}
