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
    <section className="relative bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500 rounded-b-[50%]k text-white px-6 py-20 flex flex-col items-center overflow-hidden">
      {/* Fondo con degradado recto hacia abajo que conecta con la sección inferior */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/2 z-0"
      
      />
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="relative z-10 text-5xl md:text-6xl font-extrabold text-center mb-20 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Soluciones Digitales Innovadoras
      </motion.h2>

      <div className="relative z-10 flex flex-col gap-24 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center gap-12"
          >
            {index % 2 === 0 ? (
              <>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="w-[500px] h-[450px] relative overflow-hidden rounded-lg shadow-neon"
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
                      className="object-cover"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="bg-gray-900 p-8 rounded-lg shadow-neon w-full md:w-[400px]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {service.icon}
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="bg-gray-900 p-8 rounded-lg shadow-neon w-full md:w-[400px]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {service.icon}
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="w-[500px] h-[450px] relative overflow-hidden rounded-lg shadow-neon"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    style={{
                      clipPath: service.blob,
                      transform: 'translateX(-10px)',
                      filter: 'brightness(0.8) saturate(1.2)',
                    }}
                  />
                </motion.div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomIntroSection;