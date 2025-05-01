'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../public/TEXT LOGO.png';
import userImage from '../../../public/user.png';

// Tipado del usuario
interface User {
  name?: string;
  picture?: string;
  role?: 'admin' | 'user' | string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/auth/me', {
          method: 'GET',
          credentials: 'include',
        });

        if (res.ok) {
          const data: User = await res.json();
          setUser(data);
        }
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:3001/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });

      setUser(null);
      router.push('/login');
      router.refresh();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const navItems: string[] = ['Nosotros', 'Servicios', 'Contacto', 'Clientes'];

  return (
    <motion.nav className="w-full absolute z-50 bg-transparent backdrop-blur-none transition-all duration-500">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
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
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500
                  rounded-lg opacity-30 blur-lg"
              layoutId="neon-glow"
            />
          </motion.div>
        </Link>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
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
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500
                    opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300"
              />
            </motion.div>
          ))}

          {/* Dashboard Admin */}
          {user?.role === 'admin' && (
            <motion.div className="relative group">
              <Link
                href="/dashboard"
                className="text-white text-lg font-medium relative z-10"
              >
                Dashboard
              </Link>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          )}

          {/* Auth Desktop */}
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="relative w-10 h-10">
                <Image
                  src={user.picture || userImage}
                  alt="User"
                  fill
                  className="rounded-full border-2 border-cyan-500 object-cover"
                />
              </div>
              <span className="text-white font-medium hidden sm:inline">
                {user.name || 'Usuario'}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-red-800
                    hover:bg-gradient-to-l text-white rounded-full shadow-lg
                    hover:shadow-red-500/50 transition-all duration-300 text-sm sm:text-base"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link href="/login">
                <button
                  className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-800
                      hover:bg-gradient-to-l text-white rounded-full shadow-lg
                      hover:shadow-blue-500/50 transition-all duration-300"
                >
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button
                  className="px-5 py-2 bg-gradient-to-r from-green-600 to-green-800
                      hover:bg-gradient-to-l text-white rounded-full shadow-lg
                      hover:shadow-green-500/50 transition-all duration-300"
                >
                  Register
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
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
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="md:hidden mt-4 space-y-4 bg-gray-900/90
                  backdrop-blur-lg rounded-lg p-6 shadow-xl"
          >
            {navItems.map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.05 }}>
                <Link
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-white text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}

            {user?.role === 'admin' && (
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/dashboard"
                  className="block text-white text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              </motion.div>
            )}

            {/* Auth Mobile */}
            {user ? (
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={user.picture || userImage}
                    alt="User"
                    fill
                    className="rounded-full border-2 border-cyan-500 object-cover"
                  />
                </div>
                <span className="text-white font-medium">{user.name || 'Usuario'}</span>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 bg-gradient-to-r from-red-600 to-red-800
                      hover:bg-gradient-to-l text-white rounded-full shadow-lg
                      hover:shadow-red-500/50 transition-all duration-300 text-lg"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-4">
                <Link href="/login">
                  <button
                    className="w-full px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-800
                        hover:bg-gradient-to-l text-white rounded-full shadow-lg
                        hover:shadow-blue-500/50 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button
                    className="w-full px-5 py-2 bg-gradient-to-r from-green-600 to-green-800
                        hover:bg-gradient-to-l text-white rounded-full shadow-lg
                        hover:shadow-green-500/50 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </button>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;