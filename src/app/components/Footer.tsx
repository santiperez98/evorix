'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaRobot } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import image1 from '../../../public/TEXT LOGO.jpg';

interface Shape {
  width: string;
  height: string;
  top: string;
  left: string;
  opacity: number;
  key: number;
}

const Footer = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const logoControls = useAnimation();

  useEffect(() => {
    const generateShapes = () => {
      return [...Array(12)].map((_, i) => ({
        width: `${Math.random() * 4 + 2}rem`,
        height: `${Math.random() * 4 + 2}rem`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.3 + 0.1,
        key: i,
      }));
    };
    setShapes(generateShapes());

    logoControls.start({
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    });
  }, [logoControls]);

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Borde superior invertido */}
      <div className="absolute top-0 left-0 w-full h-40">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-900 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500 via-purple-600 via-magenta-500 to-transparent rounded-t-[50%] transform scale-y-[-1] origin-top"></div>
      </div>

      {/* Sistema de partículas animadas */}
      <div className="absolute inset-0">
        {shapes.map((shape) => (
          <motion.div
            key={shape.key}
            className="absolute bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500 rounded-full blur-lg"
            style={{
              width: shape.width,
              height: shape.height,
              top: shape.top,
              left: shape.left,
              opacity: shape.opacity,
            }}
            animate={{
              y: [0, Math.random() * 20 - 10, 0],
              x: [0, Math.random() * 20 - 10, 0],
              transition: { duration: Math.random() * 3 + 2, repeat: Infinity },
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        {/* Logo en la izquierda */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            <Image
              src={image1}
              alt="Logo"
              width={280}
              height={80}
              className="relative z-10"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500 
              rounded-lg opacity-30 blur-3xl filter transition-all duration-500"
              layoutId="footer-logo-glow"
            />
          </div>
        </motion.div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Navegación */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-600">
              Navegación
            </h3>
            <div className="flex flex-col space-y-2">
              {[
                { name: 'Inicio', path: '/' },
                { name: 'Nosotros', path: '/nosotros' },
                { name: 'Servicios', path: '/servicios' },
                { name: 'Contacto', path: '/contacto' },
                { name: 'Clientes', path: '/clientes' },
              ].map(({ name, path }) => (
                <motion.div
                  key={name}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={path}
                    className="text-gray-300 hover:text-white transition duration-500 relative z-10"
                  >
                    {name}
                  </Link>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Columna 2: Redes sociales */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-600">
              Conecta con nosotros
            </h3>
            <div className="flex space-x-6">
              {[FaFacebook, FaInstagram, FaTwitter, FaRobot].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-2xl text-gray-300 hover:text-white transition duration-300 relative"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500 
                    rounded-full opacity-0 group-hover:opacity-30 blur-md transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Columna 3: Contacto */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-600">
              Asistencia 24/7
            </h3>
            <div className="flex items-center space-x-3 text-gray-300">
              <FaRobot className="text-3xl text-cyan-500 animate-pulse" />
              <div>
                <p className="text-sm">Chatbot disponible</p>
                <p className="font-mono text-cyan-400">Escribir ahora →</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-sm">Soporte Email</p>
                <p className="font-mono text-purple-400">soporte@evorix.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Texto de derechos */}
        <motion.p
          className="text-center mt-12 text-gray-400 text-sm relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          &copy; 2024 Evorix. Todos los derechos reservados.
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500 
            bg-clip-text text-transparent opacity-30 blur-sm" 
            style={{ filter: 'blur(2px)' }} >
            &copy; 2024 Evorix. Todos los derechos reservados.
          </span>
        </motion.p>
      </div>

   
    </footer>
  );
};

export default Footer;