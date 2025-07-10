import React from "react";
import { motion } from "framer-motion";
import WebsiteCard from "./WebsiterCard";

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
    image: "/nyg.webp",
    url: "https://nyg--accesorios.web.app/",
  },
  {
    id: 2,
    title: "Cerámicas San Rafael",
    description: "Casa de cerámicas",
    image: "/ceraweb.webp",
    url: "https://www.ceramicassanrafael.com/",
  },
  {
    id: 3,
    title: "La Diamantina",
    description: "Piedras de afilar",
    image: "/diam.webp",
    url: "https://www.ladiamantina.com.ar/",
  },
];

const ProjectsAndStats: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <motion.p
          className="text-cyan-400 uppercase tracking-wider font-bold text-sm mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Resultados que hablan
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-emerald-400">Historias</span> digitales que{" "}
          <span className="text-pink-400">construyen confianza</span>
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Descubrí proyectos que ya están generando resultados y fortaleciendo negocios.
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
        {websites.map((site, idx) => (
          <motion.div
            key={site.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="will-change-transform"
          >
            <WebsiteCard site={site} />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-24 flex flex-wrap justify-center gap-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-cyan-400 animate-pulse">+10</span>
          <span className="text-gray-300">Sitios Entregados</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-indigo-300 animate-pulse">+8</span>
          <span className="text-gray-300">Clientes Felices</span>
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
