'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios, { AxiosResponse } from 'axios';
import Navbar from '../components/Navbar';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode, { JwtPayload } from 'jwt-decode';

// Define la estructura del formulario
interface FormData {
  email: string;
  password: string;
}

// Define la estructura de la respuesta de inicio de sesión
interface LoginResponseData {
  token: string;
  role: 'admin' | 'user';
  user: any; // Puedes definir una interfaz más específica para el usuario si lo deseas
}

// Define la estructura de la respuesta de inicio de sesión con Google
interface GoogleLoginResponseData {
  user: any; // Puedes definir una interfaz más específica para el usuario de Google
}

// Define la estructura de la carga útil del token JWT de Google (ajusta según tu caso)
interface GoogleJwtPayload extends JwtPayload {
  name?: string;
  email?: string;
  // Añade otras propiedades que esperes del token de Google
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
      const response: AxiosResponse<LoginResponseData> = await axios.post(
        'http://localhost:3001/api/auth/login',
        formData,
        {
          withCredentials: true,
        }
      );

      const { role, user } = response.data;

      localStorage.setItem('role', role);
      localStorage.setItem('user', JSON.stringify(user));

      router.push(role === 'admin' ? '/dashboard' : '/');
    } catch (err: any) {
      console.error('Error en el login:', err.response?.data || err.message);
      setError('Credenciales inválidas.');
    }
  };

  const handleGoogleSuccess = async (credentialResponse: any) => { // Mantenemos 'any' por ahora
    console.log('credentialResponse:', credentialResponse);

    try {
      const credential = credentialResponse?.credential;
      if (credential) {
        const decoded: GoogleJwtPayload = jwtDecode(credential);
        const name = decoded?.name;
        const email = decoded?.email;

        if (name && email) {
          const response: AxiosResponse<GoogleLoginResponseData> = await axios.post(
            'http://localhost:3001/api/auth/google',
            { name, email },
            { withCredentials: true }
          );

          localStorage.setItem('user', JSON.stringify(response.data.user));
          router.push('/');
        } else {
          console.error('No se encontraron nombre o email en el token de Google.');
          setError('Error al obtener información de Google.');
        }
      } else {
        console.error('No se recibió credencial de Google.');
        setError('Error al iniciar sesión con Google.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
      setError('Error al iniciar sesión con Google.');
    }
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

          <div className="mt-4 text-center">
            <p className="mb-2">O inicia sesión con:</p>
            <GoogleLogin
              onSuccess={(credentialResponse) => handleGoogleSuccess(credentialResponse)}
              onError={() => console.log('Error en login con Google')}
            />
          </div>
        </div>
      </div>
    </>
  );
}