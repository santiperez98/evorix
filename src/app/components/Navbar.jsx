"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../public/TEXT LOGO.png';
import userImage from '../../../public/user.png';

const neonColors = {
  cyan: 'from-cyan-500 via-cyan-600 to-cyan-700',
  purple: 'from-purple-500 via-purple-600 to-purple-700',
  magenta: 'from-magenta-500 via-magenta-600 to-magenta-700',
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [scroll, setScroll] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    const storedUser = JSON.parse(localStorage.getItem('user'));
    storedUser && setUser(storedUser);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    router.push('/login');
  };

  return (
    <motion.nav
      className={`w-full absolute top-0 z-50 transition-all duration-500`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo con efecto neon */}
        <Link href="/">
          <motion.div 
            className="relative flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image 
              src={logo}
              alt="Logo"
              width={150}
              height={70}
              className="relative z-10"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500 
              rounded-lg opacity-30 blur-lg filter transition-all duration-500"
              layoutId="neon-glow"
            />
          </motion.div>
        </Link>

        {/* Menú Desktop con efectos holográficos */}
        <div className="hidden md:flex space-x-6 items-center">
          {['Nosotros', 'Servicios', 'Contacto', 'Clientes'].map((item) => (
            <motion.div 
              key={item}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link 
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white text-lg font-medium relative z-10"
              >
                {item}
              </Link>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500 
                opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300" />
            </motion.div>
          ))}

          {/* Botones de autenticación con efecto cyberpunk */}
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image 
                  src={userImage}
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-cyan-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500 
                  rounded-full opacity-50 blur-md" />
              </div>
              <button 
                onClick={handleLogout}
                className="px-5 py-2 bg-gradient-to-r from-red-600 to-red-800 
                hover:bg-gradient-to-l text-white rounded-full shadow-lg 
                hover:shadow-red-500/50 transition-all duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link href="/login">
                <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-800 
                  hover:bg-gradient-to-l text-white rounded-full shadow-lg 
                  hover:shadow-blue-500/50 transition-all duration-300">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="px-5 py-2 bg-gradient-to-r from-green-600 to-green-800 
                  hover:bg-gradient-to-l text-white rounded-full shadow-lg 
                  hover:shadow-green-500/50 transition-all duration-300">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Menú Móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative text-white p-2 rounded-lg transition-all duration-300 
            hover:bg-gray-800/50"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              {isOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                  className="stroke-white"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                  className="stroke-white"
                />
              )}
            </svg>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500 
              rounded-lg opacity-30 blur-md"
              layoutId="mobile-menu-glow"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>

      {/* Menú Móvil Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="md:hidden mt-4 space-y-4 bg-gray-900 bg-opacity-90 
            backdrop-blur-lg rounded-lg p-6 shadow-xl"
          >
            {['Sobre Nosotros', 'Servicios', 'Contacto', 'Clientes'].map((item) => (
              <motion.div 
                key={item}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-white text-lg font-medium relative z-10"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;