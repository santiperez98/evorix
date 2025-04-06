'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const RegisterForm = () => {
  const [form, setForm] = useState({ nombre: '', email: '', password: '', rol: 'usuario' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/usuarios', form, {withCredentials: true});
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error al registrar.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Registro</h2>
      {message && <p className="mb-4 text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />
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
        <select
          name="rol"
          value={form.rol}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="usuario">Usuario</option>
          <option value="cliente">Cliente</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Registrar
        </button>
      </form>
    </motion.div>
  );
};

export default RegisterForm;
