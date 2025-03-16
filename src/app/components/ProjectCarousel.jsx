import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaProjectDiagram, FaUserTie, FaCertificate, FaSmile } from "react-icons/fa";

const stats = [
  { id: 1, icon: <FaUsers />, value: "15+", label: "Clientes Satisfechos" },
  { id: 2, icon: <FaProjectDiagram />, value: "15+", label: "Proyectos" },
  { id: 4, icon: <FaUserTie />, value: "Equipo", label: "Profesionales en Desarrollo y Marketing" },
  { id: 5, icon: <FaCertificate />, value: "2 años", label: "Experiencia y Certificaciones" },
  { id: 6, icon: <FaSmile />, value: "100%", label: "Clientes Satisfechos" },
];

export default function CyberStats() {
  return (
    <section className="relative flex justify-center items-center h-auto py-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500 overflow-hidden">
      <div className="absolute inset-0 blur-3xl opacity-30"></div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl px-6 py-8 bg-opacity-10 backdrop-blur-lg border border-cyan-400 shadow-lg rounded-xl"
      >
        {stats.map((stat) => (
          <motion.div 
            key={stat.id}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-white text-center p-6 rounded-lg bg-opacity-20"
          >
            <motion.div
              className="text-5xl text-cyan-300 mb-2 drop-shadow-[0_0_15px_cyan]"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              {stat.icon}
            </motion.div>
            <h3 className="text-4xl font-bold text-white drop-shadow-lg">{stat.value}</h3>
            <p className="text-lg text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
