'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

// Define la estructura del objeto de usuario que esperas de la API
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user'; // Asume que los roles son 'admin' o 'user'
  // Añade otros campos si tu objeto de usuario tiene más propiedades
}

// Define la estructura de cada tarjeta del dashboard
interface DashboardCard {
  title: string;
  desc: string;
  glow: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    axios
      .get<User>('https://evorix-back.onrender.com/api/auth/me', { withCredentials: true })
      .then((res) => {
        if (res.data.role !== 'admin') {
          router.replace('/'); // redirige sin dejar rastros
        } else {
          setUser(res.data);
        }
      })
      .catch(() => {
        router.replace('/login'); // si no está logueado
      })
      .finally(() => {
        setLoading(false); // termina la carga
      });
  }, [router]);

  const handleLogout = async () => {
    await axios.post('https://evorix-back.onrender.com/api/auth/logout', {}, { withCredentials: true });
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-cyan-400">
        Cargando...
      </div>
    );
  }

  if (!user) return null; // 🔒 Nunca renderiza si no hay usuario

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-cyan-400 font-mono">
      {/* Sidebar */}
      <aside className="w-64 bg-black border-r border-cyan-500 p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-cyan-400 tracking-widest">EVORIX</h1>
        <ul className="space-y-4 text-lg">
          <li className="hover:text-pink-500 transition-all cursor-pointer">Inicio</li>
          <li className="hover:text-pink-500 transition-all cursor-pointer">Servicios</li>
          <li className="hover:text-pink-500 transition-all cursor-pointer">Usuarios</li>
          <li className="hover:text-pink-500 transition-all cursor-pointer">Estadísticas</li>
          <li onClick={handleLogout} className="hover:text-red-500 transition-all cursor-pointer">Salir</li>
        </ul>
      </aside>

      {/* Main */}
      <main className="flex-1 p-10">
        <h2 className="text-4xl mb-8 text-cyan-300">
          Bienvenido{user ? `, ${user.name}` : ''} 🚀
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: '🌐 Desarrollo Web',
              desc: 'Sitios modernos y funcionales para empresas.',
              glow: 'hover:shadow-cyan-500/50',
            },
            {
              title: '📈 SEO & Analytics',
              desc: 'Mejoramos el posicionamiento y visibilidad.',
              glow: 'hover:shadow-pink-500/50',
            },
            {
              title: '🚀 Marketing Digital',
              desc: 'Campañas impactantes que convierten.',
              glow: 'hover:shadow-green-500/50',
            },
            {
              title: '📱 Community Manager',
              desc: 'Gestión de redes con enfoque estratégico.',
              glow: 'hover:shadow-yellow-500/50',
            },
          ].map((card: DashboardCard, index) => (
            <div
              key={index}
              className={`bg-black border border-cyan-500 p-6 rounded-lg shadow-md transition ${card.glow}`}
            >
              <h3 className="text-xl mb-2">{card.title}</h3>
              <p className="text-sm text-cyan-200">{card.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}