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
    href="https://www.facebook.com/evorix.digital/"
    className="text-2xl text-gray-300 hover:text-white transition duration-300 relative"
    whileHover={{ scale: 1.3 }}
    whileTap={{ scale: 0.9 }}
        target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebook />
  </motion.a>

  <motion.a
    href="https://www.instagram.com/evorix.digital/"
    className="text-2xl text-gray-300 hover:text-white transition duration-300 relative"
    whileHover={{ scale: 1.3 }}
    whileTap={{ scale: 0.9 }}
        target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </motion.a>

  <motion.a
    href="https://www.linkedin.com/company/evorix-agencia-digital/"
    className="text-2xl text-gray-300 hover:text-white transition duration-300 relative"
    whileHover={{ scale: 1.3 }}
    whileTap={{ scale: 0.9 }}
        target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
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
            href="https://wa.me/5492604609798"
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
