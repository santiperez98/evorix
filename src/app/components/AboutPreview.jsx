import { motion } from "framer-motion";
import { useState } from "react";

const AboutPreview = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.section 
      id="sobre-nosotros"
      className="py-20 px-6 bg-black text-white flex flex-col md:flex-row items-center justify-center text-center md:text-left relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Fondo animado */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Contenido de texto */}
      <motion.div
        className="max-w-2xl relative z-10 px-4 md:px-12"
        initial={{ opacity: 0, x: -50 }}
        animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Innovamos, Transformamos, Conectamos 🚀
        </h2>
        <motion.div 
          className="w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mt-2 mx-auto md:mx-0"
          initial={{ scaleX: 0 }}
          animate={hovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8 }}
        />

        <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
          En <span className="text-cyan-400 font-semibold">Evorix</span>, fusionamos creatividad y tecnología 
          para llevar tu negocio al siguiente nivel. Nos especializamos en{" "}
          <span className="text-purple-400 font-semibold"> 
            desarrollo web, branding, marketing digital y optimización SEO
          </span>, creando soluciones digitales que generan impacto.
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-300 leading-relaxed">
          Nuestra misión es hacer que tu marca brille en el mundo digital, con{" "}
          <span className="text-pink-400 font-semibold">diseños futuristas</span> 
          y estrategias inteligentes que potencien tu presencia en línea.
        </p>

        {/* Botón CTA */}
        <motion.a 
          href="#contacto"
          className="mt-6 inline-block px-5 md:px-6 py-3 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.1 }}
        >
          Descubre cómo podemos ayudarte 🚀
        </motion.a>
      </motion.div>

      {/* Imagen futurista */}
      <motion.img 
        src="/hombre.png"  
        alt="Profesional futurista interactuando con tecnología"
        className="w-3/5 md:w-2/5 lg:w-1/3 rounded-xl shadow-lg mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8 }}
      />
    </motion.section>
  );
};

export default AboutPreview;
