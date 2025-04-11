'use client';

import { motion } from 'framer-motion';
import { FaProjectDiagram, FaBullhorn, FaMobileAlt, FaSearch, FaCode, FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';
import img1 from '../../../public/gestion.jpg';
import img2 from '../../../public/marketing.jpg';
import img3 from '../../../public/movil.jpg';
import img4 from '../../../public/seoo.jpg';
import img5 from '../../../public/desarrollo.jpg';
import img6 from '../../../public/ecom.jpg';

const services = [
  {
    title: 'Gestión de Proyectos',
    description: 'Optimizamos la gestión de tu negocio con herramientas digitales avanzadas, asegurando eficiencia en cada proceso.',
    icon: <FaProjectDiagram className='text-blue-400 text-5xl' />,
    image: img1,
  },
  {
    title: 'Estrategias de Marketing',
    description: 'Diseñamos estrategias efectivas en redes sociales, publicidad pagada y branding para maximizar tu alcance y engagement.',
    icon: <FaBullhorn className='text-pink-400 text-5xl' />,
    image: img2,
  },
  {
    title: 'Aplicaciones Móviles',
    description: 'Creamos apps para iOS y Android con UX/UI optimizado, garantizando rendimiento y compatibilidad con múltiples dispositivos.',
    icon: <FaMobileAlt className='text-green-400 text-5xl' />,
    image: img3,
  },
  {
    title: 'SEO & Posicionamiento',
    description: 'Mejoramos tu visibilidad en Google con técnicas avanzadas de SEO, posicionando tu marca por encima de la competencia.',
    icon: <FaSearch className='text-yellow-400 text-5xl' />,
    image: img4,
  },
  {
    title: 'Desarrollo Web',
    description: 'Desarrollamos páginas web personalizadas, optimizadas para velocidad, seguridad y conversión de clientes.',
    icon: <FaCode className='text-cyan-400 text-5xl' />,
    image: img5,
  },
  {
    title: 'E-Commerce Avanzado',
    description: 'Creamos tiendas en línea intuitivas y seguras, integradas con múltiples métodos de pago y estrategias de venta.',
    icon: <FaShoppingCart className='text-orange-400 text-5xl' />,
    image: img6,
  },
];

export default function ServicesTimeline() {
  return (
    <section
      className='relative py-24 px-6 flex flex-col items-center bg-fixed bg-center bg-cover text-white'
      style={{ backgroundImage: "url('/nasa.jpg')" }}
    >
      {/* Capa oscura encima del fondo */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Contenido principal */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-4xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent z-10'
      >
        Soluciones Digitales Innovadoras
      </motion.h2>

      <div className='relative mt-12 w-full max-w-3xl z-10'>
        {/* Línea de tiempo (solo en desktop) */}
        <div className='absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full z-0 hidden md:block'></div>

        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col items-center md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Tarjeta de Servicio */}
            <div className='relative z-10 w-full md:w-1/2 p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'>
              <div className='flex items-center gap-4'>
                {service.icon}
                <h3 className='text-xl font-semibold text-white'>{service.title}</h3>
              </div>
              <p className='text-gray-300 mt-2'>{service.description}</p>
            </div>

            {/* Imagen */}
            <div className='relative z-10 w-full md:w-1/2 flex justify-center mt-4 md:mt-0'>
              <Image 
                src={service.image} 
                alt={service.title} 
                className='rounded-lg shadow-md object-cover'
                width={350} 
                height={200} 
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
