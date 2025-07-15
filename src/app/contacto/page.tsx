import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React from 'react'; // ¡Importante para usar JSX en TypeScript!

const ContactPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-6 lg:px-12 mt-16">
          {/* Formulario de Contacto */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-cyan-400 mb-12">
            <ContactForm />
          </div>

          {/* Medios de Contacto */}
          <div className="text-center text-gray-300">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Otros Medios de Contacto</h3>
            <p className="mb-8">Puedes comunicarte con nosotros a través de los siguientes canales:</p>

            <div className="flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <FaPhone size={30} className="text-cyan-400" />
                <span className="text-lg">+54 2604 609798</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope size={30} className="text-cyan-400" />
                <span className="text-lg">evorix.contacto@gmail.com</span>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://facebook.com/tu_cuenta" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-cyan-400 hover:text-cyan-300 cursor-pointer transition" />
              </a>
              <a href="https://instagram.com/tu_cuenta" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-cyan-400 hover:text-cyan-300 cursor-pointer transition" />
              </a>
              <a href="https://linkedin.com/in/tu_perfil" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-cyan-400 hover:text-cyan-300 cursor-pointer transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;