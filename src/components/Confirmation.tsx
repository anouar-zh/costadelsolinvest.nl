"use client";

import { METRO_COLORS } from "@/data/taxonomy";
import { useI18n } from "@/i18n/context";
import Footer from "./Footer";

interface ConfirmationProps {
  onReset: () => void;
}

export default function Confirmation({ onReset }: ConfirmationProps) {
  const { t } = useI18n();

  return (
    <div className="h-[100dvh] flex flex-col w-full bg-metro-bg overflow-hidden">
      <div className="metro-slide-in flex-1 flex flex-col items-start justify-center px-5">
        <div
          className="w-16 h-16 flex items-center justify-center mb-8"
          style={{ backgroundColor: METRO_COLORS.emerald }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h2 className="text-[30px] leading-tight tracking-tight mb-3">
          <span className="font-extralight text-metro-warm">{t.confirmation.title1}</span>
          <br />
          <span className="font-semibold text-white">{t.confirmation.title2}</span>
        </h2>

        <p className="text-[13px] text-metro-muted leading-relaxed max-w-xs mb-10">
          {t.confirmation.message}
        </p>

        <button
          onClick={onReset}
          className="text-[13px] text-metro-muted hover:text-metro-warm transition-colors flex items-center gap-2"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t.confirmation.restart}
        </button>
      </div>

      <Footer />
    </div>
  );
}
