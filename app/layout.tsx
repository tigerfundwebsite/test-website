import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SanityLive } from "@/sanity/lib/live";
import CookieBanner from "@/components/CookieBanner";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SRE Tiger PMS | Institutional Wealth",
  description: "Institutional-grade wealth creation focusing on India's growth story. Catering exclusively to HNI & UHNI investors.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${manrope.variable} ${playfairDisplay.variable} font-display antialiased bg-white text-slate-800 overflow-x-hidden`}>
        <Navbar />
        {children}
        <SanityLive />
        <CookieBanner />
      </body>
    </html>
  );
}
