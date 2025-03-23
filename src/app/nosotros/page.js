"use client"; // Marca este componente como un Client Component

import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, useAnimation, useInView } from "framer-motion";

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

      {/* Hero Section: Neon-Cyberpunk Glow */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="neon-gradient absolute inset-0 opacity-50 animate-pulse-slow"></div>
          <div className="holographic-light absolute inset-0 mix-blend-screen animate-holographic"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold neon-text hover:text-cyan-400 transition-colors duration-500"
          >
            Llevamos tus ideas más allá
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto hover:text-purple-400 transition-colors duration-500"
          >
            Con soluciones web innovadoras y seguras, utilizamos tecnologías avanzadas de inteligencia artificial para crear aplicaciones robustas, escalables y altamente personalizadas que impulsan tu crecimiento y eficiencia.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            whileHover={{ scale: 1.05, backgroundColor: "#00FFFF" }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-cyan-500 rounded-lg text-lg font-semibold text-black hover:bg-cyan-600 transition-colors duration-300"
          >
            Descubre cómo
          </motion.button>
        </div>
      </section>

      {/* Nuestra Historia: Animación al scrollear */}
      <section className="py-20 bg-black text-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold text-center mb-12 neon-text hover:text-cyan-400 transition-colors duration-500"
          >
            Nuestra Historia
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
              variants={{ visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-900 p-8 rounded-xl border border-cyan-400 hover:border-purple-500 transition-all duration-500"
            >
              <p className="text-lg text-gray-300">
                Evorix nació de una visión clara: transformar el panorama digital en Latinoamérica. Fundada por Santiago Pérez, un apasionado desarrollador con años de experiencia en tecnologías emergentes, nuestra agencia se ha convertido en un referente en el desarrollo de soluciones digitales integrales.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={controls}
              variants={{ visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gray-900 p-8 rounded-xl border border-purple-500 hover:border-cyan-400 transition-all duration-500"
            >
              <p className="text-lg text-gray-300">
                Inspirados por la escasez de servicios completos de alta calidad en la región, decidimos crear una plataforma que no solo construya marcas desde cero, sino que también las impulse hacia el éxito mediante estrategias innovadoras de marketing digital y desarrollo tecnológico.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misión y Visión: Efecto Holográfico */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold text-center mb-12 neon-text hover:text-purple-400 transition-colors duration-500"
          >
            Misión y Visión
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{ visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-900 p-8 rounded-xl border border-cyan-400 hover:border-purple-500 transition-all duration-500"
            >
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">Misión</h3>
              <p className="text-lg text-gray-300">
                En Evorix, nuestra misión es brindar soluciones digitales innovadoras que empoderen a emprendedores y empresas a alcanzar su máximo potencial. Nos comprometemos a ofrecer servicios de alta calidad, personalizados y adaptados a las necesidades únicas de cada cliente.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{ visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gray-900 p-8 rounded-xl border border-purple-500 hover:border-cyan-400 transition-all duration-500"
            >
              <h3 className="text-3xl font-bold text-purple-500 mb-4">Visión</h3>
              <p className="text-lg text-gray-300">
                Aspiramos a ser líderes indiscutibles en el desarrollo digital en Latinoamérica, reconocidos por nuestra excelencia, creatividad y capacidad de transformar ideas en realidades tangibles. Queremos ser la primera opción para quienes buscan innovación y resultados excepcionales.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores Corporativos: Sci-Fi Aesthetic */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold text-center mb-12 neon-text hover:text-cyan-400 transition-colors duration-500"
          >
            Nuestros Valores
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{ visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-900 p-8 rounded-xl border border-cyan-400 hover:border-purple-500 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Innovación</h3>
              <p className="text-lg text-gray-300">Buscamos constantemente nuevas formas de resolver problemas y mejorar la experiencia de nuestros clientes.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{ visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gray-900 p-8 rounded-xl border border-purple-500 hover:border-cyan-400 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-purple-500 mb-4">Excelencia</h3>
              <p className="text-lg text-gray-300">Nuestro compromiso es entregar proyectos que superen las expectativas, con atención al detalle y un enfoque perfeccionista.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{ visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gray-900 p-8 rounded-xl border border-magenta-500 hover:border-cyan-400 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-magenta-500 mb-4">Colaboración</h3>
              <p className="text-lg text-gray-300">Trabajamos mano a mano con nuestros clientes para entender sus necesidades y ofrecer soluciones que realmente funcionen.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tecnología de Vanguardia: Animación al scrollear */}
      <section className="py-20 bg-gradient-to-t from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold text-center mb-12 neon-text hover:text-purple-400 transition-colors duration-500"
          >
            Tecnología de Vanguardia
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-center text-gray-300"
          >
            En Evorix, utilizamos las herramientas y tecnologías más avanzadas del mercado. Desde frameworks modernos como React, Next.js y Node.js hasta inteligencia artificial y machine learning, estamos siempre a la vanguardia de la innovación tecnológica.
          </motion.p>
        </div>
      </section>

      {/* Clientes Exitosos: Efecto Cyberpunk */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold text-center mb-12 neon-text hover:text-cyan-400 transition-colors duration-500"
          >
            Clientes Exitosos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-center text-gray-300"
          >
            Hemos tenido el privilegio de trabajar con diversos clientes que han visto cómo sus negocios crecen gracias a nuestras soluciones digitales. Desde startups hasta empresas consolidadas, cada proyecto es un testimonio de nuestro compromiso con la excelencia.
          </motion.p>
        </div>
      </section>

      {/* Futuro de Evorix: Pregunta interactiva */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold text-center mb-12 neon-text hover:text-purple-400 transition-colors duration-500"
          >
            El Futuro de Evorix
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-center text-gray-300"
          >
            En Evorix, creemos que el futuro está lleno de posibilidades. Estamos explorando nuevas áreas como realidad aumentada, blockchain y automatización inteligente para llevar la innovación digital al siguiente nivel. ¿Qué te gustaría ver en el futuro de Evorix? ¡Tu opinión nos importa!
          </motion.p>
        </div>
      </section>

      <Footer />
    </>
  );
}