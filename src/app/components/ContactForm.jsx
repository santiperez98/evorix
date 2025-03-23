"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const ContactForm = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_USER_ID")
      .then(
        () => {
          setIsSuccess(true);
          setIsError(false);
          form.current.reset();
        },
        () => {
          setIsError(true);
          setIsSuccess(false);
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col lg:flex-row justify-between items-center p-12 bg-gradient-to-r from-black via-gray-900 to-black rounded-xl shadow-2xl text-white"
    >
      {/* Sección de información */}
      <div className="lg:w-1/2 text-left space-y-6">
        <h2 className="text-5xl font-bold text-cyan-400">CONECTAMOS</h2>
        <p className="text-lg text-gray-300">Envíanos tu consulta.</p>
        <p className="text-lg">
          Podés completar el siguiente formulario o escribirnos a{" "}
          <span className="font-bold text-cyan-300">contacto@azafran.agency</span>
        </p>

        {/* Redes sociales */}
        <div className="flex items-center space-x-6">
          <p className="font-bold text-xl text-pink-500">SEGUINOS</p>
          <a href="https://instagram.com/tu_cuenta" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-400 cursor-pointer transition" />
          </a>
          <a href="https://linkedin.com/in/tu_perfil" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-400 cursor-pointer transition" />
          </a>
          <a href="https://tiktok.com/@tu_cuenta" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-2xl hover:text-white cursor-pointer transition" />
          </a>
        </div>
      </div>

      {/* Formulario */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="lg:w-1/2 space-y-6 bg-gray-900 p-8 rounded-lg shadow-xl border border-cyan-400"
      >
        <div className="flex flex-col">
          <label className="text-lg text-gray-200">Nombre *</label>
          <input
            type="text"
            name="user_name"
            required
            className="p-3 mt-1 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-cyan-400 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg text-gray-200">Nombre de la compañía</label>
          <input
            type="text"
            name="company_name"
            className="p-3 mt-1 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-cyan-400 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg text-gray-200">Teléfono</label>
          <input
            type="tel"
            name="user_phone"
            className="p-3 mt-1 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-cyan-400 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg text-gray-200">E-mail *</label>
          <input
            type="email"
            name="user_email"
            required
            className="p-3 mt-1 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-cyan-400 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg text-gray-200">Comentario</label>
          <textarea
            name="message"
            className="p-3 mt-1 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-cyan-400 text-white h-24 resize-none"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.05, backgroundColor: "#00FFFF" }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-6 py-3 bg-cyan-500 rounded shadow-lg text-lg font-semibold hover:bg-cyan-600 transition-colors text-black"
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </motion.button>

        {isSuccess && <p className="mt-4 text-center text-green-400">¡Mensaje enviado con éxito! 🚀</p>}
        {isError && <p className="mt-4 text-center text-red-400">Error al enviar el mensaje ❌</p>}
      </form>
    </motion.div>
  );
};

export default ContactForm;