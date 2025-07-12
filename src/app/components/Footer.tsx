'use client';

import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaRobot, FaWhatsapp } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import image1 from '../../../public/TEXT LOGO.webp';

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
      return [...Array(15)].map((_, i) => ({
        width: `${Math.random() * 3 + 2}rem`,
        height: `${Math.random() * 3 + 2}rem`,
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
      {/* Partículas */}
      <div className="absolute inset-0">
        {shapes.map((shape) => (
          <motion.div
            key={shape.key}
            className="absolute bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-full blur-2xl"
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

      <div className="container mx-auto px-4 py-12 relative z-10 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Logo */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={image1}
            alt="Logo"
            width={220}
            height={60}
            className="relative z-10"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-lg opacity-30 blur-3xl filter"
            layoutId="footer-logo-glow"
          />
        </motion.div>

        {/* Redes actualizadas */}
<div className="flex space-x-6">
  <motion.a
    href="#"
    className="text-2xl text-gray-300 hover:text-white transition duration-300 relative"
    whileHover={{ scale: 1.3 }}
    whileTap={{ scale: 0.9 }}
  >
    <FaFacebook />
  </motion.a>

  <motion.a
    href="#"
    className="text-2xl text-gray-300 hover:text-white transition duration-300 relative"
    whileHover={{ scale: 1.3 }}
    whileTap={{ scale: 0.9 }}
  >
    <FaInstagram />
  </motion.a>

  <motion.a
    href="#"
    className="text-2xl text-gray-300 hover:text-white transition duration-300 relative"
    whileHover={{ scale: 1.3 }}
    whileTap={{ scale: 0.9 }}
  >
    <FaLinkedin />
  </motion.a>

  {/* X icon SVG */}
  <motion.a
    href="#"
    className="text-gray-300 hover:text-white transition duration-300 relative"
    whileHover={{ scale: 1.3 }}
    whileTap={{ scale: 0.9 }}
    aria-label="X"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 1200 1227"
      className="w-6 h-6"
    >
      <path d="M1175 109.6c15.1-19.9 19.1-45.7 10.8-69.2-8.3-23.5-27.4-41.4-51.2-48.6-23.9-7.2-49.5-2.6-69.5 12.5L720 309.7 402.7 4.6c-20-15.2-45.7-19.2-69.6-10.9-23.8 8.3-41.7 27.4-48.9 51.2-7.2 23.9-2.6 49.5 12.5 69.4L480.6 400 42.5 868c-15.1 19.8-19.1 45.6-10.8 69.1 8.3 23.5 27.4 41.4 51.2 48.6 23.9 7.2 49.5 2.6 69.5-12.5L720 509.2l317.3 305.1c20 15.1 45.7 19.1 69.6 10.8 23.8-8.3 41.7-27.3 48.9-51.1 7.2-23.8 2.6-49.5-12.5-69.4L919.4 400l255.6-290.4z" />
    </svg>
  </motion.a>
</div>

        {/* Soporte */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-3 text-gray-300">
            <FaRobot className="text-3xl text-cyan-500 animate-pulse" />
            <div>
              <p className="text-sm">Chatbot disponible</p>
              <p className="font-mono text-cyan-400">24/7 Online</p>
            </div>
          </div>
          <a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full shadow hover:shadow-lg transition-all duration-300"
          >
            <FaWhatsapp className="mr-2 text-xl" /> Hablar con un asesor
          </a>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="container mx-auto px-4 pb-6 mt-8 text-center relative z-10">
        <p className="text-gray-500 text-xs">
          &copy; 2025 Evorix. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
