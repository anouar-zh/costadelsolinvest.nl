"use client";

import { useI18n } from "@/i18n/context";
import { Locale } from "@/i18n/translations";

export default function LanguageSelector() {
  const { locale, setLocale, locales } = useI18n();

  return (
    <div className="flex gap-0">
      {(Object.keys(locales) as Locale[]).map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={`px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] transition-colors ${
            locale === l
              ? "text-white bg-white/15"
              : "text-white/30 hover:text-white/60"
          }`}
        >
          {locales[l]}
        </button>
      ))}
    </div>
  );
}
