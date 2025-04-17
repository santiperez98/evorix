"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaRocket,
  FaLightbulb,
  FaCheckCircle,
  FaUsers,
  FaShieldAlt,
  FaCogs,
  FaProjectDiagram,
  FaChartLine,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import NuestroProceso from "../components/NuestroProceso";

const techLogos = [
  "/react.png",
  "/nextjs.png",
  "/nodejs.png",
  "/tail.png",
  "/postgre.png",
];

export default function SobreNosotros() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <>
      <Navbar />

      {/* Fondo común para Hero + Carrusel */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{ backgroundImage: "url('/nosobg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40 z-0" />

        {/* Hero Section */}
        <section className="relative z-10 h-screen flex items-center justify-center text-white text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold neon-text mb-4">
              Llevamos tus ideas al futuro
            </h1>
            <p className="mt-6 text-xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
              Innovación tecnológica combinada con diseño futurista y seguridad de vanguardia.
            </p>
          </motion.div>
        </section>

        {/* Carrusel de Tecnologías Continuo */}
        <section className="relative z-10 py-20 overflow-hidden">
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex space-x-16 animate-loop-scroll"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...techLogos, ...techLogos].map((logo, index) => (
                <motion.div
                  key={index}
                  className="inline-block p-6 rounded-lg bg-white/10 hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={logo}
                    alt={`Tech logo ${index}`}
                    width={120}
                    height={120}
                    className="mx-auto"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* ¿Por qué elegirnos? */}
      <section className="py-20 bg-gray-900 text-white">
        <h2 className="text-6xl font-bold text-center mb-12 neon-text">
          ¿Por qué confiar en nosotros?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <motion.div
            className="p-8 bg-gray-800 rounded-xl flex flex-col items-center border border-cyan-400 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FaCheckCircle className="text-6xl text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold">Calidad Garantizada</h3>
            <p className="text-lg text-gray-300 text-center">
              Desarrollo robusto y escalable con las mejores prácticas del mercado.
            </p>
          </motion.div>
          <motion.div
            className="p-8 bg-gray-800 rounded-xl flex flex-col items-center border border-purple-500 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FaUsers className="text-6xl text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold">Atención Personalizada</h3>
            <p className="text-lg text-gray-300 text-center">
              Acompañamiento en cada etapa con asesoría experta y comunicación fluida.
            </p>
          </motion.div>
          <motion.div
            className="p-8 bg-gray-800 rounded-xl flex flex-col items-center border border-green-400 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <FaShieldAlt className="text-6xl text-green-400 mb-4" />
            <h3 className="text-2xl font-bold">Seguridad y Eficiencia</h3>
            <p className="text-lg text-gray-300 text-center">
              Implementamos tecnologías avanzadas para proteger tu negocio y optimizar recursos.
            </p>
          </motion.div>
        </div>
      </section>

      <NuestroProceso />

      {/* Testimonios */}
      <section className="py-20 bg-gray-900 text-white">
        <h2 className="text-6xl font-bold text-center mb-12 neon-text">
          Historias de Éxito
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            {
              name: "Lucía Fernández",
              feedback:
                "Gracias al equipo, mi marca creció un 300% en redes y ahora tengo ventas automatizadas con IA.",
            },
            {
              name: "Esteban Rojas",
              feedback:
                "Me ayudaron a digitalizar todo mi negocio. ¡Rápidos, claros y muy profesionales!",
            },
            {
              name: "Valeria Tech",
              feedback:
                "Super creativos y con ideas innovadoras. Les confié mi branding y no me arrepiento.",
            },
          ].map((testi, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl border border-purple-500 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
            >
              <p className="italic text-gray-300 mb-4">“{testi.feedback}”</p>
              <h5 className="text-lg font-semibold text-purple-300">{testi.name}</h5>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-800 text-white text-center px-6">
        <h2 className="text-5xl font-bold mb-4">Conectamos marcas con personas</h2>
        <p className="text-lg md:text-xl mb-8">
          Estamos listos para llevar tu negocio al siguiente nivel. ¡Hablemos!
        </p>
        <a
          href="https://wa.me/5491234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-700 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Contáctanos por WhatsApp
        </a>
      </section>

      <Footer />
    </>
  );
}