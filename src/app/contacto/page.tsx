"use client";

import { useState, useEffect } from "react";
import ContactForm from "@/components/ContactForm";

export default function ContactoPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      {/* ── Hero Banner ── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "210px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundImage: "url('/contacto-fondo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: "80px",
        }}
      >
        
        {/* Text */}
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "140px 24px" }}>
          <h1
            style={{
              fontSize: isMobile ? "28px" : "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            Contacto
          </h1>
          <p
            style={{
              fontSize: isMobile ? "13px" : "15px",
              color: "#ffffff",
              marginTop: "10px",
              fontWeight: 400,
            }}
          >
            Dejanos tus datos y te contactamos a la brevedad
          </p>
        </div>
      </section>

      {/* ── Form ── */}
      <ContactForm
        sectionId="contacto-form"
        accentColor="#5b00cc"
        accentColorRgb="91,0,204"
      />

      {/* Footer simple */}
      <div
        style={{
          background: "#ffffff",
          borderTop: "1px solid #eee",
          padding: "20px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "12px", color: "#999", fontFamily: "inherit" }}>
          © {new Date().getFullYear()} MindHub
        </p>
      </div>
    </>
  );
}
