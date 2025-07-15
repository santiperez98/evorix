'use client';
import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { motion } from 'framer-motion';

// Definimos el tipo para el estado del formulario
interface LoginFormState {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [form, setForm] = useState<LoginFormState>({ email: '', password: '' });
  const [message, setMessage] = useState<string>('');
  const [isClient, setIsClient] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://evorix-back.onrender.com/login',
        form,
        { withCredentials: true }
      );

      if (response.data.token) {
        setMessage('Inicio de sesión exitoso.');
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        if (isClient) {
          router.push('/');
        }
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Error al iniciar sesión.';
      setMessage(errorMessage);
    }
  };

  if (!isClient) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
      {message && <p className="mb-4 text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
        >
          Iniciar Sesión
        </button>
      </form>
    </motion.div>
  );
};

export default LoginForm;
