// src/components/SobreNosotros.tsx

import React from "react";
import { motion } from "framer-motion";

const SobreNosotros: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-cyan-400 uppercase tracking-wider font-bold text-sm mb-3">
          Nuestra Misión
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          <span className="text-emerald-400">Desarrollamos</span> ideas que{" "}
          <span className="text-pink-400">transforman</span> negocios
        </h2>
        <p className="text-gray-300 text-lg mb-12">
          En nuestro equipo combinamos diseño, tecnología y pasión para crear experiencias digitales únicas. Nos enfocamos en ayudar a emprendedores y empresas a crecer en el entorno digital.
        </p>
      </motion.div>

      <motion.div
        className="mt-16 flex flex-wrap justify-center gap-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-cyan-400 animate-pulse">+5 Años</span>
          <span className="text-gray-300">De experiencia</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-indigo-300 animate-pulse">Full Stack</span>
          <span className="text-gray-300">Desarrollo integral</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-emerald-300 animate-pulse">Pasión</span>
          <span className="text-gray-300">Por la innovación</span>
        </div>
      </motion.div>
    </section>
  );
};

export default SobreNosotros;
