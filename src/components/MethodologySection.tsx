"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Wrench, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Diagnóstico",
    description:
      "Analizamos tu organización, mapeamos brechas de habilidades y definimos objetivos de aprendizaje alineados a tu estrategia de negocio.",
    color: "#0000FF",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Diseño a Medida",
    description:
      "Creamos un programa personalizado con contenidos, formato y ritmo adaptados a tu equipo. Sin soluciones genéricas.",
    color: "#FF00FF",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implementación",
    description:
      "Ejecutamos el programa con instructores expertos de la industria, en formato sincrónico, asincrónico o híbrido.",
    color: "#FF00FF",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Medición & Mejora",
    description:
      "Medimos el impacto real en el negocio con métricas concretas y ajustamos continuamente para maximizar el retorno.",
    color: "#BAFF43",
  },
];

export default function MethodologySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="metodologia" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[600px] bg-[#FF00FF]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#FF00FF" }}>
            Cómo trabajamos
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Nuestra <span className="gradient-text">metodología</span>
          </h2>
          <p className="mt-4 text-[#a1a1aa] max-w-xl mx-auto">
            Un proceso probado, ágil y centrado en resultados reales para tu organización.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass-dark rounded-2xl p-6 overflow-hidden hover:border-white/15 transition-all duration-300"
            >
              {/* Connector line (hidden on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-9 -right-2.5 w-5 h-px bg-white/10 z-10" />
              )}

              <div className="relative">
                {/* Step number */}
                <div
                  className="text-5xl font-black leading-none mb-4 opacity-15 select-none"
                  style={{ color: step.color }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${step.color}18`, border: `1px solid ${step.color}30` }}
                >
                  <step.icon className="w-5 h-5" style={{ color: step.color }} strokeWidth={1.5} />
                </div>

                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
