"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaCheckCircle, FaUsers, FaShieldAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import NuestroProceso from "../components/NuestroProceso";

const techLogos: string[] = [
  "/react.png",
  "/nextjs.png",
  "/nodejs.png",
  "/tail.png",
  "/postgre.png",
];

interface Testimonial {
  name: string;
  feedback: string;
}

const testimonialsData: Testimonial[] = [
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
];

export default function SobreNosotros() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
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
              Innovación tecnológica combinada con diseño futurista y seguridad
              de vanguardia.
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
      <section className="py-20 bg-gray-200 text-black">
        <h2 className="text-6xl font-bold text-center mb-16 text-gray-800">
          ¿Por qué confiar en nosotros?
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 px-4 md:px-20">
          {/* Card 1 */}
          <motion.div
            className="relative w-64 h-80 rounded-t-[50px] bg-gray-700 overflow-hidden shadow-lg group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 bg-gray-200 w-[100px] h-[100px] rounded-full flex items-center justify-center z-10">
              <FaCheckCircle className="text-4xl text-cyan-600" />
            </div>
            <div
              className="absolute inset-0 bg-[url('/confianza.png')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-6 left-0 right-0 text-center px-4 opacity-0 group-hover:opacity-100 transition duration-500 text-white z-10">
              <h3 className="text-xl font-bold mb-2">Calidad Garantizada</h3>
              <p className="text-sm">
                Desarrollos modernos, rápidos y 100% adaptables. Priorizamos
                eficiencia y performance.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative w-64 h-80 rounded-t-[50px] bg-gray-700 overflow-hidden shadow-lg group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 bg-gray-200 w-[100px] h-[100px] rounded-full flex items-center justify-center z-10">
              <FaUsers className="text-4xl text-purple-600" />
            </div>
            <div
              className="absolute inset-0 bg-[url('/atencion.png')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-6 left-0 right-0 text-center px-4 opacity-0 group-hover:opacity-100 transition duration-500 text-white z-10">
              <h3 className="text-xl font-bold mb-2">Atención Personalizada</h3>
              <p className="text-sm">
                Te escuchamos, te entendemos, y adaptamos cada solución a tu
                visión. Siempre a tu lado.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="relative w-64 h-80 rounded-t-[50px] bg-gray-700 overflow-hidden shadow-lg group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 bg-gray-200 w-[100px] h-[100px] rounded-full flex items-center justify-center z-10">
              <FaShieldAlt className="text-4xl text-green-600" />
            </div>
            <div
              className="absolute inset-0 bg-[url('/seguridad.png')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-6 left-0 right-0 text-center px-4 opacity-0 group-hover:opacity-100 transition duration-500 text-white z-10">
              <h3 className="text-xl font-bold mb-2">Seguridad y Confianza</h3>
              <p className="text-sm">
                Tus datos y los de tus clientes están protegidos. Trabajamos con
                ética y responsabilidad.
              </p>
            </div>
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
          {testimonialsData.map((testi, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl border border-purple-500 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
            >
              <p className="italic text-gray-300 mb-4">“{testi.feedback}”</p>
              <h5 className="text-lg font-semibold text-purple-300">
                {testi.name}
              </h5>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-800 text-white text-center px-6">
        <h2 className="text-5xl font-bold mb-4">
          Conectamos marcas con personas
        </h2>
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