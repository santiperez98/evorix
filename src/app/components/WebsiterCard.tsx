// src/components/WebsiteCard.tsx

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
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[320px] no-underline"
    >
      <motion.div
        whileHover={{ scale: 1.08, y: -8 }}
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="rounded-xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/10 hover:shadow-cyan-400/40 transition-all overflow-hidden"
      >
        <img
          src={site.image}
          alt={site.title}
          className="w-full h-[200px] object-cover object-center transition-transform duration-500 hover:scale-105"
        />
        <div className="p-5">
          <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
            {site.title}
          </h3>
          <p className="text-gray-300 text-sm">{site.description}</p>
          <img
            src="https://flagcdn.com/w40/ar.png "
            alt="Bandera Argentina"
            className="w-6 h-4 mt-3"
          />
        </div>
      </motion.div>
    </a>
  );
};

export default WebsiteCard;