'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios, { AxiosResponse } from 'axios';
import Navbar from '../components/Navbar';

// Interfaces
interface FormData {
  email: string;
  password: string;
}

interface LoginResponseData {
  token: string;
  role: 'admin' | 'user';
  user: any;
}

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      'http://localhost:3001/auth/login',
      formData
    );

    // backend responde { access_token, user }
    const { access_token, user } = response.data;
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('user', JSON.stringify(user));

    router.push(user.role === 'admin' ? '/dashboard' : '/');
  } catch (err: any) {
    console.error('Error en el login:', err.response?.data || err.message);
    setError('Credenciales inválidas.');
  }
};


  // Nueva función para Google
const handleGoogleLogin = () => {
  window.location.href = 'http://localhost:3001/auth/google';
};

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="max-w-md p-8 bg-gray-800 text-white rounded-lg shadow-lg border border-cyan-500">
          <h2 className="text-2xl mb-4 text-cyan-400">Login</h2>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              className="w-full p-2 mb-4 bg-gray-800 border border-cyan-500 rounded"
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-2 mb-4 bg-gray-800 border border-cyan-500 rounded"
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
            >
              Iniciar sesión
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="mb-2">O inicia sesión con Google:</p>
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Continuar con Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
