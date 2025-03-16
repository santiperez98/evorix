import { motion } from "framer-motion";

const HowWeCanHelp = () => {
  const services = [
    { 
      title: "Desarrollo Web Avanzado", 
      img: "/desaweb.jpg", 
      color: "from-cyan-500 to-blue-500"
    },
    { 
      title: "Estrategias de Marketing Digital", 
      img: "/marke.jpg", 
      color: "from-purple-500 to-pink-500"
    },
    { 
      title: "SEO & Posicionamiento", 
      img: "/seo.jpg", 
      color: "from-green-500 to-teal-500"
    },
    { 
      title: "Community Management", 
      img: "/cm.png", 
      color: "from-yellow-500 to-orange-500"
    },
    { 
      title: "E-Commerce & Tiendas Online", 
      img: "/tienda.jpg", 
      color: "from-red-500 to-pink-500"
    },
    { 
      title: "Diseño UX/UI Profesional", 
      img: "/uxui.jpg", 
      color: "from-indigo-500 to-purple-500"
    },
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
        de alto impacto. ¡Lleva tu negocio al siguiente nivel con{" "}
        <span className="text-purple-400 font-semibold">Evorix</span>!
      </p>

      {/* Contenedor de servicios con animaciones */}
      <div className="flex flex-wrap justify-center mt-10 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative w-64 h-80 rounded-xl shadow-xl overflow-hidden bg-gray-900 border border-gray-700 transform hover:shadow-${service.color}`}
          >
            {/* Imagen con efecto de escala */}
            <motion.img 
              src={service.img} 
              alt={service.title}
              className="w-full h-40 object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Contenedor de texto */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b opacity-0 hover:opacity-90 transition-opacity duration-500 flex flex-col items-center justify-end p-6"
              style={{ backgroundImage: `linear-gradient(to top, ${service.color})` }}
            >
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HowWeCanHelp;
