import React from "react";
import { motion } from "framer-motion";

interface Website {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

const WebsiteCard: React.FC<{ site: Website }> = ({ site }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -6 }}
      animate={{ y: [0, -4, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className="w-[320px] rounded-xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/10 hover:shadow-cyan-400/40 transition-all overflow-hidden"
    >
      <img
        src={site.image}
        alt={site.title}
        className="w-full h-[200px] object-cover object-center transition-transform duration-500 hover:scale-105"
      />
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-2xl font-semibold text-white">{site.title}</h3>
        <p className="text-gray-300 text-sm">{site.description}</p>
        <img
          src="https://flagcdn.com/w40/ar.png"
          alt="Bandera Argentina"
          className="w-6 h-4"
        />

        <a
          href={site.url.trim()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-center bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-cyan-300"
        >
          Visitar sitio
        </a>
      </div>
    </motion.div>
  );
};

export default WebsiteCard;
