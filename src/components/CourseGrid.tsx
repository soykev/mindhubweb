"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Brain, Code2, BarChart3, Shield, Layers, ArrowRight, Star } from "lucide-react";

interface Course {
  icon: React.ElementType;
  tag: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  students: string;
  gradient: string;
  dotColor1: string;
  dotColor2: string;
  featured?: boolean;
}

const courses: Course[] = [
  {
    icon: Brain,
    tag: "IA & Machine Learning",
    title: "Inteligencia Artificial para Equipos Corporativos",
    description:
      "Transforma tu equipo con las bases prácticas de IA generativa, prompting avanzado y herramientas clave para el trabajo diario.",
    duration: "40 horas",
    level: "Todos los niveles",
    students: "2.1k",
    gradient: "from-[#0000FF] to-[#FF00FF]",
    dotColor1: "#0000FF",
    dotColor2: "#FF00FF",
    featured: true,
  },
  {
    icon: Code2,
    tag: "Desarrollo",
    title: "Bootcamp Full Stack con IA",
    description:
      "Aprende a construir productos digitales modernos integrando herramientas de IA en tu flujo de desarrollo.",
    duration: "120 horas",
    level: "Intermedio",
    students: "980",
    gradient: "from-[#FF00FF] to-[#0000FF]",
    dotColor1: "#FF00FF",
    dotColor2: "#0000FF",
  },
  {
    icon: BarChart3,
    tag: "Data & Analytics",
    title: "Data Science para No Técnicos",
    description:
      "Domina el análisis de datos y la visualización para tomar mejores decisiones estratégicas en tu organización.",
    duration: "60 horas",
    level: "Principiante",
    students: "1.4k",
    gradient: "from-[#BAFF43] to-[#0000FF]",
    dotColor1: "#BAFF43",
    dotColor2: "#0000FF",
  },
  {
    icon: Cpu,
    tag: "Automatización",
    title: "Automatización con RPA e IA",
    description:
      "Elimina tareas repetitivas y optimiza procesos de negocio usando las últimas herramientas de automatización inteligente.",
    duration: "50 horas",
    level: "Intermedio",
    students: "670",
    gradient: "from-[#BAFF43] to-[#FF00FF]",
    dotColor1: "#BAFF43",
    dotColor2: "#FF00FF",
  },
  {
    icon: Shield,
    tag: "Ciberseguridad",
    title: "Ciberseguridad Empresarial",
    description:
      "Protege tu organización con estrategias de seguridad modernas frente a amenazas impulsadas por inteligencia artificial.",
    duration: "45 horas",
    level: "Intermedio",
    students: "520",
    gradient: "from-[#BAFF43] to-[#0000FF]",
    dotColor1: "#BAFF43",
    dotColor2: "#0000FF",
  },
  {
    icon: Layers,
    tag: "Liderazgo Digital",
    title: "Digital Transformation Leadership",
    description:
      "Lidera la transformación digital de tu organización con frameworks probados y casos de éxito en LATAM.",
    duration: "35 horas",
    level: "Avanzado",
    students: "890",
    gradient: "from-[#FF00FF] to-[#0000FF]",
    dotColor1: "#FF00FF",
    dotColor2: "#0000FF",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function CourseGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="programas" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0000FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#0000FF" }}>
                Nuestros programas
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                Formación que{" "}
                <span className="gradient-text">transforma</span>
                <br className="hidden sm:block" /> equipos reales.
              </h2>
            </div>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#a1a1aa] hover:text-white transition-colors shrink-0 group">
              Ver todos los programas
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={`group relative glass-dark rounded-2xl overflow-hidden cursor-pointer hover:border-white/15 transition-all duration-300 ${
                course.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Top gradient line */}
              <div className={`h-px w-full bg-gradient-to-r ${course.gradient}`} />

              {course.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#0000FF] to-[#FF00FF] text-xs font-semibold text-white">
                  <Star className="w-3 h-3 fill-current" />
                  Destacado
                </div>
              )}

              <div className="p-6">
                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${course.gradient} p-2.5 mb-4 opacity-90`}
                >
                  <course.icon className="w-full h-full text-white" strokeWidth={1.5} />
                </div>

                {/* Tag */}
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#a1a1aa] mb-2">
                  {course.tag}
                </span>

                {/* Title */}
                <h3 className="text-base font-bold text-white leading-snug mb-2 group-hover:gradient-text transition-all">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#a1a1aa] leading-relaxed mb-5">{course.description}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-[#a1a1aa] border-t border-white/5 pt-4">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: course.dotColor1 }} />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: course.dotColor2 }} />
                    {course.level}
                  </span>
                  <span className="ml-auto flex items-center gap-1">
                    <UsersIcon className="w-3.5 h-3.5" />
                    {course.students}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UsersIcon({ className, ...props }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
