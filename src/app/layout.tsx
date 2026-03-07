import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
  ],
  alternates: {
    canonical: "https://costadelsolinvest.nl",
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
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Wat is het gemiddelde huurrendement aan de Costa del Sol?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Het gemiddelde bruto huurrendement aan de Costa del Sol ligt tussen 5-8%, afhankelijk van de locatie en het type vastgoed.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel stijgen vastgoedprijzen aan de Costa del Sol?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In 2025 stegen de vastgoedprijzen in de provincie Málaga met gemiddeld 13,8% op jaarbasis. Voor 2026 wordt een groei van 5-9% verwacht.",
          },
        },
        {
          "@type": "Question",
          name: "Wat kost een woning aan de Costa del Sol?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "De gemiddelde prijs per m² varieert per locatie: Marbella €4.260-5.258/m², Estepona €3.600-3.854/m², Mijas €2.768-3.800/m², Málaga stad €3.549/m².",
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
