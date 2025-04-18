import React from "react";
import { motion } from "framer-motion";
import { FaGlobeAmericas, FaBriefcase, FaUsers } from "react-icons/fa";

const websites = [
  {
    id: 1,
    title: "NYG Accesorios",
    description: "Accesorios para autos",
    image: "/nyg.jpg",
    url: "https://nyg--accesorios.web.app/",
  },
  {
    id: 2,
    title: "Ceramicas San Rafael",
    description: "Casa de ceramicas",
    image: "/cera.jpg",
    url: "https://www.ceramicassanrafael.com/",
  },
  {
    id: 3,
    title: "La diamantina",
    description: "Piedras de afilar",
    image: "/diam.jpg",
    url: "https://www.ladiamantina.com.ar/",
  },
];

export default function ProjectsAndStats() {
  return (
    <section className="bg-black text-white py-20 px-6">
      {/* PROYECTOS */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-cyan-400">
          Algunos de los proyectos realizados
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Sitios web creados para distintas empresas y países.
        </p>
      </div>

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
              <h3 className="text-xl font-semibold text-white">{site.title}</h3>
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

      {/* ESTADÍSTICAS */}
      <div className="mt-24 text-center">
        <h3 className="text-2xl font-semibold mb-10 text-cyan-400">Impacto y Alcance</h3>
        <div className="flex flex-wrap justify-center gap-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#1e1e20] p-6 rounded-xl shadow-md w-64 border border-gray-700"
          >
            <FaBriefcase className="text-cyan-400 text-4xl mb-3 mx-auto" />
            <h4 className="text-xl font-bold">+200 Sitios creados</h4>
            <p className="text-gray-400 mt-2">Empresas, PyMEs y profesionales</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#1e1e20] p-6 rounded-xl shadow-md w-64 border border-gray-700"
          >
            <FaGlobeAmericas className="text-cyan-400 text-4xl mb-3 mx-auto" />
            <h4 className="text-xl font-bold">+10 Países</h4>
            <p className="text-gray-400 mt-2">Presencia internacional</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#1e1e20] p-6 rounded-xl shadow-md w-64 border border-gray-700"
          >
            <FaUsers className="text-cyan-400 text-4xl mb-3 mx-auto" />
            <h4 className="text-xl font-bold">+50 Rubros</h4>
            <p className="text-gray-400 mt-2">Diversidad de industrias</p>
          </motion.div>
        </div>
      </div>


    </section>
  );
}
