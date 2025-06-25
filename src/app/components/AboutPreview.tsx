import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const AboutPreview: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Detecta cuando el componente entra en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      id="sobre-nosotros"
      className="py-20 px-6 bg-black text-white flex flex-col md:flex-row items-center justify-center text-center md:text-left relative overflow-hidden"
    >
      {/* Fondo sólido negro */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Contenido de texto */}
      <motion.div
        className="max-w-2xl relative z-10 px-4 md:px-12"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Innovamos, Transformamos, Conectamos 🚀
        </h2>
        <motion.div
          className="w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mt-2 mx-auto md:mx-0"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
        />

        <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
          En <span className="text-cyan-400 font-semibold">Evorix</span>, conectamos estrategia y tecnología
          para transformar tu presencia digital. Nos especializamos en
          <span className="text-purple-400 font-semibold">
            desarrollo web impactante, branding memorable, marketing enfocado y posicionamiento SEO efectivo
          </span> para empresas con visión de futuro.
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-300 leading-relaxed">
          Nuestra meta es impulsar marcas únicas en un entorno competitivo,
          con <span className="text-pink-400 font-semibold">estética innovadora</span> y planificación digital
          centrada en resultados concretos.
        </p>

        {/* Botón CTA */}
        <motion.a
          href="/contacto"
          className="mt-6 inline-block px-5 md:px-6 py-3 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.1 }}
        >
          Descubre cómo podemos ayudarte 🚀
        </motion.a>
      </motion.div>

      {/* Imagen futurista */}
      <motion.img
        src="/hombre.webp"
        alt="Profesional futurista interactuando con tecnología"
        className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 rounded-xl shadow-lg mt-10 md:mt-0 relative z-10"
        style={{
          WebkitMaskImage: 'linear-gradient(black 80%, transparent)',
          maskImage: 'linear-gradient(black 80%, transparent)',
        }}
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      />
    </motion.section>
  );
};

export default AboutPreview;