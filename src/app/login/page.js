"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', formData);
      const { token, role } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      if (role === "admin") {
        router.push('/dashboard');
      } else {
        router.push('/');
      }
    } catch (err) {
      console.error("Error en el login:", err.response?.data || err.message);
      setError('Credenciales inválidas.');
    }
  };

  return (
    <>
    <Navbar/>
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
      </div>
    </div>
    </>
  );
}
