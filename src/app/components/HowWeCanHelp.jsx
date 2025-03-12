import { motion } from "framer-motion";

const HowWeCanHelp = () => {
  const services = [
    "Desarrollo Web Avanzado",
    "Estrategias de Marketing Digital",
    "SEO & Posicionamiento",
    "Community Management",
    "E-Commerce & Tiendas Online",
    "Diseño UX/UI Profesional",
  ];

  return (
    <motion.section
      id="como-ayudarte"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-16 px-6 bg-black text-white text-center"
    >
      {/* Título con efecto neón */}
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        ¿Cómo Podemos Impulsar Tu Negocio?
      </h2>
      <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
        Potenciamos marcas con estrategias digitales innovadoras, optimización SEO y desarrollo web 
        de alto impacto. ¡Lleva tu negocio al siguiente nivel con <span className="text-purple-400 font-semibold">Evorix</span>!
      </p>

      {/* Contenedor de servicios con animaciones */}
      <div className="flex flex-wrap justify-center mt-10 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900 p-6 rounded-xl shadow-xl w-64 transform hover:shadow-cyan-500/50 border border-gray-700"
          >
            <h3 className="text-lg font-semibold text-cyan-300">{service}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HowWeCanHelp;
