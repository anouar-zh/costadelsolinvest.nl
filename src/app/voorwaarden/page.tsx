"use client";

import Link from "next/link";
import { I18nProvider, useI18n } from "@/i18n/context";
import LanguageSelector from "@/components/LanguageSelector";

function TermsContent() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-metro-bg text-white">
      <div className="max-w-2xl mx-auto px-5 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="text-[12px] text-metro-muted hover:text-metro-warm transition-colors flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t.legal.backHome}
          </Link>
          <LanguageSelector />
        </div>

        <h1 className="text-[28px] font-semibold tracking-tight mb-2">
          {t.legal.termsTitle}
        </h1>
        <p className="text-[11px] text-metro-muted mb-8">
          {t.legal.lastUpdated}
        </p>

        <div className="space-y-6">
          {t.legal.termsSections.map((section, i) => (
            <div key={i}>
              <h2 className="text-[15px] font-semibold text-metro-warm mb-2">
                {section.heading}
              </h2>
              <p className="text-[13px] text-metro-muted leading-relaxed whitespace-pre-line">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-4 border-t border-white/10">
          <p className="text-[9px] text-metro-muted/50 text-center">
            &copy; {new Date().getFullYear()} costadelsolinvest.nl | {t.footer.initiative}{" "}
            <span className="text-metro-muted/70 font-medium">Data Changes B.V.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <I18nProvider>
      <TermsContent />
    </I18nProvider>
  );
}
