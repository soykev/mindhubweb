"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Award {
  id: number;
  title: string;
  subtitle: string;
  highlight: string;
  image: string;
}

const awards: Award[] = [
  {
    id: 1,
    title: "Premio Sadosky de Oro",
    subtitle: "El máximo galardón de la industria del software en Argentina",
    highlight: "¡Ganamos el máximo galardón de la industria del software en Argentina!",
    image: "/Recurso-13.png",
  },
  {
    id: 2,
    title: "Premio a la Innovación Educativa",
    subtitle: "Reconocimiento por transformar la capacitación tecnológica en LATAM",
    highlight: "¡Reconocidos por transformar la educación tech en toda Latinoamérica!",
    image: "/Recurso-13.png",
  },
  {
    id: 3,
    title: "Top EdTech LATAM 2024",
    subtitle: "Clasificados entre las mejores plataformas de educación tecnológica",
    highlight: "¡Entre las 10 mejores EdTech de América Latina!",
    image: "/Recurso-13.png",
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

        {/* Decoración trofeo (SVG outline) */}
        <div
          className="absolute right-0 top-0 h-full flex items-center pointer-events-none select-none"
          style={{ width: "280px", opacity: 0.18 }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              d="M100 10 C60 10 30 40 30 80 C30 115 55 145 90 155 L90 195 L65 210 L65 225 L135 225 L135 210 L110 195 L110 155 C145 145 170 115 170 80 C170 40 140 10 100 10Z"
              stroke="white" strokeWidth="4" fill="none"
            />
            <path d="M30 80 C15 75 5 60 5 45 C5 30 18 20 30 25 L30 80Z" stroke="white" strokeWidth="3" fill="none" />
            <path d="M170 80 C185 75 195 60 195 45 C195 30 182 20 170 25 L170 80Z" stroke="white" strokeWidth="3" fill="none" />
            <rect x="55" y="225" width="90" height="14" rx="4" stroke="white" strokeWidth="3" fill="none" />
            <rect x="45" y="239" width="110" height="10" rx="4" stroke="white" strokeWidth="3" fill="none" />
          </svg>
        </div>

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
            className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 px-16 sm:px-24 py-10"
            style={{ minHeight: "440px" }}
          >
            {/* Texto */}
            <div className="flex-1 max-w-sm text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {award.title}
              </h3>
              <p className="text-white/80 italic text-base mb-4">
                {award.subtitle}
              </p>
              <div className="w-16 h-px mb-4 md:mx-0 mx-auto" style={{ background: "rgba(255,255,255,0.3)" }} />
              <p className="italic font-bold text-base leading-snug" style={{ color: "#FF00FF" }}>
                {award.highlight}
              </p>
            </div>

            {/* Mockup de teléfono con imagen */}
            <div className="relative flex-shrink-0" style={{ width: "200px" }}>
              {/* Marco del teléfono */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  width: "200px",
                  height: "280px",
                  border: "6px solid rgba(255,255,255,0.85)",
                  background: "#111",
                }}
              >
                {/* Notch */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 z-10 rounded-b-xl"
                  style={{ width: "60px", height: "10px", background: "rgba(255,255,255,0.85)" }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover"
                />
                {/* Botón like */}
                <div
                  className="absolute bottom-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow-lg"
                  style={{ background: "#e0245e" }}
                >
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>
            </div>
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
