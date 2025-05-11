'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
  return (
    <section
      className="bg-black text-white py-20 md:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0a0a0a, #000)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40 z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 border-4 border-cyan-400 rounded-xl animate-pulse pointer-events-none" />
            <Image
              src="/NYG.jpg"
              alt="Equipo trabajando"
              className="w-full h-auto object-cover rounded-xl"
              style={{ aspectRatio: '16 / 9' }}
              width={600}
              height={400}
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-cyan-400 mb-4 tracking-wide">
              Impulsando tu Éxito en el Mundo Digital
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg">
              Somos una agencia apasionada por transformar ideas en resultados tangibles.
              Brindamos soluciones integrales para tu presencia online.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 leading-loose text-sm md:text-base">
              <li>Desarrollo Web a medida y optimizado</li>
              <li>Estrategias SEO para un mayor alcance orgánico</li>
              <li>Marketing Digital efectivo y basado en datos</li>
              <li>Gestión profesional de Comunidades Online</li>
              <li>Branding creativo y coherente con tu identidad</li>
            </ul>
            <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 hover:shadow-fuchsia-500/50">
              Conoce más sobre nuestros servicios
            </button>
          </motion.div>
        </div>

        {/* Nuestro Equipo */}
        <div className="mt-24">
          <h2
            className="text-3xl font-semibold text-center mb-12"
            style={{ textShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF' }}
          >
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="rounded-xl p-6 text-center bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-cyan-500/30 transition"
              >
                <div className="relative w-32 h-48 overflow-hidden mx-auto mb-4 rounded-lg border border-cyan-400">
                  <Image
                    src={`/member${i}.jpg`} // Reemplaza con las imágenes reales
                    alt={`Miembro ${i}`}
                    width={200}
                    height={300}
                    className="object-cover"
                    style={{ objectPosition: 'top' }}
                  />
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  {`Nombre del Miembro ${i}`}
                </h4>
                <p className="text-sm text-gray-300">
                  {i === 1 ? 'Desarrollo Web' : i === 2 ? 'Marketing Digital' : 'SEO y Contenido'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
