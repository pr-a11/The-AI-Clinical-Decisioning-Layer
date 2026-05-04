import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The AI Clinical Decisioning Layer for Telehealth",
  description:
    "Supercharge your clinic with AI-driven triage and automated clinical decisioning. The AI Clinical Decisioning Layer is the intelligent brain for modern healthcare.",
  keywords: [
    "AI healthcare",
    "clinical decisioning",
    "telehealth",
    "autonomous triage",
    "pharmacy infrastructure",
    "risk assessment",
    "medical AI",
  ],
  openGraph: {
    title: "The AI Clinical Decisioning Layer for Telehealth",
    description:
      "Supercharge your clinic with AI-driven triage and automated clinical decisioning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="bg-[#09090b] text-white antialiased selection:bg-emerald-500/30">
        {children}
      </body>
    </html>
  );
}
