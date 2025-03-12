'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../public/TEXT LOGO.png';
import userImage from '../../../public/user.png';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
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
    <>
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 shadow-md
          ${scroll ? 'bg-gray-900 bg-opacity-90 backdrop-blur-lg' : 'bg-transparent'}
        `}
      >
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Logo" width={150} height={70} className="relative z-10" />
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-6 items-center">
            {['Sobre Nosotros', 'Servicios', 'Contacto', 'Clientes'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white text-lg font-medium hover:text-cyan-400 transition duration-300"
              >
                {item}
              </Link>
            ))}

            {/* Autenticación */}
            {user ? (
              <div className="flex items-center space-x-4">
                <Image src={userImage} alt="User" width={40} height={40} className="rounded-full border-2 border-cyan-500" />
                <button
                  onClick={handleLogout}
                  className="px-5 py-2 bg-red-600 hover:bg-red-800 text-white rounded-full transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <button className="px-5 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded-full transition duration-300">
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button className="px-5 py-2 bg-green-600 hover:bg-green-800 text-white rounded-full transition duration-300">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Botón Menú Móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg transition duration-300 hover:bg-gray-800/50"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Menú Móvil */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-gray-900 bg-opacity-90 backdrop-blur-lg p-6"
          >
            {['Sobre Nosotros', 'Servicios', 'Contacto', 'Clientes'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block text-white text-lg font-medium py-2 hover:text-cyan-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}

            {/* Autenticación en móvil */}
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full mt-4 px-5 py-2 bg-red-600 hover:bg-red-800 text-white rounded-full transition duration-300"
              >
                Logout
              </button>
            ) : (
              <>
                <Link href="/login">
                  <button className="w-full mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded-full transition duration-300">
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button className="w-full mt-2 px-5 py-2 bg-green-600 hover:bg-green-800 text-white rounded-full transition duration-300">
                    Register
                  </button>
                </Link>
              </>
            )}
          </motion.div>
        )}
      </motion.nav>

      {/* Ajustar el contenido para que no quede tapado por la navbar */}
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;
