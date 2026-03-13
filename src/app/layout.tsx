import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MindHub — Talento para un mundo que evoluciona",
  description:
    "Diseñamos programas de upskilling, reskilling y para nuevos ingresantes de empresas, gobiernos y organizaciones que buscan desarrollar talento en tecnología e inteligencia artificial.",
  keywords: ["upskilling", "reskilling", "talento", "tecnología", "IA", "capacitación"],
  openGraph: {
    title: "MindHub — Talento para un mundo que evoluciona",
    description: "Preparamos talento para un mundo que evoluciona más rápido que nunca.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={jakarta.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
