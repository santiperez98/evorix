'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import logo from '../../../public/TEXT LOGO.png';
import userImage from '../../../public/user.webp'; // Default user image

interface User {
  id: string;
  name?: string;
  email: string;
  picture?: string;
  role?: 'admin' | 'user';
  provider?: string;
}

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (e) {
        console.error('Error parsing stored user:', e);
      }
    }

    if (!token) {
      setUser(null);
      localStorage.removeItem('user');
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch('http://localhost:3001/users/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data);
          localStorage.setItem('user', JSON.stringify(data));
        } else {
          setUser(null);
          localStorage.removeItem('user');
          localStorage.removeItem('access_token');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        setUser(null);
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    setUser(null);
    router.push('/login');
  };

  const navItems = ['Nosotros', 'Servicios', 'Contacto'];
  if (user) navItems.push('Clientes');

  const UserDropdown = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    return (
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
        >
          {user ? (
            <>
              <span>{user.name || 'Cuenta'}</span>
              <div className="w-6 h-6 relative">
                <Image
                  src={user.picture || userImage}
                  alt="Avatar"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </>
          ) : (
            <>
              <span>Cuenta</span>
              <div className="w-6 h-6 relative">
                <Image
                  src={userImage}
                  alt="Avatar"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </>
          )}
        </button>

        {isDropdownOpen && (
          <>
            <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl z-50 animate-fadeIn">
              <ul className="py-2">
                {user ? (
                  <li>
                    <button
                      onClick={() => {
                        handleLogout();
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition"
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link href="/login">
                        <button
                          onClick={() => setDropdownOpen(false)}
                          className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition"
                        >
                          Login
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href="/register">
                        <button
                          onClick={() => setDropdownOpen(false)}
                          className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition"
                        >
                          Register
                        </button>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div
              className="fixed inset-0 z-40 bg-transparent"
              onClick={() => setDropdownOpen(false)}
            />
          </>
        )}
      </div>
    );
  };

  return (
    <motion.nav className="w-full absolute top-0 left-0 z-50 bg-transparent backdrop-blur-none transition-all duration-500">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <motion.div
            className="relative flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src={logo}
              alt="Logo"
              width={120}
              height={50}
              className="relative z-10"
            />
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
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
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-20 blur-lg transition" />
            </motion.div>
          ))}

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
                className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full shadow-lg hover:shadow-red-500/50 transition-all duration-300 text-sm sm:text-base"
              >
                Logout
              </button>
            </div>
          ) : (
            <UserDropdown />
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 rounded-lg hover:bg-gray-800/50 transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="md:hidden mt-4 space-y-4 bg-gray-900/90 backdrop-blur-lg rounded-lg p-6 shadow-xl"
          >
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setIsOpen(false)}
                className="block text-white text-lg font-medium text-center"
              >
                {item}
              </Link>
            ))}

            {user?.role === 'admin' && (
              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="block text-white text-lg font-medium text-center"
              >
                Dashboard
              </Link>
            )}

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
                <span className="text-white font-medium">{user.name}</span>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full shadow-lg hover:shadow-red-500/50 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-4">
                <Link href="/login">
                  <button
                    className="w-full px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full shadow-lg hover:shadow-blue-500/50 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button
                    className="w-full px-5 py-2 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full shadow-lg hover:shadow-green-500/50 transition"
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