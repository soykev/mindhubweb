"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  {
    name: "Santander",
    src: "/logo-santander.png",
    width: 180,
    height: 104,
  },
  {
    name: "ITR",
    src: "/logo-itr.png",
    width: 100,
    height: 100,
  },
  {
    name: "Rappi",
    src: "/logo-rappi.png",
    width: 148,
    height: 85,
  },
  {
    name: "Accenture",
    src: "/logo-accenture.png",
    width: 180,
    height: 52,
  },
  {
    name: "Natura",
    src: "/logo-natura.png",
    width: 130,
    height: 130,
  },
  {
    name: "EY",
    src: "/logo-ey.png",
    width: 100,
    height: 100,
  },
];

export default function TrustedBySection() {
  return (
    <section className="bg-white pt-16 pb-12" style={{ paddingTop: "80px", paddingBottom: "40px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center font-bold mb-14"
          style={{
            color: "#FF00FF",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            marginBottom: "5rem",
          }}
        >
          Ya confiaron en nosotros...
        </motion.h2>

        {/* Fila de logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "22px",
          }}
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "80px",
              }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                style={{
                  maxHeight: "148px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </motion.div>

        {/* Divisor */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "76px", marginBottom: "76px" }}>
          <div style={{ width: "50%", borderTop: "1px solid #000000" }} />
        </div>
        
      </div>
    </section>
  );
}
