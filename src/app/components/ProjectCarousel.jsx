import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaProjectDiagram, FaUserTie, FaCertificate, FaSmile } from "react-icons/fa";

const stats = [
  { id: 1, icon: <FaUsers />, value: "15+", label: "Clientes Satisfechos" },
  { id: 2, icon: <FaProjectDiagram />, value: "15+", label: "Proyectos" },
  { id: 3, icon: <FaUserTie />, value: "Equipo", label: "Profesionales en Desarrollo y Marketing" },
  { id: 4, icon: <FaCertificate />, value: "2 años", label: "Experiencia y Certificaciones" },
  { id: 5, icon: <FaSmile />, value: "100%", label: "Clientes Satisfechos" },
];

export default function CyberStats() {
  return (
    <section className="relative flex flex-col items-center py-16 bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500 overflow-hidden">
      <div className="absolute inset-0 blur-3xl opacity-30"></div>
      <motion.img 
        src="./desarrollador.png" 
        alt="Persona" 
        className="absolute bottom-4 right-10 w-48 sm:w-56 md:w-64 lg:w-72 drop-shadow-xl z-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <div className="relative flex flex-wrap justify-center items-center w-full max-w-6xl px-6 py-8 bg-opacity-10 backdrop-blur-lg border border-cyan-400 shadow-lg rounded-xl z-10 mt-10">
        {stats.map((stat) => (
          <motion.div 
            key={stat.id}
            whileHover={{ scale: 1.1 }}
            className="flex items-center text-white text-center mx-4 my-2 p-4 rounded-lg bg-opacity-20"
          >
            <motion.div
              className="text-4xl text-cyan-300 mr-3 drop-shadow-[0_0_15px_cyan]"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              {stat.icon}
            </motion.div>
            <div>
              <h3 className="text-3xl font-bold text-white drop-shadow-lg">{stat.value}</h3>
              <p className="text-lg text-gray-300">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
