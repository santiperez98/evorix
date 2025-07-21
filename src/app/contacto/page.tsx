import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 mt-8">
          {/* Formulario de Contacto */}
          <div className="bg-gray-900 p-6 sm:p-8 rounded-xl shadow-2xl border border-cyan-400 mb-12">
            <ContactForm />
          </div>

          {/* Medios de Contacto */}
          <div className="text-center text-gray-300">
            <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-4">
              Otros Medios de Contacto
            </h3>
            <p className="mb-8 text-sm sm:text-base max-w-xl mx-auto">
              Puedes comunicarte con nosotros a través de los siguientes canales:
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 items-center mb-8">
              <div className="flex items-center gap-3 text-left">
                <FaPhone size={24} className="text-cyan-400 flex-shrink-0" />
                <span className="text-base sm:text-lg">+54 2604 609798</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <FaEnvelope size={24} className="text-cyan-400 flex-shrink-0" />
                <span className="text-base sm:text-lg">evorix.contacto@gmail.com</span>
              </div>
            </div>


          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;