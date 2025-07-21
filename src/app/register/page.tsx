'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
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
        'http://localhost:3001/auth/register',
        formData,
        {
          withCredentials: true,
        },
      );

      router.push('/login');
    } catch (err: any) {
      const message = err.response?.data?.message || 'Error en el registro';
      setError(message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="max-w-md p-8 bg-gray-800 text-white rounded-lg shadow-lg border border-purple-500">
          <h2 className="text-2xl mb-4 text-purple-400">Registro</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              className="w-full p-2 mb-4 bg-gray-700 border border-purple-500 rounded"
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-2 mb-4 bg-gray-700 border border-purple-500 rounded"
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-2 mb-4 bg-gray-700 border border-purple-500 rounded"
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Registrarse
            </button>
          </form>

          {/* Opción para iniciar sesión con Google (redirige a login) */}
          <div className="mt-4 text-center">
            <p className="mb-2">¿Ya tienes cuenta?</p>
            <button
              onClick={() => router.push('/login')}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
            >
              Inicia sesión aquí
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}