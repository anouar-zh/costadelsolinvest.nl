import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Investeren aan de Costa del Sol: De Complete Gids 2026 | Rendement, Locaties & Kosten",
  description:
    "Alles over vastgoed investeren aan de Costa del Sol in 2026. Huurrendement 5-8%, prijsstijging 13,8%, locatievergelijking Marbella vs Estepona vs Mijas. Kosten, belasting, hypotheek en meer.",
  keywords: [
    "investeren costa del sol gids",
    "vastgoed costa del sol 2026",
    "complete gids vastgoed spanje",
    "huurrendement costa del sol 2026",
    "marbella vs estepona investeren",
    "kosten koper spanje 2026",
    "belasting vastgoed spanje nederlander",
    "hypotheek spanje niet-resident",
    "vastgoedmarkt costa del sol analyse",
    "rendement berekenen costa del sol",
  ],
  alternates: {
    canonical:
      "https://costadelsolinvest.nl/gids/investeren-costa-del-sol",
  },
  openGraph: {
    title:
      "Investeren aan de Costa del Sol: De Complete Gids 2026",
    description:
      "Alles over vastgoed investeren aan de Costa del Sol. Rendement, locaties, kosten en belasting voor Nederlandse investeerders.",
    url: "https://costadelsolinvest.nl/gids/investeren-costa-del-sol",
    type: "article",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
          name: "Gids",
          item: "https://costadelsolinvest.nl/gids",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Investeren aan de Costa del Sol",
          item: "https://costadelsolinvest.nl/gids/investeren-costa-del-sol",
        },
      ],
    },
    {
      "@type": "Article",
      headline:
        "Investeren aan de Costa del Sol: De Complete Gids 2026",
      description:
        "Uitgebreide gids over vastgoedinvesteringen aan de Costa del Sol voor Nederlandse investeerders",
      author: {
        "@type": "Organization",
        name: "Costa del Sol Invest",
        url: "https://costadelsolinvest.nl",
      },
      publisher: {
        "@type": "Organization",
        name: "Costa del Sol Invest",
        logo: "https://costadelsolinvest.nl/logo.svg",
      },
      datePublished: "2026-01-15",
      dateModified: "2026-03-17",
      mainEntityOfPage:
        "https://costadelsolinvest.nl/gids/investeren-costa-del-sol",
    },
  ],
};

function TableOfContents() {
  const sections = [
    { id: "waarom", label: "Waarom Costa del Sol?" },
    { id: "marktcijfers", label: "Marktcijfers 2025-2026" },
    { id: "locaties", label: "Locatievergelijking" },
    { id: "rendement", label: "Huurrendement berekenen" },
    { id: "kosten", label: "Kosten koper" },
    { id: "belasting", label: "Belasting voor Nederlanders" },
    { id: "hypotheek", label: "Hypotheek in Spanje" },
    { id: "aankoopproces", label: "Het aankoopproces" },
    { id: "risicos", label: "Risico\u2019s en valkuilen" },
    { id: "conclusie", label: "Conclusie" },
  ];

  return (
    <nav className="p-4 bg-white/5 border border-white/10 mb-10">
      <h2 className="text-[14px] font-semibold mb-3">Inhoudsopgave</h2>
      <ol className="space-y-1.5">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="text-[12px] text-metro-muted hover:text-white/80 transition-colors"
            >
              {i + 1}. {s.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function GidsPage() {
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
            <div className="flex gap-4">
              <Link
                href="/faq"
                className="text-[12px] text-metro-muted hover:text-metro-warm transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/over-ons"
                className="text-[12px] text-metro-muted hover:text-metro-warm transition-colors"
              >
                Over Ons
              </Link>
            </div>
          </nav>

          <header className="mb-8">
            <p className="text-[11px] text-metro-muted uppercase tracking-wider mb-2">
              Investeringsgids &middot; Bijgewerkt maart 2026
            </p>
            <h1 className="text-[30px] font-semibold tracking-tight mb-3 leading-tight">
              Investeren aan de Costa del Sol: De Complete Gids voor Nederlandse
              Investeerders
            </h1>
            <p className="text-[14px] text-metro-muted leading-relaxed">
              Van huurrendement en locatiekeuze tot belastingregels en het
              aankoopproces — alles wat u moet weten om succesvol te investeren
              in vastgoed aan de Costa del Sol.
            </p>
          </header>

          <TableOfContents />

          <main className="space-y-10">
            {/* 1. Waarom Costa del Sol */}
            <section id="waarom">
              <h2 className="text-[20px] font-semibold mb-4">
                1. Waarom Investeren aan de Costa del Sol?
              </h2>
              <div className="text-[13px] text-metro-muted leading-relaxed space-y-3">
                <p>
                  De Costa del Sol is niet voor niets een van de populairste
                  vastgoedmarkten in Europa. De regio in het zuiden van Spanje,
                  gelegen aan de Middellandse Zee in de provincie M&aacute;laga,
                  trekt jaarlijks miljoenen toeristen en een groeiend aantal
                  permanente bewoners uit heel Europa.
                </p>
                <p>
                  Voor Nederlandse investeerders biedt de Costa del Sol een
                  unieke combinatie van voordelen die in Nederland steeds
                  moeilijker te vinden zijn:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>
                    <strong className="text-white/70">Hoog rendement</strong>:
                    5-8% bruto huurrendement versus 2-4% in Nederland
                  </li>
                  <li>
                    <strong className="text-white/70">Waardestijging</strong>:
                    13,8% prijsstijging in 2025, verwachting 5-9% in 2026
                  </li>
                  <li>
                    <strong className="text-white/70">Klimaat</strong>: 300+
                    zondagen per jaar, milde winters
                  </li>
                  <li>
                    <strong className="text-white/70">Bereikbaarheid</strong>:
                    2,5 uur vliegen vanaf Schiphol, directe vluchten dagelijks
                  </li>
                  <li>
                    <strong className="text-white/70">Infrastructuur</strong>:
                    AVE hogesnelheidstrein, moderne snelwegen, internationale
                    scholen
                  </li>
                  <li>
                    <strong className="text-white/70">Groeiende vraag</strong>:
                    Nederlandse kopers +38% in H1 2025
                  </li>
                </ul>
              </div>
            </section>

            {/* 2. Marktcijfers */}
            <section id="marktcijfers">
              <h2 className="text-[20px] font-semibold mb-4">
                2. Marktcijfers Costa del Sol 2025-2026
              </h2>
              <div className="text-[13px] text-metro-muted leading-relaxed space-y-3">
                <p>
                  De vastgoedmarkt aan de Costa del Sol laat al enkele jaren een
                  sterke groei zien, gedreven door internationale vraag en
                  beperkt aanbod.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-[12px] border border-white/10">
                    <thead>
                      <tr className="bg-white/5">
                        <th className="text-left p-2 border-b border-white/10 font-semibold text-white/70">
                          Indicator
                        </th>
                        <th className="text-right p-2 border-b border-white/10 font-semibold text-white/70">
                          Waarde
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Prijsstijging M\u00E1laga 2025", "+13,8%"],
                        ["Verwachte groei 2026", "+5-9%"],
                        ["Bruto huurrendement", "5-8%"],
                        ["Luxe investeringsvolume", "\u20AC3,2 miljard"],
                        ["Buitenlandse kopers (% totaal)", "35-40%"],
                        ["Nederlandse kopers groei H1 2025", "+38%"],
                        ["Gemiddelde prijs/m\u00B2 Marbella", "\u20AC4.260-5.258"],
                        ["Gemiddelde prijs/m\u00B2 Estepona", "\u20AC3.600-3.854"],
                        ["Gemiddelde prijs/m\u00B2 Mijas", "\u20AC2.768-3.800"],
                        ["Gemiddelde prijs/m\u00B2 M\u00E1laga stad", "\u20AC3.549"],
                        ["Zondagen per jaar", "300+"],
                      ].map(([label, value]) => (
                        <tr key={label} className="border-b border-white/5">
                          <td className="p-2">{label}</td>
                          <td className="p-2 text-right text-white/70 font-medium">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[10px] text-white/25">
                  Bronnen: Idealista, INE (Instituto Nacional de
                  Estad&iacute;stica), Tinsa, Registradores de Espa&ntilde;a
                </p>
              </div>
            </section>

            {/* 3. Locatievergelijking */}
            <section id="locaties">
              <h2 className="text-[20px] font-semibold mb-4">
                3. Locatievergelijking: Waar Investeren?
              </h2>
              <div className="text-[13px] text-metro-muted leading-relaxed space-y-4">
                <div className="p-4 bg-white/5 border border-white/10">
                  <h3 className="text-[15px] font-semibold text-white/80 mb-2">
                    Marbella &amp; de Golden Triangle
                  </h3>
                  <p className="mb-2">
                    Het luxe segment van de Costa del Sol. De Golden Triangle
                    (Marbella, Benahav&iacute;s, Estepona) staat bekend om exclusief
                    vastgoed, internationale kopers en hoge waardestijging.
                    Puerto Ban&uacute;s is het kloppend hart van het luxe leven.
                  </p>
                  <ul className="text-[12px] space-y-0.5">
                    <li>Prijs: \u20AC4.260-5.258/m\u00B2</li>
                    <li>Rendement: 4-6% bruto (luxe segment)</li>
                    <li>Ideaal voor: kapitaalgroei, premium verhuur</li>
                  </ul>
                </div>

                <div className="p-4 bg-white/5 border border-white/10">
                  <h3 className="text-[15px] font-semibold text-white/80 mb-2">
                    Estepona
                  </h3>
                  <p className="mb-2">
                    De snelst groeiende stad aan de Costa del Sol. Het
                    historische centrum is volledig gerenoveerd en trekt steeds
                    meer internationale bewoners. Veel kwalitatieve
                    nieuwbouwprojecten met moderne voorzieningen.
                  </p>
                  <ul className="text-[12px] space-y-0.5">
                    <li>Prijs: \u20AC3.600-3.854/m\u00B2</li>
                    <li>Rendement: 5-7% bruto</li>
                    <li>Ideaal voor: groeimarkt, nieuwbouw, rendement</li>
                  </ul>
                </div>

                <div className="p-4 bg-white/5 border border-white/10">
                  <h3 className="text-[15px] font-semibold text-white/80 mb-2">
                    Mijas
                  </h3>
                  <p className="mb-2">
                    De beste prijs-kwaliteitverhouding aan de Costa del Sol.
                    Mijas Costa biedt strandleven, terwijl Mijas Pueblo een
                    charmant bergdorp is. Populair bij gezinnen en
                    budgetbewuste investeerders.
                  </p>
                  <ul className="text-[12px] space-y-0.5">
                    <li>Prijs: \u20AC2.768-3.800/m\u00B2</li>
                    <li>Rendement: 6-8% bruto</li>
                    <li>Ideaal voor: starters, prijs-kwaliteit, hoog rendement</li>
                  </ul>
                </div>

                <div className="p-4 bg-white/5 border border-white/10">
                  <h3 className="text-[15px] font-semibold text-white/80 mb-2">
                    M&aacute;laga Stad
                  </h3>
                  <p className="mb-2">
                    De opkomende ster voor stadsinvesteringen. De tech-sector
                    groeit (Google, Vodafone), digital nomads vestigen zich er,
                    en het culturele aanbod is uitstekend. Huurvraag is hoog en
                    stabiel het hele jaar door.
                  </p>
                  <ul className="text-[12px] space-y-0.5">
                    <li>Prijs: \u20AC3.549/m\u00B2</li>
                    <li>Rendement: 5-7% bruto</li>
                    <li>Ideaal voor: stadsinvestering, langetermijnverhuur</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. Rendement */}
            <section id="rendement">
              <h2 className="text-[20px] font-semibold mb-4">
                4. Huurrendement Berekenen
              </h2>
              <div className="text-[13px] text-metro-muted leading-relaxed space-y-3">
                <p>
                  Het berekenen van uw huurrendement aan de Costa del Sol hangt
                  af van uw verhuurstrategie: vakantieverhuur (korte termijn)
                  of langetermijnverhuur.
                </p>

                <div className="p-4 bg-white/5 border border-white/10">
                  <h3 className="text-[14px] font-semibold text-white/80 mb-2">
                    Rekenvoorbeeld: Appartement in Estepona (\u20AC250.000)
                  </h3>
                  <div className="text-[12px] space-y-1">
                    <p>
                      <strong className="text-white/60">
                        Vakantieverhuur:
                      </strong>{" "}
                      25 weken &times; \u20AC750/week = \u20AC18.750 bruto/jaar = 7,5%
                      bruto rendement
                    </p>
                    <p>
                      <strong className="text-white/60">
                        Langetermijn:
                      </strong>{" "}
                      12 maanden &times; \u20AC1.100/maand = \u20AC13.200 bruto/jaar =
                      5,3% bruto rendement
                    </p>
                    <p className="text-white/30 mt-2">
                      Na aftrek van kosten (beheer, onderhoud, belasting,
                      verzekering) bedraagt het netto rendement doorgaans
                      60-70% van het bruto rendement.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Kosten koper */}
            <section id="kosten">
              <h2 className="text-[20px] font-semibold mb-4">
                5. Kosten Koper in Spanje
              </h2>
              <div className="text-[13px] text-metro-muted leading-relaxed space-y-3">
                <p>
                  Bij de aankoop van vastgoed in Spanje komen bijkomende kosten
                  van circa 10-13% bovenop de koopprijs. Het is essentieel
                  deze kosten mee te nemen in uw investeringsberekening.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-[12px] border border-white/10">
                    <thead>
                      <tr className="bg-white/5">
                        <th className="text-left p-2 border-b border-white/10 font-semibold text-white/70">
                          Kostenpost
                        </th>
                        <th className="text-right p-2 border-b border-white/10 font-semibold text-white/70">
                          Percentage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Overdrachtsbelasting (bestaande bouw)",
                          "7-10%",
                        ],
                        ["BTW/IVA (nieuwbouw)", "10%"],
                        ["Zegelrecht AJD (nieuwbouw)", "1,2%"],
                        ["Notariskosten", "0,5-1%"],
                        ["Registerkosten", "0,5-1%"],
                        ["Juridische begeleiding", "1-1,5%"],
                        ["Taxatiekosten", "\u20AC300-600"],
                        ["NIE-nummer aanvraag", "\u20AC100-200"],
                      ].map(([label, value]) => (
                        <tr key={label} className="border-b border-white/5">
                          <td className="p-2">{label}</td>
                          <td className="p-2 text-right text-white/70 font-medium">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 6. Belasting */}
            <section id="belasting">
              <h2 className="text-[20px] font-semibold mb-4">
                6. Belasting voor Nederlandse Investeerders
              </h2>
              <div className="text-[13px] text-metro-muted leading-relaxed space-y-3">
                <p>
                  Als Nederlandse eigenaar van Spaans vastgoed heeft u te
                  maken met belastingverplichtingen in beide landen. Het
                  dubbelbelastingverdrag Nederland-Spanje voorkomt dat u
                  dubbel betaalt.
                </p>

                <h3 className="text-[15px] font-semibold text-white/70 mt-4">
                  In Spanje
                </h3>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>
                    <strong className="text-white/60">
                      Inkomstenbelasting niet-residenten (IRNR):
                    </strong>{" "}
                    19% over netto huurinkomsten (EU-tarief). Kosten zoals
                    onderhoud, hypotheekrente, afschrijving (3% bouwwaarde),
                    verzekeringen en gemeenschapskosten zijn aftrekbaar.
                  </li>
                  <li>
                    <strong className="text-white/60">
                      Geen verhuur? Imputaci&oacute;n de renta:
                    </strong>{" "}
                    1,1-2% van de kadastrale waarde wordt als fictief inkomen
                    belast tegen 19%.
                  </li>
                  <li>
                    <strong className="text-white/60">
                      IBI (onroerendezaakbelasting):
                    </strong>{" "}
                    0,4-1,1% van de kadastrale waarde per jaar.
                  </li>
                  <li>
                    <strong className="text-white/60">
                      Verm&ouml;gensbelasting:
                    </strong>{" "}
                    Vrijstelling tot \u20AC700.000. Daarboven 0,2-3,5%
                    progressief.
                  </li>
                </ul>

                <h3 className="text-[15px] font-semibold text-white/70 mt-4">
                  In Nederland
                </h3>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>
                    Spaans vastgoed valt in <strong className="text-white/60">box 3</strong> maar
                    wordt vrijgesteld via de vrijstellingsmethode
                  </li>
                  <li>
                    U geeft het aan in uw aangifte, maar betaalt effectief
                    alleen in Spanje
                  </li>
                  <li>
                    Spaanse schulden (hypotheek) mogen worden afgetrokken van
                    het Spaanse vermogen in box 3
                  </li>
                </ul>
              </div>
            </section>

            {/* 7. Hypotheek */}
            <section id="hypotheek">
              <h2 className="text-[20px] font-semibold mb-4">
                7. Hypotheek in Spanje als Niet-Resident
              </h2>
              <div className="text-[13px] text-metro-muted leading-relaxed space-y-3">
                <p>
                  Spaanse banken verstrekken hypotheken aan niet-residenten
                  onder specifieke voorwaarden:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>
                    <strong className="text-white/60">
                      Maximale financiering:
                    </strong>{" "}
                    60-70% van de taxatiewaarde (LTV)
                  </li>
                  <li>
                    <strong className="text-white/60">Rente:</strong> 3-4,5%
                    vast (10-15 jaar) of variabel (Euribor + 1,5-2,5%)
                  </li>
                  <li>
                    <strong className="text-white/60">Looptijd:</strong>{" "}
                    Maximaal 20-25 jaar, afhankelijk van leeftijd
                  </li>
                  <li>
                    <strong className="text-white/60">Documenten:</strong>{" "}
                    Loonstroken of jaarrekeningen, belastingaangiftes (3
                    jaar), bankafschriften, arbeidscontract
                  </li>
                  <li>
                    <strong className="text-white/60">
                      Fiscaal voordeel:
                    </strong>{" "}
                    Hypotheekrente is aftrekbaar van Spaanse huurinkomsten
                  </li>
                </ul>
                <p>
                  <strong className="text-white/60">Tip:</strong> Een Spaanse
                  hypotheek kan uw netto rendement verhogen door het
                  hefboomeffect. Bij een hypotheek van 60% LTV tegen 3,5%
                  rente op een woning met 7% bruto huurrendement, stijgt uw
                  rendement op eigen vermogen aanzienlijk.
                </p>
              </div>
            </section>

            {/* 8. Aankoopproces */}
            <section id="aankoopproces">
              <h2 className="text-[20px] font-semibold mb-4">
                8. Het Aankoopproces Stap voor Stap
              </h2>
              <div className="text-[13px] text-metro-muted leading-relaxed space-y-3">
                <ol className="space-y-4">
                  {[
                    {
                      title: "NIE-nummer aanvragen",
                      desc: "Verplicht voor alle vastgoedtransacties. Aanvragen bij het Spaanse consulaat in Den Haag of lokaal in Spanje. Duurt 2-4 weken.",
                    },
                    {
                      title: "Spaanse bankrekening openen",
                      desc: "Nodig voor de betaling en doorlopende kosten. De meeste banken vereisen persoonlijke aanwezigheid.",
                    },
                    {
                      title: "Bezichtiging en selectie",
                      desc: "Bezoek uw geselecteerde woningen. Wij adviseren minimaal 2-3 dagen ter plaatse te plannen.",
                    },
                    {
                      title: "Reservering (Contrato de Reserva)",
                      desc: "Een reserveringsovereenkomst met een aanbetaling van \u20AC3.000-\u20AC10.000. De woning wordt voor u gereserveerd.",
                    },
                    {
                      title: "Juridische due diligence",
                      desc: "Uw advocaat controleert de eigendomssituatie, vergunningen, schulden en kadastrale registratie.",
                    },
                    {
                      title: "Koopcontract (Contrato de Arras)",
                      desc: "Het voorlopig koopcontract. U betaalt doorgaans 10% van de koopprijs als aanbetaling. Bij annulering verliest u dit bedrag.",
                    },
                    {
                      title: "Hypotheek (optioneel)",
                      desc: "Hypotheekaanvraag bij een Spaanse bank. Taxatie wordt uitgevoerd. Doorlooptijd: 4-8 weken.",
                    },
                    {
                      title: "Notari\u00EBle akte (Escritura)",
                      desc: "Ondertekening bij de notaris. De eigendom wordt officieel overgedragen. U ontvangt de sleutels.",
                    },
                    {
                      title: "Registratie en nutsvoorzieningen",
                      desc: "Inschrijving bij het kadaster, overzetten van water, elektriciteit en internet op uw naam.",
                    },
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span
                        className="w-7 h-7 flex items-center justify-center text-[12px] font-bold text-white shrink-0 mt-0.5"
                        style={{ backgroundColor: "#E8762Dcc" }}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <strong className="text-white/70">
                          {step.title}
                        </strong>
                        <p className="mt-0.5">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* 9. Risico's */}
            <section id="risicos">
              <h2 className="text-[20px] font-semibold mb-4">
                9. Risico&rsquo;s en Valkuilen
              </h2>
              <div className="text-[13px] text-metro-muted leading-relaxed space-y-3">
                <p>
                  Zoals bij elke investering zijn er risico&rsquo;s. Door u
                  goed voor te bereiden kunt u de meeste valkuilen vermijden:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>
                    <strong className="text-white/60">
                      Illegale bouw of ontbrekende vergunningen:
                    </strong>{" "}
                    Laat altijd een onafhankelijke advocaat de juridische
                    status controleren v&oacute;&oacute;r aankoop
                  </li>
                  <li>
                    <strong className="text-white/60">
                      Overwaardeerde objecten:
                    </strong>{" "}
                    Vergelijk altijd prijzen per m\u00B2 met marktgemiddelden.
                    Vertrouw niet blind op de vraagprijs
                  </li>
                  <li>
                    <strong className="text-white/60">
                      Verhuurlicentie:
                    </strong>{" "}
                    Controleer v&oacute;&oacute;r aankoop of een verhuurlicentie
                    beschikbaar is in de gemeente
                  </li>
                  <li>
                    <strong className="text-white/60">
                      Gemeenschapskosten:
                    </strong>{" "}
                    Informeer naar de hoogte en of er achterstallige
                    betalingen zijn bij de VvE
                  </li>
                  <li>
                    <strong className="text-white/60">
                      Valutarisico:
                    </strong>{" "}
                    Beide landen gebruiken de euro, dus geen valutarisico voor
                    Nederlanders
                  </li>
                  <li>
                    <strong className="text-white/60">
                      Leegstand:
                    </strong>{" "}
                    Bij vakantieverhuur kan het laagseizoen (november-maart)
                    een lage bezetting opleveren. Houd rekening met 60-70%
                    bezettingsgraad
                  </li>
                </ul>
              </div>
            </section>

            {/* 10. Conclusie */}
            <section id="conclusie">
              <h2 className="text-[20px] font-semibold mb-4">
                10. Conclusie
              </h2>
              <div className="text-[13px] text-metro-muted leading-relaxed space-y-3">
                <p>
                  Investeren aan de Costa del Sol biedt Nederlandse
                  investeerders een aantrekkelijke combinatie van
                  huurrendement, waardestijging en lifestyle. Met de juiste
                  voorbereiding — locatiekeuze, juridische begeleiding en
                  een realistische rendementsverwachting — is vastgoed aan de
                  Costa del Sol een solide toevoeging aan uw
                  beleggingsportefeuille.
                </p>
                <p>
                  De markt is dynamisch en evolueert snel. Wacht niet te lang
                  met uw ori&euml;ntatie — de best gelegen woningen gaan
                  snel.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="p-6 bg-white/5 border border-white/10">
              <h2 className="text-[18px] font-semibold mb-2">
                Ontdek uw Investeringsprofiel
              </h2>
              <p className="text-[13px] text-metro-muted mb-4 leading-relaxed">
                Doe onze gratis investeringsscan in 2 minuten. Op basis van
                uw motivatie, locatievoorkeur, woningtype en budget stellen
                wij uw persoonlijke investeringsprofiel samen.
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
                  href="/faq"
                  className="inline-block py-3 px-6 text-[14px] font-medium text-white/70 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  Bekijk de FAQ
                </Link>
              </div>
            </section>

            {/* Disclaimer */}
            <aside className="text-[10px] text-white/20 leading-relaxed">
              <p>
                <strong>Disclaimer:</strong> Deze gids is uitsluitend
                bedoeld als algemene informatie en vormt geen financieel,
                fiscaal of juridisch advies. Raadpleeg altijd een
                gekwalificeerde adviseur voordat u investeringsbeslissingen
                neemt. Costa del Sol Invest / Data Changes B.V. aanvaardt
                geen aansprakelijkheid voor beslissingen genomen op basis
                van deze informatie.
              </p>
            </aside>
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
                href="/over-ons"
                className="text-[10px] text-white/25 hover:text-white/40 transition-colors"
              >
                Over Ons
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
