"use client";

import { useI18n } from "@/i18n/context";

export default function Footer() {
  const { t } = useI18n();

  return (
    <div className="px-5 py-3 border-t border-white/8">
      <p className="text-[9px] text-metro-muted/60 leading-relaxed text-center">
        &copy; {new Date().getFullYear()} costadelsolinvest.nl | {t.footer.initiative}{" "}
        <span className="text-metro-muted/80 font-medium">Data Changes B.V.</span>
      </p>
      <p className="text-[8px] text-metro-muted/40 text-center mt-0.5">
        Nassausingel 3, 6511 EV Nijmegen | KvK 93372051
      </p>
      <p className="text-[8px] text-center mt-1">
        <a href="/privacy" className="text-metro-muted/40 hover:text-metro-warm transition-colors">{t.footer.privacyLink}</a>
        {" | "}
        <a href="/voorwaarden" className="text-metro-muted/40 hover:text-metro-warm transition-colors">{t.footer.termsLink}</a>
      </p>
    </div>
  );
}
