'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import {
  FaProjectDiagram,
  FaBullhorn,
  FaMobileAlt,
  FaSearch,
  FaCode,
  FaShoppingCart,
} from 'react-icons/fa';

import img1 from '../../../public/gestion.jpg';
import img2 from '../../../public/marketing.jpg';
import img3 from '../../../public/movil.jpg';
import img4 from '../../../public/seoo.jpg';
import img5 from '../../../public/desarrollo.jpg';
import img6 from '../../../public/ecom.jpg';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: StaticImageData;
  blob: string;
  fullExplanation: string;
}

const services: Service[] = [
  {
    title: 'Gestión de Proyectos',
    description:
      'Optimizamos la gestión de tu negocio con herramientas digitales avanzadas.',
    icon: <FaProjectDiagram className="text-cyan-400 text-5xl" />,
    image: img1,
    blob: 'path(...)',
    fullExplanation:
      'Este servicio consiste en implementar metodologías ágiles y herramientas como Trello, Jira o Monday para organizar equipos, tareas y flujos de trabajo. En una empresa, esto se traduce en mayor productividad, mejor visibilidad del estado de los proyectos y cumplimiento de plazos.',
  },
  // ... los demás servicios con su fullExplanation respectiva
];

const CustomIntroSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="relative bg-gradient-to-br from-cyan-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
      {/* Animaciones de fondo */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-6xl font-extrabold text-center mb-32 bg-gradient-to-r from-pink-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg"
        >
          Soluciones <span className="text-emerald-400">Digitales</span> <span className="text-pink-400">Futuristas</span>
        </motion.h2>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}
            >
              <motion.div
                whileHover={{ scale: 1.04, rotate: index % 2 === 0 ? -1 : 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                className="w-full md:w-1/2 lg:w-5/12 h-[350px] md:h-[450px] relative overflow-hidden rounded-3xl shadow-[0_0_25px_#00ffd0]"
              >
                <div
                  className="absolute inset-0"
                  style={{ clipPath: service.blob, transform: 'translateX(-10px)' }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full md:w-1/2 lg:w-5/12 bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/20 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  {service.icon}
                  <h3 className="text-3xl font-bold text-gradient bg-gradient-to-r from-emerald-300 via-white to-pink-300 bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedService(service)}
                  className="mt-4 bg-gradient-to-r from-emerald-500 via-cyan-400 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/50"
                >
                  Saber más →
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white text-black p-8 max-w-2xl w-full rounded-2xl shadow-2xl"
              >
                <h2 className="text-2xl font-bold mb-4 text-emerald-600">
                  {selectedService.title}
                </h2>
                <p className="text-gray-800 text-lg leading-relaxed">
                  {selectedService.fullExplanation}
                </p>
                <div className="text-right mt-6">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-emerald-500 hover:underline"
                  >
                    Cerrar
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CustomIntroSection;