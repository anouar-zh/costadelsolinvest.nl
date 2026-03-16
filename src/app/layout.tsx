import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1A1A1A",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Costa del Sol Invest | Ontdek uw Ideale Vastgoedinvestering",
  description:
    "Ontdek waar u het beste kunt investeren aan de Costa del Sol. Vastgoed in Marbella, Estepona & Málaga met 5-8% huurrendement. Gratis investeringsscan in 2 minuten.",
  keywords: [
    "investeren costa del sol",
    "vastgoed costa del sol",
    "huis kopen costa del sol",
    "vastgoed investeren spanje",
    "marbella vastgoed",
    "estepona vastgoed",
    "huurrendement spanje",
    "beleggen vastgoed spanje",
    "villa kopen costa del sol",
    "nieuwbouw costa del sol",
    "onroerend goed costa del sol",
    "woning kopen spanje investering",
    "vakantiewoning costa del sol",
    "rendement vastgoed spanje",
    "appartement kopen costa del sol",
    "verhuren costa del sol",
    "costa del sol property investment",
    "buy property costa del sol",
    "rental yield costa del sol",
    "Immobilien Costa del Sol kaufen",
    "invertir en Costa del Sol",
    "vastgoedprijzen costa del sol",
    "mijas vastgoed",
    "malaga vastgoed investeren",
    "nederlandse makelaar costa del sol",
  ],
  alternates: {
    canonical: "https://costadelsolinvest.nl",
    languages: {
      "nl": "https://costadelsolinvest.nl",
      "en": "https://costadelsolinvest.nl",
      "de": "https://costadelsolinvest.nl",
      "es": "https://costadelsolinvest.nl",
      "x-default": "https://costadelsolinvest.nl",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Costa del Sol Invest | Vastgoed met 5-8% Rendement",
    description:
      "Ontdek de beste vastgoedinvesteringen aan de Costa del Sol. Prijsstijgingen van 10-14% per jaar. Gratis persoonlijke investeringsscan.",
    url: "https://costadelsolinvest.nl",
    siteName: "Costa del Sol Invest",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://costadelsolinvest.nl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Costa del Sol Invest - Uw volgende investering begint hier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Costa del Sol Invest | Vastgoed met 5-8% Rendement",
    description:
      "Ontdek de beste vastgoedinvesteringen aan de Costa del Sol. Gratis persoonlijke investeringsscan.",
    images: ["https://costadelsolinvest.nl/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "ES-MA",
    "geo.placename": "Costa del Sol",
    "geo.position": "36.7213;-4.4214",
    "ICBM": "36.7213, -4.4214",
    "content-language": "nl",
    "author": "Costa del Sol Invest - Data Changes B.V.",
    "rating": "general",
    "revisit-after": "7 days",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://costadelsolinvest.nl/#website",
      url: "https://costadelsolinvest.nl",
      name: "Costa del Sol Invest",
      description:
        "Vastgoedinvesteringen aan de Costa del Sol voor Nederlandse en Belgische investeerders",
      inLanguage: "nl",
    },
    {
      "@type": "Organization",
      "@id": "https://costadelsolinvest.nl/#organization",
      name: "Costa del Sol Invest",
      url: "https://costadelsolinvest.nl",
      logo: "https://costadelsolinvest.nl/logo.svg",
      image: "https://costadelsolinvest.nl/og-image.jpg",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        availableLanguage: ["Dutch", "English", "German", "Spanish"],
      },
      areaServed: [
        { "@type": "Country", name: "Netherlands" },
        { "@type": "Country", name: "Belgium" },
        { "@type": "Country", name: "Germany" },
      ],
    },
    {
      "@type": "RealEstateAgent",
      name: "Costa del Sol Invest",
      url: "https://costadelsolinvest.nl",
      areaServed: {
        "@type": "Place",
        name: "Costa del Sol, Málaga, Spain",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://costadelsolinvest.nl/#localbusiness",
      name: "Costa del Sol Invest",
      description:
        "Vastgoedinvesteringsadviseur voor de Costa del Sol. Gratis investeringsscan voor Nederlandse, Belgische en Duitse investeerders.",
      url: "https://costadelsolinvest.nl",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nassausingel 3",
        addressLocality: "Nijmegen",
        postalCode: "6511 EV",
        addressCountry: "NL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.8426,
        longitude: 5.8585,
      },
      priceRange: "€150.000 - €1.500.000+",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    },
    {
      "@type": "Service",
      "@id": "https://costadelsolinvest.nl/#service",
      name: "Gratis Investeringsscan Costa del Sol",
      description:
        "Persoonlijke vastgoedinvesteringsanalyse voor Nederlandse en Belgische investeerders aan de Costa del Sol",
      provider: {
        "@id": "https://costadelsolinvest.nl/#organization",
      },
      areaServed: {
        "@type": "Place",
        name: "Costa del Sol, Spanje",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 36.7213,
          longitude: -4.4214,
        },
      },
      serviceType: "Real Estate Investment Advisory",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        description:
          "Gratis persoonlijke investeringsscan in 2 minuten",
      },
    },
    {
      "@type": "HowTo",
      name: "Hoe werkt de Investeringsscan?",
      description:
        "In 4 stappen ontdekt u uw ideale vastgoedinvestering aan de Costa del Sol",
      totalTime: "PT2M",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Kies uw motivatie",
          text: "Selecteer wat u het meest aanspreekt: lifestyle, rendement, locatie of groeimarkt",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Verfijn uw voorkeur",
          text: "Specificeer uw interesse binnen de gekozen categorie",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Kies uw woningtype",
          text: "Selecteer het type vastgoed: appartement, penthouse, villa of townhouse",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Bepaal uw budget",
          text: "Kies uw investeringsbudget en ontvang uw persoonlijke investeringsprofiel",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Wat is het gemiddelde huurrendement aan de Costa del Sol?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Het gemiddelde bruto huurrendement aan de Costa del Sol ligt tussen 5-8%, afhankelijk van de locatie en het type vastgoed. Vakantieverhuur in populaire gebieden zoals Marbella en Estepona kan oplopen tot 8-10% bruto rendement in het hoogseizoen.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel stijgen vastgoedprijzen aan de Costa del Sol?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In 2025 stegen de vastgoedprijzen in de provincie Málaga met gemiddeld 13,8% op jaarbasis. Voor 2026 wordt een groei van 5-9% verwacht. De afgelopen 5 jaar zijn prijzen in toplocaties met 40-60% gestegen.",
          },
        },
        {
          "@type": "Question",
          name: "Wat kost een woning aan de Costa del Sol?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "De gemiddelde prijs per m² varieert per locatie: Marbella €4.260-5.258/m², Estepona €3.600-3.854/m², Mijas €2.768-3.800/m², Málaga stad €3.549/m². Instapwoningen beginnen vanaf circa €150.000 voor een appartement.",
          },
        },
        {
          "@type": "Question",
          name: "Is het slim om nu te investeren in vastgoed aan de Costa del Sol?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, de Costa del Sol blijft een sterke investeringsmarkt. Met 300+ zonnedagen per jaar, groeiend toerisme, verbeterde infrastructuur en een stijgende vraag van Noord-Europese kopers biedt de regio aantrekkelijke rendementen. Nederlandse kopers groeiden met 38% in het eerste halfjaar van 2025.",
          },
        },
        {
          "@type": "Question",
          name: "Welke bijkomende kosten zijn er bij het kopen van een huis in Spanje?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "De bijkomende kosten bij aankoop in Spanje bedragen circa 10-13% van de koopprijs. Dit omvat overdrachtsbelasting (7-10% voor bestaande bouw, 10% BTW voor nieuwbouw), notariskosten (0,5-1%), registerkosten (0,5-1%) en juridische begeleiding (1-1,5%).",
          },
        },
        {
          "@type": "Question",
          name: "Heb ik als Nederlander een NIE-nummer nodig om een huis te kopen in Spanje?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, een NIE-nummer (Número de Identidad de Extranjero) is verplicht voor elke vastgoedtransactie in Spanje. U kunt dit aanvragen bij het Spaanse consulaat in Nederland of lokaal in Spanje. De aanvraag duurt gemiddeld 2-4 weken.",
          },
        },
        {
          "@type": "Question",
          name: "Kan ik als Nederlander een hypotheek krijgen in Spanje?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, Spaanse banken verstrekken hypotheken aan niet-residenten tot 60-70% van de taxatiewaarde. De rente ligt momenteel tussen 3-4,5%. Een hypotheek in Spanje kan fiscaal voordelig zijn voor verhuurders.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel belasting betaal ik over huurinkomsten in Spanje?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Als EU-inwoner betaalt u 19% belasting over netto huurinkomsten in Spanje. U mag kosten zoals onderhoud, hypotheekrente en afschrijving aftrekken. Door het dubbelbelastingverdrag Nederland-Spanje wordt dubbele belasting voorkomen.",
          },
        },
        {
          "@type": "Question",
          name: "Wat is de beste locatie aan de Costa del Sol om te investeren?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "De beste locatie hangt af van uw strategie. Marbella en de Golden Triangle bieden luxe met hoge waardestijging. Estepona is een groeimarkt met uitstekend rendement. Mijas biedt de beste prijs-kwaliteitverhouding. Málaga stad groeit als stadsinvestering met hoge huurvraag.",
          },
        },
        {
          "@type": "Question",
          name: "Kan ik mijn woning aan de Costa del Sol verhuren aan toeristen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, maar u heeft een verhuurlicentie (licencia turística) nodig van de Junta de Andalucía. De regelgeving verschilt per gemeente. In veel gebieden aan de Costa del Sol is vakantieverhuur toegestaan, maar er gelden specifieke eisen voor registratie en veiligheid.",
          },
        },
        {
          "@type": "Question",
          name: "Moet ik ook in Nederland belasting betalen over mijn Spaanse woning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Door het dubbelbelastingverdrag tussen Nederland en Spanje wordt uw Spaanse vastgoed in box 3 vrijgesteld via de vrijstellingsmethode. U geeft het wel aan in uw Nederlandse aangifte, maar betaalt effectief alleen in Spanje belasting over de inkomsten.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel kan ik verdienen met vakantieverhuur aan de Costa del Sol?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Een goed gelegen appartement van €200.000-€300.000 kan €15.000-€25.000 bruto per jaar opleveren via vakantieverhuur. In toplocaties zoals Marbella en Puerto Banús liggen de opbrengsten hoger. Het hoogseizoen (juni-september) levert 50-60% van de jaaromzet op.",
          },
        },
        {
          "@type": "Question",
          name: "Is er een vastgoedbubbel aan de Costa del Sol?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Analisten zien momenteel geen bubbel. De huidige prijsstijgingen worden ondersteund door reële vraag, beperkt nieuwbouwaanbod, en een diverse kopersmarkt. De prijzen liggen in veel gebieden nog 20-30% onder het piekjaar 2007, gecorrigeerd voor inflatie.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://swetrix.org" />
        <link rel="dns-prefetch" href="https://swetrix.org" />
        <link
          rel="preconnect"
          href="https://swetrixapi-wwscgog80c8g0og4o4gow4kk.qreastech.com"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
        <script src="https://swetrix.org/swetrix.js" defer />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener('DOMContentLoaded',function(){swetrix.init('OzoHZf66XmPp',{apiURL:'https://swetrixapi-wwscgog80c8g0og4o4gow4kk.qreastech.com/log'});swetrix.trackViews()})`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://swetrixapi-wwscgog80c8g0og4o4gow4kk.qreastech.com/log/noscript?pid=OzoHZf66XmPp"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </body>
    </html>
  );
}
