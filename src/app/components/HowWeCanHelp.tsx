'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Service {
  title: string;
  img: string;
  color: string;
}

const HowWeCanHelp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const services: Service[] = [
    { title: 'Desarrollo Web Avanzado', img: '/desaweb.webp', color: 'from-cyan-500 to-blue-500' },
    { title: 'Estrategias de Marketing Digital', img: '/marke.webp', color: 'from-purple-500 to-pink-500' },
    { title: 'SEO & Posicionamiento', img: '/seo.webp', color: 'from-green-500 to-teal-500' },
    { title: 'Community Management', img: '/cm.webp', color: 'from-yellow-500 to-orange-500' },
    { title: 'E-Commerce & Tiendas Online', img: '/tienda.webp', color: 'from-red-500 to-pink-500' },
    { title: 'Diseño UX/UI Profesional', img: '/uxui.webp', color: 'from-indigo-500 to-purple-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <motion.section
      id="como-ayudarte"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="relative z-10 py-20 px-6 text-white text-center"
    >
      <div className="relative z-10 max-w-7xl mx-auto p-6 rounded-3xl border-4 border-transparent bg-black bg-clip-padding shadow-lg shadow-pink-500/30 ring-4 ring-cyan-400/40 hover:ring-pink-500/50 transition-all duration-700 ease-in-out">
        <motion.h2
          className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Servicios para transformar tu negocio
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Diseñamos estrategias a medida que convierten visitas en clientes y clientes en fans. Con{' '}
          <span className="text-pink-400 font-semibold">Evorix</span>, tu marca no solo crece, se posiciona.
        </motion.p>

        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-64 h-80 rounded-xl bg-gray-900 overflow-hidden border-2 border-pink-400/40 hover:border-cyan-400/60 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              <motion.img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className={`absolute inset-0 opacity-0 hover:opacity-90 transition-opacity duration-500 flex flex-col items-center justify-end p-6 bg-gradient-to-b ${service.color}`}
              >
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowWeCanHelp;
