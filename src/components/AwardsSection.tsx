"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Award {
  id: number;
  title: string;
  image: string;
}

const awards: Award[] = [
  {
    id: 1,
    title: "Premio Sadosky de Oro",
    image: "/Recurso 54.png",
  },
  {
    id: 2,
    title: "Premio BA",
    image: "/Recurso 55.png",
  },
  {
    id: 3,
    title: "Top EdTech LATAM",
    image: "/Recurso 58.png",
  },
];

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

export default function AwardsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + awards.length) % awards.length);
  };

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % awards.length);
  };

  const award = awards[index];

  return (
    <section className="w-full" style={{ background: "linear-gradient(160deg, #12003a 0%, #1a0050 40%, #0d002e 100%)" }}>
      {/* Título */}
      <div className="w-full text-center px-4" style={{ paddingTop: "40px", paddingBottom: "40px", background: "black" }}>
        <h2
          className="text-2xl sm:text-3xl font-extrabold"
          style={{ color: "#FF00FF" }}
        >
          Los premios no nos definen pero nos avalan
        </h2>
      </div>

      {/* Carrusel */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: "440px" }}>
        {/* Fondo con imagen difuminada */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${award.image})` }}
        />

        {/* Decoración trofeo SVG neón */}
        <svg
          aria-hidden="true"
          viewBox="0 0 300 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
          style={{ width: "300px", opacity: 0.28 }}
        >
          <defs>
            <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-strong" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Cuerpo principal de la copa */}
          <path
            d="M60 30 L240 30 L220 160 C210 210 170 240 150 250 C130 240 90 210 80 160 Z"
            stroke="#cc77ff" strokeWidth="2.5" fill="none" filter="url(#glow)"
          />
          {/* Borde interior copa */}
          <path
            d="M80 40 L220 40 L202 155 C193 200 165 226 150 234 C135 226 107 200 98 155 Z"
            stroke="#aa44ff" strokeWidth="1.2" fill="none" filter="url(#glow)"
          />

          {/* Asa izquierda */}
          <path
            d="M60 30 C20 30 5 65 5 95 C5 125 25 148 60 148"
            stroke="#cc77ff" strokeWidth="2.5" fill="none" filter="url(#glow)"
          />
          <path
            d="M60 50 C28 50 18 72 18 95 C18 118 32 135 60 135"
            stroke="#aa44ff" strokeWidth="1.2" fill="none" filter="url(#glow)"
          />

          {/* Asa derecha */}
          <path
            d="M240 30 C280 30 295 65 295 95 C295 125 275 148 240 148"
            stroke="#cc77ff" strokeWidth="2.5" fill="none" filter="url(#glow)"
          />
          <path
            d="M240 50 C272 50 282 72 282 95 C282 118 268 135 240 135"
            stroke="#aa44ff" strokeWidth="1.2" fill="none" filter="url(#glow)"
          />

          {/* Cuello / tallo */}
          <path
            d="M150 250 L150 295"
            stroke="#cc77ff" strokeWidth="2.5" filter="url(#glow)"
          />
          <line x1="130" y1="250" x2="128" y2="295" stroke="#aa44ff" strokeWidth="1.2" filter="url(#glow)" />
          <line x1="170" y1="250" x2="172" y2="295" stroke="#aa44ff" strokeWidth="1.2" filter="url(#glow)" />

          {/* Base superior */}
          <rect x="100" y="295" width="100" height="18" rx="5" stroke="#cc77ff" strokeWidth="2.5" fill="none" filter="url(#glow)" />
          {/* Base inferior */}
          <rect x="82" y="313" width="136" height="16" rx="5" stroke="#cc77ff" strokeWidth="2.5" fill="none" filter="url(#glow)" />

          {/* Líneas geométricas internas (malla) */}
          <line x1="150" y1="45" x2="80" y2="40" stroke="#9933ff" strokeWidth="0.8" opacity="0.6" filter="url(#glow)" />
          <line x1="150" y1="45" x2="220" y2="40" stroke="#9933ff" strokeWidth="0.8" opacity="0.6" filter="url(#glow)" />
          <line x1="150" y1="45" x2="100" y2="130" stroke="#9933ff" strokeWidth="0.8" opacity="0.6" filter="url(#glow)" />
          <line x1="150" y1="45" x2="200" y2="130" stroke="#9933ff" strokeWidth="0.8" opacity="0.6" filter="url(#glow)" />
          <line x1="100" y1="130" x2="80" y2="40" stroke="#9933ff" strokeWidth="0.8" opacity="0.6" filter="url(#glow)" />
          <line x1="200" y1="130" x2="220" y2="40" stroke="#9933ff" strokeWidth="0.8" opacity="0.6" filter="url(#glow)" />
          <line x1="100" y1="130" x2="150" y2="230" stroke="#9933ff" strokeWidth="0.8" opacity="0.6" filter="url(#glow)" />
          <line x1="200" y1="130" x2="150" y2="230" stroke="#9933ff" strokeWidth="0.8" opacity="0.6" filter="url(#glow)" />
          <line x1="100" y1="130" x2="200" y2="130" stroke="#9933ff" strokeWidth="0.8" opacity="0.6" filter="url(#glow)" />

          {/* Nodos brillantes */}
          <circle cx="150" cy="45" r="3.5" fill="#ffffff" filter="url(#glow-strong)" opacity="0.9" />
          <circle cx="80" cy="40" r="3.5" fill="#ffffff" filter="url(#glow-strong)" opacity="0.9" />
          <circle cx="220" cy="40" r="3.5" fill="#ffffff" filter="url(#glow-strong)" opacity="0.9" />
          <circle cx="100" cy="130" r="3.5" fill="#ffffff" filter="url(#glow-strong)" opacity="0.9" />
          <circle cx="200" cy="130" r="3.5" fill="#ffffff" filter="url(#glow-strong)" opacity="0.9" />
          <circle cx="150" cy="230" r="3.5" fill="#ffffff" filter="url(#glow-strong)" opacity="0.9" />
          <circle cx="60" cy="90" r="3.5" fill="#ffffff" filter="url(#glow-strong)" opacity="0.9" />
          <circle cx="240" cy="90" r="3.5" fill="#ffffff" filter="url(#glow-strong)" opacity="0.9" />
          <circle cx="150" cy="250" r="3.5" fill="#ffffff" filter="url(#glow-strong)" opacity="0.9" />

          {/* Nodos pequeños adicionales */}
          <circle cx="95" cy="80" r="2" fill="#dd99ff" filter="url(#glow)" opacity="0.7" />
          <circle cx="205" cy="80" r="2" fill="#dd99ff" filter="url(#glow)" opacity="0.7" />
          <circle cx="120" cy="170" r="2" fill="#dd99ff" filter="url(#glow)" opacity="0.7" />
          <circle cx="180" cy="170" r="2" fill="#dd99ff" filter="url(#glow)" opacity="0.7" />
          <circle cx="150" cy="195" r="2" fill="#dd99ff" filter="url(#glow)" opacity="0.7" />
        </svg>

        {/* Flecha izquierda */}
        <button
          onClick={prev}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all"
          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)", color: "white" }}
          aria-label="Anterior"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Flecha derecha */}
        <button
          onClick={next}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all"
          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)", color: "white" }}
          aria-label="Siguiente"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Contenido del slide */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={award.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex items-center justify-center px-16 sm:px-24 py-10"
            style={{ minHeight: "440px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={award.image}
              alt={award.title}
              className="max-h-96 w-auto object-contain drop-shadow-2xl"
              style={{ maxWidth: "100%" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Indicadores (dots) */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {awards.map((a, i) => (
            <button
              key={a.id}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              className="rounded-full transition-all"
              style={{
                width: i === index ? "20px" : "8px",
                height: "8px",
                background: i === index ? "#FF00FF" : "rgba(255,255,255,0.35)",
              }}
              aria-label={`Ir al slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Padding inferior */}
      <div className="pb-10" />
    </section>
  );
}
