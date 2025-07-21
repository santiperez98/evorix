'use client';

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

// Tipado del formulario
interface EmailJsForm extends HTMLFormElement {
  user_name: HTMLInputElement;
  company_name: HTMLInputElement;
  user_phone: HTMLInputElement;
  user_email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const ContactForm = () => {
  const form = useRef<EmailJsForm | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!form.current) return;

    emailjs
      .sendForm('service_2tagqhn', 'template_dakwjpf', form.current, 'QmOlOePyPj5BKGDqE')
      .then(() => {
        setIsSuccess(true);
        setIsError(false);
        if (form.current) {
          form.current.reset();
        }
      })
      .catch(() => {
        setIsError(true);
        setIsSuccess(false);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row justify-between items-center p-6 sm:p-8 bg-gradient-to-r from-black via-gray-900 to-black rounded-xl shadow-2xl text-white"
    >
      {/* Sección de información */}
      <div className="md:w-1/2 text-left space-y-6 mb-8 md:mb-0">
        <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400">CONECTAMOS</h2>
        <p className="text-base sm:text-lg text-gray-300">Envíanos tu consulta.</p>
        <p className="text-sm sm:text-base">
          Podés completar el siguiente formulario o escribirnos a{' '}
          <span className="font-bold text-cyan-300">evorix.contacto@gmail.com</span>
        </p>

        {/* Redes sociales */}
        <div className="flex items-center space-x-4 mt-6">
          <p className="font-bold text-lg sm:text-xl text-pink-500">SEGUINOS</p>
          <a href="https://instagram.com/tu_cuenta " target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl sm:text-2xl hover:text-pink-400 cursor-pointer transition" />
          </a>
          <a href="https://linkedin.com/in/tu_perfil " target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl sm:text-2xl hover:text-blue-400 cursor-pointer transition" />
          </a>
          <a href="https://facebook.com/tu_pagina " target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl sm:text-2xl hover:text-indigo-400 cursor-pointer transition" />
          </a>
        </div>

{/* Botón de WhatsApp */}
<div className="mt-6">
  <a
    href="https://wa.me/542604609798 "
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg inline-block transition duration-300 flex items-center space-x-2"
  >
    {/* Icono de WhatsApp */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M20 8A12 12 0 1 0 4 16a12 12 0 0 0 16-8zm-2 10H6V10h12v6z" />
    </svg>
    {/* Texto del botón */}
    <span>Enviar mensaje por WhatsApp</span>
  </a>
</div>
      </div>

      {/* Formulario */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="md:w-1/2 w-full space-y-6 bg-gray-900 p-6 sm:p-8 rounded-lg shadow-xl border border-cyan-400"
      >
        <div className="flex flex-col">
          <label className="text-base sm:text-lg text-gray-200">Nombre *</label>
          <input
            type="text"
            name="user_name"
            required
            className="p-3 mt-1 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-cyan-400 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-base sm:text-lg text-gray-200">Nombre de la compañía</label>
          <input
            type="text"
            name="company_name"
            className="p-3 mt-1 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-cyan-400 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-base sm:text-lg text-gray-200">Teléfono</label>
          <input
            type="tel"
            name="user_phone"
            className="p-3 mt-1 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-cyan-400 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-base sm:text-lg text-gray-200">E-mail *</label>
          <input
            type="email"
            name="user_email"
            required
            className="p-3 mt-1 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-cyan-400 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-base sm:text-lg text-gray-200">Comentario</label>
          <textarea
            name="message"
            className="p-3 mt-1 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-cyan-400 text-white h-24 resize-none"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.05, backgroundColor: '#00FFFF' }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-6 py-3 bg-cyan-500 rounded shadow-lg text-base sm:text-lg font-semibold hover:bg-cyan-600 transition-colors text-black"
        >
          {isLoading ? 'Enviando...' : 'Enviar'}
        </motion.button>

        {isSuccess && (
          <p className="mt-4 text-center text-green-400">¡Mensaje enviado con éxito! 🚀</p>
        )}
        {isError && (
          <p className="mt-4 text-center text-red-400">Error al enviar el mensaje ❌</p>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;