'use client';

import { motion } from 'framer-motion';
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
}

const services: Service[] = [
  {
    title: 'Gestión de Proyectos',
    description:
      'Optimizamos la gestión de tu negocio con herramientas digitales avanzadas, asegurando eficiencia en cada proceso.',
    icon: <FaProjectDiagram className="text-cyan-400 text-5xl" />,
    image: img1,
    blob:
      'path("M433,311Q379,372,311,397Q243,422,184,388Q125,354,92,297Q59,240,99,186Q139,132,202,93Q265,54,321,92Q377,130,429,185Q481,240,433,311Z")',
  },
  {
    title: 'Estrategias de Marketing',
    description:
      'Diseñamos estrategias efectivas en redes sociales, publicidad pagada y branding para maximizar tu alcance y engagement.',
    icon: <FaBullhorn className="text-pink-400 text-5xl" />,
    image: img2,
    blob:
      'path("M418,310Q368,380,296,398Q224,416,157,377Q90,338,86,269Q82,200,99,135Q144,70,219,79Q294,88,365,120Q436,152,439,226Q442,300,418,310Z")',
  },
  {
    title: 'Aplicaciones Móviles',
    description:
      'Creamos apps para iOS y Android con UX/UI optimizado, garantizando rendimiento y compatibilidad con múltiples dispositivos.',
    icon: <FaMobileAlt className="text-green-400 text-5xl" />,
    image: img3,
    blob:
      'path("M423,293Q395,346,344,392Q293,438,226,436Q159,434,112,387Q65,340,73,270Q81,200,110,138Q139,76,206,72Q273,68,329,104Q385,140,418,195Q451,250,423,293Z")',
  },
  {
    title: 'SEO & Posicionamiento',
    description:
      'Mejoramos tu visibilidad en Google con técnicas avanzadas de SEO, posicionando tu marca por encima de la competencia.',
    icon: <FaSearch className="text-yellow-400 text-5xl" />,
    image: img4,
    blob:
      'path("M415,314Q382,388,311,409Q240,430,177,400Q114,370,92,306Q70,242,108,189Q146,136,205,104Q264,72,322,99Q380,126,410,188Q440,250,415,314Z")',
  },
  {
    title: 'Desarrollo Web',
    description:
      'Desarrollamos páginas web personalizadas, optimizadas para velocidad, seguridad y conversión de clientes.',
    icon: <FaCode className="text-purple-400 text-5xl" />,
    image: img5,
    blob:
      'path("M418,294Q390,348,340,386Q290,424,231,424Q172,424,119,391Q66,358,77,288Q88,218,120,164Q152,110,214,91Q276,58,325,107Q374,142,408,196Q442,250,418,294Z")',
  },
  {
    title: 'E-Commerce Avanzado',
    description:
      'Creamos tiendas en línea intuitivas y seguras, integradas con múltiples métodos de pago y estrategias de venta.',
    icon: <FaShoppingCart className="text-orange-400 text-5xl" />,
    image: img6,
    blob:
      'path("M420,307Q390,364,340,396Q290,428,229,420Q168,412,113,371Q58,330,80,267Q102,204,124,148Q146,92,208,75Q270,58,317,97Q364,136,399,188Q434,240,420,307Z")',
  },
];

const CustomIntroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-cyan-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
      {/* Animaciones de fondo */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-32 bg-gradient-to-r from-emerald-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent"
        >
          Soluciones Digitales Futuristas
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
              {/* Imagen con forma personalizada */}
              <motion.div
                whileHover={{ scale: 1.04, rotate: index % 2 === 0 ? -1 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="w-full md:w-1/2 lg:w-5/12 h-[350px] md:h-[450px] relative overflow-hidden rounded-3xl shadow-[0_0_25px_#00ffd0] transition-all duration-300"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath: service.blob,
                    transform: 'translateX(-10px)',
                    filter: 'brightness(0.8) saturate(1.2)',
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </motion.div>

              {/* Contenido de la tarjeta */}
              <motion.div
                initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full md:w-1/2 lg:w-5/12 bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-center gap-4 mb-6">
                  {service.icon}
                  <h3 className="text-2xl md:text-3xl font-bold text-emerald-400">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-gradient-to-r from-emerald-500 via-cyan-400 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all hover:shadow-cyan-500/50"
                >
                  Saber más →
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomIntroSection;
