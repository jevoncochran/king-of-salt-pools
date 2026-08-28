import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-accent",
  subsets: ["latin"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Saltwater Pool Conversions in ${siteConfig.serviceArea}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Professional salt system installation and pool conversion in the Tampa Bay Area. Softer water, automatic chlorine generation, and simpler pool care.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
