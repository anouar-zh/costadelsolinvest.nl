"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { useI18n } from "@/i18n/context";
import LanguageSelector from "./LanguageSelector";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const { t } = useI18n();

  return (
    <div className="app-shell">
      {/* Phone column */}
      <div className="app-phone">
        {children}
      </div>

      {/* Desktop side panel */}
      <div className="app-side hidden md:flex relative overflow-hidden">
        <Image
          src="/images/side-mediterranean.jpg"
          alt="Mediterranean coast"
          fill
          className="object-cover object-center"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/80" />

        <div className="relative z-10 max-w-md mt-auto">
          {/* Language selector on desktop */}
          <div className="mb-8">
            <LanguageSelector />
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: "#E8762D" }}>
              <span className="text-white text-sm font-bold">IC</span>
            </div>
            <span className="text-sm font-semibold tracking-wide text-white/70">
              costadelsolinvest.nl
            </span>
          </div>

          <h2 className="text-[42px] font-extralight leading-[1.05] tracking-tight mb-4 text-white/80">
            {t.desktop.yourNext}
            <br />
            <span className="font-semibold text-white">{t.desktop.investment}</span>
            <br />
            {t.desktop.startsHere}
          </h2>

          <p className="text-sm leading-relaxed mb-8 text-white/40">
            {t.desktop.description}
          </p>

          {/* Process steps */}
          <div className="mb-8">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50 mb-3">
              {t.trust.processTitle}
            </h3>
            <div className="space-y-2.5">
              {t.trust.processSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="w-6 h-6 flex items-center justify-center text-[11px] font-bold text-white shrink-0"
                    style={{ backgroundColor: "#E8762Dcc" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[13px] text-white/60 leading-snug pt-0.5">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="mb-8 border-l-2 border-white/15 pl-4">
            <p className="text-[13px] text-white/50 leading-relaxed italic">
              &ldquo;{t.trust.testimonialQuote}&rdquo;
            </p>
            <p className="text-[11px] text-white/35 mt-2 font-medium">
              {t.trust.testimonialAuthor}
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] text-white/30 uppercase tracking-[0.12em] font-medium">
            <span>{t.trust.kvkLabel}</span>
            <span>{t.trust.avgLabel}</span>
            <span>{t.trust.dutchTeam}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
