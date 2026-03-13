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
          background: "linear-gradient(135deg, #0d0020 0%, #1a0040 30%, #0a0066 60%, #1a0040 80%, #0d0020 100%)",
          paddingTop: "80px",
        }}
      >
        {/* Ambient glow blobs */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "30%",
            width: "300px",
            height: "160px",
            background: "radial-gradient(ellipse, rgba(180,0,255,0.45) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "20%",
            width: "200px",
            height: "140px",
            background: "radial-gradient(ellipse, rgba(80,0,200,0.5) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />

        {/* Network SVG decoration */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1024 210"
        >
          <line x1="30" y1="60" x2="90" y2="100" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
          <line x1="90" y1="100" x2="160" y2="70" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
          <line x1="160" y1="70" x2="220" y2="130" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
          <line x1="90" y1="100" x2="150" y2="150" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
          <line x1="30" y1="60" x2="50" y2="140" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
          <line x1="50" y1="140" x2="150" y2="150" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
          <line x1="160" y1="70" x2="200" y2="30" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
          <circle cx="30" cy="60" r="2.5" fill="rgba(255,255,255,0.55)" />
          <circle cx="90" cy="100" r="2.5" fill="rgba(255,255,255,0.55)" />
          <circle cx="160" cy="70" r="2.5" fill="rgba(255,255,255,0.55)" />
          <circle cx="220" cy="130" r="2" fill="rgba(255,255,255,0.4)" />
          <circle cx="150" cy="150" r="2" fill="rgba(255,255,255,0.4)" />
          <circle cx="50" cy="140" r="2" fill="rgba(255,255,255,0.4)" />
          <circle cx="200" cy="30" r="2" fill="rgba(255,255,255,0.35)" />
          <line x1="780" y1="50" x2="850" y2="90" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
          <line x1="850" y1="90" x2="930" y2="55" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
          <line x1="930" y1="55" x2="990" y2="110" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
          <line x1="850" y1="90" x2="900" y2="155" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
          <line x1="780" y1="50" x2="810" y2="160" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
          <line x1="810" y1="160" x2="900" y2="155" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
          <line x1="930" y1="55" x2="960" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
          <circle cx="780" cy="50" r="2.5" fill="rgba(255,255,255,0.55)" />
          <circle cx="850" cy="90" r="2.5" fill="rgba(255,255,255,0.55)" />
          <circle cx="930" cy="55" r="2.5" fill="rgba(255,255,255,0.55)" />
          <circle cx="990" cy="110" r="2" fill="rgba(255,255,255,0.4)" />
          <circle cx="900" cy="155" r="2" fill="rgba(255,255,255,0.4)" />
          <circle cx="810" cy="160" r="2" fill="rgba(255,255,255,0.4)" />
          <circle cx="960" cy="20" r="2" fill="rgba(255,255,255,0.35)" />
        </svg>

        {/* Text */}
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px" }}>
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
              color: "rgba(255,255,255,0.72)",
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
