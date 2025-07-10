import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const AboutPreview: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      };
    }
    return undefined;
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      id="sobre-nosotros"
      className="py-20 px-6 bg-black text-white flex flex-col md:flex-row items-center justify-center text-center md:text-left relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black z-0" />

      <motion.div
        className="max-w-2xl relative z-10 px-4 md:px-12"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Crecemos juntos 🚀
        </h2>
        <motion.div
          className="w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mt-2 mx-auto md:mx-0"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
        />

        <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
          En <span className="text-cyan-400 font-semibold">Evorix</span>, combinamos estrategia, creatividad y desarrollo tecnológico para llevar tu marca a nuevos horizontes. Creamos productos digitales que impactan y resultados que perduran.
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-300 leading-relaxed">
          Nuestro equipo te acompaña de principio a fin, con diseños memorables y estrategias que maximizan tu alcance y conversión.
        </p>

        <motion.a
          href="/contacto"
          className="mt-6 inline-block px-5 md:px-6 py-3 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.1 }}
        >
          Empecemos tu proyecto juntos!
        </motion.a>

        {/* Bloque de estadísticas */}
        <div className="mt-10 flex justify-center md:justify-start gap-6 flex-wrap">
          {[
            { value: "+50", label: "proyectos completados" },
            { value: "+20", label: "clientes recurrentes" },
            { value: "98%", label: "satisfacción garantizada" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center bg-gradient-to-br from-cyan-600 to-purple-700 p-4 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <span className="text-3xl font-bold">{stat.value}</span>
              <span className="text-sm text-gray-200">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.img
        src="/hombre.webp"
        alt="Consultor digital Evorix"
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
