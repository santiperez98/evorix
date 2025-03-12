'use client';

import { motion } from 'framer-motion';
import { FaProjectDiagram, FaBullhorn, FaMobileAlt, FaSearch, FaCode, FaCloud } from 'react-icons/fa';

const services = [
  {
    title: 'Gestión de proyectos',
    description: 'Lo ayudamos en la digitalización de su negocio, asesorándolo a lo largo de todo el proceso.',
    icon: <FaProjectDiagram className='text-cyan-300 text-5xl' />, 
  },
  {
    title: 'Social Marketing',
    description: 'Cree y administre campañas en redes sociales de alto rendimiento.',
    icon: <FaBullhorn className='text-cyan-300 text-5xl' />, 
  },
  {
    title: 'Desarrollo de aplicaciones',
    description: 'Desarrollamos aplicaciones en IOS y Android para fidelizar a sus clientes.',
    icon: <FaMobileAlt className='text-cyan-300 text-5xl' />, 
  },
  {
    title: 'Optimización SEO',
    description: 'Obtenga más tráfico en su sitio web con palabras clave y contenido orgánico.',
    icon: <FaSearch className='text-cyan-300 text-5xl' />, 
  },
  {
    title: 'Desarrollo web',
    description: 'Desarrollamos páginas web responsivas y personalizadas.',
    icon: <FaCode className='text-cyan-300 text-5xl' />, 
  },
  {
    title: 'Campañas de Marketing',
    description: 'Creamos y optimizamos campañas en Instagram, Facebook, Google y más.',
    icon: <FaCloud className='text-cyan-300 text-5xl' />, 
  },
];

export default function ServicesPreview() {
  return (
    <section className='bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500'>
      <div className='container mx-auto px-6 py-16'>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center text-4xl font-extrabold text-white'
        >
          Nuestros Servicios
        </motion.h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className='bg-gray-900 bg-opacity-80 p-8 rounded-2xl shadow-lg border border-cyan-500 text-center flex flex-col items-center transition-transform hover:scale-105 hover:border-pink-500'
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className='mb-4'>{service.icon}</div>
              <h3 className='text-cyan-300 text-2xl font-semibold mb-2'>{service.title}</h3>
              <p className='text-gray-300 text-md'>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
