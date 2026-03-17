import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Over Ons | Costa del Sol Invest - Data Changes B.V. Nijmegen",
  description:
    "Leer ons team kennen. Costa del Sol Invest is een initiatief van Data Changes B.V. (KvK 93372051) uit Nijmegen. Wij helpen Nederlandse investeerders met vastgoed aan de Costa del Sol.",
  keywords: [
    "costa del sol invest team",
    "data changes b.v.",
    "nederlandse vastgoedadviseur spanje",
    "wie zijn wij costa del sol",
  ],
  alternates: {
    canonical: "https://costadelsolinvest.nl/over-ons",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://costadelsolinvest.nl",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Over Ons",
      item: "https://costadelsolinvest.nl/over-ons",
    },
  ],
};

export default function OverOnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <div className="min-h-screen bg-metro-bg text-white">
        <div className="max-w-2xl mx-auto px-5 py-8">
          <nav className="flex items-center justify-between mb-8">
            <Link
              href="/"
              className="text-[12px] text-metro-muted hover:text-metro-warm transition-colors flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 12H5M12 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Terug naar home
            </Link>
            <Link
              href="/faq"
              className="text-[12px] text-metro-muted hover:text-metro-warm transition-colors"
            >
              FAQ
            </Link>
          </nav>

          <header className="mb-10">
            <h1 className="text-[32px] font-semibold tracking-tight mb-3">
              Over Costa del Sol Invest
            </h1>
            <p className="text-[14px] text-metro-muted leading-relaxed">
              Wij helpen Nederlandse, Belgische en Duitse investeerders bij het
              vinden van de juiste vastgoedinvestering aan de Costa del Sol.
            </p>
          </header>

          <main className="space-y-10">
            {/* Missie */}
            <section>
              <h2 className="text-[18px] font-semibold mb-3">Onze Missie</h2>
              <p className="text-[13px] text-metro-muted leading-relaxed">
                De vastgoedmarkt aan de Costa del Sol biedt enorme kansen, maar
                het landschap is complex — zeker voor buitenlandse
                investeerders. Wij geloven dat iedere investeerder recht heeft
                op transparante, onafhankelijke begeleiding. Daarom hebben wij
                een gratis investeringsscan ontwikkeld die in 2 minuten uw
                persoonlijke investeringsprofiel bepaalt. Geen verplichtingen,
                geen verborgen kosten.
              </p>
            </section>

            {/* Wie wij zijn */}
            <section>
              <h2 className="text-[18px] font-semibold mb-3">Wie Wij Zijn</h2>
              <p className="text-[13px] text-metro-muted leading-relaxed mb-4">
                Costa del Sol Invest is een initiatief van{" "}
                <strong className="text-white/80">Data Changes B.V.</strong>,
                een Nederlands bedrijf gevestigd in Nijmegen. Ons team combineert
                jarenlange ervaring in data-analyse en de Spaanse
                vastgoedmarkt om investeerders te helpen met gefundeerde
                beslissingen.
              </p>

              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 bg-white/5 border border-white/10">
                  <h3 className="text-[14px] font-semibold mb-1">
                    Data-gedreven aanpak
                  </h3>
                  <p className="text-[12px] text-metro-muted leading-relaxed">
                    Wij analyseren continu marktdata van bronnen als Idealista,
                    INE en het Spaanse kadaster om u actueel en betrouwbaar
                    advies te geven over prijsontwikkelingen, huurrendementen en
                    opkomende locaties.
                  </p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10">
                  <h3 className="text-[14px] font-semibold mb-1">
                    Lokale expertise
                  </h3>
                  <p className="text-[12px] text-metro-muted leading-relaxed">
                    Ons netwerk aan de Costa del Sol omvat geregistreerde
                    makelaars, juridische adviseurs, fiscalisten en
                    hypotheekadviseurs die gespecialiseerd zijn in buitenlandse
                    kopers.
                  </p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10">
                  <h3 className="text-[14px] font-semibold mb-1">
                    Nederlandstalige begeleiding
                  </h3>
                  <p className="text-[12px] text-metro-muted leading-relaxed">
                    Van het eerste contact tot de sleuteloverdracht: u wordt
                    begeleid in uw eigen taal. Wij spreken Nederlands, Engels,
                    Duits en Spaans.
                  </p>
                </div>
              </div>
            </section>

            {/* Bedrijfsgegevens */}
            <section>
              <h2 className="text-[18px] font-semibold mb-3">
                Bedrijfsgegevens
              </h2>
              <div className="p-4 bg-white/5 border border-white/10 space-y-2">
                <div className="flex justify-between text-[13px]">
                  <span className="text-metro-muted">Bedrijfsnaam</span>
                  <span className="text-white/80 font-medium">
                    Data Changes B.V.
                  </span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-metro-muted">KvK-nummer</span>
                  <span className="text-white/80 font-medium">93372051</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-metro-muted">Vestiging</span>
                  <span className="text-white/80 font-medium">
                    Nassausingel 3, 6511 EV Nijmegen
                  </span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-metro-muted">E-mail</span>
                  <span className="text-white/80 font-medium">
                    info@costadelsolinvest.nl
                  </span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-metro-muted">Werkgebied</span>
                  <span className="text-white/80 font-medium">
                    Costa del Sol, Spanje
                  </span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-metro-muted">Talen</span>
                  <span className="text-white/80 font-medium">
                    NL, EN, DE, ES
                  </span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-metro-muted">AVG/GDPR</span>
                  <span className="text-white/80 font-medium">
                    Volledig compliant
                  </span>
                </div>
              </div>
            </section>

            {/* Onze werkwijze */}
            <section>
              <h2 className="text-[18px] font-semibold mb-3">
                Onze Werkwijze
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Gratis investeringsscan",
                    desc: "In 2 minuten bepalen wij uw investeringsprofiel op basis van uw motivatie, locatievoorkeur, woningtype en budget.",
                  },
                  {
                    step: "2",
                    title: "Persoonlijk strategiegesprek",
                    desc: "Een 30-minuten telefoongesprek met een van onze adviseurs om uw wensen te bespreken en de markt toe te lichten.",
                  },
                  {
                    step: "3",
                    title: "Investeringsvoorstel op maat",
                    desc: "U ontvangt een selectie van vastgoedobjecten die passen bij uw profiel, inclusief rendementsprognose en kostenanalyse.",
                  },
                  {
                    step: "4",
                    title: "Begeleiding bij aankoop",
                    desc: "Van bezichtiging tot notariële akte: wij begeleiden u door het volledige aankoopproces in Spanje.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span
                      className="w-8 h-8 flex items-center justify-center text-[13px] font-bold text-white shrink-0"
                      style={{ backgroundColor: "#E8762Dcc" }}
                    >
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-[14px] font-semibold mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-[12px] text-metro-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section>
              <h2 className="text-[18px] font-semibold mb-3">
                Wat Onze Klanten Zeggen
              </h2>
              <div className="space-y-4">
                {[
                  {
                    quote:
                      "Dankzij de scan wisten wij precies wat we zochten. Binnen drie maanden hadden we ons droomappartement in Estepona.",
                    author: "Peter V.",
                    location: "Amsterdam",
                    detail: "Appartement in Estepona, €285.000",
                  },
                  {
                    quote:
                      "De data-gedreven aanpak overtuigde ons. We kregen een helder beeld van de rendementen per locatie en kozen uiteindelijk voor Mijas — een gouden greep.",
                    author: "Sandra & Mark T.",
                    location: "Utrecht",
                    detail: "Townhouse in Mijas, €340.000",
                  },
                  {
                    quote:
                      "Als expat wilde ik investeren maar wist niet waar te beginnen. Het team sprak mijn taal en begeleidde me door het hele Spaanse aankoopproces.",
                    author: "Thomas K.",
                    location: "Antwerpen",
                    detail: "Penthouse in Málaga, €420.000",
                  },
                ].map((testimonial, i) => (
                  <blockquote
                    key={i}
                    className="border-l-2 border-white/15 pl-4"
                  >
                    <p className="text-[13px] text-white/60 leading-relaxed italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <footer className="mt-2">
                      <p className="text-[11px] text-white/40 font-medium">
                        {testimonial.author}, {testimonial.location}
                      </p>
                      <p className="text-[10px] text-white/25">
                        {testimonial.detail}
                      </p>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="p-6 bg-white/5 border border-white/10">
              <h2 className="text-[18px] font-semibold mb-2">
                Klaar om te beginnen?
              </h2>
              <p className="text-[13px] text-metro-muted mb-4 leading-relaxed">
                Doe onze gratis investeringsscan en ontdek welk type
                vastgoedinvestering aan de Costa del Sol bij u past.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-block py-3 px-6 text-[14px] font-semibold text-white tracking-wide"
                  style={{ backgroundColor: "#E8762D" }}
                >
                  Start de Investeringsscan
                </Link>
                <Link
                  href="/gids/investeren-costa-del-sol"
                  className="inline-block py-3 px-6 text-[14px] font-medium text-white/70 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  Lees onze Gids
                </Link>
              </div>
            </section>
          </main>

          <footer className="mt-10 pt-4 border-t border-white/10">
            <nav className="flex flex-wrap justify-center gap-3 mb-3">
              <Link
                href="/"
                className="text-[10px] text-white/25 hover:text-white/40 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/faq"
                className="text-[10px] text-white/25 hover:text-white/40 transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/gids/investeren-costa-del-sol"
                className="text-[10px] text-white/25 hover:text-white/40 transition-colors"
              >
                Investeringsgids
              </Link>
              <Link
                href="/privacy"
                className="text-[10px] text-white/25 hover:text-white/40 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/voorwaarden"
                className="text-[10px] text-white/25 hover:text-white/40 transition-colors"
              >
                Voorwaarden
              </Link>
            </nav>
            <p className="text-[9px] text-metro-muted/50 text-center">
              &copy; {new Date().getFullYear()} costadelsolinvest.nl | Data
              Changes B.V. | KvK 93372051
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
