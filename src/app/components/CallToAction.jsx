'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import image1 from '../../../public/mundo.png';

const CallToAction = () => {
  const router = useRouter();
  const logoControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Animación inicial
      await logoControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1, delay: 0.3 }
      });
      
      // Animación de pulso continua
      logoControls.start({
        scale: [1, 1.05, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }
      });
    };
    sequence();
  }, [logoControls]);

  return (
    <section className="relative py-20 overflow-hidden text-center bg-gray-900">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500 rounded-b-[50%]"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Logo con animación de pulso */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={logoControls}
          className="mb-8"
        >
          <Image 
            src={image1}
            alt="Logo"
            width={280}
            height={80}
            className="mx-auto"
          />
        </motion.div>

        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Lleve su sitio web al siguiente <span className="text-cyan-300">¡nivel ahora mismo!</span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Tome la decisión correcta para su futuro. ¡Elige nuestro servicio!
        </motion.p>

        {/* Botón centrado */}
        <motion.button 
          whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px rgba(0, 255, 255, 0.8)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/contacto')}
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 shadow-lg mx-auto block"
        >
          Comenzar <FaArrowRight />
        </motion.button>
      </div>
      

    </section>
  );
};

export default CallToAction;