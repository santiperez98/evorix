'use client';
import React, { useState, useEffect } from 'react';
import { FaCogs, FaGlobe, FaChartLine, FaBullhorn, FaUsers, FaStar, FaRegStar } from 'react-icons/fa';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type Service = {
  name: string;
  image: string;
  text: string;
  features: string[];
  extraInfo: string;
  persuasion: string;
  icon: React.ReactNode;
  rating: number;
};

const services: Service[] = [
  {
    name: 'Gestión de Proyecto',
    image: '/gestion.webp',
    text: 'Planificamos, ejecutamos y controlamos cada etapa para que tu idea se transforme en resultados.',
    features: ['Organización efectiva', 'Gestión de tiempo', 'Entregables claros'],
    extraInfo: '30+ proyectos finalizados con éxito.',
    persuasion: '¿Querés que tu proyecto no se desvíe? Nosotros lo guiamos.',
    icon: <FaCogs size={24} />,
    rating: 4,
  },
  {
    name: 'Desarrollo Web',
    image: '/desarrollo.webp',
    text: 'Sitios rápidos, intuitivos y modernos que cautivan desde el primer clic.',
    features: ['Diseño responsive', 'Código limpio', 'Rendimiento elevado'],
    extraInfo: '98% de nuestros clientes aumentaron conversión.',
    persuasion: 'Tu web es tu carta de presentación. Hacela inolvidable.',
    icon: <FaGlobe size={24} />,
    rating: 5,
  },
  {
    name: 'SEO',
    image: '/seo2.webp',
    text: 'Te posicionamos en Google para que tus clientes te encuentren primero.',
    features: ['Palabras clave', 'SEO técnico', 'Contenido optimizado'],
    extraInfo: '300% más visitas mensuales en promedio.',
    persuasion: 'Estar primero en Google ya no es un sueño.',
    icon: <FaChartLine size={24} />,
    rating: 4,
  },
  {
    name: 'Marketing',
    image: '/marketing.webp',
    text: 'Campañas que conectan y venden.',
    features: ['Publicidad online', 'Email marketing', 'Análisis de campañas'],
    extraInfo: 'Retorno promedio x4 en campañas.',
    persuasion: 'Un buen producto necesita visibilidad. Te la damos.',
    icon: <FaBullhorn size={24} />,
    rating: 4,
  },
  {
    name: 'Community Manager',
    image: '/cm2.webp',
    text: 'Gestionamos tus redes con contenido estratégico y conexión real.',
    features: ['Contenido atractivo', 'Interacción activa', 'Crecimiento orgánico'],
    extraInfo: '150% más seguidores en 3 meses.',
    persuasion: 'Crea comunidad, no solo números.',
    icon: <FaUsers size={24} />,
    rating: 5,
  },
];

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const ServicesCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % services.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => setCurrent(index);

  const renderStars = (rating: number) => (
    <div className="flex gap-1 mt-2 text-yellow-400">
      {Array.from({ length: 5 }, (_, i) =>
        i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 p-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Algunos de nuestros servicios destacados
        </h2>
        <p className="text-gray-100 mt-2 max-w-xl mx-auto">
          Cada proyecto es único. Adaptamos nuestras soluciones para que impacten en lo que importa: tus resultados.
        </p>
      </div>
      <div className="w-full max-w-6xl bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid md:grid-cols-2 gap-6 items-center p-6 md:p-10"
          >
            <div className="w-full">
              <Image
                src={services[current].image}
                alt={services[current].name}
                width={600}
                height={400}
                className="w-full h-auto rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="text-gray-800">
              <h2 className="text-xl md:text-2xl font-extrabold flex items-center gap-2 mb-2">
                {services[current].icon}
                {services[current].name}
              </h2>
              <p className="text-sm md:text-base leading-relaxed">{services[current].text}</p>
              <ul className="list-disc pl-5 mt-3 text-sm space-y-1">
                {services[current].features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <p className="mt-3 italic text-gray-600 text-sm">{services[current].extraInfo}</p>
              <p className="mt-2 text-sm md:text-base font-medium text-blue-800">{services[current].persuasion}</p>
              {renderStars(services[current].rating)}
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center gap-3 pb-6">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                i === current ? 'bg-blue-700 scale-110' : 'bg-gray-300'
              }`}
              aria-label={`Ir al servicio ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
