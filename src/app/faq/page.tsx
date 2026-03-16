import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Veelgestelde Vragen | Investeren Costa del Sol - Vastgoed, Belasting & Rendement",
  description:
    "Antwoorden op veelgestelde vragen over investeren aan de Costa del Sol. Huurrendement, kosten koper, NIE-nummer, hypotheek Spanje, belasting en verhuurlicentie.",
  keywords: [
    "faq investeren costa del sol",
    "veelgestelde vragen vastgoed spanje",
    "huurrendement costa del sol",
    "kosten koper spanje",
    "NIE nummer spanje",
    "hypotheek spanje nederlander",
    "belasting vastgoed spanje",
    "verhuurlicentie andalusie",
    "vastgoedbubbel costa del sol",
    "vakantieverhuur costa del sol",
  ],
  alternates: {
    canonical: "https://costadelsolinvest.nl/faq",
  },
};

const faqs = [
  {
    question: "Wat is het gemiddelde huurrendement aan de Costa del Sol?",
    answer:
      "Het gemiddelde bruto huurrendement aan de Costa del Sol ligt tussen 5-8%, afhankelijk van de locatie en het type vastgoed. Vakantieverhuur in populaire gebieden zoals Marbella en Estepona kan oplopen tot 8-10% bruto rendement in het hoogseizoen. Langetermijnverhuur biedt stabielere maar lagere rendementen van 4-6%.",
  },
  {
    question: "Hoeveel stijgen vastgoedprijzen aan de Costa del Sol?",
    answer:
      "In 2025 stegen de vastgoedprijzen in de provincie Málaga met gemiddeld 13,8% op jaarbasis. Voor 2026 wordt een groei van 5-9% verwacht. De afgelopen 5 jaar zijn prijzen in toplocaties met 40-60% gestegen. De groei wordt gedreven door internationale vraag, beperkt nieuwbouwaanbod en verbeterde infrastructuur.",
  },
  {
    question: "Wat kost een woning aan de Costa del Sol?",
    answer:
      "De gemiddelde prijs per m\u00B2 varieert per locatie: Marbella \u20AC4.260-5.258/m\u00B2, Estepona \u20AC3.600-3.854/m\u00B2, Mijas \u20AC2.768-3.800/m\u00B2, M\u00E1laga stad \u20AC3.549/m\u00B2. Instapwoningen beginnen vanaf circa \u20AC150.000 voor een appartement. Luxe villa\u2019s aan de Golden Mile starten vanaf \u20AC1,5 miljoen.",
  },
  {
    question:
      "Is het slim om nu te investeren in vastgoed aan de Costa del Sol?",
    answer:
      "Ja, de Costa del Sol blijft een sterke investeringsmarkt. Met 300+ zonnedagen per jaar, groeiend toerisme, verbeterde infrastructuur en een stijgende vraag van Noord-Europese kopers biedt de regio aantrekkelijke rendementen. Nederlandse kopers groeiden met 38% in het eerste halfjaar van 2025. De combinatie van waardestijging en huurinkomsten maakt het een solide belegging.",
  },
  {
    question:
      "Welke bijkomende kosten zijn er bij het kopen van een huis in Spanje?",
    answer:
      "De bijkomende kosten bij aankoop in Spanje bedragen circa 10-13% van de koopprijs. Dit omvat overdrachtsbelasting (7-10% voor bestaande bouw, 10% BTW voor nieuwbouw), notariskosten (0,5-1%), registerkosten (0,5-1%) en juridische begeleiding (1-1,5%). Daarnaast zijn er jaarlijkse kosten zoals IBI (onroerendezaakbelasting), basura (afvalbelasting) en eventueel gemeenschapskosten.",
  },
  {
    question:
      "Heb ik als Nederlander een NIE-nummer nodig om een huis te kopen in Spanje?",
    answer:
      "Ja, een NIE-nummer (N\u00FAmero de Identidad de Extranjero) is verplicht voor elke vastgoedtransactie in Spanje. U kunt dit aanvragen bij het Spaanse consulaat in Nederland of lokaal in Spanje. De aanvraag duurt gemiddeld 2-4 weken. Zonder NIE-nummer kunt u geen notari\u00EBle akte laten opmaken, geen bankrekening openen en geen nuts voorzieningen aansluiten.",
  },
  {
    question: "Kan ik als Nederlander een hypotheek krijgen in Spanje?",
    answer:
      "Ja, Spaanse banken verstrekken hypotheken aan niet-residenten tot 60-70% van de taxatiewaarde. De rente ligt momenteel tussen 3-4,5% voor vaste periodes van 10-20 jaar. Banken vragen doorgaans om bewijs van inkomen, belastingaangiftes en een schone BKR-registratie. Een hypotheek in Spanje kan fiscaal voordelig zijn voor verhuurders omdat de rente aftrekbaar is van de huurinkomsten.",
  },
  {
    question: "Hoeveel belasting betaal ik over huurinkomsten in Spanje?",
    answer:
      "Als EU-inwoner betaalt u 19% belasting over netto huurinkomsten in Spanje. U mag kosten zoals onderhoud, hypotheekrente, afschrijving (3% van de bouwwaarde), verzekeringen en gemeenschapskosten aftrekken. Door het dubbelbelastingverdrag Nederland-Spanje wordt dubbele belasting voorkomen via de vrijstellingsmethode.",
  },
  {
    question:
      "Wat is de beste locatie aan de Costa del Sol om te investeren?",
    answer:
      "De beste locatie hangt af van uw strategie. Marbella en de Golden Triangle bieden luxe met hoge waardestijging. Estepona is een groeimarkt met uitstekend rendement en een bruisend centrum. Mijas biedt de beste prijs-kwaliteitverhouding, ideaal voor starters. M\u00E1laga stad groeit als stadsinvestering met hoge huurvraag door de tech-sector en digital nomads.",
  },
  {
    question:
      "Kan ik mijn woning aan de Costa del Sol verhuren aan toeristen?",
    answer:
      "Ja, maar u heeft een verhuurlicentie (licencia tur\u00EDstica) nodig van de Junta de Andaluc\u00EDa. De regelgeving verschilt per gemeente. In veel gebieden aan de Costa del Sol is vakantieverhuur toegestaan, maar er gelden specifieke eisen voor registratie, veiligheid en minimale voorzieningen. De aanvraag duurt 1-3 maanden. Zonder licentie riskeert u boetes tot \u20AC150.000.",
  },
  {
    question:
      "Moet ik ook in Nederland belasting betalen over mijn Spaanse woning?",
    answer:
      "Door het dubbelbelastingverdrag tussen Nederland en Spanje wordt uw Spaanse vastgoed in box 3 vrijgesteld via de vrijstellingsmethode. U geeft het wel aan in uw Nederlandse aangifte, maar betaalt effectief alleen in Spanje belasting over de inkomsten. In Spanje betaalt u jaarlijks inkomstenbelasting over (fictieve) huurinkomsten, ook als u niet verhuurt.",
  },
  {
    question:
      "Hoeveel kan ik verdienen met vakantieverhuur aan de Costa del Sol?",
    answer:
      "Een goed gelegen appartement van \u20AC200.000-\u20AC300.000 kan \u20AC15.000-\u20AC25.000 bruto per jaar opleveren via vakantieverhuur. In toplocaties zoals Marbella en Puerto Ban\u00FAs liggen de opbrengsten hoger. Het hoogseizoen (juni-september) levert 50-60% van de jaaromzet op. Na aftrek van kosten (beheer, schoonmaak, onderhoud) houdt u netto 60-70% over.",
  },
  {
    question: "Is er een vastgoedbubbel aan de Costa del Sol?",
    answer:
      "Analisten zien momenteel geen bubbel. De huidige prijsstijgingen worden ondersteund door re\u00EBle vraag, beperkt nieuwbouwaanbod, en een diverse kopersmarkt. De prijzen liggen in veel gebieden nog 20-30% onder het piekjaar 2007, gecorrigeerd voor inflatie. Bovendien zijn de hypotheekregels strenger dan v\u00F3\u00F3r de crisis, wat speculatief gedrag beperkt.",
  },
];

// JSON-LD BreadcrumbList for FAQ page
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
      name: "Veelgestelde Vragen",
      item: "https://costadelsolinvest.nl/faq",
    },
  ],
};

export default function FAQPage() {
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
          </nav>

          <header className="mb-10">
            <h1 className="text-[32px] font-semibold tracking-tight mb-3">
              Veelgestelde Vragen over Investeren aan de Costa del Sol
            </h1>
            <p className="text-[14px] text-metro-muted leading-relaxed">
              Alles wat u moet weten over vastgoedinvesteringen aan de Costa del
              Sol. Van huurrendement en kosten koper tot belastingregels en
              verhuurlicenties.
            </p>
          </header>

          <main>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <article
                  key={i}
                  className="border-l-2 border-white/10 pl-4 hover:border-metro-warm transition-colors"
                >
                  <h2 className="text-[15px] font-semibold text-white mb-2">
                    {faq.question}
                  </h2>
                  <p className="text-[13px] text-metro-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>

            {/* CTA section */}
            <section className="mt-12 p-6 bg-white/5 border border-white/10">
              <h2 className="text-[18px] font-semibold mb-2">
                Klaar om te investeren?
              </h2>
              <p className="text-[13px] text-metro-muted mb-4 leading-relaxed">
                Doe onze gratis investeringsscan in 2 minuten en ontvang een
                persoonlijk investeringsprofiel voor de Costa del Sol.
              </p>
              <Link
                href="/"
                className="inline-block py-3 px-6 text-[14px] font-semibold text-white tracking-wide"
                style={{ backgroundColor: "#E8762D" }}
              >
                Start Mijn Investeringsscan
              </Link>
            </section>

            {/* SEO-rich content section */}
            <section className="mt-12">
              <h2 className="text-[18px] font-semibold mb-4">
                Waarom investeren aan de Costa del Sol?
              </h2>
              <div className="text-[13px] text-metro-muted leading-relaxed space-y-3">
                <p>
                  De Costa del Sol is al jaren een van de populairste
                  bestemmingen voor vastgoedinvesteringen in Europa. Met
                  gemiddeld 300+ zonnedagen per jaar, een uitstekende
                  infrastructuur en een groeiende internationale gemeenschap
                  biedt deze regio in Zuid-Spanje unieke kansen voor
                  investeerders.
                </p>
                <p>
                  Nederlandse investeerders ontdekken steeds vaker de voordelen
                  van vastgoed aan de Costa del Sol. De combinatie van
                  waardestijging (gemiddeld 13,8% in M\u00E1laga in 2025) en
                  huurrendement (5-8% bruto) maakt het een aantrekkelijk
                  alternatief voor de verzadigde Nederlandse vastgoedmarkt.
                </p>
                <p>
                  Populaire investeringslocaties zijn Marbella, Estepona, Mijas
                  en M\u00E1laga stad. Elk gebied biedt verschillende voordelen:
                  van luxe en prestige in de Golden Triangle tot uitstekende
                  prijs-kwaliteitverhouding in opkomende gebieden als Mijas en
                  het achterland.
                </p>
              </div>
            </section>
          </main>

          <footer className="mt-10 pt-4 border-t border-white/10">
            <p className="text-[9px] text-metro-muted/50 text-center">
              &copy; {new Date().getFullYear()} costadelsolinvest.nl | Een
              initiatief van{" "}
              <span className="text-metro-muted/70 font-medium">
                Data Changes B.V.
              </span>
            </p>
            <p className="text-[8px] text-center mt-1">
              <Link
                href="/privacy"
                className="text-white/20 hover:text-white/40 transition-colors"
              >
                Privacy
              </Link>
              {" | "}
              <Link
                href="/voorwaarden"
                className="text-white/20 hover:text-white/40 transition-colors"
              >
                Voorwaarden
              </Link>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
