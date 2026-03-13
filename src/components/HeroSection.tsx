"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function HeroSection() {
  return (
    <section id="inicio" className="bg-white pt-20">
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", paddingTop: "140px", paddingBottom: "140px" }}
        className="flex flex-col md:flex-row items-center px-5 pt-12 pb-10 md:pt-20 md:pb-0"
      >
        {/* Left: Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:flex-shrink-0 md:w-[45%] md:pr-10 py-8 md:py-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-black"
            style={{ marginBottom: "2rem" }}
          >
            Preparamos talento para un mundo que evoluciona{" "}
            <span style={{ color: "#FF00FF" }}>más rápido que nunca.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base text-gray-600 leading-relaxed max-w-md"
            style={{ marginBottom: "2.5rem" }}
          >
            Diseñamos programas de upskilling, reskilling y para nuevos
            ingresantes de empresas, gobiernos y organizaciones que buscan
            desarrollar talento en tecnología e inteligencia artificial.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-full text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: "#FF00FF", padding: "12px 24px" }}
            >
              Agendar una llamada
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Hero image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="w-full md:flex-1 flex justify-center md:justify-end items-center md:self-stretch mt-4 md:mt-0"
        >
          <div className="relative w-full min-h-[260px] md:h-full md:min-h-[500px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Recurso-13.png"
              alt="Talento tecnológico MindHub"
              className="w-full h-full object-cover object-center md:object-left"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
