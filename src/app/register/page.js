"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "", // Corregido: el backend espera "name" en lugar de "username"
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
      const response = await axios.post("http://localhost:3001/api/auth/register", formData);
      console.log("Respuesta del backend:", response.data);
      router.push("/login"); // Mejor usar router.push en Next.js
    } catch (err) {
      console.error("Error en la solicitud:", err.response ? err.response.data : err.message);
      setError(err.response?.data?.msg || "Error en el registro. Verifica los datos ingresados.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="max-w-md p-8 bg-gray-800 text-white rounded-lg shadow-lg border border-purple-500">
        <h2 className="text-2xl mb-4 text-purple-400">Registro</h2>
        {error && <p className="text-red-500">{error}</p>}
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
      </div>
    </div>
  );
}
