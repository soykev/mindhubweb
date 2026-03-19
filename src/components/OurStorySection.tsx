"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function OurStorySection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "UmROho-ztWg";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0&playsinline=1&disablekb=1`;

  return (
    <section className="bg-white py-16">
      <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "clamp(1.25rem, 5vw, 4rem)", paddingRight: "clamp(1.25rem, 5vw, 4rem)" }}>
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-16"
          style={{ color: "#FF00FF", marginBottom: "40px" }}
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
          {isPlaying ? (
            <iframe
              src={embedUrl}
              title="Nuestra historia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="relative w-full h-full group"
              aria-label="Reproducir video de nuestra historia"
              style={{
                backgroundImage: `url("${thumbnailUrl}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <span className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-300" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-20 h-20 rounded-full bg-white/90 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center shadow-xl">
                  <span
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "12px solid transparent",
                      borderBottom: "12px solid transparent",
                      borderLeft: "20px solid #FF00FF",
                      marginLeft: "4px",
                    }}
                  />
                </span>
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
