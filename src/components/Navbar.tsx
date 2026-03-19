"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
const navLinks = [
  { label: "Home", href: "/#inicio" },
  { label: "Programas", href: "/programas" },
  { label: "Metodología", href: "/metodologia" },
  // { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: "20px", paddingLeft: "clamp(1.25rem, 5vw, 4rem)", paddingRight: "clamp(1.25rem, 5vw, 4rem)", marginBottom: "20px" }}>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="MindHub Logo"
                style={{
                  // aspectRatio: "auto 474 / 201",
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  verticalAlign: "middle",
                  height: "auto",
                  width: "180px",
                  borderWidth: "0px",
                  border: "0px",
                  cursor: "pointer",
                  color: "#000",
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  fontWeight: 500,
                  lineHeight: 1.625,
                  overflowWrap: "break-word",
                }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="navbar-text text-sm text-gray-800 transition-colors duration-200"
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FF00FF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    fontStyle: "normal",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all"
              aria-label="Abrir menú"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed top-[100px] left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-xl md:hidden">
          <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "clamp(1.25rem, 5vw, 4rem)", paddingRight: "clamp(1.25rem, 5vw, 4rem)", fontSize: "1rem",
                    fontWeight: 500,
                    fontStyle: "normal",
                    fontFamily: "Poppins, sans-serif" }} className="py-2 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="navbar-text flex items-center px-3 py-8 text-lg text-gray-700 hover:text-[#FF00FF] hover:bg-gray-50 rounded-xl border-b border-gray-100 last:border-b-0 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
