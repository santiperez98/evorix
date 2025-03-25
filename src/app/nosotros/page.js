"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaRocket, FaLightbulb, FaCheckCircle, FaUsers, FaShieldAlt, FaBolt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const techLogos = ["/react.png", "/nextjs.png", "/nodejs.png", "/tail.png", "/postgre.png"];

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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/nasa.jpg')" }}></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 className="text-5xl md:text-7xl font-bold neon-text">
            Llevamos tus ideas más allá
          </motion.h1>
          <motion.p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Soluciones web innovadoras y seguras con inteligencia artificial.
          </motion.p>
        </div>
      </section>

      {/* Carrusel de Tecnologías */}
      <section className="py-10 bg-gray-800 overflow-hidden">
        <div className="w-full flex space-x-10 animate-marquee">
          {techLogos.map((logo, index) => (
            <Image key={index} src={logo} alt="Tech Logo" width={100} height={100} className="mx-4" />
          ))}
        </div>
      </section>

      {/* ¿Por qué elegirnos? */}
      <section className="py-20 bg-gray-900 text-white">
        <h2 className="text-5xl font-bold text-center mb-12 neon-text">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <motion.div className="p-8 bg-gray-800 rounded-xl flex flex-col items-center border border-cyan-400">
            <FaCheckCircle className="text-5xl text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold">Calidad Garantizada</h3>
            <p className="text-lg text-gray-300 text-center">Desarrollo robusto y escalable con las mejores prácticas.</p>
          </motion.div>
          <motion.div className="p-8 bg-gray-800 rounded-xl flex flex-col items-center border border-purple-500">
            <FaUsers className="text-5xl text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold">Atención Personalizada</h3>
            <p className="text-lg text-gray-300 text-center">Acompañamos cada etapa de tu proyecto con asesoría experta.</p>
          </motion.div>
          <motion.div className="p-8 bg-gray-800 rounded-xl flex flex-col items-center border border-green-400">
            <FaShieldAlt className="text-5xl text-green-400 mb-4" />
            <h3 className="text-2xl font-bold">Seguridad y Eficiencia</h3>
            <p className="text-lg text-gray-300 text-center">Implementamos tecnologías de última generación para proteger tu negocio.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}