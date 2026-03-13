"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Valentina Torres",
    role: "Chief People Officer",
    company: "Accenture LATAM",
    text: "MindHub transformó por completo la manera en que capacitamos a nuestros equipos. Los programas de IA que diseñaron nos permitieron escalar habilidades digitales en 800 colaboradores en tiempo récord.",
    avatar: "VT",
    rating: 5,
  },
  {
    name: "Martín Rodríguez",
    role: "Director de Transformación Digital",
    company: "Santander Argentina",
    text: "La metodología de MindHub es única. No solo enseñan herramientas, sino que entienden el negocio y adaptan el aprendizaje a los desafíos reales del sector financiero. Los resultados fueron medibles desde el primer mes.",
    avatar: "MR",
    rating: 5,
  },
  {
    name: "Camila Vega",
    role: "Head of Talent Development",
    company: "Rappi Colombia",
    text: "Trabajamos con MindHub para el reskilling de nuestro equipo de operaciones. La calidad del contenido y el compromiso de los instructores superó todas nuestras expectativas. Continuidad asegurada.",
    avatar: "CV",
    rating: 5,
  },
  {
    name: "Federico Álvarez",
    role: "CTO",
    company: "EY Argentina",
    text: "Lo que más destaco de MindHub es su capacidad de diseñar programas a medida. Nos entendieron desde el día uno y entregaron una experiencia de aprendizaje que nuestro equipo todavía valora.",
    avatar: "FA",
    rating: 5,
  },
  {
    name: "Lucía Fernández",
    role: "Gerente de Innovación",
    company: "Natura Brasil",
    text: "Con MindHub logramos que toda nuestra área de innovación adoptara IA generativa en su flujo de trabajo. El impacto en productividad fue del +35% en el primer trimestre. Altamente recomendable.",
    avatar: "LF",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          style={{ color: i < rating ? "#BAFF43" : "rgba(255,255,255,0.1)" }}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section id="testimonios" ref={ref} className="relative py-24 overflow-hidden bg-[#0d0d0d]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(255,0,255,0.04)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#FF00FF" }}>
            Testimonios
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Lo que dicen{" "}
            <span className="gradient-text">nuestros clientes</span>
          </h2>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="relative glass-dark rounded-3xl p-8 sm:p-10">
            <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5" strokeWidth={1} />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <StarRating rating={testimonials[active].rating} />
                <blockquote className="mt-5 text-lg sm:text-xl text-white/90 leading-relaxed font-medium">
                  &ldquo;{testimonials[active].text}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0000FF] to-[#FF00FF] flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {testimonials[active].avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonials[active].name}</div>
                    <div className="text-sm text-[#a1a1aa]">
                      {testimonials[active].role} · {testimonials[active].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={
                    i === active
                      ? { width: "24px", height: "8px", background: "linear-gradient(to right, #0000FF, #FF00FF)" }
                      : { width: "8px", height: "8px", background: "rgba(255,255,255,0.2)" }
                  }
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-xl glass-dark border border-white/10 flex items-center justify-center text-[#a1a1aa] hover:text-white hover:border-white/20 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-xl glass-dark border border-white/10 flex items-center justify-center text-[#a1a1aa] hover:text-white hover:border-white/20 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Thumbnail grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="glass-dark rounded-xl p-4 text-left transition-all duration-300 hover:bg-white/5 hover:border-white/10"
              style={i === active ? { borderColor: "rgba(0,0,255,0.4)", background: "rgba(255,255,255,0.05)" } : {}}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0000FF] to-[#FF00FF] flex items-center justify-center text-white text-xs font-bold mb-2">
                {t.avatar}
              </div>
              <div className="text-xs font-semibold text-white leading-tight">{t.name}</div>
              <div className="text-xs text-[#a1a1aa] mt-0.5">{t.company}</div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
