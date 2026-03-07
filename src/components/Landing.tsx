"use client";

import Image from "next/image";
import { METRO_COLORS } from "@/data/taxonomy";
import { useI18n } from "@/i18n/context";
import LanguageSelector from "./LanguageSelector";
import MarketStats from "./MarketStats";

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  const { t } = useI18n();

  return (
    <div className="relative h-[100dvh] flex flex-col justify-between w-full overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-costa.jpg"
        >
          <source src="/videos/costa-real-estate.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-5 py-5">
        {/* Top bar: brand + language — mobile only */}
        <div className="metro-slide-in flex items-center justify-between mb-2 md:hidden">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Costa del Sol Invest"
              width={36}
              height={36}
              className="w-9 h-9"
              priority
            />
            <span className="text-[11px] font-semibold tracking-wider text-white/50 uppercase">
              costadelsolinvest.nl
            </span>
          </div>
          <LanguageSelector />
        </div>

        {/* Hero text */}
        <div className="metro-slide-in flex-1 flex flex-col justify-center py-6">
          <h1 className="text-[38px] leading-[1.05] tracking-tight">
            <span className="font-extralight text-white/80">{t.landing.discover}</span>
            <br />
            <span className="font-semibold text-white">{t.landing.whereToInvest}</span>
            <br />
            <span className="font-extralight text-white/50">{t.landing.inCostaDel}</span>
          </h1>
        </div>

        {/* Market stats tiles — real data as social proof */}
        <MarketStats />

        {/* CTA */}
        <div className="metro-slide-up" style={{ animationDelay: "250ms" }}>
          <p className="text-[13px] text-white/50 mb-4 leading-relaxed">
            {t.landing.subtitle}
          </p>

          <button
            onClick={onStart}
            className="metro-tile w-full py-4 px-5 text-left text-[15px] font-semibold text-white tracking-wide"
            style={{ backgroundColor: METRO_COLORS.cta }}
          >
            <span className="flex items-center justify-between">
              {t.landing.cta}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>

          <div className="flex gap-6 mt-4 mb-3">
            <span className="text-[10px] text-white/40 uppercase tracking-[0.18em] font-medium">{t.landing.free}</span>
            <span className="text-[10px] text-white/40 uppercase tracking-[0.18em] font-medium">{t.landing.minutes}</span>
            <span className="text-[10px] text-white/40 uppercase tracking-[0.18em] font-medium">{t.landing.noObligation}</span>
          </div>

          {/* Process steps */}
          <div className="grid grid-cols-4 gap-2">
            {t.trust.processSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span
                  className="w-[22px] h-[22px] flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ backgroundColor: i === 0 ? METRO_COLORS.cta : "rgba(255,255,255,0.12)" }}
                >
                  {i + 1}
                </span>
                <span className="text-[8px] text-white/35 leading-tight text-center">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer — copyright & company info */}
        <div className="mt-2 pt-3 border-t border-white/10">
          <p className="text-[9px] text-white/30 leading-relaxed text-center">
            &copy; {new Date().getFullYear()} costadelsolinvest.nl | {t.footer.initiative}{" "}
            <span className="text-white/40 font-medium">Data Changes B.V.</span>
          </p>
          <p className="text-[8px] text-white/20 text-center mt-1">
            Nassausingel 3, 6511 EV Nijmegen | KvK 93372051
          </p>
          <p className="text-[8px] text-center mt-1">
            <a href="/privacy" className="text-white/20 hover:text-white/40 transition-colors">{t.footer.privacyLink}</a>
            {" | "}
            <a href="/voorwaarden" className="text-white/20 hover:text-white/40 transition-colors">{t.footer.termsLink}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
