import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — MindHub",
  description:
    "Contactate con MindHub. Dejanos tus datos y te contactamos para diseñar el programa de capacitación que tu empresa necesita.",
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
