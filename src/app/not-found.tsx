import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina niet gevonden | Costa del Sol Invest",
  description:
    "Deze pagina bestaat niet. Ga terug naar de homepage voor informatie over vastgoedinvesteringen aan de Costa del Sol.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-metro-bg text-white flex items-center justify-center">
      <div className="max-w-md mx-auto px-5 text-center">
        <h1 className="text-[64px] font-extralight text-white/20 mb-2">404</h1>
        <h2 className="text-[22px] font-semibold tracking-tight mb-4">
          Pagina niet gevonden
        </h2>
        <p className="text-[13px] text-metro-muted leading-relaxed mb-8">
          De pagina die u zoekt bestaat niet of is verplaatst. Ontdek hieronder
          meer over investeren aan de Costa del Sol.
        </p>

        <nav className="space-y-3">
          <Link
            href="/"
            className="block py-3 px-5 text-[14px] font-semibold text-white tracking-wide text-center"
            style={{ backgroundColor: "#E8762D" }}
          >
            Start de Investeringsscan
          </Link>
          <Link
            href="/faq"
            className="block py-3 px-5 text-[14px] font-medium text-white/70 bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
          >
            Veelgestelde Vragen
          </Link>
        </nav>

        <footer className="mt-12">
          <p className="text-[9px] text-metro-muted/50">
            &copy; {new Date().getFullYear()} costadelsolinvest.nl | Data
            Changes B.V.
          </p>
        </footer>
      </div>
    </div>
  );
}
