import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programas — MindHub",
  description:
    "Conocé los programas de upskilling y reskilling de MindHub: Data Analytics, IA y Habilidades 4.0, Desarrollo Web e Infraestructura Cloud.",
};

export default function ProgramasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
