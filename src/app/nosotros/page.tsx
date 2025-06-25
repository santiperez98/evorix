"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import AboutNew from "../components/AboutNew";
import { FaRocket, FaLightbulb, FaHandshake } from "react-icons/fa";

const techLogos: string[] = [
  "/react.webp",
  "/nextjs.webp",
  "/nodejs.webp",
  "/tail.webp",
  "/postgre.webp",
];

const AboutUsData = {
  title: "Sobre Evorix",
  subtitle: "Pasión, tecnología y compromiso en cada línea de código.",
  imageSrc: "/about-us-image.webp",
  imageAlt: "Fundador de Evorix trabajando en su espacio creativo",
  agencyTitle: "Un Proyecto Personal con Visión Futurista",
  agencyDescription:
    "Mi nombre es Santiago Pérez, fundador y CEO de Evorix. Soy el desarrollador principal detrás de cada proyecto, desde la planificación hasta la ejecución. Aunque cuento con ayudantes que me apoyan ocasionalmente, cada línea de código, diseño o estrategia pasa por mis manos. Mi objetivo es claro: ayudarte a crecer digitalmente con soluciones eficientes, modernas y adaptadas a tus necesidades reales.",
  services: [
    "Desarrollo Web a medida con foco en velocidad, escalabilidad y diseño moderno.",
    "Optimización SEO para mejorar tu posicionamiento orgánico en buscadores.",
    "Marketing Digital con enfoque analítico y creativo.",
    "Implementación de sitios autoadministrables con WordPress.",
    "Gestión estratégica de redes sociales orientada a resultados.",
    "Branding digital claro, coherente y visualmente impactante.",
  ],
  callToAction: "Conocé cómo puedo potenciar tu presencia digital",
  teamTitle: "Sobre el Fundador",
  teamMembers: [
    {
      name: "Santiago Pérez",
      role: "Fundador, CEO y Desarrollador Principal",
      imageSrc: "/team/santiago.jpg",
    },
  ],
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SobreNosotrosPage() {
  const esenciaRef = useRef<HTMLDivElement>(null);
  const isInViewEsencia = useInView(esenciaRef, { once: true, amount: 0.3 });
  const controlsEsencia = useAnimation();

  const aboutNewRef = useRef<HTMLDivElement>(null);
  const isInViewAboutNew = useInView(aboutNewRef, { once: true, amount: 0.3 });
  const controlsAboutNew = useAnimation();

  useEffect(() => {
    if (isInViewEsencia) controlsEsencia.start("visible");
    if (isInViewAboutNew) controlsAboutNew.start("visible");
  }, [isInViewEsencia, isInViewAboutNew]);

  return (
    <div className="bg-black text-gray-200 font-sans">
      <Navbar />

      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0 opacity-40"
          style={{ backgroundImage: "url('/nosobg.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-fuchsia-900/30 to-cyan-900/30 z-0 opacity-70" />

        <motion.section
          className="relative z-10 text-center px-4 py-20 md:py-32"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "anticipate" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">Conectamos</span>
            <span className="block md:inline text-gray-100 drop-shadow-[0_0_10px_rgba(200,200,200,0.3)]"> tu Visión </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400 drop-shadow-[0_0_15px_rgba(255,0,255,0.6)]">al Futuro.</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            En <span className="text-cyan-400 font-semibold text-xl">Evorix</span>, combino innovación, diseño y funcionalidad para crear soluciones digitales reales.
          </p>

          <div className="mt-16 w-full overflow-hidden">
            <motion.div
              className="flex gap-8 md:gap-12 px-4 animate-scroll-horizontal"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...techLogos, ...techLogos].map((logo, index) => (
                <motion.div
                  key={`tech-${index}`}
                  className="flex-shrink-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-black/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700 hover:border-fuchsia-500 transition-all duration-300 flex items-center justify-center p-4"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <Image
                    src={logo}
                    alt={`Tech logo ${index + 1}`}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </div>

      <div className="scroll-content-wrapper">
        <motion.section
          ref={esenciaRef}
          className="section-sticky py-16 md:py-24 bg-gray-900 h-screen flex items-center"
          initial="hidden"
          animate={controlsEsencia}
          variants={sectionVariants}
        >
          <div className="container mx-auto px-6 text-center">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
              Nuestra <span className="text-cyan-400">Esencia</span> Digital
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Tecnología, creatividad y compromiso impulsan todo lo que hacemos.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[FaRocket, FaLightbulb, FaHandshake].map((Icon, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-black p-8 rounded-xl shadow-2xl hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] border border-gray-800 hover:border-cyan-500/50 transition-all duration-400"
                >
                  <Icon className="text-5xl mb-6 mx-auto text-cyan-500" />
                  <h3 className="text-2xl font-semibold text-fuchsia-400 mb-3">
                    {index === 0 ? "Innovación Constante" : index === 1 ? "Creatividad Estratégica" : "Colaboración Transparente"}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {index === 0 ? "Soluciones digitales pensadas para el futuro." :
                     index === 1 ? "Diseño y código con intención y estilo." :
                     "Comunicación clara y compromiso real en cada proyecto."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <div ref={aboutNewRef} className="section-sticky py-16 md:py-24 bg-black h-screen flex items-center">
          <AboutNew data={AboutUsData} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
