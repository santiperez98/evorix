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
      {/* Encabezado de sección */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-cyan-400">
          Algunos de los proyectos realizados
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Sitios web creados para distintas empresas y países.
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
            className="w-[320px] bg-[#1a1a1d] rounded-2xl overflow-hidden border border-gray-700 shadow-md hover:shadow-cyan-500/30 transition-all"
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
    </section>
  );
};

export default ProjectsAndStats;
