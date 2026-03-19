"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  image: string;
  prefix: string;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  {
    image: "/Recurso 14-1.png",
    prefix: "+",
    value: 100,
    suffix: "",
    label: "Empresas confían\nen nosotros",
  },
  {
    image: "/Recurso 15.png",
    prefix: "+",
    value: 6000,
    suffix: "",
    label: "Alumnos pasaron\npor MindHub",
  },
  {
    image: "/Recurso 16.png",
    prefix: "+",
    value: 2,
    suffix: "M",
    label: "De horas sincrónicas\nde capacitación",
  },
  {
    image: "/Recurso 18-1.png",
    prefix: "+",
    value: 4,
    suffix: "",
    label: "Argentina,\nChile, Uruguay,\nColombia y LATAM",
  },
];

interface AnimatedNumberProps {
  readonly value: number;
  readonly prefix: string;
  readonly suffix: string;
  readonly inView: boolean;
}

function AnimatedNumber({ value, prefix, suffix, inView }: AnimatedNumberProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const step = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, value);
      setDisplay(Math.floor(current));
      if (current >= value) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  let formatted: string;
  if (display >= 1000) {
    formatted = (display / 1000).toFixed(display % 1000 === 0 ? 0 : 1) + "k";
  } else {
    formatted = display.toString();
  }

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="estadisticas" ref={ref} className="bg-white py-0" style={{ paddingTop: "0px", paddingBottom: "20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "clamp(1.25rem, 5vw, 4rem)", paddingRight: "clamp(1.25rem, 5vw, 4rem)" }}>
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-extrabold tracking-[0.2em] uppercase text-black mb-4"
          style={{ marginBottom: "30px", fontSize: "24px" }}
        >
          Somos pioneros en el desarrollo de talento
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-2xl sm:text-3xl font-extrabold mb-16"
          style={{ color: "#FF00FF" }}
        >
          7 años, cientos de equipos, impacto real.
        </motion.p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center gap-0"
            >
              {/* Icon */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={stat.image}
                alt={stat.label}
                className="w-32 h-32 object-contain flex-shrink-0"
              />

              {/* Number */}
              <div
                className="text-5xl font-extrabold leading-none"
                style={{ color: "#FF00FF" }}
              >
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>

              {/* Label */}
              <p className="text-sm font-semibold text-black leading-snug whitespace-pre-line">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
