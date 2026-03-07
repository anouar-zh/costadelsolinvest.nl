"use client";

import Image from "next/image";
import {
  Selections,
  METRO_COLORS,
  getLabelForSelection,
  getColorForSelection,
  getImageForSelection,
  generateProfileDescription,
} from "@/data/taxonomy";
import { useI18n } from "@/i18n/context";

interface SummaryProps {
  selections: Selections;
  onBack: () => void;
  onContinue: () => void;
}

export default function Summary({ selections, onBack, onContinue }: SummaryProps) {
  const { t } = useI18n();

  const profileItems = [
    { key: "motivation" as const, label: t.summary.driverLabel, step: 0, emoji: "🎯" },
    { key: "subcategory" as const, label: t.summary.focusLabel, step: 1, emoji: "🔍" },
    { key: "propertyType" as const, label: t.summary.propertyLabel, step: 2, emoji: "🏠" },
    { key: "budget" as const, label: t.summary.budgetLabel, step: 3, emoji: "💶" },
  ];

  return (
    <div className="px-5 py-4 w-full flex-1 flex flex-col min-h-0">
      <div className="metro-slide-in mb-1 shrink-0">
        <h2 className="text-[24px] leading-tight tracking-tight">
          <span className="font-extralight text-metro-warm">{t.summary.title1}</span>
          <br />
          <span className="font-semibold text-white">{t.summary.title2}</span>
        </h2>
      </div>

      <p className="metro-slide-in text-[12px] text-metro-muted leading-relaxed mb-3 shrink-0" style={{ animationDelay: "60ms" }}>
        {generateProfileDescription(selections, t)}
      </p>

      <div
        className="grid grid-cols-2 gap-[6px] flex-1 min-h-0"
        style={{ gridAutoRows: "minmax(0, 160px)", alignContent: "center" }}
      >
        {profileItems.map(({ key, label, step, emoji }, i) => {
          const value = selections[key] ?? "";
          const displayLabel = getLabelForSelection(step, value, selections, t);
          const color = getColorForSelection(step, value, selections);
          const image = getImageForSelection(step, value, selections);

          return (
            <div
              key={key}
              className={`metro-slide-in metro-tile-${i} relative flex flex-col items-start justify-between p-3 overflow-hidden min-h-0 pointer-events-none`}
              style={{ animationDelay: `${(i + 1) * 60}ms` }}
            >
              {/* Background photo */}
              {image && (
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
              )}

              {/* Color overlay */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: image ? `${color}A6` : color }}
              />

              {/* Bottom gradient for text readability */}
              {image && (
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
              )}

              {/* Checkmark badge */}
              <span className="absolute top-2 right-2 z-10 w-5 h-5 flex items-center justify-center rounded-full" style={{ backgroundColor: METRO_COLORS.cta }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>

              <span className="relative z-10 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/50 metro-tile-text">
                {label}
              </span>
              <span className="relative z-10 text-[12px] font-semibold text-white leading-tight mt-auto pr-6 metro-tile-text">
                {displayLabel}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between mt-3 shrink-0">
        <button
          onClick={onBack}
          className="text-[12px] text-metro-muted hover:text-metro-warm transition-colors flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t.summary.adjust}
        </button>

        <button
          onClick={onContinue}
          className="metro-tile text-[13px] font-semibold text-white py-2.5 px-5 flex items-center gap-2"
          style={{ backgroundColor: METRO_COLORS.cta }}
        >
          {t.summary.next}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
