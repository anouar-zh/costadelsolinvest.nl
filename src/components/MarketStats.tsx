"use client";

import { useI18n } from "@/i18n/context";
import { METRO_COLORS } from "@/data/taxonomy";

const stats = {
  nl: [
    { value: "13,8%", label: "Prijsstijging", sublabel: "Málaga 2025", color: METRO_COLORS.emerald },
    { value: "5-8%", label: "Huurrendement", sublabel: "Bruto per jaar", color: METRO_COLORS.azure },
    { value: "€3,2B", label: "Luxe investeringen", sublabel: "Costa del Sol", color: METRO_COLORS.amber },
    { value: "300+", label: "Zondagen", sublabel: "Per jaar", color: METRO_COLORS.terracotta },
  ],
  en: [
    { value: "13.8%", label: "Price Growth", sublabel: "Málaga 2025", color: METRO_COLORS.emerald },
    { value: "5-8%", label: "Rental Yield", sublabel: "Gross per year", color: METRO_COLORS.azure },
    { value: "€3.2B", label: "Luxury Investments", sublabel: "Costa del Sol", color: METRO_COLORS.amber },
    { value: "300+", label: "Sunny Days", sublabel: "Per year", color: METRO_COLORS.terracotta },
  ],
  es: [
    { value: "13,8%", label: "Subida de precios", sublabel: "Málaga 2025", color: METRO_COLORS.emerald },
    { value: "5-8%", label: "Rentabilidad", sublabel: "Bruto anual", color: METRO_COLORS.azure },
    { value: "€3,2B", label: "Inversión de lujo", sublabel: "Costa del Sol", color: METRO_COLORS.amber },
    { value: "300+", label: "Días de sol", sublabel: "Por año", color: METRO_COLORS.terracotta },
  ],
  de: [
    { value: "13,8%", label: "Preissteigerung", sublabel: "Málaga 2025", color: METRO_COLORS.emerald },
    { value: "5-8%", label: "Mietrendite", sublabel: "Brutto pro Jahr", color: METRO_COLORS.azure },
    { value: "€3,2B", label: "Luxus-Investitionen", sublabel: "Costa del Sol", color: METRO_COLORS.amber },
    { value: "300+", label: "Sonnentage", sublabel: "Pro Jahr", color: METRO_COLORS.terracotta },
  ],
};

export default function MarketStats() {
  const { locale, t } = useI18n();
  const items = stats[locale];

  return (
    <div className="mb-4">
      <div className="grid grid-cols-2 gap-[6px]">
        {items.map((stat, i) => (
          <div
            key={stat.label}
            className={`metro-slide-in metro-tile-${i} flex flex-col items-start justify-between p-3`}
            style={{ backgroundColor: `${stat.color}cc`, animationDelay: `${i * 60}ms` }}
          >
            <span className="text-[22px] font-bold text-white leading-none metro-tile-text">{stat.value}</span>
            <div className="mt-auto">
              <span className="text-[10px] font-semibold text-white/90 uppercase tracking-[0.1em] block leading-tight metro-tile-text">
                {stat.label}
              </span>
              <span className="text-[9px] text-white/50 uppercase tracking-wider metro-tile-text">
                {stat.sublabel}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[8px] text-white/25 mt-1.5 text-right">{t.trust.dataSource}</p>
    </div>
  );
}
