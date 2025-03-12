'use client'
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_USER_ID'
      )
      .then(
        (result) => {
          setMessageStatus('Mensaje enviado con éxito');
          form.current.reset();
        },
        (error) => {
          setMessageStatus('Error al enviar el mensaje');
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center p-8 bg-gradient-to-r from-teal-500 to-teal-700 rounded-lg shadow-lg text-white"
    >
      <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
      <p className="text-center mb-8">
        Completa el formulario y nos pondremos en contacto contigo.
      </p>

      <form ref={form} onSubmit={sendEmail} className="w-full max-w-md space-y-6">
        <div className="flex flex-col">
          <label className="text-lg">Nombre</label>
          <input
            type="text"
            name="user_name"
            required
            className="p-2 mt-1 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="p-2 mt-1 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg">Mensaje</label>
          <textarea
            name="message"
            required
            className="p-2 mt-1 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-teal-400 h-32 resize-none"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-teal-500 rounded shadow-lg text-lg font-semibold hover:bg-teal-600 transition-colors"
        >
          Enviar
        </motion.button>

        {messageStatus && (
          <p className="mt-4 text-center text-teal-300">{messageStatus}</p>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
