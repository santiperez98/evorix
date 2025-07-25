"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { FaRocket, FaLightbulb, FaHandshake } from "react-icons/fa";
import AboutNew from "../components/AboutNew";

const techLogos = [
  "/react.webp",
  "/nextjs.webp",
  "/nodejs.webp",
  "/tail.webp",
  "/postgre.webp",
  "/nestjs23.webp",
  "/js.webp",
  "/css.webp",
  "/html.webp",
  "/wp.webp"
];

const AboutUsData = {
  title: "Sobre Evorix",
  subtitle: "Pasión, tecnología y compromiso en cada línea de código.",
  imageSrc: "/santip.png",
  imageAlt: "Santiago Pérez, Fundador de Evorix",
  agencyTitle: "Un Proyecto Personal con Visión Futurista",
  agencyDescription:
    "Soy Santiago Pérez, fundador y CEO de Evorix. El desarrollador principal detrás de cada proyecto, desde la planificación hasta la ejecución. Cada línea de código, diseño o estrategia pasa por mis manos.",
  services: [
    "Desarrollo Web a medida con foco en velocidad y diseño moderno.",
    "SEO para mejorar tu posicionamiento orgánico.",
    "Marketing Digital con enfoque analítico.",
    "Sitios autoadministrables.",
    "Gestión de redes orientada a resultados.",
    "Branding digital claro y coherente.",
  ],
  callToAction: "Conocé cómo puedo potenciar tu presencia digital",
  teamTitle: "Sobre el Fundador",
  teamMembers: [
    {
      name: "Santiago Pérez",
      role: "Fundador y Desarrollador Principal",
      imageSrc: "/ggsanti.png",
    },
  ],
};

const features = [
  {
    icon: <FaRocket className="text-5xl text-cyan-500 mx-auto mb-4" />,
    title: "Innovación Constante",
    desc: "Soluciones digitales pensadas para el futuro.",
  },
  {
    icon: <FaLightbulb className="text-5xl text-cyan-500 mx-auto mb-4" />,
    title: "Creatividad Estratégica",
    desc: "Diseño y código con intención.",
  },
  {
    icon: <FaHandshake className="text-5xl text-cyan-500 mx-auto mb-4" />,
    title: "Colaboración Transparente",
    desc: "Comunicación clara y compromiso real.",
  },
];

export default function SobreNosotrosPage() {
  const { ref: refEsencia, inView: inViewEsencia } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: refAbout, inView: inViewAbout } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <Head>
        <title>Sobre Nosotros | Evorix</title>
        <meta
          name="description"
          content="Conocé a Evorix: innovación, diseño y compromiso en cada proyecto digital."
        />
        <meta property="og:title" content="Sobre Nosotros | Evorix" />
        <meta
          property="og:description"
          content="Somos una agencia digital con visión futurista, liderada por Santiago Pérez."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-black text-gray-200 font-sans">
        <Navbar />

{/* HERO */}
<section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 sm:py-20 md:py-32 overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
    style={{ backgroundImage: "url('/nosobg.webp')" }}
  />
  <div className="absolute inset-0 bg-gradient-to-br from-black via-fuchsia-900/40 to-cyan-900/40 z-0" />

  <motion.div
    className="relative z-10 w-full max-w-4xl px-4"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    <h1
      className="font-extrabold mb-6 leading-tight text-center break-words"
      style={{
        fontSize: "clamp(1.5rem, 5vw + 1rem, 3.5rem)",
      }}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
        Conectamos
      </span>{" "}
      tu Visión{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400">
        al Futuro.
      </span>
    </h1>

    <p
      className="mt-6 text-gray-300 break-words text-center"
      style={{
        fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
        lineHeight: "1.6",
        wordBreak: "break-word",
        whiteSpace: "pre-wrap",
      }}
    >
      En{" "}
      <span className="text-cyan-400 font-semibold">Evorix</span>,
      combino innovación, diseño y funcionalidad para crear soluciones
      digitales reales.
    </p>

{/* Carrusel de tecnologías */}
<div className="mt-12 w-full ">
  <motion.div
    className="flex gap-6 sm:gap-8 md:gap-10 justify-center"
    animate={{ x: ["0%", "-100%"] }}
    transition={{
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    {[...techLogos, ...techLogos].map((logo, i) => (
      <div
        key={i}
        className="flex-shrink-0 w-[15vw] h-[15vw] sm:w-[12vw] sm:h-[12vw] md:w-[10vw] md:h-[10vw] lg:w-[8vw] lg:h-[8vw] bg-black/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700 hover:border-fuchsia-500 transition-all duration-300 flex items-center justify-center p-4"
      >
        <Image
          src={logo}
          alt={`Logo tecnología ${i + 1}`}
          width={100}
          height={100}
          className="object-contain h-full w-full"
        />
      </div>
    ))}
  </motion.div>
</div>
  </motion.div>
</section>

        {/* ESENCIA */}
        <section ref={refEsencia} className="py-16 sm:py-24 bg-gray-900">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inViewEsencia ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="container mx-auto px-6 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Nuestra <span className="text-cyan-400">Esencia</span> Digital
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Tecnología, creatividad y compromiso impulsan todo lo que hacemos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-black p-6 rounded-xl shadow-2xl hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] border border-gray-800 hover:border-cyan-500/50 transition-all duration-400"
                >
                  {f.icon}
                  <h3 className="text-xl sm:text-2xl font-semibold text-fuchsia-400 mb-3">
                    {f.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section ref={refAbout} className="py-16 md:py-24 bg-black">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inViewAbout ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center px-6"
          >
            <AboutNew data={AboutUsData} />

            <div className="mt-12">
              <Image
                src="/ggsanti.png"
                alt="Santiago Pérez, Fundador de Evorix"
                width={300}
                height={300}
                className="rounded-full border-4 border-cyan-400 shadow-xl w-40 sm:w-52 md:w-72 h-auto object-cover"
              />
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}