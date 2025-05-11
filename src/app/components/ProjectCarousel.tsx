import React from "react";
import { motion } from "framer-motion";

// Tipado para cada sitio web
interface Website {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

const websites: Website[] = [
  {
    id: 1,
    title: "NYG Accesorios",
    description: "Accesorios para autos",
    image: "/nyg.jpg",
    url: "https://nyg--accesorios.web.app/",
  },
  {
    id: 2,
    title: "Cerámicas San Rafael",
    description: "Casa de cerámicas",
    image: "/cera.jpg",
    url: "https://www.ceramicassanrafael.com/",
  },
  {
    id: 3,
    title: "La Diamantina",
    description: "Piedras de afilar",
    image: "/diam.jpg",
    url: "https://www.ladiamantina.com.ar/",
  },
];

const ProjectsAndStats: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      {/* Encabezado y proyectos con animación */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-indigo-400 uppercase tracking-widest font-semibold text-sm mb-2">
            Proyectos Reales
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Hemos trabajado con marcas <span className="text-indigo-400">reales</span> <br />
            que confiaron en <span className="text-cyan-400">nuestra visión</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Sitios web diseñados y desarrollados para empresas de diferentes sectores y países.
          </p>
        </div>

        {/* Proyectos */}
        <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
          {websites.map((site) => (
            <motion.a
              key={site.id}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="w-[320px] bg-[#1a1a1d] rounded-2xl overflow-hidden border border-gray-700 shadow-md hover:shadow-indigo-500/30 transition-all"
            >
              <img
                src={site.image}
                alt={site.title}
                className="w-full h-[200px] object-cover object-center transition-transform duration-300"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">
                  {site.title}
                </h3>
                <p className="text-gray-400">{site.description}</p>
                <img
                  src="https://flagcdn.com/w40/ar.png"
                  alt="Bandera Argentina"
                  className="w-6 h-4 mt-3"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Estadísticas */}
      <motion.div
        className="mt-24 flex flex-wrap justify-center gap-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-cyan-400">+10</span>
          <span className="text-gray-400">Sitios Entregados</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-indigo-400">+8</span>
          <span className="text-gray-400">Clientes Satisfechos</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-emerald-400">3</span>
          <span className="text-gray-400">Países Alcanzados</span>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsAndStats;
