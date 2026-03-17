"use client";

import { useI18n } from "@/i18n/context";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="px-5 py-3 border-t border-white/8">
      <nav className="flex flex-wrap justify-center gap-2 mb-2">
        <a href="/faq" className="text-[8px] text-metro-muted/35 hover:text-metro-warm transition-colors">FAQ</a>
        <a href="/gids/investeren-costa-del-sol" className="text-[8px] text-metro-muted/35 hover:text-metro-warm transition-colors">Gids</a>
        <a href="/over-ons" className="text-[8px] text-metro-muted/35 hover:text-metro-warm transition-colors">Over Ons</a>
        <a href="/privacy" className="text-[8px] text-metro-muted/35 hover:text-metro-warm transition-colors">{t.footer.privacyLink}</a>
        <a href="/voorwaarden" className="text-[8px] text-metro-muted/35 hover:text-metro-warm transition-colors">{t.footer.termsLink}</a>
      </nav>
      <p className="text-[9px] text-metro-muted/60 leading-relaxed text-center">
        &copy; {new Date().getFullYear()} costadelsolinvest.nl | {t.footer.initiative}{" "}
        <span className="text-metro-muted/80 font-medium">Data Changes B.V.</span>
      </p>
      <p className="text-[8px] text-metro-muted/40 text-center mt-0.5">
        Nassausingel 3, 6511 EV Nijmegen | KvK 93372051
      </p>
    </footer>
  );
}
