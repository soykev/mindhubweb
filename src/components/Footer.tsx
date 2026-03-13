"use client";

import { motion } from "framer-motion";
import { Zap, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Programas: [
    { label: "Upskilling Corporativo", href: "#" },
    { label: "Reskilling Equipos", href: "#" },
    { label: "Bootcamp IA & Data", href: "#" },
    { label: "Liderazgo Digital", href: "#" },
  ],
  Empresa: [
    { label: "Nuestra Historia", href: "#" },
    { label: "Metodología", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Casos de Éxito", href: "#" },
  ],
  Legal: [
    { label: "Política de Privacidad", href: "#" },
    { label: "Términos de Servicio", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[100px] pointer-events-none" style={{ background: "rgba(0,0,255,0.05)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-lg opacity-80" style={{ background: "linear-gradient(135deg, #0000FF 0%, #FF00FF 100%)" }} />
                <Zap className="relative z-10 w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold">
                Mind<span className="gradient-text">Hub</span>
              </span>
            </Link>
            <p className="text-sm text-[#a1a1aa] leading-relaxed max-w-xs mb-6">
              Preparamos talento para un mundo que evoluciona más rápido que nunca. Programas de
              upskilling y reskilling corporativo en tecnología e IA.
            </p>
            <div className="flex flex-col gap-2 text-sm text-[#a1a1aa]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" style={{ color: "#0000FF" }} />
                <span>Buenos Aires, Argentina · LATAM</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" style={{ color: "#0000FF" }} />
                <span>hola@mindhub.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" style={{ color: "#0000FF" }} />
                <span>+54 11 0000-0000</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-[#a1a1aa]" suppressHydrationWarning>
            © {new Date().getFullYear()} MindHub. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[#a1a1aa] hover:text-white transition-all duration-200"
                style={{ ["--hover-border" as string]: "rgba(0,0,255,0.4)" }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
