'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Para redirigir después del login
import axios from 'axios'; // Asegúrate de importar axios
import { motion } from 'framer-motion';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [isClient, setIsClient] = useState(false); // Estado para controlar si estamos en el cliente
  const router = useRouter(); // Usamos el hook de router para redirigir

  // Usamos useEffect para asegurarnos de que solo se ejecute en el cliente
  useEffect(() => {
    setIsClient(true); // Activamos la parte de cliente
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aquí debes ajustar la URL de la API al endpoint correspondiente
      const response = await axios.post('http://localhost:3001/login', form , {withCredentials: true}); // Asegúrate de que la URL sea correcta

      if (response.data.token) {
        setMessage('Inicio de sesión exitoso.');

        // Guardamos el token y los datos del usuario en localStorage
        localStorage.setItem('token', response.data.token); 
        localStorage.setItem('user', JSON.stringify(response.data.user)); // Guardar el usuario

        // Redirigir a una página protegida después del login (por ejemplo, dashboard)
        if (isClient) {
          router.push('/'); // Cambia la URL según tu ruta
        }
      }
    } catch (error) {
      // Si hay un error, mostramos el mensaje de error
      const errorMessage = error.response?.data?.message || 'Error al iniciar sesión.';
      setMessage(errorMessage);
    }
  };

  if (!isClient) {
    return null; // O puedes mostrar un loading, etc., mientras se monta en el cliente
  }

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
