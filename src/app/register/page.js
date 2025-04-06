"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
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
      await axios.post("http://localhost:3001/api/auth/register", formData, {
        withCredentials: true,
      });
      router.push("/login");
    } catch (err) {
      console.error("Error en el registro:", err.response?.data || err.message);
      setError(err.response?.data?.msg || "Error en el registro.");
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const { name, email } = decoded;

      const response = await axios.post(
        "http://localhost:3001/api/auth/google",
        { name, email },
        { withCredentials: true }
      );

      localStorage.setItem("user", JSON.stringify(response.data.user));
      router.push("/");
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
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

        <div className="mt-4 text-center">
          <p className="mb-2">O registrate con:</p>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => console.log("Error en login con Google")}
          />
        </div>
      </div>
    </div>
  );
}
