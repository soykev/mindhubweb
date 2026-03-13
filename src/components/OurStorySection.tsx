"use client";

import { motion } from "framer-motion";

export default function OurStorySection() {
  return (
    <section className="bg-white py-16">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-16"
          style={{ color: "#FF00FF" }}
        >
          Nuestra historia
        </motion.h2>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-2xl overflow-hidden shadow-lg"
          style={{ aspectRatio: "16/9", background: "#0d0d0d" }}
        >
          {/* Reemplazá VIDEO_URL con tu enlace de YouTube/Vimeo embed */}
          {/* Ejemplo: src="https://www.youtube.com/embed/TU_ID" */}
        </motion.div>
      </div>
    </section>
  );
}
