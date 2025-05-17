'use client';

import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaShoppingCart,
  FaWhatsapp,
} from 'react-icons/fa';
import {
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiVite,
  SiBootstrap,
  SiPostgresql,
  SiGoogleanalytics,
} from 'react-icons/si';
import { MdWeb, MdDesignServices } from 'react-icons/md';
import { GiCompass, GiMegaphone } from 'react-icons/gi';
import { BsGraphUp } from 'react-icons/bs';
import type { IconType } from 'react-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';


interface Service {
  Icon: IconType;
  title: string;
  details: string[];
}

const Servicios: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init();
    }
  }, []);

  const neonGlow =
    'shadow-[0_0_15px_rgba(0,255,255,0.8)] hover:shadow-[0_0_30px_rgba(255,0,255,0.8)] transition-all duration-300';

  const techIcons: IconType[] = [
    FaJs,
    FaHtml5,
    FaCss3Alt,
    SiTailwindcss,
    FaReact,
    SiRedux,
    FaNodeJs,
    FaDatabase,
    SiPostgresql,
    SiNextdotjs,
    SiVite,
    SiBootstrap,
  ];

  const services: Service[] = [
    {
      Icon: MdWeb,
      title: 'Landing Page',
      details: [
        'Diseño responsivo y moderno',
        'Optimización para SEO',
        'Entrega en 5 días',
        'Formulario de contacto integrado',
        'Integración con Google Analytics',
      ],
    },
    {
      Icon: FaShoppingCart,
      title: 'Ecommerce',
      details: [
        'Panel para agregar y gestionar productos',
        'Integración con métodos de pago',
        'Hosting premium gratis por 1 año',
        '4 secciones personalizadas',
        'Cuentas de correo corporativas',
      ],
    },
    {
      Icon: GiCompass,
      title: 'Páginas de Administración',
      details: [
        'Panel de control intuitivo',
        'Gestión de usuarios y roles',
        'Integración con bases de datos',
        'Automatización de tareas',
      ],
    },
    {
      Icon: SiGoogleanalytics,
      title: 'SEO & Analytics',
      details: [
        'Optimización para motores de búsqueda',
        'Análisis de tráfico web',
        'Auditoría de rendimiento',
        'Estrategia de contenido SEO',
        'Indexación en Google',
      ],
    },
    {
      Icon: GiMegaphone,
      title: 'Marketing Digital',
      details: [
        'Publicidad en redes sociales',
        'Campañas de Google Ads',
        'Email Marketing',
        'Estrategias de contenido',
        'Análisis de conversiones',
      ],
    },
    {
      Icon: BsGraphUp,
      title: 'Community Manager',
      details: [
        'Gestión de redes sociales',
        'Creación de contenido',
        'Interacción con la audiencia',
        'Monitoreo de métricas',
        'Estrategia de engagement',
      ],
    },
    {
      Icon: MdDesignServices,
      title: 'Edición y Branding',
      details: [
        'Diseño de logos',
        'Creación de banners',
        'Isotipos personalizados',
        'Diseño de identidad corporativa',
        'Animaciones básicas',
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="py-16 bg-black text-white min-h-screen flex flex-col items-center">
        <div className="container mx-auto px-6 lg:px-12 mt-16 text-center">
          <h2 className="text-5xl font-extrabold text-cyan-400 tracking-widest mb-6 animate-pulse">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Exploramos nuevas fronteras digitales con diseños innovadores,
            tecnología de punta y estrategias personalizadas para potenciar tu
            negocio en línea.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12" data-aos="fade-up">
            {techIcons.map((Icon, index) => (
              <Icon
                key={index}
                size={50}
                className={`text-cyan-300 hover:text-pink-400 ${neonGlow}`}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${neonGlow} bg-gray-900 transform transition-transform hover:scale-105`}
                data-aos="zoom-in-up"
                onClick={() => setActiveTab(index + 1)}
              >
                <service.Icon size={40} className="mb-4 text-cyan-300" />
                <h3 className="text-2xl font-bold text-pink-400 mb-4">
                  {service.title}
                </h3>
                <ul className="list-disc list-inside text-gray-300 text-sm">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                <button className="mt-4 px-4 py-2 bg-pink-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition-all">
                  ¡Consigue este servicio!
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

         {/* CTA Final Modificado */}
      <section className="py-16 md:py-20 text-white px-6"
      style={{ backgroundImage: "url('/conectamos.png')", backgroundSize: 'cover' }}>
        <div className="md:flex md:justify-end"> {/* Contenedor para alinear a la derecha en pantallas medianas y mayores */}
          <div className="text-center md:text-left md:mr-22"> {/* Reducido el margen izquierdo a 8 */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Conectamos marcas con personas
            </h2>
            <p className="text-lg md:text-xl mb-6 leading-relaxed" style={{ color: '#ff00ff' }}> {/* Color fucsia */}
              Estamos listos para llevar tu negocio al siguiente nivel. ¡Hablemos!
            </p>
            <motion.a
              href="https://wa.me/5491234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-500 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaWhatsapp className="mr-2 text-xl" /> {/* Icono de WhatsApp a la izquierda */}
              Contáctanos por WhatsApp {/* Texto verde */}
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Servicios;