import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Metodología — MindHub",
  description:
    "En MindHub trabajamos sobre 7 pilares que convierten el aprendizaje en impacto. Conoce nuestra metodología única.",
};

const BASE = "https://info.mindhubweb.com/hs-fs/hubfs/AI-Generated%20Media/Images/WEB%20MH";

const pillars = [
  {
    id: 1,
    title: "Aula invertida",
    description:
      "Partimos de casos reales y, desde esa experiencia, abrimos paso al contenido y las herramientas que dan sentido a la práctica.",
    img: `${BASE}/Firefly_Lentes%20de%20realidad%20virtual%2c%20algo%20futuristas%2c%20pero%20elegantes%2c%20de%20color%20blancos%2c%20estos%20%20125128.jpg?width=355&height=270`,
    imgAlt: "Lentes de realidad virtual para Aula invertida",
    bgWhite: true,
    imgLeft: true,
  },
  {
    id: 2,
    title: "Equipos académicos en vivo",
    description:
      "Clases interactivas donde los participantes aprenden junto a expertos y compañeros, en un entorno dinámico y colaborativo.",
    img: `${BASE}/Firefly_Lentes%20de%20realidad%20virtual%2c%20algo%20futuristas%2c%20pero%20elegantes%2c%20de%20color%20blancos%2c%20estos%20%20517430.jpg?width=355&height=270`,
    imgAlt: "Equipos académicos en vivo",
    bgWhite: false,
    imgLeft: false,
  },
  {
    id: 3,
    title: "Plataforma propia",
    description:
      "Tecnología propia potenciada con IA para personalizar la experiencia, dar seguimiento y medir el progreso de cada participante.",
    img: `${BASE}/Firefly_fondo%20tech%20color%20purpura%2c%20con%20estilo%20futurista%20y%20elegante%20computadora%20con%20codigo%20html%20517430.jpg?width=355&height=270`,
    imgAlt: "Plataforma tecnológica propia",
    bgWhite: true,
    imgLeft: true,
  },
  {
    id: 4,
    title: "Entornos de trabajo real",
    description:
      "Recreamos escenarios reales de proyectos corporativos para que los alumnos aprendan haciendo y estén listos para integrarse a equipos desde el primer día.",
    img: `${BASE}/Firefly_fondo%20tech%20color%20purpura%2c%20con%20estilo%20futurista%20y%20elegante%20computadora%20con%20codigo%20html%20125128.jpg?width=355&height=270`,
    imgAlt: "Entornos de trabajo real",
    bgWhite: false,
    imgLeft: false,
  },
  {
    id: 5,
    title: "Metodologías Ágiles",
    description:
      "Aplicamos prácticas modernas de gestión de proyectos para que los alumnos desarrollen soluciones rápidas, colaborativas y orientadas a resultados.",
    img: `${BASE}/Firefly_fondo%20tech%20con%20codigo%20html%20color%20purpura%2c%20con%20estilo%20futurista%20oficina%20con%20metodologi%20517430.jpg?width=355&height=270`,
    imgAlt: "Metodologías Ágiles",
    bgWhite: true,
    imgLeft: true,
  },
  {
    id: 6,
    title: "Habilidades Profesionales",
    description:
      "Más allá de las habilidades técnicas, nuestras formaciones fomentan habilidades como la comunicación, trabajo en equipo y pensamiento crítico, competencias clave para destacar en cualquier organización.",
    img: "https://info.mindhubweb.com/hs-fs/hubfs/Firefly_fondo%20tech%20con%20codigo%20html%20color%20purpura%2c%20con%20estilo%20futurista%20oficina%20con%20metodologi%20262872.jpg?width=355&height=270",
    imgAlt: "Habilidades Profesionales",
    bgWhite: false,
    imgLeft: false,
  },
  {
    id: 7,
    title: "Apoyo Asincrónico",
    description:
      "Materiales y recursos disponibles en todo momento para reforzar el aprendizaje y permitir que cada participante avance a su propio ritmo.",
    img: `${BASE}/Firefly_fondo%20tech%20con%20codigo%20html%20color%20purpura%2c%20con%20estilo%20futurista%20oficina%20con%20metodologi%20795424.jpg?width=355&height=270`,
    imgAlt: "Apoyo Asincrónico",
    bgWhite: true,
    imgLeft: true,
  },
];

export default function MetodologiaPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #1a0040 0%, #2d0070 25%, #4e00b3 55%, #6b00cc 75%, #1a0040 100%)",
          position: "relative",
          overflow: "hidden",
          paddingTop: "80px",
        }}
      >
        {/* Network nodes overlay image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://info.mindhubweb.com/hs-fs/hubfs/AI-Generated%20Media/Images/WEB%20MH/Recurso%209.png?width=1280&height=545&name=Recurso%209.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.45,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontSize: "clamp(1.75rem, 5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "20px",
              fontFamily: "var(--font-jakarta), Poppins, sans-serif",
            }}
          >
            Una metodología única que transforma empresas
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              maxWidth: "680px",
              margin: "0 auto",
              fontFamily: "var(--font-jakarta), Poppins, sans-serif",
            }}
          >
            En MindHub entendemos que la formación tecnológica solo funciona cuando es práctica
            y responde a las necesidades reales de la industria. Por eso trabajamos sobre 7
            pilares que convierten el aprendizaje en impacto.
          </p>
        </div>
      </section>

      {/* 7 Pillar sections */}
      {pillars.map((pillar) => (
        <section
          key={pillar.id}
          style={{ background: pillar.bgWhite ? "#ffffff" : "#000000" }}
        >
          <div
            className={`max-w-[1280px] mx-auto px-5 md:px-20 py-10 md:py-[60px] flex flex-col items-center gap-8 md:gap-20 ${
              pillar.imgLeft ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pillar.img}
                alt={pillar.imgAlt}
                style={{
                  width: "100%",
                  maxWidth: "355px",
                  height: "auto",
                  aspectRatio: "355/270",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "4px",
                }}
              />
            </div>

            {/* Text */}
            <div className="w-full md:flex-1 text-center md:text-left">
              {pillar.id % 2 === 1 ? (
                <h1
                  style={{
                    color: "#FF00FF",
                    fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                    fontWeight: 700,
                    marginBottom: "16px",
                    fontFamily: "var(--font-jakarta), Poppins, sans-serif",
                  }}
                >
                  {pillar.title}
                </h1>
              ) : (
                <h2
                  style={{
                    color: "#FF00FF",
                    fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                    fontWeight: 700,
                    marginBottom: "16px",
                    fontFamily: "var(--font-jakarta), Poppins, sans-serif",
                  }}
                >
                  {pillar.title}
                </h2>
              )}
              <p
                style={{
                  color: pillar.bgWhite ? "#333333" : "#dddddd",
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  fontFamily: "var(--font-jakarta), Poppins, sans-serif",
                }}
              >
                {pillar.description}
              </p>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </>
  );
}
