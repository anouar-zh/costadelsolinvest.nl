import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid | Costa del Sol Invest - Uw Gegevens Veilig",
  description:
    "Lees hoe Costa del Sol Invest uw persoonsgegevens beschermt conform de AVG. Transparant over gegevensverwerking, cookies en uw rechten als betrokkene.",
  alternates: {
    canonical: "https://costadelsolinvest.nl/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
