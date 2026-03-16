import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | Costa del Sol Invest",
  description:
    "Algemene voorwaarden van Costa del Sol Invest. Lees onze gebruiksvoorwaarden voor de investeringsscan en dienstverlening rondom vastgoed aan de Costa del Sol.",
  alternates: {
    canonical: "https://costadelsolinvest.nl/voorwaarden",
  },
};

export default function VoorwaardenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
