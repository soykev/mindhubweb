"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "@/components/ContactForm";

type ProgramContent = {
  title: string;
  items: string[];
};

type Program = {
  id: string;
  number: string;
  title: string;
  accentColor: string;
  accentTextColor: string;
  bg: string;
  description: string;
  tabType: "text" | "number";
  tabs: string[];
  contents: ProgramContent[];
  icon: "data" | "ia" | "web" | "infra";
};

function HexIcon({ type }: Readonly<{ type: "data" | "ia" | "web" | "infra" }>) {
  const imageMap: Record<string, string> = {
    data: "/3-01.png",
    ia: "/4-01.png",
    web: "/2-01.png",
    infra: "/1-01.png",
  };

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imageMap[type]}
      alt={type}
      style={{ width: "128px", height: "128px", objectFit: "contain" }}
    />
  );

}

const programs: Program[] = [
  {
    id: "data-analytics",
    number: "01",
    title: "Data Analytics",
    accentColor: "#0033cc",
    accentTextColor: "#ffffff",
    bg: "bg-white",
    description:
      "Capacitamos a tu equipo en Data Analytics y Engineering, convirtiendo los datos en el activo más valioso para explotar oportunidades y tomar decisiones",
    tabType: "text",
    tabs: ["Inicial", "Avanzado"],
    icon: "data",
    contents: [
      {
        title: "Inmersión en Análisis de Datos.",
        items: [
          "Fundamentos del análisis de datos aplicados al mundo empresarial.",
          "Interpretación de métricas clave para la toma de decisiones estratégicas.",
          "Introducción a herramientas de visualización y reportería.",
        ],
      },
      {
        title: "Ingeniería y Visualización de Datos.",
        items: [
          "Arquitectura de pipelines de datos modernos.",
          "Herramientas avanzadas de ingeniería de datos: SQL, Python, Spark.",
          "Dashboards y storytelling con datos para audiencias de negocio.",
        ],
      },
    ],
  },
  {
    id: "ia-habilidades",
    number: "02",
    title: "IA y Habilidades 4.0",
    accentColor: "#0033cc",
    accentTextColor: "#ffffff",
    bg: "bg-[#f9f9f9]",
    description:
      "Formamos equipos desde habilidades digitales básicas, avanzadas, hasta Inteligencia Artificial aplicada a industrias o procesos específicos.",
    tabType: "number",
    tabs: ["1", "2", "3", "4", "5", "6"],
    icon: "ia",
    contents: [
      {
        title: "Ofimática Profesional.",
        items: ["Ofimática Profesional."],
      },
      {
        title: "Productividad y Trabajo en Equipo.",
        items: ["Productividad y Trabajo en Equipo."],
      },
      {
        title: "Comunicación en Equipos Remotos.",
        items: ["Comunicación en Equipos Remotos."],
      },
      {
        title: "Herramientas Digitales.",
        items: [
          "Planillas de Cálculo — Avanzado.",
          "Interpretación y Visualización de Datos.",
        ],
      },
      {
        title: "IA Aplicada al Trabajo.",
        items: [
          "Introducción a la IA Aplicada al Trabajo.",
          "IA Aplicada al Trabajo: Buenas Prácticas con Cursor y Copilot.",
        ],
      },
      {
        title: "Herramientas Digitales en entornos laborales.",
        items: ["Herramientas Digitales en entornos laborales."],
      },
    ],
  },
  {
    id: "desarrollo-web",
    number: "03",
    title: "Desarrollo Web",
    accentColor: "#0033cc",
    accentTextColor: "#ffffff",
    bg: "bg-white",
    description:
      "Formamos los desarrolladores que tu empresa necesita. Los capacitamos en Front End, Back End, Full Stack, IA para desarrolladores, Testing, Metodologías Ágiles y Security",
    tabType: "number",
    tabs: ["1", "2", "3", "4", "5", "6"],
    icon: "web",
    contents: [
      {
        title: "Rutas de Formación.",
        items: [
          "Ruta de Formación en Java.",
          "Ruta de Formación en JavaScript.",
        ],
      },
      {
        title: "Ruta de Formación en .NET.",
        items: ["Ruta de Formación en .NET."],
      },
      {
        title: "Ruta de Formación para el Rol Funcional.",
        items: ["Ruta de Formación para el Rol Funcional."],
      },
      {
        title: "Ruta de Formación en Testing.",
        items: ["Ruta de Formación en Testing."],
      },
      {
        title: "Ruta de Formación en Ciberseguridad.",
        items: ["Ruta de Formación en Ciberseguridad."],
      },
      {
        title: "Programas Especiales.",
        items: ["Programas de ERP.", "Bootcamps Full-Time."],
      },
    ],
  },
  {
    id: "infraestructura",
    number: "04",
    title: "Infraestructura",
    accentColor: "#0033cc",
    accentTextColor: "#ffffff",
    bg: "bg-[#f9f9f9]",
    description:
      "Capacitamos a tu equipo en Cloud & Infraestructura, donde aprenderán Cloud y DevOps para optimizar el rendimiento de aplicaciones y desarrollar con mayor agilidad y calidad",
    tabType: "number",
    tabs: ["1", "2", "3"],
    icon: "infra",
    contents: [
      {
        title: "Cloud Immersion.",
        items: ["Cloud Immersion."],
      },
      {
        title: "DevOps Immersion.",
        items: ["DevOps Immersion."],
      },
      {
        title: "Infrastructure & Operations.",
        items: ["Infrastructure & Operations."],
      },
    ],
  },
];

function ProgramSection({ program, index }: Readonly<{ program: Program; index: number }>) {
  const [activeTab, setActiveTab] = useState(0);
  const content = program.contents[activeTab];

  return (
    <motion.section
      id={program.id}
      className={program.bg}
      style={{ padding: "56px 0", borderBottom: "1px solid #ebebeb" }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="max-w-[1100px] mx-auto px-5 md:px-[60px]">
        <div className="flex flex-col md:flex-row md:items-center md:gap-[52px]">
          {/* Icon */}
          <div className="flex justify-center md:block flex-shrink-0 mb-4 md:mb-0">
            <HexIcon type={program.icon} />
          </div>

          {/* Content: title + desc + tabs | card */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[48px] items-start md:items-center">
            {/* Left: title, description */}
            <div>
              <h2
                style={{
                  fontSize: "clamp(20px, 3vw, 26px)",
                  fontWeight: 800,
                  color: program.accentColor,
                  marginBottom: "12px",
                  letterSpacing: "-0.3px",
                }}
              >
                {program.title}
              </h2>
              <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.7 }}>
                {program.description}
              </p>
            </div>

            {/* Right: tabs + content card */}
            <div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
                {program.tabs.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    style={{
                      ...(program.tabType === "number"
                        ? { width: "38px", height: "38px", borderRadius: "50%", padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }
                        : { padding: "6px 18px", borderRadius: "999px" }),
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.18s",
                      backgroundColor: i === activeTab ? program.accentColor : "transparent",
                      color: i === activeTab ? "#fff" : "#999",
                      border: `1.5px solid ${i === activeTab ? program.accentColor : "#ddd"}`,
                      fontFamily: "inherit",
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: "#fff",
                    border: "1px solid #e2e2e2",
                    borderRadius: "10px",
                    padding: "24px 20px",
                    minHeight: "140px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "#222", marginBottom: "12px" }}>
                    {content.title}
                  </p>
                  {content.items.length > 1 && (
                    <ul style={{ display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "2px" }}>
                      {content.items.map((item, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                          <span style={{
                            display: "inline-block",
                            width: "5px", height: "5px",
                            borderRadius: "50%",
                            backgroundColor: program.accentColor,
                            marginTop: "7px",
                            flexShrink: 0,
                          }} />
                          <span style={{ fontSize: "13px", color: "#666", lineHeight: 1.65 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function ProgramasPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "230px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "linear-gradient(135deg, #0d001a 0%, #12003a 25%, #0a0055 55%, #0d0030 80%, #080018 100%)",
          paddingTop: "80px",
        }}
      >
        {/* Background photo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/programas-fondo.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 1,
          }}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,0,30,0.55)",
          }}
        />

        {/* Network SVG left decoration */}
        <svg
          style={{ position: "absolute", left: 0, top: 0, width: "320px", height: "100%", pointerEvents: "none", opacity: 0.55 }}
          viewBox="0 0 320 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMid meet"
        >
          <line x1="20" y1="50" x2="80" y2="90" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
          <line x1="80" y1="90" x2="155" y2="60" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
          <line x1="155" y1="60" x2="210" y2="120" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
          <line x1="80" y1="90" x2="130" y2="160" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" />
          <line x1="20" y1="50" x2="45" y2="145" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
          <line x1="45" y1="145" x2="130" y2="160" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" />
          <line x1="155" y1="60" x2="190" y2="20" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
          <line x1="210" y1="120" x2="275" y2="85" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
          <line x1="275" y1="85" x2="300" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
          <circle cx="20" cy="50" r="3" fill="rgba(255,255,255,0.6)" />
          <circle cx="80" cy="90" r="3" fill="rgba(255,255,255,0.6)" />
          <circle cx="155" cy="60" r="3" fill="rgba(255,255,255,0.6)" />
          <circle cx="210" cy="120" r="2.5" fill="rgba(255,255,255,0.45)" />
          <circle cx="130" cy="160" r="2.5" fill="rgba(255,255,255,0.45)" />
          <circle cx="45" cy="145" r="2.5" fill="rgba(255,255,255,0.45)" />
          <circle cx="190" cy="20" r="2" fill="rgba(255,255,255,0.35)" />
          <circle cx="275" cy="85" r="2" fill="rgba(255,255,255,0.35)" />
          <circle cx="300" cy="150" r="2" fill="rgba(255,255,255,0.3)" />
        </svg>

        {/* Right network decoration */}
        <svg
          style={{ position: "absolute", right: 0, top: 0, width: "280px", height: "100%", pointerEvents: "none", opacity: 0.4 }}
          viewBox="0 0 280 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMid meet"
        >
          <line x1="260" y1="40" x2="200" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
          <line x1="200" y1="80" x2="130" y2="55" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
          <line x1="200" y1="80" x2="190" y2="160" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" />
          <line x1="260" y1="40" x2="250" y2="140" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
          <line x1="250" y1="140" x2="190" y2="160" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
          <circle cx="260" cy="40" r="3" fill="rgba(255,255,255,0.55)" />
          <circle cx="200" cy="80" r="3" fill="rgba(255,255,255,0.55)" />
          <circle cx="130" cy="55" r="2.5" fill="rgba(255,255,255,0.4)" />
          <circle cx="190" cy="160" r="2.5" fill="rgba(255,255,255,0.4)" />
          <circle cx="250" cy="140" r="2" fill="rgba(255,255,255,0.35)" />
        </svg>

        {/* Ambient glows */}
        <div style={{
          position: "absolute", top: "10%", left: "28%",
          width: "320px", height: "160px",
          background: "radial-gradient(ellipse, rgba(100,0,255,0.38) 0%, transparent 70%)",
          filter: "blur(45px)", borderRadius: "50%", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "5%", right: "25%",
          width: "240px", height: "130px",
          background: "radial-gradient(ellipse, rgba(0,80,220,0.32) 0%, transparent 70%)",
          filter: "blur(50px)", borderRadius: "50%", pointerEvents: "none",
        }} />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 24px" }}
        >
          <h1
            style={{
              fontSize: "clamp(28px, 6vw, 60px)",
              fontWeight: 800,
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-1px",
              lineHeight: 1.1,
            }}
          >
            Programas
          </h1>
        </motion.div>
      </section>

      {/* ── Program sections ── */}
      {programs.map((program, index) => (
        <ProgramSection key={program.id} program={program} index={index} />
      ))}

      {/* ── Contact form ── */}
      <ContactForm
        sectionId="contacto-programas"
        accentColor="#0033cc"
        accentColorRgb="0,51,204"
        title="Consultanos por nuestros programas"
      />
    </>
  );
}
