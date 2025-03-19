'use client';

import { motion } from 'framer-motion';
import { FaProjectDiagram, FaBullhorn, FaMobileAlt, FaSearch, FaCode, FaShoppingCart } from 'react-icons/fa';

const services = [
  {
    title: 'Gestión de Proyectos',
    description: 'Digitalizamos tu negocio y te guiamos en cada paso del proceso.',
    icon: <FaProjectDiagram className='text-blue-400 text-5xl' />, 
  },
  {
    title: 'Estrategias de Marketing',
    description: 'Creamos campañas de alto impacto en redes sociales y Google Ads.',
    icon: <FaBullhorn className='text-pink-400 text-5xl' />, 
  },
  {
    title: 'Aplicaciones Móviles',
    description: 'Desarrollamos apps iOS y Android para potenciar tu negocio.',
    icon: <FaMobileAlt className='text-green-400 text-5xl' />, 
  },
  {
    title: 'SEO & Posicionamiento',
    description: 'Aumenta tu visibilidad online con optimización de motores de búsqueda.',
    icon: <FaSearch className='text-yellow-400 text-5xl' />, 
  },
  {
    title: 'Desarrollo Web',
    description: 'Creamos sitios web responsivos y optimizados para conversión.',
    icon: <FaCode className='text-cyan-400 text-5xl' />, 
  },
  {
    title: 'E-Commerce Avanzado',
    description: 'Desarrollamos tiendas online con UX/UI optimizado para ventas.',
    icon: <FaShoppingCart className='text-orange-400 text-5xl' />, 
  },
];

export default function ServicesPreview() {
  return (
    <section className='bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500 py-16 px-6'>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent'
      >
        Soluciones Digitales Personalizadas
      </motion.h2>
      
      <motion.p 
        className='mt-4 text-lg text-gray-400 text-center max-w-2xl mx-auto'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Desde estrategias digitales hasta desarrollo web, potenciamos tu marca con tecnología e innovación.
      </motion.p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className='bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700 text-center flex flex-col items-center transition-transform hover:scale-105 hover:border-cyan-400'
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className='mb-4'>{service.icon}</div>
            <h3 className='text-xl font-semibold text-white mb-2'>{service.title}</h3>
            <p className='text-gray-300 text-md'>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}