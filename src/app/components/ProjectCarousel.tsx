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
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="text-center mb-16 max-w-4xl mx-auto">
      <p className="text-cyan-400 uppercase tracking-wider font-bold text-sm mb-3">
        Proyectos en Acción
      </p>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
        Creamos soluciones <span className="text-emerald-400">reales</span> para <span className="text-pink-400">clientes reales</span>
      </h2>
      <p className="text-gray-300 text-lg">
        Un vistazo a los sitios que ya están generando resultados.
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
      {websites.map((site) => (
        <motion.a
          key={site.id}
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="w-[320px] rounded-xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/10 hover:shadow-cyan-400/40 transition-all overflow-hidden"
        >
          <img
            src={site.image}
            alt={site.title}
            className="w-full h-[200px] object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="p-5">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
              {/* Aquí podrías incluir un ícono tipo FaGlobe */}
              {site.title}
            </h3>
            <p className="text-gray-300 text-sm">{site.description}</p>
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

  <motion.div
    className="mt-24 flex flex-wrap justify-center gap-12 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    viewport={{ once: true }}
  >
    <div className="flex flex-col">
      <span className="text-4xl font-bold text-cyan-400 animate-pulse">+10</span>
      <span className="text-gray-300">Sitios Entregados</span>
    </div>
    <div className="flex flex-col">
      <span className="text-4xl font-bold text-indigo-300 animate-pulse">+8</span>
      <span className="text-gray-300">Clientes Satisfechos</span>
    </div>
    <div className="flex flex-col">
      <span className="text-4xl font-bold text-emerald-300 animate-pulse">3</span>
      <span className="text-gray-300">Países Alcanzados</span>
    </div>
  </motion.div>
</section>

  );
};

export default ProjectsAndStats;
