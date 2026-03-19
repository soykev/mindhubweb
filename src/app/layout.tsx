import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MindHub",
  description:
    "Diseñamos programas de upskilling, reskilling y para nuevos ingresantes de empresas, gobiernos y organizaciones que buscan desarrollar talento en tecnología e inteligencia artificial.",
  keywords: ["upskilling", "reskilling", "talento", "tecnología", "IA", "capacitación"],
  openGraph: {
    title: "MindHub",
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
    <html lang="es" className={` ${poppins.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
