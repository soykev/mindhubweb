"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contacto" ref={ref} className="relative py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,255,0.15) 0%, rgba(255,0,255,0.15) 50%, rgba(186,255,67,0.1) 100%)" }} />
          <div className="absolute inset-0 glass-dark" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />

          {/* Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[80px]" style={{ background: "rgba(0,0,255,0.2)" }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[80px]" style={{ background: "rgba(255,0,255,0.2)" }} />

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#0000FF" }}
            >
              ¿Listo para transformar tu equipo?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5"
            >
              Llevemos el talento de tu{" "}
              <span className="gradient-text">organización</span>
              <br className="hidden sm:block" /> al siguiente nivel.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-[#a1a1aa] max-w-xl mx-auto text-base mb-10"
            >
              Agenda una llamada sin compromiso con nuestro equipo. En 30 minutos diseñamos juntos
              el camino para transformar tu organización.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-white font-semibold hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #0000FF 0%, #FF00FF 100%)" }}
              >
                <Calendar className="w-4 h-4" />
                Agendar llamada gratuita
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white/70 font-semibold hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-200">
                Ver casos de éxito
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
