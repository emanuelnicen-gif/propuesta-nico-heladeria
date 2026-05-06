import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Propuesta · Acompañamiento de marca para la heladería · Ema para Nico",
  description:
    "Una propuesta de Emanuel Nicenboim para acompañar estratégicamente la construcción y el lanzamiento de la marca de la heladería de Nico en Ricardone, Santa Fe.",
  openGraph: {
    title: "Propuesta de acompañamiento estratégico · Heladería Nico",
    description:
      "Estrategia, criterio y gestión para que la marca de tu heladería funcione de verdad.",
    type: "website",
    locale: "es_AR",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased bg-cream">{children}</body>
    </html>
  );
}
